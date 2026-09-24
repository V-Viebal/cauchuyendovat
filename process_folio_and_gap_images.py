import os
from PIL import Image

dest_pub = './public'
dest_root = '.'

# 1. FOLIO - QUANG VO
folio_dir = './extracted_folio_quang_vo/FOLIO - QUANG VO'

# Portrait
im_q_bw = Image.open(os.path.join(folio_dir, 'BW_PROFILE.jpg'))
if im_q_bw.mode in ('RGBA', 'P'):
    im_q_bw = im_q_bw.convert('RGB')
if im_q_bw.width > 2000 or im_q_bw.height > 2000:
    im_q_bw.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
im_q_bw.save(os.path.join(dest_pub, 'vo-tran-thanh-quang-portrait.jpg'), 'JPEG', quality=90, optimize=True)
im_q_bw.save(os.path.join(dest_root, 'vo-tran-thanh-quang-portrait.jpg'), 'JPEG', quality=90, optimize=True)
print("Saved vo-tran-thanh-quang-portrait.jpg:", im_q_bw.size)

# Product photos
# TR109978 copy.jpg is dining table main shot
im_f1 = Image.open(os.path.join(folio_dir, 'TR109978 copy.jpg'))
im_f1.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_f1.save(os.path.join(dest_pub, 'folio-table-main.jpg'), 'JPEG', quality=90, optimize=True)
im_f1.save(os.path.join(dest_root, 'folio-table-main.jpg'), 'JPEG', quality=90, optimize=True)

# TR109972 copy.jpg is coffee table shot
im_f2 = Image.open(os.path.join(folio_dir, 'TR109972 copy.jpg'))
im_f2.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_f2.save(os.path.join(dest_pub, 'folio-coffee-table.jpg'), 'JPEG', quality=90, optimize=True)
im_f2.save(os.path.join(dest_root, 'folio-coffee-table.jpg'), 'JPEG', quality=90, optimize=True)

# TR109959 copy.jpg is leg frame hinge detail
im_f3 = Image.open(os.path.join(folio_dir, 'TR109959 copy.jpg'))
im_f3.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_f3.save(os.path.join(dest_pub, 'folio-leg-detail.jpg'), 'JPEG', quality=90, optimize=True)
im_f3.save(os.path.join(dest_root, 'folio-leg-detail.jpg'), 'JPEG', quality=90, optimize=True)
print("Saved Folio table photos!")

# 2. THE GAP LAMP - DUONG NHAT QUANG DONG
gap_dir = './extracted_the_gap_lamp/THE GAP LAMP - DUONG NHẬT QUANG ĐÔNG'

# Designer portrait: ẢNH CÁ NHÂN/01.png
im_dong = Image.open(os.path.join(gap_dir, 'ẢNH CÁ NHÂN', '01.png'))
if im_dong.mode in ('RGBA', 'P'):
    im_dong = im_dong.convert('RGB')
if im_dong.width > 2000 or im_dong.height > 2000:
    im_dong.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
im_dong.save(os.path.join(dest_pub, 'duong-nhat-quang-dong-portrait.jpg'), 'JPEG', quality=90, optimize=True)
im_dong.save(os.path.join(dest_root, 'duong-nhat-quang-dong-portrait.jpg'), 'JPEG', quality=90, optimize=True)
print("Saved duong-nhat-quang-dong-portrait.jpg:", im_dong.size)

# Lamp shots: 01.jpg, 02.jpg, 03.jpg, 04.jpg
prod_gap = os.path.join(gap_dir, 'ẢNH CHỤP SẢN PHẨM')
for src_num, out_name in [('01.jpg', 'the-gap-lamp-main.jpg'), ('02.jpg', 'the-gap-lamp-light.jpg'), ('03.jpg', 'the-gap-lamp-yakisugi.jpg'), ('04.jpg', 'the-gap-lamp-detail.jpg')]:
    im_lamp = Image.open(os.path.join(prod_gap, src_num))
    if im_lamp.width > 2200 or im_lamp.height > 2200:
        im_lamp.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    im_lamp.save(os.path.join(dest_pub, out_name), 'JPEG', quality=90, optimize=True)
    im_lamp.save(os.path.join(dest_root, out_name), 'JPEG', quality=90, optimize=True)
    print(f"Saved {out_name}:", im_lamp.size)

print("All images processed successfully!")
