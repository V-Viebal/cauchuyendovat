import rarfile, os

rf = rarfile.RarFile('/mnt/c/Users/Le Tan Minh/Downloads/gap.rar')
dir_gap = './extracted_the_gap_lamp'
os.makedirs(dir_gap, exist_ok=True)

# extract all
for f in rf.infolist():
    if not f.isdir():
        out_path = os.path.join(dir_gap, os.path.basename(f.filename))
        with open(out_path, 'wb') as out_f:
            out_f.write(rf.read(f))
        print("Extracted:", os.path.basename(f.filename))

print("All RAR files extracted successfully!")
