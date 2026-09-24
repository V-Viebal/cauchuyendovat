with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# remove the CSS rule for profile-mode-bar and mode-tabs
import re
text = re.sub(r'/\* Switcher bar on top of profile \*/.*?\.mode-btn\.active\s*\{[^}]*\}', '', text, flags=re.DOTALL)

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Removed CSS for profile-mode-bar!")
