from PIL import Image

im = Image.open('/mnt/c/Users/Le Tan Minh/AppData/Local/Temp/codex-clipboard-a6cba2bc-cc43-4344-a8d9-033aaf645023.png')
print("Clipboard image size:", im.size)

# Let's crop various regions and save them or check what is shown
# Let's see the top, middle, bottom
w, h = im.size
# Let's inspect what URL or page is in the screenshot
top_bar = im.crop((0, 0, w, 100))
top_bar.save('clip_top.png')

# Let's inspect center
center = im.crop((0, 100, w, h))
center.save('clip_center.png')

print("Saved inspection crops!")
