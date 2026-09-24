import re

clean_quang_section = '''<section class="real-designer-object section-pad"><div><div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Connected object</div><h2>Bàn ăn &amp; Bàn trà FOLIO<br/><em>khối rỗng lơ lửng.</em></h2><p>Bộ đôi bàn ăn tròn và bàn trà chuyển hóa cơ chế bản lề lá thành giải pháp nội thất thanh thoát, tiêu chuẩn hóa 4 module chân để đóng gói phẳng và tối ưu sản xuất.</p><a class="card-link" href="/objects/folio-collection">Mở Object Profile <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><figure><img src="/folio-table-main.jpg" alt="FOLIO Collection — Võ Trần Thanh Quang"/><figcaption>Bàn ăn FOLIO / ảnh hồ sơ cung cấp</figcaption></figure></section>'''

with open('mirrored_pages/designers__vo-tran-thanh-quang.html', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = r'<section class="phong-vinh-objects.*?</section>'
text = re.sub(pattern, clean_quang_section, text, flags=re.DOTALL)

with open('mirrored_pages/designers__vo-tran-thanh-quang.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed connected layout in designers__vo-tran-thanh-quang.html!")
