with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('profile-pill-link')
print(text[idx-150:idx+450])
