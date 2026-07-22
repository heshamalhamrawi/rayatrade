import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract old Installment content
installment_match = re.search(r'(<div class="subsection">\s*<div class="subsection-title">برنامج الأفراد \(العميل الأساسي\).*?</div>\s*</div>\s*</div>)', html, re.DOTALL)
if installment_match:
    installment_content = installment_match.group(1)
    installment_content = installment_content.rsplit('</div>', 1)[0].strip()
else:
    installment_content = 'ERROR extracting installment'

# Extract old Sales protocol
sales_match = re.search(r'(<div class="subsection">\s*<div class="subsection-title">بروتوكول إتمام البيع – الخطوات الرسمية.*?</div>\s*</div>)', html, re.DOTALL)
sales_content = sales_match.group(1) if sales_match else ''

# Extract old Fraud protocol
fraud_match = re.search(r'(<div class="subsection">\s*<div class="subsection-title">بروتوكول حارس البيت – مكافحة الاحتيال.*?</div>\s*</div>)', html, re.DOTALL)
fraud_content = fraud_match.group(1) if fraud_match else ''

# Extract old Dict protocol
dict_match = re.search(r'(<div class="subsection">\s*<div class="subsection-title">قاموس لغة صاحب البيت.*?</table>\s*</div>)', html, re.DOTALL)
dict_content = dict_match.group(1) if dict_match else ''

new_block = f'''        <!-- ── SECTION: PROTOCOLS ── -->
        <div class="section-block" data-category="protocols" id="sec-protocols">
          <div class="section-header" onclick="toggleSection(this)">
            <span class="section-icon">⚙️</span>
            البروتوكولات
            <span class="section-toggle">▾</span>
          </div>
          <div class="section-body">

            <!-- Top-level Protocols Tabs -->
            <div class="guest-steps" style="flex-wrap: wrap; margin-bottom: 16px;">
              <div class="guest-step active-step" onclick="showMainProtocolTab('raya', this)" style="cursor:pointer; font-size:12px; padding:10px;">بروتوكولات راية</div>
              <div class="guest-step" onclick="showMainProtocolTab('installment', this)" style="cursor:pointer; font-size:12px; padding:10px;">بروتوكولات التقسيط</div>
            </div>

<script>
function showMainProtocolTab(tabId, el) {{
  var container = el.closest(".section-body");
  var steps = container.querySelectorAll(".guest-steps")[0].querySelectorAll(".guest-step");
  steps.forEach(function(s) {{ s.classList.remove("active-step"); }});
  el.classList.add("active-step");
  
  var contents = container.querySelectorAll(".main-protocol-tab-content");
  contents.forEach(function(c) {{ c.style.display = "none"; }});
  document.getElementById("main-protocol-" + tabId).style.display = "block";
}}

function showSubProtocolTab(tabId, el) {{
  var container = el.closest(".main-protocol-tab-content");
  var steps = container.querySelectorAll(".guest-steps")[0].querySelectorAll(".guest-step");
  steps.forEach(function(s) {{ s.classList.remove("active-step"); }});
  el.classList.add("active-step");
  
  var contents = container.querySelectorAll(".sub-protocol-tab-content");
  contents.forEach(function(c) {{ c.style.display = "none"; }});
  document.getElementById("sub-protocol-" + tabId).style.display = "block";
}}
</script>

            <div id="main-protocol-raya" class="main-protocol-tab-content">
              <!-- Sub Tabs for Raya Protocols -->
              <div class="guest-steps" style="flex-wrap: wrap; margin-bottom: 16px;">
                <div class="guest-step active-step" onclick="showSubProtocolTab('owner', this)" style="cursor:pointer; font-size:12px; padding:10px;">صاحب البيت</div>
                <div class="guest-step" onclick="showSubProtocolTab('clean', this)" style="cursor:pointer; font-size:12px; padding:10px;">النظافة</div>
                <div class="guest-step" onclick="showSubProtocolTab('deploy', this)" style="cursor:pointer; font-size:12px; padding:10px;">الانتشار</div>
                <div class="guest-step" onclick="showSubProtocolTab('close', this)" style="cursor:pointer; font-size:12px; padding:10px;">الإغلاق</div>
                <div class="guest-step" onclick="showSubProtocolTab('sales', this)" style="cursor:pointer; font-size:12px; padding:10px;">إتمام البيع</div>
                <div class="guest-step" onclick="showSubProtocolTab('fraud', this)" style="cursor:pointer; font-size:12px; padding:10px;">حارس البيت</div>
                <div class="guest-step" onclick="showSubProtocolTab('dict', this)" style="cursor:pointer; font-size:12px; padding:10px;">القاموس</div>
              </div>

              <!-- Content for owner -->
              <div id="sub-protocol-owner" class="sub-protocol-tab-content">
<div class="subsection" style="margin-top:16px;">
  <div class="subsection-title">بروتوكول "صاحب البيت"</div>
  <div class="content-text" style="margin-bottom:16px;">
    الفرع مش مجرد مكان بنبيع فيه، ده "بيتنا" اللي بنستقبل فيه ضيوفنا كل يوم. وعشان التجربة تكون مثالية، لازم يكون عندنا نظام واضح من أول دقيقة بنفتح فيها الباب لحد ما نقفله.
  </div>
  
  <div style="background:#003399; color:white; padding:8px; border-radius:4px; font-weight:bold; margin-bottom:10px;">9:30 صباحاً: الاستعداد لبدء العمل</div>
  <div class="rule-list" style="margin-bottom:16px;">
    <li><span class="bullet"></span><strong>تأكد من تواجد جميع أفراد الفريق</strong></li>
    <li><span class="bullet"></span><strong>تجهيز الفرع:</strong> تشغيل الإضاءة، التكييف، وأجهزة العرض</li>
    <li><span class="bullet"></span><strong>مراجعة سريعة للأهداف اليومية</strong></li>
  </div>

  <div style="background:#003399; color:white; padding:8px; border-radius:4px; font-weight:bold; margin-bottom:10px;">مظهر الموظف المحترف (سياسة الملابس)</div>
  <div class="do-dont-grid" style="margin-bottom:16px;">
    <div class="do-box">
      <span class="box-label">✅ المسموح به</span>
      <ul style="margin:5px 0 0 20px; padding:0;">
        <li>قميص بولو "راية" نظيف ومكوي</li>
        <li>بنطلون جينز غير ممزق</li>
        <li>أحذية كاجوال أنيقة</li>
      </ul>
    </div>
    <div class="dont-box">
      <span class="box-label">❌ الممنوع</span>
      <ul style="margin:5px 0 0 20px; padding:0;">
        <li>شورت</li>
        <li>قميص مجعد أو غير نظيف</li>
        <li>شباشب، أحذية رياضية</li>
      </ul>
    </div>
  </div>

  <div style="background:#003399; color:white; padding:8px; border-radius:4px; font-weight:bold; margin-bottom:10px;">10:00 صباحاً: فتح الأبواب للعملاء</div>
  <div class="rule-list" style="margin-bottom:16px;">
    <li><span class="bullet"></span>فتح أبواب الفرع واستقبال العملاء بابتسامة واحترافية</li>
  </div>

  <div class="info-row"><span class="info-badge badge-yellow" style="font-size:16px;">(الضيف الأول زي الضيف الأخير، بياخد أحسن خدمة)</span></div>
</div>
              </div>

              <!-- Content for clean -->
              <div id="sub-protocol-clean" class="sub-protocol-tab-content" style="display:none;">
<div class="subsection" style="margin-top:16px;">
  <div class="subsection-title">بروتوكول النظافة واجهة بيتك</div>
  
  <div class="do-dont-grid" style="margin-bottom:16px;">
    <div class="do-box" style="border-top:4px solid #3498db; background:#f4f9f9;">
      <span class="box-label">النظافة مش بتمشي لوحدها، "متابعة" صاحب البيت هي السر.</span>
      <ul style="margin:5px 0 0 20px; padding:0;">
        <li>صاحب البيت بيفكر عامل النظافة بمسؤوليته</li>
        <li>تذكير يومي بجميع نقاط النظافة (التأكد من النظافة بعد الانتهاء)</li>
        <li>المسؤولية هنا هي "المتابعة" من صاحب البيت لكل تفصيلة.</li>
      </ul>
    </div>
    <div class="do-box" style="border-top:4px solid #3498db; background:#f4f9f9;">
      <span class="box-label">متابعة نظافة الفرع</span>
      <ul style="margin:5px 0 0 20px; padding:0;">
        <li>الموبايلات خالية من البصمات</li>
        <li>الشاشات بتلمع بوضوح</li>
        <li>الأرفف مترتبة بشكل مثالي</li>
      </ul>
    </div>
  </div>

  <div style="background:#fdf2e9; border:2px solid #f39c12; padding:12px; border-radius:8px; text-align:center;">
    <h4 style="color:#d35400; margin:0 0 8px 0; font-size:18px;">القاعدة الذهبية: متى وكيف؟</h4>
    <div style="font-weight:bold; font-size:16px; margin-bottom:10px;">
      النظافة بتتعمل "قبل" دخول العملاء أو في أوقات الهدوء...<br>
      <span style="color:red;">إياك تمسح أو تنظف والضيف واقف قدامك!</span>
    </div>
    <div style="display:flex; justify-content:space-around;">
      <div style="color:green; font-weight:bold;">✅ قبل دخول العملاء / أوقات الهدوء (CORRECT)</div>
      <div style="color:red; font-weight:bold;">❌ أوقات دخول العملاء (WRONG / NO!)</div>
    </div>
  </div>
</div>
              </div>

              <!-- Content for deploy -->
              <div id="sub-protocol-deploy" class="sub-protocol-tab-content" style="display:none;">
<div class="subsection" style="margin-top:16px;">
  <div class="subsection-title">بروتوكول الانتشار</div>
  
  <div style="font-weight:bold; font-size:16px; margin-bottom:10px;">أولاً: حسب حجم الفرع عادي ولا ميجا؟</div>
  <div class="do-dont-grid" style="margin-bottom:20px;">
    <div class="do-box">
      <span class="box-label" style="background:#003399; color:white; padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:8px;">الفروع العادية: المناطق والتغطية السريعة</span>
      <ul style="margin:0 0 0 20px; padding:0;">
        <li><strong>طريقة:</strong> الفرع بيتقسم لمناطق، وكل موظف مسؤول عن منطقة بس عينه على الفرع كله.</li>
        <li>لو زميلك مشغول مع ضيف، إنت بتتحرك فوراً تغطي مكانه عشان مفيش ضيف يدخل وميلاقيش حد يستقبله. (team-support)</li>
      </ul>
    </div>
    <div class="do-box">
      <span class="box-label" style="background:#003399; color:white; padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:8px;">فروع الميجا الأدوار المتعددة: الأدوار والمسؤوليات</span>
      <ul style="margin:0 0 0 20px; padding:0;">
        <li><strong>موظف الاستقبال:</strong> أهم شخص في الفرع الميجا! لازم يكون فيه استاف متمركز على الباب الرئيسي، بيستقبل الضيف، يرحب بيه، ويوجهه للدور أو القسم الصح فوراً.</li>
        <li><strong>قائد لكل دور:</strong> كل دور لازم يكون فيه موظف ثابت مبيسيبوش، عشان العميل ميطلعش السلم ويلاقي الدور فاضي.</li>
        <li><strong>بروتوكول تسليم الضيف عبر الأدوار (التسليم):</strong> "اتفضل، مع حضرتك (اسم الشخص) من (القسم أو البراند) هيساعدك في كل اللي تحتاجه".</li>
      </ul>
    </div>
  </div>

  <div style="font-weight:bold; font-size:16px; margin-bottom:10px;">ثانياً: حسب موقع الفرع شارع ولا مول؟</div>
  <div class="do-dont-grid" style="margin-bottom:20px;">
    <div class="do-box">
      <span class="box-label" style="background:#003399; color:white; padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:8px;">فروع الشارع: الترافيك والواجهة</span>
      <ul style="margin:0 0 0 20px; padding:0;">
        <li>الترافيك بييجي على فترات، وفي أوقات الذروة بيكون مكثف.</li>
        <li>الاستاف متواجد في النصف الأول كل من الفرع (الواجهة).</li>
        <li>بيدي تشجيع للناس إنها تدخل.</li>
      </ul>
    </div>
    <div class="do-box">
      <span class="box-label" style="background:#003399; color:white; padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:8px;">فروع المولات: الوقت والتوزيع</span>
      <ul style="margin:0 0 0 20px; padding:0;">
        <li>عميل المول غالباً وقته أضيق وبيلف على محلات كتير وبيعمل مقارنات سريعة.</li>
        <li>التوزيع هنا بيعتمد على 30 ثانية "سرعة الالتقاط".</li>
      </ul>
    </div>
  </div>

  <div class="info-row"><span class="info-badge badge-yellow" style="font-size:16px;">(تأكد من وجود استاف في واجهة فروع الشارع، وركز على سرعة الالتقاط في أول 30 ثانية في المول.)</span></div>
</div>
              </div>

              <!-- Content for close -->
              <div id="sub-protocol-close" class="sub-protocol-tab-content" style="display:none;">
<div class="subsection" style="margin-top:16px;">
  <div class="subsection-title">بروتوكول الاغلاق</div>
  
  <div class="do-dont-grid" style="margin-bottom:16px;">
    <div class="do-box">
      <span class="box-label" style="background:#003399; color:white; padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:8px;">آخر ضيف</span>
      <ul style="margin:0 0 0 20px; padding:0;">
        <li><strong>الضيف الأهم:</strong> لو عميل دخل الفرع قبل موعد الإغلاق بدقيقة واحدة، بيتعامل كأنه أول عميل في اليوم.</li>
        <li>ممنوع تماماً نقفل الأنوار أو نلم الأجهزة أو نحسسه إننا مستعجلين.</li>
      </ul>
    </div>
    <div class="do-box">
      <span class="box-label" style="background:#003399; color:white; padding:4px 8px; border-radius:4px; display:inline-block; margin-bottom:8px;">بعد خروج آخر ضيف</span>
      <ul style="margin:0 0 0 20px; padding:0;">
        <li>ترتيب الفرع عشان زمايلنا بتوع الشفت الصباحي ييجي يلاقيه جاهز بنسبة 100%.</li>
      </ul>
    </div>
  </div>

  <div class="info-row"><span class="info-badge badge-yellow" style="font-size:16px;">(الضيف الأخير زي الضيف الأول، بياخد أحسن خدمة وتوديع يليق ببيتنا.)</span></div>
</div>
              </div>

              <!-- Old Content as Tabs -->
              <div id="sub-protocol-sales" class="sub-protocol-tab-content" style="display:none;">
{sales_content}
              </div>
              
              <div id="sub-protocol-fraud" class="sub-protocol-tab-content" style="display:none;">
{fraud_content}
              </div>

              <div id="sub-protocol-dict" class="sub-protocol-tab-content" style="display:none;">
{dict_content}
              </div>

            </div>

            <div id="main-protocol-installment" class="main-protocol-tab-content" style="display:none;">
{installment_content}
            </div>
          </div>
        </div>'''

full_regex = r'<!-- ── SECTION: INSTALLMENT ── -->\s*<div class="section-block" data-category="installment" id="sec-installment">.*?<!-- ── SECTION: PROTOCOLS ── -->\s*<div class="section-block" data-category="protocols" id="sec-protocols">.*?</table>\s*</div>\s*</div>\s*</div>'

new_html, count = re.subn(full_regex, new_block, html, flags=re.DOTALL)

if count > 0:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print('Successfully merged and updated Protocols section.')
else:
    print('Failed to match the replacement block.')
