with open('mirrored_pages/login.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<div class="sim-grid">')
idx_end = text.find('</div>', text.find('</button>\n\n        <!-- 6.'))
print(text[idx:idx_end+20])
