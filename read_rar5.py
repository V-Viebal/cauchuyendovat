import rarfile

rf = rarfile.RarFile('/mnt/c/Users/Le Tan Minh/Downloads/gap.rar')
for info in rf.infolist():
    print(info.filename, info.file_size)
