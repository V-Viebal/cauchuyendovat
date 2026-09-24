import re

# 1. Update mirrored_pages/designers__duy-khanh.html -> update full name to "Ngô Duy Khánh" and add portrait
with open('mirrored_pages/designers__duy-khanh.html', 'r', encoding='utf-8') as f:
    text_dk = f.read()

text_dk = text_dk.replace('<title>Duy Khánh — Designer Profile — Monos</title>', '<title>Ngô Duy Khánh — Designer Profile — Monos</title>')
text_dk = text_dk.replace('<h1>Duy<br/>Khánh<em>.</em></h1>', '<h1>Ngô Duy<br/>Khánh<em>.</em></h1>')
text_dk = text_dk.replace('Hồ sơ designer Duy Khánh', 'Hồ sơ designer Ngô Duy Khánh')

# Replace svg placeholder portrait with the real portrait image
old_figure = '''<figure class="phong-vinh-portrait" style="background:#f4f3ef; display:flex; align-items:center; justify-content:center;"><div style="width:100%; height:100%; min-height:280px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#ecebe5; border-radius:12px; color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg><span style="margin-top:12px; font-size:13px; font-weight:600; color:#444;">Duy Khánh / Designer</span></div><figcaption>Duy Khánh / Hồ sơ tác giả</figcaption></figure>'''

new_figure = '''<figure class="phong-vinh-portrait"><img src="/ngo-duy-khanh-portrait.jpg" alt="Chân dung designer Ngô Duy Khánh"/><figcaption>Ngô Duy Khánh / ảnh hồ sơ</figcaption></figure>'''

text_dk = text_dk.replace(old_figure, new_figure)
text_dk = text_dk.replace('src="/ban-kieu-main.jpg"', 'src="/ban-kieu-real-main.jpg"')
text_dk = text_dk.replace('src="/dragonfly-glow-main.jpg"', 'src="/dragonfly-glow-real-main.jpg"')

with open('mirrored_pages/designers__duy-khanh.html', 'w', encoding='utf-8') as f:
    f.write(text_dk)
print("Updated mirrored_pages/designers__duy-khanh.html with Ngô Duy Khánh portrait!")

# 2. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text_des = f.read()

# Replace Duy Khánh card in designers.html
old_dk_card = '''<article class="designer-card designer-card-terra" id="duy-khanh"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair" aria-hidden="true"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div></div><span class="designer-status"><span></span> <!-- -->Hồ sơ tác giả · 2 thiết kế</span></div><div class="designer-index">1<!-- -->1<!-- --> / COMMUNITY PROFILE</div><h2>Duy Khánh</h2>'''

new_dk_card = '''<article class="designer-card designer-card-terra" id="duy-khanh"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/ngo-duy-khanh-portrait.jpg" alt="Chân dung Ngô Duy Khánh" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->Hồ sơ tác giả · 2 thiết kế</span></div><div class="designer-index">1<!-- -->1<!-- --> / COMMUNITY PROFILE</div><h2>Ngô Duy Khánh</h2>'''

text_des = text_des.replace(old_dk_card, new_dk_card)
text_des = text_des.replace('Designer của Bàn Kiệu và Dragonfly Glow', 'Tác giả của Bàn Kiệu và Dragonfly Glow')

with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
    f.write(text_des)
print("Updated mirrored_pages/designers.html with Ngô Duy Khánh photo & name!")

# 3. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    text_obj = f.read()

text_obj = text_obj.replace('<span>·</span>Duy Khánh', '<span>·</span>Ngô Duy Khánh')
text_obj = text_obj.replace('src="/ban-kieu-main.jpg"', 'src="/ban-kieu-real-main.jpg"')
text_obj = text_obj.replace('src="/dragonfly-glow-main.jpg"', 'src="/dragonfly-glow-real-main.jpg"')

with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
    f.write(text_obj)
print("Updated mirrored_pages/objects.html with Ngô Duy Khánh!")

# 4. Update objects__ban-kieu.html and objects__dragonfly-glow.html with real studio photos
with open('mirrored_pages/objects__ban-kieu.html', 'r', encoding='utf-8') as f:
    text_bk = f.read()

text_bk = text_bk.replace('Duy Khánh', 'Ngô Duy Khánh')
text_bk = text_bk.replace('src="/ban-kieu-main.jpg"', 'src="/ban-kieu-real-main.jpg"')
text_bk = text_bk.replace('src="/ban-kieu-detail-1.jpg"', 'src="/ban-kieu-real-leg.jpg"')
text_bk = text_bk.replace('src="/ban-kieu-detail-2.jpg"', 'src="/ban-kieu-real-top.jpg"')
with open('mirrored_pages/objects__ban-kieu.html', 'w', encoding='utf-8') as f:
    f.write(text_bk)

with open('mirrored_pages/objects__dragonfly-glow.html', 'r', encoding='utf-8') as f:
    text_df = f.read()

text_df = text_df.replace('Duy Khánh', 'Ngô Duy Khánh')
text_df = text_df.replace('src="/dragonfly-glow-main.jpg"', 'src="/dragonfly-glow-real-main.jpg"')
text_df = text_df.replace('src="/dragonfly-glow-detail-angle.jpg"', 'src="/dragonfly-glow-real-vertical.jpg"')
text_df = text_df.replace('src="/dragonfly-glow-detail-back.jpg"', 'src="/dragonfly-glow-real-wing.jpg"')
with open('mirrored_pages/objects__dragonfly-glow.html', 'w', encoding='utf-8') as f:
    f.write(text_df)

print("Updated objects__ban-kieu.html & objects__dragonfly-glow.html with real studio photos!")

# 5. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text_data = f.read()

text_data = text_data.replace('id:`duy-khanh`,name:`Duy Khánh`', 'id:`duy-khanh`,name:`Ngô Duy Khánh`,photo:`/ngo-duy-khanh-portrait.jpg`')
text_data = text_data.replace('brand:`Duy Khánh`', 'brand:`Ngô Duy Khánh`')
text_data = text_data.replace('thumbnail:`/ban-kieu-main.jpg`', 'thumbnail:`/ban-kieu-real-main.jpg`')
text_data = text_data.replace('thumbnail:`/dragonfly-glow-main.jpg`', 'thumbnail:`/dragonfly-glow-real-main.jpg`')
text_data = text_data.replace('`ngô duy khánh`,`ngo duy khanh`,', '')
text_data = text_data.replace('{terms:[`bàn kiệu`,', '{terms:[`ngô duy khánh`,`ngo duy khanh`,`bàn kiệu`,')

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text_data)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text_data)

print("Updated monos-data for Ngô Duy Khánh!")
