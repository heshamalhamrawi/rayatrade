const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find the start and end of sec-branches-directory
const branchStartStr = '<!-- SECTION: BRANCHES DIRECTORY -->';
let startIdx = indexHtml.indexOf(branchStartStr);
if (startIdx === -1) {
    console.log("Could not find start");
    process.exit(1);
}

// Find the end of sec-branches-directory
const branchEndStr = '<!-- SECTION: OWNER DICTIONARY -->';
let endIdx = indexHtml.indexOf(branchEndStr, startIdx);
if (endIdx === -1) {
    console.log("Could not find end");
    process.exit(1);
}

// Extract the branches directory content
const branchesContent = indexHtml.substring(startIdx, endIdx);

// Remove it from its current location
let newHtml = indexHtml.substring(0, startIdx) + indexHtml.substring(endIdx);

// Find the end of manualContent. 
// We know manualContent ends with the close of the div before "<!-- FOOTER -->" or similar.
// Let's find <!-- SECTION: TARIFF & ROAMING --> which is a known section towards the end.
const footerIdx = newHtml.indexOf('<!-- ── SECTION: TARIFF & ROAMING ── -->');
if (footerIdx === -1) {
    console.log("Could not find footer boundary");
    process.exit(1);
}

// Insert branchesContent right before <!-- SECTION: TARIFF & ROAMING -->
// Wait, TARIFF & ROAMING is also inside manualContent.
// Let's just insert it right before <!-- ── SECTION: TARIFF & ROAMING ── -->
newHtml = newHtml.substring(0, footerIdx) + branchesContent + '\n' + newHtml.substring(footerIdx);

fs.writeFileSync('index.html', newHtml);
console.log("Successfully moved branches to the end");
