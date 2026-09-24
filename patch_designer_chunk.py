with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'e.id===`truong-huynh-thoai`?`/designers/truong-huynh-thoai`:'
replacement = 'e.id===`truong-huynh-thoai`?`/designers/truong-huynh-thoai`:e.id===`huynh-le-phuong-uyen`?`/designers/huynh-le-phuong-uyen`:'

btn_target = '||e.id===`truong-huynh-thoai`||e.id===`designer-02`?`Mở hồ sơ`:'
btn_replacement = '||e.id===`truong-huynh-thoai`||e.id===`huynh-le-phuong-uyen`||e.id===`designer-02`?`Mở hồ sơ`:'

assert target in text, "target not found"
assert btn_target in text, "btn_target not found"

text = text.replace(target, replacement)
text = text.replace(btn_target, btn_replacement)

with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully patched designer-directory-OAAyNLdH.js!')
