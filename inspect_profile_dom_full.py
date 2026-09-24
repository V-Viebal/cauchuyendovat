with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see the main card buttons and side panels
idx_card = text.find('<div class="profile-card-top">')
print(text[idx_card:idx_card+1200])
