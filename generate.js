#!/usr/bin/env node
// HTML一括生成スクリプト。node generate.js で実行。
const fs = require('fs');
const path = require('path');
const content = require('./content.js');

const OUT_DIR = __dirname;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderSidebar(groups) {
  if (!groups || groups.length === 0) return '';
  return groups.map(g => `
    <div class="side-group">
      <div class="group-label">${esc(g.label)}</div>
      ${g.items.map(item => `
      <div class="kw">
        <div class="kw-icon"><svg><use href="icons.svg#${item.icon || 'ic-file'}"/></svg></div>
        <div>
          <div class="kw-name">${esc(item.name)}</div>
          <p class="kw-desc">${esc(item.desc)}</p>
          ${item.page ? `<span class="kw-page">P.${item.page}</span>` : ''}
        </div>
      </div>`).join('')}
    </div>`).join('');
}

function needsCompact(entry) {
  if (entry.compact) return true;
  return (entry.term || '').length > 12 || (entry.subtitle || '').length > 22;
}

function renderPage(entry, ch, parity) {
  const tableRows = (entry.q2_table.rows || []).map(([label, before, after]) =>
    `<tr><td class="rowhead">${esc(label)}</td><td>${esc(before)}</td><td class="h-docker">${esc(after)}</td></tr>`
  ).join('\n            ');

  const trioCells = (entry.q3_cells || []).map(c =>
    `<div class="cell"><svg><use href="icons.svg#${c.icon}"/></svg><div class="cap">${esc(c.cap)}</div></div>`
  ).join('\n          ');

  const q1Lines = entry.q1_text.split('\n').map(esc).join('<br>\n             ');
  const memoLines = entry.memo.split('\n').map(esc).join('<br>\n         ');
  const sidebarHtml = renderSidebar(entry.sidebar_groups);
  const sideMemo = entry.side_memo
    ? `\n    <div class="side-memo">\n      <div class="lbl">キーワードメモ</div>\n      <p>${esc(entry.side_memo)}</p>\n    </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>差分でわかる エンジニアのゆるい辞典 — ${esc(entry.term)}</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<article class="entry ${parity}${needsCompact(entry) ? ' compact' : ''}">

  <!-- ===== 本文 ===== -->
  <div class="main">

    <div class="chapter"><b>Chapter ${ch.number}</b>${esc(ch.title)}</div>

    <div class="title-row">
      <div class="num-col"><div class="number">${entry.page}</div></div>
      <div class="titles">
        <h1>${esc(entry.term)}</h1>
      </div>
    </div>
    <p class="subtitle">${esc(entry.subtitle)}</p>

    <div class="head-lower">
      <div class="oneline">
        <div class="lbl">ひとことでいうと</div>
        <p>${esc(entry.oneline)}</p>
      </div>
    </div>

    <!-- ① -->
    <section class="qa">
      <span class="badge">1</span>
      <h2>${esc(entry.q1_heading || 'なぜ生まれた？')}</h2>
      <div class="body">
        <div class="with-fig">
          <p>${q1Lines}</p>
          <span class="fig"><svg><use href="icons.svg#ic-scribble"/></svg></span>
        </div>
      </div>
    </section>

    <!-- ② -->
    <section class="qa">
      <span class="badge">2</span>
      <h2>${esc(entry.q2_heading || 'それまでどうしていた？')}</h2>
      <div class="body">
        <p>${esc(entry.q2_intro)}</p>
        <table class="cmp">
          <thead>
            <tr><th></th><th>${esc(entry.q2_table.col_before)}</th><th class="h-docker">${esc(entry.q2_table.col_after)}</th></tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </section>

    <!-- ③ -->
    <section class="qa">
      <span class="badge">3</span>
      <h2>${esc(entry.q3_heading || `${entry.term} で何ができるようになった？`)}</h2>
      <div class="body">
        <div class="trio">
          ${trioCells}
        </div>
      </div>
    </section>

    <!-- ひとことメモ -->
    <div class="memo">
      <div class="lbl"><svg><use href="icons.svg#ic-pen"/></svg>ひとことメモ</div>
      <p>${memoLines}</p>
    </div>

  </div>

  <!-- ===== サイドバー ===== -->
  <aside class="sidebar">
    <h2 class="side-title">関連キーワード</h2>
    ${sidebarHtml}${sideMemo}
  </aside>

  <!-- ===== フッター ===== -->
  <footer class="page-foot">
    <span class="folio">${entry.page}</span>
    <span>差分でわかる エンジニアのゆるい辞典</span>
  </footer>

</article>

</body>
</html>`;
}

// 生成処理
const generated = [];
const skipped = [];

// 物理ページ順（掲載ページ番号順）でrecto(奇数=右ページ)/verso(偶数=左ページ)を判定する。
// ノド（綴じ側）・小口の余白を左右で変えるために使う。
const allEntries = [];
content.chapters.forEach(ch => {
  ch.entries.forEach(entry => {
    if (entry.skip) return;
    allEntries.push({ entry, ch });
  });
});
const sortedForParity = [...allEntries].sort((a, b) => a.entry.page - b.entry.page);
const parityMap = new Map();
sortedForParity.forEach(({ entry }, idx) => {
  parityMap.set(entry, idx % 2 === 0 ? 'recto' : 'verso');
});

allEntries.forEach(({ entry, ch }) => {
    if (entry.skip) { skipped.push(entry.id); return; }

    // 既存の手書きHTMLを使う場合はファイル生成をスキップ
    if (entry.existing_file) {
      generated.push({ file: entry.existing_file, page: entry.existing_page || entry.page, term: entry.term, ch: ch.number });
      return;
    }

    const filename = `${entry.id}.html`;
    const html = renderPage(entry, ch, parityMap.get(entry));
    fs.writeFileSync(path.join(OUT_DIR, filename), html, 'utf8');
    generated.push({ file: filename, page: entry.page, term: entry.term, ch: ch.number });
});

// vivliostyle.config.js の entry 配列を出力
const sorted = generated.sort((a, b) => a.page - b.page);
const entryLines = sorted.map(e => {
  const pad = ' '.repeat(Math.max(1, 32 - e.file.length));
  return `    '${e.file}',${pad}// ${e.page} ${e.term} (Ch${e.ch})`;
}).join('\n');

const config = `module.exports = {
  title: '差分でわかる エンジニアのゆるい辞典',
  language: 'ja',
  size: 'JIS-B5',
  theme: './style.css',
  entry: [
${entryLines}
  ],
  output: ['book.pdf'],
};`;

fs.writeFileSync(path.join(OUT_DIR, 'vivliostyle.config.js'), config, 'utf8');

console.log(`\n生成完了: ${generated.length} ページ`);
if (skipped.length) console.log(`スキップ: ${skipped.join(', ')}`);
console.log('vivliostyle.config.js を更新しました');
