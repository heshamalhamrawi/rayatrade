const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startIdx = html.indexOf('function renderFeatureHit(item, prods, corrected){');
const endIdx = html.indexOf('// Fallback: single strongest FAB match across everything');

if (startIdx !== -1 && endIdx !== -1) {
    const fixedCode = `function renderFeatureHit(item, prods, corrected){
    const maxVisible = 3;
    let listHTML = '';
    
    if (prods.length > 0) {
      const visibleProds = prods.slice(0, maxVisible);
      const hiddenProds = prods.slice(maxVisible);
      
      listHTML += visibleProds.map(renderProductCard).join('');
      
      if (hiddenProds.length > 0) {
        const uid = 'more_' + Math.random().toString(36).substr(2,9);
        listHTML += \`
          <button class="cbot-show-more-btn" style="width:100%; background:#EEF2F7; color:#0A2540; border:1px solid #DDE4EE; border-radius:8px; padding:8px; font-weight:bold; cursor:pointer; margin-top:8px; font-family:inherit;" onclick="document.getElementById('\${uid}').style.display='block'; this.style.display='none';">عرض باقي الأجهزة (\${hiddenProds.length}) ⬇️</button>
          <div id="\${uid}" style="display:none; margin-top:12px; border-top:1px dashed #DDE4EE; padding-top:12px;">
            <div style="margin-bottom:8px; font-size:12px; color:#0B6E6E; font-weight:bold;">💡 ابحث داخل النتائج للمستشار:</div>
            <div style="position:relative; margin-bottom:10px;">
              <span style="position:absolute; right:10px; top:8px; opacity:0.6;">🔍</span>
              <input type="text" placeholder="مثال: شارب، انفرتر..." onkeyup="window.filterCbotList(this, '\${uid}-list')" style="width:100%; box-sizing:border-box; padding:8px 30px 8px 10px; border-radius:8px; border:1px solid #0B6E6E; font-family:inherit; font-size:13px; outline:none; background:#fff;">
            </div>
            <div id="\${uid}-list" class="cbot-list" style="max-height:220px; overflow-y:auto; padding-right:4px; display:flex; flex-direction:column; gap:6px;">
              \${hiddenProds.map(renderProductCard).join('')}
            </div>
          </div>
        \`;
      }
    }

    const corr = corrected ? \`<div class="cbot-corr">🔎 تصحيح تلقائي: <b>\${esc2(corrected)}</b></div>\` : '';
    return \`<div class="cbot-blk">
      \${corr}
      <div class="cbot-blk-h" style="font-size:16px;">✨ \${esc2(item.f)} <span class="cbot-cat">\${esc2(item.c)}</span></div>
      <div class="cbot-fab" style="border-inline-start:4px solid #14b8a6; background:#f0fdfa; padding:12px;">
        <div class="cbot-fab-a" style="font-size:14px; margin-bottom:8px;"><b>الخاصية:</b> \${esc2(item.a)}</div>
        <div class="cbot-fab-b"><b>💬 كلم مستشارك بها:</b> \${esc2(item.b)}</div>
      </div>
      <div class="cbot-cnt" style="margin-top:12px;">🎯 عدد الأجهزة المطابقة: <b>\${prods.length}</b></div>
      <div class="cbot-list" style="overflow:visible; max-height:none;">\${listHTML||'<div class="cbot-empty">لا توجد أجهزة مطابقة حالياً.</div>'}</div>
    </div>\`;
  }

  function renderUpsellBlock(p){
    const {rules, products} = upsellFor(p);
    if(!rules.length && !products.length) return '';
    const r = rules.map(u=>\`
      <div class="cbot-us-row">
        <div><span class="cbot-us-arrow">\${esc2(u.from)} ← \${esc2(u.to)}</span>
        <span class="cbot-pri cbot-pri-\${norm(u.priority)}">\${esc2(u.priority)}</span></div>
        <div class="cbot-us-why">💡 <b>حجة الترقية:</b> \${esc2(u.reason)}</div>
      </div>\`).join('');
    const pl = products.map(renderProductCard).join('');
    return \`<div class="cbot-blk cbot-us">
      <div class="cbot-blk-h">⬆️ فرص البيع الارتقائي (Upsell)</div>
      \${r}
      \${pl?\`<div class="cbot-us-alt"><b>موديلات أعلى ننصح بها:</b></div><div class="cbot-list">\${pl}</div>\` : ''}
    </div>\`;
  }

  function renderCrossSellBlock(p){
    const cs = crossSellFor(p);
    if(!cs.length) return '';
    const rows = cs.map(c=>\`
      <div class="cbot-cs-row">
        <div><span class="cbot-cs-add">➕ \${esc2(c.rec)}</span>
        <span class="cbot-pri cbot-pri-\${norm(c.priority)}">\${esc2(c.priority)}</span></div>
        <div class="cbot-us-why">🛍️ <b>عرض الباقة:</b> \${esc2(c.reason)}</div>
      </div>\`).join('');
    return \`<div class="cbot-blk cbot-cs">
      <div class="cbot-blk-h">🔗 فرص البيع المتقاطع (Cross-Sell)</div>
      \${rows}
    </div>\`;
  }

  // ---------- Query router ----------
  const _ctx = { cat:null, feat:null, catType:null };

  function respond(q){
    q = String(q||'').trim();
    if(!q) return \`<div class="cbot-hint">اسأل مستشارنا الذكي أي سؤال 🎓 — مثال: "أفضل غسالة فيها انفرتر" أو "قارن بين X و Y"</div>\`;

    const pair = parseCompare(q);
    if(pair){
      const [a,b] = pair;
      _ctx.cat = TYPE_TO_FABCAT[a.t]||null; _ctx.catType = a.t; _ctx.feat = null;
      return renderCompare(a,b) + renderUpsellBlock(a) + renderCrossSellBlock(a);
    }

    const cat  = detectCategory(q);
    const nq = norm(q);
    let nq_clean = nq;
    if (cat) {
        const catAlias = CAT_ALIASES.find(a => a.t === cat);
        if (catAlias) {
            const sortedKw = catAlias.kw.map(norm).sort((a,b)=>b.length - a.length);
            for(const k of sortedKw){
               nq_clean = nq_clean.replace(new RegExp(\`\\\\b\${k}\\\\b\`, 'g'), ' ');
            }
        }
    }
    const stopWordsEx = ['ما','هي','كيف','مميزات','عيوب','ماهي','هل','يوجد','قارن','بين','و','عن','في','فى','خاصية','تقنية','الفرق','افضل','أفضل','احسن','أحسن','ارخص','أرخص','اغلى','أغلى','عايز','عاوز','اريد','أريد','ابحث','أبحث','من','ب','ل','ان','أن','انا','أنا','لو','سمحت','ممكن', 'تكون', 'فيها', 'فيه', 'يكون', 'موجود', 'بها', 'به', 'تحتوي', 'يحتوي', 'تتميز', 'يتميز', 'هات', 'عندي', 'معايا', 'اقدر', 'أقدر', 'وريني', 'ورينى'];
    stopWordsEx.forEach(w => { nq_clean = nq_clean.replace(new RegExp(\`\\\\b\${norm(w)}\\\\b\`,'g'), ' '); });
    nq_clean = nq_clean.replace(/\s+/g, ' ').trim();

    const searchQ = nq_clean.length > 0 ? nq_clean : q;

    const prod = findProduct(searchQ, cat);
    const feats = detectFeatures(searchQ, cat);

    const allFeats = detectFeatures(searchQ, null);
    let detectedCats = new Set();
    CAT_ALIASES.forEach(alias => {
        alias.kw.forEach(k => {
            if (nq.includes(norm(k))) detectedCats.add(alias.t);
        });
    });

    if (detectedCats.size >= 2) {
        return \`<div class="cbot-empty">عذراً طلبك غير متاح. لا يمكن خلط أجهزة من فئات مختلفة في نفس الطلب.</div>\`;
    }

    if (cat && allFeats.length && allFeats[0].score >= 8) {
       const userCat = TYPE_TO_FABCAT[cat]; 
       const bestGlobal = allFeats[0];
       const bestCatScore = feats.length ? feats[0].score : 0;
       
       if (userCat && bestGlobal.item.c && bestGlobal.item.c !== userCat && bestGlobal.score >= 12 && bestCatScore < bestGlobal.score * 0.6) {
           const queryTerms = expandQ(nq);
           const possibleProds = productsByCategory(cat).filter(p => queryTerms.every(t => norm(p.n + ' ' + p.d).includes(t)));
           if (possibleProds.length === 0) {
               return \`<div class="cbot-empty">عذراً طلبك غير متاح. لا توجد أجهزة تجمع بين مواصفات <b>\${esc2(cat)}</b> وميزة <b>\${esc2(bestGlobal.item.f)}</b>.</div>\`;
           }
       }
    }

    if(feats.length && feats[0].score >= 6){
      const it = feats[0].item;
      _ctx.feat = it; _ctx.cat = it.c || null; _ctx.catType = cat;
      const prods = productsByFeature(it, cat);
      let out = renderFeatureHit(it, prods, it.f);
      if(prod && prod.t) out += renderUpsellBlock(prod) + renderCrossSellBlock(prod);
      return out;
    }

    if(prod){
      _ctx.catType = prod.t; _ctx.cat = TYPE_TO_FABCAT[prod.t]||null; _ctx.feat = null;
      const feats0 = FAB_IDX.filter(it=>{
        const dn = norm(prod.d);
        return (it.pk||[]).some(k=>k.length>=5 && dn.includes(k));
      });
      const fabList = feats0.map(f=>\`<li><b>\${esc2(f.f)}:</b> \${esc2(f.b)}</li>\`).join('');
      return \`<div class="cbot-blk">
        <div class="cbot-blk-h">📱 \${esc2(prod.s)} — \${esc2(prod.t)}</div>
        <div class="cbot-prod-n">\${esc2(prod.n||'')}</div>
        \${fabList?\`<div class="cbot-fab-list"><b>أبرز نقاط البيع (FAB):</b><ul>\${fabList}</ul></div>\` : ''}
      </div>\${renderUpsellBlock(prod)}\${renderCrossSellBlock(prod)}\`;
    }

    if(cat){
      if(nq_clean.length > 0) {
          return \`<div class="cbot-empty">عذراً طلبك غير متاح. لم نتمكن من العثور على أجهزة تطابق <b>\${esc2(q)}</b>.</div>\`;
      }
      _ctx.catType = cat; _ctx.cat = TYPE_TO_FABCAT[cat]||null; _ctx.feat = null;
      const prods = productsByCategory(cat);
      
      const maxVisible = 3;
      let listHTML = '';
      if (prods.length > 0) {
        const visibleProds = prods.slice(0, maxVisible);
        const hiddenProds = prods.slice(maxVisible);
        
        listHTML += visibleProds.map(renderProductCard).join('');
        
        if (hiddenProds.length > 0) {
          const uid = 'morecat_' + Math.random().toString(36).substr(2,9);
          listHTML += \`
            <button class="cbot-show-more-btn" style="width:100%; background:#EEF2F7; color:#0A2540; border:1px solid #DDE4EE; border-radius:8px; padding:8px; font-weight:bold; cursor:pointer; margin-top:8px; font-family:inherit;" onclick="document.getElementById('\${uid}').style.display='block'; this.style.display='none';">عرض باقي الأجهزة (\${hiddenProds.length}) ⬇️</button>
            <div id="\${uid}" style="display:none; margin-top:12px; border-top:1px dashed #DDE4EE; padding-top:12px;">
              <div style="margin-bottom:8px; font-size:12px; color:#0B6E6E; font-weight:bold;">💡 ابحث داخل الأجهزة المتاحة:</div>
              <div style="position:relative; margin-bottom:10px;">
                <span style="position:absolute; right:10px; top:8px; opacity:0.6;">🔍</span>
                <input type="text" placeholder="مثال: سامسونج، 14 قدم..." onkeyup="window.filterCbotList(this, '\${uid}-list')" style="width:100%; box-sizing:border-box; padding:8px 30px 8px 10px; border-radius:8px; border:1px solid #0B6E6E; font-family:inherit; font-size:13px; outline:none; background:#fff;">
              </div>
              <div id="\${uid}-list" class="cbot-list" style="max-height:220px; overflow-y:auto; padding-right:4px; display:flex; flex-direction:column; gap:6px;">
                \${hiddenProds.map(renderProductCard).join('')}
              </div>
            </div>
          \`;
        }
      }

      return \`<div class="cbot-blk">
        <div class="cbot-blk-h">🗂️ \${esc2(cat)} — \${prods.length} جهاز متاح</div>
        <div class="cbot-list" style="overflow:visible; max-height:none;">\${listHTML||'<div class="cbot-empty">لا توجد نتائج.</div>'}</div>
      </div>\`;
    }

    
`
    html = html.substring(0, startIdx) + fixedCode + html.substring(endIdx);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Fixed file successfully.');
} else {
    console.log('Could not find start or end index.');
}
