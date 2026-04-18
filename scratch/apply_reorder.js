
import fs from 'fs';

const excelData = JSON.parse(fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/scratch/excel_data_clean.json', 'utf8').replace(/^\uFEFF/, ''));
const profilesTsPath = 'c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts';
let profilesTs = fs.readFileSync(profilesTsPath, 'utf8');

function normalize(s) {
    if (!s) return "";
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
}

// Extract the traditionalProfiles section first
const tradMatch = profilesTs.match(/export const traditionalProfiles: Profile\[\] = (\[[\s\S]*?\]);/);
const profileMetadata = new Map();

if (tradMatch) {
    const profileRegex = /{\s*code:\s*"(.*?)",\s*weight:\s*"(.*?)",\s*txp:\s*"(.*?)",\s*description:\s*"(.*?)",\s*page:\s*"(.*?)",\s*shape:\s*'(.*?)'\s*}/g;
    let m;
    while ((m = profileRegex.exec(tradMatch[1])) !== null) {
        profileMetadata.set(normalize(m[4]), {
            page: m[5],
            shape: m[6]
        });
    }
}

// Also scan the whole file for other line metadata as fallback
const allMatches = profilesTs.matchAll(/description:\s*"(.*?)".*?page:\s*"(.*?)".*?shape:\s*'(.*?)'/gs);
for (const match of allMatches) {
    const norm = normalize(match[1]);
    if (!profileMetadata.has(norm)) {
        profileMetadata.set(norm, {
            page: match[2],
            shape: match[3]
        });
    }
}

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
    
    let meta = profileMetadata.get(normDesc);
    if (!meta) {
        meta = { page: "0", shape: "generic" };
    }

    output.push({
        code,
        weight,
        txp,
        description: desc,
        page: meta.page,
        shape: meta.shape
    });
});

let finalArrStr = '[\n';
output.forEach(p => {
    finalArrStr += `  { code: "${p.code}", weight: "${p.weight}", txp: "${p.txp}", description: "${p.description}", page: "${p.page}", shape: '${p.shape}' },\n`;
});
finalArrStr += ']';

const newProfilesTs = profilesTs.replace(/export const traditionalProfiles: Profile\[\] = (\[[\s\S]*?\]);/, `export const traditionalProfiles: Profile[] = ${finalArrStr};`);

fs.writeFileSync(profilesTsPath, newProfilesTs, 'utf8');
console.log('Successfully updated profiles.ts');
