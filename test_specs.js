const fs = require('fs');
const d = fs.readFileSync('data.js', 'utf8');
const arStart = d.indexOf('const AR=[');
const csStart = d.indexOf('const CS=[');

const arStr = d.substring(arStart + 9, csStart - 2); // 9 for "const AR="
const ar = JSON.parse(arStr);

let noSpecs = [];
for (let prod of ar) {
  if (!prod.d) {
    noSpecs.push(prod.s);
    continue;
  }
  const specPairs = prod.d.split(' | ').filter(Boolean).map(part => {
    const raw = part.trim();
    if (!raw) return null;
    const ci = raw.indexOf(':');
    if (ci > 0) return true;
    const numPrefix = raw.match(/^([\d.,]+)\s*(.+)/);
    if (numPrefix) return true;
    
    const nraw = raw.replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي').toLowerCase();
    const PLAIN_NOISE = ['برنامج ', 'مؤشر ', 'زر ', 'شاشة عرض', 'إمكانية', 'امكانيه', 'خيار', '- مؤشر', '- زر', 'استخدام الاقراص'];
    if (PLAIN_NOISE.some(n => nraw.startsWith(n.replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي').toLowerCase()))) return null;
    return true;
  }).filter(Boolean);
  
  if (specPairs.length === 0) {
    noSpecs.push(prod.s);
  }
}
console.log(`Total SKUs: ${ar.length}`);
console.log(`SKUs with NO specs: ${noSpecs.length}`);
if (noSpecs.length > 0) {
  console.log('Examples: ', noSpecs.slice(0, 50));
}
