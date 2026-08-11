/**
 * QuickScriptFlowParser.js - Natural Text & Shorthand Arrow Flowchart Parser
 * Automatically parses text scripts / arrow notation into interactive flowchart nodes & decision buttons.
 */

export class QuickScriptFlowParser {
  /**
   * Parse simple text script or shorthand arrow lines into Flowchart JSON Schema
   */
  parseScript(scriptText, defaultTitle = 'Custom Flowchart Script') {
    if (!scriptText || !scriptText.trim()) {
      return this._getDefaultFallback(defaultTitle);
    }

    const lines = scriptText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    let title = defaultTitle;
    const nodes = {};
    let firstNodeId = null;

    let currentNode = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check title header (# Title)
      if (line.startsWith('#')) {
        title = line.replace(/^#+\s*/, '').trim();
        continue;
      }

      // Check arrow shorthand line: Node A -> (Option 1) -> Node B -> (Option 2) -> Node C
      if (line.includes('->')) {
        this._parseArrowLine(line, nodes);
        if (!firstNodeId && Object.keys(nodes).length > 0) {
          firstNodeId = Object.keys(nodes)[0];
        }
        continue;
      }

      // Check Node Definition (NodeKey: Node Title / Question)
      const nodeDefMatch = line.match(/^([a-zA-Z0-9_\-]+)\s*:\s*(.+)$/);
      if (nodeDefMatch) {
        const nodeId = nodeDefMatch[1].trim();
        const content = nodeDefMatch[2].trim();
        const isResult = content.toUpperCase().includes('[HASIL]') || content.toUpperCase().includes('[RESULT]') || nodeId.toLowerCase().startsWith('res');

        currentNode = {
          id: nodeId,
          isResult: isResult,
          title_id: content.replace(/\[(HASIL|RESULT)\]/gi, '').trim(),
          title_en: content.replace(/\[(HASIL|RESULT)\]/gi, '').trim(),
          q_id: content.replace(/\[(HASIL|RESULT)\]/gi, '').trim(),
          q_en: content.replace(/\[(HASIL|RESULT)\]/gi, '').trim(),
          msg_id: isResult ? 'Kesimpulan flowchart.' : '',
          msg_en: isResult ? 'Flowchart conclusion.' : '',
          adv_id: isResult ? 'Ambil langkah nyata.' : '',
          adv_en: isResult ? 'Take concrete action.' : '',
          options: []
        };

        nodes[nodeId] = currentNode;
        if (!firstNodeId) firstNodeId = nodeId;
        continue;
      }

      // Check Option bullet (- Option Label -> TargetNodeId)
      const optMatch = line.match(/^[\-\*]\s*(.+?)\s*->\s*([a-zA-Z0-9_\-]+)$/);
      if (optMatch && currentNode && !currentNode.isResult) {
        const optText = optMatch[1].trim();
        const targetId = optMatch[2].trim();
        currentNode.options.push({
          text_id: optText,
          text_en: optText,
          next: targetId,
          btnStyle: currentNode.options.length % 2 === 0 ? 'btn-primary' : 'btn-secondary'
        });
        continue;
      }

      // Check Message / Subtitle key-value line (Pesan: ... or Sub: ...)
      const kvMatch = line.match(/^(Pesan|Sub|Saran)\s*:\s*(.+)$/i);
      if (kvMatch && currentNode) {
        const key = kvMatch[1].toLowerCase();
        const val = kvMatch[2].trim();
        if (key === 'pesan') {
          currentNode.msg_id = val;
          currentNode.msg_en = val;
        } else if (key === 'saran') {
          currentNode.adv_id = val;
          currentNode.adv_en = val;
        } else if (key === 'sub') {
          currentNode.sub_id = val;
          currentNode.sub_en = val;
        }
      }
    }

    // Ensure all target nodes mentioned in options exist
    Object.keys(nodes).forEach(id => {
      const n = nodes[id];
      if (!n.isResult && n.options) {
        n.options.forEach(opt => {
          const tId = opt.next;
          if (tId && !nodes[tId]) {
            // Auto-create missing target node as a Result Node
            nodes[tId] = {
              id: tId,
              isResult: true,
              title_id: `Hasil: ${tId}`,
              title_en: `Result: ${tId}`,
              msg_id: 'Langkah akhir reached.',
              msg_en: 'Final step reached.',
              adv_id: 'Selesai.',
              adv_en: 'Done.'
            };
          }
        });
      }
    });

    if (Object.keys(nodes).length === 0) {
      return this._getDefaultFallback(title);
    }

    return {
      id: 'script_flow_' + Date.now(),
      title_id: title,
      title_en: title,
      author: 'Quick Script Parser',
      category: 'work',
      description: 'Flowchart otomatis dari Quick Script text parser.',
      startNode: firstNodeId || Object.keys(nodes)[0],
      nodes: nodes
    };
  }

  _parseArrowLine(line, nodes) {
    // Format: NodeA -> (Opsi 1) -> NodeB -> (Opsi 2) -> NodeC
    const parts = line.split('->').map(p => p.trim());
    let currentSourceId = null;
    let pendingOptionLabel = null;

    parts.forEach((part, idx) => {
      // Check if part is an option label (Option Text)
      const optMatch = part.match(/^\((.+)\)$/);
      if (optMatch) {
        pendingOptionLabel = optMatch[1].trim();
      } else {
        const nodeId = 'n_' + part.toLowerCase().replace(/[^a-z0-9_]/g, '_');
        if (!nodes[nodeId]) {
          nodes[nodeId] = {
            id: nodeId,
            isResult: idx === parts.length - 1 && !pendingOptionLabel,
            title_id: part,
            title_en: part,
            q_id: part,
            q_en: part,
            msg_id: 'Kesimpulan akhir.',
            msg_en: 'Final conclusion.',
            adv_id: 'Langkah tuntas.',
            adv_en: 'Action complete.',
            options: []
          };
        }

        if (currentSourceId && nodes[currentSourceId]) {
          nodes[currentSourceId].options.push({
            text_id: pendingOptionLabel || 'Lanjut',
            text_en: pendingOptionLabel || 'Proceed',
            next: nodeId,
            btnStyle: nodes[currentSourceId].options.length % 2 === 0 ? 'btn-primary' : 'btn-secondary'
          });
        }

        currentSourceId = nodeId;
        pendingOptionLabel = null;
      }
    });
  }

  _getDefaultFallback(title) {
    return {
      id: 'script_flow_' + Date.now(),
      title_id: title,
      title_en: title,
      author: 'Quick Script Parser',
      category: 'stoic',
      description: 'Diagram keputusan otomatis.',
      startNode: 'start',
      nodes: {
        start: {
          id: 'start',
          tag_id: 'Awal Keputusan',
          tag_en: 'Decision Start',
          q_id: 'Apakah situasi ini bisa diubah oleh aksimu?',
          q_en: 'Can this situation be changed by your action?',
          options: [
            { text_id: 'YA, BISA', text_en: 'YES, CAN', next: 'res_act', btnStyle: 'btn-primary' },
            { text_id: 'TIDAK BISA', text_en: 'NO, CANNOT', next: 'res_accept', btnStyle: 'btn-secondary' }
          ]
        },
        res_act: {
          id: 'res_act',
          isResult: true,
          title_id: 'Fokus pada Aksimu',
          title_en: 'Focus on Your Action',
          msg_id: 'Lakukan langkah 5 menit pertama.',
          msg_en: 'Take the first 5-minute step.'
        },
        res_accept: {
          id: 'res_accept',
          isResult: true,
          title_id: 'Penerimaan Tulus',
          title_en: 'Sincere Acceptance',
          msg_id: 'Lepaskan apa yang tidak dalam kendalimu.',
          msg_en: 'Release what is outside your control.'
        }
      }
    };
  }
}
