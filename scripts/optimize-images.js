// Image optimization script: converts PNG/JPG to WebP and compresses
// Usage: node scripts/optimize-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'my-app', 'public');

const SUPPORTED_INPUTS = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);

  const webpOut = path.join(dir, `${base}.webp`);

  try {
    const image = sharp(filePath);

    // Create a reasonably compressed WebP
    await image.webp({ quality: 82 }).toFile(webpOut);

    // For PNG inputs, also recompress PNG (lossless) beside original
    if (ext === '.png') {
      const pngOut = path.join(dir, `${base}.min.png`);
      await image.png({ compressionLevel: 9 }).toFile(pngOut);
    }

    // For JPEG inputs, also create optimized JPEG beside original
    if (ext === '.jpg' || ext === '.jpeg') {
      const jpgOut = path.join(dir, `${base}.min.jpg`);
      await image.jpeg({ quality: 82, mozjpeg: true }).toFile(jpgOut);
    }

    console.log(`Optimized: ${path.relative(PUBLIC_DIR, filePath)}`);
  } catch (err) {
    console.error(`Failed optimizing ${filePath}:`, err.message);
  }
}

function walk(dir, list = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, list);
    else list.push(full);
  }
  return list;
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('Public directory not found:', PUBLIC_DIR);
    process.exit(1);
  }

  const files = walk(PUBLIC_DIR);
  const targets = files.filter(f => SUPPORTED_INPUTS.includes(path.extname(f).toLowerCase()));

  if (targets.length === 0) {
    console.log('No PNG/JPG images found in public/. Nothing to optimize.');
    return;
  }

  for (const f of targets) {
    // Skip already minified outputs to avoid loops
    if (f.endsWith('.min.png') || f.endsWith('.min.jpg')) continue;
    await optimizeImage(f);
  }

  console.log('\nDone. WebP and optimized variants created next to originals.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
