#!/usr/bin/env node
/**
 * content.js から目次 HTML を生成する。
 * 方針: 1語 = 1リンク（対比ペアを1行にまとめない）。
 */
const fs = require('fs');
const path = require('path');
const content = require('../content.js');

const OUT = path.join(__dirname, '..', 'toc.html');

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fileFor(entry) {
  return entry.existing_file || `${entry.id}.html`;
}

/** 目次表示用。括弧書きの別表記は残すが、スラッシュ連結の複数語は分割しない（1エントリ1語） */
function displayTerm(entry) {
  return entry.term;
}

const chapters = content.chapters
  .map(ch => {
    const entries = ch.entries.filter(e => !e.skip);
    const minPage = entries.length ? Math.min(...entries.map(e => e.page)) : Infinity;
    return { ...ch, entries: entries.sort((a, b) => a.page - b.page), minPage };
  })
  .filter(ch => ch.entries.length)
  .sort((a, b) => a.minPage - b.minPage || a.number - b.number);

const sections = chapters.map(ch => {
  const items = ch.entries.map(e => `
        <li class="toc-item">
          <a href="${esc(fileFor(e))}">
            <span class="toc-term">${esc(displayTerm(e))}</span>
            <span class="toc-leader" aria-hidden="true"></span>
            <span class="toc-page">${e.page}</span>
          </a>
        </li>`).join('');
  return `
    <section class="toc-chapter">
      <h2><span class="toc-ch-num">Chapter ${ch.number}</span>${esc(ch.title)}</h2>
      <ol class="toc-list">${items}
      </ol>
    </section>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>目次 — エンジニア用語辞典</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<article class="toc-doc">
  <header class="toc-head">
    <p class="toc-kicker">エンジニア1〜3年目の「なぜ使う？」がわかる</p>
    <h1>目次</h1>
    <p class="toc-sub">1語1ページ。気になる言葉からどうぞ。</p>
    <p class="toc-hint">用語名やページ番号をタップ／クリックすると、そのページへ飛びます。</p>
  </header>
${sections}
</article>
</body>
</html>
`;

fs.writeFileSync(OUT, html, 'utf8');
const n = chapters.reduce((s, ch) => s + ch.entries.length, 0);
console.log(`toc.html を生成: ${chapters.length} 章 / ${n} 語`);
