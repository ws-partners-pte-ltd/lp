/* ==================================================================
   LP_CONFIG — タイ 仕事の進め方・完遂力プログラム（全5回）日本語版
   Path: 2026/thailand/training/completion/config_ja.js
   Created: 2026-09-18
   ------------------------------------------------------------------
   ⚠️ このLPは「公開型研修ファミリー」です。本文は ja/index.html に
      直書きされています。このファイルが実際に効くのは forms のみ。
   ⚠️ 申込フォームが未作成のため（日程・締切・規定は 2026-09-24 に確定）、
      ja/index.html と th/index.html に
      <meta name="robots" content="noindex, nofollow"> を入れています。
      公開ゲート（ヒアリングシート §2）を満たしたら両ファイルから削除すること。
   ================================================================== */
window.LP_CONFIG = {

  meta: {
    lang: 'ja',
    title: '仕事の進め方・完遂力プログラム（全5回・スクール型） | タイ | WS PARTNERS',
    description: 'タイの日系企業のタイ人スタッフ向け、全5回・スクール型オンラインプログラム。報連相・問題解決・ロジカルシンキングを「一つの仕事を成果まで進める力」へつなぎます。',
    other_lang_label: 'ภาษาไทย',
    other_lang_url:   '../th/'
  },

  header: {
    phone: '+65-6978-4066',
    hours: '受付時間：平日 9:00～18:00（シンガポール時間）',
    cta_text: 'お問い合わせ'
  },

  hero: {
    subtitle: '報連相・問題解決・ロジカルシンキングを、仕事を進め、完遂する力へ',
    title: '任された仕事を、自律的に、最後まで。',
    format: 'オンライン開催（Web会議ツール Zoom）',
    sessions: '1回2時間 × 全5回（継続型）',
    target: 'タイの日系企業の一般スタッフ〜次期リーダー候補',
    // ▼▼ 確定（2026-09-18） ▼▼
    price: '受講料：SGD 900（1名・全5回）',
    price_note: '参考換算 約 THB 23,500（ECB 2026-09-16 レート 1 SGD ≒ 26.1 THB）',
    // ▼▼ 未確定。確定したら ja/index.html・th/index.html の該当箇所も更新 ▼▼
    start: '開講：2026年11月19日（木）',
    capacity: '定員8名程度（他社合同クラス・1名から参加可）',
    date: '11/19・11/26・12/3・12/17・12/24（木）14:00〜16:00 タイ時間',
    close: '申込締切：2026年11月5日（木）',
    language: '実施言語：タイ語（想定）'
  },

  instructor: {
    // 確定（2026-09-18）。写真は /assets/photos/trainers/alia.jpg
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
     ⚠️ スプレッドシートのタブ名は YYMM-Completion 形式（開始月の確定後に決定）。
     ------------------------------------------------------------------ */
  forms: {
    google_url:       '',
    hubspot_form_id:  '',
    hubspot_region:   'na1',
    thank_you_url:    '',
    mailto_subject:   '',
    mailto_href:      ''
  }
};
