with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
scripts = re.findall(r'<script[^>]*>(.*?)</script>', text, re.DOTALL)
print("Scripts count in profile.html:", len(scripts))
for i, s in enumerate(scripts):
    print(f"--- Script {i} ---")
    print(s[:300])

external_scripts = re.findall(r'<script[^>]*src=[\"\']([^\"\']+)[\"\']', text)
print("External scripts:", external_scripts)
