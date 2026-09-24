with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx1 = text.find('<div class="profile-mode-bar">')
if idx1 != -1:
    idx2 = text.find('<div class="profile-container">', idx1)
    text = text[:idx1] + text[idx2:]

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Direct cut of profile-mode-bar succeeded!")
