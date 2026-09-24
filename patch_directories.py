import re

# 1. Patch objects.html
with open('mirrored_pages/objects.html', 'r', encoding='utf-8') as f:
    text = f.read()

object_card = """
      <article class="object-card object-card-terra" id="the-archive-no-07">
        <div class="object-thumbnail">
          <img src="/the-archive-no-07-main.jpg" alt="The Archive - No 07 Collection — Thịnh Cut / NGOAC.SPACE" loading="lazy"/>
          <span>OBJECT / 018</span>
        </div>
        <div class="object-card-body">
          <div class="object-card-head">
            <span class="object-status"><span></span> Kho lưu trữ sống của vật liệu</span>
          </div>
          <span class="object-code">OBJECT PROFILE / 018</span>
          <h3>The Archive - No 07</h3>
          <div class="object-meta">
            <a href="/designers/thinh-cut-ngoac-space">Thịnh Cut (NGOAC.SPACE)</a>
            <span>·</span>
            <span>U CONCEPT &amp; YÊN LAM</span>
          </div>
          <p>Hệ ghế bành module tích hợp các phiến vật liệu 50 × 150 mm: Sơn mài, Gốm, Gỗ chạm, Khảm xà cừ &amp; Vải dệt.</p>
          <div class="object-tags">
            <span>The Archive</span>
            <span>Module 50x150mm</span>
            <span>Sơn mài &amp; Gốm</span>
            <span>Khung tháo lắp</span>
          </div>
          <a class="card-link" href="/objects/the-archive-no-07">Mở hồ sơ đồ vật <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
        </div>
      </article>
"""

if 'id="the-archive-no-07"' not in text:
    # Insert right at the beginning of object-grid
    text = text.replace('<div class="object-grid">', '<div class="object-grid">\n' + object_card, 1)
    with open('mirrored_pages/objects.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added The Archive to mirrored_pages/objects.html!")

# 2. Patch designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text = f.read()

designer_card = """
      <article class="designer-card designer-card-terra" id="thinh-cut-ngoac-space">
        <div class="designer-card-head">
          <div class="designer-identity-media">
            <div class="designer-avatar designer-avatar-photo">
              <img src="/thinh-cut-ngoac-space-portrait.jpg" alt="Chân dung Thịnh Cut" loading="lazy"/>
            </div>
          </div>
          <span class="designer-status"><span></span> NGOAC.SPACE Studio · TP.HCM</span>
        </div>
        <div class="designer-index">18 / COMMUNITY PROFILE</div>
        <h2>Thịnh Cut</h2>
        <div class="designer-entity">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
          KTS &amp; Nhà thiết kế / Sáng lập NGOAC.SPACE
        </div>
        <div class="designer-role">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m16 9-5.5 5.5L8 12"></path></svg>
          Architecture, Interior &amp; Furniture
        </div>
        <div class="designer-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          TP. Hồ Chí Minh, Việt Nam
        </div>
        <p>Thực hành thiết kế sáng tạo đa lĩnh vực với sự quan tâm đặc biệt đến văn hóa bản địa, chất liệu và trải nghiệm chạm của con người.</p>
        <div class="designer-tags">
          <span>The Archive</span>
          <span>NGOAC.SPACE</span>
          <span>Vật liệu ký ức</span>
          <span>Bản địa</span>
        </div>
        <a class="card-link" href="/designers/thinh-cut-ngoac-space">Mở hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
      </article>
"""

if 'id="thinh-cut-ngoac-space"' not in text:
    # Insert at the beginning of designer-grid
    idx = text.find('class="designer-grid">')
    if idx != -1:
        insert_pos = idx + len('class="designer-grid">')
        text = text[:insert_pos] + '\n' + designer_card + text[insert_pos:]
        with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
            f.write(text)
        print("Added Thinh Cut to mirrored_pages/designers.html!")
