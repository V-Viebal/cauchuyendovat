import os
from PIL import Image

dest_pub = './public'
dest_root = '.'

# 1. Designer portrait from DSC03550.jpg
# Crop to standard 1:1.18 ratio centered on upper body
im_portrait = Image.open('/mnt/c/Users/Le Tan Minh/Downloads/DSC03550.jpg')
w, h = im_portrait.size
# Size is 2560 x 3840
# Ratio target: 1 / 1.18 -> width 2560 -> height = 2560 * 1.18 = 3020
target_h = int(w * 1.18) # 3020
crop_p = im_portrait.crop((0, 0, w, target_h))
if crop_p.width > 2000:
    crop_p.thumbnail((2000, 2000), Image.Resampling.LANCZOS)

crop_p.save(os.path.join(dest_pub, 'ngo-duy-khanh-portrait.jpg'), 'JPEG', quality=92, optimize=True)
crop_p.save(os.path.join(dest_root, 'ngo-duy-khanh-portrait.jpg'), 'JPEG', quality=92, optimize=True)
print("Saved ngo-duy-khanh-portrait.jpg:", crop_p.size)

# 2. Studio photos of Bàn Kiệu:
# 2aobor0dmqvndyy5genxnvytozro1b88qv9brpva3.jpg (horizontal full shot)
im_kieu_main = Image.open('extracted_duy_khanh_new/2aobor0dmqvndyy5genxnvytozro1b88qv9brpva3.jpg')
im_kieu_main.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_kieu_main.save(os.path.join(dest_pub, 'ban-kieu-real-main.jpg'), 'JPEG', quality=90, optimize=True)
im_kieu_main.save(os.path.join(dest_root, 'ban-kieu-real-main.jpg'), 'JPEG', quality=90, optimize=True)

# 2aobor0dmrshqiby2aw8kbaagppjptgqu0qzhwd25.jpg (vertical leg detail)
im_kieu_det1 = Image.open('extracted_duy_khanh_new/2aobor0dmrshqiby2aw8kbaagppjptgqu0qzhwd25.jpg')
im_kieu_det1.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_kieu_det1.save(os.path.join(dest_pub, 'ban-kieu-real-leg.jpg'), 'JPEG', quality=90, optimize=True)
im_kieu_det1.save(os.path.join(dest_root, 'ban-kieu-real-leg.jpg'), 'JPEG', quality=90, optimize=True)

# 2aobor0dmriihortdvfwmmtwb6xb5uz5350skmns4.jpg (vertical table top connection detail)
im_kieu_det2 = Image.open('extracted_duy_khanh_new/2aobor0dmriihortdvfwmmtwb6xb5uz5350skmns4.jpg')
im_kieu_det2.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_kieu_det2.save(os.path.join(dest_pub, 'ban-kieu-real-top.jpg'), 'JPEG', quality=90, optimize=True)
im_kieu_det2.save(os.path.join(dest_root, 'ban-kieu-real-top.jpg'), 'JPEG', quality=90, optimize=True)

# 3. Studio photos of Dragonfly Glow:
# 2aobor0dlumdxhnk1gok0td5boamnx98c80lmbki7.jpg (horizontal full shot with model)
im_df_main = Image.open('extracted_duy_khanh_new/2aobor0dlumdxhnk1gok0td5boamnx98c80lmbki7.jpg')
im_df_main.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_df_main.save(os.path.join(dest_pub, 'dragonfly-glow-real-main.jpg'), 'JPEG', quality=90, optimize=True)
im_df_main.save(os.path.join(dest_root, 'dragonfly-glow-real-main.jpg'), 'JPEG', quality=90, optimize=True)

# 2aobor0dluyq5eddzge9xj4t2ikhrsabkxnnvkda9.jpg (vertical standing lamp)
im_df_v = Image.open('extracted_duy_khanh_new/2aobor0dluyq5eddzge9xj4t2ikhrsabkxnnvkda9.jpg')
im_df_v.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_df_v.save(os.path.join(dest_pub, 'dragonfly-glow-real-vertical.jpg'), 'JPEG', quality=90, optimize=True)
im_df_v.save(os.path.join(dest_root, 'dragonfly-glow-real-vertical.jpg'), 'JPEG', quality=90, optimize=True)

# 2aobor0dluq0kmmljxzabsrgmzplw7dt7ijkbuuo8.jpg (wing gold reflex detail)
im_df_w = Image.open('extracted_duy_khanh_new/2aobor0dluq0kmmljxzabsrgmzplw7dt7ijkbuuo8.jpg')
im_df_w.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
im_df_w.save(os.path.join(dest_pub, 'dragonfly-glow-real-wing.jpg'), 'JPEG', quality=90, optimize=True)
im_df_w.save(os.path.join(dest_root, 'dragonfly-glow-real-wing.jpg'), 'JPEG', quality=90, optimize=True)

print("All Ngô Duy Khánh assets processed successfully!")
