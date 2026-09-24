import re

# 1. Object Page: mirrored_pages/objects__the-archive-no-07.html
object_html = """<!DOCTYPE html><html lang="vi"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="preload" href="/the-archive-no-07-main.jpg" as="image"/><link rel="preload" href="/the-archive-no-07-angle.jpg" as="image"/><link rel="preload" href="/the-archive-no-07-craft-detail.jpg" as="image"/><link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/><link rel="modulepreload" fetchPriority="low" href="/_next/static/chunks/index-EAkF9h2K.js"/><script src="/_next/static/chunks/rolldown-runtime-C60lm6uB.js" type="module" async=""></script><script src="/_next/static/chunks/framework-D_rUT4EX.js" type="module" async=""></script><title>The Archive - No 07 Collection — Object Profile — Monos</title><meta name="description" content="Bộ sưu tập The Archive - No 07 Collection của Thịnh Cut / NGOAC.SPACE Studio. Hệ ghế module tích hợp các mảnh vật liệu ký ức 50x150mm."/><link rel="shortcut icon" href="/favicon.svg"/><link rel="icon" href="/favicon.svg"/><meta name="codex-preview" content="development"/><script>Object.assign(((self[Symbol.for("vinext.navigationRuntime")]??={bootstrap:{routeManifest:null},functions:{}}).bootstrap.rsc??={rsc:[]}),{params:{},nav:{"pathname":"/objects/the-archive-no-07","searchParams":[]}})</script></head><body class="antialiased"><main class="site-shell"><header class="site-header"><a class="brand" href="/" aria-label="Monos, về trang chủ"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span class="brand-word">MONOS</span></a><nav class="main-nav " aria-label="Điều hướng chính"><a class="nav-link " href="/stories">Câu chuyện đồ vật</a><a class="nav-link " href="/feed">Feed</a><div class="nav-dropdown is-active"><a class="nav-link nav-parent active" href="/network" aria-haspopup="true">Hành trình<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Hành trình — danh mục"><a class="nav-sublink " href="/designers">Designer</a><a class="nav-sublink active" href="/objects">Đồ vật</a><a class="nav-sublink " href="/factories">Nhà máy</a><a class="nav-sublink " href="/brands">Brand</a><a class="nav-sublink " href="/spaces">Không gian</a></div></div><div class="nav-dropdown "><a class="nav-link nav-parent " href="/materials" aria-haspopup="true">Thư viện<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Thư viện — danh mục"><a class="nav-sublink " href="/materials">Vật liệu</a></div></div><a class="nav-link " href="/provenance">Nguồn gốc</a></nav><div class="header-actions"><a class="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></a><a class="login-link" href="/login" style="font-size:13px;font-weight:600;color:var(--ink);margin-right:12px;text-decoration:none;">Đăng nhập</a><a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><button class="icon-button menu-trigger" type="button" aria-label="Mở menu" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></header><div class="feed-strip is-compact" aria-label="Dòng hoạt động Monos"><a class="feed-strip-lead" href="/feed"><span class="feed-live-dot"></span><span>Monos Feed</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div class="feed-strip-items"><div class="feed-strip-track"><a class="feed-strip-item" href="/feed#feed-ambie"><span>Object Profile / 018</span><strong>The Archive - No 07 vừa mở hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-cloudy"><span>Object Profile / 001</span><strong>Cloudy vừa mở thêm một mốc provenance.</strong><small>12 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-designer"><span>Designer Community</span><strong>Thịnh Cut (NGOAC.SPACE) gia nhập danh bạ.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-material"><span>Material Intelligence</span><strong>Sơn mài, gốm, gỗ chạm, khảm xà cừ &amp; vải dệt.</strong><small>1 giờ trước</small></a></div></div><a class="feed-strip-open" href="/feed">Mở feed <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div>

<article class="ganh-profile-page concept-object-page">
  <section class="ganh-profile-hero">
    <div class="ganh-profile-copy">
      <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-corner lucide-file-check-2"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg> Object Profile / 018</div>
      <span class="ganh-profile-status"><span></span> Kho lưu trữ sống của vật liệu &amp; kỹ nghệ thủ công</span>
      <h1>The Archive<br/><em>No 07 Collection.</em></h1>
      <p>Trong thời đại AI có thể tạo ra hình thái vô hạn, The Archive lựa chọn lưu giữ thứ khó sao chép nhất: "dấu vết của bàn tay con người" qua hệ module vật liệu ký ức 50 × 150 mm.</p>
      <div class="ganh-profile-meta">
        <a href="/designers/thinh-cut-ngoac-space"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> Thịnh Cut · NGOAC.SPACE</a>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Ghế bành bọc nệm &amp; Hệ Module</span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Sơn mài · Gốm · Gỗ chạm · Khảm xà cừ</span>
      </div>
    </div>
    <figure class="concept-object-photo">
      <img src="/the-archive-no-07-main.jpg" alt="The Archive - No 07 Collection — Thịnh Cut / NGOAC.SPACE"/>
      <figcaption>The Archive - No 07 Collection — NGOAC.SPACE Studio</figcaption>
    </figure>
  </section>

  <section class="ganh-profile-facts">
    <div>
      <span>Designer &amp; Studio</span>
      <a href="/designers/thinh-cut-ngoac-space"><strong>Thịnh Cut</strong></a>
      <small>Sáng lập NGOAC.SPACE Studio (TP.HCM)</small>
    </div>
    <div>
      <span>Hệ cấu trúc</span>
      <strong>Khung tháo lắp</strong>
      <small>Module vật liệu 50 × 150 mm</small>
    </div>
    <div>
      <span>Đơn vị đồng hành</span>
      <strong>U CONCEPT · YÊN LAM</strong>
      <small>Phối hợp cùng PHÁI THIẾT KẾ</small>
    </div>
    <div>
      <span>Chất liệu ký ức</span>
      <strong>5 Kỹ nghệ thủ công</strong>
      <small>Sơn mài, Gốm, Gỗ chạm, Khảm xà cừ, Vải dệt</small>
    </div>
  </section>

  <section class="concept-object-statement section-pad">
    <div>
      <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Design statement</div>
      <h2>Dấu vết con người<br/><em>trong kỷ nguyên AI.</em></h2>
    </div>
    <blockquote>“Trong thời đại AI có thể tạo ra hình ảnh và hình thức gần như vô hạn, The Archive lựa chọn lưu giữ thứ khó sao chép nhất: ‘dấu vết của bàn tay con người’. Mỗi mảnh vật liệu là một đơn vị ký ức, lưu giữ một chất liệu, một kỹ thuật và một câu chuyện — từ sơn mài, gốm, gỗ chạm khắc, khảm xà cừ đến vải dệt.”</blockquote>
  </section>

  <section class="concept-object-gallery section-pad">
    <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Object study / image archive</div>
    <h2>Hình dáng,<br/><em>cấu tạo và chi tiết module.</em></h2>
    <div class="concept-object-gallery-grid">
      <figure class="is-wide">
        <img src="/the-archive-no-07-main.jpg" alt="The Archive - Phối cảnh tổng thể ghế bành và các module vật liệu"/>
        <figcaption>The Archive / Phối cảnh tổng thể ghế bành kết hợp hệ module vật liệu 50 × 150 mm</figcaption>
      </figure>
      <figure class="">
        <img src="/the-archive-no-07-angle.jpg" alt="The Archive - Góc nghiêng thể hiện kết cấu khung và tay vịn module"/>
        <figcaption>Góc nghiêng thể hiện kết cấu khung tháo lắp và tay vịn module</figcaption>
      </figure>
      <figure class="">
        <img src="/the-archive-no-07-vertical.jpg" alt="The Archive - Chi tiết mặt hông và các mảnh khảm xà cừ, sơn mài"/>
        <figcaption>Chi tiết mặt hông và các phiến ghép thủ công khảm xà cừ, sơn mài</figcaption>
      </figure>
      <figure class="">
        <img src="/the-archive-no-07-craft-detail.jpg" alt="The Archive - Chi tiết hoàn thiện cận cảnh bề mặt vật liệu"/>
        <figcaption>Chi tiết hoàn thiện cận cảnh: Gốm Yên Lam, Sơn mài &amp; Khảm xà cừ</figcaption>
      </figure>
      <figure class="">
        <img src="/the-archive-no-07-prototype.jpg" alt="The Archive - Mẫu thử thực tế tại xưởng chế tác"/>
        <figcaption>Mẫu thử prototype thực tế chế tác bởi NGOAC.SPACE, U CONCEPT &amp; YÊN LAM</figcaption>
      </figure>
    </div>
  </section>

  <section class="ganh-profile-layers section-pad">
    <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Seven connected layers</div>
    <h2>Một món đồ<br/><em>không đứng một mình.</em></h2>
    <div class="ganh-layer-grid">
      <article><span>01</span><h3>Object Story</h3><p>Mỗi mảnh vật liệu là một đơn vị ký ức, ghi dấu kỹ nghệ bản địa từ sơn mài, gốm đến khảm xà cừ.</p></article>
      <article><span>02</span><h3>Designer</h3><p>Thịnh Cut (NGOAC.SPACE) — thực hành sáng tạo đa lĩnh vực với sự quan tâm sâu sắc tới văn hóa bản địa.</p></article>
      <article><span>03</span><h3>How it’s made</h3><p>Khung ghế thiết kế tháo lắp thông minh, cho phép thay thế và bổ sung các phiến module 50x150mm linh hoạt.</p></article>
      <article><span>04</span><h3>Vật liệu</h3><p>Sự tương phản độc đáo giữa khung nệm tối giản và 5 kỹ nghệ: Gốm, Sơn mài, Gỗ chạm, Khảm xà cừ, Vải dệt.</p></article>
      <article><span>05</span><h3>Nguồn gốc</h3><p>Dự án thiết kế chính thức của NGOAC.SPACE Studio, phát triển mẫu thử cùng U CONCEPT, YÊN LAM &amp; PHÁI THIẾT KẾ.</p></article>
      <article><span>06</span><h3>Đời sống thật</h3><p>Đóng vai trò như một kho lưu trữ sống trong không gian phòng khách, sảnh khách sạn nghệ thuật hoặc gallery.</p></article>
      <article><span>07</span><h3>Kết nối ngành</h3><p>Thịnh Cut ↔ The Archive ↔ YÊN LAM POTTERY ↔ U CONCEPT ↔ PHÁI THIẾT KẾ ↔ Hệ sinh thái chế tác thủ công.</p></article>
    </div>
  </section>

  <section class="ganh-profile-source section-pad">
    <div>
      <div class="eyebrow light"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-corner lucide-file-check-2"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg> Source status</div>
      <h2>Hồ sơ thiết kế<br/><em>NGOAC.SPACE Studio.</em></h2>
    </div>
    <div>
      <p>Hồ sơ và bộ sưu tập The Archive - No 07 Collection do kiến trúc sư Thịnh Cut (NGOAC.SPACE) chủ trì thiết kế, phối hợp chế tác cùng U CONCEPT, YÊN LAM POTTERY và PHÁI THIẾT KẾ.</p>
      <div class="ganh-source-links">
        <button type="button" class="light-button" onclick="openMatchmaking('NGOAC.SPACE &amp; YÊN LAM', 'The Archive - No 07 Collection')" style="cursor:pointer; background:var(--terracotta,#c85a32); color:#fff; border-color:var(--terracotta,#c85a32);">
          Kết nối chuỗi B2B / Đặt làm mẫu thử
        </button>
        <button type="button" class="light-button" onclick="alert('Đã sẵn sàng tải gói tài liệu CAD 2D/3D Max và Spec Sheet của The Archive - No 07 Collection!');" style="cursor:pointer;">
          Tải CAD / 3D Spec Sheet
        </button>
        <a class="light-button" href="/designers/thinh-cut-ngoac-space">Mở hồ sơ Designer Thịnh Cut <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
        <a class="light-button" href="/objects">Quay lại danh bạ Đồ vật <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
      </div>
    </div>
  </section>
</article>

<footer class="site-footer"><a class="footer-brand" href="/"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span>MONOS</span></a><p>Stories of the things we live with.</p><div class="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/brands">Brand</a><a href="/spaces">Không gian</a><a href="/materials">Thư viện</a><a href="/materials">Vật liệu</a><a href="/provenance">Nguồn gốc</a></div><span class="footer-credit">© 2026 Monos / Issue 01</span></footer>
</main>
</body></html>
"""

with open('mirrored_pages/objects__the-archive-no-07.html', 'w', encoding='utf-8') as f:
    f.write(object_html)
print("Created mirrored_pages/objects__the-archive-no-07.html!")

# 2. Designer Page: mirrored_pages/designers__thinh-cut-ngoac-space.html
designer_html = """<!DOCTYPE html><html lang="vi"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="preload" href="/thinh-cut-ngoac-space-portrait.jpg" as="image"/><link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/><title>Thịnh Cut (NGOAC.SPACE) — Designer Profile — Monos</title><meta name="description" content="Hồ sơ KTS &amp; Nhà thiết kế Thịnh Cut, sáng lập NGOAC.SPACE Studio và tác phẩm The Archive - No 07 Collection trên Monos."/><link rel="shortcut icon" href="/favicon.svg"/><link rel="icon" href="/favicon.svg"/><meta name="codex-preview" content="development"/><script>Object.assign(((self[Symbol.for("vinext.navigationRuntime")]??={bootstrap:{routeManifest:null},functions:{}}).bootstrap.rsc??={rsc:[]}),{params:{},nav:{"pathname":"/designers/thinh-cut-ngoac-space","searchParams":[]}})</script></head><body class="antialiased"><main class="site-shell"><header class="site-header"><a class="brand" href="/" aria-label="Monos, về trang chủ"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span class="brand-word">MONOS</span></a><nav class="main-nav " aria-label="Điều hướng chính"><a class="nav-link " href="/stories">Câu chuyện đồ vật</a><a class="nav-link " href="/feed">Feed</a><div class="nav-dropdown is-active"><a class="nav-link nav-parent active" href="/network" aria-haspopup="true">Hành trình<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Hành trình — danh mục"><a class="nav-sublink active" href="/designers">Designer</a><a class="nav-sublink " href="/objects">Đồ vật</a><a class="nav-sublink " href="/factories">Nhà máy</a><a class="nav-sublink " href="/brands">Brand</a><a class="nav-sublink " href="/spaces">Không gian</a></div></div><div class="nav-dropdown "><a class="nav-link nav-parent " href="/materials" aria-haspopup="true">Thư viện<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Thư viện — danh mục"><a class="nav-sublink " href="/materials">Vật liệu</a></div></div><a class="nav-link " href="/provenance">Nguồn gốc</a></nav><div class="header-actions"><a class="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></a><a class="login-link" href="/login" style="font-size:13px;font-weight:600;color:var(--ink);margin-right:12px;text-decoration:none;">Đăng nhập</a><a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><button class="icon-button menu-trigger" type="button" aria-label="Mở menu" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></header><div class="feed-strip is-compact" aria-label="Dòng hoạt động Monos"><a class="feed-strip-lead" href="/feed"><span class="feed-live-dot"></span><span>Monos Feed</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div class="feed-strip-items"><div class="feed-strip-track"><a class="feed-strip-item" href="/feed#feed-ambie"><span>Designer Profile / 018</span><strong>Thịnh Cut (NGOAC.SPACE) vừa mở hồ sơ tác giả.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-cloudy"><span>Object Profile / 001</span><strong>Cloudy vừa mở thêm một mốc provenance.</strong><small>12 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-designer"><span>Designer Community</span><strong>Tác phẩm The Archive - No 07 kết nối vào danh bạ.</strong><small>vừa xong</small></a></div></div><a class="feed-strip-open" href="/feed">Mở feed <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div>

<article class="real-designer-page">
  <section class="phong-vinh-hero section-pad">
    <figure class="phong-vinh-portrait">
      <img src="/thinh-cut-ngoac-space-portrait.jpg" alt="Chân dung designer Thịnh Cut — NGOAC.SPACE"/>
      <figcaption>Thịnh Cut / Sáng lập NGOAC.SPACE Studio</figcaption>
    </figure>
    <div class="real-designer-copy">
      <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> Designer Profile / 018</div>
      <span class="real-designer-status"><span></span> NGOAC.SPACE Studio · TP. Hồ Chí Minh</span>
      <h1>Thịnh Cut<br/><em>NGOAC.SPACE.</em></h1>
      <p>Kiến trúc sư, nhà thiết kế và nhà sáng lập NGOAC.SPACE Studio tại TP.HCM — thực hành thiết kế sáng tạo đa lĩnh vực từ kiến trúc, nội thất đến đồ vật, với sự quan tâm đặc biệt đến văn hóa bản địa, vật liệu và trải nghiệm con người.</p>
      <div class="real-designer-meta">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Architecture · Furniture · Craft Memory</span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> TP. Hồ Chí Minh, Việt Nam</span>
      </div>
      <div class="profile-claim-entry">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Hồ sơ tác giả chính thức</span>
        <a href="/claim-profile?profile=Thinh%20Cut%20-%20NGOAC.SPACE">Đây là hồ sơ của bạn? Nhận quyền quản lý <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
      </div>
    </div>
  </section>

  <section class="real-designer-statement section-pad">
    <div class="eyebrow light"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-corner lucide-file-check-2"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.7.7l3.6 3.6A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg> Design position</div>
    <blockquote>“The Archive lựa chọn lưu giữ thứ khó sao chép nhất: ‘dấu vết của bàn tay con người’.”</blockquote>
    <p>Thay vì xem vật liệu như lớp phủ trang trí, Thịnh Cut biến từng mảnh gốm, sơn mài, gỗ chạm và xà cừ thành các module kích thước 50 × 150 mm có thể tháo lắp, thay thế và tiếp tục tích lũy ký ức theo thời gian.</p>
  </section>

  <section class="real-designer-object section-pad">
    <div>
      <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Connected object</div>
      <h2>The Archive<br/><em>No 07 Collection.</em></h2>
      <p>Hệ ghế bọc nệm khung tháo lắp tinh giản, tạo bệ đỡ cho các phiến module thủ công độc bản đối thoại cùng không gian sống đương đại.</p>
      <a class="card-link" href="/objects/the-archive-no-07">Mở Object Profile <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
    </div>
    <figure>
      <img src="/the-archive-no-07-main.jpg" alt="The Archive - No 07 Collection"/>
      <figcaption>The Archive - No 07 Collection — NGOAC.SPACE Studio</figcaption>
    </figure>
  </section>

  <section class="ganh-profile-source section-pad">
    <div>
      <div class="eyebrow light"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check-corner lucide-file-check-2"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.7.7l3.6 3.6A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg> Source status</div>
      <h2>Hồ sơ tác giả &amp; Studio<br/><em>NGOAC.SPACE.</em></h2>
    </div>
    <div>
      <p>Hồ sơ và tác phẩm The Archive - No 07 Collection được biên tập từ thuyết minh ý tưởng và hồ sơ thiết kế do kiến trúc sư Thịnh Cut (NGOAC.SPACE) cung cấp cho Monos.</p>
      <div class="ganh-source-links">
        <a class="light-button" href="/objects/the-archive-no-07">Mở hồ sơ The Archive <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
        <a class="light-button" href="/designers">Quay lại danh bạ Designer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
      </div>
    </div>
  </section>
</article>

<footer class="site-footer"><a class="footer-brand" href="/"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span>MONOS</span></a><p>Stories of the things we live with.</p><div class="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/brands">Brand</a><a href="/spaces">Không gian</a><a href="/materials">Thư viện</a><a href="/materials">Vật liệu</a><a href="/provenance">Nguồn gốc</a></div><span class="footer-credit">© 2026 Monos / Issue 01</span></footer>
</main>
</body></html>
"""

with open('mirrored_pages/designers__thinh-cut-ngoac-space.html', 'w', encoding='utf-8') as f:
    f.write(designer_html)
print("Created mirrored_pages/designers__thinh-cut-ngoac-space.html!")

# 3. Add routes to server.py
with open('server.py', 'r', encoding='utf-8') as f:
    server_code = f.read()

if '"/objects/the-archive-no-07"' not in server_code:
    server_code = server_code.replace(
        '"/objects/the-gap-lamp": "objects__the-gap-lamp.html",',
        '"/objects/the-gap-lamp": "objects__the-gap-lamp.html",\n    "/objects/the-archive-no-07": "objects__the-archive-no-07.html",'
    )
if '"/designers/thinh-cut-ngoac-space"' not in server_code:
    server_code = server_code.replace(
        '"/designers/duong-nhat-quang-dong": "designers__duong-nhat-quang-dong.html",',
        '"/designers/duong-nhat-quang-dong": "designers__duong-nhat-quang-dong.html",\n    "/designers/thinh-cut-ngoac-space": "designers__thinh-cut-ngoac-space.html",'
    )

with open('server.py', 'w', encoding='utf-8') as f:
    f.write(server_code)
print("Added routes to server.py!")
