import { initScrollFloat } from './ScrollFloat.js';
import { TaskBreakdownEngine } from './src/TaskBreakdownEngine.js';
import { AIFlowchartParser } from './src/AIFlowchartParser.js';
import { AudioAmbientEngine } from './src/AudioAmbientEngine.js';
import { FlowchartEngine } from './src/FlowchartEngine.js';
import { FlowchartGraphRenderer } from './src/FlowchartGraphRenderer.js';
import { QuickScriptFlowParser } from './src/QuickScriptFlowParser.js';
import { InteractiveCanvasEditor } from './src/InteractiveCanvasEditor.js';
import { MermaidTransmitterParser } from './src/MermaidTransmitterParser.js';

const translations = {
  id: {
    brandTag: "Flowchart & Problem Solver",
    navHome: "Main Flow",
    navCommunity: "Komunitas & Admin",
    navCreate: "Buat Flowchart",
    navAds: "Ads Setup",
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

    // Community
    adminBadgeLabel: "Flowchart Pilihan Admin (5 Unique Presets)",
    communityHeaderTitle: "Flowchart Unik & Komunitas",
    communityHeaderSub: "Jelajahi flowchart kocak, stoik, dan logika sehari-hari yang siap dimainkan & disesuaikan.",
    btnCreateNewFlow: "Buat Costum Flowchart",
    phSearchFlow: "Cari flowchart...",
    catAll: "Semua",
    catAdmin: "🔥 Official Admin",
    catHumor: "Humor & Meme",
    catStoic: "Stoik & Hidup",
    catWork: "Kerja & Logika",
    btnPlayFlow: "Mainkan Flowchart",

    // Builder
    builderTag: "Interactive Flowchart Creator",
    builderTitle: "Buat Custom Flowchart Kamu",
    builderSub: "Buat diagram alur keputusanmu sendiri dengan mudah. Tanpa bayar hosting, 100% gratis!",
    lblFlowTitle: "Judul Flowchart *",
    lblFlowAuthor: "Nama Pembuat / Author",
    lblFlowCategory: "Kategori",
    lblFlowDesc: "Deskripsi Singkat",
    builderStepsTitle: "Langkah & Pertanyaan Flowchart",
    btnAddNode: "Tambah Langkah",
    btnExportJSON: "Ekspor JSON",
    btnImportJSON: "Impor JSON",
    btnTestFlow: "Uji Flowchart",
    btnPublishFlow: "Simpan & Terbitkan",

    // Ads & Monetization
    adTagSponsor: "SPONSORED ADVERTISEMENT",
    adSubText: "Dukung layanan Terra tetap 100% gratis dengan iklan ramah pengguna.",
    btnSkipAd: "Lewati",
    adsManagerTitle: "Pengaturan Iklan & Monetisasi",
    adsManagerSub: "Pantau estimasi pendapatan & pasang kode Google AdSense milikmu.",
    statImpressions: "Tayangan Iklan",
    statClicks: "Klik Iklan",
    statEarnings: "Est. Pendapatan",
    lblAdsenseId: "Google AdSense Publisher ID (ca-pub-xxx)",
    lblEnableCornerAd: "Tampilkan Floating Corner Ad Banner",
    btnSaveAdsSetup: "Simpan Pengaturan",
    adTagCorner: "SPONSOR AD",

    // Section 3
    sectionTitle: "Tiga Pilar Ketenangan",
    sectionSubtitle: "Prinsip dasar Stoikisme untuk menjaga pikiran tetap jernih di tengah badai kehidupan.",
    card1Title: "Kesadaran",
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
    navCreate: "Create Flowchart",
    navAds: "Ads Setup",
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

    // Community
    adminBadgeLabel: "Admin Featured Flowcharts (5 Unique Presets)",
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

    // Builder
    builderTag: "Interactive Flowchart Creator",
    builderTitle: "Create Your Custom Flowchart",
    builderSub: "Design your own custom decision tree easily. 100% free with zero hosting cost!",
    lblFlowTitle: "Flowchart Title *",
    lblFlowAuthor: "Author Name",
    lblFlowCategory: "Category",
    lblFlowDesc: "Short Description",
    builderStepsTitle: "Flowchart Steps & Questions",
    btnAddNode: "Add Step",
    btnExportJSON: "Export JSON",
    btnImportJSON: "Import JSON",
    btnTestFlow: "Test Flowchart",
    btnPublishFlow: "Save & Publish",

    // Ads & Monetization
    adTagSponsor: "SPONSORED ADVERTISEMENT",
    adSubText: "Support Terra free service with friendly non-intrusive ads.",
    btnSkipAd: "Skip",
    adsManagerTitle: "Ads & Monetization Settings",
    adsManagerSub: "Track estimated earnings & configure your Google AdSense code.",
    statImpressions: "Ad Impressions",
    statClicks: "Ad Clicks",
    statEarnings: "Est. Earnings",
    lblAdsenseId: "Google AdSense Publisher ID (ca-pub-xxx)",
    lblEnableCornerAd: "Display Floating Corner Ad Banner",
    btnSaveAdsSetup: "Save Settings",
    adTagCorner: "SPONSOR AD",

    // Section 3
    sectionTitle: "Three Pillars of Calm",
    sectionSubtitle: "Core Stoic principles to keep your mind crystal clear amidst life's storms.",
    card1Title: "Awareness",
    card1Desc: "Recognizing and separating objective facts from emotional perceptions is the first step toward peace.",
    card2Title: "Clear Action",
    card2Desc: "Direct all your focus and effort toward things directly within your sphere of control.",
    card3Title: "Sincere Acceptance",
    card3Desc: "Unshakable peace is found when we accept outcomes that are beyond our control.",
    wisdomLabel: "Daily Wisdom Quote",
    btnNewQuote: "Another Quote",

    // Breathing & Journal
    breathingModalTitle: "4-7-8 Relaxation Breath",
    breathingModalSub: "Inhale 4 seconds, hold 7 seconds, exhale 8 seconds.",
    btnStart: "Start Breathing",
    btnPause: "Stop Breathing",
    journalTitle: "Serenity Journal",
    labelProblem: "What is currently weighing on your mind?",
    labelAction: "Concrete action / Attitude of acceptance:",
    btnSaveJournal: "Save Entry",
    journalListTitle: "Reflection History",
    footerPhilosophy: "Philosophy",
    footerCommunity: "Community",
    footerBreathing: "Breathing Exercise",
    footerJournal: "Reflection Journal"
  }
};

const quotes = [
  {
    idQuote: "Kita menderita lebih sering dalam imajinasi daripada dalam kenyataan.",
    enQuote: "We suffer more often in imagination than in reality.",
    author: "Seneca"
  },
  {
    idQuote: "Kamu memiliki kendali atas pikiranmu - bukan kejadian luar. Pahami ini, dan kamu akan menemukan kekuatan.",
    enQuote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    idQuote: "Bukan apa yang terjadi padamu yang penting, tapi bagaimana caramu menanggapinya.",
    enQuote: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    idQuote: "Ketika kamu menerima apa adanya, seluruh dunia menjadi milikmu.",
    enQuote: "When you accept things as they are, the whole world belongs to you.",
    author: "Lao Tzu"
  },
  {
    idQuote: "Kedamaian adalah hasil dari melatih pikiranmu untuk memproses hidup sebagaimana adanya, bukan sebagaimana kamu inginkan.",
    enQuote: "Peace is the result of training your mind to process life as it is, not as you wish it were.",
    author: "Stoic Wisdom"
  }
];

// --- 5 Admin Preset Flowcharts Transcribed from Images ---
const adminFlowcharts = [
  {
    id: "admin-stoic-default",
    title_id: "Terra Stoic Problem Solver",
    title_en: "Terra Stoic Problem Solver",
    category: "stoic",
    author: "Terra Admin",
    isAdmin: true,
    likes: 342,
    plays: 1280,
    desc_id: "Diagram Stoikisme klasik untuk memisahkan hal dalam kendali & melepaskan kecemasan.",
    desc_en: "Classic Stoic decision flowchart to separate control & release anxiety.",
    startNode: "step1",
    nodes: {
      step1: {
        tag_id: "Refleksi Pertama", tag_en: "First Reflection",
        q_id: "Punya Masalah dalam Hidup?", q_en: "Do you have a problem in life?",
        sub_id: "Jawab dengan jujur. Semua berawal dari keberanian mengakui kondisi pikiran kita.",
        sub_en: "Answer honestly. Everything starts with acknowledging our current state of mind.",
        options: [
          { text_id: "YA", text_en: "YES", next: "step2", btnStyle: "btn-primary" },
          { text_id: "TIDAK", text_en: "NO", next: "res_noproblem", btnStyle: "btn-secondary" }
        ]
      },
      step2: {
        tag_id: "Lingkaran Kendali", tag_en: "Circle of Control",
        q_id: "Bisa melakukan sesuatu?", q_en: "Can you do something about it?",
        sub_id: "Apakah solusi berada dalam jangkauan tindakanmu hari ini, atau di luar kendalimu?",
        sub_en: "Is the solution within reach of your actions today, or outside your control?",
        options: [
          { text_id: "YA, BISA", text_en: "YES, I CAN", next: "res_canact", btnStyle: "btn-primary" },
          { text_id: "TIDAK BISA", text_en: "NO, I CAN'T", next: "res_cannotact", btnStyle: "btn-primary" }
        ]
      },
      res_noproblem: {
        isResult: true,
        title_id: "Lalu Kenapa Khawatir?", title_en: "Then Why Worry?",
        msg_id: "\"Hati yang tidak terdistraksi oleh keinginan palsu adalah benteng ketenangan terkuat.\"",
        msg_en: "\"A mind undistracted by false desires is a fortress of inner peace.\"",
        adv_id: "Nikmati setiap detik ketenangan saat ini. Bersyukurlah atas pikiran yang damai.",
        adv_en: "Savor every second of this quiet moment. Be grateful for a peaceful mind."
      },
      res_canact: {
        isResult: true,
        title_id: "Lalu Kenapa Khawatir?", title_en: "Then Why Worry?",
        msg_id: "\"Bukan hal yang terjadi yang mencemaskan kita, melainkan persepsi kita tentang hal itu. Fokuslah pada aksimu.\"",
        msg_en: "\"It's not what happens to you, but how you react to it that matters. Focus on your actions.\"",
        adv_id: "Ambil tindakan kecil pertama sekarang. Kejelasan lahir dari aksi nyata, bukan overthinking.",
        adv_en: "Take your first small step now. Clarity is born from action, not overthinking."
      },
      res_cannotact: {
        isResult: true,
        title_id: "Lalu Kenapa Khawatir?", title_en: "Then Why Worry?",
        msg_id: "\"Berakar dalam ketenangan. Lepaskan apa yang tidak bisa dikendalikan, dan percayalah pada prosesnya.\"",
        msg_en: "\"Rooted in calm. Release what cannot be controlled, and trust the process.\"",
        adv_id: "Lepaskan ikatan ekspektasi. Apa yang di luar kendalimu bukanlah bebanmu untuk dipikul.",
        adv_en: "Let go of the weight of expectation. What is beyond your control is not yours to carry."
      }
    }
  },
  {
    id: "comm-ex-chat",
    title_id: "Harus Balas Chat Mantan Jam 2 Pagi?",
    title_en: "Should You Reply to Your Ex at 2 AM?",
    category: "humor",
    author: "Warga Netizen",
    isAdmin: true,
    likes: 890,
    plays: 3420,
    desc_id: "Diagram penyelamat harga diri dari kebodohan emosional jam 2 pagi.",
    desc_en: "Self-respect savior flowchart from 2 AM emotional overthinking.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Jam 2 Pagi Check", tag_en: "2 AM Check",
        q_id: "Mantan nge-P atau nge-chat 'kamu belum tidur?' jam 2 pagi?",
        q_en: "Did your ex text 'you awake?' at 2 AM?",
        options: [
          { text_id: "YA, BARU AJA CHAT", text_en: "YES, JUST TEXTED", next: "q2", btnStyle: "btn-primary" },
          { text_id: "GAK, CUMA KANGEN aja", text_en: "NO, JUST MISS THEM", next: "res_sleep", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Cek Kesadaran", tag_en: "Sobriety Check",
        q_id: "Kamu lagi kesepian atau belum tidur karena main HP?",
        q_en: "Are you just lonely or doomscrolling?",
        options: [
          { text_id: "KESEPIAN BANGET", text_en: "SUPER LONELY", next: "q3", btnStyle: "btn-primary" },
          { text_id: "MAIN HP DOANG", text_en: "DOOMSCROLLING", next: "res_sleep", btnStyle: "btn-secondary" }
        ]
      },
      q3: {
        tag_id: "Memori Masa Lalu", tag_en: "Past Memory Check",
        q_id: "Ingat gak kenapa dulu kalian putus?",
        q_en: "Remember why you broke up in the first place?",
        options: [
          { text_id: "INGAT BANGET (DISAKITI)", text_en: "REMEMBER (GOT HURT)", next: "res_nobalas", btnStyle: "btn-primary" },
          { text_id: "LUPA / LUPA DIRI", text_en: "FORGOT", next: "res_nobalas", btnStyle: "btn-secondary" }
        ]
      },
      res_sleep: {
        isResult: true,
        title_id: "TIDUR SEKARANG! MINUM AIR PUTIH",
        title_en: "GO TO SLEEP! DRINK WATER",
        msg_id: "\"Rasa kangen jam 2 pagi itu cuma hormon melatonin yang kurang. Besok pagi juga hilang.\"",
        msg_en: "\"2 AM longing is just lack of sleep. Tomorrow morning it vanishes.\"",
        adv_id: "Matikan paket data, kunci HP, dan tidur. Harga dirimu mahal!",
        adv_en: "Turn off Wi-Fi, lock your phone, and sleep. Protect your dignity!"
      },
      res_nobalas: {
        isResult: true,
        title_id: "DILARANG BALAS! ARCHIVE CHAT-NYA",
        title_en: "DO NOT REPLY! ARCHIVE THE CHAT",
        msg_id: "\"Jangan masuk ke lubang yang sama dua kali kecuali kamu sengaja ingin jatuh.\"",
        msg_en: "\"Don't enter the same hole twice unless you want to fall on purpose.\"",
        adv_id: "Balas besok jam 10 pagi kalau kamu memang masih waras. Sekarang TIDUR!",
        adv_en: "Reply tomorrow at 10 AM if you're still sane. Right now SLEEP!"
      }
    }
  },
  {
    id: "comm-resign",
    title_id: "Apakah Saya Harus Resign Hari Ini?",
    title_en: "Should I Resign Today?",
    category: "work",
    author: "Karyawan Buruh Ketik",
    isAdmin: true,
    likes: 1240,
    plays: 4890,
    desc_id: "Panduan emosional karyawan kantoran saat ditumpuk deadline 5 orang.",
    desc_en: "Emotional survival guide for corporate employees facing 5-people deadlines.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Cek Tabungan", tag_en: "Savings Check",
        q_id: "Apakah saldo tabunganmu cukup untuk makan 6 bulan tanpa kerja?",
        q_en: "Do you have 6 months emergency savings without a job?",
        options: [
          { text_id: "ADA / CUKUP", text_en: "YES, ENOUGH", next: "q2", btnStyle: "btn-primary" },
          { text_id: "SALDO RP 50 RIBU", text_en: "SAVINGS $5 ONLY", next: "res_kerja", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Cek Job Offer", tag_en: "Job Offer Check",
        q_id: "Apakah sudah dapat tawaran kerja (Offer Letter) dari perusahaan lain?",
        q_en: "Do you already have a signed Offer Letter from another company?",
        options: [
          { text_id: "SUDAH TANDA TANGAN", text_en: "SIGNED OFFER", next: "res_resign", btnStyle: "btn-primary" },
          { text_id: "BELUM, BARU ANGAN-ANGAN", text_en: "NOT YET, JUST WISH", next: "res_sabar", btnStyle: "btn-secondary" }
        ]
      },
      res_kerja: {
        isResult: true,
        title_id: "SENYUM DULU & KERJAKAN DEADLINE",
        title_en: "SMILE & BACK TO DEADLINE",
        msg_id: "\"Cicilan dan perut yang lapar tidak peduli pada emosi mendadakmu saat revisi ke-10.\"",
        msg_en: "\"Bills and hunger do not care about your emotional reaction to the 10th revision.\"",
        adv_id: "Tarik napas, kerjakan pelan-pelan, dan mulai sebar CV malam nanti.",
        adv_en: "Take a deep breath, do it step by step, and start sending CVs tonight."
      },
      res_sabar: {
        isResult: true,
        title_id: "TUNGGU DULU, SEBAR CV DULU!",
        title_en: "HOLD ON, SEND CVS FIRST!",
        msg_id: "\"Resign tanpa persiapan adalah jalan pintas menuju kecemasan keuangan baru.\"",
        msg_en: "\"Resigning without a backup plan is a shortcut to new financial anxiety.\"",
        adv_id: "Lamarlah pekerjaan baru diam-diam dulu, baru ajukan 1-month notice!",
        adv_en: "Apply quietly for new jobs first, then submit your 1-month notice!"
      },
      res_resign: {
        isResult: true,
        title_id: "KIRIM SURAT RESIGN SEKARANG!",
        title_en: "SUBMIT RESIGNATION LETTER NOW!",
        msg_id: "\"Selamat atas keberanianmu melangkah ke babak baru kehidupan!\"",
        msg_en: "\"Congratulations on your courage to step into a new life chapter!\"",
        adv_id: "Ketik surat 1-month notice dengan sopan & jaga hubungan baik profesional.",
        adv_en: "Write polite 1-month notice letter & maintain good professional networks."
      }
    }
  },
  {
    id: "comm-boba",
    title_id: "Beli Kopi Boba/Coffee Shop 50rb Tiap Hari?",
    title_en: "Buy $5 Coffee/Boba Every Single Day?",
    category: "humor",
    author: "Pakar Finansial Kopi",
    isAdmin: true,
    likes: 670,
    plays: 2890,
    desc_id: "Kalkulator emosional pengeluaran kopi kekinian vs impian punya rumah.",
    desc_en: "Emotional calculator comparing daily fancy coffee vs house savings.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Cek Tujuan", tag_en: "Goal Check",
        q_id: "Apakah kamu memang butuh kafein untuk tidak tertidur saat meeting?",
        q_en: "Do you genuinely need caffeine not to fall asleep in meetings?",
        options: [
          { text_id: "BUTUH KAFEIN NYATA", text_en: "NEED CAFFEINE", next: "q2", btnStyle: "btn-primary" },
          { text_id: "CUMA INGIN PEGANG GELASNYA", text_en: "JUST FOR THE AESTHETIC", next: "res_seduh", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Cek Dompet", tag_en: "Wallet Check",
        q_id: "Apakah anggaran ngopi bulananmu melebihi bayar kontrakan/kos?",
        q_en: "Does your monthly coffee budget exceed your rent?",
        options: [
          { text_id: "YA, BOROS BANGET", text_en: "YES, TOO EXPENSIVE", next: "res_seduh", btnStyle: "btn-primary" },
          { text_id: "ENGGAK, MASIH AMAN", text_en: "NO, STILL SAFE", next: "res_beli", btnStyle: "btn-secondary" }
        ]
      },
      res_seduh: {
        isResult: true,
        title_id: "SEDUH KOPI SACHET / RUMAHAN!",
        title_en: "BREW INSTANT COFFEE AT HOME!",
        msg_id: "\"Rp 50.000 x 30 hari = Rp 1.500.000 sebulan hanya untuk air gula berkafein.\"",
        msg_en: "\"$5 x 30 days = $150 a month just for fancy caffeinated sugar water.\"",
        adv_id: "Beli tumbler keren dan buat kopi racikan sendiri. Hemat jutaan setahun!",
        adv_en: "Buy a cool tumbler and brew your own coffee. Save hundreds a year!"
      },
      res_beli: {
        isResult: true,
        title_id: "NIKMATI KOPIMU TANPA RASA BERSALAH",
        title_en: "ENJOY YOUR COFFEE GUILT-FREE",
        msg_id: "\"Jika finansialmu sehat, kebahagiaan kecil 50rb untuk mood kerja adalah investasi valid.\"",
        msg_en: "\"If your finances are healthy, a small daily joy boosting work mood is valid.\"",
        adv_id: "Pesan tanpa gula berlebih dan selesaikan tugas utamamu hari ini!",
        adv_en: "Order low sugar and crush your daily goals!"
      }
    }
  },
  {
    id: "comm-fridge",
    title_id: "Buka Kulkas Lagi (Padahal 5 Menit Lalu Cek)?",
    title_en: "Check Refrigerator Again (Checked 5 Mins Ago)?",
    category: "humor",
    author: "Tim Begadang Malam",
    isAdmin: true,
    likes: 940,
    plays: 3810,
    desc_id: "Fenomena ajaib membuka pintu kulkas berharap ada makanan ajaib yang mendadak muncul.",
    desc_en: "The magical phenomenon of reopening the fridge hoping new food spawned.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Kulkas Radar", tag_en: "Fridge Radar",
        q_id: "Apakah kamu baru saja buka kulkas 5 menit yang lalu dan kosong?",
        q_en: "Did you just open the fridge 5 minutes ago and it was empty?",
        options: [
          { text_id: "YA, TADI KOSONG", text_en: "YES, WAS EMPTY", next: "q2", btnStyle: "btn-primary" },
          { text_id: "INSPEKSI PERTAMA", text_en: "FIRST INSPECTION", next: "res_makan", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Harapan Ajaib", tag_en: "Miracle Expectation",
        q_id: "Apakah kamu berharap peri kulkas mendadak menaruh pizza hangat di sana?",
        q_en: "Are you expecting a fridge fairy to magically place fresh pizza inside?",
        options: [
          { text_id: "HOOH, SIAPA TAHU ADA", text_en: "MAYBE THERE IS", next: "res_tutup", btnStyle: "btn-primary" },
          { text_id: "TIDAK, CUMA BOSAN", text_en: "NO, JUST BORED", next: "res_tutup", btnStyle: "btn-secondary" }
        ]
      },
      res_makan: {
        isResult: true,
        title_id: "AMBIL MAKANAN SECUKUPNYA",
        title_en: "TAKE A MODERATE SNACK",
        msg_id: "\"Selamat! Kamu menemukan makanan di inspeksi pertama.\"",
        msg_en: "\"Congrats! You found food on your first inspection.\"",
        adv_id: "Makan perlahan dan jangan lupa minum air putih.",
        adv_en: "Eat slowly and don't forget to drink water."
      },
      res_tutup: {
        isResult: true,
        title_id: "TUTUP KULKAS & MINUM AIR!",
        title_en: "CLOSE FRIDGE & DRINK WATER!",
        msg_id: "\"Standar makanan di kulkas tidak akan berubah dalam 5 menit kecuali kamu belanja.\"",
        msg_en: "\"Fridge inventory will not magically upgrade in 5 minutes unless you shop.\"",
        adv_id: "Tutup kulkas, minum 1 gelas air dingin, dan kembali beraktivitas!",
        adv_en: "Close the fridge, drink 1 glass of cold water, and go back to your work!"
      }
    }
  },
  {
    id: "comm-hunger",
    title_id: "Lapar Beneran vs Lapar Emosional/Bosan?",
    title_en: "Real Hunger vs Emotional/Boredom Hunger?",
    category: "stoic",
    author: "Nutrisi Mindful",
    isAdmin: true,
    likes: 780,
    plays: 3120,
    desc_id: "Tes stoik 60 detik membedakan lapar perut fisik vs lapar emosional stres.",
    desc_en: "60-second Stoic test separating physical stomach hunger from emotional stress.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Tes Apel", tag_en: "Apple Test",
        q_id: "Apakah kamu bersedia makan 1 buah apel / makanan polos sekarang?",
        q_en: "Would you willingly eat a plain apple right now?",
        options: [
          { text_id: "MAU BANGET (LAPAR)", text_en: "YES, WILLING (HUNGRY)", next: "res_real", btnStyle: "btn-primary" },
          { text_id: "GAK, CUMA MAU CHIPS/PIZZA", text_en: "NO, ONLY CHIPS/PIZZA", next: "q2", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Cek Emosi", tag_en: "Emotion Check",
        q_id: "Apakah kamu sedang stres, cemas, atau bosan dengan pekerjaanmu?",
        q_en: "Are you stressed, anxious, or bored with your work?",
        options: [
          { text_id: "YA, STRES/BOSAN", text_en: "YES, STRESSED/BORED", next: "res_emo", btnStyle: "btn-primary" },
          { text_id: "ENGGAK, SANTAI", text_en: "NO, CHILL", next: "res_real", btnStyle: "btn-secondary" }
        ]
      },
      res_real: {
        isResult: true,
        title_id: "LAPAR FISIK REALS - MAKANLAH!",
        title_en: "REAL PHYSICAL HUNGER - EAT!",
        msg_id: "\"Tubuhmu membutuhkan bahan bakar nutrisi nyata. Berikan makanan bergizi.\"",
        msg_en: "\"Your body needs real nutritional fuel. Nourish it properly.\"",
        adv_id: "Nikmati makanan bernutrisi seimbang dengan penuh kesadaran (mindful eating).",
        adv_en: "Enjoy balanced nutrition with full mindfulness."
      },
      res_emo: {
        isResult: true,
        title_id: "LAPAR EMOSIONAL - JANGAN MAKAN!",
        title_en: "EMOTIONAL HUNGER - DO NOT EAT!",
        msg_id: "\"Kamu bukan lapar perut, tapi sedang mencari dopamin instan dari rasa stres/bosan.\"",
        msg_en: "\"You aren't stomach hungry; you're seeking instant dopamine for stress/boredom.\"",
        adv_id: "Jalan kaki 5 menit, tarik napas 4-7-8, atau minum 1 gelas air hangat.",
        adv_en: "Take a 5-minute walk, 4-7-8 breathing, or drink a warm glass of water."
      }
    }
  },
  {
    id: "comm-olshop",
    title_id: "Beli Barang Diskon Olshop Yang Gak Butuh?",
    title_en: "Buy Unneeded Online Sale Items?",
    category: "humor",
    author: "Korban Checkout 11.11",
    isAdmin: true,
    likes: 1120,
    plays: 4210,
    desc_id: "Penyelamat dompet saat ada diskon besar tapi barangnya tidak terpakai.",
    desc_en: "Wallet saver when huge sales tempt you with useless items.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Cek Kebutuhan", tag_en: "Need Check",
        q_id: "Apakah barang ini ada di daftar kebutuhanmu SEBELUM diskon muncul?",
        q_en: "Was this item on your need list BEFORE the sale started?",
        options: [
          { text_id: "SUDAH DICARI DARI DULU", text_en: "SEARCHED LONG AGO", next: "q2", btnStyle: "btn-primary" },
          { text_id: "BARU LIHAT KARENA DISKON", text_en: "JUST SAW SALE BANNER", next: "res_hapus", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Tes 48 Jam", tag_en: "48-Hour Rule",
        q_id: "Bisakah kamu menunggu 48 jam di keranjang sebelum checkout?",
        q_en: "Can you wait 48 hours in cart before checkout?",
        options: [
          { text_id: "BISA TUNGGU 48 JAM", text_en: "CAN WAIT 48 HOURS", next: "res_beli", btnStyle: "btn-primary" },
          { text_id: "MAU CHECKOUT SEKARANG", text_en: "CHECKOUT NOW", next: "res_hapus", btnStyle: "btn-secondary" }
        ]
      },
      res_hapus: {
        isResult: true,
        title_id: "HAPUS DARI KERANJANG SEKARANG!",
        title_en: "REMOVE FROM CART NOW!",
        msg_id: "\"Kamu tidak menghemat 50%, kamu menghamburkan 100% uangmu untuk barang tak berguna.\"",
        msg_en: "\"You aren't saving 50%; you're wasting 100% of your money on useless stuff.\"",
        adv_id: "Tutup aplikasi olshop. Tabung uang itu untuk dana darurat!",
        adv_en: "Close the shopping app. Put that money into emergency savings!"
      },
      res_beli: {
        isResult: true,
        title_id: "CHECKOUT DENGAN BIJAK",
        title_en: "CHECKOUT WISELY",
        msg_id: "\"Ini adalah pembelian terencana yang memang kamu butuhkan dan sudah dievaluasi.\"",
        msg_en: "\"This is a planned purchase that you truly need and evaluated.\"",
        adv_id: "Gunakan voucher diskon & nikmati barang barumu!",
        adv_en: "Apply discount vouchers & enjoy your new item!"
      }
    }
  },
  {
    id: "comm-doomscroll",
    title_id: "Tidur Cepat vs Doomscrolling TikTok 3 Jam?",
    title_en: "Sleep Early vs Doomscrolling 3 Hours?",
    category: "humor",
    author: "Generasi HP Malam",
    isAdmin: true,
    likes: 1530,
    plays: 5920,
    desc_id: "Diagram dilema malam hari antara istirahat cukup atau scroll video pendek tanpa henti.",
    desc_en: "Nightly dilemma flowchart between proper rest vs endless short video scrolling.",
    startNode: "q1",
    nodes: {
      q1: {
        tag_id: "Cek Alarm", tag_en: "Alarm Check",
        q_id: "Besok harus bangun pagi untuk kerja/kuliah jam 6 pagi?",
        q_en: "Do you have to wake up early at 6 AM tomorrow for work/school?",
        options: [
          { text_id: "HARUS BANGUN PAGI", text_en: "MUST WAKE UP EARLY", next: "q2", btnStyle: "btn-primary" },
          { text_id: "BESOK LIBUR", text_en: "TOMORROW IS OFF", next: "res_scroll", btnStyle: "btn-secondary" }
        ]
      },
      q2: {
        tag_id: "Mata Lelah", tag_en: "Tired Eyes",
        q_id: "Apakah matamu sudah perih dan kamu menguap berkali-kali?",
        q_en: "Are your eyes stinging and are you yawning repeatedly?",
        options: [
          { text_id: "MATA SUDAH PERIH", text_en: "EYES ARE STINGING", next: "res_tidur", btnStyle: "btn-primary" },
          { text_id: "MASIH PENASARAN REELS", text_en: "STILL WANT REELS", next: "res_tidur", btnStyle: "btn-secondary" }
        ]
      },
      res_tidur: {
        isResult: true,
        title_id: "TARUH HP DI MEJA & TIDUR!",
        title_en: "PUT PHONE DOWN & SLEEP!",
        msg_id: "\"Algoritma TikTok dibuat untuk mencuri tidurmu. Tubuhmu butuh pemulihan 7-8 jam.\"",
        msg_en: "\"TikTok algorithms are built to steal your sleep. Your body needs 7-8h recovery.\"",
        adv_id: "Aktifkan Mode Jangan Ganggu (DND), taruh HP di luar jangkauan kasur, dan merem!",
        adv_en: "Turn on Do Not Disturb (DND), place phone out of bed reach, and sleep!"
      },
      res_scroll: {
        isResult: true,
        title_id: "BATASI 15 MENIT LALU ISTIRAHAT",
        title_en: "CAP AT 15 MINS THEN REST",
        msg_id: "\"Meskipun besok libur, pola tidur yang hancur akan merusak kesehatan batinmu.\"",
        msg_en: "\"Even if tomorrow is off, ruined sleep cycles damage your mental health.\"",
        adv_id: "Pasang timer 15 menit. Saat timer berbunyi, langsung matikan HP!",
        adv_en: "Set 15-min timer. When it rings, immediately lock your phone!"
      }
    }
  },
  {
    id: "admin-flow-lesson",
    title_id: "Pelajaran Singkat Flowchart (Meta Meme)",
    title_en: "A Brief Lesson in Flow Charts",
    category: "humor",
    author: "Evan Diaz / Pajamaforest",
    isAdmin: true,
    likes: 512,
    plays: 2190,
    desc_id: "Flowchart meta klasik yang menguji apakah kamu benar-benar paham cara membaca kotak & panah!",
    desc_en: "Classic meta flowchart testing whether you actually understand how boxes & arrows work!",
    startNode: "step1",
    nodes: {
      step1: {
        tag_id: "Start!", tag_en: "Start!",
        q_id: "Ini Adalah Sebuah Flowchart", q_en: "This is a Flow Chart",
        sub_id: "Mari kita tes pemahaman dasar diagram alur.", sub_en: "Let's test basic flowchart comprehension.",
        options: [
          { text_id: "ok", text_en: "ok", next: "step2_so", btnStyle: "btn-primary" },
          { text_id: "a what?", text_en: "a what?", next: "step2_awhat", btnStyle: "btn-secondary" }
        ]
      },
      step2_so: {
        tag_id: "Cek Pemahaman", tag_en: "Check Understanding",
        q_id: "Jadi kamu paham kan?", q_en: "So you get it?",
        options: [
          { text_id: "yep", text_en: "yep", next: "res_thatsit", btnStyle: "btn-primary" },
          { text_id: "oh, ok", text_en: "oh, ok", next: "step2_so", btnStyle: "btn-secondary" }
        ]
      },
      step2_awhat: {
        tag_id: "Penjelasan", tag_en: "Explanation",
        q_id: "Sebuah Flowchart!", q_en: "A Flow Chart",
        options: [
          { text_id: "...a what?", text_en: "...a what?", next: "step3_howd", btnStyle: "btn-primary" },
          { text_id: "oh, ok", text_en: "oh, ok", next: "step2_so", btnStyle: "btn-secondary" }
        ]
      },
      step3_howd: {
        tag_id: "Pertanyaan Serius", tag_en: "Serious Question",
        q_id: "Bagaimana bisa kamu sampai sejauh ini?!", q_en: "How'd you get this far, anyway?",
        options: [
          { text_id: "saya bisa baca ini...", text_en: "i can read these...", next: "res_thatsit", btnStyle: "btn-primary" },
          { text_id: "tidak tahu", text_en: "no idea", next: "step4_boxes", btnStyle: "btn-primary" },
          { text_id: "tentu saja", text_en: "obviously", next: "step4_dumb", btnStyle: "btn-secondary" },
          { text_id: "entahlah", text_en: "i dunno", next: "step4_wait", btnStyle: "btn-secondary" }
        ]
      },
      step4_boxes: {
        tag_id: "Langkah Dasar", tag_en: "Basic Step",
        q_id: "Ok, lihat kotak-kotak itu?", q_en: "Ok, see the boxes?",
        options: [
          { text_id: "ya", text_en: "yes", next: "step5_arrows", btnStyle: "btn-primary" },
          { text_id: "tidak", text_en: "no", next: "step4_wait", btnStyle: "btn-secondary" }
        ]
      },
      step5_arrows: {
        tag_id: "Langkah Kedua", tag_en: "Second Step",
        q_id: "Dan lihat panah-panahnya?", q_en: "And see the arrows?",
        options: [
          { text_id: "ya", text_en: "yes", next: "step4_dumb", btnStyle: "btn-primary" },
          { text_id: "tidak", text_en: "no", next: "step4_wait", btnStyle: "btn-secondary" }
        ]
      },
      step4_dumb: {
        tag_id: "Uji IQ", tag_en: "IQ Check",
        q_id: "Kamu bodoh ya?", q_en: "Are you dumb?",
        options: [
          { text_id: "tentu saja", text_en: "obviously", next: "res_thatsit", btnStyle: "btn-primary" },
          { text_id: "tidak", text_en: "no", next: "step4_wait", btnStyle: "btn-secondary" }
        ]
      },
      step4_wait: {
        tag_id: "Kebingungan", tag_en: "Confusion",
        q_id: "Tunggu, apa?!", q_en: "Wait, what?",
        options: [
          { text_id: "ya!", text_en: "yes!", next: "res_thatsit", btnStyle: "btn-primary" },
          { text_id: "tidak", text_en: "no", next: "step4_wait", btnStyle: "btn-secondary" }
        ]
      },
      res_thatsit: {
        isResult: true,
        title_id: "NAH, ITULAH FLOWCHART!", title_en: "THAT'S A FLOW CHART!",
        msg_id: "\"Selamat! Kamu berhasil menavigasi labirin kotak dan panah meta ini.\"",
        msg_en: "\"Congratulations! You successfully navigated this meta maze of boxes and arrows.\"",
        adv_id: "Sekarang kamu sudah resmi menjadi ahli membaca diagram alur.",
        adv_en: "You are now officially a certified flowchart master reader."
      }
    }
  },
  {
    id: "admin-flow-commonsense",
    title_id: "Akal Sehat: Caraku Mengatasi Masalah",
    title_en: "Common Sense: A Flowchart",
    category: "humor",
    author: "Crookedglasses",
    isAdmin: true,
    likes: 489,
    plays: 1850,
    desc_id: "Perbandingan kocak antara orang normal vs kebiasaan overthinking dan panik berlebihan.",
    desc_en: "Hilarious comparison between normal people vs overthinking & over-reacting.",
    startNode: "step1",
    nodes: {
      step1: {
        tag_id: "Orientasi Diri", tag_en: "Self Orientation",
        q_id: "Kamu menemukan masalah. Bagaimana responmu?", q_en: "You found a problem. How do you respond?",
        options: [
          { text_id: "Orang Pada Umumnya", text_en: "Most People", next: "step_most", btnStyle: "btn-primary" },
          { text_id: "Saya (Si Tukang Overthink)", text_en: "I, on the other hand...", next: "step_me1", btnStyle: "btn-secondary" }
        ]
      },
      step_most: {
        tag_id: "Orang Normal", tag_en: "Most People",
        q_id: "Cari cara paling mudah & langsung untuk menyelesaikannya.", q_en: "Figure out easiest way to solve it.",
        options: [
          { text_id: "Selesai!", text_en: "Done!", next: "res_solved", btnStyle: "btn-primary" }
        ]
      },
      step_me1: {
        tag_id: "Fase 1", tag_en: "Phase 1",
        q_id: "Memikirkan masalah ini secara berlebihan sampai kocak!", q_en: "Hilariously over-think it!",
        options: [
          { text_id: "Lanjut ke Panik", text_en: "Proceed to Freak Out", next: "step_me2", btnStyle: "btn-primary" }
        ]
      },
      step_me2: {
        tag_id: "Fase 2", tag_en: "Phase 2",
        q_id: "Panik dan heboh betapa sulitnya masalah ini!", q_en: "Freak out about how difficult it is!",
        options: [
          { text_id: "Lanjut ke Obsesi", text_en: "Proceed to Obsess", next: "step_me3", btnStyle: "btn-primary" }
        ]
      },
      step_me3: {
        tag_id: "Fase 3", tag_en: "Phase 3",
        q_id: "Terobsesi dan memikirkannya nonstop selama berhari-hari!", q_en: "Obsess about it for days!",
        options: [
          { text_id: "Menangis", text_en: "Cry", next: "step_me4", btnStyle: "btn-secondary" }
        ]
      },
      step_me4: {
        tag_id: "Fase 4", tag_en: "Phase 4",
        q_id: "Menangis di pojokan...", q_en: "Cry in the corner...",
        options: [
          { text_id: "Akhirnya Dapat Ilham", text_en: "Finally get an epiphany", next: "step_me5", btnStyle: "btn-primary" }
        ]
      },
      step_me5: {
        tag_id: "Fase 5", tag_en: "Phase 5",
        q_id: "Akhirnya (secara acak) memikirkan solusi yang sangat sederhana!", q_en: "Finally (randomly) think of a simpler solution!",
        options: [
          { text_id: "Selesaikan!", text_en: "Solve it!", next: "res_solved", btnStyle: "btn-primary" }
        ]
      },
      res_solved: {
        isResult: true,
        title_id: "MASALAH TERSELESAIKAN!", title_en: "PROBLEM SOLVED!",
        msg_id: "\"Kenapa harus sederhana kalau bisa dibuat rumit dulu dan menangis?\"",
        msg_en: "\"Why keep it simple when you can over-think and cry first?\"",
        adv_id: "Setidaknya masalahmu selesai juga pada akhirnya. Rehat sejenak!",
        adv_en: "At least the problem is solved in the end. Take a rest!"
      }
    }
  },
  {
    id: "admin-flow-awkward",
    title_id: "Panduan Menghadapi Canggung Sosial",
    title_en: "Awkward Social Situation Flowchart",
    category: "social",
    author: "Terra Admin",
    isAdmin: true,
    likes: 290,
    plays: 1140,
    desc_id: "Solusi cepat saat menghadiri pesta / kumpul-kumpul yang bikin canggung.",
    desc_en: "Quick survival decision tree when attending awkward social gatherings.",
    startNode: "step1",
    nodes: {
      step1: {
        tag_id: "Kondisi Acara", tag_en: "Event State",
        q_id: "Apakah suasananya Canggung / Awkward?", q_en: "Is it Awkward?",
        options: [
          { text_id: "Tidak", text_en: "No", next: "res_stay", btnStyle: "btn-primary" },
          { text_id: "Ya", text_en: "Yes", next: "step2_food", btnStyle: "btn-secondary" }
        ]
      },
      step2_food: {
        tag_id: "Penyelamat", tag_en: "Savior Check",
        q_id: "Apakah ada Makanan Gratis / Free Food?", q_en: "Is there Free Food?",
        options: [
          { text_id: "Ya!", text_en: "Yes!", next: "res_stay", btnStyle: "btn-primary" },
          { text_id: "Tidak", text_en: "No", next: "res_leave", btnStyle: "btn-secondary" }
        ]
      },
      res_stay: {
        isResult: true,
        title_id: "TETAP TINGGAL (STAY)", title_en: "STAY AT THE PARTY",
        msg_id: "\"Selama ada makanan gratis atau suasana santai, nikmati momenmu.\"",
        msg_en: "\"As long as there is free food or smooth vibes, enjoy your stay.\"",
        adv_id: "Ambil piring makananmu dan nikmati acaranya dengan tenang.",
        adv_en: "Grab your plate of food and quietly enjoy the event."
      },
      res_leave: {
        isResult: true,
        title_id: "SEGERA PULANG (LEAVE)", title_en: "LEAVE IMMEDIATELY",
        msg_id: "\"Canggung dan tidak ada makanan gratis? Waktunya pulang ke rumah!\"",
        msg_en: "\"Awkward and no free food? It's time to head back home!\"",
        adv_id: "Pamit dengan sopan atau langsung buat alasan taktis.",
        adv_en: "Politely excuse yourself or make a tactical exit."
      }
    }
  },
  {
    id: "admin-flow-needchart",
    title_id: "Apakah Kamu Butuh Flowchart?",
    title_en: "How to decide if you need a... flowchart",
    category: "work",
    author: "Evan Diaz",
    isAdmin: true,
    likes: 410,
    plays: 1600,
    desc_id: "Diagram logika mutlak: Apapun situasi pekerjaanmu, jawabannya pasti Flowchart!",
    desc_en: "Absolute decision logic: Whatever your situation, the answer is always Flowchart!",
    startNode: "step1",
    nodes: {
      step1: {
        tag_id: "Pertanyaan 1", tag_en: "Question 1",
        q_id: "Apakah ini tugas yang sederhana?", q_en: "Is it a simple task?",
        options: [
          { text_id: "YA", text_en: "YES", next: "step_cinch", btnStyle: "btn-primary" },
          { text_id: "TIDAK", text_en: "NO", next: "step_goodthing", btnStyle: "btn-secondary" }
        ]
      },
      step_cinch: {
        tag_id: "Mantap", tag_en: "Excellent",
        q_id: "Mantap! Pembuatan flowchart ini pasti sangat gampang!", q_en: "Excellent, this flowchart should be a cinch.",
        options: [
          { text_id: "Buka Flowchart", text_en: "Open Flowchart", next: "res_flowchart", btnStyle: "btn-primary" }
        ]
      },
      step_goodthing: {
        tag_id: "Untunglah", tag_en: "Good Thing",
        q_id: "Untunglah kamu baru saja akan membuat flowchart!", q_en: "Good thing you were just about to make a flowchart.",
        options: [
          { text_id: "Buka Flowchart", text_en: "Open Flowchart", next: "res_flowchart", btnStyle: "btn-primary" }
        ]
      },
      res_flowchart: {
        isResult: true,
        title_id: "FLOWCHART!", title_en: "FLOWCHART!",
        msg_id: "\"Semua jalan di alam semesta ini mengarah pada pembuatan Flowchart.\"",
        msg_en: "\"All roads in the universe lead to making a Flowchart.\"",
        adv_id: "Buat flowchart barumu sekarang menggunakan fitur Custom Builder Terra!",
        adv_en: "Create your new flowchart now using Terra Custom Builder!"
      }
    }
  },
  {
    id: "admin-flow-problemsheet",
    title_id: "Flowsheet Problem Solving (Teknik Klasik)",
    title_en: "Problem Solving Flowsheet (Engineering Classic)",
    category: "work",
    author: "Classic Engineering Meme",
    isAdmin: true,
    likes: 670,
    plays: 3100,
    desc_id: "Humor teknikal legendaris: Apakah barangnya berfungsi? Kamu yang ngotak-atik?",
    desc_en: "Legendary engineering meme: Does it work? Did you touch it?",
    startNode: "step1",
    nodes: {
      step1: {
        tag_id: "Cek Utama", tag_en: "Main Check",
        q_id: "APAKAH BARANG TERSEBUT BERJALAN DENGAN BAIK?", q_en: "DOES THE DAMN THING WORK?",
        options: [
          { text_id: "YA", text_en: "YES", next: "res_dontfuck", btnStyle: "btn-primary" },
          { text_id: "TIDAK", text_en: "NO", next: "step2_didyou", btnStyle: "btn-secondary" }
        ]
      },
      step2_didyou: {
        tag_id: "Cek Pelaku", tag_en: "Culprit Check",
        q_id: "APAKAH KAMU YANG MENGOTAK-ATIKNYA?", q_en: "DID YOU FUCK WITH IT?",
        options: [
          { text_id: "YA", text_en: "YES", next: "step3_dumb", btnStyle: "btn-primary" },
          { text_id: "TIDAK", text_en: "NO", next: "step3_hell", btnStyle: "btn-secondary" }
        ]
      },
      step3_dumb: {
        tag_id: "Konsekuensi", tag_en: "Consequence",
        q_id: "DASAR KONYOL! Apakah ada orang lain yang tahu?", q_en: "YOU DUMB SHIT! Does anyone know?",
        options: [
          { text_id: "TIDAK", text_en: "NO", next: "res_hide", btnStyle: "btn-primary" },
          { text_id: "YA", text_en: "YES", next: "step4_blame", btnStyle: "btn-secondary" }
        ]
      },
      step3_hell: {
        tag_id: "Cek Risiko", tag_en: "Risk Check",
        q_id: "Apakah kamu bakal kena marah besar?", q_en: "Will you catch hell?",
        options: [
          { text_id: "TIDAK", text_en: "NO", next: "res_trash", btnStyle: "btn-primary" },
          { text_id: "YA", text_en: "YES", next: "step4_blame", btnStyle: "btn-secondary" }
        ]
      },
      step4_blame: {
        tag_id: "Penyelamatan", tag_en: "Salvation",
        q_id: "KASIHAN SEKALI KAMU! Bisakah kamu menyalahkan orang lain?", q_en: "YOU POOR BASTARD! Can you blame someone else?",
        options: [
          { text_id: "YA!", text_en: "YES!", next: "res_noproblem", btnStyle: "btn-primary" },
          { text_id: "TIDAK", text_en: "NO", next: "step4_blame", btnStyle: "btn-secondary" }
        ]
      },
      res_dontfuck: {
        isResult: true,
        title_id: "JANGAN DIOTAK-ATIK!", title_en: "DON'T FUCK WITH IT!",
        msg_id: "\"TIDAK ADA MASALAH. Biarkan seperti apa adanya.\"",
        msg_en: "\"NO PROBLEM. Leave it as it is.\"",
        adv_id: "Aturan emas: Jika berjalan baik, jangan coba-coba mengotak-atiknya.",
        adv_en: "Golden rule: If it works, don't mess with it."
      },
      res_hide: {
        isResult: true,
        title_id: "SEMBUNYIKAN BARANGNYA!", title_en: "HIDE IT!",
        msg_id: "\"TIDAK ADA MASALAH. Kalau tidak ada yang tahu, masalah tidak ada.\"",
        msg_en: "\"NO PROBLEM. If nobody knows, it didn't happen.\"",
        adv_id: "Sembunyikan rapat-rapat dan pura-pura tidak tahu.",
        adv_en: "Hide it quietly and act innocent."
      },
      res_trash: {
        isResult: true,
        title_id: "BUANG / HAPUS SAJA!", title_en: "SHIT-CAN IT!",
        msg_id: "\"TIDAK ADA MASALAH. Masukkan ke tempat sampah.\"",
        msg_en: "\"NO PROBLEM. Throw it in the trash.\"",
        adv_id: "Buang ke tempat sampah dan move on.",
        adv_en: "Throw it away and move on."
      },
      res_noproblem: {
        isResult: true,
        title_id: "TIDAK ADA MASALAH! (NO PROBLEM)", title_en: "NO PROBLEM!",
        msg_id: "\"Selamat! Beban masalah telah berhasil dialihkan.\"",
        msg_en: "\"Congratulations! The blame has been successfully shifted.\"",
        adv_id: "Kamu selamat hari ini.",
        adv_en: "You survived today."
      }
    }
  }
];

class SeamlessProblemSolverApp {
  constructor() {
    this.currentLang = localStorage.getItem('terra_lang') || 'id';
    this.currentTheme = localStorage.getItem('terra_theme') || 'light';
    this.activeSection = 'player'; // 'player' or 'community'

    // Flowchart Execution State
    this.activeFlowchart = adminFlowcharts[0];
    this.currentNodeId = 'step1';
    this.nodeHistory = [];
    this.isFlowFullscreen = false;

    // Domain Engines Initialization
    this.taskEngine = new TaskBreakdownEngine();
    this.aiParser = new AIFlowchartParser();
    this.audioSynth = new AudioAmbientEngine();
    this.flowEngine = new FlowchartEngine(this.activeFlowchart);
    this.graphRenderer = new FlowchartGraphRenderer();
    this.scriptParser = new QuickScriptFlowParser();
    this.transmitterParser = new MermaidTransmitterParser();
    this.canvasEditor = new InteractiveCanvasEditor({
      onChange: (nodes) => {
        this.builderNodes = nodes;
      }
    });
    this.playerViewMode = 'card';   // 'card' or 'graph'
    this.builderMode = 'canvas';    // 'canvas', 'form', or 'script'
    this.pendingAIImageBase64 = null;

    // Audio & Breathing
    this.audioCtx = null;
    this.ambientNodes = null;
    this.isAmbientPlaying = false;
    this.isBreathingActive = false;

    // Journal & Community Data
    this.journalEntries = JSON.parse(localStorage.getItem('terra_journal') || '[]');
    this.customFlowcharts = JSON.parse(localStorage.getItem('terra_custom_flows') || '[]');
    this.quoteIndex = 0;

    // Ads & Monetization Stats
    this.adsStats = JSON.parse(localStorage.getItem('terra_ads_stats') || '{"impressions": 14, "clicks": 2, "earnings": 0.45, "pubId": "", "cornerAd": true}');

    // Builder Node State (Multi-Branch Graph Structure)
    this.builderNodes = [
      {
        id: 'node_start',
        isResult: false,
        q_id: 'Pilihan Karir Utama?',
        q_en: 'Main Career Choice?',
        sub_id: 'Pilih bidang yang sesuai dengan minat batinmu.',
        sub_en: 'Choose the path matching your inner purpose.',
        options: [
          { text_id: 'Teknologi & Coding', text_en: 'Technology & Coding', targetId: 'res_tech', btnStyle: 'btn-primary' },
          { text_id: 'Bisnis & Kreatif', text_en: 'Business & Creative', targetId: 'res_biz', btnStyle: 'btn-primary' },
          { text_id: 'Perlu Pertimbangan', text_en: 'Need Reflection', targetId: 'node_reflect', btnStyle: 'btn-secondary' }
        ]
      },
      {
        id: 'node_reflect',
        isResult: false,
        q_id: 'Faktor Apa yang Paling Penting?',
        q_en: 'Which Factor Matters Most?',
        sub_id: 'Ketenangan batin atau tantangan baru?',
        sub_en: 'Inner peace or new challenge?',
        options: [
          { text_id: 'Ketenangan Batin', text_en: 'Inner Peace', targetId: 'res_tech', btnStyle: 'btn-primary' },
          { text_id: 'Tantangan Baru', text_en: 'New Challenge', targetId: 'res_biz', btnStyle: 'btn-primary' }
        ]
      },
      {
        id: 'res_tech',
        isResult: true,
        title_id: 'Jalur Teknologi & Inovasi',
        title_en: 'Technology & Innovation Path',
        msg_id: 'Fokus pada pembangunan karya nyata yang bermanfaat.',
        msg_en: 'Focus on building meaningful software and solutions.',
        adv_id: 'Mulai dengan 1 projek kecil hari ini.',
        adv_en: 'Start with 1 small project today.'
      },
      {
        id: 'res_biz',
        isResult: true,
        title_id: 'Jalur Bisnis & Kreatif',
        title_en: 'Business & Creative Path',
        msg_id: 'Asah kepemimpinan dan koneksi antar manusia.',
        msg_en: 'Hone leadership and human connection.',
        adv_id: 'Tuliskan ide bisnis pertama dalam 10 menit.',
        adv_en: 'Draft your first business idea in 10 minutes.'
      }
    ];

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLang);
    this.renderJournalList();
    this.renderCommunityGrid();
    this.renderFlowchartPlayer();
    this.renderAdsStats();
    this.setupEventListeners();

    setTimeout(() => {
      initScrollFloat('.scroll-float-heading');
    }, 100);
  }

  setupEventListeners() {
    // Language Switcher
    document.getElementById('btn-lang').addEventListener('click', () => {
      this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
      localStorage.setItem('terra_lang', this.currentLang);
      this.applyLanguage(this.currentLang);
    });

    // Theme Switcher
    document.getElementById('btn-theme').addEventListener('click', () => {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('terra_theme', this.currentTheme);
      this.applyTheme(this.currentTheme);
    });

    // Ambient Audio Switcher
    document.getElementById('btn-ambient').addEventListener('click', () => {
      this.toggleAmbientSound();
    });

    // Breathing Modal Toggle
    document.getElementById('btn-breathing-modal').addEventListener('click', () => {
      this.openBreathingModal();
    });

    // Journal Drawer Toggle
    document.getElementById('btn-journal-toggle').addEventListener('click', () => {
      this.toggleJournalDrawer();
    });

    // Parallax mouse move effect
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      const blob1 = document.getElementById('bg-blob-1');
      const blob2 = document.getElementById('bg-blob-2');
      if (blob1 && blob2) {
        blob1.style.transform = `translate(${x}px, ${y}px)`;
        blob2.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    });

    // Keyboard ESC key shortcut for exiting Fullscreen mode & Ctrl+Alt+A for secret Ads Setup
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isFlowFullscreen) {
        this.toggleFullscreenFlowchart(false);
      }
      if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        this.openAdsManagerModal();
      }
    });
  }

  // Select node and trigger Fullscreen mode
  selectNodeAndFullscreen(nodeId) {
    if (this.activeFlowchart && this.activeFlowchart.nodes[nodeId]) {
      this.currentNodeId = nodeId;
      this.renderFlowchartPlayer();
      this.toggleFullscreenFlowchart(true);
    }
  }

  // Handle card box click for fullscreen toggle
  handleCardBoxClick(e) {
    if (!e) return;
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('textarea')) {
      return;
    }
    this.toggleFullscreenFlowchart();
  }

  // Seamless Fullscreen Flowchart Toggle
  toggleFullscreenFlowchart(forceState = null) {
    const box = document.getElementById('player-canvas-box');
    const icon = document.getElementById('box-fullscreen-icon');
    const text = document.getElementById('box-fullscreen-text');
    const status = document.getElementById('canvas-box-status');
    const dict = translations[this.currentLang] || translations.id;

    if (forceState !== null) {
      this.isFlowFullscreen = forceState;
    } else {
      this.isFlowFullscreen = !this.isFlowFullscreen;
    }

    if (!box) return;

    if (this.isFlowFullscreen) {
      box.classList.add('fullscreen-flow-active');
      document.body.classList.add('overflow-hidden', 'is-fullscreen');
      if (icon) icon.textContent = 'fullscreen_exit';
      if (text) text.textContent = dict.btnExitFullscreen || 'Keluar Layar Penuh';
      if (status) status.textContent = 'FULLSCREEN ZEN MODE';
    } else {
      box.classList.remove('fullscreen-flow-active');
      document.body.classList.remove('overflow-hidden', 'is-fullscreen');
      if (icon) icon.textContent = 'fullscreen';
      if (text) text.textContent = dict.btnFullscreen || 'Layar Penuh';
      if (status) status.textContent = dict.boxActiveStatus || 'Kotak Flowchart Interaktif';
    }
  }

  // --- Navigation & Section Toggle ---
  showSection(sectionName, flowId = null) {
    this.activeSection = sectionName;
    const secPlayer = document.getElementById('section-player');
    const secCommunity = document.getElementById('section-community');
    const secCreate = document.getElementById('section-create');

    const tabHome = document.getElementById('nav-btn-home');
    const tabComm = document.getElementById('nav-btn-community');
    const tabCreate = document.getElementById('nav-btn-create');

    const activeTabClass = 'nav-tab-btn active-tab px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all text-primary';
    const inactiveTabClass = 'nav-tab-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all text-on-surface-variant hover:text-primary';

    if (secPlayer) secPlayer.classList.toggle('hidden', sectionName !== 'player');
    if (secCommunity) secCommunity.classList.toggle('hidden', sectionName !== 'community');
    if (secCreate) secCreate.classList.toggle('hidden', sectionName !== 'create' && sectionName !== 'studio');

    if (tabHome) tabHome.className = sectionName === 'player' ? activeTabClass : inactiveTabClass;
    if (tabComm) tabComm.className = sectionName === 'community' ? activeTabClass : inactiveTabClass;
    if (tabCreate) tabCreate.className = (sectionName === 'create' || sectionName === 'studio') ? activeTabClass : inactiveTabClass;

    if (sectionName === 'player') {
      if (flowId) this.loadFlowchart(flowId);
    } else if (sectionName === 'community') {
      this.renderCommunityGrid();
    } else if (sectionName === 'create' || sectionName === 'studio') {
      this.renderCreatorCanvas();
    }
  }

  renderCreatorCanvas() {
    const mountEl = document.getElementById('flowchart-creator-canvas-mount') || document.getElementById('wysiwyg-canvas-mount');
    if (!mountEl) return;

    if (!this.canvasEditor) {
      this.canvasEditor = new InteractiveCanvasEditor({
        container: mountEl,
        nodes: this.builderNodes,
        onChange: (nodes) => {
          this.builderNodes = nodes;
        },
        onBranchSelected: (sourceId, direction, targetId) => {
          console.log(`Branch selected: ${sourceId} -> ${direction} -> ${targetId}`);
        }
      });
    } else {
      this.canvasEditor.container = mountEl;
      this.canvasEditor.setNodes(this.builderNodes);
    }
  }

  // --- Clean Fallback Getters for Dynamic & i18n Nodes ---
  getNodeTitle(node) {
    if (!node) return '';
    const isEn = this.currentLang === 'en';
    if (isEn) return node.title_en || node.title_id || node.title || node.name || 'Conclusion';
    return node.title_id || node.title || node.title_en || node.name || 'Kesimpulan';
  }

  getNodeMessage(node) {
    if (!node) return '';
    const isEn = this.currentLang === 'en';
    if (isEn) return node.msg_en || node.msg_id || node.msg || node.description || '';
    return node.msg_id || node.msg || node.msg_en || node.description || '';
  }

  getNodeAdvice(node) {
    if (!node) return '';
    const isEn = this.currentLang === 'en';
    if (isEn) return node.adv_en || node.adv_id || node.adv || '';
    return node.adv_id || node.adv || node.adv_en || '';
  }

  getNodeQuestion(node) {
    if (!node) return '';
    const isEn = this.currentLang === 'en';
    if (isEn) return node.q_en || node.q_id || node.q || node.question || node.title || '';
    return node.q_id || node.q || node.q_en || node.question || node.title || '';
  }

  getNodeSubtitle(node) {
    if (!node) return '';
    const isEn = this.currentLang === 'en';
    if (isEn) return node.sub_en || node.sub_id || node.sub || node.description || '';
    return node.sub_id || node.sub || node.sub_en || node.description || '';
  }

  getOptionText(opt) {
    if (!opt) return '';
    const isEn = this.currentLang === 'en';
    if (isEn) return opt.text_en || opt.text_id || opt.text || opt.label || 'Proceed';
    return opt.text_id || opt.text || opt.text_en || opt.label || 'Lanjut';
  }

  // --- Universal Flowchart Engine Player ---
  loadFlowchart(flowId) {
    let flow = adminFlowcharts.find(f => f.id === flowId);
    if (!flow) {
      flow = this.customFlowcharts.find(f => f.id === flowId);
    }
    if (!flow) {
      flow = adminFlowcharts[0];
    }

    this.activeFlowchart = flow;
    this.currentNodeId = flow.startNode || Object.keys(flow.nodes)[0];
    this.nodeHistory = [];

    // Increment play count
    flow.plays = (flow.plays || 0) + 1;
    this.saveCustomFlowcharts();

    this.renderFlowchartPlayer();
  }

  renderFlowchartPlayer() {
    const flow = this.activeFlowchart;
    const isEn = this.currentLang === 'en';

    // Update Header Meta
    const titleEl = document.getElementById('player-title');
    const authorEl = document.getElementById('player-author');
    const badgeEl = document.getElementById('player-badge');
    const btnBackComm = document.getElementById('btn-back-community');

    titleEl.textContent = isEn ? (flow.title_en || flow.title_id) : flow.title_id;
    authorEl.textContent = `by ${flow.author || 'Anonymous'}`;

    if (flow.isAdmin) {
      badgeEl.textContent = 'ADMIN OFFICIAL';
      badgeEl.className = 'px-2 py-0.5 rounded-md bg-primary text-on-primary font-bold uppercase tracking-wider text-[10px]';
    } else {
      badgeEl.textContent = 'COMMUNITY';
      badgeEl.className = 'px-2 py-0.5 rounded-md bg-tertiary text-on-primary font-bold uppercase tracking-wider text-[10px]';
    }

    if (flow.id !== 'admin-stoic-default') {
      btnBackComm.classList.remove('hidden');
    } else {
      btnBackComm.classList.add('hidden');
    }

    // View Mode Switcher Check (Card vs Graph)
    const canvasContainer = document.getElementById('player-canvas');
    const graphContainer = document.getElementById('player-graph-container');
    const tabCard = document.getElementById('tab-mode-player');
    const tabGraph = document.getElementById('tab-mode-graph');

    if (this.playerViewMode === 'graph') {
      if (canvasContainer) canvasContainer.classList.add('hidden');
      if (graphContainer) graphContainer.classList.remove('hidden');
      if (tabGraph) {
        tabGraph.className = 'px-3 py-1 rounded-lg text-xs font-bold bg-primary text-on-primary shadow-sm flex items-center gap-1 transition-all';
      }
      if (tabCard) {
        tabCard.className = 'px-3 py-1 rounded-lg text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-all';
      }
      this.graphRenderer.renderGraph(flow, this.currentNodeId, graphContainer);
      return;
    } else {
      if (canvasContainer) canvasContainer.classList.remove('hidden');
      if (graphContainer) graphContainer.classList.add('hidden');
      if (tabCard) {
        tabCard.className = 'px-3 py-1 rounded-lg text-xs font-bold bg-primary text-on-primary shadow-sm flex items-center gap-1 transition-all';
      }
      if (tabGraph) {
        tabGraph.className = 'px-3 py-1 rounded-lg text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-all';
      }
    }

    // Render Active Node Card
    const canvas = document.getElementById('player-canvas');
    const node = flow.nodes[this.currentNodeId] || flow.nodes[Object.keys(flow.nodes)[0]];

    if (!node) return;

    if (node.isResult) {
      // Resolution Card
      const resTitle = this.getNodeTitle(node);
      const resMsg = this.getNodeMessage(node);
      const resAdv = this.getNodeAdvice(node);
      const dict = translations[this.currentLang];

      canvas.innerHTML = `
        <div class="flow-card active-card flex flex-col items-center">
          <div class="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 animate-pulse shadow-terra-glow">
            <span class="material-symbols-outlined text-5xl" style="font-variation-settings: 'FILL' 1;">spa</span>
          </div>

          <h2 class="font-headline text-4xl sm:text-5xl font-black text-primary mb-6 leading-tight text-center">
            ${resTitle}
          </h2>

          <div class="terra-card p-6 sm:p-8 rounded-2xl max-w-xl w-full mb-8 text-center border border-primary/10">
            <p class="text-on-surface text-lg sm:text-xl font-headline font-semibold mb-4 leading-relaxed italic">
              ${resMsg}
            </p>
            <div class="h-0.5 w-16 bg-primary/30 mx-auto mb-4"></div>
            <p class="text-on-surface-variant text-sm font-body leading-relaxed">
              ${resAdv}
            </p>
          </div>

          <div class="flex flex-wrap gap-4 justify-center">
            <button class="btn-terra flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-bold shadow-terra-soft hover:scale-105 active:scale-95" onclick="app.restartActiveFlow()">
              <span class="material-symbols-outlined">restart_alt</span>
              <span>${dict.btnRestartFlow}</span>
            </button>

            <button class="btn-terra flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container text-primary font-bold border border-primary/20 hover:bg-primary/10 active:scale-95" onclick="app.openJournalWithContext()">
              <span class="material-symbols-outlined">edit_note</span>
              <span>${dict.btnWriteJournal}</span>
            </button>

            <button class="btn-terra flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container text-on-surface-variant font-semibold hover:text-primary active:scale-95" onclick="app.shareFlowResult()">
              <span class="material-symbols-outlined text-lg">share</span>
              <span>${dict.btnShareFlow}</span>
            </button>
          </div>
        </div>
      `;
    } else {
      // Question Node Card
      const qTag = isEn ? (node.tag_en || node.tag_id || 'Step') : (node.tag_id || 'Langkah');
      const qText = this.getNodeQuestion(node);
      const qSub = this.getNodeSubtitle(node);
      const dict = translations[this.currentLang];

      const optionsHTML = (node.options || []).map(opt => {
        const optText = this.getOptionText(opt);
        const btnStyle = opt.btnStyle === 'btn-secondary' ? 'btn-secondary border-2 border-primary/20 bg-surface-container text-primary' : 'btn-primary text-on-primary';
        return `
          <button class="btn-terra ${btnStyle} flex-1 py-4 px-6 rounded-xl font-bold text-base sm:text-lg shadow-terra-soft hover:shadow-terra-deep hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2" onclick="app.navigateToNode('${opt.next || opt.targetId}')">
            <span>${optText}</span>
            <span class="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        `;
      }).join('');

      const backBtnHTML = this.nodeHistory.length > 0 ? `
        <button class="mt-8 text-on-surface-variant/60 hover:text-primary flex items-center gap-1.5 transition-colors font-semibold text-sm" onclick="app.goBackNode()">
          <span class="material-symbols-outlined text-sm">arrow_back</span>
          <span>${dict.btnBackNode}</span>
        </button>
      ` : '';

      // Build Subtask Point Breakdown (Google Tasks style)
      const flowId = flow.id || 'default_flow';
      const nodeId = this.currentNodeId;
      const subtasks = this.taskEngine.getTasksForNode(flowId, nodeId);
      const cogScore = this.taskEngine.getCognitiveLoadScore(flowId, nodeId);

      const subtasksListHTML = subtasks.length === 0 ? `
        <p class="text-xs text-on-surface-variant/70 italic text-center py-1">Belum ada poin langkah. Tambahkan 1-per-1 di bawah untuk memperjelas tindakan.</p>
      ` : subtasks.map(t => `
        <div class="flex items-center justify-between gap-2 p-2 rounded-xl bg-surface/80 border border-outline-variant/20 transition-all hover:border-primary/30">
          <label class="flex items-center gap-2.5 cursor-pointer flex-grow text-xs font-semibold ${t.done ? 'line-through text-on-surface-variant/50' : 'text-on-surface'}">
            <input type="checkbox" ${t.done ? 'checked' : ''} onchange="app.toggleSubtaskItem('${t.id}')" class="w-4 h-4 accent-primary rounded cursor-pointer" />
            <span>${this.escapeHtml(t.text)}</span>
          </label>
          <button onclick="app.deleteSubtaskItem('${t.id}')" class="text-on-surface-variant/50 hover:text-red-500 p-1 text-xs" title="Hapus poin">
            <span class="material-symbols-outlined text-sm">delete</span>
          </button>
        </div>
      `).join('');

      const subtaskSectionHTML = `
        <div class="mt-8 w-full max-w-lg p-4 sm:p-5 rounded-2xl bg-surface-container/70 border border-primary/20 text-left shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-lg">fact_check</span>
              <span class="font-headline font-bold text-xs sm:text-sm text-on-surface">Poin Langkah Nyata (+1 Subtask)</span>
            </div>
            <span class="text-[10px] font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              ${cogScore.label}
            </span>
          </div>

          <div class="space-y-2 mb-3">
            ${subtasksListHTML}
          </div>

          <div class="flex items-center gap-2">
            <input type="text" id="input-new-subtask" class="flex-grow p-2 sm:p-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-primary" placeholder="+ Tambah 1 poin langkah nyata..." onkeydown="if(event.key==='Enter') app.addSubtaskItem()" />
            <button class="px-3 py-2 rounded-xl bg-primary text-on-primary font-bold text-xs flex items-center gap-1 hover:scale-105 active:scale-95 transition-all shadow-sm" onclick="app.addSubtaskItem()">
              <span class="material-symbols-outlined text-sm">add</span>
              <span>Tambah</span>
            </button>
          </div>
        </div>
      `;

      canvas.innerHTML = `
        <div class="flow-card active-card flex flex-col items-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="material-symbols-outlined text-sm">psychology</span>
            <span>${qTag}</span>
          </div>

          <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-6 leading-[1.18] tracking-tight text-center">
            ${qText}
          </h2>

          ${qSub ? `<p class="text-on-surface-variant/80 text-base sm:text-lg max-w-lg mb-8 font-body leading-relaxed text-center">${qSub}</p>` : ''}

          <div class="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center max-w-md mt-2">
            ${optionsHTML}
          </div>

          ${subtaskSectionHTML}

          ${backBtnHTML}
        </div>
      `;
    }
  }

  navigateToNode(targetNodeId) {
    this.nodeHistory.push(this.currentNodeId);
    this.currentNodeId = targetNodeId;
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

  // --- View Mode & Graph Map Helpers ---
  setPlayerViewMode(mode) {
    this.playerViewMode = mode;
    this.renderFlowchartPlayer();
  }

  handleGraphNodeClick(nodeId) {
    if (this.activeFlowchart && this.activeFlowchart.nodes[nodeId]) {
      this.currentNodeId = nodeId;
      this.setPlayerViewMode('card');
    }
  }

  exportActiveFlowMermaid() {
    const code = this.graphRenderer.exportToMermaid(this.activeFlowchart);
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        alert(this.currentLang === 'id' ? '✨ Kode Diagram Mermaid berhasil disalin ke clipboard!' : '✨ Mermaid Diagram Code copied to clipboard!');
      });
    }
  }

  loadBuilderTemplate(templateKey) {
    const templates = {
      '5whys': [
        { id: 'start', isResult: false, q_id: '1. Mengapa masalah ini terjadi?', q_en: '1. Why did this problem occur?', sub_id: 'Sebutkan penyebab pertama yang langsung terlihat.', sub_en: 'Identify the first immediate cause.', options: [{ text_id: 'Lanjut ke Why #2', text_en: 'Proceed to Why #2', targetId: 'why2', btnStyle: 'btn-primary' }] },
        { id: 'why2', isResult: false, q_id: '2. Mengapa penyebab pertama itu terjadi?', q_en: '2. Why did that first cause happen?', sub_id: 'Gali 1 tingkat lebih dalam.', sub_en: 'Dig 1 level deeper.', options: [{ text_id: 'Lanjut ke Why #3', text_en: 'Proceed to Why #3', targetId: 'why3', btnStyle: 'btn-primary' }] },
        { id: 'why3', isResult: false, q_id: '3. Mengapa alasan itu muncul?', q_en: '3. Why did that reason appear?', sub_id: 'Cari faktor proses / kebiasaan.', sub_en: 'Find process or habit factor.', options: [{ text_id: 'Lanjut ke Root Cause', text_en: 'Proceed to Root Cause', targetId: 'res_root', btnStyle: 'btn-primary' }] },
        { id: 'res_root', isResult: true, title_id: 'Akar Masalah Utama Ditemukan', title_en: 'Root Cause Identified', msg_id: 'Fokus perbaiki sistem/kebiasaan mendasar ini.', msg_en: 'Focus on fixing this underlying system or habit.', adv_id: 'Buat 1 aturan baru untuk mencegah keberulangan.', adv_en: 'Create 1 new rule to prevent recurrence.' }
      ],
      'stoic': [
        { id: 'start', isResult: false, q_id: 'Apakah situasi ini berada dalam kendalimu?', q_en: 'Is this situation within your control?', sub_id: 'Pikirkan: aksi kamu vs aksi orang lain / kondisi alam.', sub_en: 'Think: your action vs others action / external conditions.', options: [{ text_id: 'Ya, Langsung Bertindak', text_en: 'Yes, Take Action', targetId: 'res_act', btnStyle: 'btn-primary' }, { text_id: 'Tidak, Di luar Kendali', text_en: 'No, Outside Control', targetId: 'res_accept', btnStyle: 'btn-secondary' }] },
        { id: 'res_act', isResult: true, title_id: 'Fokus pada Tindakan Nyata', title_en: 'Focus on Action', msg_id: 'Kejelasan lahir dari aksi, bukan khayalan.', msg_en: 'Clarity is born from action, not overthinking.', adv_id: 'Lakukan langkah 5 menit pertama.', adv_en: 'Take the first 5-minute action.' },
        { id: 'res_accept', isResult: true, title_id: 'Amor Fati (Penerimaan Tulus)', title_en: 'Sincere Acceptance', msg_id: 'Lepaskan kecemasan pada hal di luar wewenangmu.', msg_en: 'Release anxiety over what is beyond your scope.', adv_id: 'Tarik napas 4-7-8 dan kembalikan kedamaian batin.', adv_en: 'Take 4-7-8 breath and restore inner peace.' }
      ],
      'eisenhower': [
        { id: 'start', isResult: false, q_id: 'Apakah tugas ini Mendesak & Penting?', q_en: 'Is this task Urgent & Important?', sub_id: 'Evaluasi dampak tenggat waktu & tujuan utama.', sub_en: 'Evaluate deadline impact and core goals.', options: [{ text_id: 'Mendesak & Penting', text_en: 'Urgent & Important', targetId: 'res_do', btnStyle: 'btn-primary' }, { text_id: 'Penting tapi Tidak Mendesak', text_en: 'Important Not Urgent', targetId: 'res_schedule', btnStyle: 'btn-primary' }, { text_id: 'Mendesak tapi Tidak Penting', text_en: 'Urgent Not Important', targetId: 'res_delegate', btnStyle: 'btn-secondary' }] },
        { id: 'res_do', isResult: true, title_id: 'DO IT NOW (Kerjakan Sekarang)', title_en: 'DO IT NOW', msg_id: 'Prioritas tertinggi. Kerjakan tanpa penundaan.', msg_en: 'Highest priority. Execute without delay.', adv_id: 'Selesaikan sebelum beralih ke tugas lain.', adv_en: 'Finish before switching tasks.' },
        { id: 'res_schedule', isResult: true, title_id: 'SCHEDULE (Jadwalkan)', title_en: 'SCHEDULE IT', msg_id: 'Sangat menentukan masa depan. Beri blok waktu khusus.', msg_en: 'Crucial for future growth. Block dedicated time.', adv_id: 'Masukkan ke kalender hari ini.', adv_en: 'Put into calendar today.' },
        { id: 'res_delegate', isResult: true, title_id: 'DELEGATE / ELIMINATE', title_en: 'DELEGATE / ELIMINATE', msg_id: 'Gunakan bantuan tools / orang lain.', msg_en: 'Use tool automation or delegate.', adv_id: 'Otomatiskan atau batasi durasi 5 menit.', adv_en: 'Automate or cap at 5 minutes.' }
      ]
    };

    if (templates[templateKey]) {
      this.builderNodes = JSON.parse(JSON.stringify(templates[templateKey]));
      this.renderCreatorCanvas();
    }
  }

  // --- Quick Text/Script Auto-Flowchart Helper Methods ---
  setBuilderMode(mode) {
    this.builderMode = mode;
    const formCont = document.getElementById('builder-form-container');
    const scriptCont = document.getElementById('builder-script-container');
    const tabForm = document.getElementById('tab-builder-form');
    const tabScript = document.getElementById('tab-builder-script');

    if (mode === 'script') {
      if (formCont) formCont.classList.add('hidden');
      if (scriptCont) scriptCont.classList.remove('hidden');
      if (tabScript) tabScript.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-primary text-on-primary shadow-sm flex items-center justify-center gap-1.5 transition-all';
      if (tabForm) tabForm.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold text-on-surface-variant hover:text-primary flex items-center justify-center gap-1.5 transition-all';
    } else {
      if (formCont) formCont.classList.remove('hidden');
      if (scriptCont) scriptCont.classList.add('hidden');
      if (tabForm) tabForm.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-primary text-on-primary shadow-sm flex items-center justify-center gap-1.5 transition-all';
      if (tabScript) tabScript.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold text-on-surface-variant hover:text-primary flex items-center justify-center gap-1.5 transition-all';
    }
  }

  insertQuickScriptSample() {
    const textarea = document.getElementById('builder-script-input');
    if (textarea) {
      textarea.value = `# Keputusan Beli Kopi Mahal
node_start: Apakah saldo cukup untuk beli kopi 50rb?
  - Saldo Cukup -> node_check
  - Saldo Pas-pasan -> res_hemat

node_check: Apakah ini lapar mata atau butuh fokus?
  - Butuh Fokus Kerjaan -> res_beli
  - Lapar Mata Saja -> res_hemat

res_beli: [HASIL] Beli Kopi & Selesaikan Tugas
  Pesan: Nikmati kopimu sambil menyelesaikan tugas utama!
  Saran: Fokus 1 jam tanpa distraksi HP.

res_hemat: [HASIL] Hemat & Seduh Kopi Rumah
  Pesan: Keputusan keuangan yang sangat bijak!
  Saran: Tabung 50rb untuk tujuan jangka panjang.`;
    }
  }

  parseQuickScriptToBuilder() {
    const textarea = document.getElementById('builder-script-input');
    const titleInput = document.getElementById('builder-title');

    const scriptText = textarea ? textarea.value.trim() : '';
    if (!scriptText) {
      alert(this.currentLang === 'id' ? 'Silakan isi teks script / panah `->` terlebih dahulu!' : 'Please enter script text / arrow notation first!');
      return;
    }

    const defaultTitle = (titleInput && titleInput.value.trim()) || 'Custom Flowchart Script';
    const parsedFlow = this.scriptParser.parseScript(scriptText, defaultTitle);

    if (parsedFlow && parsedFlow.nodes) {
      if (titleInput && parsedFlow.title_id) {
        titleInput.value = parsedFlow.title_id;
      }

      // Convert parsed nodes into builderNodes format
      const newBuilderNodes = [];
      Object.keys(parsedFlow.nodes).forEach(id => {
        const n = parsedFlow.nodes[id];
        newBuilderNodes.push({
          id: n.id,
          isResult: !!n.isResult,
          title_id: n.title_id || n.title || 'Hasil',
          title_en: n.title_en || n.title || 'Result',
          q_id: n.q_id || n.q || 'Pertanyaan?',
          q_en: n.q_en || n.q || 'Question?',
          sub_id: n.sub_id || '',
          sub_en: n.sub_en || '',
          msg_id: n.msg_id || '',
          msg_en: n.msg_en || '',
          adv_id: n.adv_id || '',
          adv_en: n.adv_en || '',
          options: (n.options || []).map(opt => ({
            text_id: opt.text_id || opt.text || 'Opsi',
            text_en: opt.text_en || opt.text || 'Option',
            targetId: opt.next || opt.targetId,
            btnStyle: opt.btnStyle || 'btn-primary'
          }))
        });
      });

      this.builderNodes = newBuilderNodes;
      this.setBuilderMode('form');
      this.renderBuilderNodes();
      alert(this.currentLang === 'id' ? '✨ Script berhasil diparse! Semua node & tombol keputusan otomatis dibuat!' : '✨ Script successfully parsed! All nodes & decision buttons created!');
    }
  }

  // --- Community Hub & Gallery ---
  renderCommunityGrid() {
    const grid = document.getElementById('community-grid');
    if (!grid) return;

    const isEn = this.currentLang === 'en';
    const dict = translations[this.currentLang];

    const allFlows = [...adminFlowcharts, ...this.customFlowcharts];

    grid.innerHTML = allFlows.map(flow => {
      const title = isEn ? (flow.title_en || flow.title_id) : flow.title_id;
      const desc = isEn ? (flow.desc_en || flow.desc_id || 'Flowchart interaktif.') : (flow.desc_id || 'Flowchart interaktif.');
      const badge = flow.isAdmin ? `<span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-1"><span class="material-symbols-outlined text-xs">verified</span> OFFICIAL ADMIN</span>` : `<span class="px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-bold text-[10px] uppercase tracking-wider">COMMUNITY</span>`;

      return `
        <div class="terra-card p-6 rounded-2xl border border-outline-variant/15 hover:border-primary/30 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
          <div>
            <div class="flex justify-between items-center mb-3">
              ${badge}
              <span class="text-xs font-semibold text-on-surface-variant/60 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">play_circle</span> ${flow.plays || 0}
              </span>
            </div>
            <h3 class="font-headline text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">${title}</h3>
            <p class="text-xs text-on-surface-variant/80 font-body leading-relaxed mb-6 line-clamp-2">${desc}</p>
          </div>

          <div class="pt-4 border-t border-outline-variant/15 flex items-center justify-between">
            <span class="text-xs text-on-surface-variant font-semibold">by ${flow.author || 'User'}</span>
            <div class="flex gap-2">
              <button class="p-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-red-500 transition-colors text-xs flex items-center gap-1" onclick="app.likeFlowchart('${flow.id}')">
                <span class="material-symbols-outlined text-base">favorite</span> ${flow.likes || 0}
              </button>
              <button class="btn-terra btn-primary px-4 py-2 rounded-xl font-bold text-xs shadow-sm flex items-center gap-1" onclick="app.launchCommunityFlow('${flow.id}')">
                <span class="material-symbols-outlined text-sm">play_arrow</span>
                <span>${dict.btnPlayFlow}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  launchCommunityFlow(flowId) {
    // Interstitial ad trigger for community flows
    this.triggerAdInterstitial(() => {
      this.showSection('player', flowId);
    });
  }

  likeFlowchart(flowId) {
    let flow = adminFlowcharts.find(f => f.id === flowId);
    if (!flow) {
      flow = this.customFlowcharts.find(f => f.id === flowId);
    }
    if (flow) {
      flow.likes = (flow.likes || 0) + 1;
      this.saveCustomFlowcharts();
      this.renderCommunityGrid();
    }
  }

  setCommunityCategory(cat) {
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-cat') === cat) {
        btn.classList.add('active-cat');
        btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      } else {
        btn.classList.remove('active-cat');
        btn.classList.add('bg-surface-container', 'text-on-surface-variant');
      }
    });

    const grid = document.getElementById('community-grid');
    const allFlows = [...adminFlowcharts, ...this.customFlowcharts];
    const isEn = this.currentLang === 'en';
    const dict = translations[this.currentLang];

    const filtered = cat === 'all' ? allFlows : cat === 'admin' ? allFlows.filter(f => f.isAdmin) : allFlows.filter(f => f.category === cat);

    grid.innerHTML = filtered.map(flow => {
      const title = isEn ? (flow.title_en || flow.title_id) : flow.title_id;
      const desc = isEn ? (flow.desc_en || flow.desc_id || 'Flowchart interaktif.') : (flow.desc_id || 'Flowchart interaktif.');
      const badge = flow.isAdmin ? `<span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-1"><span class="material-symbols-outlined text-xs">verified</span> OFFICIAL ADMIN</span>` : `<span class="px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-bold text-[10px] uppercase tracking-wider">COMMUNITY</span>`;

      return `
        <div class="terra-card p-6 rounded-2xl border border-outline-variant/15 hover:border-primary/30 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
          <div>
            <div class="flex justify-between items-center mb-3">
              ${badge}
              <span class="text-xs font-semibold text-on-surface-variant/60 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">play_circle</span> ${flow.plays || 0}
              </span>
            </div>
            <h3 class="font-headline text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">${title}</h3>
            <p class="text-xs text-on-surface-variant/80 font-body leading-relaxed mb-6 line-clamp-2">${desc}</p>
          </div>

          <div class="pt-4 border-t border-outline-variant/15 flex items-center justify-between">
            <span class="text-xs text-on-surface-variant font-semibold">by ${flow.author || 'User'}</span>
            <div class="flex gap-2">
              <button class="p-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-red-500 transition-colors text-xs flex items-center gap-1" onclick="app.likeFlowchart('${flow.id}')">
                <span class="material-symbols-outlined text-base">favorite</span> ${flow.likes || 0}
              </button>
              <button class="btn-terra btn-primary px-4 py-2 rounded-xl font-bold text-xs shadow-sm flex items-center gap-1" onclick="app.launchCommunityFlow('${flow.id}')">
                <span class="material-symbols-outlined text-sm">play_arrow</span>
                <span>${dict.btnPlayFlow}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  filterCommunityFlows() {
    const q = document.getElementById('community-search').value.toLowerCase().trim();
    if (!q) {
      this.renderCommunityGrid();
      return;
    }
    const grid = document.getElementById('community-grid');
    const allFlows = [...adminFlowcharts, ...this.customFlowcharts];
    const isEn = this.currentLang === 'en';
    const dict = translations[this.currentLang];

    const filtered = allFlows.filter(f => (f.title_id || '').toLowerCase().includes(q) || (f.title_en || '').toLowerCase().includes(q) || (f.author || '').toLowerCase().includes(q));

    grid.innerHTML = filtered.map(flow => {
      const title = isEn ? (flow.title_en || flow.title_id) : flow.title_id;
      const desc = isEn ? (flow.desc_en || flow.desc_id || 'Flowchart interaktif.') : (flow.desc_id || 'Flowchart interaktif.');
      const badge = flow.isAdmin ? `<span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-1"><span class="material-symbols-outlined text-xs">verified</span> OFFICIAL ADMIN</span>` : `<span class="px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-bold text-[10px] uppercase tracking-wider">COMMUNITY</span>`;

      return `
        <div class="terra-card p-6 rounded-2xl border border-outline-variant/15 hover:border-primary/30 flex flex-col justify-between group transition-all duration-300">
          <div>
            <div class="flex justify-between items-center mb-3">
              ${badge}
            </div>
            <h3 class="font-headline text-xl font-bold text-on-surface mb-2">${title}</h3>
            <p class="text-xs text-on-surface-variant/80 font-body leading-relaxed mb-6 line-clamp-2">${desc}</p>
          </div>
          <div class="pt-4 border-t border-outline-variant/15 flex items-center justify-between">
            <span class="text-xs text-on-surface-variant font-semibold">by ${flow.author || 'User'}</span>
            <button class="btn-terra btn-primary px-4 py-2 rounded-xl font-bold text-xs shadow-sm flex items-center gap-1" onclick="app.launchCommunityFlow('${flow.id}')">
              <span class="material-symbols-outlined text-sm">play_arrow</span>
              <span>${dict.btnPlayFlow}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  saveCustomFlowcharts() {
    localStorage.setItem('terra_custom_flows', JSON.stringify(this.customFlowcharts));
  }

  // --- Custom Flowchart Builder Modal & Logic ---
  openBuilderModal() {
    this.showSection('create');
  }

  closeBuilderModal() {
    this.showSection('player');
  }

  renderCanvasStudio() {
    const mountEl = document.getElementById('wysiwyg-canvas-mount');
    if (!mountEl) return;

    if (!this.canvasEditor) {
      this.canvasEditor = new InteractiveCanvasEditor({
        container: mountEl,
        nodes: this.builderNodes,
        onChange: (nodes) => {
          this.builderNodes = nodes;
        },
        onBranchSelected: (sourceId, direction, targetId) => {
          console.log(`Branch selected: ${sourceId} -> ${direction} -> ${targetId}`);
        }
      });
    } else {
      this.canvasEditor.container = mountEl;
      this.canvasEditor.setNodes(this.builderNodes);
    }
  }

  renderBuilderNodes() {
    // If in canvas mode, sync to canvas editor
    if (this.builderMode === 'canvas') {
      this.renderCanvasStudio();
    }

    const list = document.getElementById('builder-nodes-list');
    if (!list) return;

    const isEn = this.currentLang === 'en';

    // 1. Build Graph Map Connection Summary Header
    const graphLinksHTML = this.builderNodes.map((n, idx) => {
      if (n.isResult) {
        return `<span class="px-2 py-1 rounded bg-surface border border-outline-variant/20 text-[11px] font-mono text-tertiary">🏁 Node #${idx + 1} (${n.id}): [Kesimpulan/Hasil]</span>`;
      }
      const targets = (n.options || []).map(o => `${o.text_id || o.text || 'Opsi'} ➔ ${o.targetId || '?'}`).join(', ');
      return `<span class="px-2 py-1 rounded bg-surface border border-primary/20 text-[11px] font-mono text-primary">❓ Node #${idx + 1} (${n.id}): [${targets || 'Tanpa Cabang'}]</span>`;
    }).join(' ');

    const mapHeaderHTML = `
      <div class="p-3 mb-4 rounded-xl bg-surface-container/90 border border-primary/20 space-y-1">
        <div class="flex items-center gap-1.5 text-xs font-bold text-primary">
          <span class="material-symbols-outlined text-sm">hub</span>
          <span>${isEn ? 'Visual Flowchart Graph Map' : 'Peta Koneksi Diagram (Visual Graph)'}</span>
        </div>
        <div class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pt-1">
          ${graphLinksHTML}
        </div>
      </div>
    `;

    // 2. Render Node Card Editors
    const nodesListHTML = this.builderNodes.map((n, idx) => {
      const isResult = !!n.isResult;

      // Dropdown option generator for target node selection
      const targetOptionsHTML = (currentSelectedId) => {
        return this.builderNodes.map((targetNode, tIdx) => `
          <option value="${targetNode.id}" ${targetNode.id === currentSelectedId ? 'selected' : ''}>
            Node #${tIdx + 1}: ${targetNode.isResult ? '🏁 ' + (targetNode.title_id || targetNode.title || 'Hasil') : '❓ ' + (targetNode.q_id || targetNode.q || 'Pertanyaan')} (${targetNode.id})
          </option>
        `).join('');
      };

      if (isResult) {
        // Result Node Card Form
        return `
          <div class="p-4 rounded-2xl bg-surface-container/80 border-2 border-tertiary/20 relative space-y-3 shadow-sm">
            <div class="flex justify-between items-center border-b border-tertiary/10 pb-2">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-tertiary"></span>
                <span class="text-xs font-bold uppercase text-tertiary font-mono">Node #${idx + 1} (${n.id}) — Kesimpulan Akhir</span>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" class="text-xs font-semibold px-2 py-0.5 rounded bg-surface border border-outline-variant/30 text-on-surface hover:text-primary" onclick="app.toggleBuilderNodeType(${idx})">
                  ${isEn ? 'Switch to Question' : 'Ubah ke Pertanyaan'}
                </button>
                ${idx > 0 ? `<button type="button" class="text-red-500 hover:text-red-700 text-xs font-bold p-1" onclick="app.removeBuilderNode(${idx})" title="Hapus Node">✕</button>` : ''}
              </div>
            </div>

            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">${isEn ? 'Conclusion Title' : 'Judul Kesimpulan / Hasil Utama *'}</label>
              <input type="text" value="${this.escapeHtml(n.title_id || n.title || '')}" oninput="app.builderNodes[${idx}].title_id = this.value; app.builderNodes[${idx}].title_en = this.value; app.renderBuilderNodesMapOnly()" class="w-full p-2.5 rounded-xl bg-surface border border-outline-variant/20 text-xs font-bold text-on-surface focus:outline-none focus:border-tertiary" placeholder="Contoh: Selesai! Keputusan Tuntas." />
            </div>

            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">${isEn ? 'Philosophy Message / Quote' : 'Pesan Filosofis / Penjelasan Hasil'}</label>
              <textarea oninput="app.builderNodes[${idx}].msg_id = this.value; app.builderNodes[${idx}].msg_en = this.value" class="w-full p-2.5 rounded-xl bg-surface border border-outline-variant/20 text-xs text-on-surface resize-none focus:outline-none focus:border-tertiary" rows="2" placeholder="Contoh: Nikmati ketenangan dan fokus pada tindakan selanjutnya...">${this.escapeHtml(n.msg_id || n.msg || '')}</textarea>
            </div>

            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">${isEn ? 'Action Advice' : 'Saran Langkah Nyata Terakhir'}</label>
              <input type="text" value="${this.escapeHtml(n.adv_id || n.adv || '')}" oninput="app.builderNodes[${idx}].adv_id = this.value; app.builderNodes[${idx}].adv_en = this.value" class="w-full p-2 rounded-xl bg-surface border border-outline-variant/20 text-xs text-on-surface focus:outline-none focus:border-tertiary" placeholder="Contoh: Mulai dengan aksi 5 menit pertama." />
            </div>
          </div>
        `;
      }

      // Question / Branching Node Card Form
      const optionsListHTML = (n.options || []).map((opt, optIdx) => `
        <div class="p-2.5 rounded-xl bg-surface border border-outline-variant/30 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-bold text-primary font-mono">Cabang #${optIdx + 1}</span>
            ${(n.options || []).length > 1 ? `<button type="button" class="text-red-500 hover:text-red-700 text-xs font-bold" onclick="app.removeBuilderNodeOption(${idx}, ${optIdx})">Hapus Opsi</button>` : ''}
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label class="block text-[9px] font-bold uppercase text-on-surface-variant mb-0.5">${isEn ? 'Option Label' : 'Teks Opsi (Tombol)'}</label>
              <input type="text" value="${this.escapeHtml(opt.text_id || opt.text || '')}" oninput="app.builderNodes[${idx}].options[${optIdx}].text_id = this.value; app.builderNodes[${idx}].options[${optIdx}].text_en = this.value; app.renderBuilderNodesMapOnly()" class="w-full p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-xs font-semibold text-on-surface focus:outline-none focus:border-primary" placeholder="Contoh: Ya / Lanjut" />
            </div>

            <div>
              <label class="block text-[9px] font-bold uppercase text-on-surface-variant mb-0.5">${isEn ? 'Connect to Target Node' : 'Hubungkan ke Node Tujuan'}</label>
              <select onchange="app.builderNodes[${idx}].options[${optIdx}].targetId = this.value; app.renderBuilderNodesMapOnly()" class="w-full p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-xs text-on-surface focus:outline-none focus:border-primary">
                ${targetOptionsHTML(opt.targetId)}
              </select>
            </div>
          </div>
        </div>
      `).join('');

      return `
        <div class="p-4 rounded-2xl bg-surface-container/80 border-2 border-primary/20 relative space-y-3 shadow-sm">
          <div class="flex justify-between items-center border-b border-primary/10 pb-2">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              <span class="text-xs font-bold uppercase text-primary font-mono">Node #${idx + 1} (${n.id}) — Pertanyaan / Cabang</span>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" class="text-xs font-semibold px-2 py-0.5 rounded bg-surface border border-outline-variant/30 text-on-surface hover:text-primary" onclick="app.toggleBuilderNodeType(${idx})">
                ${isEn ? 'Switch to Result' : 'Ubah ke Hasil'}
              </button>
              ${idx > 0 ? `<button type="button" class="text-red-500 hover:text-red-700 text-xs font-bold p-1" onclick="app.removeBuilderNode(${idx})" title="Hapus Node">✕</button>` : ''}
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">${isEn ? 'Question / Pertimbangan' : 'Pertanyaan / Pertimbangan *'}</label>
            <input type="text" value="${this.escapeHtml(n.q_id || n.q || '')}" oninput="app.builderNodes[${idx}].q_id = this.value; app.builderNodes[${idx}].q_en = this.value; app.renderBuilderNodesMapOnly()" class="w-full p-2.5 rounded-xl bg-surface border border-outline-variant/20 text-xs font-bold text-on-surface focus:outline-none focus:border-primary" placeholder="Contoh: Apakah ini berdampak besar bagi karirmu?" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">${isEn ? 'Subtitle / Hint' : 'Petunjuk / Subtitle (Opsional)'}</label>
            <input type="text" value="${this.escapeHtml(n.sub_id || n.sub || '')}" oninput="app.builderNodes[${idx}].sub_id = this.value; app.builderNodes[${idx}].sub_en = this.value" class="w-full p-2 rounded-xl bg-surface border border-outline-variant/20 text-xs text-on-surface focus:outline-none focus:border-primary" placeholder="Contoh: Pertimbangkan faktor finansial & kesehatan batin." />
          </div>

          <!-- Dynamic Options / Branching Links -->
          <div class="space-y-2 pt-1">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-on-surface flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-primary">alt_route</span>
                <span>${isEn ? 'Branch Options' : 'Cabang Keputusan (Bisa Lebih dari 2 Opsi)'}</span>
              </span>
              <button type="button" class="px-2 py-1 rounded-lg bg-primary/10 text-primary text-[11px] font-bold hover:bg-primary/20 transition-all flex items-center gap-1" onclick="app.addBuilderNodeOption(${idx})">
                <span class="material-symbols-outlined text-xs">add</span>
                <span>${isEn ? 'Add Branch Option' : 'Tambah Opsi Cabang'}</span>
              </button>
            </div>

            <div class="space-y-2">
              ${optionsListHTML}
            </div>
          </div>

        </div>
      `;
    }).join('');

    list.innerHTML = mapHeaderHTML + nodesListHTML;
  }

  renderBuilderNodesMapOnly() {
    const list = document.getElementById('builder-nodes-list');
    if (!list) return;
    const isEn = this.currentLang === 'en';
    const graphLinksHTML = this.builderNodes.map((n, idx) => {
      if (n.isResult) {
        return `<span class="px-2 py-1 rounded bg-surface border border-outline-variant/20 text-[11px] font-mono text-tertiary">🏁 Node #${idx + 1} (${n.id}): [Kesimpulan/Hasil]</span>`;
      }
      const targets = (n.options || []).map(o => `${o.text_id || o.text || 'Opsi'} ➔ ${o.targetId || '?'}`).join(', ');
      return `<span class="px-2 py-1 rounded bg-surface border border-primary/20 text-[11px] font-mono text-primary">❓ Node #${idx + 1} (${n.id}): [${targets || 'Tanpa Cabang'}]</span>`;
    }).join(' ');

    const mapHeaderHTML = `
      <div class="p-3 mb-4 rounded-xl bg-surface-container/90 border border-primary/20 space-y-1">
        <div class="flex items-center gap-1.5 text-xs font-bold text-primary">
          <span class="material-symbols-outlined text-sm">hub</span>
          <span>${isEn ? 'Visual Flowchart Graph Map' : 'Peta Koneksi Diagram (Visual Graph)'}</span>
        </div>
        <div class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pt-1">
          ${graphLinksHTML}
        </div>
      </div>
    `;

    const existingMap = list.querySelector('.p-3.mb-4.rounded-xl');
    if (existingMap) {
      existingMap.outerHTML = mapHeaderHTML;
    }
  }

  toggleBuilderNodeType(idx) {
    if (this.builderNodes[idx]) {
      this.builderNodes[idx].isResult = !this.builderNodes[idx].isResult;
      if (!this.builderNodes[idx].isResult && !this.builderNodes[idx].options) {
        const nextTarget = this.builderNodes[idx + 1] ? this.builderNodes[idx + 1].id : this.builderNodes[0].id;
        this.builderNodes[idx].options = [
          { text_id: 'Ya', text_en: 'Yes', targetId: nextTarget, btnStyle: 'btn-primary' },
          { text_id: 'Tidak', text_en: 'No', targetId: nextTarget, btnStyle: 'btn-secondary' }
        ];
      }
      this.renderBuilderNodes();
    }
  }

  addBuilderNodeOption(nodeIdx) {
    const node = this.builderNodes[nodeIdx];
    if (node && !node.isResult) {
      if (!node.options) node.options = [];
      const defaultTarget = this.builderNodes[nodeIdx + 1] ? this.builderNodes[nodeIdx + 1].id : this.builderNodes[0].id;
      node.options.push({
        text_id: `Opsi #${node.options.length + 1}`,
        text_en: `Option #${node.options.length + 1}`,
        targetId: defaultTarget,
        btnStyle: node.options.length % 2 === 0 ? 'btn-primary' : 'btn-secondary'
      });
      this.renderBuilderNodes();
    }
  }

  removeBuilderNodeOption(nodeIdx, optIdx) {
    const node = this.builderNodes[nodeIdx];
    if (node && node.options && node.options.length > 1) {
      node.options.splice(optIdx, 1);
      this.renderBuilderNodes();
    }
  }

  addBuilderNode(isResultNode = false) {
    const newNodeId = 'node_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 3);
    const lastNode = this.builderNodes[this.builderNodes.length - 1];

    const newNode = isResultNode ? {
      id: newNodeId,
      isResult: true,
      title_id: 'Hasil Kesimpulan Baru',
      title_en: 'New Conclusion Result',
      msg_id: 'Pesan filosofis kesimpulan flowchart kamu.',
      msg_en: 'Philosophical message of your flowchart conclusion.',
      adv_id: 'Saran aksi nyata.',
      adv_en: 'Action advice.',
      x: lastNode ? (lastNode.x || 40) + 310 : 40,
      y: lastNode ? (lastNode.y || 80) : 80
    } : {
      id: newNodeId,
      isResult: false,
      q_id: 'Pertanyaan / Cabang Baru?',
      q_en: 'New Question / Branch?',
      sub_id: 'Deskripsi singkat...',
      sub_en: 'Short description...',
      x: lastNode ? (lastNode.x || 40) + 310 : 40,
      y: lastNode ? (lastNode.y || 80) : 80,
      options: [
        { text_id: 'Ya, Lanjut', text_en: 'Yes, Proceed', targetId: newNodeId, btnStyle: 'btn-primary' },
        { text_id: 'Tidak, Batal', text_en: 'No, Cancel', targetId: newNodeId, btnStyle: 'btn-secondary' }
      ]
    };

    // Auto-link previous question node to this new node!
    if (lastNode && !lastNode.isResult) {
      if (!lastNode.options) lastNode.options = [];
      lastNode.options.push({
        text_id: `Lanjut ke #${newNodeId.substr(-4)}`,
        text_en: `Proceed to #${newNodeId.substr(-4)}`,
        targetId: newNodeId,
        btnStyle: 'btn-primary'
      });
    }

    this.builderNodes.push(newNode);
    this.renderBuilderNodes();
  }

  removeBuilderNode(idx) {
    if (this.builderNodes.length > 1) {
      this.builderNodes.splice(idx, 1);
      this.renderBuilderNodes();
    }
  }

  saveAndPublishFlowchart() {
    const title = document.getElementById('builder-title').value.trim();
    const author = document.getElementById('builder-author').value.trim() || 'Community Member';
    const category = document.getElementById('builder-category').value;

    if (!title) {
      alert('Harap isi Judul Flowchart terlebih dahulu!');
      return;
    }

    // Convert builderNodes back to object map
    const nodesObj = {};
    let startNodeId = this.builderNodes[0] ? this.builderNodes[0].id : 'step1';

    this.builderNodes.forEach(n => {
      nodesObj[n.id] = {
        ...n,
        options: (n.options || []).map(opt => ({
          ...opt,
          next: opt.targetId || opt.next
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
    this.saveCustomFlowcharts();
    this.renderCommunityGrid();
    this.launchCommunityFlow(newFlow.id);
    alert('🎉 Flowchart baru berhasil disimpan dan diterbitkan!');
  }

  exportBuilderJSON() {
    const title = document.getElementById('builder-title')?.value.trim() || 'My_Flowchart';
    const author = document.getElementById('builder-author')?.value.trim() || 'Community Member';
    const category = document.getElementById('builder-category')?.value || 'custom';

    const data = {
      title,
      author,
      category,
      nodes: this.builderNodes
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '_')}_flowchart.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  importBuilderJSON(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        if (json.nodes && Array.isArray(json.nodes)) {
          this.builderNodes = json.nodes;
          if (json.title && document.getElementById('builder-title')) document.getElementById('builder-title').value = json.title;
          if (json.author && document.getElementById('builder-author')) document.getElementById('builder-author').value = json.author;
          if (json.category && document.getElementById('builder-category')) document.getElementById('builder-category').value = json.category;
          this.renderCreatorCanvas();
          alert('✨ Berhasil mengimpor diagram flowchart!');
        } else {
          alert('Format file JSON tidak sesuai.');
        }
      } catch (err) {
        alert('Gagal membaca file JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  previewCustomFlowchart() {
    const title = document.getElementById('builder-title')?.value.trim() || 'Flowchart Preview';
    const author = document.getElementById('builder-author')?.value.trim() || 'You';
    const category = document.getElementById('builder-category')?.value || 'custom';

    const nodesObj = {};
    const startNodeId = this.builderNodes[0] ? this.builderNodes[0].id : 'step1';

    this.builderNodes.forEach(n => {
      nodesObj[n.id] = {
        ...n,
        options: (n.options || []).map(opt => ({
          ...opt,
          next: opt.targetId || opt.next
        }))
      };
    });

    const previewFlow = {
      id: 'preview_' + Date.now().toString(36),
      title_id: title,
      title_en: title,
      author: author,
      category: category,
      isAdmin: false,
      likes: 0,
      plays: 0,
      desc_id: `Preview flowchart: ${title}`,
      desc_en: `Preview flowchart: ${title}`,
      startNode: startNodeId,
      nodes: nodesObj
    };

    this.customFlowcharts.unshift(previewFlow);
    this.launchCommunityFlow(previewFlow.id);
  }


  // --- AI Transmitter Protocol Integration ---
  openTransmitterModal() {
    const modal = document.getElementById('modal-transmitter');
    const card = document.getElementById('modal-transmitter-card');
    if (modal && card) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
    }
  }

  closeTransmitterModal() {
    const modal = document.getElementById('modal-transmitter');
    const card = document.getElementById('modal-transmitter-card');
    if (modal && card) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-100');
      card.classList.add('scale-95');
    }
  }

  copyAITransmitterPrompt() {
    const title = document.getElementById('builder-title').value.trim() || 'Masalah Saya';
    const promptText = this.transmitterParser.getAISystemPromptTemplate(title);
    navigator.clipboard.writeText(promptText).then(() => {
      alert('📋 Prompt AI Protocol berhasil disalin! Tinggal paste ke ChatGPT / Gemini / Claude.');
    }).catch(err => {
      prompt('Salin teks Prompt AI ini:', promptText);
    });
  }

  parseAndApplyTransmitterScript() {
    const scriptInput = document.getElementById('transmitter-input').value.trim();
    if (!scriptInput) {
      alert('Harap masukkan kode Mermaid / Transmitter Script terlebih dahulu!');
      return;
    }

    const title = document.getElementById('builder-title').value.trim() || 'Transmitter Flowchart';
    const flowObj = this.transmitterParser.parseMermaidScript(scriptInput, title);

    if (flowObj && flowObj.nodes) {
      this.builderNodes = Object.values(flowObj.nodes);
      this.renderBuilderNodes();
      this.closeTransmitterModal();
      alert('⚡ Flowchart berhasil diterjemahkan dari kode Mermaid / Transmitter Protocol!');
    }
  }

  previewCustomFlowchart() {
    this.saveAndPublishFlowchart();
  }

  exportBuilderJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.builderNodes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `terra_flowchart_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importBuilderJSON(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target.result);
        if (Array.isArray(parsed)) {
          this.builderNodes = parsed;
          this.renderBuilderNodes();
        }
      } catch(err) {
        alert('File JSON tidak valid.');
      }
    };
    reader.readAsText(file);
  }

  // --- Ads & Monetization Manager ---
  triggerAdInterstitial(onComplete) {
    // Increment Ad Impressions
    this.adsStats.impressions = (this.adsStats.impressions || 0) + 1;
    this.adsStats.earnings = parseFloat(((this.adsStats.impressions * 0.02) + (this.adsStats.clicks * 0.15)).toFixed(2));
    localStorage.setItem('terra_ads_stats', JSON.stringify(this.adsStats));
    this.renderAdsStats();

    const modal = document.getElementById('modal-ad-interstitial');
    const card = document.getElementById('modal-ad-card');
    const btnSkip = document.getElementById('btn-skip-ad');
    const timerText = document.getElementById('ad-countdown-text');
    const dict = translations[this.currentLang];

    modal.classList.remove('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
    btnSkip.disabled = true;

    let countdown = 3;
    timerText.textContent = `Lanjut otomatis dalam ${countdown}s...`;
    btnSkip.textContent = `${dict.btnSkipAd} (${countdown}s)`;

    const interval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        timerText.textContent = `Lanjut otomatis dalam ${countdown}s...`;
        btnSkip.textContent = `${dict.btnSkipAd} (${countdown}s)`;
      } else {
        clearInterval(interval);
        btnSkip.disabled = false;
        btnSkip.textContent = dict.btnSkipAd;
        timerText.textContent = 'Siap dilanjutkan!';
        this.pendingAdCallback = onComplete;
      }
    }, 1000);
  }

  closeAdInterstitial(executeCallback = true) {
    const modal = document.getElementById('modal-ad-interstitial');
    const card = document.getElementById('modal-ad-card');
    modal.classList.add('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');

    if (executeCallback && this.pendingAdCallback) {
      this.pendingAdCallback();
      this.pendingAdCallback = null;
    }
  }

  recordAdClick(type) {
    this.adsStats.clicks = (this.adsStats.clicks || 0) + 1;
    this.adsStats.earnings = parseFloat(((this.adsStats.impressions * 0.02) + (this.adsStats.clicks * 0.15)).toFixed(2));
    localStorage.setItem('terra_ads_stats', JSON.stringify(this.adsStats));
    this.renderAdsStats();
    alert('Terima kasih telah mengunjungi sponsor Terra! ✨');
  }

  openAdsManagerModal() {
    const modal = document.getElementById('modal-ads-manager');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    this.renderAdsStats();
  }

  closeAdsManagerModal() {
    const modal = document.getElementById('modal-ads-manager');
    modal.classList.add('opacity-0', 'pointer-events-none');
  }

  renderAdsStats() {
    const statImp = document.getElementById('stat-impressions');
    const statClick = document.getElementById('stat-clicks');
    const statEarn = document.getElementById('stat-earnings');
    const inputPub = document.getElementById('input-adsense-pub');
    const chkCorner = document.getElementById('chk-corner-ad');

    if (statImp) statImp.textContent = this.adsStats.impressions || 0;
    if (statClick) statClick.textContent = this.adsStats.clicks || 0;
    if (statEarn) statEarn.textContent = `$${(this.adsStats.earnings || 0).toFixed(2)}`;
    if (inputPub) inputPub.value = this.adsStats.pubId || '';
    if (chkCorner) chkCorner.checked = this.adsStats.cornerAd !== false;

    this.toggleCornerAdVisibility(this.adsStats.cornerAd !== false);
  }

  toggleCornerAdVisibility(visible) {
    const banner = document.getElementById('corner-ad-banner');
    if (!banner) return;
    if (visible) {
      banner.classList.remove('hidden', 'translate-y-20', 'opacity-0');
    } else {
      banner.classList.add('translate-y-20', 'opacity-0');
      setTimeout(() => banner.classList.add('hidden'), 300);
    }
  }

  saveAdsSettings() {
    const pubId = document.getElementById('input-adsense-pub').value.trim();
    const cornerAd = document.getElementById('chk-corner-ad').checked;

    this.adsStats.pubId = pubId;
    this.adsStats.cornerAd = cornerAd;
    localStorage.setItem('terra_ads_stats', JSON.stringify(this.adsStats));

    this.closeAdsManagerModal();
    alert('Pengaturan iklan berhasil disimpan!');
  }

  // --- Web Audio Synthesizer (Ambient Soundscape) ---
  toggleAmbientSound() {
    if (this.isAmbientPlaying) {
      this.stopAmbientSound();
    } else {
      this.startAmbientSound();
    }
  }

  startAmbientSound() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const bufferSize = 2 * this.audioCtx.sampleRate;
      const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.04;
        b6 = white * 0.115926;
      }

      const noiseSource = this.audioCtx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);

      const gainNode = this.audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.3, this.audioCtx.currentTime);

      noiseSource.connect(filter);
      filter.connect(gainNode);

      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(144, this.audioCtx.currentTime);
      oscGain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.audioCtx.destination);
      gainNode.connect(this.audioCtx.destination);

      noiseSource.start();
      osc.start();

      this.ambientNodes = { noiseSource, osc, gainNode, oscGain };
      this.isAmbientPlaying = true;
      this.updateAmbientUI(true);
    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  }

  stopAmbientSound() {
    if (this.ambientNodes) {
      try {
        this.ambientNodes.noiseSource.stop();
        this.ambientNodes.osc.stop();
      } catch(e) {}
      this.ambientNodes = null;
    }
    this.isAmbientPlaying = false;
    this.updateAmbientUI(false);
  }

  updateAmbientUI(isPlaying) {
    const icon = document.getElementById('icon-sound');
    const txt = document.getElementById('txt-ambient');
    const dict = translations[this.currentLang];

    if (isPlaying) {
      icon.textContent = 'volume_up';
      txt.textContent = dict.ambientLabelOn;
      document.getElementById('btn-ambient').classList.add('bg-primary/20', 'text-primary');
    } else {
      icon.textContent = 'volume_off';
      txt.textContent = dict.ambientLabelOff;
      document.getElementById('btn-ambient').classList.remove('bg-primary/20', 'text-primary');
    }
  }

  // --- 4-7-8 Breathing Guide ---
  openBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    const card = document.getElementById('modal-breathing-card');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }

  closeBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    const card = document.getElementById('modal-breathing-card');
    modal.classList.add('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
    this.stopBreathing();
  }

  toggleBreathing() {
    if (this.isBreathingActive) {
      this.stopBreathing();
    } else {
      this.startBreathing();
    }
  }

  startBreathing() {
    this.isBreathingActive = true;
    document.getElementById('txt-start-breath').textContent = translations[this.currentLang].btnPause;
    document.getElementById('btn-start-breath').classList.replace('bg-primary', 'bg-tertiary');
    this.runBreathingLoop();
  }

  stopBreathing() {
    this.isBreathingActive = false;
    clearTimeout(this.breathingTimerId);
    document.getElementById('txt-start-breath').textContent = translations[this.currentLang].btnStart;
    document.getElementById('btn-start-breath').classList.replace('bg-tertiary', 'bg-primary');
    
    const circle = document.getElementById('breath-circle');
    circle.className = 'w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
    document.getElementById('breath-state-text').textContent = 'Mulai';
    document.getElementById('breath-timer').textContent = '0';
  }

  runBreathingLoop() {
    if (!this.isBreathingActive) return;

    const circle = document.getElementById('breath-circle');
    const stateText = document.getElementById('breath-state-text');
    const timerText = document.getElementById('breath-timer');

    stateText.textContent = this.currentLang === 'id' ? 'Tarik Napas' : 'Inhale';
    circle.className = 'w-24 h-24 rounded-full text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow inhale';
    let count = 4;
    timerText.textContent = count;

    const inhaleInterval = setInterval(() => {
      count--;
      if (count > 0) {
        timerText.textContent = count;
      } else {
        clearInterval(inhaleInterval);
        
        stateText.textContent = this.currentLang === 'id' ? 'Tahan' : 'Hold';
        circle.className = 'w-24 h-24 rounded-full text-tertiary flex items-center justify-center transition-all duration-1000 shadow-terra-glow hold';
        let holdCount = 7;
        timerText.textContent = holdCount;

        const holdInterval = setInterval(() => {
          holdCount--;
          if (holdCount > 0) {
            timerText.textContent = holdCount;
          } else {
            clearInterval(holdInterval);

            stateText.textContent = this.currentLang === 'id' ? 'Hembuskan' : 'Exhale';
            circle.className = 'w-24 h-24 rounded-full text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow exhale';
            let exhaleCount = 8;
            timerText.textContent = exhaleCount;

            const exhaleInterval = setInterval(() => {
              exhaleCount--;
              if (exhaleCount > 0) {
                timerText.textContent = exhaleCount;
              } else {
                clearInterval(exhaleInterval);
                if (this.isBreathingActive) {
                  this.runBreathingLoop();
                }
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }

  // --- Reflection Journal ---
  toggleJournalDrawer(forceShow = null) {
    const drawer = document.getElementById('drawer-journal');
    if (forceShow === true) {
      drawer.classList.remove('translate-x-full');
    } else if (forceShow === false) {
      drawer.classList.add('translate-x-full');
    } else {
      drawer.classList.toggle('translate-x-full');
    }
  }

  openJournalWithContext() {
    this.toggleJournalDrawer(true);
    const problemInput = document.getElementById('journal-input-problem');
    const actionInput = document.getElementById('journal-input-action');

    problemInput.placeholder = this.currentLang === 'id' ? 'Tuliskan beban atau pikiranmu...' : 'Write what is on your mind...';
    actionInput.value = this.currentLang === 'id' ? 'Tindakan/Penerimaan saya: ' : 'My action/acceptance: ';
  }

  saveJournalEntry() {
    const problemInput = document.getElementById('journal-input-problem');
    const actionInput = document.getElementById('journal-input-action');

    const problem = problemInput.value.trim();
    const action = actionInput.value.trim();

    if (!problem) return;

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(this.currentLang === 'id' ? 'id-ID' : 'en-US', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
      problem,
      action: action || (this.currentLang === 'id' ? 'Berakar dalam ketenangan.' : 'Rooted in calm.')
    };

    this.journalEntries.unshift(newEntry);
    localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));

    problemInput.value = '';
    actionInput.value = '';
    this.renderJournalList();
  }

  deleteJournalEntry(id) {
    this.journalEntries = this.journalEntries.filter(entry => entry.id !== id);
    localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));
    this.renderJournalList();
  }

  // --- Subtask Point Breakdown Engine (Google Tasks Style) ---
  addSubtaskItem() {
    const input = document.getElementById('input-new-subtask');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    this.taskEngine.addTask(this.activeFlowchart.id, this.currentNodeId, text);
    input.value = '';
    this.renderFlowchartPlayer();
  }

  toggleSubtaskItem(taskId) {
    this.taskEngine.toggleTask(this.activeFlowchart.id, this.currentNodeId, taskId);
    this.renderFlowchartPlayer();
  }

  deleteSubtaskItem(taskId) {
    this.taskEngine.deleteTask(this.activeFlowchart.id, this.currentNodeId, taskId);
    this.renderFlowchartPlayer();
  }

  // --- Audio Ambient Sound Synth ---
  toggleAmbientSound() {
    const isPlaying = this.audioSynth.toggle();
    const icon = document.getElementById('icon-sound');
    const txt = document.getElementById('txt-ambient');
    if (icon) icon.textContent = isPlaying ? 'volume_up' : 'volume_off';
    if (txt) txt.textContent = isPlaying ? 'Suara Hening' : 'Suara Alam';
  }

  // --- AI Flowchart Generator & Vision Importer ---
  openAIModal() {
    const modal = document.getElementById('modal-ai-upload');
    const card = document.getElementById('modal-ai-card');
    if (modal && card) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
    }
  }

  closeAIModal() {
    const modal = document.getElementById('modal-ai-upload');
    const card = document.getElementById('modal-ai-card');
    if (modal && card) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-100');
      card.classList.add('scale-95');
    }
  }

  handleAIImageSelect(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        this.pendingAIImageBase64 = evt.target.result;
        const fileLabel = document.getElementById('ai-file-label');
        if (fileLabel) fileLabel.textContent = `📷 File: ${file.name}`;
      };
      reader.readAsDataURL(file);
    }
  }

  async processAIGeneration() {
    const promptInput = document.getElementById('ai-prompt-input');
    const apiKeyInput = document.getElementById('ai-api-key');
    const btnGen = document.getElementById('btn-generate-ai');
    const txtGen = document.getElementById('txt-generate-ai');

    const promptText = promptInput ? promptInput.value.trim() : '';
    const apiKey = apiKeyInput ? apiKeyInput.value.trim() : null;

    if (!promptText && !this.pendingAIImageBase64) {
      alert('Silakan upload gambar flowchart atau isi deskripsi masalah terlebih dahulu!');
      return;
    }

    if (btnGen) btnGen.disabled = true;
    if (txtGen) txtGen.textContent = 'Menganalisis & Menggenerasi...';

    try {
      this.aiParser.setApiKey(apiKey);
      const generatedFlow = await this.aiParser.parseInput(promptText, this.pendingAIImageBase64);

      if (generatedFlow && generatedFlow.nodes) {
        this.activeFlowchart = generatedFlow;
        this.currentNodeId = generatedFlow.startNodeId || Object.keys(generatedFlow.nodes)[0];
        this.nodeHistory = [];
        this.closeAIModal();
        this.showSection('player');
        this.renderFlowchartPlayer();

        // Add to community grid list
        this.customFlowcharts.unshift(generatedFlow);
        this.renderCommunityGrid();

        alert('✨ Flowchart AI berhasil digenerasi dan dimuat!');
      }
    } catch (err) {
      console.error('AI Generation error:', err);
      alert('Gagal menggenerasi flowchart AI. Menggunakan parsing offline...');
    } finally {
      if (btnGen) btnGen.disabled = false;
      if (txtGen) txtGen.textContent = 'Generasi Flowchart AI';
      this.pendingAIImageBase64 = null;
    }
  }

  renderJournalList() {
    const listEl = document.getElementById('journal-list');
    const countEl = document.getElementById('journal-count');
    const badgeEl = document.getElementById('journal-badge');

    if (!listEl || !countEl || !badgeEl) return;

    countEl.textContent = `${this.journalEntries.length} ${this.currentLang === 'id' ? 'Catatan' : 'Entries'}`;
    
    if (this.journalEntries.length > 0) {
      badgeEl.classList.remove('hidden');
    } else {
      badgeEl.classList.add('hidden');
    }

    if (this.journalEntries.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-8 text-on-surface-variant/60 text-sm font-body">
          ${this.currentLang === 'id' ? 'Belum ada catatan refleksi.' : 'No reflection entries yet.'}
        </div>
      `;
      return;
    }

    listEl.innerHTML = this.journalEntries.map(entry => `
      <div class="terra-card p-4 rounded-xl border border-outline-variant/20 relative group">
        <div class="flex justify-between items-start mb-2">
          <span class="text-[11px] font-semibold text-tertiary tracking-wide uppercase">${entry.date}</span>
          <button class="text-on-surface-variant/40 hover:text-red-500 transition-colors" onclick="app.deleteJournalEntry(${entry.id})">
            <span class="material-symbols-outlined text-base">delete</span>
          </button>
        </div>
        <p class="font-headline text-sm font-bold text-on-surface mb-2">${this.escapeHtml(entry.problem)}</p>
        <p class="font-body text-xs text-primary bg-primary/10 p-2.5 rounded-lg border border-primary/20">
          🌱 ${this.escapeHtml(entry.action)}
        </p>
      </div>
    `).join('');
  }

  escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  // --- Quote Generator ---
  nextQuote() {
    this.quoteIndex = (this.quoteIndex + 1) % quotes.length;
    const q = quotes[this.quoteIndex];
    const isEn = this.currentLang === 'en';
    document.getElementById('wisdom-quote').textContent = `"${isEn ? q.enQuote : q.idQuote}"`;
    document.getElementById('wisdom-author').textContent = `— ${q.author}`;
  }

  shareFlowResult() {
    const isEn = this.currentLang === 'en';
    const flowTitle = isEn ? (this.activeFlowchart.title_en || this.activeFlowchart.title_id) : this.activeFlowchart.title_id;
    const text = `🌿 Terra — Interactive Flowcharts\n"${flowTitle}"\nMainkan & selesaikan masalahmu secara gratis tanpa biaya!`;
    
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

  // --- Theme & i18n Helpers ---
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
    document.getElementById('txt-lang').textContent = lang.toUpperCase();
    document.documentElement.lang = lang;

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update Quote
    const q = quotes[this.quoteIndex];
    document.getElementById('wisdom-quote').textContent = `"${lang === 'en' ? q.enQuote : q.idQuote}"`;

    this.renderFlowchartPlayer();
    this.renderCommunityGrid();
    this.renderJournalList();
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SeamlessProblemSolverApp();
});
