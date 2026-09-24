import zipfile, os

dl = '/mnt/c/Users/Le Tan Minh/Downloads'
z1 = os.path.join(dl, 'Hoa Mai - Duy Khánh [22-09-2026 07_30].zip')
z2 = os.path.join(dl, 'Hoa Mai - Duy Khánh [22-09-2026 07_31].zip')

for path, label in [(z1, 'Zip 07_30'), (z2, 'Zip 07_31')]:
    print(f"=== {label} ===")
    with zipfile.ZipFile(path, 'r') as z:
        for info in z.infolist():
            print(info.filename, info.file_size)
