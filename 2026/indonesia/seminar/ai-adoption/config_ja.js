/* ============================================================
   LP_CONFIG — インドネシア 共催セミナー（WS PARTNERS × フォーポイント）日本語版【下書き】
   Path: 2026/indonesia/seminar/ai-adoption/config_ja.js
   Base: 2026/malaysia/seminar/cross-cultural/（FITOKIO共催）
   Draft: 2026-11-10 フォーポイント側ブロックのみ原稿反映。
          「TBD」の黄色マーカー部分は弊社情報・開催情報の確定後に差し替える。
   ============================================================ */
var TBD = function (t) {
  return '<span style="background:#fff3bf;color:#7c5e00;font-weight:700;padding:0 4px;border-radius:3px">【TBD】' + t + '</span>';
};

window.LP_CONFIG = {

  meta: {
    lang: 'ja',
    title: '無料合同セミナー：AI導入・活用の進め方 | WS PARTNERS × フォーポイント',
    description: '生成AIを安全に導入し、現場に定着させるための進め方を解説する無料合同セミナー。WS PARTNERS × 株式会社フォーポイント共催。インドネシア（ジャカルタ）開催。',
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
    img_main: 'images/photo_trainer_wsp_tbd.png',
    img_sub1: 'images/photo_trainer_kato_go.jpg',
    img_sub2: '',
    subtitle: '第一部：' + TBD('弊社パートのタイトル') + '<br>第二部：AI導入・活用の進め方 ～セキュアな環境整備から、現場で使える仕組みづくりまで～',
    title: '無料合同セミナー：<br>' + TBD('全体タイトル'),
    format_label: '【会場】',
    format: TBD('会場名'),
    date_label: '【日時】',
    date: '<strong style="font-size:0.78em">' + TBD('開催日・時間') + '</strong>',
    deadline_label: '【参加費】',
    deadline: '<strong>無料</strong>',
    close_label: '【申込締切】',
    close: TBD('申込締切'),
    cta_text: '無料で申し込む',
    target_label: '【対象】',
    target: TBD('全体の対象者（弊社パートと合わせて確定）'),
    badge_en: '無料合同セミナー',
    badge_ja: '日本語で実施！'
  },

  consult: {
    en: 'ABOUT THIS SEMINAR',
    title: '無料合同セミナー：' + TBD('全体タイトル'),
    body: `<h3 style="font-size:1.1rem;font-weight:700;color:var(--primary);border-left:4px solid var(--primary);padding-left:12px;margin:0 0 16px 0">第一部：${TBD('弊社パートのタイトル')}</h3>
<p>${TBD('弊社パートの概要・得られること（原稿受領後に差し替え）')}</p>

<h3 style="font-size:1.1rem;font-weight:700;color:var(--primary);border-left:4px solid var(--primary);padding-left:12px;margin:32px 0 6px 0">第二部：AI導入・活用の進め方</h3>
<p style="font-size:0.95rem;color:var(--text-muted);margin:0 0 16px 16px">～セキュアな環境整備から、現場で使える仕組みづくりまで～</p>
<p style="font-size:1.15rem;font-weight:700;line-height:1.7;color:#1a202c;margin:0 0 6px 0">AI導入は、ツール選びではなく<br><span style="background:linear-gradient(transparent 55%, #ffe08a 55%)">「業務・人・ルールの再設計」</span>から。</p>
<p style="font-weight:700;color:var(--primary);margin:0 0 18px 0">「安全に使える」から「現場で成果を生み出す」へ。</p>
<p>生成AIの進化により、これまで専門知識や多額のシステム投資が必要だった業務の効率化・自動化が、より身近なものになっています。</p>
<p>一方で、「社内情報をAIに入力しても安全なのか」「どの業務からAI化すればよいのか」「導入しても社員が使いこなせないのではないか」といった懸念から、導入が進まない企業も少なくありません。</p>
<p>本セミナーでは、会計・税務・法務の専門業務にAIを取り入れ、AIコンサルティングも行っている株式会社フォーポイントの実践経験をもとに、企業が<strong>安全かつ効果的にAIを導入・活用するための考え方と具体的な進め方</strong>を解説します。</p>
<p>AI導入を単なるツールの導入として捉えるのではなく、業務の見直し、セキュリティ環境の整備、人材育成、社内での運用体制づくりまで、一連のプロセスを体系的にご紹介します。</p>
<div style="background:#e8f0fb;border:2px solid #0050b3;border-radius:12px;padding:18px 22px;margin:16px 0">
  <p style="font-size:0.85rem;font-weight:700;color:#0050b3;letter-spacing:0.1em;margin:0 0 12px 0">── 本セミナーで得られること ──</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
    <li style="display:flex;align-items:flex-start;gap:10px;font-weight:700;font-size:1rem;color:#1a202c">
      <span style="color:#0050b3;flex-shrink:0">✓</span><span>生成AIの基礎と、企業利用で押さえるべき<strong>セキュリティ</strong></span>
    </li>
    <li style="display:flex;align-items:flex-start;gap:10px;font-weight:700;font-size:1rem;color:#1a202c">
      <span style="color:#0050b3;flex-shrink:0">✓</span><span>AI導入を成功させるための<strong>5つの秘訣</strong></span>
    </li>
    <li style="display:flex;align-items:flex-start;gap:10px;font-weight:700;font-size:1rem;color:#1a202c">
      <span style="color:#0050b3;flex-shrink:0">✓</span><span>自社業務のAI化を<strong>どこから始めるか</strong>の見極め方</span>
    </li>
    <li style="display:flex;align-items:flex-start;gap:10px;font-weight:700;font-size:1rem;color:#1a202c">
      <span style="color:#0050b3;flex-shrink:0">✓</span><span>AI導入から社内定着・自走までの<strong>ロードマップ</strong></span>
    </li>
  </ul>
</div>
<p style="font-weight:700;color:var(--primary);margin-top:18px">「守りを固めてから、攻めに転じる。」――セキュリティと業務効率化を両立するAI導入を、ぜひこの機会にご確認ください。</p>`,
    btn_text: '無料で申し込む',
    btn_url: '#apply'
  },

  issues: {
    en: 'CHALLENGES',
    title: 'このようなお悩みはありませんか？',
    img: '/assets/illustrations/il_c_dx_ai_cloud.png',
    items: [
      TBD('弊社パートのお悩み（原稿受領後に追加）'),
      '<span style="display:block"><strong>AI導入に興味はあるが、何から始めればよいかわからない</strong><span style="display:block;font-size:0.92em;color:var(--text-muted);margin-top:4px">自社のどの業務にAIを活用できるのか、具体的なイメージが持てない。</span></span>',
      '<span style="display:block"><strong>情報漏えいやセキュリティが心配で、AI導入に踏み切れない</strong><span style="display:block;font-size:0.92em;color:var(--text-muted);margin-top:4px">機密情報・個人情報の取扱いや、日本本社の情報システム部門の承認が課題となっている。</span></span>',
      '<span style="display:block"><strong>ChatGPTやCopilotなどを導入したものの、十分に活用できていない</strong><span style="display:block;font-size:0.92em;color:var(--text-muted);margin-top:4px">一部の社員だけが利用しており、組織全体の生産性向上につながっていない。</span></span>',
      '<span style="display:block"><strong>経理・人事・総務などの間接業務を効率化したい</strong><span style="display:block;font-size:0.92em;color:var(--text-muted);margin-top:4px">資料作成、翻訳、データ集計、報告業務などに時間を取られ、本来注力すべき業務に十分な時間を使えていない。</span></span>',
      '<span style="display:block"><strong>AIを活用できる人材を育て、社内で継続的に活用したい</strong><span style="display:block;font-size:0.92em;color:var(--text-muted);margin-top:4px">外部ベンダーに頼り続けるのではなく、自社主導でAIを活用・改善できる体制を構築したい。</span></span>'
    ]
  },

  voices:   null,
  features: null,
  target:   null,

  program: {
    en: 'EVENT OVERVIEW',
    title: '開催概要',
    detail_title: 'セミナー情報',
    schedule_title: 'タイムテーブル（ジャカルタ時間）',
    details: [
      { label: '名称',     value: '無料合同セミナー：' + TBD('全体タイトル') },
      { label: '開催日',   value: TBD('開催日') },
      { label: '時間',     value: TBD('時間（ジャカルタ時間）') },
      { label: '締切',     value: TBD('申込締切') },
      { label: '会場',     value: TBD('会場名・住所') },
      { label: '主催',     value: 'PT WILLSEED PARTNERS INDONESIA' },
      { label: '共催',     value: '株式会社フォーポイント' },
      { label: '参加費',   value: '無料' },
      { label: '対象',     value: 'インドネシアをはじめとする海外拠点の経営者・経営幹部、管理部門責任者、人事・総務・経理責任者、IT・DX推進担当者など<br><span style="font-size:0.9em;color:#4a5568">特に、AIの導入を検討している企業や、導入後の社内活用・定着に課題を感じている企業の皆様におすすめです。</span><br>' + TBD('弊社パートの対象者と統合') },
      { label: 'お問合せ', value: '<span style="display:block;line-height:2">セミナー担当：' + TBD('担当者名') + '<br><a href="mailto:support@ws-partners.com.sg" style="color:var(--primary)">support@ws-partners.com.sg</a><br><a href="tel:+6282321228694" style="color:var(--primary)">+62 823 2122 8694</a></span>' }
    ],
    schedule: [
      {
        part: TBD('時間'),
        title: '第一部：' + TBD('弊社パートのタイトル'),
        body: TBD('弊社パートの講演内容')
      },
      {
        part: TBD('時間'),
        title: '第二部：AI導入・活用の進め方 ～セキュアな環境整備から、現場で使える仕組みづくりまで～',
        body: `<strong>1. 生成AIの基礎と企業利用におけるセキュリティ</strong><br>
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
        part: TBD('時間'),
        title: TBD('懇親会・質疑応答など'),
        body: ''
      }
    ]
  },

  instructor: {
    en: 'SPEAKER',
    title: '登壇者紹介',
    items: [
      {
        img: 'images/photo_trainer_wsp_tbd.png',
        name: '【TBD】弊社登壇者名',
        role: 'WS PARTNERS PTE LTD',
        profile: TBD('プロフィール')
      },
      {
        img: 'images/photo_trainer_kato_go.jpg',
        name: '加藤 豪　Go Kato',
        role: '株式会社フォーポイント 代表取締役<br>PT FOUR POINT INDONESIA President Director<br>米国公認会計士（USCPA, Inactive）',
        profile: '東京の大手コンサルティングファームで会計・税務・内部監査業務に従事し、多数の国際案件を経験。2016年に同社タイ現地法人のManaging Director、2017年に日系会計事務所のインドネシア現地法人Directorに就任。2022年にPT FOUR POINT INDONESIA、2024年に株式会社フォーポイントを設立。<br><br>現在は東南アジア進出企業に対し、会計・税務、労務・法務・M&amp;A等の支援を行うとともに、システム開発、AIコンサルティングにも取り組む。社内には会計士・税理士・弁護士などの専門家に加え、多数のITエンジニアを擁し、「AI×士業」という独自の強みを活かしたプロダクトの開発を推進している。自社業務へのAI導入・活用を積極的に進めており、その実践経験をもとに、セキュリティと業務効率化を両立させるAI導入のあり方を提案している。'
      }
    ]
  },

  pricing: null,
  faq:     null,

  cancel: {
    en: '',
    title: TBD('弊社パートの訴求見出し'),
    body: `<p>${TBD('弊社パートの訴求本文（ベースLPではここに「マネジメントは自然と身に付くスキルではありません」の段落）')}</p>
<div style="background:rgba(243,156,18,.15);border:2px solid #f39c12;border-radius:10px;padding:20px 24px;margin:14px 0 18px 0">
  <p style="font-size:0.85rem;font-weight:700;color:#f39c12;letter-spacing:0.05em;margin:0 0 12px 0">── こんな方にぜひご参加ください ──</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>AIの導入を検討しているが、安全性や進め方に不安がある方
    </li>
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>AIを導入したものの、社内での活用・定着に課題を感じている方
    </li>
    <li style="display:flex;align-items:flex-start;gap:12px;font-weight:700;font-size:1rem;color:#fff">
      <span style="color:#f39c12;font-size:1.2em;line-height:1;flex-shrink:0">✔</span>AIに仕事を任せ、人はより付加価値の高い仕事へシフトしたい方
    </li>
  </ul>
</div>
<p>参加費は<strong>無料</strong>です。ぜひお気軽にご参加ください。</p>`
  },

  contact: {
    title: 'お問い合わせ先',
    body: `セミナーに関するご質問はお気軽にご連絡ください。<br><br>
<span style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
  <span style="display:flex;align-items:flex-start;gap:10px"><span style="opacity:.6;min-width:20px">👤</span><span>セミナー担当：${TBD('担当者名')}</span></span>
  <span style="display:flex;align-items:flex-start;gap:10px"><span style="opacity:.6;min-width:20px">✉</span><span><a href="mailto:support@ws-partners.com.sg" style="color:rgba(255,255,255,.85);text-decoration:underline">support@ws-partners.com.sg</a></span></span>
  <span style="display:flex;align-items:flex-start;gap:10px"><span style="opacity:.6;min-width:20px">📞</span><span><a href="tel:+6282321228694" style="color:rgba(255,255,255,.85);text-decoration:underline">+62 823 2122 8694</a></span></span>
</span>`
  },

  apply: {
    en: 'APPLY',
    title: 'セミナーへのお申し込み',
    body: `下記の申込フォームからお申し込みください。<strong>参加費は無料</strong>です。<br>お申し込み後、改めてメールにて当日のご案内をいたします。<br><br>${TBD('申込フォーム（GASビルダーで生成予定）')}`,
    mailto_subject: '',
    mailto_href: '@@MAILTO_HREF@@'
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
    thank_you_url:     '_thank-you.html'
  }
};
