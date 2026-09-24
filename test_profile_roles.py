with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("const profileData = {")
idx_end = text.find("function switchProfile(", idx)
print(text[idx:idx+200])

# check switchProfile function
idx_fn = text.find("function switchProfile(")
idx_fn_end = text.find("function logout(", idx_fn)
print("\n--- switchProfile ---")
print(text[idx_fn:idx_fn_end])

# check DOMContentLoaded
idx_dcl = text.find("window.addEventListener('DOMContentLoaded'")
print("\n--- DOMContentLoaded ---")
print(text[idx_dcl:idx_dcl+400])
