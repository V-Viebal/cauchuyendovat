# Update mirrored_pages/login.html
with open('mirrored_pages/login.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Currently quickLogin redirects to external directories like /designers/huynh-le-phuong-uyen, /factories, /brands, etc.
# But the user specifically requested: "đăng nhập rồi thì phải có trang profile riêng của từng loại account... map loại user cho đúng!"
# Therefore, EVERY quick login button should map DIRECTLY to their personal Profile page: /profile?role=... !

old_grid = '''<div class="sim-grid">
        <!-- 1. Designer cá nhân -->
        <button type="button" class="sim-btn" onclick="quickLogin('designer_ind', 'Huỳnh Lê Phương Uyên (Designer)', 'designer@monos.vn', '/designers/huynh-le-phuong-uyen')">
          <span class="sim-btn-role">A. Designer cá nhân</span>
          <span class="sim-btn-name">HL. Phương Uyên</span>
          <span class="sim-btn-dest">Xem hồ sơ &rarr;</span>
        </button>

        <!-- 2. Studio thiết kế -->
        <button type="button" class="sim-btn" onclick="quickLogin('designer_stu', 'F-Studio (Design Collective)', 'contact@f-studio.vn', '/designers/tran-thao-nhien')">
          <span class="sim-btn-role">B. Studio thiết kế</span>
          <span class="sim-btn-name">F-Studio</span>
          <span class="sim-btn-dest">Xem quyền hạn &rarr;</span>
        </button>

        <!-- 3. Nhà máy sản xuất -->
        <button type="button" class="sim-btn" onclick="quickLogin('factory', 'Tân Thành Furniture (Nhà máy)', 'factory@tanthanh.vn', '/factories')">
          <span class="sim-btn-role">Nhà máy / Xưởng</span>
          <span class="sim-btn-name">Gỗ Tân Thành</span>
          <span class="sim-btn-dest">Hồ sơ xưởng &rarr;</span>
        </button>

        <!-- 4. Thương hiệu Brand -->
        <button type="button" class="sim-btn" onclick="quickLogin('brand', 'B+ Furniture (Thương hiệu)', 'brand@bplus.vn', '/brands')">
          <span class="sim-btn-role">Thương hiệu</span>
          <span class="sim-btn-name">B+ Furniture</span>
          <span class="sim-btn-dest">BST thương mại &rarr;</span>
        </button>

        <!-- 5. Nhà cung cấp vật liệu -->
        <button type="button" class="sim-btn" onclick="quickLogin('material', 'TAVICO Timber (Nhà cung ứng)', 'supplier@tavico.vn', '/materials')">
          <span class="sim-btn-role">Nhà cung ứng vật liệu</span>
          <span class="sim-btn-name">TAVICO Timber</span>
          <span class="sim-btn-dest">Thư viện vật liệu &rarr;</span>
        </button>

        <!-- 6. Người yêu đồ vật / Khách hàng -->
        <button type="button" class="sim-btn" onclick="quickLogin('collector', 'Hoàng Minh Tuấn (Người yêu đồ vật)', 'customer@monos.vn', '/feed')">
          <span class="sim-btn-role">Người yêu đồ vật</span>
          <span class="sim-btn-name">Hoàng Minh Tuấn</span>
          <span class="sim-btn-dest">Mở Monos Feed &rarr;</span>
        </button>
      </div>'''

new_grid = '''<div class="sim-grid">
        <!-- 1. Designer cá nhân -->
        <button type="button" class="sim-btn" onclick="quickLogin('designer_ind', 'Huỳnh Lê Phương Uyên (Designer)', 'designer@monos.vn', '/profile?role=designer_ind')">
          <span class="sim-btn-role">A. Designer cá nhân</span>
          <span class="sim-btn-name">HL. Phương Uyên</span>
          <span class="sim-btn-dest">Mở Profile cá nhân &rarr;</span>
        </button>

        <!-- 2. Studio thiết kế -->
        <button type="button" class="sim-btn" onclick="quickLogin('designer_stu', 'F-Studio (Design Collective)', 'contact@f-studio.vn', '/profile?role=designer_stu')">
          <span class="sim-btn-role">B. Studio thiết kế</span>
          <span class="sim-btn-name">F-Studio</span>
          <span class="sim-btn-dest">Mở Profile Studio &rarr;</span>
        </button>

        <!-- 3. Nhà máy sản xuất -->
        <button type="button" class="sim-btn" onclick="quickLogin('factory', 'Tân Thành Furniture (Nhà máy)', 'factory@tanthanh.vn', '/profile?role=factory')">
          <span class="sim-btn-role">Nhà máy / Xưởng</span>
          <span class="sim-btn-name">Gỗ Tân Thành</span>
          <span class="sim-btn-dest">Mở Profile Xưởng &rarr;</span>
        </button>

        <!-- 4. Thương hiệu Brand -->
        <button type="button" class="sim-btn" onclick="quickLogin('brand', 'B+ Furniture (Thương hiệu)', 'brand@bplus.vn', '/profile?role=brand')">
          <span class="sim-btn-role">Thương hiệu</span>
          <span class="sim-btn-name">B+ Furniture</span>
          <span class="sim-btn-dest">Mở Profile Brand &rarr;</span>
        </button>

        <!-- 5. Nhà cung cấp vật liệu -->
        <button type="button" class="sim-btn" onclick="quickLogin('material', 'TAVICO Timber (Nhà cung ứng)', 'supplier@tavico.vn', '/profile?role=material')">
          <span class="sim-btn-role">Nhà cung ứng vật liệu</span>
          <span class="sim-btn-name">TAVICO Timber</span>
          <span class="sim-btn-dest">Mở Profile Vật liệu &rarr;</span>
        </button>

        <!-- 6. Người yêu đồ vật / Khách hàng -->
        <button type="button" class="sim-btn" onclick="quickLogin('collector', 'Hoàng Minh Tuấn (Người yêu đồ vật)', 'customer@monos.vn', '/profile?role=collector')">
          <span class="sim-btn-role">Người yêu đồ vật</span>
          <span class="sim-btn-name">Hoàng Minh Tuấn</span>
          <span class="sim-btn-dest">Mở Profile cá nhân &rarr;</span>
        </button>
      </div>'''

assert old_grid in text, "old_grid not found in login.html"
text = text.replace(old_grid, new_grid)

with open('mirrored_pages/login.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated login.html simulator mappings to direct profile pages!")
