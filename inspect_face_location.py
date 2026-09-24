from PIL import Image

im = Image.open('public/le-hoang-tuyet-ngoc-portrait.jpg')
w, h = im.size
print(f"Original size: {w} x {h}")

# Let's create a crop with aspect-ratio 1 / 1.18 (e.g. 1000 x 1180) centered around the upper middle where the head and torso are
target_ratio = 1.0 / 1.18 # ~0.847
# If height = h, target width would be h * target_ratio = 2000 * 0.847 = 1694 (larger than w=1234)
# So target_height = w / target_ratio = 1234 * 1.18 = 1456!
target_h = int(w * 1.18) # 1456
target_w = w # 1234

# Crop from y=0 to target_h (top of the photo)
crop_top = im.crop((0, 0, target_w, target_h))
crop_top.save('public/le-hoang-tuyet-ngoc-portrait.jpg', 'JPEG', quality=92)
crop_top.save('le-hoang-tuyet-ngoc-portrait.jpg', 'JPEG', quality=92)
print("Recropped to exact 1:1.18 portrait aspect ratio:", crop_top.size)
