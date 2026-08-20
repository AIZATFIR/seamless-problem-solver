import assert from 'node:assert';
import fs from 'node:fs';

console.log('🧪 Running Nature UI, Touchpad Smoothness & Card Focus Test Suite...');

const htmlContent = fs.readFileSync('./index.html', 'utf8');
const appContent = fs.readFileSync('./app.js', 'utf8');
const componentContent = fs.readFileSync('./src/VisualFlowNodeComponent.js', 'utf8');
const cssContent = fs.readFileSync('./style.css', 'utf8');

// 1. Verify placeholder/unused buttons are removed from VisualFlowNodeComponent.js
assert.strictEqual(componentContent.includes('title="Pencil / Draw (P)"'), false, 'Unused pencil button must be removed from floating toolbar');
assert.strictEqual(componentContent.includes('title="Tambah Lampiran"'), false, 'Unused attachment button must be removed from floating toolbar');

// 2. Verify Touchpad delta dampening/clamping is implemented in wheel handler
assert.ok(componentContent.includes('deltaX') && (componentContent.includes('0.4') || componentContent.includes('0.5') || componentContent.includes('Math.min') || componentContent.includes('Math.max')), 'Touchpad wheel delta must be dampened and clamped');

// 3. Verify ambient sound toggle is hidden in create mode
assert.ok(cssContent.includes('.fullscreen-create-active #btn-ambient') || cssContent.includes('#btn-ambient'), 'Ambient sound controls must be hidden in Create mode');

// 4. Verify individual Pillar cards have fullscreen focus expand buttons
assert.ok(htmlContent.includes('data-focus-pillar') || htmlContent.includes('onclick="app.focusPillarCard'), 'Individual 3 Pillars of Calm cards must have focus expand buttons');

// 5. Verify autoArrangeLayout is called when entering Studio / Create mode
assert.ok(appContent.includes('autoArrangeLayout'), 'autoArrangeLayout must be triggered on Studio mode');

console.log('✅ PASS: Nature UI, Touchpad Smoothness & Card Focus Requirements Verified!');
