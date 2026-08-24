$lines = Get-Content 'index.html' -Encoding UTF8

$resultTxtLine = $lines[498]
$viewTabsLine = $lines[499]
$b1 = $lines[500]
$b2 = $lines[501]
$b3 = $lines[502]
$b4 = $lines[503]
$b5 = $lines[504]
$empty = $lines[505]
$viewTabsEnd = $lines[506]

# result-txt was at index 498
# view-tabs start at 499, end at 506

# We want to put view-tabs first, then result-txt
$lines[498] = $viewTabsLine
$lines[499] = $b1
$lines[500] = $b2
$lines[501] = $b3
$lines[502] = $b4
$lines[503] = $b5
$lines[504] = $empty
$lines[505] = $viewTabsEnd
$lines[506] = $resultTxtLine

Set-Content 'index.html' -Value $lines -Encoding UTF8
