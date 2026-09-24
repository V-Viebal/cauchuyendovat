with open('server.py', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('HOST = os.environ.get("MONOS_HOST", "127.0.0.1")', 'HOST = os.environ.get("MONOS_HOST", "0.0.0.0")')

with open('server.py', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated HOST to 0.0.0.0 in server.py')
