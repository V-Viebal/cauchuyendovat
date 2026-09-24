with open('mirrored_pages/signup.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
intro = re.search(r'<section class="login-intro">.*?</section>', text, re.DOTALL)
if intro:
    print(intro.group(0))
