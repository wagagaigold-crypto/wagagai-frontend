import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const path = 'C:/Users/opera/OneDrive/Documents/CAPGOLD/4X9 2026/CAPGOLD 4X9 (26902001-26903000)/Capgold Certificate 4X9002000.pdf';
const data = new Uint8Array(readFileSync(path));

const doc = await getDocument({ data }).promise;
for (let i = 1; i <= doc.numPages; i++) {
  console.log('=== PAGE', i, '===');
  const page = await doc.getPage(i);
  const content = await page.getTextContent();
  const items = content.items;
  // Print all items with positions
  items.sort((a, b) => {
    const dy = b.transform[5] - a.transform[5];
    if (Math.abs(dy) > 5) return dy;
    return a.transform[4] - b.transform[4];
  });
  for (const item of items) {
    if (item.str.trim()) {
      console.log(`  x:${Math.round(item.transform[4])} y:${Math.round(item.transform[5])} size:${Math.round(item.transform[0])} "${item.str}"`);
    }
  }
  // Also get page dimensions
  const vp = page.getViewport({ scale: 1 });
  console.log(`  Page size: ${Math.round(vp.width)} x ${Math.round(vp.height)}`);
}
