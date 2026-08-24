document.write('<script src="data.js?v=' + Date.now() + '"><\\/script>');


    function toggleDarkMode() {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('raya_dark_mode', isDark);
      document.querySelector('.dark-toggle').textContent = isDark ? '☀️' : '🌙';
    }
    document.addEventListener('DOMContentLoaded', () => {
      if (localStorage.getItem('raya_dark_mode') === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-toggle').textContent = '☀️';
      }
    });
  


                      function showGuestTab(tabId, el) {
                        var steps = document.querySelectorAll(".guest-step");
                        steps.forEach(function (s) { s.classList.remove("active-step"); });
                        el.classList.add("active-step");

                        var contents = document.querySelectorAll(".guest-tab-content");
                        contents.forEach(function (c) { c.style.display = "none"; });
                        document.getElementById("guest-tab-" + tabId).style.display = "block";
                      }
                    


                      function showMainPolicyTab(tabId, el) {
                        var container = el.closest(".section-body");
                        var steps = container.querySelectorAll(".guest-steps")[0].querySelectorAll(".guest-step");
                        steps.forEach(function (s) { s.classList.remove("active-step"); });
                        el.classList.add("active-step");

                        var contents = container.querySelectorAll(".main-policy-tab-content");
                        contents.forEach(function (c) { c.style.display = "none"; });
                        document.getElementById("main-policy-" + tabId).style.display = "block";
                      }

                      function showSubPolicyTab(tabId, el) {
                        var container = el.closest(".main-policy-tab-content");
                        var steps = container.querySelectorAll(".guest-step");
                        steps.forEach(function (s) { s.classList.remove("active-step"); });
                        el.classList.add("active-step");

                        var contents = container.querySelectorAll(".sub-policy-tab-content");
                        contents.forEach(function (c) { c.style.display = "none"; });
                        document.getElementById("sub-policy-" + tabId).style.display = "block";
                      }
                    


                      function showMainProtocolTab(tabId, el) {
                        var container = el.closest(".section-body");
                        var steps = container.querySelectorAll(".guest-steps")[0].querySelectorAll(".guest-step");
                        steps.forEach(function (s) { s.classList.remove("active-step"); });
                        el.classList.add("active-step");

                        var contents = container.querySelectorAll(".main-protocol-tab-content");
                        contents.forEach(function (c) { c.style.display = "none"; });
                        document.getElementById("main-protocol-" + tabId).style.display = "block";
                      }

                      function showSubProtocolTab(tabId, el) {
                        var container = el.closest(".main-protocol-tab-content");
                        var steps = container.querySelectorAll(".guest-steps")[0].querySelectorAll(".guest-step");
                        steps.forEach(function (s) { s.classList.remove("active-step"); });
                        el.classList.add("active-step");

                        var contents = container.querySelectorAll(".sub-protocol-tab-content");
                        contents.forEach(function (c) { c.style.display = "none"; });
                        document.getElementById("sub-protocol-" + tabId).style.display = "block";
                      }
                    


          // ─── KNOWLEDGE BASE (extracted from the PDF) ────────────────────────
          const KNOWLEDGE_BASE = [
            {
              id: "culture_vision",
              section: "ثقافة راية – الهوية الاستراتيجية",
              category: "culture",
              keywords: ["رؤية", "مهمة", "هوية", "استراتيجية", "قيم", "ثقافة", "رسالة"],
              content: `رؤية راية: أن نكون الشريك التجاري الأكثر تأثيراً وثقة، من خلال وضع معايير جديدة في تجربة العملاء، وتقديم حلول قائمة على القيمة، والتميز في خدمات ما بعد البيع، والتمكين المالي — بما يرسخ شراكات طويلة الأمد تُسهم في تشكيل المستقبل. مهمة راية: قيادة تحوّل السوق عبر شراكات استراتيجية، وابتكار مستدام، وحلول تركّز على العميل، بهدف توسيع نطاق الوصول ووضع معايير جديدة للقطاع. القيم الأساسية: التركيز على العملاء، التميز، احترام الآخرين، العمل الجماعي.`
            },
            {
              id: "experience_difference",
              section: "تجربة العميل",
              category: "experience",
              keywords: ["تجربة", "خدمة", "فرق", "ضيف", "عميل", "صاحب البيت", "رحلة"],
              content: `الفرق بين خدمة وتجربة العميل: خدمة العميل هي رد فعل مباشر على طلب واضح. تجربة العميل هي الرحلة اللي العميل بيعيشها من أول ما بيوصل الفرع لحد خدمة ما بعد البيع. لتقديم تجربة ناجحة يجب أن تعامل العميل كأنه ضيفك والفرع هو بيتك. المصطلحات الصحيحة: العميل (وليس زبون)، الفرع (وليس محل)، استشاري بيع (وليس بياع).`
            },
            {
              id: "communication_skills",
              section: "مهارة التواصل الفعال",
              category: "skills",
              keywords: ["تواصل", "لغة الجسد", "نبرة", "صوت", "ابتسامة", "مسافة", "بصري", "مهارة"],
              content: `مهارة التواصل الفعال: القدرة على توصيل الأفكار بطريقة صحيحة من خلال الكلام (لفظي 7%) ولغة الجسد ونبرة الصوت (غير لفظي 93%). التواصل البصري: استخدام طريقة المثلث (العينين مع الجبهة + العينين مع الأنف) من 3 لـ 5 ثواني. المسافة مع العميل: 1م رجل-رجل أو امرأة-امرأة، 1.5م رجل-امرأة. الابتسامة: بنستخدمها في الترحيب فقط، بدون إظهار الأسنان، لا تُستخدم أثناء غضب العميل. نبرة الصوت: متوسطة لا عالية ولا منخفضة، مناسبة للموقف.`
            },
            {
              id: "listening_skills",
              section: "مهارة الاستماع الفعال",
              category: "skills",
              keywords: ["استماع", "فعال", "تضامني", "انتقائي", "تظاهري", "إعادة صياغة", "مقاطعة"],
              content: `أنواع الاستماع: 1) استماع تظاهري (❌): التظاهر بالاستماع بدون تركيز حقيقي. 2) استماع انتقائي (❌): التركيز على أجزاء معينة وتجاهل باقي الرسالة. 3) استماع فعال (✅): الاستماع بتركيز كامل، اسأل أسئلة توضيحية، لا تقاطع، أعد صياغة الكلام للتأكيد. 4) استماع تضامني (✅): يُستخدم عند غضب العميل أو حدوث مشكلة، إظهار التعاطف، لا ابتسامة نهائياً.`
            },
            {
              id: "greeting",
              section: "G – الترحيب (Greeting)",
              category: "guest",
              keywords: ["ترحيب", "greeting", "G", "استقبال", "صباح", "مساء", "اسم", "أساعدك"],
              content: `الترحيب هو أول سلوك بيلاحظه العميل. غير اللفظي: ابتسامة صادقة مُرحبة، تواصل بصري، وضعية جسم مفتوحة. اللفظي: 1- صباح الخير / مساء الخير (من 8ص-12ظ | من 12ظ-12ص) 2- مع حضرتك (اسمك) 3- أقدر أساعدك ازاي؟. تعريف باسمك يخلق رابطة إنسانية. الألفاظ المحببة: "تحت أمرك" - "زي ماحضرتك تحب" - "اختيار موفق". تحذير: ماتبدأش بالهزار مع العميل أو تخطي لأي حدود بحجة كسر الحاجز. الاستشاري مسؤول عن استقبال العميل وليس البروموتر.`
            },
            {
              id: "understand_value",
              section: "U – فهم احتياج العميل",
              category: "guest",
              keywords: ["فهم", "understand", "U", "احتياج", "value", "pain", "قيمة", "وظيفية", "اقتصادية", "عاطفية"],
              content: `فهم احتياج العميل: الاستشاري الشاطر يسأل صح. Value (القيمة): القيمة الوظيفية (يؤدي الغرض)، القيمة الاقتصادية (توفير المال)، القيمة الاجتماعية (المظهر والترند)، القيمة العاطفية (الأمان والراحة والسعادة)، القيمة التجريبية (سهولة الاستخدام والخدمة). Pain (الألم): تجربة سيئة سابقة، مشكلة سمع عنها، إحباط من منتج قديم. 3 حاجات لتحديد الاحتياج: الملاحظة (طريقة الدخول والتوقف) - التساؤل (أسئلة مفتوحة ثم مغلقة) - الاستماع.`
            },
            {
              id: "customer_types",
              section: "شخصيات العملاء DISC",
              category: "guest",
              keywords: ["شخصية", "dominant", "influencer", "steady", "cautious", "عصبي", "ودود", "متردد", "شكاك", "DISC"],
              content: `شخصيات العملاء: D (Dominant/المستعجل): محدد وحاسم، غير صبور. افعل: لخص المنتجات بسرعة. تجنب: لا تفرض رؤيتك، لا تعطيه بدائل كثيرة. I (Influencer/الاجتماعي): يستخدم لغة جسده كثيراً، مركز الاهتمام. افعل: تفاعل معه وشارك الأمثلة والترند. تجنب: لا تقاطعه، لا تهمل تعليقاته. S (Steady/المتردد): صبور وهادئ، لا يميل للتغيير، محتاج توجيه. افعل: تضامن معه وأعطه بدائل قليلة. تجنب: لا تضغط عليه، لا تعطيه بدائل كثيرة. C (Cautious/الشكاك): دقيق ومنطقي وكثير التساؤلات. افعل: كن دقيقاً في معلوماتك، اذكرها بطريقة منطقية. تجنب: لا تتجاهل التفاصيل، لا ترد بإجابات عامة.`
            },
            {
              id: "expose_product",
              section: "E – عرض المنتج (Expose)",
              category: "guest",
              keywords: ["عرض", "expose", "E", "منتج", "مواصفات", "فائدة", "مقارنة", "براند"],
              content: `طرق عرض المنتج: 1) المعلومة والفائدة: عرض "ايه هو" ثم "هيفيدك ازاي" ثم "هيوفر عليك ايه". المعلومة من أي مصدر، الفائدة مخصصة لاحتياج العميل. 2) المشكلة والحل: ابدأ بمشكلة واقعية يواجهها العميل في الاستخدام اليومي، ثم وضح الحل اللي بيقدمه المنتج. 3) المقارنة: بتوضيح النقاط البيعية في البراندات المختلفة. أشهر أخطاء المقارنة: مايسألش عن استخدام العميل / يقارن السعر قبل الأداء / يميل لبراند واحد / يسيء لبراند معين / يعرض بدائل كثيرة.`
            },
            {
              id: "selling_skills",
              section: "S – المهارات البيعية (Selling)",
              category: "guest",
              keywords: ["بيع", "selling", "S", "up-selling", "cross-selling", "بيع رأسي", "بيع أفقي", "بديل", "تفاوض"],
              content: `المهارات البيعية: أ) بيع رأسي (Up-selling): عرض نسخة أعلى من نفس نوع المنتج ضمن احتياج العميل. ب) بيع أفقي (Cross-selling): عرض منتج آخر مكمل للمنتج الأساسي. ج) بيع بديل: عند عدم توافر منتج ما، يجب اقتراح بديل قريب في الجودة. شروط النجاح: مرتبط باحتياج العميل / في التوقيت المناسب / المعرفة الجيدة بالمنتجات. التفاوض: ركز على القيمة Framing، لا تبدأ بالسعر ابدأ بالفائدة، استخدم التقسيط كحل وسط.`
            },
            {
              id: "thank_close",
              section: "T – الشكر والتوديع (Thank)",
              category: "guest",
              keywords: ["شكر", "thank", "T", "إغلاق", "توديع", "بيعة", "ملخص", "survey", "تقييم"],
              content: `إغلاق البيعة: المرحلة الفاصلة التي تؤكد قرار العميل. إغلاق الملخص: تلخيص مزايا المنتج مع احتياج العميل. إجراءات التقسيط: تحفيز العميل لاتخاذ خطوة نحو قرار الشراء. بعد إتمام البيع: أخبر العميل أنه هيجيله Survey في رسالة SMS على تليفونه عبارة عن سؤالين. التوديع اللفظي: "نورتنا يا فندم" - "نحب نشوف حضرتك تاني". التوديع غير اللفظي: ابتسامة بسيطة، وقفة معتدلة، تواصل بصري.`
            },
            {
              id: "complaints_handling",
              section: "شكاوى العملاء",
              category: "complaints",
              keywords: ["شكوى", "غضب", "مشكلة", "اعتراض", "تعامل", "عميل غاضب", "حل", "تضامن"],
              content: `التعامل مع شكاوى العملاء: عند التعامل مع العميل الغاضب نركز على أمرين: 1) احتواء غضبه + 2) تقديم حل. الخطوات: الوعي: قبل أي رد فعل، لازم تكون واعي ليه العميل متضايق. التضامن: أظهر تعاطفك: "متفهم موقف حضرتك" أو "لو كنت مكانك كنت هحس كده برضه". لا تستخدم ابتسامة أبداً والعميل متعصب. الفهم: اسأل أسئلة تساعدك تفهم المشكلة بعمق. الرد/الحل: رد بطريقة واضحة وصريحة. "احنا في RAYA حريصين على تحقيق رضا حضرتك". مسار التصعيد (أقصى 48 ساعة): الموظف ← مدير الفرع ← مدير المنطقة ← مدير المبيعات.`
            },
            {
              id: "return_policy",
              section: "سياسة الاستبدال والاسترجاع",
              category: "policies",
              keywords: ["استرجاع", "استبدال", "سياسة", "14 يوم", "30 يوم", "فاتورة", "فلوس", "رجوع", "إرجاع"],
              content: `سياسة الاسترجاع "حق الضيف وحق البيت": فترة 14 يوم (تغيير الرأي): من حق الضيف يستبدل أو يسترجع المنتج خلال 14 يوم من تاريخ الشراء بشرط أن المنتج بحالته الأصلية (مقفول ومتبرشم). فترة 30 يوم (عيوب الصناعة): لو ظهر عيب فني في المنتج، الشرط الأساسي تقديم "تقرير فني" من وكيل المنتج. شروط قبول الاسترجاع: الفاتورة أولاً / الأجهزة الذكية: العلبة متبرشمة / منتجات العناية الشخصية: لا تُسترجع بعد الفتح / سوء النقل: نعتذر بلباقة. طريقة إرجاع الفلوس: كاش = نقداً من أي فرع. فيزا = المبلغ بيرجع لحسابه خلال 14 يوم عمل.`
            },
            {
              id: "installment_basic",
              section: "بروتوكول التقسيط – برنامج الأفراد",
              category: "installment",
              keywords: ["تقسيط", "أفراد", "شروط", "دخل", "سن", "وظيفة", "DBR", "تقسيطي"],
              content: `شروط التقسيط للأفراد: السن: من 21 لحد 65 سنة (وممكن لحد 67 سنة لو جاب ضامن درجة أولى). الدخل: الحد الأدنى 3000 جنيه شهرياً. الشغل: لازم يكون بقاله في وظيفته الحالية 3 شهور على الأقل. عبء الدين (DBR): أقساط العميل كلها متعديش 50% من دخله. لو هيقسط بالبطاقة (مكتوب فيها الوظيفة): لازم دخله كحد أدنى 7000 جنيه. الوظائف الحكومية المؤقتة: بنقبلها بشرط يجيب برنت تأميني ودخله لا يقل عن 7000 جنيه.`
            },
            {
              id: "installment_blacklist",
              section: "بروتوكول التقسيط – المحظورات",
              category: "installment",
              keywords: ["محظور", "blacklist", "مناطق", "مهن", "ممنوع", "سيناء", "محامي", "صحفي"],
              content: `المحظورات (خطوط حمراء): مناطق لا نقسط لها (Blacklisted Areas): شمال سيناء، حاليب وشلاتين، الواحات، مرسى مطروح، قنطرة شرق. مهن لا نقسط لها (Blacklisted Professions): ضباط الشرطة (إلا لو مدنيين)، الصحفيون، موظفو هيئة الإسعاف، المحامي الحر/المستقل (بنقبل المحامي بس لو بطاقته مكتوب فيها إنه موظف جوه شركة). ورق مرفوض تماماً: شهادة الدخل من أي محاسب قانوني، أو الوظائف الحكومية بنظام "اليومية".`
            },
            {
              id: "installment_programs",
              section: "برامج التقسيط الإضافية",
              category: "installment",
              keywords: ["بطاقة", "ائتمان", "حد ائتماني", "أمان", "فاليو", "سهولة", "كليفر", "حالاً", "ترو", "أصحاب أعمال", "طلاب"],
              content: `برنامج حد ائتماني مقابل بطاقة: من 21-65 سنة، مؤهل جامعي، 6 شهور في الوظيفة، بطاقة ائتمان Unsecured (غير مضمنة). برنامج الحد الائتماني مقابل الحد الائتماني (شركات التقسيط): الشركات المعتمدة: أمان (Aman)، فاليو (Valu)، سهولة (Souhoula)، كليفر (Clever)، حالاً (Halan)، ترو (True). برنامج أصحاب الأعمال (Self-Employed): سجل تجاري + كشف حساب 6 شهور + زيارة ميدانية. برنامج جيل Z (الطلاب): طلبة الجامعات الحكومية والخاصة. الضامن: الأب أو الأم بوظيفة مثبتة.`
            },
            {
              id: "omni_channel",
              section: "Omni-Channel – راية كلها بيت واحد",
              category: "policies",
              keywords: ["omni", "channel", "قنوات", "أونلاين", "كول سنتر", "فروع", "شحن", "طلب"],
              content: `Omni-Channel: تقديم أفضل خدمة من خلال كل قنوات بيع راية. السيناريوهات: 1) المنتج مش عندي في الفرع: ابحث في الفروع التانية، اعرض الحجز والدفع في فرعك والاستلام من الفرع الآخر. 2) ضيف الأونلاين والكول سنتر: رحب بيه جداً واطلب رقم الأوردر وسلمه المنتج فوراً. 3) شراء من فرع آخر واسترجاع: استلمه فوراً وساعده. 4) المنتج مش في الفروع نهائياً: افتح راية شوب Online وساعد العميل يطلبه. للاستعلام والاستفسار: 19900.`
            },
            {
              id: "csat_nps",
              section: "C-SAT vs NPS",
              category: "policies",
              keywords: ["csat", "nps", "تقييم", "رضا", "ولاء", "مروجون", "منتقدون", "سلبيون", "مؤشر"],
              content: `C-SAT (Customer Satisfaction): مقياس رضا العميل عن تجربته الآن. الهدف: رضا فوري. الحساب: عدد التقييمات الإيجابية ÷ إجمالي عدد التقييمات × 100. NPS (Net Promoter Score): صافي نقاط الترويج. الهدف: ولاء دائم. الحساب: % المروجين (تقييم 9-10) - % المنتقدين (تقييم 0-6). السلبيون (تقييم 7-8): عملاء راضين لكن بولاء والم. الـ CSAT بيقيس نجاحك في بيعة النهاردة، لكن الـ NPS بيقيس نجاحك في بناء علاقة دائمة مع العميل.`
            },
            {
              id: "teamwork",
              section: "العمل كفريق",
              category: "culture",
              keywords: ["فريق", "تعاون", "إدارات", "فروع", "بروموتر", "شركة", "موحد"],
              content: `العمل كفريق: التجربة الناجحة للعميل مش فردية، بترجع للفريق. كلنا بالنسبة للعميل بنمثل راية. التعاون بين الإدارات: لو العميل اشتكى من إدارة معينة (IT أو المخازن)، لا تقول "المشكلة من قسم كذا مش مننا". الصح إننا كلنا حاجة واحدة. لا تدخل العميل أبداً أو تحكيله عن مشاكل الشركة الداخلية. التعاون داخل الفرع: كلنا لازم نكون بنتعامل بنفس الطريقة وبنتكلم بنفس اللغة مع العميل. أنت صاحب البيت والعميل ضيفك. البروموتر يقوم بدور مساعد ليك. التعاون بين الفروع: الزم كل الفروع يكون مُوحد فيها طريقة التعامل.`
            },
            {
              id: "protocols_opening",
              section: "بروتوكول صاحب البيت (الفتح والإغلاق)",
              category: "protocols",
              keywords: ["فتح", "إغلاق", "بروتوكول", "9:30", "10", "أجهزة العرض", "تجهيز", "آخر ضيف"],
              content: `بروتوكول صاحب البيت: 9:30 صباحاً – الاستعداد: تأكد من تواجد جميع أفراد الفريق / تجهيز الفرع: تشغيل الإضاءة والتكييف وأجهزة العرض / مراجعة سريعة للأهداف اليومية / لبس اليونيفورم. سياسة الملابس: مسموح: قميص بولو راية نظيف ومكوي، بنطلون جينز غير ممزق، أحذية كاجوال أنيقة. ممنوع: شورت، قميص مجعد، شباشب، أحذية رياضية. 10:00 صباحاً – فتح الأبواب: استقبال العملاء بابتسامة. بروتوكول الإغلاق: لو عميل دخل الفرع قبل موعد الإغلاق بدقيقة، يُتعامل كأنه أول عميل في اليوم. ممنوع نقفل الأنوار أو نلم الأجهزة أو نحسس العميل باستعجال.`
            },
            {
              id: "protocols_completion",
              section: "بروتوكول إتمام البيع",
              category: "protocols",
              keywords: ["إتمام البيع", "dynamics", "سيريال", "tender", "دفع", "فاتورة", "ضمان", "QR"],
              content: `بروتوكول إتمام البيع: 1) الاستقبال وكشف الاحتياج 2) الاختيار والعرض 3) المراجعة والتأكيد (قبل السيستم) – خطوة إلزامية 4) شغل السيستم Dynamics: أدخل كود المنتج والكمية + رقم السيريال للأجهزة اللي ليها سيريال. 5) مرحلة الدفع Tender: كاش / بطاقة ائتمان / بطاقة خصم / تقسيطي / Valu/Sohoola/Halan/أمان. 6) التسليم وما بعد البيع: اطبع الفاتورة + شرح الضمان بالتفصيل (من المسئول؟ عناوين الصيانة؟ تفعيل QR للبراندات: De'Longhi, Kenwood, Philips, Sary, Braun). إبلاغ العميل بـ Survey التقييم.`
            },
            {
              id: "maintenance",
              section: "صيانة راية وصيانة الوكيل",
              category: "policies",
              keywords: ["صيانة", "وكيل", "سامسونج", "بيكو", "كونتكس", "مراكز صيانة"],
              content: `أجهزة صيانتها في راية (تتدخل صيانة راية): الموبايلات والإكسسوارات (ACE, AllCall, Aukey, Benco, CMF, HMD, Hoco, Huawei, IKU, Infinix, itel, Lenovo, Micromax, Motorola, Nokia, Nothing, Oraimo, TECNO, SARY) / أجهزة التكنولوجيا واللاب توب (Asus, Canon, Lexmark, Xerox, MSI) / الشاشات (TV): Beko, SARY / الأجهزة المنزلية الصغيرة والعناية الشخصية: Braun, DELONGHI, Kenwood, Philips, SARY. أجهزة صيانتها عند الوكيل الخارجي: سامسونج (19580) – بيكو – الأجهزة المنزلية الكبيرة (16165) / كونتكس – الشاشات (19501).`
            },
            {
              id: "antifraud",
              section: "بروتوكول حارس البيت – مكافحة الاحتيال",
              category: "protocols",
              keywords: ["احتيال", "حارس", "تزوير", "انتحال", "تسييل", "KYC", "fraud", "شك", "مستند"],
              content: `بروتوكول حارس البيت: أنواع الاحتيال الشائعة: 1) التسييل (الكاش الوهمي): شراء أجهزة غالية بالتقسيط وبيعها فوراً بالخسارة للحصول على كاش. 2) انتحال الشخصية: شراء ببطاقة أو بيانات شخص آخر. 3) التزوير: تزوير مفردات المرتب أو إيصالات النور أو التلاعب في الرقم القومي. الوصايا الذهبية: راجع الأصل بنفسك (دائماً اطلب المستند الأصلي) / لا توقع بالنيابة عن الضيف (تهمة تزوير!) / لا للتعديل بدون إثبات / شككت؟ تواصل فوراً مع إدارة مكافحة الاحتيال (Fraud Team). قاعدة KYC: "متبيعش لمجهول".`
            },
            {
              id: "glossary",
              section: "قاموس لغة صاحب البيت",
              category: "protocols",
              keywords: ["قاموس", "HA", "MDA", "SDA", "AC", "ACC", "POSM", "USP", "ASP", "DBR", "MTD", "YOY", "VM", "مصطلح"],
              content: `قاموس المصطلحات: HA/MDA = الأجهزة المنزلية الكبيرة (ثلاجات، غسالات، بوتاجازات) / SDA = الأجهزة المنزلية الصغيرة (ميكروويف، مكنسة، خلاط) / AC = أجهزة التكييف / PC = أجهزة العناية الشخصية / ACC = الإكسسوارات / POSM = المواد التسويقية البيعية (كروت الأسعار) / USP = الميزة التنافسية الفريدة / ASP = متوسط سعر البيع / DBR = عبء الدين (لا تتعدى 50% من الدخل) / MTD = مبيعات الشهر حتى تاريخه / YOY = المقارنة السنوية / VM = العرض المرئي / Attach Rate = معدل المرفقات (Cross-selling) / Target = الهدف اليومي / Ach = المحقق الفعلي / Incentive = العمولة / Contest = المسابقات البيعية.`
            },
            {
              id: "visual_merchandising",
              section: "بروتوكول واجهة بيتك – العرض والكروت",
              category: "protocols",
              keywords: ["عرض", "كروت", "POSM", "واجهة", "خريطة منتجات", "رص", "ترتيب", "best seller", "new arrival"],
              content: `بروتوكول واجهة بيتك: كارت السعر إلزامي لكل منتج. خريطة عرض المنتجات: الإكسسوارات بترتيب تصاعدي (ساعات ذكية → سماعات → شواحن → كابلات). الشاشات والغسالات: من الأصغر للأكبر. الثلاجات: من الأكبر للأصغر. البوتاجازات: حسب المقاس ثم السعر تصاعدياً. الكروت البيعية: Best Seller = أسفل يمين المنتج / عرض خاص (قبل وبعد) = زاوية علوية يمنى / تقسيط زيرو = زاوية يمنى سفلى أو منتصف / هدية مجانية أو Clearance = لخلق الاستعجال. الكارت البيعي "آخر قطعة" = يُستخدم عند المخزون المحدود.`
            }
          ];

          // ─── SYSTEM PROMPT (exported for backend use) ─────────────────────
          const SYSTEM_PROMPT = `أنت "مساعد راية الذكي"، مساعد ذكاء اصطناعي متخصص في دعم استشاريي المبيعات.

قواعد صارمة لا تقبل الاستثناء:
المرجعية الوحيدة: الإجابات يجب أن تُستخرج بنسبة 100% من قاعدة البيانات (Knowledge Base) المزودة لك.
المنع البات للتأليف: لا تقم أبداً باختراع، أو استنتاج، أو إضافة سياسات أو خطوات أو أسعار غير مذكورة صراحةً في الداتا.

إدارة المجهول: إذا كان سؤال المستخدم غير مغطى في قاعدة البيانات، لا تحاول التخمين. أجب بصيغة ثابتة ومهنية: "عذراً طلبك غير متاح. لا توجد أجهزة تجمع بين المواصفات المذكورة وميزة محرك إنفرتر أو ما شابهها في الداتا المتاحة. برجاء التواصل مع هشام الغمراوى"

تحليل القصد (Intent Analysis): اقرأ سؤال المستخدم بعمق. هل يبحث عن حل لمشكلة مع عميل؟ هل يبحث عن مواصفات جهاز؟ افهم الموقف ووجه إجابتك لحل المشكلة فوراً.

المنطق البيعي: اربط بين المعلومات المتاحة لتقديم إجابة متماسكة (مثلاً: إذا سأل عن بيع شاشة، اذكر مواصفاتها واقترح ملحقاتها إذا كانت متوفرة بالداتا).

استشاريو المبيعات يستخدمون مصطلحات مهنية مكتوبة بحروف عربية. يجب عليك فهمها كمرادفاتها الإنجليزية وتطبيقها بناءً على الداتا:
- اب سيل / اب سيلينج = Up-selling (اقتراح جهاز من فئة أعلى أو إمكانيات أفضل).
- كروس سيل / كروس سيلينج = Cross-selling (بيع ملحقات وإكسسوارات مكملة للجهاز الأساسي).
- فيتشر = Feature (الخصائص والمواصفات الفنية للإلكترونيات).

البيانات المتاحة: ${JSON.stringify(KNOWLEDGE_BASE.map(k => ({ id: k.id, section: k.section, content: k.content })))}`;

          // ─── SEARCH ENGINE ─────────────────────────────────────────────────
          let searchTimeout = null;
          let currentQuery = '';

          document.getElementById('searchInput').addEventListener('input', function (e) {
            const q = e.target.value.trim();
            document.getElementById('searchClear').style.display = q ? 'block' : 'none';
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => performSearch(q), 280);
          });

          function clearSearch() {
            document.getElementById('searchInput').value = '';
            document.getElementById('searchClear').style.display = 'none';
            document.getElementById('searchStats').textContent = '';
            document.getElementById('searchResults').classList.remove('active');
            document.getElementById('manualContent').classList.remove('hidden');
            currentQuery = '';
          }

          function performSearch(query) {
            currentQuery = query;
            const resultsEl = document.getElementById('searchResults');
            const manualEl = document.getElementById('manualContent');
            const statsEl = document.getElementById('searchStats');

            if (!query || query.length < 2) {
              resultsEl.classList.remove('active');
              manualEl.classList.remove('hidden');
              statsEl.textContent = '';
              return;
            }

            resultsEl.classList.add('active');
            manualEl.classList.add('hidden');

            const q = query.toLowerCase().trim();
            const results = [];

            KNOWLEDGE_BASE.forEach(item => {
              const fullText = item.content + ' ' + item.keywords.join(' ') + ' ' + item.section;
              if (fullText.toLowerCase().includes(q)) {
                const idx = item.content.toLowerCase().indexOf(q);
                let snippet = item.content;
                if (idx > -1) {
                  const start = Math.max(0, idx - 100);
                  const end = Math.min(item.content.length, idx + query.length + 120);
                  snippet = (start > 0 ? '...' : '') + item.content.substring(start, end) + (end < item.content.length ? '...' : '');
                }
                snippet = snippet.replace(new RegExp('(' + escapeRe(query) + ')', 'gi'), '<mark>$1</mark>');
                results.push({ section: item.section, snippet, id: item.id });
              }
            });

            if (results.length === 0) {
              resultsEl.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><div class="no-results-text">لا توجد نتائج لـ "${query}"</div><div class="no-results-sub">جرب كلمات أخرى أو تحقق من التهجئة</div></div>`;
              statsEl.innerHTML = '';
              return;
            }

            statsEl.innerHTML = `<span class="count">${results.length}</span> نتيجة لـ "<strong>${query}</strong>"`;
            resultsEl.innerHTML = results.map(r => `
    <div class="search-result-card" onclick="scrollToSection('${r.id}')">
      <div class="result-section-tag">📌 ${r.section}</div>
      <div class="result-text">${r.snippet}</div>
    </div>
  `).join('');
          }

          function escapeRe(str) {
            return str.replace(/[.*+?^${}()|[\]\\]/g, '\\<iframe src="raya_consultant_app.html" style="width:100%; height:85vh; border:none; border-radius:12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); display:block; background: #fff;"></iframe>');
          }

          function scrollToSection(id) {
            clearSearch();
            const mapping = {
              'culture_vision': 'sec-culture',
              'experience_difference': 'sec-experience',
              'communication_skills': 'sec-skills',
              'listening_skills': 'sec-skills',
              'greeting': 'sec-guest',
              'understand_value': 'sec-guest',
              'customer_types': 'sec-guest',
              'expose_product': 'sec-guest',
              'selling_skills': 'sec-guest',
              'thank_close': 'sec-guest',
              'complaints_handling': 'sec-complaints',
              'return_policy': 'sec-policies',
              'installment_basic': 'sec-installment',
              'installment_blacklist': 'sec-installment',
              'installment_programs': 'sec-installment',
              'omni_channel': 'sec-policies',
              'csat_nps': 'sec-policies',
              'teamwork': 'sec-culture',
              'protocols_opening': 'sec-protocols',
              'protocols_completion': 'sec-protocols',
              'maintenance': 'sec-policies',
              'antifraud': 'sec-protocols',
              'glossary': 'sec-protocols',
              'visual_merchandising': 'sec-protocols'
            };
            const secId = mapping[id] || id;
            const el = document.getElementById(secId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              el.style.outline = '2px solid #3a6fd8';
              setTimeout(() => { el.style.outline = ''; }, 2000);
              const block = el.querySelector('.section-block');
              if (block && block.classList.contains('collapsed')) {
                block.classList.remove('collapsed');
              }
            }
          }

          // ─── TOC FILTER ─────────────────────────────────────────────────────
          function filterSection(category, chip) {
            document.querySelectorAll('.toc-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            clearSearch();
            const sections = document.querySelectorAll('.section-block');
            sections.forEach(s => {
              if (category === 'all') {
                s.style.display = '';
              } else {
                s.style.display = s.dataset.category === category ? '' : 'none';
              }
            });
          }

          // ─── SECTION COLLAPSE ─────────────────────────────────────────────
          function toggleSection(header) {
            const block = header.parentElement;
            block.classList.toggle('collapsed');
          }

          // ─── AI CHATBOT ─────────────────────────────────────────────────────
          let isTyping = false;

          function getCurrentTime() {
            const now = new Date();
            return now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
          }

          function sendQuickQ(btn) {
            const text = btn.textContent;
            document.getElementById('chatInput').value = text;
            sendMessage();
          }

          function handleKeyDown(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }

          function autoResize(el) {
            el.style.height = 'auto';
            el.style.height = Math.min(el.scrollHeight, 100) + 'px';
          }

          function appendMessage(role, text, source) {
            const msgs = document.getElementById('chatMessages');
            const div = document.createElement('div');
            div.className = `msg ${role}`;
            const avatarIcon = role === 'user' ? '👤' : '🤖';
            const timeStr = getCurrentTime();
            const sourceHtml = (role === 'bot' && source) ? `<div class="msg-source">📌 المصدر: <span class="msg-source-tag">${source}</span></div>` : '';
            div.innerHTML = `
    <div class="msg-avatar-small">${avatarIcon}</div>
    <div>
      <div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>
      ${sourceHtml}
      <div class="msg-time">${timeStr}</div>
    </div>
  `;
            msgs.appendChild(div);
            msgs.scrollTop = msgs.scrollHeight;
          }

          function showTyping(show) {
            const ti = document.getElementById('typingIndicator');
            ti.className = show ? 'typing-indicator visible' : 'typing-indicator';
            if (show) {
              const msgs = document.getElementById('chatMessages');
              msgs.scrollTop = msgs.scrollHeight;
            }
          }

          function sendMessage() {
            if (isTyping) return;
            const input = document.getElementById('chatInput');
            const q = input.value.trim();
            if (!q) return;

            appendMessage('user', q);
            input.value = '';
            input.style.height = 'auto';
            document.getElementById('sendBtn').disabled = true;
            isTyping = true;
            showTyping(true);

            setTimeout(() => {
              const answer = generateAnswer(q);
              showTyping(false);
              appendMessage('bot', answer.text, answer.source);
              document.getElementById('sendBtn').disabled = false;
              isTyping = false;
            }, 900 + Math.random() * 600);
          }

          function generateAnswer(question) {
            const q = question.toLowerCase().trim();
            const words = q.split(/\s+/);
            let bestMatch = null;
            let bestScore = 0;

            KNOWLEDGE_BASE.forEach(item => {
              let score = 0;
              const fullText = (item.content + ' ' + item.keywords.join(' ') + ' ' + item.section).toLowerCase();
              words.forEach(w => {
                if (w.length > 2 && fullText.includes(w)) score += 2;
              });
              item.keywords.forEach(kw => {
                if (q.includes(kw.toLowerCase())) score += 5;
              });
              if (fullText.includes(q.substring(0, Math.min(q.length, 20)))) score += 10;

              if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
              }
            });

            if (!bestMatch || bestScore < 3) {
              return {
                text: `عذراً، هذه المعلومة غير متوفرة في دليل الاستخدام الحالي.\n\nيمكنك البحث في الدليل باستخدام شريط البحث على اليسار، أو اسأل عن: منهجية GUEST، شروط التقسيط، سياسة الاسترجاع، شخصيات العملاء، بروتوكولات التشغيل، قيم راية.`,
                source: null
              };
            }

            const answer = formatAnswer(bestMatch, question);
            return { text: answer, source: bestMatch.section };
          }

          function formatAnswer(item, question) {
            const cleanQ = question.toLowerCase().replace(/[؟?.,!،:]/g, '');
            const stopWords = ['ايه', 'ما', 'هو', 'هي', 'معنى', 'يعني', 'كيف', 'متى', 'شرح', 'في', 'عن', 'هل', 'من', 'ماذا', 'لو', 'عشان'];
            const words = cleanQ.split(/\s+/).filter(w => w.length > 1 && !stopWords.includes(w));
            const searchWords = words.length > 0 ? words : cleanQ.split(/\s+/).filter(w => w.length > 1);

            let content = item.content;

            let separator = null;
            if (content.includes(' / ') && item.id === 'glossary') {
              separator = ' / ';
            } else if (content.includes('. ')) {
              separator = '. ';
            } else if (content.includes('؟ ')) {
              separator = '؟ ';
            } else if (content.includes(' - ')) {
              separator = ' - ';
            } else if (content.includes('\n')) {
              separator = '\n';
            }

            if (separator && searchWords.length > 0) {
              const parts = content.split(separator);
              let bestParts = [];
              let maxScore = 0;

              parts.forEach(p => {
                const pl = p.toLowerCase();
                let score = 0;
                searchWords.forEach(w => {
                  if (w.match(/^[a-z]+$/)) {
                    if (new RegExp('\\b' + w + '\\b').test(pl)) score += 2;
                  } else {
                    // Check for exact Arabic word match
                    if (new RegExp('(^|\\s|\\W)' + w + '(\\s|\\W|$)').test(pl)) {
                      score += 2;
                    } else if (pl.includes(w)) {
                      score += 1;
                    }
                  }
                });
                if (score > maxScore) {
                  maxScore = score;
                  bestParts = [p];
                } else if (score === maxScore && score > 0) {
                  bestParts.push(p);
                }
              });

              if (bestParts.length > 0 && bestParts.length < parts.length) {
                let ans = bestParts.join(separator);
                if (separator === '. ' && !ans.endsWith('.')) ans += '.';
                return "من **" + item.section + "**\n\n" + ans;
              }
            }

            return "من **" + item.section + "**\n\n" + content;
          }

          // ─── MOBILE TOGGLE ─────────────────────────────────────────────────
          function showSubTab(containerId, tabId, el) {
            var container = document.getElementById(containerId);
            var steps = container.querySelectorAll('.sub-step');
            steps.forEach(function (s) { s.classList.remove('active-sub-step'); });
            el.classList.add('active-sub-step');
            var contents = container.querySelectorAll('.sub-tab-content');
            contents.forEach(function (c) { c.style.display = 'none'; });
            document.getElementById(containerId + '-tab-' + tabId).style.display = 'block';
          }

          function showSectionTab(sectionId, tabId, el) {
            var section = document.getElementById('sec-' + sectionId);
            var steps = section.querySelectorAll('.guest-step');
            steps.forEach(function (s) { s.classList.remove('active-step'); });
            el.classList.add('active-step');
            var contents = section.querySelectorAll('.section-tab-content');
            contents.forEach(function (c) { c.style.display = 'none'; });
            document.getElementById(sectionId + '-tab-' + tabId).style.display = 'block';
          }

          function toggleMobileChat() {
            document.getElementById('chatPanel').classList.toggle('mobile-open');
            setTimeout(() => {
              const input = document.getElementById('chatInput');
              if (input) input.focus();
            }, 100);
          }

          // ─── TOAST ─────────────────────────────────────────────────────────
          function showToast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2500);
          }

          // ─── INIT ──────────────────────────────────────────────────────────
          document.addEventListener('DOMContentLoaded', () => {
            // All sections start expanded
            document.querySelectorAll('.section-block').forEach(b => b.classList.remove('collapsed'));
          });
        


    // ══════════════════════════════════════════════════════════════
    const CAT_GRP = {
      'البوتاجازات (Cookers)': 'MDA', 'التبريد (الثلاجات والفريزرات)': 'MDA',
      'الغسالات (Washing Machines)': 'MDA', 'غسالات الأطباق (Dishwashers)': 'MDA',
      'أفران بلت ان': 'MDA', 'شفاطات بلت ان': 'MDA', 'مساطح بلت ان': 'MDA',
      'التكييفات (Air Conditioners)': 'MDA',
      'فئة السخانات (Water Heaters)': 'SDA', 'الأجهزة الصغيرة الأساسية (SDA)': 'SDA',
      'المطبخ الحديث (خلاطات)': 'SDA', 'المطبخ الحديث (العصارات)': 'SDA',
      'المطبخ الحديث (Air Fryers & Processors)': 'SDA',
      'صانعات القهوة (Coffee Machines)': 'SDA',
      'العناية الشخصية (Personal Care)': 'SDA', 'العناية بالملابس (Garment Care)': 'SDA',
      'غلايات المياه': 'SDA', 'المراوح': 'SDA',
      'الشاشات (TVs & Monitors)': 'ELEC', 'الأجهزة الذكية (Mobiles & Laptops)': 'ELEC',
      'الأجهزة الذكية (Mobiles)': 'ELEC', 'أجهزة الصوت (Soundbars)': 'ELEC',
      'الجيمنج والمنزل الذكي': 'ELEC',
    };

    // L2 sub-categories
    const L2_DEFS = {
      MDA: [
        { id: 'cookers', lbl: '🍳 البوتجازات', fabCat: 'البوتاجازات (Cookers)', arTypes: ['البوتجازات'] },
        { id: 'fridges', lbl: '❄️ الثلاجات', fabCat: 'التبريد (الثلاجات والفريزرات)', arTypes: ['الثلاجات'] },
        { id: 'freezers', lbl: '🧊 الفريزرات', fabCat: 'التبريد (الثلاجات والفريزرات)', arTypes: ['الفريزرات'] },
        { id: 'washers', lbl: '🫧 الغسالات', fabCat: 'الغسالات (Washing Machines)', arTypes: ['الغسالات'] },
        { id: 'dw', lbl: '🍽️ غسالات الأطباق', fabCat: 'غسالات الأطباق (Dishwashers)', arTypes: ['غسالات الاطباق'] },
        { id: 'ovens', lbl: '🔥 أفران بلت إن', fabCat: 'أفران بلت ان', arTypes: ['افران بلت ان'] },
        { id: 'hoods', lbl: '💨 شفاطات بلت إن', fabCat: 'شفاطات بلت ان', arTypes: ['شفاط بلت ان'] },
        { id: 'hobs', lbl: '⊞ مساطح بلت إن', fabCat: 'مساطح بلت ان', arTypes: ['مسطح بلت ان'] },
        { id: 'ac', lbl: '🌬️ التكييفات', fabCat: 'التكييفات (Air Conditioners)', arTypes: ['تكيفات'] },
      ],
      SDA: [
        { id: 'heaters', lbl: '🚿 سخانات المياه', fabCat: 'فئة السخانات (Water Heaters)', arTypes: ['سخان مياه'] },
        { id: 'small', lbl: '🔌 أجهزة صغيرة', fabCat: 'الأجهزة الصغيرة الأساسية (SDA)', arTypes: ['المكانس', 'مبرد المياه', 'الميكسر', 'المفرمة', 'الشوايات'] },
        { id: 'blenders', lbl: '🌀 خلاطات', fabCat: 'المطبخ الحديث (خلاطات)', arTypes: ['خلاطات'] },
        { id: 'juicers', lbl: '🥤 عصارات', fabCat: 'المطبخ الحديث (العصارات)', arTypes: ['العصارات'] },
        { id: 'afry', lbl: '🥗 قلايات هوائية', fabCat: 'المطبخ الحديث (Air Fryers & Processors)', arTypes: ['القلايات', 'محضر الطعام'] },
        { id: 'coffee', lbl: '☕ ماكينات القهوة', fabCat: 'صانعات القهوة (Coffee Machines)', arTypes: ['صانع ومحضر القهوة'] },
        { id: 'personal', lbl: '💇 العناية الشخصية', fabCat: 'العناية الشخصية (Personal Care)', arTypes: ['ادوات فرد الشعر', 'مصفف الشعر', 'مجفف الشعر', 'ماكينات الحلاقة'] },
        { id: 'garment', lbl: '👕 العناية بالملابس', fabCat: 'العناية بالملابس (Garment Care)', arTypes: ['المكواه'] },
        { id: 'kettles', lbl: '🫖 غلايات المياه', fabCat: 'غلايات المياه', arTypes: ['غلايات المياة'] },
        { id: 'fans', lbl: '🌬️ مراوح', fabCat: 'المراوح', arTypes: ['المراوح'] },
      ],
      ELEC: [
        { id: 'tvs', lbl: '📺 تلفزيونات وشاشات', fabCat: 'الشاشات (TVs & Monitors)', arTypes: ['التلفزيونات', 'الشاشات'] },
        { id: 'laptops', lbl: '💻 لاب توب', fabCat: 'الأجهزة الذكية (Mobiles & Laptops)', arTypes: ['لاب توب'] },
        { id: 'mobiles', lbl: '📱 موبايل وتابلت', fabCat: 'الأجهزة الذكية (Mobiles)', arTypes: ['الموبايل & التابلت', 'الموبايل & التابلت IOS'] },
        { id: 'audio', lbl: '🎵 صوت ومسرح منزلي', fabCat: 'أجهزة الصوت (Soundbars)', arTypes: ['المسرح المنزلى', 'السماعات & مكبرات الصوت'] },
        { id: 'gaming', lbl: '🎮 جيمنج ومنزل ذكي', fabCat: 'الجيمنج والمنزل الذكي', arTypes: ['اجهزة الالعاب', 'ادوات المنزل الذكي'] },
      ],
    };

    // Type -> FAB cat
    const TYPE_CAT = {
      'البوتجازات': 'البوتاجازات (Cookers)',
      'الثلاجات': 'التبريد (الثلاجات والفريزرات)',
      'الفريزرات': 'التبريد (الثلاجات والفريزرات)',
      'الغسالات': 'الغسالات (Washing Machines)',
      'غسالات الاطباق': 'غسالات الأطباق (Dishwashers)',
      'افران بلت ان': 'أفران بلت ان',
      'شفاط بلت ان': 'شفاطات بلت ان',
      'مسطح بلت ان': 'مساطح بلت ان',
      'تكيفات': 'التكييفات (Air Conditioners)',
      'سخان مياه': 'فئة السخانات (Water Heaters)',
      'خلاطات': 'المطبخ الحديث (خلاطات)',
      'العصارات': 'المطبخ الحديث (العصارات)',
      'صانع ومحضر القهوة': 'صانعات القهوة (Coffee Machines)',
      'ادوات فرد الشعر': 'العناية الشخصية (Personal Care)',
      'مصفف الشعر': 'العناية الشخصية (Personal Care)',
      'مجفف الشعر': 'العناية الشخصية (Personal Care)',
      'ماكينات الحلاقة': 'العناية الشخصية (Personal Care)',
      'المكواه': 'العناية بالملابس (Garment Care)',
      'غلايات المياة': 'غلايات المياه',
      'المراوح': 'المراوح',
      'التلفزيونات': 'الشاشات (TVs & Monitors)',
      'الشاشات': 'الشاشات (TVs & Monitors)',
      'لاب توب': 'الأجهزة الذكية (Mobiles & Laptops)',
      'الموبايل & التابلت': 'الأجهزة الذكية (Mobiles)',
      'الموبايل & التابلت IOS': 'الأجهزة الذكية (Mobiles)',
      'المسرح المنزلى': 'أجهزة الصوت (Soundbars)',
      'اجهزة الالعاب': 'الجيمنج والمنزل الذكي',
      'القلايات': 'المطبخ الحديث (Air Fryers & Processors)',
      'محضر الطعام': 'المطبخ الحديث (Air Fryers & Processors)',
      'المكانس': 'الأجهزة الصغيرة الأساسية (SDA)',
      'مبرد المياه': 'الأجهزة الصغيرة الأساسية (SDA)',
      'سماعات الأذن': 'أجهزة الصوت (Soundbars)',
      'سماعات اذن & سماعات رأس': 'أجهزة الصوت (Soundbars)',
      'السماعات & مكبرات الصوت': 'أجهزة الصوت (Soundbars)',
    };

    const TYPE_ICON = {
      'البوتجازات': '🍳', 'الثلاجات': '❄️', 'الفريزرات': '🧊', 'الغسالات': '🫧',
      'غسالات الاطباق': '🍽️', 'افران بلت ان': '🔥', 'شفاط بلت ان': '💨',
      'مسطح بلت ان': '⊞', 'تكيفات': '🌬️', 'سخان مياه': '🚿',
      'التلفزيونات': '📺', 'الشاشات': '🖥️', 'لاب توب': '💻', 'المسرح المنزلى': '🎵',
      'المكانس': '🧹', 'القلايات': '🥗', 'خلاطات': '🌀',
      'الموبايل & التابلت': '📱', 'الموبايل & التابلت IOS': '📱',
      'اجهزة الالعاب': '🎮', 'ماكينات الحلاقة': '🪒', 'المكواه': '👕',
      'مبرد المياه': '🧊', 'المراوح': '🌬️', 'غلايات المياة': '🫖',
    };

    const CAT_ICON = {
      'البوتاجازات (Cookers)': '🍳', 'التبريد (الثلاجات والفريزرات)': '❄️',
      'الغسالات (Washing Machines)': '🫧', 'غسالات الأطباق (Dishwashers)': '🍽️',
      'أفران بلت ان': '🔥', 'شفاطات بلت ان': '💨', 'مساطح بلت ان': '⊞',
      'التكييفات (Air Conditioners)': '🌬️', 'فئة السخانات (Water Heaters)': '🚿',
      'الأجهزة الصغيرة الأساسية (SDA)': '🔌', 'المطبخ الحديث (خلاطات)': '🌀',
      'المطبخ الحديث (العصارات)': '🥤', 'المطبخ الحديث (Air Fryers & Processors)': '🥗',
      'صانعات القهوة (Coffee Machines)': '☕', 'العناية الشخصية (Personal Care)': '💇',
      'العناية بالملابس (Garment Care)': '👕', 'غلايات المياه': '🫖', 'المراوح': '🌬️',
      'الشاشات (TVs & Monitors)': '📺', 'الأجهزة الذكية (Mobiles & Laptops)': '💻',
      'الأجهزة الذكية (Mobiles)': '📱', 'أجهزة الصوت (Soundbars)': '🎵',
      'الجيمنج والمنزل الذكي': '🎮',
    };

    // ══════════════════════════════════════════════════════════════
    // SPEC KEY → FAB FEATURE KEYWORD MAPPING
    // Used to match SKU spec keys to FAB feature entries
    // ══════════════════════════════════════════════════════════════
    const SPEC_KW = {
      'خاصية الامان': ['أمان', 'Safety'],
      'مروحة بالفرن': ['مروحة توزيع', 'Convection'],
      'نوع الحوامل': ['حوامل', 'Cast Iron'],
      'شاشة ديجيتال': ['ديجيتال', 'Timer'],
      'خاصية التايمر': ['تايمر', 'Timer'],
      'اشعال ذاتي': ['إشعال', 'Ignition'],
      'درج تدفئة سفلي': ['درج التدفئة', 'Warming Drawer'],
      'خاصية الشواية': ['الشواية'],
      'حجم الفرن': ['حجم الفرن'],
      'تكنولوجيا الانفرتر': ['إنفرتر', 'Inverter'],
      'نظام التبريد': ['نو فروست', 'No Frost', 'Twin Cooling'],
      'نوع الاضاءة الداخلية': ['LED', 'إضاءة'],
      'ارفف قابلة للتعديل': ['أرفف', 'Glass Shelf'],
      'صانع مكعبات الثلج': ['تجميد سريع', 'Fast Freeze'],
      'عدد لفات الغسالة في الدقيقة': ['سرعة العصر', 'RPM'],
      'بخاصية الانفرتر': ['إنفرتر', 'Inverter Technology'],
      'خاصية البلازما': ['بلازما', 'Plasma'],
      'خاصية التربو': ['تيربو', 'Turbo'],
      'دقة الشاشة': ['4K', 'FHD', 'دقة الشاشة'],
      'تقنية الشاشة': ['QLED', 'OLED', 'Quantum'],
      'اتصال ذكي': ['واي فاي', 'Smart TV'],
      'عدد منافذ HDMI': ['HDMI'],
      'نوع الهارد': ['SSD', 'هارد'],
      'سعة الرام': ['RAM', 'رام', 'الذاكرة'],
      'واي فاي': ['واي فاي', 'Smart', 'WiFi'],
      'بلوتوث': ['بلوتوث', 'wireless'],
      'نوع المعالج': ['معالج', 'Processor'],
      'مقاس الشاشة': ['شاشة', 'دقة'],
      'القوة': ['وات', 'قوة', 'Motor'],
      'نوع كيس الاتربة': ['هيبا', 'HEPA', 'Cyclonic'],
      'خاصية استرجاع السلك': ['لاسلكي', 'Cordless'],
      'مضخة ضغط': ['بار', 'ضغط', 'Pump'],
    };

    // ══════════════════════════════════════════════════════════════
    // AI FAB GENERATION — matches file tone/dialect exactly
    // ══════════════════════════════════════════════════════════════
    function generateFAB(specKey, specVal, prodType, prodName) {
      const n = norm(specKey);
      const v = String(specVal);

      // ─ Numeric values pattern helpers
      const numMatch = v.match(/\d+[\d.,]*/);
      const num = numMatch ? numMatch[0] : v;

      // ─ Map spec key → generated FAB
      const g = {

        // SIZES / CAPACITY
        'عدد الشعلات': {
          f: 'عدد الشعلات (' + v + ')',
          a: 'سطح طهي مزوّد بـ ' + v + ' شعلة بأحجام وقدرات مختلفة (صغيرة للنار الهادية، كبيرة للطهي السريع، وووك للقوة العالية).',
          b: '"اطبخي كل حاجة مع بعض في نفس الوقت!" سطح طهي بـ ' + v + ' شعلة يعني تقدري تشغلي الحلل دفعة واحدة وتخلصي الأكل في نص الوقت، مثالي للعزومات والعيلة الكبيرة.'
        },
        'مقاس البوتجاز': {
          f: 'المقاس الواسع (' + v + ')',
          a: 'عرض سطح الطهي ' + v + ' سم يتيح مساحة أكبر للشعلات وصواني الفرن الكبيرة.',
          b: '"صينية الكنافة والتورتة هتدخل براحة!" مقاس ' + v + ' سم يديك مساحة حركة أوسع في المطبخ ويسهّل الطهي بكميات كبيرة من غير زحام.'
        },
        'السعة اللترية': {
          f: 'السعة التخزينية الكبيرة (' + v + ')',
          a: 'حجم داخلي صافٍ يبلغ ' + v + ' يوزَّع على أقسام منفصلة لكل نوع من المواد الغذائية.',
          b: '"تسوّقي شراء أسبوع كامل من غير ما تقلقي على المساحة!" سعة ' + v + ' تكفي لاحتياجات عيلة كاملة، مفيش حاجة تترك برا وتفسد.'
        },
        'السعة بالقدم': {
          f: 'السعة الكبيرة (' + v + ' قدم)',
          a: 'حجم تخزين داخلي ' + v + ' قدم مكعب يوزع على أقسام ثلاجة وفريزر بمساحة واسعة.',
          b: '"مشتريات البيت كلها هتلاقي مكانها!" مساحة ' + v + ' قدم تكفي لتخزين احتياجات الأسبوع كامل، خضار وفاكهة ولحوم مع بعض من غير ضغط.'
        },
        'سعة التحميل بالكيلو': {
          f: 'سعة تحميل كبيرة (' + v + ' كجم)',
          a: 'حلة الغسيل تستوعب حتى ' + v + ' كيلو من الملابس في دورة واحدة كاملة.',
          b: '"بياضات العيلة هتخلص في دورة واحدة بس!" سعة ' + v + ' كيلو توفر عليكي وقت ومياه وكهرباء، بدل تشغيل دورتين أو تلاتة.'
        },
        'مقاس الشاشة': {
          f: 'شاشة بمقاس ' + v,
          a: 'لوحة عرض بقطر ' + v + ' توفر مساحة مشاهدة واسعة مع وضوح تام للتفاصيل من مسافات بعيدة.',
          b: '"احساس السينما في صالة بيتك!" مقاس ' + v + ' مثالي للمشاهدة الجماعية مع العيلة، كل تفاصيل المسلسلات والماتشات واضحة من أي مكان في الأوضة.'
        },
        'سعة الرام': {
          f: 'ذاكرة عشوائية ' + v,
          a: 'رام بسعة ' + v + ' يتيح تشغيل تطبيقات متعددة بالتوازي دون إبطاء أو تجمد.',
          b: '"افتح كل التطبيقات اللي عايزها مع بعض والجهاز مش هيهنج!" رام ' + v + ' يضمن أداء طلق وسلس في الشغل والدراسة والترفيه.'
        },
        'السعة التخزينية للهارد': {
          f: 'تخزين واسع (' + v + ')',
          a: 'وحدة تخزين بسعة ' + v + ' لحفظ الملفات والصور والبرامج والألعاب.',
          b: '"حفظ كل حاجاتك من غير ما تقلق من مساحة!" ' + v + ' كافية لآلاف الصور والفيديوهات وعشرات الألعاب والبرامج.'
        },
        'قدرة استهلاك الطاقة': {
          f: 'قدرة تشغيلية (' + v + ')',
          a: 'استهلاك طاقة يبلغ ' + v + ' يعكس الكفاءة التشغيلية للجهاز.',
          b: '"جهاز بقدرة مناسبة لاستهلاك معقول!" كل ما كانت القدرة مضبوطة، كل ما كانت فاتورة الكهرباء أكثر توقعاً وانتِ مطمنة.'
        },
        'القوة': {
          f: 'موتور قوي (' + v + ')',
          a: 'محرك بقدرة ' + v + ' يضمن تشغيل سلس وفعّال وبأداء مستمر بدون توقف.',
          b: '"قوة تعالج أي مهمة في ثواني!" محرك ' + v + ' يتعامل مع أصعب المواد وأكثرها كثافة بكل سهولة وسرعة.'
        },

        // BRANDS
        'البراند': {
          f: 'ماركة ' + v,
          a: 'منتج من علامة ' + v + ' التجارية العالمية ذات السمعة الطويلة في الجودة والتقنية.',
          b: '"اشتري باسم تثق فيه وتعيش معاه سنين!" ' + v + ' توفر ضمان جودة حقيقي وصيانة ودعم فني موثوق.'
        },
        'العلامة التجارية': {
          f: 'ماركة ' + v,
          a: 'منتج من علامة ' + v + ' التجارية ذات الحضور القوي والتقنية المتطورة.',
          b: '"اختار ماركة بتضمن لك أداء عالٍ وقطع غيار متاحة!" ' + v + ' علامة موثوقة ومتوفر لها دعم فني محلي متميز.'
        },

        // CONNECTIVITY
        'واي فاي': {
          f: 'اتصال واي فاي مدمج',
          a: 'وحدة Wi-Fi مدمجة تتيح الاتصال بشبكة الإنترنت لاسلكياً وتحميل التطبيقات وتحديثات البرامج.',
          b: '"اتصل بالعالم من الجهاز مباشرة!" مفيش حاجة لأسلاك أو أجهزة توصيل إضافية - الإنترنت والتطبيقات في متناول إيدك فوراً.'
        },
        'بلوتوث': {
          f: 'بلوتوث لاسلكي',
          a: 'تقنية بلوتوث تسمح بتوصيل سماعات وأجهزة خارجية لاسلكياً في ثواني.',
          b: '"وصّل سماعاتك وابدأ من غير أسلاك مزعجة!" بلوتوث بيوفر حرية حركة كاملة وتجربة استخدام أنظف وأسهل.'
        },
        'شاشة باللمس': {
          f: 'شاشة لمس تفاعلية',
          a: 'تقنية اللمس تحوّل الشاشة لواجهة تفاعلية مباشرة بدون الحاجة لـ Mouse أو لوحة مفاتيح.',
          b: '"تحكم فوري وسريع بأطراف إيدك!" مثالي للاستخدام التعليمي والعروض التقديمية وكل ما يحتاج سرعة في التفاعل.'
        },

        // COLORS / DESIGN
        'لون المنتج': {
          f: 'تشطيب بلون ' + v,
          a: 'واجهة الجهاز بلون ' + v + ' بتشطيب احترافي مقاوم للخدوش يحافظ على مظهره الأنيق.',
          b: '"جهاز يضيف شياكة لديكور مطبخك!" اللون ' + v + ' يناسب أغلب ديكورات المطابخ العصرية ويضفي طابعاً أنيقاً على المساحة.'
        },
        'اللون': {
          f: 'تصميم بلون ' + v,
          a: 'تشطيب خارجي بلون ' + v + ' بجودة عالية مقاومة للصدمات والخدوش اليومية.',
          b: '"شكل أنيق يواكب أحدث الترندات!" لون ' + v + ' العصري يندمج مع أي ديكور ويحافظ على مظهره الجذاب لسنوات.'
        },

        // TYPES
        'نوع التحميل': {
          f: norm(v).includes('علوي') ? 'تحميل علوي' : 'تحميل أمامي',
          a: norm(v).includes('علوي')
            ? 'تصميم فوّهة الغسيل في الأعلى يتيح إضافة الملابس أو سحبها بدون انحناء.'
            : 'فوّهة الغسيل في الأمام لرؤية واضحة للملابس وسهولة في تحميلها.',
          b: norm(v).includes('علوي')
            ? '"وفري مساحة المطبخ مع راحة لظهرك!" الغسالة العلوية أصغر في العمق وتقفلي بابها في أي وقت بدون قلق من كرسي أو حاجة بجانبها.'
            : '"احتراف وتنظيم في غرفة الغسيل!" الباب الأمامي يديك رؤية واضحة، وحلة أكبر وأعمق لنتائج أفضل.'
        },
        'نوع البوتجاز': {
          f: v + ' (' + v + ')',
          a: 'بوتجاز يعمل بـ' + v + ' مما يتيح تحكماً دقيقاً في درجات الحرارة واستهلاكاً أكثر كفاءة.',
          b: '"طهي بدقة واحتراف!" نوع الوقود ' + v + ' يديك مرونة أكبر في التحكم في الحرارة ويناسب أسلوب طبخك.'
        },
        'نوع المكنسة': {
          f: 'مكنسة ' + v,
          a: 'تصميم ' + v + ' يوفر قوة شفط مثالية مناسبة لنوع الاستخدام المطلوب.',
          b: '"الأداة الصح لكل نوع أرضية وسطح!" مكنسة ' + v + ' مصممة لتناسب احتياجات التنظيف في بيتك بكفاءة أعلى.'
        },

        // SPECIFIC FEATURES
        'عدد الابواب': {
          f: 'تصميم ' + v + ' أبواب',
          a: 'تقسيم الثلاجة على ' + v + ' أبواب يفصل بين أقسام التبريد المختلفة بشكل مستقل.',
          b: '"كل قسم منفصل ومتحكم فيه!" فتح باب واحد بس من غير ما تسرب برودة الأقسام التانية - وفير للكهرباء وحفاظ على درجات الحرارة.'
        },
        'نوع الاضاءة الداخلية': {
          f: 'إضاءة داخلية ' + v,
          a: 'إضاءة ' + v + ' داخلية موفرة للطاقة وعمر طويل مقارنة بالإضاءة التقليدية.',
          b: '"شوفي كل اللي في الثلاجة بوضوح من أول ثانية!" إضاءة قوية بكل ركن ومفيش ظل أو منطقة معتمة.'
        },
        'نوع القرص الضوئي': {
          f: v,
          a: v + ' يتيح قراءة وكتابة الأقراص الضوئية بجودة عالية.',
          b: '"شغّل ونسّخ الأقراص بسهولة!" مفيش حاجة تشتري مشغل خارجي منفصل، كل إمكانيات ' + v + ' في جهازك من أول يوم.'
        },
        'نظام التشغيل': {
          f: 'نظام تشغيل ' + v,
          a: 'نظام ' + v + ' يوفر بيئة تشغيل سريعة ومستقرة لجميع التطبيقات.',
          b: '"ابدأ شغلك فوراً بنظام جاهز!" نظام ' + v + ' معروف بثباته وسهولة استخدامه، مناسب لكل أفراد العيلة.'
        },
        'لغة لوحة المفاتيح': {
          f: 'لوحة مفاتيح ' + v,
          a: 'لوحة مفاتيح بحروف ' + v + ' على نفس اللوحة لراحة أكبر في الكتابة.',
          b: '"اكتب بالعربي والإنجليزي بسهولة!" ما في داعي لتحفظ مكان الحروف أو تلصق ستيكرات، كل حرف في مكانه الصح.'
        },
        'فئة المعالج': {
          f: 'معالج ' + v,
          a: 'معالج من عائلة ' + v + ' يضمن أداء سلس لمهام الحياة اليومية والتصفح والدراسة.',
          b: '"شغل يومي بدون تعقيد أو تجمد!" ' + v + ' يديك الأداء اللازم لكل ما تحتاجه من مهام عادية باحترافية.'
        },
        'سرعة المعالج': {
          f: 'سرعة معالجة ' + v,
          a: 'سرعة الساعة ' + v + ' تعني استجابة أسرع لتشغيل البرامج والتطبيقات.',
          b: '"التطبيقات بتفتح في ثواني!" سرعة ' + v + ' تلغي وقت الانتظار المزعج وتخليك تشتغل أو تتعلم بدون أي إحباط.'
        },
        'مضمار التوجيه': {
          f: v,
          a: 'اتصال ' + v + ' يوفر نطاقاً ترددياً أسرع وأقل إزعاجاً.',
          b: '"نت أسرع وأقل انقطاع!" استخدام ' + v + ' يضمن تجربة إنترنت أكثر سلاسة.'
        },
        'عدد منافذ HDMI': {
          f: v + ' مداخل HDMI',
          a: v + ' منافذ HDMI تتيح توصيل عدة أجهزة (رسيفر، بلايستيشن، ساوند بار) في نفس الوقت.',
          b: '"وصّل كل أجهزتك ومش هتبدل في الأسلاك!" بضغطة ريموت تنتقل بين الرسيفر والبلايستيشن بدون فك وتركيب.'
        },
        'عدد منافذ USB': {
          f: v + ' مداخل USB',
          a: v + ' منافذ USB توفر مرونة في توصيل الأجهزة الخارجية والشاشات والفلاشات.',
          b: '"وصّل الفلاشة والماوس والكيبورد في نفس الوقت!" مفيش حاجة لـ Hub إضافي، كل الأجهزة متوصلة دايماً جاهزة.'
        },
        'عدد الارفف': {
          f: v + ' أرفف داخلية',
          a: v + ' أرفف قابلة للتنظيم توفر مساحة تخزين منظمة لجميع أنواع الأطعمة.',
          b: '"نظمي الأكل بطريقتك!" ' + v + ' أرفف تعطيكي حرية التنظيم الكامل - خضروات هنا، ألبان هناك، وأكل جاهز في مكان سهل الوصول.'
        },
        'عدد الادراج': {
          f: v + ' أدراج',
          a: v + ' أدراج منفصلة لتنظيم وتصنيف الأطعمة حسب نوعها.',
          b: '"لقاية سريعة لكل حاجة في الثلاجة!" كل نوع في درجه الخاص يعني ما فيش وقت ضايع في البحث.'
        },
        'مكان الفريزر': {
          f: 'فريزر ' + v,
          a: 'وضع الفريزر في الـ' + v + ' يتيح وصولاً أسهل لمحتوياته حسب عادة الاستخدام.',
          b: '"الفريزر في المكان اللي يناسب عاداتك!" فريزر ' + v + ' يوفر راحة في الوصول للمجمدات من غير انحناء مستمر أو مد إيدك بعيد.'
        },
        'خاصية التجفيف': {
          f: norm(v).includes('متاح') || norm(v).includes('نعم')
            ? 'تجفيف مدمج'
            : 'دورة عصر قوية (' + v + ')',
          a: norm(v).includes('متاح') || norm(v).includes('نعم')
            ? 'وحدة تجفيف مدمجة تنجز الغسيل والتجفيف في دورة واحدة متكاملة.'
            : 'سرعة عصر ' + v + ' تستخرج أقصى قدر ممكن من الرطوبة من الملابس.',
          b: norm(v).includes('متاح') || norm(v).includes('نعم')
            ? '"غسيل وتجفيف في ماكينة واحدة - وفير في مساحة وفلوس!" ما في داعي لمجفف منفصل، الغسالة تعمل الاتنين مع بعض.'
            : '"الهدوم بتطلع شبه ناشفة!" دورة العصر ' + v + ' تخلي وقت نشر الغسيل أقل بكتير.'
        },
        'ابعاد الثلاجة': {
          f: 'أبعاد مدروسة (' + v + ')',
          a: 'أبعاد ' + v + ' مصممة للتناسب مع معظم تصاميم المطابخ الحديثة.',
          b: '"ركّبيه في مطبخك بدون قلق من المساحة!" أبعاد متوافقة مع معظم الفراغات المعياريّة ويتركّب بسهولة.'
        },
        'ابعاد الغسالة': {
          f: 'أبعاد مناسبة (' + v + ')',
          a: 'هيكل ' + v + ' مصمم ليناسب معظم حمامات وغرف الغسيل.',
          b: '"تركيب سهل في المكان المخصص لها!" أبعاد مدروسة بتسمح بالتركيب في الفراغات الضيقة من غير أي تعديلات.'
        },
        'نوع المنتج': {
          f: v,
          a: v + ' مصمم خصيصاً لتقديم أفضل أداء في فئته.',
          b: '"اختار الجهاز المناسب لاستخدامك!" ' + v + ' يوفر لك التجربة المثالية في فئته بجودة ودوام.'
        },
        'نوع البوتاجاز': {
          f: 'بوتاجاز ' + v,
          a: 'بوتاجاز ' + v + ' يقدم مزيجاً مثالياً من الكفاءة والجودة.',
          b: '"استمتعي بطبخ أسرع وأكثر تحكماً!" بوتاجاز ' + v + ' يغطي كل احتياجات مطبخك اليومية.'
        },
        'شكل الثلاجة': {
          f: 'تصميم ' + v,
          a: 'هيكل ' + v + ' يوزع المساحة الداخلية بشكل أمثل بين الثلاجة والفريزر.',
          b: '"ثلاجة تناسب مطبخك وأسلوب حياتك!" تصميم ' + v + ' ومرن في الاستخدام ويعطيك أقصى استفادة من مساحتك.'
        },
        'تصميم الديب فريزر': {
          f: 'فريزر ' + v,
          a: 'فريزر ' + v + ' يوفر سعة تخزين كبيرة وسهولة في ترتيب المجمدات.',
          b: '"خزّني للشتاء وانتي مطمنة!" الفريزر ' + v + ' يتيح تخزين كميات كبيرة بشكل منظم وسهل الوصول.'
        },
        'نوع الديب فريزر': {
          f: 'فريزر ' + v,
          a: 'تصميم ' + v + ' للفريزر يوفر وصولاً مريحاً لجميع المحتويات.',
          b: '"تجميد فعّال وتنظيم سهل!" فريزر ' + v + ' مثالي لتخزين اللحوم والدواجن والخضار بشكل احترافي.'
        },
        'نوع الاستخدام': {
          f: 'مناسب لـ' + v,
          a: 'مُصمَّم وموجَّه للاستخدام ' + v + ' بكفاءة عالية.',
          b: '"اختار اللي يناسب احتياجك!" مصمم خصيصاً للـ' + v + ' فيقدم أفضل تجربة في نطاق استخدامه.'
        },
        'عدد لفات الغسالة في الدقيقة': {
          f: 'سرعة عصر ' + v + ' لفة/دقيقة',
          a: 'سرعة الحلة ' + v + ' لفة في الدقيقة تضمن استخراج أكبر كمية ممكنة من الماء من الملابس.',
          b: '"هدومك هتطلع شبه ناشفة وتنشف بسرعة!" كل ما زادت سرعة العصر كل ما قلّت رطوبة الملابس ووفّرتِ وقت النشر.'
        },
        'نوع الحوامل': {
          f: 'حوامل ' + v,
          a: v + ' خامة متينة وعالية الجودة تتحمل الأوزان الثقيلة وتوزع الحرارة بانتظام.',
          b: '"أمان وثبات لكل حلة في مطبخك!" حوامل ' + v + ' تضمن استقرار الحلل حتى الثقيلة، وبتعيش معاكِ سنين من غير صدأ أو تشوه.'
        },
        'مقبض الثلاجة': {
          f: 'مقبض ' + v,
          a: 'مقبض مصنوع بتصميم مريح للإمساك وفتح الباب بسهولة.',
          b: '"فتح سهل وسريع في يد واحدة!" المقبض مريح حتى لو إيدك ملياناة.'
        },
      };

      // Check direct match
      for (const [sk, fabOut] of Object.entries(g)) {
        if (n.includes(norm(sk)) || norm(sk).includes(n)) {
          return fabOut;
        }
      }

      // ─── Extended FAB entries — comprehensive coverage ──────────
      // Covers all high-frequency spec keys missing from the FAB file
      // Written in exact same tone, dialect, and structure as the source file
      const extended = {
        'تقنيه eco bubble': {
          f: 'تقنية Eco Bubble™',
          a: 'المنظفات تتحول لفقاعات هواء دقيقة تتغلغل في أنسجة القماش بسرعة 40 مرة أكبر من الغسيل التقليدي.',
          b: '"هدومك هتتنظف أعمق وتكسب عمر أطول! الفقاعات بتزيل البقع من أول غسلة حتى بمياه باردة."'
        },
        'حله ماسيه': {
          f: 'حلة ماسية Diamond Drum',
          a: 'نقوش ماسية الشكل على الجدار الداخلي للحلة تخلق تيارات مائية مثالية وتقلل الاحتكاك.',
          b: '"ملابسك تطلع زي ما دخلت بدون خدوش! الحلة الماسية تحافظ على الهدوم لسنوات."'
        },
        'باب من البلور الاسود': {
          f: 'باب بلور أسود Crystal Black Door',
          a: 'باب زجاجي معتم بإطار أسود أنيق يوفر متانة عالية ومظهراً عصرياً.',
          b: '"شياكة تدوم وبيخفي بصمات الأيدي! اللون الأسود يحافظ على مظهر الغسالة أنيقاً."'
        },
        'باب من البلور': {
          f: 'باب زجاجي بلوري Crystal Door',
          a: 'باب من الزجاج المقسّى الشفاف يوفر متانة عالية.',
          b: '"مظهر فاخر وصمود طويل! الزجاج المقسّى أقوى من البلاستيك."'
        },
        'موتورين': {
          f: 'نظام الموتورين المزدوج Dual Motor',
          a: 'موتور مخصص للغسيل وآخر للعصر يعمل كل منهما بسرعته المثلى.',
          b: '"أداء أقوى وعمر أطول! كل موتور متخصص — أعطال أقل وكفاءة أعلى."'
        },
        'طلمبه': {
          f: 'طلمبة تصريف مستقلة Drain Pump',
          a: 'مضخة تصريف تضخ مياه الغسيل بضغط ثابت وسريع.',
          b: '"تصريف كامل في ثواني! الطلمبة تمنع المياه الراكدة والروائح."'
        },
        'نصف حموله': {
          f: 'خاصية نصف الحمولة Half Load',
          a: 'دورة غسيل لنصف كمية الملابس توفر 50% من المياه والطاقة.',
          b: '"مش لازم تملي الغسالة! وفّر مياه وكهرباء مع كميات قليلة."'
        },
        'مع مجفف': {
          f: 'غسالة تجفيف مدمجة Washer Dryer',
          a: 'غسيل ودورة تجفيف في وحدة واحدة بدون جهاز منفصل.',
          b: '"غسيل وتجفيف في ماكينة واحدة! مثالية للشقق — حطّي الهدوم وارجعي تلاقيها جاهزة."'
        },
        'وظيفه البخار': {
          f: 'وظيفة البخار Steam Wash',
          a: 'بخار ساخن يتغلغل في القماش لتفكيك البقع وقتل الجراثيم.',
          b: '"ملابس معقّمة بدون كيماويات! البخار يزيل البقع العنيدة ويقتل الجراثيم."'
        },
        'عدد الدورات في الدقيقه': {
          f: 'سرعة عصر الغسالة ' + v + ' RPM',
          a: 'حلة الغسالة تدور بسرعة ' + v + ' لفة في الدقيقة خلال دورة العصر لاستخراج أكبر كمية ممكنة من المياه من الملابس.',
          b: '"هدومك هتطلع من الغسالة شبه ناشفة! ' + v + ' لفة في الدقيقة معناها تجفيف أسرع على الحبالة وفاتورة مجفف أقل."'
        },
        'عدد البرامج': {
          f: v + ' برنامج غسيل متخصص',
          a: v + ' برنامج مختلف مصمم لكل نوع من أنواع الأقمشة.',
          b: '"برنامج لكل قماش! كل نوع هدوم عنده برنامج يضمن أفضل نظافة."'
        },
        'خاصيه التربو': {
          f: 'وضع التوربو Turbo/Jet Cool',
          a: 'الضاغط والمروحة يعملان بأقصى طاقة لتبريد الغرفة في أسرع وقت.',
          b: '"ادخل أوضة ساقعة في دقائق! التوربو يبرد الغرفة بسرعة مثالية لما ترجع."'
        },
        'معدل تدفق الهواء بالمتر مكعب/ساعه': {
          f: 'قوة تدفق الهواء ' + v + ' م³/ساعة',
          a: 'المروحة تدفع ' + v + ' م³/ساعة لتوزيع التبريد على كل مساحة الغرفة.',
          b: '"تبريد يوصل لكل ركن! ' + v + ' م³/ساعة بتضمن توزيع متساوٍ."'
        },
        'مساحه التغطيه': {
          f: 'تغطية مساحة ' + v,
          a: 'الجهاز معاير لتبريد ' + v + ' بكفاءة مثلى.',
          b: '"مناسب لأوضتك! تغطية ' + v + ' تعني أداء مثالي بدون إهدار طاقة."'
        },
        'نوع التبريد': {
          f: norm(v).includes('نو') || norm(v).includes('no') ? 'نظام نو فروست No Frost' : 'نظام تبريد ' + v,
          a: norm(v).includes('نو') || norm(v).includes('no') ? 'مروحة داخلية توزع الهواء البارد وتمنع تكوّن الجليد.' : 'نظام ' + v + ' يحافظ على حرارة ثابتة.',
          b: norm(v).includes('نو') || norm(v).includes('no') ? '"مفيش جليد ومفيش تقطيع! النو فروست بيعمل ده لوحده."' : '"حفاظ على الطعام أطول! ' + v + ' يضمن حرارة ثابتة."'
        },
        'موضع الفريزر': {
          f: 'فريزر ' + v,
          a: 'الفريزر في موضع ' + v + ' يتيح وصولاً مريحاً لمحتوياته.',
          b: '"الفريزر في المكان اللي يناسبك! موضع ' + v + ' يوفر راحة في الوصول."'
        },
        'شكل الثلاجه': {
          f: 'ثلاجة ' + v,
          a: 'تصميم ' + v + ' يوزع المساحة الداخلية بين الثلاجة والفريزر.',
          b: '"تصميم يناسب مطبخك! ' + v + ' يعطيك أقصى استفادة من المساحة."'
        },
        'بمبرد مياه': {
          f: 'مبرد مياه مدمج Water Dispenser',
          a: 'حنفية مياه مدمجة في الباب تتيح مياهاً باردة فورية.',
          b: '"مياه باردة بضغطة واحدة بدون فتح الثلاجة! يوفر الطاقة."'
        },
        'تشمل ثلاجه': {
          f: 'يشمل ثلاجة مدمجة',
          a: 'الجهاز مزوداً بوحدة ثلاجة مدمجة.',
          b: '"حل شامل في جهاز واحد!"'
        },
        'نوع الفرن': {
          f: 'فرن ' + v,
          a: 'فرن ' + v + ' يتيح تحكماً دقيقاً في درجات الحرارة.',
          b: '"فرن يرفع مستوى طبخك! ' + v + ' مثالي للخبز والشواء."'
        },
        'فرن بمروحه': {
          f: 'مروحة توزيع الحرارة Convection Fan',
          a: 'مروحة توزع الهواء الساخن بالتساوي على كل أرجاء الفرن.',
          b: '"كيكة منضجة من كل الجوانب! المروحة تضمن ما فيش جزء يحترق."'
        },
        'فرن بشوايه': {
          f: 'شواية علوية Grill Element',
          a: 'عنصر تسخين علوي مخصص للشواية يمنح تحمير احترافي.',
          b: '"تحمير ذهبي وشهي! الشواية بتعطي الفراخ اللون الذهبي المميز."'
        },
        'مقاس الفرن': {
          f: 'سعة الفرن ' + v,
          a: 'حجم داخلي ' + v + ' يتيح إدخال صواني كبيرة.',
          b: '"صينية الكنافة والدجاج هتدخل مع بعض! ' + v + ' كافية."'
        },
        'عدد شعلات المسطح': {
          f: v + ' شعلات',
          a: 'سطح طهي بـ' + v + ' شعلات بأحجام وقدرات متنوعة.',
          b: '"اطبخي كل حاجة في نفس الوقت! ' + v + ' شعلات تديك الحرية."'
        },
        'مقاس المسطح': {
          f: 'مسطح ' + v + ' سم',
          a: 'سطح طهي بعرض ' + v + ' سم.',
          b: '"مساحة طبخ مريحة! ' + v + ' سم بدون تزاحم للحلل."'
        },
        'نوع وقود الفرن': {
          f: 'فرن بـ' + v,
          a: 'الفرن يستخدم ' + v + ' كمصدر طاقة.',
          b: '"اختار الوقود اللي يناسب مطبخك! ' + v + ' بيديك طريقة طبخ مميزة."'
        },
        'غلق تلقائي': {
          f: 'إيقاف تلقائي Auto Shut-off',
          a: 'الجهاز يطفئ نفسه عند انتهاء وقت التشغيل.',
          b: '"أمان كامل حتى لو نسيت! الإيقاف يحمي الأكل والجهاز."'
        },
        'خاصيه الاشعال الذاتي': {
          f: 'إشعال أوتوماتيكي Auto Ignition',
          a: 'نظام إشعال كهربي يشعل الشعلة بمجرد الضغط.',
          b: '"اشعل بضغطة زرار! إشعال فوري وآمن."'
        },
        'نوع الحراره': {
          f: 'نظام تسخين ' + v,
          a: 'تقنية ' + v + ' لتسخين المياه توفر ثباتاً في الحرارة.',
          b: '"حرارة ثابتة من أول قطرة!"'
        },
        'عدد الحنفيات': {
          f: v + ' حنفيات',
          a: v + ' حنفية توزيع تتيح استخدامات متعددة.',
          b: '"خدم أكثر من شخص في نفس الوقت!"'
        },
        'نوع الشاشه': {
          f: norm(v).includes('amoled') || norm(v).includes('oled') ? 'شاشة ' + v + ' OLED/AMOLED' : 'شاشة ' + v,
          a: norm(v).includes('amoled') || norm(v).includes('oled') ? 'تقنية ' + v + ' تضيء كل بكسل بشكل مستقل لإنتاج أسود حقيقي وألوان زاهية.' : 'تقنية ' + v + ' توفر زوايا مشاهدة واسعة مع دقة ألوان طبيعية.',
          b: norm(v).includes('amoled') || norm(v).includes('oled') ? '"ألوان حية وأسود عميق! ' + v + ' يخلي الصور أجمل ويوفر البطارية."' : '"وضوح ثابت من أي زاوية! ' + v + ' واضح حتى في الشمس."'
        },
        'شاشه سمارت': {
          f: 'شاشة سمارت Smart TV',
          a: 'نظام ذكي مدمج يتيح الوصول لتطبيقات البث والإنترنت مباشرة.',
          b: '"نتفليكس ويوتيوب بدون بوكس! كل حاجة جاهزة — افتح التطبيق واستمتع."'
        },
        'الدقه': {
          f: 'دقة الصورة ' + v,
          a: 'دقة ' + v + ' توفر وضوحاً استثنائياً مع أدق التفاصيل.',
          b: '"صورة بتفاصيل مش هتلاقيها في التلفزيون العادي!"'
        },
        'الدقه بالبكسل': {
          f: 'دقة ' + v + ' بكسل',
          a: 'الشاشة تعرض ' + v + ' بكسل لضمان صورة نقية وحادة.',
          b: '"وضوح استثنائي! دقة ' + v + ' بكسل بتظهر كل تفصيلة."'
        },
        'نوع الدقه': {
          f: 'دقة ' + v,
          a: 'معيار ' + v + ' يضمن صورة واضحة تتوافق مع أحدث معايير البث.',
          b: '"جودة صورة تواكب أحدث المحتوى! ' + v + ' مش هيبان أي مشهد مشوش."'
        },
        'شكل الشاشه': {
          f: 'شاشة ' + v,
          a: 'شاشة بتصميم ' + v + ' توفر مشاهدة مريحة.',
          b: '"مشاهدة مريحة! تصميم ' + v + ' يضمن وضوح الصورة."'
        },
        'الشبكه': {
          f: 'دعم شبكة ' + v,
          a: 'الجهاز يدعم ' + v + ' للاتصال بسرعة وثبات.',
          b: '"نت سريع وثابت! ' + v + ' يضمن بث ومكالمات بدون انقطاع."'
        },
        'الكاميرا الخلفيه': {
          f: 'كاميرا خلفية ' + v,
          a: 'كاميرا ' + v + ' تلتقط صوراً واضحة في مختلف ظروف الإضاءة.',
          b: '"صوّر لحظاتك بجودة! ' + v + ' تفاصيل حادة وألوان طبيعية."'
        },
        'الكاميرا الاماميه': {
          f: 'كاميرا أمامية ' + v + ' ميجابكسل',
          a: 'كاميرا سيلفي ' + v + ' ميجابكسل مع معالجة ذكية للصورة.',
          b: '"سيلفيات واضحة! ' + v + ' ميجابكسل يخلي وجهك طبيعي وواضح."'
        },
        'سعه البطاريه': {
          f: 'بطارية ' + v + ' مللي أمبير',
          a: 'سعة ' + v + ' مللي أمبير توفر عمر استخدام يومي.',
          b: '"يوم كامل بدون قلق! ' + v + ' مللي أمبير من الصبح للليل."'
        },
        'عدد شرائح الاتصال': {
          f: norm(v).includes('شريحتين') ? 'شريحتا اتصال مزدوج Dual SIM' : 'شريحة اتصال ' + v,
          a: norm(v).includes('شريحتين') ? 'مكانان لشريحتَي اتصال مختلفتين في موبايل واحد.' : v + ' للاتصال بشبكات المشغلين.',
          b: norm(v).includes('شريحتين') ? '"خطّين في موبايل واحد بدون حمل جهازين!"' : '"اتصال مباشر وسلس!"'
        },
        'تسجيل الفيديو': {
          f: 'تسجيل فيديو بجودة ' + v.split(',')[0].split('@')[0].trim(),
          a: 'الكاميرا الخلفية تُسجّل فيديوهات بدقة ' + v.split(',')[0].trim() + ' لإنتاج مقاطع سينمائية واضحة وسلسة مثالية للذكريات والمحتوى.',
          b: '"سجّل أجمل لحظاتك بجودة تحس إنك بتتفرج عليها من السينما! ' + v.split(',')[0].trim() + ' — كل تفصيلة وكل لون واضح حتى في الحركة السريعة."'
        },
        'عدد الكاميرات الخلفيه': {
          f: 'نظام ' + v + ' خلفية (Multi-Camera System)',
          a: 'منظومة ' + v + ' بعدسات وزوايا مختلفة: عريضة للمناظر الواسعة، رئيسية للتفاصيل، وماكرو أو تيليفوتو للتكبير.',
          b: '"صوّر كل لحظة بالكاميرا المناسبة لها! ' + v + ' بتديك حرية اختيار الزاوية والبُعد المثالي — مش هتلاقي لقطة ما تقدرش تاخدها."'
        },
        'عدد نواه المعالج': {
          f: 'معالج ' + v + ' نواة',
          a: v + ' نواة تعمل بالتوازي لاستجابة سريعة.',
          b: '"شغّل كل حاجة مع بعض! ' + v + ' نواة بتضمن تبديل سريع."'
        },
        'عمر البطاريه': {
          f: 'عمر بطارية ' + v,
          a: 'البطارية توفر ' + v + ' من الاستخدام المعتاد.',
          b: '"شحنة واحدة بتكفيك! ' + v + ' عمر بطارية بدون قلق."'
        },
        'كارت الشاشه': {
          f: 'كارت شاشة ' + v,
          a: 'معالج رسومي ' + v + ' للصور والفيديوهات والألعاب.',
          b: '"ألعاب سلسة وفيديوهات حادة! كارت ' + v + ' بدون تقطيع."'
        },
        'نوع المعالج': {
          f: 'معالج ' + v,
          a: 'معالج ' + v + ' يوفر أداءً متميزاً.',
          b: '"جهاز سريع يواكب احتياجاتك! ' + v + ' أداء ثابت."'
        },
        'قدره الشاحن': {
          f: 'شاحن ' + v + ' واط سريع',
          a: 'قدرة ' + v + ' واط يملأ البطارية أسرع بكثير.',
          b: '"من صفر لـ50% في دقائق! شاحن ' + v + ' واط."'
        },
        'المعالج': {
          f: 'معالج ' + v.split('(')[0].trim().split(' ').slice(0, 4).join(' '),
          a: 'معالج ' + v.split('(')[0].trim() + ' بنوى عالية الأداء تعالج التطبيقات بسرعة وكفاءة.',
          b: '"موبايل سريع ومش بياكل البطارية! المعالج بيفتح التطبيقات فوراً ويشتغل بسلاسة."'
        },

        'سعه الرام': {
          f: 'رام ' + v,
          a: 'ذاكرة عشوائية ' + v + ' لتشغيل تطبيقات متعددة بالتوازي.',
          b: '"افتح كل التطبيقات بدون هنج! ' + v + ' رام بدون انتظار."'
        },
        'السعه': {
          f: norm(prodType).includes('موبايل') || norm(prodType).includes('تابلت') || norm(prodType).includes('لاب')
            ? 'تخزين داخلي ' + v
            : norm(prodType).includes('غساله') || norm(prodType).includes('غسال')
              ? 'سعة الغسالة ' + v
              : 'سعة ' + v,
          a: norm(prodType).includes('موبايل') || norm(prodType).includes('تابلت') || norm(prodType).includes('لاب')
            ? 'مساحة تخزين داخلية ' + v + ' تسع الصور والفيديوهات والتطبيقات والملفات الشخصية بشكل مريح.'
            : norm(prodType).includes('غساله') || norm(prodType).includes('غسال')
              ? 'الحلة تستوعب ' + v + ' من الملابس في دورة واحدة لتغطية احتياجات العائلة الكاملة.'
              : 'الجهاز بسعة ' + v + ' توفر مرونة كافية لمتطلبات الاستخدام اليومي.',
          b: norm(prodType).includes('موبايل') || norm(prodType).includes('تابلت') || norm(prodType).includes('لاب')
            ? '"حفظ كل صورك وفيديوهاتك بدون رسالة مساحة ناقصة! ' + v + ' بتكفيك من غير ما تمسح حاجة أو تشتري كارت ميموري."'
            : norm(prodType).includes('غساله') || norm(prodType).includes('غسال')
              ? '"غسيل عيلة كاملة في مرة واحدة! ' + v + ' يكفي للهدوم والمناشف والبياضات دفعة واحدة."'
              : '"سعة مناسبة لكل احتياجاتك! ' + v + ' بتكفيك بدون قيود."'
        },
        'نظام التشغيل': {
          f: 'نظام تشغيل ' + v,
          a: 'نظام ' + v + ' يوفر واجهة مستخدم سلسة مع تحديثات أمان منتظمة وتوافقاً واسعاً مع ملايين التطبيقات.',
          b: '"موبايل دايماً محمي ومحدّث! نظام ' + v + ' بيضمن آخر الميزات والحماية الأمنية — وملايين التطبيقات في المتجر جاهزة من أول يوم."'
        },
        'مقاس الشاشه بالبوصه': {
          f: v + ' بوصة شاشة',
          a: 'شاشة بقطر ' + v + ' بوصة واسعة لكل الاستخدامات.',
          b: '"شاشة بالحجم المناسب! ' + v + ' بوصة مريحة بدون إجهاد."'
        },
        'خاصيه الغاء الضوضاء': {
          f: 'إلغاء الضوضاء النشط ANC',
          a: 'ميكروفونات تحلل أصوات المحيط وتنتج موجة معاكسة تلغيها.',
          b: '"أذنك في عالمها! ANC تعزلك تماماً عن الضوضاء."'
        },
        'عازل للضوضاء': {
          f: 'عزل صوتي Passive Noise Isolation',
          a: 'شكل السماعة يحكم الأذن ضد الأصوات الخارجية بدون بطارية إضافية.',
          b: '"صوت أوضح بدون رفع الصوت! العزل الطبيعي يمنع الضوضاء."'
        },
        'التوصيل': {
          f: norm(v).includes('لاسلكي') || norm(v).includes('بلوتوث') ? 'اتصال لاسلكي Bluetooth' : 'توصيل ' + v,
          a: norm(v).includes('لاسلكي') || norm(v).includes('بلوتوث') ? 'بلوتوث يوصل السماعة بجهازك لاسلكياً.' : 'توصيل ' + v + ' بثبات وجودة.',
          b: norm(v).includes('لاسلكي') || norm(v).includes('بلوتوث') ? '"حرية حركة بدون أسلاك!"' : '"اتصال ثابت وجودة عالية!"'
        },
        'متوافقه مع': {
          f: 'توافق مع ' + v,
          a: 'السماعة تعمل مع ' + v + ' بدون إعداد معقد.',
          b: '"اشتريها وشغّلها فوراً! توافق من أول لحظة."'
        },
        'طريقه الارتداء': {
          f: v.split(',')[0].split('،')[0].trim() + ' تصميم',
          a: 'تصميم ' + v.split(',')[0].split('،')[0].trim() + ' يوازن الثبات والراحة.',
          b: '"ثابتة في أذنك! ما تقعش ولا تتأذى أذنك."'
        },
        'تجربه الاتصال': {
          f: 'بلوتوث متقدم متعدد الأجهزة',
          a: 'بلوتوث متطور يدعم أجهزة متعددة مع تبديل تلقائي سريع.',
          b: '"موبايل وكمبيوتر مربوطين! تبديل سلس بضغطة."'
        },
        'تجربه الميزات': {
          f: 'ميزات صوت ذكية',
          a: 'صوت ذكي ومساعد صوتي وضبط تلقائي حسب البيئة.',
          b: '"سماعة تتكيّف مع بيئتك! مساعد صوتي وضبط تلقائي."'
        },
        'عدد رشاشات المياه': {
          f: v + ' رشاشات دوّارة Rotating Spray Arms',
          a: v + ' ذراع دوّارة توزع المياه على جميع زوايا غسالة الأطباق.',
          b: '"كل صحن وكوب نظيف من كل الجوانب! الرشاشات توصّل لكل ركن."'
        },
        'فلتر مضاد للبكتيريا': {
          f: 'فلتر مضاد للبكتيريا Anti-Bacterial Filter',
          a: 'فلتر يحتجز بقايا الطعام ويمنع تكاثر البكتيريا في مياه الغسيل.',
          b: '"أطباقك معقّمة حقيقياً! الفلتر يمنع إعادة تلويث الأطباق."'
        },
        'درجه الحراره القصوى للغساله': {
          f: 'حرارة غسيل تصل لـ' + v,
          a: 'درجة ' + v + ' تذيب الدهون وتقتل الجراثيم في غسالة الأطباق.',
          b: '"ودّع دهون الشوايات! ' + v + ' تُذيب كل الدهون الصعبة."'
        },
        'الحله الداخليه': {
          f: 'حلة داخلية ' + v,
          a: v + ' لا يمتص الروائح ولا يتشقق من الحرارة.',
          b: '"غسالة الأطباق بلا روائح! ' + v + ' يحافظ على الحلة لسنوات."'
        },
        'حمايه من تسريب المياه': {
          f: 'حماية من تسريب المياه Aqua Stop',
          a: 'مستشعر يكتشف التسريب ويوقف المياه فوراً.',
          b: '"شغّلها واطمن! حماية التسريب تمنع أي فيضان في المطبخ."'
        },
        'خاصيه الغسيل الذكي لقياس مستويات تعكر المياه اوتوماتيكيا': {
          f: 'استشعار درجة الاتساخ Smart Sensor',
          a: 'مستشعر يضبط المياه والحرارة والمدة حسب درجة اتساخ الأطباق تلقائياً.',
          b: '"غسالة الأطباق بتقرر إيه اللي تحتاجه! توفير تلقائي في الماء والكهرباء."'
        },
        'نظام التجفيف': {
          f: 'نظام تجفيف ' + v,
          a: norm(prodType).includes('اطباق')
            ? 'نظام ' + v + ' يُجفّف الأطباق والأكواب والأواني بعد الشطف الأخير في غسالة الأطباق.'
            : 'نظام تجفيف ' + v + ' يستخدم هواءً دافئاً لإزالة الرطوبة من الملابس بعد دورة الغسيل.',
          b: norm(prodType).includes('اطباق')
            ? '"أطباقك هتطلع جافة تماماً جاهزة للرف! حتى الأكواب والأوعية البلاستيكية بتخرج جافة بدون مسح."'
            : '"هدومك بتطلع من الغسالة شبه جافة! ' + v + ' بيقلل وقت التجفيف على الحبالة وبيوفر الكهرباء."'
        },
        'مستوى كفاءه الطاقه': {
          f: 'كفاءة طاقة ' + v.replace('(', '').replace(')', '').trim(),
          a: 'تصنيف ' + v.replace('(', '').replace(')', '').trim() + ' يعني استهلاك أقل من الكهرباء والمياه.',
          b: '"فاتورة أقل! كفاءة ' + v.replace('(', '').replace(')', '').trim() + ' توفير حقيقي كل شهر."'
        },
        'خاصيه البخار العمودي': {
          f: 'بخار عمودي Vertical Steam',
          a: 'بخار ساخن يُعالج الملابس وهي معلقة بدون حاجة للوح كوي.',
          b: '"كوّي الهدوم على الشماعة في ثواني!"'
        },
        'خاصيه التعقيم': {
          f: 'تعقيم بالبخار Steam Sterilize',
          a: 'بخار يقضي على 99.9% من البكتيريا بدون مواد كيماوية.',
          b: '"صحة عيلتك أمانة! تعقيم طبيعي وآمن."'
        },
        'خاصيه الايقاف التلقائي': {
          f: 'إيقاف تلقائي للأمان Auto Safety Shut-off',
          a: 'الجهاز يُطفئ نفسه بعد فترة من الاستخدام.',
          b: '"اطمني لو نسيتِ الجهاز شغّال! يحمي شعرك والجهاز."'
        },
        'شكل القهوه المستخدمه': {
          f: 'يعمل بـ' + v,
          a: 'ماكينة القهوة تعمل بـ' + v + '.',
          b: '"قهوتك بطريقتك! ' + v + ' تحكم كامل في الطعم."'
        },
        'تصميم ماكينه القهوه': {
          f: 'تصميم ' + v,
          a: 'ماكينة بتصميم ' + v + ' مناسب للمطبخ العصري.',
          b: '"شياكة على كاونتر مطبخك! ' + v + ' يضيف لمسة فاخرة."'
        },
        'نوع حاويه الاتربه': {
          f: norm(v).includes('بدون') ? 'حاوية بدون كيس Bagless' : 'حاوية ' + v,
          a: norm(v).includes('بدون') ? 'حاوية شفافة تُفرَّغ بدون مصاريف كياس.' : 'حاوية ' + v + ' لتجميع الأتربة.',
          b: norm(v).includes('بدون') ? '"وفّر فلوس الكياس! بتفرغها في ثوانٍ."' : '"تنظيف فعّال!"'
        },
        'نوع السماعات': {
          f: 'سماعات ' + v,
          a: 'سماعات ' + v + ' مصممة لصوت عالي الجودة.',
          b: '"صوت يملأ أذنك! ' + v + ' تجربة مريحة في أي مكان."'
        },
        'الساعه مقاومه للماء': {
          f: 'مقاومة للماء ' + v,
          a: 'الساعة تتحمل المياه حتى ' + v + '.',
          b: '"البحر والعرق ما يخوفكش! ' + v + ' في كل المواقف."'
        },
        'سوار مصنوع من': {
          f: 'سوار من ' + v,
          a: 'سوار من ' + v + ' يجمع المتانة والراحة.',
          b: '"مريح طوال اليوم! ' + v + ' خفيف وأنيق."'
        },
        'مقاومه للماء': {
          f: 'مقاومة للماء والغبار',
          a: 'الجهاز معتمد بمقاومة للمياه والأتربة حسب ' + v + '.',
          b: '"استخدمه في كل الظروف! راحة بال حقيقية."'
        },
        'عدد الريش': {
          f: v + ' ريش مروحة',
          a: 'مروحة بـ' + v + ' ريشة تدفع أكبر كمية هواء بأقل ضوضاء.',
          b: '"هواء منعش لكل الأوضة! ' + v + ' ريشة تضمن تدفق قوي ومنتظم."'
        },
        'عدد السرعات': {
          f: v + ' سرعات',
          a: v + ' سرعة للتحكم الدقيق في شدة الهواء.',
          b: '"اختار السرعة المناسبة! هادي للنوم أو قوي للتبريد السريع."'
        },
        'ريموت كنترول': {
          f: 'ريموت كنترول',
          a: 'تحكم لاسلكي في كل وظائف الجهاز من مسافة.',
          b: '"تحكم من مكانك! مريح خصوصاً في الليل."'
        },
        'مصدر الطاقه': {
          f: 'يعمل بـ' + v,
          a: 'الجهاز يعمل بـ' + v + '.',
          b: '"استخدمه في كل مكان! ' + v + ' مرونة في الاستخدام."'
        },
        'بريموت كنترول': {
          f: 'يشمل ريموت كنترول',
          a: 'ريموت كنترول يتيح تشغيل وضبط الجهاز لاسلكياً.',
          b: '"تحكم كامل من مكانك!"'
        },
        'امان فائق': {
          f: 'خاصية الأمان المتكامل',
          a: 'منظومة أمان شاملة بصمامات وقواطع تلقائية.',
          b: '"اتركه شغّال وامشي بأمان! نظام الأمان يحمي بيتك."'
        },
        'مؤقت': {
          f: 'مؤقت زمني Timer',
          a: 'برمجة الجهاز للإيقاف التلقائي بعد مدة محددة.',
          b: '"خلّيه يشتغل وانسى فيه! المؤقت يوفر الكهرباء."'
        },
      };

      const nkLow = n.replace(/\s+/g, ' ');
      for (const [ek, efab] of Object.entries(extended)) {
        const nek = norm(ek);
        // Require meaningful overlap: full phrase match or 2+ word overlap
        // Avoid single-word prefix matches like 'عدد' matching 'عدد الدورات' AND 'عدد الكاميرات'
        if (nkLow === nek) return efab;
        if (nkLow.includes(nek) && nek.split(' ').length >= 2) return efab;
        if (nek.includes(nkLow) && nkLow.split(' ').length >= 2) return efab;
      }



      // Smart Fallback Generator with contextual categories
      const nv = norm(v || '');
      const featureTitle = specKey + (v && !['متاح', 'نعم', 'yes', 'true'].includes(nv) ? ' — ' + v : '');

      let advantage = 'مواصفة تقنية أساسية مصممة خصيصاً لتناسب استخدامك اليومي.';
      let benefit = '"' + specKey + ' بتديك تجربة استخدام أسهل وأكثر عملية في روتينك اليومي."';

      var nk2 = norm(specKey);

      // 1. Processors & Performance
      if (nk2.includes('معالج') || nk2.includes('بروسيسور') || nk2.includes('اداء') || nk2.includes('كور')) {
        advantage = 'شريحة معالجة ذكية للتعامل مع المهام المتعددة بدون بطء أو تهنيج.';
        benefit = '"سرعة خيالية! تقدر تفتح كذا تطبيق في نفس الوقت وتلعب براحتك من غير ما الجهاز يعلق معاك."';
      }
      // 2. RAM & Memory
      else if (nk2.includes('رام') || nk2.includes('ذاكره عشوائيه') || nk2.includes('ram')) {
        advantage = 'سعة ذاكرة تضمن لك سلاسة في التنقل بين التطبيقات في لمح البصر.';
        benefit = '"أنجز مهامك بسرعة! تنقل بين البرامج بدون ما تضطر تقفل حاجة عشان التانية تشتغل."';
      }
      // 3. Storage & Capacity (Tech)
      else if (nk2.includes('تخزين') || nk2.includes('مساحه') || nk2.includes('هارد') || nk2.includes('ssd') || nk2.includes('hdd') || nk2.includes('مساحة')) {
        advantage = 'مساحة تخزينية ضخمة وآمنة لحفظ كافة ملفاتك وبرامجك المهمة.';
        benefit = '"صوّر وحمّل براحتك! مساحة تشيل كل ذكرياتك وملفاتك بدون ما تضطر تمسح حاجة."';
      }
      // 4. Cameras & Photography
      else if (nk2.includes('كاميرا') || nk2.includes('تصوير') || nk2.includes('عدسه') || nk2.includes('ميجا بكسل')) {
        advantage = 'مستشعر تصوير عالي الدقة يبرز التفاصيل حتى في الإضاءة الضعيفة.';
        benefit = '"لقطات تخطف العين! هتاخد صور احترافية بألوان طبيعية وواضحة جداً تفخر تشاركها مع أصحابك."';
      }
      // 5. Display & Screen
      else if (nk2.includes('شاشه') || nk2.includes('شاشة') || nk2.includes('عرض') || nk2.includes('دقه') || nk2.includes('دقة') || nk2.includes('وضوح') || nk2.includes('ريزوليوشن') || nk2.includes('refresh') || nk2.includes('hz')) {
        advantage = 'تكنولوجيا عرض متقدمة بألوان زاهية وتباين عالي لراحة العين.';
        benefit = '"تجربة مشاهدة سينمائية! هتستمتع بكل تفصيلة في المسلسلات والألعاب بألوان واقعية جداً."';
      }
      // 6. Battery & Charging
      else if (nk2.includes('بطاريه') || nk2.includes('بطارية') || nk2.includes('شحن') || nk2.includes('طاقه') || nk2.includes('طاقة') || nk2.includes('امبير')) {
        advantage = 'إدارة ذكية للطاقة تمنحك فترات تشغيل أطول وتوفر سرعة في إعادة الشحن.';
        benefit = '"انسى الشاحن وانطلق! بطارية تعيش معاك اليوم كله بدون ما تقطعك في أهم لحظاتك."';
      }
      // 7. Security & Safety
      else if (nk2.includes('امان') || nk2.includes('حمايه') || nk2.includes('قفل') || nk2.includes('بصمه')) {
        advantage = 'نظام حماية موثوق مصمم لمنع أي أخطار أو وصول غير مصرح به.';
        benefit = '"راحة بال تامة! الجهاز متأمن بالكامل عشان يحافظ على خصوصيتك ويحمي أطفالك من أي خطر."';
      }
      // 8. Energy Efficiency
      else if (nk2.includes('كهربا') || nk2.includes('كفاءه') || nk2.includes('كفاءة') || nk2.includes('استهلاك') || nk2.includes('توفير')) {
        advantage = 'تصميم هندسي يعتمد على استهلاك الحد الأدنى من الطاقة لتحقيق نفس الأداء.';
        benefit = '"وفر في فاتورة الكهرباء! هتشغل الجهاز براحتك من غير ما تشيل هم الاستهلاك في آخر الشهر."';
      }
      // 9. Time Saving & Speed
      else if (nk2.includes('سرعه') || nk2.includes('سرعة') || nk2.includes('سريع') || nk2.includes('دقيقه') || nk2.includes('وقت') || nk2.includes('تايمر')) {
        advantage = 'نظام تشغيل مكثف يقلل دورة العمل للنصف تقريباً دون المساس بالجودة.';
        benefit = '"وفّر وقتك الثمين! الجهاز هيخلص شغله في وقت قياسي عشان تتفرغ لحياتك وتستمتع بيومك."';
      }
      // 10. Cleaning & Hygiene
      else if (nk2.includes('نظيف') || nk2.includes('تنظيف') || nk2.includes('غسيل') || nk2.includes('معقم') || nk2.includes('تعقيم') || nk2.includes('بكتيريا')) {
        advantage = 'دورة تنظيف وتعقيم عميقة تتغلغل لإزالة أصعب البقع والجراثيم.';
        benefit = '"نظافة صحية تطمنك! هتحافظ على صحة أسرتك بفضل قدرة الجهاز على القضاء التام على الجراثيم."';
      }
      // 11. Audio & Sound
      else if (nk2.includes('صوت') || nk2.includes('صوتي') || nk2.includes('سماع') || nk2.includes('ضوضاء') || nk2.includes('عزل') || nk2.includes('audio')) {
        advantage = 'معالجة صوتية دقيقة تضمن لك تجربة استماع نقية وعزل تام للضوضاء.';
        benefit = '"عزل تام عن دوشة العالم! هتعيش جو المشهد أو الموسيقى بصوت مجسم وواضح جداً."';
      }
      // 12. Dimensions & Weight
      else if (nk2.includes('وزن') || nk2.includes('ابعاد') || nk2.includes('طول') || nk2.includes('عرض') || nk2.includes('عمق') || nk2.includes('حجم')) {
        advantage = 'تصميم هندسي مدمج ومدروس لتوفير المساحة وتسهيل عملية النقل أو التركيب.';
        benefit = '"شياكة وعملية! تصميم الجهاز بيسهل عليك تظبطه في أي مكان في بيتك أو تشيله معاك بدون إرهاق."';
      }
      // 13. Connectivity (Wi-Fi, Bluetooth)
      else if (nk2.includes('واي فاي') || nk2.includes('بلوتوث') || nk2.includes('اتصال') || nk2.includes('شبكه') || nk2.includes('شبكة') || nk2.includes('لاسلكي') || nk2.includes('wifi') || nk2.includes('bluetooth') || nk2.includes('nfc')) {
        advantage = 'بروتوكولات اتصال حديثة توفر سرعة استجابة ومدى تغطية واسع.';
        benefit = '"وصل أجهزتك في ثواني! بدون أسلاك أو تعقيد، هتنقل بياناتك وتتحكم في الجهاز من أي مكان."';
      }
      // 14. Capacity (Appliances)
      else if (nk2.includes('سعه') || nk2.includes('سعة') || nk2.includes('لتر') || nk2.includes('كيلو') || nk2.includes('حمولة')) {
        advantage = 'حيز داخلي مُصمم بذكاء ليستوعب كميات أكبر في دورة تشغيل واحدة.';
        benefit = '"يكفي العيلة كلها! السعة دي هتوفر عليك تكرار التشغيل وتنجز معاك كميات كبيرة مرة واحدة."';
      }
      // 15. Cooling & Heating
      else if (nk2.includes('تبريد') || nk2.includes('فريون') || nk2.includes('تجميد') || nk2.includes('حراره') || nk2.includes('تسخين') || nk2.includes('مروحه')) {
        advantage = 'نظام توزيع حراري/تبريدي متساوي يضمن الوصول لدرجة الحرارة المطلوبة سريعاً.';
        benefit = '"كفاءة تحافظ على حاجتك! تبريد قوي يخلي الأكل فريش مدة أطول، أو تسخين سريع ينجزك في المطبخ."';
      }
      // 16. Materials & Build Quality
      else if (nk2.includes('خامه') || nk2.includes('ماتريال') || nk2.includes('زجاج') || nk2.includes('معدن') || nk2.includes('استانلس') || nk2.includes('بلاستيك') || nk2.includes('تصميم')) {
        advantage = 'هيكل مصنوع من مواد عالية الجودة مقاومة للتآكل والصدمات.';
        benefit = '"جهاز يعيش معاك سنين! الخامات القوية بتضمن لك متانة وقوة تحمل حتى مع الاستخدام الشاق."';
      }
      // 17. Motors & Compressors
      else if (nk2.includes('موتور') || nk2.includes('محرك') || nk2.includes('كمبروسر')) {
        advantage = 'قلب نابض قوي يعمل بهدوء وكفاءة عالية لتقليل الاهتزازات وزيادة العمر الافتراضي.';
        benefit = '"أداء ثابت بدون دوشة! الموتور مصمم عشان يديلك أقصى قوة وفي نفس الوقت مايزعجكش بصوته."';
      }
      // 18. OS & Smart Features
      else if (nk2.includes('نظام') || nk2.includes('تشغيل') || nk2.includes('اندرويد') || nk2.includes('سمارت') || nk2.includes('تطبيق') || nk2.includes('ذكاء')) {
        advantage = 'واجهة مستخدم ذكية وسلسة توفر لك ميزات متقدمة وتحديثات مستمرة.';
        benefit = '"سهولة وذكاء في متناول يدك! الجهاز هيفهم احتياجاتك ويوفرلك خيارات كتير تخلي استخدامك أمتع."';
      }
      // 19. Warranty & Support
      else if (nk2.includes('ضمان') || nk2.includes('كفاله') || nk2.includes('صيانه')) {
        advantage = 'تغطية رسمية وخدمة ما بعد البيع معتمدة لضمان استمرارية عمل الجهاز.';
        benefit = '"اشتري وأنت مطمن! ضمان حقيقي يخليك تعتمد على الجهاز بدون أي قلق من مصاريف الصيانة."';
      }
      // 20. Ports & Interfaces
      else if (nk2.includes('منفذ') || nk2.includes('مدخل') || nk2.includes('مخرج') || nk2.includes('usb') || nk2.includes('hdmi') || nk2.includes('type c')) {
        advantage = 'تعدد في خيارات التوصيل لتتوافق مع كافة ملحقاتك وأجهزتك الخارجية.';
        benefit = '"وصّل كل اللي تحتاجه! مداخل متنوعة تخليك تربط الجهاز بأي شاشة أو فلاشة أو موبايل بسهولة."';
      }
      // 21. Dynamic Generic Fallback (True AI-style variance with Contextual Injection)
      else {
        return null;
        const vc = v ? v.trim() : '';
        const isDescriptive = vc.split(/\s+/).length >= 3;

        const advList = [
          'هذه الخاصية تعتبر إضافة هندسية مدروسة ترفع من كفاءة الجهاز وتلبي احتياجاتك بامتياز.',
          'مواصفة تقنية تم تصميمها بعناية لتعطيك الأداء الأمثل مقارنة بالأجهزة التقليدية.',
          'تفصيلة دقيقة تضمن لك تجربة استخدام سلسة ومريحة في كل مرة تعتمد فيها على الجهاز.',
          'إضافة عملية جداً تم دمجها في هذا الموديل لتمنحك قيمة حقيقية مقابل استثمارك.',
          'تكنولوجيا مصممة خصيصاً لراحتك، هدفها الأساسي هو توفير وقتك ومجهودك بشكل ملحوظ.'
        ];

        const benList = [
          'بتديك راحة أكبر وتسهل عليك استخدام الجهاز في روتينك من غير أي تعقيد.',
          'هتخليك تحس بسلاسة واستقرار في الأداء من أول يوم تشغيل.',
          'استثمار ذكي هيخليك تستفيد بأقصى قدرة للجهاز بكل سهولة.',
          'بتضمن لك كفاءة استثنائية وعمر افتراضي أطول يعيش معاك سنين.',
          'هتلاحظ إن تعاملك مع الجهاز بقى أسهل وأمتع بشكل يومي.'
        ];

        const toggleAdv = [
          'توفر لك هذه الميزة خيارات تحكم أوسع تناسب تفضيلاتك الشخصية.',
          'تقنية إضافية مدمجة تمنحك مرونة أعلى في إدارة مهامك اليومية.'
        ];
        const toggleBen = [
          'ميزة هتريحك كتير وتديك تحكم كامل في الجهاز حسب احتياجك وقتها.',
          'إضافة بسيطة بس بتفرق جداً في سهولة الاستخدام وتوفير المجهود.'
        ];

        const numAdv = [
          'مواصفة دقيقة تعتمد على (' + vc + ') لضمان أداء فائق ينافس أعلى المعايير.',
          'هذه القدرة (' + vc + ') تقدم لك توازناً مثالياً بين القوة وسرعة الإنجاز.'
        ];
        const numBen = [
          'قوة الـ ' + vc + ' بتترجم لأداء عملي هتحس بسرعته في كل مرة تستخدم الجهاز.',
          'قدرات مبهرة بفضل الـ ' + vc + ' هتخليك تنجز شغلك أسرع وتعتمد عليه في أصعب الظروف.'
        ];

        const descAdv = [
          'ميزة قوية في هذا الموديل: ' + vc + '.',
          'هذه الخاصية تقدم فائدة مباشرة حيث أنها ' + vc + '.',
          'إضافة ترفع من كفاءة الجهاز بشكل ملحوظ: ' + vc + '.'
        ];
        const descBen = [
          'هتلاحظ الفرق بنفسك! ميزة ' + specKey + ' بتديك تجربة أسهل لأنها ' + vc + '.',
          'راحة وتجربة أسهل! بفضل إن ' + specKey + ' ' + vc + '، وده هيريحك جداً.',
          'أداء متميز يريحك.. ' + specKey + ' ' + vc + ' مما يوفر وقتك ومجهودك.'
        ];

        let hash = 0;
        for (let i = 0; i < specKey.length; i++) {
          hash = ((hash << 5) - hash) + specKey.charCodeAt(i);
          hash |= 0;
        }
        hash = Math.abs(hash);

        if (isDescriptive && !/\d/.test(nv)) {
          advantage = descAdv[hash % descAdv.length];
          benefit = '"' + descBen[hash % descBen.length] + '"';
        } else if (nv.includes('متاح') || nv === 'نعم' || nv === 'yes' || nv === 'true') {
          advantage = toggleAdv[hash % toggleAdv.length];
          benefit = '"' + specKey + ' ' + toggleBen[hash % toggleBen.length] + '"';
        } else if (/\d/.test(nv)) {
          advantage = numAdv[hash % numAdv.length];
          benefit = '"' + numBen[hash % numBen.length] + '"';
        } else {
          advantage = advList[hash % advList.length];
          benefit = '"' + specKey + ' ' + benList[hash % benList.length] + '"';
        }
      }

      return { f: featureTitle, a: advantage, b: benefit };
    }

    // Check if spec key has a direct FAB entry in the file
    function findFileFAB(specKey, fabItems) {
      const nk = norm(specKey);
      const kws = SPEC_KW[specKey] || [];
      let best = null, bestScore = 0;

      for (const item of fabItems) {
        const nf = norm(item.f);
        let score = 0;

        // Priority 1: SPEC_KW explicit keyword mapping
        if (kws.length && kws.some(kw => nf.includes(norm(kw)))) score = 100;
        // Priority 2: exact full-string match (normalized)
        else if (nf === nk) score = 90;
        // Priority 3: spec key is substring of feature name (meaningful overlap)
        else if (nk.length >= 4 && nf.includes(nk)) score = 80;
        // Priority 4: feature name is meaningful substring of spec key
        // Only count if the match is at least 6 chars (avoid 'تقنية' prefix trap)
        else if (nk.length >= 6 && nf.length >= 6 && nk.includes(nf.slice(0, Math.min(nf.length, 10))) && nf.slice(0, 10).split(' ').length > 1) score = 60;

        if (score > bestScore) { bestScore = score; best = item; }
      }
      return bestScore >= 60 ? best : null;
    }

    // ══════════════════════════════════════════════════════════════
    // STATE
    // ══════════════════════════════════════════════════════════════
    let Q = '', L1 = 'all', L2 = '', VIEW = 'fab', PAGE = 0;
    let FEAT_MODE = false, FEAT_RESULTS = [], FEAT_CORRECTED = '';
    const PZ = 24;
    let filtProds = [];
    let srchTimer = null;

    // ══════════════════════════════════════════════════════════════
    // NORMALISE & SEARCH
    // ══════════════════════════════════════════════════════════════
    function norm(t) {
      if (!t) return '';
      return String(t).toLowerCase()
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي')
        .replace(/[™®©]/g, '')
        .replace(/\s+/g, ' ').trim();
    }

    const DEF_SYN = [
      // فئات الأجهزة
      ['الشاشات', 'التلفزيونات', 'المسرح المنزلى', 'تلفزيون', 'شاشة', 'tv', 'television'],
      ['الكومبيوتر', 'لاب توب', 'كمبيوتر', 'لابتوب', 'laptop', 'pc'],
      ['البوتجازات', 'البوتاجازات', 'بوتجاز', 'بوتاجاز', 'كوكر', 'cooker'],
      ['الثلاجات', 'ثلاجة', 'فريج', 'ثلاجه', 'refrigerator', 'fridge', 'تلاجة', 'تلاجه', 'تلاجات'],
      ['الغسالات', 'غسالة', 'غساله', 'washing machine'],
      ['التكييفات', 'تكييف', 'مكيف', 'تكيف', 'ac', 'air conditioner'],
      ['الموبايل', 'موبايل', 'جوال', 'تليفون', 'هاتف', 'phone', 'smartphone', 'ايفون', 'iphone', 'اندرويد', 'android'],
      ['انفرتر', 'إنفرتر', 'inverter', 'انفيرتر'],
      ['سخانات', 'سخان مياه', 'سخان', 'water heater'],
      ['سماعات', 'سماعه', 'headphones', 'earphones', 'earbuds', 'ايربودز', 'سماعة'],
      ['ساعة ذكية', 'ساعه ذكيه', 'smart watch', 'سمارت ووتش', 'apple watch'],
      ['مكنسة', 'مكنسه', 'مكانس', 'vacuum', 'فاكيوم'],
      ['قلاية هوائية', 'قلايه هوائيه', 'air fryer', 'ايرفراير'],
      // تقنيات — ثنائي اللغة والمعرَّب
      ['eco bubble', 'ايكو بابل', 'ايكو بابول', 'فقاعات الغسيل', 'eco-bubble', 'ايكو', 'بابل', 'أيكو', 'إيكو'],
      ['no frost', 'نو فروست', 'نوفروست', 'ديفروست تلقائي', 'no-frost', 'نوفروست'],
      ['inverter', 'انفرتر', 'إنفرتر', 'انفيرتر', 'محرك انفرتر'],
      ['convection', 'كونفكشن', 'مروحة الفرن', 'مروحة توزيع', 'fan oven', 'كونفيكشن'],
      ['plasma', 'بلازما', 'بلازما كلاستر', 'plasma cluster'],
      ['thermocouple', 'ثيرموكابل', 'امان كامل', 'full safety', 'اغلاق الغاز'],
      ['amoled', 'سوبر اموليد', 'super amoled', 'امولد', 'oled'],
      ['qled', 'كيو ليد', 'كيوليد', 'نقاط كم', 'quantum dot'],
      ['4k', 'فور كيه', 'فوركيه', 'ultra hd', 'uhd', 'اربع كيه'],
      ['hepa', 'هيبا', 'هيباء', 'فلتر هيبا'],
      ['steam', 'بخار', 'ستيم', 'steam wash', 'غسيل بالبخار'],
      ['5g', 'الجيل الخامس', 'فايف جي', 'فيف جي'],
      ['ip68', 'ايبي 68', 'مقاوم للماء', 'waterproof', 'water resistant'],
      ['gorilla glass', 'جوريلا جلاس', 'جوريلا', 'كوريلا'],
      ['face id', 'فيس ايدي', 'التعرف على الوجه', 'بصمة الوجه'],
      ['magsafe', 'ماجسيف', 'ماغسيف', 'شحن مغناطيسي', 'mag safe'],
      ['snapdragon', 'سنابدراجون', 'سنابدراقون', 'qualcomm'],
      ['apple silicon', 'ابل سيليكون', 'شريحة ابل', 'm3', 'm4'],
      ['pyrolysis', 'بايروليسيس', 'تنظيف بالنار', 'تنظيف ذاتي فرن', 'تحلل حراري'],
      ['turbo', 'تيربو', 'تربو', 'turbo cool', 'jet cool'],
      ['aqua stop', 'اكوا ستوب', 'حماية تسرب', 'منع التسرب'],
      ['heat pump', 'هيت بامب', 'مضخة حرارة'],
      ['vitafresh', 'فيتافريش', 'حفظ الطازجية', 'fresh zone'],
      ['nvme', 'ان في ام اي', 'ssd nvme'],
      ['quick charge', 'شارج سريع', 'كويك تشارج', 'قويك شارج', 'qc 3.0', 'qc 4.0'],
      ['aptx', 'ابتكس', 'apt-x', 'aac codec'],
      ['ecg', 'رسم قلب', 'قياس القلب', 'كهرباء القلب'],
      ['spo2', 'اوكسجين الدم', 'قياس الاوكسجين', 'blood oxygen'],
      ['rotisserie', 'شواية دوارة', 'سيخ دوار', 'روتيسيري'],
      ['direct drive', 'دايركت درايف', 'موتور مباشر'],
      ['woolmark', 'ولمارك', 'غسيل الصوف', 'اقمشة حساسة'],
      ['twin motor', 'توين موتور', 'موتور مزدوج'],
      ['r32', 'فريون r32', 'فريون صديق البيئة'],
      ['ray tracing', 'ريتريسينج', 'ray tracing', 'تتبع الضوء'],
      ['ecotank', 'ايكوتانك', 'خزان الحبر', 'ink tank', 'بدون خراطيش'],
      ['duplex', 'دوبليكس', 'طباعة وجهين'],
      ['cast iron', 'حديد زهر', 'حوامل حديد', 'cast iron grates'],
      ['vitaminc', 'فيتامين سي', 'vitamin c', 'شاور فيتامين'],
      ['multi air flow', 'تدفق هواء متعدد', 'multi-air-flow'],
      ['steam refresh', 'ستيم ريفريش', 'بخار تجديد', 'steam refresh'],
      ['fall detection', 'اكتشاف السقوط', 'سقوط تلقائي'],
      ['ايكو', 'بابل', 'ايكوبابل', 'ايكو بابل', 'eco', 'bubble', 'ecobubble', 'eco bubble', 'eco bub']
    ];

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

    const _levV0 = new Int32Array(100);
    const _levV1 = new Int32Array(100);
    function lev(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;
      if (b.length >= 100) return a.length + b.length; // fallback
      for (let i = 0; i <= b.length; i++) _levV0[i] = i;
      for (let i = 0; i < a.length; i++) {
        _levV1[0] = i + 1;
        for (let j = 0; j < b.length; j++) {
          const cost = (a[i] === b[j]) ? 0 : 1;
          _levV1[j + 1] = Math.min(_levV1[j] + 1, _levV0[j + 1] + 1, _levV0[j] + cost);
        }
        for (let j = 0; j <= b.length; j++) _levV0[j] = _levV1[j];
      }
      return _levV0[b.length];
    }
    const KWS = ['البوتجازات', 'الثلاجات', 'الفريزرات', 'الغسالات', 'التكييفات', 'التلفزيونات',
      'لاب توب', 'الموبايل', 'سخان مياه', 'افران بلت ان', 'غسالات الاطباق',
      'خلاطات', 'القلايات', 'المكانس', 'المسرح المنزلى', 'الشاشات', 'سماعات',
      'تكنولوجيا الانفرتر', 'الامان', 'مروحة', 'الشواية', 'نو فروست', 'البلازما'];

    function dym(q) {
      if (q.length < 3) return [];
      const nq = norm(q);
      return KWS.map(k => ({ k, d: lev(nq, norm(k)) }))
        .filter(x => x.d <= Math.max(2, Math.floor(norm(x.k).length * .38)) && x.d > 0)
        .sort((a, b) => a.d - b.d).slice(0, 3).map(x => x.k);
    }

    function getL2Types() {
      if (!L2 || !L1 || L1 === 'all') return null;
      const def = (L2_DEFS[L1] || []).find(d => d.id === L2);
      return def ? def.arTypes : null;
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

    function getFABFilter() {
      if (L1 === 'all') return () => true;
      if (L2) {
        const def = (L2_DEFS[L1] || []).find(d => d.id === L2);
        if (def) return item => item.c === def.fabCat;
      }
      return item => (CAT_GRP[item.c] || '') === L1;
    }

    function searchFAB(q) {
      const base = FAB.filter(getFABFilter());
      if (!q) return base;
      const terms = expandQ(q);
      const results = [];

      for (const item of base) {
        const h = norm(item.c + ' ' + item.f);
        let score = Infinity;

        // 1. Exact Match against Feature Name or Keywords
        const fName = norm(item.f);
        for (const t of terms) {
          if (fName === t) { score = 0; break; }
          if (item.pk && item.pk.some(k => norm(k) === t)) { score = 0; break; }
          if (fName.includes(t)) { score = Math.min(score, 1); }
          if (h.includes(t)) { score = Math.min(score, 2); }
        }

        // 2. Fuzzy Match
        if (score > 0) {
          for (const t of terms) {
            if (t.length >= 3) {
              const d = lev(t, fName);
              const thresh = Math.floor(Math.min(t.length, fName.length) * 0.25);
              if (d <= thresh) { score = Math.min(score, d); continue; }

              for (const w of fName.split(' ')) {
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

        if (score < Infinity) results.push({ item, score });
      }

      results.sort((a, b) => a.score - b.score);

      // Exact Match Isolation Rule (Hide distractions if an exact match exists)
      const exacts = results.filter(r => r.score === 0);
      if (exacts.length > 0) return exacts.map(r => r.item);

      // Strict matching priority for partial matches
      if (results.length && results[0].score <= 1) {
        return results.filter(r => r.score <= 1).map(r => r.item);
      }
      return results.map(r => r.item);
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

      // Exact Match Isolation Rule (Hide distractions if an exact match exists)
      const exacts = results.filter(r => r.score === 0);
      if (exacts.length > 0) return exacts.map(r => r.p);

      // Strict matching priority
      if (results.length && results[0].score <= 1) {
        return results.filter(r => r.score <= 1).map(r => r.p);
      }
      return results.map(r => r.p);
    }

    function findExactSKU(q) {
      if (!q || q.length < 4) return null;
      const nq = norm(q);
      return AR.find(p => norm(p.s) === nq) || null;
    }

    const PW = { 'عالية': 0, 'متوسطة': 1, 'منخفضة': 2 };
    function pw(p) { return PW[p] != null ? PW[p] : 99; }

    // ══════════════════════════════════════════════════════════════
    // HTML HELPERS
    // ══════════════════════════════════════════════════════════════
    function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    function hi(text, q) {
      if (!q || !text) return esc(text);
      const terms = expandQ(q).filter(t => t.length > 1);
      let r = esc(text);
      for (const t of terms) {
        try { r = r.replace(new RegExp(escRe(t), 'gi'), m => '<mark>' + m + '</mark>'); } catch (e) { }
      }
      return r;
    }
    function prioBadge(p) {
      const cls = p === 'عالية' ? 'ph' : p === 'متوسطة' ? 'pm' : 'pl';
      const ic = p === 'عالية' ? '🔴' : p === 'متوسطة' ? '🟡' : '🟢';
      return `<span class="prio ${cls}">${ic} ${esc(p)}</span>`;
    }
    const YES = ['متاح', 'نعم', 'yes', 'true'];
    const NO = ['غير متاح', 'لا', 'no', 'false', '—', '-'];

    // ══════════════════════════════════════════════════════════════
    // RENDER: SKU RESULT (strict spec-driven FAB)
    // ══════════════════════════════════════════════════════════════
    function renderSKUResult(prod) {
      const fabCat = TYPE_CAT[prod.t] || '';
      const fabItems = fabCat ? FAB.filter(f => f.c === fabCat) : [];

      // Parse specs from description in ORDER
      // Handles three formats:
      //   "key: value"          → standard key:value
      //   "plain feature name"  → treat whole part as feature, value='متاح'
      //   "6اقصى سعة..."        → numeric prefix is the value, rest is key
      const specPairs = prod.d.split(' | ').filter(Boolean).map(part => {
        const raw = part.trim();
        if (!raw) return null;
        const ci = raw.indexOf(':');
        if (ci > 0) {
          // Standard "key: value"
          return { k: raw.slice(0, ci).trim(), v: raw.slice(ci + 1).trim(), plain: false };
        }
        // Check if part starts with a digit (value-first format like "6اقصى سعة...")
        const numPrefix = raw.match(/^([\d.,]+)\s*(.+)/);
        if (numPrefix) {
          return { k: numPrefix[2].trim(), v: numPrefix[1].trim(), plain: false };
        }
        // Plain feature name — no colon, no numeric prefix
        // Treat the entire part as the feature name, value = 'متاح'
        // Skip program listings, indicators, and UI sub-items
        const nraw = raw.replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي').toLowerCase();
        const PLAIN_NOISE = ['برنامج ', 'مؤشر ', 'زر ', 'شاشة عرض', 'إمكانية', 'امكانيه', 'خيار', '- مؤشر', '- زر', 'استخدام الاقراص'];
        if (PLAIN_NOISE.some(function (n) { return nraw.startsWith(n.replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي').toLowerCase()); })) return null;

        return { k: raw, v: 'متاح', plain: true };
      }).filter(Boolean);

      // Specs grid — track which keys will have FAB for click anchoring
      // We need two passes: first build fab keys set, then build grid
      const SKIP_KEYS_PRE = ['تصميم البوتجاز', 'نوع البوتجاز', 'مقاس البوتجاز', 'ابعاد الثلاجة', 'ابعاد الغسالة', 'الوزن الصافي', 'الوزن الإجمالي', 'رقم الموديل', 'أبعاد الشاشة', 'الارتفاعxالعرضxالعمق', 'العرضxالارتفاعxالعمق', 'المقاس', 'الجهد', 'خيارات لوحة التحكم', '8 برامج لغسيل الأطباق', 'اهم المميزات', 'أهم المميزات', 'اسم الموديل'];
      const skipNormPre = SKIP_KEYS_PRE.map(norm);
      const fabKeySet = new Set();
      for (const { k, v } of specPairs) {
        const nk = norm(k);
        if (skipNormPre.some(s => nk.includes(s) || s.includes(nk))) continue;
        if (NO.includes(norm(v))) continue;
        if (['لون المنتج', 'اللون', 'مقبض الثلاجة'].includes(k) && !YES.includes(norm(v)) && !NO.includes(norm(v))) continue;
        fabKeySet.add(k);
      }

      function fabAnchorId(k) { return 'fab-' + k.replace(/[^\u0600-\u06FFa-zA-Z0-9]/g, '_'); }

      let specsH = '<div class="sku-specs-grid">';
      for (const { k, v } of specPairs) {
        const isYes = YES.includes(norm(v)) || norm(v) === 'متاح';
        const isNo = NO.includes(norm(v));
        // For plain features (no colon), always show as available
        const vDisp = isYes ? '✅ متاح' : isNo ? '— غير متاح' : v;
        const cls = isYes ? 'yes' : isNo ? 'no' : '';
        const hasFAB = fabKeySet.has(k);
        const clickAttr = hasFAB ? ` onclick="scrollToFAB('${fabAnchorId(k)}')" data-fab="${fabAnchorId(k)}"` : '';
        const clsExtra = hasFAB ? ' clickable' : '';
        const hintTitle = hasFAB ? ' title="اضغط لعرض شرح FAB لهذه الخاصية"' : '';
        specsH += `<div class="spec-item${clsExtra}"${clickAttr}${hintTitle}><div class="spec-key">${esc(k)}</div><div class="spec-val ${cls}">${esc(vDisp)}</div>${hasFAB ? '<div class="spec-hint">FAB ↓</div>' : ''}</div>`;
      }
      specsH += '</div>';

      // FAB in EXACT spec order — only for specs that matter (not purely descriptive)
      const SKIP_KEYS = SKIP_KEYS_PRE;
      const skipNorm = skipNormPre;

      let fabH = '';
      let fabCount = 0;
      for (const { k, v } of specPairs) {
        const nk = norm(k);
        // Skip purely dimensional/model specs
        if (skipNorm.some(s => nk.includes(s) || s.includes(nk))) continue;
        // Skip "غير متاح" specs (feature doesn't exist on this SKU)
        if (NO.includes(norm(v))) continue;
        // Skip purely informational / color fields unless they map to FAB
        if (['لون المنتج', 'اللون', 'مقبض الثلاجة'].includes(k) && !YES.includes(norm(v)) && !NO.includes(norm(v))) continue;

        // Try to find in FAB file first
        const fileFAB = findFileFAB(k, fabItems);
        if (fileFAB) {
          const safeBen = fileFAB.b.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
          fabH += `<div class="fab-card fade" id="${fabAnchorId(k)}" data-spec-key="${esc(k)}">
        <div class="fab-head">
          <div><div class="fab-head-lbl">Feature — الخاصية</div><div class="fab-feature">${esc(fileFAB.f)}</div></div>
          <span class="fab-cat-tag">${esc(k)}</span>
        </div>
        <div class="fab-body">
          <div class="fab-adv"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Advantage — الميزة</span></div><div class="fab-adv-body">${esc(fileFAB.a)}</div></div>
          <div class="fab-ben"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Benefit — فائدة العميل</span></div><div class="fab-ben-body">${esc(fileFAB.b)}</div>
            
          </div>
        </div>
      </div>`;
          fabCount++;
        } else {
          // AI Generation — same tone as file
          const gen = generateFAB(k, v, prod.t, prod.n);
          const safeBen = gen.b.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
          fabH += `<div class="fab-card fade" id="${fabAnchorId(k)}" data-spec-key="${esc(k)}">
        <div class="fab-head">
          <div><div class="fab-head-lbl">Feature — الخاصية</div><div class="fab-feature">${esc(gen.f)}</div></div>
          <span class="fab-ai-tag" title="تم إنشاؤه بالذكاء الاصطناعي">✨</span>
        </div>
        <div class="fab-body">
          <div class="fab-adv"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Advantage — الميزة</span></div><div class="fab-adv-body">${esc(gen.a)}</div></div>
          <div class="fab-ben"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Benefit — فائدة العميل</span></div><div class="fab-ben-body">${esc(gen.b)}</div>
            
          </div>
        </div>
      </div>`;
          fabCount++;
        }
      }

      if (!fabH) fabH = '<div class="empty"><div class="empty-icon">📋</div><div class="empty-ttl">لا توجد خصائص FAB مرتبطة</div><div class="empty-sub">هذا المنتج لا ينتمي لفئة مرتبطة بملف FAB حالياً</div></div>';

      return `<div class="sku-result">
    <div class="sku-result-head">
      <div class="sku-badge">${esc(prod.s)}</div>
      <div class="sku-name">${esc(prod.n)}</div>
      <span class="sku-type-tag">${esc(TYPE_ICON[prod.t] || '')} ${esc(prod.t)}</span>
    </div>
    ${specsH}
  </div>
  <div class="fab-section">
    <div class="section-hdr">
      <div class="section-bar"></div>
      <span class="section-title">📚 خصائص FAB لهذا المنتج</span>
      <span class="section-count">${fabCount} خاصية</span>
    </div>
    ${fabH}
  </div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // RENDER: FAB BROWSE
    // ══════════════════════════════════════════════════════════════
    const GRP_CFG = { MDA: { cls: 'mda', icon: '🏠', lbl: 'الأجهزة المنزلية الكبيرة' }, SDA: { cls: 'sda', icon: '🔌', lbl: 'الأجهزة المنزلية الصغيرة' }, ELEC: { cls: 'elec', icon: '📺', lbl: 'الإلكترونيات والترفيه' } };

    function renderFAB(items, q) {
      if (!items.length) return emptyState('🔍', 'لا توجد نتائج FAB', 'جرّب بحثاً آخر أو غيّر التصنيف');
      const grp = {};
      items.forEach(x => { if (!grp[x.c]) grp[x.c] = []; grp[x.c].push(x); });
      const sections = { MDA: [], SDA: [], ELEC: [] };
      Object.entries(grp).forEach(([cat, arr]) => {
        const g = CAT_GRP[cat] || 'ELEC';
        sections[g].push({ cat, arr });
      });
      let h = '';
      for (const [gk, catArr] of Object.entries(sections)) {
        if (!catArr.length) continue;
        const { cls, icon, lbl } = GRP_CFG[gk];
        h += `<div class="grp-hdr ${cls}"><span class="grp-hdr-icon">${icon}</span><span class="grp-hdr-txt">${lbl}</span></div>`;
        catArr.forEach(({ cat, arr }) => {
          const ico = CAT_ICON[cat] || '•';
          h += `<div class="fab-section"><div class="section-hdr"><div class="section-bar"></div><span class="section-title">${ico} ${esc(cat)}</span><span class="section-count">${arr.length} خاصية</span></div>`;
          arr.forEach(item => {
            const safeBen = item.b.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
            const prodsHtml = `<details class="feat-prods-accordion" ontoggle="if(this.open && !this.dataset.loaded){ this.dataset.loaded='true'; window.loadFeatProds(this, '${item.f.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'); }">
               <summary class="feat-prods-summary">الأجهزة المقترحة التي تدعم الخاصية <span class="feat-prods-arrow">▼</span></summary>
               <div class="fab-prods-grid" style="text-align:center;padding:12px;color:#64748B;">جاري البحث عن الأجهزة المقترحة...</div>
             </details>`;
            h += `<div class="fab-card fade">
          <div class="fab-head">
            <div><div class="fab-head-lbl">Feature — الخاصية</div><div class="fab-feature">${hi(item.f, q)}</div></div>
            <span class="fab-cat-tag">${esc(cat.split('(')[0].trim())}</span>
          </div>
          <div class="fab-body">
            <div class="fab-adv"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Advantage — الميزة</span></div><div class="fab-adv-body">${hi(item.a, q)}</div></div>
            <div class="fab-ben"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Benefit — فائدة العميل</span></div><div class="fab-ben-body">${hi(item.b, q)}</div></div>
            ${prodsHtml}
          </div>
        </div>`;
          });
          h += '</div>';
        });
      }
      return h;
    }

    window.loadFeatProds = function (detailsEl, featName) {
      setTimeout(() => {
        const item = FAB.find(x => x.f === featName);
        const grid = detailsEl.querySelector('.fab-prods-grid');
        if (!item) {
          grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:12px;color:#64748B;">حدث خطأ في تحميل الخاصية.</div>';
          return;
        }
        const prods = findProdsWithFeature(item, 50);
        if (prods.length) {
          detailsEl.querySelector('summary').innerHTML = `الأجهزة المقترحة التي تدعم الخاصية (${prods.length}) <span class="feat-prods-arrow">▼</span>`;
          grid.innerHTML = prods.map(p => `<div class="mini-prod" onclick="openProd('${p.s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}')"><div class="mini-prod-t">${esc(p.t)}</div><div class="mini-prod-n">${esc(p.n)}</div><div class="mini-prod-s">${esc(p.s)}</div></div>`).join('');
        } else {
          detailsEl.querySelector('summary').innerHTML = `الأجهزة المقترحة التي تدعم الخاصية (0) <span class="feat-prods-arrow">▼</span>`;
          grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:12px;color:#64748B;">لا توجد أجهزة حالياً بهذه الخاصية.</div>`;
        }
      }, 10);
    };

    // ══════════════════════════════════════════════════════════════
    // RENDER: PRODUCTS
    // ══════════════════════════════════════════════════════════════
    function renderProducts(items, q, pg) {
      if (!items.length) return emptyState('📦', 'لا توجد منتجات', 'جرّب بحثاً مختلفاً');
      const slice = items.slice(pg * PZ, (pg + 1) * PZ);
      let h = '';
      slice.forEach(p => {
        const ico = TYPE_ICON[p.t] || '📦';
        const lines = p.d.split(' | ').filter(Boolean).slice(0, 5);
        const safe = p.s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        h += `<div class="prod-card fade" onclick="openProd('${safe}')">
      <div class="prod-icon">${ico}</div>
      <div class="prod-body">
        <div class="prod-sku">${hi(p.s, q)}</div>
        <div class="prod-name">${hi(p.n, q)}</div>
        <div class="prod-tags">${lines.map(l => `<span class="prod-tag">${hi(l.trim(), q)}</span>`).join('')}</div>
      </div>
      <span class="prod-type">${esc(p.t)}</span>
    </div>`;
      });
      const total = items.length, pages = Math.ceil(total / PZ);
      if (pages > 1) {
        const s = pg * PZ + 1, e = Math.min((pg + 1) * PZ, total);
        h += `<div class="pgn">
      <button class="pg-btn" onclick="goPage(${pg - 1})" ${pg === 0 ? 'disabled' : ''}>السابق</button>
      <span class="pg-info">${s}–${e} من ${total.toLocaleString()}</span>
      <button class="pg-btn" onclick="goPage(${pg + 1})" ${pg >= pages - 1 ? 'disabled' : ''}>التالي</button>
    </div>`;
      }
      return h;
    }

    // ══════════════════════════════════════════════════════════════
    // RENDER: CROSS & UP
    // ══════════════════════════════════════════════════════════════
    function renderCS(items, q) {
      if (!items.length) return emptyState('🔀', 'لا توجد توصيات Cross-Selling', 'جرّب تغيير التصنيف');
      const grp = {};
      items.forEach(x => { if (x.main) { if (!grp[x.main]) grp[x.main] = []; grp[x.main].push(x); } });
      let h = '';
      for (const [main, arr] of Object.entries(grp)) {
        h += `<div class="fab-section"><div class="section-hdr"><div class="section-bar"></div><span class="section-title">${esc(main)}</span><span class="section-count">${arr.length} توصية</span></div>`;
        arr.forEach(r => { h += `<div class="rec-card fade"><div class="rec-head"><div class="rec-title">${hi(r.rec, q)}</div>${prioBadge(r.priority)}</div><div class="rec-reason">${hi(r.reason, q)}</div></div>`; });
        h += '</div>';
      }
      return h;
    }

    function renderUS(items, q) {
      if (!items.length) return emptyState('⬆️', 'لا توجد فرص Upselling', 'جرّب تغيير التصنيف');
      let h = '';
      items.forEach(item => {
        h += `<div class="rec-card fade">
      <div class="rec-head"><div class="rec-title">${hi(item.from, q)}</div>${prioBadge(item.priority)}</div>
      <div class="up-flow">
        <div class="up-box up-from"><div class="up-lbl">من</div><div class="up-val">${hi(item.from, q)}</div></div>
        <div class="up-arr">←</div>
        <div class="up-box up-to"><div class="up-lbl">إلى</div><div class="up-val">${hi(item.to, q)}</div></div>
      </div>
      <div class="up-reason">${hi(item.reason, q)}</div>
    </div>`;
      });
      return h;
    }


    function emptyState(icon, title, sub) {
      return `<div class="empty"><div class="empty-icon">${icon}</div><div class="empty-ttl">${title}</div><div class="empty-sub">${sub}</div></div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // SMART COMPARE (ALL PRODUCTS)
    // ══════════════════════════════════════════════════════════════
    window.activeCompareItems = [];
    const KNOWN_BRANDS = [
      'توشيبا', 'شارب', 'تورنيدو', 'بوش', 'سامسونج', 'بيكو', 'يونيون اير', 'يونيون تك', 'يونيون', 'فريش', 'وايت ويل', 'وايت بوينت', 'وايت وستنجهاوس', 'كريازي', 'هاير', 'زانوسي', 'يونيفرسال', 'اريستون', 'هوفر', 'انديست', 'براون', 'مولينكس', 'كينوود', 'بلاك اند ديكر', 'فيليبس', 'باناسونيك', 'سوني', 'تيفال', 'تراست', 'مينتا', 'ميانتا', 'تاتش', 'جاك', 'سوناي', 'كاسيل', 'اوشن', 'ال جي', 'باساب', 'ميديا', 'ميلا', 'إل جي', 'جراندي', 'الكتروستار',
      'ابل', 'ايفون', 'ماك', 'هواوي', 'شاومي', 'ريدمي', 'بوكو', 'اوبو', 'فيفو', 'ريلمي', 'نوكيا', 'اونر', 'انفينيكس', 'ايتل', 'تيكنو',
      'لينوفو', 'ديل', 'اتش بي', 'اسوس', 'ايسر', 'ام اس اي', 'مايكروسوفت'
    ];

    function extractBrand(name) {
      let lower = name.toLowerCase();
      if (lower.includes('lg') || lower.includes('ال جي') || lower.includes('إل جي') || lower.includes('ال جى')) return 'ال جي';
      if (lower.includes('apple') || lower.includes('ابل') || lower.includes('آبل') || lower.includes('ايفون') || lower.includes('آيفون') || lower.includes('ماك')) return 'أبل';
      if (lower.includes('hp') || lower.includes('اتش بي') || lower.includes('إتش بي')) return 'اتش بي';
      if (lower.includes('dell') || lower.includes('ديل')) return 'ديل';
      if (lower.includes('lenovo') || lower.includes('لينوفو')) return 'لينوفو';
      if (lower.includes('asus') || lower.includes('اسوس')) return 'اسوس';
      if (lower.includes('acer') || lower.includes('ايسر')) return 'ايسر';
      if (lower.includes('msi') || lower.includes('ام اس اي')) return 'ام اس اي';
      if (lower.includes('samsung') || lower.includes('سامسونج')) return 'سامسونج';
      if (lower.includes('huawei') || lower.includes('هواوي')) return 'هواوي';
      if (lower.includes('xiaomi') || lower.includes('شاومي') || lower.includes('ريدمي') || lower.includes('بوكو')) return 'شاومي';
      if (lower.includes('oppo') || lower.includes('اوبو')) return 'اوبو';
      if (lower.includes('vivo') || lower.includes('فيفو')) return 'فيفو';
      if (lower.includes('realme') || lower.includes('ريلمي')) return 'ريلمي';
      if (lower.includes('honor') || lower.includes('اونر')) return 'اونر';
      if (lower.includes('infinix') || lower.includes('انفينيكس')) return 'انفينيكس';
      if (lower.includes('itel') || lower.includes('ايتل')) return 'ايتل';
      if (lower.includes('tecno') || lower.includes('تيكنو')) return 'تيكنو';
      if (lower.includes('nokia') || lower.includes('نوكيا')) return 'نوكيا';

      for (let b of KNOWN_BRANDS) {
        if (name.includes(b)) return b;
      }
      return 'أخرى';
    }

    function renderSmartCompareUI(items) {
      window.activeCompareItems = items;
      const brands = [...new Set(items.map(f => extractBrand(f.n)).filter(b => b !== 'أخرى'))].sort();
      if (items.some(f => extractBrand(f.n) === 'أخرى')) brands.push('أخرى');

      let brandOpts = '<option value="">اختر الماركة</option>' + brands.map(b => `<option value="${b}">${b}</option>`).join('');

      return `
    <div class="compare-section">
      <div class="compare-hdr">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
        المقارنة الذكية (لجميع المنتجات)
      </div>
      <div class="compare-grid">
        <select id="compB1" class="comp-sel" onchange="populateCompareModels(1)">${brandOpts}</select>
        <select id="compM1" class="comp-sel"><option value="">الموديل 1</option></select>
        <select id="compB2" class="comp-sel" onchange="populateCompareModels(2)">${brandOpts}</select>
        <select id="compM2" class="comp-sel"><option value="">الموديل 2</option></select>
      </div>
      <button class="comp-btn" onclick="runSmartCompare()">قارن الآن</button>
      <div id="compTableWrap" class="comp-table-wrap" style="display:none"></div>
    </div>
  `;
    }

    window.populateCompareModels = function (idx) {
      const brand = document.getElementById('compB' + idx).value;
      const modSel = document.getElementById('compM' + idx);
      if (!brand) { modSel.innerHTML = '<option value="">الموديل ' + idx + '</option>'; return; }

      const items = window.activeCompareItems.filter(x => extractBrand(x.n) === brand);
      modSel.innerHTML = '<option value="">اختر الموديل</option>' + items.map(f => `<option value="${f.s}">${f.n.split(' - ')[0]}</option>`).join('');
    };

    window.runSmartCompare = function () {
      const m1Id = document.getElementById('compM1').value;
      const m2Id = document.getElementById('compM2').value;
      const wrap = document.getElementById('compTableWrap');

      if (!m1Id || !m2Id) {
        alert('الرجاء اختيار موديلين للمقارنة');
        return;
      }

      const p1 = AR.find(x => x.s === m1Id);
      const p2 = AR.find(x => x.s === m2Id);

      if (p1.c !== p2.c) {
        wrap.innerHTML = '<div style="text-align:center; padding:30px; font-size:18px; color:#ef4444; font-weight:bold; background:#fef2f2; border:1px solid #f87171; border-radius:12px; margin-top:20px;">مقارنة غير منطقية! 🛑<br><span style="font-size:14px; color:#991b1b; font-weight:normal;">لا يمكن مقارنة جهازين من فئتين مختلفتين (' + p1.c + ' و ' + p2.c + '). يرجى اختيار جهازين من نفس الفئة.</span></div>';
        wrap.style.display = 'block';
        return;
      }

      // Helper to find FAB details
      const getFabBenefit = (keyword) => {
        if (typeof FAB_IDX !== 'undefined') {
          for (let item of FAB_IDX) {
            for (let kw of item.sk) {
              if (kw && kw.length >= 3 && keyword.includes(kw)) {
                return item.f;
              }
            }
          }
        }
        return null;
      };
      const SemanticMapper = [
        // === عام / تصميم ===
        { std: 'البراند', kw: ['البراند', 'براند', 'ماركة', 'ماركه', 'علامة تجارية', 'علامه تجاريه', 'brand', 'الماركة'] },
        { std: 'نوع / فئة المنتج', kw: ['نوع المنتج', 'نوع الموديل', 'فئة', 'فئه', 'تصنيف', 'النوع'] },
        { std: 'رقم الموديل / الكود', kw: ['اسم الموديل', 'موديل', 'رقم المنتج', 'sku', 'كود', 'رمز', 'باراركود', 'part number'] },
        { std: 'اللون', kw: ['لون', 'الوان', 'ألوان', 'دهان', 'درجة اللون'] },
        { std: 'التصميم / الخامة الاساسية', kw: ['مادة الصنع', 'الخامة الاساسية', 'الخامات', 'خامة', 'خامه', 'تصميم', 'هيكل', 'ماتيريال', 'جسم', 'مادة', 'ماده', 'استانلس', 'ستانلس', 'بلاستيك', 'زجاج', 'معدن', 'صاج', 'ستيل'] },
        { std: 'الأبعاد (طول×عرض×ارتفاع)', kw: ['ابعاد', 'أبعاد', 'مقاس', 'طول', 'عرض', 'ارتفاع', 'عمق', 'سم', 'ملم'] },
        { std: 'الوزن', kw: ['وزن', 'صافي', 'اجمالي', 'ثقل'] },
        { std: 'الضمان', kw: ['ضمان', 'كفالة', 'فتره الضمان', 'سنوات'] },
        { std: 'بلد المنشأ', kw: ['منشأ', 'صناعة', 'بلد', 'صنع في'] },

        // === الأجهزة الكبيرة (ثلاجات، غسالات، تكييف، بوتاجاز) ===
        { std: 'السعة / الحجم', kw: ['سعة', 'السعة اللترية', 'سعة الغسيل', 'سعه', 'حجم', 'حمولة', 'لتر', 'كيلو', 'كجم', 'جرام', 'قدم', 'أشخاص', 'اشخاص', 'افراد', 'أفراد', 'سيتنج', 'طقم'] },
        { std: 'القدرة / الطاقة', kw: ['طاقة', 'طاقه', 'قدرة', 'قدره', 'وات', 'واط', 'فولت', 'هرتز', 'امبير', 'استهلاك الكهرباء', 'كهرباء'] },
        { std: 'الموتور / الكمبريسور', kw: ['موتور', 'محرك', 'ضاغط', 'كومبريسور', 'كمبرسور'] },
        { std: 'تقنية الإنفرتر', kw: ['انفرتر', 'إنفرتر', 'inverter', 'أنفرتر'] },
        { std: 'نظام التبريد', kw: ['نظام التبريد', 'تكنولوجيا التبريد', 'نوع التبريد', 'تبريد', 'تجميد', 'نوفروست', 'ديفروست', 'ديفرست', 'بلازما', 'تدفق الهواء'] },
        { std: 'الأدراج / الأرفف / الأبواب', kw: ['درج', 'أدراج', 'ادراج', 'رف', 'أرفف', 'ارفف', 'سلة', 'سلات', 'باب', 'أبواب', 'ابواب'] },
        { std: 'الشاشة و لوحة التحكم', kw: ['نظام التحكم', 'شاشة', 'شاشه', 'ديجيتال', 'رقمية', 'تحكم', 'زر', 'ازرار', 'أزرار', 'تاتش', 'لمس', 'لوحة'] },
        { std: 'عدد البرامج', kw: ['برنامج', 'برامج', 'وضع', 'أوضاع'] },
        { std: 'الشعلات / العيون (بوتاجاز)', kw: ['شعلة', 'شعلات', 'عين', 'عيون', 'موقد'] },
        { std: 'الإشعال / الأمان', kw: ['نظام الاشعال', 'اشعال', 'إشعال', 'أمان', 'امان', 'قفل', 'حماية', 'اطفال', 'أطفال'] },
        { std: 'مستوى الضوضاء', kw: ['ضوضاء', 'صوت', 'ضجيج', 'ديسيبل', 'هادئ'] },

        // === الأجهزة الصغيرة (خلاط، مفرمة، مكنسة) ===
        { std: 'الشفرات / السكاكين', kw: ['شفرات', 'شفرة', 'شفره', 'سكاكين', 'سكين'] },
        { std: 'السرعات و المستويات', kw: ['سرعة', 'سرعه', 'سرعات', 'مستوى', 'مستويات', 'درجات'] },
        { std: 'الملحقات المرفقة', kw: ['ملحق', 'ملحقات', 'مرفق', 'مرفقات', 'كبة', 'مضرب', 'عصارة', 'مطحنة', 'دورق', 'وعاء', 'كأس'] },

        // === الشاشات (TVs) ===
        { std: 'حجم الشاشة', kw: ['بوصة', 'مقاس الشاشة', 'حجم الشاشة'] },
        { std: 'دقة العرض / جودة الصورة', kw: ['دقة العرض', 'دقة الشاشة', 'جودة الصورة', 'ريزوليوشن', 'وضوح', '4k', 'fhd', 'hd', '8k'] },
        { std: 'نوع الشاشة', kw: ['تقنية الشاشة', 'نوع الشاشة', 'led', 'qled', 'oled', 'nano', 'شاشه'] },
        { std: 'سمارت / نظام التشغيل', kw: ['سمارت', 'نظام تشغيل', 'اندرويد', 'android', 'webos', 'tizen', 'ويندوز', 'ios', 'ماك', 'os'] },
        { std: 'المنافذ و التوصيل', kw: ['منافذ', 'مداخل', 'hdmi', 'usb', 'توصيل', 'اتصال', 'اتصالات', 'بلوتوث', 'واي فاي', 'واى فاى', 'wi-fi', 'wifi', 'bluetooth', 'مخرج'] },
        { std: 'الريسيفر', kw: ['ريسيفر', 'رسيفر', 'استقبال'] },

        // === اللاب توب و الموبايل ===
        { std: 'المعالج (Processor)', kw: ['بروسيسور', 'معالج', 'processor', 'كور', 'core i', 'ryzen', 'ميديا تك', 'سناب دراجون', 'الجيل', 'نواة'] },
        { std: 'الرامات (RAM)', kw: ['رام', 'رامات', 'ram', 'ذاكرة عشوائية', 'ذاكرة الوصول العشوائي'] },
        { std: 'مساحة التخزين (Storage)', kw: ['مساحة التخزين', 'سعة التخزين', 'تخزين', 'هارد', 'ssd', 'hdd', 'ذاكرة داخلية', 'مساحه', 'الذاكرة الداخلية'] },
        { std: 'كارت الشاشة (VGA)', kw: ['كارت الشاشة', 'كارت شاشة', 'vga', 'جرافيك', 'نيفيديا', 'amd radeon', 'nvidia'] },
        { std: 'الكاميرا', kw: ['كاميرا', 'كاميرات', 'ميجابيكسل', 'سيلفي', 'عدسة', 'الكاميرا الأمامية', 'الكاميرا الخلفية', 'بيكسل'] },
        { std: 'البطارية', kw: ['بطارية', 'بطاريه', 'مللي أمبير', 'شحن سريع', 'شحن', 'سعة البطارية'] },
        { std: 'الشبكة و الشريحة', kw: ['شريحة', 'شريحتين', 'بطاقة sim', 'sim', 'شبكة', 'الجيل الخامس', 'الجيل الرابع', '4g', '5g'] },

        // === أخرى ===
        { std: 'الإضاءة', kw: ['اضاءة', 'إضاءة', 'ليد', 'led'] },
        { std: 'الصحة و التعقيم', kw: ['تعقيم', 'بكتيريا', 'جراثيم', 'صحي', 'فلتر', 'تنقية', 'منقي'] },
        { std: 'تكنولوجيا إضافية', kw: ['تكنولوجيا', 'خاصية', 'خواص', 'مميزات', 'ميزات', 'اضافية', 'إضافية', 'ذكية'] }
      ];

      const normalizePropertyKey = (rawKey) => {
        if (!rawKey) return rawKey;
        let base = rawKey.trim().toLowerCase();
        for (let map of SemanticMapper) {
          if (map.kw.some(k => base.includes(k))) {
            return map.std;
          }
        }
        return rawKey.trim();
      };


      const parseSpecs = (p) => {
        let specs = {};
        let extractedBrand = extractBrand(p.n);
        if (extractedBrand !== 'أخرى') {
          specs['البراند'] = extractedBrand;
        }

        let n = p.n;
        if (n.match(/(\d+)\s*باب/)) specs['التصميم / الأبواب'] = n.match(/(\d+)\s*باب/)[0];
        if (n.includes('انفرتر')) specs['تقنية الإنفرتر'] = 'موتور ذكي يوفر حتى 50% من الكهرباء ويعمل بهدوء تام';
        if (n.includes('ديجيتال') || n.includes('شاشة')) specs['شاشة ديجيتال'] = 'تحكم دقيق ومباشر في الإعدادات بدون فتح الباب لتقليل استهلاك الطاقة';
        if (n.includes('نوفروست')) specs['نظام التبريد'] = 'نوفروست (توزيع هواء مستمر يمنع تكون الثلج نهائياً ويحافظ على المساحة)';
        if (n.includes('ديفروست')) specs['نظام التبريد'] = 'ديفروست (نظام التبريد المباشر العادي - يحتاج لإذابة الثلج يدوياً)';
        if (n.toLowerCase().includes('smart') || n.includes('سمارت')) specs['تكنولوجيا ذكية'] = 'إمكانية التحكم عن بعد عبر الموبايل الذكي';
        if (n.toLowerCase().includes('4k')) specs['جودة الصورة'] = 'دقة 4K UHD لصور فائقة الوضوح والتفاصيل وألوان حقيقية';
        if (n.includes('بخار')) specs['الغسيل بالبخار'] = 'تعقيم تام للملابس وإزالة 99% من البكتيريا والمسببات للحساسية وتسهيل الكوي';
        if (n.includes('بلازما')) specs['تكنولوجيا البلازما'] = 'تنقية الهواء الداخلي لمنع اختلاط الروائح وقتل الميكروبات ليدوم الطعام طازجاً';

        let capMatch = n.match(/(\d+(?:\.\d+)?)\s*(لتر|قدم|كيلو|بوصة)/);

        p.d.split(' | ').forEach(s => {
          let rawStr = s.replace(/^- /, '').trim();
          let key = rawStr;
          let val = '';

          if (rawStr.includes(':')) {
            let parts = rawStr.split(':');
            key = parts[0].trim();
            val = parts.slice(1).join(':').trim();
          }

          let fullStr = rawStr.toLowerCase();

          if ((fullStr.includes('سعة') && !fullStr.includes('تخزين') && !fullStr.includes('بطارية')) || fullStr.includes('لتر') || fullStr.includes('كيلو') || fullStr.includes('قدم') || (fullStr.includes('بوصة') && !fullStr.includes('شاشة'))) {
            let type = 'السعة';
            if (fullStr.includes('كيلو') || fullStr.includes('غسيل')) type = 'السعة (وزن)';
            else if (fullStr.includes('بوصة') || fullStr.includes('شاشة')) type = 'حجم الشاشة';

            key = type;
            let match = fullStr.match(/(\d+(?:\.\d+)?)/);
            if (match && val === '') {
              let unit = fullStr.includes('لتر') ? 'لتر' : (fullStr.includes('كيلو') ? 'كجم' : (fullStr.includes('قدم') ? 'قدم' : (fullStr.includes('بوصة') ? 'بوصة' : '')));
              val = match[1] + (unit ? ' ' + unit : '');
            } else if (val === '') {
              val = rawStr;
            }
          }
          else if (fullStr.includes('نوفروست')) { key = 'نظام التبريد'; val = 'نوفروست (توزيع هواء مستمر)'; }
          else if (fullStr.includes('ديفروست')) { key = 'نظام التبريد'; val = 'ديفروست (يحتاج إزالة ثلج يدوياً)'; }
          else if (fullStr.includes('ديجيتال')) { key = 'الشاشة و لوحة التحكم'; val = 'شاشة ديجيتال ومباشرة'; }
          else if (fullStr.includes('انفرتر')) { key = 'تقنية الإنفرتر'; val = 'موتور ذكي موفر للطاقة'; }
          else if (fullStr.includes('بلازما')) { key = 'تكنولوجيا إضافية'; val = 'تنقية الهواء ليدوم الطعام طازجاً'; }
          else if (fullStr.includes('بخار')) { key = 'تكنولوجيا إضافية'; val = 'غسيل بالبخار (تعقيم وإزالة كرمشة)'; }
          else if (fullStr.includes('مبرد') || fullStr.includes('حنفية')) { key = 'تكنولوجيا إضافية'; val = 'مبرد مياه خارجي'; }
          else if (fullStr.includes('لون')) { key = 'اللون'; if (val === '') val = rawStr; }

          if (val === '') {
            val = rawStr;
          }

          if (val === 'متاح' || val === 'متوفر' || val.toLowerCase() === 'yes' || val === 'نعم') {
            val = '<span style="color:#166534; font-weight:600;">متوفر</span>';
          }

          if (key) {
            let normKey = normalizePropertyKey(key);

            if (normKey === key && !rawStr.includes(':') && key.length > 40) {
              normKey = 'خصائص و ميزات أخرى';
            }

            if (!['غير متاح', '-', 'لا يوجد', 'n/a', ''].includes(val.trim().toLowerCase())) {
              if (specs[normKey]) {
                if (!specs[normKey].includes(val)) specs[normKey] += ' <br>• ' + val;
              } else {
                specs[normKey] = val;
              }
            }
          }
        });

        if (!specs['السعة'] && !specs['السعة (وزن)'] && capMatch) {
          specs['السعة / الحجم'] = capMatch[0];
        }

        return specs;
      };

      const s1 = parseSpecs(p1);
      const s2 = parseSpecs(p2);

      const allKeys = [...new Set([...Object.keys(s1), ...Object.keys(s2)])];

      let table = '<table class="comp-table"><thead><tr><th>الخاصية</th><th>' + p1.n + '</th><th>' + p2.n + '</th></tr></thead><tbody>';

      const sortedKeys = allKeys.sort((a, b) => {
        if (a === 'البراند') return -1;
        if (b === 'البراند') return 1;
        if (a.includes('سعة') || a.includes('حجم')) return -1;
        if (b.includes('سعة') || b.includes('حجم')) return 1;
        return 0;
      });

      let p1Score = 0;
      let p2Score = 0;
      let p1Advantages = [];
      let p2Advantages = [];

      sortedKeys.forEach(k => {
        let v1 = s1[k] || '-';
        let v2 = s2[k] || '-';

        let highlight1 = false;
        let highlight2 = false;

        let isSpec1Avail = v1 !== '-';
        let isSpec2Avail = v2 !== '-';

        if (k.includes('سعة') || k.includes('حجم')) {
          let n1 = parseFloat(v1) || 0;
          let n2 = parseFloat(v2) || 0;
          if (n1 > n2) { highlight1 = true; p1Advantages.push('سعة أكبر (' + v1 + ')'); p1Score++; }
          if (n2 > n1) { highlight2 = true; p2Advantages.push('سعة أكبر (' + v2 + ')'); p2Score++; }
        } else if (isSpec1Avail && !isSpec2Avail) {
          highlight1 = true; p1Score++; p1Advantages.push(k);
        } else if (isSpec2Avail && !isSpec1Avail) {
          highlight2 = true; p2Score++; p2Advantages.push(k);
        } else {
          if (v1.includes('انفرتر') || v1.includes('إنفرتر')) { highlight1 = true; p1Score += 2; if (!p1Advantages.includes('موتور إنفرتر')) p1Advantages.push('موتور إنفرتر (موفر للكهرباء)'); }
          if (v2.includes('انفرتر') || v2.includes('إنفرتر')) { highlight2 = true; p2Score += 2; if (!p2Advantages.includes('موتور إنفرتر')) p2Advantages.push('موتور إنفرتر (موفر للكهرباء)'); }
          if (v1.includes('نوفروست')) { highlight1 = true; p1Score++; }
          if (v2.includes('نوفروست')) { highlight2 = true; p2Score++; }
        }

        const diffClass = (s1[k] !== s2[k]) ? 'diff-row' : '';

        let cell1 = v1;
        if (v1 === '-') {
          cell1 = '<span style="color:#CBD5E1; font-weight:bold; font-size:18px;">-</span>';
        } else if (highlight1) {
          cell1 = `<div style="background:#E6F4F4; padding:8px; border-radius:6px; border:1px solid #0B6E6E; box-shadow: 0 2px 4px rgba(11,110,110,0.1);"><span style="color:#0B6E6E; float:left; font-size:16px;">★</span>${v1}</div>`;
        }

        let cell2 = v2;
        if (v2 === '-') {
          cell2 = '<span style="color:#CBD5E1; font-weight:bold; font-size:18px;">-</span>';
        } else if (highlight2) {
          cell2 = `<div style="background:#E6F4F4; padding:8px; border-radius:6px; border:1px solid #0B6E6E; box-shadow: 0 2px 4px rgba(11,110,110,0.1);"><span style="color:#0B6E6E; float:left; font-size:16px;">★</span>${v2}</div>`;
        }

        table += `<tr class="${diffClass}"><td style="font-weight:600; color:#0D1B2A; border-bottom:1px solid #E4EAF2; padding:12px;">${k}</td><td style="border-bottom:1px solid #E4EAF2; padding:12px;">${cell1}</td><td style="border-bottom:1px solid #E4EAF2; padding:12px;">${cell2}</td></tr>`;
      });

      let decisionHtml = '';
      if (p1Score === 0 && p2Score === 0) {
        decisionHtml = 'الجهازان متقاربان جداً في المواصفات، الاختيار يعتمد على ميزانية العميل وتفضيله للعلامة التجارية.';
      } else {
        let winnerName = p1Score >= p2Score ? p1.n.split(' - ')[0] : p2.n.split(' - ')[0];
        let loserName = p1Score < p2Score ? p1.n.split(' - ')[0] : p2.n.split(' - ')[0];
        let winnerAdvs = p1Score >= p2Score ? p1Advantages : p2Advantages;
        let loserAdvs = p1Score < p2Score ? p1Advantages : p2Advantages;

        decisionHtml = `<b>القرار الذكي للمستشار 💡:</b><br>
      بناءً على المقارنة، نرشح بقوة <b style="color:#0B6E6E;">${winnerName}</b> للعميل الذي يبحث عن المواصفات الأعلى والقيمة الأفضل، حيث يتفوق في: <span style="color:#0B6E6E; font-weight:700;">${winnerAdvs.slice(0, 4).join('، ')}</span>.<br><br>`;

        if (loserAdvs.length > 0) {
          decisionHtml += `ومع ذلك، يظل <b style="color:#B8891A;">${loserName}</b> خياراً مناسباً إذا كان العميل يفضل: <span style="color:#B8891A; font-weight:700;">${loserAdvs.slice(0, 3).join('، ')}</span>.`;
        } else {
          decisionHtml += `هذا الجهاز يتفوق بشكل شامل على المنافس ويعتبر ترقية حقيقية للعميل.`;
        }
      }

      table += `
    <tr class="verdict-row" style="background:#FEF9EE; border-top:3px solid #B8891A;">
        <td colspan="3" style="padding:18px; font-size:14.5px; line-height:1.7; color:#0A2540; border-radius: 0 0 12px 12px;">
            ${decisionHtml}
        </td>
    </tr>
  `;

      table += '</tbody></table>';
      table += '<div style="display:flex; gap:10px; justify-content:center; margin-top:20px;"><button class="comp-btn" style="background:#ef4444;" onclick="document.getElementById(\'compTableWrap\').style.display=\'none\'; document.getElementById(\'vProducts\').style.display=\'block\'; document.getElementById(\'vFAB\').style.display=\'block\';">إلغاء المقارنة وإظهار المنتجات</button></div>';
      wrap.innerHTML = table;
      wrap.style.display = 'block';
      if (document.getElementById('vProducts')) document.getElementById('vProducts').style.display = 'none';
      if (document.getElementById('vFAB')) document.getElementById('vFAB').style.display = 'none';
    };

    // ══════════════════════════════════════════════════════════════
    // MAIN RENDER
    // ══════════════════════════════════════════════════════════════
    function render() {
      const q = Q;

      // ── SKU EXACT MATCH ──────────────────────────────────────
      const exactSKU = findExactSKU(q);
      const skuEl = document.getElementById('skuResult');
      if (exactSKU) {
        skuEl.innerHTML = renderSKUResult(exactSKU);
        skuEl.style.display = 'block';
        if (VIEW !== 'fab') setView('fab');
      } else {
        skuEl.style.display = 'none';
        skuEl.innerHTML = '';
      }

      // ── FEATURE SEARCH MODE ───────────────────────────────────
      // When query matches FAB features, show feature results in FAB view
      if (FEAT_MODE && FEAT_RESULTS.length && !exactSKU) {
        // Force FAB view
        // Ensure FAB view is active for feature results
        if (VIEW !== 'fab') {
          VIEW = 'fab';
          for (const k in VIEW_IDS) { const el = document.getElementById(VIEW_IDS[k]); if (el) el.style.display = (k === 'fab' ? 'block' : 'none'); }
          for (const k in TAB_IDS) { const btn = document.getElementById(TAB_IDS[k]); if (btn) btn.className = 'vtab' + (k === 'fab' ? ' on' : ''); }
        }
        document.getElementById('vFAB').innerHTML = renderFeatureSearch(FEAT_RESULTS, q);
        setCount(FEAT_RESULTS.length, 'خاصية مطابقة');
        return;
      }

      // ── NORMAL MODE ───────────────────────────────────────────
      if (VIEW === 'fab') {
        const items = searchFAB(q);
        document.getElementById('vFAB').innerHTML = exactSKU ? '' : renderFAB(items, q);
        setCount(items.length, 'خاصية FAB');
      } else if (VIEW === 'products') {
        filtProds = searchAR(q);

        // Inject Smart Compare UI dynamically based on active L2 view
        const compEl = document.getElementById('vCompare');
        if (L2 && L2 !== 'all' && !q) {
          if (compEl.innerHTML === '' || window.activeCompareItems !== filtProds) {
            compEl.innerHTML = renderSmartCompareUI(filtProds);
          }
          compEl.style.display = 'block';
        } else {
          compEl.style.display = 'none';
        }

        document.getElementById('vProducts').innerHTML = renderProducts(filtProds, q, PAGE);
        setCount(filtProds.length, 'منتج');
      } else if (VIEW === 'cross') {
        const csQ = (document.getElementById('csInp') || { value: '' }).value.trim();
        const useQ = csQ || q;

        // Filter by active category
        const activeL2s = L2 ? [L2] : (L1 && L1 !== 'all' && L2_DEFS[L1] ? L2_DEFS[L1].map(d => d.id) : []);
        let validKws = [];
        activeL2s.forEach(l2 => {
          let kws = [];
          if (l2 === 'fridges') kws = ['ثلاج'];
          else if (l2 === 'washers') kws = ['غسال'];
          else if (l2 === 'cookers') kws = ['بوتجاز', 'بوتاجاز'];
          else if (l2 === 'dw') kws = ['اطباق'];
          else if (l2 === 'freezers') kws = ['فريزر'];
          else if (l2 === 'ac') kws = ['تكييف', 'مكيف', 'سبليت'];
          else if (l2 === 'ovens') kws = ['فرن'];
          else if (l2 === 'hobs') kws = ['مسطح', 'هوب'];
          else if (l2 === 'hoods') kws = ['شفاط', 'هود'];
          else if (l2 === 'wh' || l2 === 'heaters') kws = ['سخان'];
          else if (l2 === 'tv' || l2 === 'tvs') kws = ['شاش', 'تلفزيون'];
          else if (l2 === 'mobiles') kws = ['موبايل', 'هاتف'];
          else if (l2 === 'laptops') kws = ['لاب توب', 'لابتوب'];
          else if (l2 === 'small') kws = ['مكنس', 'مبرد', 'ميكسر', 'مفرم', 'شواي'];
          else if (l2 === 'blenders') kws = ['خلاط', 'هاند بلندر', 'عجان'];
          else if (l2 === 'juicers') kws = ['عصار'];
          else if (l2 === 'afry') kws = ['قلاي', 'محضر'];
          else if (l2 === 'coffee') kws = ['قهو', 'اسبريسو'];
          else if (l2 === 'personal') kws = ['شعر', 'حلاق', 'سيشوار'];
          else if (l2 === 'garment') kws = ['مكوا'];
          else if (l2 === 'kettles') kws = ['غلاي', 'كاتيل'];
          else if (l2 === 'fans') kws = ['مروح'];
          else if (l2 === 'audio') kws = ['صوت', 'سماع', 'مسرح'];
          else if (l2 === 'gaming') kws = ['لعب', 'بلايستيشن', 'جيمنج'];
          else kws = [norm(l2)];
          validKws = validKws.concat(kws.map(norm));
        });

        const items = CS.filter(x => {
          const h = norm(x.main + ' ' + x.rec + ' ' + x.reason);
          const mq = !useQ || expandQ(useQ).some(t => h.includes(t));
          const mText = norm(x.main || '');
          const ml = (validKws.length === 0) || validKws.some(kw => mText.includes(kw));
          return mq && ml;
        }).sort((a, b) => pw(a.priority) - pw(b.priority));

        const ci = document.getElementById('vCrossInner');
        if (ci) ci.innerHTML = renderCS(items, useQ);
        const cc = document.getElementById('csCnt');
        if (cc) cc.innerHTML = '<strong>' + items.length + '</strong> توصية';
        setCount(items.length, 'توصية Cross-Selling');
      } else if (VIEW === 'up') {
        const upQ = (document.getElementById('upInp') || { value: '' }).value.trim();
        const useUpQ = upQ || q;

        // Filter by active category
        const activeL2s = L2 ? [L2] : (L1 && L1 !== 'all' && L2_DEFS[L1] ? L2_DEFS[L1].map(d => d.id) : []);
        let validKws = [];
        activeL2s.forEach(l2 => {
          let kws = [];
          if (l2 === 'fridges') kws = ['ثلاج'];
          else if (l2 === 'washers') kws = ['غسال'];
          else if (l2 === 'cookers') kws = ['بوتجاز', 'بوتاجاز'];
          else if (l2 === 'dw') kws = ['اطباق'];
          else if (l2 === 'freezers') kws = ['فريزر'];
          else if (l2 === 'ac') kws = ['تكييف', 'مكيف', 'سبليت'];
          else if (l2 === 'ovens') kws = ['فرن'];
          else if (l2 === 'hobs') kws = ['مسطح', 'هوب'];
          else if (l2 === 'hoods') kws = ['شفاط', 'هود'];
          else if (l2 === 'wh' || l2 === 'heaters') kws = ['سخان'];
          else if (l2 === 'tv' || l2 === 'tvs') kws = ['شاش', 'تلفزيون'];
          else if (l2 === 'mobiles') kws = ['موبايل', 'هاتف'];
          else if (l2 === 'laptops') kws = ['لاب توب', 'لابتوب'];
          else if (l2 === 'small') kws = ['مكنس', 'مبرد', 'ميكسر', 'مفرم', 'شواي'];
          else if (l2 === 'blenders') kws = ['خلاط', 'هاند بلندر', 'عجان'];
          else if (l2 === 'juicers') kws = ['عصار'];
          else if (l2 === 'afry') kws = ['قلاي', 'محضر'];
          else if (l2 === 'coffee') kws = ['قهو', 'اسبريسو'];
          else if (l2 === 'personal') kws = ['شعر', 'حلاق', 'سيشوار'];
          else if (l2 === 'garment') kws = ['مكوا'];
          else if (l2 === 'kettles') kws = ['غلاي', 'كاتيل'];
          else if (l2 === 'fans') kws = ['مروح'];
          else if (l2 === 'audio') kws = ['صوت', 'سماع', 'مسرح'];
          else if (l2 === 'gaming') kws = ['لعب', 'بلايستيشن', 'جيمنج'];
          else kws = [norm(l2)];
          validKws = validKws.concat(kws.map(norm));
        });

        const items = US.filter(x => {
          const h = norm(x.from + ' ' + x.to + ' ' + x.reason);
          const mq = !useUpQ || expandQ(useUpQ).some(t => h.includes(t));
          const mText = norm(x.from || '');
          const ml = (validKws.length === 0) || validKws.some(kw => mText.includes(kw));
          return mq && ml;
        }).sort((a, b) => pw(a.priority) - pw(b.priority));

        const upEl = document.getElementById('vUpInner');
        if (upEl) upEl.innerHTML = renderUS(items, useUpQ);
        const upCntEl = document.getElementById('upCnt');
        if (upCntEl) upCntEl.innerHTML = '<strong>' + items.length + '</strong> فرصة';
        setCount(items.length, 'فرصة Upselling');
      } else if (VIEW === 'manual') {
        setCount(1, 'دليل مستشار راية');
      }
    }

    function setCount(n, lbl) {
      document.getElementById('cntNum').textContent = n;
      document.getElementById('resultTxt').innerHTML = `<strong>${n.toLocaleString()}</strong> ${lbl}`;
    }

    // ══════════════════════════════════════════════════════════════
    // NAVIGATION
    // ══════════════════════════════════════════════════════════════
    function setL1(l1, el) {
      L1 = l1; L2 = ''; PAGE = 0;
      document.querySelectorAll('.l1-btn').forEach(b => b.classList.remove('on'));
      if (el) el.classList.add('on');
      // Build L2
      const l2Nav = document.getElementById('navL2');
      const l2Inner = document.getElementById('navL2Inner');
      if (l1 === 'all') { l2Nav.classList.remove('show'); l2Inner.innerHTML = ''; }
      else {
        const defs = L2_DEFS[l1] || [];
        l2Inner.innerHTML = defs.map(d => `<button class="l2-btn" id="l2-${d.id}" onclick="setL2('${d.id}',this)">${esc(d.lbl)}</button>`).join('');
        l2Nav.classList.add('show');
      }
      render();
    }

    function setL2(l2, el) {
      // Toggle: clicking active L2 deselects it
      if (L2 === l2) { L2 = ''; document.querySelectorAll('.l2-btn').forEach(b => b.classList.remove('on')); }
      else {
        L2 = l2; PAGE = 0;
        document.querySelectorAll('.l2-btn').forEach(b => b.classList.remove('on'));
        if (el) el.classList.add('on');
      }
      render();
    }

    const VIEW_IDS = { fab: 'vFAB', products: 'vProducts', cross: 'vCross', up: 'vUp', manual: 'vManual' };
    const TAB_IDS = { fab: 'tFAB', products: 'tProducts', cross: 'tCross', up: 'tUp', manual: 'tManual' };

    function setView(v) {
      VIEW = v; PAGE = 0;
      for (const k in VIEW_IDS) { const el = document.getElementById(VIEW_IDS[k]); if (el) el.style.display = (k === v ? 'block' : 'none'); }
      for (const k in TAB_IDS) { const btn = document.getElementById(TAB_IDS[k]); if (btn) btn.className = 'vtab' + (k === v ? ' on' : ''); }
      if (v !== 'products') { const cmp = document.getElementById('vCompare'); if (cmp) cmp.style.display = 'none'; }
      // Reset local search inputs when switching views
      if (v !== 'cross') { var ci = document.getElementById('csInp'); if (ci) ci.value = ''; var ccl = document.getElementById('csClr'); if (ccl) ccl.style.display = 'none'; }
      if (v !== 'up') { var ui = document.getElementById('upInp'); if (ui) ui.value = ''; var ucl = document.getElementById('upClr'); if (ucl) ucl.style.display = 'none'; }
      if (v !== 'manual') { var mni = document.getElementById('manInp'); if (mni) mni.value = ''; var mncl = document.getElementById('manClr'); if (mncl) mncl.style.display = 'none'; }
      render();
    }

    function goPage(p) { PAGE = p; render(); window.scrollTo(0, 58); }

    // ══════════════════════════════════════════════════════════════
    // SEARCH
    // ══════════════════════════════════════════════════════════════

    // ══════════════════════════════════════════════════════════════
    // FEATURE SEARCH ENGINE
    // Fuzzy + Levenshtein matching on FAB_IDX for query → FAB features
    // Then finds AR products that explicitly have each feature
    // ══════════════════════════════════════════════════════════════

    // ─── FEATURE SEARCH: find matching FAB items by query ─────────
    function searchFeatures(q) {
      if (!q || q.length < 2) return [];
      const terms = expandQ(q);
      const results = [];
      const seen = new Set();

      for (const item of FAB_IDX) {
        if (seen.has(item.f)) continue;
        let score = Infinity;

        // 1. Exact match or prefix/substring match
        for (const kw of item.sk) {
          if (!kw) continue;
          for (const t of terms) {
            if (t === kw) { score = 0; break; }
            if (kw.includes(t) || (t.includes(kw) && kw.length >= 3)) {
              score = 0.5;
            }
          }
          if (score === 0) break;
        }

        // 2. Token-level Levenshtein (fuzzy typo correction - STRICTER)
        if (score > 0.5) {
          for (const kw of item.sk) {
            if (!kw || kw.length < 2) continue;
            for (const t of terms) {
              const d1 = lev(t, kw);
              const thresh1 = Math.floor(Math.min(t.length, kw.length) * 0.25);
              if (d1 <= thresh1) {
                score = Math.min(score, d1); continue;
              }
              for (const tok of kw.split(' ')) {
                if (tok.length < 3) continue;
                const d2 = lev(t, tok);
                const thresh2 = Math.floor(Math.min(t.length, tok.length) * 0.25);
                if (d2 <= thresh2) score = Math.min(score, d2 + 0.5);
              }
            }
          }
        }

        if (score < Infinity) {
          results.push({ item, score });
          seen.add(item.f);
        }
      }

      if (!results.length) return [];

      // Sort by score
      results.sort((a, b) => a.score - b.score);

      // Exact Match Isolation Rule (Hide distractions if an exact match exists)
      const exacts = results.filter(r => r.score === 0);
      if (exacts.length > 0) return exacts.map(r => r.item);

      // Return all matched features to enable progressive filtering (like phone contacts)
      if (results[0].score <= 1.5) {
        return results.filter(r => r.score <= 1.5).map(r => r.item);
      }

      return [];
    }

    // ─── TYPO CORRECTION: best suggestion for mistyped query ──────
    function typoCorrect(q) {
      const nq = norm(q);
      const candidates = [];
      const seen = new Set();

      for (const item of FAB_IDX) {
        for (const kw of item.sk) {
          if (!kw || kw.length < 3 || seen.has(kw)) continue;
          seen.add(kw);
          const d = lev(nq, kw);
          const thresh = Math.max(2, Math.floor(Math.min(nq.length, kw.length) * 0.45));
          if (d <= thresh && d > 0) candidates.push({ kw, d, label: item.f });
        }
      }

      // Return top 3 unique display labels
      const labels = new Set();
      return candidates
        .sort((a, b) => a.d - b.d)
        .filter(c => { if (labels.has(c.label)) return false; labels.add(c.label); return true; })
        .slice(0, 3)
        .map(c => ({ label: c.label, kw: c.kw }));
    }

    // ─── FIND PRODUCTS WITH FEATURE ──────────────────────────────
    // For a FAB item, find AR products whose description contains the feature keywords
    // Max: 12 per feature (6 shown initially, rest revealed on "see more")

    // ─── FAB Category → allowed AR product types ──────────────
    const CAT_TO_TYPES = {
      'البوتاجازات (Cookers)': ['البوتجازات'],
      'التبريد (الثلاجات والفريزرات)': ['الثلاجات', 'الفريزرات'],
      'الغسالات (Washing Machines)': ['الغسالات', 'مجفف الملابس'],
      'غسالات الأطباق (Dishwashers)': ['غسالات الاطباق'],
      'أفران بلت ان': ['افران بلت ان'],
      'شفاطات بلت ان': ['شفاط بلت ان'],
      'مساطح بلت ان': ['مسطح بلت ان'],
      'التكييفات (Air Conditioners)': ['تكيفات', 'مبرد هواء'],
      'فئة السخانات (Water Heaters)': ['سخان مياه', 'سخانات مياه'],
      'الأجهزة الصغيرة الأساسية (SDA)': ['المكانس', 'مبرد المياه', 'الميكسر', 'المفرمة', 'ميكروويف', 'مايكروويف'],
      'المطبخ الحديث (خلاطات)': ['خلاطات', 'عصارات'],
      'المطبخ الحديث (العصارات)': ['العصارات'],
      'المطبخ الحديث (Air Fryers & Processors)': ['القلايات', 'محضر الطعام'],
      'صانعات القهوة (Coffee Machines)': ['صانع ومحضر القهوة'],
      'العناية الشخصية (Personal Care)': ['ادوات فرد الشعر', 'مصفف الشعر', 'مجفف الشعر', 'ماكينات الحلاقة', 'ماكينات العناية الشخصية'],
      'العناية بالملابس (Garment Care)': ['المكواه'],
      'غلايات المياه': ['غلايات المياة'],
      'المراوح': ['المراوح'],
      'الشاشات (TVs & Monitors)': ['التلفزيونات', 'الشاشات', 'شاشات كمبيوتر'],
      'الأجهزة الذكية (Mobiles & Laptops)': ['لاب توب', 'طابعات', 'باور بانك', 'كابلات وشواحن', 'ميموري وتخزين', 'ساعات ذكية'],
      'الأجهزة الذكية (Mobiles)': ['الموبايل & التابلت', 'الموبايل & التابلت IOS'],
      'أجهزة الصوت (Soundbars)': ['المسرح المنزلى', 'السماعات & مكبرات الصوت', 'سماعات الأذن', 'سماعات اذن & سماعات رأس'],
      'الجيمنج والمنزل الذكي': ['اجهزة الالعاب', 'ادوات المنزل الذكي', 'كاميرات مراقبة', 'شبكات'],
    };
    function findProdsWithFeature(fabItem, max) {
      max = max || 12;
      // Always include the feature name as a fallback search keyword
      const keywords = Array.from(new Set([...(fabItem.pk || []), fabItem.f]));
      if (!keywords.length) return [];

      // Get allowed product types from FAB category
      const allowedTypes = CAT_TO_TYPES[fabItem.c] || null;

      // Sort by length desc — longer/more specific keywords checked first
      const sortedKws = keywords.slice().sort((a, b) => b.length - a.length);

      const results = [];
      const seen = new Set();

      for (const p of AR) {
        if (seen.has(p.s)) continue;
        // Category filter: only products of the right type
        if (allowedTypes && !allowedTypes.includes(p.t)) continue;
        const dn = norm((p.d || '') + ' ' + (p.n || ''));
        let matched = false;

        for (const kw of sortedKws) {
          // Require minimum 4 chars to avoid false positives
          if (!kw || kw.length < 4) continue;

          const expandedKws = expandQ(kw);
          let matchedKw = null;
          for (const ekw of expandedKws) {
            if (dn.includes(ekw)) { matchedKw = ekw; break; }
            // Fuzzy Matching fallback for embedded text without exact match
            if (ekw.length >= 4) {
              const tresh = Math.floor(ekw.length * 0.2);
              for (const w of dn.split(/\s+/)) {
                if (w.length >= 4 && lev(ekw, w) <= tresh) { matchedKw = ekw; break; }
              }
            }
            if (matchedKw) break;
          }

          if (!matchedKw) continue;

          matched = true;
          // Filter out explicitly negative statements for this feature
          for (const part of String(p.d || '').split(' | ')) {
            const pn = norm(part);
            if (!pn.includes(matchedKw)) continue;
            const colonIdx = part.indexOf(':');
            if (colonIdx >= 0) {
              const val = norm(part.slice(colonIdx + 1).trim());
              const NO_VALS = ['غير متاح', 'لا', 'no', 'false', '—', '-', 'غير'];
              if (NO_VALS.some(nv => val === nv || val.startsWith(nv))) {
                matched = false; break;
              }
            }
          }
          if (matched) break;
        }

        if (matched) {
          results.push(p);
          seen.add(p.s);
          if (results.length >= max) break;
        }
      }
      return results;
    }

    // ─── DETECT IF QUERY IS FEATURE SEARCH ───────────────────────
    // Feature search mode activates when:
    // 1. Query is NOT an exact SKU
    // 2. Query matches FAB features (not just generic product text)
    // 3. At least one FAB item matches
    // (FEAT_MODE, FEAT_RESULTS, FEAT_CORRECTED declared in state block above)

    function isFeatureQuery(q) {
      if (!q || q.length < 2) return false;
      if (findExactSKU(q)) return false;
      const feats = searchFeatures(q);
      return feats.length > 0;
    }


    // ─── MINI PRODUCT CARD ────────────────────────────────────────
    function miniProdCard(p) {
      const ico = TYPE_ICON[p.t] || '📦';
      const safe = p.s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      // Shorten long product names
      const shortName = p.n.length > 65 ? p.n.slice(0, 62) + '…' : p.n;
      return '<div class="mini-prod" onclick="openProd(\'' + safe + '\')" title="' + esc(p.n) + '">'
        + '<div class="mini-prod-icon">' + ico + '</div>'
        + '<div class="mini-prod-body">'
        + '<div class="mini-prod-top">'
        + '<span class="mini-prod-sku">' + esc(p.s) + '</span>'
        + '<span class="mini-prod-type-badge">' + esc(p.t) + '</span>'
        + '</div>'
        + '<div class="mini-prod-name">' + esc(shortName) + '</div>'
        + '</div>'
        + '<div class="mini-prod-arrow">←</div>'
        + '</div>';
    }

    // ─── RENDER: FEATURE SEARCH RESULTS ──────────────────────────
    // ─── RENDER: FEATURE SEARCH RESULTS ──────────────────────────────────────────
    function renderFeatureSearch(featItems, q) {
      if (!featItems.length) return '';

      var totalProds = 0;
      var html = '<div class="feat-search-banner">'
        + '<span class="feat-search-icon">🔬</span>'
        + '<div class="feat-search-text">'
        + '<div class="feat-search-lbl">نتائج البحث عن الخاصية</div>'
        + '<div class="feat-search-val">' + esc(q) + '</div>'
        + '</div>'
        + '<span class="feat-search-count" id="featTotalCount">جاري التحميل…</span>'
        + '</div>';

      featItems.forEach(function (item, fi) {
        var prods = findProdsWithFeature(item, 12);
        totalProds += prods.length;

        var safeBen = item.b.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
        var isAI = !FAB.some(function (f) { return f.f === item.f && f.c === item.c; });
        var blockId = 'fb-' + fi;
        var gridId = 'fp-' + fi;
        var chevId = 'fc-' + fi;
        var moreId = 'fp-' + fi + '-more';
        var catShort = item.c.split('(')[0].trim().replace(/[()]/g, '');

        // ── FAB card header ──
        html += '<div class="fab-result-block fade" id="' + blockId + '">';
        html += '<div class="fab-card">';
        html += '<div class="fab-head">';
        html += '<div class="fab-head-text">';
        html += '<div class="fab-head-lbl">Feature — الخاصية</div>';
        html += '<div class="fab-feature">' + hi(item.f, q) + '</div>';
        html += '</div>';
        html += '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">';
        html += '<span class="fab-cat-tag">' + esc(catShort) + '</span>';
        if (isAI) html += '<span class="fab-ai-tag" title="تم إنشاؤه بالذكاء الاصطناعي">✨</span>';
        html += '</div>';
        html += '</div>';

        // ── FAB body ──
        html += '<div class="fab-body">';
        // Advantage
        html += '<div class="fab-adv">';
        html += '<div class="fab-row-lbl"><div class="fab-row-dot"></div>';
        html += '<span class="fab-row-txt">Advantage — الميزة</span></div>';
        html += '<div class="fab-adv-body">' + esc(item.a) + '</div>';
        html += '</div>';
        // Benefit
        html += '<div class="fab-ben">';
        html += '<div class="fab-row-lbl"><div class="fab-row-dot"></div>';
        html += '<span class="fab-row-txt">Benefit — فائدة العميل</span></div>';
        html += '<div class="fab-ben-body">' + esc(item.b) + '</div>';

        html += '</div>';
        html += '</div>'; // fab-body
        html += '</div>'; // fab-card

        // ── Recommended Devices Panel ──
        html += '<div class="fab-rec-panel">';
        html += '<div class="fab-rec-header" onclick="toggleProds(\'' + gridId + '\',\'' + chevId + '\')">';
        html += '<div class="fab-rec-header-left">';
        html += '<span class="fab-rec-icon">🎯</span>';
        html += '<div class="fab-rec-header-text">';
        html += '<div class="fab-rec-title">الأجهزة المقترحة التي تدعم هذه الخاصية</div>';
        if (prods.length > 0) {
          var cntLabel = prods.length + (prods.length >= 12 ? '+' : '') + ' جهاز';
          html += '<div class="fab-rec-subtitle">اضغط على أي جهاز لعرض كل خصائصه وتفاصيله</div>';
          html += '</div>';
          html += '<span class="fab-rec-cnt">' + cntLabel + '</span>';
        } else {
          html += '<div class="fab-rec-subtitle">لم يتم العثور على أجهزة محددة لهذه الخاصية</div>';
          html += '</div>';
        }
        html += '</div>';
        html += '<span class="fab-prods-chevron" id="' + chevId + '">▼</span>';
        html += '</div>';

        if (prods.length > 0) {
          // Auto-expanded by default
          html += '<div class="fab-prods-grid" id="' + gridId + '">';
          var shown = prods.slice(0, 8);
          shown.forEach(function (p) { html += miniProdCard(p); });

          if (prods.length > 8) {
            html += '<div id="' + moreId + '" style="display:none">';
            prods.slice(8).forEach(function (p) { html += miniProdCard(p); });
            html += '</div>';
            html += '<div class="fab-prods-more" onclick="showMoreProds(\'' + moreId + '\', this)">';
            html += '← عرض ' + (prods.length - 8) + ' جهاز إضافي';
            html += '</div>';
          }
          html += '</div>';
        } else {
          html += '<div class="fab-rec-empty">🔍 جرّب البحث بمصطلح أكثر تحديداً</div>';
        }
        html += '</div>'; // fab-rec-panel

        html += '</div>'; // fab-result-block
      });

      // Update total count placeholder
      var totalLabel = totalProds.toLocaleString() + ' منتج في ' + featItems.length + ' خاصية';
      html = html.replace('جاري التحميل…', totalLabel);
      return html;
    }


    // ─── TOGGLE PRODUCTS PANEL ───────────────────────────────────
    function toggleProds(gridId, chevId) {
      const grid = document.getElementById(gridId);
      const chev = document.getElementById(chevId);
      if (!grid) return;
      const isOpen = grid.classList.contains('open');
      grid.classList.toggle('open', !isOpen);
      if (chev) chev.classList.toggle('open', !isOpen);
    }

    // ─── SHOW MORE PRODUCTS ───────────────────────────────────────
    function showMoreProds(moreId, btn) {
      const el = document.getElementById(moreId);
      if (el) { el.style.display = 'contents'; btn.style.display = 'none'; }
    }

    function onSearch(v) {
      clearTimeout(srchTimer);
      document.getElementById('clrBtn').style.display = v ? 'flex' : 'none';
      srchTimer = setTimeout(() => {
        Q = v.trim(); PAGE = 0;

        // ── FEATURE SEARCH MODE detection ──
        if (Q.length >= 2) {
          const feats = searchFeatures(Q);
          FEAT_MODE = feats.length > 0 && !findExactSKU(Q);
          FEAT_RESULTS = feats;

          if (FEAT_MODE) {
            // In feature mode: check for typo correction
            const typos = typoCorrect(Q);
            const corrected = typos.filter(t => norm(t.kw) !== norm(Q));
            if (corrected.length && !feats.some(f => norm(f.f).includes(norm(Q)))) {
              // Show "did you mean" style correction
              document.getElementById('dymSpan').innerHTML = corrected.map(t => {
                const lbl = t.label.split('(')[0].trim();
                return '<button class="dym-btn" onclick="applyDym(this.dataset.v)" data-v="' + esc(lbl) + '">' + esc(lbl) + '</button>';
              }).join('');
              document.getElementById('dymBar').style.display = 'flex';
            } else {
              document.getElementById('dymBar').style.display = 'none';
            }
          } else {
            // Normal mode DYM
            const sg = dym(Q);
            if (sg.length && !findExactSKU(Q) && !searchFAB(Q).length) {
              document.getElementById('dymSpan').innerHTML = sg.map(s =>
                `<button class="dym-btn" onclick="applyDym('${esc(s)}')">${esc(s)}</button>`
              ).join('');
              document.getElementById('dymBar').style.display = 'flex';
            } else document.getElementById('dymBar').style.display = 'none';
          }
        } else {
          if (FEAT_MODE) { FEAT_MODE = false; FEAT_RESULTS = []; }
          document.getElementById('dymBar').style.display = 'none';
        }

        render();
      }, 280);
    }

    function applyDym(kw) {
      document.getElementById('sinp').value = kw;
      document.getElementById('clrBtn').style.display = 'flex';
      document.getElementById('dymBar').style.display = 'none';
      Q = kw; PAGE = 0; FEAT_MODE = false; FEAT_RESULTS = [];
      render();
    }

    function clearProductSearch() {
      document.getElementById('sinp').value = '';
      document.getElementById('clrBtn').style.display = 'none';
      document.getElementById('dymBar').style.display = 'none';
      Q = ''; PAGE = 0; FEAT_MODE = false; FEAT_RESULTS = [];
      render();
    }

    // ══════════════════════════════════════════════════════════════
    // PRODUCT MODAL
    // ══════════════════════════════════════════════════════════════
    function openProd(sku) {
      const p = AR.find(x => x.s === sku);
      if (!p) return;

      document.getElementById('mSKU').textContent = p.s;
      document.getElementById('mName').textContent = p.n;
      document.getElementById('mType').innerHTML = '<span class="sku-type-tag">' + esc(TYPE_ICON[p.t] || '') + ' ' + esc(p.t) + '</span>';

      // ── Smart spec parser (3 formats) ─────────────────────
      const specPairs = p.d.split(' | ').filter(Boolean).map(function (part) {
        const raw = part.trim();
        if (!raw) return null;
        const ci = raw.indexOf(':');
        if (ci > 0) return { k: raw.slice(0, ci).trim(), v: raw.slice(ci + 1).trim(), plain: false };
        const num = raw.match(/^([\d.,]+)\s*(.+)/);
        if (num) return { k: num[2].trim(), v: num[1].trim(), plain: false };
        return { k: raw, v: 'متاح', plain: true };
      }).filter(Boolean);

      // ── Anchor ID helper ───────────────────────────────────
      function mAnchorId(k) { return 'mfab-' + k.replace(/[^\u0600-\u06FFa-zA-Z0-9]/g, '_'); }

      // ── SKIP list ──────────────────────────────────────────
      const MSKIP = ['تصميم البوتجاز', 'نوع البوتجاز', 'مقاس البوتجاز', 'ابعاد الثلاجة',
        'ابعاد الغسالة', 'الوزن الصافي', 'الوزن الإجمالي', 'رقم الموديل', 'أبعاد الشاشة'].map(norm);

      const MNO = ['غير متاح', 'لا', 'no', 'false', '—', '-', 'غير'];
      const MYES = ['متاح', 'نعم', 'yes', 'true'];

      // ── Pass 1: build fabKeySet for clickable specs ────────
      const mFabSet = new Set();
      specPairs.forEach(function (sp) {
        const nk = norm(sp.k);
        if (MSKIP.some(function (s) { return nk.includes(s) || s.includes(nk); })) return;
        if (MNO.includes(norm(sp.v))) return;
        mFabSet.add(sp.k);
      });

      // ── Pass 2: render spec grid ───────────────────────────
      var sh = '';
      if (specPairs.length) {
        sh = '<div class="modal-sec-title">المواصفات التقنية</div><div class="sku-specs-grid">';
        specPairs.forEach(function (sp) {
          const isY = MYES.includes(norm(sp.v));
          const isN = MNO.includes(norm(sp.v));
          const vD = isY ? '✅ متاح' : isN ? '— غير متاح' : sp.v;
          const hasFAB = mFabSet.has(sp.k);
          const clk = hasFAB ? ' clickable' : '';
          const onclick = hasFAB ? ' onclick="mScrollToFAB(\'' + mAnchorId(sp.k) + '\')" data-mfab="' + mAnchorId(sp.k) + '"' : '';
          const hint = hasFAB ? '<div class="spec-hint">FAB ↓</div>' : '';
          const title = hasFAB ? ' title="اضغط لعرض شرح FAB"' : '';
          sh += '<div class="spec-item' + clk + '"' + onclick + title + '>'
            + '<div class="spec-key">' + esc(sp.k) + '</div>'
            + '<div class="spec-val ' + (isY ? 'yes' : isN ? 'no' : '') + '">' + esc(vD) + '</div>'
            + hint + '</div>';
        });
        sh += '</div>';
      }
      document.getElementById('mSpecs').innerHTML = sh;

      // ── Pass 3: render FAB only for THIS product's specs ──
      const fabCat = TYPE_CAT[p.t] || '';
      const fabItems = fabCat ? FAB.filter(function (f) { return f.c === fabCat; }) : [];
      var fh = '';
      var fabCount = 0;

      mFabSet.forEach(function (specKey) {
        // maintain order of specPairs
      });

      // Iterate in spec order
      specPairs.forEach(function (sp) {
        const k = sp.k, v = sp.v;
        if (!mFabSet.has(k)) return;
        const aid = mAnchorId(k);

        // Try file FAB first
        const fileFAB = findFileFAB(k, fabItems);
        var fabEntry = null;
        if (fileFAB) {
          fabEntry = fileFAB;
        } else {
          fabEntry = generateFAB(k, v, p.t, p.n);
        }

        if (!fabEntry) return;

        const isAI = !fileFAB;
        const sb = fabEntry.b.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');

        fh += '<div class="fab-card" id="' + aid + '" style="margin-bottom:10px">'
          + '<div class="fab-head">'
          + '<div><div class="fab-head-lbl">Feature — الخاصية</div>'
          + '<div class="fab-feature">' + esc(fabEntry.f) + '</div></div>'
          + (isAI ? '<span class="fab-ai-tag" title="تم إنشاؤه بالذكاء الاصطناعي">✨</span>' : '<span class="fab-cat-tag">' + esc(k) + '</span>')
          + '</div>'
          + '<div class="fab-body">'
          + '<div class="fab-adv"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Advantage — الميزة</span></div>'
          + '<div class="fab-adv-body">' + esc(fabEntry.a) + '</div></div>'
          + '<div class="fab-ben"><div class="fab-row-lbl"><div class="fab-row-dot"></div><span class="fab-row-txt">Benefit — فائدة العميل</span></div>'
          + '<div class="fab-ben-body">' + esc(fabEntry.b) + '</div>'

          + '</div></div></div>';
        fabCount++;
      });

      if (!fh) fh = '<div class="empty-state" style="padding:24px;text-align:center;color:#94A3B8">لا توجد خصائص FAB مرتبطة بهذا المنتج</div>';

      document.getElementById('mFAB').innerHTML =
        fabCount ? '<div class="modal-sec-title" style="margin-top:16px">📚 خصائص FAB لهذا المنتج (' + fabCount + ')</div>' + fh : '';

      // ── CS ─────────────────────────────────────────────────
      const nt = norm(p.t);
      const ci2 = CS.filter(function (x) { return norm(x.main) === nt; }).sort(function (a, b) { return pw(a.priority) - pw(b.priority); }).slice(0, 6);
      var ch = '';
      if (ci2.length) {
        ch = '<div class="modal-sec-title">🔀 Cross-Selling</div>';
        ci2.forEach(function (r) {
          ch += '<div class="rec-card" style="margin-bottom:8px"><div class="rec-head"><div class="rec-title">' + esc(r.rec) + '</div>' + prioBadge(r.priority) + '</div><div class="rec-reason">' + esc(r.reason) + '</div></div>';
        });
      }
      document.getElementById('mCS').innerHTML = ch;

      // ── US ─────────────────────────────────────────────────
      function _price(x) {
        if (x.p) return Number(String(x.p).replace(/[^0-9.]/g, '')) || 0;
        const m = String(x.d || '').match(/(?:سعر|Price)[^\d]*(\d[\d,\.]*)/i);
        return m ? Number(m[1].replace(/,/g, '')) || 0 : 0;
      }
      function _cntFabs(x) {
        const dn = norm(x.d);
        let n = 0;
        for (const it of FAB_IDX) {
          for (const k of (it.pk || [])) { if (k.length >= 5 && dn.includes(k)) { n++; break; } }
        }
        return n;
      }

      const sameCat = AR.filter(function (x) { return x.t === p.t && x.s !== p.s; });
      const pFabs = _cntFabs(p);
      const better = sameCat.map(function (x) { return { x: x, f: _cntFabs(x), pr: _price(x) }; })
        .filter(function (o) { return o.f > pFabs; })
        .sort(function (a, b) { return b.f - a.f || a.pr - b.pr; })
        .slice(0, 3).map(function (o) { return o.x; });

      var uh = '';
      if (better.length) {
        uh = '<div class="modal-sec-title">⬆️ Upselling</div>';
        better.forEach(function (u) {
          uh += '<div class="rec-card" style="margin-bottom:8px; cursor:pointer;" onclick="openProd(\'' + u.s + '\')">'
            + '<div class="rec-head"><div class="rec-title">' + esc(u.n || u.s) + '</div><span class="cbot-pri cbot-pri-عالية">أعلى تقنياً</span></div>'
            + '<div class="rec-reason">يحتوي على خصائص ذكية أعلى من الموديل الحالي.</div></div>';
        });
      }
      document.getElementById('mUS').innerHTML = uh;

      document.getElementById('prodOverlay').style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Reset scroll so the user sees the new product specs at the top
      const modalEl = document.querySelector('#prodOverlay .modal');
      if (modalEl) modalEl.scrollTop = 0;
    }
    function closeProd() { document.getElementById('prodOverlay').style.display = 'none'; document.body.style.overflow = ''; }

    function mScrollToFAB(fabId) {
      // Scroll inside modal to the target FAB card
      const modal = document.querySelector('#prodOverlay .modal');
      const target = document.getElementById(fabId);
      if (!modal || !target) return;
      // Remove previous active states
      modal.querySelectorAll('.spec-item.fab-active').forEach(function (el) { el.classList.remove('fab-active'); });
      modal.querySelectorAll('.fab-card.fab-highlighted').forEach(function (el) { el.classList.remove('fab-highlighted'); });
      // Mark clicked spec as active
      const specEl = modal.querySelector('[data-mfab="' + fabId + '"]');
      if (specEl) specEl.classList.add('fab-active');
      // Smooth scroll within modal
      requestAnimationFrame(function () {
        const modalTop = modal.getBoundingClientRect().top;
        const targetTop = target.getBoundingClientRect().top;
        const offset = targetTop - modalTop - 16;
        modal.scrollBy({ top: offset, behavior: 'smooth' });
      });
      // Pulse highlight
      target.classList.add('fab-highlighted');
      setTimeout(function () { target.classList.remove('fab-highlighted'); }, 2200);
    }

    // ══════════════════════════════════════════════════════════════
    // COPY & TOAST
    // ══════════════════════════════════════════════════════════════
    function scrollToFAB(fabId) {
      // Highlight the target FAB card
      const target = document.getElementById(fabId);
      if (!target) return;

      // Remove any previous highlights
      document.querySelectorAll('.fab-card.fab-highlighted').forEach(el => {
        el.classList.remove('fab-highlighted');
      });
      // Remove active state from all spec items
      document.querySelectorAll('.spec-item.fab-active').forEach(el => {
        el.classList.remove('fab-active');
      });

      // Add active state to clicked spec item
      const specItem = document.querySelector(`[data-fab="${fabId}"]`);
      if (specItem) specItem.classList.add('fab-active');

      // Smooth scroll to fab card — offset accounts for sticky header height
      // Small delay lets DOM settle after any state changes
      requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const hdrH = document.querySelector('.hdr')?.offsetHeight || 120;
        const scrollTop = rect.top + window.pageYOffset - hdrH - 16;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      });

      // Pulse highlight the FAB card
      target.classList.add('fab-highlighted');
      setTimeout(() => target.classList.remove('fab-highlighted'), 2400);
    }

    function copyTxt(t) {
      const fn = () => showToast('✅ تم النسخ — جاهز للإرسال على واتساب');
      if (navigator.clipboard) { navigator.clipboard.writeText(t).then(fn).catch(() => { legCopy(t); fn(); }); }
      else { legCopy(t); fn(); }
    }
    function legCopy(t) { const ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); }
    function showToast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2700); }

    // ══════════════════════════════════════════════════════════════
    // INIT
    // ══════════════════════════════════════════════════════════════

    // ─── CROSS-SELL LOCAL SEARCH ─────────────────────────────────



    // ─── UPSELL LOCAL SEARCH ─────────────────────────────────────



    // ─── SCROLL TO TOP ────────────────────────────────────────────
    (function () {
      var btn = null;
      function init() {
        btn = document.getElementById('scrollTopBtn');
        if (!btn) return;
        window.addEventListener('scroll', function () {
          if (window.scrollY > 300) {
            btn.classList.add('show');
          } else {
            btn.classList.remove('show');
          }
        }, { passive: true });
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();


    // ─── UNIFIED VIEW LOCAL SEARCH ───────────────────────────────
    var vsrchTimers = {};
    function onVSrch(view, val, inpId, clrId, cntId) {
      clearTimeout(vsrchTimers[view]);
      var clr = document.getElementById(clrId);
      if (clr) clr.style.display = val ? 'flex' : 'none';
      vsrchTimers[view] = setTimeout(function () {
        if (VIEW === view) render();
      }, 220);
    }
    function clrVSrch(view, inpId, clrId, cntId) {
      var inp = document.getElementById(inpId);
      var clr = document.getElementById(clrId);
      if (inp) inp.value = '';
      if (clr) clr.style.display = 'none';
      if (VIEW === view) render();
    }

    // ─── SCROLL TO TOP ────────────────────────────────────────────
    window.addEventListener('scroll', function () {
      var btn = document.getElementById('scrollTopBtn');
      if (!btn) return;
      if (window.pageYOffset > 300) btn.classList.add('vis');
      else btn.classList.remove('vis');
    }, { passive: true });

    window.addEventListener('load', () => {
      try {
        document.getElementById('cntNum').textContent = '297';
        document.getElementById('resultTxt').innerHTML = '<strong>297</strong> خاصية FAB جاهزة';
        render();
      } catch (err) {
        document.getElementById('resultTxt').innerHTML = '<strong style="color:red">خطأ: ' + err.message + '</strong>';
        console.error('Load error:', err);
      }
    });

    /* ══════════════════════════════════════════════════════════════
       AI CONSULTANT CHATBOT — Sales Strategy Engine
       Local retrieval over AR / FAB / FAB_IDX / CS / US
       ══════════════════════════════════════════════════════════════ */
    (function () {
      const $ = (id) => document.getElementById(id);

      // ---------- Category detection ----------
      // Map product-type (t) -> FAB category (c) via CAT_TO_TYPES
      const TYPE_TO_FABCAT = {};
      Object.keys(CAT_TO_TYPES).forEach(c => CAT_TO_TYPES[c].forEach(t => { TYPE_TO_FABCAT[t] = c; }));

      // Aliases: user words -> product-type (matches AR.t)
      const CAT_ALIASES = [
        { t: 'الغسالات', kw: ['غساله', 'غسالة', 'غسالات', 'washing', 'washer'] },
        { t: 'مجفف الملابس', kw: ['مجفف', 'dryer'] },
        { t: 'الثلاجات', kw: ['ثلاجه', 'ثلاجة', 'ثلاجات', 'فريج', 'fridge', 'refrigerator', 'تلاجة', 'تلاجه', 'تلاجات'] },
        { t: 'الفريزرات', kw: ['فريزر', 'freezer', 'ديب فريزر'] },
        { t: 'تكيفات', kw: ['تكييف', 'تكيف', 'مكيف', 'مكيفات', 'ac', 'air conditioner', 'سبليت'] },
        { t: 'البوتجازات', kw: ['بوتاجاز', 'بوتجاز', 'بوتاجازات', 'كوكر', 'cooker'] },
        { t: 'التلفزيونات', kw: ['تلفزيون', 'تلفاز', 'شاشه', 'شاشة', 'tv', 'television'] },
        { t: 'افران بلت ان', kw: ['فرن بلت', 'افران بلت', 'oven built'] },
        { t: 'مسطح بلت ان', kw: ['مسطح', 'هوب', 'hob', 'cooktop'] },
        { t: 'شفاط بلت ان', kw: ['شفاط', 'هود', 'hood'] },
        { t: 'غسالات الاطباق', kw: ['غساله اطباق', 'غسالة اطباق', 'dishwasher'] },
        { t: 'سخان مياه', kw: ['سخان', 'سخانات', 'water heater'] },
        { t: 'المكانس', kw: ['مكنسه', 'مكنسة', 'مكانس', 'vacuum'] },
        { t: 'القلايات', kw: ['قلايه', 'قلاية', 'قلايات', 'air fryer', 'ايرفراير'] },
        { t: 'ميكروويف', kw: ['ميكروويف', 'مايكروويف', 'microwave'] },
        { t: 'صانع ومحضر القهوة', kw: ['قهوه', 'قهوة', 'coffee'] },
        { t: 'الموبايل & التابلت', kw: ['موبايل', 'هاتف', 'جوال', 'phone'] },
        { t: 'لاب توب', kw: ['لاب توب', 'لابتوب', 'laptop'] },
        { t: 'المسرح المنزلى', kw: ['ساوندبار', 'soundbar', 'مسرح'] },
      ];

      function detectCategory(q) {
        const nq = norm(q);
        // longest-first
        const sorted = CAT_ALIASES.slice().sort((a, b) => Math.max(...b.kw.map(k => k.length)) - Math.max(...a.kw.map(k => k.length)));
        for (const { t, kw } of sorted) {
          for (const k of kw) { if (nq.includes(norm(k))) return t; }
        }
        return null;
      }

      // ---------- Feature detection (hyper-fuzzy) ----------
      function fuzzyMatch(needle, hay) {
        if (!needle || !hay) return 0;
        if (hay.includes(needle)) return needle.length;
        // token-wise fuzzy
        let score = 0;
        const nt = needle.split(/\s+/).filter(x => x.length >= 2);
        const hayWords = hay.split(/\s+/);
        for (const tok of nt) {
          if (tok.length === 2) {
            if (hayWords.includes(tok)) score += tok.length;
            continue;
          }
          if (hay.includes(tok)) { score += tok.length; continue; }
          // levenshtein tolerance for short words
          for (const w of hayWords) {
            if (Math.abs(w.length - tok.length) > 2) continue;
            const d = lev(tok, w);
            const thresh = Math.floor(tok.length * 0.2);
            if (d <= thresh) { score += Math.max(1, tok.length - d); break; }
          }
        }
        return score;
      }

      // Memoized feature detection cache — huge speedup on repeated queries
      const _featCache = new Map();
      function detectFeatures(q, categoryType) {
        const key = (categoryType || '*') + '|' + q;
        if (_featCache.has(key)) return _featCache.get(key);

        // Remove stop words to prevent false matching
        let nq = norm(q);
        const stopWords = ['ما', 'هي', 'كيف', 'مميزات', 'عيوب', 'ماهي', 'هل', 'يوجد', 'قارن', 'بين', 'و', 'عن', 'في', 'فى', 'خاصية', 'تقنية', 'الفرق', 'افضل', 'أفضل', 'احسن', 'أحسن', 'ارخص', 'أرخص', 'اغلى', 'أغلى', 'عايز', 'عاوز', 'اريد', 'أريد', 'ابحث', 'أبحث', 'من', 'ب', 'ل', 'ان', 'أن', 'انا', 'أنا', 'لو', 'سمحت', 'ممكن', 'اب', 'سيل', 'سيلينج', 'كروس', 'فيتشر', 'فيتشرز'];
        stopWords.forEach(w => { nq = nq.replace(new RegExp(`\\b${norm(w)}\\b`, 'g'), ' '); });
        nq = nq.replace(/\s+/g, ' ').trim();
        if (!nq) return [];

        const terms = expandQ(nq);
        const fabCat = categoryType ? TYPE_TO_FABCAT[categoryType] : null;
        const cand = [];
        for (const item of FAB_IDX) {
          if (fabCat && item.c !== fabCat) continue;
          let score = 0;
          const hayF = norm(item.f);
          const hayAll = norm(item.f + ' ' + (item.sk || []).join(' ') + ' ' + (item.pk || []).join(' '));
          for (const t of terms) {
            if (t.length >= 2) {
              if (t.length === 2) {
                if (hayAll.split(/\s+/).includes(t)) score += t.length;
              } else {
                if (hayAll.includes(t)) score += t.length;
              }
            }
            for (const k of (item.sk || [])) {
              const nk = norm(k);
              if (t === nk) score += nk.length * 3; // EXACT match strong boost
              else if (t.includes(nk) && nk.length >= 2) score += nk.length * 1.5;
              else if (nk.includes(t) && t.length >= 2) score += t.length * 1.5;
            }
            score += fuzzyMatch(t, hayF) * 0.4; // Reduced fuzzy weight
          }
          if (score > 0) cand.push({ item, score });
        }
        cand.sort((a, b) => b.score - a.score);
        if (_featCache.size > 200) _featCache.clear();
        _featCache.set(key, cand);
        return cand;
      }


      // ---------- Product retrieval ----------
      function productsByCategory(cat) {
        return AR.filter(p => p.t === cat);
      }
      function productsByFeature(fabItem, categoryType) {
        // reuse existing findProdsWithFeature but with high cap
        let prods = findProdsWithFeature(fabItem, 9999) || [];
        if (categoryType) prods = prods.filter(p => p.t === categoryType);
        return prods;
      }

      function priceOf(p) {
        // AR uses .p or embedded in d — attempt best guess
        if (p.p) return Number(String(p.p).replace(/[^0-9.]/g, '')) || 0;
        const m = String(p.d || '').match(/(?:السعر|Price)[^\d]*(\d[\d,\.]*)/i);
        return m ? Number(m[1].replace(/,/g, '')) || 0 : 0;
      }

      // ---------- Comparison ----------
      function findProduct(q, cat) {
        const nq = norm(q);
        if (!nq) return null;
        // exact SKU
        let p = AR.find(x => norm(x.s) === nq && (!cat || x.t === cat));
        if (p) return p;
        // contains SKU
        p = AR.find(x => (norm(x.s).includes(nq) || nq.includes(norm(x.s))) && (!cat || x.t === cat));
        if (p) return p;
        // by name
        let best = null, bs = 0;
        for (const x of AR) {
          if (cat && x.t !== cat) continue; // STRICT CATEGORY LOCK!
          const s = fuzzyMatch(nq, norm((x.n || '') + ' ' + x.s));
          if (s > bs) { bs = s; best = x; }
        }
        // Prevent generic 1-word queries from matching products randomly
        const tokenCount = nq.split(/\s+/).filter(t => t.length >= 2).length;
        const minScore = tokenCount <= 1 ? 8 : 6;
        return bs >= minScore ? best : null;
      }

      function parseCompare(q) {
        // patterns: "قارن بين X و Y" / "X vs Y" / "X مقابل Y"
        const m = q.match(/(?:قارن(?:\s*بين)?|compare)\s+(.+?)\s+(?:و|and|vs|مقابل)\s+(.+)/i)
          || q.match(/(.+?)\s+(?:vs|مقابل|و)\s+(.+)/i);
        if (!m) return null;
        let t1 = m[1].trim();
        let t2 = m[2].trim();
        let cat1 = detectCategory(t1);
        let cat2 = detectCategory(t2);

        function cleanTerm(t) {
          let cl = norm(t);
          const stopWordsEx = ['ما', 'هي', 'كيف', 'مميزات', 'عيوب', 'ماهي', 'هل', 'يوجد', 'قارن', 'بين', 'و', 'عن', 'في', 'فى', 'خاصية', 'تقنية', 'الفرق', 'افضل', 'أفضل', 'احسن', 'أحسن', 'ارخص', 'أرخص', 'اغلى', 'أغلى', 'عايز', 'عاوز', 'اريد', 'أريد', 'ابحث', 'أبحث', 'من', 'ب', 'ل', 'ان', 'أن', 'انا', 'أنا', 'لو', 'سمحت', 'ممكن', 'تكون', 'فيها', 'فيه', 'يكون', 'موجود', 'بها', 'به', 'تحتوي', 'يحتوي', 'تتميز', 'يتميز', 'هات', 'عندي', 'معايا', 'اقدر', 'أقدر', 'وريني', 'ورينى', 'اب', 'سيل', 'سيلينج', 'كروس', 'فيتشر', 'فيتشرز'];
          stopWordsEx.forEach(w => { cl = cl.replace(new RegExp(`\\b${norm(w)}\\b`, 'g'), ' '); });
          CAT_ALIASES.forEach(alias => {
            alias.kw.forEach(k => { cl = cl.replace(new RegExp(`\\b${norm(k)}\\b`, 'g'), ' '); });
          });
          return cl.replace(/\s+/g, ' ').trim();
        }
        const c1 = cleanTerm(t1);
        const c2 = cleanTerm(t2);

        const a = findProduct(c1 || t1, cat1), b = findProduct(c2 || t2, cat2);
        if (a && b && a.s !== b.s) return [a, b];
        return null;
      }

      function specMap(p) {
        const map = {};
        String(p.d || '').replace(/<[^>]*>?/gm, '').split('|').forEach(part => {
          const i = part.indexOf(':');
          if (i > 0) {
            let val = part.slice(i + 1).trim();
            if (!['غير متاح', '-', 'لا يوجد', 'n/a', ''].includes(val.toLowerCase())) {
              map[part.slice(0, i).trim()] = val;
            }
          }
          else if (part.trim()) map[part.trim()] = '✓';
        });
        return map;
      }

      function isBetter(k, va, vb) {
        // numeric compare
        const na = parseFloat(String(va).replace(/[^0-9.]/g, ''));
        const nb = parseFloat(String(vb).replace(/[^0-9.]/g, ''));
        if (!isNaN(na) && !isNaN(nb) && na !== nb) {
          // for energy class lower letters (A+++ > A) — skip
          return na > nb ? 'a' : 'b';
        }
        const YES = ['نعم', 'yes', 'متاح', 'متوفر', '✓', 'true'];
        const NO = ['لا', 'no', 'غير متاح', '—', '-', 'false'];
        const nva = norm(va), nvb = norm(vb);
        const ya = YES.some(y => nva.includes(y)), yb = YES.some(y => nvb.includes(y));
        const na2 = NO.some(y => nva.includes(y)), nb2 = NO.some(y => nvb.includes(y));
        if (ya && !yb) return 'a';
        if (yb && !ya) return 'b';
        if (!na2 && nb2) return 'a';
        if (!nb2 && na2) return 'b';
        return null;
      }

      function renderCompare(a, b) {
        const ma = specMap(a), mb = specMap(b);
        const keys = Array.from(new Set([...Object.keys(ma), ...Object.keys(mb)]));
        let wa = 0, wb = 0;
        const rows = keys.map(k => {
          const va = ma[k] || '—', vb = mb[k] || '—';
          const w = (va !== '—' && vb !== '—') ? isBetter(k, va, vb) : (va === '—' ? 'b' : (vb === '—' ? 'a' : null));
          if (w === 'a') wa++; if (w === 'b') wb++;
          return `<tr>
        <td class="cbot-k">${esc(k)}</td>
        <td class="${w === 'a' ? 'cbot-win' : ''}">${esc(va)}</td>
        <td class="${w === 'b' ? 'cbot-win' : ''}">${esc(vb)}</td>
      </tr>`;
        }).join('');
        const verdict = wa === wb ? 'الجهازان متقاربان — الترشيح حسب أولوية الضيف.'
          : (wa > wb ? `الأفضلية للجهاز <b>${esc(a.s)}</b> بـ ${wa} ميزة متفوقة.`
            : `الأفضلية للجهاز <b>${esc(b.s)}</b> بـ ${wb} ميزة متفوقة.`);
        return `<div class="cbot-cmp">
      <div class="cbot-cmp-h">🆚 مقارنة تفصيلية</div>
      <div class="cbot-cmp-scroll">
      <table class="cbot-tbl">
        <thead><tr><th>البند</th><th>${esc(a.s)}</th><th>${esc(b.s)}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
      <div class="cbot-verdict">🏆 ${verdict}</div>
    </div>`;
      }

      // ---------- Upsell / Cross-sell ----------
      function upsellFor(p) {
        // find a premium same-category product with more FAB features
        const sameCat = AR.filter(x => x.t === p.t && x.s !== p.s);
        const pFabs = countProductFabs(p);
        const better = sameCat.map(x => ({ x, f: countProductFabs(x), pr: priceOf(x) }))
          .filter(o => o.f > pFabs)
          .sort((a, b) => b.f - a.f || a.pr - b.pr)
          .slice(0, 3).map(o => o.x);
        return { rules: [], products: better };
      }

      function countProductFabs(p) {
        const dn = norm(p.d);
        let n = 0;
        for (const it of FAB_IDX) {
          for (const k of (it.pk || [])) { if (k.length >= 5 && dn.includes(k)) { n++; break; } }
        }
        return n;
      }

      function crossSellFor(p) {
        const nt = norm(p.t);
        // Strict exact match to avoid random wrong category matches
        return CS.filter(c => norm(c.main) === nt)
          .sort((a, b) => pw(a.priority) - pw(b.priority));
      }

      // ---------- Rendering ----------
      window.filterCbotList = function (inp, listId) {
        const q = (inp.value || '').toLowerCase().trim();
        const list = document.getElementById(listId);
        if (!list) return;
        const cards = list.querySelectorAll('.cbot-prod');
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          if (text.includes(q)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      };

      function esc2(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

      function renderProductCard(p) {
        const cat = TYPE_TO_FABCAT[p.t] || p.t;
        const safeSku = p.s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        return `<div class="cbot-prod" onclick="openProd('${safeSku}')">
      <div class="cbot-prod-h">
        <span class="cbot-prod-t">${esc2(p.t)}</span>
        <b>${esc2(p.s)}</b>
      </div>
      <div class="cbot-prod-n">${esc2(p.n || '')}</div>
    </div>`;
      }

      function renderFeatureHit(item, prods, corrected) {
        const maxVisible = 3;
        let listHTML = '';

        if (prods.length > 0) {
          const visibleProds = prods.slice(0, maxVisible);
          const hiddenProds = prods.slice(maxVisible);

          listHTML += visibleProds.map(renderProductCard).join('');

          if (hiddenProds.length > 0) {
            const uid = 'more_' + Math.random().toString(36).substr(2, 9);
            listHTML += `
          <button class="cbot-show-more-btn" style="width:100%; background:#EEF2F7; color:#0A2540; border:1px solid #DDE4EE; border-radius:8px; padding:8px; font-weight:bold; cursor:pointer; margin-top:8px; font-family:inherit;" onclick="document.getElementById('${uid}').style.display='block'; this.style.display='none';">عرض باقي الأجهزة (${hiddenProds.length}) ⬇️</button>
          <div id="${uid}" style="display:none; margin-top:12px; border-top:1px dashed #DDE4EE; padding-top:12px;">
            <div style="margin-bottom:8px; font-size:12px; color:#0B6E6E; font-weight:bold;">💡 ابحث داخل النتائج للمستشار:</div>
            <div style="position:relative; margin-bottom:10px;">
              <span style="position:absolute; right:10px; top:8px; opacity:0.6;">🔍</span>
              <input type="text" placeholder="مثال: شارب، انفرتر..." onkeyup="window.filterCbotList(this, '${uid}-list')" style="width:100%; box-sizing:border-box; padding:8px 30px 8px 10px; border-radius:8px; border:1px solid #0B6E6E; font-family:inherit; font-size:13px; outline:none; background:#fff;">
            </div>
            <div id="${uid}-list" class="cbot-list" style="max-height:220px; overflow-y:auto; padding-right:4px; display:flex; flex-direction:column; gap:6px;">
              ${hiddenProds.map(renderProductCard).join('')}
            </div>
          </div>
        `;
          }
        }

        const corr = corrected ? `<div class="cbot-corr">🔎 تصحيح تلقائي: <b>${esc2(corrected)}</b></div>` : '';
        return `<div class="cbot-blk">
      ${corr}
      <div class="cbot-blk-h" style="font-size:16px;">✨ ${esc2(item.f)} <span class="cbot-cat">${esc2(item.c)}</span></div>
      <div class="cbot-fab" style="border-inline-start:4px solid #14b8a6; background:#f0fdfa; padding:12px;">
        <div class="cbot-fab-a" style="font-size:14px; margin-bottom:8px;"><b>الخاصية:</b> ${esc2(item.a)}</div>
        <div class="cbot-fab-b"><b>💬 كلم مستشارك بها:</b> ${esc2(item.b)}</div>
      </div>
      <div class="cbot-cnt" style="margin-top:12px;">🎯 عدد الأجهزة المطابقة: <b>${prods.length}</b></div>
      <div class="cbot-list" style="overflow:visible; max-height:none;">${listHTML || '<div class="cbot-empty">لا توجد أجهزة مطابقة حالياً.</div>'}</div>
    </div>`;
      }

      function renderUpsellBlock(p) {
        const { rules, products } = upsellFor(p);
        if (!rules.length && !products.length) return '';
        const r = rules.map(u => `
      <div class="cbot-us-row">
        <div><span class="cbot-us-arrow">${esc2(u.from)} ← ${esc2(u.to)}</span>
        <span class="cbot-pri cbot-pri-${norm(u.priority)}">${esc2(u.priority)}</span></div>
        <div class="cbot-us-why">💡 <b>حجة الترقية:</b> ${esc2(u.reason)}</div>
      </div>`).join('');
        const pl = products.map(renderProductCard).join('');
        return `<div class="cbot-blk cbot-us">
      <div class="cbot-blk-h">⬆️ فرص البيع الارتقائي (Upsell)</div>
      ${r}
      ${pl ? `<div class="cbot-us-alt"><b>موديلات أعلى ننصح بها:</b></div><div class="cbot-list">${pl}</div>` : ''}
    </div>`;
      }

      function renderCrossSellBlock(p) {
        const cs = crossSellFor(p);
        if (!cs.length) return '';
        const rows = cs.map(c => `
      <div class="cbot-cs-row">
        <div><span class="cbot-cs-add">➕ ${esc2(c.rec)}</span>
        <span class="cbot-pri cbot-pri-${norm(c.priority)}">${esc2(c.priority)}</span></div>
        <div class="cbot-us-why">🛍️ <b>عرض الباقة:</b> ${esc2(c.reason)}</div>
      </div>`).join('');
        return `<div class="cbot-blk cbot-cs">
      <div class="cbot-blk-h">🔗 فرص البيع المتقاطع (Cross-Sell)</div>
      ${rows}
    </div>`;
      }

      // ---------- Query router ----------
      const _ctx = { cat: null, feat: null, catType: null };

      function respond(q) {
        q = String(q || '').trim();
        if (!q) return `<div class="cbot-hint">اسأل مستشارنا الذكي أي سؤال 🎓 — مثال: "أفضل غسالة فيها انفرتر" أو "قارن بين X و Y"</div>`;

        const pair = parseCompare(q);
        if (pair) {
          const [a, b] = pair;
          _ctx.cat = TYPE_TO_FABCAT[a.t] || null; _ctx.catType = a.t; _ctx.feat = null;
          return renderCompare(a, b) + renderUpsellBlock(a) + renderCrossSellBlock(a);
        }

        const cat = detectCategory(q);
        const nq = norm(q);
        let nq_clean = nq;
        if (cat) {
          const catAlias = CAT_ALIASES.find(a => a.t === cat);
          if (catAlias) {
            const sortedKw = catAlias.kw.map(norm).sort((a, b) => b.length - a.length);
            for (const k of sortedKw) {
              nq_clean = nq_clean.replace(new RegExp(`\\b${k}\\b`, 'g'), ' ');
            }
          }
        }
        const stopWordsEx = ['ما', 'هي', 'كيف', 'مميزات', 'عيوب', 'ماهي', 'هل', 'يوجد', 'قارن', 'بين', 'و', 'عن', 'في', 'فى', 'خاصية', 'تقنية', 'الفرق', 'افضل', 'أفضل', 'احسن', 'أحسن', 'ارخص', 'أرخص', 'اغلى', 'أغلى', 'عايز', 'عاوز', 'اريد', 'أريد', 'ابحث', 'أبحث', 'من', 'ب', 'ل', 'ان', 'أن', 'انا', 'أنا', 'لو', 'سمحت', 'ممكن', 'تكون', 'فيها', 'فيه', 'يكون', 'موجود', 'بها', 'به', 'تحتوي', 'يحتوي', 'تتميز', 'يتميز', 'هات', 'عندي', 'معايا', 'اقدر', 'أقدر', 'وريني', 'ورينى', 'اب', 'سيل', 'سيلينج', 'كروس', 'فيتشر', 'فيتشرز'];
        stopWordsEx.forEach(w => { nq_clean = nq_clean.replace(new RegExp(`\\b${norm(w)}\\b`, 'g'), ' '); });
        nq_clean = nq_clean.replace(/s+/g, ' ').trim();

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
          return `<div class="cbot-empty">عذراً طلبك غير متاح. لا يمكن خلط أجهزة من فئات مختلفة في نفس الطلب. برجاء التواصل مع هشام الغمراوى</div>`;
        }

        if (cat && allFeats.length && allFeats[0].score >= 8) {
          const userCat = TYPE_TO_FABCAT[cat];
          const bestGlobal = allFeats[0];
          const bestCatScore = feats.length ? feats[0].score : 0;

          if (userCat && bestGlobal.item.c && bestGlobal.item.c !== userCat && bestGlobal.score >= 12 && bestCatScore < bestGlobal.score * 0.6) {
            const queryTerms = expandQ(nq);
            const possibleProds = productsByCategory(cat).filter(p => queryTerms.every(t => norm(p.n + ' ' + p.d).includes(t)));
            if (possibleProds.length === 0) {
              return `<div class="cbot-empty">عذراً طلبك غير متاح. لا توجد أجهزة تجمع بين مواصفات <b>${esc2(cat)}</b> وميزة <b>${esc2(bestGlobal.item.f)}</b>. برجاء التواصل مع هشام الغمراوى</div>`;
            }
          }
        }

        if (feats.length && feats[0].score >= 6) {
          const it = feats[0].item;
          _ctx.feat = it; _ctx.cat = it.c || null; _ctx.catType = cat;
          const prods = productsByFeature(it, cat);
          let out = renderFeatureHit(it, prods, it.f);
          // Decouple: Only append cross-sell if the query was explicitly a multi-word product search, not a generic feature query.
          const tokenCount = nq_clean.split(/\s+/).filter(t => t.length >= 2).length;
          if (prod && prod.t && tokenCount >= 2) {
            out += renderUpsellBlock(prod) + renderCrossSellBlock(prod);
          }
          return out;
        }

        if (prod) {
          _ctx.catType = prod.t; _ctx.cat = TYPE_TO_FABCAT[prod.t] || null; _ctx.feat = null;
          const feats0 = FAB_IDX.filter(it => {
            const dn = norm(prod.d);
            return (it.pk || []).some(k => k.length >= 5 && dn.includes(k));
          });
          const fabList = feats0.map(f => `<li><b>${esc2(f.f)}:</b> ${esc2(f.b)}</li>`).join('');
          return `<div class="cbot-blk">
        <div class="cbot-blk-h">📱 ${esc2(prod.s)} — ${esc2(prod.t)}</div>
        <div class="cbot-prod-n">${esc2(prod.n || '')}</div>
        ${fabList ? `<div class="cbot-fab-list"><b>أبرز نقاط البيع (FAB):</b><ul>${fabList}</ul></div>` : ''}
      </div>${renderUpsellBlock(prod)}${renderCrossSellBlock(prod)}`;
        }

        if (cat) {
          if (nq_clean.length > 0) {
            return `<div class="cbot-empty">عذراً طلبك غير متاح. لم نتمكن من العثور على أجهزة تطابق <b>${esc2(q)}</b>. برجاء التواصل مع هشام الغمراوى</div>`;
          }
          _ctx.catType = cat; _ctx.cat = TYPE_TO_FABCAT[cat] || null; _ctx.feat = null;
          const prods = productsByCategory(cat);

          const maxVisible = 3;
          let listHTML = '';
          if (prods.length > 0) {
            const visibleProds = prods.slice(0, maxVisible);
            const hiddenProds = prods.slice(maxVisible);

            listHTML += visibleProds.map(renderProductCard).join('');

            if (hiddenProds.length > 0) {
              const uid = 'morecat_' + Math.random().toString(36).substr(2, 9);
              listHTML += `
            <button class="cbot-show-more-btn" style="width:100%; background:#EEF2F7; color:#0A2540; border:1px solid #DDE4EE; border-radius:8px; padding:8px; font-weight:bold; cursor:pointer; margin-top:8px; font-family:inherit;" onclick="document.getElementById('${uid}').style.display='block'; this.style.display='none';">عرض باقي الأجهزة (${hiddenProds.length}) ⬇️</button>
            <div id="${uid}" style="display:none; margin-top:12px; border-top:1px dashed #DDE4EE; padding-top:12px;">
              <div style="margin-bottom:8px; font-size:12px; color:#0B6E6E; font-weight:bold;">💡 ابحث داخل الأجهزة المتاحة:</div>
              <div style="position:relative; margin-bottom:10px;">
                <span style="position:absolute; right:10px; top:8px; opacity:0.6;">🔍</span>
                <input type="text" placeholder="مثال: سامسونج، 14 قدم..." onkeyup="window.filterCbotList(this, '${uid}-list')" style="width:100%; box-sizing:border-box; padding:8px 30px 8px 10px; border-radius:8px; border:1px solid #0B6E6E; font-family:inherit; font-size:13px; outline:none; background:#fff;">
              </div>
              <div id="${uid}-list" class="cbot-list" style="max-height:220px; overflow-y:auto; padding-right:4px; display:flex; flex-direction:column; gap:6px;">
                ${hiddenProds.map(renderProductCard).join('')}
              </div>
            </div>
          `;
            }
          }

          return `<div class="cbot-blk">
        <div class="cbot-blk-h">🗂️ ${esc2(cat)} — ${prods.length} جهاز متاح</div>
        <div class="cbot-list" style="overflow:visible; max-height:none;">${listHTML || '<div class="cbot-empty">لا توجد نتائج.</div>'}</div>
      </div>`;
        }


        // Fallback: single strongest FAB match across everything
        if (allFeats.length) {
          const it = allFeats[0].item;
          _ctx.feat = it; _ctx.cat = it.c || null; _ctx.catType = null;
          return renderFeatureHit(it, productsByFeature(it, null), '');
        }
        return `<div class="cbot-empty">عذراً طلبك غير متاح. برجاء التواصل مع هشام الغمراوى</div>`;
      }


      // ---------- UI ----------
      const AVATAR_URL = 'chic_robot_avatar.png';
      const LS_KEY = 'raya_cbot_history_v1';

      const style = document.createElement('style');
      style.textContent = `
  .cbot-fab-btn{position:fixed;bottom:calc(18px + env(safe-area-inset-bottom));left:16px;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#0A2540,#0B6E6E);color:#fff;box-shadow:0 10px 30px rgba(10,37,64,.45);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;padding:0;overflow:visible;transition:transform .18s;touch-action:none;}
  .cbot-fab-btn img{width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid #14b8a6;filter:drop-shadow(0 3px 6px rgba(0,0,0,.25));flex-shrink:0}
  .cbot-fab-btn span.cbot-fab-label{display:none;}
  .cbot-fab-btn:hover{transform:scale(1.03)}
  .cbot-fab-btn .cbot-pulse{position:absolute;inset:-4px;border-radius:inherit;border:2px solid #14b8a6;opacity:.6;animation:cbotPulse 1.8s infinite;pointer-events:none}
  @keyframes cbotPulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.35);opacity:0}}
  .cbot-panel{position:fixed;bottom:calc(94px + env(safe-area-inset-bottom));left:16px;width:420px;max-width:calc(100vw - 24px);height:640px;max-height:calc(100dvh - 130px);background:#fff;border-radius:18px;box-shadow:0 24px 60px rgba(10,37,64,.35);z-index:9998;display:none;flex-direction:column;overflow:hidden;font-family:'IBM Plex Sans Arabic',system-ui,sans-serif}
  .cbot-panel.open{display:flex;animation:cbotIn .22s ease}
  @keyframes cbotIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
  .cbot-hdr{background:linear-gradient(135deg,#0A2540,#0B6E6E);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}
  .cbot-hdr .cbot-av{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid #14b8a6;background:#fff;filter:drop-shadow(0 2px 4px rgba(0,0,0,.2))}
  .cbot-hdr .cbot-av img{width:100%;height:100%;object-fit:cover;display:block}
  .cbot-hdr h4{font-size:15px;margin:0;font-weight:700}
  .cbot-hdr small{font-size:11px;opacity:.8;display:block;margin-top:2px}
  .cbot-hdr .cbot-status{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;opacity:.9;margin-top:2px}
  .cbot-hdr .cbot-status::before{content:'';width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.25)}
  .cbot-actions{margin-inline-start:auto;display:flex;gap:6px}
  .cbot-actions button{background:rgba(255,255,255,.14);border:none;color:#fff;min-width:36px;min-height:36px;border-radius:50%;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .cbot-actions button:hover{background:rgba(255,255,255,.24)}
  .cbot-body{flex:1;overflow-y:auto;padding:14px;background:#F4F7FB;-webkit-overflow-scrolling:touch}
  .cbot-row{display:flex;gap:8px;margin-bottom:12px;align-items:flex-end}
  .cbot-row.u{flex-direction:row-reverse}
  .cbot-row-av{width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid #14b8a6;background:#fff}
  .cbot-row-av img{width:100%;height:100%;object-fit:cover;display:block}
  .cbot-row.u .cbot-row-av{display:none}
  .cbot-msg{max-width:calc(100% - 46px);padding:10px 12px;border-radius:14px;font-size:14px;line-height:1.6;word-break:break-word}
  .cbot-msg.u{background:#0A2540;color:#fff;border-top-right-radius:4px;margin-inline-start:auto}
  .cbot-msg.b{background:#fff;color:#0D1B2A;border:1px solid #E1E7EF;border-top-left-radius:4px;box-shadow:0 2px 6px rgba(10,37,64,.05)}
  .cbot-typ{display:inline-flex;gap:4px;padding:10px 14px;background:#fff;border:1px solid #E1E7EF;border-radius:14px}
  .cbot-typ span{width:7px;height:7px;background:#0B6E6E;border-radius:50%;animation:cbotDot 1.2s infinite}
  .cbot-typ span:nth-child(2){animation-delay:.2s}.cbot-typ span:nth-child(3){animation-delay:.4s}
  @keyframes cbotDot{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-4px)}}
  .cbot-chips{display:flex;gap:6px;padding:8px 12px;background:#fff;border-top:1px solid #E1E7EF;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;-webkit-overflow-scrolling:touch}
  .cbot-chips::-webkit-scrollbar{height:4px}
  .cbot-chip{background:#EEF2F7;color:#0A2540;padding:8px 12px;border-radius:20px;font-size:12.5px;border:1px solid #DDE4EE;cursor:pointer;font-family:inherit;transition:all .16s;white-space:nowrap;flex-shrink:0;min-height:36px}
  .cbot-chip:hover,.cbot-chip:focus-visible{background:#0B6E6E;color:#fff;border-color:#0B6E6E;outline:none}
  .cbot-inp-row{display:flex;gap:8px;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid #E1E7EF;position:sticky;bottom:0}
  .cbot-inp{flex:1;padding:12px 14px;border:1.5px solid #DDE4EE;border-radius:12px;font-size:15px;font-family:inherit;outline:none;background:#F4F7FB;min-height:44px}
  .cbot-inp:focus{border-color:#0B6E6E;background:#fff}
  .cbot-send{min-width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#0A2540,#0B6E6E);color:#fff;border:none;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .cbot-send:focus-visible{outline:2px solid #14b8a6;outline-offset:2px}
  .cbot-blk{background:#fff;border:1px solid #E1E7EF;border-radius:12px;padding:12px;margin-top:10px}
  .cbot-blk-h{font-weight:700;color:#0A2540;font-size:14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap}
  .cbot-cat{font-size:11px;color:#0B6E6E;background:#E6F4F4;padding:2px 8px;border-radius:10px;font-weight:600}
  .cbot-fab{background:#F4F7FB;border-inline-start:3px solid #0B6E6E;padding:10px;border-radius:6px;margin-bottom:8px;font-size:13px}
  .cbot-fab-a{margin-bottom:4px;color:#334}
  .cbot-fab-b{color:#0A2540}
  .cbot-cnt{font-size:12.5px;color:#0B6E6E;margin-bottom:6px}
  .cbot-list{display:grid;gap:6px;max-height:320px;overflow-y:auto;padding-inline-end:4px}
  .cbot-prod{background:#F4F7FB;border:1px solid #E1E7EF;border-radius:8px;padding:10px;cursor:pointer;transition:all .2s}
  .cbot-prod:hover{background:#fff;border-color:#0B6E6E;transform:translateY(-1px);box-shadow:0 3px 10px rgba(11,110,110,.1)}
  .cbot-prod-h{display:flex;justify-content:space-between;gap:8px;align-items:baseline;margin-bottom:2px}
  .cbot-prod-t{color:#0B6E6E;font-size:11px;font-weight:600}
  .cbot-prod-n{color:#4A5A6E;font-size:12px}
  .cbot-corr{background:#FFF4E5;color:#8A5A00;padding:6px 10px;border-radius:8px;font-size:12.5px;margin-bottom:8px}
  .cbot-empty{color:#6a7b8f;font-size:13px;padding:8px;text-align:center}
  .cbot-hint{color:#6a7b8f;font-size:13px;text-align:center;padding:6px 4px}
  .cbot-cmp{background:#fff;border:1px solid #E1E7EF;border-radius:12px;padding:10px;margin-top:8px}
  .cbot-cmp-h{font-weight:700;color:#0A2540;margin-bottom:8px}
  .cbot-cmp-scroll{overflow-x:auto}
  .cbot-tbl{width:100%;border-collapse:collapse;font-size:12.5px;min-width:100%}
  .cbot-tbl th,.cbot-tbl td{border:1px solid #E1E7EF;padding:6px 8px;text-align:start;vertical-align:top}
  .cbot-tbl th{background:#0A2540;color:#fff;font-weight:600}
  .cbot-k{background:#F4F7FB;font-weight:600;color:#0A2540;width:36%}
  .cbot-win{background:#E6F4EA;color:#146c2e;font-weight:700;position:relative}
  .cbot-win::after{content:'🏆';margin-inline-start:4px}
  .cbot-verdict{margin-top:8px;padding:8px 10px;background:#E6F4F4;color:#0A2540;border-radius:8px;font-size:13px}
  .cbot-us{background:linear-gradient(180deg,#fff,#FFF9F0)}
  .cbot-cs{background:linear-gradient(180deg,#fff,#F0F8FF)}
  .cbot-us-row,.cbot-cs-row{padding:8px 10px;border:1px solid #E1E7EF;border-radius:8px;margin-bottom:6px;background:#fff}
  .cbot-us-arrow{font-weight:700;color:#0A2540;font-size:13px}
  .cbot-cs-add{font-weight:700;color:#0B6E6E;font-size:13px}
  .cbot-us-why{margin-top:4px;font-size:12.5px;color:#334}
  .cbot-pri{font-size:10.5px;padding:2px 8px;border-radius:10px;margin-inline-start:6px;font-weight:600}
  .cbot-pri-عاليه{background:#E6F4EA;color:#146c2e}
  .cbot-pri-متوسطه{background:#FFF4E5;color:#8A5A00}
  .cbot-pri-منخفضه{background:#F4F7FB;color:#4A5A6E}
  .cbot-us-alt{margin-top:8px;font-size:12.5px;color:#0A2540}
  .cbot-fab-list{font-size:13px;color:#334;margin-top:6px}
  .cbot-fab-list ul{padding-inline-start:18px;margin:4px 0}
  .cbot-fab-list li{margin-bottom:4px}
  @media(max-width:640px){
    .cbot-fab-btn{width:56px;height:56px;left:12px;bottom:calc(85px + env(safe-area-inset-bottom));padding:0;border-radius:50%;z-index:999999;}
    .cbot-fab-btn img{width:48px;height:48px;}
    .cbot-fab-btn span.cbot-fab-label{display:none;}
    .cbot-panel{width:100vw;height:100dvh;max-height:100dvh;left:0;right:0;bottom:0;top:0;border-radius:0;z-index:99999}
    .cbot-msg{font-size:14.5px}
  }
  `;
      document.head.appendChild(style);

      const btn = document.createElement('button');
      btn.className = 'cbot-fab-btn';
      btn.setAttribute('aria-label', 'فتح مستشارك الذكي');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = `<img src="${AVATAR_URL}" alt="مستشارك الذكي"/><span class="cbot-fab-label">مستشارك الذكي</span><span class="cbot-pulse" aria-hidden="true"></span>`;

      const panel = document.createElement('div');
      panel.className = 'cbot-panel';
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-label', 'مستشارك الذكي');
      panel.innerHTML = `
    <div class="cbot-hdr">
      <div class="cbot-av"><img src="${AVATAR_URL}" alt=""/></div>
      <div style="min-width:0">
        <h4>مستشارك الذكي</h4>
        <span class="cbot-status">متصل • جاهز لخدمتك</span>
      </div>
      <div class="cbot-actions">
        <button class="cbot-clear" aria-label="مسح المحادثة" title="مسح المحادثة">🗑</button>
        <button class="cbot-x" aria-label="اغلاق">✕</button>
      </div>
    </div>
    <div class="cbot-body" id="cbotBody" role="log" aria-live="polite" aria-atomic="false"></div>
    <div class="cbot-chips" id="cbotChips" role="toolbar" aria-label="اقتراحات سريعة"></div>
    <div class="cbot-inp-row">
      <label for="cbotInp" class="sr-only" style="position:absolute;left:-9999px">اكتب سؤالك</label>
      <input class="cbot-inp" id="cbotInp" placeholder="اسألني عن أي جهاز، خاصية، أو مقارنة..." dir="rtl" aria-label="سؤالك للمستشار"/>
      <button class="cbot-send" id="cbotSend" aria-label="ارسال">➤</button>
    </div>`;
      document.body.appendChild(btn);
      document.body.appendChild(panel);

      const body = panel.querySelector('#cbotBody');
      const inp = panel.querySelector('#cbotInp');
      const send = panel.querySelector('#cbotSend');
      const chipsRow = panel.querySelector('#cbotChips');

      const ContextSuggestions = {
        "fridges": ["ما هو الفرق بين التبريد المزدوج والبلازما؟", "أفضل ثلاجة إنفرتر في استهلاك الكهرباء؟", "قارن بين موديلين ثلاجات"],
        "heaters": ["ما هي مميزات نظام الأمان الخماسي؟", "أيهما أفضل: السخان الغاز أم الكهرباء؟"],
        "cookers": ["اشرح لي خاصية الأمان الكامل", "ما فائدة مروحة توزيع الحرارة؟"],
        "default": ["كيف يمكنني مساعدة العميل اليوم؟", "كيف أستخدم ميزة المقارنة؟", "أفضل الموديلات المتاحة"]
      };

      function updateChatContext() {
        let chips = [];

        // 1. Internal Chat Context
        if (_ctx.feat && _ctx.cat) {
          const fname = _ctx.feat.f.replace(/\s*\(.+?\)\s*/g, '').trim();
          chips.push(`ما هي أجهزة ${_ctx.cat} التي بها ${fname}؟`);
          chips.push(`قارن بين موديلين من ${_ctx.cat}`);
        } else if (_ctx.catType) {
          chips.push(`أفضل موديلات ${_ctx.catType}`);
          chips.push(`مميزات ${_ctx.catType}`);
        }

        // 2. Global UI Context (Active L2 Category)
        if (window.L2 && ContextSuggestions[window.L2]) {
          chips = [...chips, ...ContextSuggestions[window.L2]];
        }

        return chips.length ? [...new Set(chips)] : ContextSuggestions['default'];
      }

      function renderChips() {
        const chips = updateChatContext();
        chipsRow.innerHTML = chips.map(c => `<button class="cbot-chip" type="button">${esc2(c)}</button>`).join('');
        chipsRow.querySelectorAll('.cbot-chip').forEach(c => {
          c.addEventListener('click', () => { inp.value = c.textContent; onSend(); });
        });
      }

      // ---------- Persistent history ----------
      function saveHistory() {
        try {
          const items = Array.from(body.querySelectorAll('.cbot-row,.cbot-msg')).map(el => {
            if (el.classList.contains('cbot-row')) {
              const msg = el.querySelector('.cbot-msg');
              if (!msg) return null;
              return { who: msg.classList.contains('u') ? 'u' : 'b', html: msg.innerHTML };
            }
            return { who: el.classList.contains('u') ? 'u' : 'b', html: el.innerHTML };
          }).filter(Boolean).filter(x => !/cbot-typ/.test(x.html));
          localStorage.setItem(LS_KEY, JSON.stringify({ items, ctx: _ctx }));
        } catch (e) { }
      }
      function loadHistory() {
        try {
          const raw = localStorage.getItem(LS_KEY);
          if (!raw) return false;
          const data = JSON.parse(raw);
          if (!data || !Array.isArray(data.items) || !data.items.length) return false;
          data.items.forEach(m => addMsg(m.html, m.who, true));
          if (data.ctx) { Object.assign(_ctx, data.ctx); }
          return true;
        } catch (e) { return false; }
      }

      function addMsg(html, who, silent) {
        const row = document.createElement('div');
        row.className = 'cbot-row ' + who;
        row.innerHTML = (who === 'b'
          ? `<div class="cbot-row-av" aria-hidden="true"><img src="${AVATAR_URL}" alt=""/></div>`
          : '') + `<div class="cbot-msg ${who}">${html}</div>`;
        body.appendChild(row);

        if (who === 'b') {
          setTimeout(() => {
            if (row.offsetHeight > body.clientHeight * 0.6) {
              body.scrollTo({ top: row.offsetTop - 20, behavior: 'smooth' });
            } else {
              body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' });
            }
          }, 50);
        } else {
          body.scrollTop = body.scrollHeight;
        }

        if (!silent) saveHistory();
        return row;
      }
      function addTyping() {
        const row = document.createElement('div');
        row.className = 'cbot-row b cbot-typ-wrap';
        row.setAttribute('aria-label', 'المستشار يكتب');
        row.innerHTML = `<div class="cbot-row-av" aria-hidden="true"><img src="${AVATAR_URL}" alt=""/></div><span class="cbot-typ" role="status" aria-live="polite"><span></span><span></span><span></span></span>`;
        body.appendChild(row);
        body.scrollTop = body.scrollHeight;
        return row;
      }

      // Initial hydrate: prefer persisted history
      if (!loadHistory()) {
        addMsg('أنا مستشارك الذكي، صممني هشام الغمراوي لمساعدتك بسرعة وسهولة. اسألني أي سؤال، وسأجيبك فورًا.', 'b');
      }
      renderChips();

      function onSend() {
        const q = (inp.value || '').trim();
        if (!q) return;
        addMsg(esc2(q), 'u');
        inp.value = '';
        const t = addTyping();
        setTimeout(() => {
          try {
            const html = respond(q);
            t.remove();
            addMsg(html, 'b');
          } catch (err) {
            t.remove();
            addMsg('⚠️ حدث خطأ: ' + esc2(err.message), 'b');
          }
          renderChips();
        }, 220);
      }
      send.addEventListener('click', onSend);
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); onSend(); } });

      let isDragging = false;
      let dragStartX, dragStartY, initLeft, initBottom;

      btn.addEventListener('touchstart', (e) => {
        isDragging = false;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        const rect = btn.getBoundingClientRect();
        initLeft = rect.left;
        initBottom = window.innerHeight - rect.bottom;
      }, { passive: true });

      btn.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - dragStartX;
        const dy = e.touches[0].clientY - dragStartY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          isDragging = true;
          e.preventDefault();
          let newLeft = Math.max(0, Math.min(initLeft + dx, window.innerWidth - btn.offsetWidth));
          let newBottom = Math.max(0, Math.min(initBottom - dy, window.innerHeight - btn.offsetHeight));
          btn.style.left = newLeft + 'px';
          btn.style.bottom = newBottom + 'px';
        }
      }, { passive: false });

      btn.addEventListener('mousedown', (e) => {
        isDragging = false;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        const rect = btn.getBoundingClientRect();
        initLeft = rect.left;
        initBottom = window.innerHeight - rect.bottom;

        const onMouseMove = (ev) => {
          const dx = ev.clientX - dragStartX;
          const dy = ev.clientY - dragStartY;
          if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            isDragging = true;
            ev.preventDefault();
            let newLeft = Math.max(0, Math.min(initLeft + dx, window.innerWidth - btn.offsetWidth));
            let newBottom = Math.max(0, Math.min(initBottom - dy, window.innerHeight - btn.offsetHeight));
            btn.style.left = newLeft + 'px';
            btn.style.bottom = newBottom + 'px';
          }
        };

        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });

      btn.addEventListener('click', (e) => {
        if (isDragging) {
          e.preventDefault();
          return;
        }
        const open = !panel.classList.contains('open');
        panel.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
        if (open) {
          renderChips();
          setTimeout(() => inp.focus(), 100);
        }
      });
      panel.querySelector('.cbot-x').addEventListener('click', () => {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      });
      panel.querySelector('.cbot-clear').addEventListener('click', () => {
        if (!confirm('مسح كامل المحادثة يا مستشار؟')) return;
        localStorage.removeItem(LS_KEY);
        body.innerHTML = '';
        _ctx.cat = null; _ctx.feat = null; _ctx.catType = null;
        addMsg('تم مسح المحادثة. جاهز لسؤال جديد يا <b>مستشار</b> 👋', 'b');
        renderChips();
      });
      // Esc to close
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && panel.classList.contains('open')) {
          panel.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    })();

  


    window.addEventListener('scroll', function () {
      var stBtn = document.getElementById('scrollTopBtn');
      if (stBtn) {
        if (window.scrollY > 300) stBtn.classList.add('vis');
        else stBtn.classList.remove('vis');
      }
    });
  


    // --- PDF Manual Logic ---
    let pdfDoc = null;
    let scale = 1.0;
    const pdfTextIndex = [];
    let isPdfIndexed = false;
    let pdfObserver = null;
    const renderedPages = new Set();
    const renderedTextLayers = new Set();

    const scrollContainer = document.getElementById('pdf-scroll-container');

    // Decode Base64 to Uint8Array
    function base64ToUint8Array(base64) {
      const raw = atob(base64);
      const uint8Array = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) {
        uint8Array[i] = raw.charCodeAt(i);
      }
      return uint8Array;
    }

    // Setup the scroll container with empty divs for each page
    function initScrollContainer() {
      if (!pdfDoc || !scrollContainer) return;
      scrollContainer.innerHTML = '';

      // Get first page to find aspect ratio
      pdfDoc.getPage(1).then(page => {
        const viewport = page.getViewport({ scale });

        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const pageDiv = document.createElement('div');
          pageDiv.className = 'pdf-page-wrapper';
          pageDiv.id = 'pdf-page-' + i;
          pageDiv.dataset.page = i;
          pageDiv.style.position = 'relative';
          pageDiv.style.margin = '0 auto 20px auto';
          pageDiv.style.width = viewport.width + 'px';
          pageDiv.style.height = viewport.height + 'px';
          pageDiv.style.backgroundColor = '#fff';
          pageDiv.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';

          const canvas = document.createElement('canvas');
          canvas.style.display = 'block';
          canvas.style.width = '100%';
          canvas.style.height = '100%';

          const textLayer = document.createElement('div');
          textLayer.className = 'textLayer';
          textLayer.style.position = 'absolute';
          textLayer.style.top = '0';
          textLayer.style.left = '0';
          textLayer.style.right = '0';
          textLayer.style.bottom = '0';
          textLayer.style.overflow = 'hidden';
          textLayer.style.opacity = '0.9'; // for selectable text

          pageDiv.appendChild(canvas);
          pageDiv.appendChild(textLayer);
          scrollContainer.appendChild(pageDiv);

          pdfObserver.observe(pageDiv);
        }
      });
    }

    // Intersection Observer Callback
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNum = parseInt(entry.target.dataset.page);
          renderPdfPage(pageNum, entry.target);
        }
      });
    }

    function renderPdfPage(num, pageDiv) {
      if (renderedPages.has(num)) return;
      renderedPages.add(num);

      const canvas = pageDiv.querySelector('canvas');
      const textLayerDiv = pageDiv.querySelector('.textLayer');
      const ctx = canvas.getContext('2d');

      pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;

        // HD Canvas rendering
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        // Adjust wrapper size
        pageDiv.style.width = Math.floor(viewport.width) + "px";
        pageDiv.style.height = Math.floor(viewport.height) + "px";

        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

        const renderCtx = {
          canvasContext: ctx,
          transform: transform,
          viewport: viewport
        };

        page.render(renderCtx).promise.then(() => {
          // Text layer rendering
          if (!renderedTextLayers.has(num)) {
            renderedTextLayers.add(num);
            page.getTextContent().then(textContent => {
              textLayerDiv.style.left = canvas.offsetLeft + 'px';
              textLayerDiv.style.top = canvas.offsetTop + 'px';
              textLayerDiv.style.height = canvas.offsetHeight + 'px';
              textLayerDiv.style.width = canvas.offsetWidth + 'px';

              textLayerDiv.style.setProperty('--scale-factor', viewport.scale);

              pdfjsLib.renderTextLayer({
                textContentSource: textContent,
                container: textLayerDiv,
                viewport: viewport,
                textDivs: []
              });
            });
          }
        });
      });
    }

    // Zoom
    window.onPdfZoom = function (delta) {
      scale += delta;
      if (scale < 0.5) scale = 0.5;
      if (scale > 3) scale = 3;
      const zl = document.getElementById('pdf-zoom-level');
      if (zl) zl.textContent = (scale * 100).toFixed(0) + '%';

      // Re-render everything
      renderedPages.clear();
      renderedTextLayers.clear();
      pdfObserver.disconnect();

      // Create new observer
      pdfObserver = new IntersectionObserver(handleIntersection, { root: scrollContainer, rootMargin: '200px' });

      initScrollContainer();
    }

    // Load PDF Document
    if (typeof pdfjsLib !== 'undefined' && typeof PDF_BASE64 !== 'undefined') {
      pdfObserver = new IntersectionObserver(handleIntersection, { root: scrollContainer, rootMargin: '200px' });

      try {
        const pdfData = base64ToUint8Array(PDF_BASE64);

        const CMAP_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/';
        const CMAP_PACKED = true;

        pdfjsLib.getDocument({
          data: pdfData,
          cMapUrl: CMAP_URL,
          cMapPacked: CMAP_PACKED
        }).promise.then(pdfDoc_ => {
          pdfDoc = pdfDoc_;
          const pCount = document.getElementById('pdf-page-count');
          if (pCount) pCount.textContent = pdfDoc.numPages;

          initScrollContainer();
          extractPdfText();
        }).catch(err => {
          console.error("Error loading PDF: ", err);
        });
      } catch (e) {
        console.error("Error converting PDF base64: ", e);
      }
    }

    async function extractPdfText() {
      if (!pdfDoc) return;
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        try {
          const page = await pdfDoc.getPage(i);
          const textContent = await page.getTextContent();
          const text = textContent.items.map(s => s.str).join(' ');
          pdfTextIndex.push({ page: i, text: text, textNorm: norm(text) });
        } catch (e) { }
      }
      isPdfIndexed = true;
    }

    window.searchPdfManual = function (query) {
      const resDiv = document.getElementById('pdf-search-results');
      const cc = document.getElementById('manCnt');

      if (!resDiv) return;

      if (!query) {
        resDiv.style.display = 'none';
        if (cc) cc.innerHTML = '<strong>' + (pdfDoc ? pdfDoc.numPages : 0) + '</strong> صفحة';
        setCount(pdfDoc ? pdfDoc.numPages : 0, 'صفحة في المانيوال');
        return;
      }

      if (!isPdfIndexed) {
        resDiv.style.display = 'flex';
        resDiv.innerHTML = '<div style="text-align:center; padding:10px; color:#64748B;">جاري فهرسة المانيوال للبحث، يرجى الانتظار قليلاً...</div>';
        return;
      }

      const useManQ = norm(query);
      const qTerms = expandQ(query);

      const results = pdfTextIndex.filter(p => {
        return qTerms.some(t => p.textNorm.includes(t));
      });

      if (results.length > 0) {
        resDiv.style.display = 'flex';
        resDiv.innerHTML = '<div style="font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;">نتائج البحث (' + results.length + ' صفحة):</div>' +
          '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
          results.map(r => `<button class="dym-btn" onclick="document.getElementById('pdf-page-${r.page}').scrollIntoView({behavior: 'smooth'})">صفحة ${r.page}</button>`).join('') +
          '</div>';
      } else {
        resDiv.style.display = 'flex';
        resDiv.innerHTML = '<div style="text-align:center; padding:10px; color:#64748B;">لا توجد نتائج مطابقة</div>';
      }

      if (cc) cc.innerHTML = '<strong>' + results.length + '</strong> نتيجة';
      setCount(results.length, 'نتيجة في المانيوال');
    }
  