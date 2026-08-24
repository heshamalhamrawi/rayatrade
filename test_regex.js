function escRe(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

function findExact(q, sku) {
  const nq = q.toLowerCase();
  const s = sku.toLowerCase();
  
  if (s === nq) return true;
  
  const regex = new RegExp(`(^|[-\\s_])` + escRe(nq) + `([-\\s_]|$)`, 'i');
  return regex.test(s);
}

console.log("MT-P18T in MT-P18T-Acs: ", findExact("MT-P18T", "MT-P18T-Acs"));
console.log("3MXWEA18TB100AA in 3MXWEA18TB100AA-3TXKEA18TB100AA-0TR00H0000A1-Acs Group: ", findExact("3MXWEA18TB100AA", "3MXWEA18TB100AA-3TXKEA18TB100AA-0TR00H0000A1-Acs Group"));
console.log("100A in 3MXWEA18TB100AA: ", findExact("100A", "3MXWEA18TB100AA"));
