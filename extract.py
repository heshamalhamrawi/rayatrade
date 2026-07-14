import re
import json

with open('data.js', 'r', encoding='utf-8') as f:
    data = f.read()

specs = set()
for match in re.finditer(r'"d":\s*"(.*?)"', data):
    for part in match.group(1).split('|'):
        if ':' in part:
            specs.add(part.split(':')[0].strip())

with open('specs.json', 'w', encoding='utf-8') as f:
    json.dump(list(specs), f, ensure_ascii=False, indent=2)

print(f"Extracted {len(specs)} unique specs.")
