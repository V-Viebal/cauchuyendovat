with open('mirrored_pages/login.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's check styling for selected sim-btn
style_addition = """
.sim-btn.selected {
  border-color: var(--terracotta, #c85a32);
  background: #fdf2ed;
  box-shadow: 0 0 0 2px rgba(200, 90, 50, 0.15);
}
.alert-msg.alert-info {
  background: #eef7ff;
  border: 1px solid #cbe2f7;
  color: #1a568c;
}
"""

if '.sim-btn.selected' not in text:
    text = text.replace('</style>', style_addition + '\n</style>', 1)

# Update the hint and title
text = text.replace(
    'Giả lập đăng nhập nhanh (6 Loại tài khoản)',
    'Chọn hồ sơ mẫu để đăng nhập (6 Loại tài khoản)'
)
text = text.replace(
    '<span class="sim-hint">Bấm để đăng nhập ngay</span>',
    '<span class="sim-hint">Bấm để điền thông tin tài khoản</span>'
)

# Update buttons onclick from quickLogin to selectAccount(..., this)
# 1. Designer cá nhân
text = text.replace(
    "onclick=\"quickLogin('designer_ind', 'Huỳnh Lê Phương Uyên (Designer)', 'designer@monos.vn', '/profile?role=designer_ind')\"",
    "onclick=\"selectAccount('designer_ind', 'Huỳnh Lê Phương Uyên (Designer)', 'designer@monos.vn', '/profile?role=designer_ind', this)\""
)
# 2. Studio
text = text.replace(
    "onclick=\"quickLogin('designer_stu', 'F-Studio (Design Collective)', 'contact@f-studio.vn', '/profile?role=designer_stu')\"",
    "onclick=\"selectAccount('designer_stu', 'F-Studio (Design Collective)', 'contact@f-studio.vn', '/profile?role=designer_stu', this)\""
)
# 3. Factory
text = text.replace(
    "onclick=\"quickLogin('factory', 'Tân Thành Furniture (Nhà máy)', 'factory@tanthanh.vn', '/profile?role=factory')\"",
    "onclick=\"selectAccount('factory', 'Tân Thành Furniture (Nhà máy)', 'factory@tanthanh.vn', '/profile?role=factory', this)\""
)
# 4. Brand
text = text.replace(
    "onclick=\"quickLogin('brand', 'B+ Furniture (Thương hiệu)', 'brand@bplus.vn', '/profile?role=brand')\"",
    "onclick=\"selectAccount('brand', 'B+ Furniture (Thương hiệu)', 'brand@bplus.vn', '/profile?role=brand', this)\""
)
# 5. Material
text = text.replace(
    "onclick=\"quickLogin('material', 'TAVICO Timber (Nhà cung ứng)', 'supplier@tavico.vn', '/profile?role=material')\"",
    "onclick=\"selectAccount('material', 'TAVICO Timber (Nhà cung ứng)', 'supplier@tavico.vn', '/profile?role=material', this)\""
)
# 6. Collector
text = text.replace(
    "onclick=\"quickLogin('collector', 'Hoàng Minh Tuấn (Người yêu đồ vật)', 'customer@monos.vn', '/profile?role=collector')\"",
    "onclick=\"selectAccount('collector', 'Hoàng Minh Tuấn (Người yêu đồ vật)', 'customer@monos.vn', '/profile?role=collector', this)\""
)

# Update destination labels on buttons
text = text.replace('Mở Profile cá nhân &rarr;', 'Chọn hồ sơ này &rarr;')
text = text.replace('Mở Profile Studio &rarr;', 'Chọn hồ sơ này &rarr;')
text = text.replace('Mở Profile Xưởng &rarr;', 'Chọn hồ sơ này &rarr;')
text = text.replace('Mở Profile Brand &rarr;', 'Chọn hồ sơ này &rarr;')
text = text.replace('Mở Profile Vật liệu &rarr;', 'Chọn hồ sơ này &rarr;')

# Replace the script section
import re
new_script = """let selectedAccount = null;

function selectAccount(roleKey, roleName, email, destUrl, btnElem) {
  selectedAccount = { roleKey, roleName, email, destUrl };
  
  // Fill inputs
  document.getElementById('l-email').value = email;
  document.getElementById('l-password').value = '12345678';
  
  // Highlight chosen button
  document.querySelectorAll('.sim-btn').forEach(b => b.classList.remove('selected'));
  if (btnElem) btnElem.classList.add('selected');
  
  const alert = document.getElementById('loginAlert');
  alert.style.display = 'block';
  alert.className = 'alert-msg alert-info';
  alert.innerHTML = `Đã chọn hồ sơ: <strong>${roleName}</strong>. Vui lòng nhấn nút <strong>"Đăng nhập tài khoản"</strong> bên dưới để hoàn tất đăng nhập.`;
}

function handleManualLogin(e) {
  e.preventDefault();
  const alert = document.getElementById('loginAlert');
  alert.style.display = 'block';
  alert.className = 'alert-msg';
  
  const emailInput = document.getElementById('l-email').value.trim();
  
  let targetRole = 'custom';
  let targetName = emailInput;
  let targetEmail = emailInput;
  let targetUrl = '/profile';
  
  if (selectedAccount && selectedAccount.email === emailInput) {
    targetRole = selectedAccount.roleKey;
    targetName = selectedAccount.roleName;
    targetUrl = selectedAccount.destUrl;
  } else {
    // Check known roles by email
    const known = {
      'designer@monos.vn': { role: 'designer_ind', name: 'Huỳnh Lê Phương Uyên (Designer)', url: '/profile?role=designer_ind' },
      'contact@f-studio.vn': { role: 'designer_stu', name: 'F-Studio (Design Collective)', url: '/profile?role=designer_stu' },
      'factory@tanthanh.vn': { role: 'factory', name: 'Tân Thành Furniture (Nhà máy)', url: '/profile?role=factory' },
      'brand@bplus.vn': { role: 'brand', name: 'B+ Furniture (Thương hiệu)', url: '/profile?role=brand' },
      'supplier@tavico.vn': { role: 'material', name: 'TAVICO Timber (Nhà cung ứng)', url: '/profile?role=material' },
      'customer@monos.vn': { role: 'collector', name: 'Hoàng Minh Tuấn (Người yêu đồ vật)', url: '/profile?role=collector' }
    };
    if (known[emailInput]) {
      targetRole = known[emailInput].role;
      targetName = known[emailInput].name;
      targetUrl = known[emailInput].url;
    }
  }
  
  alert.innerHTML = `Đăng nhập thành công! Đang chuyển hướng đến hồ sơ <strong>${targetName}</strong>...`;

  try {
    localStorage.setItem('monos_current_user', JSON.stringify({
      role: targetRole,
      authVersion: 2,
      authSource: "manual-login",
      name: targetName,
      email: targetEmail,
      isLoggedIn: true
    }));
  } catch (err) {}

  setTimeout(() => {
    window.location.href = targetUrl;
  }, 800);
}"""

text = re.sub(r'// Mock Login Session in LocalStorage[\s\S]*?function handleManualLogin\(e\) \{[\s\S]*?setTimeout\(\(\) => \{[\s\S]*?\}, 1200\);\s*\}', '// Mock Login Session in LocalStorage\n' + new_script, text)

with open('mirrored_pages/login.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated mirrored_pages/login.html successfully!')
