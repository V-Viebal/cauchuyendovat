with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace duo entry with 2 individual entries
old_entry = ',{id:`nguyen-ngoc-chung-nguyen-cam-chau`,name:`Nguyễn Ngọc Chung & Nguyễn Cẩm Châu`,entityType:`Cá nhân`,discipline:`Furniture & Product Designers`,location:`Việt Nam · HMA 2026`,bio:`Bộ đôi tác giả của Nhong Nhong — theo đuổi triết lý thiết kế bền vững, tinh gọn và nhân văn, kết nối các thế hệ trong gia đình qua từng giai đoạn lớn khôn.`,specialties:[`Kids Furniture`,`Rocking Chair`,`Coffee Table`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Tân Thành Furniture`,icon:`furniture`,tone:`lime`,photo:`/chung-va-chau-duo-portrait.jpg`,photoLabel:`Ảnh chân dung / HMA 2026`}'

chung_entry = ',{id:`nguyen-ngoc-chung`,name:`Nguyễn Ngọc Chung`,entityType:`Cá nhân`,discipline:`Furniture & Product Designer`,location:`Việt Nam · HMA 2026`,bio:`Đồng tác giả thiết kế Nhong Nhong — hướng tới các giải pháp nội thất nhân văn, tinh gọn và có khả năng biến hóa theo thời gian cùng sự lớn khôn của trẻ nhỏ.`,specialties:[`Kids Furniture`,`Rocking Chair`,`Coffee Table`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Tân Thành Furniture`,icon:`furniture`,tone:`lime`,photo:`/nguyen-ngoc-chung-portrait.jpg`,photoLabel:`Ảnh chân dung / HMA 2026`}'

chau_entry = ',{id:`nguyen-cam-chau`,name:`Nguyễn Cẩm Châu`,entityType:`Cá nhân`,discipline:`Furniture & Product Designer`,location:`Việt Nam · HMA 2026`,bio:`Đồng tác giả thiết kế Nhong Nhong — đề cao tính an lành cho sức khỏe, sự hòa nhịp thẩm mỹ và năng lực lưu giữ những kỷ niệm thiêng liêng của gia đình.`,specialties:[`Sustainable Design`,`Human-centered`,`Wood`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Tân Thành Furniture`,icon:`furniture`,tone:`terra`,photo:`/nguyen-cam-chau-portrait.jpg`,photoLabel:`Ảnh chân dung / HMA 2026`}'

assert old_entry in text, "old_entry not found in monos-data"
text = text.replace(old_entry, chung_entry + chau_entry)

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated monos-data with 2 separate profiles!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

old_chunk_route = 'e.id===`nguyen-ngoc-chung-nguyen-cam-chau`?`/designers/nguyen-ngoc-chung-nguyen-cam-chau`:'
new_chunk_route = 'e.id===`nguyen-ngoc-chung`?`/designers/nguyen-ngoc-chung`:e.id===`nguyen-cam-chau`?`/designers/nguyen-cam-chau`:'

old_chunk_btn = '||e.id===`nguyen-ngoc-chung-nguyen-cam-chau`||'
new_chunk_btn = '||e.id===`nguyen-ngoc-chung`||e.id===`nguyen-cam-chau`||'

assert old_chunk_route in chunk_des, "old_chunk_route not found"
chunk_des = chunk_des.replace(old_chunk_route, new_chunk_route)
chunk_des = chunk_des.replace(old_chunk_btn, new_chunk_btn)

with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
    f.write(chunk_des)
print("Updated designer-directory chunk!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

old_html_card = '''<article class="designer-card designer-card-lime" id="nguyen-ngoc-chung-nguyen-cam-chau"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/chung-va-chau-duo-portrait.jpg" alt="Chân dung Nguyễn Ngọc Chung &amp; Nguyễn Cẩm Châu" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · Tân Thành Furniture</span></div><div class="designer-index">1<!-- -->2<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Ngọc Chung &amp; Nguyễn Cẩm Châu</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Product Designers</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Bộ đôi tác giả của Nhong Nhong — theo đuổi triết lý thiết kế bền vững, tinh gọn và nhân văn, kết nối các thế hệ trong gia đình qua từng giai đoạn lớn khôn.</p><div class="designer-tags"><span>Kids Furniture</span><span>Rocking Chair</span><span>Coffee Table</span><span>HMA 2026</span></div><a class="card-link" href="/designers/nguyen-ngoc-chung-nguyen-cam-chau">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

new_chung_card = '''<article class="designer-card designer-card-lime" id="nguyen-ngoc-chung"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/nguyen-ngoc-chung-portrait.jpg" alt="Chân dung Nguyễn Ngọc Chung" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · Tân Thành Furniture</span></div><div class="designer-index">1<!-- -->2<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Ngọc Chung</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Product Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Đồng tác giả thiết kế Nhong Nhong — hướng tới các giải pháp nội thất nhân văn, tinh gọn và có khả năng biến hóa theo thời gian cùng sự lớn khôn của trẻ nhỏ.</p><div class="designer-tags"><span>Kids Furniture</span><span>Rocking Chair</span><span>Coffee Table</span><span>HMA 2026</span></div><a class="card-link" href="/designers/nguyen-ngoc-chung">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

new_chau_card = '''<article class="designer-card designer-card-terra" id="nguyen-cam-chau"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/nguyen-cam-chau-portrait.jpg" alt="Chân dung Nguyễn Cẩm Châu" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · Tân Thành Furniture</span></div><div class="designer-index">1<!-- -->3<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Cẩm Châu</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Product Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Đồng tác giả thiết kế Nhong Nhong — đề cao tính an lành cho sức khỏe, sự hòa nhịp thẩm mỹ và năng lực lưu giữ những kỷ niệm thiêng liêng của gia đình.</p><div class="designer-tags"><span>Sustainable Design</span><span>Human-centered</span><span>Wood</span><span>HMA 2026</span></div><a class="card-link" href="/designers/nguyen-cam-chau">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

assert old_html_card in html_des, "old_html_card not found"
html_des = html_des.replace(old_html_card, new_chung_card + new_chau_card)
html_des = html_des.replace('13<!-- --> hồ sơ đang hiển thị', '14<!-- --> hồ sơ đang hiển thị')
html_des = html_des.replace('11<!-- --> cá nhân', '12<!-- --> cá nhân')

with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
    f.write(html_des)
print("Updated mirrored_pages/designers.html!")

# 4. Update server.py ROUTE_PAGES
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/designers/nguyen-ngoc-chung-nguyen-cam-chau": "designers__nguyen-ngoc-chung-nguyen-cam-chau.html",'
new_routes = '"/designers/nguyen-ngoc-chung": "designers__nguyen-ngoc-chung.html",\n    "/designers/nguyen-cam-chau": "designers__nguyen-cam-chau.html",'

if target_srv in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes!")
