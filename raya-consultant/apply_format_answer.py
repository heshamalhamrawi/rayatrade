import sys

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

import re

old_format_answer = re.search(r'function formatAnswer\(item, question\) \{.*?\n\}', content, re.DOTALL)
if old_format_answer:
    new_format_answer = """function formatAnswer(item, question) {
  return item.content;
}"""
    content = content.replace(old_format_answer.group(0), new_format_answer)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully.")
else:
    print("Could not find formatAnswer")
