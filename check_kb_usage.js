const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const kbLogic = content.indexOf('KNOWLEDGE_BASE');
console.log("KNOWLEDGE_BASE mentioned at indices: ");
let idx = content.indexOf('KNOWLEDGE_BASE');
while (idx !== -1) {
    console.log(idx);
    idx = content.indexOf('KNOWLEDGE_BASE', idx + 1);
}
