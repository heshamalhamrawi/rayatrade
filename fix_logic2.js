const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex1 = /function findProduct\(q, cat\)\{[\s\S]*?return bs>=4 \? best : null;\s*\}/;

const replacement1 = `function findProduct(q, cat){
    const nq = norm(q);
    if(!nq) return null;
    // exact SKU
    let p = AR.find(x=>norm(x.s)===nq && (!cat || x.t===cat));
    if(p) return p;
    // contains SKU
    p = AR.find(x=>(norm(x.s).includes(nq)||nq.includes(norm(x.s))) && (!cat || x.t===cat));
    if(p) return p;
    // by name
    let best=null, bs=0;
    for(const x of AR){
      if(cat && x.t !== cat) continue; // STRICT CATEGORY LOCK!
      const s = fuzzyMatch(nq, norm((x.n||'')+' '+x.s));
      if(s>bs){ bs=s; best=x; }
    }
    // Prevent generic 1-word queries from matching products randomly
    const tokenCount = nq.split(/\\s+/).filter(t=>t.length>=2).length;
    const minScore = tokenCount <= 1 ? 8 : 6;
    return bs>=minScore ? best : null;
  }`;

if (regex1.test(html)) {
    html = html.replace(regex1, replacement1);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Target 1 replaced using regex.");
} else {
    console.log("Target 1 STILL NOT FOUND!");
}
