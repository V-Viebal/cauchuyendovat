import re

# 1. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Append Tran Thao Nhien to array a (designers)
target_a = 'ng xác minh`,icon:`production`,tone:`paper`}'
nhien_designer = ',{id:`tran-thao-nhien`,name:`Trần Thảo Nhiên`,entityType:`Cá nhân`,discipline:`Furniture & Interior Designer`,location:`Việt Nam · Măng Thít`,bio:`Tác giả Bàn Console Mangthit — chuyển hóa hình thái kiến trúc lò nung gạch Măng Thít thành thiết kế bàn console đương đại với sắc đỏ ngọn lửa nung.`,specialties:[`Console Table`,`Heritage Form`,`Gỗ Tạo Hình`,`F-Studio`],filter:`Furniture`,status:`Bản vẽ kỹ thuật & F-Studio`,icon:`furniture`,tone:`terra`,photo:`/tran-thao-nhien-portrait.jpg`,photoLabel:`Ảnh chân dung / hồ sơ cung cấp`}'

if 'tran-thao-nhien' not in text:
    idx_a = text.find(target_a)
    assert idx_a != -1, "Cannot find target_a"
    end_a = idx_a + len(target_a)
    text = text[:end_a] + nhien_designer + text[end_a:]

# Append Ban Mangthit to array d (objects)
target_d = 'href:`/objects/hoa-muoi-table`}'
mangthit_obj = ',{id:`ban-mangthit`,code:`Object Profile / 009`,name:`Bàn Console Mangthit`,type:`Console Table`,brand:`Trần Thảo Nhiên`,origin:`Việt Nam`,excerpt:`Lấy cảm hứng từ hình thái kiến trúc lò gạch Măng Thít — nơi những khối hình được tạo tác bằng đôi tay và sự đo đạc cơ thể của người thợ.`,filter:`Console Table`,status:`Bản vẽ kỹ thuật & F-Studio`,tone:`terra`,thumbnail:`/ban-mangthit-main.jpg`,thumbnailAlt:`Bàn Console Mangthit — thiết kế của Trần Thảo Nhiên`,thumbnailLabel:`Ảnh sản phẩm / F-Studio`,href:`/objects/ban-mangthit`}'

if 'ban-mangthit' not in text:
    idx_d = text.find(target_d)
    assert idx_d != -1, "Cannot find target_d"
    end_d = idx_d + len(target_d)
    text = text[:end_d] + mangthit_obj + text[end_d:]

# Append search term
target_f = ',f=['
mangthit_term = '{terms:[`măng thít`,`mang thit`,`bàn console mangthit`,`trần thảo nhiên`,`tran thao nhien`,`f-studio`,`f studio`,`console`],title:`Bàn Console Mangthit`,subtitle:`Object Profile / 009 · Trần Thảo Nhiên · Console Table`,status:`Đã có hồ sơ trong Monos`,detail:`Thiết kế lấy cảm hứng từ hình thái kiến trúc lò gạch Măng Thít, sản xuất bởi F-Studio.`},'

if 'trần thảo nhiên' not in text:
    idx_f = text.find(target_f)
    assert idx_f != -1, "Cannot find target_f"
    text = text[:idx_f + len(target_f)] + mangthit_term + text[idx_f + len(target_f):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated monos-data-CNm7IGvZ.js!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

target_chunk_des = 'e.id===`huynh-le-phuong-uyen`?`/designers/huynh-le-phuong-uyen`:'
replace_chunk_des = 'e.id===`huynh-le-phuong-uyen`?`/designers/huynh-le-phuong-uyen`:e.id===`tran-thao-nhien`?`/designers/tran-thao-nhien`:'

btn_chunk_des = '||e.id===`huynh-le-phuong-uyen`||e.id===`designer-02`?`Mở hồ sơ`:'
btn_replace_des = '||e.id===`huynh-le-phuong-uyen`||e.id===`tran-thao-nhien`||e.id===`designer-02`?`Mở hồ sơ`:'

if 'tran-thao-nhien' not in chunk_des:
    chunk_des = chunk_des.replace(target_chunk_des, replace_chunk_des)
    chunk_des = chunk_des.replace(btn_chunk_des, btn_replace_des)
    with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
        f.write(chunk_des)
    print("Updated designer-directory chunk!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

nhien_card = '''<article class="designer-card designer-card-terra" id="tran-thao-nhien"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/tran-thao-nhien-portrait.jpg" alt="Chân dung Trần Thảo Nhiên" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->Bản vẽ kỹ thuật &amp; F-Studio</span></div><div class="designer-index">1<!-- -->1<!-- --> / COMMUNITY PROFILE</div><h2>Trần Thảo Nhiên</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Interior Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Tác giả Bàn Console Mangthit — chuyển dịch hình thái kiến trúc lò nung gạch Măng Thít thành thiết kế bàn console đương đại với sắc đỏ của ngọn lửa nung.</p><div class="designer-tags"><span>Console Table</span><span>Măng Thít</span><span>Gỗ tạo hình</span><span>F-Studio</span></div><a class="card-link" href="/designers/tran-thao-nhien">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'tran-thao-nhien' not in html_des:
    target_uyen = 'id="huynh-le-phuong-uyen"'
    idx_u = html_des.find(target_uyen)
    end_art = html_des.find('</article>', idx_u) + len('</article>')
    html_des = html_des[:end_art] + nhien_card + html_des[end_art:]
    html_des = html_des.replace('11<!-- --> hồ sơ đang hiển thị', '12<!-- --> hồ sơ đang hiển thị')
    html_des = html_des.replace('9<!-- --> cá nhân', '10<!-- --> cá nhân')
    with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
        f.write(html_des)
    print("Updated mirrored_pages/designers.html!")

# 4. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    html_obj = f.read()

mangthit_card = '''<article class="object-card object-card-terra"><div class="object-thumbnail has-image"><img src="/ban-mangthit-main.jpg" alt="Bàn Console Mangthit — thiết kế của Trần Thảo Nhiên" loading="lazy"/><span>Bản vẽ kỹ thuật &amp; F-Studio</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->Bản vẽ kỹ thuật &amp; F-Studio</span></div><span class="object-code">Object Profile / 009</span><h3>Bàn Console Mangthit</h3><div class="object-meta"><strong>Console Table</strong><span>·</span>Trần Thảo Nhiên</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Lấy cảm hứng từ hình thái kiến trúc lò gạch Măng Thít và dấu ấn đo đạc thủ công của con người — hoàn thiện với sắc đỏ ngọn lửa nung.</p><a class="card-link" href="/objects/ban-mangthit">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'ban-mangthit' not in html_obj:
    target_hoa = 'href="/objects/hoa-muoi-table"'
    idx_h = html_obj.find(target_hoa)
    end_art = html_obj.find('</article>', idx_h) + len('</article>')
    html_obj = html_obj[:end_art] + mangthit_card + html_obj[end_art:]
    html_obj = html_obj.replace('8<!-- --> hồ sơ đang hiển thị', '9<!-- --> hồ sơ đang hiển thị')
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(html_obj)
    print("Updated mirrored_pages/objects.html!")

# 5. Update server.py ROUTE_PAGES
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/objects/hoa-muoi-table": "objects__hoa-muoi-table.html",'
new_routes = '"/objects/ban-mangthit": "objects__ban-mangthit.html",\n    "/designers/tran-thao-nhien": "designers__tran-thao-nhien.html",'

if 'ban-mangthit' not in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes!")
