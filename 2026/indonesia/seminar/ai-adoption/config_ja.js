/* ============================================================
   LP_CONFIG — インドネシア 共催セミナー（フォーポイント × WS PARTNERS）日本語版【下書き】
   Path: 2026/indonesia/seminar/ai-adoption/config_ja.js
   Base: 2026/malaysia/seminar/cross-cultural/（FITOKIO共催）
   2026-11-10 v2: WSP原稿「WSP フォーポイント共催セミナー LP掲載原稿 20261110」
                 （Google Doc 1bm6qy-_pwrsux_EUw4feut5PNNS4onCwwr1qn0R5HNc）を反映。
                 第1部＝フォーポイント、第2部＝WS PARTNERS。オンライン（Zoom）開催。
                 申込は Zoom 参加登録に一本化（forms.zoom_url）。Googleフォーム・mailto・GAS は作らない。
   2026-11-11 v3: 申込締切・担当・時間配分・Zoom登録URLを確定（松下さん連絡）。本公開。
   2026-11-17 v4: 「LP改善・修正指示書（最終版）」（Doc 16UAQsyx25StGQvbm000vL5xpFIq0ee5hjZWc0EU6htQ）を反映。
                 全体コンセプトと第1部・第2部の関係、第2部の原稿・講演内容・お悩み、講師紹介、申込前の訴求。
   ============================================================ */
var TBD = function (t) {
  return '<span style="background:#fff3bf;color:#7c5e00;font-weight:700;padding:0 4px;border-radius:3px">【TBD】' + t + '</span>';
};

/* 見出しブロック・チェックリストの共通部品 */
var PART_H = function (label, title, sub, first) {
  return '<h3 style="font-size:1.1rem;font-weight:700;color:var(--primary);border-left:4px solid var(--primary);padding-left:12px;margin:' + (first ? '0' : '40px') + ' 0 6px 0">' + label + '：' + title + '</h3>' +
         '<p style="font-size:0.95rem;color:var(--text-muted);margin:0 0 16px 16px">' + sub + '</p>';
};
var GAIN_BOX = function (heading, items) {
  return '<div style="background:#e8f0fb;border:2px solid #0050b3;border-radius:12px;padding:18px 22px;margin:16px 0">' +
    '<p style="font-size:0.85rem;font-weight:700;color:#0050b3;letter-spacing:0.1em;margin:0 0 12px 0">── ' + heading + ' ──</p>' +
    '<ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">' +
    items.map(function (t) {
      return '<li style="display:flex;align-items:flex-start;gap:10px;font-weight:700;font-size:1rem;color:#1a202c"><span style="color:#0050b3;flex-shrink:0">✓</span><span>' + t + '</span></li>';
    }).join('') + '</ul></div>';
};
var ISSUE = function (head, sub) {
  return '<span style="display:block"><strong>' + head + '</strong><span style="display:block;font-size:0.92em;color:var(--text-muted);margin-top:4px">' + sub + '</span></span>';
};

var FULL_TITLE   = 'AI時代のインドネシア拠点経営';
var FULL_SUB     = '生産性を高める仕組みと、考え・判断するマネジャーの育て方';
var P1_TITLE     = 'AI導入・活用の進め方';
var P1_SUB       = '～セキュアな環境整備から、現場で使える仕組みづくりまで～';
var P2_TITLE     = 'AI時代、インドネシア現地マネジャーの課題解決力をどう高めるか';
var P2_SUB       = '―「もっと自分で考えて」が機能しない理由と、論理・認識・知性から考える人材育成―';
var DATE_TXT     = '2026年12月9日（水）15:00〜17:00（ジャカルタ時間）';
var TARGET_TXT   = 'インドネシア日系企業の経営者・経営幹部、拠点責任者、日本人マネジャー、人事・人材育成責任者、管理部門責任者、IT・DX推進担当者';
var TARGET_NOTE  = 'AI導入による業務の生産性向上と、現地マネジャーへの権限移譲・育成をあわせて進めたい方におすすめです。';

window.LP_CONFIG = {

  meta: {
    lang: 'ja',
    title: 'AI時代のインドネシア拠点経営 セミナー | WS PARTNERS × フォーポイント',
    description: '2026年12月9日15:00〜17:00（現地時間）、オンライン（Zoom）開催。インドネシアの日系企業向けに、AIを安全に導入・活用する仕組みと、AI時代に求められる現地マネジャーの課題解決力を高めるマネジメントを解説。フォーポイントとWS PARTNERSの共催セミナーです。',
    other_lang_label: null,
    other_lang_url:   null
  },

  header: {
    phone: '+62 823 2122 8694',
    hours: '受付時間：平日 9:00～18:00（ジャカルタ時間）',
    cta_text: '無料で申し込む'
  },

  nav: [
    { href: '#consult',    label: 'セミナー概要' },
    { href: '#issues',     label: 'こんなお悩みはありませんか' },
    { href: '#program',    label: '開催概要' },
    { href: '#instructor', label: '登壇者' },
    { href: '#company',    label: '会社概要' },
    { href: '#apply',      label: 'お申し込み' }
  ],

  hero: {
    bg_image: '/assets/lp-hero-images/hero_jakarta_skyline_dusk.webp?v=20261110',
    img_main: 'images/photo_trainer_kato_go.jpg',
    img_sub1: '/assets/photos/trainers/kato.jpg',
    img_sub2: '',
    subtitle: 'AIを安全に導入し、業務で活かす。<br>そして、AI時代に課題を解決できる人と組織を育てる。<br>第1部：AI導入・活用の進め方　第2部：現地マネジャーの課題解決力をどう高めるか',
    title: FULL_TITLE + '<br><span style="font-size:0.62em;display:block;margin-top:6px">生産性を高める仕組みと、<br>考え・判断するマネジャーの育て方</span>',
    format_label: '【開催形式】',
    format: 'オンライン（Zoom）',
    date_label: '【日時】',
    date: '<strong style="font-size:0.78em">' + DATE_TXT + '</strong>',
    deadline_label: '【参加費】',
    deadline: '<strong>無料</strong>',
    close_label: '【申込締切】',
    close: '当日 午前10:00（ジャカルタ時間）',
    cta_text: '無料で申し込む',
    target_label: '【対象】',
    target: 'インドネシア日系企業の経営者・経営幹部、拠点責任者、日本人マネジャー、人事・管理部門・IT/DX推進の責任者',
    badge_en: '無料合同セミナー',
    badge_ja: '日本語で実施！'
  },

  consult: {
    en: 'ABOUT THIS SEMINAR',
    title: FULL_TITLE + '<br><span style="font-size:0.7em">' + FULL_SUB + '</span>',
    body:
      /* ── 全体：第1部と第2部の関係 ── */
`<p style="font-size:1.15rem;font-weight:700;line-height:1.7;color:#1a202c;margin:0 0 12px 0">AIを導入するだけでは、組織の成果は最大化しない。<br><span style="background:linear-gradient(transparent 55%, #ffe08a 55%)">AIを活用して成果を生み出せる人と組織を、どうつくるか。</span></p>
<p>AIを安全に導入し、業務で活用することは重要です。しかし、AIの分析や提案を実際の成果につなげるには、それを使う人材の課題解決力と、主体的な判断を支える組織の仕組みが欠かせません。</p>
<p>本セミナーは、AIの進化を単なる業務効率化ではなく、<strong>人材と組織の能力向上</strong>につなげるための2部構成です。</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:16px 0 12px">
  <div style="background:#fff;border:2px solid #0050b3;border-radius:12px;padding:16px 18px;min-width:0">
    <p style="font-size:0.8rem;font-weight:700;color:#0050b3;letter-spacing:0.08em;margin:0 0 6px">第1部　株式会社フォーポイント</p>
    <p style="font-weight:700;margin:0;line-height:1.6">AIを安全に導入し、効果的に活用するための<strong>技術・仕組み</strong>を学ぶ</p>
  </div>
  <div style="background:#fff;border:2px solid #f39c12;border-radius:12px;padding:16px 18px;min-width:0">
    <p style="font-size:0.8rem;font-weight:700;color:#d35400;letter-spacing:0.08em;margin:0 0 6px">第2部　WS PARTNERS</p>
    <p style="font-weight:700;margin:0;line-height:1.6">AI時代に求められる<strong>課題解決力</strong>と、現地マネジャーの思考力を高める<strong>育成・マネジメント</strong>を学ぶ</p>
  </div>
</div>
<p style="margin:0 0 8px">2つの講演をつなぐ共通テーマは<strong>「抽象化」</strong>です。AIは大量の情報からパターンを見いだし、共通する原因や問題の仮説を示すことができます。ただし、その仮説が自社の実態に合っているかを確かめ、判断するのは人の役割です。</p>` +
      /* ── 第1部：フォーポイント ── */
      PART_H('第1部', P1_TITLE, P1_SUB, false) +
`<p style="font-size:1.15rem;font-weight:700;line-height:1.7;color:#1a202c;margin:0 0 6px 0">AI導入は、ツール選びではなく<br><span style="background:linear-gradient(transparent 55%, #ffe08a 55%)">「業務・人・ルールの再設計」</span>から。</p>
<p style="font-weight:700;color:var(--primary);margin:0 0 18px 0">「安全に使える」から「現場で成果を生み出す」へ。</p>
<p>生成AIの進化により、これまで専門知識や多額のシステム投資が必要だった業務の効率化・自動化が、より身近なものになっています。</p>
<p>一方で、「社内情報をAIに入力しても安全なのか」「どの業務からAI化すればよいのか」「導入しても社員が使いこなせないのではないか」といった懸念から、導入が進まない企業も少なくありません。</p>
<p>本講演では、会計・税務・法務の専門業務にAIを取り入れ、AIコンサルティングも行っている株式会社フォーポイントの実践経験をもとに、企業が<strong>安全かつ効果的にAIを導入・活用するための考え方と具体的な進め方</strong>を解説します。</p>
<p>AI導入を単なるツールの導入として捉えるのではなく、業務の見直し、セキュリティ環境の整備、人材育成、社内での運用体制づくりまで、一連のプロセスを体系的にご紹介します。</p>` +
      GAIN_BOX('第1部で得られること', [
        '生成AIの基礎と、企業利用で押さえるべき<strong>セキュリティ</strong>',
        'AI導入を成功させるための<strong>5つの秘訣</strong>',
        '自社業務のAI化を<strong>どこから始めるか</strong>の見極め方',
        'AI導入から社内定着・自走までの<strong>ロードマップ</strong>'
      ]) +
      /* ── 第2部：WS PARTNERS ── */
      PART_H('第2部', P2_TITLE, P2_SUB, false) +
`<p style="font-size:1.1rem;font-weight:700;line-height:1.7;color:#1a202c;margin:0 0 16px 0"><span style="background:linear-gradient(transparent 55%, #ffe08a 55%)">「現地マネジャーに、もっと自分で考え、主体的に課題を解決してほしい」</span></p>
<p>インドネシアの日系企業で、こうした課題を感じる経営者・日本人マネジャーは少なくありません。</p>
<p>生成AIの進化によって、情報収集や分析、問題の原因仮説の提示まで、AIが支援できる領域は広がっています。一方で、AIの回答が必ずしも自社の実態や課題の本質を正しく捉えているとは限りません。</p>
<p>だからこそ重要になるのが、個別の事象から共通する問題を見いだす<strong>「抽象化」</strong>、そして具体と抽象を行き来しながら、課題の本質を捉え、判断する力です。</p>
<p>では、なぜ現地マネジャーに「もっと自分で考えて」と伝えても、期待する課題解決につながらないのでしょうか。本講演では、その背景を<strong>「論理・認識・知性」</strong>という3つの観点から読み解きます。さらに、実際の職場を想定したケースを通じて、現地マネジャーの課題解決力を高めるための、具体的な仕事の任せ方や育成・マネジメントのポイントを解説します。</p>
<div style="background:#e8f0fb;border:2px solid #0050b3;border-radius:12px;padding:18px 22px;margin:18px 0">
  <p style="font-size:0.85rem;font-weight:700;color:#0050b3;letter-spacing:0.1em;margin:0 0 12px 0">── 課題解決力の発揮を妨げる3つの壁 ──</p>
  <div style="display:flex;flex-direction:column;gap:12px">
    <div><p style="font-weight:700;margin:0">① 論理の違い：何を「筋が通っている」と感じるか</p><p style="font-size:0.92em;color:var(--text-muted);margin:2px 0 0">例：出荷遅延の報告で、担当者の事情を説明するのか、原因・影響・対応策を整理するのか。求められる判断の目的によって、必要な説明の筋道は変わります。</p></div>
    <div><p style="font-weight:700;margin:0">② 認識の違い：同じ言葉から何を思い描くか</p><p style="font-size:0.92em;color:var(--text-muted);margin:2px 0 0">例：「営業強化」を訪問件数を増やすことと捉えるか、顧客課題の把握と価値提案の強化と捉えるか。言葉が同じでも、行動は変わります。</p></div>
    <div><p style="font-weight:700;margin:0">③ 知性の違い：どこまで複雑な関係を捉えられるか</p><p style="font-size:0.92em;color:var(--text-muted);margin:2px 0 0">個別の出来事を説明することと、複数の出来事から共通する問題を見いだし、因果関係や改善策を考えることでは、必要な思考作業が異なります。</p></div>
  </div>
  <p style="font-size:0.8rem;color:var(--text-muted);margin:12px 0 0">※ここでの「知性」は、人の優劣や国籍による違いではなく、その業務で求められる思考の構造の違いを指します。</p>
</div>
<div style="background:#fff;border:1px solid #cbd5e0;border-radius:12px;padding:18px 22px;margin:18px 0">
  <p style="font-size:0.85rem;font-weight:700;color:#4a5568;letter-spacing:0.05em;margin:0 0 12px 0">架空ケース：出荷遅延を、どこまで考えるか</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;font-size:0.95em">
    <li><strong style="color:#0050b3">A 事象の整理</strong>　担当者の欠勤により、梱包開始が遅れた。</li>
    <li><strong style="color:#0050b3">B 共通問題の抽象化</strong>　複数の工程で担当者が不在になると仕事が止まる。共通する問題は属人化ではないか。</li>
    <li><strong style="color:#0050b3">C 因果関係の検討</strong>　属人性が高いほど代替対応が難しく、納期が不安定になる。</li>
    <li><strong style="color:#0050b3">D 複数要素を統合した判断</strong>　多能工化は必要だが、品質・納期・育成コストを踏まえ、段階的に進める。</li>
  </ul>
  <p style="font-size:0.92em;margin:12px 0 0">AからDまで、どれも「考えている」ことに変わりはありません。違うのは、考えていることの構造と複雑さです。上司が求める思考と、部下が実際に行っている思考作業の間には、ギャップがあるかもしれません。また、AIが「属人化」という問題を示せたとしても、それが現実の原因かどうかは、現場で確かめる必要があります。</p>
</div>`,
    btn_text: '無料で申し込む',
    btn_url: '#apply'
  },

  issues: {
    en: 'CHALLENGES',
    title: 'このようなお悩みはありませんか？',
    img: '/assets/illustrations/il_c_dx_ai_cloud.png',
    items: [
      ISSUE('AI導入に興味はあるが、何から始めればよいかわからない', '自社のどの業務にAIを活用できるのか、具体的なイメージが持てない。'),
      ISSUE('情報漏えいやセキュリティが心配で、AI導入に踏み切れない', '機密情報・個人情報の取扱いや、日本本社の情報システム部門の承認が課題となっている。'),
      ISSUE('ChatGPTやCopilotなどを導入したものの、十分に活用できていない', '一部の社員だけが利用しており、組織全体の生産性向上につながっていない。'),
      ISSUE('経理・人事・総務などの間接業務を効率化したい', '資料作成、翻訳、データ集計、報告業務などに時間を取られ、本来注力すべき業務に十分な時間を使えていない。'),
      ISSUE('AIを活用できる人材を育て、社内で継続的に活用したい', '外部ベンダーに頼り続けるのではなく、自社主導でAIを活用・改善できる体制を構築したい。'),
      ISSUE('「もっと自分で考えて」と伝えても、期待する行動につながらない', '現地マネジャーに、主体的に課題を発見・解決してほしい。けれども、期待する判断や提案にはなかなか届かない。'),
      ISSUE('問題の原因を尋ねても、個別の出来事や事情の説明で終わってしまう', '共通する問題や再発防止の話まで進まず、結局は日本人側が整理し直している。'),
      ISSUE('日本人上司と現地マネジャーの間で、期待する判断にずれがある', '同じ言葉を使っていても、思い描く仕事の進め方や成果のイメージがかみ合わない。'),
      ISSUE('現地マネジャーの思考力を育てる、具体的な方法が分からない', 'どこまで任せ、どう問いかけ、どう支援すればよいのかが曖昧なまま、判断を引き取り続けている。')
    ]
  },

  voices:   null,
  features: null,
  target:   null,

  program: {
    en: 'EVENT OVERVIEW',
    title: '開催概要',
    detail_title: 'セミナー情報',
    schedule_title: 'プログラム（ジャカルタ時間）',
    details: [
      { label: '名称',     value: FULL_TITLE + '<br>' + FULL_SUB },
      { label: '開催日',   value: '2026年12月9日（水）' },
      { label: '時間',     value: '15:00〜17:00（ジャカルタ時間）' },
      { label: '開催形式', value: 'オンライン（Zoom）<br><span style="font-size:0.9em;color:#4a5568">お申し込み後、当日の視聴に必要なURLをご案内いたします。</span>' },
      { label: '締切',     value: '2026年12月9日（水）午前10:00（ジャカルタ時間）' },
      { label: '主催',     value: 'PT WILLSEED PARTNERS INDONESIA' },
      { label: '共催',     value: '株式会社フォーポイント' },
      { label: '参加費',   value: '無料' },
      { label: '対象',     value: TARGET_TXT + '<br><span style="font-size:0.9em;color:#4a5568">' + TARGET_NOTE + '</span>' },
      { label: 'お問合せ', value: '<span style="display:block;line-height:2">セミナー担当：松下・友澤<br><a href="mailto:support@ws-partners.com.sg" style="color:var(--primary)">support@ws-partners.com.sg</a><br><a href="tel:+6282321228694" style="color:var(--primary)">+62 823 2122 8694</a></span>' }
    ],
    schedule: [
      {
        part: '15:00〜15:40',
        title: '第1部：' + P1_TITLE + ' ' + P1_SUB,
        body: `<span style="display:block;font-size:0.9em;color:#4a5568;margin-bottom:8px">登壇：加藤 豪（株式会社フォーポイント 代表取締役）</span>
<strong>1. 生成AIの基礎と企業利用におけるセキュリティ</strong><br>
・生成AIの仕組みと、できること・できないこと<br>
・入力した機密情報や個人情報はどう扱われるのか<br>
・法人向けAIサービスの安全な利用環境と、インドネシアの個人情報保護法への対応<br><br>
<strong>2. AI導入を成功させるための5つの秘訣</strong><br>
・「抽象化は人間、具体化はAI」という役割分担<br>
・AI時代に求められる人材とマネジメント<br>
・AIを活用した業務改革と経営戦略の考え方<br><br>
<strong>3. 自社業務のAI化をどこから始めるか</strong><br>
・AI化に適した業務の見極め方と優先順位の付け方<br>
・既存のAIツールでできること、システム開発が必要なこと<br>
・投資対効果の測定方法<br><br>
<strong>4. AI導入から社内定着・自走までのロードマップ</strong><br>
・安全な利用環境と社内ルールの整備<br>
・管理職・現場スタッフへのAI教育<br>
・社内のAI推進人材の育成と継続的な活用体制づくり`
      },
      {
        part: '15:40〜16:20',
        title: '第2部：' + P2_TITLE + ' ' + P2_SUB,
        body: `<span style="display:block;font-size:0.9em;color:#4a5568;margin-bottom:8px">登壇：加藤 健太（WS PARTNERS PTE LTD Managing Director）</span>
<strong>1. AI時代、なぜ現地マネジャーの課題解決力が重要なのか</strong><br>
・AIによる抽象化の可能性と限界<br>
・課題の本質を捉え、判断するために必要な力<br><br>
<strong>2. なぜ「もっと自分で考えて」が機能しないのか</strong><br>
・課題解決力の発揮を妨げる「論理・認識・知性」の3つの壁<br>
・日本人上司と現地マネジャーの間で起きる期待と行動のずれ<br><br>
<strong>3. 課題解決力を高める「抽象化」と、実践的な人材育成</strong><br>
・具体的な出来事から共通する問題を見いだし、本質的な課題を捉える思考プロセス<br>
・「論理・認識・知性」の違いに応じた、現地マネジャーへの働きかけ<br>
・考える力を育てる仕事の任せ方・問いかけ・フィードバック<br>
・本人の思考の現在地に合わせた業務難易度と指導方法の設計`
      },
      {
        part: '16:20〜17:00',
        title: '質疑応答',
        body: ''
      }
    ]
  },

  instructor: {
    en: 'SPEAKER',
    title: '登壇者紹介',
    items: [
      {
        img: 'images/photo_trainer_kato_go.jpg',
        name: '加藤 豪　Go Kato',
        role: '第1部 登壇<br>株式会社フォーポイント 代表取締役<br>PT FOUR POINT INDONESIA President Director<br>米国公認会計士（USCPA, Inactive）',
        profile: '東京の大手コンサルティングファームで会計・税務・内部監査業務に従事し、多数の国際案件を経験。2016年に同社タイ現地法人のManaging Director、2017年に日系会計事務所のインドネシア現地法人Directorに就任。2022年にPT FOUR POINT INDONESIA、2024年に株式会社フォーポイントを設立。<br><br>現在は東南アジア進出企業に対し、会計・税務、労務・法務・M&amp;A等の支援を行うとともに、システム開発、AIコンサルティングにも取り組む。社内には会計士・税理士・弁護士などの専門家に加え、多数のITエンジニアを擁し、「AI×士業」という独自の強みを活かしたプロダクトの開発を推進している。自社業務へのAI導入・活用を積極的に進めており、その実践経験をもとに、セキュリティと業務効率化を両立させるAI導入のあり方を提案している。'
      },
      {
        img: '/assets/photos/trainers/kato.jpg',
        name: '加藤 健太　Kenta Kato',
        role: '第2部 登壇<br>WS PARTNERS PTE LTD　Managing Director',
        profile: 'ASEANの日系企業に対し、人材育成・組織開発・経営変革を支援する WS PARTNERS の Managing Director。現地マネジャーの育成と、組織としての課題解決力の向上を、経営の立場から支援している。<br><br>キャリアを通じて一貫して「人と組織の可能性の最大化」をミッションとして従事。リクルートグループにて入社3年目に年間MVP（約2,000名中1位）を受賞し、新規事業開発コンテスト「NEW RING」では準グランプリを獲得。精神障がい者の社会復帰支援事業の立ち上げを推進した。その後、株式会社ウィルシードにて大手商社・自動車関連メーカー向けの人材教育コンサルタントとして育成体系構築やマネジメント研修を担当。<br><br>2017年にWS Partnersの立ち上げに参画し、2018年より弊社代表としてASEAN（マレーシア、シンガポール、インドネシア、タイ、ベトナム）の日系企業の人材育成・組織開発を推進している。現地文化と企業の構造的課題を踏まえ、「ReactiveからProactiveへの転換」を軸としたGM育成施策や組織変革プロジェクトを多数推進。人の思考発達や組織知のメカニズム探究を仕事の中心とし、スポーツマネジメントとの橋渡しにも関心を持つ。'
      }
    ]
  },

  pricing: null,
  faq:     null,

  cancel: {
    en: '',
    title: 'AI活用を進める今、現地マネジャーの課題解決力をどう高めますか。',
    body: `<p>AIを安全に使う仕組みと、AIの分析や提案を現場の判断・行動につなげる人の力。どちらも、自社の成果を高めるために必要です。</p>
<p>第1部では、セキュリティを確保しながらAIを導入し、現場に定着させる進め方を解説します。第2部では、「論理・認識・知性」の3つの観点から、現地マネジャーの課題解決力の発揮を妨げる要因を読み解き、仕事の任せ方や問いかけ方を具体的に考えます。</p>
<p style="font-weight:700">AIの導入・活用と、現地マネジャーの課題解決力を高めるマネジメント。その両方を学べるセミナーです。</p>
<div style="background:rgba(243,156,18,.15);border:2px solid #f39c12;border-radius:10px;padding:20px 24px;margin:14px 0 18px 0">
  <p style="font-size:0.85rem;font-weight:700;color:#f39c12;letter-spacing:0.05em;margin:0 0 12px 0">── こんな方にぜひご参加ください ──</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>安全にAIを導入し、社内で継続的に活用できる体制をつくりたい方
    </li>
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>現地マネジャーに、もっと主体的に課題を発見・解決してほしいと考えている方
    </li>
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>「もっと自分で考えて」と伝えても期待する判断につながらず、任せ方や育て方を見直したい方
    </li>
  </ul>
</div>
<p>参加費は<strong>無料</strong>、オンライン（Zoom）でどこからでもご参加いただけます。</p>`
  },

  contact: {
    title: 'お問い合わせ先',
    body: `セミナーに関するご質問はお気軽にご連絡ください。<br><br>
<span style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
  <span style="display:flex;align-items:flex-start;gap:10px"><span style="opacity:.6;min-width:20px">👤</span><span>セミナー担当：<strong>松下・友澤</strong></span></span>
  <span style="display:flex;align-items:flex-start;gap:10px"><span style="opacity:.6;min-width:20px">✉</span><span><a href="mailto:support@ws-partners.com.sg" style="color:rgba(255,255,255,.85);text-decoration:underline">support@ws-partners.com.sg</a></span></span>
  <span style="display:flex;align-items:flex-start;gap:10px"><span style="opacity:.6;min-width:20px">📞</span><span><a href="tel:+6282321228694" style="color:rgba(255,255,255,.85);text-decoration:underline">+62 823 2122 8694</a></span></span>
</span>`
  },

  apply: {
    en: 'APPLY',
    title: 'セミナーへのお申し込み',
    body: 'AIの導入・活用と、現地マネジャーの課題解決力を高めるマネジメント。その両方を学べるセミナーです。<br><br>下記ボタンより、Zoomの参加登録ページへお進みください。<strong>参加費は無料</strong>です。<br>ご登録後、当日の視聴に必要なURLをご案内いたします。',
    mailto_subject: '',
    mailto_href: ''
  },

  company: {
    en: 'ABOUT US',
    title: '弊社について',
    img: '/assets/images/company_jakarta.webp',
    name: 'PT WILLSEED PARTNERS INDONESIA',
    items: [
      { label: '所在地',   value: 'Flow Office Space, MidPlaza 1 Jl. Jend. Sudirman Kav. 10-11, Karet Tengsin Tanah Abang, Jakarta Pusat 10220' },
      { label: '電話番号', value: '+62 823 2122 8694' },
      { label: '設立',    value: '2026年4月1日' },
      { label: '代表者',  value: 'Director 櫻井 和樹' },
      { label: '', value: '<strong style="display:block;font-size:1.05em;color:var(--text-main);margin-top:18px;padding-top:18px;border-top:1px solid #e2e8f0">WS PARTNERS PTE LTD</strong>' },
      { label: '【WS PARTNERSのミッション】', value: '私たちWS PARTNERSは、ASEANの日系現地法人を対象に、現地人材の育成・駐在員の現地適応・組織や人材上の問題解決を通じて、日本企業のグローバルビジネスに貢献します。' },
      { label: '所在地',   value: '1 MARINA BOULEVARD, #20-00, ONE MARINA BOULEVARD, SINGAPORE 018989' },
      { label: '電話番号', value: '+65 6978 4066' },
      { label: '設立',    value: '2015年12月1日' },
      { label: 'Web',     value: '<a href="https://ws-partners.com.sg/" style="color:var(--primary)" target="_blank">https://ws-partners.com.sg/</a>' },
      { label: '株主',    value: '株式会社ウィル・シード / CL HOLDINGS PTE LTD' },
      { label: '代表者',  value: 'Managing Director 加藤 健太' },
      { label: '事業内容', value: 'ASEAN諸国における日系現地法人および海外グループ企業向けに、コンサルティングおよび教育サービスを提供<br>※河合塾グループ（株式会社KJホールディングス）の一員です' }
    ]
  },

  footer: {
    links: [
      { href: 'https://ws-partners.com.sg/', label: '会社サイト' },
      { href: 'mailto:support@ws-partners.com.sg', label: 'お問い合わせ' }
    ],
    address: 'Flow Office Space, MidPlaza 1 Jl. Jend. Sudirman Kav. 10-11, Karet Tengsin Tanah Abang, Jakarta Pusat 10220',
    copyright: '© 2026 PT WILLSEED PARTNERS INDONESIA. All Rights Reserved.'
  },

  forms: {
    google_url:        '',
    hubspot_portal_id: '',
    hubspot_form_id:   '',
    hubspot_region:    'na1',
    thank_you_url:     '',
    zoom_url:          'https://us02web.zoom.us/webinar/register/WN__3tW1wQBTMqDAL80X44Ksg'
  }
};
