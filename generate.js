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
        <div>
          <div class="kw-name">${esc(item.name)}</div>
          <p class="kw-desc">${esc(item.desc)}</p>
          ${item.page ? `<span class="kw-page">P.${item.page}</span>` : ''}
        </div>
      </div>`).join('')}
    </div>`).join('');
}

// 見出し（h1）の英数字の字幅（em）。Hiragino Sans W8・palt で実測した値。
// 和文・全角は palt で詰まっても 1em を超えないので 1em として扱う（安全側）。
const TITLE_CHAR_EM = {" ":0.333,"!":0.363,"#":0.786,"&":0.928,"'":0.303,"(":0.446,")":0.446,"+":0.714,",":0.303,"-":0.474,".":0.303,"/":0.571,":":0.303,"_":0.501,
  "0":0.773,"1":0.773,"2":0.773,"3":0.773,"4":0.773,"5":0.773,"6":0.773,"7":0.773,"8":0.773,"9":0.773,
  A:0.87,B:0.797,C:0.845,D:0.856,E:0.729,F:0.688,G:0.841,H:0.876,I:0.344,J:0.687,K:0.86,L:0.686,M:1.028,N:0.874,O:0.882,P:0.763,Q:0.886,R:0.822,S:0.764,T:0.773,U:0.887,V:0.858,W:1.11,X:0.91,Y:0.835,Z:0.747,
  a:0.701,b:0.769,c:0.674,d:0.769,e:0.688,f:0.544,g:0.742,h:0.734,i:0.315,j:0.369,k:0.732,l:0.314,m:1.095,n:0.734,o:0.715,p:0.773,q:0.773,r:0.558,s:0.654,t:0.479,u:0.734,v:0.705,w:0.934,x:0.707,y:0.71,z:0.585};
function titleEm(text) {
  let em = 0;
  for (const c of text) em += TITLE_CHAR_EM[c] ?? (c.charCodeAt(0) < 0x80 ? 0.8 : 1);
  return em;
}

// タイトル欄の幅に収まる最大の文字サイズ(pt)。既定は 37pt（style.css の .titles h1）
const TITLE_MAX_PT = 37;
const TITLE_BOX_MM = 75 * 0.97; // 本文幅107mm − 番号列25mm − 左余白7mm。カーニング等の誤差ぶん少し控えめに
function titleSizePt(lines) {
  const em = Math.max(...lines.map(l => titleEm(l.text)));
  return Math.min(TITLE_MAX_PT, Math.floor(TITLE_BOX_MM / (em * 25.4 / 72)));
}

// 1行に収めると小さくなりすぎる用語は content.js の title_lines で改行位置と行ごとの読みを指定する
function renderTitle(entry) {
  const lines = entry.title_lines || [{ text: entry.term, reading: entry.reading }];
  const pt = titleSizePt(lines);
  const style = pt < TITLE_MAX_PT ? ` style="font-size:${pt}pt"` : '';
  const cls = lines.length > 1 ? ' class="two-line"' : '';
  const html = lines.map(l => l.reading
    ? `<ruby>${esc(l.text)}<rt>${esc(l.reading)}</rt></ruby>`
    : esc(l.text)).join('<br>');
  return `<h1${cls}${style}>${html}</h1>`;
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

<article class="entry ${parity}${entry.compact ? " compact" : ""}">

  <!-- ===== 本文 ===== -->
  <div class="main">

    <div class="chapter"><b>Chapter ${ch.number}</b>${esc(ch.title)}</div>

    <div class="title-row">
      <div class="num-col"><div class="number">${entry.page}</div></div>
      <div class="titles">
        ${renderTitle(entry)}
      </div>
    </div>

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
