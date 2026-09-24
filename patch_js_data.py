import re

# Update monos-data-CNm7IGvZ.js and _next/static/chunks/monos-data-CNm7IGvZ.js
# 1. Add Designer Thịnh Cut to array 'a'
thinh_cut_designer_obj = """{id:`thinh-cut-ngoac-space`,name:`Thịnh Cut`,entityType:`Cá nhân`,discipline:`Architecture, Interior & Furniture`,location:`TP. Hồ Chí Minh, Việt Nam`,bio:`Kiến trúc sư, nhà thiết kế và nhà sáng lập NGOAC.SPACE Studio tại TP.HCM; thực hành thiết kế sáng tạo đa lĩnh vực với sự quan tâm đặc biệt đến văn hóa bản địa, vật liệu và trải nghiệm con người.`,specialties:[`Furniture`,`Architecture`,`Craft Memory`],filter:`Furniture`,status:`Hồ sơ chính thức NGOAC.SPACE`,icon:`furniture`,tone:`terra`,photo:`/thinh-cut-ngoac-space-portrait.jpg`,photoLabel:`Ảnh chân dung / hồ sơ cung cấp`},"""

# 2. Add Object The Archive to array 'd'
the_archive_obj = """{id:`the-archive-no-07`,code:`Object Profile / 018`,name:`The Archive - No 07`,type:`Armchair & Material Modules`,brand:`NGOAC.SPACE`,origin:`Việt Nam`,excerpt:`Lưu giữ dấu vết của bàn tay con người qua hệ module vật liệu 50x150mm: sơn mài, gốm, gỗ chạm, khảm xà cừ và vải dệt.`,filter:`Armchair`,status:`Hồ sơ chính thức`,tone:`terra`,thumbnail:`/the-archive-no-07-main.jpg`,thumbnailAlt:`The Archive - No 07 Collection — Thịnh Cut / NGOAC.SPACE`},"""

for fpath in ['monos-data-CNm7IGvZ.js', '_next/static/chunks/monos-data-CNm7IGvZ.js']:
    with open(fpath, 'r', encoding='utf-8') as f:
        code = f.read()
    
    if 'thinh-cut-ngoac-space' not in code:
        # Insert into a=[
        code = re.sub(r'(\b[a-zA-Z]\s*=\s*\[\s*\{id:`vi-van-truong`)', thinh_cut_designer_obj + r'\1', code, 1)
        # Insert into d=[
        code = re.sub(r'(\b[a-zA-Z]\s*=\s*\[\s*\{id:`cloudy`)', the_archive_obj + r'\1', code, 1)
        
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(code)
        print(f"Patched {fpath} successfully!")
