# 1. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add designers: Chung & Chau
target_a = 'photoLabel:`Ảnh chân dung / hồ sơ cung cấp`}'
chung_chau_des = ',{id:`nguyen-ngoc-chung-nguyen-cam-chau`,name:`Nguyễn Ngọc Chung & Nguyễn Cẩm Châu`,entityType:`Cá nhân`,discipline:`Furniture & Product Designers`,location:`Việt Nam · HMA 2026`,bio:`Bộ đôi tác giả của Nhong Nhong — theo đuổi triết lý thiết kế bền vững, tinh gọn và nhân văn, kết nối các thế hệ trong gia đình qua từng giai đoạn lớn khôn.`,specialties:[`Kids Furniture`,`Rocking Chair`,`Coffee Table`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Tân Thành Furniture`,icon:`furniture`,tone:`lime`,photo:`/chung-va-chau-duo-portrait.jpg`,photoLabel:`Ảnh chân dung / HMA 2026`}'

if 'nguyen-ngoc-chung-nguyen-cam-chau' not in text:
    idx_a = text.rfind(target_a)
    assert idx_a != -1, "Cannot find target_a"
    end_a = idx_a + len(target_a)
    text = text[:end_a] + chung_chau_des + text[end_a:]

# Add object: Nhong Nhong
target_d = 'href:`/objects/ban-mangthit`}'
nhong_nhong_obj = ',{id:`nhong-nhong`,code:`Object Profile / 010`,name:`Nhong Nhong`,type:`Ghế bập bênh & Bàn trà`,brand:`Ngọc Chung & Cẩm Châu`,origin:`Việt Nam`,excerpt:`Xóa nhòa ranh giới giữa món đồ chơi trẻ em và món nội thất tổ ấm — biến hóa từ ghế bập bênh thành ghế stool rồi trở thành bàn trà trang nhã.`,filter:`Ghế bập bênh`,status:`Hoa Mai Design Award 2026`,tone:`lime`,thumbnail:`/nhong-nhong-main.jpg`,thumbnailAlt:`Nhong Nhong — sản phẩm của Ngọc Chung & Cẩm Châu`,thumbnailLabel:`Ảnh sản phẩm / HMA 2026`,href:`/objects/nhong-nhong`}'

if 'nhong-nhong' not in text:
    idx_d = text.find(target_d)
    assert idx_d != -1, "Cannot find target_d"
    end_d = idx_d + len(target_d)
    text = text[:end_d] + nhong_nhong_obj + text[end_d:]

# Add search term
target_f = ',f=['
nhong_term = '{terms:[`nhong nhong`,`nguyễn ngọc chung`,`nguyễn cẩm châu`,`nguyen ngoc chung`,`nguyen cam chau`,`tân thành furniture`,`bập bênh`],title:`Nhong Nhong`,subtitle:`Object Profile / 010 · Chung & Châu · Đa năng`,status:`Đã có hồ sơ trong Monos`,detail:`Sản phẩm nội thất đa năng chuyển đổi từ ghế bập bênh sang bàn trà, tham dự HMA 2026.`},'

if 'nhong nhong' not in text.lower():
    idx_f = text.find(target_f)
    assert idx_f != -1, "Cannot find target_f"
    text = text[:idx_f + len(target_f)] + nhong_term + text[idx_f + len(target_f):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated monos-data for Nhong Nhong!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

target_chunk_des = 'e.id===`tran-thao-nhien`?`/designers/tran-thao-nhien`:'
replace_chunk_des = 'e.id===`tran-thao-nhien`?`/designers/tran-thao-nhien`:e.id===`nguyen-ngoc-chung-nguyen-cam-chau`?`/designers/nguyen-ngoc-chung-nguyen-cam-chau`:'

btn_chunk_des = '||e.id===`tran-thao-nhien`||e.id===`designer-02`?`Mở hồ sơ`:'
btn_replace_des = '||e.id===`tran-thao-nhien`||e.id===`nguyen-ngoc-chung-nguyen-cam-chau`||e.id===`designer-02`?`Mở hồ sơ`:'

if 'nguyen-ngoc-chung-nguyen-cam-chau' not in chunk_des:
    chunk_des = chunk_des.replace(target_chunk_des, replace_chunk_des)
    chunk_des = chunk_des.replace(btn_chunk_des, btn_replace_des)
    with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
        f.write(chunk_des)
    print("Updated designer-directory chunk for Chung & Chau!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

chung_chau_card = '''<article class="designer-card designer-card-lime" id="nguyen-ngoc-chung-nguyen-cam-chau"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/chung-va-chau-duo-portrait.jpg" alt="Chân dung Nguyễn Ngọc Chung &amp; Nguyễn Cẩm Châu" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · Tân Thành Furniture</span></div><div class="designer-index">1<!-- -->2<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Ngọc Chung &amp; Nguyễn Cẩm Châu</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Product Designers</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Bộ đôi tác giả của Nhong Nhong — theo đuổi triết lý thiết kế bền vững, tinh gọn và nhân văn, kết nối các thế hệ trong gia đình qua từng giai đoạn lớn khôn.</p><div class="designer-tags"><span>Kids Furniture</span><span>Rocking Chair</span><span>Coffee Table</span><span>HMA 2026</span></div><a class="card-link" href="/designers/nguyen-ngoc-chung-nguyen-cam-chau">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'nguyen-ngoc-chung-nguyen-cam-chau' not in html_des:
    target_nhien = 'id="tran-thao-nhien"'
    idx_n = html_des.find(target_nhien)
    end_art = html_des.find('</article>', idx_n) + len('</article>')
    html_des = html_des[:end_art] + chung_chau_card + html_des[end_art:]
    html_des = html_des.replace('12<!-- --> hồ sơ đang hiển thị', '13<!-- --> hồ sơ đang hiển thị')
    html_des = html_des.replace('10<!-- --> cá nhân', '11<!-- --> cá nhân')
    with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
        f.write(html_des)
    print("Updated mirrored_pages/designers.html for Chung & Chau!")

# 4. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    html_obj = f.read()

nhong_card = '''<article class="object-card object-card-lime"><div class="object-thumbnail has-image"><img src="/nhong-nhong-main.jpg" alt="Nhong Nhong — sản phẩm của Ngọc Chung &amp; Cẩm Châu" loading="lazy"/><span>HMA 2026 / Tân Thành</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->HMA 2026 · Tân Thành Furniture</span></div><span class="object-code">Object Profile / 010</span><h3>Nhong Nhong</h3><div class="object-meta"><strong>Đa năng · Bập bênh / Bàn trà</strong><span>·</span>Chung &amp; Châu</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Xóa nhòa ranh giới giữa món đồ chơi trẻ em và món nội thất tổ ấm — biến đổi linh hoạt từ ghế bập bênh thành stool rồi trở thành bàn trà.</p><a class="card-link" href="/objects/nhong-nhong">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'nhong-nhong' not in html_obj:
    target_mangthit = 'href="/objects/ban-mangthit"'
    idx_m = html_obj.find(target_mangthit)
    end_art = html_obj.find('</article>', idx_m) + len('</article>')
    html_obj = html_obj[:end_art] + nhong_card + html_obj[end_art:]
    html_obj = html_obj.replace('9<!-- --> hồ sơ đang hiển thị', '10<!-- --> hồ sơ đang hiển thị')
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(html_obj)
    print("Updated mirrored_pages/objects.html for Nhong Nhong!")

# 5. Update server.py
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/objects/ban-mangthit": "objects__ban-mangthit.html",'
new_routes = '"/objects/nhong-nhong": "objects__nhong-nhong.html",\n    "/designers/nguyen-ngoc-chung-nguyen-cam-chau": "designers__nguyen-ngoc-chung-nguyen-cam-chau.html",'

if 'nhong-nhong' not in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes for Nhong Nhong!")
