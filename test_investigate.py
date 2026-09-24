with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("syncAuthHeader")
print("syncAuthHeader snippet:")
print(text[idx-50:idx+400])

idx2 = text.find("switchProfile(roleToLoad)")
print("\nswitchProfile call snippet:")
print(text[idx2-300:idx2+50])
