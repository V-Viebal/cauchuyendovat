import zipfile
import xml.etree.ElementTree as ET

docx_path = '/mnt/c/Users/Le Tan Minh/Downloads/THIEN_SHRINE_Concept_Inspiration.docx'
with zipfile.ZipFile(docx_path, 'r') as z:
    for name in z.namelist():
        if 'core.xml' in name or 'app.xml' in name:
            xml_content = z.read(name)
            tree = ET.fromstring(xml_content)
            for elem in tree.iter():
                if elem.text and elem.text.strip():
                    print(elem.tag.split('}')[-1], ':', elem.text)
