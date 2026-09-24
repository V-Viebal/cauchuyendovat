with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Make sure switchProfile doesn't try to touch non-existent mode-btn elements
target_js = """  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-mode-${mode}`);
  if (activeBtn) activeBtn.classList.add('active');"""

if target_js in text:
    text = text.replace(target_js, "// Cleaned mode buttons")

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleaned up JS in profile.html!")
