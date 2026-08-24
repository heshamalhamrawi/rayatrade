$lines = Get-Content 'index.html' -Encoding UTF8

$viewTabsStart = $lines[498]
$b1 = $lines[499]
$b2 = $lines[500]
$b3 = $lines[501]
$b4 = $lines[502]
$b5 = $lines[503]
$empty = $lines[504]
$viewTabsEnd = $lines[505]
$resultTxtLine = $lines[506]

# result-txt was at index 506
# We want to put result-txt first
$lines[498] = $resultTxtLine
$lines[499] = $viewTabsStart
$lines[500] = $b1
$lines[501] = $b2
$lines[502] = $b3
$lines[503] = $b4
$lines[504] = $b5
$lines[505] = $empty
$lines[506] = $viewTabsEnd

Set-Content 'index.html' -Value $lines -Encoding UTF8
