import pymupdf, os
from PIL import Image

dl = '/mnt/c/Users/Le Tan Minh/Downloads'
dest_pub = './public'
dest_root = '.'

# 1. Huỳnh Minh Đăng - Luỹ Module
doc1 = pymupdf.open(os.path.join(dl, 'Huỳnh Minh Đăng - Luỹ Module - HMA 2026.pdf'))
print("Doc 1 pages:", len(doc1))

# Render high-res images for pages
for page_num in range(len(doc1)):
    page = doc1[page_num]
    pix = page.get_pixmap(dpi=200)
    out_name = f"luy-module-page-{page_num+1}.jpg"
    pix.save(os.path.join(dest_pub, out_name))
    pix.save(os.path.join(dest_root, out_name))
    print(f"Rendered {out_name}")

# Also extract embedded images from page 1 & 7
img_count = 0
for page_num, page in enumerate(doc1):
    for img_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_image = doc1.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_name = f"luy-module-raw-{page_num+1}-{img_index+1}.{image_ext}"
        with open(os.path.join(dest_pub, img_name), "wb") as f:
            f.write(image_bytes)
        img_count += 1
print(f"Extracted {img_count} embedded images from Luy Module")

# 2. Hoa Gốm - Nguyễn Xuân Phong
doc2 = pymupdf.open(os.path.join(dl, 'Hoa gốm.pdf'))
print("Doc 2 pages:", len(doc2))
for page_num in range(len(doc2)):
    page = doc2[page_num]
    pix = page.get_pixmap(dpi=200)
    out_name = f"hoa-gom-page-{page_num+1}.jpg"
    pix.save(os.path.join(dest_pub, out_name))
    pix.save(os.path.join(dest_root, out_name))
    print(f"Rendered {out_name}")

# Extract embedded images from Hoa Gốm
for page_num, page in enumerate(doc2):
    for img_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_image = doc2.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_name = f"hoa-gom-raw-{page_num+1}-{img_index+1}.{image_ext}"
        with open(os.path.join(dest_pub, img_name), "wb") as f:
            f.write(image_bytes)
        print(f"Extracted Hoa Gom raw {img_name}")

