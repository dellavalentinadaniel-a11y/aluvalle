const fs = require('fs');

const oldContent = fs.readFileSync('profiles_old.ts.tmp', 'utf8');
const newContent = fs.readFileSync('profiles_new.tsx.tmp', 'utf8');

// The new content has the good traditionalProfiles (with SVGs and synced data)
// and some other profiles at the end.

// Let's identify the boundaries in the old content.
// We want to keep:
// gammaProfiles
// deltaProfiles
// monacoProfiles
// monacoTopProfiles
// atlanticaProfiles
// nizaProfiles
// mediterraneaProfiles (maybe? old vs new?)
// frenteIntegralProfiles
// frenteVidriadoProfiles
// barandasProfiles
// mamparasProfiles
// placardProfiles
// cortinasProfiles
// complementariosProfiles

function extractArray(content, name) {
    const regex = new RegExp(`export const ${name}(?:\\s*:\\s*Profile\\[\\])?\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
    const match = content.match(regex);
    return match ? match[0] : null;
}

const namesToRecover = [
    'gammaProfiles',
    'deltaProfiles',
    'monacoProfiles',
    'monacoTopProfiles',
    'atlanticaProfiles',
    'nizaProfiles',
    'frenteIntegralProfiles',
    'frenteVidriadoProfiles',
    'barandasProfiles',
    'mamparasProfiles',
    'placardProfiles',
    'cortinasProfiles',
    'complementariosProfiles'
];

let recovered = '';
for (const name of namesToRecover) {
    const arr = extractArray(oldContent, name);
    if (arr) {
        recovered += '\n' + arr + '\n';
    } else {
        console.log(`Warning: ${name} not found in old file`);
    }
}

// Now combine
// Start with headers from new file (which has the interface)
const interfacePart = newContent.split('export const traditionalProfiles')[0];
const traditionalPart = 'export const traditionalProfiles' + newContent.split('export const traditionalProfiles')[1].split('export const mediterraneaProfiles')[0];
const otherParts = 'export const mediterraneaProfiles' + newContent.split('export const mediterraneaProfiles')[1];

const finalContent = interfacePart + traditionalPart + recovered + otherParts;

fs.writeFileSync('src/data/profiles.tsx', finalContent);
console.log('Merged successfully');
