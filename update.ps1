$html = Get-Content -Path "index.html" -Raw -Encoding UTF8

# Task 1: Add new sub-tab and content to Protocols
$newTab = '<div class="guest-step" onclick="showSubProtocolTab(''new_owner'', this)" style="cursor:pointer; font-size:12px; padding:10px;">تأهيل الجديد</div>'
$tabRegex = '(<div class="guest-step" onclick="showSubProtocolTab\(''dict'', this\)".*?</div>)'
$html = $html -replace $tabRegex, "`$1`n                $newTab"

$newContent = @'
              <!-- Content for new_owner -->
              <div id="sub-protocol-new_owner" class="sub-protocol-tab-content" style="display:none;">
<div class="subsection" style="margin-top:16px;">
  <div class="subsection-title">بروتوكول تأهيل صاحب البيت الجديد</div>
  
  <div class="do-dont-grid" style="margin-bottom:20px;">
    <!-- Bank Deposit -->
    <div class="dont-box" style="border-top:4px solid #ef4444; background:#fef2f2;">
      <span class="box-label" style="color:#b91c1c;">الإيداع البنكي</span>
      <div style="text-align:center; margin:10px 0;">
        <img src="C:\Users\hesham_elghamrawy\.gemini\antigravity-ide\brain\f2087290-8943-447f-bb52-1de24e0db064\media__1784631248507.png" style="max-width:100%; border-radius:8px;" alt="الإيداع البنكي">
      </div>
      <ul style="margin:5px 0 0 20px; padding:0; color:#991b1b; font-weight:bold;">
        <li>ممنوع عمل الإيداعات البنكية في أول 6 أشهر من العمل.</li>
      </ul>
    </div>
    
    <!-- Branch Opening -->
    <div class="do-box" style="border-top:4px solid #3b82f6; background:#eff6ff;">
      <span class="box-label" style="color:#1d4ed8;">فتح الفرع (المناطق)</span>
      <ul style="margin:5px 0 10px 20px; padding:0; color:#1e3a8a; font-weight:bold;">
        <li>لو إنت موظف جديد (0-6 أشهر)، ممنوع تفتح الفرع منفرداً.</li>
        <li>الفتح بمرافقة زميل أقدم (6+ أشهر).</li>
      </ul>
    </div>
  </div>

  <div class="info-row" style="background:#22c55e; color:white; border:none;"><span class="info-badge" style="font-size:16px; color:white; border:none; width:100%; text-align:center;">التدرج في المسئولية يضمن دقة العمل ويحمي الجميع.</span></div>
</div>
              </div>
'@

$contentRegex = '(?s)(<div id="sub-protocol-dict" class="sub-protocol-tab-content" style="display:none;">.*?</div>\s*</div>)'
$html = $html -replace $contentRegex, "`$1`n$newContent"


# Task 2: Separate Chatbot
# 1. Update Layout to 1fr
$layoutRegex = 'grid-template-columns:\s*1fr\s+420px;'
$html = $html -replace $layoutRegex, 'grid-template-columns: 1fr;'

# 2. Extract Chatbot HTML
$chatPanelRegex = '(?s)(<!-- RIGHT PANEL: AI CHATBOT -->.*?</div><!-- end chat-panel -->)'
if ($html -match $chatPanelRegex) {
    $chatPanelHtml = $matches[1]
    $html = $html -replace $chatPanelRegex, ''
    
    # Wrap in vChat tab
    $chatTabHtml = @"
  <div id="vChat" style="display:none; padding: 20px;">
    $chatPanelHtml
  </div>
"@
    # Inject vChat before vManual
    $vManualRegex = '(<div id="vManual" style="display:none">)'
    $html = $html -replace $vManualRegex, "$chatTabHtml`n  `$1"
}

# 3. Add Tab Button
$tabBtnRegex = '(<button class="vtab active" id="tManual" onclick="setView\(''manual''\)">.*?)</button>'
$newTabBtn = '<button class="vtab" id="tChat" onclick="setView(''chat'')">🤖 شات بوت دليل المستشار</button>'
$html = $html -replace $tabBtnRegex, "`$1</button>`n  $newTabBtn"

# 4. Update VIEW_IDS and TAB_IDS
$viewIdsRegex = '(const VIEW_IDS=\{[^}]*manual:''vManual'')\}'
$html = $html -replace $viewIdsRegex, "$1,chat:'vChat'}"

$tabIdsRegex = '(const TAB_IDS=\{[^}]*manual:''tManual'')\}'
$html = $html -replace $tabIdsRegex, "$1,chat:'tChat'}"

# Also make Chatbot full width in its new tab
$chatPanelStyleRegex = '\.chat-panel\s*\{(?s)(.*?)\}'
$html = $html -replace $chatPanelStyleRegex, ".chat-panel { `$1 width: 100%; height: calc(100vh - 100px); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md); }"


Set-Content -Path "index.html" -Value $html -Encoding UTF8
Write-Output "Done updating."
