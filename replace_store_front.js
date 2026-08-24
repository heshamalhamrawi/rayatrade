const fs = require('fs');

const indexHtmlPath = 'index.html';
const replacementPath = 'store_front_content.html';

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const replacement = fs.readFileSync(replacementPath, 'utf8');

// Find start marker
const startMarker = '<!-- ===== Content: card_language ===== -->';
let startIndex = indexHtml.indexOf(startMarker);

if (startIndex !== -1) {
    // Back up to the start of the line for startIndex to include indentation
    while (startIndex > 0 && indexHtml[startIndex - 1] !== '\n') {
        startIndex--;
    }
    
    // Find end marker: We need the closing div of sub-protocol-display_rules
    const endMarkerStr = '<!-- ── SECTION: HOUSE GUARD ── -->';
    const houseGuardIndex = indexHtml.indexOf(endMarkerStr);
    
    if (houseGuardIndex !== -1) {
        // Find the last </div> before HOUSE GUARD that belongs to our section
        // Specifically, we want to replace up to the end of sub-protocol-display_rules
        
        const sectionDisplayRulesEnd = indexHtml.lastIndexOf('</div>', houseGuardIndex);
        // Actually, it's easier to use a regex or string replacement with slice
        
        // Let's find the specific end of the display_rules block
        const targetEndStr = '              </div>\n\n            </div>\n          </div>\n        </div>';
        
        let endIndex = indexHtml.indexOf(targetEndStr, startIndex);
        if (endIndex === -1) {
            // Try with \r\n
            const targetEndStrRN = '              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>';
            endIndex = indexHtml.indexOf(targetEndStrRN, startIndex);
        }
        
        if (endIndex !== -1) {
            const beforeStr = indexHtml.substring(0, startIndex);
            const afterStr = indexHtml.substring(endIndex);
            const newHtml = beforeStr + replacement + afterStr;
            fs.writeFileSync(indexHtmlPath, newHtml, 'utf8');
            console.log('Replacement successful.');
        } else {
            console.log('Error: Could not find exact end index block before house guard.');
        }
    } else {
        console.log('Error: Could not find house guard marker');
    }
} else {
    console.log('Error: Could not find startMarker');
}
