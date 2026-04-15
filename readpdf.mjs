import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const path = 'C:/Users/opera/OneDrive/Documents/CAPGOLD/4X9 2026/CAPGOLD 4X9 (26902001-26903000)/Capgold Certificate 4X9002000.pdf';
const data = new Uint8Array(readFileSync(path));

const doc = await getDocument({ data }).promise;
console.log('Pages:', doc.numPages);
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const content = await page.getTextContent();
  const items = content.items;
  items.sort((a, b) => {
    const dy = b.transform[5] - a.transform[5];
    if (Math.abs(dy) > 5) return dy;
    return a.transform[4] - b.transform[4];
  });
  let lastY = null;
  let line = '';
  for (const item of items) {
    const y = Math.round(item.transform[5]);
    if (lastY !== null && Math.abs(y - lastY) > 5) {
      console.log(line);
      line = '';
    }
    line += (line ? '  |  ' : '') + item.str;
    lastY = y;
  }
  if (line) console.log(line);
}
