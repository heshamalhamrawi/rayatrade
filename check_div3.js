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
        if (line.includes('sec-branches-directory')) {
            console.log('sec-branches-directory depth:', depth);
        }
        if (line.includes('sec-owner-dictionary')) {
            console.log('sec-owner-dictionary depth:', depth);
        }
        if (line.includes('sec-delivery-guest')) {
            console.log('sec-delivery-guest depth:', depth);
        }
        if (depth === 0) {
            break;
        }
    }
}
