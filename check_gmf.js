const fs = require('fs');
const code = fs.readFileSync('data.js', 'utf8');

function norm(t) {
  if (!t) return '';
  return String(t).toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي')
    .replace(/[™®©]/g, '')
    .replace(/\s+/g, ' ').trim();
}

function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// Extract ALL SKUs from data.js using multiple strategies
// Strategy 1: standard JSON format
const regex1 = /\{"s":"([^"]+)","n":"([^"\\]|\\.)*","d":("(?:[^"\\]|\\.)*"),"t":"([^"]+)"\}/g;
const AR = [];
let m;
while ((m = regex1.exec(code)) !== null) {
  AR.push({ s: m[1], t: m[4] });
}

// Also try simpler extraction for s field
const sRegex = /"s":"([^"]+)"/g;
const allSvals = new Set();
while ((m = sRegex.exec(code)) !== null) {
  allSvals.add(m[1]);
}

console.log('SKUs with full data:', AR.length);
console.log('All s values found:', allSvals.size);

// Build normalized lookup
const normLookup = {};
allSvals.forEach(s => {
  normLookup[norm(s)] = s;
  normLookup[norm(s).replace(/\s+/g, '')] = s;
});

// Simulate findExactSKU
function findExactSKU(q) {
  if (!q || q.length < 4) return null;
  const nq = norm(q);
  const nqNoSpace = nq.replace(/\s+/g, '');
  
  if (normLookup[nq]) return normLookup[nq];
  if (normLookup[nqNoSpace]) return normLookup[nqNoSpace];
  
  // Embedded in compound
  const regex = new RegExp(`(^|-)` + escRe(nqNoSpace) + `(-|$)`, 'i');
  const found = [...allSvals].find(s => regex.test(norm(s).replace(/\s+/g, '')));
  return found || null;
}

// All 299 SKUs
const toCheck = `C6090SS-2SC-511-IDSP
Kiriazi-6400-Steel
Fresh-500002900
Fresh-500002971
C6080SS-AP-447-L-F
C6080SS-AC-511-ID
C6060GS-AC-383-IDSH-S
C6090GS-AC-383-IDSH-S
C6080GS-AC383IDSHS2W
C6060SS-AC-511-ID
C6090SS-DC-511-IDSC-S
C6090SS-2GC-511-IDSP
C6090SS-FC-511-I-F
UFS18-VR-B
7350063030043
E220-White
KH235VF-Steel
E250N6/3-Silver
RZ92HDASP
GF-18H-S
KH225CF
KH338CF-White
E230N5/3-Silver
GF-22H-S
GF-22H-Gold
Fresh-500003324
UC-210
GF-18H-White
GF-18H-Gold
E210N4/3-Silver
TS505
GC1022/40
TS320C
740617246063
740617246247
740617246155
740617245974
740617175011
Braun-G1300
Braun-J300
CJ3050
HM430
JB3060
HR1398/80
JE680
JE720
SM650
CJ3000
MQ5037
FX3030
MX900/2
HR1823/70
HM330
HG230
HM3000WH
HM3105
JKP250-F
BL440
JKP250
80T70001AX
HP6422/01
HP8232/03
HS24306A
ST326E
ST327E
BHD004/00
HP6423/00
2736E
QG3362
2655E
ST387E
AT620/14
6610DE
ST325
6609E
E650
6611E
6604E
HP8323
ST330E
NT3160KA
8806086571920
8806088120317
4712900036879
M10BK-EC
6901443109982
8806088000640
8806088113661
6901443109975
M5BK-EC
806088560342
4712900095272
AC150
GR-EF37-J-G
SJ-48C-Champaign
SJ-48C(SL)
RH77H9-7F
RSG5KURS
GR-EF40P-Gold
GR-EF37-J-S
GR-EF37-Silver
GR-EF40P-Silver
GR-EFV45
GR-EFV45-Gold
SJ-PC58A(SL)
KH336LN-Silver-Dig
RT32K5100S8/MR
RT35K5460SP/MR
RT43K6100S8/MR
SJ-48C(BK)
SJ-48C(ST)
RT29K5000S8/MR
KH625LN-Black-INV
RT46K6300S8/MR
RT58K7050SP/MR
RT46K6350SP/MR
RT50K6100S8/MR
RT50K6300S8/MR
RT50K6340SP/MR
RT58K7150SP/MR
RT62K7000SP/MR
RT62K7150SL/MR
RT43K6300S8/MR
RT46K6100S8/MR
RT32K5000S8/MR
RT38K5000SP/MR
GR-EF31-G
GR-EFV35-S
GR-EFV35-G
GR-EF40P-J-S
SJ-PC48A(ST)
SJ-58C(ST)
SJ-58C(BK)
SJ-PC58A-CH-N
RS53K4600SA
SJ-PC58A(BK)
KH540LN- Gold
KH690L-Silver-INV
GR-EF46Z-DS
GR-EF40P-H-G
RT32K5400SP/MR
RT38K5460SP/MR
SJ-GP70D-SL
SJ-GP70D-BK
SJ-GP75D-BK
Fresh-500004440
8806088389585
MD-1C-BLK
WA15F7S4UWW
WA18J6750SP
AEW-9790SUP
UW100TPL-SL
UW130TPL-SL
UW700T-S
WA16J6730SS
AEW-1170SP
AEW-8460SP
AEW-9770SUP
VH-1000
VH-1000P
VH-1000S
VH-1210S
VH-720
WA90H4200SW/AS
VH-1210SP
WF70F5E0W2W/AS
WF70F5EHW4X/AS
WF80F5EHW4X/AS
WF70F5E2W4W/AS
WF80F5E0W2W/AS
WF80F5E2W4W/AS
WF90F5EHW2X/AS
VH-620P
VH-620
VH-720P
AEW-DC1300SUP
VH-1230S
AEW-9790SUP(DS)
AEW-DC1700SUP
UW090T-P
UW100S-TF
RPG 9447 SX EX
RPG 9447 S EX
RPG 822 SS EX
XWE 91483X S EU
RPG 822 S EX
XWE81283XSEU
RSG 721 S EX
RSG 721 SS EX
SJ-58C-SL
VC16BSNMARD/GT
VC20AVNDCNC/GT
VC21F50VNAR/GT
VCC5255V3O/EGT
VCC5450V3R/EGT
VCC5480V31/EGT
VC-EA100CV
VCC4470S3O/EG
TCP1805020
VCW7535S31/EGT
UVC-2000A-R
BY110-3
HR1605/00
HD9220/20
HD9320/26
HR7628/00
HR7776/90
6935364050719
6935364050696
6935364070878
BRE650
BHS675
GR-EF37-Gold
TWFL7-V10WS
GR-EF31-S
8806086680585
XWDE961480XS EX
8806086325950
FDW12P-STS
FDW8P-STS
FWMTL10-S
KH256VF-Black
KH540LN- Black
RPD 11657 DS EX
Fresh-500002220
C6090SS-GC-511-IDF-T
Fresh-500005320
Fresh-500004928
8806071740836
UW130TPL-MSL
UW130TPL-TMBK
6954176809483
UW150TPL-MSL
UW100TPL-TMBK
KH235VF-Silver
1A21M9600VA
4968929017270
FFS-BOXER 12
VC20CVNMAPT/GT
GMF-00292
U7Z-00004
U7Z-00014
PW4-00004
GMF-00289
GMF-00294
43U-00004
FF-Ghost Wall18
6957531032038
6901443115310
BH-54-9
1803C001AA
C6060SS-AP-447
GN-C622HLCU
RT43K6330SP/MR
DW60H6050FS/GT
DFN38320X
TU85C31DX
FH4G6TDY6
FH4G6TDY2
KH256VF-Silver
FH2G7QDY5
FH4G6QDY2
Fresh-500004973
GR-EF46Z-N
AEW-DC1300SUP(SS)
Kiriazi-9604F
Fresh-500009734
DSR15B1SEU
GR-EF40P-J-Gold
Fresh-500004442
BH5060C-F-BT
C6060SS-DC-511-IDSC-S
VC18M31A0HP/GT
VC18M21L0S1/GT
VC18M2120SB/GT
VC20M2510WB/GT
VC20M2530WR/GT
WPVC 24 BR
885909627424
CV-970Y
FC8760/61
GC4929/86
HR2096/01
MC-CL565
MC-CG711
BY87
FC8451/01
619659134020
MC-CL563
MC-CG525
6901443147755
HR2165/90
HD4631/20
ST389E
HR1627/01
WK500-Black
AT890/20
NC-SK1
MQ3025`.trim().split('\n').map(s => s.trim());

const results = { found: [], notFound: [] };
toCheck.forEach(sku => {
  const result = findExactSKU(sku);
  if (result) {
    results.found.push({ search: sku, actual: result, match: result === sku ? 'EXACT' : 'NORMALIZED' });
  } else {
    results.notFound.push(sku);
  }
});

console.log('\n=== FINAL RESULTS ===');
console.log(`Found: ${results.found.length}/${toCheck.length}`);
console.log(`Not Found: ${results.notFound.length}`);

if (results.notFound.length > 0) {
  console.log('\nNOT FOUND:');
  results.notFound.forEach(s => console.log(`  ❌ "${s}"`));
}

const normalized = results.found.filter(r => r.match === 'NORMALIZED');
if (normalized.length > 0) {
  console.log('\nFound via normalization (will work with findExactSKU):');
  normalized.forEach(r => console.log(`  ⚡ "${r.search}" → "${r.actual}"`));
}
