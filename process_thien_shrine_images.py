import zipfile, io, os
from PIL import Image

dest_pub = './public'
dest_root = '.'

# 1. Extract and optimize main completed photos from HOÀN THIỆN.zip
zpath = '/mnt/c/Users/Le Tan Minh/Downloads/HOÀN THIỆN.zip'
with zipfile.ZipFile(zpath, 'r') as z:
    # TR109987 is horizontal overview
    data_main = z.read('HOÀN THIỆN/TR109987 copy.jpg')
    im_main = Image.open(io.BytesIO(data_main))
    im_main.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    im_main.save(os.path.join(dest_pub, 'thien-shrine-main.jpg'), 'JPEG', quality=90, optimize=True)
    im_main.save(os.path.join(dest_root, 'thien-shrine-main.jpg'), 'JPEG', quality=90, optimize=True)
    print("Saved thien-shrine-main.jpg:", im_main.size)

    # TR109985 is vertical full view
    data_v = z.read('HOÀN THIỆN/TR109985 copy.jpg')
    im_v = Image.open(io.BytesIO(data_v))
    im_v.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    im_v.save(os.path.join(dest_pub, 'thien-shrine-vertical.jpg'), 'JPEG', quality=90, optimize=True)
    im_v.save(os.path.join(dest_root, 'thien-shrine-vertical.jpg'), 'JPEG', quality=90, optimize=True)
    print("Saved thien-shrine-vertical.jpg:", im_v.size)

    # TR109991 is close-up craft detail
    data_d = z.read('HOÀN THIỆN/TR109991 copy.jpg')
    im_d = Image.open(io.BytesIO(data_d))
    im_d.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    im_d.save(os.path.join(dest_pub, 'thien-shrine-detail.jpg'), 'JPEG', quality=90, optimize=True)
    im_d.save(os.path.join(dest_root, 'thien-shrine-detail.jpg'), 'JPEG', quality=90, optimize=True)
    print("Saved thien-shrine-detail.jpg:", im_d.size)

    # TR109988 is warm lighting / atmosphere
    data_l = z.read('HOÀN THIỆN/TR109988 copy.jpg')
    im_l = Image.open(io.BytesIO(data_l))
    im_l.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    im_l.save(os.path.join(dest_pub, 'thien-shrine-lighting.jpg'), 'JPEG', quality=90, optimize=True)
    im_l.save(os.path.join(dest_root, 'thien-shrine-lighting.jpg'), 'JPEG', quality=90, optimize=True)
    print("Saved thien-shrine-lighting.jpg:", im_l.size)

# 2. Extract workshop fabrication photo from HÌNH ẢNH SẢN XUẤT.zip
zpath_sx = '/mnt/c/Users/Le Tan Minh/Downloads/HÌNH ẢNH SẢN XUẤT.zip'
with zipfile.ZipFile(zpath_sx, 'r') as z:
    data_sx = z.read('HÌNH ẢNH SẢN XUẤT/sx (18).jpg')
    im_sx = Image.open(io.BytesIO(data_sx))
    im_sx.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
    im_sx.save(os.path.join(dest_pub, 'thien-shrine-production.jpg'), 'JPEG', quality=88, optimize=True)
    im_sx.save(os.path.join(dest_root, 'thien-shrine-production.jpg'), 'JPEG', quality=88, optimize=True)
    print("Saved thien-shrine-production.jpg:", im_sx.size)

print("All THIÊN SHRINE images processed successfully!")
