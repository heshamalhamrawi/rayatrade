import sys
with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = -1
for i, line in enumerate(lines):
    if 'id="sec-protocols"' in line:
        start_idx = i
        break

if start_idx == -1:
    print("sec-protocols not found")
    sys.exit(0)

balance = 0
for i in range(start_idx, len(lines)):
    line = lines[i]
    balance += line.count("<div") - line.count("</div")
    if balance == 0:
        print(f"Balanced at line {i+1}")
        break

print(f"Final balance: {balance}")
