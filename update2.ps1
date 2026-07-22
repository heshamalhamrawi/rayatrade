$html = Get-Content -Path "index.html" -Raw -Encoding UTF8

# Task 2: Separate Chatbot - Retry because of regex mismatch

# 3. Add Tab Button (if not added)
if ($html -notmatch 'id="tChat"') {
    $tabBtnRegex = '(<button class="vtab"\s*id="tManual"\s*onclick="setView\(''manual''\)">.*?</button>)'
    $newTabBtn = '<button class="vtab" id="tChat" onclick="setView(''chat'')">🤖 الشات بوت</button>'
    $html = $html -replace $tabBtnRegex, "`$1`n      $newTabBtn"
}

# 4. Update VIEW_IDS and TAB_IDS
if ($html -notmatch 'chat:''vChat''') {
    $viewIdsRegex = '(const VIEW_IDS=\{[^}]*manual:''vManual'')\}'
    $html = $html -replace $viewIdsRegex, "$1,chat:'vChat'}"
}

if ($html -notmatch 'chat:''tChat''') {
    $tabIdsRegex = '(const TAB_IDS=\{[^}]*manual:''tManual'')\}'
    $html = $html -replace $tabIdsRegex, "$1,chat:'tChat'}"
}

Set-Content -Path "index.html" -Value $html -Encoding UTF8
Write-Output "Done updating."
