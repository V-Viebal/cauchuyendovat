import zipfile, pymupdf, os
import xml.etree.ElementTree as ET

# 1. Folio - Quang Vo docx
docx_path = './extracted_folio_quang_vo/FOLIO - QUANG VO/BỘ SƯU TẬP BÀN FOLIO.docx'
with zipfile.ZipFile(docx_path, 'r') as z:
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for p in tree.iterfind('.//w:p', namespaces):
        texts = [node.text for node in p.iterfind('.//w:t', namespaces) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    print("=== BỘ SƯU TẬP BÀN FOLIO - QUANG VÕ ===")
    print('\n'.join(paragraphs))

# 2. The Gap Lamp - Duong Nhat Quang Dong pdf
pdf_path = './extracted_the_gap_lamp/THE GAP LAMP - DUONG NHẬT QUANG ĐÔNG/THÔNG TIN SẢN PHẨM.pdf'
doc = pymupdf.open(pdf_path)
print("\n=== THE GAP LAMP - DƯƠNG NHẬT QUANG ĐÔNG ===")
for i, page in enumerate(doc):
    print(f"\n--- Page {i+1} ---")
    print(page.get_text().strip())
