

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
