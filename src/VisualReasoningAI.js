/**
 * VisualReasoningAI.js - Contextual AI Reasoning Engine for Nodes
 * Analyzes visual nodes directly on the canvas to break down thoughts, discover edge cases,
 * generate actionable steps, and simplify cognitive overload.
 */

export class VisualReasoningAI {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
  }

  /**
   * Deconstruct raw problem text into an initial structured node graph
   */
  deconstructProblem(problemText) {
    const cleanText = (problemText || '').trim();
    if (!cleanText) {
      return this._getDefaultGraph('Masalah Baru');
    }

    const title = cleanText.length > 48 ? cleanText.substring(0, 45) + '...' : cleanText;

    // Detect keywords for intelligent contextual templates
    const lower = cleanText.toLowerCase();

    if (lower.includes('beli') || lower.includes('uang') || lower.includes('harga') || lower.includes('invest')) {
      return this._buildFinancialDecisionGraph(title, cleanText);
    } else if (lower.includes('kerja') || lower.includes('karir') || lower.includes('kantor') || lower.includes('proyek')) {
      return this._buildWorkDecisionGraph(title, cleanText);
    } else if (lower.includes('cemas') || lower.includes('stres') || lower.includes('takut') || lower.includes('bingung')) {
      return this._buildAnxietyClarityGraph(title, cleanText);
    }

    return this._buildGeneralReasoningGraph(title, cleanText);
  }

  /**
   * Contextual action: Break down selected node into 2-3 logical sub-branches
   */
  breakDownNode(targetNode, currentNodes = []) {
    if (!targetNode) return [];

    const originX = targetNode.x || 100;
    const originY = targetNode.y || 100;
    const newNodes = [];

    if (targetNode.type === 'problem') {
      const child1Id = 'cause_' + Date.now().toString(36) + '_1';
      const child2Id = 'cause_' + Date.now().toString(36) + '_2';

      newNodes.push({
        id: child1Id,
        type: 'decision',
        title: `Faktor Internal (${targetNode.title})`,
        description: 'Kebiasaan, kapasitas waktu, atau prioritas pribadi yang memengaruhi situasi.',
        x: originX + 380,
        y: originY - 90,
        options: [{ text: 'Solusi Mandiri', targetId: 'act_' + Date.now().toString(36) + '_1' }]
      });

      newNodes.push({
        id: child2Id,
        type: 'decision',
        title: `Faktor Eksternal (${targetNode.title})`,
        description: 'Tuntutan lingkungan, orang lain, atau batasan sistem yang dihadapi.',
        x: originX + 380,
        y: originY + 110,
        options: [{ text: 'Solusi Adaptif', targetId: 'act_' + Date.now().toString(36) + '_2' }]
      });

      // Connect targetNode to new children
      targetNode.options = [
        { text: 'Evaluasi Internal', targetId: child1Id },
        { text: 'Evaluasi Eksternal', targetId: child2Id }
      ];
    } else if (targetNode.type === 'decision') {
      const act1Id = 'act_' + Date.now().toString(36) + '_a';
      const act2Id = 'act_' + Date.now().toString(36) + '_b';

      newNodes.push({
        id: act1Id,
        type: 'action',
        title: `Langkah Proaktif (Jalur 1)`,
        description: 'Eksperimen skala kecil selama 1 minggu untuk menguji asumsi.',
        x: originX + 380,
        y: originY - 70,
        options: []
      });

      newNodes.push({
        id: act2Id,
        type: 'action',
        title: `Langkah Pengamanan (Jalur 2)`,
        description: 'Mitigasi risiko terburuk sebelum melangkah lebih jauh.',
        x: originX + 380,
        y: originY + 90,
        options: []
      });

      targetNode.options = [
        { text: 'Jalur Proaktif', targetId: act1Id },
        { text: 'Jalur Pengamanan', targetId: act2Id }
      ];
    } else {
      const resId = 'res_' + Date.now().toString(36);
      newNodes.push({
        id: resId,
        type: 'outcome',
        title: 'Hasil Evaluasi & Ketenangan',
        description: 'Kejelasan tercapai. Tindakan telah terdefinisi tanpa beban pikiran berlebih.',
        x: originX + 380,
        y: originY,
        options: []
      });
      targetNode.options = [{ text: 'Langkah Tuntas', targetId: resId }];
    }

    return newNodes;
  }

  /**
   * Contextual action: Find missing edge cases & counter-arguments
   */
  findEdgeCases(targetNode) {
    if (!targetNode) return null;

    const edgeNodeId = 'edge_' + Date.now().toString(36);
    const edgeNode = {
      id: edgeNodeId,
      type: 'decision',
      title: `⚠️ Kasus Tak Terduga: Bagaimana jika gagal?`,
      description: `Rencana cadangan jika asumsi pada "${targetNode.title}" tidak berjalan semestinya.`,
      x: (targetNode.x || 100) + 380,
      y: (targetNode.y || 100) + 160,
      options: [
        { text: 'Mitigasi Darurat', targetId: 'act_mitigate_' + Date.now().toString(36) }
      ]
    };

    if (!targetNode.options) targetNode.options = [];
    targetNode.options.push({
      text: 'Bila Ada Kendala',
      targetId: edgeNodeId
    });

    return edgeNode;
  }

  /**
   * Contextual action: Convert a theoretical insight into 5-minute action step
   */
  actionizeNode(targetNode) {
    if (!targetNode) return null;

    const actionNodeId = 'actionize_' + Date.now().toString(36);
    const actionNode = {
      id: actionNodeId,
      type: 'action',
      title: `⚡ Aturan 5 Menit: Mulai Sekarang`,
      description: `Lakukan 1 tindakan terkecil terkait "${targetNode.title}" dalam 5 menit ke depan tanpa menunda.`,
      x: (targetNode.x || 100) + 380,
      y: targetNode.y || 100,
      options: [
        { text: 'Selesai!', targetId: 'res_done_' + Date.now().toString(36) }
      ]
    };

    if (!targetNode.options) targetNode.options = [];
    targetNode.options.push({
      text: 'Aksi Nyata 5 Menit',
      targetId: actionNodeId
    });

    return actionNode;
  }

  _buildGeneralReasoningGraph(title, rawText) {
    return [
      {
        id: 'node_root',
        type: 'problem',
        title: title,
        description: rawText || 'Mengurai situasi untuk melihat struktur keputusan yang jernih.',
        x: 120,
        y: 220,
        options: [
          { text: 'Bisa Dikendalikan Langsung', targetId: 'node_ctrl' },
          { text: 'Di Luar Kendali Langsung', targetId: 'node_no_ctrl' }
        ]
      },
      {
        id: 'node_ctrl',
        type: 'decision',
        title: 'Fokus pada Tindakan & Respon',
        description: 'Tentukan 1 langkah awal yang dapat kamu putuskan dan eksekusi sekarang.',
        x: 540,
        y: 110,
        options: [
          { text: 'Eksekusi Segera', targetId: 'node_act_now' }
        ]
      },
      {
        id: 'node_no_ctrl',
        type: 'decision',
        title: 'Lepaskan Ekspektasi Hasil',
        description: 'Hasil akhir dan respon orang lain bukan milikmu. Jangan biarkan mencuri kedamaianmu.',
        x: 540,
        y: 330,
        options: [
          { text: 'Sikap Ikhlas & Adaptif', targetId: 'node_accept' }
        ]
      },
      {
        id: 'node_act_now',
        type: 'action',
        title: 'Langkah Nyata 10 Menit',
        description: 'Kerjakan tanpa menunggu inspirasi sempurna. Gerakan melahirkan kejelasan.',
        x: 940,
        y: 110,
        options: [
          { text: 'Langkah Tuntas', targetId: 'node_res_clear' }
        ]
      },
      {
        id: 'node_accept',
        type: 'outcome',
        title: 'Ketenangan Batin (Amor Fati)',
        description: 'Kedamaian sejati ditemukan saat kita berhenti bertarung melawan kenyataan yang tak bisa diubah.',
        x: 940,
        y: 330,
        options: []
      },
      {
        id: 'node_res_clear',
        type: 'outcome',
        title: 'Kejelasan & Solusi Tercapai',
        description: 'Pikiran kembali lapang, beban terurai menjadi langkah nyata.',
        x: 1320,
        y: 110,
        options: []
      }
    ];
  }

  _buildFinancialDecisionGraph(title, rawText) {
    return [
      {
        id: 'fin_root',
        type: 'problem',
        title: title,
        description: 'Pertimbangan pengeluaran atau keputusan finansial.',
        x: 120,
        y: 220,
        options: [
          { text: 'Kebutuhan Primer / Investasi Leher ke Atas', targetId: 'fin_need' },
          { text: 'Keinginan / Dorongan Emosional Sesaat', targetId: 'fin_want' }
        ]
      },
      {
        id: 'fin_need',
        type: 'decision',
        title: 'Cek Arus Kas & ROI',
        description: 'Apakah ada dana dingin yang cukup tanpa mengganggu dana darurat?',
        x: 540,
        y: 110,
        options: [
          { text: 'Dana Siap & Nilai Jelas', targetId: 'fin_buy' },
          { text: 'Uang Pas-pasan', targetId: 'fin_save' }
        ]
      },
      {
        id: 'fin_want',
        type: 'decision',
        title: 'Terapkan Aturan 48 Jam',
        description: 'Tunda pembelian selama 48 jam. Jika keinginan hilang, itu hanya dopamin sesaat.',
        x: 540,
        y: 330,
        options: [
          { text: 'Tunda 48 Jam', targetId: 'fin_delay' }
        ]
      },
      {
        id: 'fin_buy',
        type: 'action',
        title: 'Beli / Eksekusi dengan Rasa Syukur',
        description: 'Gunakan aset tersebut semaksimal mungkin untuk menghasilkan nilai tambah.',
        x: 940,
        y: 80,
        options: [{ text: 'Selesai', targetId: 'fin_res' }]
      },
      {
        id: 'fin_save',
        type: 'action',
        title: 'Tabung Dulu / Cari Alternatif',
        description: 'Prioritaskan keamanan finansial dan ketenangan pikiran di atas gengsi.',
        x: 940,
        y: 210,
        options: [{ text: 'Selesai', targetId: 'fin_res' }]
      },
      {
        id: 'fin_delay',
        type: 'outcome',
        title: 'Kemenangan Disiplin Diri',
        description: 'Kamu menyelamatkan keuangan dari impulsivitas emosional.',
        x: 940,
        y: 350,
        options: []
      },
      {
        id: 'fin_res',
        type: 'outcome',
        title: 'Keputusan Finansial Bijak',
        description: 'Pikiran tenang tanpa rasa bersalah pasca-transaksi.',
        x: 1320,
        y: 140,
        options: []
      }
    ];
  }

  _buildWorkDecisionGraph(title, rawText) {
    return [
      {
        id: 'work_root',
        type: 'problem',
        title: title,
        description: 'Tantangan kerja, prioritas tugas, atau dinamika proyek.',
        x: 120,
        y: 220,
        options: [
          { text: 'Dampak Tinggi (High Impact)', targetId: 'work_hi' },
          { text: 'Dampak Rendah (Busywork)', targetId: 'work_lo' }
        ]
      },
      {
        id: 'work_hi',
        type: 'decision',
        title: 'Tentukan Titik Ungkit Terbesar',
        description: 'Tugas mana yang jika selesai, akan membuat tugas lain lebih mudah?',
        x: 540,
        y: 110,
        options: [{ text: 'Jadwalkan Deep Work', targetId: 'work_deep' }]
      },
      {
        id: 'work_lo',
        type: 'decision',
        title: 'Otomasi, Delegasi, atau Eliminasi',
        description: 'Jangan habiskan jam paling produktif untuk hal-hal administratif remeh.',
        x: 540,
        y: 330,
        options: [{ text: 'Delegasi / Singkirkan', targetId: 'work_delegate' }]
      },
      {
        id: 'work_deep',
        type: 'action',
        title: 'Sesi Fokus 25 Menit (Pomodoro)',
        description: 'Tutup semua tab sosial media, heningkan notifikasi, mulai draft pertama.',
        x: 940,
        y: 110,
        options: [{ text: 'Tuntas', targetId: 'work_res' }]
      },
      {
        id: 'work_delegate',
        type: 'outcome',
        title: 'Waktu Produktif Terlindungi',
        description: 'Energi mental dihemat untuk hal-hal yang benar-benar esensial.',
        x: 940,
        y: 330,
        options: []
      },
      {
        id: 'work_res',
        type: 'outcome',
        title: 'Progres Nyata Tercapai',
        description: 'Pekerjaan selesai dengan standar mutu tinggi tanpa rasa kewalahan.',
        x: 1320,
        y: 110,
        options: []
      }
    ];
  }

  _buildAnxietyClarityGraph(title, rawText) {
    return [
      {
        id: 'anx_root',
        type: 'problem',
        title: title,
        description: 'Kekhawatiran atau beban mental yang mengaburkan ketenangan batin.',
        x: 120,
        y: 220,
        options: [
          { text: 'Fakta Obyektif (Kenyataan)', targetId: 'anx_fact' },
          { text: 'Skenario Terburuk (Imajinasi)', targetId: 'anx_fear' }
        ]
      },
      {
        id: 'anx_fact',
        type: 'decision',
        title: 'Urai Fakta yang Sedang Terjadi',
        description: 'Pisahkan antara apa yang benar-benar ada di depan mata dengan asumsi masa depan.',
        x: 540,
        y: 110,
        options: [{ text: 'Fokus Saat Ini', targetId: 'anx_act' }]
      },
      {
        id: 'anx_fear',
        type: 'decision',
        title: 'Premeditatio Malorum (Uji Ketakutan)',
        description: '"Kita lebih sering menderita dalam imajinasi daripada dalam kenyataan." — Seneca',
        x: 540,
        y: 330,
        options: [{ text: 'Berdamai dengan Risiko', targetId: 'anx_accept' }]
      },
      {
        id: 'anx_act',
        type: 'action',
        title: 'Tarik Napas & Langkah Terkecil',
        description: 'Ambil 3 tarikan napas dalam, lalu tulis 1 tindakan penyelesaian hari ini.',
        x: 940,
        y: 110,
        options: [{ text: 'Ketenangan Pulih', targetId: 'anx_res' }]
      },
      {
        id: 'anx_accept',
        type: 'outcome',
        title: 'Keberanian & Ketahanan Batin',
        description: 'Apapun yang terjadi di masa depan, kamu memiliki akal dan kebajikan untuk mengatasinya.',
        x: 940,
        y: 330,
        options: []
      },
      {
        id: 'anx_res',
        type: 'outcome',
        title: 'Pikiran Jernih & Damai',
        description: 'Beban emosional lenyap, digantikan oleh kesadaran yang tenang dan teguh.',
        x: 1320,
        y: 110,
        options: []
      }
    ];
  }

  _getDefaultGraph(title) {
    return [
      {
        id: 'node_root',
        type: 'problem',
        title: title || 'Awal Pemikiran',
        description: 'Tentukan arah keputusanmu.',
        x: 120,
        y: 200,
        options: [
          { text: 'Opsi A', targetId: 'node_a' },
          { text: 'Opsi B', targetId: 'node_b' }
        ]
      },
      {
        id: 'node_a',
        type: 'decision',
        title: 'Keputusan Opsi A',
        description: 'Analisis jalur A.',
        x: 500,
        y: 120,
        options: []
      },
      {
        id: 'node_b',
        type: 'decision',
        title: 'Keputusan Opsi B',
        description: 'Analisis jalur B.',
        x: 500,
        y: 300,
        options: []
      }
    ];
  }
}
