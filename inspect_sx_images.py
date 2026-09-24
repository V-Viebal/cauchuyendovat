import zipfile, io
from PIL import Image

zpath = '/mnt/c/Users/Le Tan Minh/Downloads/HÌNH ẢNH SẢN XUẤT.zip'
with zipfile.ZipFile(zpath, 'r') as z:
    for name in z.namelist():
        if name.lower().endswith('.jpg'):
            data = z.read(name)
            im = Image.open(io.BytesIO(data))
            print(name, im.size)
