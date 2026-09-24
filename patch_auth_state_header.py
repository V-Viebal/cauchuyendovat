import os, glob

# 1. Update monos-shell-DESWxsT-.js
with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'r', encoding='utf-8') as f:
    shell = f.read()

target_fn = 'function v({active:e}){let[t,n]=(0,m.useState)(!1);'
replacement_fn = "function v({active:e}){let[t,n]=(0,m.useState)(!1),[user,setUser]=(0,m.useState)(()=>{try{return JSON.parse(localStorage.getItem('monos_current_user')||'null')}catch(e){return null}});(0,m.useEffect)(()=>{let handler=()=>{try{setUser(JSON.parse(localStorage.getItem('monos_current_user')||'null'))}catch(e){}};window.addEventListener('storage',handler);return()=>window.removeEventListener('storage',handler)},[]);"

target_actions = '(0,h.jsxs)(`a`,{className:`login-link`,href:`/login`,style:{fontSize:`13px`,fontWeight:`600`,color:`var(--ink)`,marginRight:`10px`,textDecoration:`none`},children:[`Đăng nhập`]}),(0,h.jsxs)(`a`,{className:`submit-button header-submit`,href:`/signup`,children:[`Đăng ký hồ sơ `,(0,h.jsx)(i,{size:15,strokeWidth:1.8})]})'

replacement_actions = 'user ? (0,h.jsxs)(`div`,{className:`user-header-profile`,style:{display:`inline-flex`,alignItems:`center`,gap:`10px`,marginRight:`8px`},children:[(0,h.jsxs)(`a`,{className:`profile-pill-link`,href:`/profile`,style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,fontSize:`13px`,fontWeight:`700`,color:`var(--terracotta,#c85a32)`,textDecoration:`none`,background:`#fdf2ed`,padding:`6px 12px`,borderRadius:`999px`,border:`1px solid #f2ded3`},children:[(0,h.jsx)(`span`,{style:{width:`7px`,height:`7px`,borderRadius:`50%`,background:`#2e9b2e`}}),(0,h.jsx)(`span`,{children:user.name||`Hồ sơ của tôi`})]}),(0,h.jsx)(`a`,{className:`logout-btn`,href:`#`,onClick:(e)=>{e.preventDefault();try{localStorage.removeItem("monos_current_user");window.location.reload()}catch(err){}},style:{fontSize:`12.5px`,fontWeight:`600`,color:`#666`,textDecoration:`none`,padding:`4px 8px`},children:`Đăng xuất`})]}):((0,h.jsxs)(`div`,{className:`guest-header-auth`,style:{display:`inline-flex`,alignItems:`center`},children:[(0,h.jsxs)(`a`,{className:`login-link`,href:`/login`,style:{fontSize:`13px`,fontWeight:`600`,color:`var(--ink)`,marginRight:`12px`,textDecoration:`none`},children:[`Đăng nhập`]}),(0,h.jsxs)(`a`,{className:`submit-button header-submit`,href:`/signup`,children:[`Đăng ký hồ sơ `,(0,h.jsx)(i,{size:15,strokeWidth:1.8})]})]}))'

assert target_fn in shell, "target_fn not found"
assert target_actions in shell, "target_actions not found"

shell = shell.replace(target_fn, replacement_fn)
shell = shell.replace(target_actions, replacement_actions)

with open('_next/static/chunks/monos-shell-DESWxsT-.js', 'w', encoding='utf-8') as f:
    f.write(shell)
with open('monos-shell-DESWxsT-.js', 'w', encoding='utf-8') as f:
    f.write(shell)
print("Updated monos-shell with dynamic auth state!")

# 2. Add an inline client script to all mirrored html pages
pages = glob.glob('mirrored_pages/*.html')
script_auth_toggle = '''
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
      
      if (u && u.name) {
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
'''

for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()
    
    if 'syncAuthHeader' not in html:
        html = html.replace('</body>', script_auth_toggle + '</body>')
        with open(p, 'w', encoding='utf-8') as f:
            f.write(html)

print("Injected syncAuthHeader into all HTML pages!")
