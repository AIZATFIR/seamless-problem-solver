import { initScrollFloat } from './ScrollFloat.js';
import { TaskBreakdownEngine } from './src/TaskBreakdownEngine.js';
import { AIFlowchartParser } from './src/AIFlowchartParser.js';
import { AudioAmbientEngine } from './src/AudioAmbientEngine.js';
import { FlowchartEngine } from './src/FlowchartEngine.js';
import { FlowchartGraphRenderer } from './src/FlowchartGraphRenderer.js';
import { QuickScriptFlowParser } from './src/QuickScriptFlowParser.js';
import { MermaidTransmitterParser } from './src/MermaidTransmitterParser.js';
import { SpatialThinkingCanvas } from './src/SpatialThinkingCanvas.js';
import { FRAMEWORK_PRESETS } from './src/FrameworkPresets.js';

const translations = {
  id: {
    brandTag: "Flowchart & Problem Solver",
    navHome: "Main Flow",
    navCommunity: "Komunitas & Admin",
    navCreate: "Studio Flowchart",
    navBreathing: "Napas Calm",
    navJournal: "Jurnal",
    ambientLabelOn: "Heningkan",
    ambientLabelOff: "Suara Alam",
    btnAllFlows: "Lihat Semua Flowchart",

    // Flow Player
    btnBackNode: "Kembali",
    btnRestartFlow: "Mainkan Lagi",
    btnWriteJournal: "Tulis Catatan Refleksi",
    btnShareFlow: "Bagikan Flowchart",
    btnFullscreen: "Layar Penuh",
    btnExitFullscreen: "Keluar Layar Penuh",
    boxActiveStatus: "Kotak Flowchart Interaktif",
    boxClickHint: "Pilih opsi atau klik tombol Layar Penuh untuk fokus penuh",
    viewCardMode: "Kartu Interaktif",
    viewGraphMode: "Peta Diagram Visual",

    // Community
    adminBadgeLabel: "Flowchart Pilihan Admin (12+ Presets)",
    communityHeaderTitle: "Flowchart Unik & Komunitas",
    communityHeaderSub: "Jelajahi flowchart kocak, stoik, dan logika sehari-hari yang siap dimainkan & disesuaikan.",
    btnCreateNewFlow: "Buat Flowchart Baru",
    phSearchFlow: "Cari flowchart...",
    catAll: "Semua",
    catAdmin: "🔥 Official Admin",
    catHumor: "Humor & Meme",
    catStoic: "Stoik & Hidup",
    catWork: "Kerja & Logika",
    btnPlayFlow: "Mainkan Flowchart",

    // Three Pillars
    sectionTitle: "Tiga Pilar Ketenangan",
    sectionSubtitle: "Prinsip dasar Stoikisme untuk menjaga pikiran tetap jernih di tengah badai kehidupan.",
    card1Title: "Kesadaran Murni",
    card1Desc: "Mengenali dan memisahkan fakta obyektif dari persepsi emosional adalah langkah pertama menuju kedamaian.",
    card2Title: "Tindakan Jernih",
    card2Desc: "Fokuskan seluruh perhatian dan usaha pada hal-hal yang berada langsung dalam pengaruh kendalimu.",
    card3Title: "Penerimaan Tulus",
    card3Desc: "Kedamaian tak tergoyahkan ditemukan saat kita berdamai dengan hasil akhir yang di luar kendali.",
    wisdomLabel: "Kutipan Bijak Hari Ini",
    btnNewQuote: "Kutipan Lain",

    // Breathing & Journal
    breathingModalTitle: "Napas Relaksasi 4-7-8",
    breathingModalSub: "Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik.",
    btnStart: "Mulai Napas",
    btnPause: "Hentikan Napas",
    journalTitle: "Catatan Ketenangan",
    labelProblem: "Apa yang sedang membebani pikiranmu?",
    labelAction: "Langkah nyata / Sikap penerimaan:",
    btnSaveJournal: "Simpan Catatan",
    journalListTitle: "Riwayat Refleksi",
    footerPhilosophy: "Filosofi",
    footerCommunity: "Komunitas",
    footerBreathing: "Latihan Napas",
    footerJournal: "Jurnal Refleksi"
  },
  en: {
    brandTag: "Flowchart & Problem Solver",
    navHome: "Main Flow",
    navCommunity: "Community & Admin",
    navCreate: "Flowchart Studio",
    navBreathing: "Calm Breath",
    navJournal: "Journal",
    ambientLabelOn: "Mute",
    ambientLabelOff: "Nature Sound",
    btnAllFlows: "View All Flowcharts",

    // Flow Player
    btnBackNode: "Back",
    btnRestartFlow: "Play Again",
    btnWriteJournal: "Write Reflection Journal",
    btnShareFlow: "Share Flowchart",
    btnFullscreen: "Fullscreen",
    btnExitFullscreen: "Exit Fullscreen",
    boxActiveStatus: "Interactive Flowchart Field",
    boxClickHint: "Select option or click Fullscreen button for total focus",
    viewCardMode: "Interactive Card",
    viewGraphMode: "Visual Diagram Map",

    // Community
    adminBadgeLabel: "Admin Featured Flowcharts (12+ Presets)",
    communityHeaderTitle: "Unique & Community Flowcharts",
    communityHeaderSub: "Explore hilarious memes, Stoic wisdom, and everyday logic flowcharts ready to play & customize.",
    btnCreateNewFlow: "Create Custom Flowchart",
    phSearchFlow: "Search flowchart...",
    catAll: "All",
    catAdmin: "🔥 Official Admin",
    catHumor: "Humor & Meme",
    catStoic: "Stoic & Life",
    catWork: "Work & Logic",
    btnPlayFlow: "Play Flowchart",

    // Three Pillars
    sectionTitle: "Three Pillars of Calm",
    sectionSubtitle: "Core principles of classical wisdom to maintain clarity amidst life's storms.",
    card1Title: "Pure Awareness",
    card1Desc: "Separating objective reality from emotional distortions is the first step toward lasting peace.",
    card2Title: "Clear Action",
    card2Desc: "Direct all energy toward what is within your direct circle of influence.",
    card3Title: "Sincere Acceptance",
    card3Desc: "Unshakable serenity is discovered when we make peace with outcomes beyond our control.",
    wisdomLabel: "Daily Wisdom Quote",
    btnNewQuote: "New Quote",

    // Breathing & Journal
    breathingModalTitle: "4-7-8 Relaxing Breath",
    breathingModalSub: "Inhale for 4s, hold for 7s, exhale for 8s.",
    btnStart: "Start Breath",
    btnPause: "Pause Breath",
    journalTitle: "Reflection Journal",
    labelProblem: "What is burdening your mind right now?",
    labelAction: "Concrete action / Attitude of acceptance:",
    btnSaveJournal: "Save Journal",
    journalListTitle: "Reflection History",
    footerPhilosophy: "Philosophy",
    footerCommunity: "Community",
    footerBreathing: "Breathing Exercise",
    footerJournal: "Reflection Journal"
  }
};

const philosophicalQuotes = [
  {
    author: "Siddhartha Gautama (Buddha)",
    school: "Buddhisme (Dharma)",
    text_id: "\"Pikiran adalah segalanya. Apa yang kamu pikirkan, itulah yang kamu wujudkan. Kedamaian sejati datang dari dalam diri, bukan dari luar.\"",
    text_en: "\"The mind is everything. What you think you become. Peace comes from within. Do not seek it without.\"",
    hint_id: "Amati pikiranmu tanpa menghakimi. Lepaskan keterikatan pada apa yang tak dapat kamu kendalikan.",
    hint_en: "Observe your mind without judgment. Release attachment to what you cannot control."
  },
  {
    author: "Hermes Trismegistus",
    school: "Hermetisisme (Kybalion)",
    text_id: "\"Sebagaimana di atas, demikianlah di bawah; sebagaimana di dalam, demikianlah di luar. Alam semesta adalah pikiran; jagat raya bersifat mental.\"",
    text_en: "\"As above, so below; as within, so without. The All is Mind; the Universe is Mental.\"",
    hint_id: "Kondisi luar mencerminkan batin. Tenangkan batinmu, maka dunia luarmu akan tertata.",
    hint_en: "Outer reality mirrors the inner state. Clear your mind, and your world will align."
  },
  {
    author: "Marcus Aurelius",
    school: "Stoikisme (Kaisar Romawi)",
    text_id: "\"Kamu memiliki kuasa atas pikiranmu, bukan atas peristiwa eksternal. Sadarilah ini, dan kamu akan menemukan kekuatan sejati yang tak tergoyahkan.\"",
    text_en: "\"You have power over your mind - not outside events. Realize this, and you will find great strength.\"",
    hint_id: "Fokuskan seluruh usahamu pada tindakan yang berada langsung dalam pengaruh kendalimu.",
    hint_en: "Focus entirely on the actions that fall directly within your circle of control."
  },
  {
    author: "Carl Jung",
    school: "Psikologi Analitik",
    text_id: "\"Sampai kamu membuat alam bawah sadar menjadi sadar, ia akan mengarahkan hidupmu dan kamu akan menyebutnya sebagai takdir.\"",
    text_en: "\"Until you make the unconscious conscious, it will direct your life and you will call it fate.\"",
    hint_id: "Urai asumsi dan ketakutan tersembunyi menjadi diagram visual agar tampak nyata dan bisa diselesaikan.",
    hint_en: "Deconstruct hidden assumptions and fears into clear visual branches to solve them."
  },
  {
    author: "Leonardo da Vinci",
    school: "Renaisans & Polimatik",
    text_id: "\"Kesederhanaan adalah bentuk kecanggihan tertinggi. Belajarlah bagaimana cara melihat. Sadarilah bahwa segala sesuatu terhubung dengan hal lainnya.\"",
    text_en: "\"Simplicity is the ultimate sophistication. Learn how to see. Realize that everything connects to everything else.\"",
    hint_id: "Masalah rumit selalu bisa diurai menjadi alur keputusan sederhana dan langkah nyata.",
    hint_en: "Complex friction can always be untangled into simple decision forks and clear actions."
  },
  {
    author: "Sri Aurobindo",
    school: "Integral Yoga & Filosofi Timur",
    text_id: "\"Ketenangan batin bukanlah ketiadaan gerak, melainkan fondasi kokoh dari mana semua tindakan agung dan benar terpancar.\"",
    text_en: "\"Calmness is not lack of movement, but the solid foundation from which all great and true action radiates.\"",
    hint_id: "Jangan bertindak dari rasa panik. Berhentilah sejenak, tarik napas, lalu melangkah jernih.",
    hint_en: "Never act from panic. Pause, breathe deeply, then proceed with serene conviction."
  },
  {
    author: "Jalaluddin Rumi",
    school: "Sufisme & Kearifan Batin",
    text_id: "\"Luka adalah tempat di mana cahaya memasuki dirimu. Jangan berduka, segala sesuatu yang hilang akan datang kembali dalam bentuk yang lain.\"",
    text_en: "\"The wound is the place where the Light enters you. Do not grieve, anything you lose comes round in another form.\"",
    hint_id: "Terima setiap tantangan hidup sebagai bahan bakar pertumbuhan jiwa dan kebijaksanaan.",
    hint_en: "Embrace every life challenge as fuel for inner growth, clarity, and enduring wisdom."
  }
];

// Presets Collection (from app_prev.js)
let adminFlowcharts = [];
try {
  // Pull from window or fallback to default
  const prevCode = typeof window !== 'undefined' && window.__adminFlowcharts;
  if (prevCode) adminFlowcharts = prevCode;
} catch (e) {}

if (!adminFlowcharts || adminFlowcharts.length === 0) {
  adminFlowcharts = [
    {
      id: "official_stoic_01",
      title_id: "Punya Masalah dalam Hidup?",
      title_en: "Do You Have a Problem in Life?",
      author: "Terra Admin (Epictetus)",
      category: "stoic",
      isAdmin: true,
      likes: 384,
      plays: 1420,
      desc_id: "Diagram alur Stoik klasik legendaris untuk menghentikan overthinking seketika.",
      desc_en: "Legendary classic Stoic flowchart to stop overthinking in seconds.",
      startNode: "step1",
      nodes: {
        step1: {
          tag_id: "Langkah 1", tag_en: "Step 1",
          q_id: "Punya Masalah dalam Hidup?",
          q_en: "Do you have a problem in life?",
          sub_id: "Identifikasi apakah ada situasi yang sedang membebani pikiranmu.",
          sub_en: "Identify if there is any heavy burden occupying your mind.",
          options: [
            { text_id: "YA, ADA", text_en: "YES", next: "step2", btnStyle: "btn-primary" },
            { text_id: "TIDAK ADA", text_en: "NO", next: "res_noproblem", btnStyle: "btn-secondary" }
          ]
        },
        step2: {
          tag_id: "Langkah 2", tag_en: "Step 2",
          q_id: "Bisa melakukan sesuatu untuk menyelesaikannya?",
          q_en: "Can you do something about it?",
          sub_id: "Pisahkan antara apa yang berada dalam kendalimu vs di luar kendalimu.",
          sub_en: "Distinguish what is in your power versus what is out of your hands.",
          options: [
            { text_id: "BISA, ADA CARANYA", text_en: "YES, I CAN", next: "res_canact", btnStyle: "btn-primary" },
            { text_id: "TIDAK BISA / DI LUAR KENDALI", text_en: "NO, CANNOT", next: "res_cannotact", btnStyle: "btn-secondary" }
          ]
        },
        res_noproblem: {
          isResult: true,
          title_id: "LALU KENAPA KHATIR?",
          title_en: "THEN WHY WORRY?",
          msg_id: "\"Jika tidak ada masalah, nikmati momen ini sepenuhnya dengan rasa syukur.\"",
          msg_en: "\"If there is no problem, enjoy this present moment with deep gratitude.\"",
          adv_id: "Nikmati secangkir teh hangat, tarik napas, dan rawat ketenangan batinmu.",
          adv_en: "Enjoy a warm cup of tea, breathe deeply, and nurture your inner peace."
        },
        res_canact: {
          isResult: true,
          title_id: "LALU KENAPA KHAWATIR?",
          title_en: "THEN WHY WORRY?",
          msg_id: "\"Jika ada yang bisa kamu lakukan, fokuskan 100% energimu untuk bertindak.\"",
          msg_en: "\"If you can do something, focus 100% of your energy on taking clear action.\"",
          adv_id: "Ambil langkah terkecil 5 menit pertama hari ini. Gerakan mengalahkan kecemasan.",
          adv_en: "Take the smallest 5-minute action today. Movement dissolves anxiety."
        },
        res_cannotact: {
          isResult: true,
          title_id: "LALU KENAPA KHAWATIR?",
          title_en: "THEN WHY WORRY?",
          msg_id: "\"Kekhawatiran tidak akan mengubah hal yang di luar kendalimu. Ikhlaskan.\"",
          msg_en: "\"Worrying will never alter things outside your control. Sincere acceptance.\"",
          adv_id: "Terapkan prinsip Amor Fati: Berdamai dengan takdir dan jaga kedamaian batinmu.",
          adv_en: "Apply Amor Fati: Embrace what is and protect your tranquility."
        }
      }
    },
    {
      id: "official_5sec_rule",
      title_id: "Aturan 5 Detik Anti-Nunda (5-Second Rule)",
      title_en: "5-Second Anti-Procrastination Rule",
      author: "Mel Robbins / Logic",
      category: "work",
      isAdmin: true,
      likes: 295,
      plays: 980,
      desc_id: "Trik psikologi untuk melompati rasa malas dan overthinking sebelum otakmu sempat menolak.",
      desc_en: "Psychological hack to bypass laziness before your brain makes excuses.",
      startNode: "step1",
      nodes: {
        step1: {
          tag_id: "Cek Dorongan", tag_en: "Impulse Check",
          q_id: "Tahu apa yang harus dikerjakan tapi merasa malas?",
          q_en: "Know what needs to be done but feeling lazy?",
          options: [
            { text_id: "YA, MALAS BANGET", text_en: "YES, SUPER LAZY", next: "step2", btnStyle: "btn-primary" },
            { text_id: "ENGGAK, LAGI SEMANGAT", text_en: "NO, MOTIVATED", next: "res_kerjain", btnStyle: "btn-secondary" }
          ]
        },
        step2: {
          tag_id: "Hitung Mundur", tag_en: "Countdown",
          q_id: "Hitung mundur keras-keras: 5... 4... 3... 2... 1...",
          q_en: "Count backwards out loud: 5... 4... 3... 2... 1...",
          sub_id: "Sebelum hitungan ke 0, tubuhmu harus langsung bergerak fisik.",
          sub_en: "Before hitting 0, your physical body must initiate movement.",
          options: [
            { text_id: "BERDIRI & BUKA LAPTOP", text_en: "STAND UP & OPEN LAPTOP", next: "res_gerak", btnStyle: "btn-primary" },
            { text_id: "MASIH REBAHAN", text_en: "STILL LYING DOWN", next: "step3", btnStyle: "btn-secondary" }
          ]
        },
        step3: {
          tag_id: "Aturan 2 Menit", tag_en: "2-Minute Rule",
          q_id: "Mau komitmen kerjakan cuma 2 menit saja?",
          q_en: "Willing to commit to working just 2 minutes?",
          options: [
            { text_id: "OKE, CUMA 2 MENIT", text_en: "OKAY, JUST 2 MINS", next: "res_2menit", btnStyle: "btn-primary" },
            { text_id: "TETAP REBAHAN", text_en: "STILL RESTING", next: "res_pasrah", btnStyle: "btn-secondary" }
          ]
        },
        res_kerjain: {
          isResult: true,
          title_id: "GAS LANGSUNG KERJAKAN!",
          title_en: "EXECUTE IMMEDIATELY!",
          msg_id: "\"Manfaatkan momentum dopamin alami saat motivasimu sedang tinggi!\"",
          msg_en: "\"Ride the momentum while your intrinsic motivation is high!\"",
          adv_id: "Matikan notifikasi HP dan selesaikan 1 sesi fokus 25 menit.",
          adv_en: "Mute phone notifications and finish 1 full 25-min focus block."
        },
        res_gerak: {
          isResult: true,
          title_id: "KAMU BERHASIL MENGALAHKAN OTAK KADAL!",
          title_en: "YOU CONQUERED THE RESISTANCE!",
          msg_id: "\"Saat tubuh bergerak lebih dulu, motivasi pikiran akan menyusul otomatis.\"",
          msg_en: "\"When the physical body moves first, cognitive motivation follows.\"",
          adv_id: "Kerjakan baris pertama dokumen atau langkah terkecil sekarang.",
          adv_en: "Write the very first sentence or line of code right now."
        },
        res_2menit: {
          isResult: true,
          title_id: "TRIK MIKRO-KOMITMEN BERHASIL!",
          title_en: "MICRO-COMMITMENT SUCCESS!",
          msg_id: "\"80% usaha manusia ada pada memulai. Setelah 2 menit, kamu akan terus lanjut!\"",
          msg_en: "\"80% of resistance is in starting. After 2 minutes, flow kicks in!\"",
          adv_id: "Set timer 2 menit di jam tangan atau HP.",
          adv_en: "Set a 2-minute timer on your watch or phone."
        },
        res_pasrah: {
          isResult: true,
          title_id: "REBAHAN DENGAN PENUH KESADARAN",
          title_en: "REST WITH FULL AWARENESS",
          msg_id: "\"Jangan rebahan sambil merasa bersalah. Jika istirahat, nikmati tanpa beban.\"",
          msg_en: "\"Don't rest while feeling guilty. If resting, enjoy without regret.\"",
          adv_id: "Tidur 20 menit power nap, lalu ulangi hitungan 5 detik.",
          adv_en: "Take a 20-minute power nap, then repeat the 5-second countdown."
        }
      }
    },
    {
      id: "official_wd40_tape",
      title_id: "Panduan Engineering WD-40 vs Duct Tape",
      title_en: "Universal Engineering: WD-40 vs Duct Tape",
      author: "Engineering Meme Logic",
      category: "humor",
      isAdmin: true,
      likes: 412,
      plays: 1850,
      desc_id: "Prinsip pemecahan masalah universal para mekanik & insinyur dunia.",
      desc_en: "The universal mechanical rule of thumb for troubleshooting everything.",
      startNode: "step1",
      nodes: {
        step1: {
          tag_id: "Observasi Fisik", tag_en: "Observation",
          q_id: "Apakah benda/masalahnya bergerak?",
          q_en: "Does the thing move?",
          options: [
            { text_id: "YA, BERGERAK", text_en: "YES, IT MOVES", next: "step_should_move", btnStyle: "btn-primary" },
            { text_id: "TIDAK BERGERAK", text_en: "NO, IT DOESN'T", next: "step_should_not_move", btnStyle: "btn-secondary" }
          ]
        },
        step_should_move: {
          tag_id: "Cek Standar", tag_en: "Check Spec",
          q_id: "Apakah seharusnya benda itu bergerak?",
          q_en: "Should it be moving?",
          options: [
            { text_id: "SEHARUSNYA BERGERAK", text_en: "SHOULD MOVE", next: "res_no_problem", btnStyle: "btn-primary" },
            { text_id: "TIDAK BOLEH BERGERAK!", text_en: "SHOULD NOT MOVE!", next: "res_duct_tape", btnStyle: "btn-secondary" }
          ]
        },
        step_should_not_move: {
          tag_id: "Cek Standar", tag_en: "Check Spec",
          q_id: "Apakah seharusnya benda itu bergerak?",
          q_en: "Should it be moving?",
          options: [
            { text_id: "SEHARUSNYA BERGERAK (MACET)", text_en: "SHOULD MOVE (STUCK)", next: "res_wd40", btnStyle: "btn-primary" },
            { text_id: "MEMANG TIDAK BERGERAK", text_en: "SHOULD NOT MOVE", next: "res_no_problem", btnStyle: "btn-secondary" }
          ]
        },
        res_no_problem: {
          isResult: true,
          title_id: "TIDAK ADA MASALAH! LANJUT NGOPI!",
          title_en: "NO PROBLEM! ENJOY YOUR COFFEE!",
          msg_id: "\"Semua berfungsi sesuai hukum termodinamika dan spesifikasi standar.\"",
          msg_en: "\"Everything operates strictly according to thermodynamic specifications.\"",
          adv_id: "Tutup toolbox kamu dan santai sejenak.",
          adv_en: "Close your toolbox and relax."
        },
        res_duct_tape: {
          isResult: true,
          title_id: "SEMPROTKAN / TEMPELKAN DUCT TAPE!",
          title_en: "APPLY DUCT TAPE IMMEDIATELY!",
          msg_id: "\"Jika benda bergerak padahal tidak seharusnya, lakban adalah perekat takdir!\"",
          msg_en: "\"If it moves and shouldn't, Duct Tape is the universal stabilizer!\"",
          adv_id: "Lilitkan 3 lapis lakban hitam sampai benda tersebut berhenti bergerak.",
          adv_en: "Wrap 3 layers of duct tape until all unwanted movement stops."
        },
        res_wd40: {
          isResult: true,
          title_id: "SEMPROTKAN WD-40!",
          title_en: "SPRAY WD-40 RIGHT NOW!",
          msg_id: "\"Jika macet padahal seharusnya bergerak, WD-40 adalah pelumas semesta!\"",
          msg_en: "\"If it is stuck and should move, WD-40 is the ultimate universal lubricant!\"",
          adv_id: "Kocok kaleng WD-40 dan semprotkan langsung ke engsel atau baut.",
          adv_en: "Shake can and spray generously on joints and bolts."
        }
      }
    }
  ];
}

class SeamlessProblemSolverApp {
  constructor() {
    this.currentLang = localStorage.getItem('terra_lang') || 'id';
    this.currentTheme = localStorage.getItem('terra_theme') || 'light';
    this.activeSection = 'player'; // 'player', 'community', or 'create'

    // Flowchart State
    this.activeFlowchart = adminFlowcharts[0];
    this.currentNodeId = this.activeFlowchart.startNode || 'step1';
    this.nodeHistory = [];
    this.isFlowFullscreen = false;
    this.playerViewMode = 'card'; // 'card' or 'graph'
    this.communityCategory = 'all';

    // Domain Engines
    this.taskEngine = new TaskBreakdownEngine();
    this.aiParser = new AIFlowchartParser();
    this.audioSynth = new AudioAmbientEngine();
    this.flowEngine = new FlowchartEngine(this.activeFlowchart);
    this.graphRenderer = new FlowchartGraphRenderer();
    this.scriptParser = new QuickScriptFlowParser();
    this.transmitterParser = new MermaidTransmitterParser();

    // Audio & Wellness State
    this.isAmbientPlaying = false;
    this.isBreathingActive = false;
    this.breathingTimer = null;
    this.fiveMinTimer = null;
    this.quoteIndex = 0;

    // Journal & Custom Flowcharts Data
    this.journalEntries = JSON.parse(localStorage.getItem('terra_journal') || '[]');
    this.customFlowcharts = JSON.parse(localStorage.getItem('terra_custom_flows') || '[]');

    // Spatial Studio Builder Nodes State
    this.builderNodes = [
      {
        id: 'node_start',
        type: 'problem',
        title: 'Masalah / Keputusan Utama',
        description: 'Tentukan faktor atau pertanyaan yang ingin kamu urai...',
        x: 120,
        y: 200,
        options: [
          { text: 'Opsi / Jalur A', targetId: 'node_opt_a' },
          { text: 'Opsi / Jalur B', targetId: 'node_opt_b' }
        ]
      },
      {
        id: 'node_opt_a',
        type: 'decision',
        title: 'Pertimbangan Jalur A',
        description: 'Apa konsekuensi dan langkah jika memilih opsi ini?',
        x: 520,
        y: 100,
        options: [{ text: 'Ambil Tindakan', targetId: 'node_act_a' }]
      },
      {
        id: 'node_opt_b',
        type: 'decision',
        title: 'Pertimbangan Jalur B',
        description: 'Apa faktor risiko dan potensi manfaat jalur ini?',
        x: 520,
        y: 320,
        options: [{ text: 'Ambil Tindakan', targetId: 'node_act_b' }]
      },
      {
        id: 'node_act_a',
        type: 'action',
        title: 'Langkah Nyata A',
        description: 'Tindakan konkret pertama yang dapat dieksekusi hari ini.',
        x: 920,
        y: 100,
        options: [{ text: 'Selesai', targetId: 'node_res_a' }]
      },
      {
        id: 'node_act_b',
        type: 'action',
        title: 'Langkah Nyata B',
        description: 'Fokus pada 1 tindakan kecil yang berada dalam kendalimu.',
        x: 920,
        y: 320,
        options: [{ text: 'Selesai', targetId: 'node_res_b' }]
      },
      {
        id: 'node_res_a',
        type: 'outcome',
        title: 'Solusi Tuntas A',
        description: 'Hasil akhir yang jelas dan terarah.',
        x: 1300,
        y: 100,
        options: []
      },
      {
        id: 'node_res_b',
        type: 'outcome',
        title: 'Solusi Tuntas B',
        description: 'Penyelesaian yang realistis dan terukur.',
        x: 1300,
        y: 320,
        options: []
      }
    ];

    this.spatialCanvas = null;
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLang);
    this.setupEventListeners();
    this.renderDailyQuote();
    this.renderCommunityGrid();
    this.renderJournalList();
    this.renderFlowchartPlayer();

    try {
      initScrollFloat('.scroll-float-heading', {
        animationDuration: 1.2,
        ease: 'back.inOut(2)',
        scrollStart: 'top bottom-=20%',
        scrollEnd: 'bottom center',
        stagger: 0.04
      });
    } catch (e) {}
  }

  setupEventListeners() {
    // Theme Switcher
    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) {
      btnTheme.addEventListener('click', () => {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('terra_theme', this.currentTheme);
        this.applyTheme(this.currentTheme);
      });
    }

    // Language Switcher
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
      btnLang.addEventListener('click', () => {
        this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('terra_lang', this.currentLang);
        this.applyLanguage(this.currentLang);
      });
    }

    // Ambient Audio Switcher
    const btnAmbient = document.getElementById('btn-ambient');
    if (btnAmbient) {
      btnAmbient.addEventListener('click', () => this.toggleAmbientSound());
    }

    // Keyboard Shortcuts: S, B, J, F, Esc
    document.addEventListener('keydown', (e) => {
      const isInput = e.target.closest('input, textarea, select, [contenteditable="true"]');
      if (e.key === 'Escape') {
        this.closeAllModals();
        if (this.isFlowFullscreen) this.toggleFullscreenFlowchart();
      }

      if (!isInput && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          this.toggleAmbientSound();
        } else if (e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          this.openBreathingModal();
        } else if (e.key === 'j' || e.key === 'J') {
          e.preventDefault();
          this.toggleJournalDrawer(true);
        } else if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          this.toggleGlobalFullscreen();
        }
      }
    });
  }

  // --- Section Navigation ---
  showSection(sectionName, flowId = null) {
    this.activeSection = sectionName;

    const secPlayer = document.getElementById('section-player');
    const secCommunity = document.getElementById('section-community');
    const secCreate = document.getElementById('section-create');
    const navHome = document.getElementById('nav-btn-home');
    const navCommunity = document.getElementById('nav-btn-community');
    const navCreate = document.getElementById('nav-btn-create');

    // Reset Tabs
    [navHome, navCommunity, navCreate].forEach(btn => {
      if (btn) btn.className = 'nav-tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all text-on-surface-variant hover:text-primary';
    });

    if (secPlayer) secPlayer.classList.add('hidden');
    if (secCommunity) secCommunity.classList.add('hidden');
    if (secCreate) secCreate.classList.add('hidden');

    if (sectionName === 'player') {
      if (secPlayer) secPlayer.classList.remove('hidden');
      if (navHome) navHome.className = 'nav-tab-btn active-tab px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all';
      if (flowId && flowId !== 'default') this.loadFlowchart(flowId);
      else this.renderFlowchartPlayer();
    } else if (sectionName === 'community') {
      if (secCommunity) secCommunity.classList.remove('hidden');
      if (navCommunity) navCommunity.className = 'nav-tab-btn active-tab px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all';
      this.renderCommunityGrid();
    } else if (sectionName === 'create') {
      if (secCreate) secCreate.classList.remove('hidden');
      if (navCreate) navCreate.className = 'nav-tab-btn active-tab px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all';
      this.renderCreatorCanvas();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Flowchart Player Engine ---
  loadFlowchart(flowId) {
    let target = adminFlowcharts.find(f => f.id === flowId);
    if (!target) target = this.customFlowcharts.find(f => f.id === flowId);
    if (!target) target = adminFlowcharts[0];

    this.activeFlowchart = target;
    this.currentNodeId = target.startNode || Object.keys(target.nodes)[0];
    this.nodeHistory = [];
    this.flowEngine = new FlowchartEngine(this.activeFlowchart);

    this.showSection('player');
    this.renderFlowchartPlayer();
  }

  renderFlowchartPlayer() {
    const canvas = document.getElementById('player-canvas');
    const graphContainer = document.getElementById('player-graph-container');
    const flowMeta = document.getElementById('player-flow-meta');
    const isEn = this.currentLang === 'en';

    if (!this.activeFlowchart || !canvas) return;

    // Render Meta
    const flowTitle = isEn ? (this.activeFlowchart.title_en || this.activeFlowchart.title_id) : this.activeFlowchart.title_id;
    const titleEl = document.getElementById('player-title');
    const authorEl = document.getElementById('player-author');
    const badgeEl = document.getElementById('player-badge');
    const btnBackComm = document.getElementById('btn-back-community');

    if (titleEl) titleEl.textContent = flowTitle;
    if (authorEl) authorEl.textContent = `by ${this.activeFlowchart.author || 'Terra'}`;
    if (badgeEl) badgeEl.textContent = this.activeFlowchart.isAdmin ? 'OFFICIAL' : 'COMMUNITY';
    if (btnBackComm) btnBackComm.classList.toggle('hidden', this.activeFlowchart.id === 'official_stoic_01');

    // Switch between Card Mode and Graph Mode
    if (this.playerViewMode === 'graph') {
      canvas.classList.add('hidden');
      if (graphContainer) {
        graphContainer.classList.remove('hidden');
        this.graphRenderer.renderGraph(this.activeFlowchart, graphContainer, this.currentNodeId, (nodeId) => {
          this.handleGraphNodeClick(nodeId);
        });
      }
      return;
    } else {
      canvas.classList.remove('hidden');
      if (graphContainer) graphContainer.classList.add('hidden');
    }

    const node = this.activeFlowchart.nodes[this.currentNodeId] || Object.values(this.activeFlowchart.nodes)[0];
    if (!node) return;

    // Update Step Indicator
    this.updateStepIndicator();

    if (node.isResult) {
      // Outcome / Result Card
      const resTitle = isEn ? (node.title_en || node.title_id || 'Conclusion') : (node.title_id || 'Kesimpulan');
      const resMsg = isEn ? (node.msg_en || node.msg_id || '') : (node.msg_id || '');
      const resAdv = isEn ? (node.adv_en || node.adv_id || '') : (node.adv_id || '');
      const dict = translations[this.currentLang];

      canvas.innerHTML = `
        <div class="flow-card active-card flex flex-col items-center max-w-xl mx-auto py-2 space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase shadow-sm">
            <span class="material-symbols-outlined text-sm">task_alt</span>
            <span>HASIL KEPUTUSAN</span>
          </div>

          <h2 class="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface text-center tracking-tight leading-tight">
            ${resTitle}
          </h2>

          ${resMsg ? `
            <blockquote class="italic text-base sm:text-lg text-on-surface-variant/90 border-l-4 border-primary pl-4 py-1 max-w-md text-left font-body">
              ${resMsg}
            </blockquote>
          ` : ''}

          ${resAdv ? `
            <div class="p-4 rounded-2xl bg-surface-container/90 border border-primary/20 text-xs sm:text-sm font-semibold text-on-surface max-w-md w-full text-center">
              💡 ${resAdv}
            </div>
          ` : ''}

          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button class="btn-terra btn-primary px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-terra-soft flex items-center gap-2" onclick="app.restartActiveFlow()">
              <span class="material-symbols-outlined text-base">replay</span>
              <span>${dict.btnRestartFlow}</span>
            </button>

            <button class="btn-terra px-5 py-3 rounded-2xl bg-surface-container text-primary font-bold text-xs sm:text-sm border border-primary/20 hover:bg-primary/10 flex items-center gap-2" onclick="app.openJournalWithContext()">
              <span class="material-symbols-outlined text-base">edit_note</span>
              <span>${dict.btnWriteJournal}</span>
            </button>

            <button class="btn-terra px-4 py-3 rounded-2xl bg-surface-container text-on-surface-variant font-bold text-xs hover:text-primary flex items-center gap-1.5" onclick="app.shareFlowResult()">
              <span class="material-symbols-outlined text-base">share</span>
              <span>Bagikan</span>
            </button>
          </div>
        </div>
      `;
    } else {
      // Question Node Card
      const qTag = isEn ? (node.tag_en || node.tag_id || 'Step') : (node.tag_id || 'Langkah');
      const qText = isEn ? (node.q_en || node.q_id || node.title || '') : (node.q_id || node.title || '');
      const qSub = isEn ? (node.sub_en || node.sub_id || node.description || '') : (node.sub_id || node.description || '');
      const dict = translations[this.currentLang];

      const optionsHTML = (node.options || []).map(opt => {
        const optText = isEn ? (opt.text_en || opt.text_id || opt.text || 'Next') : (opt.text_id || opt.text || 'Lanjut');
        const btnStyle = opt.btnStyle === 'btn-secondary' ? 'btn-secondary border border-primary/20 bg-surface-container text-primary' : 'btn-primary text-on-primary';
        return `
          <button class="btn-terra ${btnStyle} flex-1 min-w-[200px] py-4 px-6 rounded-2xl font-bold text-sm sm:text-base shadow-terra-soft hover:shadow-terra-deep hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 transition-all" onclick="app.navigateToNode('${opt.next || opt.targetId}')">
            <span>${optText}</span>
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        `;
      }).join('');

      const backBtnHTML = this.nodeHistory.length > 0 ? `
        <button class="mt-6 text-on-surface-variant/60 hover:text-primary flex items-center gap-1.5 transition-colors font-semibold text-xs" onclick="app.goBackNode()">
          <span class="material-symbols-outlined text-sm">arrow_back</span>
          <span>${dict.btnBackNode}</span>
        </button>
      ` : '';

      canvas.innerHTML = `
        <div class="flow-card active-card flex flex-col items-center py-2 space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase shadow-sm">
            <span class="material-symbols-outlined text-sm">psychology</span>
            <span>${qTag}</span>
          </div>

          <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface text-center tracking-tight leading-tight max-w-2xl">
            ${qText}
          </h2>

          ${qSub ? `<p class="text-on-surface-variant/80 text-sm sm:text-base max-w-lg text-center leading-relaxed font-body">${qSub}</p>` : ''}

          <div class="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center max-w-md mt-2">
            ${optionsHTML}
          </div>

          ${backBtnHTML}
        </div>
      `;
    }
  }

  navigateToNode(targetId) {
    if (!targetId) return;
    this.nodeHistory.push(this.currentNodeId);
    this.currentNodeId = targetId;
    this.renderFlowchartPlayer();
  }

  goBackNode() {
    if (this.nodeHistory.length > 0) {
      this.currentNodeId = this.nodeHistory.pop();
      this.renderFlowchartPlayer();
    }
  }

  restartActiveFlow() {
    this.currentNodeId = this.activeFlowchart.startNode || Object.keys(this.activeFlowchart.nodes)[0];
    this.nodeHistory = [];
    this.renderFlowchartPlayer();
  }

  updateStepIndicator() {
    const dots = [document.getElementById('dot-1'), document.getElementById('dot-2'), document.getElementById('dot-3')];
    const lines = [document.getElementById('line-1'), document.getElementById('line-2')];
    const stepCount = Math.min(3, this.nodeHistory.length + 1);

    dots.forEach((dot, idx) => {
      if (dot) {
        if (idx < stepCount) dot.classList.add('active-dot');
        else dot.classList.remove('active-dot');
      }
    });

    lines.forEach((line, idx) => {
      if (line) {
        if (idx < stepCount - 1) line.classList.add('bg-primary');
        else line.classList.remove('bg-primary');
      }
    });
  }

  setPlayerViewMode(mode) {
    this.playerViewMode = mode;
    const tabCard = document.getElementById('tab-mode-player');
    const tabGraph = document.getElementById('tab-mode-graph');

    if (mode === 'card') {
      if (tabCard) tabCard.className = 'px-3 py-1 rounded-lg text-xs font-bold bg-primary text-on-primary shadow-sm flex items-center gap-1 transition-all';
      if (tabGraph) tabGraph.className = 'px-3 py-1 rounded-lg text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-all';
    } else {
      if (tabCard) tabCard.className = 'px-3 py-1 rounded-lg text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-all';
      if (tabGraph) tabGraph.className = 'px-3 py-1 rounded-lg text-xs font-bold bg-primary text-on-primary shadow-sm flex items-center gap-1 transition-all';
    }

    this.renderFlowchartPlayer();
  }

  handleGraphNodeClick(nodeId) {
    if (this.activeFlowchart && this.activeFlowchart.nodes[nodeId]) {
      this.currentNodeId = nodeId;
      this.setPlayerViewMode('card');
    }
  }

  toggleFullscreenFlowchart() {
    const box = document.getElementById('player-canvas-box');
    const icon = document.getElementById('box-fullscreen-icon');
    const txt = document.getElementById('box-fullscreen-text');

    this.isFlowFullscreen = !this.isFlowFullscreen;
    if (this.isFlowFullscreen) {
      box.classList.add('fixed', 'inset-4', 'z-50', 'bg-surface', 'min-h-screen', 'shadow-2xl');
      if (icon) icon.textContent = 'fullscreen_exit';
      if (txt) txt.textContent = 'Keluar Layar Penuh';
    } else {
      box.classList.remove('fixed', 'inset-4', 'z-50', 'bg-surface', 'min-h-screen', 'shadow-2xl');
      if (icon) icon.textContent = 'fullscreen';
      if (txt) txt.textContent = 'Layar Penuh';
    }
  }

  handleCardBoxClick(e) {
    // Prevent fullscreen trigger when clicking controls
    if (e.target.closest('button, a, input, select, textarea, [contenteditable]')) return;
  }

  editActiveFlowInStudio() {
    if (!this.activeFlowchart) return;
    const nodes = this.activeFlowchart.nodes;
    const spatialNodes = [];
    const keys = Object.keys(nodes);

    keys.forEach((key, idx) => {
      const n = nodes[key];
      spatialNodes.push({
        id: key,
        type: n.isResult ? 'outcome' : (idx === 0 ? 'problem' : 'decision'),
        title: n.title_id || n.q_id || n.title || 'Langkah',
        description: n.msg_id || n.sub_id || n.adv_id || n.description || '',
        x: 120 + (idx % 4) * 380,
        y: 100 + Math.floor(idx / 4) * 240,
        options: (n.options || []).map(opt => ({
          text: opt.text_id || opt.text || 'Lanjut',
          targetId: opt.next || opt.targetId
        }))
      });
    });

    const bTitle = document.getElementById('builder-title');
    if (bTitle) bTitle.value = this.activeFlowchart.title_id || 'Custom Flowchart';

    this.builderNodes = spatialNodes;
    this.showSection('create');
  }

  // --- Spatial Studio Canvas Engine Mount ---
  renderCreatorCanvas() {
    const mountEl = document.getElementById('flowchart-creator-canvas-mount');
    if (!mountEl) return;

    if (!this.spatialCanvas) {
      this.spatialCanvas = new SpatialThinkingCanvas({
        container: mountEl,
        nodes: this.builderNodes,
        onChange: (nodes) => {
          this.builderNodes = nodes;
        }
      });
    } else {
      this.spatialCanvas.container = mountEl;
      this.spatialCanvas.setNodes(this.builderNodes);
    }

    this.spatialCanvas.render();
    setTimeout(() => {
      this.spatialCanvas.fitView();
    }, 100);
  }

  loadBuilderTemplate(templateKey) {
    if (FRAMEWORK_PRESETS[templateKey]) {
      this.builderNodes = JSON.parse(JSON.stringify(FRAMEWORK_PRESETS[templateKey].nodes));
      this.renderCreatorCanvas();
    }
  }

  saveAndPublishFlowchart() {
    const title = document.getElementById('builder-title')?.value.trim() || 'Custom Flowchart';
    const author = document.getElementById('builder-author')?.value.trim() || 'Member';
    const category = document.getElementById('builder-category')?.value || 'stoic';

    const nodesObj = {};
    let startNodeId = this.builderNodes[0] ? this.builderNodes[0].id : 'step1';

    this.builderNodes.forEach((n, idx) => {
      nodesObj[n.id] = {
        id: n.id,
        isResult: n.type === 'outcome',
        title_id: n.title,
        title_en: n.title,
        q_id: n.title,
        q_en: n.title,
        msg_id: n.description,
        msg_en: n.description,
        sub_id: n.description,
        sub_en: n.description,
        options: (n.options || []).map(opt => ({
          text_id: opt.text,
          text_en: opt.text,
          next: opt.targetId
        }))
      };
    });

    const newFlow = {
      id: 'custom_' + Date.now().toString(36),
      title_id: title,
      title_en: title,
      author: author,
      category: category,
      isAdmin: false,
      likes: 1,
      plays: 1,
      desc_id: `Flowchart dibuat oleh ${author}.`,
      desc_en: `Flowchart created by ${author}.`,
      startNode: startNodeId,
      nodes: nodesObj
    };

    this.customFlowcharts.unshift(newFlow);
    try {
      localStorage.setItem('terra_custom_flows', JSON.stringify(this.customFlowcharts));
    } catch (e) {}

    this.renderCommunityGrid();
    this.loadFlowchart(newFlow.id);
    alert('🎉 Flowchart berhasil disimpan dan siap dimainkan!');
  }

  exportBuilderJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.builderNodes, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `flowchart_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  }

  importBuilderJSON(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (Array.isArray(parsed)) {
          this.builderNodes = parsed;
        } else if (parsed.nodes) {
          // Convert dictionary to array
          this.builderNodes = Object.keys(parsed.nodes).map(k => ({
            id: k,
            type: parsed.nodes[k].isResult ? 'outcome' : 'decision',
            title: parsed.nodes[k].title_id || parsed.nodes[k].q_id || 'Langkah',
            description: parsed.nodes[k].msg_id || parsed.nodes[k].sub_id || '',
            options: (parsed.nodes[k].options || []).map(opt => ({
              text: opt.text_id || opt.text || 'Lanjut',
              targetId: opt.next || opt.targetId
            }))
          }));
        }
        this.renderCreatorCanvas();
        alert('✨ Flowchart berhasil diimpor ke Studio Kanvas!');
      } catch (err) {
        alert('Gagal mengimpor file JSON.');
      }
    };
    reader.readAsText(file);
  }

  // --- Community Gallery Grid ---
  renderCommunityGrid() {
    const grid = document.getElementById('community-grid');
    if (!grid) return;

    const searchInput = document.getElementById('community-search');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const allFlows = [...adminFlowcharts, ...this.customFlowcharts];
    const filtered = allFlows.filter(f => {
      const matchCat = this.communityCategory === 'all' || 
        (this.communityCategory === 'admin' && f.isAdmin) ||
        f.category === this.communityCategory;
      const matchSearch = !query || 
        (f.title_id && f.title_id.toLowerCase().includes(query)) ||
        (f.title_en && f.title_en.toLowerCase().includes(query)) ||
        (f.desc_id && f.desc_id.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-12 text-on-surface-variant/60 italic text-sm">Tidak ada flowchart yang cocok dengan pencarianmu.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(f => {
      const isEn = this.currentLang === 'en';
      const title = isEn ? (f.title_en || f.title_id) : f.title_id;
      const desc = isEn ? (f.desc_en || f.desc_id) : f.desc_id;
      return `
        <div class="terra-card p-6 rounded-3xl border border-primary/15 hover:border-primary/40 flex flex-col justify-between space-y-4 group transition-all">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${f.isAdmin ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'}">${f.isAdmin ? 'OFFICIAL' : 'COMMUNITY'}</span>
              <span class="text-xs text-on-surface-variant flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-red-400">favorite</span>
                <span>${f.likes || 12}</span>
              </span>
            </div>
            <h3 class="font-headline font-bold text-lg text-on-surface">${this.escapeHtml(title)}</h3>
            <p class="text-xs text-on-surface-variant/80 leading-relaxed">${this.escapeHtml(desc)}</p>
          </div>

          <div class="flex items-center gap-2 pt-2 border-t border-outline-variant/20">
            <button type="button" class="btn-terra btn-primary flex-grow py-2.5 px-4 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-1.5" onclick="app.loadFlowchart('${f.id}')">
              <span class="material-symbols-outlined text-sm">play_arrow</span>
              <span>Mainkan</span>
            </button>
            <button type="button" class="p-2.5 rounded-xl bg-surface-container hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all text-xs" title="Buka di Studio Kanvas" onclick="app.loadFlowchart('${f.id}'); app.editActiveFlowInStudio();">
              <span class="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  filterCommunityFlows() {
    this.renderCommunityGrid();
  }

  setCommunityCategory(cat) {
    this.communityCategory = cat;
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
      if (btn.dataset.cat === cat) {
        btn.className = 'cat-filter-btn active-cat px-4 py-1.5 rounded-xl text-xs font-bold transition-all';
      } else {
        btn.className = 'cat-filter-btn px-4 py-1.5 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-primary bg-surface-container';
      }
    });
    this.renderCommunityGrid();
  }

  // --- Daily Wisdom Quotes ---
  renderDailyQuote() {
    const quote = philosophicalQuotes[this.quoteIndex % philosophicalQuotes.length];
    if (!quote) return;

    const isEn = this.currentLang === 'en';
    const quoteEl = document.getElementById('wisdom-quote');
    const authorEl = document.getElementById('wisdom-author');
    const hintEl = document.getElementById('wisdom-hint');
    const badgeEl = document.getElementById('wisdom-school-badge');

    if (quoteEl) quoteEl.textContent = isEn ? quote.text_en : quote.text_id;
    if (authorEl) authorEl.textContent = `— ${quote.author}`;
    if (hintEl) hintEl.textContent = isEn ? quote.hint_en : quote.hint_id;
    if (badgeEl) badgeEl.textContent = quote.school;
  }

  nextQuote() {
    this.quoteIndex = (this.quoteIndex + 1) % philosophicalQuotes.length;
    this.renderDailyQuote();
  }

  copyWisdomQuote() {
    const quote = philosophicalQuotes[this.quoteIndex % philosophicalQuotes.length];
    if (!quote) return;
    const isEn = this.currentLang === 'en';
    const text = `${isEn ? quote.text_en : quote.text_id} — ${quote.author}`;
    navigator.clipboard.writeText(text).then(() => {
      alert(isEn ? 'Quote copied to clipboard!' : 'Kutipan berhasil disalin ke clipboard!');
    });
  }

  focusWisdomCard() {
    const quote = philosophicalQuotes[this.quoteIndex % philosophicalQuotes.length];
    if (!quote) return;
    const isEn = this.currentLang === 'en';

    const body = document.getElementById('card-focus-body');
    if (body) {
      body.innerHTML = `
        <div class="text-center space-y-6 py-6">
          <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">${quote.school}</span>
          <blockquote class="text-2xl sm:text-4xl font-headline font-bold text-on-surface leading-snug">
            ${isEn ? quote.text_en : quote.text_id}
          </blockquote>
          <cite class="text-lg font-bold text-primary block not-italic">— ${quote.author}</cite>
          <p class="text-sm text-on-surface-variant max-w-lg mx-auto italic">${isEn ? quote.hint_en : quote.hint_id}</p>
        </div>
      `;
      this.openCardFocusModal();
    }
  }

  scrollToWisdom() {
    const el = document.getElementById('section-daily-wisdom');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // --- Three Pillars of Calm Interactive Logic ---
  checkPillarControl(choice) {
    const scenarios = [
      { text: '"Pendapat orang lain tentang dirimu..."', correct: 1, explanation: 'Benar! Reaksi & perkataan orang lain 100% di luar kendalimu.' },
      { text: '"Usaha dan fokus belajarmu hari ini..."', correct: 2, explanation: 'Tepat! Tingkat disiplin & usahamu 100% dalam kendalimu.' },
      { text: '"Kondisi macet atau cuaca hujan..."', correct: 1, explanation: 'Benar! Cuaca & lalu lintas adalah faktor alam di luar kendalimu.' },
      { text: '"Responmu saat dikritik rekan kerja..."', correct: 2, explanation: 'Luar biasa! Cara kita merespon kritik selalu dalam kuasa kendali kita.' }
    ];

    this.pillarScenarioIndex = ((this.pillarScenarioIndex || 0) + 1) % scenarios.length;
    const current = scenarios[this.pillarScenarioIndex];

    const fb = document.getElementById('pilar-control-feedback');
    const txt = document.getElementById('pilar-control-text');

    if (fb) {
      fb.classList.remove('hidden');
      if (choice === current.correct) {
        fb.className = 'text-[11px] font-bold text-emerald-500 pt-1 block animate-bounce';
        fb.textContent = `✨ ${current.explanation}`;
      } else {
        fb.className = 'text-[11px] font-bold text-amber-500 pt-1 block';
        fb.textContent = `💡 Refleksi: ${current.explanation}`;
      }
    }

    setTimeout(() => {
      if (txt) txt.textContent = current.text;
    }, 2500);
  }

  startFiveMinuteFocus() {
    const btn = document.getElementById('txt-five-min-btn');
    if (!btn) return;

    if (this.fiveMinTimer) {
      clearInterval(this.fiveMinTimer);
      this.fiveMinTimer = null;
      btn.textContent = 'Mulai Fokus 5 Menit';
      return;
    }

    let timeLeft = 300; // 5 mins
    this.fiveMinTimer = setInterval(() => {
      timeLeft--;
      const m = Math.floor(timeLeft / 60);
      const s = (timeLeft % 60).toString().padStart(2, '0');
      btn.textContent = `⏱️ Sisa Waktu: ${m}:${s}`;

      if (timeLeft <= 0) {
        clearInterval(this.fiveMinTimer);
        this.fiveMinTimer = null;
        btn.textContent = '🎉 5 Menit Selesai! Pertahankan!';
        alert('🎉 Luar biasa! Kamu berhasil fokus penuh 5 menit.');
      }
    }, 1000);
  }

  focusPillarCard(pilarNum) {
    const body = document.getElementById('card-focus-body');
    if (!body) return;

    if (pilarNum === 1) {
      body.innerHTML = `
        <div class="space-y-4 text-center py-4">
          <span class="text-xs font-mono font-bold uppercase text-primary">Pilar 1 • Dikotomi Kendali</span>
          <h3 class="font-headline text-3xl font-bold text-on-surface">Kesadaran Murni</h3>
          <p class="text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            "Mengenali dan memisahkan fakta obyektif dari persepsi emosional dan asumsi yang berlebihan adalah langkah pertama menuju ketenangan sejati."
          </p>
        </div>
      `;
    } else if (pilarNum === 2) {
      body.innerHTML = `
        <div class="space-y-4 text-center py-4">
          <span class="text-xs font-mono font-bold uppercase text-tertiary">Pilar 2 • Aksi Nyata</span>
          <h3 class="font-headline text-3xl font-bold text-on-surface">Tindakan Jernih</h3>
          <p class="text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            "Fokuskan seluruh perhatian dan energi pada 1 langkah pertama yang berada langsung dalam pengaruh kendalimu hari ini."
          </p>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div class="space-y-4 text-center py-4">
          <span class="text-xs font-mono font-bold uppercase text-secondary">Pilar 3 • Amor Fati</span>
          <h3 class="font-headline text-3xl font-bold text-on-surface">Penerimaan Tulus</h3>
          <p class="text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            "Kedamaian tak tergoyahkan ditemukan saat kita menyambut hasil akhir dengan ikhlas dan tanpa perlawanan batin."
          </p>
        </div>
      `;
    }
    this.openCardFocusModal();
  }

  // --- Modals & Serenity Tools ---
  openTransmitterModal() {
    const modal = document.getElementById('modal-transmitter');
    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-transmitter-card');
      if (card) card.classList.remove('scale-95');
    }
  }

  closeTransmitterModal() {
    const modal = document.getElementById('modal-transmitter');
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-transmitter-card');
      if (card) card.classList.add('scale-95');
    }
  }

  copyAITransmitterPrompt() {
    const prompt = `Saya ingin membuat flowchart pengambilan keputusan interaktif. 
Tolong buatkan diagram alur berpikir dengan sintaks Mermaid \`graph TD\`.
Gunakan format node:
step1["❓ Pertanyaan Pertama?"]
step1 -->|"YA"| step2["❓ Langkah Selanjutnya"]
step1 -->|"TIDAK"| res1["🏁 Kesimpulan Hasil"]

Topik masalah: [TULISKAN MASALAH KAMU DI SINI]`;

    navigator.clipboard.writeText(prompt).then(() => {
      alert('📋 Prompt template AI berhasil disalin! Tempelkan ke ChatGPT/Gemini/Claude.');
    });
  }

  parseAndApplyTransmitterScript() {
    const input = document.getElementById('transmitter-input');
    const script = input ? input.value : '';
    if (!script.trim()) {
      alert('Silakan tempelkan kode Mermaid script terlebih dahulu!');
      return;
    }

    const flowData = this.transmitterParser.parseMermaidScript(script, 'Transmitter Flow');
    
    // Create new flow
    const newFlow = {
      id: 'flow_' + Date.now().toString(36),
      title_id: flowData.title || 'Transmitter Flowchart',
      title_en: flowData.title || 'Transmitter Flowchart',
      author: 'AI Transmitter',
      category: 'work',
      isAdmin: false,
      likes: 1,
      plays: 1,
      desc_id: 'Dibuat otomatis via Universal Transmitter Protocol.',
      desc_en: 'Generated automatically via Universal Transmitter Protocol.',
      startNode: flowData.startNode || Object.keys(flowData.nodes)[0],
      nodes: flowData.nodes
    };

    this.customFlowcharts.unshift(newFlow);
    try {
      localStorage.setItem('terra_custom_flows', JSON.stringify(this.customFlowcharts));
    } catch (e) {}

    this.closeTransmitterModal();
    this.loadFlowchart(newFlow.id);
  }

  toggleAmbientSound() {
    const btn = document.getElementById('btn-ambient');
    const icon = document.getElementById('icon-sound');
    const txt = document.getElementById('txt-ambient');

    if (this.isAmbientPlaying) {
      this.audioSynth.stop();
      this.isAmbientPlaying = false;
      if (icon) icon.textContent = 'volume_off';
      if (txt) txt.textContent = 'Suara Alam';
      if (btn) btn.classList.remove('bg-emerald-500/20', 'text-emerald-400');
    } else {
      this.audioSynth.start('rain');
      this.isAmbientPlaying = true;
      if (icon) icon.textContent = 'volume_up';
      if (txt) txt.textContent = 'Heningkan';
      if (btn) btn.classList.add('bg-emerald-500/20', 'text-emerald-400');
    }
  }

  openBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-breathing-card');
      if (card) card.classList.remove('scale-95');
    }
  }

  closeBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-breathing-card');
      if (card) card.classList.add('scale-95');
    }
    if (this.isBreathingActive) this.toggleBreathing();
  }

  toggleBreathing() {
    const btn = document.getElementById('txt-start-breath');
    const stateText = document.getElementById('breath-state-text');
    const timerText = document.getElementById('breath-timer');
    const circle = document.getElementById('breath-circle');

    if (this.isBreathingActive) {
      clearInterval(this.breathingTimer);
      this.isBreathingActive = false;
      if (btn) btn.textContent = 'Mulai Latihan';
      if (stateText) stateText.textContent = 'Mulai';
      if (timerText) timerText.textContent = '0';
      if (circle) circle.className = 'w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      return;
    }

    this.isBreathingActive = true;
    if (btn) btn.textContent = 'Hentikan';

    let phase = 'inhale';
    let count = 4;

    const runPhase = () => {
      if (!this.isBreathingActive) return;

      if (phase === 'inhale') {
        if (stateText) stateText.textContent = 'Tarik';
        if (circle) circle.className = 'w-44 h-44 rounded-full bg-primary/35 text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      } else if (phase === 'hold') {
        if (stateText) stateText.textContent = 'Tahan';
        if (circle) circle.className = 'w-44 h-44 rounded-full bg-tertiary/35 text-tertiary flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      } else if (phase === 'exhale') {
        if (stateText) stateText.textContent = 'Hembuskan';
        if (circle) circle.className = 'w-24 h-24 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      }
      if (timerText) timerText.textContent = count;
    };

    runPhase();

    this.breathingTimer = setInterval(() => {
      count--;
      if (count <= 0) {
        if (phase === 'inhale') {
          phase = 'hold';
          count = 7;
        } else if (phase === 'hold') {
          phase = 'exhale';
          count = 8;
        } else {
          phase = 'inhale';
          count = 4;
        }
      }
      runPhase();
    }, 1000);
  }

  toggleJournalDrawer(open = null) {
    const drawer = document.getElementById('drawer-journal');
    if (!drawer) return;
    const isOpen = !drawer.classList.contains('translate-x-full');
    const shouldOpen = open !== null ? open : !isOpen;

    if (shouldOpen) drawer.classList.remove('translate-x-full');
    else drawer.classList.add('translate-x-full');
  }

  openJournalWithContext() {
    const quote = philosophicalQuotes[this.quoteIndex % philosophicalQuotes.length];
    const problemInput = document.getElementById('journal-input-problem');
    if (problemInput && quote) {
      problemInput.value = `Refleksi: ${quote.author} — ${quote.text_id}`;
    }
    this.toggleJournalDrawer(true);
  }

  saveJournalEntry() {
    const problemInput = document.getElementById('journal-input-problem');
    const actionInput = document.getElementById('journal-input-action');

    const problem = problemInput ? problemInput.value.trim() : '';
    const action = actionInput ? actionInput.value.trim() : '';

    if (!problem && !action) {
      alert('Tuliskan setidaknya satu poin refleksi!');
      return;
    }

    const entry = {
      id: 'entry_' + Date.now(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      problem,
      action
    };

    this.journalEntries.unshift(entry);
    try {
      localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));
    } catch (e) {}

    if (problemInput) problemInput.value = '';
    if (actionInput) actionInput.value = '';

    this.renderJournalList();
  }

  renderJournalList() {
    const list = document.getElementById('journal-list');
    const countEl = document.getElementById('journal-count');
    if (!list) return;

    if (countEl) countEl.textContent = `${this.journalEntries.length} Catatan`;

    if (this.journalEntries.length === 0) {
      list.innerHTML = `<p class="text-xs text-on-surface-variant/60 italic text-center py-4">Belum ada catatan refleksi tersimpan.</p>`;
      return;
    }

    list.innerHTML = this.journalEntries.map(e => `
      <div class="p-3.5 rounded-2xl bg-surface-container border border-outline-variant/20 space-y-1 text-xs">
        <div class="flex items-center justify-between text-[10px] font-mono text-on-surface-variant/70">
          <span>${e.date}</span>
          <button type="button" class="text-on-surface-variant hover:text-red-400" onclick="app.deleteJournalEntry('${e.id}')">✕</button>
        </div>
        ${e.problem ? `<p class="font-semibold text-on-surface">💭 ${this.escapeHtml(e.problem)}</p>` : ''}
        ${e.action ? `<p class="text-primary font-bold">🎯 ${this.escapeHtml(e.action)}</p>` : ''}
      </div>
    `).join('');
  }

  deleteJournalEntry(id) {
    this.journalEntries = this.journalEntries.filter(e => e.id !== id);
    try {
      localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));
    } catch (e) {}
    this.renderJournalList();
  }

  openCardFocusModal() {
    const modal = document.getElementById('modal-card-focus');
    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const content = document.getElementById('modal-card-focus-content');
      if (content) content.classList.remove('scale-95');
    }
  }

  closeCardFocusModal() {
    const modal = document.getElementById('modal-card-focus');
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      const content = document.getElementById('modal-card-focus-content');
      if (content) content.classList.add('scale-95');
    }
  }

  closeAllModals() {
    this.closeTransmitterModal();
    this.closeBreathingModal();
    this.closeCardFocusModal();
    this.toggleJournalDrawer(false);
  }

  toggleGlobalFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      const icon = document.getElementById('icon-global-fullscreen');
      if (icon) icon.textContent = 'fullscreen_exit';
    } else {
      document.exitFullscreen?.().catch(() => {});
      const icon = document.getElementById('icon-global-fullscreen');
      if (icon) icon.textContent = 'fullscreen';
    }
  }

  shareFlowResult() {
    const isEn = this.currentLang === 'en';
    const flowTitle = isEn ? (this.activeFlowchart.title_en || this.activeFlowchart.title_id) : this.activeFlowchart.title_id;
    const text = `🌿 Terra Flow — Interactive Flowcharts\n"${flowTitle}"\nMainkan & selesaikan masalahmu secara gratis tanpa biaya!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Terra Flowchart',
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert(isEn ? 'Flowchart link copied to clipboard!' : 'Link flowchart berhasil disalin ke clipboard!');
      });
    }
  }

  applyTheme(theme) {
    const icon = document.getElementById('icon-theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      if (icon) icon.textContent = 'light_mode';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      if (icon) icon.textContent = 'dark_mode';
    }
  }

  applyLanguage(lang) {
    const txtLang = document.getElementById('txt-lang');
    if (txtLang) txtLang.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;

    const dict = translations[lang];
    if (dict) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
      });

      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key]) el.placeholder = dict[key];
      });
    }

    this.renderDailyQuote();
    this.renderFlowchartPlayer();
    this.renderCommunityGrid();
    this.renderJournalList();
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }
}

// Instantiate on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SeamlessProblemSolverApp();
});
