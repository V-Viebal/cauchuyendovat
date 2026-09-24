with open('mirrored_pages/login.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function quickLogin')
print(text[idx:idx+800])
