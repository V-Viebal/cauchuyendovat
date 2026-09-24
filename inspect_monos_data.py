with open('_next/static/chunks/monos-data-CNm7IGvZ.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_n = text.find('n=[{')
idx_r = text.find('r=[`')
print("FACTORIES (n):")
print(text[idx_n:idx_r])

idx_u = text.find('u=[{')
idx_d = text.find('d=[{')
print("\nBRANDS (u):")
print(text[idx_u:idx_d])
