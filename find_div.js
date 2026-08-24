const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const lines = html.split('\n');
let stack = [];
let extraCloseLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // count <div...>
    const openMatches = line.match(/<div\b[^>]*>/gi);
    if (openMatches) {
        for (let m of openMatches) {
            stack.push(i + 1);
        }
    }
    
    // count </div>
    const closeMatches = line.match(/<\/div>/gi);
    if (closeMatches) {
        for (let m of closeMatches) {
            if (stack.length > 0) {
                stack.pop();
            } else {
                extraCloseLines.push(i + 1);
            }
        }
    }
}

console.log('Extra closing divs on lines:', extraCloseLines);
console.log('Unclosed open divs:', stack.length);
