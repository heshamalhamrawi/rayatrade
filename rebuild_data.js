const fs = require('fs');

const testData = fs.readFileSync('test.js', 'utf8');
const htmlData = fs.readFileSync('index.html', 'utf8');

// Find all constants in test.js
const regex = /const\s+([A-Z_]+)\s*=/g;
let match;
const missingConstants = [];

while ((match = regex.exec(testData)) !== null) {
    const name = match[1];
    // If it's missing in index.html AND it's not AR
    if (!htmlData.includes('const ' + name) && name !== 'AR') {
        missingConstants.push(name);
    }
}

// deduplicate
const uniqueMissing = [...new Set(missingConstants)];
console.log('Missing constants to recover:', uniqueMissing);

let output = '';

uniqueMissing.forEach(name => {
    // Find where this constant starts in test.js
    const startRegex = new RegExp(`const\\s+${name}\\s*=`);
    const startMatch = testData.match(startRegex);
    if (startMatch) {
        const startIndex = startMatch.index;
        // Find the next constant or end of file to get the chunk
        let nextIndex = testData.length;
        const nextRegex = /const\s+[A-Z_]+\s*=|function\s+[a-zA-Z_]+\s*\(/g;
        nextRegex.lastIndex = startIndex + startMatch[0].length;
        const nextMatch = nextRegex.exec(testData);
        if (nextMatch) {
            nextIndex = nextMatch.index;
        }
        
        let chunk = testData.substring(startIndex, nextIndex).trim();
        // ensure it ends with semicolon if it doesn't
        if (!chunk.endsWith(';')) chunk += ';';
        output += '\n\n' + chunk + '\n';
    }
});

// Now we need to append output to data.js
const currentData = fs.readFileSync('data.js', 'utf8');
// To avoid duplicating, we'll first strip any existing FAB, FAB_IDX, etc if they were appended by my previous script
let cleanData = currentData;
uniqueMissing.forEach(name => {
    const r = new RegExp(`const\\s+${name}\\s*=[\\s\\S]*`, 'g');
    cleanData = cleanData.replace(r, '');
});

fs.writeFileSync('data.js', cleanData.trim() + '\n' + output, 'utf8');
console.log('Successfully rebuilt data.js with missing constants.');

// Update index.html cache buster
let newHtml = htmlData.replace(/data\.js\?v=\d+/, `data.js?v=${Date.now()}`);
fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Updated cache buster in index.html.');
