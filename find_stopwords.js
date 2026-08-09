const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const regex = /const stopWordsEx = \['ما','هي'/;
if (regex.test(content)) {
    const startIdx = content.indexOf('const stopWordsEx =');
    const endIdx = content.indexOf(']', startIdx);
    console.log(content.substring(startIdx, endIdx + 1));
} else {
    console.log('Not found');
}
