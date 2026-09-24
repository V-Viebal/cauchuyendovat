from PIL import Image
import os, shutil

dest_pub = './public'
dest_root = '.'

# 1. Portrait from Image 2 (phong-extracted-2.jpeg)
im_p = Image.open(os.path.join(dest_pub, 'phong-extracted-2.jpeg'))
w, h = im_p.size
# Crop to standard 1:1.18 ratio
target_h = int(w * 1.18)
if target_h > h:
    target_h = h
    target_w = int(h / 1.18)
    crop_p = im_p.crop(((w - target_w)//2, 0, (w + target_w)//2, target_h))
else:
    crop_p = im_p.crop((0, 0, w, target_h))

crop_p.save(os.path.join(dest_pub, 'nguyen-xuan-phong-portrait.jpg'), 'JPEG', quality=92, optimize=True)
crop_p.save(os.path.join(dest_root, 'nguyen-xuan-phong-portrait.jpg'), 'JPEG', quality=92, optimize=True)
print("Saved nguyen-xuan-phong-portrait.jpg:", crop_p.size)

# 2. Product shots from Image 3 & 4
im_prod3 = Image.open(os.path.join(dest_pub, 'phong-extracted-3.jpeg'))
im_prod3.save(os.path.join(dest_pub, 'hoa-gom-shot-table.jpg'), 'JPEG', quality=90)
im_prod3.save(os.path.join(dest_root, 'hoa-gom-shot-table.jpg'), 'JPEG', quality=90)

im_prod4 = Image.open(os.path.join(dest_pub, 'phong-extracted-4.jpeg'))
im_prod4.save(os.path.join(dest_pub, 'hoa-gom-shot-single.jpg'), 'JPEG', quality=90)
im_prod4.save(os.path.join(dest_root, 'hoa-gom-shot-single.jpg'), 'JPEG', quality=90)

# 3. Copy PDF to public/refs/nguyen-xuan-phong-hoa-gom.pdf
shutil.copy2('/mnt/c/Users/Le Tan Minh/Downloads/NGUYỄN XUÂN PHONG.pdf', 'public/refs/nguyen-xuan-phong-hoa-gom.pdf')
shutil.copy2('/mnt/c/Users/Le Tan Minh/Downloads/NGUYỄN XUÂN PHONG.pdf', 'refs/nguyen-xuan-phong-hoa-gom.pdf')
print("Saved all Nguyễn Xuân Phong assets successfully!")
