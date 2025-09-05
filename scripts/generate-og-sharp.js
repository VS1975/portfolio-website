/*
  Generates an Open Graph image using sharp from an inline SVG.
  - Size: 1200x630
  - Warm gradient background, subtle wave pattern, title and subtitle text
  - Output: ../my-app/public/og-image.png
*/

const path = require('path');
const sharp = require('sharp');

const WIDTH = 1200;
const HEIGHT = 630;

async function generate() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F5E9E4"/>
      <stop offset="55%" stop-color="#FFA046"/>
      <stop offset="100%" stop-color="#D4451D"/>
    </linearGradient>
    <pattern id="waves" patternUnits="userSpaceOnUse" width="60" height="60">
      <path d="M0,60 C20,40 40,20 60,0" stroke="#4B1F12" stroke-width="1" fill="none"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#waves)" opacity="0.12"/>
  <g transform="translate(80,170)">
    <text x="0" y="0" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="88" font-weight="700">Varun Samiyani</text>
    <text x="0" y="90" fill="#F5E9E4" font-family="Inter, Arial, sans-serif" font-size="36">Frontend Developer • AI Explorer • Vibe Coder</text>
  </g>
</svg>`;

  const outPath = path.resolve(__dirname, '..', 'my-app', 'public', 'og-image.png');
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log('OG image generated at:', outPath);
}

if (require.main === module) {
  generate().catch((err) => {
    console.error('Failed to generate OG image:', err);
    process.exit(1);
  });
}
