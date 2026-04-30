const fs = require('fs');

const links = {
  tecnico: [
    { url: 'https://meli.la/1nx9LXh', id: 'HRUH1T-L3VM' },
    { url: 'https://meli.la/1qSiM7L', id: 'HRUH1T-8M9D' },
    { url: 'https://meli.la/1WgdZuM', id: 'HRUH1T-2X3H' },
    { url: 'https://meli.la/2q9xoEf', id: 'HRUH1T-UF98' },
    { url: 'https://meli.la/2dyB8Jh', id: 'HRUH1T-ND5R' },
    { url: 'https://meli.la/2TtYsYm', id: 'HRUH1T-TEST' }
  ],
  consumibles: [
    { url: 'https://meli.la/2G2TLNE', id: 'HRUH1T-V1CK' },
    { url: 'https://meli.la/28L5ufx', id: 'HRUH1T-F0TU' },
    { url: 'https://meli.la/2zvEU4C', id: 'HRUH1T-YWVL' },
    { url: 'https://meli.la/1hoJ6ZH', id: 'HRUH1T-Y0JT' },
    { url: 'https://meli.la/254gp4v', id: 'HRUH1T-UNNZ' }
  ],
  publicidad: [
    { url: 'https://meli.la/1WgdZuM', id: 'HRUH1T-2X3H' },
    { url: 'https://meli.la/2m9gsyJ', id: 'HRUH1T-FTMW' },
    { url: 'https://meli.la/12Cz3PF', id: 'HRUH1T-6WGK' },
    { url: 'https://meli.la/1KbfVN4', id: 'HRUH1T-FU76' },
    { url: 'https://meli.la/1sdYTR9', id: 'HRUH1T-U06T' },
    { url: 'https://meli.la/2RakcAs', id: 'HRUH1T-JJZ6' },
    { url: 'https://meli.la/2WD4vnM', id: 'HRUH1T-1RFD' },
    { url: 'https://meli.la/2YHAfsV', id: 'HRUH1T-BDG1' },
    { url: 'https://meli.la/1QFXq7H', id: 'HRUH1T-WZJS' },
    { url: 'https://meli.la/1nYtQVK', id: 'HRUH1T-RLRH' },
    { url: 'https://meli.la/2GimNwV', id: 'HRUH1T-4VEZ' },
    { url: 'https://meli.la/1wTMaTi', id: 'HRUH1T-YVQB' },
    { url: 'https://meli.la/2rtrjMC', id: 'HRUH1T-J1E7' },
    { url: 'https://meli.la/1h7HexC', id: 'HRUH1T-UGSV' },
    { url: 'https://meli.la/1eNTRZC', id: 'HRUH1T-Q7NS' },
    { url: 'https://meli.la/1zm96tk', id: 'HRUH1T-BSNP' },
    { url: 'https://meli.la/2vYs2j2', id: 'HRUH1T-L17D' },
    { url: 'https://meli.la/276e3kk', id: 'HRUH1T-NMNP' },
    { url: 'https://meli.la/1BnP4pA', id: 'HRUH1T-HX2H' },
    { url: 'https://meli.la/2iygTZW', id: 'HRUH1T-NBGK' },
    { url: 'https://meli.la/1HdKwUd', id: 'HRUH1T-WDEX' },
    { url: 'https://meli.la/1vmkbkT', id: 'HRUH1T-2R1D' },
    { url: 'https://meli.la/1P2gMmt', id: 'HRUH1T-HXEL' },
    { url: 'https://meli.la/1rcQiDi', id: 'HRUH1T-M4DW' },
    { url: 'https://meli.la/2CLaoeL', id: 'HRUH1T-JCWR' },
    { url: 'https://meli.la/1xREy1V', id: 'HRUH1T-8F7U' },
    { url: 'https://meli.la/1SDMwb7', id: 'HRUH1T-WH7F' },
    { url: 'https://meli.la/1TviPhx', id: 'HRUH1T-H71V' },
    { url: 'https://meli.la/2uhmNqF', id: 'HRUH1T-0934' },
    { url: 'https://meli.la/2xS4QMU', id: 'HRUH1T-YXAL' },
    { url: 'https://meli.la/2ZzuQdN', id: 'HRUH1T-RDRM' },
    { url: 'https://meli.la/2pBfKuz', id: 'HRUH1T-FA3F' },
    { url: 'https://meli.la/1ZaYYy6', id: 'HRUH1T-ESCZ' },
    { url: 'https://meli.la/2r41Pp1', id: 'HRUH1T-HKZ8' },
    { url: 'https://meli.la/31tLKJy', id: 'HRUH1T-YHQL' }
  ]
};

async function fetchInfo(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await response.text();
    
    // Simple regex to grab OG tags
    const titleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i) || html.match(/<title>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i) || html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    const imageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);

    return {
      title: titleMatch ? titleMatch[1].replace(' | MercadoLibre', '').replace(' | Mercado Libre', '') : 'Producto sin título',
      description: descMatch ? descMatch[1] : '',
      imageUrl: imageMatch ? imageMatch[1] : '',
      buyLink: url
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return {
      title: 'Producto',
      description: '',
      imageUrl: '',
      buyLink: url
    };
  }
}

async function run() {
  const result = { tecnico: [], consumibles: [], publicidad: [] };
  
  for (const key of Object.keys(links)) {
    console.log(`Fetching ${key}...`);
    for (const item of links[key]) {
      const info = await fetchInfo(item.url);
      info.id = item.id;
      result[key].push(info);
      console.log(`Fetched: ${info.title}`);
      // Sleep a bit to avoid rate limits
      await new Promise(r => setTimeout(r, 500));
    }
  }

  fs.writeFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/scratch/ml_products.json', JSON.stringify(result, null, 2));
  console.log('Done!');
}

run();
