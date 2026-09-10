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

// Now find <!-- SECTION: DELIVERY GUEST -->
const deliveryIdx = newHtml.indexOf('<!-- SECTION: DELIVERY GUEST -->');
if (deliveryIdx === -1) {
    console.log("Could not find delivery guest");
    process.exit(1);
}

// Find the END of DELIVERY GUEST.
// Delivery guest ends just before `</div> <!-- end manualContent -->` or similar.
// Let's just place it IMMEDIATELY AFTER the delivery guest div closes.
// Delivery guest starts at deliveryIdx. Find the next `<!-- ` which would be a comment after it.
const nextCommentIdx = newHtml.indexOf('<!-- ', deliveryIdx + 50);

// We will insert it BEFORE the next comment
newHtml = newHtml.substring(0, nextCommentIdx) + '\n\n' + branchesContent + '\n\n' + newHtml.substring(nextCommentIdx);

fs.writeFileSync('index.html', newHtml);
console.log("Successfully moved branches to the end");
