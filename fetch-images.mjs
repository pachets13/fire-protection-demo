import fs from 'fs';
import path from 'path';
import https from 'https';

const PEXELS_API_KEY = 'R57yyQp37uA1UwRhlwdAeZdqZqDWnQKXhCLXEfuPX4jzyPH9eAPOoxDG';

const images = [
  { filename: 'slideshow-1.jpg', folder: 'public/images', query: 'fire sprinkler system building' },
  { filename: 'slideshow-2.jpg', folder: 'public/images', query: 'fire protection inspection commercial' },
  { filename: 'slideshow-3.jpg', folder: 'public/images', query: 'building safety fire equipment' },
  { filename: 'slideshow-4.jpg', folder: 'public/images', query: 'fire sprinkler ceiling industrial' },
  { filename: 'slideshow-5.jpg', folder: 'public/images', query: 'fire safety technician working' },
  { filename: 'about-us-hero.jpg', folder: 'public/images/about', query: 'trades workers commercial vehicle' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, r => r.pipe(file));
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function fetchImage(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
  const data = await fetch(url, { headers: { Authorization: PEXELS_API_KEY } });
  const json = await data.json();
  return json.photos?.[0]?.src?.large2x || null;
}

async function run() {
  for (const img of images) {
    console.log(`Fetching: ${img.filename} (${img.query})`);
    const photoUrl = await fetchImage(img.query);
    if (!photoUrl) { console.log(`  ✗ No result for ${img.filename}`); continue; }
    const dest = path.join(img.folder, img.filename);
    await download(photoUrl, dest);
    console.log(`  ✓ Saved to ${dest}`);
  }
  console.log('\nDone.');
}

run();