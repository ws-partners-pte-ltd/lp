/* ==================================================================
   LP_CONFIG — タイ 任せるマネジメント研修（全5回・スクール型）日本語版
   Path: 2026/thailand/training/delegation/config_ja.js
   Created: 2026-09-10
   ------------------------------------------------------------------
   ⚠️ このLPは「公開型研修ファミリー」です。本文は ja/index.html に
      直書きされています。このファイルが実際に効くのは forms のみ。
   ⚠️ 日程・受講料・講師が未確定のため、ja/index.html と th/index.html に
      <meta name="robots" content="noindex, nofollow"> を入れています。
      公開ゲート（ヒアリングシート §2）を満たしたら両ファイルから削除すること。
   ================================================================== */
window.LP_CONFIG = {

  meta: {
    lang: 'ja',
    title: '任せるマネジメント研修（全5回・スクール型） | タイ | WS PARTNERS',
    description: 'タイの日系企業のマネジャー向け、全5回・スクール型オンラインプログラム。プレイヤー型マネジャーから人を通じて成果を生み出すマネジャーへ。',
    other_lang_label: 'ภาษาไทย',
    other_lang_url:   '../th/'
  },

  header: {
    phone: '+65-6978-4066',
    hours: '受付時間：平日 9:00～18:00（シンガポール時間）',
    cta_text: 'お問い合わせ'
  },

  hero: {
    subtitle: 'プレイヤー型マネジャーから、人を通じて成果を生み出すマネジャーへ',
    title: '「任せたい。でも、任せられない。」',
    format: 'オンライン開催（Web会議ツール Zoom）',
    sessions: '1回2時間 × 全5回（継続型）',
    target: 'タイの日系企業のマネジャー・管理職候補',
    // ▼▼ 確定したら書き換える（あわせて ja/index.html の該当箇所も更新） ▼▼
    start: '2026年11月開始',
    capacity: '定員10名（他社合同クラス・1名から参加可）',
    // ▼▼ 未確定 ▼▼
    date: '各回の日程は調整中',
    close: '申込締切：日程確定後に案内',
    price: '受講料：調整中',
    language: '実施言語：調整中（タイ語実施 or 日本語＋通訳）'
  },

  instructor: {
    // 確定（2026-09-10）。写真は /assets/photos/trainers/alia.jpg
    name: 'Alia Ratanavirakul（アリア・ラタナヴィラクン）',
    role: 'WS PARTNERS PTE LTD　Facilitator',
    photo: '/assets/photos/trainers/alia.jpg'
    // ⚠️ タイ語版の氏名はローマ字表記のまま。タイ語綴りは本人確認が必要
  },

  company: {
    name: 'WS PARTNERS PTE LTD',
    address: '1 MARINA BOULEVARD, #20-00, ONE MARINA BOULEVARD, SINGAPORE 018989',
    phone: '+65 6978 4066',
    founded: '2015年12月1日'
  },

  contact: {
    email: 'support@ws-partners.com.sg',
    training: 'ヒア（日本語・英語）',
    admin:    'カンタヤー（日本語・英語・タイ語）'
  },

  /* ------------------------------------------------------------------
     申込フォーム
     ------------------------------------------------------------------
     日程確定後、formbuilder_kokai.js（公開型研修・対訳版）で
     フォーム＋GASを生成し、実行ログの値をここに貼る。
     google_url に値が入ると、index.html 側のJSが「準備中」ボックスを
     自動的に申込ボタンへ差し替える。
     ⚠️ mailto_href を設定する場合、index.html はハードコードなので
        必ず両ファイルを同時に更新すること。
     ⚠️ thank_you_url に /_template/_thank-you.html を指定してはならない。
        個別の _thank-you.html を作るか、ページ内サンキューを使う。
     ------------------------------------------------------------------ */
  // スプレッドシートのタブ名は 2026年11月開始のため 2611-Delegation を想定（Kazu未確認）
  forms: {
    google_url:       '',
    hubspot_form_id:  '',
    hubspot_region:   'na1',
    thank_you_url:    '',
    mailto_subject:   '',
    mailto_href:      ''
  }
};
