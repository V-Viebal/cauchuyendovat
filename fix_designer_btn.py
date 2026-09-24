with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Inspect around 'Mở hồ sơ'
idx = text.find('?`Mở hồ sơ`')
print("Snippet:", text[idx-100:idx+30])

# Replace the condition so that any designer with a profile page gets `Mở hồ sơ`
target = '||e.id===`nguyen-cam-chau`?`Mở hồ sơ`:`Theo dõi cộng đồng`'
replacement = '||e.id===`nguyen-cam-chau`||e.id===`duy-khanh`?`Mở hồ sơ`:`Theo dõi cộng đồng`'

assert target in text, "target string not found"
text = text.replace(target, replacement)

with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated designer-directory chunk!")
