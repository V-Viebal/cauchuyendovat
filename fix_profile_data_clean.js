// Clean, error-free profileData object
const profileData = {
  designer_ind: {
    roleKey: "designer_ind",
    roleTag: "DESIGNER CÁ NHÂN · HỒ SƠ ĐÃ XÁC THỰC BẢN QUYỀN",
    name: "Huỳnh Lê Phương Uyên",
    email: "phuonguyen.huynh@monos.vn",
    avatar: "/huynh-le-phuong-uyen-portrait.jpg",
    bio: "Nhà thiết kế nội thất trẻ quan tâm đến sự giao thoa giữa con người, văn hóa và vật liệu. Tác giả tác phẩm Bàn Hoa Muối (Open Award — Hoa Mai Design Award 2026). Sẵn sàng nhận dự án thiết kế rời, hợp tác thương mại và làm việc cùng xưởng gia công.",
    tags: ["Table & Module", "Gỗ & Kính", "HMA 2026", "TP. Hồ Chí Minh", "Open for Commission"],
    mainBtn: "Đăng tác phẩm mới",
    mainSection: `
      <div class="section-panel-title">
        <span>Tác phẩm &amp; Đồ vật đã phát hành (01)</span>
        <a href="/objects/hoa-muoi-table" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:600;">Mở hồ sơ chi tiết &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/hoa-muoi-table-1.jpg" alt="Hoa Muối Table" />
        <div class="item-card-info">
          <div class="item-card-name">Hoa Muối Table (Bàn Module)</div>
          <div class="item-card-sub">W2600 × D1000 × H750 mm · Gỗ tự nhiên TAVICO &amp; Kính module</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Chế tác mẫu thực tế bởi: Công ty Cổ Phần Gỗ Tân Thành</div>
        </div>
        <span class="item-status-badge">HMA 2026</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Hồ sơ năng lực &amp; Định hướng hợp tác</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:12.5px; margin-bottom:14px;">
        <div style="background:#f9f8f4; padding:12px; border-radius:8px;">
          <strong style="color:var(--ink); display:block; margin-bottom:3px;">Chuyên môn:</strong>
          Thiết kế đồ gỗ rời (Bàn, Ghế), Module hóa linh hoạt, Kết hợp vật liệu Gỗ - Kính - Kim loại.
        </div>
        <div style="background:#f9f8f4; padding:12px; border-radius:8px;">
          <strong style="color:var(--ink); display:block; margin-bottom:3px;">Hình thức hợp tác:</strong>
          Chuyển nhượng bản quyền thương mại cho Brand, Nhận thiết kế may đo cho dự án khách sạn/resort.
        </div>
      </div>
      <div class="section-panel-title" style="font-size:15px; margin-top:16px;">Mạng lưới chuỗi đã xác nhận</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="padding:10px 14px; background:#f7f6f2; border-radius:6px; font-size:13px; display:flex; justify-content:space-between; align-items:center;">
          <span><strong>TAVICO Timber:</strong> Nhà cung ứng &amp; Tài trợ gỗ tự nhiên</span>
          <span style="color:#1a6d1a; font-weight:700; font-size:11.5px;">✓ Đã xác thực</span>
        </div>
        <div style="padding:10px 14px; background:#f7f6f2; border-radius:6px; font-size:13px; display:flex; justify-content:space-between; align-items:center;">
          <span><strong>Công ty CP Gỗ Tân Thành:</strong> Đơn vị thi công &amp; Lắp ghép module</span>
          <span style="color:#1a6d1a; font-weight:700; font-size:11.5px;">✓ Đã xác thực</span>
        </div>
      </div>
    `,
    sideSection: `
      <div class="b2b-contact-card">
        <div class="b2b-contact-header">
          <div class="b2b-contact-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            Kênh liên hệ đối tác B2B
          </div>
          <span class="b2b-verified-badge">✓ Đã xác minh</span>
        </div>
        <div class="b2b-info-list">
          <div class="b2b-info-row">
            <div class="b2b-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Số điện thoại / Zalo</div>
              <div class="b2b-info-val">+84 (0) 938 412 890</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Email trực tiếp</div>
              <div class="b2b-info-val"><a href="mailto:phuonguyen.huynh@monos.vn">phuonguyen.huynh@monos.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Địa chỉ làm việc / Studio</div>
              <div class="b2b-info-val">Quận 3, TP. Hồ Chí Minh, Việt Nam</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Portfolio cá nhân</div>
              <div class="b2b-info-val"><a href="https://behance.net/phuonguyen-design" target="_blank">behance.net/phuonguyen-design</a></div>
            </div>
          </div>
        </div>
        <div class="b2b-cta-group">
          <button type="button" class="b2b-btn-chat" onclick="alert('Đã mở cổng nhắn tin trực tiếp với Huỳnh Lê Phương Uyên!');">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Nhắn tin trao đổi
          </button>
          <a href="mailto:phuonguyen.huynh@monos.vn" class="b2b-btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            Gửi Brief hợp tác
          </a>
        </div>
      </div>
    `
  },

  designer_stu: {
    roleKey: "designer_stu",
    roleTag: "STUDIO THIẾT KẾ · DOANH NGHIỆP SÁNG TẠO ĐÃ XÁC MINH",
    name: "F-Studio",
    email: "contact@fstudio-design.vn",
    avatar: "/ban-mangthit-main.jpg",
    bio: "Văn phòng thiết kế nội thất đương đại và nghiên cứu hình thái di sản kiến trúc Việt Nam. Đồng hành sản xuất Bàn Console Mangthit cùng designer Trần Thảo Nhiên.",
    tags: ["Design Collective", "Console & Seating", "Heritage Forms", "Tìm Xưởng Prototype", "TP. Hồ Chí Minh"],
    mainBtn: "Mở Open Brief tìm xưởng",
    mainSection: `
      <div class="section-panel-title">
        <span>Bộ sưu tập thương mại &amp; Prototype của Studio (01)</span>
        <a href="/objects/ban-mangthit" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:600;">Xem hồ sơ &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/ban-mangthit-main.jpg" alt="Bàn Console Mangthit" />
        <div class="item-card-info">
          <div class="item-card-name">Bàn Console Mangthit</div>
          <div class="item-card-sub">Lấy cảm hứng từ kiến trúc lò gạch Măng Thít · Hoàn thiện sắc đỏ lửa nung</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Lead Designer: Trần Thảo Nhiên · Bản vẽ kỹ thuật 260901</div>
        </div>
        <span class="item-status-badge">Đang mở hợp tác</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">
        <span>Đội ngũ sáng tạo &amp; Gắn thẻ thành viên (Team Attribution)</span>
        <button type="button" onclick="alert('Đã gửi email mời thành viên mới!');" style="font-size:12px; border:none; background:none; color:var(--terracotta,#c85a32); font-weight:700; cursor:pointer;">+ Mời thành viên</button>
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
      <div class="b2b-contact-card">
        <div class="b2b-contact-header">
          <div class="b2b-contact-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Liên hệ hợp tác Studio
          </div>
          <span class="b2b-verified-badge">✓ Studio đối tác</span>
        </div>
        <div class="b2b-info-list">
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Hotline Studio / Tiếp nhận Brief</div>
              <div class="b2b-info-val">+84 (0) 909 888 234</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Email phòng R&amp;D / Thiết kế</div>
              <div class="b2b-info-val"><a href="mailto:contact@fstudio-design.vn">contact@fstudio-design.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Website &amp; Catalogue</div>
              <div class="b2b-info-val"><a href="https://fstudio-design.vn" target="_blank">fstudio-design.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Văn phòng đại diện</div>
              <div class="b2b-info-val">Toà nhà Thảo Điền, TP. Thủ Đức, TP.HCM</div>
            </div>
          </div>
        </div>
        <div class="b2b-cta-group">
          <button type="button" class="b2b-btn-chat" onclick="alert('Đã kết nối với đại diện F-Studio!');">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Nhắn tin Studio
          </button>
          <a href="mailto:contact@fstudio-design.vn" class="b2b-btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Gửi báo giá gia công
          </a>
        </div>
      </div>
    `
  },

  factory: {
    roleKey: "factory",
    roleTag: "NHÀ MÁY / XƯỞNG SẢN XUẤT NỘI THẤT KỸ THUẬT CAO",
    name: "Tân Thành Furniture",
    email: "engineering@tanthanh-furniture.vn",
    avatar: "/nhong-nhong-main.jpg",
    bio: "Nhà máy gia công mộc tinh xảo, uốn cong 3D đa bán kính và may bọc nệm cao cấp. Chuyên đồng hành cùng các Designer và Thương hiệu để hiện thực hóa các ý tưởng phức tạp thành sản phẩm đạt chuẩn quốc tế.",
    tags: ["Gỗ tự nhiên xẻ sấy", "Uốn cong 3D", "Làm mẫu Prototype", "Đồng Nai", "Chứng nhận FSC"],
    mainBtn: "Cập nhật năng lực xưởng",
    mainSection: `
      <div class="section-panel-title">
        <span>Đồ vật đã hỗ trợ chế tác thành công</span>
      </div>
      <div class="item-card-row">
        <img src="/nhong-nhong-main.jpg" alt="Nhong Nhong" />
        <div class="item-card-info">
          <div class="item-card-name">Nhong Nhong (Đa năng)</div>
          <div class="item-card-sub">Designers: Nguyễn Ngọc Chung &amp; Nguyễn Cẩm Châu (HMA 2026)</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Gia công mộng lồng ghép chuẩn xác 100% không để lộ liên kết</div>
        </div>
        <span class="item-status-badge">✓ Thành công</span>
      </div>
      <div class="item-card-row">
        <img src="/hoa-muoi-table-1.jpg" alt="Hoa Muối Table" />
        <div class="item-card-info">
          <div class="item-card-name">Hoa Muối Table (Bàn Module)</div>
          <div class="item-card-sub">Designer: Huỳnh Lê Phương Uyên · Thi công hệ module gỗ &amp; kính</div>
        </div>
        <span class="item-status-badge">✓ Thành công</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Hệ thống máy móc &amp; Công suất chế tác</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:12.5px;">
        <div style="background:#f9f8f4; padding:12px; border-radius:8px;">
          <strong style="color:var(--ink); display:block; margin-bottom:2px;">Trung tâm gia công CNC 5 trục:</strong>
          Độ chính xác 0.05mm, chuyên uốn cong và phay biên dạng 3 chiều.
        </div>
        <div style="background:#f9f8f4; padding:12px; border-radius:8px;">
          <strong style="color:var(--ink); display:block; margin-bottom:2px;">Buồng sơn mờ chống bụi:</strong>
          Phủ sơn PU, sơn dầu lau mộc mờ tự nhiên đạt chuẩn xuất khẩu E0.
        </div>
        <div style="background:#f9f8f4; padding:12px; border-radius:8px;">
          <strong style="color:var(--ink); display:block; margin-bottom:2px;">Quy mô diện tích xưởng:</strong>
          4.500 m² tại KCN Hố Nai, Biên Hòa, Đồng Nai.
        </div>
        <div style="background:#f9f8f4; padding:12px; border-radius:8px;">
          <strong style="color:var(--ink); display:block; margin-bottom:2px;">Năng lực làm mẫu:</strong>
          Hoàn thiện prototype trong 14 ngày làm việc kể từ khi duyệt bản vẽ.
        </div>
      </div>
    `,
    sideSection: `
      <div class="b2b-contact-card">
        <div class="b2b-contact-header">
          <div class="b2b-contact-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Liên hệ phòng kinh doanh xưởng
          </div>
          <span class="b2b-verified-badge">✓ Xưởng đạt chuẩn</span>
        </div>
        <div class="b2b-info-list">
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Kỹ thuật &amp; Báo giá Prototype</div>
              <div class="b2b-info-val">+84 (0) 251 398 7766 · DĐ: 0918 334 552</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Hộp thư nhận bản vẽ kỹ thuật</div>
              <div class="b2b-info-val"><a href="mailto:engineering@tanthanh-furniture.vn">engineering@tanthanh-furniture.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Địa chỉ nhà máy</div>
              <div class="b2b-info-val">Lô B3, Đường số 5, KCN Hố Nai, Trảng Bom, Đồng Nai</div>
            </div>
          </div>
        </div>
        <div class="b2b-cta-group">
          <button type="button" class="b2b-btn-chat" onclick="alert('Đã gửi thông báo kết nối đến phòng kế hoạch Tân Thành!');">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Liên hệ xưởng
          </button>
          <a href="mailto:engineering@tanthanh-furniture.vn" class="b2b-btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            Gửi bản vẽ 3D
          </a>
        </div>
      </div>
    `
  },

  brand: {
    roleKey: "brand",
    roleTag: "THƯƠNG HIỆU NỘI THẤT · BẢN QUYỀN THƯƠNG MẠI CHÍNH HÃNG",
    name: "B+ Furniture Studio",
    email: "design@bplusfurniture.com.vn",
    avatar: "/cloudy-profile-photo.jpg",
    bio: "Thương hiệu nội thất cao cấp mang ngôn ngữ đương đại và thư thái. Nắm giữ bản quyền sản xuất và phát hành mẫu ghế Cloudy (Cloudy Armchair). Luôn cởi mở mua bản quyền hoặc cộng tác cùng các nhà thiết kế độc lập.",
    tags: ["Contemporary Furniture", "Thương hiệu phát hành", "Hệ thống Showroom", "Bản quyền bảo hộ Monos"],
    mainBtn: "Thêm sản phẩm BST",
    mainSection: `
      <div class="section-panel-title">
        <span>Bộ sưu tập độc quyền đang phát hành</span>
        <a href="/objects/cloudy" style="font-size:12px; color:var(--terracotta,#c85a32); font-weight:600;">Xem hồ sơ &rarr;</a>
      </div>
      <div class="item-card-row">
        <img src="/cloudy-profile-photo.jpg" alt="Ghế Cloudy" />
        <div class="item-card-info">
          <div class="item-card-name">Ghế thư giãn Cloudy (Cloudy Armchair)</div>
          <div class="item-card-sub">SKU: LC060 · Giá niêm yết: 16.700.000 ₫ · Thiết kế bởi B+ Team</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Chất liệu: Khung gỗ Ash/Pinewood, mút D40, vải nỉ Bouclé</div>
        </div>
        <span class="item-status-badge">Đang kinh doanh</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Chính sách nhận hồ sơ thiết kế từ Designer</div>
      <p style="font-size:12.5px; color:#666; line-height:1.5;">
        B+ hỗ trợ 100% chi phí làm mẫu prototype và trả phí bản quyền bản vẽ (Royalty fees) từ 5% - 8% trên doanh thu sản phẩm cho các Designer có ý tưởng xuất sắc được phê duyệt.
      </p>
      <div style="margin-top:12px;">
        <span style="font-size:12px; background:#f5f4ef; padding:6px 12px; border-radius:6px; font-weight:600; color:var(--ink);">Danh mục ưu tiên 2026: Ghế bàn ăn, Bàn console, Tủ phòng khách</span>
      </div>
    `,
    sideSection: `
      <div class="b2b-contact-card">
        <div class="b2b-contact-header">
          <div class="b2b-contact-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            Liên hệ thương mại &amp; Showroom
          </div>
          <span class="b2b-verified-badge">✓ Brand chính hãng</span>
        </div>
        <div class="b2b-info-list">
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Hotline B2B &amp; Đặt hàng dự án</div>
              <div class="b2b-info-val">+84 (0) 902 345 678</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Email phòng phát triển bản quyền</div>
              <div class="b2b-info-val"><a href="mailto:design@bplusfurniture.com.vn">design@bplusfurniture.com.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Website bán lẻ</div>
              <div class="b2b-info-val"><a href="https://bplusfurniture.com.vn" target="_blank">bplusfurniture.com.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Showroom trải nghiệm</div>
              <div class="b2b-info-val">42 Xuân Thủy, Phường Thảo Điền, TP. Thủ Đức, TP.HCM</div>
            </div>
          </div>
        </div>
        <div class="b2b-cta-group">
          <button type="button" class="b2b-btn-chat" onclick="alert('Đã kết nối với bộ phận kinh doanh B+ Furniture!');">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Liên hệ Brand
          </button>
          <a href="mailto:design@bplusfurniture.com.vn" class="b2b-btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Gửi Portfolio hợp tác
          </a>
        </div>
      </div>
    `
  },

  material: {
    roleKey: "material",
    roleTag: "NHÀ CUNG CẤP VẬT LIỆU · ĐỐI TÁC THƯ VIỆN NGUYÊN LIỆU",
    name: "TAVICO Timber",
    email: "spec@tavico.com.vn",
    avatar: "/hoa-muoi-table-3.jpg",
    bio: "Đơn vị nhập khẩu và cung ứng gỗ tự nhiên xẻ sấy quy mô lớn tại Việt Nam. Nhà tài trợ gỗ tự nhiên cho Hoa Muối Table tại Hoa Mai Design Award 2026. Hỗ trợ gửi mẫu thử (Swatches) và hồ sơ kiểm định chất lượng gỗ miễn phí cho các Designer.",
    tags: ["Gỗ tự nhiên xẻ sấy", "White Ash & Walnut", "Chứng chỉ FSC", "Hỗ trợ mẫu thử", "Đồng Nai"],
    mainBtn: "Đưa mẫu vào thư viện",
    mainSection: `
      <div class="section-panel-title">
        <span>Vật liệu đã cấp cho các đồ vật thực tế</span>
      </div>
      <div class="item-card-row">
        <img src="/hoa-muoi-table-1.jpg" alt="Hoa Muối Table" />
        <div class="item-card-info">
          <div class="item-card-name">Gỗ tự nhiên xẻ sấy đạt độ ẩm chuẩn 10-12%</div>
          <div class="item-card-sub">Được chỉ định chế tác: Bàn Hoa Muối (Hoa Muối Table)</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Tác giả thiết kế: Huỳnh Lê Phương Uyên · Thi công: CP Gỗ Tân Thành</div>
        </div>
        <span class="item-status-badge">Đã xác thực</span>
      </div>
    `,
    secondarySection: `
      <div class="section-panel-title">Kho mẫu thử trong Material Library</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12.5px;">
        <div style="background:#f9f8f4; padding:10px; border-radius:6px;"><strong>White Ash (Gỗ Tần Bì):</strong> Vân thẳng sáng màu, dẻo dai uốn nhiệt</div>
        <div style="background:#f9f8f4; padding:10px; border-radius:6px;"><strong>American Walnut (Gỗ Óc Chó):</strong> Màu nâu socola sang trọng</div>
        <div style="background:#f9f8f4; padding:10px; border-radius:6px;"><strong>White Oak (Sồi Trắng):</strong> Độ cứng cao, chịu lực uốn nén tốt</div>
        <div style="background:#f9f8f4; padding:10px; border-radius:6px;"><strong>Dịch vụ hỗ trợ:</strong> Cắt mẫu Swatches 150x150mm gửi tận nơi cho KTS</div>
      </div>
    `,
    sideSection: `
      <div class="b2b-contact-card">
        <div class="b2b-contact-header">
          <div class="b2b-contact-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Liên hệ cung ứng vật liệu
          </div>
          <span class="b2b-verified-badge">✓ Cung cấp mẫu</span>
        </div>
        <div class="b2b-info-list">
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Tư vấn kỹ thuật &amp; Mẫu thử</div>
              <div class="b2b-info-val">+84 (0) 251 388 9900 · DĐ: 0903 112 445</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Email phòng dự án</div>
              <div class="b2b-info-val"><a href="mailto:spec@tavico.com.vn">spec@tavico.com.vn</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Website &amp; Bảng tra cứu gỗ</div>
              <div class="b2b-info-val"><a href="https://tavicotimber.com" target="_blank">tavicotimber.com</a></div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Kho trung tâm &amp; Showroom gỗ</div>
              <div class="b2b-info-val">KCN Điểu Xiển, P. Tân Biên, TP. Biên Hòa, Đồng Nai</div>
            </div>
          </div>
        </div>
        <div class="b2b-cta-group">
          <button type="button" class="b2b-btn-chat" onclick="alert('Đã gửi yêu cầu nhận Swatches hộp mẫu thử gỗ!');">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Yêu cầu gửi Swatches
          </button>
          <a href="mailto:spec@tavico.com.vn" class="b2b-btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            Yêu cầu báo giá khối
          </a>
        </div>
      </div>
    `
  },

  collector: {
    roleKey: "collector",
    roleTag: "NGƯỜI YÊU ĐỒ VẬT · NHÀ SƯU TẬP NỘI THẤT",
    name: "Hoàng Minh Tuấn",
    email: "minhtuan.arc@gmail.com",
    avatar: "/om-lifestyle.jpeg",
    bio: "Kiến trúc sư & Người yêu thích sưu tầm các món đồ nội thất mang đậm dấu ấn văn hóa và tay nghề thủ công Việt Nam.",
    tags: ["Nhà sưu tập", "Độc bản HMA", "Yêu đồ gỗ thủ công", "Hà Nội"],
    mainBtn: "Chia sẻ kỷ niệm đồ vật",
    mainSection: `
      <div class="section-panel-title">
        <span>Bộ sưu tập đã lưu (Saved Collection - 03)</span>
      </div>
      <div class="item-card-row">
        <img src="/ban-kieu-main.jpg" alt="Bàn Kiệu" />
        <div class="item-card-info">
          <div class="item-card-name">Bàn Kiệu (Palanquin Table)</div>
          <div class="item-card-sub">Designer: Duy Khánh · Bàn ăn tròn khiêng kiệu</div>
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
      <div class="b2b-contact-card">
        <div class="b2b-contact-header">
          <div class="b2b-contact-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="8" r="5"></circle></svg>
            Thông tin người dùng
          </div>
          <span class="b2b-verified-badge" style="background:#e8f4fd; color:#0066cc; border-color:#beddf9;">Thành viên</span>
        </div>
        <div class="b2b-info-list">
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Email tài khoản</div>
              <div class="b2b-info-val">minhtuan.arc@gmail.com</div>
            </div>
          </div>
          <div class="b2b-info-row">
            <div class="b2b-info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="b2b-info-content">
              <div class="b2b-info-label">Khu vực sinh sống</div>
              <div class="b2b-info-val">Tây Hồ, Hà Nội, Việt Nam</div>
            </div>
          </div>
        </div>
        <div class="b2b-cta-group">
          <a href="/feed" class="b2b-btn-chat" style="grid-column: span 2;">Khám phá Monos Feed &rarr;</a>
        </div>
      </div>
    `
  }
};

function switchProfile(mode) {
  const d = profileData[mode];
  if (!d) return;

  const roleText = document.getElementById("p-role-text");
  if (roleText) roleText.innerText = d.roleTag;

  const nameElem = document.getElementById("p-name");
  if (nameElem) nameElem.innerText = d.name;

  const avatarElem = document.getElementById("p-avatar");
  if (avatarElem) avatarElem.src = d.avatar;

  const bioElem = document.getElementById("p-bio");
  if (bioElem) bioElem.innerText = d.bio;

  const headerName = document.getElementById("headerUserName");
  if (headerName) headerName.innerText = d.name;

  const mainBtn = document.getElementById("p-main-btn-text");
  if (mainBtn) mainBtn.innerText = d.mainBtn;

  let tagsHtml = "";
  d.tags.forEach(t => tagsHtml += `<span class="profile-tag-pill">${t}</span>`);
  const tagsElem = document.getElementById("p-tags");
  if (tagsElem) tagsElem.innerHTML = tagsHtml;

  const mainSec = document.getElementById("mainSectionPanel");
  if (mainSec) mainSec.innerHTML = d.mainSection;

  const secSec = document.getElementById("secondarySectionPanel");
  if (secSec) secSec.innerHTML = d.secondarySection;

  const sideSec = document.getElementById("sideSectionPanel");
  if (sideSec) sideSec.innerHTML = d.sideSection;

  document.title = d.name + " — Hồ sơ Monos";

  try {
    localStorage.setItem("monos_current_user", JSON.stringify({
      role: mode,
      name: d.name,
      email: d.email,
      isLoggedIn: true
    }));
  } catch (e) {}
}

function handleLogout() {
  try {
    localStorage.removeItem("monos_current_user");
  } catch (e) {}
  window.location.replace("/login");
}

(function () {
  let targetRole = "designer_ind";
  const urlParams = new URLSearchParams(window.location.search);
  const paramRole = urlParams.get("role");

  if (paramRole && profileData[paramRole]) {
    targetRole = paramRole;
  } else {
    try {
      const u = JSON.parse(localStorage.getItem("monos_current_user") || "{}");
      if (u && u.role && profileData[u.role]) {
        targetRole = u.role;
      }
    } catch (e) {}
  }

  // Execute immediately
  switchProfile(targetRole);

  // Also bind to DOMContentLoaded just in case
  document.addEventListener("DOMContentLoaded", () => {
    switchProfile(targetRole);
    // bind logout buttons
    document.querySelectorAll(".btn-logout-action").forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        handleLogout();
      };
    });
  });
})();
