with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Notice in profile.html header:
# <a class="login-link" href="/profile" style="..."><span ...></span><span id="headerUserName">Hồ sơ của tôi</span></a>
# In switchProfile:
# document.getElementById('headerUserName').innerText = d.name;
# That updates the header username directly and synchronously!

print("Profile headerUserName binding exists:", "id=\"headerUserName\"" in text)
