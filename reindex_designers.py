with open('mirrored_pages/designers.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find all cards and their designer-index
# Replace indices sequentially from 01 to 10
cards = re.split(r'(<article class="designer-card [^"]+" id="[^"]+">)', text)
# cards[0] is before first card
out = [cards[0]]
card_idx = 1

for i in range(1, len(cards), 2):
    header = cards[i]
    body = cards[i+1]
    
    # Replace designer-index inside body
    # <div class="designer-index">... / COMMUNITY PROFILE</div>
    formatted_idx = f"{card_idx:02d}"
    first_digit = formatted_idx[0]
    second_digit = formatted_idx[1]
    replacement = f'<div class="designer-index">{first_digit}<!-- -->{second_digit}<!-- --> / COMMUNITY PROFILE</div>'
    
    body = re.sub(r'<div class="designer-index">.*?/ COMMUNITY PROFILE</div>', replacement, body, count=1)
    
    out.append(header)
    out.append(body)
    card_idx += 1

new_text = ''.join(out)
with open('mirrored_pages/designers.html', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Reindexed all 10 designer cards from 01 to 10!")
