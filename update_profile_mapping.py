import re

# Update mirrored_pages/profile.html
with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's verify how URL params are handled in DOMContentLoaded
old_loader = """window.addEventListener('DOMContentLoaded', () => {
  let savedRole = 'designer_ind';
  try {
    const u = JSON.parse(localStorage.getItem('monos_current_user') || '{}');
    if (u && u.role && profileData[u.role]) {
      savedRole = u.role;
    }
  } catch(e) {}
  switchProfile(savedRole);
});"""

new_loader = """window.addEventListener('DOMContentLoaded', () => {
  let roleToLoad = 'designer_ind';
  
  // 1. Check URL query param ?role=... (Highest priority)
  const urlParams = new URLSearchParams(window.location.search);
  const paramRole = urlParams.get('role');
  
  if (paramRole && profileData[paramRole]) {
    roleToLoad = paramRole;
    // Update or sync with stored user
    try {
      let u = JSON.parse(localStorage.getItem('monos_current_user') || '{}');
      u.role = paramRole;
      if (!u.name || u.role !== paramRole) {
        u.name = profileData[paramRole].name;
      }
      u.isLoggedIn = true;
      localStorage.setItem('monos_current_user', JSON.stringify(u));
    } catch(e) {}
  } else {
    // 2. Check localStorage
    try {
      const u = JSON.parse(localStorage.getItem('monos_current_user') || '{}');
      if (u && u.role && profileData[u.role]) {
        roleToLoad = u.role;
      }
    } catch(e) {}
  }
  
  switchProfile(roleToLoad);
});"""

assert "window.addEventListener('DOMContentLoaded'" in text, "DOMContentLoaded not found in profile.html"
text = re.sub(r"window\.addEventListener\('DOMContentLoaded', \(\) => \{.*?\}\);", new_loader, text, flags=re.DOTALL)

# Also check main button text in designer_ind
text = text.replace("mainBtn: 'Gửi đề xuất hợp tác',", "mainBtn: 'Đăng tác phẩm mới',")

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated profile.html URL parameter and role loader!")
