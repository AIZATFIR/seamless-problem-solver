/**
 * app.js - Unified State & Experience Controller for Seamless Problem Solver
 * Links Hero Problem Launcher -> Spatial Thinking Canvas -> Preset Mental Models -> Serenity Tools
 */

import { SpatialThinkingCanvas } from './src/SpatialThinkingCanvas.js';
import { VisualReasoningAI } from './src/VisualReasoningAI.js';
import { FRAMEWORK_PRESETS } from './src/FrameworkPresets.js';
import { AudioAmbientEngine } from './src/AudioAmbientEngine.js';
import { MermaidTransmitterParser } from './src/MermaidTransmitterParser.js';

class SeamlessProblemSolverApp {
  constructor() {
    this.currentTheme = localStorage.getItem('terra_theme') || 'dark';
    this.activeWorkspace = 'canvas'; // 'canvas' or 'models'

    // Domain Engines
    this.ai = new VisualReasoningAI();
    this.audioSynth = new AudioAmbientEngine();
    this.transmitterParser = new MermaidTransmitterParser();

    // Serenity & Utility State
    this.isAmbientPlaying = false;
    this.isBreathingActive = false;
    this.breathingTimer = null;
    this.journalEntries = JSON.parse(localStorage.getItem('terra_journal') || '[]');

    // Initialize Spatial Canvas
    const canvasMount = document.getElementById('spatial-canvas-mount');
    const initialNodes = JSON.parse(localStorage.getItem('terra_canvas_nodes') || 'null') || FRAMEWORK_PRESETS.stoic.nodes;

    this.canvas = new SpatialThinkingCanvas({
      container: canvasMount,
      nodes: initialNodes,
      onChange: (nodes) => {
        try {
          localStorage.setItem('terra_canvas_nodes', JSON.stringify(nodes));
        } catch (e) {}
      }
    });

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.renderModelsGrid();
    this.renderJournalList();
    this.setupEventListeners();

    // Initial render
    this.canvas.render();
    setTimeout(() => {
      this.canvas.fitView();
    }, 100);
  }

  setupEventListeners() {
    // Theme Switcher
    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) {
      btnTheme.addEventListener('click', () => {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('terra_theme', this.currentTheme);
        this.applyTheme(this.currentTheme);
      });
    }

    // Ambient Audio Switcher
    const btnAmbient = document.getElementById('btn-ambient');
    if (btnAmbient) {
      btnAmbient.addEventListener('click', () => this.toggleAmbientSound());
    }

    // Breathing Modal Trigger
    const btnBreathing = document.getElementById('btn-breathing-modal');
    if (btnBreathing) {
      btnBreathing.addEventListener('click', () => this.openBreathingModal());
    }

    // Global Key Shortcuts: S (Sound), B (Breathing), J (Journal), F (Fullscreen), Esc
    document.addEventListener('keydown', (e) => {
      const isInput = e.target.closest('input, textarea, select, [contenteditable="true"]');

      if (e.key === 'Escape') {
        this.closeAllModals();
      }

      if (!isInput && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          this.toggleAmbientSound();
        } else if (e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          this.openBreathingModal();
        } else if (e.key === 'j' || e.key === 'J') {
          e.preventDefault();
          this.toggleJournalDrawer(true);
        } else if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          this.toggleGlobalFullscreen();
        }
      }
    });
  }

  // --- Workspace Navigation ---
  showWorkspace(workspace) {
    this.activeWorkspace = workspace;

    const wsCanvas = document.getElementById('workspace-canvas');
    const wsModels = document.getElementById('workspace-models');
    const navCanvas = document.getElementById('nav-btn-canvas');
    const navModels = document.getElementById('nav-btn-models');

    if (workspace === 'canvas') {
      if (wsCanvas) wsCanvas.classList.remove('hidden');
      if (wsModels) wsModels.classList.add('hidden');
      if (navCanvas) {
        navCanvas.className = 'nav-tab-btn active-tab px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all';
      }
      if (navModels) {
        navModels.className = 'nav-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all text-on-surface-variant hover:text-primary';
      }
      this.canvas.render();
    } else {
      if (wsCanvas) wsCanvas.classList.add('hidden');
      if (wsModels) wsModels.classList.remove('hidden');
      if (navCanvas) {
        navCanvas.className = 'nav-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all text-on-surface-variant hover:text-primary';
      }
      if (navModels) {
        navModels.className = 'nav-tab-btn active-tab px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all';
      }
    }
  }

  // --- Hero Problem Launcher ---
  launchProblemFromHero() {
    const input = document.getElementById('input-problem-hero');
    const text = input ? input.value.trim() : '';
    if (!text) {
      alert('Silakan tuliskan masalah atau pertanyaan yang ingin kamu urai!');
      return;
    }

    // Deconstruct problem into spatial node graph
    const nodes = this.ai.deconstructProblem(text);
    this.canvas.setNodes(nodes);
    this.showWorkspace('canvas');
    this.canvas.fitView();

    if (input) input.value = '';
  }

  loadFrameworkPreset(presetKey) {
    if (!presetKey) return;
    const preset = FRAMEWORK_PRESETS[presetKey];
    if (preset && preset.nodes) {
      this.canvas.setNodes(preset.nodes);
      this.showWorkspace('canvas');
      this.canvas.fitView();
    }

    const select = document.getElementById('select-framework-preset');
    if (select) select.value = '';
  }

  // --- Mental Models Grid ---
  renderModelsGrid() {
    const grid = document.getElementById('models-grid');
    if (!grid) return;

    grid.innerHTML = Object.values(FRAMEWORK_PRESETS).map(item => `
      <div class="terra-card p-6 rounded-3xl border border-outline-variant/30 dark:border-zinc-800 hover:border-emerald-500/50 flex flex-col justify-between space-y-4 group transition-all">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400">${item.tag}</span>
            <span class="material-symbols-outlined text-on-surface-variant group-hover:text-emerald-400 transition-colors">schema</span>
          </div>
          <h3 class="font-headline font-bold text-lg text-on-surface dark:text-zinc-100">${item.title}</h3>
          <p class="text-xs text-on-surface-variant leading-relaxed">${item.description}</p>
        </div>

        <button type="button" class="w-full py-2.5 px-4 rounded-xl bg-surface-container dark:bg-zinc-800 hover:bg-emerald-500 hover:text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-sm" onclick="app.loadFrameworkPreset('${item.id}')">
          <span class="material-symbols-outlined text-sm">play_arrow</span>
          <span>Buka di Kanvas</span>
        </button>
      </div>
    `).join('');
  }

  // --- Universal Transmitter Protocol (Mermaid) ---
  openTransmitterModal() {
    const modal = document.getElementById('modal-transmitter');
    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-transmitter-card');
      if (card) card.classList.remove('scale-95');
    }
  }

  closeTransmitterModal() {
    const modal = document.getElementById('modal-transmitter');
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-transmitter-card');
      if (card) card.classList.add('scale-95');
    }
  }

  copyAITransmitterPrompt() {
    const prompt = `Saya ingin membuat flowchart pengambilan keputusan interaktif. 
Tolong buatkan diagram alur berpikir dengan sintaks Mermaid \`graph TD\`.
Gunakan format node:
step1["❓ Pertanyaan Pertama?"]
step1 -->|"YA"| step2["❓ Langkah Selanjutnya"]
step1 -->|"TIDAK"| res1["🏁 Kesimpulan Hasil"]

Topik masalah: [TULISKAN MASALAH KAMU DI SINI]`;

    navigator.clipboard.writeText(prompt).then(() => {
      alert('📋 Prompt template AI berhasil disalin! Tempelkan ke ChatGPT/Gemini/Claude.');
    });
  }

  parseAndApplyTransmitterScript() {
    const input = document.getElementById('transmitter-input');
    const script = input ? input.value : '';
    if (!script.trim()) {
      alert('Silakan tempelkan kode Mermaid script terlebih dahulu!');
      return;
    }

    const flowData = this.transmitterParser.parseMermaidScript(script, 'Transmitter Flow');
    
    // Convert flowData.nodes dictionary to spatial canvas array
    const nodesArray = [];
    const keys = Object.keys(flowData.nodes || {});
    keys.forEach((k, idx) => {
      const n = flowData.nodes[k];
      nodesArray.push({
        id: n.id,
        type: n.isResult ? 'outcome' : (idx === 0 ? 'problem' : 'decision'),
        title: n.title_id || n.q_id || 'Langkah',
        description: n.msg_id || n.sub_id || 'Pertimbangan...',
        x: 120 + (idx % 4) * 360,
        y: 100 + Math.floor(idx / 4) * 220,
        options: (n.options || []).map(opt => ({
          text: opt.text_id || opt.text || 'Lanjut',
          targetId: opt.next || opt.targetId
        }))
      });
    });

    this.canvas.setNodes(nodesArray);
    this.showWorkspace('canvas');
    this.canvas.autoArrangeLayout();
    this.closeTransmitterModal();
  }

  // --- Serenity Audio Engine ---
  toggleAmbientSound() {
    const btn = document.getElementById('btn-ambient');
    const icon = document.getElementById('icon-sound');
    const txt = document.getElementById('txt-ambient');

    if (this.isAmbientPlaying) {
      this.audioSynth.stop();
      this.isAmbientPlaying = false;
      if (icon) icon.textContent = 'volume_off';
      if (txt) txt.textContent = 'Suara Alam';
      if (btn) btn.classList.remove('bg-emerald-500/20', 'text-emerald-400');
    } else {
      this.audioSynth.start('rain');
      this.isAmbientPlaying = true;
      if (icon) icon.textContent = 'volume_up';
      if (txt) txt.textContent = 'Heningkan';
      if (btn) btn.classList.add('bg-emerald-500/20', 'text-emerald-400');
    }
  }

  // --- 4-7-8 Breathing Guide ---
  openBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-breathing-card');
      if (card) card.classList.remove('scale-95');
    }
  }

  closeBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      const card = document.getElementById('modal-breathing-card');
      if (card) card.classList.add('scale-95');
    }
    if (this.isBreathingActive) {
      this.toggleBreathing();
    }
  }

  toggleBreathing() {
    const btn = document.getElementById('txt-start-breath');
    const stateText = document.getElementById('breath-state-text');
    const timerText = document.getElementById('breath-timer');
    const circle = document.getElementById('breath-circle');

    if (this.isBreathingActive) {
      clearInterval(this.breathingTimer);
      this.isBreathingActive = false;
      if (btn) btn.textContent = 'Mulai Latihan';
      if (stateText) stateText.textContent = 'Mulai';
      if (timerText) timerText.textContent = '0';
      if (circle) circle.className = 'w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      return;
    }

    this.isBreathingActive = true;
    if (btn) btn.textContent = 'Hentikan';

    let phase = 'inhale'; // inhale (4s), hold (7s), exhale (8s)
    let count = 4;

    const runPhase = () => {
      if (!this.isBreathingActive) return;

      if (phase === 'inhale') {
        if (stateText) stateText.textContent = 'Tarik';
        if (circle) circle.className = 'w-36 h-36 rounded-full bg-emerald-500/35 text-emerald-300 flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      } else if (phase === 'hold') {
        if (stateText) stateText.textContent = 'Tahan';
        if (circle) circle.className = 'w-36 h-36 rounded-full bg-amber-500/35 text-amber-300 flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      } else if (phase === 'exhale') {
        if (stateText) stateText.textContent = 'Hembuskan';
        if (circle) circle.className = 'w-20 h-20 rounded-full bg-sky-500/25 text-sky-300 flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
      }
      if (timerText) timerText.textContent = count;
    };

    runPhase();

    this.breathingTimer = setInterval(() => {
      count--;
      if (count <= 0) {
        if (phase === 'inhale') {
          phase = 'hold';
          count = 7;
        } else if (phase === 'hold') {
          phase = 'exhale';
          count = 8;
        } else {
          phase = 'inhale';
          count = 4;
        }
      }
      runPhase();
    }, 1000);
  }

  // --- Reflection Journal ---
  toggleJournalDrawer(open = null) {
    const drawer = document.getElementById('drawer-journal');
    if (!drawer) return;

    const isOpen = !drawer.classList.contains('translate-x-full');
    const shouldOpen = open !== null ? open : !isOpen;

    if (shouldOpen) {
      drawer.classList.remove('translate-x-full');
    } else {
      drawer.classList.add('translate-x-full');
    }
  }

  saveJournalEntry() {
    const problemInput = document.getElementById('journal-input-problem');
    const actionInput = document.getElementById('journal-input-action');

    const problem = problemInput ? problemInput.value.trim() : '';
    const action = actionInput ? actionInput.value.trim() : '';

    if (!problem && !action) {
      alert('Tuliskan setidaknya satu poin refleksi!');
      return;
    }

    const entry = {
      id: 'entry_' + Date.now(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      problem,
      action
    };

    this.journalEntries.unshift(entry);
    try {
      localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));
    } catch (e) {}

    if (problemInput) problemInput.value = '';
    if (actionInput) actionInput.value = '';

    this.renderJournalList();
  }

  renderJournalList() {
    const list = document.getElementById('journal-list');
    if (!list) return;

    if (this.journalEntries.length === 0) {
      list.innerHTML = `<p class="text-xs text-on-surface-variant/60 italic text-center py-4">Belum ada catatan refleksi tersimpan.</p>`;
      return;
    }

    list.innerHTML = this.journalEntries.map(e => `
      <div class="p-3.5 rounded-2xl bg-surface-container/60 dark:bg-zinc-950/60 border border-outline-variant/20 dark:border-zinc-800 space-y-1 text-xs">
        <div class="flex items-center justify-between text-[10px] font-mono text-on-surface-variant/70">
          <span>${e.date}</span>
          <button type="button" class="text-on-surface-variant hover:text-red-400" onclick="app.deleteJournalEntry('${e.id}')">✕</button>
        </div>
        ${e.problem ? `<p class="font-semibold text-on-surface dark:text-zinc-200">💭 ${this.escapeHtml(e.problem)}</p>` : ''}
        ${e.action ? `<p class="text-emerald-400 font-bold">🎯 ${this.escapeHtml(e.action)}</p>` : ''}
      </div>
    `).join('');
  }

  deleteJournalEntry(id) {
    this.journalEntries = this.journalEntries.filter(e => e.id !== id);
    try {
      localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));
    } catch (e) {}
    this.renderJournalList();
  }

  // --- Fullscreen & Utilities ---
  toggleGlobalFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      const icon = document.getElementById('icon-global-fullscreen');
      if (icon) icon.textContent = 'fullscreen_exit';
    } else {
      document.exitFullscreen?.().catch(() => {});
      const icon = document.getElementById('icon-global-fullscreen');
      if (icon) icon.textContent = 'fullscreen';
    }
  }

  closeAllModals() {
    this.closeTransmitterModal();
    this.closeBreathingModal();
    this.toggleJournalDrawer(false);
  }

  applyTheme(theme) {
    const icon = document.getElementById('icon-theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      if (icon) icon.textContent = 'light_mode';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      if (icon) icon.textContent = 'dark_mode';
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }
}

// Instantiate on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SeamlessProblemSolverApp();
});
