const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const kbStart = content.indexOf('const KNOWLEDGE_BASE');
if (kbStart !== -1) {
    const kbEnd = content.indexOf('];', kbStart);
    console.log(content.substring(kbStart, kbEnd + 2).substring(0, 2000));
}
