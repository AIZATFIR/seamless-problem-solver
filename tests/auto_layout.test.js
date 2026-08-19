import assert from 'node:assert';
import { VisualFlowNodeComponent } from '../src/VisualFlowNodeComponent.js';

console.log('🧪 Running Smart Tree Auto-Layout Unit Test...');

const nodes = [
  { id: 'n1', x: 0, y: 0, isResult: false, options: [{ targetId: 'n2' }, { targetId: 'n3' }] },
  { id: 'n2', x: 0, y: 0, isResult: false, options: [{ targetId: 'n4' }] },
  { id: 'n3', x: 0, y: 0, isResult: true },
  { id: 'n4', x: 0, y: 0, isResult: true }
];

const comp = new VisualFlowNodeComponent({ nodes });
comp.autoArrangeLayout();

// Ensure no two nodes share the exact same (x, y) coordinates
const positions = new Set();
comp.nodes.forEach(n => {
  const key = `${n.x},${n.y}`;
  assert.strictEqual(positions.has(key), false, `Node ${n.id} overlaps at position ${key}`);
  positions.add(key);
});

// Ensure children are positioned to the right or below root node
const root = comp.nodes.find(n => n.id === 'n1');
const child2 = comp.nodes.find(n => n.id === 'n2');
assert.ok(child2.x > root.x || child2.y > root.y, 'Child node n2 should be offset from root n1');

console.log('✅ PASS: Smart Tree Auto-Layout Non-Overlapping Engine Verified!');
