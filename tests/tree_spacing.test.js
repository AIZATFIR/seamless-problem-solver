import assert from 'node:assert';
import { VisualFlowNodeComponent } from '../src/VisualFlowNodeComponent.js';

console.log('🧪 Running Tree Spacing & Non-Overlapping Bounding Box Test...');

// Mock nodes matching user screenshot scenario (4 nodes, 2 options in node_reflect, branching)
const nodes = [
  {
    id: 'node_start',
    x: 0, y: 0,
    isResult: false,
    options: [{ targetId: 'node_reflect' }]
  },
  {
    id: 'node_reflect',
    x: 0, y: 0,
    isResult: false,
    options: [{ targetId: 'res_tech' }, { targetId: 'res_biz' }]
  },
  {
    id: 'res_tech',
    x: 0, y: 0,
    isResult: true
  },
  {
    id: 'res_biz',
    x: 0, y: 0,
    isResult: true
  }
];

const comp = new VisualFlowNodeComponent({ nodes });
comp.autoArrangeLayout();

// Card dimensions assumption: Width 320px, Height 420px
const CARD_WIDTH = 320;
const CARD_HEIGHT = 420;

// Verify Bounding Box Overlaps (AABB Collision Test)
comp.nodes.forEach((n1, i) => {
  comp.nodes.forEach((n2, j) => {
    if (i >= j) return;

    const overlapX = (n1.x < n2.x + CARD_WIDTH) && (n1.x + CARD_WIDTH > n2.x);
    const overlapY = (n1.y < n2.y + CARD_HEIGHT) && (n1.y + CARD_HEIGHT > n2.y);

    const collision = overlapX && overlapY;
    assert.strictEqual(
      collision,
      false,
      `CRITICAL OVERLAP DETECTED: Node "${n1.id}" at (${n1.x}, ${n1.y}) overlaps with Node "${n2.id}" at (${n2.x}, ${n2.y})!`
    );
  });
});

console.log('✅ PASS: Bounding Box Non-Overlapping Engine Verified 100%!');
