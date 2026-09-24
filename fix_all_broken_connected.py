import re, glob

# Check other single-object designer pages (such as Huỳnh Minh Đăng, Nguyễn Xuân Phong, Duy Khánh)
# In Phong, Dang: if they had a single product, ensure they use real-designer-object or standard grid
for p in glob.glob('mirrored_pages/designers__*.html'):
    with open(p, 'r', encoding='utf-8') as f:
        c = f.read()
    if 'grid-column: span 2;' in c:
        print("Found grid-column: span 2 in", p)
