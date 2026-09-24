# 1. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add Duy Khanh to designers array 'a'
target_a = 'photoLabel:`Ảnh chân dung / HMA 2026`}'
duy_khanh_des = ',{id:`duy-khanh`,name:`Duy Khánh`,entityType:`Cá nhân`,discipline:`Furniture & Lighting Designer`,location:`Việt Nam`,bio:`Designer của Bàn Kiệu và Dragonfly Glow — chuyển hóa ký ức tập thể và rung cảm thiên nhiên thành các thiết kế cấu trúc tháo lắp thông minh.`,specialties:[`Dining Table`,`Floor Lamp`,`Cultural Memory`,`Wood & Metal`],filter:`Furniture`,status:`Hồ sơ tác giả · 2 thiết kế`,icon:`furniture`,tone:`terra`}'

if 'duy-khanh' not in text:
    idx_a = text.rfind(target_a)
    assert idx_a != -1, "Cannot find target_a"
    end_a = idx_a + len(target_a)
    text = text[:end_a] + duy_khanh_des + text[end_a:]

# Add Ban Kieu and Dragonfly Glow to objects array 'd'
target_d = 'href:`/objects/nhong-nhong`}'
kieu_obj = ',{id:`ban-kieu`,code:`Object Profile / 011`,name:`Bàn Kiệu`,type:`Dining Table`,brand:`Duy Khánh`,origin:`Việt Nam`,excerpt:`Chuyển hóa trò chơi dân gian khiêng kiệu thành hệ thanh đòn nâng đỡ mặt bàn ăn tròn — biểu tượng của sự gắn kết và sẻ chia.`,filter:`Bàn ăn`,status:`Hồ sơ thiết kế · Tháo lắp`,tone:`terra`,thumbnail:`/ban-kieu-main.jpg`,thumbnailAlt:`Bàn Kiệu — thiết kế của Duy Khánh`,thumbnailLabel:`Ảnh sản phẩm / Duy Khánh`,href:`/objects/ban-kieu`}'

dragonfly_obj = ',{id:`dragonfly-glow`,code:`Object Profile / 012`,name:`Dragonfly Glow`,type:`Floor Lamp`,brand:`Duy Khánh`,origin:`Việt Nam`,excerpt:`Khoảnh khắc ánh chiều buông xuống chạm nhẹ lên đôi cánh chuồn chuồn mỏng manh — tương phản giữa đế gỗ tĩnh lặng và kim loại phản quang.`,filter:`Đèn`,status:`Điêu khắc chiếu sáng · Tháo lắp`,tone:`terra`,thumbnail:`/dragonfly-glow-main.jpg`,thumbnailAlt:`Dragonfly Glow — thiết kế của Duy Khánh`,thumbnailLabel:`Ảnh sản phẩm / Duy Khánh`,href:`/objects/dragonfly-glow`}'

if 'ban-kieu' not in text:
    idx_d = text.find(target_d)
    assert idx_d != -1, "Cannot find target_d"
    end_d = idx_d + len(target_d)
    text = text[:end_d] + kieu_obj + dragonfly_obj + text[end_d:]

# Add search terms
target_f = ',f=['
search_terms = '{terms:[`bàn kiệu`,`ban kieu`,`duy khánh`,`duy khanh`,`palanquin table`],title:`Bàn Kiệu`,subtitle:`Object Profile / 011 · Duy Khánh · Dining Table`,status:`Đã có hồ sơ trong Monos`,detail:`Bàn ăn lấy cảm hứng từ trò chơi khiêng kiệu dân gian.`},{terms:[`dragonfly glow`,`đèn chuồn chuồn`,`duy khánh`,`duy khanh`,`floor lamp`],title:`Dragonfly Glow`,subtitle:`Object Profile / 012 · Duy Khánh · Floor Lamp`,status:`Đã có hồ sơ trong Monos`,detail:`Đèn sàn điêu khắc lấy cảm hứng từ cánh chuồn chuồn trong ánh chiều tà.`},'

if 'dragonfly glow' not in text.lower():
    idx_f = text.find(target_f)
    assert idx_f != -1, "Cannot find target_f"
    text = text[:idx_f + len(target_f)] + search_terms + text[idx_f + len(target_f):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated monos-data for Duy Khanh!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

target_chunk_des = 'e.id===`nguyen-cam-chau`?`/designers/nguyen-cam-chau`:'
replace_chunk_des = 'e.id===`nguyen-cam-chau`?`/designers/nguyen-cam-chau`:e.id===`duy-khanh`?`/designers/duy-khanh`:'

btn_chunk_des = '||e.id===`nguyen-cam-chau`||'
btn_replace_des = '||e.id===`nguyen-cam-chau`||e.id===`duy-khanh`||'

if 'duy-khanh' not in chunk_des:
    chunk_des = chunk_des.replace(target_chunk_des, replace_chunk_des)
    chunk_des = chunk_des.replace(btn_chunk_des, btn_replace_des)
    with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
        f.write(chunk_des)
    print("Updated designer-directory chunk for Duy Khanh!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

duy_khanh_card = '''<article class="designer-card designer-card-terra" id="duy-khanh"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair" aria-hidden="true"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div></div><span class="designer-status"><span></span> <!-- -->Hồ sơ tác giả · 2 thiết kế</span></div><div class="designer-index">1<!-- -->1<!-- --> / COMMUNITY PROFILE</div><h2>Duy Khánh</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Lighting Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Designer của Bàn Kiệu và Dragonfly Glow — chuyển hóa ký ức tập thể và rung cảm thiên nhiên thành các thiết kế cấu trúc tháo lắp thông minh.</p><div class="designer-tags"><span>Bàn Kiệu</span><span>Dragonfly Glow</span><span>Tháo lắp</span><span>Gỗ &amp; Kim loại</span></div><a class="card-link" href="/designers/duy-khanh">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'id="duy-khanh"' not in html_des:
    target_chau = 'id="nguyen-cam-chau"'
    idx_c = html_des.find(target_chau)
    end_art = html_des.find('</article>', idx_c) + len('</article>')
    html_des = html_des[:end_art] + duy_khanh_card + html_des[end_art:]
    html_des = html_des.replace('10<!-- --> hồ sơ đang hiển thị', '11<!-- --> hồ sơ đang hiển thị')
    html_des = html_des.replace('10<!-- --> cá nhân', '11<!-- --> cá nhân')
    with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
        f.write(html_des)
    print("Updated mirrored_pages/designers.html for Duy Khanh!")

# 4. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    html_obj = f.read()

kieu_card = '''<article class="object-card object-card-terra"><div class="object-thumbnail has-image"><img src="/ban-kieu-main.jpg" alt="Bàn Kiệu — thiết kế của Duy Khánh" loading="lazy"/><span>Ảnh sản phẩm / Duy Khánh</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->Hồ sơ thiết kế · Tháo lắp</span></div><span class="object-code">Object Profile / 011</span><h3>Bàn Kiệu</h3><div class="object-meta"><strong>Dining Table</strong><span>·</span>Duy Khánh</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Chuyển hóa trò chơi dân gian khiêng kiệu thành hệ thanh đòn nâng đỡ mặt bàn ăn tròn — biểu tượng của sự gắn kết và sẻ chia.</p><a class="card-link" href="/objects/ban-kieu">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

dragonfly_card = '''<article class="object-card object-card-terra"><div class="object-thumbnail has-image" style="background:#201815;"><img src="/dragonfly-glow-main.jpg" alt="Dragonfly Glow — thiết kế của Duy Khánh" loading="lazy" style="object-fit:contain;"/><span>Ảnh sản phẩm / Duy Khánh</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->Điêu khắc chiếu sáng · Tháo lắp</span></div><span class="object-code">Object Profile / 012</span><h3>Dragonfly Glow</h3><div class="object-meta"><strong>Floor Lamp</strong><span>·</span>Duy Khánh</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Khoảnh khắc ánh chiều buông xuống chạm nhẹ lên đôi cánh chuồn chuồn mỏng manh — tương phản giữa đế gỗ tĩnh lặng và kim loại phản quang.</p><a class="card-link" href="/objects/dragonfly-glow">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'href="/objects/ban-kieu"' not in html_obj:
    target_nhong = 'href="/objects/nhong-nhong"'
    idx_nh = html_obj.find(target_nhong)
    end_art = html_obj.find('</article>', idx_nh) + len('</article>')
    html_obj = html_obj[:end_art] + kieu_card + dragonfly_card + html_obj[end_art:]
    html_obj = html_obj.replace('10<!-- --> hồ sơ đang hiển thị', '12<!-- --> hồ sơ đang hiển thị')
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(html_obj)
    print("Updated mirrored_pages/objects.html for Ban Kieu & Dragonfly Glow!")

# 5. Update server.py
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/objects/nhong-nhong": "objects__nhong-nhong.html",'
new_routes = '"/objects/ban-kieu": "objects__ban-kieu.html",\n    "/objects/dragonfly-glow": "objects__dragonfly-glow.html",\n    "/designers/duy-khanh": "designers__duy-khanh.html",'

if 'ban-kieu' not in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes for Duy Khanh!")
