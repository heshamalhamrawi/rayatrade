
const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
try {
    const originalBytes = Buffer.from(text, 'binary');
    const originalText = originalBytes.toString('utf8');
    fs.writeFileSync('index.html', originalText, 'utf8');
    console.log('Fixed encoding!');
} catch (e) {
    console.log('Failed:', e);
}

