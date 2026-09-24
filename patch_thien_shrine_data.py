# 1. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add ALO Furniture Design to designers array 'a'
target_a = 'id:`nguyen-xuan-phong`,name:`Nguyễn Xuân Phong`'
idx_a = text.find(target_a)
assert idx_a != -1, "Cannot find nguyen-xuan-phong in monos-data"
end_phong = text.find('}', idx_a) + 1

new_studio = ',{id:`alo-furniture-design`,name:`ALO Furniture Design`,entityType:`Công ty`,discipline:`Design Studio · Bespoke Craftsmanship`,location:`Việt Nam`,bio:`Studio thiết kế và chế tác nội thất kết hợp tinh thần thủ công truyền thống với ngôn ngữ đương đại. Đơn vị phát triển THIÊN SHRINE cùng Tavico Group và Protego Việt Nam.`,specialties:[`Bespoke Shrine`,`Handmade Craft`,`Woodworking`],filter:`Furniture`,status:`Design Studio chính thức`,icon:`furniture`,tone:`terra`}'

if 'alo-furniture-design' not in text:
    text = text[:end_phong] + new_studio + text[end_phong:]

# Add THIEN SHRINE to objects array 'd'
target_d = 'id:`hoa-gom`'
idx_d = text.find(target_d)
assert idx_d != -1, "Cannot find hoa-gom in monos-data"
end_hoa_gom = text.find('}', idx_d) + 1

new_object = ',{id:`thien-shrine`,code:`Object Profile / 015`,name:`THIÊN SHRINE`,type:`Modern Shrine`,brand:`ALO Furniture Design`,origin:`Việt Nam`,excerpt:`Lấy cảm hứng từ vách núi và các tầng địa chất nguyên sơ — một khoảng thiêng thu nhỏ giao thoa giữa thủ công truyền thống và thiết kế đương đại.`,filter:`Tủ & Kệ`,status:`Thủ công HANDMADE · Tavico & Protego`,tone:`terra`,thumbnail:`/thien-shrine-main.jpg`,thumbnailAlt:`THIÊN SHRINE — thiết kế bởi ALO Furniture Design`,thumbnailLabel:`Ảnh sản phẩm / ALO`,href:`/objects/thien-shrine`}'

if 'thien-shrine' not in text:
    text = text[:end_hoa_gom] + new_object + text[end_hoa_gom:]

# Add search term to 'f'
target_f = ',f=['
search_term = '{terms:[`thiên shrine`,`thien shrine`,`alo furniture design`,`alo`,`tủ thờ`,`tavico`,`protego`],title:`THIÊN SHRINE`,subtitle:`Object Profile / 015 · ALO Furniture Design · Modern Shrine`,status:`Đã có hồ sơ trong Monos`,detail:`Tủ thờ đương đại lấy cảm hứng từ vẻ đẹp núi rừng nguyên sơ, chế tác thủ công độc bản.`},'

if 'thiên shrine' not in text.lower():
    idx_f = text.find(target_f)
    assert idx_f != -1, "Cannot find target_f"
    text = text[:idx_f + len(target_f)] + search_term + text[idx_f + len(target_f):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated monos-data for THIÊN SHRINE & ALO Furniture Design!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

target_chunk_des = 'e.id===`nguyen-xuan-phong`?`/designers/nguyen-xuan-phong`:'
replace_chunk_des = 'e.id===`nguyen-xuan-phong`?`/designers/nguyen-xuan-phong`:e.id===`alo-furniture-design`?`/designers/alo-furniture-design`:'

btn_chunk_des = '||e.id===`nguyen-xuan-phong`'
btn_replace_des = '||e.id===`nguyen-xuan-phong`||e.id===`alo-furniture-design`'

if 'alo-furniture-design' not in chunk_des:
    chunk_des = chunk_des.replace(target_chunk_des, replace_chunk_des)
    chunk_des = chunk_des.replace(btn_chunk_des, btn_replace_des)
    with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
        f.write(chunk_des)
    print("Updated designer-directory chunk!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

alo_card = '''<article class="designer-card designer-card-terra" id="alo-furniture-design"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg></div></div><span class="designer-status"><span></span> <!-- -->Design Studio chính thức</span></div><div class="designer-index">1<!-- -->4<!-- --> / COMMUNITY PROFILE</div><h2>ALO Furniture Design</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path></svg> <!-- -->Công ty / Studio</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Design Studio &amp; Production</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Studio thiết kế và chế tác nội thất kết hợp tinh thần thủ công truyền thống với ngôn ngữ đương đại. Đơn vị phát triển tác phẩm THIÊN SHRINE.</p><div class="designer-tags"><span>Bespoke Shrine</span><span>Handmade Craft</span><span>Gỗ tự nhiên</span><span>Protego</span></div><a class="card-link" href="/designers/alo-furniture-design">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'id="alo-furniture-design"' not in html_des:
    target_phong = 'id="nguyen-xuan-phong"'
    idx_p = html_des.find(target_phong)
    end_art = html_des.find('</article>', idx_p) + len('</article>')
    html_des = html_des[:end_art] + alo_card + html_des[end_art:]
    html_des = html_des.replace('13<!-- --> hồ sơ đang hiển thị', '14<!-- --> hồ sơ đang hiển thị')
    html_des = html_des.replace('13<!-- --> cá nhân', '13<!-- --> cá nhân · 1<!-- --> công ty')
    with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
        f.write(html_des)
    print("Updated mirrored_pages/designers.html for ALO Furniture Design!")

# 4. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    html_obj = f.read()

thien_card = '''<article class="object-card object-card-terra"><div class="object-thumbnail has-image"><img src="/thien-shrine-main.jpg" alt="THIÊN SHRINE — thiết kế bởi ALO Furniture Design" loading="lazy"/><span>Thủ công HANDMADE · Tavico &amp; Protego</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->Thủ công HANDMADE · Tavico &amp; Protego</span></div><span class="object-code">Object Profile / 015</span><h3>THIÊN SHRINE</h3><div class="object-meta"><strong>Modern Shrine</strong><span>·</span>ALO Furniture Design</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Lấy cảm hứng từ vách núi và các tầng địa chất nguyên sơ — một khoảng thiêng thu nhỏ giao thoa giữa thủ công truyền thống và thiết kế đương đại.</p><a class="card-link" href="/objects/thien-shrine">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'href="/objects/thien-shrine"' not in html_obj:
    target_hg = 'href="/objects/hoa-gom"'
    idx_hg = html_obj.find(target_hg)
    end_art = html_obj.find('</article>', idx_hg) + len('</article>')
    html_obj = html_obj[:end_art] + thien_card + html_obj[end_art:]
    html_obj = html_obj.replace('14<!-- --> hồ sơ đang hiển thị', '15<!-- --> hồ sơ đang hiển thị')
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(html_obj)
    print("Updated mirrored_pages/objects.html for THIEN SHRINE!")

# 5. Update server.py
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/objects/hoa-gom": "objects__hoa-gom.html",'
new_routes = '"/objects/thien-shrine": "objects__thien-shrine.html",\n    "/designers/alo-furniture-design": "designers__alo-furniture-design.html",'

if 'thien-shrine' not in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes for THIEN SHRINE & ALO!")
