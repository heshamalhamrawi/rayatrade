const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(
    /return `\<div class="cbot-empty"\>تواصل مع هشام الغمراوى لمناقشة طلبك\.<\/div\>`;/g,
    'return `<div class="cbot-empty">عذراً طلبك غير متاح. برجاء التواصل مع هشام الغمراوى</div>`;'
);

content = content.replace(
    /عذراً طلبك غير متاح\. لا يمكن خلط أجهزة من فئات مختلفة في نفس الطلب\./g,
    'عذراً طلبك غير متاح. لا يمكن خلط أجهزة من فئات مختلفة في نفس الطلب. برجاء التواصل مع هشام الغمراوى'
);

content = content.replace(
    /عذراً طلبك غير متاح\. لا توجد أجهزة تجمع بين مواصفات <b>\$\{esc2\(cat\)\}<\/b> وميزة <b>\$\{esc2\(bestGlobal\.item\.f\)\}<\/b>\./g,
    'عذراً طلبك غير متاح. لا توجد أجهزة تجمع بين مواصفات <b>${esc2(cat)}</b> وميزة <b>${esc2(bestGlobal.item.f)}</b>. برجاء التواصل مع هشام الغمراوى'
);

content = content.replace(
    /عذراً طلبك غير متاح\. لم نتمكن من العثور على أجهزة تطابق <b>\$\{esc2\(q\)\}<\/b>\./g,
    'عذراً طلبك غير متاح. لم نتمكن من العثور على أجهزة تطابق <b>${esc2(q)}</b>. برجاء التواصل مع هشام الغمراوى'
);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Fallbacks updated successfully!');
