const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'extracted');
const outDir = path.join(__dirname, 'public', 'products');

const mapping = {
  // Page 2
  'sambar-powder': 'img-000.png',
  'all-in-one-masala': 'img-001.png',
  'instant-sambar-mix': 'img-002.png',
  'instant-rasam-mix': 'img-003.png',

  // Page 3
  'groundnut-idli-podi': 'img-004.png',
  'curry-leaf-idli-podi': 'img-005.png',
  'vallarai-podi': 'img-006.png',
  'pirandai-podi': 'img-007.png',

  // Page 4
  'sathu-maavu': 'img-008.png',
  'moringa-powder': 'img-009.png',
  'dried-marudhani-powder': 'img-010.png',
  'butterfly-pea-tea': 'img-011.png',
  'dried-hibiscus-tea': 'img-012.png',
  'dried-beetel-leaf-tea': 'img-013.png',

  // Page 5
  'karupatti': 'img-014.png',
  'brown-sugar': 'img-015.png',
  'karupatti-essence': 'img-016.png',
  'urundai-vellam': 'img-017.png',
  'rosemilk-essence': 'img-014.png', // Fallback to extracted PDF object

  // Page 6 (Keep page crops for Laddus & Eggs)
};

console.log('Mapping extracted PDF image objects to product images...');

for (const [productId, imgFile] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, imgFile);
  const destPath = path.join(outDir, `${productId}.png`);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${imgFile} -> ${productId}.png`);
  }
}

console.log('Finished mapping PDF images!');
