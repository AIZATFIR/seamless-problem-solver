import assert from 'node:assert';
import fs from 'node:fs';

console.log('🧪 Running User UI Customization Test Suite...');

const htmlContent = fs.readFileSync('./index.html', 'utf8');
const appContent = fs.readFileSync('./app.js', 'utf8');
const componentContent = fs.readFileSync('./src/VisualFlowNodeComponent.js', 'utf8');

// 1. Check Mermaid export button removed in index.html
assert.strictEqual(htmlContent.includes('id="btn-export-mermaid"'), false, 'Mermaid export button must be removed from index.html');

// 2. Check header height reduced in index.html (py-1.5 or py-2)
assert.ok(htmlContent.includes('py-1.5') || htmlContent.includes('py-2'), 'Headbar padding must be reduced to py-1.5 or py-2');

// 3. Check "Poin Langkah Nyata" subtask section removed from player node card in app.js
assert.strictEqual(appContent.includes('Poin Langkah Nyata (+1 Subtask)'), false, 'Poin Langkah Nyata section must be removed from node cards');

// 4. Check Community Admin items rendered as Cards in app.js
assert.ok(appContent.includes('renderCommunityGrid'), 'renderCommunityGrid must render community admin cards');
assert.ok(appContent.includes('terra-card'), 'Community items must use terra-card class');

// 5. Check bottom floating prompt bar moved to left-6 in VisualFlowNodeComponent.js
assert.ok(componentContent.includes('left-6'), 'Bottom controls must be positioned at bottom-left (left-6)');
assert.strictEqual(componentContent.includes('left-1/2 -translate-x-1/2'), false, 'Bottom floating bar must not be centered (left-1/2 -translate-x-1/2)');

console.log('✅ PASS: All User UI Customizations Verified Cleanly!');
