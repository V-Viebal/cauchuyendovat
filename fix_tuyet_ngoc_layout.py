import re

# Update mirrored_pages/designers__le-hoang-tuyet-ngoc.html
# Use the clean real-designer-object layout instead of the broken phong-vinh-object-grid with grid-column: span 2!

clean_connected_section = '''<section class="real-designer-object section-pad"><div><div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Connected object</div><h2>THIÊN SHRINE<br/><em>khoảng thiêng đương đại.</em></h2><p>Lấy cảm hứng từ vẻ đẹp nguyên sơ của núi rừng, các mảng gỗ xếp lớp tạo nên cảm giác như những tầng đá địa chất đang vươn lên giữa không gian thờ tĩnh lặng và giàu chiều sâu.</p><a class="card-link" href="/objects/thien-shrine">Mở Object Profile <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><figure><img src="/thien-shrine-main.jpg" alt="THIÊN SHRINE — Lê Hoàng Tuyết Ngọc"/><figcaption>THIÊN SHRINE / ảnh hồ sơ cung cấp</figcaption></figure></section>'''

with open('mirrored_pages/designers__le-hoang-tuyet-ngoc.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the broken section
pattern = r'<section class="phong-vinh-objects.*?</section>'
text = re.sub(pattern, clean_connected_section, text, flags=re.DOTALL)

with open('mirrored_pages/designers__le-hoang-tuyet-ngoc.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Replaced with real-designer-object layout in designers__le-hoang-tuyet-ngoc.html!")
