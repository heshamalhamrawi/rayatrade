$htmlPath = "index.html"
$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

$newCompare = @"
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
  
  if (p1.c !== p2.c) {
    wrap.innerHTML = '<div style="text-align:center; padding:30px; font-size:18px; color:#ef4444; font-weight:bold; background:#fef2f2; border:1px solid #f87171; border-radius:12px; margin-top:20px;">مقارنة غير منطقية! 🛑<br><span style="font-size:14px; color:#991b1b; font-weight:normal;">لا يمكن مقارنة جهازين من فئتين مختلفتين (' + p1.c + ' و ' + p2.c + '). يرجى اختيار جهازين من نفس الفئة.</span></div>';
    wrap.style.display = 'block';
    return;
  }
  
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
      
      if(val === '' || val === 'متاح' || val === 'متوفر') {
          let fabMatch = getFabBenefit(key);
          if(fabMatch && typeof FAB !== 'undefined') {
              let fObj = FAB.find(x => x.f === fabMatch);
              if(fObj) {
                  val = `<div style="font-size:12px; color:#0A2540; line-height:1.4;"><span style="color:#0B6E6E; font-weight:700;">متوفر:</span> ${fObj.b}</div>`;
              } else {
                  val = '<span style="color:#166534; font-weight:600;">متوفر</span>';
              }
          } else {
              val = '<span style="color:#166534; font-weight:600;">متوفر</span>';
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
    // If not found, use a clean empty indicator instead of Arabic text to avoid garbling
    let v1 = s1[k] || '-';
    let v2 = s2[k] || '-';
    
    // Check if the original string contained corrupted text from previous script and fix it
    if(v1.includes('ØºÙŠØ± Ù…ØªÙˆÙ Ø±') || v1.includes('ØºÙŠØ± Ù…ØªÙˆÙ Ø±')) v1 = '-';
    if(v2.includes('ØºÙŠØ± Ù…ØªÙˆÙ Ø±') || v2.includes('ØºÙŠØ± Ù…ØªÙˆÙ Ø±')) v2 = '-';
    if(v1.includes('غير متوفر')) v1 = '-';
    if(v2.includes('غير متوفر')) v2 = '-';
    
    let highlight1 = false;
    let highlight2 = false;
    
    let isSpec1Avail = v1 !== '-';
    let isSpec2Avail = v2 !== '-';
    
    if(k.includes('سعة') || k.includes('حجم')) {
        let n1 = parseFloat(v1) || 0;
        let n2 = parseFloat(v2) || 0;
        if(n1 > n2) { highlight1 = true; p1Advantages.push('سعة أكبر (' + v1 + ')'); p1Score++; }
        if(n2 > n1) { highlight2 = true; p2Advantages.push('سعة أكبر (' + v2 + ')'); p2Score++; }
    } else if (isSpec1Avail && !isSpec2Avail) {
        highlight1 = true; p1Score++; p1Advantages.push(k);
    } else if (isSpec2Avail && !isSpec1Avail) {
        highlight2 = true; p2Score++; p2Advantages.push(k);
    } else {
        if(v1.includes('انفرتر') || v1.includes('إنفرتر')) { highlight1 = true; p1Score+=2; if(!p1Advantages.includes('موتور إنفرتر')) p1Advantages.push('موتور إنفرتر (موفر للكهرباء)'); }
        if(v2.includes('انفرتر') || v2.includes('إنفرتر')) { highlight2 = true; p2Score+=2; if(!p2Advantages.includes('موتور إنفرتر')) p2Advantages.push('موتور إنفرتر (موفر للكهرباء)'); }
        if(v1.includes('نوفروست')) { highlight1 = true; p1Score++; }
        if(v2.includes('نوفروست')) { highlight2 = true; p2Score++; }
    }
    
    const diffClass = (s1[k] !== s2[k]) ? 'diff-row' : '';
    
    let cell1 = v1;
    if (v1 === '-') {
        cell1 = '<span style="color:#CBD5E1; font-weight:bold;">-</span>';
    } else if (highlight1) {
        cell1 = `<div style="background:#E6F4F4; padding:8px; border-radius:6px; border:1px solid #0B6E6E; box-shadow: 0 2px 4px rgba(11,110,110,0.1);"><span style="color:#0B6E6E; float:left; font-size:16px;">★</span>${v1}</div>`;
    }
    
    let cell2 = v2;
    if (v2 === '-') {
        cell2 = '<span style="color:#CBD5E1; font-weight:bold;">-</span>';
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
"@

$regex = '(?s)window\.runSmartCompare\s*=\s*function\(\)\s*\{.*?\n\};'
$html = $html -replace $regex, $newCompare

# Write back using .NET to preserve UTF8 without BOM issues if possible, but writeAllText is safe.
$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText($htmlPath, $html, $utf8NoBom)
Write-Output "Successfully updated Smart Compare logic with .NET encoding."
