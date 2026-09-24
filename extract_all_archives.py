import zipfile, subprocess, os

dl = '/mnt/c/Users/Le Tan Minh/Downloads'
zip_folio = os.path.join(dl, 'FOLIO - QUANG VO-20260921T012459Z-1-001.zip')
rar_gap = os.path.join(dl, 'THE GAP LAMP - DUONG NHẬT QUANG ĐÔNG.rar')

# 1. Extract FOLIO - QUANG VO
dir_folio = './extracted_folio_quang_vo'
os.makedirs(dir_folio, exist_ok=True)
with zipfile.ZipFile(zip_folio, 'r') as z:
    z.extractall(dir_folio)
print("Extracted FOLIO - QUANG VO successfully!")
for root, dirs, files in os.walk(dir_folio):
    for f in files:
        print("Folio:", os.path.join(root, f))

# 2. Extract THE GAP LAMP with 7z.exe
dir_gap = './extracted_the_gap_lamp'
os.makedirs(dir_gap, exist_ok=True)
cmd = ['/mnt/c/Program Files/7-Zip/7z.exe', 'x', rar_gap, f'-o{dir_gap}', '-y']
res = subprocess.run(cmd, capture_output=True, text=True)
print("\nExtracted THE GAP LAMP. Exit code:", res.returncode)
for root, dirs, files in os.walk(dir_gap):
    for f in files:
        print("Gap Lamp:", os.path.join(root, f))
