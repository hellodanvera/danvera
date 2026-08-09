const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('Cropping product images from catalogue pages...');

  // Page 2: 4 items (2x2 grid)
  const p2 = sharp(path.join(__dirname, 'public', 'catalogue', 'page-2.png'));
  const meta2 = await p2.metadata();
  const w2 = meta2.width;
  const h2 = meta2.height;

  // Header occupies top ~22%
  const p2Top = Math.floor(h2 * 0.20);
  const p2H = Math.floor((h2 - p2Top) / 2);
  const p2W = Math.floor(w2 / 2);

  await p2.clone().extract({ left: 0, top: p2Top, width: p2W, height: p2H }).toFile(path.join(outDir, 'sambar-powder.png'));
  await p2.clone().extract({ left: p2W, top: p2Top, width: p2W, height: p2H }).toFile(path.join(outDir, 'curry-coriander-powder.png'));
  await p2.clone().extract({ left: 0, top: p2Top + p2H, width: p2W, height: p2H }).toFile(path.join(outDir, 'instant-sambar-mix.png'));
  await p2.clone().extract({ left: p2W, top: p2Top + p2H, width: p2W, height: p2H }).toFile(path.join(outDir, 'instant-rasam-mix.png'));

  // Page 3: 4 items (2x2 grid)
  const p3 = sharp(path.join(__dirname, 'public', 'catalogue', 'page-3.png'));
  const meta3 = await p3.metadata();
  const w3 = meta3.width;
  const h3 = meta3.height;
  const p3Top = Math.floor(h3 * 0.20);
  const p3H = Math.floor((h3 - p3Top) / 2);
  const p3W = Math.floor(w3 / 2);

  await p3.clone().extract({ left: 0, top: p3Top, width: p3W, height: p3H }).toFile(path.join(outDir, 'groundnut-idli-podi.png'));
  await p3.clone().extract({ left: p3W, top: p3Top, width: p3W, height: p3H }).toFile(path.join(outDir, 'curry-leaf-idli-podi.png'));
  await p3.clone().extract({ left: 0, top: p3Top + p3H, width: p3W, height: p3H }).toFile(path.join(outDir, 'vallarai-podi.png'));
  await p3.clone().extract({ left: p3W, top: p3Top + p3H, width: p3W, height: p3H }).toFile(path.join(outDir, 'pirandai-podi.png'));

  // Page 4: 6 items (3x2 grid)
  const p4 = sharp(path.join(__dirname, 'public', 'catalogue', 'page-4.png'));
  const meta4 = await p4.metadata();
  const w4 = meta4.width;
  const h4 = meta4.height;
  const p4Top = Math.floor(h4 * 0.20);
  const p4H = Math.floor((h4 - p4Top) / 2);
  const p4W = Math.floor(w4 / 3);

  await p4.clone().extract({ left: 0, top: p4Top, width: p4W, height: p4H }).toFile(path.join(outDir, 'sathu-maavu.png'));
  await p4.clone().extract({ left: p4W, top: p4Top, width: p4W, height: p4H }).toFile(path.join(outDir, 'moringa-powder.png'));
  await p4.clone().extract({ left: p4W * 2, top: p4Top, width: p4W, height: p4H }).toFile(path.join(outDir, 'dried-marudhani-powder.png'));
  await p4.clone().extract({ left: 0, top: p4Top + p4H, width: p4W, height: p4H }).toFile(path.join(outDir, 'butterfly-pea-tea.png'));
  await p4.clone().extract({ left: p4W, top: p4Top + p4H, width: p4W, height: p4H }).toFile(path.join(outDir, 'dried-hibiscus-tea.png'));
  await p4.clone().extract({ left: p4W * 2, top: p4Top + p4H, width: p4W, height: p4H }).toFile(path.join(outDir, 'dried-beetel-leaf-tea.png'));

  // Page 5: 5 items (3 top, 2 bottom)
  const p5 = sharp(path.join(__dirname, 'public', 'catalogue', 'page-5.png'));
  const meta5 = await p5.metadata();
  const w5 = meta5.width;
  const h5 = meta5.height;
  const p5Top = Math.floor(h5 * 0.20);
  const p5H = Math.floor((h5 - p5Top) / 2);
  const p5W3 = Math.floor(w5 / 3);
  const p5W2 = Math.floor(w5 / 2);

  await p5.clone().extract({ left: 0, top: p5Top, width: p5W3, height: p5H }).toFile(path.join(outDir, 'karupatti.png'));
  await p5.clone().extract({ left: p5W3, top: p5Top, width: p5W3, height: p5H }).toFile(path.join(outDir, 'brown-sugar.png'));
  await p5.clone().extract({ left: p5W3 * 2, top: p5Top, width: p5W3, height: p5H }).toFile(path.join(outDir, 'karupatti-essence.png'));
  await p5.clone().extract({ left: 0, top: p5Top + p5H, width: p5W2, height: p5H }).toFile(path.join(outDir, 'urundai-vellam.png'));
  await p5.clone().extract({ left: p5W2, top: p5Top + p5H, width: p5W2, height: p5H }).toFile(path.join(outDir, 'rosemilk-essence.png'));

  // Page 6: 2 items (1x2 side by side)
  const p6 = sharp(path.join(__dirname, 'public', 'catalogue', 'page-6.png'));
  const meta6 = await p6.metadata();
  const w6 = meta6.width;
  const h6 = meta6.height;
  const p6Top = Math.floor(h6 * 0.20);
  const p6H = Math.floor(h6 - p6Top);
  const p6W = Math.floor(w6 / 2);

  await p6.clone().extract({ left: 0, top: p6Top, width: p6W, height: p6H }).toFile(path.join(outDir, 'traditional-laddus.png'));
  await p6.clone().extract({ left: p6W, top: p6Top, width: p6W, height: p6H }).toFile(path.join(outDir, 'country-eggs.png'));

  console.log('Successfully cropped all 21 product images into public/products/ !');
}

run().catch(err => console.error(err));
