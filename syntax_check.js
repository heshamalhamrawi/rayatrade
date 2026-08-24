const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = scriptRegex.exec(html)) !== null) {
    count++;
    const code = match[1].trim();
    if (code) {
        try {
            new vm.Script(code);
            console.log(`Script ${count}: Syntax OK`);
        } catch (e) {
            console.error(`Script ${count}: Syntax Error!`);
            console.error(e.message);
            // find the line number roughly
            const lines = html.substring(0, match.index).split('\n');
            console.error(`Starts around line: ${lines.length}`);
            fs.writeFileSync(`error_script_${count}.js`, code);
        }
    } else {
        console.log(`Script ${count}: Empty`);
    }
}
console.log('Done checking scripts inside index.html.');
