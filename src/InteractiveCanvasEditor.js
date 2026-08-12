/**
 * InteractiveCanvasEditor.js - Visual Drag & Drop WYSIWYG Flowchart Board
 * Miro/Figma-style visual diagram studio with floating toolbar, drag-and-drop cards, auto-layout tree, and live SVG arrows.
 */

export class InteractiveCanvasEditor {
  constructor(options = {}) {
    this.container = options.container || null;
    this.nodes = options.nodes || [];
    this.onChange = options.onChange || null;
    this.draggingNode = null;
    this.dragOffset = { x: 0, y: 0 };
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }

  setNodes(nodes) {
    this.nodes = nodes || [];
    this.render();
  }

  getNodes() {
    return this.nodes;
  }

  render() {
    if (!this.container) return;

    // Calculate layout positions for nodes if missing
    this._ensurePositions();

    this.container.innerHTML = '';
    this.container.className = 'relative w-full min-h-[580px] bg-slate-950/95 rounded-3xl border-2 border-emerald-500/30 overflow-hidden select-none shadow-2xl flex flex-col';

    // 1. Floating Diagram Studio Toolbar (Miro / Figma style)
    const toolbar = document.createElement('div');
    toolbar.className = 'absolute top-4 left-4 z-30 flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl';
    toolbar.innerHTML = `
      <button type="button" data-toolbar="add-question" class="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm">
        <span class="material-symbols-outlined text-sm">help</span>
        <span>+ Node Pertanyaan</span>
      </button>

      <button type="button" data-toolbar="add-result" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm">
        <span class="material-symbols-outlined text-sm">flag</span>
        <span>+ Node Hasil</span>
      </button>

      <div class="h-4 w-px bg-white/20 mx-0.5"></div>

      <button type="button" data-toolbar="auto-arrange" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm border border-white/10" title="Rapikan Tata Letak Diagram Otomatis">
        <span class="material-symbols-outlined text-sm text-emerald-400">auto_fix_high</span>
        <span>⚡ Rapikan Diagram</span>
      </button>

      <div class="h-4 w-px bg-white/20 mx-0.5"></div>

      <button type="button" data-toolbar="zoom-reset" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1 transition-all border border-white/10" title="Reset Pandangan Diagram">
        <span class="material-symbols-outlined text-sm">fit_screen</span>
      </button>
    `;
    this.container.appendChild(toolbar);

    // SVG Connections Overlay Layer
    const svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOverlay.setAttribute('class', 'absolute inset-0 w-full h-full pointer-events-none z-10');
    svgOverlay.setAttribute('id', 'canvas-svg-overlay');
    
    svgOverlay.innerHTML = `
      <defs>
        <marker id="editorArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
        </marker>
        <pattern id="editorGrid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#editorGrid)" />
      <g id="editor-svg-paths"></g>
    `;
    this.container.appendChild(svgOverlay);

    // Nodes Container Layer
    const nodesLayer = document.createElement('div');
    nodesLayer.className = 'absolute inset-0 z-20 pointer-events-auto overflow-auto';
    nodesLayer.id = 'canvas-nodes-layer';
    this.container.appendChild(nodesLayer);

    // Render Each Draggable Node Card
    this.nodes.forEach((node, idx) => {
      const card = this._createNodeCard(node, idx);
      nodesLayer.appendChild(card);
    });

    // Render SVG Arrows
    this._updateSVGConnections();

    // Attach Toolbar Listener
    toolbar.addEventListener('click', (e) => this._handleToolbarClick(e));

    // Global Listeners for Smooth Dragging
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseup', this._onMouseUp);
  }

  _createNodeCard(node, idx) {
    const card = document.createElement('div');
    card.id = `editor-node-${node.id}`;
    card.className = `absolute w-72 rounded-2xl p-4 transition-shadow shadow-lg border-2 ${
      node.isResult
        ? 'bg-amber-950/80 border-amber-500/50 text-amber-100 shadow-amber-950/50'
        : 'bg-slate-900/90 border-emerald-500/40 text-slate-100 shadow-emerald-950/50'
    } cursor-grab active:cursor-grabbing backdrop-blur-md`;
    card.style.left = `${node.x || 40 + idx * 300}px`;
    card.style.top = `${node.y || 70 + (idx % 3) * 150}px`;

    // Card Header Controls
    const isResult = !!node.isResult;
    card.innerHTML = `
      <div class="flex items-center justify-between pb-2 mb-2 border-b border-white/10 drag-handle">
        <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
          <span class="px-2 py-0.5 rounded-md text-[10px] font-black ${isResult ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}">
            ${isResult ? '🏁 HASIL' : '❓ PERTANYAAN'}
          </span>
          <span class="text-slate-400 font-mono text-[11px]">#${node.id}</span>
        </div>

        <div class="flex items-center gap-1">
          <!-- Toggle Node Type -->
          <button type="button" class="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10" title="Ubah Jenis Node (Pertanyaan vs Hasil)" data-action="toggle-type" data-id="${node.id}">
            <span class="material-symbols-outlined text-sm">${isResult ? 'help' : 'flag'}</span>
          </button>
          <!-- Delete Node -->
          <button type="button" class="p-1 text-slate-400 hover:text-red-400 rounded hover:bg-white/10" title="Hapus Node" data-action="delete-node" data-id="${node.id}">
            <span class="material-symbols-outlined text-sm">delete</span>
          </button>
        </div>
      </div>

      <!-- Content Fields (Inline Editable) -->
      ${
        isResult
          ? `
            <div class="space-y-2">
              <div>
                <label class="text-[10px] font-bold text-amber-300 uppercase">Judul Hasil</label>
                <input type="text" value="${this._escapeHtml(node.title_id || node.q_id || 'Hasil Akhir')}" data-field="title_id" data-id="${node.id}" class="w-full p-1.5 rounded-lg bg-black/40 border border-amber-500/30 text-xs font-bold text-amber-200 focus:outline-none focus:border-amber-400" />
              </div>
              <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase">Pesan / Solusi</label>
                <textarea rows="2" data-field="msg_id" data-id="${node.id}" class="w-full p-1.5 rounded-lg bg-black/40 border border-amber-500/20 text-xs text-slate-200 focus:outline-none focus:border-amber-400">${this._escapeHtml(node.msg_id || '')}</textarea>
              </div>
            </div>
          `
          : `
            <div class="space-y-2">
              <div>
                <label class="text-[10px] font-bold text-emerald-400 uppercase">Pertanyaan Node</label>
                <input type="text" value="${this._escapeHtml(node.q_id || 'Pertanyaan baru?')}" data-field="q_id" data-id="${node.id}" class="w-full p-1.5 rounded-lg bg-black/40 border border-emerald-500/30 text-xs font-bold text-emerald-200 focus:outline-none focus:border-emerald-400" />
              </div>

              <!-- Options & Branch Target Selector ("Ini kmn ini kesitu") -->
              <div class="space-y-1.5 pt-1">
                <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Cabang Pilihan (Button)</span>
                  <button type="button" data-action="add-option" data-id="${node.id}" class="text-emerald-400 hover:underline text-[10px] font-bold flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-xs">add</span> Opsi
                  </button>
                </div>

                ${(node.options || []).map((opt, optIdx) => `
                  <div class="p-2 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <div class="flex items-center gap-1">
                      <input type="text" value="${this._escapeHtml(opt.text_id || 'Opsi')}" data-field="option-text" data-id="${node.id}" data-optidx="${optIdx}" class="flex-grow p-1 rounded bg-slate-800 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-emerald-400" placeholder="Teks Tombol" />
                      <button type="button" data-action="delete-option" data-id="${node.id}" data-optidx="${optIdx}" class="text-slate-500 hover:text-red-400 p-0.5">
                        <span class="material-symbols-outlined text-xs">close</span>
                      </button>
                    </div>

                    <!-- Target Wiring Selector ("Ke Mana?") -->
                    <div class="flex items-center gap-1 text-[10px]">
                      <span class="text-slate-400">➔ Target:</span>
                      <select data-field="option-target" data-id="${node.id}" data-optidx="${optIdx}" class="flex-grow p-1 rounded bg-slate-800 border border-emerald-500/20 text-xs font-semibold text-emerald-300 focus:outline-none focus:border-emerald-400">
                        ${this.nodes.map(targetNode => `
                          <option value="${targetNode.id}" ${opt.targetId === targetNode.id ? 'selected' : ''}>
                            ${targetNode.id === node.id ? '(Self)' : ''} #${targetNode.id}: ${(targetNode.q_id || targetNode.title_id || 'Node').substring(0, 14)}
                          </option>
                        `).join('')}
                      </select>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `
      }

      <!-- Quick Add Connected Child Node Button (+) -->
      <div class="mt-3 pt-2 border-t border-white/10 flex justify-center">
        <button type="button" data-action="spawn-child" data-id="${node.id}" class="w-full py-1.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs flex items-center justify-center gap-1 transition-all shadow-sm">
          <span class="material-symbols-outlined text-sm">add_circle</span>
          <span>Tambah Cabang + Node Baru</span>
        </button>
      </div>
    `;

    // Event Listeners for Dragging & Input Changes
    card.addEventListener('mousedown', (e) => {
      // Don't drag if clicking input, textarea, select, button, label, etc.
      if (e.target.closest('input, textarea, select, button, label, option')) return;
      this.draggingNode = node;
      const rect = card.getBoundingClientRect();
      this.dragOffset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    });

    // Delegated Change & Click Events
    card.addEventListener('change', (e) => this._handleFieldChange(e, node));
    card.addEventListener('input', (e) => this._handleFieldChange(e, node));
    card.addEventListener('click', (e) => this._handleActionClick(e, node));

    return card;
  }

  _onMouseMove(e) {
    if (!this.draggingNode || !this.container) return;

    const containerRect = this.container.getBoundingClientRect();
    let x = e.clientX - containerRect.left - this.dragOffset.x;
    let y = e.clientY - containerRect.top - this.dragOffset.y;

    x = Math.max(10, Math.min(containerRect.width - 290, x));
    y = Math.max(10, Math.min(containerRect.height - 180, y));

    this.draggingNode.x = x;
    this.draggingNode.y = y;

    const cardEl = document.getElementById(`editor-node-${this.draggingNode.id}`);
    if (cardEl) {
      cardEl.style.left = `${x}px`;
      cardEl.style.top = `${y}px`;
    }

    this._updateSVGConnections();
  }

  _onMouseUp() {
    if (this.draggingNode) {
      this.draggingNode = null;
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  _updateSVGConnections() {
    const svgGroup = document.getElementById('editor-svg-paths');
    if (!svgGroup || !this.container) return;

    let svgHTML = '';

    this.nodes.forEach(node => {
      if (node.isResult || !node.options) return;

      const sourceEl = document.getElementById(`editor-node-${node.id}`);
      if (!sourceEl) return;

      const sourceX = (node.x || 40) + 280; // Right edge
      const sourceY = (node.y || 40) + 80;  // Center height

      node.options.forEach(opt => {
        const targetId = opt.targetId || opt.next;
        const targetNode = this.nodes.find(n => n.id === targetId);
        if (!targetNode) return;

        const targetX = targetNode.x || 40; // Left edge
        const targetY = (targetNode.y || 40) + 50;

        const dx = Math.max(40, (targetX - sourceX) / 2);
        const pathD = `M ${sourceX} ${sourceY} C ${sourceX + dx} ${sourceY}, ${targetX - dx} ${targetY}, ${targetX} ${targetY}`;
        const label = opt.text_id || opt.text || 'Opsi';

        svgHTML += `
          <path d="${pathD}" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#editorArrow)" />
          <text x="${(sourceX + targetX) / 2}" y="${(sourceY + targetY) / 2 - 6}" fill="#34d399" font-size="10" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle" class="pointer-events-none">
            ${this._escapeHtml(label.substr(0, 16))}
          </text>
        `;
      });
    });

    svgGroup.innerHTML = svgHTML;
  }

  _handleToolbarClick(e) {
    const btn = e.target.closest('[data-toolbar]');
    if (!btn) return;

    const action = btn.dataset.toolbar;

    if (action === 'add-question') {
      const newId = 'node_' + Date.now().toString(36);
      this.nodes.push({
        id: newId,
        isResult: false,
        q_id: 'Pertanyaan Baru?',
        q_en: 'New Question?',
        x: 80 + (this.nodes.length % 3) * 310,
        y: 80 + Math.floor(this.nodes.length / 3) * 180,
        options: []
      });
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'add-result') {
      const newId = 'res_' + Date.now().toString(36);
      this.nodes.push({
        id: newId,
        isResult: true,
        title_id: 'Hasil Kesimpulan Baru',
        title_en: 'New Conclusion Result',
        msg_id: 'Pesan akhir flowchart.',
        msg_en: 'Final message.',
        x: 80 + (this.nodes.length % 3) * 310,
        y: 80 + Math.floor(this.nodes.length / 3) * 180
      });
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'auto-arrange' || action === 'zoom-reset') {
      this.autoArrangeTreeLayout();
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  autoArrangeTreeLayout() {
    const startNode = this.nodes[0];
    if (!startNode) return;

    const levels = {};
    const queue = [{ id: startNode.id, level: 0 }];
    const visited = new Set();

    while (queue.length > 0) {
      const { id, level } = queue.shift();
      if (visited.has(id)) continue;
      visited.add(id);

      levels[id] = level;
      const n = this.nodes.find(item => item.id === id);
      if (n && n.options) {
        n.options.forEach(opt => {
          const childId = opt.targetId || opt.next;
          if (childId && !visited.has(childId)) {
            queue.push({ id: childId, level: level + 1 });
          }
        });
      }
    }

    // Assign unvisited nodes level 0
    this.nodes.forEach(n => {
      if (levels[n.id] === undefined) levels[n.id] = 0;
    });

    // Group nodes by level and compute x, y
    const levelGroups = {};
    this.nodes.forEach(n => {
      const lvl = levels[n.id];
      if (!levelGroups[lvl]) levelGroups[lvl] = [];
      levelGroups[lvl].push(n);
    });

    Object.keys(levelGroups).forEach(lvlStr => {
      const lvl = parseInt(lvlStr);
      const group = levelGroups[lvl];
      const startX = 40 + lvl * 310;
      const startY = 80;

      group.forEach((n, idx) => {
        n.x = startX;
        n.y = startY + idx * 220;
      });
    });
  }

  _handleFieldChange(e, node) {
    const field = e.target.dataset.field;
    if (!field) return;

    if (field === 'title_id' || field === 'q_id' || field === 'msg_id') {
      node[field] = e.target.value;
      if (field === 'title_id') node.title_en = e.target.value;
      if (field === 'q_id') node.q_en = e.target.value;
      if (field === 'msg_id') node.msg_en = e.target.value;
    } else if (field === 'option-text') {
      const optIdx = parseInt(e.target.dataset.optidx);
      if (node.options && node.options[optIdx]) {
        node.options[optIdx].text_id = e.target.value;
        node.options[optIdx].text_en = e.target.value;
        this._updateSVGConnections();
      }
    } else if (field === 'option-target') {
      const optIdx = parseInt(e.target.dataset.optidx);
      if (node.options && node.options[optIdx]) {
        node.options[optIdx].targetId = e.target.value;
        this._updateSVGConnections();
      }
    }

    if (this.onChange) this.onChange(this.nodes);
  }

  _handleActionClick(e, node) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;

    if (action === 'toggle-type') {
      node.isResult = !node.isResult;
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'delete-node') {
      if (this.nodes.length <= 1) {
        alert('Minimal harus ada 1 node!');
        return;
      }
      this.nodes = this.nodes.filter(n => n.id !== node.id);
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'add-option') {
      if (!node.options) node.options = [];
      const nextTarget = this.nodes.find(n => n.id !== node.id) || node;
      node.options.push({
        text_id: `Opsi ${node.options.length + 1}`,
        text_en: `Option ${node.options.length + 1}`,
        targetId: nextTarget.id,
        btnStyle: 'btn-primary'
      });
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'delete-option') {
      const optIdx = parseInt(btn.dataset.optidx);
      if (node.options && node.options[optIdx]) {
        node.options.splice(optIdx, 1);
        this.render();
        if (this.onChange) this.onChange(this.nodes);
      }
    } else if (action === 'spawn-child') {
      const newId = 'node_' + Date.now().toString(36);
      const newChildNode = {
        id: newId,
        isResult: false,
        q_id: 'Pertanyaan Lanjutan?',
        q_en: 'Follow-up Question?',
        x: (node.x || 40) + 310,
        y: (node.y || 40) + (node.options ? node.options.length * 60 : 0),
        options: []
      };

      if (!node.options) node.options = [];
      node.options.push({
        text_id: `Lanjut ke #${newId.substr(-4)}`,
        text_en: `Proceed to #${newId.substr(-4)}`,
        targetId: newId,
        btnStyle: 'btn-primary'
      });

      this.nodes.push(newChildNode);
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  _ensurePositions() {
    this.nodes.forEach((n, idx) => {
      if (n.x === undefined) n.x = 40 + (idx % 3) * 310;
      if (n.y === undefined) n.y = 80 + Math.floor(idx / 3) * 220;
    });
  }

  _escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[m]));
  }
}
