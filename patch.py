with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace(
    '''<button class="vtab" id="tManual" onclick="setView('manual')">📖 دليل المستشار</button>''',
    '''<button class="vtab" id="tManual" onclick="setView('manual')">📖 دليل المستشار</button>\n        <button class="vtab" id="tDiff" onclick="setView('diff')">⚖️ الفروقات</button>'''
)

text = text.replace(
    '''<div id="vManual" style="display:none">''',
    '''<div id="vDiff" style="display:none">\n      <iframe src="دليلك للفروقات.html" style="width:100%; height:85vh; border:none; border-radius:12px; background:#fff;"></iframe>\n    </div>\n\n    <div id="vManual" style="display:none">'''
)

text = text.replace(
    "const VIEW_IDS = { fab: 'vFAB', products: 'vProducts', cross: 'vCross', up: 'vUp', manual: 'vManual' };",
    "const VIEW_IDS = { fab: 'vFAB', products: 'vProducts', cross: 'vCross', up: 'vUp', manual: 'vManual', diff: 'vDiff' };"
)
text = text.replace(
    "const TAB_IDS = { fab: 'tFAB', products: 'tProducts', cross: 'tCross', up: 'tUp', manual: 'tManual' };",
    "const TAB_IDS = { fab: 'tFAB', products: 'tProducts', cross: 'tCross', up: 'tUp', manual: 'tManual', diff: 'tDiff' };"
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(text)
print("Done")
