import os, glob

pages = glob.glob('mirrored_pages/*.html')
old_snippet_1 = '<a class="submit-button header-submit" href="/login">Đăng nhập <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in" aria-hidden="true"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg></a>'

old_snippet_2 = '<a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in" aria-hidden="true"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg></a>'

new_header_actions = '<a class="login-link" href="/login" style="font-size:13px;font-weight:600;color:var(--ink);margin-right:12px;text-decoration:none;">Đăng nhập</a><a class="submit-button header-submit" href="/signup">Đăng ký hồ sơ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>'

for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    if old_snippet_1 in content:
        content = content.replace(old_snippet_1, new_header_actions)
        modified = True
    if old_snippet_2 in content:
        content = content.replace(old_snippet_2, new_header_actions)
        modified = True
        
    if modified:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated header in {p}")
