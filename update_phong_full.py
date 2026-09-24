import re

# 1. Update mirrored_pages/designers__nguyen-xuan-phong.html
with open('mirrored_pages/designers__nguyen-xuan-phong.html', 'r', encoding='utf-8') as f:
    text_phong = f.read()

# Replace svg figure with real portrait
old_figure = '''<figure class="phong-vinh-portrait" style="background:#f4f3ef; display:flex; align-items:center; justify-content:center;"><div style="width:100%; height:100%; min-height:280px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#ecebe5; border-radius:12px; color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg><span style="margin-top:12px; font-size:13px; font-weight:600; color:#444;">Nguyễn Xuân Phong / Designer</span></div><figcaption>Nguyễn Xuân Phong / Designer</figcaption></figure>'''

new_figure = '''<figure class="phong-vinh-portrait"><img src="/nguyen-xuan-phong-portrait.jpg" alt="Chân dung designer Nguyễn Xuân Phong"/><figcaption>Nguyễn Xuân Phong / HMA 2026</figcaption></figure>'''

text_phong = text_phong.replace(old_figure, new_figure)

# Update bio and details from PDF
old_bio = 'Designer của Hoa Gốm — trân trọng và gìn giữ vẻ đẹp thủ công độc bản từ những vệt vuốt tay trên phơ gốm, đối thoại cùng sự hoàn hảo công nghiệp trong kỷ nguyên AI.'
new_bio = 'Có hơn 3 năm kinh nghiệm học hỏi tại làng nghề gốm Bát Tràng — mang tri thức truyền thống vươn xa hơn trong hình thái nội thất đương đại không bị đóng khung bởi những định nghĩa.'
text_phong = text_phong.replace(old_bio, new_bio)

old_status = '<span class="real-designer-status"><span></span> Hồ sơ mở · Tác phẩm Hoa Gốm</span>'
new_status = '<span class="real-designer-status"><span></span> HMA 2026 · Open Award · Nêm Studio thi công</span>'
text_phong = text_phong.replace(old_status, new_status)

# Update connected object section with real-designer-object layout
clean_connected = '''<section class="real-designer-object section-pad"><div><div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Connected object</div><h2>Hoa Gốm<br/><em>hoa tay trên dáng gốm.</em></h2><p>Các khoanh tròn xếp chồng lên nhau tạo thành các nhịp độc bản như những phơ gốm chưa chiện. Gam màu đất nung cùng bần nén thô ráp đem lại trải nghiệm "chạm" đầy cảm xúc.</p><a class="card-link" href="/objects/hoa-gom">Mở Object Profile <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><figure><img src="/hoa-gom-shot-table.jpg" alt="Hoa Gốm — Nguyễn Xuân Phong"/><figcaption>Hoa Gốm — Nguyễn Xuân Phong / HMA 2026</figcaption></figure></section>'''

pattern = r'<section class="phong-vinh-objects.*?</section>'
text_phong = re.sub(pattern, clean_connected, text_phong, flags=re.DOTALL)

with open('mirrored_pages/designers__nguyen-xuan-phong.html', 'w', encoding='utf-8') as f:
    f.write(text_phong)
print("Updated mirrored_pages/designers__nguyen-xuan-phong.html with portrait & Bát Tràng bio!")

# 2. Update mirrored_pages/objects__hoa-gom.html
with open('mirrored_pages/objects__hoa-gom.html', 'r', encoding='utf-8') as f:
    text_hg = f.read()

text_hg = text_hg.replace('Hồ sơ tác giả', 'Hồ sơ tác giả · Làng nghề Bát Tràng')
text_hg = text_hg.replace('Dimension : W 460 x D460 x H450 mm', '')
text_hg = text_hg.replace('<span>Màu sắc</span><strong>Tông đất trung tính</strong><small>Dải chuyển sắc tạo tính động</small>', '<span>Kích thước &amp; Thi công</span><strong>W460 × D460 × H450 mm</strong><small>Thi công bởi Nêm Studio · Tài trợ Tavico &amp; Protego</small>')

# Add PDF reference button
text_hg = text_hg.replace('href="/refs/hoa-gom.pdf"', 'href="/refs/nguyen-xuan-phong-hoa-gom.pdf"')

with open('mirrored_pages/objects__hoa-gom.html', 'w', encoding='utf-8') as f:
    f.write(text_hg)
print("Updated mirrored_pages/objects__hoa-gom.html with dimensions and Nêm Studio!")

# 3. Update mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text_des = f.read()

old_phong_card = '''<article class="designer-card designer-card-terra" id="nguyen-xuan-phong"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair" aria-hidden="true"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div></div><span class="designer-status"><span></span> <!-- -->Hồ sơ tác giả · Độc bản</span></div><div class="designer-index">1<!-- -->3<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Xuân Phong</h2>'''

new_phong_card = '''<article class="designer-card designer-card-terra" id="nguyen-xuan-phong"><div class="designer-card-head"><div class="designer-identity-media"><div class="designer-avatar designer-avatar-photo"><img src="/nguyen-xuan-phong-portrait.jpg" alt="Chân dung Nguyễn Xuân Phong" loading="lazy"/></div></div><span class="designer-status"><span></span> <!-- -->HMA 2026 · Nêm Studio thi công</span></div><div class="designer-index">1<!-- -->3<!-- --> / COMMUNITY PROFILE</div><h2>Nguyễn Xuân Phong</h2>'''

text_des = text_des.replace(old_phong_card, new_phong_card)
text_des = text_des.replace('Designer của Hoa Gốm — trân trọng và gìn giữ vẻ đẹp thủ công độc bản từ những vệt vuốt tay trên phơ gốm, đối thoại cùng sự hoàn hảo công nghiệp trong kỷ nguyên AI.', 'Hơn 3 năm học hỏi tại làng gốm Bát Tràng — đưa giá trị thủ công truyền thống vào thiết kế đương đại không bị đóng khung bởi định nghĩa.')

with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
    f.write(text_des)
print("Updated mirrored_pages/designers.html with Nguyễn Xuân Phong real portrait!")

# 4. Update monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text_data = f.read()

text_data = text_data.replace('id:`nguyen-xuan-phong`,name:`Nguyễn Xuân Phong`', 'id:`nguyen-xuan-phong`,name:`Nguyễn Xuân Phong`,photo:`/nguyen-xuan-phong-portrait.jpg`')
text_data = text_data.replace('status:`Hồ sơ tác giả · Độc bản`', 'status:`HMA 2026 · Nêm Studio thi công`')

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text_data)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text_data)
print("Updated monos-data for Nguyễn Xuân Phong!")
