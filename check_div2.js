const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const lines = text.split('\n');

let depth = 0;
let manualContentStart = -1;
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('id="manualContent"')) {
        manualContentStart = i;
        depth = 1;
    } else if (manualContentStart !== -1) {
        const open = (line.match(/<div/g) || []).length;
        const close = (line.match(/<\/div>/g) || []).length;
        depth += (open - close);
        if (i === 6937) {
            console.log('At line 6937, depth is', depth);
            // Let's print the parent div
        }
        if (depth === 0) {
            break;
        }
    }
}
