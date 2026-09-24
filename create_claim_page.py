import re

html_template = """<!DOCTYPE html><html lang="vi"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/css/index.B8WgWaCR.css" data-rsc-css-href="/_next/static/css/index.B8WgWaCR.css" data-precedence="vite-rsc/importer-resources"/><title>Xác thực quyền quản lý hồ sơ — Monos</title><meta name="description" content="Xác thực quyền tác giả và nhận bàn giao quyền quản trị hồ sơ chính thức trên Monos."/><link rel="shortcut icon" href="/favicon.svg"/><link rel="icon" href="/favicon.svg"/></head><body class="antialiased"><main class="site-shell"><header class="site-header"><a class="brand" href="/" aria-label="Monos, về trang chủ"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span class="brand-word">MONOS</span></a><nav class="main-nav " aria-label="Điều hướng chính"><a class="nav-link " href="/stories">Câu chuyện đồ vật</a><a class="nav-link " href="/feed">Feed</a><div class="nav-dropdown is-active"><a class="nav-link nav-parent active" href="/network" aria-haspopup="true">Hành trình<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Hành trình — danh mục"><a class="nav-sublink active" href="/designers">Designer</a><a class="nav-sublink " href="/objects">Đồ vật</a><a class="nav-sublink " href="/factories">Nhà máy</a><a class="nav-sublink " href="/brands">Brand</a><a class="nav-sublink " href="/spaces">Không gian</a></div></div><div class="nav-dropdown "><a class="nav-link nav-parent " href="/materials" aria-haspopup="true">Thư viện<span class="nav-caret" aria-hidden="true">⌄</span></a><div class="nav-submenu" aria-label="Thư viện — danh mục"><a class="nav-sublink " href="/materials">Vật liệu</a></div></div><a class="nav-link " href="/provenance">Nguồn gốc</a></nav><div class="header-actions"><a class="icon-button search-trigger" href="/feed" aria-label="Mở Monos Feed"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></a><a class="login-link" href="/login" style="font-size:13px;font-weight:600;color:var(--ink);margin-right:12px;text-decoration:none;">Đăng nhập</a><a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><button class="icon-button menu-trigger" type="button" aria-label="Mở menu" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></header><div class="feed-strip is-compact" aria-label="Dòng hoạt động Monos"><a class="feed-strip-lead" href="/feed"><span class="feed-live-dot"></span><span>Monos Feed</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><div class="feed-strip-items"><div class="feed-strip-track"><a class="feed-strip-item" href="/feed#feed-ambie"><span>Object Profile / 012</span><strong>Dragonfly Glow vừa mở hồ sơ mới.</strong><small>vừa xong</small></a><a class="feed-strip-item" href="/feed#feed-cloudy"><span>Object Profile / 001</span><strong>Cloudy vừa mở thêm một mốc provenance.</strong><small>12 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-factory"><span>Factory Directory</span><strong>F-Studio cập nhật năng lực chế tác bàn Console.</strong><small>38 phút trước</small></a><a class="feed-strip-item" href="/feed#feed-designer"><span>Designer Community</span><strong>Cộng đồng designer đã mở danh sách hồ sơ mới.</strong><small>vừa xong</small></a></div></div><a class="feed-strip-open" href="/feed">Mở feed <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div>

<article class="claim-profile-page section-pad" style="padding-top:48px; padding-bottom:80px;">
  <div class="claim-profile-intro">
    <div class="eyebrow muted"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Bản quyền tác giả &amp; Quyền sở hữu</div>
    <h1>Nhận quyền<br/><em>quản trị hồ sơ.</em></h1>
    <p>Monos là kho lưu bạ đồ vật phi lợi nhuận ghi nhận công sức của người thiết kế và các đơn vị sản xuất. Nếu đây là hồ sơ của bạn hoặc studio của bạn, hãy xác thực để tiếp nhận quyền đăng tải, cập nhật và kết nối đối tác B2B trực tiếp.</p>
    <div class="claim-steps">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 1. Điền thông tin cá nhân hoặc đại diện studio</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 2. Cung cấp liên kết đối chiếu (Portfolio, Behance, Email chính thức)</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 3. Monos xác nhận quyền sở hữu và kích hoạt tài khoản chính chủ</span>
    </div>
  </div>

  <div>
    <form class="claim-form" id="claimForm" onsubmit="handleClaimSubmit(event)">
      <div class="claim-form-head">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
        <h3 style="font-family:var(--serif); font-size:22px; margin:0;">Biểu mẫu yêu cầu xác thực hồ sơ</h3>
      </div>
      
      <label>
        Tên hồ sơ bạn muốn nhận quyền quản lý *
        <input type="text" id="targetProfile" required placeholder="Ví dụ: Huỳnh Lê Phương Uyên hoặc F-Studio" />
      </label>

      <div class="claim-form-grid">
        <label>
          Họ và tên của bạn *
          <input type="text" id="claimantName" required placeholder="Họ và tên người đại diện" />
        </label>
        <label>
          Vai trò / Mối liên hệ với hồ sơ *
          <input type="text" id="claimantRole" required placeholder="Tác giả chính / Lead Designer / Đại diện Studio" />
        </label>
      </div>

      <div class="claim-form-grid">
        <label>
          Email liên hệ chính thức *
          <input type="email" id="claimantEmail" required placeholder="email@domain.com" />
        </label>
        <label>
          Số điện thoại / Zalo *
          <input type="tel" id="claimantPhone" required placeholder="+84 ..." />
        </label>
      </div>

      <label>
        Liên kết minh chứng quyền tác giả / quyền sở hữu (Website, Behance, Drive tài liệu)
        <input type="url" id="claimantProof" placeholder="https://behance.net/... hoặc liên kết hồ sơ dự thi" />
      </label>

      <label>
        Ghi chú bổ sung
        <textarea id="claimantNote" rows="3" placeholder="Thông tin bổ sung về các tác phẩm cần đính kèm hoặc xác thực quyền sở hữu..."></textarea>
      </label>

      <label class="claim-consent">
        <input type="checkbox" required />
        <span>Tôi cam kết các thông tin khai báo trên là chính xác và tôi là tác giả hoặc người đại diện hợp pháp được ủy quyền quản lý hồ sơ này trên Monos.</span>
      </label>

      <button type="submit" class="dark-button">Gửi yêu cầu xác thực hồ sơ &rarr;</button>
      <small>Đội ngũ biên tập Monos sẽ phản hồi và cấp quyền tài khoản chính chủ qua email của bạn trong vòng 24 giờ làm việc.</small>
    </form>

    <div class="claim-success" id="claimSuccessBox" style="display:none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <h2>Yêu cầu đã được tiếp nhận!</h2>
      <p id="claimSuccessMsg">Hệ thống đã ghi nhận hồ sơ xác thực quyền quản trị. Đội ngũ Monos sẽ liên hệ qua email và trao quyền quản lý trong thời gian sớm nhất.</p>
      <div style="display:flex; gap:12px; margin-top:24px;">
        <a class="dark-button" href="/designers">Quay lại danh bạ Designer</a>
        <a class="dark-button" style="background:#555;" href="/">Về trang chủ Monos</a>
      </div>
    </div>
  </div>
</article>

<footer class="site-footer"><a class="footer-brand" href="/"><span class="logo-mark" aria-hidden="true"><span></span><span></span></span><span>MONOS</span></a><p>Stories of the things we live with.</p><div class="footer-links"><a href="/stories">Câu chuyện đồ vật</a><a href="/feed">Feed</a><a href="/network">Hành trình</a><a href="/designers">Designer</a><a href="/objects">Đồ vật</a><a href="/factories">Nhà máy</a><a href="/brands">Brand</a><a href="/spaces">Không gian</a><a href="/materials">Thư viện</a><a href="/materials">Vật liệu</a><a href="/provenance">Nguồn gốc</a></div><span class="footer-credit">© 2026 Monos / Issue 01</span></footer>
</main>

<script>
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const profileParam = urlParams.get('profile');
  if (profileParam) {
    const input = document.getElementById('targetProfile');
    if (input) input.value = profileParam;
  }
});

function handleClaimSubmit(e) {
  e.preventDefault();
  const profileName = document.getElementById('targetProfile').value;
  const email = document.getElementById('claimantEmail').value;
  
  document.getElementById('claimForm').style.display = 'none';
  const successBox = document.getElementById('claimSuccessBox');
  successBox.style.display = 'block';
  document.getElementById('claimSuccessMsg').innerHTML = `Yêu cầu nhận quyền quản lý hồ sơ <strong>${profileName}</strong> đã được gửi thành công. Chúng tôi đã gửi xác nhận đến email <strong>${email}</strong> và sẽ hỗ trợ cấp quyền chính chủ trong 24 giờ.`;
}
</script>

<script>
(function(){
  function syncAuthHeader() {
    try {
      var u = JSON.parse(localStorage.getItem('monos_current_user') || 'null');
      var container = document.querySelector('.header-actions');
      if (!container) return;
      
      var loginLink = container.querySelector('.login-link');
      var signupBtn = container.querySelector('.submit-button.header-submit');
      var userBox = container.querySelector('.user-header-profile');
      
      if (u && u.name && u.isLoggedIn === true && u.authVersion === 2 && u.role) {
        if (loginLink) loginLink.style.display = 'none';
        if (signupBtn) signupBtn.style.display = 'none';
        
        if (!userBox) {
          var box = document.createElement('div');
          box.className = 'user-header-profile';
          box.style.display = 'inline-flex';
          box.style.alignItems = 'center';
          box.style.gap = '10px';
          box.style.marginRight = '8px';
          var displayName = u.name.length > 18 ? u.name.substring(0, 16) + '...' : u.name;
          box.innerHTML = '<a href="/profile" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:var(--terracotta,#c85a32);text-decoration:none;background:#fdf2ed;padding:6px 12px;border-radius:999px;border:1px solid #f2ded3;"><span style="width:7px;height:7px;border-radius:50%;background:#2e9b2e;"></span><span>' + displayName + '</span></a><a href="#" class="logout-link-btn" style="font-size:12.5px;font-weight:600;color:#666;text-decoration:none;padding:4px 8px;">Đăng xuất</a>';
          container.insertBefore(box, container.querySelector('.menu-trigger') || null);
          
          box.querySelector('.logout-link-btn').onclick = function(e){
            e.preventDefault();
            localStorage.removeItem('monos_current_user');
            window.location.reload();
          };
        }
      } else {
        if (loginLink) loginLink.style.display = '';
        if (signupBtn) signupBtn.style.display = '';
        if (userBox) userBox.remove();
      }
    } catch(e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncAuthHeader);
  } else {
    syncAuthHeader();
  }
  window.addEventListener('storage', syncAuthHeader);
})();
</script>
</body></html>
"""

with open('mirrored_pages/claim-profile.html', 'w', encoding='utf-8') as f:
    f.write(html_template)
print("Created mirrored_pages/claim-profile.html successfully!")

# Add to server.py
with open('server.py', 'r', encoding='utf-8') as f:
    server_code = f.read()

if '"/claim-profile"' not in server_code:
    server_code = server_code.replace(
        '"/signup": "signup.html",',
        '"/signup": "signup.html",\n    "/claim-profile": "claim-profile.html",'
    )
    with open('server.py', 'w', encoding='utf-8') as f:
        f.write(server_code)
    print("Added /claim-profile to server.py ROUTE_PAGES!")
