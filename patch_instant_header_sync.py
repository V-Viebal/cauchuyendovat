with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Enhance switchProfile to update header immediately:
target_code = "document.getElementById('headerUserName').innerText = d.name;"
replacement_code = """const headerNameElem = document.getElementById('headerUserName');
  if (headerNameElem) {
    headerNameElem.innerText = d.name;
  }
  // Also update document title
  document.title = d.name + ' — Hồ sơ Monos';"""

text = text.replace(target_code, replacement_code)

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Enhanced instant header sync in profile.html!")
