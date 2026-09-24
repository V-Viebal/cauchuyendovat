# 1. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add designers: Vo Tran Thanh Quang & Duong Nhat Quang Dong
target_a = 'id:`alo-furniture-design`,name:`ALO Furniture Design`'
idx_a = text.find(target_a)
assert idx_a != -1, "Cannot find alo-furniture-design in monos-data"
end_alo = text.find('}', idx_a) + 1

new_designers = ',{id:`vo-tran-thanh-quang`,name:`Võ Trần Thanh Quang`,entityType:`Cá nhân`,discipline:`Furniture & Product Designer`,location:`Việt Nam`,bio:`Tác giả của bộ sưu tập bàn FOLIO — theo đuổi sự kết hợp hài hòa giữa tính thẩm mỹ thanh thoát và tính khả thi tối ưu trong quy trình sản xuất hàng loạt.`,specialties:[`Flat-pack`,`Dining Table`,`Coffee Table`,`Wood`],filter:`Furniture`,status:`Hồ sơ tác giả · Nguyễn Thanh sản xuất`,icon:`furniture`,tone:`lime`,photo:`/vo-tran-thanh-quang-portrait.jpg`},{id:`duong-nhat-quang-dong`,name:`Dương Nhật Quang Đông`,entityType:`Cá nhân`,discipline:`Lighting & Concept Designer`,location:`Việt Nam · HMA 2026`,bio:`Designer của THE GAP LAMP — tìm về giá trị của vật liệu qua đôi tay, dùng khoảng trống và ánh sáng để đối thoại với sự tự động hóa trong kỷ nguyên AI.`,specialties:[`Lighting`,`Yakisugi`,`Woodcraft`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Open Award`,icon:`furniture`,tone:`terra`,photo:`/duong-nhat-quang-dong-portrait.jpg`}'

if 'vo-tran-thanh-quang' not in text:
    text = text[:end_alo] + new_designers + text[end_alo:]

# Add objects: Folio Collection & The Gap Lamp
target_d = 'id:`thien-shrine`'
idx_d = text.find(target_d)
assert idx_d != -1, "Cannot find thien-shrine in monos-data"
end_thien = text.find('}', idx_d) + 1

new_objects = ',{id:`folio-collection`,code:`Object Profile / 016`,name:`FOLIO Collection`,type:`Bàn ăn & Bàn trà`,brand:`Võ Trần Thanh Quang`,origin:`Việt Nam`,excerpt:`Bộ đôi bàn ăn và bàn trà đối thoại giữa đặc và rỗng — cơ chế bản lề lá, tối ưu hóa sản xuất hàng loạt và đóng gói phẳng bền vững.`,filter:`Bàn ăn & Bàn trà`,status:`Đóng gói phẳng · TNHH Nguyễn Thanh`,tone:`lime`,thumbnail:`/folio-table-main.jpg`,thumbnailAlt:`Bàn ăn FOLIO — Võ Trần Thanh Quang`,thumbnailLabel:`Ảnh sản phẩm / Nguyễn Thanh`,href:`/objects/folio-collection`},{id:`the-gap-lamp`,code:`Object Profile / 017`,name:`THE GAP LAMP`,type:`Floor Lamp`,brand:`Dương Nhật Quang Đông`,origin:`Việt Nam`,excerpt:`Khoảng trống được lấp đầy bằng ánh sáng — kết hợp gỗ đốt Yakisugi, đục Naguri và veneer xếp đảo chiều độc bản.`,filter:`Đèn sàn`,status:`HMA 2026 · AXIS Workshop`,tone:`terra`,thumbnail:`/the-gap-lamp-main.jpg`,thumbnailAlt:`THE GAP LAMP — Dương Nhật Quang Đông`,thumbnailLabel:`Ảnh sản phẩm / HMA 2026`,href:`/objects/the-gap-lamp`}'

if 'folio-collection' not in text:
    text = text[:end_thien] + new_objects + text[end_thien:]

# Add search terms
target_f = ',f=['
search_terms = '{terms:[`folio`,`bàn folio`,`bàn ăn folio`,`bàn trà folio`,`võ trần thanh quang`,`vo tran thanh quang`,`nguyễn thanh`],title:`FOLIO Collection`,subtitle:`Object Profile / 016 · Võ Trần Thanh Quang · Bàn ăn & Bàn trà`,status:`Đã có hồ sơ trong Monos`,detail:`Bộ sưu tập bàn ăn tròn và bàn trà đóng gói phẳng tối ưu hóa sản xuất.`},{terms:[`the gap lamp`,`gap lamp`,`đèn the gap`,`dương nhật quang đông`,`duong nhat quang dong`,`yakisugi`,`naguri`,`axis`],title:`THE GAP LAMP`,subtitle:`Object Profile / 017 · Dương Nhật Quang Đông · Floor Lamp`,status:`Đã có hồ sơ trong Monos`,detail:`Đèn sàn điêu khắc ánh sáng kết hợp gỗ đốt Yakisugi và đục Naguri tham dự HMA 2026.`},'

if 'the gap lamp' not in text.lower():
    idx_f = text.find(target_f)
    assert idx_f != -1, "Cannot find target_f"
    text = text[:idx_f + len(target_f)] + search_terms + text[idx_f + len(target_f):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated monos-data for Folio and The Gap Lamp!")

# 2. Update designer-directory chunk
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    chunk_des = f.read()

target_chunk_des = 'e.id===`alo-furniture-design`?`/designers/alo-furniture-design`:'
replace_chunk_des = 'e.id===`alo-furniture-design`?`/designers/alo-furniture-design`:e.id===`vo-tran-thanh-quang`?`/designers/vo-tran-thanh-quang`:e.id===`duong-nhat-quang-dong`?`/designers/duong-nhat-quang-dong`:'

btn_chunk_des = '||e.id===`alo-furniture-design`'
btn_replace_des = '||e.id===`alo-furniture-design`||e.id===`vo-tran-thanh-quang`||e.id===`duong-nhat-quang-dong`'

if 'vo-tran-thanh-quang' not in chunk_des:
    chunk_des = chunk_des.replace(target_chunk_des, replace_chunk_des)
    chunk_des = chunk_des.replace(btn_chunk_des, btn_replace_des)
    with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
        f.write(chunk_des)
    print("Updated designer-directory chunk!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    html_des = f.read()

quang_card = '''<article class="designer-card designer-card-lime" id="vo-tran-thanh-quang"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/vo-tran-thanh-quang-portrait.jpg" alt="Chân dung Võ Trần Thanh Quang" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->Hồ sơ tác giả · Nguyễn Thanh sản xuất</span></div><div class="designer-index">1<!-- -->5<!-- --> / COMMUNITY PROFILE</div><h2>Võ Trần Thanh Quang</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Furniture &amp; Product Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Tác giả của bộ sưu tập bàn FOLIO — theo đuổi sự kết hợp hài hòa giữa tính thẩm mỹ thanh thoát và tính khả thi tối ưu trong quy trình sản xuất hàng loạt.</p><div class="designer-tags"><span>Flat-pack</span><span>Bàn ăn</span><span>Bàn trà</span><span>Nguyễn Thanh</span></div><a class="card-link" href="/designers/vo-tran-thanh-quang">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

dong_card = '''<article class="designer-card designer-card-terra" id="duong-nhat-quang-dong"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/duong-nhat-quang-dong-portrait.jpg" alt="Chân dung Dương Nhật Quang Đông" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · Open Award</span></div><div class="designer-index">1<!-- -->6<!-- --> / COMMUNITY PROFILE</div><h2>Dương Nhật Quang Đông</h2><div class="designer-entity"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> <!-- -->Cá nhân</div><div class="designer-role"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check lucide-verified" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg> <!-- -->Lighting &amp; Concept Designer</div><div class="designer-location"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Designer của THE GAP LAMP — tìm về giá trị của vật liệu qua đôi tay, dùng khoảng trống và ánh sáng để đối thoại với sự tự động hóa trong kỷ nguyên AI.</p><div class="designer-tags"><span>THE GAP LAMP</span><span>Gỗ Yakisugi</span><span>Đục Naguri</span><span>HMA 2026</span></div><a class="card-link" href="/designers/duong-nhat-quang-dong">Mở hồ sơ <!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'id="vo-tran-thanh-quang"' not in html_des:
    target_alo = 'id="alo-furniture-design"'
    idx_alo = html_des.find(target_alo)
    end_art = html_des.find('</article>', idx_alo) + len('</article>')
    html_des = html_des[:end_art] + quang_card + dong_card + html_des[end_art:]
    html_des = html_des.replace('14<!-- --> hồ sơ đang hiển thị', '16<!-- --> hồ sơ đang hiển thị')
    html_des = html_des.replace('13<!-- --> cá nhân · 1<!-- --> công ty', '15<!-- --> cá nhân · 1<!-- --> công ty')
    with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
        f.write(html_des)
    print("Updated mirrored_pages/designers.html for Quang & Dong!")

# 4. Update mirrored_pages/objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    html_obj = f.read()

folio_card = '''<article class="object-card object-card-lime"><div class="object-thumbnail has-image"><img src="/folio-table-main.jpg" alt="Bàn ăn FOLIO — Võ Trần Thanh Quang" loading="lazy"/><span>Đóng gói phẳng · TNHH Nguyễn Thanh</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->Đóng gói phẳng · TNHH Nguyễn Thanh</span></div><span class="object-code">Object Profile / 016</span><h3>FOLIO Collection</h3><div class="object-meta"><strong>Bàn ăn &amp; Bàn trà</strong><span>·</span>Võ Trần Thanh Quang</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Bộ đôi bàn ăn và bàn trà đối thoại giữa đặc và rỗng — cơ chế bản lề lá, tối ưu hóa sản xuất hàng loạt và đóng gói phẳng bền vững.</p><a class="card-link" href="/objects/folio-collection">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

gap_card = '''<article class="object-card object-card-terra"><div class="object-thumbnail has-image" style="background:#181614;"><img src="/the-gap-lamp-main.jpg" alt="THE GAP LAMP — Dương Nhật Quang Đông" loading="lazy" style="object-fit:contain;"/><span>HMA 2026 · AXIS Workshop</span></div><div class="object-card-head"><div class="object-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div><span class="object-status"><span></span> <!-- -->HMA 2026 · AXIS Workshop</span></div><span class="object-code">Object Profile / 017</span><h3>THE GAP LAMP</h3><div class="object-meta"><strong>Floor Lamp</strong><span>·</span>Dương Nhật Quang Đông</div><div class="object-origin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <!-- -->Việt Nam</div><p>Khoảng trống được lấp đầy bằng ánh sáng — kết hợp gỗ đốt Yakisugi, đục Naguri và veneer xếp đảo chiều độc bản.</p><a class="card-link" href="/objects/the-gap-lamp">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></article>'''

if 'href="/objects/folio-collection"' not in html_obj:
    target_thien = 'href="/objects/thien-shrine"'
    idx_ts = html_obj.find(target_thien)
    end_art = html_obj.find('</article>', idx_ts) + len('</article>')
    html_obj = html_obj[:end_art] + folio_card + gap_card + html_obj[end_art:]
    html_obj = html_obj.replace('15<!-- --> hồ sơ đang hiển thị', '17<!-- --> hồ sơ đang hiển thị')
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(html_obj)
    print("Updated mirrored_pages/objects.html for Folio & The Gap Lamp!")

# 5. Update server.py
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

target_srv = '"/objects/thien-shrine": "objects__thien-shrine.html",'
new_routes = '"/objects/folio-collection": "objects__folio-collection.html",\n    "/objects/the-gap-lamp": "objects__the-gap-lamp.html",\n    "/designers/vo-tran-thanh-quang": "designers__vo-tran-thanh-quang.html",\n    "/designers/duong-nhat-quang-dong": "designers__duong-nhat-quang-dong.html",'

if 'folio-collection' not in srv:
    srv = srv.replace(target_srv, target_srv + '\n    ' + new_routes)
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Updated server.py routes for Folio & The Gap Lamp!")
