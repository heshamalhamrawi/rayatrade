const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const scriptMatches = indexHtml.match(/<script>([\s\S]*?)<\/script>/g);
let mainScript = '';
if (scriptMatches) {
    mainScript = scriptMatches.map(s => s.replace(/<\/?script>/g, '')).join('\n');
}

const dataJs = fs.readFileSync('data.js', 'utf8');
const arMatch = dataJs.match(/const AR\s*=\s*\[(.*?)\];/s);
let arJson = '[' + arMatch[1] + ']';
const AR = JSON.parse(arJson);

// Evaluate the main script in the global context to load functions
eval(mainScript);

// Test SKUs
const codes = ['2655E', 'ST387E', 'AT620/14', '6610DE', 'ST325', '6609E', 'E650', '6611E', '6604E', 'HP8323', 'ST330E'];

console.log("Starting tests...");
for (let code of codes) {
    let exact = findExactSKU(code);
    if (exact) {
        try {
            let html = renderSKUResult(exact);
            console.log(code, "-> render SUCCESS");
        } catch (e) {
            console.log(code, "-> render ERROR:", e.message);
        }
    } else {
        console.log(code, "-> NOT FOUND by findExactSKU");
    }
}
