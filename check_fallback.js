const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const searchStr = 'عذراً طلبك غير متاح';
let idx = content.indexOf(searchStr);
while (idx !== -1) {
    console.log(content.substring(Math.max(0, idx - 50), idx + 150));
    idx = content.indexOf(searchStr, idx + 1);
}
