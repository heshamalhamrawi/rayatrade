$path = "c:\Users\hesham_elghamrawy\.gemini\antigravity\scratch\raya-consultant\index.html"
$text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$win1252 = [System.Text.Encoding]::GetEncoding(1252)
$utf8Bytes = $win1252.GetBytes($text)
$originalText = [System.Text.Encoding]::UTF8.GetString($utf8Bytes)
[System.IO.File]::WriteAllText($path, $originalText, [System.Text.Encoding]::UTF8)
