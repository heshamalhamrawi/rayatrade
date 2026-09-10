const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');

let m = -1;
let d = 0;
let lastDepth2 = '';

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id="manualContent"')) {
        m = i;
        d = 1;
    } else if (m !== -1) {
        const o = (lines[i].match(/<div/g) || []).length;
        const c = (lines[i].match(/<\/div>/g) || []).length;
        
        // Increase depth before processing line content if it opens divs
        let newD = d + o;
        
        if (newD >= 2 && o > 0 && d < 2) {
            lastDepth2 = lines[i].trim();
        } else if (d === 2 && o > 0) {
            lastDepth2 = lines[i].trim();
        }

        d = newD - c;

        if (lines[i].includes('id="sec-branches-directory"')) {
            console.log('Parent at depth 2 is:', lastDepth2);
            break;
        }
    }
}
