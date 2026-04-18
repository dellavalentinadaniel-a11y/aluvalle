
import fs from 'fs';

let profilesTs = fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts', 'utf8');

const excelData = JSON.parse(fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/scratch/excel_data_clean.json', 'utf8').replace(/^\uFEFF/, ''));

function normalize(s) {
    if (!s) return "";
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
}

const match = profilesTs.match(/export const traditionalProfiles: Profile\[\] = (\[[\s\S]*?\]);/);
if (!match) {
    console.error("Could not find traditionalProfiles!");
    process.exit(1);
}

const oldTradStr = match[1];
const profileRegex = /{\s*code:\s*"(.*?)",\s*weight:\s*"(.*?)",\s*txp:\s*"(.*?)",\s*description:\s*"(.*?)",\s*page:\s*"(.*?)",\s*shape:\s*'(.*?)'\s*}/g;
let m;
const profileMetadata = new Map();

while ((m = profileRegex.exec(oldTradStr)) !== null) {
    profileMetadata.set(normalize(m[4]), {
        code: m[1],
        weight: m[2],
        txp: m[3],
        description: m[4],
        page: m[5],
        shape: m[6]
    });
}

// Find rows 25 to 74 in Excel
const tradLineRows = excelData.filter(row => {
    const r = parseInt(row.row);
    return r >= 25 && r <= 74;
});

const newArr = [];

tradLineRows.forEach(row => {
    let excelCode = row.B.toString();
    if (excelCode.endsWith('.0')) excelCode = excelCode.slice(0, -2);
    let excelWeight = row.C ? row.C.toString().replace('.', ',') : "0,00";
    let excelTxp = row.D ? row.D.toString() : "0";
    if (excelTxp.endsWith('.0')) excelTxp = excelTxp.slice(0, -2);
    
    let desc = row.A.trim();
    let normDesc = normalize(desc);

    let meta = profileMetadata.get(normDesc);
    if (!meta) {
        // Find best fallback from whole file if not in traditionalProfiles
        const allProfilesRegex = /{\s*code:\s*"(.*?)",\s*weight:\s*"(.*?)".*?description:\s*"(.*?)",\s*page:\s*"(.*?)",\s*shape:\s*'(.*?)'\s*}/gs;
        let m2;
        while ((m2 = allProfilesRegex.exec(profilesTs)) !== null) {
            if (normalize(m2[3]) === normDesc) {
                meta = { page: m2[4], shape: m2[5], description: m2[3] };
                break;
            }
        }
    }
    
    if (!meta) {
        // Fallback generic but don't use 'generic' because it breaks TS
        meta = { page: "0", shape: "accesorio", description: desc };
    }

    newArr.push({
        code: excelCode,
        weight: excelWeight,
        txp: excelTxp,
        description: meta.description, // keep exactly the TS string format to avoid encoding bugs
        page: meta.page,
        shape: meta.shape
    });
});

let finalArrStr = '[\n';
newArr.forEach(p => {
    finalArrStr += `  { code: "${p.code}", weight: "${p.weight}", txp: "${p.txp}", description: "${p.description}", page: "${p.page}", shape: '${p.shape}' },\n`;
});
finalArrStr += ']';

const updatedTs = profilesTs.replace(match[0], `export const traditionalProfiles: Profile[] = ${finalArrStr};`);
fs.writeFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts', updatedTs, 'utf8');

console.log("Replaced perfectly.");
