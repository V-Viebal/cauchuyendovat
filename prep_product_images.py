from PIL import Image
import os, shutil

dest_pub = './public'
dest_root = '.'

# 1. Lũy Module:
# page 1 has the beautiful hero rendering with title "lũy module"
p1 = Image.open(os.path.join(dest_pub, 'luy-module-page-1.jpg'))
p1.save(os.path.join(dest_pub, 'luy-module-main.jpg'), 'JPEG', quality=90)
p1.save(os.path.join(dest_root, 'luy-module-main.jpg'), 'JPEG', quality=90)

# page 5 has module 1, 2, 3, 4 breakdown
p5 = Image.open(os.path.join(dest_pub, 'luy-module-page-5.jpg'))
p5.save(os.path.join(dest_pub, 'luy-module-detail-breakdown.jpg'), 'JPEG', quality=90)
p5.save(os.path.join(dest_root, 'luy-module-detail-breakdown.jpg'), 'JPEG', quality=90)

# page 7 has variations (Kệ bếp, Bàn side, Kệ trang trí)
p7 = Image.open(os.path.join(dest_pub, 'luy-module-page-7.jpg'))
p7.save(os.path.join(dest_pub, 'luy-module-detail-lifestyle.jpg'), 'JPEG', quality=90)
p7.save(os.path.join(dest_root, 'luy-module-detail-lifestyle.jpg'), 'JPEG', quality=90)

# page 4 has mechanism (xoay 360, xếp chồng)
p4 = Image.open(os.path.join(dest_pub, 'luy-module-page-4.jpg'))
p4.save(os.path.join(dest_pub, 'luy-module-detail-mechanism.jpg'), 'JPEG', quality=90)
p4.save(os.path.join(dest_root, 'luy-module-detail-mechanism.jpg'), 'JPEG', quality=90)

# 2. Hoa Gốm:
# hoa-gom-raw-1-11.jpeg is the gorgeous 4000x2400 3D render of the chair
hg_main = Image.open(os.path.join(dest_pub, 'hoa-gom-raw-1-11.jpeg'))
if hg_main.width > 2200:
    hg_main.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
hg_main.save(os.path.join(dest_pub, 'hoa-gom-main.jpg'), 'JPEG', quality=90)
hg_main.save(os.path.join(dest_root, 'hoa-gom-main.jpg'), 'JPEG', quality=90)

# page 1 & page 2 concept board
hg_p1 = Image.open(os.path.join(dest_pub, 'hoa-gom-page-1.jpg'))
if hg_p1.width > 2200:
    hg_p1.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
hg_p1.save(os.path.join(dest_pub, 'hoa-gom-board-1.jpg'), 'JPEG', quality=88)
hg_p1.save(os.path.join(dest_root, 'hoa-gom-board-1.jpg'), 'JPEG', quality=88)

hg_p2 = Image.open(os.path.join(dest_pub, 'hoa-gom-page-2.jpg'))
if hg_p2.width > 2200:
    hg_p2.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
hg_p2.save(os.path.join(dest_pub, 'hoa-gom-board-2.jpg'), 'JPEG', quality=88)
hg_p2.save(os.path.join(dest_root, 'hoa-gom-board-2.jpg'), 'JPEG', quality=88)

# Copy PDFs to refs
os.makedirs('public/refs', exist_ok=True)
os.makedirs('refs', exist_ok=True)
shutil.copy2('/mnt/c/Users/Le Tan Minh/Downloads/Huỳnh Minh Đăng - Luỹ Module - HMA 2026.pdf', 'public/refs/luy-module.pdf')
shutil.copy2('/mnt/c/Users/Le Tan Minh/Downloads/Huỳnh Minh Đăng - Luỹ Module - HMA 2026.pdf', 'refs/luy-module.pdf')
shutil.copy2('/mnt/c/Users/Le Tan Minh/Downloads/Hoa gốm.pdf', 'public/refs/hoa-gom.pdf')
shutil.copy2('/mnt/c/Users/Le Tan Minh/Downloads/Hoa gốm.pdf', 'refs/hoa-gom.pdf')

print("Product images and PDFs prepared successfully!")
