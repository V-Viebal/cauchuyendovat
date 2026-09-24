with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

print("Length of profile.html:", len(text))
idx = text.find('const profileData = {')
print(text[idx:idx+1500])
