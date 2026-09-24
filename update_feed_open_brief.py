import re

with open('mirrored_pages/feed.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Add CSS for interactive Open Brief box if needed
style_brief = """
<style>
.open-brief-interactive-card {
  border: 1px solid var(--line);
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.02);
}
.brief-proposal-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.brief-proposal-modal.is-open {
  display: flex;
}
.brief-modal-box {
  background: #ffffff;
  border-radius: 14px;
  max-width: 540px;
  width: 100%;
  padding: 28px;
  border-top: 4px solid var(--terracotta, #c85a32);
}
</style>
"""

if '.open-brief-interactive-card' not in text:
    text = text.replace('</head>', style_brief + '\n</head>', 1)

# Find the feed-list section and insert an active Open Brief card at the top
open_brief_html = """
    <!-- Active Open Brief Card: F-Studio looking for Factory Partner -->
    <article class="feed-card feed-card-terra" style="border-left: 4px solid var(--terracotta, #c85a32);">
      <div class="feed-card-topline">
        <span class="feed-card-type" style="color:var(--terracotta, #c85a32); font-weight:800;">OPEN BRIEF / TÌM ĐỐI TÁC SẢN XUẤT</span>
        <span class="feed-card-time" style="background:#fdece6; color:var(--terracotta, #c85a32); padding:2px 8px; border-radius:4px; font-weight:700;">Đang mở nhận đề xuất</span>
      </div>
      <div class="feed-card-body">
        <div class="feed-avatar" style="background:var(--terracotta, #c85a32); color:#fff; font-weight:800;">FS</div>
        <div>
          <div class="feed-author-line">
            <strong>F-Studio</strong>
            <span>vừa đăng Open Brief mới</span>
          </div>
          <h2>Bàn Console Mangthit — Cần tìm xưởng mộc gia công hoàn thiện mẫu thử Prototype</h2>
          <p>Thiết kế lấy cảm hứng từ hình thái lò gạch Măng Thít (tác giả: Trần Thảo Nhiên). Đã hoàn thiện toàn bộ bộ bản vẽ kỹ thuật 260901. Studio cần tìm xưởng mộc có năng lực xẻ sấy gỗ chuẩn và xử lý hoàn thiện bề mặt sắc đỏ gạch nung.</p>
          <div class="feed-card-meta" style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            <span style="background:#f4f2ee; padding:3px 8px; border-radius:4px;">Quy mô: 01 Prototype + Lô thương mại</span>
            <span style="background:#f4f2ee; padding:3px 8px; border-radius:4px;">Chất liệu: Gỗ tự nhiên &amp; Sơn nung</span>
            <span style="background:#f4f2ee; padding:3px 8px; border-radius:4px;">Khu vực: TP.HCM / Bình Dương / Đồng Nai</span>
          </div>
        </div>
      </div>
      <div class="feed-card-actions" style="margin-top:16px; border-top:1px solid var(--line); padding-top:14px; display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; gap:8px;">
          <a class="dark-button" href="/objects/ban-mangthit" style="font-size:12.5px; padding:6px 14px;">Xem hồ sơ bản vẽ &rarr;</a>
          <button type="button" class="light-button" onclick="openBriefProposal('F-Studio - Bàn Console Mangthit')" style="font-size:12.5px; padding:6px 14px; cursor:pointer;">
            Gửi đề xuất hợp tác làm mẫu thử
          </button>
        </div>
        <span style="font-size:12px; color:var(--muted);">3 xưởng đã gửi đề xuất</span>
      </div>
    </article>
"""

# Insert right after <div class="feed-list">
if 'OPEN BRIEF / TÌM ĐỐI TÁC SẢN XUẤT' not in text:
    text = text.replace('<div class="feed-list">', '<div class="feed-list">\n' + open_brief_html, 1)

# Add Modal dialog at the bottom of feed.html
modal_html = """
<!-- Brief Proposal Modal -->
<div class="brief-proposal-modal" id="briefModal">
  <div class="brief-modal-box">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid var(--line); padding-bottom:10px;">
      <h3 style="font-family:var(--serif); font-size:20px; margin:0;" id="briefModalTitle">Gửi đề xuất hợp tác sản xuất</h3>
      <button type="button" onclick="closeBriefProposal()" style="border:none; background:none; font-size:20px; cursor:pointer;">&times;</button>
    </div>
    <form onsubmit="handleBriefSubmit(event)">
      <div style="margin-bottom:12px;">
        <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Tên Xưởng / Nhà máy / Đơn vị chế tác *</label>
        <input type="text" id="propFactory" required style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="Ví dụ: Xưởng Mộc Tân Thành" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
        <div>
          <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Số điện thoại / Zalo *</label>
          <input type="tel" id="propPhone" required style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="+84 ..." />
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Email liên hệ *</label>
          <input type="email" id="propEmail" required style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="contact@domain.com" />
        </div>
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Ước tính thời gian hoàn thiện mẫu thử</label>
        <input type="text" id="propTime" style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="Ví dụ: 10 - 14 ngày kể từ khi chốt bản vẽ" />
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:12px; font-weight:700; display:block; margin-bottom:4px;">Năng lực chế tác &amp; Ghi chú đề xuất</label>
        <textarea id="propNote" rows="3" style="width:100%; padding:9px 12px; border:1px solid var(--line); border-radius:6px;" placeholder="Nêu rõ máy móc, loại gỗ sẵn có tại xưởng hoặc kinh nghiệm làm các sản phẩm tương tự..."></textarea>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" onclick="closeBriefProposal()" class="light-button">Hủy bỏ</button>
        <button type="submit" class="dark-button">Gửi đề xuất cho Studio &rarr;</button>
      </div>
    </form>
  </div>
</div>

<script>
function openBriefProposal(title) {
  document.getElementById('briefModalTitle').innerText = 'Gửi đề xuất: ' + title;
  document.getElementById('briefModal').classList.add('is-open');
}
function closeBriefProposal() {
  document.getElementById('briefModal').classList.remove('is-open');
}
function handleBriefSubmit(e) {
  e.preventDefault();
  alert('Đề xuất hợp tác chế tác mẫu thử của xưởng đã được gửi thành công đến Studio! Studio sẽ liên hệ lại trực tiếp qua Zalo/Email.');
  closeBriefProposal();
}
</script>
"""

if 'brief-proposal-modal' not in text:
    text = text.replace('</main>', modal_html + '\n</main>', 1)

with open('mirrored_pages/feed.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated mirrored_pages/feed.html with interactive Open Brief!")
