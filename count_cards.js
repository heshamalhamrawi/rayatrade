const fs = require('fs');
const t = fs.readFileSync('index.html', 'utf8');
console.log('branch cards count:', (t.match(/class="branch-card"/g) || []).length);
console.log('sec-branches-directory count:', (t.match(/sec-branches-directory/g) || []).length);
