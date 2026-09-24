import zipfile, io, os
from PIL import Image

dl = '/mnt/c/Users/Le Tan Minh/Downloads'
z1 = os.path.join(dl, 'Hoa Mai - Duy Khánh [22-09-2026 07_30].zip')
z2 = os.path.join(dl, 'Hoa Mai - Duy Khánh [22-09-2026 07_31].zip')

os.makedirs('extracted_duy_khanh_new', exist_ok=True)

with zipfile.ZipFile(z1, 'r') as z:
    for name in z.namelist():
        data = z.read(name)
        im = Image.open(io.BytesIO(data))
        out_p = os.path.join('extracted_duy_khanh_new', name)
        with open(out_p, 'wb') as f:
            f.write(data)
        print("Zip1:", name, im.size)

with zipfile.ZipFile(z2, 'r') as z:
    for name in z.namelist():
        data = z.read(name)
        im = Image.open(io.BytesIO(data))
        out_p = os.path.join('extracted_duy_khanh_new', name)
        with open(out_p, 'wb') as f:
            f.write(data)
        print("Zip2:", name, im.size)
