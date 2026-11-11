/* ============================================================
   LP_CONFIG — インドネシア 共催セミナー（フォーポイント × WS PARTNERS）日本語版【下書き】
   Path: 2026/indonesia/seminar/ai-adoption/config_ja.js
   Base: 2026/malaysia/seminar/cross-cultural/（FITOKIO共催）
   2026-11-10 v2: WSP原稿「WSP フォーポイント共催セミナー LP掲載原稿 20261110」
                 （Google Doc 1bm6qy-_pwrsux_EUw4feut5PNNS4onCwwr1qn0R5HNc）を反映。
                 第1部＝フォーポイント、第2部＝WS PARTNERS。オンライン（Zoom）開催。
                 申込は Zoom 参加登録に一本化（forms.zoom_url）。Googleフォーム・mailto・GAS は作らない。
   2026-11-11 v3: 申込締切・担当・時間配分・Zoom登録URLを確定（松下さん連絡）。本公開。
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
var P2_TITLE     = 'AI時代、インドネシア人マネジャーの「考える力」をどう育てるか';
var P2_SUB       = '～「論理・認識・知性」から見直す、任せ方と育て方～';
var DATE_TXT     = '2026年12月9日（水）15:00〜17:00（ジャカルタ時間）';
var TARGET_TXT   = 'インドネシア日系企業の経営者・経営幹部、拠点責任者、日本人マネジャー、人事・人材育成責任者、管理部門責任者、IT・DX推進担当者';
var TARGET_NOTE  = 'AI導入による業務の生産性向上と、現地マネジャーへの権限移譲・育成をあわせて進めたい方におすすめです。';

window.LP_CONFIG = {

  meta: {
    lang: 'ja',
    title: 'AI時代のインドネシア拠点経営 セミナー | WS PARTNERS × フォーポイント',
    description: '2026年12月9日15:00〜17:00（現地時間）、オンライン（Zoom）開催。インドネシア日系企業向けに、安全なAI導入・定着の仕組みと、現地マネジャーの考える力を育てる任せ方を解説。フォーポイントとWS PARTNERSが、AI活用と人材育成をつなぎます。',
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
    subtitle: '第1部：' + P1_TITLE + ' ' + P1_SUB + '<br>第2部：' + P2_TITLE + ' ' + P2_SUB,
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
      /* ── 第1部：フォーポイント ── */
      PART_H('第1部', P1_TITLE, P1_SUB, true) +
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
`<p style="font-size:1.15rem;font-weight:700;line-height:1.7;color:#1a202c;margin:0 0 18px 0"><span style="background:linear-gradient(transparent 55%, #ffe08a 55%)">AIが出した案を、自社の判断に変えられるか。</span></p>
<p>AIで情報整理や資料作成が効率化されても、「何を課題として捉えるか」「提案の前提は妥当か」「何を優先し、現場をどう動かすか」という判断は、経営者やマネジャーに求められます。AIを使うほど、自社の状況を踏まえて問いを立て、答えを確かめる力が重要になります。</p>
<p>一方、現地マネジャーに「もっと自分で考えて」と伝えても、事情の説明やその場の対応で止まってしまう。言葉は通じているのに、期待した提案が出てこない。こうした場面を、意欲や能力の一言で片づけていないでしょうか。</p>
<p>本講演では、納得する筋道の違いである<strong>「論理」</strong>、言葉から思い浮かべる行動の違いである<strong>「認識」</strong>、その仕事で複雑な関係を組み立てる力である<strong>「知性」</strong>の三つから、育成上の課題を整理します。具体例から共通課題を捉え、対策を比較し、現場の行動に落とし込む。その「具体と抽象の往復」を育てるために、任せる仕事、問いかけ、支援の仕方をどう変えるかを解説します。</p>` +
      GAIN_BOX('第2部で得られること', [
        'AIに任せる業務と、人が担う<strong>課題設定・判断</strong>を整理する視点',
        '現地マネジャーの提案が期待に届かない理由を、<strong>「論理・認識・知性」</strong>から見立てる方法',
        '事実整理から比較・抽象化・対策の検討へ、<strong>思考を進める問いかけ</strong>の考え方',
        '本人の現在地に合わせ、<strong>仕事の難易度、判断範囲、途中レビュー</strong>を設計する方法'
      ]),
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
      ISSUE('AIで資料は作れても、提案の妥当性を判断できない', '整った報告や改善案は出てくるが、自社の状況や制約を踏まえているのか、結局日本人側が確かめている。'),
      ISSUE('「もっと考えて」と伝えても、提案が深まらない', '現地マネジャーに改善を任せたいのに、出来事の説明や目の前の応急処置で止まってしまう。'),
      ISSUE('同じ言葉を使っているのに、期待する行動が違う', '「挑戦して」「営業を強化して」と伝えても、相手が思い描く仕事と、上司が求める成果がかみ合わない。'),
      ISSUE('現地マネジャーに、どこまで任せてよいか迷う', '業務を任せたい一方で、支援の仕方や判断範囲が曖昧になり、問題の整理や意思決定を引き取り続けている。')
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
        body: `<span style="display:block;font-size:0.9em;color:#4a5568;margin-bottom:8px">登壇：加藤 健太（WS PARTNERS PTE LTD 代表）</span>
<strong>1. AI時代にマネジャーが担う思考と判断</strong><br>
AIによる効率化が進む仕事と、人が責任を持つ課題設定・優先順位の判断を整理。AIの提案を自社の現場に照らして検証し、人を動かすマネジメントを考えます。<br><br>
<strong>2. なぜ「もっと自分で考えて」が機能しないのか</strong><br>
「事情の説明で終わる」「同じ言葉でも期待する行動が違う」「応急処置にとどまる」。こうした場面を「論理・認識・知性」の三つから捉え直し、育成の焦点を明確にします。<br><br>
<strong>3. 具体と抽象を行き来する力をどう育てるか</strong><br>
一つの出来事を説明する段階から、複数の事例を比較し、共通する課題を見つけ、対策を選ぶ段階へ。架空の業務事例を使い、思考を一段深めるために必要な作業を分解します。<br><br>
<strong>4. 考える経験を積める任せ方と支援の設計</strong><br>
目的と期待成果、扱う範囲、判断できる権限、途中で確認する点を具体化。本人ができることを見ながら支援を減らし、分析や判断も任せられる組織に近づけるアプローチを紹介します。`
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
        role: '第2部 登壇<br>WS PARTNERS PTE LTD　代表（Managing Director）',
        profile: 'キャリアを通じて一貫して「人と組織の可能性の最大化」をミッションとして従事。リクルートグループにて入社3年目に年間MVP（約2,000名中1位）を受賞し、新規事業開発コンテスト「NEW RING」では準グランプリを獲得。精神障がい者の社会復帰支援事業の立ち上げを推進した。その後、株式会社ウィルシードにて大手商社・自動車関連メーカー向けの人材教育コンサルタントとして育成体系構築やマネジメント研修を担当。<br><br>2017年にWS Partnersの立ち上げに参画し、2018年より弊社代表としてASEAN（マレーシア、シンガポール、インドネシア、タイ、ベトナム）の日系企業の人材育成・組織開発を推進している。現地文化と企業の構造的課題を踏まえ、「ReactiveからProactiveへの転換」を軸としたGM育成施策や組織変革プロジェクトを多数推進。人の思考発達や組織知のメカニズム探究を仕事の中心とし、スポーツマネジメントとの橋渡しにも関心を持つ。'
      }
    ]
  },

  pricing: null,
  faq:     null,

  cancel: {
    en: '',
    title: 'AI活用を進める今、マネジャーに何を任せ、どう育てますか。',
    body: `<p>AIを安全に使う仕組みと、その出力を現場の判断・行動につなげる力。どちらも、自社の生産性を高めるために必要です。</p>
<p>第1部では、セキュリティを確保しながらAIを導入し、現場に定着させる進め方を解説します。第2部では、インドネシア人マネジャーの「考える力」を育てるために、期待する役割の伝え方と、仕事の任せ方を具体的に考えます。</p>
<p>AIに任せること、人に任せること、そして人が育つために必要な支援を、あわせて見直す機会としてご参加ください。</p>
<div style="background:rgba(243,156,18,.15);border:2px solid #f39c12;border-radius:10px;padding:20px 24px;margin:14px 0 18px 0">
  <p style="font-size:0.85rem;font-weight:700;color:#f39c12;letter-spacing:0.05em;margin:0 0 12px 0">── こんな方にぜひご参加ください ──</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>安全にAIを導入し、社内で継続的に活用できる体制をつくりたい方
    </li>
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>AIを使う現地マネジャーの、課題設定・分析・判断の力を高めたい方
    </li>
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>日本人が判断を引き取り続ける状態を変え、現地マネジャーに任せる範囲を広げたい方
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
    body: '下記ボタンより、Zoomの参加登録ページへお進みください。<strong>参加費は無料</strong>です。<br>ご登録後、当日の視聴に必要なURLをご案内いたします。',
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
