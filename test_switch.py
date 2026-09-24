with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see if there is any JavaScript error in profile.html
from bs4 import BeautifulSoup
soup = BeautifulSoup(text, 'html.parser')
scripts = soup.find_all('script')
for i, s in enumerate(scripts):
    print(f"--- Script {i} ---")
    content = s.string or ''
    print(content[:150])
