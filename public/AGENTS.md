# AGENTS.md — Terra Flow Coding & Operating Instructions

## Repository Overview
Terra Flow (`seamless-problem-solver`) is a spatial thinking and visual flowchart application combining Stoic philosophy with structured problem decomposition.

## Architecture & Conventions
- Pure Vanilla ES Modules with zero heavy UI frameworks for maximum speed and longevity.
- Build Tool: Vite v5.
- CSS: Tailwind CSS CDN + custom design tokens in `style.css`.
- Animation: GSAP 3 + CSS cubic-bezier transitions.
- Testing: Built-in `node --test` suite in `tests/`.

## Key Files
- `index.html`: Main landing page with Main Flow Player, 3 Pillars of Calm, Multi-Philosopher Wisdom, and Studio mount.
- `app.js`: Central controller linking audio synth, breathing guide, journal, and state.
- `src/SpatialThinkingCanvas.js`: Infinite 60fps canvas engine with 4-way direction sprout handles, spline wire physics, and exports.
- `src/FlowchartNodeTypes.js`: Semantic node primitives (`problem`, `decision`, `action`, `outcome`).
- `src/VisualReasoningAI.js`: Contextual problem decomposition heuristics.
- `src/FrameworkPresets.js`: Structured mental models (5 Whys, Stoic Circle, First Principles, Eisenhower).

## Verification
- Run tests: `node --test tests/*.js`
- Build: `npm run build`
