import zipfile
import xml.etree.ElementTree as ET

docx_path = '/mnt/c/Users/Le Tan Minh/Downloads/THIEN_SHRINE_Concept_Inspiration.docx'
with zipfile.ZipFile(docx_path, 'r') as z:
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for p in tree.iterfind('.//w:p', namespaces):
        texts = [node.text for node in p.iterfind('.//w:t', namespaces) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    print('\n'.join(paragraphs))
