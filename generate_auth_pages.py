import re

header_html = '''<header class="site-header"><a class="brand" href="/" aria-label="Monos, về trang chủ"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span class="brand-word">MONOS</span></a><nav class="main-nav " aria-label="Điều hướng chính"><a class="nav-link " href="/stories">Câu chuyện đồ vật</a><a class="nav-link " href="/feed">Feed</a><div class="nav-dropdown is-active"><a class="nav-link nav-parent active" href="/network" aria-haspopup="true">Hành trình<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Hành trình — danh mục"><a class="nav-sublink active" href="/designers">Designer</a><a class="nav-sublink " href="/objects">Đồ vật</a><a class="nav-sublink " href="/factories">Nhà máy</a><a class="nav-sublink " href="/brands">Brand</a><a class="nav-sublink " href="/spaces">Không gian</a></div></div><div class="nav-dropdown "><a class="nav-link nav-parent " href="/materials" aria-haspopup="true">Thư viện<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Thư viện — danh mục"><a class="nav-sublink " href="/materials">Vật liệu</a></div></div><a class="nav-link " href="/provenance">Nguồn gốc</a></nav><div class="header-actions"><a class="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></a><a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><button class="icon-button menu-trigger" type="button" aria-label="Mở menu" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></header>'''

feed_strip_html = '''<div class="feed-strip is-compact" aria-label="Dòng hoạt động Monos"><a class="feed-strip-lead" href="/feed"><span class="feed-live-dot"></span><span>Monos Feed</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div class="feed-strip-items"><div class="feed-strip-track"><a class="feed-strip-item" href="/feed#feed-ambie"><span>Object Profile / 010</span><strong>Nhong Nhong vừa mở hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-cloudy"><span>Object Profile / 001</span><strong>Cloudy vừa mở thêm một mốc provenance.</strong><small>12 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-factory"><span>Factory Directory</span><strong>F-Studio cập nhật năng lực chế tác bàn Console.</strong><small>38 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-designer"><span>Designer Community</span><strong>Cộng đồng designer đã mở danh sách hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-material"><span>Material Intelligence</span><strong>Gỗ tự nhiên &amp; Kết cấu module.</strong><small>1 giờ trước</small></a><a class="feed-strip-item" href="/feed#feed-brief"><span>Open Brief</span><strong>Đang tìm partner cho một prototype nhỏ.</strong><small>Hôm qua</small></a></div></div><a class="feed-strip-open" href="/feed">Mở feed <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div>'''

footer_html = '''<footer class="site-footer"><a class="footer-brand" href="/"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span>MONOS</span></a><p>Stories of the things we live with.</p><div class="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/brands">Brand</a><a href="/spaces">Không gian</a><a href="/materials">Thư viện</a><a href="/materials">Vật liệu</a><a href="/provenance">Nguồn gốc</a></div><span class="footer-credit">© 2026 Monos / Issue 01</span></footer>'''

# Custom form styles that blend seamlessly with Monos editorial palette
form_custom_style = '''
<style>
.monos-auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}
.monos-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.monos-form-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.monos-form-input, .monos-form-select, .monos-form-textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d5d3ce;
  background: #fff;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  color: var(--ink);
  transition: border-color 0.15s, box-shadow 0.15s;
}
.monos-form-input:focus, .monos-form-select:focus, .monos-form-textarea:focus {
  outline: none;
  border-color: var(--ink);
  box-shadow: 0 0 0 2px rgba(13, 12, 34, 0.08);
}
.monos-role-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 8px;
}
.monos-role-card {
  border: 1.5px solid #e2dfd9;
  background: #fff;
  padding: 12px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.18s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}
.monos-role-card:hover {
  border-color: #999;
}
.monos-role-card.is-selected {
  border-color: var(--terracotta, #c85a32);
  background: #fdfaf8;
}
.monos-role-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
}
.monos-role-desc {
  font-size: 11px;
  color: #666;
  line-height: 1.35;
}
.monos-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 18px 0;
  color: #888;
  font-size: 12px;
}
.monos-divider::before, .monos-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e0ded9;
}
.monos-divider:not(:empty)::before {
  margin-right: 12px;
}
.monos-divider:not(:empty)::after {
  margin-left: 12px;
}
.monos-auth-switch {
  margin-top: 18px;
  font-size: 13px;
  color: #666;
  text-align: center;
}
.monos-auth-switch a {
  color: var(--ink);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.monos-submit-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: var(--ink);
  color: #fff;
  border: none;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  width: 100%;
  margin-top: 8px;
}
.monos-submit-btn:hover {
  background: #2b2a3a;
  transform: translateY(-1px);
}
.oauth-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #cfccc6;
  background: #fff;
  color: var(--ink);
  padding: 11px 20px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  width: 100%;
  text-decoration: none;
}
.oauth-btn:hover {
  background: #f7f6f2;
  border-color: #999;
}
.alert-box {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 13px;
  display: none;
  margin-bottom: 12px;
}
.alert-success {
  background: #eef8ee;
  color: #1e701e;
  border: 1px solid #c2e8c2;
}
</style>
'''

# 1. Generate mirrored_pages/login.html
login_page_html = f'''<!DOCTYPE html><html lang="vi"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/><title>Đăng nhập — Monos</title><meta name="description" content="Đăng nhập để xác minh và quản lý hồ sơ trên Monos."/><link rel="shortcut icon" href="/favicon.svg"/><link rel="icon" href="/favicon.svg"/>{form_custom_style}</head><body class="antialiased"><main class="site-shell">{header_html}{feed_strip_html}<main class="login-page section-pad"><section class="login-intro"><div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round lucide-user-2" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> Monos account</div><h1>Đăng nhập để<br/><em>quản lý hồ sơ.</em></h1><p>Dành cho Nhà thiết kế, Studio, Nhà máy sản xuất, Thương hiệu và Người yêu đồ vật quản lý danh mục, xác thực nguồn gốc và kết nối chuỗi giá trị.</p><div class="login-benefits"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Xác minh chủ sở hữu hồ sơ</span><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Quản lý sản phẩm &amp; bản vẽ</span><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Kết nối đối tác sản xuất &amp; vật liệu</span></div></section><section class="login-panel"><span class="login-panel-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in" aria-hidden="true"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg></span><div class="eyebrow muted">Chào mừng trở lại</div><h2>Đăng nhập Monos</h2><div id="login-alert" class="alert-box alert-success"></div><form class="monos-auth-form" id="loginForm" onsubmit="event.preventDefault(); document.getElementById('login-alert').style.display='block'; document.getElementById('login-alert').innerText='Đăng nhập thành công! Đang chuyển hướng...'; setTimeout(() => window.location.href='/designers', 1200);"><div class="monos-form-group"><label class="monos-form-label" for="login-email">Email hoặc Tên tài khoản</label><input type="text" id="login-email" class="monos-form-input" placeholder="designer@monos.vn" required /></div><div class="monos-form-group"><div style="display:flex; justify-content:space-between; align-items:center;"><label class="monos-form-label" for="login-password">Mật khẩu</label><a href="#" style="font-size:12px; color:#666; text-decoration:none;">Quên mật khẩu?</a></div><input type="password" id="login-password" class="monos-form-input" placeholder="••••••••" required /></div><button type="submit" class="monos-submit-btn">Đăng nhập tài khoản <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></button></form><div class="monos-divider">HOẶC</div><a class="oauth-btn" href="/signin-with-chatgpt?return_to=%2Flogin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path></svg> Tiếp tục với ChatGPT</a><div class="monos-auth-switch">Chưa có tài khoản trên Monos? <a href="/signup">Đăng ký hồ sơ mới</a></div></section></main>{footer_html}</main></body></html>'''

with open('mirrored_pages/login.html', 'w', encoding='utf-8') as f:
    f.write(login_page_html)
print("Updated mirrored_pages/login.html!")

# 2. Generate mirrored_pages/signup.html
signup_page_html = f'''<!DOCTYPE html><html lang="vi"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/><title>Đăng ký hồ sơ — Monos</title><meta name="description" content="Đăng ký hồ sơ Designer, Studio, Nhà máy, Brand trên Monos."/><link rel="shortcut icon" href="/favicon.svg"/><link rel="icon" href="/favicon.svg"/>{form_custom_style}</head><body class="antialiased"><main class="site-shell">{header_html}{feed_strip_html}<main class="login-page section-pad" style="grid-template-columns: minmax(0, 0.95fr) minmax(380px, 1.05fr);"><section class="login-intro"><div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Gia nhập mạng lưới Monos</div><h1>Đăng ký hồ sơ<br/><em>khởi tạo kết nối.</em></h1><p>Nơi lưu giữ giá trị của đồ vật và kết nối những mắt xích kiến tạo: từ ý tưởng thiết kế, nguồn nguyên liệu, kỹ nghệ chế tác đến thương hiệu phát hành.</p><div class="login-benefits"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Tích xanh xác thực hồ sơ chính thức</span><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Ghi nhận bản quyền trong chuỗi 7 lớp (7 Layers)</span><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Tìm đối tác gia công &amp; mở Open Brief</span></div></section><section class="login-panel" style="width: min(100%, 600px);"><span class="login-panel-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></span><div class="eyebrow muted">Khởi tạo định danh</div><h2>Đăng ký hồ sơ Monos</h2><div id="signup-alert" class="alert-box alert-success"></div><form class="monos-auth-form" id="signupForm" onsubmit="event.preventDefault(); document.getElementById('signup-alert').style.display='block'; document.getElementById('signup-alert').innerText='Đăng ký hồ sơ thành công! Đang chuyển hướng đến danh bạ...'; setTimeout(() => window.location.href='/designers', 1500);"><div class="monos-form-group"><label class="monos-form-label">Chọn nhóm đối tượng phù hợp</label><div class="monos-role-grid"><div class="monos-role-card is-selected" onclick="selectRole(this, 'designer')"><span class="monos-role-title">Designer cá nhân</span><span class="monos-role-desc">Tác giả độc lập, nhà thiết kế nội thất / sản phẩm.</span></div><div class="monos-role-card" onclick="selectRole(this, 'studio')"><span class="monos-role-title">Studio thiết kế</span><span class="monos-role-desc">Văn phòng, nhóm sáng tạo và công ty thiết kế.</span></div><div class="monos-role-card" onclick="selectRole(this, 'factory')"><span class="monos-role-title">Nhà máy / Xưởng</span><span class="monos-role-desc">Đơn vị chế tác, sản xuất mẫu thử và thi công mộc/kim loại.</span></div><div class="monos-role-card" onclick="selectRole(this, 'brand')"><span class="monos-role-title">Brand / Nhà phát hành</span><span class="monos-role-desc">Thương hiệu nội thất, đơn vị phân phối thương mại.</span></div></div></div><div class="monos-form-group"><label class="monos-form-label" for="signup-name">Họ và tên / Tên Studio / Tên Doanh nghiệp</label><input type="text" id="signup-name" class="monos-form-input" placeholder="Ví dụ: Studio B+ Design hoặc Nguyễn Văn A" required /></div><div class="monos-form-group"><label class="monos-form-label" for="signup-email">Email liên hệ công việc</label><input type="email" id="signup-email" class="monos-form-input" placeholder="contact@studio.vn" required /></div><div class="monos-form-group"><label class="monos-form-label" for="signup-password">Mật khẩu khởi tạo</label><input type="password" id="signup-password" class="monos-form-input" placeholder="Tối thiểu 8 ký tự" required /></div><div class="monos-form-group"><label class="monos-form-label" for="signup-location">Khu vực / Tỉnh thành</label><input type="text" id="signup-location" class="monos-form-input" placeholder="Ví dụ: TP. Hồ Chí Minh · Việt Nam" /></div><button type="submit" class="monos-submit-btn">Tạo hồ sơ chính thức <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></button></form><div class="monos-auth-switch">Đã có hồ sơ hoặc tài khoản? <a href="/login">Đăng nhập tại đây</a></div></section></main>{footer_html}</main><script>function selectRole(element, role) {{ document.querySelectorAll('.monos-role-card').forEach(c => c.classList.remove('is-selected')); element.classList.add('is-selected'); }}</script></body></html>'''

with open('mirrored_pages/signup.html', 'w', encoding='utf-8') as f:
    f.write(signup_page_html)
print("Created mirrored_pages/signup.html!")

# 3. Update server.py to add route /signup
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

if '"/signup"' not in srv:
    target = '"/login": "login.html",'
    srv = srv.replace(target, target + '\n    "/signup": "signup.html",')
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Added /signup route to server.py!")
