with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<div class="profile-card-top">')
print(text[idx:idx+1500])
