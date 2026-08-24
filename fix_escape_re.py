import os

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Revert the corrupted line 3832
bad_snippet = "في<script>function escapeRe(str) { return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'); }</script>الجهة"
good_snippet = "في الجهة"
content = content.replace(bad_snippet, good_snippet)

# Now fix the actual escapeRe
old_escape = "function escapeRe(str) {\n  return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\<iframe src=\"raya_consultant_app.html\" style=\"width:100%; height:85vh; border:none; border-radius:12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); display:block; background: #fff;\"></iframe>');\n}"
new_escape = "function escapeRe(str) {\n  return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');\n}"

content = content.replace(old_escape, new_escape)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed index.html")
