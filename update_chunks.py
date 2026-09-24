import re

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add Huynh Le Phuong Uyen to designers array
# Find truong-huynh-thoai block
target_thoai = '{id:`truong-huynh-thoai`'
idx_thoai = text.find(target_thoai)
assert idx_thoai != -1, "Cannot find truong-huynh-thoai"
# find the end of this designer object
end_thoai = text.find('},{id:`designer-02`', idx_thoai)
assert end_thoai != -1, "Cannot find end of truong-huynh-thoai"

uyen_entry = ',{id:`huynh-le-phuong-uyen`,name:`Huỳnh Lê Phương Uyên`,entityType:`Cá nhân`,discipline:`Interior & Furniture Designer`,location:`Việt Nam · HMA 2026`,bio:`Là một người thiết kế nội thất trẻ, quan tâm đến sự giao thoa giữa con người, văn hóa và vật liệu. Uyên theo đuổi tư duy thiết kế tinh giản, giàu tính kể chuyện và đề cao giá trị của những điều bình dị trong cuộc sống.`,specialties:[`Table`,`Module`,`Gỗ & Kính`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Open Award`,icon:`furniture`,tone:`terra`,photo:`/huynh-le-phuong-uyen-portrait.jpg`,photoLabel:`Ảnh chân dung / hồ sơ HMA 2026`}'

text = text[:end_thoai] + uyen_entry + text[end_thoai:]

# 2. Add Hoa Muoi Table to objects array
target_dongchay = '{id:`dong-chay`'
idx_dongchay = text.find(target_dongchay)
assert idx_dongchay != -1, "Cannot find dong-chay"
end_dongchay = text.find('}],f=[{terms:[`dòng chảy`', idx_dongchay)
assert end_dongchay != -1, "Cannot find end of objects array"

hoa_muoi_obj = ',{id:`hoa-muoi-table`,code:`Object Profile / 008`,name:`Hoa Muối Table`,type:`Table`,brand:`Huỳnh Lê Phương Uyên`,origin:`Việt Nam`,excerpt:`Khởi nguồn từ hạt muối và sự cần mẫn của diêm dân — chuyển hóa giá trị ‘Dấu tay’ thành hệ bàn module gỗ tự nhiên kết hợp kính đa lớp.`,filter:`Table`,status:`HMA 2026 · Bảng Open Award`,tone:`terra`,thumbnail:`/hoa-muoi-table-1.jpg`,thumbnailAlt:`Hoa Muối Table — bàn module gỗ và kính của Huỳnh Lê Phương Uyên`,thumbnailLabel:`Ảnh sản phẩm / HMA 2026`,href:`/objects/hoa-muoi-table`}'

text = text[:end_dongchay] + hoa_muoi_obj + text[end_dongchay:]

# 3. Add Hoa Muoi to search lookup terms
hoa_muoi_terms = '{terms:[`hoa muối`,`hoa muoi`,`hoa muối table`,`huỳnh lê phương uyên`,`huynh le phuong uyen`,`table`,`bàn`],title:`Hoa Muối Table`,subtitle:`Object Profile / 008 · Huỳnh Lê Phương Uyên · Table`,status:`Đã có hồ sơ trong Monos`,detail:`Bàn module gỗ tự nhiên và kính kiến trúc, đạt giải Open Award tại HMA 2026.`},'
target_search = ',f=['
idx_search = text.find(target_search)
assert idx_search != -1, "Cannot find search terms array"
text = text[:idx_search + len(target_search)] + hoa_muoi_terms + text[idx_search + len(target_search):]

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)

with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Success updating monos-data-CNm7IGvZ.js!')
