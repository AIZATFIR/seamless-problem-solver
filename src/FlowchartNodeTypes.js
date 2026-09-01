/**
 * FlowchartNodeTypes.js - Semantic Visual Node Components for Spatial Canvas
 * Provides rich DOM rendering, inline live-editing, connector pins, and contextual affordances.
 */

export const NODE_CONFIGS = {
  problem: {
    type: 'problem',
    label: 'Masalah',
    icon: 'psychology_alt',
    colorName: 'violet',
    accentBg: 'bg-violet-500/15',
    accentBorder: 'border-violet-500/40',
    accentText: 'text-violet-400',
    headerBadge: '🟣 MASALAH UTAMA',
    defaultTitle: 'Akar Masalah / Pertanyaan',
    defaultDesc: 'Apa hal utama yang sedang membebani pikiran atau perlu dipecahkan?'
  },
  decision: {
    type: 'decision',
    label: 'Keputusan',
    icon: 'alt_route',
    colorName: 'amber',
    accentBg: 'bg-amber-500/15',
    accentBorder: 'border-amber-500/40',
    accentText: 'text-amber-400',
    headerBadge: '🟡 CABANG KEPUTUSAN',
    defaultTitle: 'Faktor Pertimbangan',
    defaultDesc: 'Pilihan atau kondisi apa yang membagi arah penyelesaian?'
  },
  action: {
    type: 'action',
    label: 'Tindakan',
    icon: 'bolt',
    colorName: 'sky',
    accentBg: 'bg-sky-500/15',
    accentBorder: 'border-sky-500/40',
    accentText: 'text-sky-400',
    headerBadge: '🔵 LANGKAH NYATA',
    defaultTitle: 'Aksi 5-10 Menit',
    defaultDesc: 'Tindakan konkret dan terukur yang bisa dieksekusi sekarang.'
  },
  outcome: {
    type: 'outcome',
    label: 'Hasil / Solusi',
    icon: 'task_alt',
    colorName: 'emerald',
    accentBg: 'bg-emerald-500/15',
    accentBorder: 'border-emerald-500/40',
    accentText: 'text-emerald-400',
    headerBadge: '🟢 HASIL & KETENANGAN',
    defaultTitle: 'Solusi Tuntas',
    defaultDesc: 'Hasil akhir yang jelas dan ketenangan batin yang dicapai.'
  }
};

export class FlowchartNodeRenderer {
  /**
   * Render complete DOM element for a single spatial node card
   */
  static createNodeElement(node, isSelected = false, isSimActive = false) {
    const cfg = NODE_CONFIGS[node.type] || NODE_CONFIGS.problem;

    const el = document.createElement('div');
    el.className = `spatial-node-card absolute select-none transition-shadow duration-200 group/card ${isSelected ? 'selected-node ring-2 ring-emerald-400 shadow-terra-glow z-30' : 'z-20'} ${isSimActive ? 'sim-active-node ring-2 ring-emerald-400' : ''}`;
    el.id = `spatial-node-${node.id}`;
    el.dataset.nodeId = node.id;
    el.dataset.nodeType = node.type || 'problem';
    el.style.left = `${node.x || 100}px`;
    el.style.top = `${node.y || 100}px`;

    // Inner Card Container
    el.innerHTML = `
      <div class="w-[280px] sm:w-[320px] rounded-2xl bg-surface/95 dark:bg-zinc-900/95 backdrop-blur-xl border ${isSelected ? cfg.accentBorder : 'border-outline-variant/30 dark:border-zinc-800'} hover:border-primary/50 shadow-terra-soft p-4 flex flex-col gap-2.5 transition-all">
        
        <!-- Node Header Strip -->
        <div class="flex items-center justify-between gap-2 drag-handle cursor-grab active:cursor-grabbing pb-1 border-b border-outline-variant/15 dark:border-zinc-800/80">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm ${cfg.accentText}">${cfg.icon}</span>
            <span class="text-[10px] font-mono font-bold tracking-wider uppercase ${cfg.accentText}">${cfg.headerBadge}</span>
          </div>
          
          <div class="flex items-center gap-1 opacity-60 group-hover/card:opacity-100 transition-opacity">
            <!-- Node Type Quick Cycle Switcher -->
            <button type="button" data-action="cycle-type" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant text-[10px] font-bold" title="Ganti Tipe Node">
              <span class="material-symbols-outlined text-xs">change_circle</span>
            </button>
            <!-- Delete Node Button -->
            <button type="button" data-action="delete-node" class="p-1 rounded-lg hover:bg-red-500/10 text-on-surface-variant hover:text-red-400 text-[10px]" title="Hapus Node (Del)">
              <span class="material-symbols-outlined text-xs">delete</span>
            </button>
          </div>
        </div>

        <!-- Node Title (Inline Editable) -->
        <div class="node-title-container">
          <div 
            class="node-editable-title font-headline font-bold text-sm sm:text-base text-on-surface dark:text-zinc-100 outline-none focus:ring-1 focus:ring-primary/50 rounded px-1 -mx-1 transition-all"
            contenteditable="true"
            data-field="title"
            placeholder="${cfg.defaultTitle}"
            spellcheck="false"
          >${this.escapeHtml(node.title || cfg.defaultTitle)}</div>
        </div>

        <!-- Node Description (Inline Editable) -->
        <div class="node-desc-container">
          <div 
            class="node-editable-desc font-body text-xs text-on-surface-variant/80 dark:text-zinc-400 outline-none focus:ring-1 focus:ring-primary/50 rounded px-1 -mx-1 leading-relaxed transition-all"
            contenteditable="true"
            data-field="description"
            placeholder="${cfg.defaultDesc}"
            spellcheck="false"
          >${this.escapeHtml(node.description || cfg.defaultDesc)}</div>
        </div>

        <!-- Decision Options / Next Branches Chips (if any) -->
        ${this._renderOptionsChips(node)}

        <!-- Quick Action Footer for Selected Node -->
        ${isSelected ? this._renderContextualToolbar(node) : ''}
      </div>

      <!-- Edge 4-Way Sprouting '+' Handles (Top, Right, Bottom, Left) -->
      <button type="button" class="edge-sprout-handle edge-handle-top" data-sprout-dir="top" title="Sprout node ke atas (+)">
        <span class="material-symbols-outlined text-xs">add</span>
      </button>
      <button type="button" class="edge-sprout-handle edge-handle-right" data-sprout-dir="right" title="Sprout node ke kanan (+)">
        <span class="material-symbols-outlined text-xs">add</span>
      </button>
      <button type="button" class="edge-sprout-handle edge-handle-bottom" data-sprout-dir="bottom" title="Sprout node ke bawah (+)">
        <span class="material-symbols-outlined text-xs">add</span>
      </button>
      <button type="button" class="edge-sprout-handle edge-handle-left" data-sprout-dir="left" title="Sprout node ke kiri (+)">
        <span class="material-symbols-outlined text-xs">add</span>
      </button>

      <!-- Connection Wire Pin Output Handle (for manual drag-to-connect) -->
      <div class="connector-pin pin-output" data-pin-type="output" data-node-id="${node.id}" title="Tarik garis konektor dari sini"></div>
      <div class="connector-pin pin-input" data-pin-type="input" data-node-id="${node.id}"></div>
    `;

    return el;
  }

  static _renderOptionsChips(node) {
    if (!node.options || node.options.length === 0) {
      if (node.type === 'outcome') return '';
      return `
        <div class="pt-1">
          <button type="button" data-action="add-option" class="w-full py-1.5 px-2 rounded-xl bg-surface-container/60 dark:bg-zinc-800/60 hover:bg-primary/10 border border-dashed border-outline-variant/30 text-[11px] font-bold text-on-surface-variant hover:text-primary flex items-center justify-center gap-1 transition-all">
            <span class="material-symbols-outlined text-xs">add_circle</span>
            <span>Tambah Cabang Pilihan</span>
          </button>
        </div>
      `;
    }

    return `
      <div class="pt-1 space-y-1.5">
        <div class="text-[10px] font-mono font-bold tracking-wider uppercase text-on-surface-variant/70">Cabang Alur:</div>
        <div class="space-y-1">
          ${node.options.map((opt, idx) => `
            <div class="flex items-center justify-between gap-1.5 p-1.5 rounded-xl bg-surface-container/70 dark:bg-zinc-800/70 border border-outline-variant/20 hover:border-primary/40 text-xs">
              <div 
                class="flex-grow font-semibold text-on-surface dark:text-zinc-200 outline-none px-1"
                contenteditable="true"
                data-option-idx="${idx}"
                spellcheck="false"
              >${this.escapeHtml(opt.text || 'Lanjut')}</div>

              <div class="flex items-center gap-1 shrink-0">
                ${opt.targetId ? `<span class="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[9px] font-bold">➔ Terhubung</span>` : `<span class="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 text-[9px] font-bold">Pilih Tujuan</span>`}
                <button type="button" data-action="remove-option" data-option-idx="${idx}" class="text-on-surface-variant hover:text-red-400 p-0.5 rounded">
                  <span class="material-symbols-outlined text-xs">close</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
        <button type="button" data-action="add-option" class="w-full py-1 rounded-lg bg-surface-container/40 dark:bg-zinc-800/40 hover:bg-primary/10 text-[10px] font-bold text-primary flex items-center justify-center gap-1 transition-all">
          <span class="material-symbols-outlined text-xs">add</span>
          <span>+ Opsi Lain</span>
        </button>
      </div>
    `;
  }

  static _renderContextualToolbar(node) {
    return `
      <div class="pt-2 border-t border-outline-variant/15 dark:border-zinc-800 flex items-center justify-between gap-1 flex-wrap">
        <div class="inline-flex items-center gap-1">
          <button type="button" data-ai-action="breakdown" class="px-2 py-1 rounded-lg bg-primary/15 hover:bg-primary/25 text-primary text-[10px] font-extrabold flex items-center gap-1 transition-all shadow-sm" title="AI: Urai node ini jadi sub-pertanyaan">
            <span class="material-symbols-outlined text-xs">bolt</span>
            <span>Urai AI</span>
          </button>
          
          <button type="button" data-ai-action="edgecase" class="px-2 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-[10px] font-extrabold flex items-center gap-1 transition-all shadow-sm" title="AI: Cari kemungkinan gagal / edge cases">
            <span class="material-symbols-outlined text-xs">visibility</span>
            <span>Edge Case</span>
          </button>

          <button type="button" data-ai-action="actionize" class="px-2 py-1 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 text-[10px] font-extrabold flex items-center gap-1 transition-all shadow-sm" title="AI: Ubah jadi langkah nyata 5 menit">
            <span class="material-symbols-outlined text-xs">play_arrow</span>
            <span>Aksi 5m</span>
          </button>
        </div>

        <button type="button" data-action="duplicate-node" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant text-[10px] font-bold" title="Duplikasi (D)">
          <span class="material-symbols-outlined text-xs">content_copy</span>
        </button>
      </div>
    `;
  }

  static escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }
}
