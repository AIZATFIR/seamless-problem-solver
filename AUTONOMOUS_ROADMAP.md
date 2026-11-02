

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
