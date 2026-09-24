with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
scripts = re.findall(r'<script[^>]*>(.*?)</script>', text, re.DOTALL)
print("Script 0 len:", len(scripts[0]))
# print from switchProfile onwards
idx = scripts[0].find('function switchProfile')
print(scripts[0][idx:])
