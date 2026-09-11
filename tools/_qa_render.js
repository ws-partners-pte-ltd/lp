// lp_qa.py から呼ばれる描画検査。単体で叩かない。
// 使い方: node tools/_qa_render.js <lpDir> <page1,page2,...>
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const lpDir = process.argv[2];
const pages = process.argv[3].split(',');
const WIDTHS = [1440, 900, 390];

const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.webp':'image/webp', '.gif':'image/gif' };

function serve(port) {
  return http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let f = path.join(ROOT, p);
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
    if (!fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(f).toLowerCase()] || 'application/octet-stream' });
    res.end(fs.readFileSync(f));
  }).listen(port);
}

(async () => {
  const port = 8912;
  const srv = serve(port);
  const exe = '/opt/pw-browsers/chromium';
  const b = await chromium.launch(fs.existsSync(exe) ? { executablePath: exe } : {});
  for (const rel of pages) {
    for (const w of WIDTHS) {
      const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
      const pg = await ctx.newPage();
      const errs = [];
      pg.on('pageerror', e => errs.push('pageerror: ' + e.message.slice(0, 80)));
      const url = `http://localhost:${port}/${lpDir}/${rel}`;
      try { await pg.goto(url, { waitUntil: 'networkidle', timeout: 30000 }); }
      catch (e) { errs.push('goto: ' + e.message.slice(0, 60)); }
      await pg.evaluate(() => document.querySelectorAll('img').forEach(i => i.loading = 'eager'));
      await pg.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 25)); }
        window.scrollTo(0, 0);
        document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(e => e.classList.add('is-visible'));
      });
      await pg.waitForTimeout(600);

      const d = await pg.evaluate(() => {
        const out = {
          hScroll: document.documentElement.scrollWidth > window.innerWidth + 1,
          broken: [...document.querySelectorAll('img')]
            .filter(i => !i.complete || i.naturalWidth === 0)
            .map(i => (i.getAttribute('src') || '').slice(-46)),
        };

        // --- 鉄則1: ヒーローがファーストビューに収まるか ---
        window.scrollTo(0, 0);
        const hero = document.querySelector('.hero');
        if (hero) {
          const r = hero.getBoundingClientRect();
          out.heroBottom = Math.round(r.bottom);
          out.viewportH = window.innerHeight;
          out.heroFits = r.bottom <= window.innerHeight + 2;
        }

        // --- 鉄則2: ヒーローのキャッチは1行 ---
        const q = document.querySelector('.hero-quote, .hero-title, .hero h1');
        if (q) {
          const cs = getComputedStyle(q);
          let lh = parseFloat(cs.lineHeight);
          if (!lh || isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.3;
          out.catchLines = Math.max(1, Math.round(q.getBoundingClientRect().height / lh));
          out.catchClipped = q.scrollWidth > q.clientWidth + 1;
          out.catchText = (q.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40);
        }

        // --- 鉄則3: 白地セクションの上の白いカード（境界が見えない箱） ---
        const px = v => parseFloat(v) || 0;
        const toRgb = v => { const m = (v || '').match(/[\d.]+/g); return m ? m.map(Number) : null; };
        const nearWhite = c => !!c && (c[3] === undefined || c[3] > 0.85) && c[0] >= 246 && c[1] >= 246 && c[2] >= 246;
        const groundOf = el => {
          let p = el.parentElement;
          while (p) {
            const cs = getComputedStyle(p);
            if (cs.backgroundImage && cs.backgroundImage !== 'none') return null; // 写真やグラデ地は対象外
            const c = toRgb(cs.backgroundColor);
            if (c && (c[3] === undefined || c[3] > 0.5)) return c;
            p = p.parentElement;
          }
          return null;
        };
        const hasVisibleBorder = cs => ['Top','Right','Bottom','Left'].some(side => {
          if (px(cs['border' + side + 'Width']) < 1) return false;
          if (cs['border' + side + 'Style'] === 'none') return false;
          const c = toRgb(cs['border' + side + 'Color']);
          return !!c && !(c[3] !== undefined && c[3] < 0.15) && !nearWhite(c);
        });
        const vpArea = window.innerWidth * window.innerHeight;
        const offenders = [];
        for (const el of document.querySelectorAll('div,section,article,li,ul,aside')) {
          const cs = getComputedStyle(el);
          if (cs.backgroundImage && cs.backgroundImage !== 'none') continue;
          const bg = toRgb(cs.backgroundColor);
          if (!nearWhite(bg)) continue;
          const looksLikeCard = cs.boxShadow !== 'none' || px(cs.borderTopLeftRadius) >= 8;
          if (!looksLikeCard) continue;
          const r = el.getBoundingClientRect();
          const area = r.width * r.height;
          if (area < 5000 || area > vpArea * 0.7) continue;
          if (!nearWhite(groundOf(el))) continue;
          if (hasVisibleBorder(cs)) continue;
          const sel = el.tagName.toLowerCase()
            + (el.id ? '#' + el.id : '')
            + (el.className && typeof el.className === 'string'
                ? '.' + el.className.trim().split(/\s+/).filter(c => !/^(reveal|delay|is-visible)/.test(c)).slice(0, 2).join('.')
                : '');
          if (!offenders.includes(sel)) offenders.push(sel);
        }
        out.whiteOnWhite = offenders.slice(0, 8);
        return out;
      });

      // ヒーローのテキスト側（左半分）の明度を測る。白文字が読めるかの実測。
      let heroLum = null;
      const hero = await pg.$('.hero');
      if (hero && w >= 900) {
        const box = await hero.boundingBox();
        if (box && box.height > 100) {
          const clip = { x: box.x + 40, y: box.y + box.height * 0.45,
                         width: Math.min(box.width * 0.42, w - 80), height: Math.min(140, box.height * 0.25) };
          const buf = await pg.screenshot({ clip, type: 'jpeg', quality: 60 });
          // JPEGの平均輝度をざっくり測るためキャンバスに戻す
          const b64 = buf.toString('base64');
          heroLum = await pg.evaluate(async (b64) => {
            const img = new Image();
            img.src = 'data:image/jpeg;base64,' + b64;
            await img.decode();
            const c = document.createElement('canvas');
            c.width = img.width; c.height = img.height;
            const g = c.getContext('2d'); g.drawImage(img, 0, 0);
            const px = g.getImageData(0, 0, c.width, c.height).data;
            let s = 0, n = 0;
            for (let i = 0; i < px.length; i += 4) { s += 0.299*px[i] + 0.587*px[i+1] + 0.114*px[i+2]; n++; }
            return s / n;
          }, b64);
        }
      }
      console.log(JSON.stringify({ page: rel.replace('/index.html','') || 'root', w, ...d, errs, heroLum }));
      await ctx.close();
    }
  }
  await b.close();
  srv.close();
})().catch(e => { console.error(e.message); process.exit(1); });
