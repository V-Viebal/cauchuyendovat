import os, re

# Update header submit button in pages to link to /signup "Đăng ký hồ sơ"
pages_dir = 'mirrored_pages'
count = 0
for fname in os.listdir(pages_dir):
    if fname.endswith('.html'):
        fpath = os.path.join(pages_dir, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            c = f.read()
        
        # Replace header buttons pointing to /login to /login, and "Gửi một đồ vật" or other to "Đăng ký hồ sơ"
        new_c = c
        if 'href="/login">Đăng nhập' in new_c:
            # Add or update action to have both Login & Signup or proper link
            pass
        
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    des_text = f.read()

# Replace <a class="submit-button header-submit" href="/login">Đăng nhập ... with href="/signup">Đăng ký hồ sơ
des_text = des_text.replace('href="/login">Đăng nhập', 'href="/signup">Đăng ký hồ sơ')
with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
    f.write(des_text)

with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    obj_text = f.read()
obj_text = obj_text.replace('href="/login">Đăng nhập', 'href="/signup">Đăng ký hồ sơ')
with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
    f.write(obj_text)

print("Updated header links on designers and objects pages!")
