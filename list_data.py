with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:`([^`]+)`,name:`([^`]+)`', text)
print("Total entities with id & name:", len(matches))
for item in matches:
    print(" -", item[0], "=>", item[1])
