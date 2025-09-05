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

/*
  Generates an Open Graph image using sharp from an inline SVG.
  - Size: 1200x630
  - Warm gradient background, subtle wave pattern, title and subtitle text
  - Output: ../my-app/public/og-image.png
*/

const fs = require('fs');
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
const path = require('path');
const sharp = require('sharp');

const WIDTH = 1200;
const HEIGHT = 630;

  const grd = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  grd.addColorStop(0, '#F5E9E4'); // cream top
  grd.addColorStop(0.5, '#FFA046'); // orange middle
  grd.addColorStop(1, '#D4451D'); // brick bottom
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawTitle(ctx) {
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 90px Arial, Helvetica, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const title = 'Varun Samiyani';
  // Slight shadow for separation
  ctx.shadowColor = 'rgba(0,0,0,0.25)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 4;
  ctx.fillText(title, 80, 170);
  // reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
}

function drawSubtitle(ctx) {
  ctx.fillStyle = '#F5E9E4'; // cream
  ctx.font = '400 40px Arial, Helvetica, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const subtitle = 'Frontend Developer & AI Explorer';
  ctx.fillText(subtitle, 80, 280);
}

function drawTechOverlay(ctx) {
  // Subtle dark-brown overlay shapes and lines
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = '#4B1F12';
  ctx.fillStyle = '#4B1F12';

  // Futuristic wave
  ctx.beginPath();
  const amplitude = 22;
  const wavelength = 160;
  const baseY = HEIGHT - 180;
  ctx.moveTo(0, baseY);
  for (let x = 0; x <= WIDTH; x++) {
    const y = baseY + Math.sin((x / wavelength) * Math.PI * 2) * amplitude;
    ctx.lineTo(x, y);
  }
  ctx.lineWidth = 3;
  ctx.stroke();

  // Additional parallel waves
  for (let i = 1; i <= 2; i++) {
    ctx.beginPath();
    const yOffset = i * 28;
    ctx.moveTo(0, baseY + yOffset);
    for (let x = 0; x <= WIDTH; x++) {
      const y = baseY + yOffset + Math.sin((x / (wavelength - i * 15)) * Math.PI * 2) * (amplitude - i * 6);
      ctx.lineTo(x, y);
    }
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Circuit-like nodes and lines on the right side
  const startX = WIDTH - 360;
  const startY = 140;
  ctx.lineWidth = 2;
  // vertical bus
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, startY + 300);
  ctx.stroke();
  // horizontal branches
  const branches = [60, 140, 220, 280];
  branches.forEach((dy, idx) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY + dy);
    ctx.lineTo(startX + 220 - idx * 30, startY + dy);
    ctx.stroke();
    // draw small node circle at end
    ctx.beginPath();
    ctx.arc(startX + 220 - idx * 30, startY + dy, 6, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function generate() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background gradient
  drawGradient(ctx);

  // Overlay decoration
  drawTechOverlay(ctx);

  // Text
  drawTitle(ctx);
  drawSubtitle(ctx);

  const outPath = path.resolve(__dirname, '..', 'my-app', 'public', 'og-image.png');
  const out = fs.createWriteStream(outPath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => {
    console.log('OG image generated at:', outPath);
  });
}

if (require.main === module) {
  generate();
}
