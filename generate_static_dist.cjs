const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

async function main() {
  console.log('1. Mengambil HTML render dari http://127.0.0.1:8000 ...');
  let html;
  try {
    const res = await fetch('http://127.0.0.1:8000');
    html = await res.text();
  } catch (err) {
    console.error('Gagal mengambil HTML dari server lokal:', err.message);
    process.exit(1);
  }

  // Bersihkan URL absolut localhost menjadi URL relatif agar bisa jalan di domain Vercel mana saja
  html = html.replace(/http:\/\/127\.0\.0\.1:8000\//g, '/');
  html = html.replace(/http:\/\/localhost:8000\//g, '/');
  html = html.replace(/http:\/\/0\.0\.0\.0:8000\//g, '/');

  // Bersihkan dist folder
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  // Tulis index.html
  fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
  console.log('2. Menulis dist/index.html berhasil.');

  // Helper copy directory
  function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const sp = path.join(src, entry.name);
      const dp = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDir(sp, dp);
      } else {
        fs.copyFileSync(sp, dp);
      }
    }
  }

  // Salin assets build dan images
  console.log('3. Menyalin assets dan images ke dist/ ...');
  copyDir(path.join(rootDir, 'public', 'build'), path.join(distDir, 'build'));
  copyDir(path.join(rootDir, 'public', 'images'), path.join(distDir, 'images'));

  const filesToCopy = ['favicon.ico', 'robots.txt'];
  for (const f of filesToCopy) {
    const sp = path.join(rootDir, 'public', f);
    if (fs.existsSync(sp)) {
      fs.copyFileSync(sp, path.join(distDir, f));
    }
  }

  console.log('4. Pembuatan folder dist selesai 100%!');
}

main();
