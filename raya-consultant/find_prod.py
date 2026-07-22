import json
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# content is: const AR = [...];
# we need to parse it.
json_str = content[content.find('['):content.rfind(']')+1]
try:
    data = json.loads(json_str)
    for p in data:
        if 'BT5260' in p.get('n', ''):
            print("FOUND:", p['n'])
            print("SPECS:", p.get('d', ''))
            print("TYPE:", p.get('t', ''))
            break
except Exception as e:
    print("Error:", e)
