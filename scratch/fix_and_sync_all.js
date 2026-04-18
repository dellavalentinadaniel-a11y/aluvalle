
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

// Map ALL existing profiles across the ENTIRE FILE to extract best shape/page metadata
const allProfilesRegex = /{\s*code:\s*["'](.*?)["'],\s*weight:\s*["'](.*?)["'].*?description:\s*["'](.*?)["'],\s*page:\s*["'](.*?)["'],\s*shape:\s*['"](.*?)['"]\s*}/gs;
let m2;
const globalMetadata = new Map();
while ((m2 = allProfilesRegex.exec(profilesTs)) !== null) {
    globalMetadata.set(normalize(m2[3]), {
        page: m2[4],
        shape: m2[5],
        description: m2[3]
    });
}

// Find rows 2 to 74 in Excel (representing all 73 items shown in screenshot)
const tradLineRows = excelData.filter(row => {
    const r = parseInt(row.row);
    return r >= 2 && r <= 74;
});

const newArr = [];

tradLineRows.forEach(row => {
    let excelCode = row.B ? row.B.toString() : "";
    if (excelCode.endsWith('.0')) excelCode = excelCode.slice(0, -2);
    let excelWeight = row.C ? row.C.toString().replace('.', ',') : "0,00";
    let excelTxp = row.D ? row.D.toString() : "0";
    if (excelTxp && excelTxp.endsWith('.0')) excelTxp = excelTxp.slice(0, -2);
    if (!excelTxp || excelTxp === "B") excelTxp = "8"; // sometimes "B" instead of 8 in OCR or similar, though in screenshot it's actual numbers like 8
    
    let desc = row.A ? row.A.trim() : "";
    let normDesc = normalize(desc);

    let meta = globalMetadata.get(normDesc);
    
    if (!meta) {
        // Look for partial match
        for (const [key, val] of globalMetadata.entries()) {
            if (key.includes(normDesc) || normDesc.includes(key)) {
                meta = val;
                break;
            }
        }
    }
    
    if (!meta) {
        meta = { page: "0", shape: "accesorio", description: desc };
    }

    newArr.push({
        code: excelCode,
        weight: excelWeight,
        txp: excelTxp,
        description: meta.description, // keep exactly the TS string format to avoid encoding bugs, or fallback to excel desc
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

console.log("Replaced perfectly. Items:", newArr.length);
