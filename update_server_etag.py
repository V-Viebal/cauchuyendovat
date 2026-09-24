with open('server.py', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'self.send_header("Cache-Control", "no-store")'
replacement = '''self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")'''

assert target in text
text = text.replace(target, replacement)

with open('server.py', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated Cache-Control headers in server.py!')
