with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Read the validated clean JS
with open('fix_profile_data_clean.js', 'r', encoding='utf-8') as f:
    clean_js = f.read()

# Replace the script in profile.html
idx = text.find('<script>')
new_profile_html = text[:idx] + '<script>\n' + clean_js + '\n</script>\n</body>\n</html>'

# Also ensure header logout button has class btn-logout-action and proper onclick
new_profile_html = new_profile_html.replace('onclick="logout();return false;"', 'class="submit-button header-submit btn-logout-action" onclick="handleLogout(); return false;"')

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(new_profile_html)

print("Assembled profile.html with validated clean JS!")
