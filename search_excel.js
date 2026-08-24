const xlsx = require('xlsx');

const wb = xlsx.readFile('Raya AR Description.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

let found = false;
for (let row of data) {
    const sku = String(row['SKU'] || '').toLowerCase();
    const name = String(row['Product Name'] || '').toLowerCase();
    const desc = String(row['Description'] || '').toLowerCase();

    if (sku.includes('18t') || name.includes('18t') || desc.includes('18t')) {
        console.log('FOUND MATCH:');
        console.log('SKU:', row['SKU']);
        console.log('Name:', row['Product Name']);
        console.log('-----------------');
        found = true;
    }
}
if (!found) {
    console.log('No matches for 18T found in the Excel file.');
}
