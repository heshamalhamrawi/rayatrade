const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const openDivs = (html.match(/<div\b[^>]*>/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;

console.log(`Open divs: ${openDivs}, Close divs: ${closeDivs}`);
