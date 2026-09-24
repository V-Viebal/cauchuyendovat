# 1. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add Huỳnh Minh Đăng and Nguyễn Xuân Phong to designers array 'a'
target_a = 'id:`duy-khanh`,name:`Duy Khánh`'
idx_a = text.find(target_a)
assert idx_a != -1, "Cannot find duy-khanh in monos-data"
end_duy_khanh = text.find('}', idx_a) + 1

new_designers = ',{id:`huynh-minh-dang`,name:`Huỳnh Minh Đăng`,entityType:`Cá nhân`,discipline:`Modular & Furniture Designer`,location:`Việt Nam · HMA 2026`,bio:`Tác giả của Lũy Module — giải pháp lưu trữ thông minh mở, nơi người sử dụng là nhà thiết kế cuối cùng định hình không gian sống.`,specialties:[`Modular Storage`,`Woodcraft`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · First Maker`,icon:`furniture`,tone:`lime`},{id:`nguyen-xuan-phong`,name:`Nguyễn Xuân Phong`,entityType:`Cá nhân`,discipline:`Furniture & Concept Designer`,location:`Việt Nam`,bio:`Designer của Hoa Gốm — trân trọng và gìn giữ vẻ đẹp thủ công độc bản từ những vệt vuốt tay trên phơ gốm, đối thoại cùng sự hoàn hảo công nghiệp trong kỷ nguyên AI.`,specialties:[`Ceramic Sense`,`Cork & Wood`,`Multi-functional`],filter:`Furniture`,status:`Hồ sơ tác giả · Độc bản`,icon:`furniture`,tone:`terra`}'

if 'huynh-minh-dang' not in text:
    text = text[:end_duy_khanh] + new_designers + text[end_duy_khanh:]

# Add Lũy Module and Hoa Gốm to objects array 'd'
target_d = 'id:`dragonfly-glow`'
idx_d = text.find(target_d)
assert idx_d != -1, "Cannot find dragonfly-glow in monos-data"
end_dragonfly = text.find('}', idx_d) + 1

new_objects = ',{id:`luy-module`,code:`Object Profile / 013`,name:`Lũy Module`,type:`Hệ kệ module`,brand:`Huỳnh Minh Đăng`,origin:`Việt Nam`,excerpt:`Khởi nguồn từ căn bếp của Mẹ và ngôn ngữ lũy tre Việt Nam — hệ module xoay 360 độ và xếp chồng định hình không gian sống.`,filter:`Kệ & Tủ`,status:`HMA 2026 · Prototype by First Maker`,tone:`lime`,thumbnail:`/luy-module-main.jpg`,thumbnailAlt:`Lũy Module — thiết kế của Huỳnh Minh Đăng`,thumbnailLabel:`Ảnh sản phẩm / HMA 2026`,href:`/objects/luy-module`},{id:`hoa-gom`,code:`Object Profile / 014`,name:`Hoa Gốm`,type:`Ghế module đa năng`,brand:`Nguyễn Xuân Phong`,origin:`Việt Nam`,excerpt:`Vẻ đẹp độc bản từ những vệt vuốt tay trên phơ gốm chưa chiện — chuyển hóa thành ghế module kết hợp gỗ và bần nén thô sơ.`,filter:`Ghế & Bàn`,status:`Dấu ấn thủ công trong kỷ nguyên AI`,tone:`terra`,thumbnail:`/hoa-gom-main.jpg`,thumbnailAlt:`Hoa Gốm — thiết kế của Nguyễn Xuân Phong`,thumbnailLabel:`Ảnh sản phẩm / Nguyễn Xuân Phong`,href:`/objects/hoa-gom`}'

if 'luy-module' not in text:
    text = text[:end_dragonfly] + new_objects + text[end_dragonfly:]

# Add search terms to 'f'
target_f = ',f=['
search_terms = '{terms:[`lũy module`,`luy module`,`huỳnh minh đăng`,`huynh minh dang`,`kệ bếp`,`first maker`],title:`Lũy Module`,subtitle:`Object Profile / 013 · Huỳnh Minh Đăng · Kệ module`,status:`Đã có hồ sơ trong Monos`,detail:`Hệ lưu trữ module linh hoạt lấy cảm hứng từ lũy tre Việt Nam, tham dự HMA 2026.`},{terms:[`hoa gốm`,`hoa gom`,`nguyễn xuân phong`,`nguyen xuan phong`,`bần nén`,`cork`],title:`Hoa Gốm`,subtitle:`Object Profile / 014 · Nguyễn Xuân Phong · Ghế đa năng`,status:`Đã có hồ sơ trong Monos`,detail:`Thiết kế lấy cảm hứng từ vệt vuốt tay trên phơ gốm kết hợp bần nén và gỗ.`},'

if 'lũy module' not in text.lower():
    idx_f = text.find(target_f)
    assert idx_f != -1, "Cannot find target_f"
    text = text[:idx_f + len(target_f)] + search_terms + text[idx_f + len(target_f):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated monos-data for Lũy Module & Hoa Gốm!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

target_chunk_des = 'e.id===`duy-khanh`?`/designers/duy-khanh`:'
replace_chunk_des = 'e.id===`duy-khanh`?`/designers/duy-khanh`:e.id===`huynh-minh-dang`?`/designers/huynh-minh-dang`:e.id===`nguyen-xuan-phong`?`/designers/nguyen-xuan-phong`:'

btn_chunk_des = '||e.id===`duy-khanh`'
btn_replace_des = '||e.id===`duy-khanh`||e.id===`huynh-minh-dang`||e.id===`nguyen-xuan-phong`'

if 'huynh-minh-dang' not in chunk_des:
    chunk_des = chunk_des.replace(target_chunk_des, replace_chunk_des)
    chunk_des = chunk_des.replace(btn_chunk_des, btn_replace_des)
    with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
        f.write(chunk_des)
    print("Updated designer-directory chunk!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

dang_card = '''<article class="designer-card designer-card-lime" id="huynh-minh-dang"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair" aria-hidden="true"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · First Maker</span></div><div class="designer-index">1<!-- -->2<!-- --> / COMMUNITY PROFILE</div><h2>Huỳnh Minh Đăng</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Modular &amp; Furniture Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Tác giả của Lũy Module — giải pháp lưu trữ thông minh mở, nơi người sử dụng là nhà thiết kế cuối cùng định hình không gian sống.</p><div class="designer-tags"><span>Modular Storage</span><span>Woodcraft</span><span>Lũy Tre</span><span>HMA 2026</span></div><a class="card-link" href="/designers/huynh-minh-dang">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

phong_card = '''<article class="designer-card designer-card-terra" id="nguyen-xuan-phong"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair" aria-hidden="true"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div></div><span class="designer-status"><span></span> <!-- -->Hồ sơ tác giả · Độc bản</span></div><div class="designer-index">1<!-- -->3<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Xuân Phong</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Concept Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Designer của Hoa Gốm — trân trọng và gìn giữ vẻ đẹp thủ công độc bản từ những vệt vuốt tay trên phơ gốm, đối thoại cùng sự hoàn hảo công nghiệp trong kỷ nguyên AI.</p><div class="designer-tags"><span>Hoa Gốm</span><span>Bần nén (Cork)</span><span>Gốm thủ công</span><span>Đa năng</span></div><a class="card-link" href="/designers/nguyen-xuan-phong">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'id="huynh-minh-dang"' not in html_des:
    target_duy = 'id="duy-khanh"'
    idx_dk = html_des.find(target_duy)
    end_art = html_des.find('</article>', idx_dk) + len('</article>')
    html_des = html_des[:end_art] + dang_card + phong_card + html_des[end_art:]
    html_des = html_des.replace('11<!-- --> hồ sơ đang hiển thị', '13<!-- --> hồ sơ đang hiển thị')
    html_des = html_des.replace('11<!-- --> cá nhân', '13<!-- --> cá nhân')
    with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
        f.write(html_des)
    print("Updated mirrored_pages/designers.html for Dang & Phong!")

# 4. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    html_obj = f.read()

luy_card = '''<article class="object-card object-card-lime"><div class="object-thumbnail has-image"><img src="/luy-module-main.jpg" alt="Lũy Module — thiết kế của Huỳnh Minh Đăng" loading="lazy"/><span>HMA 2026 / First Maker</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->HMA 2026 · First Maker</span></div><span class="object-code">Object Profile / 013</span><h3>Lũy Module</h3><div class="object-meta"><strong>Hệ kệ module lưu trữ</strong><span>·</span>Huỳnh Minh Đăng</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Khởi nguồn từ căn bếp của Mẹ và ngôn ngữ lũy tre Việt Nam — hệ module xếp chồng, xoay quanh trục 360 độ định hình không gian sống.</p><a class="card-link" href="/objects/luy-module">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

hoa_gom_card = '''<article class="object-card object-card-terra"><div class="object-thumbnail has-image"><img src="/hoa-gom-main.jpg" alt="Hoa Gốm — thiết kế của Nguyễn Xuân Phong" loading="lazy"/><span>Ảnh sản phẩm / Nguyễn Xuân Phong</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->Dấu ấn thủ công trong kỷ nguyên AI</span></div><span class="object-code">Object Profile / 014</span><h3>Hoa Gốm</h3><div class="object-meta"><strong>Ghế module đa năng</strong><span>·</span>Nguyễn Xuân Phong</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Vẻ đẹp độc bản từ những vệt vuốt tay trên phơ gốm chưa chiện — chuyển hóa thành ghế module kết hợp gỗ và bần nén thô sơ.</p><a class="card-link" href="/objects/hoa-gom">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'href="/objects/luy-module"' not in html_obj:
    target_dg = 'href="/objects/dragonfly-glow"'
    idx_dg = html_obj.find(target_dg)
    end_art = html_obj.find('</article>', idx_dg) + len('</article>')
    html_obj = html_obj[:end_art] + luy_card + hoa_gom_card + html_obj[end_art:]
    html_obj = html_obj.replace('12<!-- --> hồ sơ đang hiển thị', '14<!-- --> hồ sơ đang hiển thị')
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(html_obj)
    print("Updated mirrored_pages/objects.html for Luy Module & Hoa Gom!")

# 5. Update server.py
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/objects/dragonfly-glow": "objects__dragonfly-glow.html",'
new_routes = '"/objects/luy-module": "objects__luy-module.html",\n    "/objects/hoa-gom": "objects__hoa-gom.html",\n    "/designers/huynh-minh-dang": "designers__huynh-minh-dang.html",\n    "/designers/nguyen-xuan-phong": "designers__nguyen-xuan-phong.html",'

if 'luy-module' not in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes for Dang & Phong!")
