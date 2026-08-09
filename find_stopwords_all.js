const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes("['ما','هي'")) {
        console.log(`Line ${i+1}: ${line.trim().substring(0, 50)}...`);
    }
});
