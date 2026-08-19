/**
 * VisualFlowNodeComponent.js
 * Interactive Flowchart Node Component with Dynamic 4-Wing Direction Handles
 * Implements:
 * - Central Content Card Node with category tag, question/step title, description & wireframe illustration header.
 * - 4 Slide-out Wing Handles (Top, Right, Bottom, Left) with arrow icons & smooth hover/focus transitions.
 * - Dynamic Direction Popover Action Menu with 'YA ➔', 'TIDAK ➔', and '+ ADD NODE' branching buttons.
 * - Smart SVG cubic bezier connector lines with logic badge labels.
 * - Two-way data synchronization with declarative JSON format.
 */

export class VisualFlowNodeComponent {
  constructor(options = {}) {
    this.container = options.container || null;
    this.nodes = options.nodes || [];
    this.onChange = options.onChange || null;
    this.onBranchSelected = options.onBranchSelected || null;
    this.onNodeSelect = options.onNodeSelect || null;
    
    this.activePopover = null; // { nodeId, direction, element }
    this.draggingNode = null;
    this.dragOffset = { x: 0, y: 0 };
    this.viewMode = options.viewMode || 'visual'; // 'visual' or 'list'
    this.zoomLevel = 1;
    this.panOffset = { x: 0, y: 0 };
    this.isPanning = false;
    this.panStart = { x: 0, y: 0 };

    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onGlobalClick = this._onGlobalClick.bind(this);
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
      title_id: 'Interactive 4-Wing Flowchart',
      title_en: 'Interactive 4-Wing Flowchart',
      startNode: this.nodes[0] ? this.nodes[0].id : 'node_start',
      nodes: nodesObj
    };
  }

  render() {
    if (!this.container) return;

    this._ensurePositions();
    this.container.innerHTML = '';
    this.container.className = 'visual-flow-canvas-wrapper relative w-full min-h-[620px] rounded-3xl overflow-hidden select-none border-2 border-primary/20 shadow-terra-deep flex flex-col transition-colors duration-300';

    // 1. Top Header Mode Switcher Bar (Matches Blueprint wireframe tabs: [ List Node Diagram ] [ Visual Flow Diagram ])
    const topBar = document.createElement('div');
    topBar.className = 'relative z-30 flex flex-wrap items-center justify-between gap-3 p-4 bg-surface-container/90 backdrop-blur-md border-b border-primary/15';
    topBar.innerHTML = `
      <!-- View Mode Toggle Tabs -->
      <div class="inline-flex items-center gap-1 p-1 bg-surface rounded-2xl border border-primary/20 shadow-sm">
        <button type="button" data-view-btn="list" class="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${this.viewMode === 'list' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}">
          <span class="material-symbols-outlined text-base">format_list_bulleted</span>
          <span>List Node Diagram</span>
        </button>
        <button type="button" data-view-btn="visual" class="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${this.viewMode === 'visual' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}">
          <span class="material-symbols-outlined text-base">hub</span>
          <span>Visual Flow Diagram</span>
        </button>
      </div>

      <!-- Quick Canvas Actions Toolbar -->
      <div class="flex items-center gap-2 flex-wrap">
        <button type="button" data-canvas-action="add-question" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-on-primary text-xs font-bold flex items-center gap-1 transition-all border border-primary/20" title="Tambah Node Pertanyaan">
          <span class="material-symbols-outlined text-sm">help</span>
          <span>+ Node Pertanyaan</span>
        </button>

        <button type="button" data-canvas-action="add-result" class="px-3 py-1.5 rounded-xl bg-tertiary/10 hover:bg-tertiary text-tertiary hover:text-on-primary text-xs font-bold flex items-center gap-1 transition-all border border-tertiary/20" title="Tambah Node Hasil">
          <span class="material-symbols-outlined text-sm">flag</span>
          <span>+ Node Hasil</span>
        </button>

        <div class="h-4 w-px bg-outline-variant/30 mx-1"></div>

        <button type="button" data-canvas-action="auto-layout" class="px-3 py-1.5 rounded-xl bg-surface hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs font-bold flex items-center gap-1 transition-all border border-outline-variant/30" title="Susun Tata Letak Otomatis">
          <span class="material-symbols-outlined text-sm text-primary">auto_fix_high</span>
          <span class="hidden sm:inline">Rapikan Alur</span>
        </button>

        <button type="button" data-canvas-action="reset-zoom" class="p-1.5 rounded-xl bg-surface hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs font-bold transition-all border border-outline-variant/30" title="Pusatkan Diagram">
          <span class="material-symbols-outlined text-base">filter_center_focus</span>
        </button>

        <button type="button" data-canvas-action="toggle-fullscreen" class="px-3 py-1.5 rounded-xl bg-primary/15 hover:bg-primary text-primary hover:text-on-primary text-xs font-bold flex items-center gap-1 transition-all border border-primary/30 shadow-sm" title="Layar Penuh Canvas Flowchart">
          <span class="material-symbols-outlined text-base">fullscreen</span>
          <span class="hidden sm:inline">Layar Penuh</span>
        </button>
      </div>
    `;
    this.container.appendChild(topBar);

    // 2. View Rendering based on viewMode
    if (this.viewMode === 'list') {
      const listContainer = this._renderListView();
      this.container.appendChild(listContainer);
    } else {
      const visualContainer = this._renderVisualCanvasView();
      this.container.appendChild(visualContainer);
    }

    // Attach Topbar Listener
    topBar.addEventListener('click', (e) => this._handleTopBarClick(e));

    // Global Listeners for Dragging and Dismissing Popovers (Mouse & Touch)
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('touchmove', this._onMouseMove);
    window.removeEventListener('touchend', this._onMouseUp);
    document.removeEventListener('click', this._onGlobalClick);

    window.addEventListener('mousemove', this._onMouseMove, { passive: false });
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('touchmove', this._onMouseMove, { passive: false });
    window.addEventListener('touchend', this._onMouseUp);
    document.addEventListener('click', this._onGlobalClick);
  }

  // --- Visual Canvas Engine with 4-Wing Nodes & Dynamic Bezier Edges ---
  _renderVisualCanvasView() {
    const canvasViewport = document.createElement('div');
    canvasViewport.className = 'relative flex-grow w-full min-h-[540px] overflow-hidden visual-grid-pattern bg-background';
    canvasViewport.id = 'visual-canvas-viewport';

    // SVG Connections Overlay Layer
    const svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOverlay.setAttribute('class', 'absolute inset-0 w-full h-full pointer-events-none z-10');
    svgOverlay.setAttribute('id', 'visual-flow-svg');
    
    svgOverlay.innerHTML = `
      <defs>
        <marker id="flowArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--color-primary))" />
        </marker>
        <marker id="flowArrowAlt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--color-tertiary))" />
        </marker>
        <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g id="svg-flow-edges"></g>
    `;
    canvasViewport.appendChild(svgOverlay);

    // Nodes Container Layer
    const nodesLayer = document.createElement('div');
    nodesLayer.className = 'absolute inset-0 z-20 pointer-events-auto overflow-auto';
    nodesLayer.id = 'visual-flow-nodes-layer';
    canvasViewport.appendChild(nodesLayer);

    // Render Each Node as a Central Card with 4-Wings
    this.nodes.forEach((node, idx) => {
      const nodeEl = this._create4WingNodeCard(node, idx);
      nodesLayer.appendChild(nodeEl);
    });

    // Render Connections immediately
    setTimeout(() => this._updateSVGConnections(), 50);

    return canvasViewport;
  }

  // --- Central Content Card Node with 4-Wing Direction Handles ---
  _create4WingNodeCard(node, idx) {
    const card = document.createElement('div');
    card.id = `flow-node-${node.id}`;
    card.className = `visual-node-card absolute w-80 rounded-3xl p-5 transition-all duration-200 border-2 ${
      node.isResult
        ? 'bg-surface/95 border-tertiary/50 shadow-terra-soft text-on-surface'
        : 'bg-surface/95 border-primary/40 shadow-terra-deep text-on-surface'
    } cursor-grab active:cursor-grabbing backdrop-blur-lg group select-none`;
    card.style.left = `${node.x || 60 + idx * 340}px`;
    card.style.top = `${node.y || 80 + (idx % 2) * 220}px`;

    const isResult = !!node.isResult;
    const titleText = node.q_id || node.title_id || (isResult ? 'Hasil Kesimpulan' : 'Pertanyaan Utama');
    const subText = node.sub_id || node.msg_id || 'Langkah keputusan dalam alur diagram.';
    const tagText = node.tag_id || (isResult ? '🏁 HASIL' : `❓ LANGKAH #${idx + 1}`);

    // Inside Card Markup: Wireframe Mockup Illustration + Content + Controls + 4 WINGS
    card.innerHTML = `
      <!-- 4-WING DIRECTION HANDLES (Top, Right, Bottom, Left) -->
      <!-- Wing Top -->
      <div class="wing-handle wing-top" data-wing-node="${node.id}" data-direction="top" title="Tarik / Buat Cabang ke Atas">
        <span class="material-symbols-outlined text-sm">expand_less</span>
      </div>

      <!-- Wing Right -->
      <div class="wing-handle wing-right" data-wing-node="${node.id}" data-direction="right" title="Tarik / Buat Cabang ke Kanan (misal: YA ➔)">
        <span class="material-symbols-outlined text-sm">chevron_right</span>
      </div>

      <!-- Wing Bottom -->
      <div class="wing-handle wing-bottom" data-wing-node="${node.id}" data-direction="bottom" title="Tarik / Buat Cabang ke Bawah (misal: TIDAK ➔)">
        <span class="material-symbols-outlined text-sm">expand_more</span>
      </div>

      <!-- Wing Left -->
      <div class="wing-handle wing-left" data-wing-node="${node.id}" data-direction="left" title="Tarik / Buat Cabang ke Kiri (Kembali ➔)">
        <span class="material-symbols-outlined text-sm">chevron_left</span>
      </div>

      <!-- Node Header Bar -->
      <div class="flex items-center justify-between pb-2 mb-3 border-b border-primary/10 drag-handle">
        <div class="inline-flex items-center gap-1.5">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
            isResult ? 'bg-tertiary/15 text-tertiary' : 'bg-primary/15 text-primary'
          }">
            ${this._escapeHtml(tagText)}
          </span>
          <span class="text-[10px] font-mono text-on-surface-variant/60">#${node.id}</span>
        </div>

        <div class="flex items-center gap-1">
          <!-- Toggle Node Type (Question vs Result) -->
          <button type="button" class="p-1 text-on-surface-variant/60 hover:text-primary rounded-lg hover:bg-primary/10 transition-colors" data-node-action="toggle-type" data-id="${node.id}" title="Ubah Tipe Node (Pertanyaan / Hasil)">
            <span class="material-symbols-outlined text-sm">${isResult ? 'help' : 'flag'}</span>
          </button>
          <!-- Delete Node -->
          <button type="button" class="p-1 text-on-surface-variant/60 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition-colors" data-node-action="delete-node" data-id="${node.id}" title="Hapus Node Ini">
            <span class="material-symbols-outlined text-sm">delete</span>
          </button>
        </div>
      </div>

      <!-- Blueprint Central Content: Mockup Wireframe Graphic Box -->
      <div class="mb-3 p-3 rounded-2xl bg-surface-container/60 border border-primary/10 flex items-center justify-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-inner">
          <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">
            ${isResult ? 'verified' : 'laptop_mac'}
          </span>
        </div>
        <div class="flex-grow space-y-1.5">
          <div class="h-2 w-3/4 rounded-full bg-primary/20"></div>
          <div class="h-1.5 w-1/2 rounded-full bg-outline-variant/40"></div>
        </div>
      </div>

      <!-- Central Content Text & Inputs -->
      <div class="space-y-2">
        <div>
          <input type="text" value="${this._escapeHtml(titleText)}" data-node-field="title" data-id="${node.id}" class="w-full p-2 rounded-xl bg-surface-container border border-primary/15 font-headline font-bold text-xs text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="Judul Pertanyaan / Hasil..." />
        </div>

        <div>
          <textarea rows="2" data-node-field="sub" data-id="${node.id}" class="w-full p-2 rounded-xl bg-surface-container border border-primary/15 text-[11px] text-on-surface-variant focus:outline-none focus:border-primary transition-all resize-none font-body" placeholder="Deskripsi / Saran tindakan...">${this._escapeHtml(subText)}</textarea>
        </div>
      </div>

      <!-- Active Branch Route Badges List -->
      ${!isResult && node.options && node.options.length > 0 ? `
        <div class="mt-3 pt-2.5 border-t border-primary/10 space-y-1.5">
          <div class="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-wider flex items-center justify-between">
            <span>Cabang Rute Aktif:</span>
            <span class="text-primary">${node.options.length} rute</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${node.options.map((opt, oIdx) => `
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-bold ${
                opt.text_id && opt.text_id.toUpperCase().includes('TIDAK') ? 'bg-secondary-container text-secondary' : 'bg-primary/15 text-primary'
              } border border-primary/20">
                <span>${this._escapeHtml(opt.text_id || 'Opsi')}</span>
                <span class="material-symbols-outlined text-[12px]">arrow_forward</span>
                <span class="font-mono text-[9px] opacity-75">#${opt.targetId || opt.next}</span>
                <button type="button" data-node-action="remove-option" data-id="${node.id}" data-opt-idx="${oIdx}" class="hover:text-red-500 ml-0.5" title="Hapus Cabang">✕</button>
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Bottom Visual Prompt / Wing Click Helper -->
      <div class="mt-3 pt-2 border-t border-primary/10 flex items-center justify-between text-[10px] text-on-surface-variant/60 font-medium">
        <span class="flex items-center gap-1">
          <span class="material-symbols-outlined text-xs text-primary">touch_app</span>
          <span>Klik Sayap (4 Sisi) untuk Popover Rute</span>
        </span>
        <span class="font-mono text-primary font-bold">4-Wings</span>
      </div>
    `;

    // Drag Listener (Mouse & Touch)
    const onStartDrag = (clientX, clientY, target) => {
      if (target.closest('input, textarea, select, button, .wing-handle, .direction-popover')) return;
      this.draggingNode = node;
      const viewport = document.getElementById('visual-canvas-viewport') || this.container;
      const viewportRect = viewport.getBoundingClientRect();
      this.dragOffset = {
        x: clientX - viewportRect.left - (node.x || 60),
        y: clientY - viewportRect.top - (node.y || 80)
      };
      card.classList.add('z-30');
    };

    card.addEventListener('mousedown', (e) => {
      onStartDrag(e.clientX, e.clientY, e.target);
    });

    card.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        onStartDrag(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    }, { passive: true });

    // Delegated Change / Input Events
    card.addEventListener('change', (e) => this._handleNodeFieldChange(e, node));
    card.addEventListener('input', (e) => this._handleNodeFieldChange(e, node));
    card.addEventListener('click', (e) => this._handleNodeCardClick(e, node, card));

    return card;
  }

  // --- Dynamic Direction Popover Action Menu (Triggered by Clicking a Wing) ---
  _openDirectionPopover(node, direction, wingEl) {
    // Remove existing popover if any
    this._closePopover();

    const cardEl = document.getElementById(`flow-node-${node.id}`);
    if (!cardEl) return;

    const popover = document.createElement('div');
    popover.id = 'active-direction-popover';
    popover.className = `direction-popover absolute z-50 p-4 rounded-2xl bg-surface/98 backdrop-blur-xl border-2 border-primary/40 shadow-terra-glow text-on-surface w-64 space-y-3 direction-${direction} animate-popover-in`;

    // Available target nodes (all nodes except self)
    const otherNodes = this.nodes.filter(n => n.id !== node.id);

    popover.innerHTML = `
      <div class="flex items-center justify-between pb-2 border-b border-primary/15">
        <div class="flex items-center gap-1.5 text-xs font-bold text-primary">
          <span class="material-symbols-outlined text-base">alt_route</span>
          <span class="uppercase tracking-wider">Rute Sayap ${this._getDirectionLabel(direction)}</span>
        </div>
        <button type="button" class="text-on-surface-variant/60 hover:text-on-surface text-xs font-bold p-1" data-popover-action="close">✕</button>
      </div>

      <!-- Quick Preset Branching Buttons ('YA ->', 'TIDAK ->') as shown in Blueprint -->
      <div class="space-y-1.5">
        <span class="text-[10px] font-bold uppercase text-on-surface-variant/70 block">Pilihan Cepat:</span>
        <div class="grid grid-cols-2 gap-1.5">
          <button type="button" data-popover-action="create-branch" data-branch-text="YA" class="btn-terra py-2 px-3 rounded-xl bg-primary text-on-primary font-bold text-xs shadow-sm hover:scale-[1.02] flex items-center justify-center gap-1">
            <span>YA</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button type="button" data-popover-action="create-branch" data-branch-text="TIDAK" class="btn-terra py-2 px-3 rounded-xl bg-surface-container border border-primary/30 text-primary font-bold text-xs shadow-sm hover:scale-[1.02] flex items-center justify-center gap-1">
            <span>TIDAK</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- Target Node Linker -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold uppercase text-on-surface-variant/70 block">Sambungkan ke Node:</label>
        <select id="popover-target-select" class="w-full p-2 rounded-xl bg-surface-container border border-primary/20 text-xs font-semibold text-on-surface focus:outline-none focus:border-primary">
          <option value="__NEW__">➕ Buat Node Baru di Arah Ini</option>
          ${otherNodes.map(target => `
            <option value="${target.id}">#${target.id}: ${(target.q_id || target.title_id || 'Node').substring(0, 18)}</option>
          `).join('')}
        </select>
      </div>

      <!-- Action Button: Connect / Spawn Node -->
      <button type="button" data-popover-action="confirm-connect" class="w-full py-2 px-3 rounded-xl bg-primary text-on-primary font-bold text-xs shadow-terra-soft flex items-center justify-center gap-1.5 hover:scale-[1.02] transition-transform">
        <span class="material-symbols-outlined text-sm">add_link</span>
        <span>+ Tambah & Sambungkan</span>
      </button>
    `;

    // Position popover relative to the clicked wing handle
    const wingRect = wingEl.getBoundingClientRect();
    const containerRect = this.container.getBoundingClientRect();

    let left = wingRect.left - containerRect.left;
    let top = wingRect.top - containerRect.top;

    if (direction === 'right') {
      left += 32;
      top -= 30;
    } else if (direction === 'left') {
      left -= 270;
      top -= 30;
    } else if (direction === 'top') {
      left -= 100;
      top -= 180;
    } else if (direction === 'bottom') {
      left -= 100;
      top += 32;
    }

    // Keep within bounds
    left = Math.max(10, Math.min(containerRect.width - 280, left));
    top = Math.max(10, Math.min(containerRect.height - 240, top));

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;

    this.container.appendChild(popover);
    this.activePopover = { nodeId: node.id, direction, element: popover };

    // Popover Event Handlers
    popover.addEventListener('click', (e) => this._handlePopoverClick(e, node, direction));
  }

  _closePopover() {
    if (this.activePopover && this.activePopover.element) {
      this.activePopover.element.remove();
      this.activePopover = null;
    }
  }

  _handlePopoverClick(e, node, direction) {
    const actionBtn = e.target.closest('[data-popover-action]');
    if (!actionBtn) return;

    const action = actionBtn.dataset.popoverAction;

    if (action === 'close') {
      this._closePopover();
    } else if (action === 'create-branch') {
      const branchText = actionBtn.dataset.branchText || 'YA';
      this._createBranchInDirection(node, direction, branchText);
      this._closePopover();
    } else if (action === 'confirm-connect') {
      const select = document.getElementById('popover-target-select');
      const targetVal = select ? select.value : '__NEW__';

      if (targetVal === '__NEW__') {
        this._createBranchInDirection(node, direction, `Lanjut (${direction})`);
      } else {
        this._connectToExistingNode(node, direction, targetVal, `Opsi (${direction})`);
      }
      this._closePopover();
    }
  }

  _createBranchInDirection(sourceNode, direction, optionText) {
    const newId = 'node_' + Date.now().toString(36);
    
    // Calculate intelligent position based on handle direction
    let newX = sourceNode.x || 100;
    let newY = sourceNode.y || 100;

    if (direction === 'right') {
      newX += 360;
    } else if (direction === 'left') {
      newX = Math.max(20, newX - 360);
    } else if (direction === 'bottom') {
      newY += 260;
    } else if (direction === 'top') {
      newY = Math.max(40, newY - 260);
    }

    const newNode = {
      id: newId,
      isResult: false,
      tag_id: `Cabang #${newId.substr(-4)}`,
      tag_en: `Branch #${newId.substr(-4)}`,
      q_id: `Pertanyaan Cabang ${optionText}?`,
      q_en: `Branch Question ${optionText}?`,
      sub_id: 'Langkah selanjutnya setelah memilih ' + optionText,
      sub_en: 'Next step after choosing ' + optionText,
      x: newX,
      y: newY,
      options: []
    };

    if (!sourceNode.options) sourceNode.options = [];
    sourceNode.options.push({
      text_id: optionText,
      text_en: optionText,
      targetId: newId,
      direction: direction,
      btnStyle: optionText.toUpperCase().includes('TIDAK') ? 'btn-secondary' : 'btn-primary'
    });

    this.nodes.push(newNode);

    if (this.onBranchSelected) {
      this.onBranchSelected(sourceNode.id, direction, newId);
    }

    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }

  _connectToExistingNode(sourceNode, direction, targetId, optionText) {
    if (!sourceNode.options) sourceNode.options = [];

    // Avoid exact duplicate option
    const exists = sourceNode.options.some(o => (o.targetId === targetId || o.next === targetId) && o.text_id === optionText);
    if (!exists) {
      sourceNode.options.push({
        text_id: optionText,
        text_en: optionText,
        targetId: targetId,
        direction: direction,
        btnStyle: 'btn-primary'
      });
    }

    if (this.onBranchSelected) {
      this.onBranchSelected(sourceNode.id, direction, targetId);
    }

    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }

  // --- Smart SVG Cubic Bezier Connectors ---
  _updateSVGConnections() {
    const svgGroup = document.getElementById('svg-flow-edges');
    if (!svgGroup || !this.container) return;

    let svgHTML = '';

    this.nodes.forEach(source => {
      if (source.isResult || !source.options || source.options.length === 0) return;

      const sourceEl = document.getElementById(`flow-node-${source.id}`);
      if (!sourceEl) return;

      const cardWidth = 320;
      const cardHeight = sourceEl.offsetHeight || 220;

      source.options.forEach(opt => {
        const targetId = opt.targetId || opt.next;
        const targetNode = this.nodes.find(n => n.id === targetId);
        if (!targetNode) return;

        const targetEl = document.getElementById(`flow-node-${targetId}`);
        const targetWidth = 320;
        const targetHeight = targetEl ? targetEl.offsetHeight : 220;

        // Calculate specific anchor points from source handle direction to closest target anchor
        const sourceDir = opt.direction || this._inferDirection(source, targetNode);
        const sourceAnchor = this._getAnchorPoint(source, cardWidth, cardHeight, sourceDir);
        const targetAnchor = this._getClosestTargetAnchor(sourceAnchor, targetNode, targetWidth, targetHeight);

        const startX = sourceAnchor.x;
        const startY = sourceAnchor.y;
        const endX = targetAnchor.x;
        const endY = targetAnchor.y;

        // Smooth Bezier Curve
        const dx = (endX - startX) * 0.5;
        const dy = (endY - startY) * 0.5;
        
        let pathD = '';
        if (sourceDir === 'right' || sourceDir === 'left') {
          pathD = `M ${startX} ${startY} C ${startX + (sourceDir === 'right' ? 80 : -80)} ${startY}, ${endX - (sourceDir === 'right' ? 80 : -80)} ${endY}, ${endX} ${endY}`;
        } else {
          pathD = `M ${startX} ${startY} C ${startX} ${startY + (sourceDir === 'bottom' ? 80 : -80)}, ${endX} ${endY - (sourceDir === 'bottom' ? 80 : -80)}, ${endX} ${endY}`;
        }

        const isAlt = opt.text_id && opt.text_id.toUpperCase().includes('TIDAK');
        const strokeColor = isAlt ? 'rgb(var(--color-tertiary))' : 'rgb(var(--color-primary))';
        const marker = isAlt ? 'url(#flowArrowAlt)' : 'url(#flowArrow)';
        const label = opt.text_id || opt.text || 'Lanjut';

        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;

        svgHTML += `
          <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" marker-end="${marker}" class="transition-all duration-200" />
          
          <!-- Logic Badge Label on Connector Line -->
          <g transform="translate(${midX}, ${midY})">
            <rect x="-35" y="-12" width="70" height="24" rx="12" fill="${isAlt ? 'rgba(var(--color-tertiary-container), 0.9)' : 'rgba(var(--color-primary-container), 0.9)'}" stroke="${strokeColor}" stroke-width="1.5" />
            <text x="0" y="4" fill="#ffffff" font-size="10" font-family="'Nunito Sans', sans-serif" font-weight="800" text-anchor="middle">
              ${this._escapeHtml(label.substring(0, 12))}
            </text>
          </g>
        `;
      });
    });

    svgGroup.innerHTML = svgHTML;
  }

  _getAnchorPoint(node, width, height, direction) {
    const x = node.x || 60;
    const y = node.y || 80;

    switch (direction) {
      case 'top':
        return { x: x + width / 2, y: y };
      case 'bottom':
        return { x: x + width / 2, y: y + height };
      case 'left':
        return { x: x, y: y + height / 2 };
      case 'right':
      default:
        return { x: x + width, y: y + height / 2 };
    }
  }

  _getClosestTargetAnchor(sourcePt, targetNode, width, height) {
    const x = targetNode.x || 60;
    const y = targetNode.y || 80;

    const anchors = [
      { x: x, y: y + height / 2, name: 'left' },
      { x: x + width / 2, y: y, name: 'top' },
      { x: x + width, y: y + height / 2, name: 'right' },
      { x: x + width / 2, y: y + height, name: 'bottom' }
    ];

    let closest = anchors[0];
    let minDist = Infinity;

    anchors.forEach(a => {
      const dist = Math.hypot(a.x - sourcePt.x, a.y - sourcePt.y);
      if (dist < minDist) {
        minDist = dist;
        closest = a;
      }
    });

    return closest;
  }

  _inferDirection(source, target) {
    const dx = (target.x || 0) - (source.x || 0);
    const dy = (target.y || 0) - (source.y || 0);

    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? 'right' : 'left';
    } else {
      return dy > 0 ? 'bottom' : 'top';
    }
  }

  // --- List View Mode (Alternative Structured Representation) ---
  _renderListView() {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'flex-grow p-6 overflow-y-auto space-y-4 max-w-4xl mx-auto w-full';

    listWrapper.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-headline font-bold text-lg text-on-surface">Daftar Terstruktur Node Flowchart</h3>
        <button type="button" data-canvas-action="add-question" class="btn-terra btn-primary px-4 py-2 rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">add</span>
          <span>+ Tambah Node</span>
        </button>
      </div>

      <div class="space-y-4" id="list-nodes-container">
        ${this.nodes.map((node, idx) => `
          <div class="terra-card p-5 rounded-2xl border border-primary/20 space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-bold ${node.isResult ? 'bg-tertiary/15 text-tertiary' : 'bg-primary/15 text-primary'}">
                Langkah #${idx + 1} (${node.isResult ? '🏁 Hasil' : '❓ Pertanyaan'})
              </span>
              <div class="flex items-center gap-2">
                <button type="button" class="text-xs font-bold text-on-surface-variant hover:text-primary" data-node-action="toggle-type" data-id="${node.id}">Ganti Tipe</button>
                <button type="button" class="text-xs font-bold text-red-500 hover:text-red-700" data-node-action="delete-node" data-id="${node.id}">Hapus</button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" value="${this._escapeHtml(node.q_id || node.title_id || '')}" data-node-field="title" data-id="${node.id}" class="p-2 rounded-xl bg-surface-container border border-outline-variant/30 text-xs font-bold text-on-surface" placeholder="Judul Pertanyaan / Hasil" />
              <input type="text" value="${this._escapeHtml(node.sub_id || node.msg_id || '')}" data-node-field="sub" data-id="${node.id}" class="p-2 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface" placeholder="Deskripsi / Saran" />
            </div>

            ${!node.isResult ? `
              <div class="pt-2 border-t border-outline-variant/20 flex flex-wrap gap-2 items-center">
                <span class="text-[11px] font-bold text-on-surface-variant">Cabang Pilihan:</span>
                ${(node.options || []).map(opt => `
                  <span class="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-bold border border-primary/20 flex items-center gap-1">
                    <span>${this._escapeHtml(opt.text_id)}</span> ➔ <code>#${opt.targetId || opt.next}</code>
                  </span>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;

    listWrapper.addEventListener('input', (e) => {
      const field = e.target.dataset.nodeField;
      const id = e.target.dataset.id;
      const node = this.nodes.find(n => n.id === id);
      if (node && field) {
        if (field === 'title') {
          node.q_id = e.target.value;
          node.title_id = e.target.value;
        } else if (field === 'sub') {
          node.sub_id = e.target.value;
          node.msg_id = e.target.value;
        }
        if (this.onChange) this.onChange(this.nodes);
      }
    });

    listWrapper.addEventListener('click', (e) => {
      const actionBtn = e.target.closest('[data-node-action]');
      if (!actionBtn) return;
      const action = actionBtn.dataset.nodeAction;
      const id = actionBtn.dataset.id;
      const node = this.nodes.find(n => n.id === id);

      if (action === 'toggle-type' && node) {
        node.isResult = !node.isResult;
        this.render();
        if (this.onChange) this.onChange(this.nodes);
      } else if (action === 'delete-node') {
        if (this.nodes.length <= 1) {
          alert('Minimal 1 node harus ada!');
          return;
        }
        this.nodes = this.nodes.filter(n => n.id !== id);
        this.render();
        if (this.onChange) this.onChange(this.nodes);
      }
    });

    return listWrapper;
  }

  // --- Mouse & Drag Event Handlers ---
  _onMouseMove(e) {
    if (!this.draggingNode || !this.container) return;

    const viewport = document.getElementById('visual-canvas-viewport') || this.container;
    const viewportRect = viewport.getBoundingClientRect();

    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    let x = clientX - viewportRect.left - this.dragOffset.x;
    let y = clientY - viewportRect.top - this.dragOffset.y;

    // Freely movable anywhere across the infinite canvas
    x = Math.max(10, x);
    y = Math.max(10, y);

    this.draggingNode.x = x;
    this.draggingNode.y = y;

    const cardEl = document.getElementById(`flow-node-${this.draggingNode.id}`);
    if (cardEl) {
      cardEl.style.left = `${x}px`;
      cardEl.style.top = `${y}px`;
    }

    this._updateSVGConnections();
  }

  _onMouseUp() {
    if (this.draggingNode) {
      const cardEl = document.getElementById(`flow-node-${this.draggingNode.id}`);
      if (cardEl) cardEl.classList.remove('z-30');
      this.draggingNode = null;
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  _onGlobalClick(e) {
    if (this.activePopover && !e.target.closest('.direction-popover') && !e.target.closest('.wing-handle')) {
      this._closePopover();
    }
  }

  _handleNodeFieldChange(e, node) {
    const field = e.target.dataset.nodeField;
    if (!field) return;

    if (field === 'title') {
      node.q_id = e.target.value;
      node.q_en = e.target.value;
      node.title_id = e.target.value;
      node.title_en = e.target.value;
    } else if (field === 'sub') {
      node.sub_id = e.target.value;
      node.sub_en = e.target.value;
      node.msg_id = e.target.value;
      node.msg_en = e.target.value;
    }

    if (this.onChange) this.onChange(this.nodes);
  }

  _handleNodeCardClick(e, node, cardEl) {
    // 1. Check Wing Handle Click
    const wingEl = e.target.closest('.wing-handle');
    if (wingEl) {
      e.stopPropagation();
      const direction = wingEl.dataset.direction;
      this._openDirectionPopover(node, direction, wingEl);
      return;
    }

    // 2. Check Action Buttons
    const actionBtn = e.target.closest('[data-node-action]');
    if (actionBtn) {
      e.stopPropagation();
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
      } else if (action === 'remove-option') {
        const optIdx = parseInt(actionBtn.dataset.optIdx, 10);
        if (node.options && node.options[optIdx]) {
          node.options.splice(optIdx, 1);
          this.render();
          if (this.onChange) this.onChange(this.nodes);
        }
      }
      return;
    }

    // 3. Highlight Selected Node Card
    document.querySelectorAll('.visual-node-card').forEach(c => c.classList.remove('active-node', 'active-wings'));
    cardEl.classList.add('active-node', 'active-wings');

    if (this.onNodeSelect) {
      this.onNodeSelect(node);
    }
  }

  _handleTopBarClick(e) {
    const viewBtn = e.target.closest('[data-view-btn]');
    if (viewBtn) {
      this.viewMode = viewBtn.dataset.viewBtn;
      this.render();
      return;
    }

    const actionBtn = e.target.closest('[data-canvas-action]');
    if (actionBtn) {
      const action = actionBtn.dataset.canvasAction;

      if (action === 'add-question') {
        const newId = 'node_' + Date.now().toString(36);
        this.nodes.push({
          id: newId,
          isResult: false,
          tag_id: `Langkah #${this.nodes.length + 1}`,
          q_id: 'Pertanyaan Baru?',
          sub_id: 'Pilihan keputusan selanjutnya...',
          x: 80 + (this.nodes.length % 3) * 340,
          y: 90 + Math.floor(this.nodes.length / 3) * 230,
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
          msg_id: 'Pesan akhir flowchart dan saran tindakan.',
          x: 80 + (this.nodes.length % 3) * 340,
          y: 90 + Math.floor(this.nodes.length / 3) * 230
        });
        this.render();
        if (this.onChange) this.onChange(this.nodes);
      } else if (action === 'auto-layout' || action === 'reset-zoom') {
        this.autoArrangeLayout();
        this.render();
        if (this.onChange) this.onChange(this.nodes);
      } else if (action === 'toggle-fullscreen') {
        const secCreate = document.getElementById('section-create');
        if (secCreate) {
          secCreate.classList.toggle('fullscreen-create-active');
        } else if (this.container) {
          if (!document.fullscreenElement) {
            this.container.requestFullscreen?.().catch(() => {});
          } else {
            document.exitFullscreen?.().catch(() => {});
          }
        }
      }
    }
  }

  autoArrangeLayout() {
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

    this.nodes.forEach(n => {
      if (levels[n.id] === undefined) levels[n.id] = 0;
    });

    const levelGroups = {};
    this.nodes.forEach(n => {
      const lvl = levels[n.id];
      if (!levelGroups[lvl]) levelGroups[lvl] = [];
      levelGroups[lvl].push(n);
    });

    Object.keys(levelGroups).forEach(lvlStr => {
      const lvl = parseInt(lvlStr);
      const group = levelGroups[lvl];
      const startX = 60 + lvl * 360;
      const startY = 80;

      group.forEach((n, idx) => {
        n.x = startX;
        n.y = startY + idx * 250;
      });
    });
  }

  _ensurePositions() {
    this.nodes.forEach((n, idx) => {
      if (n.x === undefined) n.x = 60 + (idx % 3) * 360;
      if (n.y === undefined) n.y = 80 + Math.floor(idx / 3) * 250;
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
        x: item.x !== undefined ? item.x : 60 + (idx % 3) * 360,
        y: item.y !== undefined ? item.y : 80 + Math.floor(idx / 3) * 250
      };
    });
  }

  _getDirectionLabel(dir) {
    switch (dir) {
      case 'top': return 'Atas ▲';
      case 'right': return 'Kanan ▶';
      case 'bottom': return 'Bawah ▼';
      case 'left': return 'Kiri ◀';
      default: return dir;
    }
  }

  _escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[m]));
  }
}
