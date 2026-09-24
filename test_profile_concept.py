with open('server.py') as f:
    srv = f.read()

print("server.py has /profile:", "/profile" in srv)
