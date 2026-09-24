from PIL import Image

im = Image.open('public/le-hoang-tuyet-ngoc-portrait.jpg')
print("Image size:", im.size)
# The image is 1234 x 2000.
# Aspect ratio 1234/2000 = 0.617 (very tall portrait!)
# But .phong-vinh-portrait has aspect-ratio: 1 / 1.18 = 0.847 !
# When an image with aspect ratio 0.617 is rendered with object-fit: cover into 0.847,
# it gets zoomed in width-wise, and the top/bottom are clipped!
# Let's see where her face is in the image!
