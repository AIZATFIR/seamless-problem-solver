/**
 * FrameworkPresets.js - Structured Mental Models for Visual Thinking
 * Provides pre-built spatial node graphs for common problem decomposition frameworks.
 */

export const FRAMEWORK_PRESETS = {
  'empty': {
    id: 'empty',
    title: 'Papan Kosong',
    tag: 'Custom',
    description: 'Mulai dari kanvas kosong dan bangun alur berpikirmu sendiri.',
    nodes: [
      {
        id: 'node_root',
        type: 'problem',
        title: 'Masalah Utama',
        description: 'Tuliskan masalah atau pertanyaan yang ingin kamu urai di sini...',
        x: 160,
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
        x: 540,
        y: 100,
        options: [
          { text: 'Ambil Tindakan', targetId: 'node_act_a' }
        ]
      },
      {
        id: 'node_opt_b',
        type: 'decision',
        title: 'Pertimbangan Jalur B',
        description: 'Apa faktor risiko dan potensi manfaat jalur ini?',
        x: 540,
        y: 320,
        options: [
          { text: 'Ambil Tindakan', targetId: 'node_act_b' }
        ]
      },
      {
        id: 'node_act_a',
        type: 'action',
        title: 'Langkah Nyata A',
        description: 'Tindakan konkret pertama yang dapat dieksekusi hari ini.',
        x: 920,
        y: 100,
        options: [
          { text: 'Selesai', targetId: 'node_res_a' }
        ]
      },
      {
        id: 'node_act_b',
        type: 'action',
        title: 'Langkah Nyata B',
        description: 'Fokus pada 1 tindakan kecil yang berada dalam kendalimu.',
        x: 920,
        y: 320,
        options: [
          { text: 'Selesai', targetId: 'node_res_b' }
        ]
      },
      {
        id: 'node_res_a',
        type: 'outcome',
        title: 'Solusi Tuntas A',
        description: 'Hasil akhir yang jelas dan terarah.',
        x: 1280,
        y: 100,
        options: []
      },
      {
        id: 'node_res_b',
        type: 'outcome',
        title: 'Solusi Tuntas B',
        description: 'Penyelesaian yang realistis dan terukur.',
        x: 1280,
        y: 320,
        options: []
      }
    ]
  },

  '5whys': {
    id: '5whys',
    title: '5 Whys Root Cause Analysis',
    tag: 'Diagnostik',
    description: 'Bongkar akar masalah terdalam dengan bertanya "Mengapa?" sebanyak 5 kali.',
    nodes: [
      {
        id: 'why_0',
        type: 'problem',
        title: 'Masalah di Permukaan',
        description: 'Contoh: Proyek selalu terlambat dari tenggat waktu.',
        x: 120,
        y: 200,
        options: [{ text: 'Mengapa 1?', targetId: 'why_1' }]
      },
      {
        id: 'why_1',
        type: 'decision',
        title: 'Mengapa #1 (Gejala Awal)',
        description: 'Mengapa hal itu terjadi? Karena alur review terlalu lambat.',
        x: 460,
        y: 200,
        options: [{ text: 'Mengapa 2?', targetId: 'why_2' }]
      },
      {
        id: 'why_2',
        type: 'decision',
        title: 'Mengapa #2 (Proses)',
        description: 'Mengapa review lambat? Karena hanya 1 orang yang memeriksa.',
        x: 800,
        y: 200,
        options: [{ text: 'Mengapa 3?', targetId: 'why_3' }]
      },
      {
        id: 'why_3',
        type: 'decision',
        title: 'Mengapa #3 (Sistem)',
        description: 'Mengapa hanya 1 orang? Belum ada standard checklist review.',
        x: 1140,
        y: 200,
        options: [{ text: 'Akar Masalah & Aksi', targetId: 'why_action' }]
      },
      {
        id: 'why_action',
        type: 'action',
        title: 'Solusi pada Akar Masalah',
        description: 'Buat checklist review otomatis dan delegasikan wewenang.',
        x: 1480,
        y: 200,
        options: [{ text: 'Hasil Akhir', targetId: 'why_outcome' }]
      },
      {
        id: 'why_outcome',
        type: 'outcome',
        title: 'Proses Lancar & Cepat',
        description: 'Tenggat waktu tercapai tanpa bottleneck personal.',
        x: 1820,
        y: 200,
        options: []
      }
    ]
  },

  'stoic': {
    id: 'stoic',
    title: 'Stoic Circle of Control',
    tag: 'Ketenangan',
    description: 'Pisahkan apa yang bisa kamu kendalikan dari apa yang harus kamu ikhlaskan.',
    nodes: [
      {
        id: 'stoic_prob',
        type: 'problem',
        title: 'Situasi yang Membebani Pikiran',
        description: 'Apa hal spesifik yang sedang menimbulkan kekhawatiran?',
        x: 140,
        y: 220,
        options: [
          { text: 'Dalam Kendaliku (Usaha/Respon)', targetId: 'stoic_control' },
          { text: 'Di Luar Kendaliku (Hasil/Orang Lain)', targetId: 'stoic_nocontrol' }
        ]
      },
      {
        id: 'stoic_control',
        type: 'decision',
        title: 'Lingkaran Kendali Nyata',
        description: 'Pikiran, usaha, tindakan, dan responmu 100% berada dalam kuasamu.',
        x: 560,
        y: 100,
        options: [
          { text: 'Tindakan 5 Menit', targetId: 'stoic_act' }
        ]
      },
      {
        id: 'stoic_nocontrol',
        type: 'decision',
        title: 'Lingkaran di Luar Kendali',
        description: 'Opini orang lain, kondisi pasar, masa lalu, dan faktor alam bukan milikmu.',
        x: 560,
        y: 340,
        options: [
          { text: 'Amor Fati (Penerimaan)', targetId: 'stoic_accept' }
        ]
      },
      {
        id: 'stoic_act',
        type: 'action',
        title: 'Fokuskan 100% Energi pada 1 Aksi',
        description: 'Kerjakan langkah terkecil hari ini tanpa memikirkan hasil akhir.',
        x: 960,
        y: 100,
        options: [
          { text: 'Ketenangan Dicapai', targetId: 'stoic_res_act' }
        ]
      },
      {
        id: 'stoic_accept',
        type: 'outcome',
        title: 'Ikhlas & Lepaskan Beban',
        description: '"Jangan buang energimu mengontrol apa yang bukan kuasamu." — Epictetus',
        x: 960,
        y: 340,
        options: []
      },
      {
        id: 'stoic_res_act',
        type: 'outcome',
        title: 'Kedamaian Pikiran & Kemajuan',
        description: 'Kamu telah melakukan bagianmu dengan kebajikan terbaik.',
        x: 1340,
        y: 100,
        options: []
      }
    ]
  },

  'firstprinciples': {
    id: 'firstprinciples',
    title: 'First Principles Thinking',
    tag: 'Inovasi',
    description: 'Hancurkan asumsi konvensional hingga ke fakta paling mendasar, lalu bangun dari nol.',
    nodes: [
      {
        id: 'fp_prob',
        type: 'problem',
        title: 'Tantangan / Asumsi Konvensional',
        description: '"Semua orang bilang cara ini terlalu mahal atau mustahil."',
        x: 140,
        y: 200,
        options: [{ text: 'Urai ke Fakta Dasar', targetId: 'fp_facts' }]
      },
      {
        id: 'fp_facts',
        type: 'decision',
        title: 'Fakta Paling Mendasar (Bebas Asumsi)',
        description: 'Apa saja hukum fisika / data mentah yang 100% benar dan tak terbantahkan?',
        x: 520,
        y: 200,
        options: [{ text: 'Rancang Ulang Solusi', targetId: 'fp_reconstruct' }]
      },
      {
        id: 'fp_reconstruct',
        type: 'action',
        title: 'Rekonstruksi Solusi dari Nol',
        description: 'Gabungkan fakta dasar dengan cara baru yang jauh lebih hemat dan efisien.',
        x: 900,
        y: 200,
        options: [{ text: 'Validasi Prototipe', targetId: 'fp_outcome' }]
      },
      {
        id: 'fp_outcome',
        type: 'outcome',
        title: 'Terobosan Baru (Breakthrough)',
        description: 'Solusi unik yang melompati batasan konvensional.',
        x: 1280,
        y: 200,
        options: []
      }
    ]
  },

  'eisenhower': {
    id: 'eisenhower',
    title: 'Eisenhower Priority Matrix',
    tag: 'Produktivitas',
    description: 'Pilah tugas berdasarkan urgensi dan dampak untuk mencegah burnout.',
    nodes: [
      {
        id: 'eis_task',
        type: 'problem',
        title: 'Daftar Tugas / Beban Kerja',
        description: 'Evaluasi tugas ini: Apakah Penting dan Mendesak?',
        x: 140,
        y: 220,
        options: [
          { text: 'Penting & Mendesak', targetId: 'eis_do' },
          { text: 'Penting, Tidak Mendesak', targetId: 'eis_plan' },
          { text: 'Tidak Penting, Mendesak', targetId: 'eis_delegate' },
          { text: 'Tidak Penting & Tidak Mendesak', targetId: 'eis_delete' }
        ]
      },
      {
        id: 'eis_do',
        type: 'action',
        title: 'DO (Kerjakan Sekarang)',
        description: 'Krisis atau deadline penting. Selesaikan dalam blok fokus pertama.',
        x: 580,
        y: 60,
        options: [{ text: 'Selesai', targetId: 'eis_res' }]
      },
      {
        id: 'eis_plan',
        type: 'action',
        title: 'SCHEDULE (Jadwalkan Kalender)',
        description: 'Pertumbuhan jangka panjang, belajar, kesehatan, dan strategi.',
        x: 580,
        y: 180,
        options: [{ text: 'Terjadwal', targetId: 'eis_res' }]
      },
      {
        id: 'eis_delegate',
        type: 'action',
        title: 'DELEGATE (Serahkan / Otomasi)',
        description: 'Interupsi atau tugas administratif yang bisa dikerjakan sistem/orang lain.',
        x: 580,
        y: 300,
        options: [{ text: 'Terdestinasi', targetId: 'eis_res' }]
      },
      {
        id: 'eis_delete',
        type: 'outcome',
        title: 'ELIMINATE (Hapus Tanpa Ragu)',
        description: 'Distraksi murni yang hanya menghabiskan waktu tanpa nilai tambah.',
        x: 580,
        y: 420,
        options: []
      },
      {
        id: 'eis_res',
        type: 'outcome',
        title: 'Fokus Jernih & Waktu Terjaga',
        description: 'Energi tercurahkan hanya untuk prioritas berdampak tertinggi.',
        x: 980,
        y: 180,
        options: []
      }
    ]
  }
};
