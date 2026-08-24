const fs = require('fs');

const testData = fs.readFileSync('test_render2.js', 'utf8');
const htmlData = fs.readFileSync('index.html', 'utf8');

// Find all constants in test_render2.js
const regex = /const\s+([A-Z_]+)\s*=/g;
let match;
const missingConstants = [];

while ((match = regex.exec(testData)) !== null) {
    const name = match[1];
    if (!htmlData.includes('const ' + name) && name !== 'AR') {
        missingConstants.push(name);
    }
}

const uniqueMissing = [...new Set(missingConstants)];
console.log('Missing constants to recover from test_render2.js:', uniqueMissing);

let output = '';

uniqueMissing.forEach(name => {
    const startRegex = new RegExp(`const\\s+${name}\\s*=`);
    const startMatch = testData.match(startRegex);
    if (startMatch) {
        const startIndex = startMatch.index;
        let nextIndex = testData.length;
        const nextRegex = /const\s+[A-Z_]+\s*=|function\s+[a-zA-Z_]+\s*\(/g;
        nextRegex.lastIndex = startIndex + startMatch[0].length;
        const nextMatch = nextRegex.exec(testData);
        if (nextMatch) {
            nextIndex = nextMatch.index;
        }
        
        let chunk = testData.substring(startIndex, nextIndex).trim();
        if (!chunk.endsWith(';')) chunk += ';';
        output += '\n\n' + chunk + '\n';
    }
});

let currentData = fs.readFileSync('data.js', 'utf8');
uniqueMissing.forEach(name => {
    const r = new RegExp(`const\\s+${name}\\s*=[\\s\\S]*`, 'g');
    currentData = currentData.replace(r, '');
});

// Write to clean_data.js just in case, then copy over
fs.writeFileSync('data.js', currentData.trim() + '\n' + output, 'utf8');
console.log('Successfully rebuilt data.js using test_render2.js');

// Update index.html cache buster
let newHtml = fs.readFileSync('index.html', 'utf8');
newHtml = newHtml.replace(/data\.js\?v=\d+/, `data.js?v=${Date.now()}`);
fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Updated cache buster in index.html.');
