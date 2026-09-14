const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'test-cases', 'Test-Dummy.md');
const outDir = path.join(__dirname, '..', 'test-cases');
const startNumber = 103;

let txt = fs.readFileSync(src, 'utf8');
const lines = txt.split(/\r?\n/);

const starts = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('# BKL_')) starts.push(i);
}
if (starts.length === 0) {
  console.error('No BKL entries found');
  process.exit(1);
}

function slugify(s) {
  return s
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}

for (let idx = 0; idx < starts.length; idx++) {
  const s = starts[idx];
  const e = (idx + 1 < starts.length) ? starts[idx + 1] - 1 : lines.length - 1;
  const blockLines = lines.slice(s, e + 1);
  const headerLine = blockLines[0].trim();
  const m = headerLine.match(/^#\s*BKL_\d+:\s*(.*)$/);
  if (!m) continue;
  const title = m[1].trim();
  const newNum = startNumber + idx;
  const newId = `TC-${newNum}`;
  const filename = `${newId}-${slugify(title)}.md`;

  // Clean block: remove 'Actual Result (Excel):' markers and 'Status (Excel):' etc
  let content = blockLines.join('\n');
  content = content.replace(/^#\s*BKL_\d+:\s*/m, '');
  content = content.replace(/Actual Result \(Excel\):/gi, 'Actual Result:');
  content = content.replace(/Status \(Excel\):/gi, 'Status:');
  content = content.replace(/Actual Result Baru:/gi, 'Actual Result Baru:');

  // Remove redundant '> ' quote markers
  content = content.replace(/^>\s?/mg, '');

  // Remove leading blank lines
  content = content.replace(/^\s+/, '');

  // Compose final markdown with TC header
  const out = `# ${newId}: ${title}\n\n${content}\n`;

  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('Wrote', outPath);
}

console.log('Done.');
