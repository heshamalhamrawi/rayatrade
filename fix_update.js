const fs = require('fs');
let script = fs.readFileSync('update_data_from_excel.js', 'utf8');

const replacement = `let oldData = '';
try {
    oldData = fs.readFileSync('data.js', 'utf8');
} catch (e) {}

let fabData = '';
const fabMatch = oldData.match(/const\\s+FAB\\s*=\\s*\\[[\\s\\S]*?\\];/);
if (fabMatch) {
    fabData = '\\n\\n' + fabMatch[0] + '\\n';
} else {
    try {
        fabData = '\\n\\n' + fs.readFileSync('fab.js', 'utf8') + '\\n';
    } catch (e) {}
}

const output = 'const AR = ' + JSON.stringify(ar) + ';\\n' + fabData;`;

script = script.replace(/const output = 'const AR = ' \+ JSON\.stringify\(ar\) \+ ';\\n';/, replacement);
fs.writeFileSync('update_data_from_excel.js', script);
