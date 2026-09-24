import os, shutil
from PIL import Image

dl = '/mnt/c/Users/Le Tan Minh/Downloads'
dest_public = './public'
dest_root = '.'

asset_map = {
    '2aOboQzvYvMNAMl50BBuBKbSkHpXem7SeOR4xLqC.jpg': 'tran-thao-nhien-portrait.jpg',
    '2aOboQzvYSDqdekoIXM69w93oMlavnMJGiB8EwxU.jpg': 'ban-mangthit-main.jpg',
    '2aOboQzvYSjTJtgLztq4XbpJOWhg7nIOAHJnQyf2.jpg': 'ban-mangthit-detail-1.jpg',
    '2aOboQzvYRffq0ccsg3huM86mbGID1vaz4MqB2YK.jpg': 'ban-mangthit-detail-2.jpg',
    '2aOboQzw1xbiqXJcvNJ3UR6aQ1hwBdtafG85TgA4.jpg': 'ban-mangthit-drawing-1.jpg',
    '2aOboQzw1xZzoNswmEqeLbntxRl9EzhNqCjkCWq8.jpg': 'ban-mangthit-drawing-2.jpg',
    '260901_BẢN VẼ KỸ THUẬT_Ban Mangthit_TRAN THAO NHIEN.pdf': 'ban-mangthit-technical-drawing.pdf'
}

for src_name, dst_name in asset_map.items():
    src_file = os.path.join(dl, src_name)
    if not os.path.exists(src_file):
        print(f"Not found: {src_file}")
        continue
    
    # If image, optimize and resize slightly if too large
    if dst_name.endswith('.jpg') or dst_name.endswith('.png'):
        im = Image.open(src_file)
        if im.mode in ('RGBA', 'P'):
            im = im.convert('RGB')
        if im.width > 2200 or im.height > 2200:
            im.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
        
        target_pub = os.path.join(dest_public, dst_name)
        target_root = os.path.join(dest_root, dst_name)
        im.save(target_pub, 'JPEG', quality=88, optimize=True)
        im.save(target_root, 'JPEG', quality=88, optimize=True)
        print(f"Saved {dst_name}: {im.size}")
    else:
        # PDF
        target_pub = os.path.join(dest_public, dst_name)
        target_root = os.path.join(dest_root, dst_name)
        shutil.copy2(src_file, target_pub)
        shutil.copy2(src_file, target_root)
        print(f"Copied {dst_name}: {os.path.getsize(target_pub)} bytes")

# Also copy PDF to public/refs
os.makedirs(os.path.join(dest_public, 'refs'), exist_ok=True)
os.makedirs(os.path.join(dest_root, 'refs'), exist_ok=True)
shutil.copy2(os.path.join(dl, '260901_BẢN VẼ KỸ THUẬT_Ban Mangthit_TRAN THAO NHIEN.pdf'), os.path.join(dest_public, 'refs', 'ban-mangthit.pdf'))
shutil.copy2(os.path.join(dl, '260901_BẢN VẼ KỸ THUẬT_Ban Mangthit_TRAN THAO NHIEN.pdf'), os.path.join(dest_root, 'refs', 'ban-mangthit.pdf'))
print("Copied PDF to refs/ban-mangthit.pdf")
