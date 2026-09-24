import glob, re

pages = glob.glob('mirrored_pages/objects__*.html')
count = 0

for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()

    # Extract object title if possible
    m_title = re.search(r'<h1>(.*?)</h1>', text, re.DOTALL)
    obj_name = re.sub(r'<[^>]+>', ' ', m_title.group(1)).strip() if m_title else "Tác phẩm"
    obj_name_clean = " ".join(obj_name.split())

    # Find the source links div: class="ganh-source-links"
    # We can add "Tải 3D CAD & Spec Sheet" button and "Liên hệ kết nối chuỗi B2B" button
    source_idx = text.find('class="ganh-source-links">')
    if source_idx != -1 and 'openMatchmaking' not in text[source_idx:source_idx+600]:
        insert_pos = source_idx + len('class="ganh-source-links">')
        new_buttons = f"""
<button type="button" class="light-button" onclick="openMatchmaking('Đơn vị thực hiện', '{obj_name_clean}')" style="cursor:pointer; background:var(--terracotta,#c85a32); color:#fff; border-color:var(--terracotta,#c85a32);">
  Kết nối chuỗi B2B / Đặt làm mẫu thử
</button>
<button type="button" class="light-button" onclick="alert('Đã sẵn sàng tải gói tài liệu CAD 2D/3D Max và Spec Sheet của {obj_name_clean}!');" style="cursor:pointer;">
  Tải CAD / 3D Spec Sheet
</button>
"""
        text = text[:insert_pos] + new_buttons + text[insert_pos:]
        with open(p, 'w', encoding='utf-8') as f:
            f.write(text)
        count += 1

print(f"Added interactive B2B & 3D download buttons to {count} object pages!")
