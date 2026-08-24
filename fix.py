path = 'c:/Users/hesham_elghamrawy/.gemini/antigravity/scratch/raya-consultant/index.html'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:4457] + [
    "function escapeRe(str) {\n",
    "  return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');\n",
    "}\n"
] + lines[4462:]

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
