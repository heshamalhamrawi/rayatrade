import sys

with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

new_button = '      <button class="toc-chip" onclick="filterSection(\'owner_dictionary\', this)">قاموس صاحب البيت</button>\n'

html_block = """        <!-- SECTION: OWNER DICTIONARY -->
        <div class="section-block" data-category="owner_dictionary" id="sec-owner-dictionary" style="display:none;">
          <div class="section-header" onclick="toggleSection(this)">
            <span class="section-icon">📖</span>
            قاموس لغة صاحب البيت
            <span class="section-toggle">▼</span>
          </div>
          <div class="section-body">
            <div style="font-size:14px; color:#4a5a8a; margin-bottom:15px; text-align:center;">
              عشان تدير بيتك باحترافية وتكون دايماً سايق بخطوة، لازم تكون بتتكلم "لغة الفرع" صح. القاموس ده مش مجرد شوية حروف ومصطلحات، ده "الكتالوج السري"
            </div>
            
            <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size:13px; text-align:right;" dir="rtl">
              <thead>
                <tr style="background-color: #1a2f6e; color: white;">
                  <th style="padding: 10px; border: 1px solid #d0d8f0;">الاختصار</th>
                  <th style="padding: 10px; border: 1px solid #d0d8f0;">المصطلح الإنجليزي</th>
                  <th style="padding: 10px; border: 1px solid #d0d8f0;">💡 تعريفه</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">HA<br>MDA</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Home Appliances<br>Medium Domestic Appliances</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">الأجهزة المنزلية الكبيرة: زي الثلاجات، الفريزرات، الغسالات وبوتاجازات. دي الأجهزة المعمرة اللي الضيف بياخد وقت عشان يقرر يشتريها.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">SDA</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Small Domestic Appliances</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">الأجهزة المنزلية الصغيرة: زي الميكروويف، والمكنسة و الخلاط والمكوى وأجهزة إعداد الطعام. خد بالك دي أجهزة سريعة وممتازة جداً لزيادة فاتورتك.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">PC</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Personal Care</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">أجهزة العناية الشخصية: زي ماكينات الحلاقة، السيشوار، ومكواة الشعر. فئة ممتازة لتقديمها كبدائل أو هدايا.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">AC</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Air Conditioners</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">أجهزة التكييف: الأجهزة الموسمية اللي محتاجة تركيز في الشرح على مساحة الغرفة وتقنيات توفير الكهرباء الإنفرتر.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">FL / TL</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Front Load / Top Load</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">أنواع الغسالات: FL تحميل أمامي، و TL تحميل علوي. مصطلحات سريعة بنستخدمها وإحنا بنشرح للضيف.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">TV / LED</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Televisions / Displays</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">الشاشات: بكل مقاساتها وأنواعها.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">ACC</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Accessories</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">الإكسسوارات: أي كماليات للموبايل أو اللاب توب زي الساعات الذكية، Smart Wearables، الشواحن والكابلات.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">Dept / Cat</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Department / Category</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">القسم والفئة: بيتك متقسم إدارياً لأقسام زي التبريد أو الشاشات، وكل قسم تحته فئات زي ديب فريزر أو شاشة ذكية. التقسيمة دي بتساعدك ترتب أفكارك وتعرض البدايل الصح.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">WH</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Warehouse</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">المخزن: المكان اللي بتسحب منه أجهزة الضيف لو مش متاحة في فرعنا. عينك دايماً على رصيد المخزن في السيستم عشان تقفل البيعة بثقة وتوفر للضيف طلبه.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">VM</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Visual Merchandising</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">العرض المرئي: فن شياكة واجهة بيتك! وهو طريقة رص الأجهزة وتنسيق الكروت عشان تفتح نفس الضيف وتريّح عينه وهو بيشتري.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">POSM</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Point of Sales Materials</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">المواد التسويقية البيعية: دي "الأسلحة الصامتة" بتاعتك! زي كروت الأسعار، كارت "الأكثر مبيعاً"، أو "وصل حديثاً" اللي بتعلقها على الجهاز.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">USP</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Unique Selling Proposition</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">الميزة التنافسية نقطة البيع الفريدة: دي "الخلاصة" أو السر اللي بيميز الجهاز عن غيره وبيخليه الأنسب لضيفنا زي تقنية تبريد معينة أو معالج شاشة قوي.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">Attach Rate</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Attach Rate</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">معدل المرفقات ارتباط المبيعات: ده المؤشر اللي بيقيس شطارتك في الـ Cross-selling! بعت كام إكسسوار مع كل جهاز رئيسي؟ كل ما تبيع مكملات أكتر، التقييم بتاعك بيعلى.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">ASP</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Average Selling Price</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">متوسط سعر البيع: بيقيس شطارتك في الـ Up-selling. كل ما تقنع الضيوف بموديلات أعلى وإمكانيات أحسن، متوسط قيمة الفاتورة الـ ASP بتاعك بيزيد.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">Target</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Daily Target</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">الهدف اليومي: ده التحدي الأساسي بتاعك كل يوم بتفتح فيه باب الفرع. كل ما تقفل التارجت بدري، كل ما تثبت إنك "صاحب بيت" ناجح.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">Ach</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Achievements</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">المحقق الفعلي: العداد اللي بيترجم مجهودك لمكسب حقيقي، وبيقولك إنت واقف فين بالظبط من التارجت بتاعك.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">MTD</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Month To Date</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">مبيعات الشهر حتى تاريخه: بيعرفك إنت محقق إيه من التارجت من أول الشهر لحد النهارده. عشان تعرف محتاج تشد حيلك إمتى.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">YOY</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Year Over Year</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">المقارنة السنوية: لما مديرك يقولك فرعنا محقق نمو YOY، معناه إن مبيعاتنا الشهر ده أعلى من نفس الشهر في السنة اللي فاتت. دي لغة البيزنس عشان تبقى فاهم فرعك بيكبر إزاي.</td>
                </tr>
                <tr style="background-color: #f4f6fc;">
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">Inc</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Incentive</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">العمولة الحافز المادي: مكافأتك المباشرة على شطارتك في المبيعات وتعبك مع الضيوف. كل ما تكبر فاتورة الضيف، عمولتك بتزيد.</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #d0d8f0; font-weight:bold;">Contest</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;" dir="ltr">Contest</td>
                  <td style="padding: 10px; border: 1px solid #d0d8f0;">المسابقات البيعية: تحديات بتنزلها الشركة على براندات أو فئات معينة. دي فرصتك الذهبية عشان تضاعف عمولتك وتثبت إنك بطل المبيعات في منطقتك!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>\n"""

out_lines = []
for line in lines:
    out_lines.append(line)
    if "filterSection('house_guard', this)" in line:
        out_lines.append(new_button)
    elif "<!-- end manualContent -->" in line:
        out_lines.pop()
        out_lines.append(html_block)
        out_lines.append(line)

with open("index.html", "w", encoding="utf-8") as f:
    f.writelines(out_lines)
