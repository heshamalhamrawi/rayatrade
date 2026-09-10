const fs = require('fs');

let text = fs.readFileSync('index.html', 'utf8');

// The problematic script block is the one with `branchesTsvData`
const scriptStart = text.indexOf('const branchesTsvData');
if (scriptStart !== -1) {
    const scriptEnd = text.indexOf('</script>', scriptStart);
    let scriptBlock = text.substring(scriptStart, scriptEnd);

    // Fix the split logic
    scriptBlock = scriptBlock.replace(/split\('\\\\n'\)/g, "split('\\n')");
    scriptBlock = scriptBlock.replace(/split\('\\\\t'\)/g, "split('\\t')");

    // Fix the escaped backticks and template variables
    scriptBlock = scriptBlock.replace(/\\`/g, '`');
    scriptBlock = scriptBlock.replace(/\\\$\{/g, '${');

    // Put it back
    text = text.substring(0, scriptStart) + scriptBlock + text.substring(scriptEnd);
    fs.writeFileSync('index.html', text);
    console.log("Successfully fixed the JS syntax error in index.html");
} else {
    console.log("Could not find the script block in index.html");
}
