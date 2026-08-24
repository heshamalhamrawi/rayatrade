global.DEF_SYN = [];
const fs = require('fs');

// Read data.js and evaluate it to load AR, DEF_SYN, etc.
const dataContent = fs.readFileSync('data.js', 'utf8');
eval(dataContent); // This will load AR, FAB, DEF_SYN, etc. into global scope

// Mock L1 and L2
global.L1 = 'all';
global.L2 = null;
global.getL2Types = () => null;
global.lev = function(a, b) {
    if (!a || !b) return (a || b || '').length;
    if (a === b) return 0;
    const m = [];
    for (let i = 0; i <= b.length; i++) m[i] = [i];
    for (let j = 0; j <= a.length; j++) m[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) m[i][j] = m[i - 1][j - 1];
            else m[i][j] = Math.min(m[i - 1][j - 1] + 1, Math.min(m[i][j - 1] + 1, m[i - 1][j] + 1));
        }
    }
    return m[b.length][a.length];
};

function norm(t) {
  if (!t) return '';
  return String(t).toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي')
    .replace(/[™®©]/g, '')
    .replace(/\s+/g, ' ').trim();
}

function expandQ(q) {
  const nq = norm(q); const terms = new Set([nq]);
  const nqWords = nq.split(/\s+/);
  for (const grp of DEF_SYN) {
    const ng = grp.map(norm);
    if (ng.some(w => {
      if (w === nq || nqWords.includes(w)) return true;
      const wWords = w.split(/\s+/);
      return wWords.includes(nq);
    })) {
      ng.forEach(w => terms.add(w));
    }
  }
  return [...terms];
}

function filterByL1L2(p) {
  if (L1 === 'all') return true;
  const groupTypes = {
    MDA: ['البوتجازات', 'الثلاجات', 'الفريزرات', 'الغسالات', 'غسالات الاطباق', 'افران بلت ان', 'شفاط بلت ان', 'مسطح بلت ان', 'تكيفات'],
    SDA: ['سخان مياه', 'خلاطات', 'العصارات', 'صانع ومحضر القهوة', 'ادوات فرد الشعر', 'مصفف الشعر', 'مجفف الشعر', 'ماكينات الحلاقة', 'المكواه', 'غلايات المياة', 'المراوح', 'المكانس', 'القلايات', 'محضر الطعام', 'مبرد المياه', 'الميكسر', 'المفرمة', 'الشوايات'],
    ELEC: ['التلفزيونات', 'الشاشات', 'لاب توب', 'الموبايل & التابلت', 'الموبايل & التابلت IOS', 'المسرح المنزلى', 'اجهزة الالعاب', 'ادوات المنزل الذكي', 'السماعات & مكبرات الصوت'],
  };
  const allowed = groupTypes[L1] || [];
  if (!allowed.includes(p.t)) return false;
  if (L2) {
    const l2Types = getL2Types();
    if (l2Types && !l2Types.includes(p.t)) return false;
  }
  return true;
}

function searchAR(q) {
  if (!q) return AR.filter(p => filterByL1L2(p));
  const terms = expandQ(q);
  const results = [];

  for (const p of AR) {
    if (!filterByL1L2(p)) continue;

    const h = norm(p.s + ' ' + p.n + ' ' + p.d + ' ' + p.t);
    let score = Infinity;

    // 1. Exact Match
    const pName = norm(p.n);
    const pSku = norm(p.s);
    for (const t of terms) {
      if (pSku === t || pName === t) { score = 0; break; }
      if (pSku.includes(t) || pName.includes(t)) { score = Math.min(score, 0.8); }
      if (h.includes(t)) {
        if (t === norm(q) || t.includes(' ')) {
          score = Math.min(score, 0.9);
        } else {
          score = Math.min(score, 2);
        }
      }
    }

    // 2. Fuzzy Match on product name
    if (score > 0) {
      const pName = norm(p.n);
      for (const t of terms) {
        if (t.length >= 3) {
          const d = lev(t, pName);
          const thresh = Math.floor(Math.min(t.length, pName.length) * 0.25);
          if (d <= thresh) { score = Math.min(score, d); continue; }

          for (const w of pName.split(' ')) {
            if (w.length >= 3) {
              const d2 = lev(t, w);
              const thresh2 = Math.floor(Math.min(t.length, w.length) * 0.25);
              if (d2 <= thresh2) {
                score = Math.min(score, d2 + 0.5);
              }
            }
          }
        }
      }
    }

    if (score < Infinity) results.push({ p, score });
  }

  results.sort((a, b) => a.score - b.score);

  const exacts = results.filter(r => r.score === 0);
  if (exacts.length > 0) return exacts.map(r => r.p);

  if (results.length && results[0].score <= 1) {
    return results.filter(r => r.score <= 1).map(r => r.p);
  }
  return results.map(r => r.p);
}

const res = searchAR("6610DE");
console.log("Search results for 6610DE:", res);

