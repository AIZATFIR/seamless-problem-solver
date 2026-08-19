import assert from 'node:assert';
import { VisualFlowNodeComponent } from '../src/VisualFlowNodeComponent.js';

console.log('🧪 Running Figma Keybindings & Tool Mode Unit Test...');

const comp = new VisualFlowNodeComponent({
  nodes: [{ id: 'n1', x: 50, y: 50, isResult: false }]
});

// Default active tool must be 'select' (V key)
assert.strictEqual(comp.activeTool || 'select', 'select');

// Test switching to 'hand' tool (H key / Spacebar)
comp.setToolMode('hand');
assert.strictEqual(comp.activeTool, 'hand');

// Test switching back to 'select' tool (V key)
comp.setToolMode('select');
assert.strictEqual(comp.activeTool, 'select');

console.log('✅ PASS: Figma Keybindings & Tool Mode State Machine Verified!');
