$html = Get-Content -Path "index.html" -Raw -Encoding UTF8

$newCompare = @'
window.runSmartCompare = function() {
  const m1Id = document.getElementById('compM1').value;
  const m2Id = document.getElementById('compM2').value;
  const wrap = document.getElementById('compTableWrap');
  
  if (!m1Id || !m2Id) {
    alert('الرجاء اختيار موديلين للمقارنة');
    return;
  }
  
  const p1 = AR.find(x => x.s === m1Id);
  const p2 = AR.find(x => x.s === m2Id);
  
  // Helper to find FAB details
  const getFabBenefit = (keyword) => {
     if(typeof FAB_IDX !== 'undefined') {
         for(let item of FAB_IDX) {
             for(let kw of item.sk) {
                 if(kw && kw.length >= 3 && keyword.includes(kw)) {
                     return item.f;
                 }
             }
         }
     }
     return null;
  };
  
  const parseSpecs = (p) => {
    let specs = {};
    specs['البراند'] = extractBrand(p.n);
    
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
      let key = s.trim();
      let val = '';
      
      if (s.includes(':')) {
        let parts = s.split(':');
        key = parts[0].trim();
        val = parts.slice(1).join(':').trim();
      }
      
      let fullStr = s.toLowerCase();
      
      if (fullStr.includes('سعة') || fullStr.includes('لتر') || fullStr.includes('كيلو') || fullStr.includes('قدم') || fullStr.includes('بوصة')) {
         let type = 'السعة';
         if(fullStr.includes('كيلو') || fullStr.includes('غسيل')) type = 'السعة (وزن)';
         else if(fullStr.includes('بوصة') || fullStr.includes('شاشة')) type = 'حجم الشاشة';
         
         key = type; 
         let match = fullStr.match(/(\d+(?:\.\d+)?)/);
         if(match) {
            let unit = fullStr.includes('لتر') ? 'لتر' : (fullStr.includes('كيلو') ? 'كجم' : (fullStr.includes('قدم') ? 'قدم' : (fullStr.includes('بوصة') ? 'بوصة' : '')));
            val = match[1] + (unit ? ' ' + unit : '');
         }
      }
      else if (fullStr.includes('نوفروست')) { key = 'نظام التبريد'; val = 'نوفروست (توزيع هواء مستمر يمنع الثلج)'; }
      else if (fullStr.includes('ديفروست')) { key = 'نظام التبريد'; val = 'ديفروست (يحتاج إزالة ثلج يدوياً)'; }
      else if (fullStr.includes('ديجيتال')) { key = 'شاشة ديجيتال'; val = 'تحكم دقيق ومباشر للراحة والتوفير'; }
      else if (fullStr.includes('انفرتر')) { key = 'تقنية الإنفرتر'; val = 'موتور ذكي يوفر حتى 50% كهرباء بدون صوت مزعج'; }
      else if (fullStr.includes('بلازما')) { key = 'تكنولوجيا البلازما'; val = 'تنقية الهواء ليدوم الطعام طازجاً أكثر'; }
      else if (fullStr.includes('بخار')) { key = 'غسيل بالبخار'; val = 'تعقيم وإزالة كرمشة الملابس بشكل صحي'; }
      else if (fullStr.includes('مبرد') || fullStr.includes('حنفية')) { key = 'مبرد مياه'; val = 'مبرد مياه خارجي للحصول على ماء بارد بدون تسريب تبريد الثلاجة'; }
      else if (fullStr.includes('لون')) { key = 'اللون'; }
      else if (key.includes('البراند') || key.includes('ماركة') || key.includes('العلامة التجارية')) { key = 'البراند'; val = extractBrand(p.n); }
      
      // Smart enrichment instead of generic "متاح"
      if(val === '' || val === 'متاح' || val === 'متوفر') {
          let fabMatch = getFabBenefit(key);
          if(fabMatch && typeof FAB !== 'undefined') {
              let fObj = FAB.find(x => x.f === fabMatch);
              if(fObj) {
                  // Show the actual benefit from the FAB dictionary
                  val = `<div style="font-size:12px; color:#0A2540; line-height:1.4;"><span style="color:#0B6E6E; font-weight:700;">متوفر:</span> ${fObj.b}</div>`;
              } else {
                  val = '<span style="color:#166534; font-weight:600;">متوفر</span>';
              }
          } else {
              val = '<span style="color:#166534; font-weight:600;">متوفر (ميزة أساسية)</span>';
          }
      }
      
      if (key && key.length < 35) {
        if (!['غير متاح', '-', 'لا يوجد', 'n/a', ''].includes(val.trim().toLowerCase())) {
          specs[key] = val; 
        }
      } 
    });
    
    if(!specs['السعة'] && !specs['السعة (وزن)'] && capMatch) {
       specs['السعة / الحجم'] = capMatch[0];
    }
    
    return specs;
  };
  
  const s1 = parseSpecs(p1);
  const s2 = parseSpecs(p2);
  
  const allKeys = [...new Set([...Object.keys(s1), ...Object.keys(s2)])];
  
  let table = '<table class="comp-table"><thead><tr><th style="width:20%">الخاصية</th><th style="width:40%">' + p1.n + '</th><th style="width:40%">' + p2.n + '</th></tr></thead><tbody>';
  
  const sortedKeys = allKeys.sort((a,b) => {
    if(a === 'البراند') return -1;
    if(b === 'البراند') return 1;
    if(a.includes('سعة') || a.includes('حجم')) return -1;
    if(b.includes('سعة') || b.includes('حجم')) return 1;
    return 0;
  });
  
  let p1Score = 0;
  let p2Score = 0;
  let p1Advantages = [];
  let p2Advantages = [];
  
  sortedKeys.forEach(k => {
    let v1 = s1[k] || '<span style="color:#94A3B8;">غير متوفر</span>';
    let v2 = s2[k] || '<span style="color:#94A3B8;">غير متوفر</span>';
    
    let highlight1 = false;
    let highlight2 = false;
    
    let isSpec1Avail = v1 && !v1.includes('غير متوفر');
    let isSpec2Avail = v2 && !v2.includes('غير متوفر');
    
    // Evaluate Capacity
    if(k.includes('سعة') || k.includes('حجم')) {
        let n1 = parseFloat(v1) || 0;
        let n2 = parseFloat(v2) || 0;
        if(n1 > n2) { highlight1 = true; p1Advantages.push('سعة أكبر (' + v1 + ')'); p1Score++; }
        if(n2 > n1) { highlight2 = true; p2Advantages.push('سعة أكبر (' + v2 + ')'); p2Score++; }
    } 
    // Evaluate Feature presence
    else if (isSpec1Avail && !isSpec2Avail) {
        highlight1 = true; p1Score++; p1Advantages.push(k);
    } else if (isSpec2Avail && !isSpec1Avail) {
        highlight2 = true; p2Score++; p2Advantages.push(k);
    } 
    // Evaluate Specific High-Value Features
    else {
        if(v1.includes('انفرتر') || v1.includes('إنفرتر')) { highlight1 = true; p1Score+=2; if(!p1Advantages.includes('موتور إنفرتر')) p1Advantages.push('موتور إنفرتر (موفر للكهرباء)'); }
        if(v2.includes('انفرتر') || v2.includes('إنفرتر')) { highlight2 = true; p2Score+=2; if(!p2Advantages.includes('موتور إنفرتر')) p2Advantages.push('موتور إنفرتر (موفر للكهرباء)'); }
        if(v1.includes('نوفروست')) { highlight1 = true; p1Score++; }
        if(v2.includes('نوفروست')) { highlight2 = true; p2Score++; }
    }
    
    const diffClass = (s1[k] !== s2[k]) ? 'diff-row' : '';
    
    let cell1 = highlight1 ? `<div style="background:#E6F4F4; padding:8px; border-radius:6px; border:1px solid #0B6E6E; box-shadow: 0 2px 4px rgba(11,110,110,0.1);"><span style="color:#0B6E6E; float:left; font-size:16px;">★</span>${v1}</div>` : v1;
    let cell2 = highlight2 ? `<div style="background:#E6F4F4; padding:8px; border-radius:6px; border:1px solid #0B6E6E; box-shadow: 0 2px 4px rgba(11,110,110,0.1);"><span style="color:#0B6E6E; float:left; font-size:16px;">★</span>${v2}</div>` : v2;
    
    table += `<tr class="${diffClass}"><td style="font-weight:600; color:#0D1B2A;">${k}</td><td>${cell1}</td><td>${cell2}</td></tr>`;
  });
  
  // Smart Decision Generation
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
      
      if(loserAdvs.length > 0) {
          decisionHtml += `ومع ذلك، يظل <b style="color:#B8891A;">${loserName}</b> خياراً مناسباً إذا كان العميل يفضل: <span style="color:#B8891A; font-weight:700;">${loserAdvs.slice(0, 3).join('، ')}</span>.`;
      } else {
          decisionHtml += `هذا الجهاز يتفوق بشكل شامل على المنافس ويعتبر ترقية حقيقية للعميل.`;
      }
  }
  
  table += `
    <tr style="background:#FEF9EE; border-top:3px solid #B8891A;">
        <td colspan="3" style="padding:18px; font-size:14.5px; line-height:1.7; color:#0A2540; border-radius: 0 0 12px 12px;">
            ${decisionHtml}
        </td>
    </tr>
  `;
  
  table += '</tbody></table>';
  wrap.innerHTML = table;
  wrap.style.display = 'block';
};
'@

$regex = '(?s)window\.runSmartCompare = function\(\) \{.*?\n\};'
$html = $html -replace $regex, $newCompare

Set-Content -Path "index.html" -Value $html -Encoding UTF8
Write-Output "Successfully updated Smart Compare logic."
