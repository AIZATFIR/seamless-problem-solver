# Design Specification: Seamless Problem Solver (Terra Flow v2)

## 1. Overview & Vision
A state-of-the-art, ultra-lightweight web application designed around human cognitive psychology and Stoic philosophy. It converts complex problems, overwhelming thoughts, and raw image/text inputs into interactive, multi-branching flowcharts and step-by-step point breakdown tasks (Google Tasks style).

## 2. Core Architectural Components

### A. Dynamic Interactive Flowchart Canvas (`FlowchartCanvas`)
- **Multi-Branch Node Graph**: Supports arbitrary branching (`Node -> [Child A, Child B, Child C]`).
- **Visual Rendering**: Interactive SVG / CSS canvas with animated connecting lines, node cards with status badges, and interactive option buttons.
- **Node Execution**: Step-by-step interactive player mode with progress tracking, back-tracking, and full-screen focus view.

### B. Cognitive Breakdown Engine (`TaskBreakdownEngine`)
- **Google Tasks Style Point System**: Break down complex flowchart nodes into discrete, actionable +1 sub-items.
- **Frictionless UI**: Inline +1 item addition (`[+ Add Step]`), item reordering, status check-offs with visual completion cues.
- **Cognitive Load Meter**: Calculates clarity score based on remaining sub-items vs completed sub-items.

### C. AI Flowchart & Image Vision Parser (`AIFlowchartParser`)
- **Image Upload & Prompt Input**: Drag-and-drop or select flowchart image files (PNG/JPG) or input raw text prompt.
- **Gemini API Integration**: Uses Firebase AI Logic / Gemini API for multimodal vision parsing (image -> flowchart structure JSON).
- **Offline Fallback Smart Heuristic Parser**: Client-side canvas image-processing + heuristic keyword extraction for instant node parsing when offline or without API key.

### D. Apple-Grade UI/UX Design System
- **Theme**: Dark Mode Glassmorphism with Bento Grid layout & Stoic Zen theme options.
- **Typography**: Google Fonts Outfit & Inter.
- **Color Tokens**:
  - Background: `hsl(220, 20%, 10%)` (Deep Obsidian Void)
  - Surface Glass: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(20px)`
  - Primary Accent: `hsl(158, 64%, 45%)` (Emerald Zen)
  - Secondary Accent: `hsl(215, 89%, 60%)` (Stoic Azure)
  - Text Primary: `hsl(210, 40%, 98%)`
- **Micro-Interactions**: Smooth GSAP transitions, tactile button press scaling, indicator line animations.

### E. Zen & Mindful Features
- **4-7-8 Breathing Guide**: Canvas/CSS animated expanding sphere with precise timing oscillator.
- **Zen Ambient Sound Synth**: Web Audio API ambient noise synthesizer (rain/forest/binaural frequencies).
- **Reflection Journal**: LocalStorage-persisted journaling drawer.

## 3. Data Schema & Contracts

```ts
interface FlowchartNode {
  id: string;
  title: string;
  description: string;
  type: 'start' | 'decision' | 'action' | 'result';
  subtasks: { id: string; text: string; done: boolean }[];
  options: { text: string; nextNodeId: string; style?: string }[];
}

interface FlowchartData {
  id: string;
  title: string;
  author: string;
  category: 'stoic' | 'work' | 'humor' | 'life';
  description: string;
  startNodeId: string;
  nodes: Record<string, FlowchartNode>;
}
```

## 4. Security & Performance Strategy
- Safe HTML escaping for user-generated content (XSS protection).
- Zero external heavy dependencies (pure ES Module with Vite + Tailwind + GSAP).
- Instant offline cache readiness & Vercel deployment sync.
