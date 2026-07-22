import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1
oldSpecMap = "String(p.d||'').split('|').forEach(part=>{"
newSpecMap = "String(p.d||'').replace(/<[^>]*>?/gm, '').split('|').forEach(part=>{"
content = content.replace(oldSpecMap, newSpecMap)

# 2
oldSmartCompare = "String(p.d||'').split('|').forEach(s => {"
newSmartCompare = "String(p.d||'').replace(/<[^>]*>?/gm, '').split('|').forEach(s => {"
content = content.replace(oldSmartCompare, newSmartCompare)

# 3
oldGenFab = '''  // 21. Dynamic Generic Fallback (True AI-style variance with Contextual Injection)
  else {
    const vc = v ? v.trim() : '';'''
newGenFab = '''  // 21. Dynamic Generic Fallback (True AI-style variance with Contextual Injection)
  else {
    return null;
    const vc = v ? v.trim() : '';'''
content = content.replace(oldGenFab, newGenFab)

# 4
oldRenderCard = '''    if(fileFAB){
      fabEntry=fileFAB;
    } else {
      fabEntry=generateFAB(k, v, p.t, p.n);
    }

    const isAI=!fileFAB;'''
newRenderCard = '''    if(fileFAB){
      fabEntry=fileFAB;
    } else {
      fabEntry=generateFAB(k, v, p.t, p.n);
    }
    
    if(!fabEntry) return;

    const isAI=!fileFAB;'''
content = content.replace(oldRenderCard, newRenderCard)

# 5
oldRenderSKU = '''    } else {
      // AI Generation - same tone as file
      const gen=generateFAB(k,v,prod.t,prod.n);
      const safeBen=gen.b.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'").replace(/\\n/g,' ');'''
newRenderSKU = '''    } else {
      // AI Generation - same tone as file
      const gen=generateFAB(k,v,prod.t,prod.n);
      if(!gen) return;
      const safeBen=gen.b.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'").replace(/\\n/g,' ');'''
content = content.replace(oldRenderSKU, newRenderSKU)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied Python fixes")
