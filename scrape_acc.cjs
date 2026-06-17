const fs = require('fs');
const urls = [
    { cat: 'Cierres centrales', url: 'https://alcemar.com.ar/categoria-producto/accesorios/cierrescentrales/' },
    { cat: 'Cierres laterales', url: 'https://alcemar.com.ar/categoria-producto/accesorios/cierreslaterales/' },
    { cat: 'Conjunto Oscilobatiente', url: 'https://alcemar.com.ar/categoria-producto/accesorios/oscilobatiente/' },
    { cat: 'Cuñas', url: 'https://alcemar.com.ar/categoria-producto/accesorios/cunas/' },
    { cat: 'Escuadras', url: 'https://alcemar.com.ar/categoria-producto/accesorios/escuadras/' },
    { cat: 'Felpas y Burletes', url: 'https://alcemar.com.ar/categoria-producto/accesorios/felpasyburletes/' },
    { cat: 'Llaves', url: 'https://alcemar.com.ar/categoria-producto/accesorios/llaves/' },
    { cat: 'Mecanismo Multipunto', url: 'https://alcemar.com.ar/categoria-producto/accesorios/multipunto/' },
    { cat: 'Otros', url: 'https://alcemar.com.ar/categoria-producto/accesorios/otros/' }
];

async function scrape() {
    const data = {};
    for (const item of urls) {
        try {
            console.log(`Fetching ${item.cat}...`);
            const response = await fetch(item.url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Language': 'es-AR,es;q=0.9,en-US;q=0.8,en;q=0.7',
                }
            });
            const html = await response.text();
            
            // Extract using regex
            const regex = /<li class="product[^>]*>([\s\S]*?)<\/li>/g;
            let match;
            const products = [];
            while ((match = regex.exec(html)) !== null) {
                const inner = match[1];
                const imgMatch = inner.match(/<img.*?src="([^"]+)"/);
                const titleMatch = inner.match(/<h2 class="woocommerce-loop-product__title">([^<]+)<\/h2>/);
                if (imgMatch && titleMatch) {
                    products.push({
                        name: titleMatch[1].trim(),
                        image: imgMatch[1]
                    });
                }
            }
            data[item.cat] = products;
        } catch (e) {
            console.error(`Error with ${item.cat}:`, e.message);
        }
    }
    fs.writeFileSync('accesorios_data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Done');
}

scrape();
