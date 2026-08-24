const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Fix escapeRe
const badEscapeRe = `function escapeRe(str) {
  return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\<iframe src="raya_consultant_app.html" style="width:100%; height:85vh; border:none; border-radius:12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); display:block; background: #fff;"></iframe>');
}`;
const goodEscapeRe = `function escapeRe(str) {
  return str.replace(/[.*+?^$\{key\}()|[\\]\\\\]/g, '\\\\$&');
}`;

// Actually it's easier to just use regex for the bad one because I don't know the exact string
html = html.replace(/function escapeRe\(str\) \{[\s\S]*?\}/, `function escapeRe(str) {
  return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
}`);

// 2. Restore house_guard deleted section
// The bad replacement deleted from:
// <div style="background:#fff3cd; border:1px solid #ffc107; padding:12px 16px; border-radius:12px; margin-bottom:18px; text-align:center; font-weight:bold; color:#856404;">
// 🔔 عشان كده دي "رادارات الأمان" اللي لازم تكون شغالة عندك طول ما إنت في الفرع:
// </div>
// ... up to the middle of the rule-list.

const houseGuardRestore = `
                  <div style="background:#fff3cd; border:1px solid #ffc107; padding:12px 16px; border-radius:12px; margin-bottom:18px; text-align:center; font-weight:bold; color:#856404;">
                    🔔 عشان كده دي "رادارات الأمان" اللي لازم تكون شغالة عندك طول ما إنت في الفرع:
                  </div>

                  <!-- Section 1 -->
                  <div style="background:linear-gradient(135deg,#cc0000 0%,#8b0000 100%); color:white; padding:10px 18px; border-radius:12px; font-weight:bold; font-size:15px; text-align:center; margin:18px 0 12px 0;">
                    1 🚨 رادار كشف الخطر (أشهر أنواع الاحتيال في التجزئة)
                  </div>

                  <div class="rule-list" style="margin-bottom:15px;">
                    <li><span class="bullet"></span><strong>التقسيط (اللاكير الأهمر):</strong> عن عميل بيدخل يشتري أجهزة غالية جداً بالتقسيط. لو بالتقسيط لو عشان خاش بيبقع (بالخسارة) بيه الفرع فوراً عشان مش هيمرجع منه حاجة. لو عشان خاذها بيبقع (اللعميل) بيه بره وهيسيبك والفرع فوراً. هيسترجع الأصناف الفعلية. هيرفع شكاوى فعلية.
                    <br><br>
                    وكمان لو كان "العميل الجديد" ده داخل وعنده إصرار غريب على إنهاء البيعة بسرعة بدون أسئلة أو تفصيل.
                    </li>
                    <li><span class="bullet"></span><strong>انتحال الشخصية:</strong> شخص حاجة يشتري بطاقة أو بطين حد تاني دون إذنه (ساعات بيبقى عمل عائلي).</li>
`;

// Find where it was deleted
const searchPoint = `                    "صاحب البيت" مش بس بيعرف يبيع ويكبر فاتورته. ده كمان بيعرف يحمي بيته من أي تلاعب أو غش. وبيحمي نفسه من أي مسألة. ويحمي راية من أي مسألة. الخسارة دي من أي حاجة وبيضيف نفسه منها. وطبعاً أبسطها وأسهلها (تمويل الاستهلاكي) أو تسهيلات أنظمة التقسيط. دي تسهيلات أحياناً بيجذب بها الناس الغلط للانتهاز منهم.
                  </div>

                    <li><span class="bullet"></span><strong>التزوير:</strong> تلاعب في البيانات الجوهرية أو في أرقام القومية (إرسال منفقرات العمل أو النقل التأثير في الرقم القومي نفسه).</li>
`;

const replacePoint = `                    "صاحب البيت" مش بس بيعرف يبيع ويكبر فاتورته. ده كمان بيعرف يحمي بيته من أي تلاعب أو غش. وبيحمي نفسه من أي مسألة. ويحمي راية من أي مسألة. الخسارة دي من أي حاجة وبيضيف نفسه منها. وطبعاً أبسطها وأسهلها (تمويل الاستهلاكي) أو تسهيلات أنظمة التقسيط. دي تسهيلات أحياناً بيجذب بها الناس الغلط للانتهاز منهم.
                  </div>
${houseGuardRestore}                    <li><span class="bullet"></span><strong>التزوير:</strong> تلاعب في البيانات الجوهرية أو في أرقام القومية (إرسال منفقرات العمل أو النقل التأثير في الرقم القومي نفسه).</li>
`;

html = html.replace(searchPoint, replacePoint);

// 3. Fix the toc-chip issue where some sections are not loading properly
// Let's check if there are any syntax errors in JS.
// In the replacement script I used before, I might have messed up a template literal?
// Wait, I didn't replace JS before.

fs.writeFileSync(file, html, 'utf8');
console.log('Restored house_guard and fixed escapeRe.');
