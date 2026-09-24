with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('syncAuthHeader')
print("syncAuthHeader script in designers.html:")
print(text[idx-50:idx+650])
