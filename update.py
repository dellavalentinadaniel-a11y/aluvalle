import re

updates = [
    ('baranda-bba', 'https://alcemar.com.ar/wp-content/uploads/2023/12/BBA-025-ALCEMAR-1-300x300.jpg'),
    ('baranda-clasica', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Baranda-Clasica-P475-Curvo-02-300x300.jpg'),
    ('baranda-sp', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Baranda-SP-02-300x300.jpg'),
    ('baranda-spu', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Baranda-SPU-02-300x300.jpg'),
    ('cortinas-de-enrollar', 'https://alcemar.com.ar/wp-content/uploads/2021/07/CORTINAS-300x300.jpg'),
    ('frente-placard', 'https://alcemar.com.ar/wp-content/uploads/2021/08/FRENTE-PLACARD-300x300.jpg'),
    ('mampara-corrediza-900', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Mampara-Corrediza-900-WEB--300x300.jpg'),
    ('mampara-corrediza-f-1', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Mampara-Corrediza-F1-WEB--300x300.jpg'),
    ('mampara-corrediza-f-3', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Mampara-Corrediza-F3-WEB-300x300.jpg'),
    ('mampara-esquinero', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Mampara-Corrediza-BOX-ALCEMAR-300x300.jpg'),
    ('mampara-rebatible', 'https://alcemar.com.ar/wp-content/uploads/2023/12/Mampara-Rebatible--300x300.jpg'),
    ('perfiles-revestimiento', 'https://alcemar.com.ar/wp-content/uploads/2021/08/REVESTIMIENTO-300x300.jpg'),
    ('perfiles-normalizados', 'https://alcemar.com.ar/wp-content/uploads/2021/08/NORMALIZADOS-300x300.jpg'),
    ('perfiles-vidrio-templado', 'https://alcemar.com.ar/wp-content/uploads/2021/08/PERF-VIDRIO-TEMP-300x300.jpg'),
    ('perfiles-varios', 'https://alcemar.com.ar/wp-content/uploads/2021/08/PERFILES-VARIOS-300x300.jpg'),
    ('tabiques-divisores-oficina', 'https://alcemar.com.ar/wp-content/uploads/2021/08/TABIQUES-300x300.jpg'),
    ('techo-vidriado', 'https://alcemar.com.ar/wp-content/uploads/2021/08/TECHO-VIDRIADO-300x300.jpg')
]

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    c = f.read()

for slug, url in updates:
    c = re.sub(r"(slug: '" + slug + r"',[\s\S]*?heroImage:\s*')[^']+(')", r"\g<1>" + url + r"\g<2>", c)
    c = re.sub(r"(slug: '" + slug + r"',[\s\S]*?gallery:\s*\[)[^\]]+(\])", r"\g<1>'" + url + r"'\g<2>", c)

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done')
