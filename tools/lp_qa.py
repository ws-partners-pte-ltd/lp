#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
lp_qa.py — LP公開前の機械チェックを1コマンドで全部通す

使い方:
    python3 tools/lp_qa.py 2026/thailand/training/delegation
    python3 tools/lp_qa.py 2026/thailand/training/delegation --published   # noindex が外れている前提で検査

リポジトリのルートで実行すること。Playwright が入っていれば描画検査まで行う。
入っていなければ静的検査だけ実行し、その旨を出す（描画検査はスキップであって合格ではない）。

検査項目は「過去に実際に事故ったもの」だけを入れている。増やすときは事故の実例とセットで。
"""
import sys, os, re, json, html, subprocess, argparse, glob

ROOT = os.getcwd()
OK, NG, WARN, SKIP = 'OK  ', 'NG  ', 'WARN', 'SKIP'
results = []

def rec(status, item, detail=''):
    results.append((status, item, detail))

# 旧世代イラスト（G:の正本に残っていない＝使ってはいけない）
OLD_ASSETS = ['02_staircase_leadership', '03_maybe_uncertainty', '09_brick_wall',
              '10_team_shield', '13_handoff_delivery', '14_hot_air_balloon',
              # Kazu からLPでの使用不可と指示（2026-09-23）。カタログには残すがLPには載せない
              'il_tangled_communication', 'il_ambiguous_figure']

# 現地語ページに残っていてはいけない日本語組版記号
JP_TYPO = ['【', '】', '※', '｜', '＜', '＞', '／', '・', '　']
JP_CHARS = re.compile(u'[぀-ヿ一-鿿]')


def body_text(src):
    """style/script/コメントを除いた本文テキストの行リスト"""
    s = re.sub(r'<style.*?</style>', '', src, flags=re.S)
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    i = s.find('<body')
    s = s[i:] if i >= 0 else s
    txt = html.unescape(re.sub(r'<[^>]+>', '\n', s))
    return [l.strip() for l in txt.split('\n') if l.strip()]


def check_static(lp_dir, pages, published):
    for rel in pages:
        p = os.path.join(lp_dir, rel)
        src = open(p, encoding='utf-8').read()
        tag = rel.replace('/index.html', '') or 'root'

        # ① GTM
        rec(OK if 'GTM-TLGVMTDZ' in src else NG, '%s: GTM' % tag)

        # ② noindex（公開前は必須 / 本公開時は外れていること）
        has_noindex = 'name="robots"' in src and 'noindex' in src
        if published:
            rec(OK if not has_noindex else NG, '%s: noindex が外れている' % tag,
                '' if not has_noindex else '本公開なのに noindex が残っている')
        else:
            rec(OK if has_noindex else NG, '%s: noindex がある' % tag,
                '' if has_noindex else '未確定情報があるうちは noindex を入れる')

        # ③ 旧世代イラストの参照
        used_old = [a for a in OLD_ASSETS if a in src]
        rec(OK if not used_old else NG, '%s: 旧世代イラスト不使用' % tag,
            '' if not used_old else '使用中: ' + ', '.join(used_old))

        # ④ /assets/ 参照のリンク切れ
        missing = []
        for m in re.findall(r'["\'(]/assets/([^"\')\s?]+)', src):
            if not os.path.exists(os.path.join(ROOT, 'assets', m)):
                missing.append('/assets/' + m)
        rec(OK if not missing else NG, '%s: /assets/ 参照の実在' % tag,
            '' if not missing else '存在しない: ' + ', '.join(sorted(set(missing))[:6]))

        # ⑤ ヒーローに背景画像があるか
        #    2026-09-10: グラデーションだけのヒーローを作ってしまい、Kazu の目視で発覚した。
        #    輝度チェックでは捕まらない（グラデは元々コントラストが良い）ので存在チェックで見る。
        #    宣言があるだけでは不十分。ベースLPから継承した相対パスが宙に浮いている事故が実際にあった
        #    （旧版は ../images/hero_bg.jpg を指していたが、そのファイルは新LPに存在しなかった）。
        #    最後に効く宣言のURLを解決して実在まで確かめる。
        hero_urls = re.findall(r'\.hero[a-zA-Z0-9_.\-: ]*\s*\{[^}]*?background-image:[^;}]*?url\(\s*[\'"]?([^\'")]+)', src, flags=re.S)
        if not hero_urls:
            rec(NG, '%s: ヒーロー背景画像' % tag, '.hero に background-image: url(...) が無い')
        else:
            u = hero_urls[-1].split('?')[0]
            f = os.path.join(ROOT, u.lstrip('/')) if u.startswith('/') \
                else os.path.normpath(os.path.join(lp_dir, os.path.dirname(rel), u))
            exists = os.path.exists(f)
            rec(OK if exists else NG, '%s: ヒーロー背景画像' % tag,
                '' if exists else '参照先が存在しない: %s' % u)

        # ⑥ ヒーローに人物写真（講師・研修風景）があるか
        hero_html = re.search(r'<section[^>]*class="[^"]*hero[^"]*".*?</section>', src, flags=re.S)
        if hero_html:
            imgs = re.findall(r'<img[^>]+src="([^"]+)"', hero_html.group(0))
            photo = [i for i in imgs if re.search(r'\.(jpe?g|webp)(\?|$)', i)]
            rec(OK if photo else WARN, '%s: ヒーローに写真' % tag,
                '' if photo else 'イラストのみ。講師写真や研修風景を入れたか確認')

        # ⑦ 現地語ページ：日本語組版記号と日本語残留
        lang = re.search(r'<html[^>]*lang="([^"]+)"', src)
        lang = lang.group(1) if lang else 'ja'
        if lang != 'ja':
            lines = body_text(src)
            bad = {s: sum(l.count(s) for l in lines) for s in JP_TYPO}
            bad = {k: v for k, v in bad.items() if v}
            rec(OK if not bad else NG, '%s: 日本語組版記号なし' % tag,
                '' if not bad else json.dumps(bad, ensure_ascii=False))
            # 言語切替ボタンの「日本語」だけは正常
            jp_lines = [l for l in lines if JP_CHARS.search(l) and l.strip() != '日本語']
            rec(OK if not jp_lines else NG, '%s: 日本語の本文残留なし' % tag,
                '' if not jp_lines else '残留: ' + ' / '.join(l[:30] for l in jp_lines[:4]))

        # ⑧ 言語切替の相互リンク
        if len(pages) > 1:
            other = [q.replace('/index.html', '') for q in pages if q != rel]
            ok = any(('../%s/' % o) in src for o in other)
            rec(OK if ok else NG, '%s: 言語切替リンク' % tag,
                '' if ok else '相手言語への ../xx/ リンクが無い')

    # ⑨ mailto の config と index.html の一致（ハードコード問題）
    for cfg in glob.glob(os.path.join(lp_dir, 'config_*.js')):
        c = open(cfg, encoding='utf-8').read()
        m = re.search(r"mailto_href:\s*'(mailto:[^']+)'", c)
        if not m or not m.group(1).strip():
            continue
        href = m.group(1)
        langcode = os.path.basename(cfg).replace('config_', '').replace('.js', '')
        page = os.path.join(lp_dir, langcode, 'index.html')
        if not os.path.exists(page):
            page = os.path.join(lp_dir, 'index.html')
        if os.path.exists(page):
            src = open(page, encoding='utf-8').read()
            rec(OK if href in src else NG, 'config_%s.js と index.html の mailto 一致' % langcode,
                '' if href in src else 'index.html 側が古い。両ファイル同時更新が必要')


def check_render(lp_dir, pages):
    script = os.path.join(ROOT, 'tools', '_qa_render.js')
    if not os.path.exists(script):
        rec(SKIP, '描画検査', '_qa_render.js が無い')
        return
    try:
        out = subprocess.run(['node', script, lp_dir, ','.join(pages)],
                             capture_output=True, text=True, timeout=300)
    except Exception as e:
        rec(SKIP, '描画検査', 'Playwright 実行不可: %s' % e)
        return
    if out.returncode != 0:
        rec(SKIP, '描画検査', (out.stderr or '')[-200:])
        return
    for line in out.stdout.strip().split('\n'):
        if not line.startswith('{'):
            continue
        d = json.loads(line)
        t = '%s @%s' % (d['page'], d['w'])
        rec(NG if d['hScroll'] else OK, '%s: 横スクロールなし' % t)
        rec(NG if d['broken'] else OK, '%s: 画像の欠けなし' % t,
            ', '.join(d['broken'][:4]))
        rec(NG if d['errs'] else OK, '%s: JSエラーなし' % t, ', '.join(d['errs'][:2]))
        if d.get('heroLum') is not None:
            # ヒーローのテキスト領域が明るすぎると白文字が読めない（実測で 90 未満を基準）
            rec(OK if d['heroLum'] < 90 else NG, '%s: ヒーロー文字のコントラスト' % t,
                '輝度 %.0f（90未満が目標）' % d['heroLum'])

        # 鉄則① ヒーローはファーストビュー（1画面）に収める
        if d.get('heroFits') is not None:
            rec(OK if d['heroFits'] else NG, '%s: ヒーローが1画面に収まる' % t,
                'ヒーロー下端 %spx / 画面 %spx' % (d.get('heroBottom'), d.get('viewportH')))

        # 鉄則② ヒーローのキャッチは1行
        if d.get('catchLines') is not None:
            det = '%d行「%s」' % (d['catchLines'], d.get('catchText', ''))
            if d.get('catchClipped'):
                det += ' ※横に見切れている'
            rec(OK if (d['catchLines'] == 1 and not d.get('catchClipped')) else NG,
                '%s: キャッチが1行' % t, det)

        # 鉄則③ 白地の上に境界の見えない白いカードを置かない
        if d.get('whiteOnWhite') is not None:
            rec(NG if d['whiteOnWhite'] else OK, '%s: 白地×白カードなし' % t,
                ', '.join(d['whiteOnWhite'][:4]))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('lp_dir')
    ap.add_argument('--published', action='store_true', help='本公開後の検査（noindex が外れている前提）')
    ap.add_argument('--no-render', action='store_true')
    a = ap.parse_args()

    lp_dir = a.lp_dir.rstrip('/')
    if not os.path.isdir(lp_dir):
        print('ディレクトリが無い:', lp_dir); sys.exit(2)

    pages = []
    for cand in ['index.html', 'ja/index.html', 'th/index.html', 'id/index.html', 'en/index.html']:
        if os.path.exists(os.path.join(lp_dir, cand)):
            pages.append(cand)
    if not pages:
        print('index.html が見つからない:', lp_dir); sys.exit(2)

    print('LP QA:', lp_dir, '/ ページ:', ', '.join(pages))
    print('-' * 72)
    check_static(lp_dir, pages, a.published)
    if not a.no_render:
        check_render(lp_dir, pages)

    for st, item, detail in results:
        print('%s %-46s %s' % (st, item, detail))
    print('-' * 72)
    ng = sum(1 for s, _, _ in results if s == NG)
    sk = sum(1 for s, _, _ in results if s == SKIP)
    print('NG %d件 / SKIP %d件 / 全%d件' % (ng, sk, len(results)))
    if sk:
        print('※ SKIP は「合格」ではない。描画検査を通してから公開すること。')
    sys.exit(1 if ng else 0)


if __name__ == '__main__':
    main()
