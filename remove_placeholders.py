import re

# 1. Clean mirrored_pages/designers.html
with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text = f.read()

placeholder_ids = ['designer-01', 'designer-02', 'designer-03', 'designer-04']

for pid in placeholder_ids:
    pattern = rf'<article class="designer-card [^"]+" id="{pid}">.*?</article>'
    match = re.search(pattern, text, re.DOTALL)
    if match:
        text = text[:match.start()] + text[match.end():]
        print(f"Removed {pid} from designers.html")
    else:
        print(f"Could not find {pid} in designers.html")

# Update count: originally was 14 (12 cá nhân · 2 công ty) -> now 10 cá nhân, 0 công ty, 10 hồ sơ
# Re-index remaining cards from 01 to 10
cards = re.findall(r'<article class="designer-card [^"]+" id="[^"]+">', text)
print(f"Remaining cards: {len(cards)}")

# Update counter texts in toolbar
text = re.sub(r'\d+<!-- --> hồ sơ đang hiển thị', f'{len(cards)}<!-- --> hồ sơ đang hiển thị', text)
text = re.sub(r'\d+<!-- --> cá nhân · <!-- -->\d+<!-- --> công ty', f'{len(cards)}<!-- --> cá nhân', text)

# Re-number index "01 / COMMUNITY PROFILE", "02 / COMMUNITY PROFILE", etc.
for i in range(1, len(cards) + 1):
    idx_str = f"{i:02d}"
    # Replace the designer-index inside each card
    pass

# Clean up index inside cards
def reindex_card(match_num, new_idx):
    pass

with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated mirrored_pages/designers.html!")

# 2. Clean _next/static/chunks/monos-data-CNm7IGvZ.js
with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

for pid in placeholder_ids:
    # Match {id:`designer-01`,...}
    # find `{id:`pid``
    target = f'{{id:`{pid}`'
    idx = data_js.find(target)
    if idx != -1:
        # find matching closing brace followed by comma or bracket
        end_brace = data_js.find('}', idx)
        # handle possible nested braces
        brace_count = 0
        cur = idx
        while cur < len(data_js):
            if data_js[cur] == '{':
                brace_count += 1
            elif data_js[cur] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = cur + 1
                    break
            cur += 1
        
        # also consume preceding or following comma
        if end_pos < len(data_js) and data_js[end_pos] == ',':
            end_pos += 1
        elif idx > 0 and data_js[idx-1] == ',':
            idx -= 1
        
        data_js = data_js[:idx] + data_js[end_pos:]
        print(f"Removed {pid} from monos-data")
    else:
        print(f"Could not find {pid} in monos-data")

with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(data_js)
with open('monos-data-CNm7IGvZ.js', 'w', encoding='utf-8') as f:
    f.write(data_js)
print("Updated monos-data-CNm7IGvZ.js!")

# 3. Clean _next/static/chunks/designer-directory-OAAyNLdH.js
with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'r', encoding='utf-8') as f:
    dir_js = f.read()

# remove routes for designer-01 and designer-02
dir_js = dir_js.replace('e.id===`designer-01`?`/designers/designer-01`:', '')
dir_js = dir_js.replace('e.id===`designer-02`?`/designers/db-studio`:', '')
dir_js = dir_js.replace('e.id===`designer-01`||', '')
dir_js = dir_js.replace('||e.id===`designer-02`', '')

with open('_next/static/chunks/designer-directory-OAAyNLdH.js', 'w', encoding='utf-8') as f:
    f.write(dir_js)
print("Updated designer-directory chunk!")
