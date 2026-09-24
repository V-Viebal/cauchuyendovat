with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# find all <script>...</script>
import re
scripts = re.findall(r'<script[^>]*>(.*?)</script>', text, re.DOTALL)
for i, s in enumerate(scripts):
    print(f"=== SCRIPT {i} ===")
    print(s[:300])
