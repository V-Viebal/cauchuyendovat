import pymupdf
import os

dl = '/mnt/c/Users/Le Tan Minh/Downloads'
pdf1 = os.path.join(dl, 'Huỳnh Minh Đăng - Luỹ Module - HMA 2026.pdf')
pdf2 = os.path.join(dl, 'Hoa gốm.pdf')

for path, title in [(pdf1, 'LŨY MODULE - HUỲNH MINH ĐĂNG'), (pdf2, 'HOA GỐM')]:
    print(f"\n==========================================")
    print(f"=== {title} ===")
    print(f"==========================================")
    doc = pymupdf.open(path)
    print("Page count:", len(doc))
    for i, page in enumerate(doc):
        text = page.get_text()
        print(f"\n--- Page {i+1} ---")
        print(text.strip())
