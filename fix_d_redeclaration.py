with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect where 'const d =' is in switchProfile
target = '''function switchProfile(mode) {
  currentActiveData = profileData[mode];
  const d = currentActiveData;
  const d = profileData[mode];'''

replacement = '''function switchProfile(mode) {
  currentActiveData = profileData[mode];
  const d = currentActiveData;'''

if target in text:
    text = text.replace(target, replacement)
else:
    # let's look at lines around switchProfile
    idx = text.find('function switchProfile(mode)')
    print(text[idx:idx+150])
    text = text.replace('  currentActiveData = profileData[mode];\n  const d = currentActiveData;\n  const d = profileData[mode];', '  currentActiveData = profileData[mode];\n  const d = currentActiveData;')

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed 'd' redeclaration in profile.html!")
