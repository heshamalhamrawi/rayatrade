$path = "c:\Users\hesham_elghamrawy\.gemini\antigravity\scratch\raya-consultant\index.html"
$content = Get-Content $path -Raw
$lines = $content -split "`r?`n"
$newLines = @()
$newLines += $lines[0..4456]
$newLines += 'function escapeRe(str) {'
$newLines += '  return str.replace(/[.*+?^${}()|[\]\\]/g, ''\$&'');'
$newLines += '}'
$newLines += $lines[4462..($lines.Length - 1)]

[IO.File]::WriteAllLines($path, $newLines, [System.Text.Encoding]::UTF8)
