with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function logout')
print(text[idx:idx+400])
