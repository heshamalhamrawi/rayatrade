$content = Get-Content 'index.html' -Raw -Encoding UTF8

$originalHtml = @"
  <!-- Toolbar -->
  <div class="toolbar">
    <div class="result-txt" id="resultTxt">جاري التهيئة…</div>
    <div class="view-tabs">
      <button class="vtab on" id="tFAB"      onclick="setView('fab')">📚 FAB</button>
      <button class="vtab"    id="tProducts"  onclick="setView('products')">📦 منتجات</button>
      <button class="vtab"    id="tCross"     onclick="setView('cross')">🔀 Cross-Sell</button>
      <button class="vtab"    id="tUp"        onclick="setView('up')">⬆️ Upsell</button>
      <button class="vtab"    id="tManual"    onclick="setView('manual')">📖 دليل المستشار</button>
      
    </div>
  </div>
"@

$newHtml = @"
  <!-- Toolbar -->
  <div class="toolbar">
    <div class="view-tabs">
      <button class="vtab on" id="tFAB"      onclick="setView('fab')">📚 FAB</button>
      <button class="vtab"    id="tProducts"  onclick="setView('products')">📦 منتجات</button>
      <button class="vtab"    id="tCross"     onclick="setView('cross')">🔀 Cross-Sell</button>
      <button class="vtab"    id="tUp"        onclick="setView('up')">⬆️ Upsell</button>
      <button class="vtab"    id="tManual"    onclick="setView('manual')">📖 دليل المستشار</button>
      
    </div>
    <div class="result-txt" id="resultTxt">جاري التهيئة…</div>
  </div>
"@

$content = $content.Replace($originalHtml, $newHtml)

Set-Content 'index.html' -Value $content -Encoding UTF8
