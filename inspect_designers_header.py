with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('logout-link-btn')
print(text[idx-50:idx+450])
