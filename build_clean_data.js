const xlsx = require('xlsx');
const fs = require('fs');

console.log('Reading Excel file...');
const wb = xlsx.readFile('Raya AR Description.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

console.log(`Read ${data.length} rows from Excel.`);

const ar = [];
let skipped = 0;

for (let row of data) {
    if (!row['SKU']) {
        skipped++;
        continue;
    }
    
    let desc = row['Description'] || '';
    // Fix all types of newlines and carriage returns
    desc = String(desc).replace(/\r\n/g, '  | ').replace(/\n/g, '  | ').replace(/\r/g, ' ');
    
    ar.push({
        s: String(row['SKU']).trim(),
        n: row['Product Name'] ? String(row['Product Name']).trim() : '',
        d: desc.trim(),
        t: row['Item Type'] ? String(row['Item Type']).trim() : ''
    });
}

console.log(`Parsed ${ar.length} products. Skipped ${skipped} rows without SKU.`);

const testData = fs.readFileSync('test_render2.js', 'utf8');

function extractVar(name) {
    const regex = new RegExp(`const\\s+${name}\\s*=`);
    const match = testData.match(regex);
    if (!match) return '';
    const startIndex = match.index;
    let nextIndex = testData.length;
    // Find the next const or function definition to mark the end of this variable
    const nextRegex = /const\s+[A-Z_]+\s*=|function\s+[a-zA-Z_]+\s*\(/g;
    nextRegex.lastIndex = startIndex + match[0].length;
    const nextMatch = nextRegex.exec(testData);
    if (nextMatch) {
        nextIndex = nextMatch.index;
    }
    let chunk = testData.substring(startIndex, nextIndex).trim();
    if (!chunk.endsWith(';')) chunk += ';';
    return chunk;
}

const fab = extractVar('FAB');
const fabIdx = extractVar('FAB_IDX');
const cs = extractVar('CS');
const us = extractVar('US');
const catToTypes = extractVar('CAT_TO_TYPES');

let output = 'const AR = ' + JSON.stringify(ar) + ';\n\n';
output += fab + '\n\n' + fabIdx + '\n\n' + cs + '\n\n' + us + '\n\n' + catToTypes + '\n';

console.log('Writing to data.js...');
fs.writeFileSync('data.js', '\uFEFF' + output, 'utf8'); // with BOM

// Update cache buster in index.html
let newHtml = fs.readFileSync('index.html', 'utf8');
newHtml = newHtml.replace(/data\.js\?v=\d+/, `data.js?v=${Date.now()}`);
fs.writeFileSync('index.html', newHtml, 'utf8');

console.log('Successfully updated data.js and index.html');
