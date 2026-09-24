with open('mirrored_pages/signup.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace or enhance the login-intro section to feature the 4 specific Studio Powers
studio_perks_html = """<section class="login-intro">
  <div class="eyebrow muted">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> 
    Gia nhập mạng lưới Monos
  </div>
  <h1>Đăng ký hồ sơ<br/><em>khởi tạo kết nối.</em></h1>
  <p>Nơi lưu giữ giá trị của đồ vật và kết nối những mắt xích kiến tạo: từ ý tưởng thiết kế, nguồn nguyên liệu, kỹ nghệ chế tác đến thương hiệu phát hành.</p>

  <div style="margin-top: 24px; padding: 20px 22px; background: rgba(255, 255, 255, 0.75); border: 1px solid #dfded9; border-radius: 12px; backdrop-filter: blur(8px);">
    <div style="font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
      <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--terracotta, #c85a32);"></span>
      Quyền năng &amp; tính năng dành riêng cho Studio thiết kế:
    </div>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="font-size: 13px; line-height: 1.5; color: #333;">
        <strong style="color: var(--ink); display: block; margin-bottom: 2px;">1. Hồ sơ đại diện Studio (Studio Profile):</strong>
        Hiển thị Logo, triết lý thiết kế chung (Design Philosophy), các lĩnh vực chuyên sâu (Furniture, Lighting, Bespoke, Không gian...) và danh mục tổng hợp tất cả các bộ sưu tập/sản phẩm mà studio đã từng phát triển.
      </div>
      <div style="font-size: 13px; line-height: 1.5; color: #333;">
        <strong style="color: var(--ink); display: block; margin-bottom: 2px;">2. Quản lý nhóm &amp; Gắn thẻ thành viên (Team Attribution):</strong>
        Một Studio có thể mời nhiều thành viên (Lead Designer, 3D Artist, R&amp;D/Vật liệu) cùng quản lý tài khoản. Khi đăng một sản phẩm mới, Studio có thể ghi công chính xác: ai là Lead Designer, ai phụ trách kỹ thuật dựng hình, ai phụ trách hoàn thiện mẫu.
      </div>
      <div style="font-size: 13px; line-height: 1.5; color: #333;">
        <strong style="color: var(--ink); display: block; margin-bottom: 2px;">3. Đăng &quot;Open Brief&quot; tìm đối tác sản xuất:</strong>
        Khi Studio có một bản vẽ mới hoặc một ý tưởng cần làm mẫu thử (Prototype), Studio có thể đăng một Open Brief trực tiếp trên Monos Feed để các Xưởng mộc, Xưởng cơ khí, hoặc Nhà máy gia công gửi đề xuất hợp tác làm mẫu thử.
      </div>
      <div style="font-size: 13px; line-height: 1.5; color: #333;">
        <strong style="color: var(--ink); display: block; margin-bottom: 2px;">4. Chứng nhận liên kết chuỗi (B2B Networking):</strong>
        Đứng tên đại diện trong chuỗi 7 lớp (7 Layers) của sản phẩm: Studio thiết kế &#8596; Nhà tài trợ vật liệu &#8596; Nhà máy sản xuất &#8596; Thương hiệu phân phối. Cho phép các thương hiệu nội thất khác &quot;thuê&quot; hoặc liên kết bản quyền thiết kế của Studio một cách minh bạch.
      </div>
    </div>
  </div>
</section>"""

import re
idx_start = text.find('<section class="login-intro">')
idx_end = text.find('</section>', idx_start) + len('</section>')
text = text[:idx_start] + studio_perks_html + text[idx_end:]

with open('mirrored_pages/signup.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated mirrored_pages/signup.html with Studio features successfully!")
