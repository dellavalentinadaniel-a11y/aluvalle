import fs from 'fs';

const path = 'c:/Users/della/OneDrive/Escritorio/aluvalle/aluvalle/zip (1)/src/data/profiles.ts';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  '├│': 'ó',
  '├¡': 'í',
  '┬░': 'º',
  '├║': 'ú',
  '├▒': 'ñ',
  '├í': 'á',
  '├⌐': 'é'
};

let replacedContent = content;
Object.keys(replacements).forEach(key => {
  // Global replacement
  replacedContent = replacedContent.split(key).join(replacements[key]);
});

fs.writeFileSync(path, replacedContent, 'utf8');
console.log('Encoding fixed.');
