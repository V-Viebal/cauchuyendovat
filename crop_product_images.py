import os
from PIL import Image

p1 = '/mnt/c/Users/Le Tan Minh/Downloads/2aOboQzeKqNH9TrhhWQe8U9xG9bIHLcUEWt2ZxvU.jpg' # Ban Kieu
p2 = '/mnt/c/Users/Le Tan Minh/Downloads/2aOboQzeKqH9fIyZB84qRuAuDG91l2p6qnYuo6Wu.jpg' # Dragonfly Glow

im1 = Image.open(p1)
im2 = Image.open(p2)
print("Image 1 (Ban Kieu) size:", im1.size)
print("Image 2 (Dragonfly Glow) size:", im2.size)

dest_pub = './public'
dest_root = '.'

# 1. Ban Kieu full board
im1.save(os.path.join(dest_pub, 'ban-kieu-board.jpg'), 'JPEG', quality=90)
im1.save(os.path.join(dest_root, 'ban-kieu-board.jpg'), 'JPEG', quality=90)

# Crop Ban Kieu main product (bottom right area where the 3D rendered table is)
# [left, upper, right, lower]
# in Image 1: Table is in bottom-middle-right: x around 35% to 90%, y around 55% to 98%
w1, h1 = im1.size
crop_table = im1.crop((int(w1 * 0.38), int(h1 * 0.52), int(w1 * 0.90), int(h1 * 0.98)))
crop_table.save(os.path.join(dest_pub, 'ban-kieu-main.jpg'), 'JPEG', quality=90)
crop_table.save(os.path.join(dest_root, 'ban-kieu-main.jpg'), 'JPEG', quality=90)
print("Saved ban-kieu-main.jpg:", crop_table.size)

# Crop Ban Kieu detail 1 (top-left zoom)
crop_detail1 = im1.crop((int(w1 * 0.03), int(h1 * 0.04), int(w1 * 0.24), int(h1 * 0.23)))
crop_detail1.save(os.path.join(dest_pub, 'ban-kieu-detail-1.jpg'), 'JPEG', quality=90)
crop_detail1.save(os.path.join(dest_root, 'ban-kieu-detail-1.jpg'), 'JPEG', quality=90)

# Crop Ban Kieu detail 2 (middle-left zoom)
crop_detail2 = im1.crop((int(w1 * 0.03), int(h1 * 0.27), int(w1 * 0.24), int(h1 * 0.51)))
crop_detail2.save(os.path.join(dest_pub, 'ban-kieu-detail-2.jpg'), 'JPEG', quality=90)
crop_detail2.save(os.path.join(dest_root, 'ban-kieu-detail-2.jpg'), 'JPEG', quality=90)

# 2. Dragonfly Glow full board
im2.save(os.path.join(dest_pub, 'dragonfly-glow-board.jpg'), 'JPEG', quality=90)
im2.save(os.path.join(dest_root, 'dragonfly-glow-board.jpg'), 'JPEG', quality=90)

# Crop Dragonfly Glow main (full lamp on left)
w2, h2 = im2.size
crop_lamp_main = im2.crop((int(w2 * 0.08), int(h2 * 0.17), int(w2 * 0.21), int(h2 * 0.83)))
crop_lamp_main.save(os.path.join(dest_pub, 'dragonfly-glow-main.jpg'), 'JPEG', quality=90)
crop_lamp_main.save(os.path.join(dest_root, 'dragonfly-glow-main.jpg'), 'JPEG', quality=90)
print("Saved dragonfly-glow-main.jpg:", crop_lamp_main.size)

# Crop Dragonfly Glow details on the right
crop_wing_detail = im2.crop((int(w2 * 0.62), int(h2 * 0.04), int(w2 * 0.80), int(h2 * 0.50)))
crop_wing_detail.save(os.path.join(dest_pub, 'dragonfly-glow-detail-wing.jpg'), 'JPEG', quality=90)
crop_wing_detail.save(os.path.join(dest_root, 'dragonfly-glow-detail-wing.jpg'), 'JPEG', quality=90)

crop_lamp_angle = im2.crop((int(w2 * 0.62), int(h2 * 0.50), int(w2 * 0.80), int(h2 * 0.96)))
crop_lamp_angle.save(os.path.join(dest_pub, 'dragonfly-glow-detail-angle.jpg'), 'JPEG', quality=90)
crop_lamp_angle.save(os.path.join(dest_root, 'dragonfly-glow-detail-angle.jpg'), 'JPEG', quality=90)

crop_lamp_back = im2.crop((int(w2 * 0.80), int(h2 * 0.50), int(w2 * 0.98), int(h2 * 0.96)))
crop_lamp_back.save(os.path.join(dest_pub, 'dragonfly-glow-detail-back.jpg'), 'JPEG', quality=90)
crop_lamp_back.save(os.path.join(dest_root, 'dragonfly-glow-detail-back.jpg'), 'JPEG', quality=90)

print("All cropped images generated successfully!")
