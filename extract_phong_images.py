import pymupdf, os
from PIL import Image

pdf_path = '/mnt/c/Users/Le Tan Minh/Downloads/NGUYỄN XUÂN PHONG.pdf'
doc = pymupdf.open(pdf_path)

dest_pub = './public'
dest_root = '.'

print("Images inside NGUYỄN XUÂN PHONG.pdf:")
page = doc[0]
for img_index, img in enumerate(page.get_images(full=True)):
    xref = img[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    w = base_image["width"]
    h = base_image["height"]
    print(f"Image {img_index+1}: {w}x{h}, ext={image_ext}")
    
    # Save each image
    fname = f"phong-extracted-{img_index+1}.{image_ext}"
    with open(os.path.join(dest_pub, fname), "wb") as f:
        f.write(image_bytes)

# Render full page 1 at high resolution
pix = page.get_pixmap(dpi=200)
pix.save(os.path.join(dest_pub, "nguyen-xuan-phong-poster.jpg"))
pix.save(os.path.join(dest_root, "nguyen-xuan-phong-poster.jpg"))
print("Saved nguyen-xuan-phong-poster.jpg")
