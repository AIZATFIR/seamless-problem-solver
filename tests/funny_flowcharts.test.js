import assert from 'node:assert';
import fs from 'node:fs';

console.log('🧪 Running 7 Funny Human Flowcharts Presets Test...');

const appContent = fs.readFileSync('./app.js', 'utf8');

// Extract adminFlowcharts array code roughly or verify ids
const expectedIds = [
  'admin-stoic-default',
  'comm-ex-chat',
  'comm-resign',
  'comm-boba',
  'comm-fridge',
  'funny-5sec-rule',
  'funny-engineering-wd40',
  'funny-midnight-shopping',
  'funny-code-error',
  'funny-jobdesk-survival',
  'funny-procrastination',
  'funny-lunch-terserah'
];

expectedIds.forEach(id => {
  assert.ok(appContent.includes(id), `adminFlowcharts must contain flowchart preset with id "${id}"`);
});

console.log('✅ PASS: All 7 Funny Human Flowchart Presets Verified Cleanly!');
