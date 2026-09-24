import zipfile, io
from PIL import Image

zpath = '/mnt/c/Users/Le Tan Minh/Downloads/HOÀN THIỆN.zip'
with zipfile.ZipFile(zpath, 'r') as z:
    for name in z.namelist():
        if name.endswith('.jpg'):
            data = z.read(name)
            im = Image.open(io.BytesIO(data))
            print(name, im.size, im.mode)
