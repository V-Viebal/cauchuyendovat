import os

header_html = '''<header class="site-header"><a class="brand" href="/" aria-label="Monos, về trang chủ"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span class="brand-word">MONOS</span></a><nav class="main-nav " aria-label="Điều hướng chính"><a class="nav-link " href="/stories">Câu chuyện đồ vật</a><a class="nav-link " href="/feed">Feed</a><div class="nav-dropdown is-active"><a class="nav-link nav-parent active" href="/network" aria-haspopup="true">Hành trình<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Hành trình — danh mục"><a class="nav-sublink active" href="/designers">Designer</a><a class="nav-sublink " href="/objects">Đồ vật</a><a class="nav-sublink " href="/factories">Nhà máy</a><a class="nav-sublink " href="/brands">Brand</a><a class="nav-sublink " href="/spaces">Không gian</a></div></div><div class="nav-dropdown "><a class="nav-link nav-parent " href="/materials" aria-haspopup="true">Thư viện<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Thư viện — danh mục"><a class="nav-sublink " href="/materials">Vật liệu</a></div></div><a class="nav-link " href="/provenance">Nguồn gốc</a></nav><div class="header-actions"><a class="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></a><a class="login-link" href="/profile" style="font-size:13px;font-weight:700;color:var(--terracotta,#c85a32);margin-right:12px;text-decoration:none;display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#2e9b2e;"></span><span id="headerUserName">Hồ sơ của tôi</span></a><a class="submit-button header-submit" href="#" onclick="logout();return false;" style="background:#555;">Đăng xuất</a><button class="icon-button menu-trigger" type="button" aria-label="Mở menu" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></header>'''

feed_strip_html = '''<div class="feed-strip is-compact" aria-label="Dòng hoạt động Monos"><a class="feed-strip-lead" href="/feed"><span class="feed-live-dot"></span><span>Monos Feed</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div class="feed-strip-items"><div class="feed-strip-track"><a class="feed-strip-item" href="/feed#feed-ambie"><span>Object Profile / 012</span><strong>Dragonfly Glow vừa mở hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-cloudy"><span>Object Profile / 001</span><strong>Cloudy vừa mở thêm một mốc provenance.</strong><small>12 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-factory"><span>Factory Directory</span><strong>F-Studio cập nhật năng lực chế tác bàn Console.</strong><small>38 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-designer"><span>Designer Community</span><strong>Cộng đồng designer đã mở danh sách hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-material"><span>Material Intelligence</span><strong>Gỗ tự nhiên &amp; Kết cấu module.</strong><small>1 giờ trước</small></a><a class="feed-strip-item" href="/feed#feed-brief"><span>Open Brief</span><strong>Đang tìm partner cho một prototype nhỏ.</strong><small>Hôm qua</small></a></div></div><a class="feed-strip-open" href="/feed">Mở feed <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div>'''

footer_html = '''<footer class="site-footer"><a class="footer-brand" href="/"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span>MONOS</span></a><p>Stories of the things we live with.</p><div class="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/brands">Brand</a><a href="/spaces">Không gian</a><a href="/materials">Thư viện</a><a href="/materials">Vật liệu</a><a href="/provenance">Nguồn gốc</a></div><span class="footer-credit">© 2026 Monos / Issue 01</span></footer>'''

html_profile = f'''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/>
<title>Hồ sơ cá nhân — Monos Dashboard</title>
<meta name="description" content="Trang hồ sơ quản trị dành riêng cho từng loại tài khoản trên Monos."/>
<link rel="shortcut icon" href="/favicon.svg"/>
<link rel="icon" href="/favicon.svg"/>
<style>
/* Switcher bar on top of profile */
.profile-mode-bar {{
  background: #fdfaf6;
  border-bottom: 1px solid #ebe5dc;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
}}
.mode-tabs {{
  display: flex;
  gap: 6px;
  overflow-x: auto;
}}
.mode-btn {{
  padding: 6px 12px;
  border: 1px solid #dfdad0;
  background: #fff;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #555;
  transition: all 0.15s;
}}
.mode-btn.active {{
  background: var(--ink);
  color: #fff;
  border-color: var(--ink);
}}

/* Main Profile Hero Layout */
.profile-container {{
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}}

.profile-card-top {{
  background: #ffffff;
  border: 1px solid #e7e5df;
  border-radius: 12px;
  padding: 32px 36px;
  margin-bottom: 32px;
  display: flex;
  gap: 32px;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}}
@media (max-width: 768px) {{
  .profile-card-top {{
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;
  }}
}}
.profile-avatar-wrap {{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f4f3ef;
  flex-shrink: 0;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}}
.profile-avatar-img {{
  width: 100%;
  height: 100%;
  object-fit: cover;
}}
.profile-meta-info {{
  flex: 1;
}}
.profile-role-tag {{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fbf1ec;
  color: var(--terracotta, #c85a32);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}}
.profile-display-name {{
  font-size: 28px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 6px 0;
  letter-spacing: -0.02em;
}}
.profile-bio-text {{
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  max-width: 680px;
  margin-bottom: 12px;
}}
.profile-tags-row {{
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}}
.profile-tag-pill {{
  background: #f4f2ee;
  color: #444;
  padding: 3px 9px;
  border-radius: 6px;
  font-size: 11.5px;
  font-weight: 600;
}}

.profile-actions-col {{
  display: flex;
  flex-direction: column;
  gap: 10px;
}}
.btn-primary-action {{
  padding: 11px 20px;
  background: var(--ink);
  color: #fff;
  border-radius: 999px;
  border: none;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  justify-content: center;
}}
.btn-secondary-action {{
  padding: 10px 18px;
  background: #f4f3ef;
  color: var(--ink);
  border-radius: 999px;
  border: 1px solid #d5d3ce;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}}

/* Grid of Section Cards */
.profile-sections-grid {{
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;
}}
@media (max-width: 900px) {{
  .profile-sections-grid {{
    grid-template-columns: 1fr;
  }}
}}

.section-panel {{
  background: #ffffff;
  border: 1px solid #e7e5df;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 24px;
}}
.section-panel-title {{
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}}

/* Custom lists */
.item-card-row {{
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px;
  background: #faf9f6;
  border: 1px solid #ebe8e1;
  border-radius: 8px;
  margin-bottom: 12px;
}}
.item-card-row img {{
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
}}
.item-card-info {{
  flex: 1;
}}
.item-card-name {{
  font-size: 14.5px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 3px;
}}
.item-card-sub {{
  font-size: 12px;
  color: #666;
}}
.item-status-badge {{
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: #eef7ee;
  color: #1a6d1a;
}}

/* Member list for studio */
.member-chip {{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #f7f6f2;
  border-radius: 8px;
  margin-bottom: 8px;
}}
.member-avatar {{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #555;
}}
.member-info {{
  flex: 1;
}}
.member-name {{
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
}}
.member-role {{
  font-size: 11px;
  color: #777;
}}
</style>
</head>
<body class="antialiased">
<main class="site-shell">
{header_html}
{feed_strip_html}

<!-- Account Simulation Switcher bar -->
<div class="profile-mode-bar">
  <div style="display:flex; align-items:center; gap:8px;">
    <strong style="color:var(--ink);">Chế độ tài khoản:</strong>
    <span style="color:#777; font-size:12px;">Đổi loại account để xem giao diện profile tương ứng:</span>
  </div>
  <div class="mode-tabs">
    <button type="button" class="mode-btn active" id="btn-mode-designer_ind" onclick="switchProfile('designer_ind')">
      A. Designer cá nhân
    </button>
    <button type="button" class="mode-btn" id="btn-mode-designer_stu" onclick="switchProfile('designer_stu')">
      B. Studio thiết kế
    </button>
    <button type="button" class="mode-btn" id="btn-mode-factory" onclick="switchProfile('factory')">
      Nhà máy / Xưởng
    </button>
    <button type="button" class="mode-btn" id="btn-mode-brand" onclick="switchProfile('brand')">
      Thương hiệu (Brand)
    </button>
    <button type="button" class="mode-btn" id="btn-mode-material" onclick="switchProfile('material')">
      Nhà cung cấp vật liệu
    </button>
    <button type="button" class="mode-btn" id="btn-mode-collector" onclick="switchProfile('collector')">
      Người yêu đồ vật
    </button>
  </div>
</div>

<div class="profile-container">

  <!-- Top Hero Profile Card -->
  <div class="profile-card-top">
    <div class="profile-avatar-wrap">
      <img id="p-avatar" class="profile-avatar-img" src="/huynh-le-phuong-uyen-portrait.jpg" alt="Profile avatar" />
    </div>
    <div class="profile-meta-info">
      <div class="profile-role-tag" id="p-role-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path></svg>
        <span id="p-role-text">DESIGNER CÁ NHÂN · HỒ SƠ CHÍNH THỨC</span>
      </div>
      <h1 class="profile-display-name" id="p-name">Huỳnh Lê Phương Uyên</h1>
      <p class="profile-bio-text" id="p-bio">Là một người thiết kế nội thất trẻ, quan tâm đến sự giao thoa giữa con người, văn hóa và vật liệu. Uyên theo đuổi tư duy thiết kế tinh giản, giàu tính kể chuyện.</p>
      <div class="profile-tags-row" id="p-tags">
        <span class="profile-tag-pill">Table &amp; Module</span>
        <span class="profile-tag-pill">Gỗ &amp; Kính</span>
        <span class="profile-tag-pill">HMA 2026 Open Award</span>
        <span class="profile-tag-pill">TP. Hồ Chí Minh · Việt Nam</span>
      </div>
    </div>
    <div class="profile-actions-col">
      <a href="#" class="btn-primary-action" id="p-main-btn" onclick="alert('Mở trình soạn thảo đồ vật mới!'); return false;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        <span id="p-main-btn-text">Đăng đồ vật mới</span>
      </a>
      <a href="#" class="btn-secondary-action" onclick="alert('Đã lưu các thay đổi hồ sơ!'); return false;">Chỉnh sửa hồ sơ</a>
    </div>
  </div>

  <!-- Dynamic Section Layout based on role -->
  <div class="profile-sections-grid">
    <!-- Left main column -->
    <div>
      <div class="section-panel" id="mainSectionPanel">
        <!-- Rendered dynamically -->
      </div>
      
      <div class="section-panel" id="secondarySectionPanel">
        <!-- Rendered dynamically -->
      </div>
    </div>

    <!-- Right side column -->
    <div>
      <div class="section-panel" id="sideSectionPanel">
        <!-- Rendered dynamically -->
      </div>

      <div class="section-panel" style="background:#faf9f6;">
        <div style="font-size:14px; font-weight:700; color:var(--ink); margin-bottom:10px;">Chuỗi giá trị 7 lớp (7 Layers)</div>
        <p style="font-size:12px; color:#666; line-height:1.45; margin-bottom:12px;">Hồ sơ của bạn được tích hợp bảo hộ bản quyền và kết nối chuỗi minh bạch trên Monos.</p>
        <div style="font-size:11px; font-weight:700; color:var(--terracotta,#c85a32); text-transform:uppercase;">Trạng thái tài khoản:</div>
        <div style="font-size:13px; color:#2e9b2e; font-weight:700; margin-top:2px;">&#10003; Đã xác minh chính thức (Verified)</div>
      </div>
    </div>
  </div>

</div>

{footer_html}
</main>

<script>
const profileData = {{
  'designer_ind': {{
    roleTag: 'DESIGNER CÁ NHÂN · XÁC THỰC BẢN QUYỀN',
    name: 'Huỳnh Lê Phương Uyên',
    avatar: '/huynh-le-phuong-uyen-portrait.jpg',
    bio: 'Là một người thiết kế nội thất trẻ, quan tâm đến sự giao thoa giữa con người, văn hóa và vật liệu. Tác giả của tác phẩm Hoa Muối Table (Open Award HMA 2026).',
    tags: ['Table & Module', 'Gỗ & Kính', 'HMA 2026', 'TP. Hồ Chí Minh'],
    mainBtn: 'Đăng đồ vật mới',
    mainSection: `
      <div class="section-panel-title">
        <span>Tác phẩm &amp; Đồ vật đã phát hành (01)</span>
        <a href="/objects/hoa-muoi-table" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:600;">Xem chi tiết &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/hoa-muoi-table-1.jpg" alt="Hoa Muối Table" />
        <div class="item-card-info">
          <div class="item-card-name">Hoa Muối Table</div>
          <div class="item-card-sub">W2600 × D1000 × H750 mm · Gỗ TAVICO &amp; Kính module</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Chế tác bởi: Công ty CP Gỗ Tân Thành</div>
        </div>
        <span class="item-status-badge">Đang mở hồ sơ</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Liên kết đối tác sản xuất &amp; Vật liệu</div>
      <p style="font-size:12.5px; color:#666; margin-bottom:12px;">Các đơn vị đã cùng đồng hành trong chuỗi thực hiện tác phẩm:</p>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="padding:10px 12px; background:#f7f6f2; border-radius:6px; font-size:13px; display:flex; justify-content:space-between;">
          <span><strong>TAVICO Timber:</strong> Nhà tài trợ gỗ tự nhiên</span>
          <span style="color:#2e9b2e; font-weight:600;">Đã xác nhận</span>
        </div>
        <div style="padding:10px 12px; background:#f7f6f2; border-radius:6px; font-size:13px; display:flex; justify-content:space-between;">
          <span><strong>Gỗ Tân Thành:</strong> Đơn vị thi công &amp; lắp ghép module</span>
          <span style="color:#2e9b2e; font-weight:600;">Đã xác nhận</span>
        </div>
      </div>
    `,
    sideSection: `
      <div class="section-panel-title">Yêu cầu &amp; Kết nối mới</div>
      <div style="font-size:12.5px; color:#555; line-height:1.45;">
        <div style="margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid #eee;">
          <strong style="color:var(--ink);">F-Studio:</strong> Đã gửi lời mời hợp tác thiết kế dự án Seating mới.
          <div style="font-size:11px; color:#888; margin-top:2px;">15 phút trước</div>
        </div>
        <div>
          <strong style="color:var(--ink);">B+ Furniture:</strong> Quan tâm đến bản quyền sản xuất thương mại Hoa Muối Table.
          <div style="font-size:11px; color:#888; margin-top:2px;">Hôm qua</div>
        </div>
      </div>
    `
  }},

  'designer_stu': {{
    roleTag: 'STUDIO THIẾT KẾ · DOANH NGHIỆP SÁNG TẠO',
    name: 'F-Studio',
    avatar: '/ban-mangthit-main.jpg',
    bio: 'Văn phòng thiết kế đương đại nghiên cứu các hình thái di sản kiến trúc Việt Nam. Đơn vị phát triển Bàn Console Mangthit cùng nhà thiết kế Trần Thảo Nhiên.',
    tags: ['Design Collective', 'Console & Furniture', 'Heritage Forms', 'Mộc & Kim khí'],
    mainBtn: 'Mở Open Brief mới',
    mainSection: `
      <div class="section-panel-title">
        <span>Bộ sưu tập &amp; Sản phẩm của Studio (01)</span>
        <a href="/objects/ban-mangthit" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:600;">Xem hồ sơ &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/ban-mangthit-main.jpg" alt="Bàn Console Mangthit" />
        <div class="item-card-info">
          <div class="item-card-name">Bàn Console Mangthit</div>
          <div class="item-card-sub">Lấy cảm hứng từ lò gạch Măng Thít · Hoàn thiện sắc đỏ lửa nung</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Lead Designer: Trần Thảo Nhiên</div>
        </div>
        <span class="item-status-badge">Đang mở hồ sơ</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">
        <span>Quản lý nhóm &amp; Gắn thẻ thành viên (Team Attribution)</span>
        <button type="button" onclick="alert('Đã gửi email mời thành viên mới gia nhập Studio!');" style="font-size:12px; border:none; background:none; color:var(--terracotta,#c85a32); font-weight:700; cursor:pointer;">+ Mời thành viên</button>
      </div>
      <div class="member-chip">
        <div class="member-avatar">TN</div>
        <div class="member-info">
          <div class="member-name">Trần Thảo Nhiên</div>
          <div class="member-role">Lead Furniture Designer · Tác giả Console Mangthit</div>
        </div>
        <span style="font-size:11px; background:#e8f4fd; color:#0066cc; padding:2px 8px; border-radius:4px;">Chính thức</span>
      </div>
      <div class="member-chip">
        <div class="member-avatar">3D</div>
        <div class="member-info">
          <div class="member-name">Lê Quang Huy</div>
          <div class="member-role">3D Visualization &amp; Technical Modeler</div>
        </div>
        <span style="font-size:11px; background:#e8f4fd; color:#0066cc; padding:2px 8px; border-radius:4px;">Chính thức</span>
      </div>
    `,
    sideSection: `
      <div class="section-panel-title">
        <span>Open Briefs đang tìm xưởng</span>
      </div>
      <div style="padding:12px; background:#faf8f5; border:1px dashed #d5cfc4; border-radius:8px; font-size:12px;">
        <strong style="color:var(--ink); font-size:13px; display:block; margin-bottom:4px;">Tìm xưởng mộc uốn 3D cho dự án Seating 2026</strong>
        <p style="color:#666; margin:0 0 8px 0;">Yêu cầu làm 02 mẫu prototype trong vòng 3 tuần. Vật liệu gỗ Tần Bì.</p>
        <span style="color:#2e9b2e; font-weight:700;">3 Xưởng đã gửi đề xuất hợp tác &rarr;</span>
      </div>
    `
  }},

  'factory': {{
    roleTag: 'NHÀ MÁY / XƯỞNG SẢN XUẤT CHẾ TÁC',
    name: 'Tân Thành Furniture',
    avatar: '/nhong-nhong-main.jpg',
    bio: 'Đơn vị gia công mộc, uốn cong đa chiều và hoàn thiện nội thất kỹ thuật cao. Hỗ trợ sản xuất thành công tác phẩm Nhong Nhong và Ambie Shelf tại HMA 2026.',
    tags: ['Gỗ tự nhiên', 'Uốn cong 3D', 'Prototype & Small batch', 'Đồng Nai · Việt Nam'],
    mainBtn: 'Cập nhật năng lực xưởng',
    mainSection: `
      <div class="section-panel-title">
        <span>Đồ vật đã hỗ trợ chế tác thành công</span>
      </div>
      <div class="item-card-row">
        <img src="/nhong-nhong-main.jpg" alt="Nhong Nhong" />
        <div class="item-card-info">
          <div class="item-card-name">Nhong Nhong (Đa năng)</div>
          <div class="item-card-sub">Designers: Nguyễn Ngọc Chung &amp; Nguyễn Cẩm Châu</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Gia công mộng lồng ghép chuẩn xác 100%</div>
        </div>
        <span class="item-status-badge">HMA 2026</span>
      </div>
      <div class="item-card-row">
        <img src="/ambie-shelf-wide.jpg" alt="Ambie Shelf" />
        <div class="item-card-info">
          <div class="item-card-name">Ambie Shelf (Kệ di động)</div>
          <div class="item-card-sub">Designers: Cao Thị Mai &amp; Nguyễn Daniela Thạch Thảo</div>
        </div>
        <span class="item-status-badge">Đã xác minh</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Năng lực máy móc &amp; Tiêu chuẩn xưởng</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12.5px;">
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>Máy CNC 5 trục:</strong> Gia công biên dạng uốn lượn phức tạp</div>
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>Phòng sơn sấy:</strong> Đạt tiêu chuẩn hoàn thiện bề mặt mờ tự nhiên</div>
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>Thợ may bọc da:</strong> 15 năm kinh nghiệm hoàn thiện chi tiết</div>
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>Dịch vụ:</strong> Nhận làm mẫu prototype từ bản vẽ kỹ thuật</div>
      </div>
    `,
    sideSection: `
      <div class="section-panel-title">Open Briefs phù hợp</div>
      <div style="font-size:12px; color:#555;">
        <p style="margin-bottom:8px;"><strong>F-Studio</strong> vừa đăng brief tìm xưởng uốn mộc 3D cho dự án ghế mới.</p>
        <button type="button" onclick="alert('Đã gửi đề xuất báo giá tới F-Studio!');" class="btn-primary-action" style="padding:7px 14px; font-size:12px; width:100%;">Gửi đề xuất nhận mẫu &rarr;</button>
      </div>
    `
  }},

  'brand': {{
    roleTag: 'THƯƠNG HIỆU NỘI THẤT · PHÂN PHỐI CHÍNH HÃNG',
    name: 'B+ Furniture Studio',
    avatar: '/cloudy-profile-photo.jpg',
    bio: 'Thương hiệu nội thất đương đại tôn vinh cảm xúc và tính thư thái trong không gian sống. Sở hữu bản quyền thiết kế ghế bành Cloudy (Cloudy Armchair).',
    tags: ['Contemporary Seating', 'Bản quyền thiết kế', 'Showroom TP.HCM & Hà Nội'],
    mainBtn: 'Thêm sản phẩm BST',
    mainSection: `
      <div class="section-panel-title">
        <span>Bộ sưu tập thương mại trên Monos</span>
        <a href="/objects/cloudy" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:600;">Xem hồ sơ &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/cloudy-profile-photo.jpg" alt="Ghế Cloudy" />
        <div class="item-card-info">
          <div class="item-card-name">Ghế Cloudy (Lounge Chair)</div>
          <div class="item-card-sub">SKU: LC060 · Giá niêm yết: 16.700.000 ₫</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Thiết kế độc quyền bởi B+ Team</div>
        </div>
        <span class="item-status-badge">Đang kinh doanh</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Tìm kiếm bản quyền thiết kế mới</div>
      <p style="font-size:12.5px; color:#666;">B+ đang tìm kiếm các bản vẽ bàn ăn và ghế thư giãn từ các Designer độc lập để ký kết hợp tác sản xuất thương mại quý 4/2026.</p>
      <div style="margin-top:10px;"><a href="/designers" class="btn-secondary-action" style="font-size:12px; padding:6px 14px; display:inline-block;">Duyệt danh bạ Designer &rarr;</a></div>
    `,
    sideSection: `
      <div class="section-panel-title">Kênh phân phối</div>
      <div style="font-size:12.5px; color:#555; line-height:1.5;">
        <div><strong>Showroom chính:</strong> Quận 2, TP. Hồ Chí Minh</div>
        <div><strong>Đại lý:</strong> Hà Nội, Đà Nẵng</div>
        <div><strong>Chứng nhận:</strong> Bản quyền thương mại bảo hộ bởi Monos</div>
      </div>
    `
  }},

  'material': {{
    roleTag: 'NHÀ CUNG CẤP VẬT LIỆU · NGUYÊN LIỆU BỀN VỮNG',
    name: 'TAVICO Timber',
    avatar: '/hoa-muoi-table-3.jpg',
    bio: 'Đơn vị nhập khẩu và phân phối gỗ tự nhiên xẻ sấy hàng đầu Việt Nam. Tự hào là đơn vị tài trợ vật liệu gỗ chính thức cho dự án Hoa Muối Table (HMA 2026).',
    tags: ['Gỗ Tự Nhiên', 'Chứng nhận FSC', 'Kho gỗ Đồng Nai', 'Tài trợ HMA 2026'],
    mainBtn: 'Đưa mẫu vào thư viện',
    mainSection: `
      <div class="section-panel-title">
        <span>Vật liệu đã cấp cho các đồ vật thực tế</span>
      </div>
      <div class="item-card-row">
        <img src="/hoa-muoi-table-1.jpg" alt="Hoa Muối Table" />
        <div class="item-card-info">
          <div class="item-card-name">Gỗ tự nhiên xẻ sấy chất lượng cao</div>
          <div class="item-card-sub">Được chỉ định chế tác: Bàn Hoa Muối (Hoa Muối Table)</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Designer: Huỳnh Lê Phương Uyên</div>
        </div>
        <span class="item-status-badge">Được ghi nhận</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Bảng mẫu thử trong Material Library</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12px;">
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>White Ash (Tần Bì):</strong> Sấy đạt độ ẩm 10-12%, vân thẳng</div>
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>American Walnut (Óc Chó):</strong> Màu nâu socola trầm ấm</div>
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>White Oak (Sồi Trắng):</strong> Độ cứng cao, kháng sâu bọ tự nhiên</div>
        <div style="background:#f7f6f2; padding:10px; border-radius:6px;"><strong>Teak (Giá Tỵ):</strong> Chống nước chịu ẩm chuyên dụng outdoor</div>
      </div>
    `,
    sideSection: `
      <div class="section-panel-title">Yêu cầu gửi Swatches</div>
      <div style="font-size:12px; color:#555;">
        <p><strong>Duy Khánh</strong> vừa yêu cầu gửi hộp mẫu gỗ mẫu mộc cho dự án Bàn Kiệu.</p>
        <button type="button" onclick="alert('Đã xác nhận chuyển phát mẫu thử vật liệu đến Designer!');" class="btn-primary-action" style="padding:7px 14px; font-size:12px; width:100%;">Xác nhận gửi mẫu &rarr;</button>
      </div>
    `
  }},

  'collector': {{
    roleTag: 'NGƯỜI YÊU ĐỒ VẬT · NHÀ SƯU TẬP',
    name: 'Hoàng Minh Tuấn',
    avatar: '/om-lifestyle.jpeg',
    bio: 'Kiến trúc sư & Người yêu thích sưu tầm các món đồ nội thất mang đậm dấu ấn văn hóa và tay nghề thủ công Việt Nam.',
    tags: ['Nhà sưu tập', 'Độc bản HMA', 'Yêu đồ gỗ thủ công', 'Hà Nội'],
    mainBtn: 'Chia sẻ kỷ niệm đồ vật',
    mainSection: `
      <div class="section-panel-title">
        <span>Bộ sưu tập đã lưu (Saved Collection - 03)</span>
      </div>
      <div class="item-card-row">
        <img src="/ban-kieu-main.jpg" alt="Bàn Kiệu" />
        <div class="item-card-info">
          <div class="item-card-name">Bàn Kiệu (Palanquin Table)</div>
          <div class="item-card-sub">Designer: Duy Khánh · Bàn ăn khiêng kiệu</div>
        </div>
        <a href="/objects/ban-kieu" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:700;">Xem lại &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/hoa-muoi-table-1.jpg" alt="Hoa Muối Table" />
        <div class="item-card-info">
          <div class="item-card-name">Hoa Muối Table</div>
          <div class="item-card-sub">Designer: Huỳnh Lê Phương Uyên · Module gỗ &amp; kính</div>
        </div>
        <a href="/objects/hoa-muoi-table" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:700;">Xem lại &rarr;</a>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Dấu vết đời sống đã đóng góp (Community Memories)</div>
      <p style="font-size:12.5px; color:#666; margin-bottom:10px;">Những câu chuyện đời thực bạn đã chia sẻ cùng cộng đồng Monos:</p>
      <div style="background:#f7f6f2; padding:12px; border-radius:6px; font-size:12.5px; line-height:1.45;">
        <strong>Ghế Cloudy sau 1 năm sử dụng:</strong> "Mút D40 ngồi êm và vải Bouclé rất dễ vệ sinh. Chiếc ghế luôn là nơi tôi ngồi đọc sách mỗi tối."
      </div>
    `,
    sideSection: `
      <div class="section-panel-title">Đang theo dõi</div>
      <div style="font-size:12.5px; color:#555; line-height:1.5;">
        <div>&bull; Duy Khánh (Designer)</div>
        <div>&bull; Huỳnh Lê Phương Uyên (Designer)</div>
        <div>&bull; F-Studio (Design Collective)</div>
        <div>&bull; B+ Furniture (Brand)</div>
      </div>
    `
  }}
}};

function switchProfile(mode) {{
  const d = profileData[mode];
  if (!d) return;

  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-mode-${{mode}}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.getElementById('p-role-text').innerText = d.roleTag;
  document.getElementById('p-name').innerText = d.name;
  document.getElementById('p-avatar').src = d.avatar;
  document.getElementById('p-bio').innerText = d.bio;
  document.getElementById('headerUserName').innerText = d.name;
  document.getElementById('p-main-btn-text').innerText = d.mainBtn;

  let tagsHtml = '';
  d.tags.forEach(t => tagsHtml += `<span class="profile-tag-pill">${{t}}</span>`);
  document.getElementById('p-tags').innerHTML = tagsHtml;

  document.getElementById('mainSectionPanel').innerHTML = d.mainSection;
  document.getElementById('secondarySectionPanel').innerHTML = d.secondarySection;
  document.getElementById('sideSectionPanel').innerHTML = d.sideSection;

  try {{
    localStorage.setItem('monos_current_user', JSON.stringify({{
      role: mode,
      name: d.name,
      isLoggedIn: true
    }}));
  }} catch(e) {{}}
}}

function logout() {{
  try {{
    localStorage.removeItem('monos_current_user');
  }} catch(e) {{}}
  alert('Đã đăng xuất khỏi tài khoản!');
  window.location.href = '/login';
}}

// Check if user came from quick login
window.addEventListener('DOMContentLoaded', () => {{
  let savedRole = 'designer_ind';
  try {{
    const u = JSON.parse(localStorage.getItem('monos_current_user') || '{{}}');
    if (u && u.role && profileData[u.role]) {{
      savedRole = u.role;
    }}
  }} catch(e) {{}}
  switchProfile(savedRole);
}});
</script>
</body>
</html>
'''

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(html_profile)

print("Created mirrored_pages/profile.html successfully!")

# Update server.py to add /profile route
with open('server.py', 'r', encoding='utf-8') as f:
    srv = f.read()

if '"/profile"' not in srv:
    target = '"/login": "login.html",'
    srv = srv.replace(target, target + '\n    "/profile": "profile.html",')
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(srv)
    print("Added /profile route to server.py!")
