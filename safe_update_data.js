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
    
    let sku = String(row['SKU']).trim();
    // Remove all internal spaces from SKU (e.g. "MT- BZ071" -> "MT-BZ071")
    sku = sku.replace(/\s+/g, '');
    
    let desc = row['Description'] || '';
    // Handle all variations of line endings: \r\n, \n, \r
    desc = desc.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    // Split by newlines, trim each part, filter empties, join with " | "
    desc = desc.split('\n').map(p => p.trim()).filter(Boolean).join(' | ');
    
    let name = row['Product Name'] ? String(row['Product Name']).trim() : '';
    let type = row['Item Type'] ? String(row['Item Type']).trim() : '';
    
    ar.push({ s: sku, n: name, d: desc, t: type });
}

console.log(`Parsed ${ar.length} products. Skipped ${skipped} rows without SKU.`);

// Count duplicate SKUs
const skuMap = {};
ar.forEach(p => { skuMap[p.s] = (skuMap[p.s] || 0) + 1; });
const dups = Object.entries(skuMap).filter(([,c]) => c > 1);
if (dups.length > 0) {
    console.log(`WARNING: ${dups.length} duplicate SKUs found. Keeping last occurrence.`);
}

let oldData = fs.readFileSync('data.js', 'utf8');

let manualIndex = oldData.indexOf('const MANUAL =');
let newAR = 'const AR=' + JSON.stringify(ar) + ';\n\n';

let output = newAR;
if (manualIndex !== -1) {
    output += oldData.substring(manualIndex);
} else {
    console.log("WARNING: const MANUAL = not found in data.js!");
}

console.log('Writing to data.js...');
fs.writeFileSync('data.js', output, 'utf8');
console.log('Successfully updated data.js');
console.log(`File size: ${(output.length / 1024 / 1024).toFixed(2)} MB`);
