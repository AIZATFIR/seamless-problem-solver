/**
 * MermaidTransmitterParser.js - Universal Flowchart Transmitter Protocol Parser
 * Parses Mermaid syntax (`graph TD`, `node["❓ Title"]`, `nodeA -->|"Option"| nodeB`) into Terra Flow interactive schema.
 */

export class MermaidTransmitterParser {
  /**
   * Parse Mermaid graph TD string or Universal Transmitter text into Flowchart Object
   */
  parseMermaidScript(rawScriptText, defaultTitle = 'Transmitter Flowchart') {
    if (!rawScriptText || !rawScriptText.trim()) {
      return this._getDefaultFallback(defaultTitle);
    }

    // Clean up markdown codeblocks if present
    let script = rawScriptText.replace(/```mermaid/gi, '').replace(/```/g, '').trim();

    const lines = script.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const nodes = {};
    let firstNodeId = null;
    let title = defaultTitle;

    lines.forEach(line => {
      // Check title comment or header (# Title)
      if (line.startsWith('#')) {
        title = line.replace(/^#+\s*/, '').trim();
        return;
      }

      // Skip graph direction lines (graph TD, graph LR, etc)
      if (/^graph\s+(TD|LR|TB|RL)/i.test(line)) return;

      // 1. Parse Node Label Definition: nodeId["Label Text"] or nodeId["🏁 Result Text"] or nodeId["❓ Question Text"]
      const nodeDefMatch = line.match(/^([a-zA-Z0-9_\-]+)\s*\[\s*"?(.*?)"?\s*\]$/);
      if (nodeDefMatch) {
        const nodeId = nodeDefMatch[1].trim();
        let rawLabel = nodeDefMatch[2].trim();
        
        const isResult = rawLabel.includes('🏁') || rawLabel.toUpperCase().includes('[HASIL]') || rawLabel.toUpperCase().includes('[RESULT]') || nodeId.toLowerCase().startsWith('res');
        const cleanLabel = rawLabel.replace(/[🏁❓]/g, '').replace(/\[(HASIL|RESULT)\]/gi, '').trim();

        if (!nodes[nodeId]) {
          nodes[nodeId] = {
            id: nodeId,
            isResult: isResult,
            title_id: cleanLabel || 'Kesimpulan',
            title_en: cleanLabel || 'Conclusion',
            q_id: cleanLabel || 'Pertanyaan?',
            q_en: cleanLabel || 'Question?',
            msg_id: isResult ? 'Kesimpulan akhir flowchart.' : '',
            msg_en: isResult ? 'Final flowchart conclusion.' : '',
            adv_id: isResult ? 'Ambil tindakan nyata.' : '',
            adv_en: isResult ? 'Take concrete action.' : '',
            options: []
          };
        } else {
          nodes[nodeId].isResult = isResult;
          nodes[nodeId].title_id = cleanLabel;
          nodes[nodeId].title_en = cleanLabel;
          nodes[nodeId].q_id = cleanLabel;
          nodes[nodeId].q_en = cleanLabel;
        }

        if (!firstNodeId) firstNodeId = nodeId;
        return;
      }

      // 2. Parse Connection: sourceId -->|"Option Label"| targetId  OR  sourceId --> targetId
      const connMatch = line.match(/^([a-zA-Z0-9_\-]+)\s*-->\s*(?:\|"?(.*?)"?\|)?\s*([a-zA-Z0-9_\-]+)$/);
      if (connMatch) {
        const sourceId = connMatch[1].trim();
        const optText = (connMatch[2] || 'Lanjut').replace(/["|]/g, '').trim();
        const targetId = connMatch[3].trim();

        // Ensure source node exists
        if (!nodes[sourceId]) {
          nodes[sourceId] = {
            id: sourceId,
            isResult: false,
            title_id: `Step ${sourceId}`,
            title_en: `Step ${sourceId}`,
            q_id: `Pertanyaan ${sourceId}`,
            q_en: `Question ${sourceId}`,
            options: []
          };
          if (!firstNodeId) firstNodeId = sourceId;
        }

        // Ensure target node exists
        if (!nodes[targetId]) {
          nodes[targetId] = {
            id: targetId,
            isResult: targetId.toLowerCase().startsWith('res'),
            title_id: targetId.toLowerCase().startsWith('res') ? 'Hasil Kesimpulan' : `Node ${targetId}`,
            title_en: targetId.toLowerCase().startsWith('res') ? 'Result Conclusion' : `Node ${targetId}`,
            q_id: `Pertanyaan ${targetId}`,
            q_en: `Question ${targetId}`,
            options: []
          };
        }

        // Add option to source node
        if (!nodes[sourceId].options) nodes[sourceId].options = [];
        const optCount = nodes[sourceId].options.length;

        nodes[sourceId].options.push({
          text_id: optText,
          text_en: optText,
          targetId: targetId,
          next: targetId,
          btnStyle: optCount % 2 === 0 ? 'btn-primary' : 'btn-secondary'
        });
      }
    });

    if (Object.keys(nodes).length === 0) {
      return this._getDefaultFallback(title);
    }

    return {
      id: 'transmitter_flow_' + Date.now(),
      title_id: title,
      title_en: title,
      author: 'AI Transmitter Protocol',
      category: 'work',
      description: 'Flowchart terjemahan otomatis dari Universal Mermaid Transmitter Protocol.',
      startNode: firstNodeId || Object.keys(nodes)[0],
      nodes: nodes
    };
  }

  /**
   * Return copy-pasteable AI System Prompt Template for LLMs (ChatGPT / Gemini / Claude / DeepSeek)
   */
  getAISystemPromptTemplate(topic = '') {
    return `Buatkan saya diagram flowchart keputusan tentang "${topic || 'Topik Masalah Saya'}" dalam format kode Universal Mermaid Protocol berikut. 

Tolong ikuti aturan format persis di bawah ini agar bisa langsung saya paste ke aplikasi Terra Flow:

graph TD
step1["❓ [Pertanyaan Awal]"]
step1 -->|"YA"| step2
step1 -->|"TIDAK"| res_noproblem

step2["❓ [Pertanyaan Kedua]"]
step2 -->|"YA, BISA"| res_canact
step2 -->|"TIDAK BISA"| res_cannotact

res_noproblem["🏁 [Hasil / Kesimpulan 1]"]
res_canact["🏁 [Hasil / Kesimpulan 2]"]
res_cannotact["🏁 [Hasil / Kesimpulan 3]"]

Syarat:
1. Gunakan '❓' di dalam kurung siku ["❓ ..."] untuk pertanyaan keputusan.
2. Gunakan '🏁' di dalam kurung siku ["🏁 ..."] untuk hasil akhir/kesimpulan.
3. Gunakan panah -->|"Nama Tombol Opsi"| untuk menghubungkan antar langkah.
4. Jawab HANYA dengan kode Mermaid di atas tanpa penjelasan tambahan.`;
  }

  _getDefaultFallback(title) {
    return {
      id: 'transmitter_flow_' + Date.now(),
      title_id: title,
      title_en: title,
      author: 'AI Transmitter Protocol',
      category: 'stoic',
      description: 'Diagram keputusan otomatis.',
      startNode: 'step1',
      nodes: {
        step1: {
          id: 'step1',
          q_id: 'Punya Masalah dalam Hidup?',
          q_en: 'Do you have a problem in life?',
          options: [
            { text_id: 'YA', text_en: 'YES', targetId: 'step2', next: 'step2', btnStyle: 'btn-primary' },
            { text_id: 'TIDAK', text_en: 'NO', targetId: 'res_noproblem', next: 'res_noproblem', btnStyle: 'btn-secondary' }
          ]
        },
        step2: {
          id: 'step2',
          q_id: 'Bisa melakukan sesuatu?',
          q_en: 'Can you do something about it?',
          options: [
            { text_id: 'YA, BISA', text_en: 'YES, CAN', targetId: 'res_canact', next: 'res_canact', btnStyle: 'btn-primary' },
            { text_id: 'TIDAK BISA', text_en: 'NO, CANNOT', targetId: 'res_cannotact', next: 'res_cannotact', btnStyle: 'btn-secondary' }
          ]
        },
        res_noproblem: {
          id: 'res_noproblem',
          isResult: true,
          title_id: 'Lalu Kenapa Khawatir?',
          title_en: 'Then Why Worry?',
          msg_id: 'Nikmati ketenangan batinmu.',
          msg_en: 'Enjoy your inner peace.'
        },
        res_canact: {
          id: 'res_canact',
          isResult: true,
          title_id: 'Lalu Kenapa Khawatir?',
          title_en: 'Then Why Worry?',
          msg_id: 'Fokus pada tindakan nyatamu sekarang.',
          msg_en: 'Focus on your real action now.'
        },
        res_cannotact: {
          id: 'res_cannotact',
          isResult: true,
          title_id: 'Lalu Kenapa Khawatir?',
          title_en: 'Then Why Worry?',
          msg_id: 'Lepaskan apa yang di luar kendalimu.',
          msg_en: 'Release what is beyond your control.'
        }
      }
    };
  }
}
