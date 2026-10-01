import assert from 'node:assert';
import { FRAMEWORK_PRESETS } from '../src/FrameworkPresets.js';
import { VisualReasoningAI } from '../src/VisualReasoningAI.js';
import { NODE_CONFIGS } from '../src/FlowchartNodeTypes.js';

console.log('🧪 Running Spatial Canvas & AI Reasoning Test Suite...');

// 1. Framework Presets Integrity
assert.ok(FRAMEWORK_PRESETS.stoic, 'stoic preset must exist');
assert.ok(FRAMEWORK_PRESETS['5whys'], '5whys preset must exist');
assert.ok(FRAMEWORK_PRESETS.firstprinciples, 'firstprinciples preset must exist');
assert.ok(FRAMEWORK_PRESETS.eisenhower, 'eisenhower preset must exist');

Object.entries(FRAMEWORK_PRESETS).forEach(([key, preset]) => {
  assert.ok(preset.title, `Preset ${key} must have title`);
  assert.ok(Array.isArray(preset.nodes), `Preset ${key} must have nodes array`);
  assert.ok(preset.nodes.length > 0, `Preset ${key} must have at least 1 node`);
  
  preset.nodes.forEach(node => {
    assert.ok(node.id, `Node in ${key} must have id`);
    assert.ok(node.type, `Node in ${key} must have type`);
    assert.ok(typeof node.x === 'number', `Node ${node.id} in ${key} must have numeric x coordinate`);
    assert.ok(typeof node.y === 'number', `Node ${node.id} in ${key} must have numeric y coordinate`);
  });
});

console.log('✅ PASS: All Framework Presets validated with coordinates & valid schema!');

// 2. Flowchart Node Types Definition
assert.ok(NODE_CONFIGS.problem, 'problem type must exist');
assert.ok(NODE_CONFIGS.decision, 'decision type must exist');
assert.ok(NODE_CONFIGS.action, 'action type must exist');
assert.ok(NODE_CONFIGS.outcome, 'outcome type must exist');

// 3. Visual Reasoning AI Engine
const ai = new VisualReasoningAI();
const sampleNode = {
  id: 'test_node_1',
  type: 'problem',
  title: 'Overwhelmed with multiple tasks',
  description: 'Feeling burnt out and unfocused',
  x: 200,
  y: 200
};

const decomposed = ai.breakDownNode(sampleNode);
assert.ok(Array.isArray(decomposed), 'AI decomposition should return array of node suggestions');
assert.ok(decomposed.length >= 2, 'AI decomposition should provide at least 2 structured sub-paths');
decomposed.forEach(sub => {
  assert.ok(sub.title, 'Decomposed node must have title');
  assert.ok(sub.type, 'Decomposed node must have semantic type');
});

const generatedGraph = ai.deconstructProblem('Saya bingung harus resign atau lanjut kerja di kantor');
assert.ok(Array.isArray(generatedGraph), 'deconstructProblem should return nodes array');
assert.ok(generatedGraph.length >= 3, 'deconstructProblem should generate structured flow graph');

console.log('✅ PASS: Visual Reasoning AI Engine and Node Types verified!');
