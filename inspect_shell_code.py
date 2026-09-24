with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('logout-btn')
print(text[idx-100:idx+350])
