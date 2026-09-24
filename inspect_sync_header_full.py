with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('syncAuthHeader')
print(text[idx:idx+1500])
