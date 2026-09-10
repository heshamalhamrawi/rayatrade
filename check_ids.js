const fs = require('fs');
const t = fs.readFileSync('index.html', 'utf8');
const ids = ['searchInput', 'searchClear', 'searchStats', 'searchResults', 'manualContent'];
ids.forEach(id => console.log(id, t.includes('id="' + id + '"')));
