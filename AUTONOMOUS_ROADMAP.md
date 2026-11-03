

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


### Cycle #6 Directive (2026-11-02 21:41)
### 1. Organic Flowchart Bezier Connectors

```typescript
// path.ts - Organic horizontal S-curve connector
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: fixed horizontal tangent; upgrade to orthogonal obstacle-avoidance routing if nodes overlap heavily.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getFlowPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Bezier curve failed inflection test"
);
```
skipped: A* / Dijkstra pathfinding routing and edge collision detection.  
add when: Flowcharts exceed 20+ intersecting cards requiring automatic obstacle avoidance.

---

### 2. Nature UI Ambient Warmth & Tactile Nodes

```css
/* ambient.css */
:root {
  --canvas-bg: #fbf9f5;
  --grid-dot: rgba(92, 84, 73, 0.12);
  --node-bg: rgba(255, 255, 255, 0.86);
  --node-border: rgba(140, 128, 112, 0.18);
  --shadow-rest: 0 4px 20px -2px rgba(60, 48, 36, 0.05), 0 1px 3px rgba(60, 48, 36, 0.03);
  --shadow-lift: 0 12px 32px -4px rgba(60, 48, 36, 0.12), 0 4px 8px rgba(60, 48, 36, 0.04);
}

.spatial-canvas {
  background-color: var(--canvas-bg);
  background-image: radial-gradient(var(--grid-dot) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
}

.canvas-node {
  background: var(--node-bg);
  backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid var(--node-border);
  box-shadow: var(--shadow-rest);
  border-radius: 12px;
  touch-action: none;
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.15s cubic-bezier(0.2, 0, 0, 1);
}

.canvas-node:active {
  box-shadow: var(--shadow-lift);
  transform: scale(1.015);
  cursor: grabbing;
}
```
skipped: WebGL noise shaders, animated mesh gradients, and dark mode theme matrix.  
add when: Ambient light theme is fully unified across all four suite apps.

---

### 3. Native Pointer Capture Canvas Drag

```typescript
// drag.ts - Zero-dependency smooth card repositioning
export function attachDrag(
  el: HTMLElement, 
  onMove: (dx: number, dy: number) => void
): () => void {
  let prevX = 0, prevY = 0;

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest("button, input, [data-nodrag]")) return;
    prevX = e.clientX;
    prevY = e.clientY;
    el.setPointerCapture(e.pointerId);

    const onPointerMove = (ev: PointerEvent) => {
      onMove(ev.clientX - prevX, ev.clientY - prevY);
      prevX = ev.clientX;
      prevY = ev.clientY;
    };

    const cleanup = () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", cleanup);
      el.removeEventListener("pointercancel", cleanup);
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", cleanup);
    el.addEventListener("pointercancel", cleanup);
  };

  el.addEventListener("pointerdown", onPointerDown);
  return () => el.removeEventListener("pointerdown", onPointerDown);
}
```
skipped: Spring-inertia momentum physics engine and multi-selection marquee drag.  
add when: Moving clusters of 3+ connected nodes in a single selection gesture.


### Cycle #7 Directive (2026-11-02 21:47)
### 1. Nature Canvas Ambient Background (CSS)

```css
/* Ambient warm stone canvas with native fixed dot-grid */
.canvas-viewport {
  background-color: #fbf9f5;
  background-image: radial-gradient(#d9d2c7 0.75px, transparent 0.75px);
  background-size: 24px 24px;
  touch-action: none;
  user-select: none;
}
```
skipped: Canvas render loop / WebGL background texture.  
add when: Moving background particles or multi-layer parallax depth are explicitly requested.

---

### 2. Natural Organic Bezier Connector (Native SVG)

```javascript
// Generates natural flowing horizontal s-curves between nodes
export function getFlowPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 36);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
  // ponytail: fixed horizontal delta. Upgrade to orthogonal routing if cycle loops occur.
}

console.assert(getFlowPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50", "Flow path calculation mismatch");
```
skipped: External graph layout engine (D3/ELK/Dagre).  
add when: Flowcharts require automatic hierarchical collision avoidance and multi-tier re-routing.

---

### 3. Tactile Zen Node Interaction (CSS)

```css
/* Zen warmth paper card with native hardware-accelerated spring-down */
.canvas-node {
  background: rgba(254, 253, 251, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(217, 210, 199, 0.7);
  border-radius: 12px;
  box-shadow: 0 4px 20px -4px rgba(58, 50, 38, 0.04);
  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms ease;
  cursor: grab;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 1px 6px -1px rgba(58, 50, 38, 0.08);
}
```
skipped: JS physics spring library (framer-motion, popmotion).  
add when: Canvas nodes support gesture flick-velocity and continuous inertia throwing.


### Cycle #8 Directive (2026-11-02 21:52)
### 1. Organic Bezier Edge Connector

```typescript
// path-utils.ts
export function getOrganicEdge(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal left-to-right bias; swap axis logic if nodes connect top-to-bottom
  const dx = Math.max(Math.abs(x2 - x1) * 0.45, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable self-check
const path = getOrganicEdge(0, 0, 100, 100);
if (!path.startsWith("M 0 0 C 45 0, 55 100, 100 100")) throw new Error("Path curve mismatch");
```

### 2. Nature Ambient Canvas (Zen Warmth & Grid)

```css
/* canvas.css */
.spatial-canvas {
  background-color: #fcfbf9; /* warm washi paper tone */
  background-image: radial-gradient(circle at 1px 1px, rgba(58, 51, 44, 0.07) 1px, transparent 0);
  background-size: 24px 24px;
  overscroll-behavior: none;
  touch-action: none;
}
```

### 3. Tactile Glass Node Styling

```css
/* node.css */
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px) saturate(130%);
  border: 1px solid rgba(58, 51, 44, 0.08);
  border-radius: 14px;
  box-shadow: 0 3px 12px -2px rgba(58, 51, 44, 0.04), 0 1px 2px rgba(58, 51, 44, 0.03);
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
  will-change: transform;
}

.canvas-node:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 8px 20px -4px rgba(58, 51, 44, 0.08);
}
```

skipped: dynamic port auto-routing (top/bottom/left/right), add when nodes allow freeform multi-axis port binding.  
skipped: WebGL/Canvas2D grid rendering, add when viewport scaling drops below 60fps on low-tier mobile.  
skipped: physics-based spring dragging library, add when pointer-event delta tracking needs momentum flicking.


### Cycle #9 Directive (2026-11-02 21:58)
### 1. Organic Flow Connectors (Native Bézier)

```typescript
// ponytail: Fixed horizontal control points. Upgrade to dynamic port vectors when 4-side multi-anchors exist.
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.45, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicPath(0, 0, 100, 100) === "M 0 0 C 45 0, 55 100, 100 100",
  "Path calculation failed"
);
```

skipped: Obstacle routing & self-intersections.
add when: Flowcharts exceed ~25 overlapping edges.

---

### 2. Ambient Nature Canvas & Edge Rendering

```css
/* Warm zen paper surface & organic SVG connectors */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(68, 64, 60, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 10% 10%, rgba(220, 215, 201, 0.45) 0%, transparent 50%);
  background-size: 24px 24px, 100% 100%;
}

.flow-connector {
  fill: none;
  stroke: #78716c;
  stroke-width: 1.5px;
  stroke-linecap: round;
}
```

skipped: Canvas GPU grain shaders.
add when: Device profile confirms high-DPI desktop display baseline.

---

### 3. Apple-Grade Drag Micro-Physics

```css
/* Zero-JS layout recovery: bypass transforms on drag, spring damp on drop */
.canvas-node {
  touch-action: none;
  user-select: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(231, 229, 228, 0.8);
  box-shadow: 0 1px 3px rgba(41, 37, 36, 0.04);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}

.canvas-node.is-dragging {
  transition: none;
  cursor: grabbing;
  box-shadow: 0 14px 28px -4px rgba(41, 37, 36, 0.12), 0 4px 8px -2px rgba(41, 37, 36, 0.06);
}
```

skipped: Web Animations API/Framer Motion physics engine.
add when: Multi-node cluster momentum fling is explicitly required.


### Cycle #10 Directive (2026-11-02 22:04)
### 1. Organic S-Curve Flowchart Connectors
```javascript
// connector.js — Native smooth cubic bezier with horizontal tension
export function getOrganicPath(x1, y1, x2, y2) {
  // ponytail: assumes primarily left-to-right flow; expand to 4-quadrant routing if user requests multi-directional loops.
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Connector math failed");
```
skipped: complex A* pathfinding around nodes, add when manual routing visually collides with >5 nodes.

---

### 2. Ambient Zen-Warmth Paper Canvas
```css
/* canvas.css — Warm nature texture, zero image assets */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle at 1px 1px, rgba(60, 50, 42, 0.08) 1.2px, transparent 0);
  background-size: 24px 24px;
  touch-action: none;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    background-color: #171614;
    background-image: radial-gradient(circle at 1px 1px, rgba(236, 230, 220, 0.06) 1.2px, transparent 0);
  }
}
```
skipped: WebGL noise shader / dynamic lighting, add when high-DPI GPU overhead is profile-verified.

---

### 3. Tactile Apple-Grade Node Elevation
```css
/* node.css — Dynamic kinetic pickup without JS spring libraries */
.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(60, 50, 42, 0.08);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(60, 50, 42, 0.04), 0 4px 12px rgba(60, 50, 42, 0.03);
  transition: transform 140ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 140ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: grab;
  user-select: none;
}

.canvas-node:active,
.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.015) translateY(-3px);
  box-shadow: 0 16px 28px -6px rgba(60, 50, 42, 0.12), 0 6px 10px -2px rgba(60, 50, 42, 0.04);
}
```
skipped: JS physics loop (Framer Motion / Spring), add when momentum toss-and-fling is explicitly needed.


### Cycle #11 Directive (2026-11-02 22:09)
### 1. Organic Flowchart Bézier Connectors

```javascript
// Dynamic horizontal S-curve with natural droop
export function naturalPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  // ponytail: Simple S-curve ceiling; upgrade to AABB obstacle routing if nodes overlap heavily.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(naturalPath(0, 0, 100, 50) === "M 0 0 C 55 0, 45 50, 100 50", "path calculation failed");
```
skipped: Obstacle collision avoidance and Manhattan routing. Add when nodes overlap frequently during freeform layout.

---

### 2. Ambient Warm Paper & Zen Dot Grid

```css
/* Zero-repaint viewport with warm tactile tone */
.canvas-viewport {
  background-color: #FAF8F5;
  background-image: radial-gradient(rgba(60, 45, 30, 0.09) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: var(--pan-x, 0px) var(--pan-y, 0px);
}
```
skipped: HTML5 Canvas background rendering loop. Add when grid requires dynamic LOD zoom-fading beyond CSS capabilities.

---

### 3. Tactile Spring & Warm Elevation on Nodes

```css
.spatial-node {
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid rgba(60, 45, 30, 0.07);
  box-shadow: 
    0 1px 2px rgba(60, 45, 30, 0.03), 
    0 4px 16px rgba(60, 45, 30, 0.04);
  transition: transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.15s ease;
  will-change: transform;
}

.spatial-node:hover {
  border-color: rgba(60, 45, 30, 0.14);
  box-shadow: 
    0 3px 6px rgba(60, 45, 30, 0.04), 
    0 8px 24px rgba(60, 45, 30, 0.06);
}

.spatial-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 12px 32px rgba(60, 45, 30, 0.12);
}
```
skipped: Physics engine (Framer Motion / Spring JS). Add when multi-node collective rubber-banding is required.


### Cycle #12 Directive (2026-11-02 22:15)
```css
/* 1. Nature ambient canvas: warm stone/sand base with low-overhead CSS dot mesh */
.spatial-canvas {
  background-color: oklch(0.965 0.01 70);
  background-image: 
    radial-gradient(oklch(0.78 0.015 65 / 0.3) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 0%, oklch(0.99 0.02 85 / 0.6) 0%, transparent 70%);
  background-size: 24px 24px, 100% 100%;
  overscroll-behavior: none;
}

/* 2. Tactile frosted node with Apple-style micro-lift */
.canvas-node {
  background: oklch(0.99 0.005 80 / 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid oklch(0.90 0.01 75 / 0.8);
  border-radius: 14px;
  box-shadow: 0 4px 16px -2px oklch(0.2 0.02 60 / 0.04), 0 1px 2px oklch(0.2 0.02 60 / 0.03);
  transition: transform 140ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 140ms ease;
  touch-action: none;
  user-select: none;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 28px -4px oklch(0.2 0.02 60 / 0.08);
}
```

```ts
// 3. Natural organic connector path (adaptive S-curve)
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal-biased S-curve; upgrade to orthogonal obstacle-avoidance if nodes overlap.
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 36);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```

skipped: Canvas raster rendering, WebGL background shaders, and complex graph routing libraries.  
add when: Graph exceeds 300+ visible nodes simultaneously or requires automated edge obstacle avoidance.


### Cycle #13 Directive (2026-11-02 22:20)
```css
/* 1. Nature UI ambient rice-paper canvas */
.canvas-viewport {
  background-color: #fbf9f4;
  background-image: 
    radial-gradient(ellipse at 50% 40%, rgba(228, 222, 206, 0.4) 0%, transparent 75%),
    radial-gradient(#cfc5b0 1px, transparent 1px);
  background-size: 100% 100%, 28px 28px;
  touch-action: none;
}

/* 2. Apple-grade tactile node physics */
.canvas-node {
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
  box-shadow: 0 1px 2px rgba(45, 38, 26, 0.04), 0 4px 14px rgba(45, 38, 26, 0.03);
  border: 1px solid rgba(184, 173, 148, 0.3);
  will-change: transform;
}
.canvas-node[data-dragging="true"] {
  transform: scale(1.025);
  box-shadow: 0 16px 32px rgba(45, 38, 26, 0.08), 0 3px 8px rgba(45, 38, 26, 0.04);
}
```

```typescript
// 3. Organic flow connector path
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal-biased S-curve. Upgrade to obstacle avoidance if nodes overlap.
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicConnector(0, 0, 100, 100).startsWith("M 0 0 C 55 0, 45 100, 100 100"));
```

skipped: dynamic obstacle routing and JS-driven spring physics.  
add when: edge collisions visually obstruct node labels during complex tree folds.


### Cycle #14 Directive (2026-11-02 22:26)
### 1. Zen Ambient Backdrop & Frosted Node Tokens (CSS)

```css
/* Ambient warm-paper canvas & tactile nodes */
.spatial-canvas {
  background-color: #fbfbfa;
  background-image: radial-gradient(rgba(60, 64, 55, 0.06) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(68, 73, 65, 0.1);
  border-radius: 14px;
  box-shadow: 0 4px 16px -2px rgba(45, 49, 42, 0.05);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  user-select: none;
  touch-action: none;
}

.canvas-node:hover {
  border-color: rgba(68, 73, 65, 0.2);
  box-shadow: 0 8px 24px -4px rgba(45, 49, 42, 0.08);
}

.canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 16px 36px -4px rgba(45, 49, 42, 0.12);
  /* ponytail: static drag elevation; upgrade to velocity-driven tilt if 3D gestures needed */
}
```
→ skipped: WebGL background shaders and CSS grid overlay abstractions; add when dynamic terrain themes are requested.

---

### 2. Organic S-Curve Connector Layout (Native Bezier)

```ts
// Smooth horizontal flow spline with automatic dynamic tension
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicConnector(0, 0, 100, 50) === "M 0 0 C 55 0, 45 50, 100 50",
  "getOrganicConnector should compute correct cubic bezier control points"
);
```
→ skipped: Full path routing/collision avoidance library; add when nodes overlap regularly and lines need smart obstacle bypass.

---

### 3. Tactile SVG Connector Stroke Styling (SVG/CSS)

```svg
<!-- Insert inside canvas SVG definition layer -->
<defs>
  <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8a9284" stop-opacity="0.6" />
    <stop offset="100%" stop-color="#555d50" stop-opacity="0.85" />
  </linearGradient>
</defs>

<!-- Flow line render -->
<path
  d={pathData}
  fill="none"
  stroke="url(#flow-gradient)"
  stroke-width="2"
  stroke-linecap="round"
  style="transition: stroke 0.2s ease, stroke-width 0.2s ease;"
/>
```
→ skipped: Animated crawling ants and active particle streams; add when real-time graph computation states require active signaling.


### Cycle #15 Directive (2026-11-02 22:32)
### 1. Tactile Warmth Canvas Background

```css
/* Ambient paper texture: subtle warm dot-matrix replacing cold tech grids */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: radial-gradient(circle, rgba(74, 60, 49, 0.09) 1px, transparent 1px);
  background-size: 24px 24px;
}
```
skipped: Canvas noise shaders and DOM-based tile renderers.
add when: Dynamic infinite zoom requires LOD (level-of-detail) dot clustering.

---

### 2. Nature-Curve Bezier Connectors

```js
// Natural organic flow line between node anchor points
function getOrganicEdge(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.45, 40);
  // ponytail: assumes primarily horizontal L-to-R flow; adapt axis via max(dx, dy) if omnidirectional
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicEdge(0, 0, 100, 50) === "M 0 0 C 45 0, 55 50, 100 50", "Edge math invalid");
```
skipped: A* routing, obstacle avoidance, and dynamic edge-detour packages.
add when: Canvas density causes overlapping node occlusions.

---

### 3. Apple-Grade Node Elevation & Settling Interaction

```css
/* Physics-like weight during drag and drop */
.flow-node {
  touch-action: none;
  user-select: none;
  background: #ffffff;
  border: 1px solid rgba(60, 50, 40, 0.08);
  box-shadow: 0 1px 3px rgba(45, 35, 20, 0.04), 0 4px 12px rgba(45, 35, 20, 0.03);
  transition: transform 0.16s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.16s ease;
}

.flow-node:active,
.flow-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.018) translateZ(0);
  box-shadow: 0 12px 32px rgba(45, 35, 20, 0.09), 0 2px 6px rgba(45, 35, 20, 0.04);
}
```
skipped: Complex spring-physics engine (Framer Motion/react-spring).
add when: Velocity-based momentum throwing is explicitly required.


### Cycle #16 Directive (2026-11-02 22:37)
### 1. Organic Bezier Edge Connector

```ts
// Natural horizontal S-curve with fluid curvature tension
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const cx = x1 + (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
}
// ponytail: midpoint control points; upgrade to A* or elkjs if nodes overlap bodies.
```
* Skipped: ELK/Dagre graph-routing dependencies and path intersection checks.
* Add when: Complex multi-branch graphs cause edges to cut directly through intervening nodes.

---

### 2. Ambient Warm Paper Canvas

```css
/* Warm stone-paper texture with center ambient light falloff */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: 
    radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.8) 0%, rgba(243, 239, 233, 0.4) 100%),
    radial-gradient(#dcd5cb 0.75px, transparent 0.75px);
  background-size: 100% 100%, 20px 20px;
}
```
* Skipped: Heavy WebGL noise shaders and multi-layer SVG filters.
* Add when: Dynamic daylight cycle or physical paper-fiber simulation is explicitly requested.

---

### 3. Zero-Lag Drag Physics via Native Pointer Capture

```ts
export function makeDraggable(el: HTMLElement, onPan: (dx: number, dy: number) => void) {
  let lx = 0, ly = 0;
  el.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    el.setPointerCapture(e.pointerId);
    lx = e.clientX; ly = e.clientY;

    const move = (ev: PointerEvent) => {
      onPan(ev.clientX - lx, ev.clientY - ly);
      lx = ev.clientX; ly = ev.clientY;
    };
    const up = () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
    };
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerup', up, { once: true });
  });
}
// ponytail: raw pointer tracking; upgrade to RAF throttle if dragging updates >60 SVGs simultaneously.
```
* Skipped: Third-party gesture libraries (Use-Gesture/Framer Motion) and manual window listeners.
* Add when: Multi-touch pinching and inertia-fling physics are demanded.


### Cycle #17 Directive (2026-11-02 22:43)
```css
/* 1. Nature ambient warm canvas backdrop */
.canvas-root {
  background-color: #faf9f5;
  background-image: radial-gradient(circle at 50% 50%, rgba(180, 160, 130, 0.22) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}
```
→ skipped: canvas-level SVG noise/grain shaders, add when bespoke skeuomorphic paper textures are explicitly requested.

```javascript
// 2. Natural organic S-curve connector
export const getSmoothEdge = (x1, y1, x2, y2) => {
  // ponytail: constant delta clamped to 40px; upgrade to dynamic port angle vectors if nodes rotate
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
→ skipped: A* / obstacle avoidance routing, add when complex node clustering creates visual line overlap.

```css
/* 3. Tactile node elevation & smooth interaction */
.canvas-node {
  background: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(70, 60, 50, 0.08);
  border-radius: 12px;
  box-shadow: 0 2px 8px -2px rgba(60, 45, 20, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 24px -6px rgba(60, 45, 20, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.04);
}
```
→ skipped: external spring physics library, add when gesture momentum flick/throw interaction is needed.


### Cycle #18 Directive (2026-11-02 22:49)
### 1. Zen Ambient Backdrop (Pure CSS)

```css
/* Warm parchment surface with ambient light wash and tactile grid */
.spatial-canvas {
  --bg-sand: #fbf9f5;
  --dot-color: rgba(94, 82, 64, 0.08);
  background-color: var(--bg-sand);
  background-image: 
    radial-gradient(ellipse at 50% 20%, rgba(255, 255, 255, 0.7) 0%, transparent 70%),
    radial-gradient(circle, var(--dot-color) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
}
```
skipped: Canvas-based grain shaders, add when static CSS causes noticeable banding on low-gamut displays.

---

### 2. Natural Flowchart Connectors (Zero-Dep SVG S-Curve)

```javascript
// ponytail: Horizontal bezier; upgrade to full A* pathing if obstacle avoidance is required
export function getNaturalConnectorPath(x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
skipped: Orthogonal obstacle avoidance routing, add when node overlap degrades edge legibility.

---

### 3. Tactile Node Rest & Lift (Pure CSS)

```css
/* Anti-slop tactile feedback: smooth lift on drag with subpixel text stabilization */
.canvas-node {
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  transition: box-shadow 180ms ease, border-color 180ms ease;
  box-shadow: 0 1px 3px rgba(45, 35, 20, 0.05), 0 8px 24px -4px rgba(45, 35, 20, 0.04);
  border: 1px solid rgba(82, 68, 48, 0.1);
  user-select: none;
  cursor: grab;
}
.canvas-node:active {
  cursor: grabbing;
  box-shadow: 0 4px 12px rgba(45, 35, 20, 0.08), 0 20px 32px -6px rgba(45, 35, 20, 0.06);
}
```
skipped: Spring physics JS runtime, add when drag release needs simulated velocity/inertia.


### Cycle #19 Directive (2026-11-02 22:54)
### 1. Organic Bezier Flowchart Connectors

```ts
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.45, 40);
  // ponytail: horizontal-flow biased. Upgrade to 4-way port routing if vertical/cycle branching is added.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicConnector(0, 0, 100, 50) === "M 0 0 C 45 0, 55 50, 100 50");
```
→ skipped: Obstacle-avoidance path routing (A*).
→ add when: Dense graphs cause frequent node-edge intersections.

---

### 2. Ambient Zen Parchment Backdrop

```css
.canvas-viewport {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(circle at 50% 10%, rgba(235, 230, 218, 0.6) 0%, transparent 60%),
    radial-gradient(circle, #ded9ce 0.85px, transparent 0.85px);
  background-size: 100% 100%, 24px 24px;
}
```
→ skipped: Heavy canvas-rendered dynamic grid or tiled noise PNG.
→ add when: Infinite zoom requires dynamic sub-pixel lod level scaling.

---

### 3. Tactile Apple-Grade Node Elevation & Drag Physics

```css
.canvas-node {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(214, 208, 196, 0.6);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  box-shadow: 0 1px 3px rgba(50, 40, 30, 0.04), 0 4px 12px rgba(50, 40, 30, 0.02);
}

.canvas-node:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 4px 14px rgba(50, 40, 30, 0.08);
}

.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.025) translateY(-3px);
  box-shadow: 0 14px 28px rgba(50, 40, 30, 0.12), 0 3px 8px rgba(50, 40, 30, 0.04);
}
```
→ skipped: WebGL or JS-driven spring physics engines.
→ add when: Nodes require complex multi-body velocity inertia on release.


### Cycle #20 Directive (2026-11-02 23:00)
```javascript
// 1. Organic Bezier Connectors
export function getNaturalCurve([x1, y1], [x2, y2]) {
  const dx = Math.abs(x2 - x1) * 0.5;
  // ponytail: fixed horizontal tangent; upgrade to orthogonal port-aware routing if nodes stack vertically
  return `M ${x1} ${y1} C ${x1 + Math.max(dx, 36)} ${y1}, ${x2 - Math.max(dx, 36)} ${y2}, ${x2} ${y2}`;
}
console.assert(getNaturalCurve([0, 0], [100, 50]).startsWith('M 0 0 C 50 0'), 'Curve math failed');
```

```css
/* 2. Zen Ambient Canvas Surface */
.canvas-viewport {
  background-color: oklch(0.975 0.008 85);
  background-image: radial-gradient(oklch(0.35 0.02 85 / 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: var(--pan-x, 0) var(--pan-y, 0);
  overscroll-behavior: none;
}

/* 3. Tactile Nature-UI Node Elevation */
.canvas-node {
  background: oklch(0.995 0.004 85 / 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid oklch(0.88 0.012 85 / 0.8);
  border-radius: 14px;
  box-shadow: 
    0 1px 2px oklch(0.2 0.02 85 / 0.03),
    0 8px 20px -4px oklch(0.2 0.02 85 / 0.06);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  will-change: transform;
}
.canvas-node:hover {
  box-shadow: 0 12px 28px -4px oklch(0.2 0.02 85 / 0.1);
}
.canvas-node:active {
  transform: scale(0.99);
}
```

skipped: Auto-layout collision solver (force-directed graph / dagre), add when node counts exceed 50 per canvas.
skipped: Multi-stop gradient paths & edge animations, add when state transitions need active data-flow signaling.
skipped: Custom noise-texture canvas filters, add when target runtime supports WebGL background blits without battery drain.


### Cycle #21 Directive (2026-11-02 23:06)
### 1. Warm Zen Canvas Backdrop

```css
/* Nature UI: warm Japanese paper tone with organic subtle dot lattice */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(rgba(60, 48, 40, 0.075) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}
```

### 2. Apple-Grade Tactile Node Lift

```css
/* Tactile spring elevation on drag/focus */
.flow-node {
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 2px rgba(40, 32, 24, 0.04), 0 4px 12px rgba(40, 32, 24, 0.03);
}

.flow-node:active,
.flow-node[data-dragging="true"] {
  transform: scale(1.018);
  box-shadow: 0 8px 24px rgba(40, 32, 24, 0.08), 0 2px 6px rgba(40, 32, 24, 0.04);
  cursor: grabbing;
}
```

### 3. Natural Flow S-Curve Connectors

```javascript
// Native organic cubic bezier between nodes
function getSmoothFlowPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
// ponytail: horizontal LR flow only; upgrade to directional multi-anchor routing if vertical layout added.

// Self-check
console.assert(
  getSmoothFlowPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Path interpolation failed"
);
```

skipped: dynamic obstacle avoidance, full canvas coordinate transforms, multi-bus routing.  
add when: user needs freeform vertical/arbitrary connector directions and node overlaps occur.


### Cycle #22 Directive (2026-11-02 23:12)
```javascript
// 1. Organic Bezier connector path (Natural Flow)
export function getOrganicPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.45, 36);
  // ponytail: fixed horizontal tangent; upgrade to anchor-normal vectors if nodes rotate
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicPath(0, 0, 100, 50) === "M 0 0 C 45 0, 55 50, 100 50",
  "getOrganicPath calculation failed"
);
```

```css
/* 2. Nature UI Ambient Backdrop & Smooth Canvas */
.spatial-canvas {
  background-color: #f8f6f0;
  background-image:
    radial-gradient(ellipse at 50% 20%, rgba(255, 255, 255, 0.6) 0%, transparent 75%),
    radial-gradient(circle, #d9d4c7 0.8px, transparent 0.8px);
  background-size: 100% 100%, 28px 28px;
  touch-action: none;
  contain: strict;
}

/* 3. Tactile Zen Warmth Nodes */
.canvas-node {
  background: rgba(253, 252, 249, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(80, 70, 50, 0.08);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(40, 35, 25, 0.03), 0 6px 16px rgba(40, 35, 25, 0.04);
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}
.canvas-node:active, .canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 32px rgba(40, 35, 25, 0.08), 0 2px 6px rgba(40, 35, 25, 0.04);
}
```

skipped: dynamic collision avoidance and routing grids; add when paths overlap heavily.
skipped: multi-layered SVG noise filters; add when users request physical linen texture emulation.
skipped: physics-based spring drag library; add when CSS transforms and pointer-events prove insufficient for multi-touch gestures.


### Cycle #23 Directive (2026-11-02 23:18)
### 1. Organic Bézier Flowchart Connector

```ts
// ponytail: Horizontal organic S-curve; upgrade to orthogonal routing if nodes collide.
export const getSmoothPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 48);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
skipped: A* routing / obstacle avoidance.
add when: Flowchart density causes overlapping paths.

---

### 2. Nature Zen Ambient Backdrop

```css
/* Ambient surface: warm stone substrate + sub-perceptual organic dot matrix */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(#2d2722 0.75px, transparent 0.75px);
  background-size: 24px 24px;
  background-position: var(--pan-x, 0px) var(--pan-y, 0px);
  touch-action: none;
  overscroll-behavior: none;
}
```
skipped: WebGL canvas shaders / noise textures.
add when: Native CSS banding occurs on low-DPI legacy panels.

---

### 3. Tactile Node Drag Micro-Interactions

```css
/* Low-latency native drag release with subtle warm elevation */
.flow-node {
  will-change: transform;
  transition: transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease;
  box-shadow: 0 1px 3px rgba(45, 39, 34, 0.04), 0 8px 24px -4px rgba(45, 39, 34, 0.06);
}

.flow-node.is-dragging {
  transition: none;
  box-shadow: 0 14px 36px -6px rgba(45, 39, 34, 0.12);
}
```
skipped: Heavy spring physics library (Framer Motion / react-spring).
add when: Multi-element interactive gesture velocity chaining is requested.


### Cycle #24 Directive (2026-11-02 23:23)
```css
/* 1. Ambient Warm Substrate & Tactile Canvas Node */
.spatial-canvas {
  background-color: #fbfaf6;
  background-image: radial-gradient(circle, rgba(80, 65, 50, 0.075) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(80, 65, 50, 0.08);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(60, 45, 30, 0.03), 0 1px 2px rgba(60, 45, 30, 0.04);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  will-change: transform;
}

.canvas-node:active, .canvas-node[data-dragging="true"] {
  transform: scale(1.015) translateY(-1px);
  box-shadow: 0 12px 28px rgba(60, 45, 30, 0.08), 0 2px 6px rgba(60, 45, 30, 0.04);
  cursor: grabbing;
}
```

```typescript
// 2. Natural Visual Flowchart Edge (Self-balancing S-curve)
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal left-to-right default; upgrade to directional port vector calculus if freeform 360 routing is added
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable assertion
console.assert(
  getOrganicConnector(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Path calculation failed"
);
```

skipped: Canvas-level grid rendering scripts and complex edge-routing graphs (e.g. ELK/D3).
add when: Dynamic obstacle-avoidance routing or 1,000+ simultaneous visible edges require quadtree virtualization.


### Cycle #25 Directive (2026-11-02 23:29)
```css
/* 1. Ambient Stone Dot Grid (CSS Native) */
.canvas-viewport {
  background-color: #fbfbfa;
  background-image: radial-gradient(circle, rgba(55, 45, 35, 0.075) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* 2. Tactile Zen Node Surface */
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(40, 30, 20, 0.06);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(40, 30, 20, 0.04), 0 8px 20px -4px rgba(40, 30, 20, 0.05);
  transition: transform 120ms cubic-bezier(0.2, 0, 0, 1), box-shadow 120ms ease;
  will-change: transform;
}
.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 0 14px 28px -4px rgba(40, 30, 20, 0.1);
}
```

```javascript
// 3. Smooth Natural S-Curve Connector
export const getCurvedPath = (x1, y1, x2, y2) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  // ponytail: horizontal cubic S-curve; upgrade to orthogonal A* when nodes overlap.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(getCurvedPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50", "Path gen failed");
```

skipped: dynamic obstacle-avoidance routing, add when edge crossings cause legibility issues.  
skipped: WebGL canvas tiling, add when canvas element count exceeds 1,000 nodes.  
skipped: physics spring engine, add when interactive multi-node drag rubber-banding is explicitly requested.


### Cycle #26 Directive (2026-11-02 23:35)
### 1. Organic S-Curve Flow Connectors (SVG)

```javascript
// Computes natural, organic flow curve between two node anchor points
export function getFlowPath([x1, y1], [x2, y2]) {
  const dx = Math.abs(x2 - x1) * 0.5;
  const cx1 = x1 + Math.max(dx, 40);
  const cx2 = x2 - Math.max(dx, 40);
  // ponytail: horizontal-biased S-curve; upgrade to directional port heuristics if 4-way routing needed
  return `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
}
```
skipped: Obstacle avoidance & multi-axis routing.  
add when: Flowchart density exceeds 20 overlapping edges.

---

### 2. Nature Ambient Canvas Tone & Grain (CSS)

```css
/* Zen paper canvas: warm stone background, organic dot field, zero extra DOM */
.spatial-canvas {
  background-color: #f7f5f0;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(44, 42, 38, 0.08) 1px, transparent 1px),
    radial-gradient(ellipse at top, rgba(235, 230, 218, 0.6) 0%, transparent 70%);
  background-size: 24px 24px, 100% 100%;
  touch-action: none;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    background-color: #171614;
    background-image: 
      radial-gradient(circle at 50% 50%, rgba(214, 208, 196, 0.07) 1px, transparent 1px),
      radial-gradient(ellipse at top, rgba(40, 37, 33, 0.8) 0%, transparent 70%);
  }
}
```
skipped: Canvas noise SVG textures or WebGL shaders.  
add when: Static CSS gradients fail high-DPI tactile inspection.

---

### 3. Tactile Node Drag with Native Pointer Capture

```javascript
export function bindDraggable(nodeEl, onMove) {
  nodeEl.onpointerdown = (e) => {
    if (e.target.closest('button, input, [contenteditable]')) return;
    nodeEl.setPointerCapture(e.pointerId);
    let lx = e.clientX, ly = e.clientY;

    nodeEl.onpointermove = (ev) => {
      onMove(ev.clientX - lx, ev.clientY - ly);
      lx = ev.clientX;
      ly = ev.clientY;
    };
    nodeEl.onpointerup = () => {
      nodeEl.onpointermove = null;
      nodeEl.onpointerup = null;
    };
  };
}
```
skipped: Momentum/inertia physics loop and multi-touch gestures.  
add when: Touchpad/canvas pinch-to-zoom is integrated into coordinate space.


### Cycle #27 Directive (2026-11-02 23:40)
### 1. Organic Flowchart Béziers (Native SVG Smoothstep)

```javascript
// Natural directional cubic bezier with distance-proportional sway
export function getOrganicPath(x1, y1, x2, y2) {
  const dx = (x2 - x1) * 0.5;
  const dy = y2 - y1;
  // ponytail: horizontal flow only; upgrade to directional port vectoring if ports exist on top/bottom
  return `M ${x1} ${y1} C ${x1 + Math.max(dx, 40)} ${y1}, ${x2 - Math.max(dx, 40)} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Bézier calculation mismatch");
```
`skipped: Custom orthogonal edge routers and obstacle avoidance; add when node density causes overlapping lines.`

---

### 2. Zen Ambient Canvas & Node Material (Pure CSS)

```css
/* Ambient warmth: stone paper base + diffused dot grid + frosted organic nodes */
.spatial-canvas {
  background-color: #fbfaf8;
  background-image: radial-gradient(circle at center, rgba(145, 134, 120, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
}

.canvas-node {
  background: rgba(255, 254, 252, 0.82);
  backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(180, 170, 155, 0.28);
  box-shadow: 
    0 1px 2px rgba(60, 50, 40, 0.03),
    0 6px 16px -4px rgba(60, 50, 40, 0.05);
  border-radius: 14px;
  transition: box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease;
}

.canvas-node:hover {
  border-color: rgba(140, 128, 112, 0.45);
  box-shadow: 
    0 2px 4px rgba(60, 50, 40, 0.04),
    0 12px 28px -6px rgba(60, 50, 40, 0.08);
}
```
`skipped: Canvas noise textures and dynamic lighting shaders; add when GPU overhead budget is verified on mobile.`

---

### 3. Jitter-Free Native Pan Interaction

```javascript
export function bindCanvasPan(viewportEl, targetEl) {
  let state = { x: 0, y: 0, ox: 0, oy: 0, active: false };

  viewportEl.addEventListener('pointerdown', (e) => {
    if (e.target !== viewportEl) return;
    state = { ...state, ox: e.clientX - state.x, oy: e.clientY - state.y, active: true };
    viewportEl.setPointerCapture(e.pointerId);
  });

  viewportEl.addEventListener('pointermove', (e) => {
    if (!state.active) return;
    state.x = e.clientX - state.ox;
    state.y = e.clientY - state.oy;
    // ponytail: linear assignment; upgrade to CSS Matrix3D + transform scale when pinch-to-zoom is hooked
    targetEl.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
  });

  const stop = (e) => { state.active = false; try { viewportEl.releasePointerCapture(e.pointerId); } catch {} };
  viewportEl.addEventListener('pointerup', stop);
  viewportEl.addEventListener('pointercancel', stop);
}
```
`skipped: Inertial momentum/flick physics; add when high-velocity dragging feels abruptly truncated by users.`


### Cycle #28 Directive (2026-11-02 23:46)
### 1. Organic Bezier Flow Connectors

```typescript
// connector.ts - Zero-dependency organic bezier routing
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx1 = x1 + Math.max(Math.abs(dx) * 0.5, 32) * Math.sign(dx || 1);
  const cx2 = x2 - Math.max(Math.abs(dx) * 0.5, 32) * Math.sign(dx || 1);
  // ponytail: flat horizontal bias; replace with Manhattan A* if nodes overlap.
  return `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 100).startsWith('M 0 0 C 50 0, 50 100, 100 100'));
```
skipped: Obstacle avoidance / edge routing. Add when node density causes overlapping lines.

---

### 2. Nature UI Ambient Palette & Canvas Texture

```css
/* canvas-ambient.css */
:root {
  --canvas-bg: #fcfbf9;
  --canvas-grid-dot: rgba(74, 60, 49, 0.06);
  --node-surface: #ffffff;
  --node-border: rgba(60, 50, 40, 0.07);
  --node-shadow: 0 1px 2px rgba(60, 50, 40, 0.04), 0 10px 24px -6px rgba(60, 50, 40, 0.06);
  --ease-nature: cubic-bezier(0.16, 1, 0.3, 1);
}

.canvas-viewport {
  background-color: var(--canvas-bg);
  background-image: radial-gradient(var(--canvas-grid-dot) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
  overscroll-behavior: none;
  touch-action: none;
}
```
skipped: Dynamic dark mode palette and multi-layered noise SVGs. Add when user explicitly selects a dark theme.

---

### 3. Tactile Node Interaction & Spring Elevation

```css
/* node-interaction.css */
.canvas-node {
  background: var(--node-surface);
  border: 1px solid var(--node-border);
  border-radius: 12px;
  box-shadow: var(--node-shadow);
  transition: transform 0.22s var(--ease-nature), box-shadow 0.22s var(--ease-nature);
  will-change: transform;
}

.canvas-node:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(60, 50, 40, 0.05), 0 14px 28px -6px rgba(60, 50, 40, 0.08);
}

.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 16px 36px -8px rgba(60, 50, 40, 0.12);
}
```
skipped: Multi-axis tilt shaders and canvas blur filters. Add when WebGL pipeline is requested.


### Cycle #29 Directive (2026-11-02 23:52)
### 1. Organic S-Curve Connectors (Native SVG Path)

```ts
// ponytail: basic horizontal bezier; replace with obstacle routing if nodes overlap heavily
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
skipped: Manhattan/orthogonal pathfinding and self-intersection routing.  
add when: Flowcharts exceed 50 dense, multi-directional overlapping nodes.

---

### 2. Warm Zen Paper Canvas (Pure CSS)

```css
/* Warm ambient canvas with tactile dot grid */
.spatial-canvas {
  background-color: #fbfaf7;
  background-image: 
    radial-gradient(ellipse at 50% 0%, rgba(235, 225, 205, 0.3) 0%, transparent 60%),
    radial-gradient(#dcd8d0 0.8px, transparent 0.8px);
  background-size: 100% 100%, 24px 24px;
}
```
skipped: Canvas noise textures, WebGL shaders, or heavy raster background assets.  
add when: Explicit low-power mode toggles or complex custom theme engines are requested.

---

### 3. Tactile Card Elevation & Spring Feedback (Pure CSS)

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(60, 45, 20, 0.07);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(40, 30, 20, 0.04), 0 8px 20px rgba(40, 30, 20, 0.03);
  backdrop-filter: blur(16px);
  cursor: grab;
  transition: transform 140ms cubic-bezier(0.2, 0, 0, 1), box-shadow 140ms ease;
  user-select: none;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.015);
  box-shadow: 0 4px 10px rgba(40, 30, 20, 0.06), 0 16px 32px rgba(40, 30, 20, 0.06);
}
```
skipped: Framer Motion / external gesture libraries for node dragging feedback.  
add when: Physics velocity-based card flicking or multi-node grouping animations are introduced.


### Cycle #30 Directive (2026-11-02 23:57)
### 1. Organic Flowchart S-Curve (Native SVG Cubic Bezier)

```ts
// ponytail: natural cubic curve; upgrade to obstacle-avoiding orthogonal router if nodes overlap
export const getConnectorPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// runnable self-check
console.assert(
  getConnectorPath(0, 0, 100, 100) === "M 0 0 C 55 0, 45 100, 100 100",
  "Connector path generation failed"
);
```

### 2. Ambient Zen Backdrop (CSS Native Paper & Sage Air)

```css
/* Warm stone paper canvas with subtle sage wash and tactile dot grid */
.spatial-canvas {
  background-color: #F9F8F6;
  background-image: 
    radial-gradient(rgba(44, 41, 37, 0.07) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 0%, rgba(142, 158, 134, 0.08), transparent 75%);
  background-size: 24px 24px, 100% 100%;
  overscroll-behavior: none;
}
```

### 3. Tactile Node Depth & Interaction (Apple Precision Spring)

```css
/* Zero-JS tactile physics: contact shadow + micro-spring grab */
.canvas-node {
  background: #FFFFFF;
  border: 1px solid rgba(44, 41, 37, 0.08);
  border-radius: 14px;
  box-shadow: 
    0 1px 2px rgba(44, 41, 37, 0.03),
    0 6px 20px -4px rgba(44, 41, 37, 0.05);
  cursor: grab;
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
  user-select: none;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018) translateY(-2px);
  box-shadow: 
    0 2px 4px rgba(44, 41, 37, 0.04),
    0 16px 36px -6px rgba(44, 41, 37, 0.09);
}
```

---
skipped: canvas/webgl layout engines, spring animation dependencies (Framer Motion), complex Manhattan edge routing.  
add when: canvas exceeds 500 simultaneous active nodes or edges need automatic obstacle clearance.


### Cycle #31 Directive (2026-11-03 00:03)
```css
/* 1. Ambient Warmth Canvas: pure CSS tactile parchment + sub-pixel grain */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(120, 100, 80, 0.07) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 0%, rgba(240, 232, 220, 0.5) 0%, transparent 75%);
  background-size: 20px 20px, 100% 100%;
}

/* 2. Tactile Apple-grade Node Elevation */
.canvas-node {
  touch-action: none;
  border: 1px solid rgba(60, 50, 40, 0.08);
  box-shadow: 0 2px 8px -2px rgba(40, 30, 20, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
}
.canvas-node:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px -4px rgba(40, 30, 20, 0.08), 0 2px 4px rgba(0, 0, 0, 0.02);
}
.canvas-node.dragging {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 16px 32px -6px rgba(40, 30, 20, 0.12), 0 0 0 1px rgba(60, 50, 40, 0.12);
}
```

```typescript
// 3. Organic Flowchart Curvature (Native SVG Cubic Bézier)
// ponytail: clamped horizontal S-curve; upgrade to A* pathfinding if edges must route around obstacle nodes
export const getOrganicEdgePath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```

skipped: Canvas pan/zoom matrix library and complex edge collision avoidance engines.  
add when: Flowcharts exceed ~50 overlapping nodes requiring auto-orthogonal routing or viewport scaling.


### Cycle #32 Directive (2026-11-03 00:09)
### 1. Organic Bezier Connector Curve

```javascript
// ponytail: Horizontal-only cubic spline. Upgrade to 4-way orthogonal router if nodes overlap vertically.
export function getOrganicPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable check
console.assert(
  getOrganicPath(0, 0, 100, 50) === "M 0 0 C 55 0, 45 50, 100 50",
  "Path calculation failed"
);
```

skipped: Obstacle collision and A* pathfinding.  
add when: Flowcharts routinely stack nodes directly on top of each other.

---

### 2. Zen Warmth Canvas & Glass Node Styling

```css
/* Ambient warm substrate */
.spatial-canvas-bg {
  background-color: #fbf9f4;
  background-image: radial-gradient(circle, #e3dcce 0.8px, transparent 0.8px);
  background-size: 24px 24px;
}

/* Apple-grade frosted tactile node */
.spatial-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(216, 208, 196, 0.6);
  border-radius: 14px;
  box-shadow: 
    0 1px 2px rgba(60, 50, 40, 0.03),
    0 8px 24px -4px rgba(60, 50, 40, 0.06);
  will-change: transform;
}
```

skipped: CSS custom themes and dark mode tokens.  
add when: Dark palette is explicitly requested.

---

### 3. GPU-Threaded Canvas Transform

```javascript
// Hardware-accelerated viewport manipulation
export function applyCanvasTransform(viewportEl, x, y, scale) {
  viewportEl.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
}
```

skipped: Physics-based inertia/momentum spring math.  
add when: Native pan-drag feels abrupt without deceleration.


### Cycle #33 Directive (2026-11-03 00:15)
### 1. Organic Zen Canvas Background
Eliminate stark gridlines. Use a dual-layered warm paper base with muted organic points using pure CSS.

```css
/* canvas-ambient.css */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(240, 235, 225, 0.6) 0%, transparent 80%),
    radial-gradient(circle, rgba(130, 120, 105, 0.16) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  /* ponytail: CSS background pattern ceiling; upgrade to WebGL/Canvas tiles if viewport scale < 0.2 causes moiré */
}
```
→ skipped: complex canvas-rendered grid or custom SVG pattern assets.  
→ add when: pan/zoom scaling introduces visual aliasing at extreme zoom levels.

---

### 2. Natural S-Curve Flowchart Connectors
Generate clean, tension-adaptive cubic bezier paths natively instead of importing heavy layout or graph libraries.

```javascript
// connector.js
export function getFlowPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
  // ponytail: fixed horizontal tangent ceiling; upgrade to 4-way orthogonal router if nodes cross perpendicularly
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Connector path calculation error");
```
→ skipped: A* obstacle-avoiding router or ElkJS/Dagre integration.  
→ add when: user nodes overlap heavily and straight visual bridges become ambiguous.

---

### 3. Tactile Glass-and-Stone Node Surfaces
Apply Apple-standard specular borders, ambient warm depth, and native spring-damped press feedback without JavaScript event hooks.

```css
/* node-tactile.css */
.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px) saturate(130%);
  border: 1px solid rgba(225, 220, 210, 0.8);
  border-radius: 14px;
  box-shadow: 
    0 1px 2px rgba(45, 35, 20, 0.03),
    0 10px 28px -6px rgba(45, 35, 20, 0.07);
  transition: transform 160ms cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 160ms ease;
  user-select: none;
}

.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 
    0 1px 2px rgba(45, 35, 20, 0.03),
    0 4px 12px -2px rgba(45, 35, 20, 0.05);
}
```
→ skipped: Framer Motion / Spring physics JS libraries.  
→ add when: velocity-based node release gestures or throw momentum are required.


### Cycle #34 Directive (2026-11-03 00:20)
### 1. Organic Bezier Connector Curve

```ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.abs(x2 - x1) * 0.55;
  const dy = y2 - y1;
  const cx1 = x1 + Math.max(dx, 32);
  const cx2 = x2 - Math.max(dx, 32);
  // ponytail: horizontal flow assumption; replace with full 4-quadrant routing when nodes dock vertically
  return `M ${x1} ${y1} C ${cx1} ${y1 + dy * 0.1}, ${cx2} ${y2 - dy * 0.1}, ${x2} ${y2}`;
}
```
skipped: Obstacle-avoiding orthogonal pathfinder (A*).  
add when: Dense node clusters overlap connector lines.

---

### 2. Nature UI Ambient Canvas (Washi/Parchment Depth)

```css
.canvasSurface {
  background-color: #fbf9f4;
  background-image: radial-gradient(circle at 1px 1px, rgba(120, 105, 85, 0.13) 1px, transparent 0);
  background-size: var(--grid-step, 24px) var(--grid-step, 24px);
  mask-image: radial-gradient(ellipse at 50% 50%, black 75%, transparent 100%);
  user-select: none;
}
```
skipped: WebGL noise shader and canvas-redraw paper grain.  
add when: Flat CSS gradient fails texture benchmarks on 4K displays.

---

### 3. Tactile Fluid Drag Damping

```css
.flowNode {
  touch-action: none;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(160, 140, 115, 0.18);
  box-shadow: 0 2px 8px -2px rgba(70, 50, 30, 0.04), 0 8px 20px -4px rgba(70, 50, 30, 0.06);
  transition: transform 140ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 140ms ease;
}
.flowNode:active {
  cursor: grabbing;
  transform: scale(1.018) translateY(-2px);
  box-shadow: 0 12px 30px -4px rgba(70, 50, 30, 0.12), 0 4px 10px -2px rgba(70, 50, 30, 0.06);
}
```
skipped: Spring physics JS runtime (Framer Motion/react-spring).  
add when: Physics momentum/toss-to-pan is explicitly scoped.


### Cycle #35 Directive (2026-11-03 00:26)
```css
/* 1. Ambient Warm Canvas (Nature/Zen Canvas Backdrop) */
.canvas-root {
  background-color: #fbfaf8;
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(225, 219, 205, 0.4) 0%, transparent 60%),
    radial-gradient(#d6d0c4 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
}

/* 2. Tactile Zen Node Physics */
.flow-node {
  touch-action: none;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(214, 208, 196, 0.6);
  box-shadow: 0 4px 16px -2px rgba(60, 50, 40, 0.04), 0 1px 2px rgba(60, 50, 40, 0.03);
  transition: transform 0.18s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.18s ease;
}
.flow-node:hover {
  transform: translateY(-1.5px) scale(1.008);
  box-shadow: 0 8px 24px -4px rgba(60, 50, 40, 0.08), 0 2px 4px rgba(60, 50, 40, 0.04);
}
.flow-node:active {
  transform: scale(0.995);
}
```

```ts
// 3. Organic Natural Flowchart Path Generator (Pure Math, Native SVG)
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: assumes primarily left-to-right flow; upgrade to 4-quadrant routing if nodes loop backwards
  const dx = Math.abs(x2 - x1) * 0.55;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 50) === "M 0 0 C 55 0, 45 50, 100 50", "Path failed");
```

skipped: dynamic obstacle avoidance & DAG layout engines, add when node overlap becomes unmanageable.  
skipped: WebGL paper-grain shaders, add when standard CSS subpixel rendering drops below 60fps.  
skipped: custom gesture recognizers, add when multi-pointer trackpad gestures conflict with native canvas pinch-zoom.


### Cycle #36 Directive (2026-11-03 00:32)
### 1. Organic Bezier Edge Connector

```typescript
// utils/flowchart.ts
export const getOrganicPath = (x1: number, y1: number, x2: number, y2: number): string => {
  // ponytail: horizontal-biased S-curve; upgrade to dynamic obstacle-routing if nodes overlap
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(
  getOrganicPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Bezier curve calculation failed"
);
```
*skipped: Obstacle avoidance / orthogonal line routing.*  
*add when: Complex overlapping multi-tier branch graphs collide.*

---

### 2. Nature UI Ambient Backdrop & Zen Card Elevation

```css
/* canvas.css */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: radial-gradient(circle, #e6e0d6 0.8px, transparent 0.8px);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}

.spatial-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(218, 212, 202, 0.65);
  border-radius: 14px;
  box-shadow: 0 4px 18px -2px rgba(50, 42, 32, 0.04), 0 1px 2px rgba(50, 42, 32, 0.03);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.spatial-node:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 10px 28px -4px rgba(50, 42, 32, 0.08), 0 2px 4px rgba(50, 42, 32, 0.04);
}
```
*skipped: Complex canvas textures (SVG noise, animated grain shaders).*  
*add when: Visual depth feels flat on non-retina displays.*

---

### 3. Native Pointer Capture Canvas Pan/Drag Interaction

```typescript
// hooks/useDirectDrag.ts
export const bindDrag = (el: HTMLElement, onMove: (dx: number, dy: number) => void) => {
  el.onpointerdown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    el.setPointerCapture(e.pointerId);
    let lx = e.clientX, ly = e.clientY;

    el.onpointermove = (ev: PointerEvent) => {
      onMove(ev.clientX - lx, ev.clientY - ly);
      lx = ev.clientX;
      ly = ev.clientY;
    };

    el.onpointerup = el.onpointercancel = () => {
      el.onpointermove = el.onpointerup = el.onpointercancel = null;
    };
  };
};
```
*skipped: Inertia/momentum spring physics library.*  
*add when: Users explicitly request flick-scrolling across massive canvas bounds.*


### Cycle #37 Directive (2026-11-03 00:37)
### 1. Organic S-Curve Flowchart Connectors

```typescript
// connector.ts
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal midpoint curve; upgrade to obstacle routing if nodes overlap heavily.
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getFlowPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Connector path generation failed"
);
```
skipped: Orthogonal/elbow routing algorithms and edge bundling.  
add when: Graph density exceeds ~50 nodes with overlapping bounding boxes.

---

### 2. Nature UI Ambient Warmth & Tactile Nodes

```css
/* canvas.css */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(74, 60, 49, 0.11) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
}

.canvas-node {
  background: #ffffff;
  border: 1px solid rgba(74, 60, 49, 0.08);
  border-radius: 12px;
  /* ponytail: static dual-tone ambient shadow; upgrade to dynamic light source if multi-layer z-index explodes */
  box-shadow: 0 4px 16px -2px rgba(60, 45, 30, 0.05), 0 1px 3px rgba(60, 45, 30, 0.03);
  transition: box-shadow 150ms ease, transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
}

.canvas-node:hover {
  border-color: rgba(74, 60, 49, 0.16);
  box-shadow: 0 8px 24px -4px rgba(60, 45, 30, 0.08), 0 2px 6px rgba(60, 45, 30, 0.04);
}
```
skipped: Canvas-drawn background grid via WebGL or 2D context.  
add when: Zoom scale ranges exceed 0.2x–3.0x where CSS subpixel aliasing breaks down.

---

### 3. Native Smooth Interaction (Drag Capture)

```typescript
// useDraggable.ts
export function bindNativeDrag(el: HTMLElement, onMove: (dx: number, dy: number) => void) {
  el.onpointerdown = (e) => {
    if (e.button !== 0) return;
    el.setPointerCapture(e.pointerId);
    let lx = e.clientX, ly = e.clientY;

    el.onpointermove = (ev) => {
      onMove(ev.clientX - lx, ev.clientY - ly);
      lx = ev.clientX;
      ly = ev.clientY;
    };

    el.onpointerup = el.onpointercancel = (ev) => {
      el.releasePointerCapture(ev.pointerId);
      el.onpointermove = el.onpointerup = el.onpointercancel = null;
    };
  };
}
```
skipped: External drag-and-drop gesture libraries and physics springs.  
add when: Momentum-based flick-scrolling or multi-touch canvas pinch-to-zoom is required.


### Cycle #38 Directive (2026-11-03 00:43)
### 1. Nature Ambient Viewport & Warm Dot Grid
```css
/* Ambient paper warmth + tactile canvas surface */
.canvas-viewport {
  background-color: #fbfaf7;
  background-image: 
    radial-gradient(at 50% 0%, rgba(228, 221, 209, 0.45) 0%, transparent 75%),
    radial-gradient(circle, #dcd7ce 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
}
```

### 2. Natural Flowchart Connector Curvature
```javascript
// Native cubic drape between nodes
export function getFlowPath(x1, y1, x2, y2) {
  const dx = x2 - x1;
  // ponytail: fixed horizontal bezier inflection; upgrade to obstacle routing if nodes collide
  const cx = Math.max(Math.abs(dx) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + cx} ${y1}, ${x2 - cx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getFlowPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Path calculation failed"
);
```

### 3. Zen Tactile Node Interaction
```css
/* Subpixel glass-paper elevation and smooth grab state */
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(214, 208, 196, 0.65);
  box-shadow: 0 4px 14px -2px rgba(60, 52, 42, 0.05), 0 1px 2px rgba(60, 52, 42, 0.04);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  cursor: grab;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.015) translateY(-1px);
  box-shadow: 0 12px 24px -4px rgba(60, 52, 42, 0.09), 0 2px 6px rgba(60, 52, 42, 0.05);
}
```

skipped: dynamic orthogonal rerouting, canvas physics engine, and custom webgl noise.  
add when: graph density exceeds 50+ intersecting nodes or user asks for procedural wire simulations.


### Cycle #39 Directive (2026-11-03 00:49)
### 1. Zen Ambient Canvas Grid (CSS Native)

```css
/* Replace JS-rendered canvas grid with native hardware-accelerated warm paper grid */
.spatial-canvas {
  background-color: #faf8f5; /* warm stone base */
  background-image: 
    radial-gradient(circle, rgba(115, 95, 75, 0.12) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(220, 210, 195, 0.4) 100%);
  background-size: 24px 24px, 100% 100%;
  background-attachment: local;
  touch-action: none;
  overscroll-behavior: none;
}
```
*skipped: HTML5 Canvas draw loop / WebGL background, add when: dynamic zoom scale breaks subpixel CSS tiling.*

---

### 2. Natural Organic Bezier Connector (One-Line Math)

```typescript
// Smooth nature-feel horizontal/vertical cubic spline without layout engine bloat
export const getOrganicSpline = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.abs(x2 - x1) * 0.45;
  // ponytail: fixed horizontal tangent; upgrade to orthogonal axis-switching when multi-edge routing needs it
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
*skipped: ELK/D3-dag layout solvers and multi-segment obstacle avoidance, add when: overlapping nodes cause illegible wire crossings.*

---

### 3. Tactile Node Rest & Select (Apple-Tuned Spring CSS)

```css
/* Warm elevation with tactile spring response */
.canvas-node {
  contain: layout style paint;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(180, 160, 140, 0.22);
  box-shadow: 
    0 1px 2px rgba(60, 50, 40, 0.04), 
    0 6px 16px -4px rgba(70, 55, 40, 0.08);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
}

.canvas-node:active, .canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 
    0 4px 8px rgba(60, 50, 40, 0.06), 
    0 16px 32px -6px rgba(70, 55, 40, 0.14);
}
```
*skipped: Framer Motion / spring physics runloop on drag, add when: nodes need momentum throw or magnetic auto-alignment.*


### Cycle #40 Directive (2026-11-03 00:54)
### 1. Zen Ambient Canvas Surface (CSS)
Replace sterile gridlines with an Apple-warm, paper-tinted ambient canvas with a soft tactile dot matrix.

```css
/* canvas.css */
.spatial-canvas {
  background-color: #fbf9f5; /* Warm alabaster */
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(245, 240, 230, 0.6) 0%, transparent 100%),
    radial-gradient(rgba(44, 38, 34, 0.08) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  overscroll-behavior: none;
  touch-action: none;
}
```
`skipped: WebGL noise/shaders, add when canvas scale exceeds viewport without performance dip.`

---

### 2. Natural S-Curve Flowchart Connectors (Native SVG)
Replace angular or stiff lines with an organic, weighted cubic bezier path generator.

```javascript
// connector.js
export function getOrganicPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: horizontal-first layout; upgrade to 4-way orthogonal when manual anchor selection lands.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
```css
/* connector.css */
.flow-edge {
  fill: none;
  stroke: #c8c2b7;
  stroke-width: 1.75px;
  stroke-linecap: round;
  transition: stroke 0.2s cubic-bezier(0.16, 1, 0.3, 1), stroke-width 0.2s ease;
}
.flow-edge:hover {
  stroke: #7c7267;
  stroke-width: 2.25px;
}
```
`skipped: Obstacle avoidance / path routing engine, add when user nodes exceed 50 dense overlaps.`

---

### 3. Tactile Node Float Interaction (CSS/Transform)
Apple-like subtle lift on drag/hover using GPU transforms and soft shadow dispersal.

```css
/* node.css */
.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(44, 38, 34, 0.08);
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(40, 30, 20, 0.04), 0 1px 2px rgba(40, 30, 20, 0.02);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}
.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.025) translateY(-2px);
  box-shadow: 0 12px 28px rgba(40, 30, 20, 0.1), 0 4px 8px rgba(40, 30, 20, 0.04);
}
```
`skipped: Physics spring solver, add when inertia tossing is requested.`


### Cycle #41 Directive (2026-11-03 01:00)
### 1. Adaptive Organic Flow Path

```ts
// ponytail: Horizontal cubic bezier. Upgrade to dynamic port orientation (top/bottom) if vertical layouts are supported.
export function getOrganicEdge(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicEdge(0, 0, 100, 100) === 'M 0 0 C 50 0, 50 100, 100 100', 'Edge curve calculation failed');
```
*skipped: Obstacle routing & self-intersect collision. Add when canvas density exceeds 50+ overlapping nodes.*

---

### 2. Nature Zen Paper & Ambient Dot Grid

```css
.spatial-canvas {
  background-color: #fcfbf9; /* warm washi base */
  background-image: 
    radial-gradient(circle at 50% 40%, rgba(217, 185, 155, 0.12) 0%, transparent 70%),
    radial-gradient(#cfc7bd 1px, transparent 1px);
  background-size: 100% 100%, 28px 28px;
  background-position: 0 0, var(--pan-x, 0px) var(--pan-y, 0px);
}
```
*skipped: Canvas-based GPU tile renderers. Add when pan/zoom matrix operations stutter on low-end mobile devices.*

---

### 3. Tactile Leaf-Elevation Node Physics

```css
.canvas-node {
  touch-action: none;
  user-select: none;
  border-radius: 14px;
  border: 1px solid rgba(180, 160, 140, 0.22);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 2px rgba(60, 45, 30, 0.04), 0 8px 20px -6px rgba(60, 45, 30, 0.05);
  transition: transform 120ms cubic-bezier(0.2, 0, 0, 1), box-shadow 120ms ease;
  will-change: transform;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 4px 14px rgba(60, 45, 30, 0.08), 0 20px 32px -8px rgba(60, 45, 30, 0.08);
}
```
*skipped: Complex physics engine (e.g., Matter.js springs). Add when nodes need kinetic collisions during drag-release.*


### Cycle #42 Directive (2026-11-03 01:06)
### 1. Zen Ambient Canvas Backdrop (CSS)
Replace flat or harsh grid backdrops with an organic, warm-bone paper gradient and subtle tactile dot grid.

```css
/* canvas.css */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: 
    radial-gradient(circle, rgba(140, 120, 100, 0.12) 1px, transparent 1px),
    radial-gradient(ellipse 90% 70% at 50% 0%, rgba(240, 230, 215, 0.5) 0%, transparent 80%);
  background-size: 24px 24px, 100% 100%;
}
```
skipped: Canvas noise textures and WebGL shaders.  
add when: Dynamic daylight/lighting cycle is requested.

---

### 2. Natural Organic Flowchart Curvature (JS)
Compute fluid, adaptive cubic Bézier paths between anchors without external diagramming libraries.

```javascript
// linkPath.js
// ponytail: horizontal clamped bezier; switch to obstacle-avoiding router if nodes overlap.
export const getSmoothEdge = (x1, y1, x2, y2) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
skipped: Complex collision-avoiding A* path routing.  
add when: Users produce dense overlapping tree structures.

---

### 3. Tactile Glass Node States (CSS)
Native glassmorphic warmth with hardware-accelerated lift on grab.

```css
/* node.css */
.canvas-node {
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(210, 195, 180, 0.6);
  border-radius: 12px;
  box-shadow: 0 4px 16px -2px rgba(60, 50, 40, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.15s ease;
  will-change: transform;
}

.canvas-node:active, .canvas-node[data-dragging="true"] {
  transform: scale(1.02);
  box-shadow: 0 14px 30px -4px rgba(60, 50, 40, 0.12), 0 2px 4px rgba(0, 0, 0, 0.04);
}
```
skipped: Framer Motion / physics spring runtime.  
add when: Custom dampening or momentum throws are required.


### Cycle #43 Directive (2026-11-03 01:12)
### 1. Organic Flowchart Bézier Connectors (Native SVG)

Replace stepped or rigid linear SVG edges with organic, directional Bézier curves.

```ts
// connector.ts
export function getOrganicEdge(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: horizontal flow assumption; upgrade to 4-quadrant vector anchors if nodes route vertically.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicEdge(0, 0, 100, 100).startsWith("M 0 0 C 50 0, 50 100, 100 100"));
```
→ skipped: Obstacle avoidance, edge routing algorithms (Dagre/Elk).  
→ add when: Nodes overlap or require automated maze routing.

---

### 2. Ambient Warmth & Tactile Elevation (Pure CSS)

Replace stark monochrome canvas grid and harsh drop-shadows with earth-toned ambient occlusion.

```css
/* canvas-theme.css */
.canvas-viewport {
  background-color: #faf9f5; /* Warm stone-50 */
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(224, 218, 206, 0.4) 0%, transparent 80%),
    radial-gradient(#dfd9cd 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  overscroll-behavior: none;
}

.canvas-node {
  background: #ffffff;
  border: 1px solid rgba(120, 110, 95, 0.12);
  border-radius: 12px;
  box-shadow: 0 2px 8px -2px rgba(60, 50, 40, 0.04), 0 1px 2px rgba(60, 50, 40, 0.03);
  transition: transform 0.12s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.12s ease;
  user-select: none;
}

.canvas-node:hover {
  border-color: rgba(120, 110, 95, 0.22);
}

.canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.015) translateY(-2px);
  box-shadow: 0 16px 32px -6px rgba(60, 50, 40, 0.08), 0 6px 12px -2px rgba(60, 50, 40, 0.03);
}
```
→ skipped: Dynamic canvas lighting shaders and DOM blur filters (`backdrop-filter`).  
→ add when: Custom dark mode is explicitly scheduled.

---

### 3. Zero-Dependency Pointer Dragging (Native Pointer Capture)

Replaces laggy mouse event listeners or bloated drag libraries with direct browser pointer capture.

```ts
// drag.ts
export function bindNodeDrag(el: HTMLElement, onDelta: (dx: number, dy: number) => void) {
  let sx = 0, sy = 0;

  el.onpointerdown = (e) => {
    if ((e.target as HTMLElement).closest("button, input, [data-no-drag]")) return;
    el.setPointerCapture(e.pointerId);
    sx = e.clientX; sy = e.clientY;
    el.dataset.dragging = "true";

    el.onpointermove = (ev) => {
      onDelta(ev.clientX - sx, ev.clientY - sy);
      sx = ev.clientX; sy = ev.clientY;
    };

    el.onpointerup = el.onpointercancel = () => {
      el.onpointermove = el.onpointerup = el.onpointercancel = null;
      delete el.dataset.dragging;
    };
  };
}
```
→ skipped: Inertial physics / momentum lerping.  
→ add when: Canvas supports high-velocity touch swipe interactions.


### Cycle #44 Directive (2026-11-03 01:17)
```css
/* 1. Ambient Warm Canvas: 0-JS layered paper texture */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(circle, rgba(120, 100, 80, 0.14) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 0%, rgba(245, 235, 220, 0.6), transparent 75%);
  background-size: 20px 20px, 100% 100%;
}

/* 2. Tactile Zen Lift: Smooth native interaction without physics runtime */
.canvas-node {
  touch-action: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 6px -1px rgba(50, 40, 30, 0.04), 0 0 0 1px rgba(50, 40, 30, 0.06);
  transition: transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 150ms ease;
}
.canvas-node:active, .canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.018) translateY(-2px);
  box-shadow: 0 14px 28px -6px rgba(50, 40, 30, 0.09), 0 0 0 1px rgba(50, 40, 30, 0.08);
}
```

```ts
// 3. Organic Flowchart Bézier with relaxed gravitational sag
export const getFlowPath = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  // ponytail: static cubic control points; upgrade to dynamic collision deflection if edges overlap
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```

skipped: Canvas WebGL shaders, third-party spring physics engine (Framer Motion), and dynamic edge obstacle routing.
add when: Scene exceeds 500 simultaneous nodes or edge crossings cause visual ambiguity under dense cluster graphs.


### Cycle #45 Directive (2026-11-03 01:23)
### 1. Organic Bezier Flowchart Connectors

```ts
// connector.ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal S-curve ceiling; upgrade to 4-way orthogonal routing if canvas supports bidirectional loops
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable check
console.assert(
  getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Path calculation failed"
);
```

```css
/* connector.css */
.flow-edge {
  fill: none;
  stroke: #8c8275;
  stroke-width: 1.5px;
  stroke-linecap: round;
  opacity: 0.55;
  transition: stroke 0.2s ease, opacity 0.2s ease;
}
.flow-edge:hover {
  stroke: #5c5346;
  opacity: 0.9;
}
```

skipped: Path bundling algorithms, dynamic obstacle avoidance.
add when: Graph density exceeds 50 crossing edges causing occlusion.

---

### 2. Ambient Nature Canvas Texture

```css
/* canvas.css */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(circle at 50% 40%, rgba(240, 234, 224, 0.6) 0%, transparent 75%),
    radial-gradient(rgba(140, 130, 115, 0.18) 0.75px, transparent 0.75px);
  background-size: 100% 100%, 20px 20px;
}
```

skipped: WebGL paper-grain shader / noise texture images.
add when: CSS sub-pixel rendering stutters during infinite pan/zoom.

---

### 3. Native Fluid Drag Micro-Interaction

```css
/* node.css */
.canvas-node {
  touch-action: none;
  user-select: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(140, 130, 115, 0.14);
  box-shadow: 0 2px 6px rgba(60, 50, 40, 0.03), 0 10px 24px -4px rgba(60, 50, 40, 0.04);
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.15s ease;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 8px 16px rgba(60, 50, 40, 0.06), 0 20px 32px -6px rgba(60, 50, 40, 0.08);
}
```

skipped: Physics engine springs (framer-motion, popmotion).
add when: Multi-node cluster dragging requires spring drag-latencies.


### Cycle #46 Directive (2026-11-03 01:29)
### 1. Zen Ambient Canvas Grid & Tactile Depth

```css
/* Warm rice-paper ambient canvas + frosted glass nodes */
.canvas-viewport {
  background-color: #f8f6f0;
  background-image: radial-gradient(circle at 1px 1px, rgba(74, 68, 60, 0.09) 1px, transparent 0);
  background-size: 24px 24px;
  touch-action: none;
  user-select: none;
}

.flow-node {
  background: rgba(255, 253, 250, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(60, 50, 40, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 20px -2px rgba(50, 40, 30, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms ease;
  will-change: transform;
}

.flow-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 8px 28px -4px rgba(50, 40, 30, 0.12);
}
```
→ skipped: WebGL paper shaders and dynamic lighting, add when user zoom scale causes pattern aliasing.

---

### 2. Natural Bezier Flow Curves

```ts
// Natural S-curve with horizontal drift
export const getOrganicEdge = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 36);
  // ponytail: horizontal layout bias only; upgrade to port-normal vector math if 4-sided ports are added
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(
  getOrganicEdge(0, 0, 100, 100) === "M 0 0 C 55 0, 45 100, 100 100",
  "Bezier computation mismatch"
);
```
→ skipped: Collision routing around intermediary nodes, add when layout reaches high-density node clusters.

---

### 3. Native Smooth Pan Inertia (Zero JS Library)

```css
/* GPU-bound canvas transform viewport layer */
.canvas-world {
  transform-origin: 0 0;
  transition: transform 80ms cubic-bezier(0.25, 1, 0.5, 1);
  contain: layout style paint;
}
.canvas-world.is-dragging {
  transition: none; /* Bypass interpolation latency during direct manipulation */
}
```
→ skipped: Physics spring velocity solver (Framer/react-spring), add when momentum-flinging gestures are requested.


### Cycle #47 Directive (2026-11-03 01:34)
### 1. Organic Bezier Edge Flow (Native SVG Path)

```ts
// Smooth S-curve with horizontal tension; replaces rigid straight/jagged links
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 32);
  // ponytail: horizontal-biased flow; switch to auto-axis orientation if vertical flow is added
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 55 0, 45 100, 100 100");
```
skipped: complex obstacle-avoidance routing, add when node collisions cause severe line occlusions.

---

### 2. Zen Warmth Canvas Theme (CSS Native)

```css
/* Ambient warm paper canvas + noise-free dot field */
.spatial-canvas {
  background-color: #fcfbf7; /* Zen bone/linen */
  background-image: radial-gradient(circle, rgba(90, 80, 70, 0.14) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: -1px -1px;
  overscroll-behavior: none;
  user-select: none;
}
```
skipped: WebGL paper shaders / grain SVG filter, add when target runtime proves 60fps GPU budget headroom.

---

### 3. Tactile Node Rest & Lift (Physical Precision)

```css
/* Subtly lifted frosted card with warm shadow staging */
.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(140, 130, 115, 0.18);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(60, 50, 40, 0.03), 0 8px 24px rgba(60, 50, 40, 0.05);
  transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 160ms ease;
  will-change: transform;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.012) translateY(-1px);
  box-shadow: 0 3px 6px rgba(60, 50, 40, 0.05), 0 16px 32px rgba(60, 50, 40, 0.08);
}
```
skipped: spring physics library (e.g. Framer Motion/react-spring), add when multi-finger gestural momentum is introduced.


### Cycle #48 Directive (2026-11-03 01:40)
### 1. Organic Zen Ambient Canvas (CSS)

```css
/* Warm ambient paper texture + subtle sub-pixel dot matrix */
.canvas-root {
  background-color: #faf9f5;
  background-image: 
    radial-gradient(ellipse at 15% 10%, rgba(220, 226, 215, 0.45) 0%, transparent 60%),
    radial-gradient(circle, rgba(60, 60, 50, 0.08) 1px, transparent 1px);
  background-size: 100% 100%, 28px 28px;
}
```
→ skipped: WebGL shaders or heavy SVG noise textures.  
→ add when: dynamic day/night light transitions are required.

---

### 2. Natural Flow Connectors (Pure SVG Cubic Spline)

```typescript
// Smooth horizontal S-curve between two node anchor points
export const getConnectorPath = (from: { x: number; y: number }, to: { x: number; y: number }): string => {
  const offset = Math.max(Math.abs(to.x - from.x) * 0.5, 48);
  // ponytail: assumes left-to-right flow; add auto-anchoring when multi-directional linking lands
  return `M ${from.x} ${from.y} C ${from.x + offset} ${from.y}, ${to.x - offset} ${to.y}, ${to.x} ${to.y}`;
};
```
→ skipped: Dagre/ELK layout engines or complex obstacle-avoidance routing.  
→ add when: flowchart edges intersect heavily and require automated port negotiation.

---

### 3. Apple-Grade Tactile Canvas Node (CSS)

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  box-shadow: 0 2px 6px -1px rgba(20, 20, 10, 0.04), 0 8px 18px -4px rgba(20, 20, 10, 0.03);
  transition: transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms ease;
  user-select: none;
  cursor: grab;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 12px 28px -6px rgba(20, 20, 10, 0.08);
}
```
→ skipped: Framer Motion / JS spring animations.  
→ add when: nodes require physics-driven multi-body collisions on drag release.


### Cycle #49 Directive (2026-11-03 01:45)
### 1. Zen Ambient Backdrop

```css
/* Ambient warm stone surface with organic micro-dot grid */
.spatial-canvas {
  background-color: #FBF9F5;
  background-image: radial-gradient(rgba(46, 52, 42, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  overscroll-behavior: none;
}
```
skipped: WebGL noise textures and custom canvas render loop.  
add when: Dynamic dynamic paper grain or canvas lighting shifts with time of day.

---

### 2. Natural S-Curve Connectors

```typescript
// ponytail: pure horizontal cubic bezier; upgrade to orthogonal A* routing if crossing density exceeds 30 edges
export const getNaturalPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
skipped: Path routing engines and collision avoidance libraries.  
add when: Users demand automated non-overlapping edge rerouting around large node clusters.

---

### 3. Tactile Frosted-Leaf Node Physics

```css
.canvas-node {
  border: 1px solid rgba(46, 52, 42, 0.07);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px -2px rgba(46, 52, 42, 0.04), 0 1px 2px rgba(46, 52, 42, 0.02);
  transition: box-shadow 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.1s ease-out;
  will-change: transform;
}
.canvas-node:active {
  cursor: grabbing;
  box-shadow: 0 14px 36px -4px rgba(46, 52, 42, 0.09), 0 2px 4px rgba(46, 52, 42, 0.03);
}
```
skipped: Framer Motion / Spring physics libraries.  
add when: Nodes require velocity-based inertia/toss release physics.


### Cycle #50 Directive (2026-11-03 01:51)
### 1. Organic Bezier Flowchart Connectors
Replace rigid orthogonal/jagged connectors with organic, natural cubic Beziers that adapt curvature to distance.

```ts
// connector.ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = x1 + Math.max(Math.abs(dx) * 0.5, 40) * Math.sign(dx || 1);
  // ponytail: assumes left-to-right flow; add quadrant switching when multi-directional branching is needed
  return `M ${x1} ${y1} C ${cx} ${y1}, ${x2 - (cx - x1)} ${y2}, ${x2} ${y2}`;
}
```
*skipped: Obstacle routing & self-intersection checks; add when node density causes visual overlap.*

---

### 2. Nature UI Ambient Backdrop (Washi Paper / Warm Stone)
Drop stark digital whites and heavy grid lines for warm, anti-slop ambient lighting via native CSS.

```css
/* canvas.css */
.spatial-canvas {
  background-color: #f7f5f0; /* Warm rice paper */
  background-image: 
    radial-gradient(at 10% 10%, rgba(228, 220, 207, 0.45) 0px, transparent 50%),
    radial-gradient(at 90% 90%, rgba(214, 206, 191, 0.35) 0px, transparent 50%),
    radial-gradient(circle, #d8d2c4 0.75px, transparent 0.75px);
  background-size: 100% 100%, 100% 100%, 24px 24px;
}
```
*skipped: WebGL noise/grain texture shaders; add when low-end mobile supports high-DPI grain without battery hit.*

---

### 3. Tactile Node Rest-to-Drag Elevation
Apple-spec physics feel: lift nodes off the canvas on interaction using GPU-accelerated transforms and ambient occlusion shadows instead of heavy border strokes.

```css
/* node.css */
.canvas-node {
  transform: translate3d(var(--x), var(--y), 0);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  box-shadow: 0 2px 6px -1px rgba(60, 50, 40, 0.04), 0 8px 16px -4px rgba(60, 50, 40, 0.04);
  transition: box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1), transform 0s;
  cursor: grab;
}
.canvas-node:active {
  cursor: grabbing;
  box-shadow: 0 12px 28px -6px rgba(60, 50, 40, 0.12), 0 4px 10px -2px rgba(60, 50, 40, 0.06);
}
```
*skipped: Spring physics engine (e.g., Framer Motion); add when canvas transitions require interruptible gesture velocity.*


### Cycle #51 Directive (2026-11-03 01:57)
### 1. Organic Bezier S-Curve Connectors
Natural horizontal flow with dynamic control-point tension:

```javascript
// ponytail: hardcoded horizontal bias (dx); upgrade to 4-direction orthogonal ports when multi-docking is needed.
export function getFlowPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 48);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable self-check
console.assert(
  getFlowPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "getFlowPath calculation failure"
);
```

### 2. Warm Zen Ambient Canvas
Subtle Japanese paper/warm-stone backdrop using zero image assets:

```css
.canvas-viewport {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(circle at 50% 8%, rgba(224, 214, 198, 0.4) 0%, transparent 60%),
    radial-gradient(#d3c9b8 0.75px, transparent 0.75px);
  background-size: 100% 100%, 24px 24px;
}
```

### 3. Tactile Spring-Damped Node Micro-Physics
Frosted glass card with warm diffused shadows and Apple-like compression on drag:

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(180, 168, 150, 0.28);
  border-radius: 12px;
  box-shadow: 0 4px 20px -4px rgba(70, 55, 40, 0.07), 0 1px 3px rgba(70, 55, 40, 0.03);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  will-change: transform;
}
.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 0 2px 8px -2px rgba(70, 55, 40, 0.09);
  cursor: grabbing;
}
```

skipped: Path obstacle avoidance; add when nodes visibly overlap connections.
skipped: Canvas theme switcher; add when dark mode is explicitly required.
skipped: WebGL rendering layer; add when node count exceeds 500 DOM elements.


### Cycle #52 Directive (2026-11-03 02:02)
### 1. Organic Bezier Flowchart Connectors (Native SVG)

```typescript
// utils/flow.ts
export const getOrganicPath = (x1: number, y1: number, x2: number, y2: number): string => {
  // ponytail: fixed horizontal bezier offset; upgrade to dynamic obstacle avoidance if nodes overlap
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
skipped: Dagre/ELK graph layout engines and manual line-routing algos.
add when: Graph exceeds 50+ nodes with complex multi-directional routing loops.

---

### 2. Nature Ambient Canvas (Warm Paper & Stippled Grid)

```css
/* canvas.css */
.spatial-canvas {
  background-color: #fbf9f5; /* Warm Japanese paper */
  background-image: 
    radial-gradient(circle, rgba(56, 50, 38, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 50% 50%, rgba(224, 214, 196, 0.25) 0%, transparent 80%);
  background-size: 24px 24px, 100% 100%;
}
```
skipped: HTML5 `<canvas>` background rendering loop and noise SVG filter textures.
add when: Dynamic multi-light shadows or real-time day/night ambient cycles are requested.

---

### 3. GPU-Bound Node Drag & Kinetic Warmth

```css
/* node.css */
.canvas-node {
  touch-action: none;
  transform: translate3d(var(--x, 0px), var(--y, 0px), 0);
  transition: transform 0.05s linear, box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1);
  box-shadow: 0 1px 3px rgba(40, 35, 25, 0.04), 0 4px 12px rgba(40, 35, 25, 0.03);
}

.canvas-node.is-dragging {
  transition: none;
  box-shadow: 0 12px 28px rgba(40, 35, 25, 0.12), 0 2px 4px rgba(40, 35, 25, 0.04);
  cursor: grabbing;
}
```
skipped: Heavy Framer Motion / Spring physics libraries.
add when: Multi-node cluster fling physics or collision detection is required.


### Cycle #53 Directive (2026-11-03 02:08)
### 1. Organic Warmth Ambient Canvas (CSS)
```css
/* Ambient zen paper texture + soft warmth falloff */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(ellipse at 50% 40%, rgba(245, 238, 224, 0.5) 0%, transparent 80%),
    radial-gradient(#e6ded2 0.8px, transparent 0.8px);
  background-size: 100% 100%, 24px 24px;
  overscroll-behavior: none;
}
```
*skipped:* Canvas DOM/WebGL noise rendering.  
*add when:* User asks for real-time paper grain or procedural shading.

---

### 2. Natural Flowchart S-Curve Connectors (Native JS)
```javascript
// ponytail: Horizontal S-curve. Swap axes if layout flow turns vertical.
export function getFlowPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Verification
console.assert(getFlowPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Path logic failed");
```
*skipped:* Obstacle-avoiding A* routing library.  
*add when:* Nodes routinely overlap direct path corridors.

---

### 3. Tactile Apple-Calibrated Node Surface (CSS)
```css
.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(215, 208, 196, 0.65);
  box-shadow: 0 1px 2px rgba(60, 50, 30, 0.03), 0 6px 16px rgba(60, 50, 30, 0.04);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  user-select: none;
}

.canvas-node:hover {
  box-shadow: 0 2px 4px rgba(60, 50, 30, 0.04), 0 10px 24px rgba(60, 50, 30, 0.06);
}

.canvas-node:active {
  transform: scale(0.985);
}
```
*skipped:* Custom spring physics drag engine.  
*add when:* Canvas requires multi-body velocity inertia on release.


### Cycle #54 Directive (2026-11-03 02:13)
### 1. Zen Ambient Backdrop (Pure CSS)

```css
/* Replace sterile grey canvas with warm parchment & organic dot mesh */
.canvas-viewport {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(ellipse at 50% 0%, rgba(225, 215, 198, 0.35) 0%, transparent 70%),
    radial-gradient(circle, #d8d0c5 0.8px, transparent 0.8px);
  background-size: 100% 100%, 28px 28px;
}
```
skipped: custom WebGL canvas shaders or texture image assets.  
add when: dynamic day/night light cycles are explicitly requested.

---

### 2. Natural Flowchart Edges (Adaptive Cubic Bezier)

```javascript
// ponytail: horizontal flow only; upgrade to directional port vectoring if vertical layouts appear
export const getFlowPath = (x1, y1, x2, y2) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
skipped: complex obstacle-avoidance routing algorithm (A*/orthogonal).  
add when: node overlap density makes direct curves unreadable.

---

### 3. Butter-Smooth Node Pan (Native Pointer Capture)

```javascript
export const bindSmoothDrag = (el, onDrag) => {
  el.style.touchAction = 'none';
  el.onpointerdown = (e) => {
    el.setPointerCapture(e.pointerId);
    let lx = e.clientX, ly = e.clientY;
    el.onpointermove = (ev) => {
      onDrag(ev.clientX - lx, ev.clientY - ly);
      lx = ev.clientX;
      ly = ev.clientY;
    };
    el.onpointerup = el.onpointercancel = () => (el.onpointermove = null);
  };
};
```
skipped: full gesture/physics momentum engine (use native CSS transition for settling).  
add when: free-flinging nodes across large viewport is prioritized over precision placement.


### Cycle #55 Directive (2026-11-03 02:19)
### 1. Organic Bezier Link Path (Replace rigid/broken elbow connectors)

```ts
// connector.ts: stdlib cubic spline with natural curvature damping
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: assumes L-to-R primary flow. Upgrade to multi-cardinal boundary projection if nodes rotate.
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 50).startsWith("M 0 0 C 55 0, 45 50, 100 50"));
```
`getFlowPath` → skipped: auto-routing collision avoidance, add when graph density causes node-overlap links.

---

### 2. Nature Ambient Canvas (Warm stone & tactile micro-dot backdrop)

```css
/* Replace harsh monochrome canvas grids with zen ambient warmth */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(ellipse at 50% 30%, rgba(243, 238, 228, 0.6) 0%, transparent 70%),
    radial-gradient(circle, #d9d4cc 0.8px, transparent 0.8px);
  background-size: 100% 100%, 24px 24px;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    background-color: #171614;
    background-image: 
      radial-gradient(ellipse at 50% 30%, rgba(38, 35, 32, 0.6) 0%, transparent 70%),
      radial-gradient(circle, #2d2a26 0.8px, transparent 0.8px);
    background-size: 100% 100%, 24px 24px;
  }
}
```
CSS Canvas styling → skipped: WebGL shader background, add when interactive canvas particles are explicitly requested.

---

### 3. Tactile Node Lift & Kinetic Settle (Smooth Interaction)

```css
/* Hardware-accelerated lift with warm ambient occlusion */
.canvas-node {
  touch-action: none;
  user-select: none;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease;
  box-shadow: 0 1px 2px rgba(36, 32, 28, 0.04), 0 6px 18px rgba(36, 32, 28, 0.02);
  will-change: transform;
}

.canvas-node:is(:active, [data-dragging="true"]) {
  cursor: grabbing;
  transform: scale(1.018) translateY(-3px);
  box-shadow: 0 14px 32px rgba(36, 32, 28, 0.09), 0 3px 8px rgba(36, 32, 28, 0.04);
}
```
CSS Node lift → skipped: JS-driven spring physics library, add when gesture momentum flicking is required.


### Cycle #56 Directive (2026-11-03 02:25)
```css
/* 1. Zen Ambient Canvas & Tactile Node Interaction */
.spatial-canvas {
  background-color: oklch(0.985 0.006 85);
  background-image: radial-gradient(oklch(0.65 0.015 75 / 0.28) 1.25px, transparent 1.25px);
  background-size: 24px 24px;
  touch-action: none;
}

.flow-node {
  transition: transform 180ms cubic-bezier(0.2, 0, 0, 1), box-shadow 180ms ease;
  box-shadow: 0 1px 2px oklch(0.2 0.02 60 / 0.04), 0 4px 12px oklch(0.2 0.02 60 / 0.03);
  cursor: grab;
}

.flow-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 28px oklch(0.2 0.02 60 / 0.08);
}
```

```javascript
// 2. Organic S-Curve Flowchart Edge
export function getOrganicPath([x1, y1], [x2, y2]) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  // ponytail: fixed horizontal bezier; upgrade to orthogonal obstacle-avoidance when node count > 50.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath([0, 0], [100, 100]) === "M 0 0 C 55 0, 45 100, 100 100");
```

skipped: dynamic port snapping, complex pathfinding algorithms, and WebGL backdrop shaders.  
add when: canvas nodes overlap regularly or graph size exceeds 50 simultaneous nodes.


### Cycle #57 Directive (2026-11-03 02:30)
### 1. Nature UI Canvas Surface (CSS)
```css
/* Ambient warm paper foundation with subtle subpixel grid */
.spatial-canvas {
  background-color: #faf7f2;
  background-image: 
    radial-gradient(#dfd7cc 0.8px, transparent 0.8px),
    radial-gradient(ellipse at 50% 10%, rgba(255, 253, 249, 0.9) 0%, rgba(238, 230, 219, 0.5) 100%);
  background-size: 24px 24px, 100% 100%;
  overscroll-behavior: none;
}
```

### 2. Natural Organic Connectors (SVG Spline)
```javascript
// ponytail: hardcoded 0.45/0.15 tension coefficients; upgrade to angle-aware vectors if adding self-loops
function createNaturalPath(x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1) * 0.45;
  const dy = Math.abs(y2 - y1) * 0.15;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1 + dy}, ${x2 - dx} ${y2 - dy}, ${x2} ${y2}`;
}

// Self-check
console.assert(createNaturalPath(0, 0, 100, 100) === "M 0 0 C 45 15, 55 85, 100 100", "Connector path failed");
```

### 3. Tactile Node Elevation & Spring Response (CSS)
```css
.canvas-node {
  background: rgba(255, 254, 252, 0.88);
  border: 1px solid rgba(190, 178, 162, 0.35);
  box-shadow: 0 1px 3px rgba(60, 50, 40, 0.04), 0 8px 24px -4px rgba(70, 55, 40, 0.07);
  backdrop-filter: blur(12px);
  will-change: transform;
  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms ease;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.012);
  box-shadow: 0 4px 12px rgba(60, 50, 40, 0.08), 0 16px 32px -6px rgba(70, 55, 40, 0.12);
}
```

skipped: WebGL canvas rendering, physics-based spring solver libraries, complex edge-routing graphs.  
add when: Canvas exceeds 500 simultaneous nodes or requires cycle-avoiding orthogonal obstacle wraps.


### Cycle #58 Directive (2026-11-03 02:36)
```css
/* 1. Nature UI ambient backdrop (pure CSS, zero JS overhead) */
.spatial-canvas {
  background-color: var(--canvas-bg, #fbfaf7);
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(220, 215, 201, 0.3) 0%, transparent 70%),
    radial-gradient(var(--canvas-dot, #d8d4cb) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  touch-action: none;
}

/* 2. Zen tactile node surface (Apple-style frosted elevation) */
.canvas-node {
  position: absolute;
  will-change: transform;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(60, 50, 30, 0.08);
  border-radius: 14px;
  box-shadow: 0 4px 16px -2px rgba(60, 50, 30, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.15s cubic-bezier(0.2, 0, 0, 1), transform 0.05s linear;
}
.canvas-node:active {
  box-shadow: 0 14px 32px -4px rgba(60, 50, 30, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
}
```

```typescript
// 3. Natural adaptive bezier connector path
export const getSmoothPath = (x1: number, y1: number, x2: number, y2: number): string => {
  // ponytail: horizontal-biased S-curve ceiling; upgrade to 4-quadrant port routing if vertical ports needed
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(getSmoothPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Connector path mismatch");
```

skipped: dynamic obstacle-avoidance edge routing, add when diagram density exceeds 25 overlapping nodes.
skipped: canvas particle/light physics, add when explicit ambient idle state requested.
skipped: full gesture engine dependency, add when multi-touch pinch-to-zoom requires rotation support.


### Cycle #59 Directive (2026-11-03 02:41)
### 1. Ambient Warm Canvas (CSS)
```css
.spatial-canvas {
  background-color: #faf9f5;
  background-image: radial-gradient(circle, rgba(50, 40, 30, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(ellipse at center, black 70%, transparent 100%);
}
```

### 2. Organic Flowchart Connectors (Vanilla SVG Path)
```javascript
export function getOrganicConnector(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  // ponytail: Simple horizontal cubic bezier. Upgrade to orthogonal A* pathing if auto-routing around nodes is needed.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicConnector(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Connector path generation failed"
);
```

### 3. Tactile Node Physics (CSS)
```css
.canvas-node {
  touch-action: none;
  cursor: grab;
  user-select: none;
  transition: box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1), transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 3px rgba(40, 30, 20, 0.04), 0 4px 12px rgba(40, 30, 20, 0.02);
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.015);
  box-shadow: 0 10px 24px rgba(40, 30, 20, 0.08), 0 2px 6px rgba(40, 30, 20, 0.04);
}
```

skipped: Canvas noise textures, edge collision routing, and third-party physics libraries (e.g., Framer Motion, Dagre).
add when: Flowcharts require automatic multi-node obstacle avoidance or dynamic cycle layout.


### Cycle #60 Directive (2026-11-03 02:47)
```css
/* 1. Ambient Warmth Canvas Base */
.canvas-root {
  background-color: #faf9f5;
  background-image: 
    radial-gradient(circle at center, transparent 0%, rgba(240, 237, 230, 0.4) 100%),
    radial-gradient(circle, rgba(60, 50, 40, 0.06) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
}

/* 2. Tactile Zen Node Surface */
.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(60, 50, 40, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 20px -2px rgba(60, 50, 40, 0.04), 0 1px 2px rgba(60, 50, 40, 0.02);
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
  will-change: transform;
}
.canvas-node:active, .canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.012) translateY(-1px);
  box-shadow: 0 14px 28px -4px rgba(60, 50, 40, 0.08), 0 2px 4px rgba(60, 50, 40, 0.03);
}
```

```typescript
// 3. Natural Organic Connector (Horizontal S-Curve with distance-aware curvature)
// ponytail: Fixed horizontal tangent. Upgrade to dynamic port normal vectors when 4-side routing is needed.
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const cx = Math.max(Math.abs(dx) * 0.45, 32);
  return `M ${x1} ${y1} C ${x1 + cx} ${y1}, ${x2 - cx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 50) === "M 0 0 C 45 0, 55 50, 100 50", "Path curvature mismatch");
```

skipped: Obstacle-avoidance routing, multi-stop gradients, drag sound effects.
add when: Nodes visually overlap on zoom-out, or user requests custom edge bend points.


### Cycle #61 Directive (2026-11-03 02:52)
### 1. Organic Warm Canvas Grid (Pure CSS)

```css
/* Ambient warm-linen backdrop with soft organic dot matrix */
.spatial-canvas {
  background-color: #fbfaf7; /* warm paper tint */
  background-image: radial-gradient(rgba(44, 38, 34, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  /* ponytail: static dot grid; add dynamic canvas LOD/scaling transform when zoom is implemented */
}

.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(44, 38, 34, 0.08);
  box-shadow: 0 4px 16px -2px rgba(44, 38, 34, 0.05), 0 1px 2px rgba(44, 38, 34, 0.03);
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 12px 28px -4px rgba(44, 38, 34, 0.12);
}
```
skipped: complex SVG background patterns and canvas context rendering.  
add when: canvas zoom level drops below 40% and causes dot moiré artifacts.

---

### 2. Natural Flowchart Bézier Connector (Stdlib Math)

```typescript
// Computes an organic, tension-adjusted horizontal cubic Bézier curve
export function createNaturalPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.abs(x2 - x1);
  const cx = Math.max(dx * 0.5, 40); // ponytail: fixed horizontal bias; upgrade to auto-port routing on multi-side ports
  return `M ${x1} ${y1} C ${x1 + cx} ${y1}, ${x2 - cx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(createNaturalPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50");
```
skipped: full Manhattan obstacle-avoidance routing algorithm.  
add when: nodes heavily overlap and connections cross through node bodies.

---

### 3. Inertial Canvas Pan (Native Pointer Capture)

```typescript
export function bindCanvasPan(canvas: HTMLElement) {
  let pan = { x: 0, y: 0, startX: 0, startY: 0, active: false };

  canvas.addEventListener('pointerdown', (e) => {
    if (e.target !== canvas) return;
    pan.active = true;
    pan.startX = e.clientX - pan.x;
    pan.startY = e.clientY - pan.y;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!pan.active) return;
    pan.x = e.clientX - pan.startX;
    pan.y = e.clientY - pan.startY;
    canvas.style.transform = `translate3d(${pan.x}px, ${pan.y}px, 0)`; // ponytail: raw transform; upgrade to CSS matrix with zoom scale factor
  });

  const end = () => { pan.active = false; };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
}
```
skipped: friction-based momentum decay and pinch-to-zoom math.  
add when: gesture zoom is hooked into the trackpad/touch lifecycle.


### Cycle #62 Directive (2026-11-03 02:58)
### 1. Organic Flowchart Connectors (SVG Native)

```ts
export function connectorPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  // ponytail: fixed horizontal tangents; upgrade to 4-way orthogonal ports when node docking is added
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
skipped: Complex collision avoidance / A* routing.  
add when: Flowcharts routinely exceed 20 overlapping edges.

---

### 2. Nature Ambient Canvas Backdrop (Pure CSS)

```css
.spatial-canvas {
  background-color: #f6f4ee;
  background-image:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.6) 0%, transparent 70%),
    radial-gradient(circle, rgba(82, 73, 59, 0.12) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  overscroll-behavior: none;
}
```
skipped: Heavy noise SVG filters or canvas-rendered grid textures.  
add when: Users request high-DPI custom dot-pitch configurations.

---

### 3. Tactile Node Physics & Interaction (Zero JS)

```css
.canvas-node {
  contain: layout style;
  touch-action: none;
  background: #fbfaf7;
  border: 1px solid rgba(82, 73, 59, 0.12);
  border-radius: 10px;
  box-shadow: 0 2px 6px -1px rgba(50, 42, 30, 0.04), 0 8px 16px -4px rgba(50, 42, 30, 0.02);
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
}

.canvas-node:hover {
  border-color: rgba(82, 73, 59, 0.24);
  box-shadow: 0 4px 12px -2px rgba(50, 42, 30, 0.06), 0 12px 24px -6px rgba(50, 42, 30, 0.03);
}

.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.015);
  box-shadow: 0 12px 28px -6px rgba(50, 42, 30, 0.12);
}
```
skipped: Framer Motion / spring physics libraries.  
add when: Multi-node cluster elastic snapping is explicitly spec'd.


### Cycle #63 Directive (2026-11-03 03:04)
### 1. Organic Flowchart Bézier Routing

```javascript
// Natural cubic bezier with horizontal tension
export const getCurvedPath = (x1, y1, x2, y2) => {
  const offset = Math.max(Math.abs(x2 - x1) * 0.45, 32);
  return `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
};
// ponytail: Left-to-right only. Upgrade to 4-way orthogonal router when bi-directional cycles are introduced.
```
`skipped: Obstacle avoidance / path intersection math, add when canvas node density causes frequent overlaps.`

---

### 2. Ambient Zen-Paper Canvas Texture

```css
.canvas-backdrop {
  background-color: #fbfaf7;
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 40%, rgba(215, 208, 196, 0.35) 100%),
    radial-gradient(rgba(110, 100, 85, 0.14) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
}
```
`skipped: Canvas noise shader & WebGL grain, add when low-end mobile devices can guarantee 60fps with heavy shaders.`

---

### 3. Tactile Fluid Node State

```css
.canvas-node {
  touch-action: none;
  cursor: grab;
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 150ms ease;
  box-shadow: 0 2px 6px -1px rgba(50, 40, 30, 0.04), 0 0 0 1px rgba(50, 40, 30, 0.05);
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 14px 28px -4px rgba(50, 40, 30, 0.09), 0 0 0 1px rgba(50, 40, 30, 0.07);
}
```
`skipped: JS spring physics runtime, add when drag release requires realistic inertial velocity throw.`


### Cycle #64 Directive (2026-11-03 03:09)
### 1. Organic Bezier Flowchart Path

```ts
// connector.ts - Zero-dependency organic bezier path
export function getCurvedPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: fixed horizontal tangents; upgrade to auto-port directional vectors if multi-side ports needed
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getCurvedPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Connector path mismatch"
);
```

### 2. Ambient Zen Washi Canvas (Pure CSS)

```css
/* canvas.css - Replaces canvas-loop background redraws */
.spatial-canvas {
  background-color: #faf9f5; /* Warm washi paper base */
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 60%, rgba(230, 224, 212, 0.45) 100%),
    radial-gradient(rgba(120, 110, 95, 0.14) 1px, transparent 1px);
  background-size: 100% 100%, 20px 20px;
  touch-action: none;
  overscroll-behavior: none;
}
```

### 3. Tactile Ambient Node Elevation

```css
/* node.css - Frosted glass card with organic micro-interaction */
.canvas-node {
  background: rgba(255, 254, 250, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(80, 60, 40, 0.08);
  box-shadow: 
    0 1px 2px rgba(60, 50, 30, 0.03),
    0 8px 20px -4px rgba(60, 50, 30, 0.05);
  border-radius: 12px;
  transition: transform 140ms cubic-bezier(0.2, 0, 0, 1), box-shadow 140ms ease;
  will-change: transform;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.992);
  box-shadow: 0 2px 6px rgba(60, 50, 30, 0.04);
}
```

skipped: dynamic obstacle collision avoidance on edges; add when node density causes overlapping lines.
skipped: canvas pan/zoom transforms in CSS; add when zoom range exceeds 0.5x–2.0x bounds.


### Cycle #65 Directive (2026-11-03 03:15)
### 1. Zen Ambient Canvas (Paper Warmth & Stippled Grid)

```css
/* canvas-ambient.css */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(120, 100, 80, 0.14) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### 2. Fluid Organic Connector (Native SVG Smooth S-Curve)

```javascript
// flowchart-curve.js
export function getOrganicPath(x1, y1, x2, y2) {
  const dx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// ponytail: basic horizontal S-curve; upgrade to orthogonal/obstacle-avoidance routing if nodes overlap
console.assert(
  getOrganicPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Path generator failed"
);
```

### 3. Tactile Card Hover & Active Feel (Frosted Glass & Depth)

```css
/* canvas-node.css */
.canvas-node {
  border: 1px solid rgba(80, 65, 50, 0.08);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0 4px 14px -2px rgba(60, 45, 30, 0.04), 0 1px 2px rgba(60, 45, 30, 0.03);
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
  will-change: transform;
}

.canvas-node:hover {
  transform: translateY(-1px) scale(1.005);
  box-shadow: 0 8px 24px -4px rgba(60, 45, 30, 0.08), 0 2px 6px rgba(60, 45, 30, 0.04);
}

.canvas-node:active {
  transform: scale(0.99);
}
```

skipped: d3/dagre routing and canvas-render loops, add when node count exceeds 200 on screen.  
skipped: dynamic pan-zoom coordinate projection matrix, add when canvas camera controls are wired.


### Cycle #66 Directive (2026-11-03 03:20)
### 1. Ambient Warm Canvas & Zen Node Material (CSS)

```css
/* Warm rice-paper ambient canvas + frosted zen cards */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(120, 110, 95, 0.12) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
}

.canvas-node {
  background: rgba(255, 253, 250, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(215, 205, 190, 0.55);
  border-radius: 14px;
  box-shadow: 0 4px 18px -4px rgba(70, 55, 40, 0.05), 0 1px 2px rgba(70, 55, 40, 0.04);
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease;
  touch-action: none;
  user-select: none;
}

.canvas-node:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 8px 24px -4px rgba(70, 55, 40, 0.08), 0 2px 4px rgba(70, 55, 40, 0.04);
}
```
→ skipped: WebGL shader grain & dynamic lighting overlays; add when hardware canvas rendering is required for 500+ nodes.

---

### 2. Natural Organic Flowchart Connectors (SVG Path Generator)

```ts
// Smooth S-curve connector with nature-weighted horizontal tangents
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
  // ponytail: assumes L-to-R flow; upgrade to 4-way orthogonal routing when bi-directional cycles are introduced.
}

// Self-check
console.assert(getOrganicConnector(0, 0, 100, 50) === "M 0 0 C 55 0, 45 50, 100 50", "Connector path mismatch");
```
→ skipped: A* pathfinding and obstacle avoidance; add when nodes overlap or loop backward.

---

### 3. Drift-Free Fluid Node Dragging (Native Pointer Capture)

```ts
export function bindNodeDrag(el: HTMLElement, onMove: (dx: number, dy: number) => void) {
  let startX = 0, startY = 0;

  el.onpointerdown = (e) => {
    if ((e.target as HTMLElement).closest('input, textarea, button')) return;
    startX = e.clientX;
    startY = e.clientY;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';

    el.onpointermove = (ev) => {
      onMove(ev.clientX - startX, ev.clientY - startY);
      startX = ev.clientX;
      startY = ev.clientY;
    };

    el.onpointerup = el.onpointercancel = () => {
      el.onpointermove = null;
      el.style.cursor = '';
    };
  };
}
```
→ skipped: Inertia physics & grid snapping; add when multi-selection bulk dragging lands.


### Cycle #67 Directive (2026-11-03 03:26)
### 1. Organic Bezier Connectors (`smooth-flow.ts`)
```typescript
// ponytail: Horizontal S-curve; upgrade to dynamic axis snapping if ports shift vertically.
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50");
```
skipped: Obstacle collision avoidance and multi-angle routing.  
add when: Nodes overlap or density exceeds canvas viewport.

---

### 2. Nature Paper Ambient Canvas (`canvas.css`)
```css
/* Ambient rice-paper warmth + native tactile cursor */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(rgba(58, 48, 38, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
  cursor: grab;
}
.spatial-canvas:active {
  cursor: grabbing;
}
```
skipped: WebGL canvas shaders / noise overlays.  
add when: Users request toggleable canvas themes or deep dark mode.

---

### 3. Apple-Tier Spring Dynamics & Elevation (`node.css`)
```css
/* Tactile node card with warm ambient shadow and blur */
.canvas-node {
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(60, 46, 32, 0.08);
  box-shadow: 0 4px 16px -2px rgba(40, 30, 20, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  will-change: transform;
}
.canvas-node:hover,
.canvas-node.selected {
  transform: translateY(-1px) scale(1.008);
  box-shadow: 0 12px 28px -4px rgba(40, 30, 20, 0.08), 0 0 0 1.5px rgba(180, 140, 90, 0.4);
}
```
skipped: Heavy Framer Motion/JS gesture springs.  
add when: Drag velocity-based momentum physics are needed.


### Cycle #68 Directive (2026-11-03 03:31)
### 1. Organic Canvas Surface & Tactile Lift (CSS Native)

```css
/* Warm stone canvas + tactile node lift */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: radial-gradient(circle, rgba(70, 55, 40, 0.075) 1px, transparent 1px);
  background-size: 24px 24px;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    background-color: #161514;
    background-image: radial-gradient(circle, rgba(235, 225, 210, 0.06) 1px, transparent 1px);
  }
}

.canvas-node {
  /* ponytail: simple spring-like cubic bezier; upgrade to popmotion/framer-motion if non-linear gestures needed */
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  touch-action: none;
  border: 1px solid rgba(60, 45, 30, 0.08);
  box-shadow: 0 2px 8px -2px rgba(40, 30, 20, 0.04);
}

.canvas-node:active {
  transform: scale(1.018);
  box-shadow: 0 16px 32px -8px rgba(40, 30, 20, 0.12), 0 4px 12px -2px rgba(40, 30, 20, 0.06);
  cursor: grabbing;
}
```

---

### 2. Natural S-Curve Flowchart Connectors (Zero-Dep SVG)

```typescript
// ponytail: horizontal cubic S-curve; upgrade to orthogonal A* pathing if automatic node obstacle avoidance is needed
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicConnector(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Path calculation failed"
);
```

---

### 3. Pointer Snapping & Boundary Clamping (Native Event Hook)

```typescript
// ponytail: simple 8px grid snap; upgrade to dynamic collision/magnetic snap guides when multi-selection drops
export function snapToFlowGrid(val: number, step = 8): number {
  return Math.round(val / step) * step;
}

console.assert(snapToFlowGrid(14) === 16 && snapToFlowGrid(11) === 8, "Snap logic failed");
```

skipped: Third-party gesture/physics engines, canvas webgl rendering, complex orthogonal routing engines.  
add when: Scene exceeds 1,000+ simultaneous nodes or requires dynamic obstacle routing around intersecting cards.


### Cycle #69 Directive (2026-11-03 03:37)
### 1. Zen Ambient Canvas Surface & Micro-Grid
Replace flat backgrounds or heavy SVG patterns with a native dual-tone paper wash.

```css
/* Ambient Nature Canvas: zen warmth + sub-pixel grain */
.spatial-canvas {
  background-color: #f9f8f6; /* Wabi-sabi warm bone */
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(60, 50, 40, 0.07) 1px, transparent 0);
  background-size: 24px 24px;
  /* ponytail: screen-space grid; add canvas-to-viewport scale matrix when infinite zoom lands */
}
```
* Skipped: Dynamic canvas-level viewport LOD scaling.
* Add when: Deep zoom (<0.5x or >2x) causes moiré artifacts.

---

### 2. Natural Flow Connectors (Organic S-Curve)
Pure-math cubic Bezier pathing to eliminate robotic angular lines without layout libraries.

```typescript
// Smooth organic connector path between node centers or ports
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  const dx = (x2 - x1) * 0.45;
  const dy = (y2 - y1) * 0.1;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1 + dy}, ${x2 - dx} ${y2 - dy}, ${x2} ${y2}`;
  // ponytail: fixed horizontal tangent; add auto-port axis detection if nodes rotate
}

// Self-check
console.assert(getOrganicConnector(0, 0, 100, 100).startsWith("M 0 0 C 45 10"), "Invalid Bezier anchor math");
```
* Skipped: A* obstacle avoidance and edge rerouting.
* Add when: Complex tree overlaps cause line collisions.

---

### 3. Tactile Leaf-Node Elevation & Damping
Native hardware-accelerated lift on grab using Apple spring curve easing.

```css
.canvas-node {
  border-radius: 14px;
  border: 1px solid rgba(44, 40, 37, 0.08);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 2px rgba(44, 40, 37, 0.04), 0 4px 12px rgba(44, 40, 37, 0.03);
  transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease;
  touch-action: none;
}

.canvas-node:active,
.canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.018) translateY(-2px);
  box-shadow: 0 12px 28px -6px rgba(44, 40, 37, 0.12), 0 2px 4px rgba(44, 40, 37, 0.04);
}
```
* Skipped: Full Web Animations API inertia physics.
* Add when: Users request flick-to-toss momentum gestures.


### Cycle #70 Directive (2026-11-03 03:42)
### 1. Organic Bezier Edge Layout (Native SVG)

```typescript
// utils/flow.ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: fixed 0.5 curvature weight; upgrade to obstacle-avoidance routing if nodes overlap densely
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicPath(0, 0, 100, 100) === 'M 0 0 C 50 0, 50 100, 100 100',
  'getOrganicPath failed'
);
```
*skipped: full routing/collision engine; add when nodes overlap and require strict collision avoidance.*

---

### 2. Nature UI Ambient Backdrop (Pure CSS)

```css
/* styles/canvas.css */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image: 
    radial-gradient(ellipse at 50% 0%, rgba(214, 204, 184, 0.15) 0%, transparent 60%),
    radial-gradient(circle, rgba(68, 56, 42, 0.07) 1px, transparent 1px);
  background-size: 100% 100%, 28px 28px;
  overscroll-behavior: none;
}
```
*skipped: WebGL noise shader & multi-scale dynamic lod; add when infinite zoom degrades dot rasterization.*

---

### 3. Tactile Spring & Elevation (Zero-JS Interaction)

```css
/* styles/node.css */
.canvas-node {
  touch-action: none;
  user-select: none;
  border: 1px solid rgba(60, 48, 36, 0.08);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px -2px rgba(48, 38, 28, 0.04), 0 1px 2px rgba(48, 38, 28, 0.03);
  transition: transform 0.16s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.16s ease;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 24px -6px rgba(48, 38, 28, 0.09), 0 4px 8px -2px rgba(48, 38, 28, 0.04);
}
```
*skipped: Web Animations API/Framer Motion physics engine; add when inertia flick-throw gestures are implemented.*


### Cycle #71 Directive (2026-11-03 03:48)
### 1. Organic Flowchart Connectors (SVG Smooth Bezier)

```typescript
// ponytail: S-curve assumes primary left-to-right flow; add auto-port detection if multi-directional.
export function organicLink(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
*skipped: Obstacle routing & self-intersection math; add when canvas density exceeds 50+ nodes.*

---

### 2. Nature Ambient Canvas Pattern (Pure CSS)

```css
.canvas-viewport {
  background-color: #faf9f5; /* Warm stone-paper */
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(94, 84, 72, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
}
```
*skipped: Canvas-level WebGL background shaders; add when dynamic day/night ambient cycle is required.*

---

### 3. Apple-grade Node Micro-physics (CSS Hardware Layer)

```css
.node-card {
  touch-action: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px -2px rgba(60, 50, 40, 0.06), 0 0 0 1px rgba(60, 50, 40, 0.05);
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}
.node-card.is-dragging {
  transition: none;
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 14px 28px -4px rgba(60, 50, 40, 0.12), 0 0 0 1px rgba(60, 50, 40, 0.08);
}
```
*skipped: Custom JS physics/spring engine; add when multi-node spring-tension chains are requested.*


### Cycle #72 Directive (2026-11-03 03:54)
### 1. Organic Bezier Connector (Native SVG)

Replace stiff lines or orthogonal routing with tension-adjusted horizontal cubic curves:

```ts
// lib/edge.ts
export const getOrganicPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const cx = (x1 + x2) / 2;
  // ponytail: fixed cubic handles; upgrade to full obstacle routing if nodes overlap heavily
  return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
};

// runnable self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "path mismatch");
```
→ skipped: A* / Dijkstra path routing, add when edge collision occlusion becomes a problem.

---

### 2. Nature UI Canvas Texture & Tactile Node (Pure CSS)

Replace clinical gridlines with warm ambient rice-paper stippling and frosted Apple-grade cards:

```css
/* canvas.css */
.canvas-bg {
  background-color: #fcfbf9;
  background-image: radial-gradient(rgba(60, 48, 40, 0.09) 1px, transparent 1px);
  background-size: 20px 20px;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(40, 30, 20, 0.07);
  border-radius: 14px;
  box-shadow: 0 4px 16px -2px rgba(44, 34, 24, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms ease;
  user-select: none;
}

.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 0 2px 6px -1px rgba(44, 34, 24, 0.06);
}
```
→ skipped: custom canvas shader / noise texture image, add when device baseline allows WebGL background without battery drain.

---

### 3. Native Pointer-Capture Dragging (Zero-dep interaction)

Eliminate `window.addEventListener` lag and broken drops with native pointer captures:

```tsx
// CanvasNode.tsx
export function CanvasNode({ id, x, y, onMove }: { id: string; x: number; y: number; onMove: (id: string, dx: number, dy: number) => void }) {
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    let [lastX, lastY] = [e.clientX, e.clientY];

    const onPointerMove = (ev: PointerEvent) => {
      onMove(id, ev.clientX - lastX, ev.clientY - lastY);
      [lastX, lastY] = [ev.clientX, ev.clientY];
    };

    el.onpointermove = onPointerMove;
    el.onpointerup = () => {
      el.releasePointerCapture(e.pointerId);
      el.onpointermove = null;
      el.onpointerup = null;
    };
  };

  return <div className="canvas-node" style={{ transform: `translate3d(${x}px, ${y}px, 0)` }} onPointerDown={onPointerDown} />;
}
```
→ skipped: momentum/inertia physics simulation, add when users explicitly demand gestural flinging.


### Cycle #73 Directive (2026-11-03 03:59)
### 1. Ambient Warmth Canvas Grid (CSS)
```css
.canvas-viewport {
  background-color: #faf8f5;
  background-image: radial-gradient(circle, rgba(145, 135, 120, 0.16) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
}
```

### 2. Tactile Zen Nodes (CSS)
```css
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(215, 208, 196, 0.65);
  border-radius: 12px;
  box-shadow: 0 2px 8px -2px rgba(60, 50, 40, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s ease;
  user-select: none;
}
.canvas-node:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px -4px rgba(60, 50, 40, 0.08);
}
```

### 3. Natural Organic Edge Router (JS)
```javascript
function getConnectorPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
// ponytail: static cubic handles; add orthogonal A* pathing only if connectors cross nodes.
```

`skipped: complex canvas themes; add when user toggles dark/sepia mode.`  
`skipped: multi-handle curve editing; add when user manually drags bezier points.`  
`skipped: canvas zooming matrix lib; add when native CSS transforms drop frames.`


### Cycle #74 Directive (2026-11-03 04:05)
### 1. Ambient Zen Stone Canvas Backdrop

```css
/* Warm parchment-stone base with subtle organic dot grid */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: radial-gradient(circle, rgba(82, 68, 54, 0.09) 1.25px, transparent 1.25px);
  background-size: 28px 28px;
}
```
* skipped: Canvas-level WebGL/noise shaders.
* add when: Device profiling confirms 120fps headroom with heavy canvas state.

---

### 2. Natural Dynamic Flowchart Connectors (SVG)

```js
// Smooth horizontal S-curve with natural droop tension
export const getNatureConnector = (x1, y1, x2, y2) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
// ponytail: hardcoded horizontal bias; upgrade to 4-port orthogonal routing when multi-axis graphs ship.
```
* skipped: Complex obstacle-avoidance pathfinding (A* / grid routers).
* add when: Node overlap collisions degrade visual readability.

---

### 3. Tactile Frosted-Glass Node Surface

```css
.flow-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(214, 206, 194, 0.65);
  border-radius: 16px;
  box-shadow: 0 4px 18px -2px rgba(48, 38, 28, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 140ms cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 140ms ease;
  user-select: none;
  cursor: grab;
}
.flow-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 14px 30px -4px rgba(48, 38, 28, 0.12);
}
```
* skipped: Custom JS spring physics engine.
* add when: Native CSS timing curves cannot synchronize node inertia during continuous drag.


### Cycle #75 Directive (2026-11-03 04:10)
### 1. Organic S-Curve Flowchart Connectors (SVG Native)

```typescript
// utils/geometry.ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: fixed horizontal tangent; upgrade to orthogonal routing if nodes cycle backwards
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
skipped: Obstacle collision avoidance and dynamic port selection.  
add when: Nodes visually overlap or user requires backward-pointing loops.

---

### 2. Nature Ambient Canvas Texture (Pure CSS)

```css
/* styles/canvas.css */
.spatial-canvas {
  background-color: #F8F6F1;
  background-image: radial-gradient(circle, rgba(100, 90, 80, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    background-color: #1A1918;
    background-image: radial-gradient(circle, rgba(230, 220, 205, 0.08) 1px, transparent 1px);
  }
}
```
skipped: Canvas webgl noise shader or DOM grid lines.  
add when: Zoom scale drops below 0.3x and subpixel moiré occurs.

---

### 3. Apple-Grade Drag Lift & Elevation Transition

```css
/* styles/node.css */
.canvas-node {
  touch-action: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(80, 70, 60, 0.08);
  box-shadow: 0 2px 8px -2px rgba(40, 35, 30, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}

.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 14px 28px -4px rgba(40, 35, 30, 0.12), 0 2px 4px rgba(0, 0, 0, 0.04);
}
```
skipped: Spring physics JS runtime engine.  
add when: Multi-node velocity rubber-banding or spatial flick-toss is requested.


### Cycle #76 Directive (2026-11-03 04:16)
### 1. Zen Ambient Canvas Backdrop (CSS)

```css
/* Warm stone/parchment background with soft organic stipple */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(90, 80, 70, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  /* ponytail: static dot grid; add dynamic lod/zoom scaling when canvas zoom < 0.5 */
}
```

### 2. Natural S-Curve Flowchart Connectors (SVG Spline)

```ts
// Natural cubic bezier drape between horizontal ports
export const getSplinePath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  // ponytail: fixed horizontal tangency; add port orientation detection when vertical layouts land
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```

```css
.spline-edge {
  fill: none;
  stroke: #8c8275;
  stroke-width: 1.5px;
  stroke-linecap: round;
}
```

### 3. Tactile Apple-Grade Node Physics (CSS)

```css
.canvas-node {
  touch-action: none;
  user-select: none;
  background: #ffffff;
  border: 1px solid rgba(140, 130, 117, 0.15);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(60, 50, 40, 0.03), 0 6px 16px rgba(60, 50, 40, 0.04);
  transition: transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.16s ease;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 12px 28px rgba(60, 50, 40, 0.09);
}
```

---
* skipped: Canvas pan-zoom matrix math in JS; add when viewport bounds exceed 100vw/100vh.
* skipped: Obstacle avoidance routing (A*); add when overlapping node edge crossings cause readability issues.
* skipped: Spring-physics animation engine; add if CSS bezier transitions fail frame-rate targets during multi-touch gestures.


### Cycle #77 Directive (2026-11-03 04:22)
```ts
// 1. Organic S-curve connector path
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// 2. Native pointer pan (zero deps, hardware-direct)
export function bindCanvasPan(el: HTMLElement, onPan: (dx: number, dy: number) => void) {
  let down = false, px = 0, py = 0;
  el.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest('.canvas-node')) return;
    down = true; [px, py] = [e.clientX, e.clientY];
    el.setPointerCapture(e.pointerId);
  });
  el.addEventListener('pointermove', (e) => {
    if (!down) return;
    onPan(e.clientX - px, e.clientY - py);
    [px, py] = [e.clientX, e.clientY];
  });
  const end = (e: PointerEvent) => { down = false; try { el.releasePointerCapture(e.pointerId); } catch {} };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
}

// Self-check
console.assert(
  getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "getOrganicPath failed"
);
```

```css
/* 3. Zen nature UI ambient polish (Apple-clean warm backdrop + frosted tactile cards) */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image:
    radial-gradient(circle at 50% 50%, rgba(160, 140, 115, 0.12) 1px, transparent 1px),
    radial-gradient(circle at 10% 20%, rgba(235, 226, 212, 0.45) 0%, transparent 50%);
  background-size: 28px 28px, 100% 100%;
  touch-action: none;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(180, 160, 135, 0.22);
  border-radius: 14px;
  box-shadow: 
    0 1px 2px rgba(90, 70, 50, 0.04),
    0 8px 24px -4px rgba(90, 70, 50, 0.06);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
  user-select: none;
}

.canvas-node:hover {
  transform: translateY(-1px);
  box-shadow: 
    0 2px 4px rgba(90, 70, 50, 0.04),
    0 12px 32px -4px rgba(90, 70, 50, 0.09);
}

.canvas-connector {
  stroke: rgba(140, 120, 95, 0.35);
  stroke-width: 1.75px;
  fill: none;
  stroke-linecap: round;
}
```

skipped: Obstacle-avoidance routing algorithms; add when intersecting node densities exceed simple horizontal Béziers.
skipped: External gesture engines (Framer Motion/use-gesture); add when multi-touch pinch-zoom gestures are required on touchscreens.


### Cycle #78 Directive (2026-11-03 04:27)
### 1. Organic Flowchart Connectors (Auto S-Curves)

```ts
// connector.ts
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  // ponytail: fixed horizontal tangent; adjust inflection points if nodes dock vertically
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
skipped: Orthogonal routing engines & collision avoidance.  
add when: Graph density causes edge-node overlap.

---

### 2. Warm Nature Canvas & Organic Glass Nodes

```css
/* canvas-ambient.css */
.canvas-root {
  background-color: #fbf9f5;
  background-image: radial-gradient(#dfd9ce 1.1px, transparent 1.1px);
  background-size: 24px 24px;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(220, 214, 204, 0.7);
  border-radius: 14px;
  box-shadow: 0 4px 20px -3px rgba(60, 50, 40, 0.04), 0 1px 3px rgba(60, 50, 40, 0.02);
  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms ease;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 10px 28px -4px rgba(60, 50, 40, 0.08);
}
```
skipped: WebGL shaders, noise image overlays, and dynamic light trackers.  
add when: Low-end devices experience framerate drops on backdrop-filter.

---

### 3. Native Pointer Pan Interaction

```ts
// canvas-pan.ts
export function bindCanvasPan(target: HTMLElement, onPan: (dx: number, dy: number) => void) {
  target.onpointerdown = (e) => {
    if (e.target !== target) return;
    target.setPointerCapture(e.pointerId);
    let { clientX: lx, clientY: ly } = e;

    target.onpointermove = (ev) => {
      onPan(ev.clientX - lx, ev.clientY - ly);
      lx = ev.clientX;
      ly = ev.clientY;
    };

    target.onpointerup = () => {
      target.onpointermove = null;
      target.releasePointerCapture(e.pointerId);
    };
  };
}
```
skipped: Inertial momentum simulation and zoom pinch-handlers.  
add when: Multi-touch trackpad or touch tablet gestures are formally targeted.


### Cycle #79 Directive (2026-11-03 04:33)
```css
/* 1. Nature UI Ambient Backdrop: Warm tactile canvas without asset bloat */
.spatial-canvas {
  background-color: #fbfaf8; /* Zen warm stone/linen */
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(180, 160, 140, 0.12) 1px, transparent 1px),
    radial-gradient(ellipse at center, transparent 60%, rgba(220, 215, 205, 0.3) 100%);
  background-size: 24px 24px, 100% 100%;
  overscroll-behavior: contain;
  touch-action: none;
}

/* 2. Tactile Micro-Interactions: Physics-like Apple-style spring lift on nodes */
.canvas-node {
  will-change: transform, box-shadow;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
  box-shadow: 0 1px 3px rgba(45, 35, 25, 0.04), 0 4px 12px rgba(45, 35, 25, 0.03);
}

.canvas-node:active, .canvas-node[data-dragging="true"] {
  transform: scale(1.025);
  box-shadow: 0 12px 28px rgba(45, 35, 25, 0.08), 0 2px 6px rgba(45, 35, 25, 0.04);
  cursor: grabbing;
}
```

```javascript
// 3. Natural Organic Connectors: Smooth organic horizontal S-curve
function getOrganicPath(x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1) * 0.55;
  // ponytail: fixed midpoint bezier; upgrade to obstacle avoidance routing if nodes overlap densely
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable self-check
console.assert(getOrganicPath(0, 0, 100, 50) === "M 0 0 C 55 0, 45 50, 100 50", "Path failed");
```

skipped: Complex auto-layout engines (D3/ELK) and WebGL grain shaders.
add when: Graph density exceeds ~80 nodes simultaneously or user requests manual re-clustering.


### Cycle #80 Directive (2026-11-03 04:38)
### 1. Organic Zen Surface & Apple-Grade Node Elevation

```css
/* Ambient warm paper canvas + tactile organic card elevation */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(120, 100, 80, 0.14) 1px, transparent 1px);
  background-size: 24px 24px;
}

.flow-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(140, 120, 100, 0.15);
  border-radius: 14px;
  box-shadow: 0 6px 20px -4px rgba(70, 50, 30, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  cursor: grab;
}

.flow-node:active {
  cursor: grabbing;
  transform: scale(1.015);
  box-shadow: 0 12px 28px -6px rgba(70, 50, 30, 0.12);
}
```
skipped: Custom WebGL canvas shaders.  
add when: Scene exceeds 5,000 active visual elements.

---

### 2. Natural Organic Link Connectors

```javascript
// ponytail: Horizontal cubic-bezier ceiling. Upgrade to orthogonal pathfinding if nodes collide.
export function naturalConnector(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```

```svg
<!-- Stroke styling for ambient leaf/root feel -->
<path d="..." fill="none" stroke="rgba(120, 105, 90, 0.35)" stroke-width="1.75" stroke-linecap="round" />
```
skipped: Obstacle-avoidance pathfinding algorithm.  
add when: Flowchart density causes overlapping edges across node bodies.

---

### 3. Native Gestural Panning Containment

```css
.canvas-viewport {
  touch-action: none;
  overscroll-behavior: contain;
  user-select: none;
  -webkit-user-select: none;
}
```
skipped: Third-party pan/zoom library dependency.  
add when: Multi-touch pinch-to-zoom gesture recognition is needed on native touchscreens.


### Cycle #81 Directive (2026-11-03 04:43)
### 1. Organic Ambient Canvas (Pure CSS)

```css
.canvas-surface {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 50%, rgba(65, 72, 51, 0.05) 100%),
    radial-gradient(circle, rgba(50, 45, 35, 0.08) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  overscroll-behavior: none;
  touch-action: none;
}
```
skipped: HTML5 `<canvas>` rendering loop or image asset overlays.  
add when: Dynamic multi-layer parallax or 10k+ nodes cause CSS repaint degradation.

---

### 2. Natural Bezier Flow Connectors

```javascript
function getConnectorPath(x1, y1, x2, y2) {
  // ponytail: fixed horizontal curve; switch to 4-way orthogonal router if port snapping is added
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 48);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getConnectorPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Connector path failed");
```
skipped: Complex collision avoidance, A* pathfinding, and port-direction resolvers.  
add when: Connecting lines cut directly through intermediate nodes.

---

### 3. Tactile Frosted Node Feedback

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(82, 92, 70, 0.14);
  box-shadow: 0 4px 18px -2px rgba(40, 35, 25, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  user-select: none;
}
.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 0 2px 6px -1px rgba(40, 35, 25, 0.08);
}
```
skipped: Framer Motion/JS animation libraries and custom elevation state-machines.  
add when: Fluid multi-touch gestures require velocity-preserved momentum physics.


### Cycle #82 Directive (2026-11-03 04:49)
### 1. Organic Zen Canvas Background & Viewport Fix

```css
/* Nature UI ambient paper background with subtle coordinate grid */
.spatial-canvas {
  background-color: #fbf9f5; /* warm linen */
  background-image: radial-gradient(circle at 1px 1px, rgba(60, 50, 40, 0.08) 1.2px, transparent 0);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}

/* Tactile node elevation with Apple-grade spring */
.canvas-node {
  will-change: transform;
  transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 1px 3px rgba(44, 35, 25, 0.04), 0 4px 12px rgba(44, 35, 25, 0.03);
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.99) translateY(-1px);
  box-shadow: 0 4px 12px rgba(44, 35, 25, 0.08), 0 16px 28px rgba(44, 35, 25, 0.06);
}
```

### 2. Natural Flowchart Link Spline (Native S-Curve Math)

```javascript
// ponytail: Horizontal/vertical auto-curved Bezier. Upgrades to full obstacle avoidance pathing if nodes overlap.
export function getOrganicPath(x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1) * 0.5;
  const cx1 = x1 + Math.max(dx, 40);
  const cx2 = x2 - Math.max(dx, 40);
  return `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Path generation mismatch");
```

### 3. Native Smooth Canvas Pan Decay (No Third-Party Physics Lib)

```javascript
// Native momentum pan on pointer release
export function applyPanInertia(canvasEl, vx, vy) {
  if (Math.hypot(vx, vy) < 0.1) return;
  canvasEl.scrollBy(-vx * 0.92, -vy * 0.92);
  requestAnimationFrame(() => applyPanInertia(canvasEl, vx * 0.92, vy * 0.92));
}
```

skipped: A* obstacle-avoiding routing paths; add when users report overlapping node lines.
skipped: Canvas-level WebGL/Lottie grain overlay; add when 60fps static CSS fails zen aesthetic benchmarks.
skipped: External drag-and-drop or gesture framework; add when multi-pointer pinch-zoom requirements land.


### Cycle #83 Directive (2026-11-03 04:54)
### 1. Zen Warmth Canvas Substrate

```css
/* Ambient warm stone canvas with soft dot matrix */
.canvas-root {
  background-color: #fbfaf8;
  background-image: radial-gradient(circle at 50% 50%, #e5e0d8 1px, transparent 1px);
  background-size: 24px 24px;
  /* ponytail: static grid size; upgrade to zoom-scaled LOD when viewport scaling is wired */
}
```
skipped: WebGL/canvas-drawn infinite grids, add when infinite zoom with dynamic LOD is needed.

---

### 2. Natural Organic Flowchart Curvature

```javascript
// Fluid S-curve for organic horizontal flowchart connections
export const getCurvedConnector = (x1, y1, x2, y2) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  // ponytail: fixed horizontal cubic bias; upgrade to orthogonal routing if nodes collide
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(
  getCurvedConnector(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Connector path mismatch"
);
```
skipped: Dagre/ELK auto-routing engines, add when auto-layout with cycle/collision avoidance is required.

---

### 3. Native Pointer-Capture Smooth Drag

```javascript
export const attachSmoothDrag = (nodeEl, onDelta) => {
  let anchor = null;
  nodeEl.onpointerdown = (e) => {
    if (e.button !== 0) return;
    anchor = { x: e.clientX, y: e.clientY };
    nodeEl.setPointerCapture(e.pointerId);
  };
  nodeEl.onpointermove = (e) => {
    if (!anchor) return;
    onDelta(e.clientX - anchor.x, e.clientY - anchor.y);
    anchor = { x: e.clientX, y: e.clientY };
  };
  nodeEl.onpointerup = (e) => {
    anchor = null;
    nodeEl.releasePointerCapture(e.pointerId);
  };
  // ponytail: direct deltas; add requestAnimationFrame accumulator if framerate drops below 60fps
};
```
skipped: Full gesture physics/momentum libraries, add when multi-touch pinch-zoom is introduced.


### Cycle #84 Directive (2026-11-03 05:00)
### 1. Nature Ambient Canvas Backdrop (Pure CSS)
```css
.canvas-viewport {
  background-color: #fbfaf8;
  background-image: 
    radial-gradient(at 100% 0%, oklch(0.96 0.03 80 / 0.6) 0px, transparent 50%),
    radial-gradient(at 0% 100%, oklch(0.95 0.02 55 / 0.4) 0px, transparent 50%),
    radial-gradient(circle at 1px 1px, oklch(0.7 0.01 60 / 0.25) 1px, transparent 0);
  background-size: 100% 100%, 100% 100%, 24px 24px;
}
```
skipped: WebGL shaders or dynamic canvas lighting.
add when: Users request dynamic day/night ambient shifting.

---

### 2. Organic Flowchart Connectors (Curved SVG Path)
```typescript
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: horizontal-first bezier; upgrade to A* or orthogonal routing if bidirectional node wrapping occurs
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Path generation mismatch");
```
skipped: Complex collision avoidance and multi-segment edge routers.
add when: Flowcharts routinely exceed 20+ interconnected nodes with overlapping paths.

---

### 3. Tactile Zen Node Shell & Elevation
```css
.canvas-node {
  background: oklch(0.99 0.005 85 / 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid oklch(0.88 0.01 75 / 0.8);
  box-shadow: 0 4px 20px -2px oklch(0.2 0.02 60 / 0.04), 0 1px 3px oklch(0.2 0.02 60 / 0.02);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease;
  will-change: transform;
}

.canvas-node:hover,
.canvas-node[data-selected="true"] {
  border-color: oklch(0.68 0.06 65);
  box-shadow: 0 10px 28px -4px oklch(0.4 0.05 60 / 0.12), 0 0 0 1px oklch(0.68 0.06 65 / 0.25);
}
```
skipped: Custom physics spring engine in JS.
add when: Canvas requires spatial momentum flick/throw interactions.


### Cycle #85 Directive (2026-11-03 05:06)
### 1. Zen Warmth Paper Texture & Natural Node Elevation

```css
/* Ambient canvas & warm organic nodes */
.canvas-root {
  background-color: #FAF8F5;
  background-image: radial-gradient(circle at 50% 50%, rgba(217, 211, 200, 0.35) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}

.canvas-node {
  background: rgba(255, 254, 251, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 220, 209, 0.6);
  border-radius: 14px;
  box-shadow: 
    0 1px 2px rgba(60, 52, 42, 0.04),
    0 8px 24px -4px rgba(60, 52, 42, 0.06);
  transition: box-shadow 180ms ease, transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
}

.canvas-node:active {
  box-shadow: 
    0 1px 2px rgba(60, 52, 42, 0.04),
    0 16px 32px -6px rgba(60, 52, 42, 0.1);
  transform: scale(1.015);
}
```
skipped: Custom noise textures and WebGL shaders.  
add when: Flat SVG/CSS gradients fail visual fidelity targets under high-DPI scaling.

---

### 2. Natural S-Curve Flowchart Connectors (Native Pathing)

```typescript
// Computes an organic, tension-adaptive bezier curve between two nodes
export function getOrganicConnector(
  x1: number, y1: number, 
  x2: number, y2: number
): string {
  // ponytail: fixed horizontal egress ceiling; upgrade to 4-port orthogonal routing when multi-edge collisions occur
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicConnector(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Connector geometry mismatch"
);
```
```svg
<!-- Connector rendering -->
<path 
  d={getOrganicConnector(from.x, from.y, to.x, to.y)} 
  fill="none" 
  stroke="rgba(120, 112, 102, 0.35)" 
  stroke-width="1.75" 
  stroke-linecap="round" 
/>
```
skipped: Dynamic obstacle avoidance and A* pathfinding.  
add when: Crossing lines cause visual ambiguity in deep graphs (>20 nodes).

---

### 3. Kinetic Drag Damping

```typescript
// Apply smooth deceleration on drag release
export function applyDamping(
  vx: number, 
  vy: number, 
  onTick: (dx: number, dy: number) => void
) {
  let frame: number;
  const step = () => {
    vx *= 0.88; // ponytail: simple friction multiplier; upgrade to spring RK4 if interactive physics scale up
    vy *= 0.88;
    if (Math.hypot(vx, vy) < 0.05) return;
    onTick(vx, vy);
    frame = requestAnimationFrame(step);
  };
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}
```
skipped: External physics runtimes (`framer-motion`, `popmotion`).  
add when: Nodes require complex multi-body momentum collisions.


### Cycle #86 Directive (2026-11-03 05:11)
```css
/* 1. Nature UI Canvas Texture & Tactile Node Elevation */
.canvas-root {
  background-color: #fbf9f5; /* Warm stone */
  background-image: radial-gradient(circle, #e2ded4 1px, transparent 1px);
  background-size: 24px 24px;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(214, 209, 197, 0.6);
  border-radius: 14px;
  box-shadow: 0 4px 16px -2px rgba(44, 38, 27, 0.05);
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
  will-change: transform;
}

.canvas-node:active, .canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.018) translateZ(0);
  box-shadow: 0 12px 32px -4px rgba(44, 38, 27, 0.12);
}
```

```javascript
// 2. Natural Organic Flowchart S-Curves
export function getOrganicConnector(x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1) * 0.55;
  // ponytail: fixed cubic control points; upgrade to obstacle-avoiding A* if paths collide
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Runnable check
console.assert(
  getOrganicConnector(0, 0, 100, 100) === "M 0 0 C 55 0, 45 100, 100 100",
  "Path generator failed"
);
```

```css
/* 3. Fluid Organic Connector Rendering */
.connector-path {
  fill: none;
  stroke: #a8a294;
  stroke-width: 2px;
  stroke-linecap: round;
  transition: stroke 0.2s ease, stroke-width 0.2s ease;
}

.connector-path:hover {
  stroke: #5e584d;
  stroke-width: 2.5px;
}
```

skipped: dynamic obstacle routing and webgl canvas, add when node count exceeds 200.
skipped: complex spring physics library, add when CSS cubic-bezier lacks multi-axis gesture tracking.


### Cycle #87 Directive (2026-11-03 05:17)
### 1. Organic Flowchart Edges (Adaptive Cubic S-Curve)

```typescript
// Computes an organic, tension-adaptive bezier curve between two nodes
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = x1 + Math.max(Math.abs(dx) * 0.5, 40) * Math.sign(dx || 1);
  // ponytail: static cubic control points; upgrade to obstacle-avoiding A* if node density > 50
  return `M ${x1} ${y1} C ${cx} ${y1}, ${x2 - (cx - x1)} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicConnector(0, 0, 100, 100).startsWith('M 0 0 C 50 0'), 'Connector anchor failed');
```
`skipped: [Obstacle routing and edge label placement], add when [nodes visually overlap edges].`

---

### 2. Nature Ambient Canvas (Zen Warmth & Linen Substrate)

```css
:root {
  --bg-zen: #fbf9f5;
  --node-stone: #f2eee6;
  --line-sage: rgba(82, 94, 84, 0.35);
  --ink-primary: #2d2b28;
}

.canvas-viewport {
  background-color: var(--bg-zen);
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(214, 207, 194, 0.45) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}
```
`skipped: [Dynamic canvas pan-tiling in JS], add when [infinite zoom causes CSS sub-pixel moiré].`

---

### 3. Tactile Spring Interaction (Node Drag & Selection)

```css
.canvas-node {
  background: var(--node-stone);
  color: var(--ink-primary);
  border-radius: 14px;
  box-shadow: 0 2px 8px -2px rgba(45, 43, 40, 0.06), 0 0 0 1px rgba(45, 43, 40, 0.05);
  cursor: grab;
  transition: transform 0.18s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.18s ease;
  will-change: transform;
}

.canvas-node:active, .canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.025) translateY(-2px);
  box-shadow: 0 12px 24px -6px rgba(45, 43, 40, 0.12), 0 0 0 1px rgba(82, 94, 84, 0.2);
}
```
`skipped: [Framer Motion / WebGL physics dependencies], add when [multi-node physics clustering is required].`


### Cycle #88 Directive (2026-11-03 05:22)
### 1. Nature Ambient Canvas (Earthy Linen Dot-Matrix)

```css
/* Replace sterile gray grid with warm alabaster & organic ink dots */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(rgba(78, 68, 55, 0.11) 1.25px, transparent 1.25px);
  background-size: 28px 28px;
  /* ponytail: static background; add canvas-layer rendering if zoom scaling causes artifacting */
}
```
skipped: Canvas rendering context and zoom-dependent grid recalculations.  
add when: Canvas zoom exceeds 0.25x–2.0x range and CSS tiling causes moiré.

---

### 2. Smooth S-Curve Spline for Natural Flowchart Paths

```ts
// Native cubic bezier: natural horizontal flow without layout engines
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 40);
  // ponytail: pure cubic bezier; add pathfinding/collision avoidance when nodes overlap frequently
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 100) === "M 0 0 C 55 0, 45 100, 100 100", "Path gen failed");
```
```css
.flow-edge {
  fill: none;
  stroke: rgba(68, 58, 48, 0.35);
  stroke-width: 1.75px;
  stroke-linecap: round;
}
```
skipped: Obstacle routing (A*) and dynamic connector anchor selection.  
add when: Visual edge-crossing degrades node readability in complex graphs.

---

### 3. Tactile Apple-Grade Node Lift & Press

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(80, 70, 60, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 16px -2px rgba(45, 35, 20, 0.04), 0 1px 2px rgba(45, 35, 20, 0.02);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  touch-action: none;
  user-select: none;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.015);
  box-shadow: 0 14px 28px -4px rgba(45, 35, 20, 0.09), 0 2px 6px rgba(45, 35, 20, 0.04);
}
```
skipped: Spring physics engine (Framer Motion / react-spring).  
add when: Gestural drag velocity or flick-to-throw interactions are introduced.


### Cycle #89 Directive (2026-11-03 05:28)
### 1. Zen Ambient Canvas Backdrop (Warm paper texture + soft grid)

```css
.spatial-canvas {
  background-color: #fbfbf9;
  background-image:
    radial-gradient(circle at 50% 50%, rgba(226, 221, 210, 0.3) 0%, transparent 85%),
    radial-gradient(circle, #dcd8d0 0.8px, transparent 0.8px);
  background-size: 100% 100%, 24px 24px;
}
```
→ skipped: Canvas/WebGL noise generation and raster assets.  
→ add when: Infinite dynamic zoom scales require procedural LOD texture mipmapping.

---

### 2. Natural Flowchart Connectors (Adaptive Bezier)

```javascript
export function getOrganicPath(x1, y1, x2, y2) {
  // ponytail: horizontal-biased flow; upgrade to orthogonal A* if user drag supports multi-side routing
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 50) === 'M 0 0 C 50 0, 50 50, 100 50', 'Invalid path generation');
```
→ skipped: Obstacle avoidance, dynamic routing libraries, and edge label anchoring.  
→ add when: Nodes overlap or layout exceeds 50+ interlinked nodes.

---

### 3. Apple-Grade Tactile Node Lift & Snap Interaction

```css
.canvas-node {
  touch-action: none;
  user-select: none;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
  will-change: transform;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018) translateY(-1px);
  box-shadow: 0 14px 28px -6px rgba(44, 39, 32, 0.12), 0 3px 8px -1px rgba(44, 39, 32, 0.05);
}
```
→ skipped: External spring physics engines (e.g., Framer Motion, React Spring).  
→ add when: Interrupted momentum-tossing interactions with velocity inheritance are required.


### Cycle #90 Directive (2026-11-03 05:34)
### 1. Nature UI Canvas Backing (Warm Stone & Dot-Grid Vignette)

```css
/* Replace plain background with tactile, organic stone grid */
.spatial-canvas {
  background-color: #f7f6f2;
  background-image: radial-gradient(circle, #ded9d0 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%);
}
```
skipped: Canvas rendering loops and raster noise textures.  
add when: Infinite-zoom LOD requires dynamic grid re-scaling via WebGL/Canvas2D.

---

### 2. Natural Bezier Flow Connectors (Native Path Math)

```typescript
// ponytail: horizontal s-curve; upgrade to orthogonal routing if nodes overlap vertically
export const getCurvedPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(
  getCurvedPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Path calculation failed"
);
```
skipped: Graph layout engines (dagre/elkjs) and edge-routing algorithms.  
add when: Flowcharts exceed ~25 nodes and require automated collision avoidance.

---

### 3. Tactile Node Elevation & Spring Response

```css
.canvas-node {
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(220, 215, 205, 0.6);
  box-shadow: 0 1px 3px rgba(45, 40, 30, 0.04), 0 8px 24px rgba(45, 40, 30, 0.03);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: grab;
  user-select: none;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(45, 40, 30, 0.08), 0 16px 36px rgba(45, 40, 30, 0.06);
}
```
skipped: JS physics/spring libraries (framer-motion, react-spring).  
add when: Freeform multi-body momentum throw/inertia physics are required.


### Cycle #91 Directive (2026-11-03 05:39)
### 1. Organic Bezier Flow Connectors

```ts
// Natural horizontal S-curve connector
export const getFlowPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  // ponytail: assumes L-to-R or auto-aligned flow; upgrade to edge-intersect pathing if supporting freeform 360-degree node docking
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(getFlowPath(0, 0, 100, 50) === 'M 0 0 C 50 0, 50 50, 100 50', 'Connector path calculation failed');
```

### 2. Zen Ambient Backdrop & Tactile Nodes

```css
/* Ambient warm-linen backdrop */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: radial-gradient(#dfd9cd 0.85px, transparent 0.85px);
  background-size: 24px 24px;
}

/* Tactile nature-UI node */
.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(216, 210, 198, 0.65);
  box-shadow: 0 4px 20px -2px rgba(48, 42, 34, 0.05), 0 1px 3px rgba(48, 42, 34, 0.03);
  border-radius: 12px;
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
  will-change: transform;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 10px 28px -4px rgba(48, 42, 34, 0.09);
}
```

skipped: dynamic obstacle-avoidance routing, multi-stop spring curves, and custom shader grains.
add when: canvas density exceeds 50 overlapping nodes or user reports wire tangling.


### Cycle #92 Directive (2026-11-03 05:45)
### 1. Organic Bezier Flowchart Connectors

```typescript
// ponytail: pure horizontal cubic bezier; upgrade to dynamic axis/port routing if vertical layouts are supported.
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const cx = x1 + Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${cx} ${y1}, ${x2 - (cx - x1)} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Path failed");
```
skipped: Obstacle avoidance & dynamic port detection.  
add when: Nodes overlap or multi-directional port connections are requested.

---

### 2. Nature Ambient Canvas (Zen Warmth & Paper Grid)

```css
/* Warm rice-paper ambient base with tactile dot-grid */
.canvas-ambient {
  background-color: #fbfbfa;
  background-image: 
    radial-gradient(ellipse at 50% 30%, rgba(244, 238, 224, 0.5) 0%, transparent 75%),
    radial-gradient(#d5d2cc 0.8px, transparent 0.8px);
  background-size: 100% 100%, 24px 24px;
}
```
skipped: Canvas-rendered procedural grain shader / noise textures.  
add when: Pure CSS gradients fail performance profiles on low-end mobile.

---

### 3. Apple-Grade Node Tactility & Elevation

```css
.canvas-node {
  touch-action: none;
  user-select: none;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(45, 38, 28, 0.04), 0 4px 12px rgba(45, 38, 28, 0.02);
  transition: transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1);
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 14px 28px -4px rgba(45, 38, 28, 0.08), 0 2px 6px -1px rgba(45, 38, 28, 0.04);
}
```
skipped: Framer Motion / spring physics libraries.  
add when: Multi-node magnetic snapping or multi-touch gestures require gesture trackers.


### Cycle #93 Directive (2026-11-03 05:51)
### 1. Organic Bezier Connectors

```javascript
// Native cubic spline: horizontal bias with dynamic tension
function flowPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 32);
  // ponytail: horizontal left-to-right only; add port angle vectors if nodes rotate
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```
* Skipped: Dynamic collision avoidance, port routing logic.
* Add when: Connectors cross intersecting node boundaries.

---

### 2. Ambient Paper Canvas Pattern

```css
/* Warm parchment surface with subtle stone dot grid */
.spatial-canvas {
  background-color: #FAF8F5;
  background-image: radial-gradient(#D6CFC4 1.2px, transparent 1.2px);
  background-size: 24px 24px;
}
```
* Skipped: Canvas-drawn infinite grid looping and zoom lod stepping.
* Add when: Zoom scale dips below 0.4x or exceeds 2.5x.

---

### 3. Tactile Leaf-Node Elevation

```css
.canvas-node {
  background: #FCFCFA;
  border: 1px solid #E3DED6;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(64, 52, 40, 0.03), 0 8px 16px rgba(64, 52, 40, 0.03);
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.15s ease;
}

.canvas-node:active,
.canvas-node[data-dragging="true"] {
  cursor: grabbing;
  transform: scale(1.018) translateY(-2px);
  box-shadow: 0 12px 28px rgba(64, 52, 40, 0.08), 0 3px 8px rgba(64, 52, 40, 0.04);
}
```
* Skipped: Web Animations API/Framer Motion physics engine.
* Add when: Multi-node cluster mass/momentum mechanics are explicitly required.


### Cycle #94 Directive (2026-11-03 05:56)
### 1. Nature Ambient Grid (CSS)
```css
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle, rgba(120, 105, 85, 0.14) 1px, transparent 1px);
  background-size: 24px 24px;
  overscroll-behavior: contain;
}
```

### 2. Natural S-Curve Connectors (Native Path Generator)
```typescript
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: horizontal-biased S-curve; upgrade to port-aware routing if adding 4-way connectors.
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```

### 3. Tactile Zen Node Elevation (CSS)
```css
.canvas-node {
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease-out;
  box-shadow: 0 1px 2px rgba(45, 35, 20, 0.05), 0 4px 12px rgba(45, 35, 20, 0.04);
  will-change: transform;
}
.canvas-node:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 4px 8px rgba(45, 35, 20, 0.08), 0 12px 24px rgba(45, 35, 20, 0.06);
}
.canvas-node:active {
  transform: scale(0.99);
}
```

* skipped: Canvas-based dot rendering, layout physics engines, and edge collision routing.
* add when: Flowchart density exceeds 200 concurrent nodes or paths require obstacle avoidance.


### Cycle #95 Directive (2026-11-03 06:02)
### 1. Natural Flowchart Connector (Auto-Curving S-Spline)

```typescript
// ponytail: Horizontal-bias S-curve; upgrade to dynamic obstacle avoidance when graph density exceeds ~40 nodes.
export function getNaturalEdgePath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.55, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getNaturalEdgePath(0, 0, 100, 100) === "M 0 0 C 55 0, 45 100, 100 100",
  "Path calc failed"
);
```

### 2. Nature Ambient Canvas (CSS Lattice & Palette)

```css
/* Ambient limestone + sage dot matrix */
.spatial-canvas {
  background-color: #f7f6f2;
  background-image: radial-gradient(circle, #8a9a86 0.75px, transparent 0.75px);
  background-size: 24px 24px;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    background-color: #141513;
    background-image: radial-gradient(circle, #3d463b 0.75px, transparent 0.75px);
  }
}
```

### 3. Apple Fluid Spring Node States

```css
/* Tactile spring response on hover and drag */
.canvas-node {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03), 0 6px 16px rgba(45, 52, 42, 0.05);
}

.canvas-node:hover {
  transform: translateY(-1.5px) scale(1.008);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 14px 28px rgba(45, 52, 42, 0.08);
}

.canvas-node:active,
.canvas-node[data-dragging="true"] {
  transition: none;
  transform: scale(1.02);
  box-shadow: 0 16px 36px rgba(35, 42, 32, 0.16);
  cursor: grabbing;
}
```

Skipped: Dynamic edge collision routing, canvas pinch-zoom matrices, and JS-based spring physics.
Add when: Canvas supports intersecting multi-tier branches or canvas scaling requires dynamic SVG level-of-detail.


### Cycle #96 Directive (2026-11-03 06:07)
### 1. Organic Warm Canvas Surface

```css
/* Ambient warm paper canvas; zero image assets */
.spatial-canvas {
  background-color: #faf8f5;
  background-image: radial-gradient(circle, rgba(90, 75, 60, 0.12) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
  touch-action: none;
}
```
skipped: Canvas pattern zoom scaling, add when canvas scale drops below 0.4x.

---

### 2. Natural Auto-Curving Edge Connector

```ts
// Smooth S-curve horizontal bezier path; stdlib math only
export const getCurvedPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const offset = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
};

// ponytail: basic cubic bezier; upgrade to obstacle routing if nodes overlap heavily
```
skipped: Obstacle collision avoidance, add when graph density exceeds 50 overlapping nodes.

---

### 3. Tactile Node Lift & Settle

```css
/* Warm nature-toned diffused elevation; GPU-accelerated */
.spatial-node {
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid rgba(80, 65, 50, 0.08);
  box-shadow: 0 1px 3px rgba(60, 45, 30, 0.04), 0 4px 12px rgba(60, 45, 30, 0.03);
  transition: transform 120ms cubic-bezier(0.2, 0, 0, 1), box-shadow 120ms ease;
  user-select: none;
}

.spatial-node:active,
.spatial-node[data-dragging="true"] {
  transform: scale(1.025);
  box-shadow: 0 12px 32px rgba(60, 45, 30, 0.12), 0 2px 6px rgba(60, 45, 30, 0.04);
}
```
skipped: Inertial velocity spring physics, add when dragging via pointer-events API requires momentum throw.


### Cycle #97 Directive (2026-11-03 06:13)
### 1. Organic Flowchart Connectors (SVG S-Curve)

```ts
// connector.ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal layout assumed; upgrade to dynamic axis when vertical graphs are supported.
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50", "Path calc mismatch");
```
```svg
<!-- SVG Connector Style -->
<path d={path} fill="none" stroke="#7A7165" stroke-width="1.5" stroke-linecap="round" opacity="0.45" />
```
skipped: Obstacle-avoidance routing and orthogonal elbows.  
add when: Flowcharts routinely exceed 50+ intersecting nodes.

---

### 2. Nature UI Ambient Backdrop & Card Surface

```css
/* canvas.css */
.spatial-canvas {
  background-color: #FBF9F5; /* Warm rice paper */
  background-image: radial-gradient(#E5DFD5 1px, transparent 1px);
  background-size: 24px 24px;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(220, 214, 203, 0.7);
  border-radius: 12px;
  box-shadow: 0 4px 16px -2px rgba(65, 55, 45, 0.05), 0 1px 2px rgba(65, 55, 45, 0.03);
}
```
skipped: Custom WebGL canvas background shaders and noise generators.  
add when: Native CSS radial tiling drops below 60fps on low-end hardware.

---

### 3. Smooth Kinetic Drag State

```css
/* node-interaction.css */
.canvas-node {
  touch-action: none;
  user-select: none;
  will-change: transform;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
}

.canvas-node.is-dragging {
  transition: none;
  cursor: grabbing;
  box-shadow: 0 14px 28px -4px rgba(65, 55, 45, 0.12), 0 2px 4px rgba(65, 55, 45, 0.04);
  transform: scale(1.015);
}
```
skipped: JS physics/spring animation library (e.g., framer-motion/popmotion).  
add when: Canvas demands multi-body collision physics or gesture flinging.


### Cycle #98 Directive (2026-11-03 06:18)
### 1. Organic Warm Canvas Base (CSS)
```css
/* Ambient Zen canvas surface replacing cold digital slate */
.canvas-viewport {
  background-color: #fcfbf9;
  background-image: radial-gradient(circle at 50% 50%, rgba(68, 64, 60, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
  overscroll-behavior: none;
}

@media (prefers-color-scheme: dark) {
  .canvas-viewport {
    background-color: #161514;
    background-image: radial-gradient(circle at 50% 50%, rgba(245, 245, 240, 0.05) 1px, transparent 1px);
  }
}
```
*skipped: Canvas-drawn procedural grain shader or heavy noise PNG assets.*  
*add when: Users demand high-zoom tactile skeuomorphism.*

---

### 2. Natural Flow Connectors (Pure SVG Bezier)
```js
// ponytail: fixed horizontal bezier ceiling; add obstacle routing only if dense edge crossing occurs.
export const createNaturalPath = (x1, y1, x2, y2) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(createNaturalPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Path generation failed");
```
*skipped: Heavy graph layout engines (dagre/elkjs) and dynamic orthogonal avoidance.*  
*add when: Nodes overlap or require automated auto-layout graphs.*

---

### 3. Tactile Spring Node Feedback (CSS)
```css
.canvas-node {
  touch-action: none;
  user-select: none;
  will-change: transform;
  border: 1px solid rgba(68, 64, 60, 0.08);
  box-shadow: 0 2px 6px rgba(44, 39, 36, 0.04);
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 160ms ease;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018) translateY(-1px);
  box-shadow: 0 14px 28px -6px rgba(44, 39, 36, 0.12), 0 2px 4px rgba(44, 39, 36, 0.04);
}
```
*skipped: JavaScript-driven spring simulation libraries (Framer Motion).*  
*add when: Multi-touch physics or custom velocity toss-and-catch is required.*


### Cycle #99 Directive (2026-11-03 06:24)
### 1. Zen Ambient Canvas Grid & Tactile Backdrop

```css
/* Ambient warm paper canvas with infinite dot grid */
.spatial-canvas {
  background-color: #fbfbfa;
  background-image: 
    radial-gradient(circle at 50% 40%, rgba(235, 230, 220, 0.4) 0%, transparent 70%),
    radial-gradient(rgba(40, 35, 25, 0.08) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  overscroll-behavior: none;
  touch-action: none;
}
```
skipped: dynamic canvas zoom-scaling background recalculation, add when user zoom level drops below 0.4x.

---

### 2. Natural Bezier Flowchart Connectors

```ts
// Smooth organic tangent curve between nodes
// ponytail: horizontal-biased tangents; swap to orthogonal router if nodes overlap vertically.
export const getOrganicPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.52, 36);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100) === "M 0 0 C 52 0, 48 100, 100 100");
```
skipped: A* obstacle avoidance, add when automated layout overlaps 3+ sibling branches.

---

### 3. Apple-Grade Frosted Tactile Node Physics

```css
.flow-node {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.82);
  border: 0.5px solid rgba(50, 45, 35, 0.09);
  box-shadow: 0 1px 3px rgba(40, 30, 20, 0.04), 0 10px 24px -4px rgba(40, 30, 20, 0.06);
  transition: transform 140ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 140ms ease;
  will-change: transform;
}

.flow-node:active {
  cursor: grabbing;
  transform: scale(0.988);
  box-shadow: 0 1px 2px rgba(40, 30, 20, 0.04), 0 4px 12px -2px rgba(40, 30, 20, 0.08);
}
```
skipped: spring physics engine (Framer Motion/popmotion), add when users request multi-node magnetic snapping.


### Cycle #100 Directive (2026-11-03 06:30)
### 1. Zen Ambient Backdrop (Native CSS)

```css
.canvas-viewport {
  background-color: #fbfaf7;
  background-image: 
    radial-gradient(ellipse at 15% 10%, rgba(235, 230, 218, 0.6) 0%, transparent 60%),
    radial-gradient(circle, #e2ddd3 1px, transparent 1px);
  background-size: 100% 100%, 28px 28px;
}
```
*skipped: WebGL noise shaders or canvas rendering loops; add when dynamic reactive lighting is needed.*

---

### 2. Natural Bezier Connectors (Zero-dep Pathing)

```javascript
// ponytail: assumes horizontal left-to-right flow; add auto-port detection when multi-axis routing lands
function getSmoothEdge(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 48);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// self-check
console.assert(getSmoothEdge(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100", "Connector path mismatch");
```
*skipped: Complex orthogonal routing algorithms (Dijkstra/A*); add when nodes overlap or loop backward.*

---

### 3. Tactile Node Physics (CSS Spring Response)

```css
.canvas-node {
  border: 1px solid rgba(60, 50, 40, 0.08);
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(45, 38, 28, 0.04), 0 4px 12px rgba(45, 38, 28, 0.02);
  transition: transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms ease;
  user-select: none;
}
.canvas-node:active, .canvas-node[data-dragging="true"] {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(45, 38, 28, 0.07), 0 16px 32px rgba(45, 38, 28, 0.04);
  cursor: grabbing;
}
```
*skipped: Framer Motion / JS spring simulations; add when multi-object inertia fling is required.*


### Cycle #101 Directive (2026-11-03 06:35)
### 1. Zen Canvas Ambient & Tactile Node Surface

```css
/* spatial-theme.css */
.spatial-viewport {
  background-color: #fbf9f5;
  background-image: radial-gradient(circle at 50% 50%, rgba(68, 64, 60, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(120, 113, 108, 0.14);
  border-radius: 14px;
  box-shadow: 0 1px 2px rgba(44, 40, 37, 0.03), 0 8px 24px -4px rgba(44, 40, 37, 0.06);
  transition: transform 0.14s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.14s ease;
}

.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 0 1px 2px rgba(44, 40, 37, 0.04), 0 4px 12px -2px rgba(44, 40, 37, 0.08);
}
```

### 2. Nature-Curved Flowchart Connector (Organic Tangent)

```typescript
// getConnectorPath.ts
export function getOrganicConnector(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: fixed horizontal cubic curve; upgrade to dynamic port normal detection if supporting 4-way attachments.
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicConnector(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Path calculation failed"
);
```

### 3. Native Low-Drag Canvas Transform (Zero-Jank Pan/Zoom)

```typescript
// useCanvasTransform.ts
export function applyCanvasTransform(el: HTMLElement, x: number, y: number, scale: number): void {
  // Uses translate3d to force compositor promotion without layout recalculations
  el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
}
```

skipped: Orthogonal routing and obstacle avoidance; add when nodes visibly overlap or user explicitly connects non-horizontal ports.
skipped: Motion animation libraries (Framer/GSAP); add when fluid layout transitions exceed native CSS cubic-bezier capabilities.
skipped: Multi-layer zoom levels with LOD; add when canvas node count consistently exceeds 100 on screen.


### Cycle #102 Directive (2026-11-03 06:41)
### 1. Organic Flowchart Connectors (SVG Native)

```typescript
// ponytail: Horizontal S-curve. Upgrade to directional port-aware tangents if multi-directional docking is added.
export function naturalPath(x1: number, y1: number, x2: number, y2: number): string {
  const cx = Math.max(Math.abs(x2 - x1) * 0.55, 32);
  return `M ${x1} ${y1} C ${x1 + cx} ${y1}, ${x2 - cx} ${y2}, ${x2} ${y2}`;
}
```

### 2. Ambient Warm Paper Canvas (Pure CSS)

```css
.canvas-root {
  background-color: #fbfaf6;
  background-image:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(242, 235, 222, 0.45) 0%, transparent 100%),
    radial-gradient(#d8d2c5 0.75px, transparent 0.75px);
  background-size: 100% 100%, 20px 20px;
}
```

### 3. Drift-Free Fluid Node Dragging (Native Pointer Capture)

```typescript
// ponytail: Mutates inline style directly to bypass React re-renders during drag. Upgrade to rAF batching if dropping frames on low-tier mobile.
export function bindSmoothDrag(el: HTMLElement, onMove: (dx: number, dy: number) => void) {
  el.onpointerdown = (e) => {
    el.setPointerCapture(e.pointerId);
    let [lx, ly] = [e.clientX, e.clientY];
    el.onpointermove = (ev) => {
      onMove(ev.clientX - lx, ev.clientY - ly);
      [lx, ly] = [ev.clientX, ev.clientY];
    };
    el.onpointerup = el.onpointercancel = () => { el.onpointermove = null; el.onpointerup = null; };
  };
}
```

skipped: Path collision avoidance / obstacle rerouting. Add when nodes overlap frequently.  
skipped: Noise texture overlay via Canvas/WebGL. Add if CSS radial grain lacks physical depth on calibrated displays.  
skipped: Inertial momentum physics on release. Add if nodes feel too static after rapid flick gestures.


### Cycle #103 Directive (2026-11-03 06:47)
### 1. Ambient Warm-Stone Canvas Surface

```css
/* Ambient nature canvas: stone warmth + low-contrast dot lattice */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(#d6cfc4 0.8px, transparent 0.8px);
  background-size: 20px 20px;
  overscroll-behavior: none;
  touch-action: none;
}
```

### 2. Natural S-Curve Flowchart Spline

```javascript
// Native cubic bezier with organic tension
function getSmoothSpline(x1, y1, x2, y2) {
  const offset = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  // ponytail: horizontal anchors only; switch to perimeter collision when node ports are arbitrary.
  return `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
}
```

### 3. Tactile Leaf Node Elevation

```css
/* Tactile node resting & drag lift */
.flow-node {
  background: #ffffff;
  border: 1px solid rgba(214, 207, 196, 0.7);
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(40, 35, 28, 0.04), 0 4px 12px rgba(40, 35, 28, 0.02);
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.15s ease;
  cursor: grab;
  user-select: none;
}
.flow-node:active, .flow-node.is-dragging {
  cursor: grabbing;
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 12px 20px -4px rgba(40, 35, 28, 0.08), 0 4px 6px -2px rgba(40, 35, 28, 0.03);
}
```

skipped: Obstacle-avoidance pathing algorithms and edge-rerouting workers.
add when: Flowchart density exceeds 20 overlapping node clusters.


### Cycle #104 Directive (2026-11-03 06:53)
```ts
// 1. Natural organic cubic bezier connector
export const getConnectorPath = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
// ponytail: Horizontal-bias S-curve; upgrade to orthogonal routing if edge crossings become messy.
```

```css
/* 2. Nature ambient warmth canvas & frosted nodes */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image: radial-gradient(circle, #e4ded5 0.8px, transparent 0.8px);
  background-size: 24px 24px;
}

.spatial-node {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(226, 220, 210, 0.7);
  box-shadow: 0 4px 16px -2px rgba(70, 60, 50, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms ease;
  will-change: transform;
}

.spatial-node:hover {
  transform: translateY(-1px) scale(1.005);
  box-shadow: 0 8px 24px -4px rgba(70, 60, 50, 0.08);
}
```

```css
/* 3. Smooth connector rendering with organic nature tone */
.connector-line {
  stroke: #c8bfb0;
  stroke-width: 1.5;
  fill: none;
  stroke-linecap: round;
  transition: stroke 150ms ease, stroke-width 150ms ease;
}

.connector-line:hover {
  stroke: #9d8f7c;
  stroke-width: 2;
}
```

skipped: Obstacle-avoiding pathing engines (e.g. ELK/Dagre), add when node density causes unreadable overlap.
skipped: Canvas-level WebGL/noise shaders, add when static CSS dot-matrix drops below 60fps on low-end mobile.
skipped: Physics-based spring inertia libraries, add when users request free-toss canvas momentum.


### Cycle #105 Directive (2026-11-03 06:58)
### 1. Zen Ambient Canvas Grid & Tactile Elevation

```css
/* Warm stone paper canvas + tactile node lift */
.spatial-canvas {
  background-color: #fcfbf9;
  background-image: radial-gradient(circle, rgba(68, 56, 40, 0.075) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
}

.canvas-node {
  touch-action: none;
  background: #ffffff;
  border: 1px solid rgba(68, 56, 40, 0.08);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(40, 30, 20, 0.04), 0 4px 12px rgba(40, 30, 20, 0.02);
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
}

.canvas-node:active {
  cursor: grabbing;
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 14px 28px -4px rgba(40, 30, 20, 0.09), 0 6px 12px -2px rgba(40, 30, 20, 0.04);
}
```

### 2. Natural Bezier Connectors

```javascript
// ponytail: horizontal S-curve assumes left-to-right flow; add directional branching when canvas supports free-angle docking
function getOrganicConnectorPath(x1, y1, x2, y2) {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicConnectorPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Connector path mismatch"
);
```

### 3. Native Smooth Viewport Clamping

```javascript
function applyCanvasPan(viewportEl, x, y) {
  // Use 3D transform for hardware compositing without repainting canvas grid
  viewportEl.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
```

---
skipped: Layout physics engine & dynamic port re-routing.
add when: Flowcharts exceed 50 interrelated nodes or require automated orthogonal collision avoidance.


### Cycle #106 Directive (2026-11-03 07:04)
```css
/* 1. Nature UI ambient warmth & tactile card lift */
.canvas-viewport {
  background-color: #fcfbf9;
  background-image: radial-gradient(circle at 50% 25%, #ffffff 0%, #f4f1ea 100%);
}

.canvas-node {
  border: 1px solid rgba(138, 130, 115, 0.16);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 6px rgba(45, 40, 30, 0.03), 0 8px 20px rgba(45, 40, 30, 0.04);
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease;
  cursor: grab;
}

.canvas-node:active {
  cursor: grabbing;
  transform: translateY(-1px) scale(1.008);
  box-shadow: 0 4px 12px rgba(45, 40, 30, 0.06), 0 16px 32px rgba(45, 40, 30, 0.08);
}
```

```javascript
/* 2. Natural organic flowchart connectors (smooth horizontal s-curve) */
function getCurvedPath(x1, y1, x2, y2) {
  // ponytail: fixed horizontal tension curve; upgrade to path-finding (A*) if auto-routing around cards is needed
  const deltaX = Math.abs(x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + deltaX} ${y1}, ${x2 - deltaX} ${y2}, ${x2} ${y2}`;
}

// Runnable assertion
console.assert(
  getCurvedPath(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "getCurvedPath layout assertion failed"
);
```

```css
/* 3. Ambient connector lines with subtle organic tone */
.canvas-edge {
  fill: none;
  stroke: #989487;
  stroke-width: 1.5px;
  stroke-linecap: round;
  opacity: 0.65;
  transition: stroke 150ms ease, opacity 150ms ease;
}

.canvas-edge:hover,
.canvas-edge.active {
  stroke: #4a483f;
  opacity: 1;
  stroke-width: 2px;
}
```

skipped: dynamic obstacle-avoidance routing, add when cards frequently overlap and occlude connecting lines.
skipped: canvas particle/paper-texture shaders, add when static CSS radial gradient fails high-DPI visual target.
skipped: physics-based spring animation libraries, add when native CSS transforms feel noticeably stiff during user testing.


### Cycle #107 Directive (2026-11-03 07:09)
```css
/* 1. Ambient Warmth Canvas */
.canvas-viewport {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(circle at 50% 50%, transparent 60%, rgba(215, 204, 185, 0.2) 100%),
    radial-gradient(#d6cebe 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  touch-action: none;
}

/* 2. Tactile Zen Node Surface */
.canvas-node {
  background: rgba(255, 253, 249, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(215, 205, 190, 0.7);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(60, 50, 40, 0.03), 0 8px 20px -4px rgba(60, 50, 40, 0.06);
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.15s ease;
  user-select: none;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.015);
  box-shadow: 0 14px 28px -4px rgba(60, 50, 40, 0.12);
}
```

```javascript
// 3. Natural Organic Flowchart Bezier Edge
export function getEdgePath(x1, y1, x2, y2) {
  // ponytail: horizontal S-curve only; upgrade to directional multi-port routing when nodes support 4-sided anchors.
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```

skipped: Graph layout libraries (ELK/dagre) and WebGL canvas backgrounds.
add when: Graph exceeds 200 concurrent nodes or requires automated cycle avoidance.


### Cycle #108 Directive (2026-11-03 07:15)
### 1. Organic Bezier Edge Connector (Natural Layout)

```javascript
// ponytail: horizontal auto-tangents; upgrade to obstacle avoidance when nodes overlap
export const getNaturalPath = (x1, y1, x2, y2) => {
  const cx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + cx} ${y1}, ${x2 - cx} ${y2}, ${x2} ${y2}`;
};
```
`skipped: A* pathfinding, add when node collisions block readability.`

---

### 2. Ambient Warm Canvas Backdrop (Nature UI)

```css
.spatial-canvas {
  background-color: #f8f7f4;
  background-image: radial-gradient(rgba(120, 113, 108, 0.14) 1px, transparent 1px);
  background-size: 28px 28px;
}
```
`skipped: WebGL paper-grain shader, add when ambient static background hurts 60fps pan/zoom.`

---

### 3. Tactile Frosted Node Surface (Apple Precision Interaction)

```css
.canvas-node {
  background: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(16px);
  box-shadow: 0 2px 10px -2px rgba(44, 38, 34, 0.06), 0 0 0 1px rgba(44, 38, 34, 0.07);
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
}

.canvas-node:active {
  transform: scale(0.985);
  box-shadow: 0 1px 4px rgba(44, 38, 34, 0.04), 0 0 0 1px rgba(44, 38, 34, 0.12);
}
```
`skipped: Multi-state physics spring lib, add when dynamic gesture velocity throws nodes on release.`


### Cycle #109 Directive (2026-11-03 07:21)
### 1. Organic S-Curve Flow Connectors

```javascript
// ponytail: Horizontal bezier only; upgrade to obstacle routing when node density causes overlap.
export const getFlowPath = ([x1, y1], [x2, y2]) => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.45, 32);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};
```
```svg
<path 
  d={getFlowPath(source, target)} 
  fill="none" 
  stroke="#8c8273" 
  stroke-width="1.5" 
  stroke-linecap="round" 
  stroke-opacity="0.45" 
/>
```
`getFlowPath` → skipped: A* routing / obstacle avoidance, add when canvas exceeds 50 densely clustered nodes.

---

### 2. Zen Warmth Canvas Atmosphere

```css
.canvas-ambient {
  background-color: #fbf9f5;
  background-image: 
    radial-gradient(ellipse at 50% 0%, rgba(229, 221, 209, 0.5) 0%, transparent 65%),
    radial-gradient(circle, #ded7cb 0.75px, transparent 0.75px);
  background-size: 100% 100%, 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}
```
`.canvas-ambient` → skipped: WebGL/Canvas noise shaders, add when cross-browser subpixel CSS rendering is insufficient.

---

### 3. Tactile Paper-Spring Node Physics

```css
.canvas-node {
  background: rgba(255, 254, 251, 0.86);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(216, 208, 196, 0.65);
  box-shadow: 0 4px 18px -4px rgba(44, 38, 28, 0.05), 0 1px 2px rgba(44, 38, 28, 0.03);
  border-radius: 12px;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
  will-change: transform;
}
.canvas-node:active {
  cursor: grabbing;
  transform: scale(0.985);
  box-shadow: 0 8px 24px -4px rgba(44, 38, 28, 0.1);
}
```
`.canvas-node` → skipped: JS spring physics engine (Framer Motion/react-spring), add when gestures require momentum throwing.


### Cycle #110 Directive (2026-11-03 07:26)
### 1. Organic Flowchart Bézier Connector

```typescript
// utils/curve.ts
// ponytail: assumes left-to-right bias; upgrade to orthogonal port-aware routing if cyclic graphs collide
export const getNaturalEdge = (x1: number, y1: number, x2: number, y2: number): string => {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

// Self-check
console.assert(
  getNaturalEdge(0, 0, 100, 100) === "M 0 0 C 50 0, 50 100, 100 100",
  "Edge calculation failed"
);
```
`skipped: Obstacle avoidance / edge bundling.`  
`add when: Canvas routinely hosts >50 overlapping node connections.`

---

### 2. Ambient Zen Warmth Canvas Surface

```css
/* canvas.css */
.spatial-canvas {
  --bg-sand: #FAF7F2;
  --dot-color: rgba(68, 58, 48, 0.08);
  background-color: var(--bg-sand);
  background-image: radial-gradient(circle at center, var(--dot-color) 1.25px, transparent 1.25px);
  background-size: 24px 24px;
  overscroll-behavior: none;
  touch-action: none;
}

@media (prefers-color-scheme: dark) {
  .spatial-canvas {
    --bg-sand: #181716;
    --dot-color: rgba(220, 210, 195, 0.08);
  }
}
```
`skipped: Dynamic canvas tile streaming and procedural noise textures.`  
`add when: Zoom scale drops below 0.2x where subpixel grids moiré.`

---

### 3. Native RAF-Smoothed Pan

```typescript
// hooks/useCanvasPan.ts
export function attachCanvasPan(el: HTMLElement, onPan: (dx: number, dy: number) => void) {
  let dx = 0, dy = 0, raf = 0;
  el.addEventListener('pointermove', (e) => {
    if (e.buttons !== 1 && e.buttons !== 4) return;
    dx += e.movementX;
    dy += e.movementY;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        onPan(dx, dy);
        dx = 0; dy = 0; raf = 0;
      });
    }
  });
}
```
`skipped: Momentum/inertia decay math.`  
`add when: Trackpad flick feel tests sluggish on physical touch surfaces.`


### Cycle #111 Directive (2026-11-03 07:32)
### 1. Zen Warm Canvas Grid & Gesture Locking
```css
.spatial-canvas {
  background-color: #fbfaf8;
  background-image: radial-gradient(circle, rgba(120, 110, 100, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}
```
*skipped: WebGL/Canvas2D grid rendering loop; add when grid scale dynamically renders millions of visible cells.*

---

### 2. Natural Organic Flowchart Connectors
```javascript
// ponytail: Horizontal-dominant S-curves. Upgrade to multi-directional anchor routing if orthogonal links are needed.
export function getFlowPath(x1, y1, x2, y2) {
  const offset = Math.max(Math.abs(x2 - x1) * 0.5, 48);
  return `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getFlowPath(0, 0, 100, 100).startsWith("M 0 0 C 50 0, 50 100, 100 100"));
```
*skipped: Obstacle avoidance & pathfinding (A*); add when nodes overlap or cross-cuts become unreadable.*

---

### 3. Apple-Grade Zen Node Surface & Micro-Spring
```css
.canvas-node {
  background: #ffffff;
  border: 1px solid rgba(80, 70, 60, 0.08);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(60, 50, 40, 0.03), 0 8px 24px rgba(60, 50, 40, 0.04);
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.24s ease;
  user-select: none;
}
.canvas-node:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 3px 8px rgba(60, 50, 40, 0.06), 0 12px 28px rgba(60, 50, 40, 0.06);
}
```
*skipped: JS spring animation libraries (Framer Motion/React Spring); add when drag-release requires momentum physics.*


### Cycle #112 Directive (2026-11-03 07:38)
### 1. Zen Canvas Texture & Tactile Node Elevation (CSS)

```css
/* Ambient warm paper grid + Apple-grade responsive elevation */
.spatial-canvas {
  background-color: #fbf9f5;
  background-image: radial-gradient(rgba(78, 68, 60, 0.09) 1px, transparent 1px);
  background-size: 24px 24px;
  touch-action: none;
}

.canvas-node {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(82, 68, 54, 0.08);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(48, 38, 28, 0.03), 0 8px 24px -4px rgba(48, 38, 28, 0.06);
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
  will-change: transform;
}

.canvas-node:active {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 0 14px 32px -6px rgba(48, 38, 28, 0.12);
}
```
* Skipped: Dynamic canvas-rendered WebGL noise and heavy CSS filters.
* Add when: User requests vintage parchment or custom skeuomorphic theme skins.

---

### 2. Natural S-Curve Flowchart Connectors (SVG Native)

```ts
// ponytail: Horizontal Bezier layout ceiling. Add A* edge avoidance if manual routing overlaps nodes.
export function getFlowPath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
```

```svg
<!-- Ambient edge rendering -->
<path
  d={getFlowPath(source.x, source.y, target.x, target.y)}
  fill="none"
  stroke="#8c8275"
  stroke-width="1.5"
  stroke-linecap="round"
  opacity="0.55"
/>
```

```ts
// self-check
import assert from "node:assert";
assert.strictEqual(getFlowPath(0, 0, 100, 50), "M 0 0 C 50 0, 50 50, 100 50");
```
* Skipped: External graph router packages (Dagre/ELK/ReactFlow layout engines).
* Add when: Canvas requires automatic dense DAG auto-layout.


### Cycle #113 Directive (2026-11-03 07:43)
### 1. Organic Bézier Connectors (Natural Flow Layout)

```typescript
// utils/connector.ts
export function getOrganicPath(x1: number, y1: number, x2: number, y2: number): string {
  // ponytail: horizontal bias; upgrade to port-normal vector math if nodes support 4-sided ports
  const offset = Math.max(Math.abs(x2 - x1) * 0.45, Math.abs(y2 - y1) * 0.2, 32);
  return `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(getOrganicPath(0, 0, 100, 100).startsWith("M 0 0 C 45 0, 55 100, 100 100"));
```

---

### 2. Nature UI Ambient Backdrop (Pure CSS)

```css
/* Warm zen paper surface with ambient light drop and subtle guide dots */
.spatial-canvas {
  background-color: #fbfaf7;
  background-image:
    radial-gradient(ellipse 60% 50% at 50% 0%, rgba(226, 218, 202, 0.35) 0%, transparent 80%),
    radial-gradient(rgba(52, 45, 36, 0.07) 1px, transparent 1px);
  background-size: 100% 100%, 24px 24px;
  touch-action: none;
  overscroll-behavior: none;
}
```

---

### 3. Tactile Node Elevation & Spring Response

```css
/* Apple-grade glass-paper tactile node */
.canvas-node {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(44, 38, 30, 0.08);
  box-shadow: 
    0 1px 2px rgba(44, 38, 30, 0.03),
    0 4px 12px -2px rgba(44, 38, 30, 0.04);
  transition: transform 160ms cubic-bezier(0.2, 0.9, 0.4, 1), box-shadow 160ms ease;
  will-change: transform;
}

.canvas-node:is(:hover, :focus-within) {
  border-color: rgba(44, 38, 30, 0.16);
}

.canvas-node.is-dragging {
  cursor: grabbing;
  transform: scale(1.018);
  box-shadow: 
    0 8px 24px -4px rgba(44, 38, 30, 0.08),
    0 2px 6px -1px rgba(44, 38, 30, 0.04);
}
```

---

skipped: Dynamic collision obstacle-avoidance routing, add when edge crossing causes readability issues.  
skipped: Multi-octave SVG canvas noise textures, add when target hardware profile is verified 60fps+.  
skipped: Custom physics simulation library, add when freeform force-directed layout is requested.


### Cycle #114 Directive (2026-11-03 07:49)
```css
/* 1. Nature ambient canvas background & tactile glass nodes */
.spatial-canvas {
  background-color: #fbfaf8;
  background-image: 
    radial-gradient(#e5e0d8 0.75px, transparent 0.75px),
    radial-gradient(at 0% 0%, rgba(228, 220, 206, 0.35) 0, transparent 40%);
  background-size: 24px 24px, 100% 100%;
}

.canvas-node {
  touch-action: none;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(60, 45, 30, 0.07);
  box-shadow: 0 1px 2px rgba(40, 30, 20, 0.03), 0 10px 24px -8px rgba(40, 30, 20, 0.06);
  transition: transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms ease;
}
.canvas-node:active {
  transform: scale(0.985);
}
```

```javascript
// 2. Natural organic bezier connector (Native SVG Path)
export function getOrganicWire(x1, y1, x2, y2) {
  // ponytail: horizontal auto-tangents; upgrade to obstacle-avoiding A* if nodes overlap frequently
  const dx = Math.max(Math.abs(x2 - x1) * 0.5, 40);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

// Self-check
console.assert(
  getOrganicWire(0, 0, 100, 50) === "M 0 0 C 50 0, 50 50, 100 50",
  "Bezier wire path miscalculated"
);
```

skipped: D3/dagre layout engine and canvas particle layers.
add when: Graph exceeds 50 simultaneous nodes requiring auto-untangling.
