#!/usr/bin/env node
/**
 * バッチエントリを content.js にマージし、generate.js を実行する。
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const content = require(path.join(ROOT, 'content.js'));
const { intranet, dump, network, ch9, ch10 } = require('./batch-ch9-12.js');
const { ch11 } = require('./batch-ch11.js');
const { ch12 } = require('./batch-ch12.js');

function findChapter(n) {
  return content.chapters.find((c) => c.number === n);
}

function ensureId(chapter, id) {
  return chapter.entries.some((e) => e.id === id);
}

// Ch2: イントラネット
const ch2 = findChapter(2);
if (!ensureId(ch2, 'intranet')) {
  ch2.entries.push(intranet);
  console.log('+ Ch2 intranet');
} else {
  console.log('= Ch2 intranet already present');
}

// Ch6: ダンプ
const ch6 = findChapter(6);
if (!ensureId(ch6, 'dump')) {
  ch6.entries.push(dump);
  console.log('+ Ch6 dump');
} else {
  console.log('= Ch6 dump already present');
}

// Ch9–12: 章ごと挿入（Ch8の後ろ、Ch13の前）
const newChapters = [ch9, ch10, ch11, ch12];
for (const ch of newChapters) {
  const existing = findChapter(ch.number);
  if (existing) {
    // 置き換え（再実行時）
    const idx = content.chapters.indexOf(existing);
    content.chapters[idx] = ch;
    console.log(`~ replace Ch${ch.number} (${ch.entries.length} entries)`);
  } else {
    const ch13idx = content.chapters.findIndex((c) => c.number === 13);
    if (ch13idx === -1) throw new Error('Ch13 not found');
    // Ch9,10,11,12 を番号順に入れたいので、適切な位置を探す
    let insertAt = content.chapters.findIndex((c) => c.number > ch.number);
    if (insertAt === -1) insertAt = content.chapters.length;
    content.chapters.splice(insertAt, 0, ch);
    console.log(`+ insert Ch${ch.number} (${ch.entries.length} entries) at ${insertAt}`);
  }
}

// Ch13: Network（Composeの前に挿入）
const ch13 = findChapter(13);
if (!ensureId(ch13, 'network')) {
  const composeIdx = ch13.entries.findIndex((e) => e.id === 'compose-existing');
  if (composeIdx === -1) throw new Error('compose-existing not found');
  ch13.entries.splice(composeIdx, 0, network);
  console.log('+ Ch13 network');
} else {
  console.log('= Ch13 network already present');
}

const out = 'module.exports = ' + JSON.stringify(content, null, 2) + ';\n';
fs.writeFileSync(path.join(ROOT, 'content.js'), out, 'utf8');
console.log('wrote content.js');

execFileSync(process.execPath, [path.join(ROOT, 'generate.js')], {
  cwd: ROOT,
  stdio: 'inherit',
});

// 件数サマリ
const fresh = require(path.join(ROOT, 'content.js'));
let total = 0;
for (const ch of fresh.chapters) {
  const n = ch.entries.filter((e) => !e.skip).length;
  total += n;
  console.log(`Ch${ch.number} ${ch.title}: ${n}`);
}
console.log('total entries:', total);
