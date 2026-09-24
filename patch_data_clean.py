with open('monos-data-fresh.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Insert Huỳnh Lê Phương Uyên into array a (designers)
# We will append right before '}],o=[`Tất cả`,`Văn phòng`'
target_end_a = 'ng xác minh`,icon:`production`,tone:`paper`}]'
uyen_designer = ',{id:`huynh-le-phuong-uyen`,name:`Huỳnh Lê Phương Uyên`,entityType:`Cá nhân`,discipline:`Interior & Furniture Designer`,location:`Việt Nam · HMA 2026`,bio:`Là một người thiết kế nội thất trẻ, quan tâm đến sự giao thoa giữa con người, văn hóa và vật liệu. Uyên theo đuổi tư duy thiết kế tinh giản, giàu tính kể chuyện và đề cao giá trị của những điều bình dị trong cuộc sống.`,specialties:[`Table`,`Module`,`Gỗ & Kính`,`HMA 2026`],filter:`Furniture`,status:`HMA 2026 · Open Award`,icon:`furniture`,tone:`terra`,photo:`/huynh-le-phuong-uyen-portrait.jpg`,photoLabel:`Ảnh chân dung / hồ sơ HMA 2026`}'

assert target_end_a in text, "target_end_a not found"
text = text.replace(target_end_a, target_end_a[:-1] + uyen_designer + ']')

# 2. Insert Hoa Muối Table into array d (objects)
target_end_d = 'hồ sơ cung cấp`,href:`/objects/dong-chay`}]'
hoa_muoi_obj = ',{id:`hoa-muoi-table`,code:`Object Profile / 008`,name:`Hoa Muối Table`,type:`Table`,brand:`Huỳnh Lê Phương Uyên`,origin:`Việt Nam`,excerpt:`Khởi nguồn từ hạt muối và sự cần mẫn của diêm dân — chuyển hóa giá trị ‘Dấu tay’ thành hệ bàn module gỗ tự nhiên kết hợp kính đa lớp.`,filter:`Table`,status:`HMA 2026 · Bảng Open Award`,tone:`terra`,thumbnail:`/hoa-muoi-table-1.jpg`,thumbnailAlt:`Hoa Muối Table — bàn module gỗ và kính của Huỳnh Lê Phương Uyên`,thumbnailLabel:`Ảnh sản phẩm / HMA 2026`,href:`/objects/hoa-muoi-table`}'

assert target_end_d in text, "target_end_d not found"
text = text.replace(target_end_d, target_end_d[:-1] + hoa_muoi_obj + ']')

# 3. Insert into search terms f
target_f = ',f=['
hoa_muoi_term = '{terms:[`hoa muối`,`hoa muoi`,`hoa muối table`,`huỳnh lê phương uyên`,`huynh le phuong uyen`,`table`,`bàn`],title:`Hoa Muối Table`,subtitle:`Object Profile / 008 · Huỳnh Lê Phương Uyên · Table`,status:`Đã có hồ sơ trong Monos`,detail:`Bàn module gỗ tự nhiên và kính kiến trúc, đạt giải Open Award tại HMA 2026.`},'

assert target_f in text, "target_f not found"
text = text.replace(target_f, target_f + hoa_muoi_term)

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)

with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Clean patch applied successfully!')
