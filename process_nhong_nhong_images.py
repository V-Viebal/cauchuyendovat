import os
from PIL import Image

src_dir = './extracted_nhong_nhong/HMA26-NHONG NHONG'
dest_public = './public'
dest_root = '.'

# 1. Designer portraits:
# IMG_3683.JPG and IMG_20260920_140253.jpg
# Let's inspect who is who, or combine them into a dual-portrait / two separate portraits!
im_p1 = Image.open(os.path.join(src_dir, 'Ảnh profile đen trắng', 'IMG_3683.JPG'))
im_p2 = Image.open(os.path.join(src_dir, 'Ảnh profile đen trắng', 'IMG_20260920_140253.jpg'))
print("Portrait 1 size:", im_p1.size)
print("Portrait 2 size:", im_p2.size)

# Convert & save separate portraits
for src_p, name in [(im_p1, 'nguyen-ngoc-chung-portrait.jpg'), (im_p2, 'nguyen-cam-chau-portrait.jpg')]:
    if src_p.mode in ('RGBA', 'P'):
        src_p = src_p.convert('RGB')
    if src_p.width > 2000 or src_p.height > 2000:
        src_p.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
    src_p.save(os.path.join(dest_public, name), 'JPEG', quality=90, optimize=True)
    src_p.save(os.path.join(dest_root, name), 'JPEG', quality=90, optimize=True)
    print(f"Saved {name}: {src_p.size}")

# Also create a combined duo portrait for the team card: 'nhong-nhong-designers-duo.jpg'
# Target height 1200
h = 1200
w1 = int(im_p1.width * (h / im_p1.height))
w2 = int(im_p2.width * (h / im_p2.height))
p1_resized = im_p1.resize((w1, h), Image.Resampling.LANCZOS).convert('RGB')
p2_resized = im_p2.resize((w2, h), Image.Resampling.LANCZOS).convert('RGB')
duo = Image.new('RGB', (w1 + w2 + 8, h), (240, 240, 240))
duo.paste(p1_resized, (0, 0))
duo.paste(p2_resized, (w1 + 8, 0))
duo.save(os.path.join(dest_public, 'chung-va-chau-duo-portrait.jpg'), 'JPEG', quality=90, optimize=True)
duo.save(os.path.join(dest_root, 'chung-va-chau-duo-portrait.jpg'), 'JPEG', quality=90, optimize=True)
print("Saved chung-va-chau-duo-portrait.jpg:", duo.size)

# 2. Product images
# TR100094 copy.jpg, TR100096 copy.jpg, TR100099 copy.jpg, TR100101 copy.jpg, InShot_20260919_215850445.jpg, IMG_20260919_213758.jpg
prod_dir = os.path.join(src_dir, 'Ảnh sản phẩm')
prod_map = {
    'TR100094 copy.jpg': 'nhong-nhong-main.jpg',
    'TR100096 copy.jpg': 'nhong-nhong-detail-rocking.jpg',
    'TR100099 copy.jpg': 'nhong-nhong-nested.jpg',
    'TR100101 copy.jpg': 'nhong-nhong-detail-wood.jpg',
    'InShot_20260919_215850445.jpg': 'nhong-nhong-lifestyle.jpg'
}

for src_name, dst_name in prod_map.items():
    src_file = os.path.join(prod_dir, src_name)
    im = Image.open(src_file)
    if im.mode in ('RGBA', 'P'):
        im = im.convert('RGB')
    if im.width > 2200 or im.height > 2200:
        im.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    im.save(os.path.join(dest_public, dst_name), 'JPEG', quality=88, optimize=True)
    im.save(os.path.join(dest_root, dst_name), 'JPEG', quality=88, optimize=True)
    print(f"Saved {dst_name}: {im.size}")
