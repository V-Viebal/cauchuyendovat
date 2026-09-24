with open('mirrored_pages/designers__alo-furniture-design.html', 'r', encoding='utf-8') as f:
    text = f.read()

print("File len:", len(text))
idx = text.find('<h1>')
print("Title in designers__alo-furniture-design.html:")
print(text[idx-200:idx+300])
