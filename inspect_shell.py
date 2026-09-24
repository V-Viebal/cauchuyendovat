with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('submit-button')
print(text[idx-40:idx+350])
