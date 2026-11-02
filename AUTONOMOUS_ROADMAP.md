

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
