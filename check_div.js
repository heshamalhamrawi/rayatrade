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
        if (depth === 0) {
            console.log('manualContent closed at line', i);
            break;
        }
    }
}

// Find sec-branches-directory
for(let i=0; i<lines.length; i++) {
    if(lines[i].includes('id="sec-branches-directory"')) {
        console.log('sec-branches-directory is at line', i);
    }
}
