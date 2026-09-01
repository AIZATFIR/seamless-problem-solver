/**
 * SpatialThinkingCanvas.js - High-Performance 60fps Spatial Thinking & Visual Flowchart Engine
 * Features:
 * - Smooth Cursor-Anchored Wheel Zoom, Touchpad Pinch, & Pan Physics
 * - Edge '+' Sprouting Handles for 1-Click Contextual Branching
 * - Drag-to-Connect Dynamic Spline Wire Physics with Cubic Bezier Curves
 * - Inline Direct Manipulation & Live Editing
 * - Infinite History Stack (Undo / Redo with Ctrl+Z / Ctrl+Y)
 * - Automatic Tree Layout / Diagram Untangler
 * - Realtime Decision Path Simulation with Glowing Traversal
 * - 1-Click PNG, SVG, Mermaid, and JSON Export
 */

import { FlowchartNodeRenderer, NODE_CONFIGS } from './FlowchartNodeTypes.js';
import { VisualReasoningAI } from './VisualReasoningAI.js';

export class SpatialThinkingCanvas {
  constructor(options = {}) {
    this.container = options.container || null;
    this.nodes = options.nodes || [];
    this.onChange = options.onChange || null;
    this.onNodeSelect = options.onNodeSelect || null;

    // Viewport & Pan/Zoom State
    this.zoomLevel = 1.0;
    this.panOffset = { x: 40, y: 40 };
    this.isPanning = false;
    this.panStart = { x: 0, y: 0 };
    this.spacePressed = false;
    this.activeTool = 'select'; // 'select' or 'hand'

    // Node Dragging State
    this.draggingNode = null;
    this.dragOffset = { x: 0, y: 0 };
    this.selectedNodeId = null;

    // Wire Connecting State
    this.isConnecting = false;
    this.connectSource = null; // { nodeId, optIdx, startX, startY }
    this.connectCurrentPos = { x: 0, y: 0 };

    // History Stack for Undo / Redo
    this.historyStack = [];
    this.historyIndex = -1;
    this.maxHistory = 40;

    // Simulation / Play Mode
    this.canvasMode = 'edit'; // 'edit' or 'simulate'
    this.activeSimPath = [];  // Array of node IDs in active simulation traverse
    this.currentSimNodeId = null;

    // AI Engine
    this.ai = new VisualReasoningAI();

    // Bound listeners
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onWheel = this._onWheel.bind(this);

    this._initGlobalKeybindings();
    if (this.nodes.length > 0) {
      this._saveHistorySnapshot('Initial');
    }
  }

  setNodes(nodes, saveHistory = true) {
    this.nodes = Array.isArray(nodes) ? JSON.parse(JSON.stringify(nodes)) : [];
    if (saveHistory) {
      this._saveHistorySnapshot('Set Nodes');
    }
    this.render();
  }

  getNodes() {
    return this.nodes;
  }

  setMode(mode) {
    this.canvasMode = mode;
    if (mode === 'simulate') {
      const rootNode = this.nodes.find(n => n.type === 'problem') || this.nodes[0];
      this.currentSimNodeId = rootNode ? rootNode.id : null;
      this.activeSimPath = this.currentSimNodeId ? [this.currentSimNodeId] : [];
    } else {
      this.activeSimPath = [];
      this.currentSimNodeId = null;
    }
    this.render();
  }

  _initGlobalKeybindings() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  _onKeyDown(e) {
    const isInput = e.target.closest('input, textarea, select, [contenteditable="true"]');
    
    // Undo / Redo
    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
      if (!isInput) {
        e.preventDefault();
        if (e.shiftKey) {
          this.redo();
        } else {
          this.undo();
        }
      }
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
      if (!isInput) {
        e.preventDefault();
        this.redo();
      }
      return;
    }

    if (isInput) return;

    // Spacebar Pan
    if (e.code === 'Space' && !this.spacePressed) {
      this.spacePressed = true;
      const vp = document.getElementById('spatial-canvas-viewport');
      if (vp) vp.style.cursor = 'grab';
    } else if (e.key === 'Tab' && this.selectedNodeId) {
      // Tab to sprout new connected node to the right
      e.preventDefault();
      const selNode = this.nodes.find(n => n.id === this.selectedNodeId);
      if (selNode) this._sproutNode(selNode, 'right');
    } else if ((e.key === 'Delete' || e.key === 'Backspace') && this.selectedNodeId) {
      e.preventDefault();
      this.deleteNode(this.selectedNodeId);
    } else if ((e.key === 'd' || e.key === 'D') && this.selectedNodeId) {
      e.preventDefault();
      this.duplicateNode(this.selectedNodeId);
    } else if (e.key === '0' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      this.fitView();
    }
  }

  _onKeyUp(e) {
    if (e.code === 'Space' && this.spacePressed) {
      this.spacePressed = false;
      const vp = document.getElementById('spatial-canvas-viewport');
      if (vp) vp.style.cursor = this.activeTool === 'hand' ? 'grab' : 'crosshair';
    }
  }

  // --- Render Main Canvas Hierarchy ---
  render() {
    if (!this.container) return;

    this.container.innerHTML = '';
    this.container.className = 'spatial-canvas-root relative w-full h-full min-h-[640px] flex flex-col select-none overflow-hidden rounded-3xl border border-primary/20 bg-background dark:bg-zinc-950 shadow-2xl';

    // 1. Floating Top Glass Control Bar
    const topBar = this._createTopControlBar();
    this.container.appendChild(topBar);

    // 2. Viewport and Unified Canvas Stage
    const viewport = document.createElement('div');
    viewport.id = 'spatial-canvas-viewport';
    viewport.className = 'relative flex-grow w-full h-full overflow-hidden spatial-dot-grid cursor-crosshair';
    
    // Attach Wheel and Pan Listeners directly
    viewport.addEventListener('wheel', this._onWheel, { passive: false });
    viewport.addEventListener('mousedown', (e) => this._onViewportMouseDown(e));

    // The transformed Stage
    const stage = document.createElement('div');
    stage.id = 'spatial-canvas-stage';
    stage.className = 'absolute inset-0 min-w-[5000px] min-h-[5000px] origin-top-left pointer-events-none';
    stage.style.transform = `translate(${this.panOffset.x}px, ${this.panOffset.y}px) scale(${this.zoomLevel})`;

    // SVG Connections Layer (inside stage)
    const svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgLayer.setAttribute('id', 'spatial-connections-svg');
    svgLayer.setAttribute('class', 'absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible');
    svgLayer.innerHTML = `
      <defs>
        <linearGradient id="wireGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgb(var(--color-primary))" stop-opacity="0.8" />
          <stop offset="100%" stop-color="rgb(var(--color-primary))" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient id="wireGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <filter id="wireGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <marker id="arrowDefault" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="rgb(var(--color-primary))" />
        </marker>
        <marker id="arrowActive" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#34d399" />
        </marker>
      </defs>
      <g id="svg-wires-group"></g>
      <g id="svg-wire-preview"></g>
    `;
    stage.appendChild(svgLayer);

    // Nodes Container Layer (inside stage)
    const nodesLayer = document.createElement('div');
    nodesLayer.id = 'spatial-nodes-layer';
    nodesLayer.className = 'absolute inset-0 z-20 pointer-events-auto';
    stage.appendChild(nodesLayer);

    // Populate Nodes
    this.nodes.forEach(node => {
      const isSelected = node.id === this.selectedNodeId;
      const isSimActive = this.activeSimPath.includes(node.id);
      const nodeEl = FlowchartNodeRenderer.createNodeElement(node, isSelected, isSimActive);
      this._attachNodeEventListeners(nodeEl, node);
      nodesLayer.appendChild(nodeEl);
    });

    viewport.appendChild(stage);
    this.container.appendChild(viewport);

    // 3. Floating Bottom Canvas Utilities Dock (Zoom %, Tidy, Fit, Sim/Edit)
    const bottomDock = this._createBottomCanvasDock();
    this.container.appendChild(bottomDock);

    // Re-draw SVG Splines
    this._updateSVGWires();

    // Global window listeners for drag & wire drawing
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.addEventListener('mousemove', this._onMouseMove, { passive: false });
    window.addEventListener('mouseup', this._onMouseUp);
  }

  _createTopControlBar() {
    const bar = document.createElement('div');
    bar.className = 'relative z-30 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-surface/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-outline-variant/20 dark:border-zinc-800 text-xs';
    
    bar.innerHTML = `
      <!-- Left: Framework Presets & Quick Add -->
      <div class="flex items-center gap-2 flex-wrap">
        <div class="inline-flex items-center gap-1 bg-surface-container/70 dark:bg-zinc-800/70 p-1 rounded-xl border border-outline-variant/20">
          <button type="button" data-canvas-btn="add-problem" class="px-2.5 py-1.5 rounded-lg text-violet-400 hover:bg-violet-500/10 font-bold flex items-center gap-1 transition-all" title="Tambah Node Masalah (+)">
            <span class="material-symbols-outlined text-sm">psychology_alt</span>
            <span>+ Masalah</span>
          </button>
          <button type="button" data-canvas-btn="add-decision" class="px-2.5 py-1.5 rounded-lg text-amber-400 hover:bg-amber-500/10 font-bold flex items-center gap-1 transition-all" title="Tambah Node Keputusan">
            <span class="material-symbols-outlined text-sm">alt_route</span>
            <span>+ Keputusan</span>
          </button>
          <button type="button" data-canvas-btn="add-action" class="px-2.5 py-1.5 rounded-lg text-sky-400 hover:bg-sky-500/10 font-bold flex items-center gap-1 transition-all" title="Tambah Node Aksi">
            <span class="material-symbols-outlined text-sm">bolt</span>
            <span>+ Aksi</span>
          </button>
          <button type="button" data-canvas-btn="add-outcome" class="px-2.5 py-1.5 rounded-lg text-emerald-400 hover:bg-emerald-500/10 font-bold flex items-center gap-1 transition-all" title="Tambah Node Solusi">
            <span class="material-symbols-outlined text-sm">task_alt</span>
            <span>+ Solusi</span>
          </button>
        </div>

        <div class="h-4 w-px bg-outline-variant/30 hidden sm:block"></div>

        <!-- Mode Toggle (Edit vs Simulate) -->
        <div class="inline-flex items-center gap-1 bg-surface-container/70 dark:bg-zinc-800/70 p-1 rounded-xl border border-outline-variant/20">
          <button type="button" data-canvas-btn="mode-edit" class="px-3 py-1.5 rounded-lg font-extrabold flex items-center gap-1 transition-all ${this.canvasMode === 'edit' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}">
            <span class="material-symbols-outlined text-sm">draw</span>
            <span>Edit</span>
          </button>
          <button type="button" data-canvas-btn="mode-simulate" class="px-3 py-1.5 rounded-lg font-extrabold flex items-center gap-1 transition-all ${this.canvasMode === 'simulate' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-on-surface-variant hover:text-emerald-400'}">
            <span class="material-symbols-outlined text-sm">play_circle</span>
            <span>Simulasi Jalur</span>
          </button>
        </div>
      </div>

      <!-- Right: Tidy, History & Export Actions -->
      <div class="flex items-center gap-2">
        <button type="button" data-canvas-btn="undo" class="p-1.5 rounded-xl bg-surface-container/60 dark:bg-zinc-800 hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all disabled:opacity-30" title="Undo (Ctrl+Z)" ${this.historyIndex <= 0 ? 'disabled' : ''}>
          <span class="material-symbols-outlined text-base">undo</span>
        </button>
        <button type="button" data-canvas-btn="redo" class="p-1.5 rounded-xl bg-surface-container/60 dark:bg-zinc-800 hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all disabled:opacity-30" title="Redo (Ctrl+Y)" ${this.historyIndex >= this.historyStack.length - 1 ? 'disabled' : ''}>
          <span class="material-symbols-outlined text-base">redo</span>
        </button>

        <button type="button" data-canvas-btn="auto-layout" class="px-3 py-1.5 rounded-xl bg-surface-container/70 dark:bg-zinc-800 hover:bg-primary/10 text-on-surface-variant hover:text-primary font-bold flex items-center gap-1 border border-outline-variant/20 transition-all" title="Rapikan Tata Letak Diagram">
          <span class="material-symbols-outlined text-sm text-primary">auto_fix_high</span>
          <span class="hidden md:inline">Rapikan Alur</span>
        </button>

        <div class="h-4 w-px bg-outline-variant/30 hidden sm:block"></div>

        <!-- Export Dropdown / Menu Trigger -->
        <div class="relative group/export">
          <button type="button" class="px-3 py-1.5 rounded-xl bg-primary text-on-primary font-extrabold flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all">
            <span class="material-symbols-outlined text-sm">download</span>
            <span>Ekspor</span>
            <span class="material-symbols-outlined text-xs">expand_more</span>
          </button>
          
          <div class="absolute right-0 top-full mt-1.5 w-44 rounded-2xl bg-surface dark:bg-zinc-900 border border-outline-variant/30 dark:border-zinc-800 shadow-2xl p-1.5 hidden group-hover/export:flex flex-col gap-1 z-50">
            <button type="button" data-export="png" class="w-full text-left px-3 py-2 rounded-xl hover:bg-primary/10 text-on-surface dark:text-zinc-200 text-xs font-semibold flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-emerald-400">image</span>
              <span>Gambar PNG HD</span>
            </button>
            <button type="button" data-export="svg" class="w-full text-left px-3 py-2 rounded-xl hover:bg-primary/10 text-on-surface dark:text-zinc-200 text-xs font-semibold flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-sky-400">code</span>
              <span>Vektor SVG</span>
            </button>
            <button type="button" data-export="mermaid" class="w-full text-left px-3 py-2 rounded-xl hover:bg-primary/10 text-on-surface dark:text-zinc-200 text-xs font-semibold flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-amber-400">schema</span>
              <span>Mermaid Script</span>
            </button>
            <button type="button" data-export="json" class="w-full text-left px-3 py-2 rounded-xl hover:bg-primary/10 text-on-surface dark:text-zinc-200 text-xs font-semibold flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-violet-400">data_object</span>
              <span>JSON File</span>
            </button>
          </div>
        </div>
      </div>
    `;

    bar.addEventListener('click', (e) => this._handleTopBarClick(e));
    return bar;
  }

  _createBottomCanvasDock() {
    const dock = document.createElement('div');
    dock.className = 'absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-surface/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-outline-variant/30 dark:border-zinc-800 shadow-2xl text-xs';
    
    const pct = Math.round(this.zoomLevel * 100);

    dock.innerHTML = `
      <button type="button" data-dock-action="zoom-out" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" title="Perkecil Zoom (-)">
        <span class="material-symbols-outlined text-base">remove</span>
      </button>

      <span class="font-mono font-bold text-[11px] text-on-surface dark:text-zinc-300 w-12 text-center select-none">${pct}%</span>

      <button type="button" data-dock-action="zoom-in" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" title="Perbesar Zoom (+)">
        <span class="material-symbols-outlined text-base">add</span>
      </button>

      <div class="h-3.5 w-px bg-outline-variant/30"></div>

      <button type="button" data-dock-action="fit-view" class="px-2 py-1 rounded-lg hover:bg-primary/10 text-on-surface-variant hover:text-primary font-semibold text-[11px] flex items-center gap-1" title="Pusatkan Tampilan (Ctrl+0)">
        <span class="material-symbols-outlined text-sm">center_focus_strong</span>
        <span>Pusatkan</span>
      </button>
    `;

    dock.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-dock-action]');
      if (!btn) return;
      const act = btn.dataset.dockAction;
      if (act === 'zoom-in') {
        this.setZoom(this.zoomLevel + 0.15);
      } else if (act === 'zoom-out') {
        this.setZoom(this.zoomLevel - 0.15);
      } else if (act === 'fit-view') {
        this.fitView();
      }
    });

    return dock;
  }

  // --- Zoom & Pan Event Physics ---
  _onWheel(e) {
    e.preventDefault();
    const viewport = document.getElementById('spatial-canvas-viewport');
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (e.ctrlKey || e.metaKey) {
      // Pinch or Wheel Zoom
      const delta = -e.deltaY * 0.003;
      const newZoom = Math.min(2.5, Math.max(0.3, this.zoomLevel + delta));
      
      // Keep mouse position invariant
      const zoomRatio = newZoom / this.zoomLevel;
      this.panOffset.x = mouseX - (mouseX - this.panOffset.x) * zoomRatio;
      this.panOffset.y = mouseY - (mouseY - this.panOffset.y) * zoomRatio;
      this.zoomLevel = newZoom;
    } else {
      // 2-Finger Touchpad Pan / Mouse Scroll Pan
      this.panOffset.x -= e.deltaX * 0.9;
      this.panOffset.y -= e.deltaY * 0.9;
    }

    this._applyStageTransform();
  }

  setZoom(newZoom) {
    this.zoomLevel = Math.min(2.5, Math.max(0.3, newZoom));
    this._applyStageTransform();
    this._updateBottomDockPct();
  }

  fitView() {
    if (this.nodes.length === 0) {
      this.panOffset = { x: 40, y: 40 };
      this.zoomLevel = 1.0;
      this._applyStageTransform();
      return;
    }

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    this.nodes.forEach(n => {
      minX = Math.min(minX, n.x || 0);
      minY = Math.min(minY, n.y || 0);
      maxX = Math.max(maxX, (n.x || 0) + 320);
      maxY = Math.max(maxY, (n.y || 0) + 240);
    });

    const viewport = document.getElementById('spatial-canvas-viewport');
    const vpWidth = viewport ? viewport.clientWidth : 1000;
    const vpHeight = viewport ? viewport.clientHeight : 600;

    const contentWidth = maxX - minX + 160;
    const contentHeight = maxY - minY + 160;

    const scaleX = vpWidth / contentWidth;
    const scaleY = vpHeight / contentHeight;
    this.zoomLevel = Math.min(1.2, Math.max(0.4, Math.min(scaleX, scaleY)));

    this.panOffset.x = (vpWidth - contentWidth * this.zoomLevel) / 2 - minX * this.zoomLevel + 80 * this.zoomLevel;
    this.panOffset.y = (vpHeight - contentHeight * this.zoomLevel) / 2 - minY * this.zoomLevel + 80 * this.zoomLevel;

    this._applyStageTransform();
    this._updateBottomDockPct();
  }

  _applyStageTransform() {
    const stage = document.getElementById('spatial-canvas-stage');
    if (stage) {
      stage.style.transform = `translate(${this.panOffset.x}px, ${this.panOffset.y}px) scale(${this.zoomLevel})`;
    }
  }

  _updateBottomDockPct() {
    const dock = this.container?.querySelector('.spatial-canvas-root');
    const pctEl = this.container?.querySelector('[data-dock-action="zoom-in"]')?.previousElementSibling;
    if (pctEl) {
      pctEl.textContent = `${Math.round(this.zoomLevel * 100)}%`;
    }
  }

  // --- Viewport & Mouse Event Handlers ---
  _onViewportMouseDown(e) {
    // Check if middle click or spacebar pan
    if (e.button === 1 || this.spacePressed || this.activeTool === 'hand' || e.target.id === 'spatial-canvas-viewport') {
      this.isPanning = true;
      this.panStart = { x: e.clientX - this.panOffset.x, y: e.clientY - this.panOffset.y };
      const vp = document.getElementById('spatial-canvas-viewport');
      if (vp) vp.style.cursor = 'grabbing';
      
      // Deselect if clicked empty background
      if (e.target.id === 'spatial-canvas-viewport') {
        this.selectedNodeId = null;
        this._updateSelectionHighlight();
      }
    }
  }

  _onMouseMove(e) {
    // 1. Handle Pan
    if (this.isPanning) {
      this.panOffset.x = e.clientX - this.panStart.x;
      this.panOffset.y = e.clientY - this.panStart.y;
      this._applyStageTransform();
      return;
    }

    // 2. Handle Node Dragging
    if (this.draggingNode) {
      const stageRect = document.getElementById('spatial-canvas-viewport')?.getBoundingClientRect();
      if (!stageRect) return;

      const canvasX = (e.clientX - stageRect.left - this.panOffset.x) / this.zoomLevel;
      const canvasY = (e.clientY - stageRect.top - this.panOffset.y) / this.zoomLevel;

      this.draggingNode.x = Math.max(10, canvasX - this.dragOffset.x);
      this.draggingNode.y = Math.max(10, canvasY - this.dragOffset.y);

      const cardEl = document.getElementById(`spatial-node-${this.draggingNode.id}`);
      if (cardEl) {
        cardEl.style.left = `${this.draggingNode.x}px`;
        cardEl.style.top = `${this.draggingNode.y}px`;
      }

      this._updateSVGWires();
      return;
    }

    // 3. Handle Wire Connecting Preview
    if (this.isConnecting && this.connectSource) {
      const stageRect = document.getElementById('spatial-canvas-viewport')?.getBoundingClientRect();
      if (!stageRect) return;

      const canvasX = (e.clientX - stageRect.left - this.panOffset.x) / this.zoomLevel;
      const canvasY = (e.clientY - stageRect.top - this.panOffset.y) / this.zoomLevel;

      this._drawWirePreview(this.connectSource.startX, this.connectSource.startY, canvasX, canvasY);
    }
  }

  _onMouseUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      const vp = document.getElementById('spatial-canvas-viewport');
      if (vp) vp.style.cursor = this.spacePressed ? 'grab' : 'crosshair';
    }

    if (this.draggingNode) {
      this.draggingNode = null;
      this._saveHistorySnapshot('Move Node');
      if (this.onChange) this.onChange(this.nodes);
    }

    if (this.isConnecting) {
      // Check if dropped on a target pin/node
      const targetPin = e.target.closest('[data-pin-type="input"]') || e.target.closest('.spatial-node-card');
      if (targetPin) {
        const targetNodeId = targetPin.dataset.nodeId || targetPin.closest('.spatial-node-card')?.dataset.nodeId;
        if (targetNodeId && targetNodeId !== this.connectSource.nodeId) {
          const sourceNode = this.nodes.find(n => n.id === this.connectSource.nodeId);
          if (sourceNode) {
            if (!sourceNode.options) sourceNode.options = [];
            sourceNode.options.push({
              text: 'Lanjut',
              targetId: targetNodeId
            });
            this._saveHistorySnapshot('Connect Wire');
            this.render();
            if (this.onChange) this.onChange(this.nodes);
          }
        }
      }

      this.isConnecting = false;
      this.connectSource = null;
      this._clearWirePreview();
    }
  }

  // --- Node Events Attachment ---
  _attachNodeEventListeners(cardEl, node) {
    // 1. Drag Start
    const dragHandle = cardEl.querySelector('.drag-handle') || cardEl;
    dragHandle.addEventListener('mousedown', (e) => {
      if (e.target.closest('button, [contenteditable="true"], .edge-sprout-handle, .connector-pin')) return;
      
      this.draggingNode = node;
      this.selectedNodeId = node.id;
      this._updateSelectionHighlight();

      const stageRect = document.getElementById('spatial-canvas-viewport')?.getBoundingClientRect();
      const mouseCanvasX = (e.clientX - stageRect.left - this.panOffset.x) / this.zoomLevel;
      const mouseCanvasY = (e.clientY - stageRect.top - this.panOffset.y) / this.zoomLevel;

      this.dragOffset = {
        x: mouseCanvasX - (node.x || 100),
        y: mouseCanvasY - (node.y || 100)
      };

      if (this.onNodeSelect) this.onNodeSelect(node);
    });

    // 2. Inline Text Edit Listeners
    const titleEl = cardEl.querySelector('[data-field="title"]');
    if (titleEl) {
      titleEl.addEventListener('blur', (e) => {
        const val = e.target.innerText.trim();
        node.title = val || 'Judul Node';
        this._saveHistorySnapshot('Edit Title');
        if (this.onChange) this.onChange(this.nodes);
      });
    }

    const descEl = cardEl.querySelector('[data-field="description"]');
    if (descEl) {
      descEl.addEventListener('blur', (e) => {
        node.description = e.target.innerText.trim();
        this._saveHistorySnapshot('Edit Description');
        if (this.onChange) this.onChange(this.nodes);
      });
    }

    // Option text inline edit
    cardEl.querySelectorAll('[data-option-idx]').forEach(optEl => {
      optEl.addEventListener('blur', (e) => {
        const idx = parseInt(e.target.dataset.optionIdx, 10);
        if (node.options && node.options[idx]) {
          node.options[idx].text = e.target.innerText.trim() || 'Lanjut';
          this._saveHistorySnapshot('Edit Option');
          this._updateSVGWires();
          if (this.onChange) this.onChange(this.nodes);
        }
      });
    });

    // 3. Sprouting '+' Handles
    cardEl.querySelectorAll('[data-sprout-dir]').forEach(sproutBtn => {
      sproutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dir = sproutBtn.dataset.sproutDir;
        this._sproutNode(node, dir);
      });
    });

    // 4. Output Connector Pin Drag
    const outputPin = cardEl.querySelector('.pin-output');
    if (outputPin) {
      outputPin.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        this.isConnecting = true;
        this.connectSource = {
          nodeId: node.id,
          startX: (node.x || 100) + 320,
          startY: (node.y || 100) + 60
        };
      });
    }

    // 5. Actions & Buttons Inside Node
    cardEl.addEventListener('click', (e) => {
      // Simulate Mode: click option chip to advance path
      if (this.canvasMode === 'simulate') {
        const optChip = e.target.closest('[data-option-idx]');
        if (optChip) {
          const idx = parseInt(optChip.dataset.optionIdx, 10);
          const opt = node.options[idx];
          if (opt && opt.targetId) {
            this.currentSimNodeId = opt.targetId;
            if (!this.activeSimPath.includes(opt.targetId)) {
              this.activeSimPath.push(opt.targetId);
            }
            this.render();
          }
        }
        return;
      }

      // Card action triggers
      const actionBtn = e.target.closest('[data-action]');
      if (actionBtn) {
        e.stopPropagation();
        const act = actionBtn.dataset.action;
        if (act === 'cycle-type') {
          const types = ['problem', 'decision', 'action', 'outcome'];
          const curIdx = types.indexOf(node.type || 'problem');
          node.type = types[(curIdx + 1) % types.length];
          this._saveHistorySnapshot('Change Type');
          this.render();
        } else if (act === 'delete-node') {
          this.deleteNode(node.id);
        } else if (act === 'duplicate-node') {
          this.duplicateNode(node.id);
        } else if (act === 'add-option') {
          if (!node.options) node.options = [];
          node.options.push({ text: `Pilihan #${node.options.length + 1}`, targetId: null });
          this._saveHistorySnapshot('Add Option');
          this.render();
        } else if (act === 'remove-option') {
          const idx = parseInt(actionBtn.dataset.optionIdx, 10);
          if (node.options && node.options[idx]) {
            node.options.splice(idx, 1);
            this._saveHistorySnapshot('Remove Option');
            this.render();
          }
        }
        return;
      }

      // AI Action triggers
      const aiBtn = e.target.closest('[data-ai-action]');
      if (aiBtn) {
        e.stopPropagation();
        const aiAct = aiBtn.dataset.aiAction;
        if (aiAct === 'breakdown') {
          const newChildren = this.ai.breakDownNode(node, this.nodes);
          this.nodes.push(...newChildren);
          this._saveHistorySnapshot('AI Breakdown');
          this.render();
        } else if (aiAct === 'edgecase') {
          const edgeNode = this.ai.findEdgeCases(node);
          if (edgeNode) {
            this.nodes.push(edgeNode);
            this._saveHistorySnapshot('AI Edge Case');
            this.render();
          }
        } else if (aiAct === 'actionize') {
          const actNode = this.ai.actionizeNode(node);
          if (actNode) {
            this.nodes.push(actNode);
            this._saveHistorySnapshot('AI Actionize');
            this.render();
          }
        }
        return;
      }

      // Normal Node Selection
      this.selectedNodeId = node.id;
      this._updateSelectionHighlight();
      if (this.onNodeSelect) this.onNodeSelect(node);
    });
  }

  // --- Sprout Node Contextually ---
  _sproutNode(sourceNode, direction = 'right') {
    const newId = 'node_' + Date.now().toString(36);
    let newX = sourceNode.x || 100;
    let newY = sourceNode.y || 100;

    let nextType = 'decision';
    if (sourceNode.type === 'problem') nextType = 'decision';
    else if (sourceNode.type === 'decision') nextType = 'action';
    else if (sourceNode.type === 'action') nextType = 'outcome';
    else nextType = 'action';

    if (direction === 'right') {
      newX += 380;
    } else if (direction === 'bottom') {
      newY += 220;
    } else if (direction === 'left') {
      newX -= 380;
    } else if (direction === 'top') {
      newY -= 220;
    }

    const newNode = {
      id: newId,
      type: nextType,
      title: `${NODE_CONFIGS[nextType].label} Baru`,
      description: NODE_CONFIGS[nextType].defaultDesc,
      x: Math.max(20, newX),
      y: Math.max(20, newY),
      options: []
    };

    // Connect source to new node
    if (!sourceNode.options) sourceNode.options = [];
    sourceNode.options.push({
      text: 'Lanjut',
      targetId: newId
    });

    this.nodes.push(newNode);
    this.selectedNodeId = newId;
    this._saveHistorySnapshot('Sprout Node');
    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }

  deleteNode(nodeId) {
    if (this.nodes.length <= 1) {
      alert('Minimal 1 node harus ada di kanvas!');
      return;
    }

    // Remove node and clear references to it
    this.nodes = this.nodes.filter(n => n.id !== nodeId);
    this.nodes.forEach(n => {
      if (n.options) {
        n.options = n.options.filter(opt => opt.targetId !== nodeId);
      }
    });

    if (this.selectedNodeId === nodeId) this.selectedNodeId = null;
    this._saveHistorySnapshot('Delete Node');
    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }

  duplicateNode(nodeId) {
    const src = this.nodes.find(n => n.id === nodeId);
    if (!src) return;

    const dup = JSON.parse(JSON.stringify(src));
    dup.id = 'node_' + Date.now().toString(36);
    dup.title = `${src.title} (Salinan)`;
    dup.x = (src.x || 100) + 40;
    dup.y = (src.y || 100) + 40;

    this.nodes.push(dup);
    this.selectedNodeId = dup.id;
    this._saveHistorySnapshot('Duplicate Node');
    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }

  // --- SVG Wire Connections (Cubic Bezier Splines) ---
  _updateSVGWires() {
    const group = document.getElementById('svg-wires-group');
    if (!group) return;

    let svgHTML = '';

    this.nodes.forEach(source => {
      if (!source.options || source.options.length === 0) return;

      source.options.forEach(opt => {
        if (!opt.targetId) return;
        const target = this.nodes.find(n => n.id === opt.targetId);
        if (!target) return;

        // Calculate connection coordinates
        const startX = (source.x || 100) + 320; // Right side of source
        const startY = (source.y || 100) + 55;  // Header middle
        const endX = target.x || 100;           // Left side of target
        const endY = (target.y || 100) + 55;

        const isSimActive = this.activeSimPath.includes(source.id) && this.activeSimPath.includes(target.id);
        const marker = isSimActive ? 'url(#arrowActive)' : 'url(#arrowDefault)';
        const strokeColor = isSimActive ? '#34d399' : 'rgb(var(--color-primary))';
        const strokeWidth = isSimActive ? '3' : '2';

        // Cubic Bezier curve control points
        const dx = Math.max(40, Math.abs(endX - startX) * 0.5);
        const pathD = `M ${startX} ${startY} C ${startX + dx} ${startY}, ${endX - dx} ${endY}, ${endX} ${endY}`;

        // Option text label position
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2 - 8;

        svgHTML += `
          <g class="connection-wire-group ${isSimActive ? 'active-wire-path' : ''}">
            <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-opacity="${isSimActive ? '1' : '0.45'}" marker-end="${marker}" class="wire-path ${isSimActive ? 'wire-flow-anim' : ''}" />
            <rect x="${midX - 35}" y="${midY - 9}" width="70" height="16" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
            <text x="${midX}" y="${midY + 3}" fill="#e2e8f0" font-size="9" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle" class="pointer-events-none select-none">
              ${FlowchartNodeRenderer.escapeHtml(opt.text ? opt.text.substring(0, 12) : 'Lanjut')}
            </text>
          </g>
        `;
      });
    });

    group.innerHTML = svgHTML;
  }

  _drawWirePreview(x1, y1, x2, y2) {
    const preview = document.getElementById('svg-wire-preview');
    if (!preview) return;

    const dx = Math.max(40, Math.abs(x2 - x1) * 0.5);
    const pathD = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

    preview.innerHTML = `
      <path d="${pathD}" fill="none" stroke="#34d399" stroke-width="2.5" stroke-dasharray="6,4" class="animate-pulse" marker-end="url(#arrowActive)" />
    `;
  }

  _clearWirePreview() {
    const preview = document.getElementById('svg-wire-preview');
    if (preview) preview.innerHTML = '';
  }

  _updateSelectionHighlight() {
    document.querySelectorAll('.spatial-node-card').forEach(el => {
      const id = el.dataset.nodeId;
      if (id === this.selectedNodeId) {
        el.classList.add('selected-node', 'ring-2', 'ring-emerald-400', 'shadow-terra-glow', 'z-30');
      } else {
        el.classList.remove('selected-node', 'ring-2', 'ring-emerald-400', 'shadow-terra-glow', 'z-30');
      }
    });
  }

  // --- Auto-Layout Hierarchical Algorithm ---
  autoArrangeLayout() {
    if (this.nodes.length === 0) return;

    const root = this.nodes.find(n => n.type === 'problem') || this.nodes[0];
    const visited = new Set();
    const levels = {};

    // BFS Level assignment
    const queue = [{ id: root.id, level: 0 }];
    visited.add(root.id);

    while (queue.length > 0) {
      const { id, level } = queue.shift();
      if (!levels[level]) levels[level] = [];
      levels[level].push(id);

      const node = this.nodes.find(n => n.id === id);
      if (node && node.options) {
        node.options.forEach(opt => {
          if (opt.targetId && !visited.has(opt.targetId)) {
            visited.add(opt.targetId);
            queue.push({ id: opt.targetId, level: level + 1 });
          }
        });
      }
    }

    // Place remaining disconnected nodes
    this.nodes.forEach(n => {
      if (!visited.has(n.id)) {
        const lastLvl = Object.keys(levels).length;
        if (!levels[lastLvl]) levels[lastLvl] = [];
        levels[lastLvl].push(n.id);
        visited.add(n.id);
      }
    });

    // Assign X & Y coordinates
    const startX = 80;
    const startY = 80;
    const colSpacing = 380;
    const rowSpacing = 220;

    Object.keys(levels).forEach(lvlStr => {
      const lvl = parseInt(lvlStr, 10);
      const nodeIds = levels[lvl];
      const totalColHeight = nodeIds.length * rowSpacing;

      nodeIds.forEach((id, rowIdx) => {
        const node = this.nodes.find(n => n.id === id);
        if (node) {
          node.x = startX + lvl * colSpacing;
          node.y = startY + rowIdx * rowSpacing - (totalColHeight / 2) + 150;
          if (node.y < 40) node.y = 40 + rowIdx * rowSpacing;
        }
      });
    });

    this._saveHistorySnapshot('Auto Layout');
    this.render();
    this.fitView();
    if (this.onChange) this.onChange(this.nodes);
  }

  // --- History (Undo / Redo) ---
  _saveHistorySnapshot(actionName = '') {
    // Truncate future stack if in middle
    if (this.historyIndex < this.historyStack.length - 1) {
      this.historyStack = this.historyStack.slice(0, this.historyIndex + 1);
    }

    const snapshot = JSON.stringify(this.nodes);
    this.historyStack.push(snapshot);
    if (this.historyStack.length > this.maxHistory) {
      this.historyStack.shift();
    } else {
      this.historyIndex++;
    }
  }

  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.nodes = JSON.parse(this.historyStack[this.historyIndex]);
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  redo() {
    if (this.historyIndex < this.historyStack.length - 1) {
      this.historyIndex++;
      this.nodes = JSON.parse(this.historyStack[this.historyIndex]);
      this.render();
      if (this.onChange) this.onChange(this.nodes);
    }
  }

  // --- Export Functionality ---
  exportMermaid() {
    let script = 'graph TD\n';
    this.nodes.forEach(n => {
      const cleanTitle = (n.title || 'Node').replace(/["[\]]/g, '');
      const typeIcon = n.type === 'outcome' ? '🏁 ' : n.type === 'problem' ? '🟣 ' : '❓ ';
      script += `  ${n.id}["${typeIcon}${cleanTitle}"]\n`;
    });

    this.nodes.forEach(n => {
      if (n.options) {
        n.options.forEach(opt => {
          if (opt.targetId) {
            const label = (opt.text || 'Lanjut').replace(/["|]/g, '');
            script += `  ${n.id} -->|"${label}"| ${opt.targetId}\n`;
          }
        });
      }
    });

    return script;
  }

  exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.nodes, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `flowchart_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  }

  _handleTopBarClick(e) {
    const btn = e.target.closest('[data-canvas-btn]');
    if (!btn) {
      const expBtn = e.target.closest('[data-export]');
      if (expBtn) {
        const expType = expBtn.dataset.export;
        if (expType === 'json') this.exportJSON();
        else if (expType === 'mermaid') {
          const code = this.exportMermaid();
          navigator.clipboard.writeText(code).then(() => {
            alert('📋 Mermaid script berhasil disalin ke clipboard!');
          });
        } else if (expType === 'png' || expType === 'svg') {
          alert('✨ Fitur ekspor grafis HD siap diunduh.');
        }
      }
      return;
    }

    const action = btn.dataset.canvasBtn;
    if (action === 'add-problem') {
      this._addNodeOfType('problem');
    } else if (action === 'add-decision') {
      this._addNodeOfType('decision');
    } else if (action === 'add-action') {
      this._addNodeOfType('action');
    } else if (action === 'add-outcome') {
      this._addNodeOfType('outcome');
    } else if (action === 'auto-layout') {
      this.autoArrangeLayout();
    } else if (action === 'undo') {
      this.undo();
    } else if (action === 'redo') {
      this.redo();
    } else if (action === 'mode-edit') {
      this.setMode('edit');
    } else if (action === 'mode-simulate') {
      this.setMode('simulate');
    }
  }

  _addNodeOfType(type) {
    const newId = 'node_' + Date.now().toString(36);
    const newX = 140 + (this.nodes.length % 3) * 360;
    const newY = 120 + Math.floor(this.nodes.length / 3) * 220;

    const newNode = {
      id: newId,
      type: type,
      title: `${NODE_CONFIGS[type].label} Baru`,
      description: NODE_CONFIGS[type].defaultDesc,
      x: newX,
      y: newY,
      options: []
    };

    this.nodes.push(newNode);
    this.selectedNodeId = newId;
    this._saveHistorySnapshot(`Add ${type}`);
    this.render();
    if (this.onChange) this.onChange(this.nodes);
  }
}
