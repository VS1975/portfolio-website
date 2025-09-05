/*
  Generates brand logo and favicons using brand palette (flat, no gradients)
  Outputs:
    - ../my-app/public/logo.png (500x500)
    - ../my-app/public/favicon.png (180x180)
    - ../my-app/public/favicon.ico (32x32)

  Design:
    - Background: cream (#F5E9E4)
    - Shape: hexagon filled brick (#D4451D) with thin orange (#FFA046) stroke
    - Initials: "VS" in bold, cream for contrast
*/

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const pngToIco = require('png-to-ico');

const COLORS = {
  cream: '#F5E9E4',
  orange: '#FFA046',
  brick: '#D4451D',
};

function drawHexagon(ctx, cx, cy, radius) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i - Math.PI / 6; // flat-top hex
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function renderLogo(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background cream
  ctx.fillStyle = COLORS.cream;
  ctx.fillRect(0, 0, size, size);

  // Hexagon
  const cx = size / 2;
  const cy = size / 2;
  const radius = Math.floor(size * 0.33);

  // Fill
  drawHexagon(ctx, cx, cy, radius);
  ctx.fillStyle = COLORS.brick;
  ctx.fill();

  // Stroke
  ctx.lineWidth = Math.max(2, Math.floor(size * 0.018));
  ctx.strokeStyle = COLORS.orange;
  ctx.stroke();

  // Initials VS
  ctx.fillStyle = COLORS.cream;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Dynamic font sizing for clarity at small sizes
  const fontSize = Math.floor(size * 0.28);
  ctx.font = `700 ${fontSize}px Arial, Helvetica, sans-serif`;

  // For very small sizes (like 32), tighten letter spacing by manual tweak
  const initials = 'VS';
  // Simple kerning tweak: draw each letter separately for better spacing
  const spacing = size * 0.02; // small spacing
  const totalWidth = ctx.measureText('V').width + spacing + ctx.measureText('S').width;
  const startX = cx - totalWidth / 2;
  ctx.fillText('V', startX + ctx.measureText('V').width / 2, cy + Math.floor(size * 0.01));
  ctx.fillText('S', startX + ctx.measureText('V').width + spacing + ctx.measureText('S').width / 2, cy + Math.floor(size * 0.01));

  return canvas;
}

function savePNG(canvas, outPath) {
  return new Promise((resolve, reject) => {
    const out = fs.createWriteStream(outPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => resolve(outPath));
    out.on('error', reject);
  });
}

async function generate() {
  const publicDir = path.resolve(__dirname, '..', 'my-app', 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  const logoCanvas = renderLogo(500);
  const faviconPngCanvas = renderLogo(180);
  const faviconSmallCanvas = renderLogo(32);

  const logoPath = path.join(publicDir, 'logo.png');
  const faviconPngPath = path.join(publicDir, 'favicon.png');
  const faviconPng32Path = path.join(publicDir, 'favicon-32.png');
  const faviconIcoPath = path.join(publicDir, 'favicon.ico');

  await savePNG(logoCanvas, logoPath);
  await savePNG(faviconPngCanvas, faviconPngPath);
  await savePNG(faviconSmallCanvas, faviconPng32Path);

  // Generate ICO from the 32x32 PNG (could add more sizes if desired)
  const icoBuffer = await pngToIco([faviconPng32Path]);
  fs.writeFileSync(faviconIcoPath, icoBuffer);

  // Cleanup intermediate file
  try { fs.unlinkSync(faviconPng32Path); } catch (_) {}

  console.log('Generated:', logoPath);
  console.log('Generated:', faviconPngPath);
  console.log('Generated:', faviconIcoPath);
}

if (require.main === module) {
  generate().catch((err) => {
    console.error('Error generating brand assets:', err);
    process.exit(1);
  });
}
