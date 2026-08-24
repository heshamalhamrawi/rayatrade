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
    // Replace newlines with ' | '
    desc = desc.replace(/\r\n/g, '  | ').replace(/\n/g, '  | ');
    
    ar.push({
        s: String(row['SKU']).trim(),
        n: row['Product Name'] ? String(row['Product Name']).trim() : '',
        d: desc.trim(),
        t: row['Item Type'] ? String(row['Item Type']).trim() : ''
    });
}

console.log(`Parsed ${ar.length} products. Skipped ${skipped} rows without SKU.`);

let oldData = '';
try {
    oldData = fs.readFileSync('data.js', 'utf8');
} catch (e) {}

let fabData = '';
const fabMatch = oldData.match(/const\s+FAB\s*=\s*\[[\s\S]*?\];/);
if (fabMatch) {
    fabData = '\n\n' + fabMatch[0] + '\n';
} else {
    try {
        fabData = '\n\n' + fs.readFileSync('fab.js', 'utf8') + '\n';
    } catch (e) {}
}

const output = 'const AR = ' + JSON.stringify(ar) + ';\n' + fabData;

console.log('Writing to data.js...');
fs.writeFileSync('data.js', '\uFEFF' + output, 'utf8'); // with BOM

console.log('Successfully updated data.js');
