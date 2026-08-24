const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const startIdx = html.indexOf('<div class="section-block" data-category="store_front">');
if(startIdx === -1) {
    console.log('Not found');
    process.exit(0);
}
let depth = 0;
let endIdx = -1;
const tagRegex = /<\/?div[^>]*>/g;
tagRegex.lastIndex = startIdx;
let match;
while((match = tagRegex.exec(html)) !== null) {
    if(match[0].startsWith('</')) depth--;
    else depth++;
    if(depth === 0) {
        endIdx = match.index + match[0].length;
        break;
    }
}
console.log('Length:', endIdx - startIdx);
