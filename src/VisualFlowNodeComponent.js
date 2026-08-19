/**
 * VisualFlowNodeComponent.js - High-Performance 60fps Flowchart Studio Engine
 * Refactored for ultra-lightweight DOM performance and 100% precise SVG arrow connector tracking.
 */

export class VisualFlowNodeComponent {
  constructor(options = {}) {
    this.container = options.container || null;
    this.nodes = options.nodes || [];
    this.onChange = options.onChange || null;
    this.onBranchSelected = options.onBranchSelected || null;
    this.onNodeSelect = options.onNodeSelect || null;
    
    this.draggingNode = null;
    this.dragOffset = { x: 0, y: 0 };
    this.viewMode = options.viewMode || 'visual'; // 'visual' or 'list'
    this.animFrameId = null;

    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }

  setNodes(nodes) {
    this.nodes = Array.isArray(nodes) ? nodes : this._convertObjectToArray(nodes);
    this._ensurePositions();
    this.render();
  }

  getNodes() {
    return this.nodes;
  }

  getFlowDataObject() {
    const nodesObj = {};
    this.nodes.forEach(n => {
      nodesObj[n.id] = {
        id: n.id,
        isResult: !!n.isResult,
        tag_id: n.tag_id || (n.isResult ? 'Hasil Akhir' : 'Langkah'),
        tag_en: n.tag_en || (n.isResult ? 'Conclusion' : 'Step'),
        q_id: n.q_id || n.title_id || 'Pertanyaan?',
        q_en: n.q_en || n.title_en || 'Question?',
        sub_id: n.sub_id || n.msg_id || '',
        sub_en: n.sub_en || n.msg_en || '',
        msg_id: n.msg_id || '',
        msg_en: n.msg_en || '',
        adv_id: n.adv_id || '',
        adv_en: n.adv_en || '',
        title_id: n.title_id || n.q_id || 'Judul',
        title_en: n.title_en || n.q_en || 'Title',
        options: n.options || [],
        x: n.x,
        y: n.y
      };
    });

    return {
      id: 'flow_' + Date.now(),
      title_id: 'Interactive Studio Flowchart',
      title_en: 'Interactive Studio Flowchart',
      startNode: this.nodes[0] ? this.nodes[0].id : 'node_start',
      nodes: nodesObj
    };
  }

  render() {
    if (!this.container) return;

    this._ensurePositions();
    this.container.innerHTML = '';
    
    const isFullscreen = document.body.classList.contains('fullscreen-create-active') || document.getElementById('sec-studio')?.classList.contains('fullscreen-studio-active');
    
    this.container.className = 'visual-flow-canvas-wrapper relative w-full min-h-[600px] rounded-3xl overflow-hidden select-none border-2 border-primary/20 shadow-terra-deep flex flex-col bg-background';

    // 1. Studio Action Header Toolbar (Lightweight & Clean)
    const topBar = document.createElement('div');
    topBar.className = 'relative z-30 flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 bg-surface-container/95 backdrop-blur-md border-b border-primary/15';
    topBar.innerHTML = `
      <!-- View Mode Toggle Tabs -->
      <div class="inline-flex items-center gap-1 p-1 bg-surface rounded-2xl border border-primary/20 shadow-sm ${isFullscreen ? 'hidden' : ''}">
        <button type="button" data-view-btn="visual" class="px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${this.viewMode === 'visual' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}">
          <span class="material-symbols-outlined text-base">hub</span>
          <span>Visual Diagram</span>
        </button>
        <button type="button" data-view-btn="list" class="px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${this.viewMode === 'list' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}">
          <span class="material-symbols-outlined text-base">format_list_bulleted</span>
          <span>List Node</span>
        </button>
      </div>

      <!-- Quick Canvas Actions Toolbar (Enlarged Buttons) -->
      <div class="flex items-center gap-2.5 flex-wrap">
        <button type="button" data-canvas-action="add-question" class="py-2.5 px-4 rounded-xl bg-primary text-on-primary hover:bg-primary/90 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all shadow-sm hover:scale-105" title="Tambah Langkah Pertanyaan">
          <span class="material-symbols-outlined text-base">help</span>
          <span>+ Pertanyaan</span>
        </button>

        <button type="button" data-canvas-action="add-result" class="py-2.5 px-4 rounded-xl bg-tertiary text-on-primary hover:bg-tertiary/90 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all shadow-sm hover:scale-105" title="Tambah Node Hasil">
          <span class="material-symbols-outlined text-base">flag</span>
          <span>+ Hasil</span>
        </button>

        <button type="button" class="py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all shadow-sm hover:scale-105" onclick="app.saveAndPublishFlowchart()" title="Simpan Flowchart">
          <span class="material-symbols-outlined text-base">save</span>
          <span>Simpan Flowchart</span>
        </button>

        <div class="h-5 w-px bg-outline-variant/30 mx-1 ${isFullscreen ? 'hidden' : ''}"></div>

        <button type="button" data-canvas-action="auto-layout" class="py-2 px-3 rounded-xl bg-surface hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs font-bold items-center gap-1 transition-all border border-outline-variant/30 ${isFullscreen ? 'hidden' : 'flex'}" title="Rapikan Tata Letak">
          <span class="material-symbols-outlined text-sm text-primary">auto_fix_high</span>
          <span class="hidden sm:inline">Rapikan Diagram</span>
        </button>

        <button type="button" data-canvas-action="toggle-fullscreen" class="py-2.5 px-4 rounded-xl bg-surface-container hover:bg-primary/20 text-primary font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all border border-primary/30 shadow-sm" title="Layar Penuh Canvas">
          <span class="material-symbols-outlined text-base">${isFullscreen ? 'fullscreen_exit' : 'fullscreen'}</span>
          <span>${isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh'}</span>
        </button>
      </div>
    `;
    this.container.appendChild(topBar);

    // 2. View Container
    if (this.viewMode === 'list') {
      this.container.appendChild(this._renderListView());
    } else {
      this.container.appendChild(this._renderVisualCanvasView());
    }

    // Attach Topbar Listener
    topBar.addEventListener('click', (e) => this._handleTopBarClick(e));

    // Global Listeners for Dragging (Mouse & Touch)
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('touchmove', this._onMouseMove);
    window.removeEventListener('touchend', this._onMouseUp);

    window.addEventListener('mousemove', this._onMouseMove, { passive: false });
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('touchmove', this._onMouseMove, { passive: false });
    window.addEventListener('touchend', this._onMouseUp);
  }

  // --- Visual Studio Canvas with SVG Overlay ---
  _renderVisualCanvasView() {
    const canvasViewport = document.createElement('div');
    canvasViewport.className = 'relative flex-grow w-full min-h-[540px] overflow-auto visual-grid-pattern bg-background';
    canvasViewport.id = 'visual-canvas-viewport';

    // SVG Layer for Arrow Connections
    const svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOverlay.setAttribute('class', 'absolute inset-0 w-full h-full pointer-events-none z-10');
    svgOverlay.setAttribute('id', 'visual-flow-svg');
    
    svgOverlay.innerHTML = `
      <defs>
        <marker id="flowArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--color-primary))" />
        </marker>
        <marker id="flowArrowAlt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--color-tertiary))" />
        </marker>
      </defs>
      <g id="svg-flow-edges"></g>
    `;
    canvasViewport.appendChild(svgOverlay);

    // Nodes Container Layer
    const nodesLayer = document.createElement('div');
    nodesLayer.className = 'absolute inset-0 z-20 pointer-events-auto overflow-visible min-w-[2000px] min-h-[2000px]';
    nodesLayer.id = 'visual-flow-nodes-layer';
    canvasViewport.appendChild(nodesLayer);

    // Render Nodes
    this.nodes.forEach((node, idx) => {
      const nodeEl = this._createNodeCard(node, idx);
      nodesLayer.appendChild(nodeEl);
    });

    // Update SVG arrows after DOM insertion
    requestAnimationFrame(() => this._updateSVGConnections());

    return canvasViewport;
  }

  // --- Clean & High-Performance Node Card ---
  _createNodeCard(node, idx) {
    const card = document.createElement('div');
    card.id = `flow-node-${node.id}`;
    card.className = `visual-node-card absolute w-72 sm:w-80 rounded-2xl p-4 transition-shadow duration-150 border-2 ${
      node.isResult
        ? 'bg-surface/98 border-tertiary/60 shadow-terra-soft text-on-surface'
        : 'bg-surface/98 border-primary/50 shadow-terra-deep text-on-surface'
    } cursor-grab active:cursor-grabbing backdrop-blur-md group select-none`;
    card.style.left = `${node.x || 60 + idx * 340}px`;
    card.style.top = `${node.y || 80 + (idx % 2) * 220}px`;

    const isResult = !!node.isResult;
    const titleText = node.q_id || node.title_id || (isResult ? 'Hasil Kesimpulan' : 'Pertanyaan Utama');
    const subText = node.sub_id || node.msg_id || '';
    const tagText = node.tag_id || (isResult ? '🏁 HASIL' : `❓ LANGKAH #${idx + 1}`);

    card.innerHTML = `
      <!-- 4 Direction Handles (Top, Right, Bottom, Left) -->
      <div class="wing-handle wing-top" data-direction="top" data-node-id="${node.id}" title="Tambah Cabang Ke Atas">
        <span class="material-symbols-outlined text-sm">expand_less</span>
      </div>
      <div class="wing-handle wing-right" data-direction="right" data-node-id="${node.id}" title="Tambah Cabang Ke Kanan">
        <span class="material-symbols-outlined text-sm">chevron_right</span>
      </div>
      <div class="wing-handle wing-bottom" data-direction="bottom" data-node-id="${node.id}" title="Tambah Cabang Ke Bawah">
        <span class="material-symbols-outlined text-sm">expand_more</span>
      </div>
      <div class="wing-handle wing-left" data-direction="left" data-node-id="${node.id}" title="Tambah Cabang Ke Kiri">
        <span class="material-symbols-outlined text-sm">chevron_left</span>
      </div>

      <!-- Node Card Header -->
      <div class="flex items-center justify-between pb-2 mb-2 border-b border-primary/10 drag-handle">
        <div class="inline-flex items-center gap-1.5">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
            isResult ? 'bg-tertiary/15 text-tertiary' : 'bg-primary/15 text-primary'
          }">
            ${this._escapeHtml(tagText)}
          </span>
          <span class="text-[10px] font-mono text-on-surface-variant/60">#${node.id}</span>
        </div>

        <div class="flex items-center gap-1">
          <button type="button" class="p-1 text-on-surface-variant/60 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors" data-node-action="toggle-type" data-id="${node.id}" title="Ubah Tipe (Pertanyaan/Hasil)">
            <span class="material-symbols-outlined text-sm">${isResult ? 'help' : 'flag'}</span>
          </button>
          <button type="button" class="p-1 text-on-surface-variant/60 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition-colors" data-node-action="delete-node" data-id="${node.id}" title="Hapus Node">
            <span class="material-symbols-outlined text-sm">delete</span>
          </button>
        </div>
      </div>

      <!-- Card Text Content Block -->
      <div class="space-y-2">
        <div>
          <label class="text-[10px] font-extrabold uppercase tracking-wider text-primary block mb-1">
            ${isResult ? 'Judul Hasil' : 'Pertanyaan Decision'}
          </label>
          <input type="text" value="${this._escapeHtml(titleText)}" data-node-field="title" data-id="${node.id}" class="w-full p-2 rounded-xl bg-surface-container border border-primary/20 font-bold text-xs text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="Tulis pertanyaan..." />
        </div>

        <div>
          <label class="text-[10px] font-extrabold uppercase tracking-wider text-on-surface-variant/70 block mb-1">
            ${isResult ? 'Pesan / Solusi' : 'Deskripsi Singkat'}
          </label>
          <textarea rows="2" data-node-field="sub" data-id="${node.id}" class="w-full p-2 rounded-xl bg-surface-container border border-primary/20 text-[11px] text-on-surface-variant focus:outline-none focus:border-primary transition-all resize-none" placeholder="Tulis deskripsi...">${this._escapeHtml(subText)}</textarea>
        </div>
      </div>

      <!-- Options / Branch Buttons -->
      ${!isResult ? `
        <div class="mt-3 pt-2 border-t border-primary/10 space-y-1.5">
          <div class="flex items-center justify-between text-[10px] font-extrabold text-on-surface-variant/70 uppercase">
            <span>Cabang Opsi:</span>
            <button type="button" data-node-action="add-option" data-id="${node.id}" class="text-primary hover:underline font-extrabold flex items-center gap-0.5">
              <span class="material-symbols-outlined text-xs">add</span> Opsi
            </button>
          </div>

          ${(node.options || []).map((opt, oIdx) => `
            <div class="p-1.5 rounded-xl bg-surface-container border border-primary/15 space-y-1">
              <div class="flex items-center gap-1">
                <input type="text" value="${this._escapeHtml(opt.text_id || 'Opsi')}" data-node-field="option-text" data-id="${node.id}" data-opt-idx="${oIdx}" class="flex-grow p-1 rounded-lg bg-surface border border-primary/20 text-xs font-bold text-on-surface focus:outline-none focus:border-primary" placeholder="Teks Tombol" />
                <button type="button" data-node-action="remove-option" data-id="${node.id}" data-opt-idx="${oIdx}" class="text-on-surface-variant/50 hover:text-red-500 p-0.5">
                  <span class="material-symbols-outlined text-xs">close</span>
                </button>
              </div>

              <div class="flex items-center gap-1 text-[10px]">
                <span class="text-on-surface-variant/70">➔ Target:</span>
                <select data-node-field="option-target" data-id="${node.id}" data-opt-idx="${oIdx}" class="flex-grow p-1 rounded-lg bg-surface border border-primary/20 text-xs font-semibold text-primary focus:outline-none focus:border-primary">
                  ${this.nodes.map(targetNode => `
                    <option value="${targetNode.id}" ${opt.targetId === targetNode.id || opt.next === targetNode.id ? 'selected' : ''}>
                      #${targetNode.id}: ${(targetNode.q_id || targetNode.title_id || 'Node').substring(0, 16)}
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Quick Add Connected Step Button (+) -->
      <div class="mt-3 pt-2 border-t border-primary/10">
        <button type="button" data-node-action="spawn-child" data-id="${node.id}" class="w-full py-2 px-3 rounded-xl bg-primary/15 hover:bg-primary text-primary hover:text-on-primary font-extrabold text-xs flex items-center justify-center gap-1 transition-all shadow-sm">
          <span class="material-symbols-outlined text-base">add_circle</span>
          <span>+ Tambah Langkah Terhubung</span>
        </button>
      </div>
    `;

    // Mouse & Touch Dragging Handlers
    const onStartDrag = (clientX, clientY, target) => {
      if (target.closest('input, textarea, select, button, .wing-handle')) return;
      this.draggingNode = node;
      const cardRect = card.getBoundingClientRect();
      this.dragOffset = {
        x: clientX - cardRect.left,
        y: clientY - cardRect.top
      };
      card.classList.add('z-30');
    };

    card.addEventListener('mousedown', (e) => onStartDrag(e.clientX, e.clientY, e.target));
    card.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) onStartDrag(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }, { passive: true });

    // Delegated Input & Click Events inside card
    card.addEventListener('input', (e) => this._handleNodeInput(e, node));
    card.addEventListener('change', (e) => this._handleNodeInput(e, node));
    card.addEventListener('click', (e) => this._handleNodeCardClick(e, node));

    return card;
  }

  // --- 100% Precise 60fps Geometric SVG Connection Engine ---
  _updateSVGConnections() {
    const svgGroup = document.getElementById('svg-flow-edges');
    if (!svgGroup || !this.container) return;

    let svgHTML = '';

    this.nodes.forEach(source => {
      if (source.isResult || !source.options || source.options.length === 0) return;

      const sourceEl = document.getElementById(`flow-node-${source.id}`);
      if (!sourceEl) return;

      const sourceX = source.x || 60;
      const sourceY = source.y || 80;
      const sourceW = sourceEl.offsetWidth || 320;
      const sourceH = sourceEl.offsetHeight || 210;

      source.options.forEach(opt => {
        const targetId = opt.targetId || opt.next;
        const targetNode = this.nodes.find(n => n.id === targetId);
        if (!targetNode) return;

        const targetEl = document.getElementById(`flow-node-${targetId}`);
        const targetX = targetNode.x || 60;
        const targetY = targetNode.y || 80;
        const targetW = targetEl ? targetEl.offsetWidth : 320;
        const targetH = targetEl ? targetEl.offsetHeight : 210;

        // Calculate center-to-center vector angle to determine exact edge anchors
        const sourceCenter = { x: sourceX + sourceW / 2, y: sourceY + sourceH / 2 };
        const targetCenter = { x: targetX + targetW / 2, y: targetY + targetH / 2 };

        const dx = targetCenter.x - sourceCenter.x;
        const dy = targetCenter.y - sourceCenter.y;

        // Determine edge exit for source and entry for target
        let startPt, endPt;

        if (Math.abs(dx) >= Math.abs(dy)) {
          // Horizontal flow (Right or Left)
          if (dx >= 0) {
            startPt = { x: sourceX + sourceW, y: sourceCenter.y };
            endPt = { x: targetX, y: targetCenter.y };
          } else {
            startPt = { x: sourceX, y: sourceCenter.y };
            endPt = { x: targetX + targetW, y: targetCenter.y };
          }
        } else {
          // Vertical flow (Bottom or Top)
          if (dy >= 0) {
            startPt = { x: sourceCenter.x, y: sourceY + sourceH };
            endPt = { x: targetCenter.x, y: targetY };
          } else {
            startPt = { x: sourceCenter.x, y: sourceY };
            endPt = { x: targetCenter.x, y: targetY + targetH };
          }
        }

        // Cubic Bezier curve control points
        const curveOffset = Math.min(120, Math.max(50, Math.hypot(dx, dy) * 0.3));
        let cpx1 = startPt.x, cpy1 = startPt.y;
        let cpx2 = endPt.x, cpy2 = endPt.y;

        if (Math.abs(dx) >= Math.abs(dy)) {
          cpx1 += dx >= 0 ? curveOffset : -curveOffset;
          cpx2 += dx >= 0 ? -curveOffset : curveOffset;
        } else {
          cpy1 += dy >= 0 ? curveOffset : -curveOffset;
          cpy2 += dy >= 0 ? -curveOffset : curveOffset;
        }

        const pathD = `M ${startPt.x} ${startPt.y} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${endPt.x} ${endPt.y}`;
        const isAlt = opt.text_id && opt.text_id.toUpperCase().includes('TIDAK');
        const strokeColor = isAlt ? 'rgb(var(--color-tertiary))' : 'rgb(var(--color-primary))';
        const marker = isAlt ? 'url(#flowArrowAlt)' : 'url(#flowArrow)';
        const label = opt.text_id || opt.text || 'Lanjut';

        const midX = (startPt.x + endPt.x) / 2;
        const midY = (startPt.y + endPt.y) / 2;

        svgHTML += `
          <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" marker-end="${marker}" class="transition-all duration-75" />
          
          <!-- Badge Label on Line -->
          <g transform="translate(${midX}, ${midY})">
            <rect x="-35" y="-12" width="70" height="24" rx="12" fill="${isAlt ? 'rgba(var(--color-tertiary-container), 0.95)' : 'rgba(var(--color-primary-container), 0.95)'}" stroke="${strokeColor}" stroke-width="1.5" />
            <text x="0" y="4" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="800" text-anchor="middle">
              ${this._escapeHtml(label.substring(0, 12))}
            </text>
          </g>
        `;
      });
    });

    svgGroup.innerHTML = svgHTML;
  }

  // --- Smooth Drag Motion ---
  _onMouseMove(e) {
    if (!this.draggingNode) return;

    const viewport = document.getElementById('visual-canvas-viewport') || this.container;
    const viewportRect = viewport.getBoundingClientRect();

    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    let x = clientX - viewportRect.left - this.dragOffset.x;
    let y = clientY - viewportRect.top - this.dragOffset.y;

    x = Math.max(10, x);
    y = Math.max(10, y);

    this.draggingNode.x = x;
    this.draggingNode.y = y;

    const cardEl = document.getElementById(`flow-node-${this.draggingNode.id}`);
    if (cardEl) {
      cardEl.style.left = `${x}px`;
      cardEl.style.top = `${y}px`;
    }

    if (!this.animFrameId) {
      this.animFrameId = requestAnimationFrame(() => {
        this._updateSVGConnections();
        this.animFrameId = null;
      });
    }
  }

  _onMouseUp() {
    if (this.draggingNode) {
      const cardEl = document.getElementById(`flow-node-${this.draggingNode.id}`);
      if (cardEl) cardEl.classList.remove('z-30');
      this.draggingNode = null;
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  // --- Input Handlers (No DOM Re-creation to preserve focus) ---
  _handleNodeInput(e, node) {
    const field = e.target.dataset.nodeField;
    if (!field) return;

    if (field === 'title') {
      node.q_id = e.target.value;
      node.title_id = e.target.value;
    } else if (field === 'sub') {
      node.sub_id = e.target.value;
      node.msg_id = e.target.value;
    } else if (field === 'option-text') {
      const optIdx = parseInt(e.target.dataset.optIdx, 10);
      if (node.options && node.options[optIdx]) {
        node.options[optIdx].text_id = e.target.value;
        this._updateSVGConnections();
      }
    } else if (field === 'option-target') {
      const optIdx = parseInt(e.target.dataset.optIdx, 10);
      if (node.options && node.options[optIdx]) {
        node.options[optIdx].targetId = e.target.value;
        node.options[optIdx].next = e.target.value;
        this._updateSVGConnections();
      }
    }

    if (this.onChange) this.onChange(this.nodes);
  }

  // --- 1-Click Direction Handles & Action Buttons ---
  _handleNodeCardClick(e, node) {
    const wingEl = e.target.closest('.wing-handle');
    if (wingEl) {
      const direction = wingEl.dataset.direction;
      this._spawnChildDirection(node, direction);
      return;
    }

    const actionBtn = e.target.closest('[data-node-action]');
    if (!actionBtn) return;

    const action = actionBtn.dataset.nodeAction;

    if (action === 'toggle-type') {
      node.isResult = !node.isResult;
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'delete-node') {
      if (this.nodes.length <= 1) {
        alert('Minimal 1 node harus ada!');
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
        next: nextTarget.id,
        btnStyle: 'btn-primary'
      });
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'remove-option') {
      const optIdx = parseInt(actionBtn.dataset.optIdx, 10);
      if (node.options && node.options[optIdx]) {
        node.options.splice(optIdx, 1);
        this.render();
        if (this.onChange) this.onChange(this.nodes);
      }
    } else if (action === 'spawn-child') {
      this._spawnChildDirection(node, 'right');
    }
  }

  _spawnChildDirection(sourceNode, direction) {
    const newId = 'node_' + Date.now().toString(36);
    let newX = sourceNode.x || 60;
    let newY = sourceNode.y || 80;

    if (direction === 'right') newX += 340;
    else if (direction === 'left') newX = Math.max(20, newX - 340);
    else if (direction === 'bottom') newY += 230;
    else if (direction === 'top') newY = Math.max(40, newY - 230);

    const newNode = {
      id: newId,
      isResult: false,
      tag_id: `Langkah #${this.nodes.length + 1}`,
      q_id: 'Pertanyaan Lanjutan?',
      sub_id: 'Deskripsi langkah...',
      x: newX,
      y: newY,
      options: []
    };

    if (!sourceNode.options) sourceNode.options = [];
    const optLabel = direction === 'bottom' ? 'TIDAK' : 'YA';
    sourceNode.options.push({
      text_id: optLabel,
      text_en: optLabel,
      targetId: newId,
      next: newId,
      btnStyle: optLabel === 'TIDAK' ? 'btn-secondary' : 'btn-primary'
    });

    this.nodes.push(newNode);

    if (this.onBranchSelected) {
      this.onBranchSelected(sourceNode.id, direction, newId);
    }

    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }

  _handleTopBarClick(e) {
    const viewBtn = e.target.closest('[data-view-btn]');
    if (viewBtn) {
      this.viewMode = viewBtn.dataset.viewBtn;
      this.render();
      return;
    }

    const actionBtn = e.target.closest('[data-canvas-action]');
    if (!actionBtn) return;
    const action = actionBtn.dataset.canvasAction;

    if (action === 'add-question') {
      const newId = 'node_' + Date.now().toString(36);
      this.nodes.push({
        id: newId,
        isResult: false,
        tag_id: `Langkah #${this.nodes.length + 1}`,
        q_id: 'Pertanyaan Baru?',
        sub_id: 'Pilihan keputusan...',
        x: 60 + (this.nodes.length % 3) * 340,
        y: 80 + Math.floor(this.nodes.length / 3) * 230,
        options: []
      });
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'add-result') {
      const newId = 'res_' + Date.now().toString(36);
      this.nodes.push({
        id: newId,
        isResult: true,
        tag_id: '🏁 HASIL',
        title_id: 'Hasil Kesimpulan Baru',
        msg_id: 'Pesan akhir flowchart.',
        x: 60 + (this.nodes.length % 3) * 340,
        y: 80 + Math.floor(this.nodes.length / 3) * 230
      });
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'auto-layout') {
      this.autoArrangeLayout();
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    } else if (action === 'toggle-fullscreen') {
      document.body.classList.toggle('fullscreen-create-active');
      const secStudio = document.getElementById('sec-studio');
      if (secStudio) secStudio.classList.toggle('fullscreen-studio-active');
      this.render();
    }
  }

  autoArrangeLayout() {
    this.nodes.forEach((n, idx) => {
      n.x = 60 + (idx % 4) * 340;
      n.y = 80 + Math.floor(idx / 4) * 230;
    });
  }

  _renderListView() {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'flex-grow p-6 overflow-y-auto space-y-4 max-w-4xl mx-auto w-full';

    listWrapper.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-headline font-bold text-lg text-on-surface">Daftar Terstruktur Node Flowchart</h3>
        <button type="button" data-canvas-action="add-question" class="btn-terra btn-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">add</span>
          <span>+ Tambah Node</span>
        </button>
      </div>

      <div class="space-y-4">
        ${this.nodes.map((node, idx) => `
          <div class="terra-card p-5 rounded-2xl border border-primary/20 space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-bold ${node.isResult ? 'bg-tertiary/15 text-tertiary' : 'bg-primary/15 text-primary'}">
                Langkah #${idx + 1} (${node.isResult ? '🏁 Hasil' : '❓ Pertanyaan'})
              </span>
              <button type="button" class="text-xs font-bold text-red-500 hover:text-red-700" data-node-action="delete-node" data-id="${node.id}">Hapus</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" value="${this._escapeHtml(node.q_id || node.title_id || '')}" data-node-field="title" data-id="${node.id}" class="p-2 rounded-xl bg-surface-container border border-outline-variant/30 text-xs font-bold text-on-surface" placeholder="Judul Pertanyaan" />
              <input type="text" value="${this._escapeHtml(node.sub_id || node.msg_id || '')}" data-node-field="sub" data-id="${node.id}" class="p-2 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface" placeholder="Deskripsi" />
            </div>
          </div>
        `).join('')}
      </div>
    `;

    return listWrapper;
  }

  _ensurePositions() {
    this.nodes.forEach((n, idx) => {
      if (n.x === undefined) n.x = 60 + (idx % 3) * 340;
      if (n.y === undefined) n.y = 80 + Math.floor(idx / 3) * 230;
    });
  }

  _convertObjectToArray(nodesObj) {
    if (!nodesObj || typeof nodesObj !== 'object') return [];
    return Object.keys(nodesObj).map((id, idx) => {
      const item = nodesObj[id];
      return {
        id: id,
        isResult: !!item.isResult,
        tag_id: item.tag_id || (item.isResult ? '🏁 HASIL' : `❓ LANGKAH #${idx + 1}`),
        q_id: item.q_id || item.title_id || 'Pertanyaan?',
        title_id: item.title_id || item.q_id || 'Hasil',
        sub_id: item.sub_id || item.msg_id || '',
        msg_id: item.msg_id || '',
        adv_id: item.adv_id || '',
        options: item.options || [],
        x: item.x !== undefined ? item.x : 60 + (idx % 3) * 340,
        y: item.y !== undefined ? item.y : 80 + Math.floor(idx / 3) * 230
      };
    });
  }

  _escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[m]));
  }
}
