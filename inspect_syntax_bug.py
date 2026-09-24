with open('test_script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(95, 115):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end='')
