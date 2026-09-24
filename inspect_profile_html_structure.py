with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
scripts = [m.start() for m in re.finditer(r'<script', text)]
print("All script start positions:", scripts)
for pos in scripts:
    print(text[pos:pos+120])
    print("---")
