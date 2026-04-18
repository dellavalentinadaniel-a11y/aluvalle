
import fs from 'fs';

let rawData = fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/scratch/excel_data_clean.json', 'utf8');
if (rawData.charCodeAt(0) === 0xFEFF) rawData = rawData.slice(1);
const excelData = JSON.parse(rawData);
const profilesTs = fs.readFileSync('c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts', 'utf8');

// Extract traditionalProfiles array
const tradMatch = profilesTs.match(/export const traditionalProfiles: Profile\[\] = (\[[\s\S]*?\]);/);
if (!tradMatch) {
    console.error("Could not find traditionalProfiles");
    process.exit(1);
}

// Convert to JS array (rough way)
const tradProfilesStr = tradMatch[1]
    .replace(/\bshape: '.*?'/g, '') // remove enum types for simple parsing
    .replace(/\bshape: ".*?"/g, '')
    .replace(/,\s*}/g, '}')
    .replace(/,\s*\]/g, ']');

// Use a regex to extract each profile object
const profileRegex = /{\s*code:\s*"(.*?)",\s*weight:\s*"(.*?)",\s*txp:\s*"(.*?)",\s*description:\s*"(.*?)".*?}/g;
let m;
const tradProfiles = [];
while ((m = profileRegex.exec(tradMatch[1])) !== null) {
    tradProfiles.push({
        code: m[1],
        weight: m[2],
        txp: m[3],
        description: m[4].replace(/&quot;/g, '"')
    });
}

const corrections = [];
tradProfiles.forEach(p => {
    // Find matching descriptions in Excel
    const excelMatches = excelData.filter(row => row.A && row.A.trim().toLowerCase() === p.description.trim().toLowerCase());
    if (excelMatches.length > 0) {
        // Find the record where the code is most similar
        let bestMatch = excelMatches[0];
        let minDiff = Infinity;

        excelMatches.forEach(em => {
            let ec = em.B.toString();
            if (ec.endsWith('.0')) ec = ec.slice(0, -2);
            
            // if codes are identical, pick it
            if (ec === p.code || ec === p.code + ' (a)' || p.code === ec + ' (a)') {
                bestMatch = em;
                minDiff = 0;
            }
        });

        let excelCode = bestMatch.B.toString();
        if (excelCode.endsWith('.0')) excelCode = excelCode.slice(0, -2);
        
        if (p.code !== excelCode) {
            corrections.push({
                description: p.description,
                oldCode: p.code,
                newCode: excelCode
            });
        }
    }
});

console.log(JSON.stringify(corrections, null, 2));
