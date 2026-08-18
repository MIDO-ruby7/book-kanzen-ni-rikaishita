#!/usr/bin/env node
/**
 * content.js の文体・冗長・サイドバー過多を一括で整える。
 * node scripts/polish-editorial.js && node generate.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const content = require(path.join(ROOT, 'content.js'));

/** @type {Record<string, Partial<import('../content.js')>>} */
const patches = {
  ios: {
    q1_text: 'スマホが本格的なコンピュータになるにつれ、タッチ操作向けの専用OSとアプリ配布基盤が必要になった。',
    q3_cells: [
      { icon: 'ic-laptop', cap: 'iPhone向けアプリを配布できる' },
      { icon: 'ic-package', cap: '審査付きストアで品質下限を揃えやすい' },
      { icon: 'ic-scale', cap: '端末×OSの組み合わせが少ない' },
    ],
    memo: 'iPadOSもセットで意識することが多い。シミュレータ・実機・審査が最初の壁。',
  },
  android: {
    q3_cells: [
      { icon: 'ic-monitor', cap: '多メーカー端末向けに配布できる' },
      { icon: 'ic-package', cap: 'Google Play中心の配布基盤がある' },
      { icon: 'ic-scale', cap: '端末差を前提にテスト設計できる' },
    ],
    memo: '端末・OSバージョンの差が大きい。エミュレータと実機の両方が必要になりがち。',
  },
  'react-native': {
    q1_text: 'Reactに慣れたチームが、WebViewではなくネイティブUIをJSで書きたかった。',
    q3_cells: [
      { icon: 'ic-cube', cap: 'Reactの発想をモバイルへ展開できる' },
      { icon: 'ic-layers', cap: 'JS/TSから両OS向けに寄せられる' },
      { icon: 'ic-rocket', cap: '足りない部分はネイティブで補える' },
    ],
    memo: '「Learn once, write anywhere」が近い。橋渡しの話は別途深掘り。',
  },
  dart: {
    memo: 'Flutter専用だが、型やasync/awaitは他言語にも通じる。',
    q3_cells: [
      { icon: 'ic-file', cap: 'FlutterでUIを書く言語になる' },
      { icon: 'ic-layers', cap: '型付きでUIロジックを整理できる' },
      { icon: 'ic-rocket', cap: 'Hot Reloadで試行錯誤が速い' },
    ],
  },
  swift: {
    q2_intro: 'Objective-CのみでiOS開発していた。',
    q1_text: 'Objective-Cは冗長で、null事故も起きやすかった。もっと安全に書きたいニーズが強まった。',
  },
  'hybrid-app': {
    q3_cells: [
      { icon: 'ic-laptop', cap: 'Web技術で素早く作れる' },
      { icon: 'ic-cloud', cap: 'コンテンツ更新をサーバー側に寄せられる' },
      { icon: 'ic-scale', cap: 'ネイティブ機能はブリッジで足せる' },
    ],
  },
  lockfile: {
    memo: 'package-lock / yarn.lock / pnpm-lock など。消す前に差分を読む。',
  },
  'serverless-architecture': {
    q1_text: '常時サーバーを立てておくと、アイドル時間も料金と運用コストがかかる。',
    q2_table: {
      col_before: '常時稼働サーバー',
      col_after: 'サーバレスアーキテクチャ',
      rows: [
        ['サーバー管理', 'OS・パッチ・容量を自分で面倒見', 'クラウドが面倒見'],
        ['課金', '起動時間分を払う', '実行時間・リクエスト数に応じて'],
        ['スケール', '手動設定が必要', 'イベント量に応じて自動'],
        ['向いている用途', '常時接続が必要', '断続的・突発的な処理'],
      ],
    },
    memo: 'サーバーがないのではなく、運用を見えなくした設計。LambdaやCloud Functionsが代表例。',
    side_memo: '常時接続（WebSocket等）には向かないことも。サーバーレス＝サーバー不要、ではない。',
  },
  network: {
    q3_cells: [
      { icon: 'ic-network', cap: 'コンテナ同士を名前でつなげる' },
      { icon: 'ic-layers', cap: '環境ごとに通信範囲を分離できる' },
      { icon: 'ic-cube', cap: 'Composeの networks: で宣言できる' },
    ],
    memo: 'bridge / host / none など種類がある。同じ network＝会話できる部屋、と覚える。',
  },
  puppeteer: {
    q1_text: 'Seleniumは重く、Chromeだけ試したい場面では設定が面倒だった。',
  },
  playwright: {
    memo: 'Chromium/Firefox/WebKitを1つのAPIで扱える。Puppeteerよりマルチブラウザ向き。',
    q3_cells: [
      { icon: 'ic-monitor', cap: 'E2Eを安定して書ける' },
      { icon: 'ic-layers', cap: '複数ブラウザを同じAPIで試せる' },
      { icon: 'ic-clock', cap: '自動待機でフレークを減らせる' },
    ],
  },
  'e2e-test': {
    q2_table: {
      col_before: '手動確認中心',
      col_after: 'E2E Test',
      rows: [
        ['見る範囲', '画面の一部', 'ユーザー操作の一連の流れ'],
        ['再現性', '担当者の記憶に依存', 'スクリプトで繰り返せる'],
        ['コスト', '人時がかかる', '初期構築後は繰り返しが安い'],
        ['弱点', '見落とし', 'UI変更でテストも折れやすい'],
      ],
    },
  },
  'integration-test': {
    q2_intro: '結合確認はステージングで人手、またはユニット＋モックだけだった。',
    q3_cells: [
      { icon: 'ic-layers', cap: 'モジュール間の契約ずれを拾える' },
      { icon: 'ic-server', cap: 'DBやAPIとの実連携を検証できる' },
      { icon: 'ic-scale', cap: 'E2Eより狭く原因を追いやすい' },
    ],
  },
  'equivalence-partitioning': {
    q2_table: {
      col_before: 'ランダム／総当たり',
      col_after: '同値分割',
      rows: [
        ['考え方', 'とにかく試す', '同じ結果の塊に分ける'],
        ['効率', 'ケースが膨らむ', '代表値で済ませられる'],
        ['見落とし', '運任せ', '境界とセットで設計'],
        ['向いている', '小さな入力', '入力条件の整理'],
      ],
    },
  },
  'test-design': {
    q2_table: {
      col_before: '実装から逆算したテスト',
      col_after: 'テスト設計',
      rows: [
        ['着手', 'コードができてから', '要件・リスクから逆算'],
        ['網羅', '書いたところだけ', '技法で漏れを減らす'],
        ['保守', '変更で大量修正', '設計で修正範囲を限定'],
        ['共有', '属人化しやすい', 'チームで粒度を揃えやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-file', cap: '何を・どこまで試すか決められる' },
      { icon: 'ic-scale', cap: '技法を組み合わせて設計できる' },
      { icon: 'ic-clock', cap: 'テスト工数を見積もりやすくなる' },
    ],
  },
  'boundary-value': {
    memo: '同値分割とセットが定石。例: 0 / 1 / 100 / 101。',
  },
  'unit-test': {
    q1_text: '関数やクラスが大きくなると、変更のたびに手動確認が追いつかなくなった。',
  },
  yarn: {
    q3_cells: [
      { icon: 'ic-package', cap: 'npm互換のCLIで依存を管理できる' },
      { icon: 'ic-clock', cap: 'キャッシュで再インストールが速い' },
      { icon: 'ic-layers', cap: 'workspacesでモノレポ向き' },
    ],
  },
  pip: {
    q3_cells: [
      { icon: 'ic-package', cap: 'PyPIからライブラリを入れられる' },
      { icon: 'ic-file', cap: 'requirements.txtで共有可能' },
      { icon: 'ic-scale', cap: 'venvと組み合わせて環境を分けられる' },
    ],
  },
  bash: {
    q3_cells: [
      { icon: 'ic-file', cap: 'シェルスクリプトを書ける' },
      { icon: 'ic-server', cap: 'サーバー作業の共通土台になる' },
      { icon: 'ic-clock', cap: '短い自動化をすぐ回せる' },
    ],
  },
  path: {
    q3_cells: [
      { icon: 'ic-file', cap: 'コマンドの探索順序を制御できる' },
      { icon: 'ic-scale', cap: 'command not foundを切り分けられる' },
      { icon: 'ic-layers', cap: 'ツールのバージョン切替と相性が良い' },
    ],
  },
  apt: {
    q3_cells: [
      { icon: 'ic-package', cap: 'ソフトの入出力を標準化できる' },
      { icon: 'ic-server', cap: 'Debian/Ubuntu系の基本操作になる' },
      { icon: 'ic-clock', cap: '依存解決を自動でやってくれる' },
    ],
  },
  intranet: {
    q1_text: '社外に出せない情報を、社内だけで安全に共有するネットワークが必要になった。',
  },
  dump: {
    memo: '本番データをそのまま持ち込むのは危険。マスキングや匿名化をセットに。',
  },
  rest: {
    memo: 'RESTは設計思想の名前。実務では「URLは名詞、操作はHTTPメソッドで」で十分。',
  },
  websocket: {
    memo: 'HTTP接続をアップグレードして双方向通信に切り替える。チャット・通知向き。',
  },
  grpc: {
    memo: '主にサーバー同士の通信向き。画面APIはREST/GraphQL、裏側はgRPC、の使い分けも多い。',
  },
  pubsub: {
    memo: 'Webhookが1対1の電話なら、Pub/Subは掲示板に貼って見に来るイメージ。',
  },
  graphql: {
    memo: '1つのURLに欲しいデータの形を送る。RESTと優劣より、画面の複雑さで使い分ける。',
  },
  openapi: {
    memo: '元はSwagger。API仕様をコードと同じ形式で管理できるのが強み。',
  },
  'spring-boot': {
    q1_text: 'Springの設定と依存が重く、小さく始めたいJavaプロジェクトには敷居が高かった。',
    memo: '「設定より規約」。足りない部分だけ設定ファイルで上書きする思想。',
  },
  django: {
    q1_text: 'PythonでWebアプリを作るたび、認証・管理画面・DB接続をゼロから書くのが非効率だった。',
    memo: 'batteries included。全部入りだが、その分フレームワークの流儀に寄せる。',
  },
  rails: {
    q1_text: 'RubyでWebアプリを作るとき、ルーティングからDBまで毎回設計し直すのがつらかった。',
    memo: 'Convention over Configuration。規約に乗れば設定が少なく済む。',
  },
  bun: {
    q1_text: 'Node.jsは便利だが、起動の遅さやツールの分散がボトルネックになった。',
    memo: 'Node互換を保ちつつ、実行・パッケージ管理・テストを1バイナリに統合。',
  },
  'async-await': {
    q1_text: 'Promiseの.then()が増えると、処理の流れが追いにくくなった。',
    memo: '糖衣構文。中身の非同期処理はPromiseのまま。',
  },
  domain: {
    memo: '取得しただけでは終わらない。更新を止めると他人に取られる。',
  },
  hono: {
    q1_text: 'Edge環境ではNode.js前提のExpressが動かず、軽量フレームワークが必要だった。',
    memo: 'Cloudflare Workers等のEdge向き。Expressより薄く、ランタイム制約に強い。',
  },
  'ui-component-library': {
    q1_text: 'ボタンやフォームを毎回CSSから作ると、見た目と挙動のブレが起きやすかった。',
  },
};

function trimSidebar(groups) {
  if (!groups) return groups;
  return groups.slice(0, 2).map((g) => ({
    ...g,
    items: (g.items || []).slice(0, 3),
  }));
}

function shortenCap(cap) {
  if (!cap || cap.length <= 20) return cap;
  return cap
    .replace(/することができる/g, 'できる')
    .replace(/することが/g, 'が')
    .replace(/ようになった/g, '')
    .replace(/することが多い/g, 'が多い')
    .replace(/できるようになる/g, 'できる')
    .trim();
}

function finishSentence(s) {
  s = s.trim();
  if (/[。！？]$/.test(s)) return s;
  if (/[、,]$/.test(s)) return `${s.slice(0, -1)}。`;
  return `${s}。`;
}

function polishQ1(entry) {
  if (!entry.q1_text?.includes('\n') || patches[entry.id]?.q1_text) return;
  const lines = entry.q1_text.split('\n').map((s) => s.trim()).filter(Boolean);
  if (lines.length < 2) return;
  const [a, b] = lines;
  if (/^(例:|注意:|※)/.test(b)) {
    entry.q1_text = `${finishSentence(a)} ${b}`;
    return;
  }
  if (/[、,]$/.test(a) && b.length > 4) {
    entry.q1_text = finishSentence(`${a}${b.replace(/^[、,]/, '')}`);
    return;
  }
  entry.q1_text = finishSentence(a);
}

function polishMemo(entry) {
  if (!entry.memo?.includes('\n') || patches[entry.id]?.memo) return;
  let lines = entry.memo.split('\n').map((s) => s.trim()).filter(Boolean);
  const ol = entry.oneline || '';

  if (lines.length >= 2 && ol && (lines[0].includes(ol.slice(0, 8)) || ol.includes(lines[0].slice(0, 8)))) {
    lines = lines.slice(1);
  }
  if (lines.length >= 2 && /^.+は「/.test(lines[0]) && lines[1].length <= 45) {
    entry.memo = lines[1];
    return;
  }
  if (lines.length >= 3) {
    entry.memo = lines[lines.length - 1].length < lines[0].length ? lines[lines.length - 1] : lines[0];
    return;
  }
  if (lines.length === 2) {
    entry.memo = lines[1].length <= lines[0].length ? lines[1] : lines[0];
  }
}

function polishTable(entry) {
  if (!entry.q2_table?.rows) return;
  const shorten = (s) =>
    s
      .replace(/することができる/g, 'できる')
      .replace(/することが/g, 'が')
      .replace(/ようになった/g, '')
      .replace(/など/g, '等');
  entry.q2_table.rows = entry.q2_table.rows.map(([h, a, b]) => [h, shorten(a), shorten(b)]);
}

function polishEntry(entry) {
  const patch = patches[entry.id];
  if (patch) Object.assign(entry, patch);

  polishQ1(entry);
  polishMemo(entry);

  if (entry.q3_cells) {
    entry.q3_cells = entry.q3_cells.map((c) => ({
      ...c,
      cap: shortenCap(c.cap),
    }));
  }

  if (entry.sidebar_groups) {
    entry.sidebar_groups = trimSidebar(entry.sidebar_groups);
  }

  // 長文ページのみ表セルを短縮
  const bodyLen = JSON.stringify({
    q1: entry.q1_text,
    q2: entry.q2_intro,
    memo: entry.memo,
    table: entry.q2_table,
  }).length;
  if (bodyLen > 320) polishTable(entry);

  return entry;
}

let patched = 0;
for (const ch of content.chapters) {
  for (const entry of ch.entries) {
    if (entry.skip || entry.existing_file) continue;
    const before = JSON.stringify(entry);
    polishEntry(entry);
    if (JSON.stringify(entry) !== before) patched++;
  }
}

const out = 'module.exports = ' + JSON.stringify(content, null, 2) + ';\n';
fs.writeFileSync(path.join(ROOT, 'content.js'), out, 'utf8');
console.log(`polish-editorial: updated ${patched} entries (+ ${Object.keys(patches).length} explicit patches)`);
