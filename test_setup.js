const fs=require('fs');
let c=fs.readFileSync('index.html','utf8'); 
let mainScript = c.match(/<script>([\s\S]*?)<\/script>/g).join('\n').replace(/<\/?script>/g, '');
const ARStr = fs.readFileSync('data.js','utf8').match(/const AR\s*=\s*\[(.*?)\];/s)[1];
const AR = JSON.parse('[' + ARStr + ']');
let full = mainScript + '\n' + 'try { console.log("RUNNING"); let s = AR.find(x=>x.s === "ST387E"); let h = renderSKUResult(s); console.log("SUCCESS, length:", h.length); } catch(e) { console.log("ERROR", e.stack); }';
fs.writeFileSync('test_render2.js', full);
