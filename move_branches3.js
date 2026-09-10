const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Find the start and end of sec-branches-directory
const branchStartStr = '<!-- SECTION: BRANCHES DIRECTORY -->';
let startIdx = indexHtml.indexOf(branchStartStr);
const branchEndStr = '<!-- SECTION: OWNER DICTIONARY -->'; // Wait, it's no longer before OWNER DICTIONARY.
// Let's just extract it by finding the start, and we know it ends right before `</div>` that closes it.
// Actually, let's just find the next <!-- SECTION:
let endIdx = indexHtml.indexOf('<!--', startIdx + 50);

const branchesContent = indexHtml.substring(startIdx, endIdx);

// Remove it
let newHtml = indexHtml.substring(0, startIdx) + indexHtml.substring(endIdx);

// Insert it at the TOP of manualContent
const manualIdx = newHtml.indexOf('<div class="manual-content" id="manualContent">');
if (manualIdx !== -1) {
    const insertIdx = newHtml.indexOf('>', manualIdx) + 1;
    newHtml = newHtml.substring(0, insertIdx) + '\n\n' + branchesContent + '\n\n' + newHtml.substring(insertIdx);
    fs.writeFileSync('index.html', newHtml);
    console.log("Moved to the top of manualContent!");
} else {
    console.log("Could not find manualContent");
}
