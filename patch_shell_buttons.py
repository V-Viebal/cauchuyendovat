with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'r', encoding='utf-8') as f:
    text = f.read()

# In monos-shell-DESWxsT-.js:
# Currently: (0,h.jsxs)(`a`,{className:`submit-button header-submit`,href:`/login`,children:[`Đăng nhập `,(0,h.jsx)(l,{size:16,strokeWidth:1.8})]})
# Let's provide BOTH "Đăng ký" and "Đăng nhập" or a clear "Đăng ký hồ sơ" button in the header!

target = '(0,h.jsxs)(`a`,{className:`submit-button header-submit`,href:`/login`,children:[`Đăng nhập `,(0,h.jsx)(l,{size:16,strokeWidth:1.8})]})'
replacement = '(0,h.jsxs)(`a`,{className:`login-link`,href:`/login`,style:{fontSize:`13px`,fontWeight:`600`,color:`var(--ink)`,marginRight:`10px`,textDecoration:`none`},children:[`Đăng nhập`]}),(0,h.jsxs)(`a`,{className:`submit-button header-submit`,href:`/signup`,children:[`Đăng ký hồ sơ `,(0,h.jsx)(i,{size:15,strokeWidth:1.8})]})'

assert target in text, "target not found in monos-shell"
text = text.replace(target, replacement)

with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-shell-DESWxsT-.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated monos-shell to show both Đăng nhập & Đăng ký hồ sơ!")
