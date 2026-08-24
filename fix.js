const fs = require('fs');
const path = 'c:/Users/hesham_elghamrawy/.gemini/antigravity/scratch/raya-consultant/index.html';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split(/\r?\n/);

const newLines = [
    ...lines.slice(0, 4457),
    'function escapeRe(str) {',
    '  return str.replace(/[.*+?^${}()|\\[\\]\\\\]/g, \'\\\\$&\');',
    '}',
    ...lines.slice(4462)
];

fs.writeFileSync(path, newLines.join('\n'), 'utf8');
