import urllib.request
import re
import json

urls = [
    ('Cierres centrales', 'https://alcemar.com.ar/categoria-producto/accesorios/cierrescentrales/'),
    ('Cierres laterales', 'https://alcemar.com.ar/categoria-producto/accesorios/cierreslaterales/'),
    ('Conjunto Oscilobatiente', 'https://alcemar.com.ar/categoria-producto/accesorios/oscilobatiente/'),
    ('Cuñas', 'https://alcemar.com.ar/categoria-producto/accesorios/cunas/'),
    ('Escuadras', 'https://alcemar.com.ar/categoria-producto/accesorios/escuadras/'),
    ('Felpas y Burletes', 'https://alcemar.com.ar/categoria-producto/accesorios/felpasyburletes/'),
    ('Llaves', 'https://alcemar.com.ar/categoria-producto/accesorios/llaves/'),
    ('Mecanismo Multipunto', 'https://alcemar.com.ar/categoria-producto/accesorios/multipunto/'),
    ('Otros', 'https://alcemar.com.ar/categoria-producto/accesorios/otros/')
]

data = {}

for cat, url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            items = re.findall(r'<li class=\"product[^>]*>(.*?)</li>', html, re.DOTALL)
            
            products = []
            for item in items:
                img_match = re.search(r'<img.*?src=\"([^\"]+)\"', item)
                title_match = re.search(r'<h2 class=\"woocommerce-loop-product__title\">([^<]+)</h2>', item)
                if img_match and title_match:
                    img = img_match.group(1)
                    title = title_match.group(1).strip()
                    products.append({'name': title, 'image': img})
            
            data[cat] = products
    except Exception as e:
        print(f'Error fetching {url}: {e}')

with open('accesorios_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Done')
