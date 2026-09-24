with open('mirrored_pages/signup.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Update submitSignup redirect in signup.html
old_redirect = """    if (activeCategory === 'designer') {
      window.location.href = '/designers';
    } else if (activeCategory === 'factory') {
      window.location.href = '/factories';
    } else if (activeCategory === 'brand') {
      window.location.href = '/brands';
    } else if (activeCategory === 'material') {
      window.location.href = '/materials';
    } else {
      window.location.href = '/feed';
    }"""

new_redirect = """    let targetRole = activeCategory;
    if (activeCategory === 'designer') {
      targetRole = activeSubDesigner === 'studio' ? 'designer_stu' : 'designer_ind';
    }
    
    // Save user info to localStorage
    try {
      const nameInput = document.getElementById('in-name') || document.getElementById('st-name') || document.getElementById('fa-name') || document.getElementById('br-name') || document.getElementById('mat-name') || document.getElementById('cl-name');
      const registeredName = nameInput ? nameInput.value : 'Thành viên Monos';
      localStorage.setItem('monos_current_user', JSON.stringify({
        role: targetRole,
        name: registeredName,
        email: document.getElementById('f-email').value,
        isLoggedIn: true
      }));
    } catch(e) {}
    
    window.location.href = '/profile?role=' + targetRole;"""

assert old_redirect in text, "old_redirect not found in signup.html"
text = text.replace(old_redirect, new_redirect)

with open('mirrored_pages/signup.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated signup.html redirects directly to profile page!")
