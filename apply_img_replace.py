import sys

html_1 = """
<div style="background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 8px; padding: 20px; direction: rtl; text-align: right; font-family: 'Tajawal', sans-serif;">
    <h2 style="color: #1a2f6e; text-align: center; font-size: 28px; font-weight: 900; margin-bottom: 10px;">بروتوكول التقسيط</h2>
    <p style="text-align: center; color: #555; font-size: 15px; margin-bottom: 25px;">
        في Raya، إحنا بنسهل على العميل يشتري اللي نفسه فيه، بس كـ "صاحب بيت" شاطر، لازم تبقى عارف إزاي تختار البرامج الصح والورق المظبوط عشان العملية تمشي بسرعة وبدون أخطاء. دي قواعدنا الثابتة:
    </p>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">1. برنامج الأفراد العميل الأساسي</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">السن:</strong> من 21 لحد 65 سنة. وممكن لحد 67 سنة لو جاب ضامن درجة أولى.</li>
        <li><strong style="color: #0033cc;">الدخل:</strong> الحد الأدنى لدخله الشهري 3000 جنيه.</li>
        <li><strong style="color: #0033cc;">لو هيقسط بالبطاقة بس مكتوب فيها الوظيفة:</strong> بنعتمدها بس لازم دخله كحد أدنى يكون 7000 جنيه.</li>
        <li><strong style="color: #0033cc;">مدة الشغل:</strong> لازم يكون بقاله في وظيفته الحالية 3 شهور على الأقل.</li>
        <li><strong style="color: #0033cc;">عبء الدين DBR:</strong> أقساط العميل كلها متعديش 50% من دخله.</li>
        <li><strong style="color: #0033cc;">الوظائف الحكومية المؤقتة:</strong> بنقبلها بشرط يجيب برنت تأميني ودخله لا يقل عن 7000 جنيه. لو دخله أعلى، لازم يجيب مفردات مرتب + ضامن درجة أولى.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">2. إمتى بنحتاج نعمل "زيارة ميدانية" للعميل؟</h3>
    <p style="color: #444; font-size: 14px; margin-bottom: 5px;">في حالات معينة لازم فريقنا يزور العميل للتأكد، وهي:</p>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>العميل بدون عمل أو ربة منزل.</li>
        <li>البطاقة مش مكتوب فيها وظيفة.</li>
        <li>العميل ملوش تاريخ ائتماني أو أول مرة يقسط عدم وجود I-Score.</li>
        <li>لو العميل بيقدم الطلب من فرع خارج محافظة سكنه.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">3. إثبات الدخل: إيه الورق اللي بنقبله؟</h3>
    <strong style="color: #0033cc; font-size: 15px;">المقبول 100%</strong>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>مفردات مرتب مختومة وحديثة، صلاحيتها 3 شهور من تاريخها.</li>
        <li>كشف حساب بنكي لآخر 6 شهور باين فيه تحويل الراتب.</li>
        <li>الـ Payslip، بنجيب بتاع الشهر الحالي + واحد أقدم.</li>
        <li>رسالة SMS موثقة من جهة العمل فيها صافي القبض.</li>
        <li>برنت تأميني حديث مكملش 3 شهور، مختوم بختم النسر أو طالع من "مصر الرقمية"، ومكتوب فيه اسم الشركة وآخر أجر تأميني.</li>
        <li>بيان معاش خلال 3 شهور ومختوم بختم النسر.</li>
    </ul>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>حاجات بتسند دخل إضافي بجانب الأساسي: شهادات استثمار أو ودائع باسمه، أو عقود إيجار بتدخله فلوس فعلية.</li>
        <li>لتعليات الليمت Limit Increase: لو العميل عاوز يزود الرصيد لازم يجيب أي إثبات دخل جديد من اللي ذكرناهم.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">4. برامج تانية لضيوفنا</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">برنامج أصحاب الأعمال Self-Employed:</strong> للنشاط القائم. بيحتاج سجل تجاري + كشف حساب 6 شهور + زيارة ميدانية للسكن والنشاط.</li>
        <li><strong style="color: #0033cc;">برنامج الشركاء Partners:</strong> نفس شروط أصحاب الأعمال بالظبط، بس بنزود عليها "مستند رسمي" يوضح نسبة ملكية العميل في الشركة دي.</li>
        <li><strong style="color: #0033cc;">برنامج جيل Z للطلاب:</strong> لطلبة الجامعات الحكومية والخاصة المحددة. الضامن: الأب أو الأم بوظيفة مثبتة. الورق المطلوب: كارنيه الطالب + بطاقة الضامن + إثبات دخل الضامن. والحد الائتماني هنا بيتحدد بناءً على دخل الأسرة.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">5. خطوط حمراء: المحظورات عشان نحمي بيتنا</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">مناطق لا نقسط لها Blacklisted Areas:</strong> شمال سيناء، حلايب وشلاتين، الواحات، مرسى مطروح، قنطرة شرق.</li>
        <li><strong style="color: #0033cc;">مهن لا نقسط لها Blacklisted Professions:</strong> ضباط الشرطة إلا لو مدنيين، الصحفيون، موظفو هيئة الإسعاف، والمحامي الحر / المستقل بنقبل المحامي بس لو بطاقته مكتوب فيها إنه موظف جوه شركة.</li>
        <li><strong style="color: #0033cc;">ورق مرفوض تماماً:</strong> شهادة الدخل من أي محاسب قانوني، أو الوظائف الحكومية بنظام "اليومية".</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">6. ضيوفنا الغاليين ذوي الاحتياجات الخاصة</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>بالنسبة للعملاء من المكفوفين، بنرحب بيهم جداً، ولكن لتسهيل وتأمين الإجراءات يُشترط وجود "ضامن درجة أولى" الزوج أو الزوجة.</li>
    </ul>
</div>
"""

html_2 = """
<div style="background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 8px; padding: 20px; direction: rtl; text-align: right; font-family: 'Tajawal', sans-serif;">
    <h2 style="color: #1a2f6e; text-align: center; font-size: 26px; font-weight: 900; margin-bottom: 5px;">💳 بروتوكول "حد ائتماني مقابل بطاقة"</h2>
    <h3 style="color: #333; text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 20px;">إزاي نقسط لضيفنا بناءً على كارت المشتريات؟</h3>
    
    <p style="text-align: center; color: #555; font-size: 15px; margin-bottom: 25px;">
        لو ضيفنا معاه بطاقة ائتمان Credit Card وعاوز يعتمد عليها عشان ياخد حد ائتماني يقسط بيه عندنا، دي الشروط اللي لازم نمشي عليها عشان نسهلها عليه ونحفظ حق "بيتنا":
    </p>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">1. مين الضيف اللي يقدر يستفيد من البرنامج ده؟</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">السن:</strong> لازم يكون عمره من 21 سنة كحد أدنى، لحد 65 سنة كحد أقصى.</li>
        <li><strong style="color: #0033cc;">التعليم:</strong> البرنامج ده مخصص للضيوف الحاصلين على مؤهل جامعي بكالوريوس أو ليسانس.</li>
        <li><strong style="color: #0033cc;">الشغل:</strong> لازم يكون بقاله في وظيفته 6 شهور على الأقل وبنتأكد من ده من البطاقة، أو التأمينات، أو منصة مصر الرقمية.</li>
        <li><strong style="color: #0033cc;">مهن مش هينفع معاها البرنامج:</strong> الفنيين، العمالة اليدوية، السائقين، تجار الخضار والفاكهة، الجزارين، والمزارعين / الجناينية.</li>
        <li><strong style="color: #0033cc;">الورق المطلوب:</strong> أسهل حاجة.. بطاقة رقم قومي سارية وبس!</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">2. الفحص الائتماني I-Score: هو لميزان بتاعنا</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>لازم نعمل استعلام إلزامي.</li>
        <li>بطاقة الائتمان بتاعة العميل لازم تكون من النوع "الغير مضمنة" Unsecured.</li>
        <li>العميل لازم يكون عنده بطاقة ائتمان حقيقية مبنية على ثقة البنك فيه مش بطاقة معمولها إصدار بضمان فلوس محجوزة.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">3. تفاصيل التمويل والمدة</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">عبء الدين DBR:</strong> زي ما إحنا متعودين، أقساط الضيف كلها متعديش 50% من دخله.</li>
        <li><strong style="color: #0033cc;">مدة التقسيط:</strong> بتبدأ من 10 شهور لحد 36 شهر.</li>
    </ul>
</div>
"""

html_3 = """
<div style="background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 8px; padding: 20px; direction: rtl; text-align: right; font-family: 'Tajawal', sans-serif;">
    <h2 style="color: #1a2f6e; text-align: center; font-size: 26px; font-weight: 900; margin-bottom: 5px;">💳 بروتوكول "الحد الائتماني مقابل الحد الائتماني"</h2>
    <h3 style="color: #333; text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 20px;">التقسيط بضمان ليميت شركات تانية</h3>
    
    <p style="text-align: center; color: #555; font-size: 15px; margin-bottom: 25px;">
        لو ضيفنا معندوش بطاقة ائتمان بنكية، بس عنده ليميت تقسيط شغال مع شركات تانية معتمدة نقدر نعتمد عليه ونديله ليميت يشتري بيه من عندنا.
        دي القواعد اللي هنمشي عليها:
    </p>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">1. مين الضيف اللي يقدر يستفيد من البرنامج ده؟</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">السن:</strong> لازم يكون عمره من 21 سنة كحد أدنى، لحد 65 سنة كحد أقصى.</li>
        <li><strong style="color: #0033cc;">التعليم:</strong> البرنامج ده مخصص للضيوف الحاصلين على مؤهل جامعي بكالوريوس أو ليسانس.</li>
        <li><strong style="color: #0033cc;">الشغل:</strong> لازم يكون بقاله في وظيفته 6 شهور على الأقل وبنتأكد من ده من البطاقة، أو التأمينات، أو منصة مصر الرقمية.</li>
        <li><strong style="color: #0033cc;">مهن مش هينفع معاها البرنامج:</strong> الفنيين، العمالة اليدوية، السائقين، تجار الخضار والفاكهة، الجزارين، والمزارعين / الجناينية.</li>
        <li><strong style="color: #0033cc;">الورق المطلوب:</strong> أسهل حاجة.. بطاقة رقم قومي سارية وبس!</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">2. الفحص الائتماني I-Score: هو لميزان بتاعنا</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>لازم نعمل فحص إلزامي للـ I-Score.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">3. تفاصيل التمويل والمدة</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">حجم العملية:</strong> الحد الأدنى لمبلغ التمويل Ticket Size هو 25,000 جنيه مصري.</li>
        <li><strong style="color: #0033cc;">مدة السداد:</strong> Tenor التقسيط متاح من 10 شهور لحد 36 شهر.</li>
        <li><strong style="color: #0033cc;">عبء الدين DBR:</strong> زي ما إحنا متعودين، أقساط الضيف كلها متعديش 50% من دخله.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">5. إيه هي الشركات المعتمدة عندنا؟</h3>
    <strong style="color: #0033cc; font-size: 15px;">بنقبل الليميت من الشركات دي فقط</strong>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>أمان Aman</li>
        <li>فاليو Valu</li>
        <li>سهولة Souhoula</li>
        <li>كليفر Clever</li>
        <li>حالاً Halan</li>
        <li>ترو True</li>
    </ul>
</div>
"""

html_4 = """
<div style="background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 8px; padding: 20px; direction: rtl; text-align: right; font-family: 'Tajawal', sans-serif;">
    <h2 style="color: #1a2f6e; text-align: center; font-size: 28px; font-weight: 900; margin-bottom: 5px;">بروتوكول دخل الراتب الافتراضي</h2>
    <h3 style="color: #333; text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 20px;">إزاي نقسط بالوظيفة</h3>
    
    <p style="text-align: center; color: #555; font-size: 15px; margin-bottom: 25px;">
        البرنامج ده بقى معمول عشان نسهّل على ضيوفنا اللي معندهمش إثبات دخل مباشر، بس شغالين في وظايف ممتازة ومستقرة. الهدف هنا إننا نحدد الليميت للعميل بناءً على متوسط رواتب السوق لمهنته عشان تناسب أسعار الإلكترونيات عندنا.
    </p>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">1. مين الضيف المؤهل للبرنامج؟ شروط الموافقة السريعة</h3>
    <p style="color: #444; font-size: 14px; margin-bottom: 5px;">عشان تدخل العميل في البرنامج ده، لازم تنطبق عليه الشروط دي:</p>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">السن:</strong> من 21 عاماً إلى 65 عاماً كحد أقصى.</li>
        <li><strong style="color: #0033cc;">التعليم:</strong> مؤهل جامعي بكالوريوس / ليسانس.</li>
        <li><strong style="color: #0033cc;">مدة العمل:</strong> لا تقل عن 3 أشهر يتم التحقق عبر ظهر البطاقة، التأمينات، أو بوابة مصر الرقمية.</li>
        <li><strong style="color: #0033cc;">استثناء بسيط للموظف المبتدئ Junior:</strong> لو شغال في القطاع الحكومي بقاله أقل من 6 شهور، لازم نسأله عن قيمة دخله الفعلي وبنفصح عنه صراحةً.</li>
        <li><strong style="color: #0033cc;">مهن خارج البرنامج:</strong> الفنيين، العمالة اليدوية، السائقين، بائعي الخضروات والفاكهة، الجزارين، والجناينية.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">2. الفحص الائتماني I-Score الميزان بتاعنا</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li>لازم نعمل استعلام إلزامي.</li>
    </ul>

    <h3 style="color: #333; font-size: 18px; margin-top: 20px; font-weight: bold;">3. تفاصيل التقسيط</h3>
    <ul style="list-style-type: disc; padding-right: 20px; color: #444; font-size: 14px; line-height: 1.8;">
        <li><strong style="color: #0033cc;">عبء الدين DBR:</strong> أقساط الضيف كلها متعديش 50% من الدخل الافتراضي اللي هنحسبهوله.</li>
        <li><strong style="color: #0033cc;">مدة التقسيط:</strong> التقسيط متاح من 10 شهور لحد 36 شهر.</li>
    </ul>
</div>
"""

with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

import re

# Replace inst_protocol_1.png
html_content = re.sub(
    r'<img src="inst_protocol_1\.png"[^>]*>',
    html_1.replace("\\", "\\\\"),
    html_content
)

# Replace inst_protocol_2.png
html_content = re.sub(
    r'<img src="inst_protocol_2\.png"[^>]*>',
    html_2.replace("\\", "\\\\"),
    html_content
)

# Replace inst_protocol_3.png
html_content = re.sub(
    r'<img src="inst_protocol_3\.png"[^>]*>',
    html_3.replace("\\", "\\\\"),
    html_content
)

# Replace inst_protocol_4.png
html_content = re.sub(
    r'<img src="inst_protocol_4\.png"[^>]*>',
    html_4.replace("\\", "\\\\"),
    html_content
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("Images replaced successfully with HTML text.")
