
import fs from 'fs';

function parseExcel() {
  const stringsXml = fs.readFileSync('C:\\Users\\della\\Downloads\\prodctos_unzipped\\xl\\sharedStrings.xml', 'utf8');
  const sheetXml = fs.readFileSync('C:\\Users\\della\\Downloads\\prodctos_unzipped\\xl\\worksheets\\sheet1.xml', 'utf8');

  const sharedStrings = [];
  const siRegex = /<si>(.*?)<\/si>/g;
  const tRegex = /<t>(.*?)<\/t>/;
  let match;
  while ((match = siRegex.exec(stringsXml)) !== null) {
    const tMatch = match[1].match(tRegex);
    sharedStrings.push(tMatch ? tMatch[1] : "");
  }
  
  const rows = [];
  const rowRegex = /<row r="(\d+)".*?>(.*?)<\/row>/g;
  const cRegex = /<c r="([A-Z]+)\d+"(?: s="\d+")?(?: t="s")?><v>(.*?)<\/v><\/c>/g;
  
  let rowMatch;
  while ((rowMatch = rowRegex.exec(sheetXml)) !== null) {
    const rowNum = rowMatch[1];
    const rowContent = rowMatch[2];
    const rowData = { row: rowNum };
    let cMatch;
    while ((cMatch = cRegex.exec(rowContent)) !== null) {
      const col = cMatch[1];
      const isString = rowMatch[2].includes('t="s"') || cMatch[0].includes('t="s"'); // simplified check
      let val = cMatch[2];
      if (cMatch[0].includes('t="s"')) {
        val = sharedStrings[parseInt(val)];
      }
      rowData[col] = val;
    }
    rows.push(rowData);
  }

  process.stdout.write(JSON.stringify(rows, null, 2));
}

parseExcel();
