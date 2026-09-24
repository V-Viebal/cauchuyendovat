import glob

matchmaking_html = """
<!-- B2B Matchmaking & 3D Spec Modal -->
<div id="monosMatchmakingModal" style="display:none; position:fixed; inset:0; z-index:99999; background:rgba(0,0,0,0.65); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:16px;">
  <div style="background:#ffffff; border-radius:14px; max-width:540px; width:100%; box-shadow:0 12px 40px rgba(0,0,0,0.25); border-top:4px solid var(--terracotta,#c85a32); overflow:hidden; padding:28px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid var(--line); padding-bottom:12px;">
      <h3 style="font-family:var(--serif); font-size:22px; margin:0;" id="matchmakingTitle">Kết nối đối tác chuỗi giá trị</h3>
      <button type="button" onclick="closeMatchmaking()" style="border:none; background:none; font-size:22px; cursor:pointer; color:#888;">&times;</button>
    </div>
    
    <p style="font-size:13px; color:#666; margin-bottom:16px;" id="matchmakingDesc">Gửi yêu cầu làm việc, hỏi báo giá mẫu thử hoặc xin cấp quyền bản quyền thương mại đối với đồ vật này.</p>
    
    <form onsubmit="handleMatchmakingSubmit(event)">
      <div style="margin-bottom:12px;">
        <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Đơn vị của bạn (Brand / Studio / Nhà thầu) *</label>
        <input type="text" id="mmPartner" required style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="Ví dụ: Studio Kiến Trúc A2 / Brand X" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
        <div>
          <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Số điện thoại / Zalo *</label>
          <input type="tel" id="mmPhone" required style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="+84 ..." />
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Email làm việc *</label>
          <input type="email" id="mmEmail" required style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="partner@domain.com" />
        </div>
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Nhu cầu kết nối *</label>
        <select id="mmNeed" style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px; font-size:13px;">
          <option value="prototype">Đặt làm mẫu thử Prototype / Gia công lô nhỏ</option>
          <option value="license">Hỏi mua / Thuê bản quyền thương mại cho Brand</option>
          <option value="material">Yêu cầu cấp mẫu thử vật liệu (Sample Swatches)</option>
          <option value="spec">Xin bộ hồ sơ bản vẽ kỹ thuật CAD/3D Max đầy đủ</option>
        </select>
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Chi tiết yêu cầu &amp; Dự toán (nếu có)</label>
        <textarea id="mmNote" rows="3" style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="Ghi chú số lượng, tiến độ bàn giao hoặc yêu cầu chi tiết..."></textarea>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" onclick="closeMatchmaking()" class="light-button">Đóng</button>
        <button type="submit" class="dark-button">Gửi yêu cầu kết nối &rarr;</button>
      </div>
    </form>
  </div>
</div>

<script>
function openMatchmaking(partnerName, objectName) {
  const modal = document.getElementById('monosMatchmakingModal');
  if (modal) {
    document.getElementById('matchmakingTitle').innerText = 'Kết nối: ' + partnerName;
    document.getElementById('matchmakingDesc').innerText = 'Yêu cầu kết nối liên quan đến ' + objectName + ' thông qua hệ thống chuỗi 7 lớp của Monos.';
    modal.style.display = 'flex';
  }
}
function closeMatchmaking() {
  const modal = document.getElementById('monosMatchmakingModal');
  if (modal) modal.style.display = 'none';
}
function handleMatchmakingSubmit(e) {
  e.preventDefault();
  alert('Yêu cầu hợp tác của bạn đã được gửi thành công đến đối tác qua hệ thống Monos B2B Network!');
  closeMatchmaking();
}
</script>
"""

pages = glob.glob('mirrored_pages/objects__*.html')
count = 0
for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        c = f.read()
    if 'id="monosMatchmakingModal"' not in c:
        c = c.replace('</body>', matchmaking_html + '\n</body>')
        with open(p, 'w', encoding='utf-8') as f:
            f.write(c)
        count += 1

print(f"Added B2B Matchmaking to {count} object pages!")
