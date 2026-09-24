with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# search for buttons / onclicks inside profile.html
import re
onclicks = re.findall(r'onclick=[\"\']([^\"\']+)[\"\']', text)
for oc in set(onclicks):
    print(" -", oc)
