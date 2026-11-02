

### Cycle #1 Directive (2026-11-02 21:10)
### 1. Organic Bezier Flowchart Connectors (SVG Native)

```typescript
// Smooth nature-inspired S-curve connector without graph routing libs
export const getFlowEdge = (x1: number, y1: number, x2: number, y2: number): string => {
  const cx = (x1 + x2) / 2;
  // ponytail: horizontal S-curve ceiling; upgrade to 4-direction routing when multi-anchor is built
  return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
};
```
skipped: Orthogonal routing and obstacle avoidance.
add when: Nodes overlap or require dynamic 4-cardinal port assignments.

---

### 2. Rice-Paper / Warm Alabaster Ambient Canvas (Native CSS)

```css
/* Warm, low-contrast dot grid with ambient light falloff */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image: 
    radial-gradient(circle at center, transparent 30%, rgba(240, 237, 230, 0.6) 100%),
    radial-gradient(circle, #dedad2 0.75px, transparent 0.75px);
  background-size: 100% 100%, 24px 24px;
}
```
skipped: Canvas-based noise shader / grain overlay.
add when: Canvas moves to WebGL rendering for massive node counts (>500).

---

### 3. Tactile Leaf-Weight Node Elevation (Native CSS)

```css
/* Zero-JS natural lift and settling damping */
.spatial-node {
  will-change: transform;
  transition: transform 0.16s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.16s ease;
  box-shadow: 0 1px 3px rgba(60, 50, 40, 0.04), 0 4px 12px rgba(60, 50, 40, 0.03);
}
.spatial-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 28px rgba(60, 50, 40, 0.08), 0 2px 6px rgba(60, 50, 40, 0.04);
}
```
skipped: Spring physics library (Framer Motion / react-spring).
add when: Node interactions require velocity-inheriting throw/toss gestures.


### Cycle #1 Directive (2026-11-02 21:12)
### 1. Organic Washi Ambient Canvas (Pure CSS)

```css
/* Ambient warm stone canvas with subtle dot grid and center sunbeam */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: 
    radial-gradient(circle at 50% 40%, rgba(247, 241, 230, 0.8) 0%, transparent 70%),
    radial-gradient(rgba(58, 51, 46, 0.08) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
}
```

### 2. Apple-Grade Smooth Connector Spline (SVG)

```typescript
export function getFlowSpline(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal S-curve ceiling; upgrade to A* orthogonal router if nodes overlap
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable self-check
console.assert(getFlowSpline(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Spline calculation failed");
```

### 3. Tactile Frosted Node with Spring States (CSS)

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(214, 207, 197, 0.55);
  border-radius: 14px;
  box-shadow: 0 4px 18px -3px rgba(44, 40, 37, 0.04), 0 1px 2px rgba(44, 40, 37, 0.03);
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease;
  cursor: grab;
  user-select: none;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 14px 30px -4px rgba(44, 40, 37, 0.08), 0 2px 6px rgba(44, 40, 37, 0.04);
}
```

skipped: dynamic obstacle routing and physics simulation engines.
add when: canvas density exceeds 50+ interconnected nodes causing spline collisions.


### Cycle #2 Directive (2026-11-02 21:17)
```css
/* 1. Warm Zen Ambient Canvas: Earthy paper-grain dot matrix */
.canvas-root {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(120, 105, 85, 0.14) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* 2. Tactile Card Interaction: Spring lift without layout thrash */
.canvas-node {
  touch-action: none;
  user-select: none;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(60, 50, 40, 0.04), 0 0 0 1px rgba(60, 50, 40, 0.06);
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 150ms ease;
  will-change: transform;
}
.canvas-node:is(:active, [data-dragging="true"]) {
  cursor: grabbing;
  transform: scale(1.018) translateY(-1px);
  box-shadow: 0 12px 28px -4px rgba(60, 50, 40, 0.1), 0 0 0 1px rgba(60, 50, 40, 0.08);
}
```

```javascript
// 3. Fluid Organic Connector: Native horizontal S-curve
export function getOrganicSpline(x1, y1, x2, y2) {
  // ponytail: horizontal auto-tangents; upgrade to obstacle-avoiding A* only if nodes overlap
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicSpline(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Spline calculation mismatch"
);
```

skipped: Path collision avoidance and layout engines (D3/ELK), add when automatic graph relayout is requested.
skipped: Canvas zoom/pan velocity physics JS library, add when standard CSS zoom feels too rigid on touchpads.
skipped: Custom WebGL shaders for noise/grain, add when CSS radial gradients fail 60fps render checks.


### Cycle #3 Directive (2026-11-02 21:23)
### 1. Nature Canvas Ambient Grid (CSS)
Replace flat backdrops or JS grid renders with a warm stone-paper gradient and sub-pixel tactile dot mesh.

```css
.spatial-canvas {
  /* zen warmth: raw paper base with moss/clay undertone */
  background-color: #f9f8f5;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(92, 85, 75, 0.08) 1px, transparent 1px),
    radial-gradient(ellipse at top left, rgba(235, 230, 220, 0.4) 0%, transparent 70%);
  background-size: 24px 24px, 100% 100%;
  overscroll-behavior: none;
  touch-action: none;
}

.node-card {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(180, 172, 158, 0.28);
  box-shadow: 
    0 1px 2px rgba(60, 50, 40, 0.03),
    0 6px 18px -4px rgba(60, 50, 40, 0.05);
  border-radius: 14px;
}
```
*skipped: Canvas-based grid renderer and noise texture PNGs.*  
*add when: Viewport zoom scale drops below 0.25x and requires LOD grid decimation.*

---

### 2. Natural Organic Bezier Connector (Native SVG Path)
Generates relaxed, organic horizontal S-curves rather than rigid orthodiagonal lines.

```typescript
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.abs(x2 - x1);
  const cx = Math.max(dx * 0.45, 32); // ponytail: fixed control bias; upgrade to obstacle routing if lines cross nodes
  return `M ${x1} ${y1} C ${x1 + cx} ${y1}, ${x2 - cx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 45 0, 55 100, 100 100", "Curve calc failed");
```
*skipped: Complex A* pathfinding and node avoidance algorithms.*  
*add when: Canvas graph density causes overlapping edge-on-node collisions.*

---

### 3. Native Low-Overhead Pointer Capture
Eliminate pan jitter, drag drops outside windows, and library state bloat using native pointer capture.

```typescript
function bindSurfacePan(el: HTMLElement, onPan: (dx: number, dy: number) => void) {
  let prevX = 0, prevY = 0, dragging = false;

  el.addEventListener('pointerdown', (e) => {
    if (e.target !== el || e.button !== 0) return;
    dragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
    el.setPointerCapture(e.pointerId);
  });

  el.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    onPan(e.clientX - prevX, e.clientY - prevY);
    prevX = e.clientX;
    prevY = e.clientY;
  });

  const stop = (e: PointerEvent) => {
    if (dragging) {
      dragging = false;
      el.releasePointerCapture(e.pointerId);
    }
  };
  el.addEventListener('pointerup', stop);
  el.addEventListener('pointercancel', stop);
}
```
*skipped: Inertial momentum/spring physics loop.*  
*add when: User testing demands flick-scroll kinetic feel on touchpad/mobile.*


### Cycle #4 Directive (2026-11-02 21:29)
### 1. Zen Ambient Backdrop (Warm Stone & Organic Dot Grid)

```css
/* Ambient canvas backdrop with warm paper radial vignette */
.canvas-backdrop {
  background-color: #faf9f5;
  background-image: 
    radial-gradient(circle at 50% 40%, rgba(245, 242, 234, 0.8) 0%, transparent 85%),
    radial-gradient(#d8d4cb 0.85px, transparent 0.85px);
  background-size: 100% 100%, 24px 24px;
}
```
skipped: Canvas/WebGL noise generation; add when dynamic terrain or paper-fiber shaders are requested.

---

### 2. Natural Organic Bezier Connectors

```typescript
// ponytail: Horizontal S-curve layout. Upgrade to obstacle-aware orthogonal routing if flow loops back.
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const curvature = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + curvature} ${y1}, ${x2 - curvature} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Bezier curve calculation failed"
);
```
skipped: Collision avoidance and edge-rerouting algorithms; add when graph density exceeds simple feed-forward branch structures.

---

### 3. Tactile Flowchart Node Elevation

```css
.canvas-node {
  touch-action: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(220, 215, 206, 0.6);
  box-shadow: 0 1px 3px rgba(45, 41, 38, 0.04), 0 4px 12px rgba(45, 41, 38, 0.03);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.canvas-node:active,
.canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.018) translateY(-1px);
  box-shadow: 0 8px 24px rgba(45, 41, 38, 0.08), 0 2px 6px rgba(45, 41, 38, 0.04);
}
```
skipped: Physics-based spring library (e.g., Framer Motion / Popmotion); add when multi-node group inertia or magnetic snapping is implemented.


### Cycle #5 Directive (2026-11-02 21:35)
### 1. Organic Bezier Edge Connector (Visual Layout)
Native S-curve with adaptive tension based on node distance; replaces rigid lines or layout graph dependencies.

```ts
// connector.ts
export function getOrganicEdge(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: fixed horizontal curvature; upgrade to port-aware normals if nodes support multi-directional docking
  const offset = Math.min(Math.max(Math.abs(x2 - x1) * 0.45, 40), 120);
  return `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
}
```
*skipped: Obstacle routing/Dijkstra auto-avoidance; add when node overlapping exceeds dense branch thresholds.*

---

### 2. Warm Zen Ambient Canvas & Surface Tokens (Nature UI)
Replaces sterile cool grays with warm Japanese paper / Apple matte materials (`#F9F8F5`, warm dot-matrix, ambient depth).

```css
:root {
  --canvas-bg: #f9f8f5;
  --canvas-grid: rgba(60, 50, 40, 0.08);
  --node-surface: rgba(255, 255, 255, 0.78);
  --node-stroke: rgba(60, 50, 40, 0.08);
  --node-shadow: 0 4px 18px -2px rgba(45, 35, 25, 0.05), 0 1px 2px rgba(45, 35, 25, 0.04);
  --ease-apple: cubic-bezier(0.16, 1, 0.3, 1);
}

.canvas-viewport {
  background-color: var(--canvas-bg);
  background-image: radial-gradient(circle, var(--canvas-grid) 1px, transparent 1px);
  background-size: 24px 24px;
}

.canvas-node {
  background: var(--node-surface);
  border: 1px solid var(--node-stroke);
  box-shadow: var(--node-shadow);
  backdrop-filter: blur(12px) saturate(110%);
  border-radius: 14px;
  transition: transform 180ms var(--ease-apple), box-shadow 180ms var(--ease-apple);
}
```
*skipped: WebGL canvas noise/vignette overlays; add when native CSS backdrop-filter drops frames on target client devices.*

---

### 3. Micro-Haptic Node Drag Lift (Smooth Interaction)
Instant GPU-bound response during drag; spring settle on drop with zero layout thrashing.

```css
.canvas-node:hover {
  border-color: rgba(60, 50, 40, 0.16);
}

.canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.018) translateY(-1px);
  box-shadow: 0 14px 28px -4px rgba(45, 35, 25, 0.10), 0 3px 8px rgba(45, 35, 25, 0.04);
  transition: none;
  z-index: 50;
}
```
*skipped: Full physics engine (Matter.js/Spring library); add when momentum/flick multi-node velocity throwing is required.*
