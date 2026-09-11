#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
assets/illustrations/_catalog.html を生成する。

イラストを同期したあとに必ず走らせること。Cowork（LPを書く側）も人も、
この1ページを見て素材を引き当てる。世代フラグを出すのが主目的で、
「G:の正本に無い＝旧世代」を赤で明示する。

    python3 tools/make_illustration_catalog.py
    python3 tools/make_illustration_catalog.py --drive "/g/マイドライブ/Claude/Projects/assets/illustrations"
"""
import os, re, glob, argparse, datetime, html

# 世代の定義。判定は「ファイル名の系統」＋「G:の正本に在るか」の2軸
FAMILY = [
    (re.compile(r'^il_c_'),  'il_c',  '円形バッジ型（紺×ゴールド・透過480px）'),
    (re.compile(r'^il_m_'),  'il_m',  '製造／マネジメント'),
    (re.compile(r'^il_'),    'il',    'フラットイラスト（最新・第一候補）'),
    (re.compile(r'^\d\d_'),  'num',   '連番シリーズ（旧世代。新規LPで使わない）'),
]

def family(name):
    for rx, key, label in FAMILY:
        if rx.match(name):
            return key, label
    return 'other', 'その他'

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--drive', default='', help='G:の正本フォルダ。渡すと在庫差分も出す')
    a = ap.parse_args()

    d = 'assets/illustrations'
    files = sorted(os.path.basename(f) for f in glob.glob(os.path.join(d, '*.png')))
    drive = set()
    if a.drive and os.path.isdir(a.drive):
        drive = {os.path.basename(f) for f in glob.glob(os.path.join(a.drive, '*.png'))}

    groups = {}
    for f in files:
        k, label = family(f)
        groups.setdefault((k, label), []).append(f)
    order = ['il', 'il_c', 'il_m', 'num', 'other']

    out = ['<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8">',
           '<meta name="viewport" content="width=device-width, initial-scale=1">',
           '<meta name="robots" content="noindex, nofollow">',
           '<title>共通イラスト素材カタログ | WS PARTNERS</title>',
           '''<style>
:root{--ink:#1a202c;--muted:#4a5568;--pri:#0050b3;--bad:#c0392b;--line:#e2e8f0}
*{box-sizing:border-box}body{margin:0;padding:28px;font-family:"Noto Sans JP",system-ui,sans-serif;color:var(--ink);background:#f4f7f9;line-height:1.7}
h1{font-size:1.5rem;margin:0 0 6px}.sub{color:var(--muted);font-size:.9rem;margin-bottom:24px}
h2{font-size:1.1rem;margin:34px 0 4px;padding-bottom:6px;border-bottom:2px solid var(--pri)}
h2 small{font-weight:400;color:var(--muted);font-size:.8rem;margin-left:10px}
h2.old{border-color:var(--bad);color:var(--bad)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:14px;margin-top:16px}
.card{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px;text-align:center}
.card.old{background:#fff5f5;border-color:#f5c6c6}
.card img{width:100%;height:120px;object-fit:contain}
.card code{display:block;margin-top:8px;font-size:.68rem;color:var(--muted);word-break:break-all;line-height:1.5}
.flag{display:inline-block;font-size:.62rem;font-weight:700;padding:2px 7px;border-radius:20px;margin-top:6px}
.flag.old{background:var(--bad);color:#fff}.flag.new{background:#e6f4ff;color:var(--pri)}
.note{background:#fffaf0;border:1px solid #f5c97a;border-radius:10px;padding:14px 18px;font-size:.88rem;margin-bottom:8px}
</style></head><body>''']
    out.append('<h1>共通イラスト素材カタログ</h1>')
    out.append('<p class="sub">生成: %s ／ %d点 ／ LPからは <code>/assets/illustrations/{名前}.png</code> で参照</p>'
               % (datetime.date.today().isoformat(), len(files)))
    out.append('<div class="note"><strong>新規LPは il_（無印）を第一候補にする。</strong> '
               '業務シーンが具体的に描かれていてセッション内容と1対1で対応させやすい。'
               '<br><strong>連番シリーズ（赤）は旧世代。</strong>G:の正本に残っていないため新規LPで使わないこと。'
               '既存LPが参照しているので削除もしない。</div>')
    if drive:
        only_repo = [f for f in files if f not in drive]
        only_drive = sorted(f for f in drive if f not in set(files) and not f.startswith('fts_s'))
        out.append('<div class="note">正本との差分 ／ リポジトリのみ: %s ／ 正本のみ（未同期）: %s</div>'
                   % (', '.join(only_repo) or 'なし', ', '.join(only_drive) or 'なし'))

    for key in order:
        for (k, label), names in sorted(groups.items()):
            if k != key:
                continue
            old = (k == 'num')
            out.append('<h2 class="%s">%s <small>%s ／ %d点</small></h2>'
                       % ('old' if old else '', k, html.escape(label), len(names)))
            out.append('<div class="grid">')
            for n in names:
                is_old = old or (drive and n not in drive)
                flag = '<span class="flag old">旧世代</span>' if is_old else '<span class="flag new">現行</span>'
                out.append('<div class="card%s"><img src="%s" alt="" loading="lazy"><code>%s</code>%s</div>'
                           % (' old' if is_old else '', html.escape(n), html.escape(n.replace('.png', '')), flag))
            out.append('</div>')

    out.append('</body></html>')
    p = os.path.join(d, '_catalog.html')
    with open(p, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    print('生成:', p, '/', len(files), '点')

if __name__ == '__main__':
    main()
