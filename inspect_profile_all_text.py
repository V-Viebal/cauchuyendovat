with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for "TAVICO" in profile.html static HTML (not in the script)
idx_script = text.find('<script>')
html_body = text[:idx_script]

print("Is TAVICO in static HTML body of profile.html?", "TAVICO" in html_body)
print("Is Huỳnh Lê Phương Uyên in static HTML body?", "Huỳnh Lê Phương Uyên" in html_body)
print("Is Designer in static HTML body?", "DESIGNER" in html_body)

# Let's see what is inside the static HTML of profile.html
idx_hero = html_body.find('<div class="profile-card-top">')
print("\n--- Static Hero in profile.html ---")
print(html_body[idx_hero:idx_hero+1200])
