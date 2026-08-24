$content = Get-Content 'index.html' -Raw -Encoding UTF8

$content = $content -replace '(?s)<div class="result-txt" id="resultTxt">جاري التهيئة…</div>\s*<div class="view-tabs">(.*?)</div>', '<div class="view-tabs">$1</div>
    <div class="result-txt" id="resultTxt">جاري التهيئة…</div>'

Set-Content 'index.html' -Value $content -Encoding UTF8
