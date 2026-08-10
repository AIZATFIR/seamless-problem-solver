/**
 * FlowchartGraphRenderer.js - Interactive SVG Graph & Visual Map Engine
 * Renders full interactive flowchart diagrams with nodes, curved arrows, active highlights, and PNG/Mermaid export.
 */

export class FlowchartGraphRenderer {
  constructor(options = {}) {
    this.onNodeClick = options.onNodeClick || null;
  }

  /**
   * Render complete SVG Graph into target container
   */
  renderGraph(flowData, activeNodeId, containerEl) {
    if (!flowData || !flowData.nodes || !containerEl) return;

    const nodes = flowData.nodes;
    const nodeIds = Object.keys(nodes);
    if (nodeIds.length === 0) return;

    // 1. Calculate Hierarchical Layout (Levels & X/Y positions)
    const layout = this._calculateTreeLayout(flowData);

    const width = Math.max(800, layout.maxX + 220);
    const height = Math.max(450, layout.maxY + 150);

    // 2. Generate SVG Markup
    let svgHTML = `
      <svg id="flowchart-svg-canvas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="w-full h-auto min-h-[380px] select-none transition-all duration-300">
        <defs>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(30, 41, 59, 0.9)" />
            <stop offset="100%" stop-color="rgba(15, 23, 42, 0.95)" />
          </linearGradient>
          <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(16, 185, 129, 0.25)" />
            <stop offset="100%" stop-color="rgba(6, 95, 70, 0.35)" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
        </defs>

        <!-- Dynamic Grid Pattern Background -->
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        <!-- Connecting Arrow Paths -->
        <g id="svg-connections">
    `;

    // Render Connection Arrows
    nodeIds.forEach(id => {
      const sourceNode = nodes[id];
      const sourcePos = layout.positions[id];
      if (!sourceNode || !sourcePos || sourceNode.isResult || !sourceNode.options) return;

      sourceNode.options.forEach(opt => {
        const targetId = opt.next || opt.targetId;
        const targetPos = layout.positions[targetId];
        if (!targetPos) return;

        const startX = sourcePos.x + 180; // Right side of source card
        const startY = sourcePos.y + 40;  // Middle height of source card
        const endX = targetPos.x;         // Left side of target card
        const endY = targetPos.y + 40;    // Middle height of target card

        const dx = Math.max(40, (endX - startX) / 2);
        const pathD = `M ${startX} ${startY} C ${startX + dx} ${startY}, ${endX - dx} ${endY}, ${endX} ${endY}`;
        const optLabel = opt.text_id || opt.text || opt.text_en || 'Lanjut';

        svgHTML += `
          <path d="${pathD}" fill="none" stroke="${id === activeNodeId ? '#10b981' : 'rgba(74, 124, 89, 0.4)'}" stroke-width="${id === activeNodeId ? '2.5' : '1.5'}" marker-end="url(#arrow)" class="transition-all duration-300" />
          <text x="${(startX + endX) / 2}" y="${(startY + endY) / 2 - 6}" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif" font-weight="600" text-anchor="middle" class="pointer-events-none">
            ${this._escapeSVG(optLabel.substr(0, 16))}
          </text>
        `;
      });
    });

    svgHTML += `</g><g id="svg-nodes">`;

    // Render Node Cards
    nodeIds.forEach((id, idx) => {
      const n = nodes[id];
      const pos = layout.positions[id] || { x: 50 + idx * 220, y: 50 };
      const isActive = id === activeNodeId;
      const isResult = !!n.isResult;

      const cardWidth = 180;
      const cardHeight = 80;
      const title = n.title_id || n.q_id || n.title || n.q || `Node #${idx + 1}`;
      const badgeText = isResult ? '🏁 Hasil Akhir' : `❓ Node #${idx + 1}`;

      const strokeColor = isActive ? '#10b981' : isResult ? '#f59e0b' : 'rgba(255,255,255,0.12)';
      const strokeWidth = isActive ? '2.5' : '1';
      const fillBg = isActive ? 'url(#activeGrad)' : 'url(#nodeGrad)';

      svgHTML += `
        <g class="cursor-pointer group hover:scale-[1.03] transition-transform duration-200" onclick="window.app && window.app.handleGraphNodeClick('${id}')">
          <!-- Card Shadow/Glow -->
          <rect x="${pos.x}" y="${pos.y}" width="${cardWidth}" height="${cardHeight}" rx="16" fill="${fillBg}" stroke="${strokeColor}" stroke-width="${strokeWidth}" ${isActive ? 'filter="url(#glow)"' : ''} />
          
          <!-- Node Type Badge -->
          <rect x="${pos.x + 12}" y="${pos.y + 10}" width="${isResult ? 75 : 65}" height="16" rx="8" fill="${isResult ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)'}" />
          <text x="${pos.x + 18}" y="${pos.y + 21}" fill="${isResult ? '#fbbf24' : '#34d399'}" font-size="9" font-family="Outfit, sans-serif" font-weight="700">
            ${badgeText}
          </text>

          <!-- Node Title Text -->
          <text x="${pos.x + 12}" y="${pos.y + 44}" fill="#f8fafc" font-size="12" font-family="Outfit, sans-serif" font-weight="700">
            ${this._escapeSVG(title.substr(0, 20))}${title.length > 20 ? '...' : ''}
          </text>

          <!-- Node Subtitle / Options hint -->
          <text x="${pos.x + 12}" y="${pos.y + 62}" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif">
            ${isResult ? 'Klik untuk lihat hasil' : (n.options ? `${n.options.length} cabang pilihan` : '0 cabang')}
          </text>
        </g>
      `;
    });

    svgHTML += `</g></svg>`;

    containerEl.innerHTML = svgHTML;
  }

  /**
   * Export flowchart data to Mermaid JS syntax string
   */
  exportToMermaid(flowData) {
    if (!flowData || !flowData.nodes) return '';
    let code = `graph TD\n`;
    const nodes = flowData.nodes;

    Object.keys(nodes).forEach(id => {
      const n = nodes[id];
      const title = (n.title_id || n.q_id || n.title || n.q || id).replace(/["\n]/g, ' ');
      
      if (n.isResult) {
        code += `  ${id}["🏁 ${title}"]\n`;
      } else {
        code += `  ${id}["❓ ${title}"]\n`;
        if (n.options) {
          n.options.forEach(opt => {
            const label = (opt.text_id || opt.text || 'Opsi').replace(/["\n]/g, ' ');
            const target = opt.next || opt.targetId;
            code += `  ${id} -->|"${label}"| ${target}\n`;
          });
        }
      }
    });

    return code;
  }

  _calculateTreeLayout(flowData) {
    const nodes = flowData.nodes;
    const startId = flowData.startNode || Object.keys(nodes)[0];
    const positions = {};
    const levels = {};
    const visited = new Set();

    const queue = [{ id: startId, level: 0 }];
    levels[startId] = 0;

    while (queue.length > 0) {
      const { id, level } = queue.shift();
      if (visited.has(id)) continue;
      visited.add(id);

      const n = nodes[id];
      if (n && n.options) {
        n.options.forEach(opt => {
          const childId = opt.next || opt.targetId;
          if (childId && nodes[childId] && !visited.has(childId)) {
            levels[childId] = Math.max(levels[childId] || 0, level + 1);
            queue.push({ id: childId, level: level + 1 });
          }
        });
      }
    }

    // Place remaining unvisited nodes
    Object.keys(nodes).forEach(id => {
      if (levels[id] === undefined) levels[id] = 0;
    });

    // Group nodes by level
    const levelGroups = {};
    Object.keys(nodes).forEach(id => {
      const lvl = levels[id];
      if (!levelGroups[lvl]) levelGroups[lvl] = [];
      levelGroups[lvl].push(id);
    });

    let maxX = 0;
    let maxY = 0;

    Object.keys(levelGroups).forEach(lvlStr => {
      const lvl = parseInt(lvlStr);
      const group = levelGroups[lvl];
      const startY = 50;
      const x = 50 + lvl * 260;

      group.forEach((id, idx) => {
        const y = startY + idx * 110;
        positions[id] = { x, y };
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      });
    });

    return { positions, maxX, maxY };
  }

  _escapeSVG(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[m]));
  }
}
