with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Remove the switcher bar completely
import re
text = re.sub(r'<!-- Account Simulation Switcher bar -->.*?<div class="profile-mode-bar">.*?</div>\s*</div>', '', text, flags=re.DOTALL)

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Removed profile-mode-bar from profile.html!")
