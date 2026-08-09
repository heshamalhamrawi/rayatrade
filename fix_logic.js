const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replacement 1: findProduct
const target1 = `function findProduct(q, cat){
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
    return bs>=4 ? best : null;
  }`;

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

// Replacement 2: respond - Feature hit decoupled
// Let's use regex to find the feature block
const regex2 = /if\(feats\.length && feats\[0\]\.score >= 6\)\{[\s\S]*?if\(prod && prod\.t\) out \+= renderUpsellBlock\(prod\) \+ renderCrossSellBlock\(prod\);\s*return out;\s*\}/;

const replacement2 = `if(feats.length && feats[0].score >= 6){
      const it = feats[0].item;
      _ctx.feat = it; _ctx.cat = it.c || null; _ctx.catType = cat;
      const prods = productsByFeature(it, cat);
      let out = renderFeatureHit(it, prods, it.f);
      // Decouple: Only append cross-sell if the query was explicitly a multi-word product search, not a generic feature query.
      const tokenCount = nq_clean.split(/\\s+/).filter(t=>t.length>=2).length;
      if(prod && prod.t && tokenCount >= 2) {
          out += renderUpsellBlock(prod) + renderCrossSellBlock(prod);
      }
      return out;
    }`;

let replaced = false;
if (html.includes(target1)) {
    html = html.replace(target1, replacement1);
    console.log("Target 1 replaced.");
    replaced = true;
} else {
    console.log("Target 1 NOT FOUND!");
}

if (regex2.test(html)) {
    html = html.replace(regex2, replacement2);
    console.log("Target 2 replaced.");
    replaced = true;
} else {
    console.log("Target 2 NOT FOUND!");
}

if (replaced) {
    fs.writeFileSync('index.html', html, 'utf8');
}
