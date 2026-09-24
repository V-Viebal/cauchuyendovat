with open('test_script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Look at line 100-106
idx = text.find("'designer_stu': {")
print("Before designer_stu:")
print(repr(text[idx-40:idx]))
