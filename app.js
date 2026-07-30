/**
 * Terra — Seamless Problem Solver Core Application JavaScript
 */

const translations = {
  id: {
    navBreathing: "Napas Calm",
    navJournal: "Jurnal",
    step1Tag: "Refleksi Pertama",
    step1Title: "Punya Masalah dalam Hidup?",
    step1Sub: "Jawab dengan jujur. Semua berawal dari keberanian mengakui kondisi pikiran kita saat ini.",
    btnYes: "YA",
    btnNo: "TIDAK",
    step2Tag: "Lingkaran Kendali",
    step2Title: "Bisa melakukan sesuatu?",
    step2Sub: "Apakah solusi berada dalam jangkauan tindakanmu hari ini, atau masalah ini di luar kendalimu?",
    btnYesAction: "YA, BISA",
    btnNoAction: "TIDAK BISA",
    btnBack: "Kembali",
    step3Title: "Lalu Kenapa Khawatir?",
    btnRestart: "Mulai Lagi",
    btnWriteJournal: "Tulis Catatan Refleksi",
    btnShare: "Bagikan Ketenangan",
    sectionTitle: "Tiga Pilar Ketenangan",
    sectionSubtitle: "Prinsip dasar Stoikisme untuk menjaga pikiran tetap jernih di tengah badai kehidupan.",
    card1Title: "Kesadaran",
    card1Desc: "Mengenali dan memisahkan fakta obyektif dari persepsi emosional adalah langkah pertama menuju kedamaian.",
    card2Title: "Tindakan Jernih",
    card2Desc: "Fokuskan seluruh perhatian dan usaha pada hal-hal yang berada langsung dalam pengaruh kendalimu.",
    card3Title: "Penerimaan Tulus",
    card3Desc: "Kedamaian tak tergoyahkan ditemukan saat kita berdamai dengan hasil akhir yang di luar kendali.",
    wisdomLabel: "Kutipan Bijak Hari Ini",
    btnNewQuote: "Kutipan Lain",
    breathingModalTitle: "Napas Relaksasi 4-7-8",
    breathingModalSub: "Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik.",
    btnStart: "Mulai Napas",
    btnPause: "Hentikan Napas",
    journalTitle: "Catatan Ketenangan",
    labelProblem: "Apa yang sedang membebani pikiranmu?",
    labelAction: "Langkah nyata / Sikap penerimaan:",
    btnSaveJournal: "Simpan Catatan",
    journalListTitle: "Riwayat Refleksi",
    footerPhilosophy: "Filosofi",
    footerBreathing: "Latihan Napas",
    footerJournal: "Jurnal Refleksi",
    ambientLabelOn: "Heningkan",
    ambientLabelOff: "Suara Alam",
    
    // Result messages
    resNoProblemMsg: "\"Hati yang tidak terdistraksi oleh keinginan palsu adalah benteng ketenangan terkuat.\"",
    resNoProblemAdv: "Nikmati setiap detik ketenangan saat ini. Bersyukurlah atas pikiran yang damai.",
    resCanActMsg: "\"Bukan hal yang terjadi yang mencemaskan kita, melainkan persepsi kita tentang hal itu. Fokuslah pada aksimu.\"",
    resCanActAdv: "Ambil tindakan kecil pertama sekarang. Kejelasan lahir dari aksi nyata, bukan overthinking.",
    resCannotActMsg: "\"Berakar dalam ketenangan. Lepaskan apa yang tidak bisa dikendalikan, dan percayalah pada prosesnya.\"",
    resCannotActAdv: "Lepaskan ikatan ekspektasi. Apa yang di luar kendalimu bukanlah bebanmu untuk dipikul."
  },
  en: {
    navBreathing: "Calm Breath",
    navJournal: "Journal",
    step1Tag: "First Reflection",
    step1Title: "Do you have a problem in life?",
    step1Sub: "Answer honestly. Everything starts with the courage to acknowledge our current state of mind.",
    btnYes: "YES",
    btnNo: "NO",
    step2Tag: "Circle of Control",
    step2Title: "Can you do something about it?",
    step2Sub: "Is the solution within reach of your actions today, or is this outside your control?",
    btnYesAction: "YES, I CAN",
    btnNoAction: "NO, I CAN'T",
    btnBack: "Back",
    step3Title: "Then Why Worry?",
    btnRestart: "Start Again",
    btnWriteJournal: "Write Reflection Journal",
    btnShare: "Share Serenity",
    sectionTitle: "Three Pillars of Calm",
    sectionSubtitle: "Core Stoic principles to keep your mind crystal clear amidst life's storms.",
    card1Title: "Awareness",
    card1Desc: "Recognizing and separating objective facts from emotional perceptions is the first step toward peace.",
    card2Title: "Clear Action",
    card2Desc: "Direct all your focus and effort toward things directly within your sphere of control.",
    card3Title: "Sincere Acceptance",
    card3Desc: "Unshakable peace is found when we accept outcomes that are beyond our control.",
    wisdomLabel: "Daily Wisdom Quote",
    btnNewQuote: "Another Quote",
    breathingModalTitle: "4-7-8 Relaxation Breath",
    breathingModalSub: "Inhale 4 seconds, hold 7 seconds, exhale 8 seconds.",
    btnStart: "Start Breathing",
    btnPause: "Stop Breathing",
    journalTitle: "Serenity Journal",
    labelProblem: "What is currently weighing on your mind?",
    labelAction: "Concrete action / Attitude of acceptance:",
    btnSaveJournal: "Save Entry",
    journalListTitle: "Reflection History",
    footerPhilosophy: "Philosophy",
    footerBreathing: "Breathing Exercise",
    footerJournal: "Reflection Journal",
    ambientLabelOn: "Mute",
    ambientLabelOff: "Nature Sound",
    
    // Result messages
    resNoProblemMsg: "\"A mind undistracted by false desires is a fortress of inner peace.\"",
    resNoProblemAdv: "Savor every second of this quiet moment. Be grateful for a peaceful mind.",
    resCanActMsg: "\"It's not what happens to you, but how you react to it that matters. Focus on your actions.\"",
    resCanActAdv: "Take your first small step now. Clarity is born from action, not overthinking.",
    resCannotActMsg: "\"Rooted in calm. Release what cannot be controlled, and trust the process.\"",
    resCannotActAdv: "Let go of the weight of expectation. What is beyond your control is not yours to carry."
  }
};

const quotes = [
  { quote: "Kita menderita lebih sering dalam imajinasi daripada dalam kenyataan.", author: "Seneca" },
  { quote: "Kamu memiliki kendali atas pikiranmu - bukan kejadian luar. Pahami ini, dan kamu akan menemukan kekuatan.", author: "Marcus Aurelius" },
  { quote: "Bukan apa yang terjadi padamu yang penting, tapi bagaimana caramu menanggapinya.", author: "Epictetus" },
  { quote: "Ketika kamu menerima apa adanya, seluruh dunia menjadi milikmu.", author: "Lao Tzu" },
  { quote: "Kedamaian adalah hasil dari melatih pikiranmu untuk memproses hidup sebagaimana adanya, bukan sebagaimana kamu inginkan.", author: "Stoic Wisdom" }
];

class SeamlessProblemSolverApp {
  constructor() {
    this.currentStep = 1;
    this.currentDecision = null;
    this.currentLang = localStorage.getItem('terra_lang') || 'id';
    this.currentTheme = localStorage.getItem('terra_theme') || 'light';
    this.audioCtx = null;
    this.ambientNodes = null;
    this.isAmbientPlaying = false;
    
    // Breathing Timer State
    this.isBreathingActive = false;
    this.breathingTimerId = null;
    this.breathCycleState = 'idle'; // 'inhale', 'hold', 'exhale'
    
    // Journal Entries
    this.journalEntries = JSON.parse(localStorage.getItem('terra_journal') || '[]');

    this.quoteIndex = 0;

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLang);
    this.renderJournalList();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Language Switcher
    document.getElementById('btn-lang').addEventListener('click', () => {
      this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
      localStorage.setItem('terra_lang', this.currentLang);
      this.applyLanguage(this.currentLang);
    });

    // Theme Switcher
    document.getElementById('btn-theme').addEventListener('click', () => {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('terra_theme', this.currentTheme);
      this.applyTheme(this.currentTheme);
    });

    // Ambient Audio Switcher
    document.getElementById('btn-ambient').addEventListener('click', () => {
      this.toggleAmbientSound();
    });

    // Breathing Modal Toggles
    document.getElementById('btn-breathing-modal').addEventListener('click', () => {
      this.openBreathingModal();
    });

    // Journal Drawer Toggles
    document.getElementById('btn-journal-toggle').addEventListener('click', () => {
      this.toggleJournalDrawer();
    });

    // Mouse Move Blob parallax effect
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      const blob1 = document.getElementById('bg-blob-1');
      const blob2 = document.getElementById('bg-blob-2');
      if (blob1 && blob2) {
        blob1.style.transform = `translate(${x}px, ${y}px)`;
        blob2.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    });
  }

  // --- Step Navigation & Decision Logic ---
  goToStep(stepNumber, decision = null) {
    if (decision) {
      this.currentDecision = decision;
    }

    const currentCard = document.getElementById(`step-${this.currentStep}`);
    const nextCard = document.getElementById(`step-${stepNumber}`);

    if (currentCard) {
      currentCard.classList.remove('active-card');
      currentCard.classList.add('hidden-card');
    }

    setTimeout(() => {
      if (nextCard) {
        if (stepNumber === 3) {
          this.updateResultContent();
        }
        nextCard.classList.remove('hidden-card');
        nextCard.classList.add('active-card');
        this.currentStep = stepNumber;
        this.updateIndicators(stepNumber);
      }
    }, 200);
  }

  resetProcess() {
    this.currentDecision = null;
    this.goToStep(1);
  }

  updateIndicators(step) {
    for (let i = 1; i <= 3; i++) {
      const dot = document.getElementById(`dot-${i}`);
      if (dot) {
        if (i === step) {
          dot.classList.add('active-dot');
        } else {
          dot.classList.remove('active-dot');
        }
      }
    }

    const line1 = document.getElementById('line-1');
    const line2 = document.getElementById('line-2');
    if (line1) line1.style.backgroundColor = step >= 2 ? 'var(--color-primary)' : 'rgba(116, 121, 110, 0.3)';
    if (line2) line2.style.backgroundColor = step >= 3 ? 'var(--color-primary)' : 'rgba(116, 121, 110, 0.3)';
  }

  updateResultContent() {
    const heading = document.getElementById('result-heading');
    const message = document.getElementById('result-message');
    const advice = document.getElementById('result-advice');
    const langDict = translations[this.currentLang];

    heading.textContent = langDict.step3Title;

    if (this.currentDecision === 'no_problem') {
      message.textContent = langDict.resNoProblemMsg;
      advice.textContent = langDict.resNoProblemAdv;
    } else if (this.currentDecision === 'can_act') {
      message.textContent = langDict.resCanActMsg;
      advice.textContent = langDict.resCanActAdv;
    } else { // cannot_act or default
      message.textContent = langDict.resCannotActMsg;
      advice.textContent = langDict.resCannotActAdv;
    }
  }

  // --- Web Audio Synthesizer (Ambient Soundscape) ---
  toggleAmbientSound() {
    if (this.isAmbientPlaying) {
      this.stopAmbientSound();
    } else {
      this.startAmbientSound();
    }
  }

  startAmbientSound() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      // Create Pink Noise (Rain/Wind effect)
      const bufferSize = 2 * this.audioCtx.sampleRate;
      const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.04;
        b6 = white * 0.115926;
      }

      const noiseSource = this.audioCtx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      // Low Pass Filter for soothing rain sound
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);

      const gainNode = this.audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.3, this.audioCtx.currentTime);

      noiseSource.connect(filter);
      filter.connect(gainNode);

      // Add a soft binaural 432Hz calming tone
      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(144, this.audioCtx.currentTime); // Soft harmonic of 432Hz
      oscGain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.audioCtx.destination);
      gainNode.connect(this.audioCtx.destination);

      noiseSource.start();
      osc.start();

      this.ambientNodes = { noiseSource, osc, gainNode, oscGain };
      this.isAmbientPlaying = true;
      this.updateAmbientUI(true);
    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  }

  stopAmbientSound() {
    if (this.ambientNodes) {
      try {
        this.ambientNodes.noiseSource.stop();
        this.ambientNodes.osc.stop();
      } catch(e) {}
      this.ambientNodes = null;
    }
    this.isAmbientPlaying = false;
    this.updateAmbientUI(false);
  }

  updateAmbientUI(isPlaying) {
    const icon = document.getElementById('icon-sound');
    const txt = document.getElementById('txt-ambient');
    const dict = translations[this.currentLang];

    if (isPlaying) {
      icon.textContent = 'volume_up';
      txt.textContent = dict.ambientLabelOn;
      document.getElementById('btn-ambient').classList.add('bg-primary/20', 'text-primary');
    } else {
      icon.textContent = 'volume_off';
      txt.textContent = dict.ambientLabelOff;
      document.getElementById('btn-ambient').classList.remove('bg-primary/20', 'text-primary');
    }
  }

  // --- 4-7-8 Breathing Guide ---
  openBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    const card = document.getElementById('modal-breathing-card');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }

  closeBreathingModal() {
    const modal = document.getElementById('modal-breathing');
    const card = document.getElementById('modal-breathing-card');
    modal.classList.add('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
    this.stopBreathing();
  }

  toggleBreathing() {
    if (this.isBreathingActive) {
      this.stopBreathing();
    } else {
      this.startBreathing();
    }
  }

  startBreathing() {
    this.isBreathingActive = true;
    document.getElementById('txt-start-breath').textContent = translations[this.currentLang].btnPause;
    document.getElementById('btn-start-breath').classList.replace('bg-primary', 'bg-tertiary');
    this.runBreathingLoop();
  }

  stopBreathing() {
    this.isBreathingActive = false;
    clearTimeout(this.breathingTimerId);
    document.getElementById('txt-start-breath').textContent = translations[this.currentLang].btnStart;
    document.getElementById('btn-start-breath').classList.replace('bg-tertiary', 'bg-primary');
    
    const circle = document.getElementById('breath-circle');
    circle.className = 'w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow';
    document.getElementById('breath-state-text').textContent = 'Mulai';
    document.getElementById('breath-timer').textContent = '0';
  }

  runBreathingLoop() {
    if (!this.isBreathingActive) return;

    const circle = document.getElementById('breath-circle');
    const stateText = document.getElementById('breath-state-text');
    const timerText = document.getElementById('breath-timer');

    // Inhale 4s
    stateText.textContent = this.currentLang === 'id' ? 'Tarik Napas' : 'Inhale';
    circle.className = 'w-24 h-24 rounded-full text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow inhale';
    let count = 4;
    timerText.textContent = count;

    const inhaleInterval = setInterval(() => {
      count--;
      if (count > 0) {
        timerText.textContent = count;
      } else {
        clearInterval(inhaleInterval);
        
        // Hold 7s
        stateText.textContent = this.currentLang === 'id' ? 'Tahan' : 'Hold';
        circle.className = 'w-24 h-24 rounded-full text-tertiary flex items-center justify-center transition-all duration-1000 shadow-terra-glow hold';
        let holdCount = 7;
        timerText.textContent = holdCount;

        const holdInterval = setInterval(() => {
          holdCount--;
          if (holdCount > 0) {
            timerText.textContent = holdCount;
          } else {
            clearInterval(holdInterval);

            // Exhale 8s
            stateText.textContent = this.currentLang === 'id' ? 'Hembuskan' : 'Exhale';
            circle.className = 'w-24 h-24 rounded-full text-primary flex items-center justify-center transition-all duration-1000 shadow-terra-glow exhale';
            let exhaleCount = 8;
            timerText.textContent = exhaleCount;

            const exhaleInterval = setInterval(() => {
              exhaleCount--;
              if (exhaleCount > 0) {
                timerText.textContent = exhaleCount;
              } else {
                clearInterval(exhaleInterval);
                if (this.isBreathingActive) {
                  this.runBreathingLoop();
                }
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }

  // --- Reflection Journal ---
  toggleJournalDrawer(forceShow = null) {
    const drawer = document.getElementById('drawer-journal');
    if (forceShow === true) {
      drawer.classList.remove('translate-x-full');
    } else if (forceShow === false) {
      drawer.classList.add('translate-x-full');
    } else {
      drawer.classList.toggle('translate-x-full');
    }
  }

  openJournalWithContext() {
    this.toggleJournalDrawer(true);
    const problemInput = document.getElementById('journal-input-problem');
    const actionInput = document.getElementById('journal-input-action');

    if (this.currentDecision === 'can_act') {
      problemInput.placeholder = "Tuliskan masalah yang bisa kamu selesaikan...";
      actionInput.value = "Tindakan kecil pertama yang akan saya ambil hari ini adalah: ";
    } else if (this.currentDecision === 'cannot_act') {
      problemInput.placeholder = "Tuliskan situasi di luar kendalimu...";
      actionInput.value = "Saya menerima kondisi ini dan memilih merelakan: ";
    }
  }

  saveJournalEntry() {
    const problemInput = document.getElementById('journal-input-problem');
    const actionInput = document.getElementById('journal-input-action');

    const problem = problemInput.value.trim();
    const action = actionInput.value.trim();

    if (!problem) return;

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(this.currentLang === 'id' ? 'id-ID' : 'en-US', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
      problem,
      action: action || (this.currentLang === 'id' ? 'Berakar dalam ketenangan.' : 'Rooted in calm.')
    };

    this.journalEntries.unshift(newEntry);
    localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));

    problemInput.value = '';
    actionInput.value = '';
    this.renderJournalList();
  }

  deleteJournalEntry(id) {
    this.journalEntries = this.journalEntries.filter(entry => entry.id !== id);
    localStorage.setItem('terra_journal', JSON.stringify(this.journalEntries));
    this.renderJournalList();
  }

  renderJournalList() {
    const listEl = document.getElementById('journal-list');
    const countEl = document.getElementById('journal-count');
    const badgeEl = document.getElementById('journal-badge');

    countEl.textContent = `${this.journalEntries.length} ${this.currentLang === 'id' ? 'Catatan' : 'Entries'}`;
    
    if (this.journalEntries.length > 0) {
      badgeEl.classList.remove('hidden');
    } else {
      badgeEl.classList.add('hidden');
    }

    if (this.journalEntries.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-8 text-on-surface-variant/60 text-sm font-body">
          ${this.currentLang === 'id' ? 'Belum ada catatan refleksi.' : 'No reflection entries yet.'}
        </div>
      `;
      return;
    }

    listEl.innerHTML = this.journalEntries.map(entry => `
      <div class="terra-card p-4 rounded-xl border border-outline-variant/20 relative group">
        <div class="flex justify-between items-start mb-2">
          <span class="text-[11px] font-semibold text-tertiary tracking-wide uppercase">${entry.date}</span>
          <button class="text-on-surface-variant/40 hover:text-red-500 transition-colors" onclick="app.deleteJournalEntry(${entry.id})">
            <span class="material-symbols-outlined text-base">delete</span>
          </button>
        </div>
        <p class="font-headline text-sm font-bold text-on-surface mb-2">${this.escapeHtml(entry.problem)}</p>
        <p class="font-body text-xs text-primary bg-primary/10 p-2.5 rounded-lg border border-primary/20">
          🌱 ${this.escapeHtml(entry.action)}
        </p>
      </div>
    `).join('');
  }

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  // --- Quote Generator ---
  nextQuote() {
    this.quoteIndex = (this.quoteIndex + 1) % quotes.length;
    const q = quotes[this.quoteIndex];
    document.getElementById('wisdom-quote').textContent = `"${q.quote}"`;
    document.getElementById('wisdom-author').textContent = `— ${q.author}`;
  }

  // --- Share Result ---
  shareResult() {
    const text = `🌿 Terra — Seamless Problem Solver\n"Punya masalah? Bisa melakukan sesuatu? Lalu kenapa khawatir?"\nBerakar dalam ketenangan, lepaskan apa yang di luar kendalimu.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Terra Problem Solver',
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert(this.currentLang === 'id' ? 'Pesan ketenangan berhasil disalin ke clipboard!' : 'Serenity message copied to clipboard!');
      });
    }
  }

  // --- Theme & i18n Helpers ---
  applyTheme(theme) {
    const icon = document.getElementById('icon-theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      if (icon) icon.textContent = 'light_mode';
    } else {
      document.documentElement.classList.remove('dark');
      if (icon) icon.textContent = 'dark_mode';
    }
  }

  applyLanguage(lang) {
    document.getElementById('txt-lang').textContent = lang.toUpperCase();
    document.documentElement.lang = lang;

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (this.currentStep === 3) {
      this.updateResultContent();
    }

    this.renderJournalList();
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SeamlessProblemSolverApp();
});
