with open('mirrored_pages/designers__le-hoang-tuyet-ngoc.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<section class="phong-vinh-objects')
idx_end = text.find('</section>', idx) + 10
print(text[idx:idx_end])
