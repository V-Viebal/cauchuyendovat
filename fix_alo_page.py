import re

# In mirrored_pages/designers__alo-furniture-design.html:
# Change the page to redirect cleanly or show the proper designer Lê Hoàng Tuyết Ngọc with ALO as manufacturer
with open('mirrored_pages/designers__alo-furniture-design.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the hero image and description so that it features the portrait of Le Hoang Tuyet Ngoc or redirects
# Better yet, redirect /designers/alo-furniture-design -> /designers/le-hoang-tuyet-ngoc
redirect_html = '''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charSet="utf-8"/>
<meta http-equiv="refresh" content="0; url=/designers/le-hoang-tuyet-ngoc"/>
<title>Chuyển hướng đến Lê Hoàng Tuyết Ngọc — Monos</title>
<script>
window.location.replace("/designers/le-hoang-tuyet-ngoc");
</script>
</head>
<body>
<p>Đang chuyển hướng đến <a href="/designers/le-hoang-tuyet-ngoc">Hồ sơ tác giả Lê Hoàng Tuyết Ngọc</a>...</p>
</body>
</html>'''

with open('mirrored_pages/designers__alo-furniture-design.html', 'w', encoding='utf-8') as f:
    f.write(redirect_html)

print("Updated designers__alo-furniture-design.html with clean redirect!")
