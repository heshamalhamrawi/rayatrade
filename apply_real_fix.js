const fs = require('fs');
const testData = fs.readFileSync('test_render2.js', 'utf8');
let dataData = fs.readFileSync('data.js', 'utf8');

const match = testData.match(/const\s+FAB\s*=/);
if (match) {
    const fabAndBeyond = testData.substring(match.index);
    
    // Remove any existing FAB from dataData just in case
    const existingMatch = dataData.match(/const\s+FAB\s*=/);
    if (existingMatch) {
        dataData = dataData.substring(0, existingMatch.index);
    }
    
    fs.writeFileSync('data.js', dataData.trim() + '\n\n' + fabAndBeyond, 'utf8');
    
    // Update cache buster in index.html
    let newHtml = fs.readFileSync('index.html', 'utf8');
    newHtml = newHtml.replace(/data\.js\?v=\d+/, `data.js?v=${Date.now()}`);
    // Also remove fab.js from index.html because we are bundling everything in data.js
    newHtml = newHtml.replace(/document\.write\('<script src="fab\.js\?v=' \+ Date\.now\(\) \+ '"><\\\\\/script>'\);\n*/, '');
    fs.writeFileSync('index.html', newHtml, 'utf8');
    
    console.log('Successfully appended FAB and beyond to data.js and updated index.html');
} else {
    console.log('Failed to find const FAB in test_render2.js');
}
