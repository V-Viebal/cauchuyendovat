with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Add styles for the interactive Edit Profile modal and New Item modal
modal_css = '''
/* Interactive Edit Modal & Drawer Styles */
.monos-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(13, 12, 34, 0.45);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.monos-modal-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}
.monos-modal-container {
  background: #ffffff;
  width: min(90vw, 580px);
  max-height: 90vh;
  border-radius: 14px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transform: translateY(16px) scale(0.98);
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  border: 1px solid #dfded9;
}
.monos-modal-backdrop.is-open .monos-modal-container {
  transform: translateY(0) scale(1);
}
.monos-modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid #f0eee9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.monos-modal-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.monos-modal-close {
  border: none;
  background: transparent;
  cursor: pointer;
  color: #777;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.monos-modal-close:hover {
  background: #f4f2ee;
  color: var(--ink);
}
.monos-modal-body {
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.monos-modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #f0eee9;
  background: #fbfaf8;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.btn-cancel {
  padding: 10px 18px;
  background: #ffffff;
  border: 1px solid #dcd9d3;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
}
.btn-save {
  padding: 10px 22px;
  background: var(--ink);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-save:hover {
  background: #2b2a3a;
}
.edit-hint {
  font-size: 11.5px;
  color: #777;
  margin-top: 4px;
}
.toast-success {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--ink);
  color: #fff;
  padding: 14px 22px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10000;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-success.show {
  transform: translateY(0);
  opacity: 1;
}
'''

# Inject CSS before </style>
text = text.replace('</style>', modal_css + '\n</style>')

# Modal HTML for Edit Profile & New Item & Invite Member
modals_html = '''
<!-- Edit Profile Modal -->
<div class="monos-modal-backdrop" id="editProfileModal">
  <div class="monos-modal-container">
    <div class="monos-modal-header">
      <h3 class="monos-modal-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
        Chỉnh sửa thông tin hồ sơ
      </h3>
      <button type="button" class="monos-modal-close" onclick="closeEditModal()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
      </button>
    </div>
    <form id="editProfileForm" onsubmit="saveProfileChanges(event)">
      <div class="monos-modal-body">
        <div class="f-group">
          <label class="f-label" for="edit-name">Tên hiển thị / Tên Studio / Thương hiệu</label>
          <input type="text" id="edit-name" class="f-input" required />
        </div>
        <div class="f-group">
          <label class="f-label" for="edit-bio">Giới thiệu ngắn / Triết lý thiết kế</label>
          <textarea id="edit-bio" rows="3" class="f-textarea" required></textarea>
        </div>
        <div class="form-row-2">
          <div class="f-group">
            <label class="f-label" for="edit-phone">Số điện thoại / Hotline</label>
            <input type="text" id="edit-phone" class="f-input" />
          </div>
          <div class="f-group">
            <label class="f-label" for="edit-email">Email liên hệ B2B</label>
            <input type="email" id="edit-email" class="f-input" required />
          </div>
        </div>
        <div class="form-row-2">
          <div class="f-group">
            <label class="f-label" for="edit-location">Địa chỉ / Khu vực</label>
            <input type="text" id="edit-location" class="f-input" />
          </div>
          <div class="f-group">
            <label class="f-label" for="edit-tags">Thẻ chuyên môn (ngăn cách dấu phẩy)</label>
            <input type="text" id="edit-tags" class="f-input" />
          </div>
        </div>
      </div>
      <div class="monos-modal-footer">
        <button type="button" class="btn-cancel" onclick="closeEditModal()">Hủy bỏ</button>
        <button type="submit" class="btn-save">Lưu thay đổi</button>
      </div>
    </form>
  </div>
</div>

<!-- Add Item / Open Brief Modal -->
<div class="monos-modal-backdrop" id="addItemModal">
  <div class="monos-modal-container">
    <div class="monos-modal-header">
      <h3 class="monos-modal-title" id="addItemTitle">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        <span id="addItemTitleText">Đăng tác phẩm / Mở yêu cầu mới</span>
      </h3>
      <button type="button" class="monos-modal-close" onclick="closeAddItemModal()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
      </button>
    </div>
    <form id="addItemForm" onsubmit="saveNewItem(event)">
      <div class="monos-modal-body">
        <div class="f-group">
          <label class="f-label" for="new-item-title">Tiêu đề tác phẩm / Tiêu đề Open Brief</label>
          <input type="text" id="new-item-title" class="f-input" placeholder="Ví dụ: Ghế Lounge mẫu mới 2026 hoặc Tìm xưởng gia công mộc" required />
        </div>
        <div class="f-group">
          <label class="f-label" for="new-item-desc">Mô tả chi tiết / Yêu cầu kỹ thuật</label>
          <textarea id="new-item-desc" rows="3" class="f-textarea" placeholder="Nêu rõ kích thước, chủng loại vật liệu, yêu cầu làm mẫu thử hoặc đối tác cần tìm..." required></textarea>
        </div>
        <div class="form-row-2">
          <div class="f-group">
            <label class="f-label" for="new-item-cat">Phân loại danh mục</label>
            <select id="new-item-cat" class="f-select">
              <option value="Seating">Ghế &amp; Seating</option>
              <option value="Table">Bàn &amp; Dining / Console</option>
              <option value="Lighting">Đèn &amp; Điêu khắc ánh sáng</option>
              <option value="Storage">Tủ kệ &amp; Module</option>
              <option value="Prototype">Yêu cầu làm mẫu Prototype</option>
            </select>
          </div>
          <div class="f-group">
            <label class="f-label" for="new-item-time">Thời hạn / Tiến độ dự kiến</label>
            <input type="text" id="new-item-time" class="f-input" placeholder="Ví dụ: 3 tuần hoàn thiện mẫu" />
          </div>
        </div>
      </div>
      <div class="monos-modal-footer">
        <button type="button" class="btn-cancel" onclick="closeAddItemModal()">Đóng</button>
        <button type="submit" class="btn-save" id="btnSubmitItem">Đăng lên hồ sơ</button>
      </div>
    </form>
  </div>
</div>

<!-- Toast notification -->
<div class="toast-success" id="profileToast">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"></path></svg>
  <span id="toastMessage">Đã lưu thay đổi hồ sơ thành công!</span>
</div>
'''

# Update the "Chỉnh sửa hồ sơ" button onclick to openEditModal()
text = text.replace('onclick="alert(\'Đã lưu các thay đổi hồ sơ!\'); return false;"', 'onclick="openEditModal(); return false;"')

# Update the main action button onclick to openAddItemModal()
text = text.replace('onclick="alert(\'Mở trình soạn thảo đồ vật mới!\'); return false;"', 'onclick="openAddItemModal(); return false;"')

# Inject the modals before </main>
idx_footer = text.find('{footer_html}')
text = text[:idx_footer] + modals_html + '\n' + text[idx_footer:]

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated profile.html with modals and button triggers!")
