const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'test-cases');
const files = fs.readdirSync(dir).filter(f => {
  const m = f.match(/^TC-(\d{3})-(.*)\.md$/);
  if (!m) return false;
  const n = parseInt(m[1], 10);
  return n >= 103 && n <= 134;
});

const stopwords = new Set(["admin","ingin","melihat","yang","pada","di","dan","user","saat","berhasil","login","data","halaman","section","menggunakan","button","baru","baru","dengan","form","menu","menampilkan","menambah","menambah","sebagai","sistem","tersebut","ini","lihat","lihatlah","ringkasan","card","statistik","grafik","daftar","summary","service","layanan","barang","pada","hasil","nama","user","user"]);

function slugifyTitle(title){
  title = title.replace(/\(.*?\)/g,'');
  title = title.replace(/[^a-zA-Z0-9\s]/g,' ');
  const parts = title.split(/\s+/).map(s=>s.toLowerCase()).filter(Boolean);
  const filtered = parts.filter(w => !stopwords.has(w));
  const take = filtered.length ? filtered.slice(0,3) : parts.slice(0,3);
  let slug = take.join('-');
  slug = slug.replace(/-+/g,'-');
  slug = slug.replace(/^-|-$|\.+/g,'');
  if (!slug) slug = parts.slice(0,3).join('-');
  return slug || 'tc';
}

function shortTitleFrom(title){
  title = title.replace(/\(.*?\)/g,'').trim();
  const parts = title.split(/\s+/).filter(Boolean);
  const filtered = parts.filter(w => !stopwords.has(w.toLowerCase()));
  const take = filtered.length ? filtered.slice(0,4) : parts.slice(0,4);
  // capitalize first letters
  const short = take.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return short || title.slice(0,40);
}

for (const f of files){
  const full = path.join(dir,f);
  let s = fs.readFileSync(full,'utf8');
  const h1Match = s.match(/^#\s*TC-\d+:\s*(.*)$/m);
  let origTitle = null;
  if (h1Match) origTitle = h1Match[1].trim();
  else {
    // fallback: take first non-empty line
    const lines = s.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    origTitle = lines[0] || f.replace('.md','');
  }
  const shortTitle = shortTitleFrom(origTitle);
  const slug = slugifyTitle(origTitle);
  const num = f.match(/^TC-(\d{3})-/)[1];
  const newName = `TC-${num}-${slug}.md`;
  const newPath = path.join(dir,newName);

  // update H1 in content
  if (h1Match){
    s = s.replace(/^#\s*TC-\d+:.*$/m, `# TC-${parseInt(num,10)}: ${shortTitle}`);
  } else {
    s = `# TC-${parseInt(num,10)}: ${shortTitle}\n\n` + s;
  }

  // write to new file (avoid overwriting existing different file)
  if (fs.existsSync(newPath) && path.resolve(newPath) !== path.resolve(full)){
    // collision: append suffix
    let i=1; let candidate;
    do { candidate = path.join(dir, `TC-${num}-${slug}-${i}.md`); i++; } while (fs.existsSync(candidate));
    fs.writeFileSync(candidate, s, 'utf8');
    if (candidate !== full) fs.unlinkSync(full);
    console.log('Wrote with suffix due to collision:', candidate);
  } else {
    fs.writeFileSync(newPath, s, 'utf8');
    if (newPath !== full) fs.unlinkSync(full);
    console.log('Renamed/Updated', f, '→', newName);
  }
}

console.log('Done');
