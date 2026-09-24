import os

header_html = '''<header class="site-header"><a class="brand" href="/" aria-label="Monos, về trang chủ"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span class="brand-word">MONOS</span></a><nav class="main-nav " aria-label="Điều hướng chính"><a class="nav-link " href="/stories">Câu chuyện đồ vật</a><a class="nav-link " href="/feed">Feed</a><div class="nav-dropdown is-active"><a class="nav-link nav-parent active" href="/network" aria-haspopup="true">Hành trình<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Hành trình — danh mục"><a class="nav-sublink active" href="/designers">Designer</a><a class="nav-sublink " href="/objects">Đồ vật</a><a class="nav-sublink " href="/factories">Nhà máy</a><a class="nav-sublink " href="/brands">Brand</a><a class="nav-sublink " href="/spaces">Không gian</a></div></div><div class="nav-dropdown "><a class="nav-link nav-parent " href="/materials" aria-haspopup="true">Thư viện<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Thư viện — danh mục"><a class="nav-sublink " href="/materials">Vật liệu</a></div></div><a class="nav-link " href="/provenance">Nguồn gốc</a></nav><div class="header-actions"><a class="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></a><a class="login-link" href="/login" style="font-size:13px;font-weight:600;color:var(--ink);margin-right:12px;text-decoration:none;">Đăng nhập</a><a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><button class="icon-button menu-trigger" type="button" aria-label="Mở menu" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></header>'''

feed_strip_html = '''<div class="feed-strip is-compact" aria-label="Dòng hoạt động Monos"><a class="feed-strip-lead" href="/feed"><span class="feed-live-dot"></span><span>Monos Feed</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div class="feed-strip-items"><div class="feed-strip-track"><a class="feed-strip-item" href="/feed#feed-ambie"><span>Object Profile / 012</span><strong>Dragonfly Glow vừa mở hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-cloudy"><span>Object Profile / 001</span><strong>Cloudy vừa mở thêm một mốc provenance.</strong><small>12 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-factory"><span>Factory Directory</span><strong>F-Studio cập nhật năng lực chế tác bàn Console.</strong><small>38 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-designer"><span>Designer Community</span><strong>Cộng đồng designer đã mở danh sách hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-material"><span>Material Intelligence</span><strong>Gỗ tự nhiên &amp; Kết cấu module.</strong><small>1 giờ trước</small></a><a class="feed-strip-item" href="/feed#feed-brief"><span>Open Brief</span><strong>Đang tìm partner cho một prototype nhỏ.</strong><small>Hôm qua</small></a></div></div><a class="feed-strip-open" href="/feed">Mở feed <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div>'''

footer_html = '''<footer class="site-footer"><a class="footer-brand" href="/"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span>MONOS</span></a><p>Stories of the things we live with.</p><div class="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/brands">Brand</a><a href="/spaces">Không gian</a><a href="/materials">Thư viện</a><a href="/materials">Vật liệu</a><a href="/provenance">Nguồn gốc</a></div><span class="footer-credit">© 2026 Monos / Issue 01</span></footer>'''

html_content = f'''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/>
<title>Đăng ký hồ sơ — Monos</title>
<meta name="description" content="Đăng ký hồ sơ Designer cá nhân, Studio thiết kế, Xưởng sản xuất, Thương hiệu nội thất, Nhà cung cấp vật liệu hoặc Người yêu đồ vật."/>
<link rel="shortcut icon" href="/favicon.svg"/>
<link rel="icon" href="/favicon.svg"/>
<style>
.signup-layout {{
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
  gap: 56px;
  align-items: start;
  min-height: calc(100vh - 120px);
}}
@media (max-width: 1024px) {{
  .signup-layout {{
    grid-template-columns: 1fr;
    gap: 36px;
  }}
}}

/* Category selector pills */
.role-main-grid {{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}}
.role-item {{
  border: 1.5px solid #dfdeda;
  background: #ffffff;
  border-radius: 10px;
  padding: 13px 16px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: flex-start;
  gap: 14px;
}}
.role-item:hover {{
  border-color: #999;
  background: #fafaf8;
}}
.role-item.active {{
  border-color: var(--terracotta, #c85a32);
  background: #fdfbf9;
  box-shadow: 0 4px 16px rgba(200, 90, 50, 0.08);
}}
.role-radio-circle {{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-top: 2px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}}
.role-item.active .role-radio-circle {{
  border-color: var(--terracotta, #c85a32);
}}
.role-radio-circle::after {{
  content: '';
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--terracotta, #c85a32);
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s;
}}
.role-item.active .role-radio-circle::after {{
  opacity: 1;
  transform: scale(1);
}}

.role-info {{
  flex: 1;
}}
.role-title {{
  font-size: 14.5px;
  font-weight: 700;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 8px;
}}
.role-badge {{
  font-size: 10.5px;
  font-weight: 600;
  background: #f0eee9;
  color: #555;
  padding: 2px 7px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}}
.role-item.active .role-badge {{
  background: #f8e8e0;
  color: var(--terracotta, #c85a32);
}}
.role-desc {{
  font-size: 12px;
  color: #666;
  margin-top: 3px;
  line-height: 1.4;
}}

/* Sub-type switcher for Designer (A vs B) */
.sub-role-switcher {{
  margin-top: 10px;
  padding: 10px 12px;
  background: #f4f2ed;
  border-radius: 8px;
  display: flex;
  gap: 8px;
}}
.sub-role-btn {{
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  font-size: 12.5px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s;
}}
.sub-role-btn.selected {{
  background: #ffffff;
  color: var(--ink);
  border-color: #dfdeda;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}}

/* Dynamic Form Panel */
.form-card {{
  border-top: 4px solid var(--terracotta, #c85a32);
  background: #ffffff;
  padding: 36px 40px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.03);
}}
@media (max-width: 640px) {{
  .form-card {{
    padding: 24px 20px;
  }}
}}
.form-header-badge {{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--terracotta, #c85a32);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}}
.form-title {{
  font-size: 24px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 6px 0;
  letter-spacing: -0.02em;
}}
.form-subtitle {{
  font-size: 13px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.45;
}}

/* Form inputs */
.monos-form-grid {{
  display: flex;
  flex-direction: column;
  gap: 16px;
}}
.form-row-2 {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}}
@media (max-width: 640px) {{
  .form-row-2 {{
    grid-template-columns: 1fr;
  }}
}}
.f-group {{
  display: flex;
  flex-direction: column;
  gap: 6px;
}}
.f-label {{
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ink);
}}
.f-label span.req {{
  color: var(--terracotta, #c85a32);
  margin-left: 2px;
}}
.f-input, .f-select, .f-textarea {{
  width: 100%;
  padding: 11px 13px;
  border: 1.5px solid #dcd9d3;
  background: #ffffff;
  border-radius: 7px;
  font-family: inherit;
  font-size: 13.5px;
  color: var(--ink);
  transition: all 0.15s ease;
}}
.f-input:focus, .f-select:focus, .f-textarea:focus {{
  outline: none;
  border-color: var(--ink);
  box-shadow: 0 0 0 3px rgba(13, 12, 34, 0.08);
}}
.f-hint {{
  font-size: 11px;
  color: #777;
  line-height: 1.35;
}}

.f-submit-btn {{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: var(--ink);
  color: #ffffff;
  border: none;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  width: 100%;
  margin-top: 10px;
}}
.f-submit-btn:hover {{
  background: #2b2a3a;
  transform: translateY(-1px);
}}

/* Alert box */
.alert-box {{
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 13.5px;
  margin-bottom: 16px;
  display: none;
}}
.alert-success {{
  background: #eef7ee;
  color: #1a6d1a;
  border: 1px solid #bce2bc;
}}
</style>
</head>
<body class="antialiased">
<main class="site-shell">
{header_html}
{feed_strip_html}

<main class="signup-layout section-pad">
  <!-- Left column: Role selection & Specific Perks -->
  <section class="login-intro">
    <div class="eyebrow muted">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
      Định danh trong mạng lưới Monos
    </div>
    <h1>Đăng ký hồ sơ<br/><em>chọn vai trò của bạn.</em></h1>
    <p>Chọn đúng nhóm đối tượng để Monos cá nhân hóa biểu mẫu đăng ký, mở các quyền năng chuyên sâu và kết nối chuỗi giá trị phù hợp nhất.</p>

    <!-- Role Choices -->
    <div class="role-main-grid" id="roleGrid">
      
      <!-- Option 1: Thiết kế sáng tạo -->
      <div class="role-item active" id="role-designer" onclick="chooseRole('designer')">
        <div class="role-radio-circle"></div>
        <div class="role-info">
          <div class="role-title">
            Tôi là Thiết kế sáng tạo
            <span class="role-badge">Designer / Studio</span>
          </div>
          <div class="role-desc">Tác giả cá nhân hoặc văn phòng / nhóm thiết kế sáng tạo nội thất &amp; đồ vật.</div>
          
          <!-- Sub-role selection for Designer -->
          <div class="sub-role-switcher" onclick="event.stopPropagation()">
            <button type="button" class="sub-role-btn selected" id="sub-individual" onclick="chooseSubRole('individual')">
              A. Cá nhân (Freelance / Independent)
            </button>
            <button type="button" class="sub-role-btn" id="sub-studio" onclick="chooseSubRole('studio')">
              B. Doanh nghiệp / Nhóm (Design Studio)
            </button>
          </div>
        </div>
      </div>

      <!-- Option 2: Xưởng / Nhà máy sản xuất -->
      <div class="role-item" id="role-factory" onclick="chooseRole('factory')">
        <div class="role-radio-circle"></div>
        <div class="role-info">
          <div class="role-title">
            Tôi là Xưởng / Nhà máy sản xuất
            <span class="role-badge">Factory / Maker</span>
          </div>
          <div class="role-desc">Đơn vị chế tác mộc, cơ khí, sơn hoàn thiện, bọc nệm hoặc làm mẫu thử (Prototype).</div>
        </div>
      </div>

      <!-- Option 3: Thương hiệu nội thất -->
      <div class="role-item" id="role-brand" onclick="chooseRole('brand')">
        <div class="role-radio-circle"></div>
        <div class="role-info">
          <div class="role-title">
            Tôi là Thương hiệu nội thất
            <span class="role-badge">Brand / Publisher</span>
          </div>
          <div class="role-desc">Thương hiệu phân phối, phát hành thương mại và sở hữu bản quyền bộ sưu tập.</div>
        </div>
      </div>

      <!-- Option 4: Nhà cung cấp vật liệu -->
      <div class="role-item" id="role-material" onclick="chooseRole('material')">
        <div class="role-radio-circle"></div>
        <div class="role-info">
          <div class="role-title">
            Tôi là Nhà cung cấp vật liệu
            <span class="role-badge">Material Supplier</span>
          </div>
          <div class="role-desc">Đơn vị cung ứng gỗ, da, vải, kính, đá, sơn phủ và tài trợ vật liệu dự án.</div>
        </div>
      </div>

      <!-- Option 5: Người yêu thích đồ vật / Khách hàng -->
      <div class="role-item" id="role-collector" onclick="chooseRole('collector')">
        <div class="role-radio-circle"></div>
        <div class="role-info">
          <div class="role-title">
            Tôi là Người yêu thích đồ vật / Khách hàng
            <span class="role-badge">Enthusiast / Collector</span>
          </div>
          <div class="role-desc">Khám phá câu chuyện, lưu trữ bộ sưu tập cá nhân và chia sẻ dấu ấn đời sống thực.</div>
        </div>
      </div>

    </div>

    <!-- Side Highlight Box: Specific Perks for Studio & Collective -->
    <div id="sidePerksBox" style="padding: 18px 20px; background: rgba(255, 255, 255, 0.85); border: 1px solid #dfdeda; border-radius: 10px; font-size: 12.5px; line-height: 1.5; color: #444;">
      <div style="font-weight: 700; color: var(--ink); margin-bottom: 8px; font-size: 13px;" id="sidePerksTitle">
        Quyền năng dành riêng cho Nhà thiết kế:
      </div>
      <div id="sidePerksContent">
        Xác lập hồ sơ chính thức trên Monos, bảo hộ bản quyền ý tưởng trong chuỗi 7 lớp (7 Layers), kết nối trực tiếp với các xưởng gia công uy tín và mở rộng tệp khách hàng.
      </div>
    </div>
  </section>

  <!-- Right column: Dynamic Form Card -->
  <section class="form-card">
    <div class="form-header-badge" id="formBadge">
      <span style="display:inline-block; width:7px; height:7px; border-radius:50%; background:currentColor;"></span>
      <span id="formBadgeText">HỒ SƠ DESIGNER CÁ NHÂN</span>
    </div>
    <h2 class="form-title" id="formTitle">Thông tin Nhà thiết kế</h2>
    <p class="form-subtitle" id="formSubtitle">Vui lòng điền thông tin để khởi tạo hồ sơ cá nhân và kết nối các tác phẩm của bạn.</p>

    <div id="signupAlert" class="alert-box alert-success"></div>

    <form class="monos-form-grid" id="dynamicForm" onsubmit="handleFormSubmit(event)">
      
      <!-- Container for dynamic fields injected by JavaScript -->
      <div id="dynamicFields"></div>

      <!-- Common Fields: Account Credentials -->
      <div class="form-row-2">
        <div class="f-group">
          <label class="f-label" for="acc-email">Email đăng nhập / liên hệ <span class="req">*</span></label>
          <input type="email" id="acc-email" class="f-input" placeholder="name@domain.vn" required />
        </div>
        <div class="f-group">
          <label class="f-label" for="acc-password">Mật khẩu tài khoản <span class="req">*</span></label>
          <input type="password" id="acc-password" class="f-input" placeholder="Tối thiểu 8 ký tự" required />
        </div>
      </div>

      <div class="f-group">
        <label class="f-label" for="acc-location">Khu vực / Tỉnh thành <span class="req">*</span></label>
        <input type="text" id="acc-location" class="f-input" placeholder="Ví dụ: TP. Hồ Chí Minh · Việt Nam" required />
      </div>

      <button type="submit" class="f-submit-btn" id="submitBtn">
        <span>Tạo hồ sơ chính thức</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
      </button>

      <div style="text-align: center; margin-top: 8px; font-size: 13px; color: #666;">
        Đã có tài khoản? <a href="/login" style="color:var(--ink); font-weight:700; text-decoration:underline;">Đăng nhập tại đây</a>
      </div>
    </form>
  </section>
</main>

{footer_html}
</main>

<script>
// State
let currentRole = 'designer'; // 'designer', 'factory', 'brand', 'material', 'collector'
let currentSubRole = 'individual'; // 'individual' or 'studio'

const roleDefinitions = {{
  'designer-individual': {{
    badge: 'HỒ SƠ DESIGNER CÁ NHÂN',
    title: 'Hồ sơ Nhà thiết kế (Cá nhân)',
    subtitle: 'Dành cho nhà thiết kế độc lập, freelance, sinh viên hoặc tác giả tự do khẳng định bản quyền tác phẩm.',
    submitText: 'Tạo hồ sơ Designer cá nhân',
    perkTitle: 'Quyền năng dành riêng cho Designer cá nhân:',
    perkContent: 'Khẳng định bản quyền ý tưởng, tạo dựng danh tiếng nghề nghiệp cá nhân, gắn thẻ trực tiếp vào sản phẩm và nhận thông báo khi có xưởng/brand quan tâm mẫu thử.',
    fields: `
      <div class="f-group">
        <label class="f-label" for="field-name">Họ và tên tác giả <span class="req">*</span></label>
        <input type="text" id="field-name" class="f-input" placeholder="Ví dụ: Huỳnh Lê Phương Uyên hoặc Trần Thảo Nhiên" required />
      </div>
      <div class="form-row-2">
        <div class="f-group">
          <label class="f-label" for="field-specialty">Chuyên môn chính <span class="req">*</span></label>
          <select id="field-specialty" class="f-select">
            <option value="Furniture & Seating">Furniture (Ghế / Seating)</option>
            <option value="Table & Dining">Bàn (Dining Table / Console)</option>
            <option value="Lighting & Art">Đèn &amp; Điêu khắc chiếu sáng</option>
            <option value="Storage & Cabinet">Hệ tủ &amp; Kệ lưu trữ</option>
            <option value="Interior Design">Thiết kế nội thất tổng thể</option>
          </select>
        </div>
        <div class="f-group">
          <label class="f-label" for="field-portfolio">Portfolio / Behance / Website</label>
          <input type="url" id="field-portfolio" class="f-input" placeholder="https://behance.net/your-profile" />
        </div>
      </div>
      <div class="f-group">
        <label class="f-label" for="field-bio">Triết lý thiết kế / Giới thiệu bản thân <span class="req">*</span></label>
        <textarea id="field-bio" rows="3" class="f-textarea" placeholder="Tóm tắt về ngôn ngữ tạo hình, cảm hứng sáng tác hoặc cuộc thi đã tham dự (như Hoa Mai HMA)..." required></textarea>
        <span class="f-hint">Đoạn văn này sẽ xuất hiện trang trọng trên Profile Designer của bạn.</span>
      </div>
    `
  }},
  'designer-studio': {{
    badge: 'HỒ SƠ STUDIO THIẾT KẾ / DOANH NGHIỆP',
    title: 'Hồ sơ Studio / Nhóm thiết kế',
    subtitle: 'Dành cho văn phòng kiến trúc, design studio và nhóm sáng tạo quản trị danh mục tập thể.',
    submitText: 'Tạo hồ sơ Studio thiết kế',
    perkTitle: '4 Quyền năng đặc quyền dành cho Studio thiết kế:',
    perkContent: '1. Hồ sơ đại diện Studio (Logo, triết lý chung, danh mục toàn bộ BST).<br/>2. Quản lý nhóm & Gắn thẻ thành viên (Lead Designer, 3D, R&D).<br/>3. Đăng Open Brief tìm đối tác làm prototype trên Feed.<br/>4. Chứng nhận liên kết chuỗi 7 lớp (Studio ↔ Vật liệu ↔ Nhà máy ↔ Brand).',
    fields: `
      <div class="f-group">
        <label class="f-label" for="field-name">Tên Studio / Công ty thiết kế <span class="req">*</span></label>
        <input type="text" id="field-name" class="f-input" placeholder="Ví dụ: B+ Studio, F-Studio hoặc DB Design Collective" required />
      </div>
      <div class="form-row-2">
        <div class="f-group">
          <label class="f-label" for="field-team-size">Quy mô nhân sự nhóm</label>
          <select id="field-team-size" class="f-select">
            <option value="2-5">Nhóm nhỏ (2 - 5 thành viên)</option>
            <option value="6-15">Studio vừa (6 - 15 thành viên)</option>
            <option value="15+">Công ty lớn (Trên 15 thành viên)</option>
          </select>
        </div>
        <div class="f-group">
          <label class="f-label" for="field-website">Website chính thức / Portfolio</label>
          <input type="url" id="field-website" class="f-input" placeholder="https://yourstudio.vn" />
        </div>
      </div>
      <div class="f-group">
        <label class="f-label" for="field-specialties">Các lĩnh vực chuyên sâu của Studio <span class="req">*</span></label>
        <input type="text" id="field-specialties" class="f-input" placeholder="Ví dụ: Furniture, Lighting, Bespoke, Không gian kiến trúc..." required />
      </div>
      <div class="f-group">
        <label class="f-label" for="field-philosophy">Triết lý thiết kế chung (Design Philosophy) <span class="req">*</span></label>
        <textarea id="field-philosophy" rows="3" class="f-textarea" placeholder="Tuyên ngôn sáng tạo và định hướng phát triển đồ vật của Studio..." required></textarea>
      </div>
    `
  }},
  'factory': {{
    badge: 'HỒ SƠ NHÀ MÁY / XƯỞNG SẢN XUẤT',
    title: 'Hồ sơ Đơn vị sản xuất / Gia công',
    subtitle: 'Giới thiệu năng lực máy móc, kỹ thuật tay nghề và tiếp nhận các dự án làm mẫu thử / sản xuất.',
    submitText: 'Tạo hồ sơ Nhà máy / Xưởng',
    perkTitle: 'Quyền năng dành cho Nhà máy & Xưởng gia công:',
    perkContent: 'Xuất hiện trong Danh bạ Nhà máy (Factory Directory), nhận yêu cầu báo giá mẫu thử từ các Studio/Designer qua Open Brief, xác thực chất lượng hoàn thiện đồ vật.',
    fields: `
      <div class="f-group">
        <label class="f-label" for="field-name">Tên Nhà máy / Xưởng sản xuất <span class="req">*</span></label>
        <input type="text" id="field-name" class="f-input" placeholder="Ví dụ: Công ty CP Gỗ Tân Thành hoặc Xưởng Kim khí Long Thành" required />
      </div>
      <div class="form-row-2">
        <div class="f-group">
          <label class="f-label" for="field-capacity">Năng lực sản xuất chính <span class="req">*</span></label>
          <select id="field-capacity" class="f-select">
            <option value="wood_solid">Gỗ tự nhiên &amp; Uốn cong 3D</option>
            <option value="wood_board">Gỗ công nghiệp &amp; Ván ép</option>
            <option value="metal">Cơ khí kim loại &amp; Sơn tĩnh điện</option>
            <option value="upholstery">May bọc đệm &amp; Da / Nỉ cao cấp</option>
            <option value="all_in_one">Gia công trọn gói tổng hợp</option>
          </select>
        </div>
        <div class="f-group">
          <label class="f-label" for="field-scale">Quy mô &amp; Dịch vụ ưu tiên</label>
          <select id="field-scale" class="f-select">
            <option value="prototype_small">Chuyên làm mẫu thử &amp; Đơn hàng nhỏ (Small batch)</option>
            <option value="mass_production">Sản xuất quy mô công nghiệp hàng loạt</option>
            <option value="custom_bespoke">Bespoke may đo đơn chiếc dự án</option>
          </select>
        </div>
      </div>
      <div class="f-group">
        <label class="f-label" for="field-equipment">Trang thiết bị &amp; Công nghệ nổi bật</label>
        <input type="text" id="field-equipment" class="f-input" placeholder="Ví dụ: Máy CNC 5 trục, phòng sơn sấy sạch, xưởng bọc thủ công..." />
      </div>
    `
  }},
  'brand': {{
    badge: 'HỒ SƠ THƯƠNG HIỆU NỘI THẤT',
    title: 'Hồ sơ Thương hiệu / Nhà phát hành',
    subtitle: 'Quản lý bộ sưu tập thương mại, xác thực bản quyền nguồn gốc và tìm kiếm thiết kế hợp tác.',
    submitText: 'Tạo hồ sơ Thương hiệu',
    perkTitle: 'Quyền năng dành cho Thương hiệu phát hành:',
    perkContent: 'Quản trị Brand Profile chính thức, thương mại hóa sản phẩm, kết nối trực tiếp với Designer tài năng và đơn vị cung ứng vật liệu đạt chuẩn.',
    fields: `
      <div class="f-group">
        <label class="f-label" for="field-name">Tên Thương hiệu / Brand <span class="req">*</span></label>
        <input type="text" id="field-name" class="f-input" placeholder="Ví dụ: B+ Furniture, Monos Home..." required />
      </div>
      <div class="form-row-2">
        <div class="f-group">
          <label class="f-label" for="field-segment">Phân khúc sản phẩm <span class="req">*</span></label>
          <select id="field-segment" class="f-select">
            <option value="high_end">Cao cấp / Luxury</option>
            <option value="mid_high">Trung - Cao cấp / Contemporary</option>
            <option value="contract">Dự án công trình / Contract furniture</option>
            <option value="lifestyle">Phong cách sống / Lifestyle Retail</option>
          </select>
        </div>
        <div class="f-group">
          <label class="f-label" for="field-channels">Showroom / Kênh phân phối chính</label>
          <input type="text" id="field-channels" class="f-input" placeholder="Hệ thống cửa hàng, Online, B2B..." />
        </div>
      </div>
      <div class="f-group">
        <label class="f-label" for="field-brand-goal">Mục tiêu gia nhập Monos</label>
        <input type="text" id="field-brand-goal" class="f-input" placeholder="Ví dụ: Mua bản quyền thiết kế mới, mở rộng mạng lưới gia công..." />
      </div>
    `
  }},
  'material': {{
    badge: 'HỒ SƠ NHÀ CUNG CẤP VẬT LIỆU',
    title: 'Hồ sơ Nhà cung ứng vật liệu',
    subtitle: 'Đưa nguyên vật liệu vào Thư viện Monos Material Library và liên kết trực tiếp vào sản phẩm.',
    submitText: 'Tạo hồ sơ Nhà cung cấp vật liệu',
    perkTitle: 'Quyền năng dành cho Đơn vị cung ứng vật liệu:',
    perkContent: 'Đưa mẫu vào thư viện vật liệu để Designer chỉ định trong bản vẽ, ghi nhận vai trò Nhà tài trợ/Cung ứng trong chuỗi Provenance của sản phẩm.',
    fields: `
      <div class="f-group">
        <label class="f-label" for="field-name">Tên Đơn vị cung cấp vật liệu <span class="req">*</span></label>
        <input type="text" id="field-name" class="f-input" placeholder="Ví dụ: TAVICO Timber, Protego Paint..." required />
      </div>
      <div class="form-row-2">
        <div class="f-group">
          <label class="f-label" for="field-material-type">Chủng loại vật liệu chủ đạo <span class="req">*</span></label>
          <select id="field-material-type" class="f-select">
            <option value="wood">Gỗ tự nhiên nguyên khối / Xẻ sấy</option>
            <option value="upholstery">Vải nỉ, Bouclé, Da bò, Simili</option>
            <option value="coating">Sơn phủ dầu lau, PU, Sơn gốc nước an toàn</option>
            <option value="glass_stone">Kính kiến trúc, Đá tự nhiên</option>
            <option value="hardware">Phụ kiện liên kết, ray trượt, kim khí</option>
          </select>
        </div>
        <div class="f-group">
          <label class="f-label" for="field-sample">Chính sách gửi mẫu thử (Swatches)</label>
          <select id="field-sample" class="f-select">
            <option value="free">Sẵn sàng gửi mẫu miễn phí cho Designer</option>
            <option value="on_request">Cung cấp mẫu theo yêu cầu dự án</option>
          </select>
        </div>
      </div>
      <div class="f-group">
        <label class="f-label" for="field-certs">Tiêu chuẩn &amp; Chứng chỉ chất lượng</label>
        <input type="text" id="field-certs" class="f-input" placeholder="FSC, tiêu chuẩn E0/E1, chứng nhận chống cháy Martindale..." />
      </div>
    `
  }},
  'collector': {{
    badge: 'HỒ SƠ NGƯỜI YÊU ĐỒ VẬT / KHÁCH HÀNG',
    title: 'Hồ sơ Người yêu đồ vật &amp; Nhà sưu tập',
    subtitle: 'Lưu giữ những câu chuyện ý nghĩa, chia sẻ dấu vết đời sống và kết nối với các tác giả.',
    submitText: 'Tạo tài khoản Người yêu đồ vật',
    perkTitle: 'Quyền năng dành cho Người yêu đồ vật:',
    perkContent: 'Tạo bộ sưu tập cá nhân (Saved Collection), viết bình luận hoặc chia sẻ kỷ niệm sử dụng thực tế (Community Memories), kết nối với các tác giả yêu thích.',
    fields: `
      <div class="f-group">
        <label class="f-label" for="field-name">Họ và tên của bạn <span class="req">*</span></label>
        <input type="text" id="field-name" class="f-input" placeholder="Ví dụ: Hoàng Minh Anh" required />
      </div>
      <div class="f-group">
        <label class="f-label" for="field-interest">Mối quan tâm chính của bạn trên Monos</label>
        <select id="field-interest" class="f-select">
          <option value="story">Khám phá câu chuyện phía sau mỗi món đồ</option>
          <option value="collect">Tìm kiếm và sưu tầm các thiết kế Việt Nam độc bản</option>
          <option value="connect">Tìm nhà thiết kế / xưởng cho không gian nhà mình</option>
        </select>
      </div>
    `
  }}
}};

function updateFormView() {{
  const key = currentRole === 'designer' ? `designer-${{currentSubRole}}` : currentRole;
  const def = roleDefinitions[key];
  if (!def) return;

  document.getElementById('formBadgeText').innerText = def.badge;
  document.getElementById('formTitle').innerText = def.title;
  document.getElementById('formSubtitle').innerText = def.subtitle;
  document.getElementById('submitBtn').querySelector('span').innerText = def.submitText;
  document.getElementById('sidePerksTitle').innerText = def.perkTitle;
  document.getElementById('sidePerksContent').innerHTML = def.perkContent;
  document.getElementById('dynamicFields').innerHTML = def.fields;
}}

function chooseRole(role) {{
  currentRole = role;
  document.querySelectorAll('.role-item').forEach(item => item.classList.remove('active'));
  const activeItem = document.getElementById(`role-${{role}}`);
  if (activeItem) activeItem.classList.add('active');
  updateFormView();
}}

function chooseSubRole(sub) {{
  currentSubRole = sub;
  document.getElementById('sub-individual').classList.toggle('selected', sub === 'individual');
  document.getElementById('sub-studio').classList.toggle('selected', sub === 'studio');
  updateFormView();
}}

function handleFormSubmit(e) {{
  e.preventDefault();
  const alertBox = document.getElementById('signupAlert');
  alertBox.style.display = 'block';
  alertBox.innerText = 'Đăng ký hồ sơ thành công! Đang lưu thông tin và kết nối vào hệ thống Monos...';
  
  setTimeout(() => {{
    if (currentRole === 'designer') {{
      window.location.href = '/designers';
    }} else if (currentRole === 'factory') {{
      window.location.href = '/factories';
    }} else if (currentRole === 'brand') {{
      window.location.href = '/brands';
    }} else if (currentRole === 'material') {{
      window.location.href = '/materials';
    }} else {{
      window.location.href = '/feed';
    }}
  }}, 1500);
}}

// Initialize
updateFormView();
</script>
</body>
</html>
'''

with open('mirrored_pages/signup.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Dynamic signup page generated successfully!")
