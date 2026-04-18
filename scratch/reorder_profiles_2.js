
import fs from 'fs';

const excelData = JSON.parse(fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/scratch/excel_data_clean.json', 'utf8').replace(/^\uFEFF/, ''));
const profilesTs = fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts', 'utf8');

function normalize(s) {
    if (!s) return "";
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
}

// Extract all current profiles to find best metadata matches
const allProfilesRegex = /{\s*code:\s*"(.*?)".*?description:\s*"(.*?)".*?page:\s*"(.*?)".*?shape:\s*'(.*?)'\s*}/gs;
let m;
const profileMetadata = new Map();
while ((m = allProfilesRegex.exec(profilesTs)) !== null) {
    profileMetadata.set(normalize(m[2]), {
        page: m[3],
        shape: m[4],
        originalDesc: m[2]
    });
}

// Traditionally, row 25 to row 74 are the Traditional Line
const tradLineRows = excelData.filter(row => {
    const r = parseInt(row.row);
    return r >= 25 && r <= 74;
});

const output = [];
tradLineRows.forEach(row => {
    let code = row.B.toString();
    if (code.endsWith('.0')) code = code.slice(0, -2);
    let weight = row.C ? row.C.toString().replace('.', ',') : "0,00";
    let txp = row.D ? row.D.toString() : "0";
    if (txp.endsWith('.0')) txp = txp.slice(0, -2);
    const desc = row.A;
    const normDesc = normalize(desc);
    
    const meta = profileMetadata.get(normDesc) || { page: "0", shape: "generic" };

    output.push({
        code,
        weight,
        txp,
        description: desc,
        page: meta.page,
        shape: meta.shape
    });
});

console.log('export const traditionalProfiles: Profile[] = [');
output.forEach(p => {
    console.log(`  { code: "${p.code}", weight: "${p.weight}", txp: "${p.txp}", description: "${p.description}", page: "${p.page}", shape: '${p.shape}' },`);
});
console.log('];');
