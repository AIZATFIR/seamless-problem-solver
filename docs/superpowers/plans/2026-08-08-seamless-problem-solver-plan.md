# Seamless Problem Solver (Terra Flow v2) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Terra Flow into an Apple-grade, high-performance, seamless decision solver web app featuring multi-branching visual flowcharts, Google Tasks-style point-by-point cognitive subtasks, AI flowchart vision/prompt parser, and Stoic psychological calm features.

**Architecture:** Vanilla JS (ES Modules) with Vite, Tailwind CSS, Google Fonts, and GSAP. Modularized into clean, decoupled domain engines (`FlowchartEngine.js`, `TaskBreakdownEngine.js`, `AIFlowchartParser.js`, `AudioAmbientEngine.js`, `BreathingEngine.js`).

**Tech Stack:** JavaScript (ES6+), HTML5, Tailwind CSS, GSAP, Web Audio API, Canvas API.

## Global Constraints
- High-contrast accessible UI (4.5:1 ratio).
- Zero external heavy framework overhead; fast Vite build.
- XSS prevention on all user input.
- Offline-ready fallbacks for AI parsing.

---

### Task 1: Refactor Architecture & Decouple Core Engines

**Files:**
- Create: `src/FlowchartEngine.js`
- Create: `src/TaskBreakdownEngine.js`
- Create: `src/AIFlowchartParser.js`
- Create: `src/AudioAmbientEngine.js`
- Modify: `app.js`
- Modify: `index.html`

**Interfaces:**
- Consumes: JSON flowchart schema.
- Produces: `FlowchartEngine`, `TaskBreakdownEngine`, `AIFlowchartParser`.

- [ ] **Step 1: Create `FlowchartEngine.js` with multi-branching tree navigation**
- [ ] **Step 2: Create `TaskBreakdownEngine.js` for Google Tasks style subtask management**
- [ ] **Step 3: Create `AIFlowchartParser.js` with client-side OCR fallback & prompt generator**
- [ ] **Step 4: Integrate engines into `app.js` and verify ES Module imports**
- [ ] **Step 5: Run `npm run build` to verify build succeeds**

---

### Task 2: Implement Apple-Grade UI & Bento Grid Layout

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add Google Fonts (Outfit & Inter)**
- [ ] **Step 2: Enhance Dark Glassmorphism CSS design system tokens in `style.css`**
- [ ] **Step 3: Update `index.html` with Bento Grid UI elements and visual cues**
- [ ] **Step 4: Verify responsive layout across mobile and desktop breakpoints**

---

### Task 3: Interactive Multi-Branch Flowchart Builder & Visual AI Importer

**Files:**
- Modify: `index.html`
- Modify: `app.js`
- Modify: `src/AIFlowchartParser.js`

- [ ] **Step 1: Build image drag-and-drop & file upload input modal for AI flowchart parsing**
- [ ] **Step 2: Add visual branching editor controls to add sub-branches to any node**
- [ ] **Step 3: Implement step-by-step Google Tasks breakdown panel (+1 point breakdown UI)**
- [ ] **Step 4: Test flowchart image import with sample diagram image**

---

### Task 4: Security Audit & Verification

**Files:**
- Audit: `app.js`, `index.html`, `src/*.js`

- [ ] **Step 1: Sanitize all innerHTML insertions using DOMPurify / textContent escaping**
- [ ] **Step 2: Run `npm run build` and test production preview**
- [ ] **Step 3: Commit changes to Git workspace**
