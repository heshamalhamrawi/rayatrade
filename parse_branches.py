import json

branches = []
with open('branches.tsv', 'r', encoding='utf-8') as f:
    headers = f.readline().strip().split('\t')
    for line in f:
        row = line.strip('\n').split('\t')
        if len(row) >= 10:
            branch = {
                "arabic_name": row[0].strip(),
                "english_name": row[1].strip(),
                "region": row[5].strip(),
                "area": row[6].strip(),
                "arabic_address": row[8].strip(),
                "location": row[9].strip()
            }
            branches.append(branch)

with open('branches_data.js', 'w', encoding='utf-8') as f:
    f.write('const branchesData = ' + json.dumps(branches, ensure_ascii=False, indent=4) + ';')
