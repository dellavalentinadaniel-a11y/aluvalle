
import fs from 'fs';

const excelData = JSON.parse(fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/scratch/excel_data_clean.json', 'utf8').replace(/^\uFEFF/, ''));
const profilesTs = fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts', 'utf8');

function normalize(s) {
    if (!s) return "";
    return s.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // remove accents
            .replace(/[^a-z0-9]/gi, "")      // remove everything except a-z and 0-9
            .toLowerCase();
}

// Extract current traditionalProfiles to keep metadata (shape, page)
const tradMatch = profilesTs.match(/export const traditionalProfiles: Profile\[\] = (\[[\s\S]*?\]);/);
const profileRegex = /{\s*code:\s*"(.*?)".*?description:\s*"(.*?)".*?page:\s*"(.*?)".*?shape:\s*'(.*?)'\s*}/gs;
let m;
const tradMetadata = new Map();
while ((m = profileRegex.exec(tradMatch[1])) !== null) {
    tradMetadata.set(normalize(m[2]), {
        originalDesc: m[2],
        page: m[3],
        shape: m[4],
        codeInTs: m[1]
    });
}
console.log('Metadata size:', tradMetadata.size);

const currentDescriptions = Array.from(tradMetadata.keys());
const newTradProfiles = [];

console.log('TS Normalized Descs:', currentDescriptions);

excelData.forEach(row => {
    if (!row.A || !row.B) return;
    const desc = row.A.trim();
    const normDesc = normalize(desc);
    
    console.log('Checking Excel Desc:', normDesc);

    if (tradMetadata.has(normDesc)) {
        const meta = tradMetadata.get(normDesc);
        let code = row.B.toString();
        if (code.endsWith('.0')) code = code.slice(0, -2);
        
        let weight = row.C ? row.C.toString().replace('.', ',') : "";
        let txp = row.D ? row.D.toString() : "";
        if (txp.endsWith('.0')) txp = txp.slice(0, -2);

        newTradProfiles.push({
            code,
            weight,
            txp,
            description: meta.originalDesc,
            page: meta.page,
            shape: meta.shape
        });
    }
});

// Any that were in TS but not in Excel? (Just in case)
/*
tradMetadata.forEach((meta, desc) => {
    if (currentDescriptions.has(desc)) {
        // Find by description in the original array
        const p = ...;
        newTradProfiles.push(p);
    }
});
*/

console.log('export const traditionalProfiles: Profile[] = [');
newTradProfiles.forEach(p => {
    console.log(`  { code: "${p.code}", weight: "${p.weight}", txp: "${p.txp}", description: "${p.description}", page: "${p.page}", shape: '${p.shape}' },`);
});
console.log('];');
