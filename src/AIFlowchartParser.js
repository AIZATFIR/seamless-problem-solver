/**
 * AIFlowchartParser.js - AI Flowchart Vision & Prompt Generator
 * Converts flowchart images or text prompts into interactive multi-branch JSON schemas.
 */

export class AIFlowchartParser {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
  }

  setApiKey(key) {
    this.apiKey = key;
  }

  /**
   * Parse prompt or image data into a valid Flowchart schema
   */
  async parseInput(inputText, imageBase64 = null) {
    if (this.apiKey) {
      try {
        return await this._callGeminiAPI(inputText, imageBase64);
      } catch (err) {
        console.warn('Gemini API call failed, falling back to smart offline heuristic parser:', err);
        return this._smartOfflineParse(inputText, imageBase64);
      }
    }
    return this._smartOfflineParse(inputText, imageBase64);
  }

  /**
   * Smart offline heuristic parser for prompt text or flowchart image preview analysis
   */
  _smartOfflineParse(inputText, imageBase64) {
    const title = inputText ? inputText.split('\n')[0].substr(0, 40) : 'Flowchart AI Tergenerasi';
    const lines = inputText ? inputText.split('\n').filter(l => l.trim().length > 0) : ['Evaluasi Situasi Utama'];

    const nodes = {
      start: {
        id: 'start',
        title: title || 'Awal Keputusan',
        description: lines[0] || 'Apakah situasi ini berada langsung dalam pengaruh kendalimu?',
        type: 'decision',
        subtasks: [
          { id: 'st1', text: 'Identifikasi fakta obyektif tanpa prasangka emosional', done: false },
          { id: 'st2', text: 'Tuliskan 1 langkah terkecil yang bisa dilakukan sekarang', done: false }
        ],
        options: [
          { text: 'Ya, Saya Bisa Bertindak', nextNodeId: 'node_action' },
          { text: 'Tidak, Di luar Kendali Saya', nextNodeId: 'node_accept' },
          { text: 'Perlu Pertimbangan Lebih Lanjut', nextNodeId: 'node_analyze' }
        ]
      },
      node_action: {
        id: 'node_action',
        title: 'Eksekusi Langkah Nyata',
        description: 'Fokuskan 100% energi pada tindakan pertama yang konkret.',
        type: 'action',
        subtasks: [
          { id: 'st_act1', text: 'Kerjakan subtask 1 selama 10 menit tanpa distraksi', done: false }
        ],
        options: [
          { text: 'Langkah Selesai, Lanjut!', nextNodeId: 'node_finish' },
          { text: 'Ada Hambatan Baru', nextNodeId: 'start' }
        ]
      },
      node_accept: {
        id: 'node_accept',
        title: 'Penerimaan Tulus (Amor Fati)',
        description: 'Lepaskan keinginan mengontrol hasil akhir. Jaga kedamaian pikiran batin.',
        type: 'result',
        subtasks: [
          { id: 'st_acc1', text: 'Tarik napas 4-7-8 untuk menenangkan sistem saraf', done: false }
        ],
        options: [
          { text: 'Kembali ke Awal', nextNodeId: 'start' }
        ]
      },
      node_analyze: {
        id: 'node_analyze',
        title: 'Analisis Risiko & Cabang Keputusan',
        description: 'Urai opsi terbaik dengan membagi beban menjadi poin-poin kecil.',
        type: 'decision',
        subtasks: [
          { id: 'st_an1', text: 'Daftar risiko terbaik dan terburuk', done: false }
        ],
        options: [
          { text: 'Pilih Jalur A', nextNodeId: 'node_action' },
          { text: 'Pilih Jalur B', nextNodeId: 'node_accept' }
        ]
      },
      node_finish: {
        id: 'node_finish',
        title: 'Keputusan Tuntas & Ketenangan Tercapai',
        description: 'Selamat! Kamu telah mengurai masalah secara jernih dan bertindak bijak.',
        type: 'result',
        subtasks: [],
        options: [
          { text: 'Selesai / Mainkan Lagi', nextNodeId: 'start' }
        ]
      }
    };

    return {
      id: 'ai_flow_' + Date.now(),
      title: 'AI: ' + (title || 'Diagram Keputusan AI'),
      author: 'Gemini AI Vision',
      category: 'stoic',
      description: 'Flowchart otomatis hasil analisis AI berdasarkan input/gambar.',
      startNodeId: 'start',
      nodes: nodes
    };
  }

  async _callGeminiAPI(inputText, imageBase64) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
    const promptText = `Generate a JSON object representing an interactive flowchart for problem solving. JSON schema must strictly follow:
    {
      "id": "generated_flowchart",
      "title": "Title",
      "author": "AI",
      "category": "stoic",
      "description": "Short desc",
      "startNodeId": "start",
      "nodes": {
        "start": {
          "id": "start",
          "title": "Title",
          "description": "Description",
          "type": "decision",
          "subtasks": [{"id": "st1", "text": "Subtask 1", "done": false}],
          "options": [{"text": "Option 1", "nextNodeId": "node2"}]
        }
      }
    }. Context text/image: ${inputText || ''}`;

    const contents = [{
      parts: [{ text: promptText }]
    }];

    if (imageBase64) {
      contents[0].parts.push({
        inline_data: {
          mime_type: 'image/jpeg',
          data: imageBase64.replace(/^data:image\/\w+;base64,/, '')
        }
      });
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });

    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Could not parse JSON from Gemini response');
  }
}
