$html = Get-Content -Path "index.html" -Raw -Encoding UTF8

# 1. Fix VIEW_IDS and TAB_IDS
$html = $html -replace "(?s),chat:'vChat'\};\s*,chat:'tChat'\};", "const VIEW_IDS={fab:'vFAB',products:'vProducts',cross:'vCross',up:'vUp',manual:'vManual'};`nconst TAB_IDS={fab:'tFAB',products:'tProducts',cross:'tCross',up:'tUp',manual:'tManual'};"

# 2. Remove tChat button
$html = $html -replace '<button class="vtab" id="tChat" onclick="setView\(''chat''\)">🤖 الشات بوت</button>', ''

# 3. Move chatPanel back to vManualInner app-layout
# In update.ps1 I did:
# $html = $html -replace '(<div id="vManual" style="display:none">)', "$chatTabHtml`n  `$1"
# So the Chatbot is right BEFORE <div id="vManual" style="display:none">
# Let's extract it.
$chatTabRegex = '(?s)<div id="vChat" style="display:none; padding: 20px;">\s*(<!-- RIGHT PANEL: AI CHATBOT -->.*?</div><!-- end chat-panel -->)\s*</div>'
if ($html -match $chatTabRegex) {
    $chatPanelHtml = $matches[1]
    # Remove it from its current location
    $html = $html -replace $chatTabRegex, ""
    
    # Put it back right after <!-- end manual-panel -->
    $targetLocation = '</div><!-- end manual-panel -->'
    $html = $html -replace $targetLocation, "$targetLocation`n`n  $chatPanelHtml"
}

# 4. Restore grid-template-columns and add gap
$html = $html -replace 'grid-template-columns:\s*1fr;', 'grid-template-columns: 1fr 420px;'
$html = $html -replace 'gap:\s*0;', 'gap: 24px; background: #e2e8f0;'

# 5. Fix chat-panel CSS that I broke in update.ps1
# I replaced: .chat-panel { $1 width: 100%; height: calc(100vh - 100px); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md); }
$chatStyleBroken = '(?s)\.chat-panel\s*\{\s*(.*?)\s*width: 100%; height: calc\(100vh - 100px\); border-radius: 12px; overflow: hidden; box-shadow: var\(--shadow-md\);\s*\}'
if ($html -match $chatStyleBroken) {
    # Original just had what's in $1.
    # We will add border-radius and shadow to make it clearly separated.
    $originalProps = $matches[1]
    $fixedProps = "$originalProps`n    border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border: 1px solid var(--border-color); margin: 20px 20px 20px 0; height: calc(100vh - 102px);"
    $html = $html -replace $chatStyleBroken, ".chat-panel {`n$fixedProps`n}"
}

# 6. Make sure manual-panel is also separated correctly
$html = $html -replace '\.manual-panel\s*\{(?s)(.*?)\}', ".manual-panel {`$1 border-radius: 16px; margin: 20px 0 20px 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); height: calc(100vh - 102px); }"

Set-Content -Path "index.html" -Value $html -Encoding UTF8
Write-Output "Fixed."
