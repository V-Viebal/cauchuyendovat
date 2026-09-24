with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect how the header is rendered in profile.html
idx_head = text.find('class="header-actions"')
print(text[idx_head:idx_head+600])
