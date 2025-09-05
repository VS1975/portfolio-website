/*
  Generates brand logo and favicons using SVG rendered by sharp (no node-canvas).
  Outputs:
    - ../my-app/public/logo.png (500x500)
    - ../my-app/public/favicon.png (180x180)
    - ../my-app/public/favicon.ico (32x32)
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

const COLORS = {
  cream: '#F5E9E4',
  orange: '#FFA046',
  brick: '#D4451D',
};

function svgLogo(size) {
  const strokeWidth = Math.max(2, Math.floor(size * 0.018));
  const fontSize = Math.floor(size * 0.28);
  const hexRadius = Math.floor(size * 0.33);
  // Flat-top hexagon points
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = Math.PI / 3 * i - Math.PI / 6;
    const x = size / 2 + hexRadius * Math.cos(angle);
    const y = size / 2 + hexRadius * Math.sin(angle);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${COLORS.cream}"/>
  <polygon points="${points}" fill="${COLORS.brick}" stroke="${COLORS.orange}" stroke-width="${strokeWidth}"/>
  <g font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${fontSize}" fill="${COLORS.cream}" text-anchor="middle" dominant-baseline="middle">
    <text x="50%" y="51%">VS</text>
  </g>
</svg>`;
}

async function generate() {
  const publicDir = path.resolve(__dirname, '..', 'my-app', 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  const logoPath = path.join(publicDir, 'logo.png');
  const faviconPngPath = path.join(publicDir, 'favicon.png');
  const favicon32PngPath = path.join(publicDir, 'favicon-32.png');
  const faviconIcoPath = path.join(publicDir, 'favicon.ico');

  // Render PNGs via sharp from SVG
  await sharp(Buffer.from(svgLogo(500))).png().toFile(logoPath);
  await sharp(Buffer.from(svgLogo(180))).png().toFile(faviconPngPath);
  await sharp(Buffer.from(svgLogo(32))).png().toFile(favicon32PngPath);

  // Create .ico from 32x32 PNG
  const icoBuffer = await pngToIco([favicon32PngPath]);
  fs.writeFileSync(faviconIcoPath, icoBuffer);
  try { fs.unlinkSync(favicon32PngPath); } catch {}

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
