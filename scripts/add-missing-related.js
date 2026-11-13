#!/usr/bin/env node
/**
 * サイドバーにだけ出ていて本編にない語を、正式ページとして追加する。
 * Ch1 は 17–38 を使うため、既存の page>=21（〜300）を +22 ずらす。
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const content = require('../content.js');

const SHIFT_FROM = 21;
const SHIFT_TO = 300; // Docker(301)より前の連番帯
const SHIFT_BY = 22;

function shiftPages(n) {
  if (typeof n !== 'number') return n;
  if (n >= SHIFT_FROM && n <= SHIFT_TO) return n + SHIFT_BY;
  return n;
}

function shiftAllExisting() {
  for (const ch of content.chapters) {
    for (const e of ch.entries) {
      e.page = shiftPages(e.page);
      if (e.existing_page) e.existing_page = shiftPages(e.existing_page);
      for (const g of e.sidebar_groups || []) {
        for (const item of g.items || []) {
          if (item.page) item.page = shiftPages(item.page);
        }
      }
    }
  }
}

function entry(p) {
  return {
    category: p.category,
    icon: p.icon || 'ic-file',
    compact: true,
    ...p,
  };
}

function related(items) {
  return [{ label: '関連キーワード', items }];
}

// ---- Ch1 Git extras (pages 17–38) ----
const ch1Extras = [
  entry({
    id: 'github', page: 17, term: 'GitHub', reading: 'ギットハブ',
    category: 'バージョン管理・Git', icon: 'ic-server',
    oneline: 'Gitのリモートリポジトリを置いて、人とコードを共有・レビューできるWebサービス。',
    q1_text: '手元のGitだけでは、チームへの共有・レビュー・Issue管理がバラバラになりやすかった。',
    q2_intro: 'ZIPやメールでコードを送り、変更点は口頭やチャットで伝えていた。',
    q2_table: {
      col_before: 'ファイル送付', col_after: 'GitHub',
      rows: [
        ['共有', 'ZIPやメール', 'リモートにpushして共有'],
        ['レビュー', '画面共有や口頭', 'Pull Requestで差分レビュー'],
        ['議論の記録', 'チャットに流れる', 'IssueやPRに残る'],
        ['公開', '別途用意', 'OSS公開の定番の場になる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-users', cap: 'チームで同じ履歴を共有できる' },
      { icon: 'ic-file', cap: '変更を提案・レビューできる' },
      { icon: 'ic-rocket', cap: 'CIやIssueと連携しやすい' },
    ],
    memo: 'Git（道具）とGitHub（置き場＋周辺機能）は別物。\n「GitHubに上がってる」はリモートの話、が多い。',
    sidebar_groups: related([
      { name: 'Repository', desc: 'GitHub上に置く対象。' },
      { name: 'Pull Request', desc: '変更を取り込む提案。' },
      { name: 'Issue', desc: '要望やバグの受け皿。' },
    ]),
  }),
  entry({
    id: 'working-tree', page: 18, term: 'Working Tree', reading: 'ワーキングツリー',
    category: 'バージョン管理・Git', icon: 'ic-laptop',
    oneline: '今エディタで触っている、実際のファイルの状態（作業ディレクトリ）のこと。',
    q1_text: '「コミットした内容」と「今ディスク上にあるファイル」がズレると、何を保存したのか分からなくなる。',
    q2_intro: '保存＝確定、の感覚だけで進めていた。',
    q2_table: {
      col_before: 'ファイル＝真実', col_after: 'Working Tree',
      rows: [
        ['今の状態', '開いているファイル', '作業ツリーとして区別する'],
        ['確定前', '上書き保存のみ', 'ステージやコミットと分離'],
        ['戻す', 'バックアップ頼み', 'checkoutやrestoreで戻せる'],
        ['差分', '目視', 'working treeとHEADのdiff'],
      ],
    },
    q3_cells: [
      { icon: 'ic-laptop', cap: '「今触っている状態」を言葉にできる' },
      { icon: 'ic-file', cap: '未コミット変更の居場所が分かる' },
      { icon: 'ic-undo', cap: '作業中の変更だけ戻せる' },
    ],
    memo: 'Working Tree / Staging Area / Repository（コミット履歴）の三段が分かると、Gitが急に読みやすくなる。',
    sidebar_groups: related([
      { name: 'Staging Area', desc: 'コミット直前の仮置き場。' },
      { name: 'Commit', desc: '確定した履歴の単位。' },
      { name: 'Reset', desc: '作業ツリーやHEADを動かす操作。' },
    ]),
  }),
  entry({
    id: 'origin', page: 19, term: 'Origin', reading: 'オリジン',
    category: 'バージョン管理・Git', icon: 'ic-network',
    oneline: 'git cloneしたときに、自動で付くリモートリポジトリの標準的な名前。',
    q1_text: 'リモートのURLを毎回フルで指定するのはつらい。短い名前で指したい。',
    q2_intro: 'リモートの場所をメモや環境変数に直書きしていた。',
    q2_table: {
      col_before: 'URL直書き', col_after: 'Origin',
      rows: [
        ['指定', '長いURL', 'origin という短い名前'],
        ['clone後', '自分で登録', 'だいたい自動でoriginになる'],
        ['push先', '都度確認', 'originにpushが定番'],
        ['複数リモート', '混乱しやすい', 'origin以外も名前で増やせる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: 'リモートを短い名前で扱える' },
      { icon: 'ic-rocket', cap: 'push/pullの定番相手になる' },
      { icon: 'ic-users', cap: 'upstreamなど別名と使い分けできる' },
    ],
    memo: 'originは「特別なサーバー」ではなく、ただのデフォルト名。\nforkしたら upstream（本家）を足す、がよくある型。',
    sidebar_groups: related([
      { name: 'Clone', desc: 'originが作られる入口。' },
      { name: 'Push', desc: 'originへ送る操作。' },
      { name: 'Upstream', desc: 'fork元など、もう一つのリモート名。' },
    ]),
  }),
  entry({
    id: 'pull-request', page: 20, term: 'Pull Request', reading: 'プルリクエスト',
    category: 'バージョン管理・Git', icon: 'ic-users',
    oneline: '自分の変更を取り込んでほしい、とレビュー付きで提案する仕組み（PR）。',
    q1_text: 'mainに直接pushすると、レビューも議論も残らず、壊したときに取り返しがつきにくい。',
    q2_intro: '完成したと思った時点で本流にマージし、問題は後から気付いていた。',
    q2_table: {
      col_before: '直接マージ', col_after: 'Pull Request',
      rows: [
        ['レビュー', '口頭や事後', '差分を見てから取り込める'],
        ['議論', 'チャットに流れる', 'PR上に残る'],
        ['CI', '手動', 'PRをきっかけに自動実行しやすい'],
        ['権限', '誰でも本流を触る', '提案と承認を分けられる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-users', cap: '変更を提案してレビューできる' },
      { icon: 'ic-check', cap: '議論と履歴が一つの場所に残る' },
      { icon: 'ic-gear', cap: 'CIやデプロイの起点にしやすい' },
    ],
    memo: 'GitLabではMerge Requestと呼ぶことも。中身の発想はほぼ同じ。\n「PR出す」は提案の提出、の意味で使われる。',
    sidebar_groups: related([
      { name: 'Fork', desc: '本家と別に作業するときに使う。' },
      { name: 'Branch', desc: 'PRの土台になる作業枝。' },
      { name: 'Merge', desc: 'PRが通ったあとの取り込み。' },
    ]),
  }),
  entry({
    id: 'upstream', page: 21, term: 'Upstream', reading: 'アップストリーム',
    category: 'バージョン管理・Git', icon: 'ic-network',
    oneline: 'fork元の本家リポジトリなど、「大本」のリモートを指す呼び方。',
    q1_text: 'forkして自分のoriginだけ見ていると、本家の更新を取り込めなくなる。',
    q2_intro: '本家のZIPを取り直したり、originを無理に書き換えたりしていた。',
    q2_table: {
      col_before: 'originだけ', col_after: 'Upstream',
      rows: [
        ['本家の追跡', 'しにくい', 'upstreamとして追加'],
        ['更新の取り込み', '手作業', 'fetchしてmerge/rebase'],
        ['名前', 'URL直書き', '役割が名前で分かる'],
        ['PR先', '迷いやすい', '本家＝upstreamと整理できる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: '本家リモートを名前で区別できる' },
      { icon: 'ic-undo', cap: '本家の更新を自分のforkへ取り込める' },
      { icon: 'ic-users', cap: 'OSS貢献の定番フローが回る' },
    ],
    memo: 'upstreamは「上流」。自分のforkが下流、本家が上流、という感覚。',
    sidebar_groups: related([
      { name: 'Fork', desc: 'upstreamを意識する典型シーン。' },
      { name: 'Origin', desc: '自分のリモート側の名前。' },
      { name: 'Pull Request', desc: 'upstreamへ返す提案。' },
    ]),
  }),
  entry({
    id: 'staging-area', page: 22, term: 'Staging Area', reading: 'ステージングエリア',
    category: 'バージョン管理・Git', icon: 'ic-layers',
    oneline: '次のコミットに入れる変更を、いったん選んで置いておく場所（index）。',
    q1_text: 'ファイルを全部まとめてコミットすると、関係ない変更まで同じ履歴に混ざる。',
    q2_intro: '保存したら全部コミット、か、コミット前にファイルを分けてコピーしていた。',
    q2_table: {
      col_before: '全部まとめて確定', col_after: 'Staging Area',
      rows: [
        ['選択', 'ディレクトリ単位', '変更の塊を選んで載せられる'],
        ['確認', 'コミット後に後悔', 'addの段階でレビューできる'],
        ['分割', '難しい', '論理単位のコミットに分けやすい'],
        ['戻す', 'コミット取り消し', 'unstageで載せ直しできる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-layers', cap: 'コミット内容を選んで組み立てられる' },
      { icon: 'ic-check', cap: '入れる前に差分を確認できる' },
      { icon: 'ic-file', cap: '小さなコミットが作りやすい' },
    ],
    memo: 'git add がステージ、git commit が確定。\n「ステージする」＝次のコミット候補に載せる、の意味。',
    sidebar_groups: related([
      { name: 'Commit', desc: 'ステージした内容を確定する。' },
      { name: 'Working Tree', desc: 'まだステージしていない作業中の状態。' },
      { name: 'Diff', desc: 'ステージ前後の差分を見る。' },
    ]),
  }),
  entry({
    id: 'diff', page: 23, term: 'Diff', reading: 'ディフ',
    category: 'バージョン管理・Git', icon: 'ic-file',
    oneline: '変更の前後で、どこがどう違うかを行単位などで示す差分表示。',
    q1_text: '「直した」と言われても、何が変わったか全文比較しないと分からない。',
    q2_intro: '二つのファイルを目視で見比べていた。',
    q2_table: {
      col_before: '目視比較', col_after: 'Diff',
      rows: [
        ['速度', '遅い', '差分だけに集中できる'],
        ['レビュー', '漏れやすい', '+/-で変化が見える'],
        ['衝突解消', '勘', '両方の差分を見て判断'],
        ['記録', '残らない', 'PRやパッチとして残せる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-file', cap: '変更点だけを素早く読める' },
      { icon: 'ic-users', cap: 'レビューの共通言語になる' },
      { icon: 'ic-check', cap: 'コンフリクト解消の材料になる' },
    ],
    memo: 'git diff は作業ツリー、git diff --staged はステージ済み、と見るところが違う。',
    sidebar_groups: related([
      { name: 'Commit', desc: '差分が固まった単位。' },
      { name: 'Conflict', desc: '差分がぶつかり合う状態。' },
      { name: 'Pull Request', desc: 'diffをレビューする場。' },
    ]),
  }),
  entry({
    id: 'checkout', page: 24, term: 'Checkout', reading: 'チェックアウト',
    category: 'バージョン管理・Git', icon: 'ic-undo',
    oneline: '作業対象のブランチや、特定のファイル状態へ切り替える操作。',
    q1_text: '複数の作業を並行すると、「今どの枝で作業しているか」がすぐ分からなくなる。',
    q2_intro: 'フォルダを分けて別作業し、どれが正か自分で管理していた。',
    q2_table: {
      col_before: 'フォルダ分け', col_after: 'Checkout',
      rows: [
        ['切り替え', '別フォルダを開く', '同じ場所で枝を切り替える'],
        ['履歴', '別々', '同じリポジトリ内でつながる'],
        ['ファイル復元', 'バックアップから', '過去の状態を取り出せる'],
        ['ミス', 'コピー漏れ', '今いる枝を確認する習慣が付く'],
      ],
    },
    q3_cells: [
      { icon: 'ic-undo', cap: '作業枝を素早く切り替えられる' },
      { icon: 'ic-file', cap: '特定ファイルの状態を戻せる' },
      { icon: 'ic-laptop', cap: '並行作業の土台になる' },
    ],
    memo: '新しいGitでは branch切り替えに switch、復元に restore と役割が分かれてきている。\n現場ではまだ checkout と言うことも多い。',
    sidebar_groups: related([
      { name: 'Branch', desc: 'checkoutで切り替える対象。' },
      { name: 'Working Tree', desc: '切り替え後に並ぶファイル群。' },
      { name: 'HEAD', desc: '今いる位置を示すポインタ。' },
    ]),
  }),
  entry({
    id: 'main-master', page: 25, term: 'main / master', reading: 'メイン／マスター',
    category: 'バージョン管理・Git', icon: 'ic-server',
    oneline: 'プロジェクトの本流として扱う、デフォルトブランチの名前。',
    q1_text: '「どれが本番相当の最新か」がチームで揃っていないと、古い枝にPRしてしまう。',
    q2_intro: '本流の名前がチームごとにバラバラで、慣習も文档も口伝だった。',
    q2_table: {
      col_before: '名前が不定', col_after: 'main / master',
      rows: [
        ['共通認識', '都度確認', 'デフォルト枝として共有'],
        ['保護', '誰でも直push', '保護ルールをかけやすい'],
        ['用語', '本流・本番枝', '名前で役割が伝わる'],
        ['移行', '——', 'masterからmainへの改名も増えた'],
      ],
    },
    q3_cells: [
      { icon: 'ic-server', cap: '本流ブランチをチームで揃えられる' },
      { icon: 'ic-check', cap: '保護やCIの対象にしやすい' },
      { icon: 'ic-users', cap: 'PRのマージ先が明確になる' },
    ],
    memo: '最近のGitHubは初期名がmain。古い資料や現場ではmasterのまま、もまだ多い。',
    sidebar_groups: related([
      { name: 'Branch', desc: 'main/masterもブランチの一種。' },
      { name: 'Merge', desc: '本流へ取り込む操作。' },
      { name: 'Pull Request', desc: '本流へ入れる提案。' },
    ]),
  }),
  entry({
    id: 'fetch', page: 26, term: 'Fetch', reading: 'フェッチ',
    category: 'バージョン管理・Git', icon: 'ic-package',
    oneline: 'リモートの更新を取得だけし、自分の作業枝にはまだ取り込まない操作。',
    q1_text: 'pullするとすぐマージまで走るので、先に「何が来たか」だけ見たいときに困る。',
    q2_intro: '更新確認のつもりが、その場で作業中の枝に混ざってしまうことがあった。',
    q2_table: {
      col_before: 'いきなりpull', col_after: 'Fetch',
      rows: [
        ['取得', '取得＋統合', '取得だけ'],
        ['安全', '衝突が突然', '見てから判断できる'],
        ['確認', 'ログが流れる', 'リモート追跡枝を見られる'],
        ['次の一手', '固定', 'mergeでもrebaseでも選べる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: 'リモートの差分を先に取り込める' },
      { icon: 'ic-check', cap: '統合前に内容を確認できる' },
      { icon: 'ic-undo', cap: '取り込み方をあとから選べる' },
    ],
    memo: 'pull ≒ fetch + merge（設定次第ではrebase）。\n「まずfetch」は慎重派の定番。',
    sidebar_groups: related([
      { name: 'Pull', desc: '取得して取り込む一連の操作。' },
      { name: 'Merge', desc: 'fetchのあとに選べる統合。' },
      { name: 'Origin', desc: 'fetchする相手の名前。' },
    ]),
  }),
  entry({
    id: 'force-push', page: 27, term: 'Force Push', reading: 'フォースプッシュ',
    category: 'バージョン管理・Git', icon: 'ic-rocket',
    oneline: 'リモートの履歴を、自分の履歴で強制的に上書きするpush。取り扱い注意。',
    q1_text: 'rebaseやamendで履歴を書き換えたあと、普通のpushが拒否されることがある。',
    q2_intro: '新しいブランチを切り直したり、履歴を諦めて別ルートで出していた。',
    q2_table: {
      col_before: '押し負けて諦める', col_after: 'Force Push',
      rows: [
        ['履歴書き換え後', 'pushできない', '強制上書きできる'],
        ['共有枝', '危険', '他人の作業を消すリスク'],
        ['安全策', '——', '--force-with-lease など'],
        ['運用', '自由', 'mainでは禁止が定番'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: '書き換えた履歴をリモートへ反映できる' },
      { icon: 'ic-check', cap: '個人枝の整理に使える' },
      { icon: 'ic-users', cap: '共有枝ではルール化が必要になる' },
    ],
    memo: '共有ブランチへのforce pushは事故の定番。\nやるなら自分だけの枝、またはチーム合意のうえで。',
    sidebar_groups: related([
      { name: 'Push', desc: '通常の送信。' },
      { name: 'Rebase', desc: 'force pushが必要になりやすい操作。' },
      { name: 'main / master', desc: '通常は保護して禁ずる対象。' },
    ]),
  }),
  entry({
    id: 'fast-forward', page: 28, term: 'Fast-forward', reading: 'ファストフォワード',
    category: 'バージョン管理・Git', icon: 'ic-rocket',
    oneline: '分岐がないとき、本流のポインタを前に進めるだけで済むマージ。',
    q1_text: '枝分かれしていないのに、毎回マージコミットが増えると履歴が読みにくい。',
    q2_intro: '常にマージコミットを作るか、手動でパッチを当てていた。',
    q2_table: {
      col_before: '常にマージコミット', col_after: 'Fast-forward',
      rows: [
        ['分岐なし', '余分なコミット', 'ポインタ移動だけ'],
        ['履歴', 'ギザギザ', '一直線に見える'],
        ['条件', '——', '相手が自分の先頭の先にある'],
        ['できない時', '——', '普通のmergeやrebaseへ'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: '余計なマージコミットを減らせる' },
      { icon: 'ic-file', cap: '一直線の履歴を保てる' },
      { icon: 'ic-check', cap: 'シンプルな取り込みが速くなる' },
    ],
    memo: '「早送り」。動画の再生位置を進めるイメージに近い。\n--no-ff で敢えてマージコミットを残す運用もある。',
    sidebar_groups: related([
      { name: 'Merge', desc: 'fast-forwardもmergeの一種。' },
      { name: 'Branch', desc: '分岐の有無で可否が変わる。' },
      { name: 'Rebase', desc: '一直線に保つ別手法。' },
    ]),
  }),
  entry({
    id: 'head', page: 29, term: 'HEAD', reading: 'ヘッド',
    category: 'バージョン管理・Git', icon: 'ic-cube',
    oneline: '今チェックアウトしているコミット（いまいる位置）を指すポインタ。',
    q1_text: '「今どのコミットを見ているか」が分からないと、resetやrebaseの説明が頭に入らない。',
    q2_intro: '今開いているフォルダが最新、くらいの感覚で進めていた。',
    q2_table: {
      col_before: '今のフォルダ感覚', col_after: 'HEAD',
      rows: [
        ['現在地', '曖昧', '名前で指せる'],
        ['移動', 'ファイルを差し替え', 'HEADが動く'],
        ['detached', '概念なし', 'タグやSHA直指定で起きる'],
        ['説明', '口伝', 'ドキュメントの共通語になる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-cube', cap: '「今いる位置」を言葉にできる' },
      { icon: 'ic-undo', cap: 'resetやrebaseの説明が読める' },
      { icon: 'ic-file', cap: '相対参照（HEAD~1）が使える' },
    ],
    memo: 'HEADは「頭」。今見ている先端。\ndetached HEADは、枝名ではなくコミット直付けで見ている状態。',
    sidebar_groups: related([
      { name: 'Checkout', desc: 'HEADを動かす操作。' },
      { name: 'Reset', desc: 'HEADの位置を付け替える。' },
      { name: 'Rebase', desc: 'HEADの履歴を付け替える操作。' },
    ]),
  }),
  entry({
    id: 'squash', page: 30, term: 'Squash', reading: 'スカッシュ',
    category: 'バージョン管理・Git', icon: 'ic-layers',
    oneline: '複数のコミットを、一つのコミットにまとめること。',
    q1_text: '試行錯誤の細かいコミットが並ぶと、レビューも履歴も読みにくい。',
    q2_intro: '汚い履歴のまま残すか、最初からやり直ししていた。',
    q2_table: {
      col_before: '細かい履歴のまま', col_after: 'Squash',
      rows: [
        ['見た目', 'WIPが並ぶ', '意味のある1コミットに'],
        ['レビュー', 'ノイズが多い', '最終差分に集中できる'],
        ['タイミング', '——', 'rebaseやPRマージ時'],
        ['トレードオフ', '過程が残る', '過程は消える'],
      ],
    },
    q3_cells: [
      { icon: 'ic-layers', cap: '履歴を読みやすくまとめられる' },
      { icon: 'ic-users', cap: 'PRの最終形をきれいにできる' },
      { icon: 'ic-check', cap: '本流を直線的に保ちやすい' },
    ],
    memo: '「つぶす」。過程を残したいか、結果だけ残したいかの選択。',
    sidebar_groups: related([
      { name: 'Rebase', desc: 'interactive rebaseでsquashできる。' },
      { name: 'Commit', desc: 'まとめた結果の単位。' },
      { name: 'Pull Request', desc: 'マージ時squashする運用も多い。' },
    ]),
  }),
  entry({
    id: 'hotfix', page: 31, term: 'Hotfix', reading: 'ホットフィックス',
    category: 'バージョン管理・Git', icon: 'ic-gear',
    oneline: '本番の緊急バグを、通常の開発フローより優先して直す修正のこと。',
    q1_text: '本番障害は待てない。進行中の大きな機能開発とは別に、最短で直す道が必要になる。',
    q2_intro: '本番に直接パッチを当て、あとから開発枝へ忘れずに戻す…が抜けがちだった。',
    q2_table: {
      col_before: '本番へ直接パッチ', col_after: 'Hotfix',
      rows: [
        ['優先度', '他の作業に埋もれる', '緊急枠として切り出せる'],
        ['取り出し', '手作業', 'cherry-pick等で移植'],
        ['記録', '口伝', '専用枝やタグで残せる'],
        ['再発防止', '場当たり', '本流へ戻す手順を決められる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: '緊急修正を本流と分けて扱える' },
      { icon: 'ic-undo', cap: '必要なコミットだけ移植できる' },
      { icon: 'ic-check', cap: 'あとで本流へ戻す手順が明確になる' },
    ],
    memo: '名前は「熱い修正」。落ち着いてから通常フローへ戻すのがセット。',
    sidebar_groups: related([
      { name: 'Cherry-pick', desc: 'hotfixコミットの移植によく使う。' },
      { name: 'Branch', desc: 'hotfix専用枝を切ることが多い。' },
      { name: 'Tag', desc: '修正リリースの目印。' },
    ]),
  }),
  entry({
    id: 'sha', page: 32, term: 'SHA', reading: 'エスエイチエー',
    category: 'バージョン管理・Git', icon: 'ic-cube',
    oneline: 'コミットなどを一意に識別するためのハッシュ値（長い16進数）。',
    q1_text: '「さっきのやつ」では特定できない。コミットを正確に指すIDが必要になる。',
    q2_intro: '日付やメッセージで探して、似たコミットを取り違えることがあった。',
    q2_table: {
      col_before: 'あいまいな指定', col_after: 'SHA',
      rows: [
        ['一意性', '低い', 'ほぼ衝突しないID'],
        ['指定', '言葉で説明', 'ハッシュで正確に指す'],
        ['短縮', '——', '先頭数桁でも実用上足りる'],
        ['用途', '会話', 'cherry-pickやrevertの指定'],
      ],
    },
    q3_cells: [
      { icon: 'ic-cube', cap: 'コミットを正確に指定できる' },
      { icon: 'ic-check', cap: '取り違えを減らせる' },
      { icon: 'ic-gear', cap: '自動化や調査の手がかりになる' },
    ],
    memo: 'GitのコミットIDはSHA-1ベース（移行の議論はある）。\n普段は短い先頭だけで足りることが多い。',
    sidebar_groups: related([
      { name: 'Commit', desc: 'SHAが付く本体。' },
      { name: 'Cherry-pick', desc: 'SHAを指定して取り込む。' },
      { name: 'Revert', desc: '打ち消す対象もSHAで指せる。' },
    ]),
  }),
  entry({
    id: 'merge-tool', page: 33, term: 'マージツール', reading: 'マージツール',
    category: 'バージョン管理・Git', icon: 'ic-monitor',
    oneline: 'コンフリクトした双方の差分を見比べながら、解決を助けるツール。',
    q1_text: '衝突マーカーが並ぶファイルを、テキストだけで直すのは神経を消耗する。',
    q2_intro: '<<<<< を目視で消して、どっちを残すか勘で選んでいた。',
    q2_table: {
      col_before: '手編集', col_after: 'マージツール',
      rows: [
        ['見え方', 'マーカー文字列', '左右（または3ペイン）で比較'],
        ['判断', '疲れやすい', '差分が視覚的'],
        ['ミス', '消し残し', 'ツールがマーカー管理を助ける'],
        ['学習', '怖い', '慣れると速い'],
      ],
    },
    q3_cells: [
      { icon: 'ic-monitor', cap: '衝突箇所を視覚的に比較できる' },
      { icon: 'ic-check', cap: '消し残しなどのミスを減らせる' },
      { icon: 'ic-users', cap: 'チームで同じ解き方を共有しやすい' },
    ],
    memo: 'VS CodeのマージUIや、専用diffツールがこれにあたる。\n「ツールに任せきり」ではなく、最終判断は自分。',
    sidebar_groups: related([
      { name: 'Conflict', desc: 'マージツールの出番。' },
      { name: 'Diff', desc: '比較表示の基本。' },
      { name: 'Merge', desc: '衝突が起きうる操作。' },
    ]),
  }),
  entry({
    id: 'rollback', page: 34, term: 'ロールバック', reading: 'ロールバック',
    category: 'バージョン管理・Git', icon: 'ic-undo',
    oneline: 'システムやデータを、以前の良い状態へ戻すこと（一般用語）。',
    q1_text: 'リリース後に致命的な不具合が出たら、前へ進むより一度戻す方が被害が小さいことがある。',
    q2_intro: 'バックアップから丸ごと戻すか、急ぎの修正を重ねて更に状況を複雑にしていた。',
    q2_table: {
      col_before: '前進のみ', col_after: 'ロールバック',
      rows: [
        ['方針', '修正を急ぐ', 'まず安全な版へ戻す'],
        ['手段', '場当たり', 'デプロイやDBの手順として用意'],
        ['Git操作', '混同しやすい', 'revert等と使い分ける'],
        ['記録', '曖昧', '戻した事実を残せる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-undo', cap: '被害を広げずに前の状態へ戻せる' },
      { icon: 'ic-check', cap: '障害対応の選択肢が増える' },
      { icon: 'ic-clock', cap: '手順化しておくと判断が速い' },
    ],
    memo: 'Gitの revert は「打ち消しコミットを足す」ことが多く、履歴を消すresetとは別物。\n現場の「ロールバック」はデプロイ単位の話も多い。',
    sidebar_groups: related([
      { name: 'Revert', desc: 'Git上で変更を打ち消す操作。' },
      { name: 'Reset', desc: '履歴の位置を付け替える操作。' },
      { name: 'Tag', desc: '戻す先の目印になる。' },
    ]),
  }),
  entry({
    id: 'release-notes', page: 35, term: 'リリースノート', reading: 'リリースノート',
    category: 'バージョン管理・リリース', icon: 'ic-list',
    oneline: 'そのバージョンで何が変わったかを、利用者向けにまとめた文書。',
    q1_text: '「何が変わったの？」にコミットログ全文で答えると、相手も自分もつらい。',
    q2_intro: 'チャットで口頭説明するか、コミットメッセージを貼って終わらせていた。',
    q2_table: {
      col_before: '口頭・生ログ', col_after: 'リリースノート',
      rows: [
        ['読者', '開発者向け', '利用者にも読める'],
        ['粒度', '細かすぎる', '意味のある変化に要約'],
        ['保管', '流れる', 'バージョンごとに残る'],
        ['連携', '弱い', 'TagやChangelogとセット'],
      ],
    },
    q3_cells: [
      { icon: 'ic-list', cap: '変更点を要約して伝えられる' },
      { icon: 'ic-users', cap: '利用者・他チームと認識を揃えられる' },
      { icon: 'ic-tag', cap: 'バージョンの説明が残る' },
    ],
    memo: '完璧な文書より、「壊れる変更／新機能／修正」が分かれるだけでも価値がある。',
    sidebar_groups: related([
      { name: 'Tag', desc: 'ノートが紐づくバージョン目印。' },
      { name: 'セマンティックバージョニング', desc: '番号の意味づけ。' },
      { name: 'Commit', desc: 'ノートの材料になる履歴。' },
    ]),
  }),
  entry({
    id: 'license', page: 36, term: 'ライセンス', reading: 'ライセンス',
    category: 'OSS', icon: 'ic-file',
    oneline: 'そのソフトウェアをどう使ってよいか（改変・再配布・商用など）を定めたルール。',
    q1_text: '他人のコードを使うとき、何をしてよくて何がダメかが分からないと、後で揉め事になる。',
    q2_intro: '「ネットにあったから使った」で済ませ、利用条件を読んでいなかった。',
    q2_table: {
      col_before: '条件を読まない', col_after: 'ライセンス',
      rows: [
        ['利用判断', '勘', '条文で判断できる'],
        ['再配布', '曖昧', '可否が明示される'],
        ['改変', 'グレー', '義務（表示など）が分かる'],
        ['商用', '不安', '許可範囲を確認できる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-file', cap: '使える範囲を事前に確認できる' },
      { icon: 'ic-check', cap: 'OSS利用の事故を減らせる' },
      { icon: 'ic-users', cap: '自分の成果物の条件も明示できる' },
    ],
    memo: 'MIT / Apache-2.0 / GPL など種類で義務が違う。\n「なんとなくオープン」では足りない。',
    sidebar_groups: related([
      { name: 'OSS', desc: 'ライセンスとセットで語られる。' },
      { name: 'コントリビュート', desc: '貢献時もライセンスに従う。' },
      { name: 'メンテナー', desc: 'プロジェクト側の管理者。' },
    ]),
  }),
  entry({
    id: 'maintainer', page: 37, term: 'メンテナー', reading: 'メンテナー',
    category: 'OSS', icon: 'ic-users',
    oneline: 'OSSプロジェクトの方針・レビュー・リリースなどを担う運営側の人。',
    q1_text: '誰でもpushできる状態だと、品質も方向性も保てない。',
    q2_intro: '作者個人の裁量だけに依存し、レビューもリリースも属人化していた。',
    q2_table: {
      col_before: '作者ひとり任せ', col_after: 'メンテナー',
      rows: [
        ['レビュー', '不定期', '役割として引き受ける'],
        ['権限', '曖昧', 'マージ権限などが明確'],
        ['継続', '作者依存', 'チームで引き継げる'],
        ['外部貢献', '届きにくい', '窓口が分かる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-users', cap: 'プロジェクトの意思決定が回る' },
      { icon: 'ic-check', cap: '貢献の受け入れ窓口になる' },
      { icon: 'ic-gear', cap: 'リリースや方針を継続できる' },
    ],
    memo: 'メンテナーは「偉い人」というより、世話を焼く人。\nIssue対応も立派なメンテ業務。',
    sidebar_groups: related([
      { name: 'OSS', desc: 'メンテナーが支える対象。' },
      { name: 'コントリビュート', desc: 'メンテナーがレビューする側。' },
      { name: 'Issue', desc: 'メンテ業務の入口。' },
    ]),
  }),
  entry({
    id: 'issue', page: 38, term: 'Issue', reading: 'イシュー',
    category: 'OSS', icon: 'ic-list',
    oneline: 'バグ報告や要望、タスクをチケットとして残し、議論・追跡する仕組み。',
    q1_text: '不具合や要望がチャットに流れると、対応漏れと認識ズレが起きる。',
    q2_intro: '口頭やDMで伝えて、いつの間にか忘れていた。',
    q2_table: {
      col_before: 'チャット依頼', col_after: 'Issue',
      rows: [
        ['記録', '流れる', 'チケットとして残る'],
        ['議論', '散らばる', 'スレッドで追える'],
        ['優先度', '声が大きい順', 'ラベルやマイルストーン'],
        ['再現', '口頭', '手順を書いて共有'],
      ],
    },
    q3_cells: [
      { icon: 'ic-list', cap: 'バグや要望を漏れなく追える' },
      { icon: 'ic-users', cap: '議論の場がひとつにまとまる' },
      { icon: 'ic-check', cap: '完了までの状態が可視化される' },
    ],
    memo: '良いIssueは「期待／実際／再現手順」がある。\n短いほど、むしろ伝わりやすい。',
    sidebar_groups: related([
      { name: 'Pull Request', desc: 'Issueを閉じる実装提案。' },
      { name: 'コントリビュート', desc: 'Issue起票も貢献の入口。' },
      { name: 'GitHub', desc: 'Issueが付いている代表サービス。' },
    ]),
  }),
];

// ---- other chapters ----
const otherExtras = [
  // Ch10
  entry({
    id: 'factory', page: 522, term: 'Factory', reading: 'ファクトリ',
    category: 'テスト', icon: 'ic-gear', ch: 10,
    oneline: 'テスト用データを、必要な形で動的に生成するための仕組み・パターン。',
    q1_text: 'Fixtureの静的データだけでは、ケースごとに少し違うデータが必要になると管理が破綻する。',
    q2_intro: 'テストごとにハッシュやSQLを手で組み立てていた。',
    q2_table: {
      col_before: '手組みデータ', col_after: 'Factory',
      rows: [
        ['バリエーション', 'コピペ増殖', '引数で差分だけ指定'],
        ['保守', '壊れやすい', '生成口が一箇所'],
        ['可读性', 'ノイズが多い', '意図が残る'],
        ['速度', '——', '必要分だけ作れる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-gear', cap: 'テストデータを柔軟に作れる' },
      { icon: 'ic-file', cap: 'ケースごとの差分が書きやすい' },
      { icon: 'ic-check', cap: 'Fixtureと使い分けできる' },
    ],
    memo: 'FactoryBot などライブラリ名で語られることも。\n「工場で組み立てる」イメージ。',
    sidebar_groups: related([
      { name: 'Fixture', desc: '静的寄りのテストデータ。' },
      { name: 'Unit Test', desc: 'Factoryの出番が多い層。' },
      { name: 'Seeder', desc: 'アプリ側の初期データ投入。' },
    ]),
  }),
  entry({
    id: 'headless', page: 523, term: 'ヘッドレス', reading: 'ヘッドレス',
    category: 'テスト', icon: 'ic-monitor', ch: 10,
    oneline: '画面（GUI）を出さずに、ブラウザやアプリを裏側で動かすモード。',
    q1_text: 'CIのサーバーにディスプレイがない。なのにブラウザ自動操作が必要になる。',
    q2_intro: '手元の画面付きPCでだけE2Eを回し、CIでは諦めていた。',
    q2_table: {
      col_before: '画面あり必須', col_after: 'ヘッドレス',
      rows: [
        ['CI', '難しい', '画面なしで実行できる'],
        ['リソース', '重い', '比較的軽く回しやすい'],
        ['デバッグ', '目で見える', 'スクショやトレースで補う'],
        ['用途', '手元確認', '自動テストの主力'],
      ],
    },
    q3_cells: [
      { icon: 'ic-monitor', cap: 'GUIなしでブラウザ操作を自動化できる' },
      { icon: 'ic-rocket', cap: 'CIに載せやすい' },
      { icon: 'ic-gear', cap: 'E2Eの本番運用に近づける' },
    ],
    memo: 'headless Chrome などが代表例。\n落ちたときは headed（画面あり）で再現すると早い。',
    sidebar_groups: related([
      { name: 'Puppeteer', desc: 'ヘッドレスChrome操作の代表。' },
      { name: 'Playwright', desc: '同様にヘッドレスで回せる。' },
      { name: 'E2E Test', desc: 'ヘッドレスと相性が良い層。' },
    ]),
  }),
  entry({
    id: 'refactoring', page: 524, term: 'リファクタリング', reading: 'リファクタリング',
    category: 'テスト・設計', icon: 'ic-gear', ch: 10,
    oneline: '外部から見た振る舞いを変えずに、内部の構造を読みやすく・変えやすく整えること。',
    q1_text: '動いているコードでも、読みにくいままだと次の変更コストが跳ね上がる。',
    q2_intro: '動くなら触らない、か、機能追加のついでに大きく壊していた。',
    q2_table: {
      col_before: '放置 or 大胆改修', col_after: 'リファクタリング',
      rows: [
        ['振る舞い', '変えがち', '変えずに形だけ直す'],
        ['安全網', '薄い', 'テストがあるほどやりやすい'],
        ['目的', '新機能', '変更容易性'],
        ['粒度', '一気', '小さく繰り返せる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-gear', cap: 'コードを壊さず読みやすくできる' },
      { icon: 'ic-check', cap: '次の機能追加が楽になる' },
      { icon: 'ic-undo', cap: '小さな手順でリスクを抑えられる' },
    ],
    memo: 'TDDの「赤→緑→リファクタ」の最後の段。\nテストがないリファクタは、ただの書き換えになりやすい。',
    sidebar_groups: related([
      { name: 'TDD', desc: 'リファクタを前提にした開発サイクル。' },
      { name: 'Unit Test', desc: '安全に直すための網。' },
      { name: 'デバッグ', desc: '直す前に原因を掴む工程。' },
    ]),
  }),
  entry({
    id: 'log', page: 525, term: 'ログ', reading: 'ログ',
    category: 'テスト・運用', icon: 'ic-list', ch: 10,
    oneline: 'プログラムが残す動作の記録。障害調査やデバッグの手がかりになる。',
    q1_text: '本番ではデバッガを付けられない。再現しない不具合の足跡が必要になる。',
    q2_intro: '画面の見た目とユーザ報告だけを頼りに、勘で直していた。',
    q2_table: {
      col_before: '手がかりなし', col_after: 'ログ',
      rows: [
        ['調査', '推測', '時系列の記録を追える'],
        ['本番', '再現待ち', '残った痕跡から探れる'],
        ['レベル', '全部print', 'info/warn/errorで分けられる'],
        ['過多', '——', '出しすぎると逆に読めない'],
      ],
    },
    q3_cells: [
      { icon: 'ic-list', cap: '障害の手がかりを残せる' },
      { icon: 'ic-clock', cap: 'いつ何が起きたかを追える' },
      { icon: 'ic-check', cap: 'デバッグと運用の共通言語になる' },
    ],
    memo: '「ログを吐く」は現場語。出しすぎ・秘匿情報の混入には注意。',
    sidebar_groups: related([
      { name: 'デバッグ', desc: 'ログを読んで原因に近づく。' },
      { name: 'E2E Test', desc: '失敗時のログが頼りになる。' },
      { name: 'CI/CD', desc: 'パイプラインのログも調査対象。' },
    ]),
  }),
  // Ch12
  entry({
    id: 'grep', page: 619, term: 'grep', reading: 'グレップ',
    category: 'Linux・ターミナル', icon: 'ic-file', ch: 12,
    oneline: 'テキストの中から、条件に合う行を探し出す定番コマンド（系）。',
    q1_text: '大きなログやコードから、目的の文字列を目視で探すのは限界がある。',
    q2_intro: 'エディタの検索だけに頼り、ファイルを一つずつ開いていた。',
    q2_table: {
      col_before: '手検索', col_after: 'grep',
      rows: [
        ['範囲', '開いたファイル', 'ディレクトリ横断も可'],
        ['条件', '固定文字', '正規表現も使える'],
        ['速度', '遅い', '大量テキスト向き'],
        ['連携', '弱い', 'パイプで次の処理へ'],
      ],
    },
    q3_cells: [
      { icon: 'ic-file', cap: '大量テキストから目的行を抜ける' },
      { icon: 'ic-rocket', cap: '正規表現検索の入口になる' },
      { icon: 'ic-gear', cap: 'ログ調査やコード検索に使える' },
    ],
    memo: 'rg（ripgrep）や ag など高速な後継も「grep系」と呼ばれる。\nサイドバーの「grep系」はこの一族の総称。',
    sidebar_groups: related([
      { name: '正規表現', desc: 'grepの条件記述に使う。' },
      { name: 'Terminal', desc: 'grepを打つ場所。' },
      { name: 'ログ', desc: 'grepの代表的な検索対象。' },
    ]),
  }),
  entry({
    id: 'secret', page: 620, term: 'Secret', reading: 'シークレット',
    category: 'Linux・ターミナル', icon: 'ic-cube', ch: 12,
    oneline: 'APIキーやパスワードなど、外に出してはいけない機密情報の扱い・置き場。',
    q1_text: '.envに書いた鍵が、リポジトリやログに混ざると事故になる。',
    q2_intro: '設定ファイルに直書きし、共有もコピーで済ませていた。',
    q2_table: {
      col_before: '直書き・コピペ共有', col_after: 'Secret',
      rows: [
        ['保管', 'コードに混ざる', '秘密管理の仕組みへ分離'],
        ['共有', 'チャット', '権限付きで渡す'],
        ['ローテ', '忘れがち', '手順化しやすい'],
        ['漏洩時', '発覚が遅い', '監査や無効化がしやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-cube', cap: '機密をコードから分離できる' },
      { icon: 'ic-check', cap: '共有と権限を分けられる' },
      { icon: 'ic-gear', cap: 'CIや本番の注入口に使える' },
    ],
    memo: '.envは便利だが「秘密そのものの保管庫」ではない、と覚えると安全。\n本番はSecret Manager等へ、が定石。',
    sidebar_groups: related([
      { name: '.env', desc: 'ローカルでの変数読み込み。' },
      { name: 'Environment Variable', desc: 'Secretの注入先になりやすい。' },
      { name: 'CI/CD', desc: 'パイプライン変数としても扱う。' },
    ]),
  }),
  // Ch14
  entry({
    id: 'ci-cd', page: 705, term: 'CI/CD', reading: 'シーアイ／シーディー',
    category: 'デプロイ・CI/CD', icon: 'ic-rocket', ch: 14,
    oneline: '変更のたびに自動で検証し（CI）、続けて自動で届ける（CD）仕組み。',
    q1_text: '手動テストと手動デプロイだと、統合の不具合発見が遅れ、リリースが怖い行事になる。',
    q2_intro: 'マージ前に手元で確認し、本番反映も手順書どおりに手で行っていた。',
    q2_table: {
      col_before: '手動検証・手動リリース', col_after: 'CI/CD',
      rows: [
        ['検証', '人の記憶頼み', 'pushやPRで自動実行'],
        ['フィードバック', '遅い', '早く落ちて早く直せる'],
        ['デプロイ', '本番作業が行事', 'パイプライン化できる'],
        ['品質', 'ばらつく', '同じ手順を繰り返せる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: '変更の検証を自動化できる' },
      { icon: 'ic-check', cap: '壊れたことに早く気付ける' },
      { icon: 'ic-gear', cap: 'リリース手順を再現できる' },
    ],
    memo: 'CIはContinuous Integration、CDはDeliveryまたはDeployment。\n現場ではまとめて「シーアイシーディー」と呼ぶことが多い。',
    sidebar_groups: related([
      { name: 'DevOps', desc: 'CI/CDを支える文化・実践。' },
      { name: 'Push', desc: 'CIを起動する典型トリガー。' },
      { name: 'スモークテスト', desc: 'パイプラインに載せやすい薄いテスト。' },
    ]),
  }),
  // Ch18
  entry({
    id: 'load-balancer', page: 802, term: 'Load Balancer', reading: 'ロードバランサー',
    category: 'AWS・インフラ', icon: 'ic-network', ch: 18,
    oneline: '来るアクセスを、複数のサーバーへ振り分けて負荷を分散する仕組みの総称。',
    q1_text: 'サーバー一台だと、負荷にも障害にも弱い。複数台に振りたい。',
    q2_intro: 'DNSを手で切り替えたり、特定サーバーに人が集中したりしていた。',
    q2_table: {
      col_before: '単一サーバー', col_after: 'Load Balancer',
      rows: [
        ['負荷', '一点集中', '複数台へ分散'],
        ['障害', '全体停止', '生きている台へ寄せられる'],
        ['スケール', '縦に増強', '横に増やしやすい'],
        ['運用', '手作り', 'ヘルスチェックとセット'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: 'アクセスを複数台へ振り分けられる' },
      { icon: 'ic-check', cap: '一部障害でもサービスを続けやすい' },
      { icon: 'ic-rocket', cap: '台数追加で耐えやすくなる' },
    ],
    memo: 'ALB/NLB/CLBなど種類がある。\n「LB」と略される。',
    sidebar_groups: related([
      { name: 'ALB', desc: 'AWSの代表的なLB。' },
      { name: 'ヘルスチェック', desc: '振り分け先の生死確認。' },
      { name: 'ターゲットグループ', desc: '振り分け先のまとまり。' },
    ]),
  }),
  entry({
    id: 'health-check', page: 803, term: 'ヘルスチェック', reading: 'ヘルスチェック',
    category: 'AWS・インフラ', icon: 'ic-check', ch: 18,
    oneline: 'サーバーやコンテナが正常に応答しているかを、定期的に確かめること。',
    q1_text: '死んでいるサーバーにリクエストを送り続けると、エラーが増えるだけになる。',
    q2_intro: '障害はユーザ報告で知り、該当台を人手で外していた。',
    q2_table: {
      col_before: '人手監視', col_after: 'ヘルスチェック',
      rows: [
        ['検知', '遅い', '定期的に自動確認'],
        ['切り離し', '手動', 'LBが自動で外せる'],
        ['復帰', '忘れる', '回復したら戻せる'],
        ['基準', '曖昧', 'パスやステータスで定義'],
      ],
    },
    q3_cells: [
      { icon: 'ic-check', cap: '異常な台を自動で検知できる' },
      { icon: 'ic-network', cap: '振り分けから外せる' },
      { icon: 'ic-undo', cap: '回復後に戻せる' },
    ],
    memo: '「生きてる？」の定期確認。パスやステータスコードで判定することが多い。',
    sidebar_groups: related([
      { name: 'ALB', desc: 'ヘルスチェック結果で振り分ける。' },
      { name: 'Load Balancer', desc: '総称側。' },
      { name: 'ターゲットグループ', desc: 'チェック対象のまとまり。' },
    ]),
  }),
  entry({
    id: 'target-group', page: 804, term: 'ターゲットグループ', reading: 'ターゲットグループ',
    category: 'AWS・インフラ', icon: 'ic-server', ch: 18,
    oneline: 'ロードバランサーが振り分け先として扱う、サーバーやコンテナのまとまり。',
    q1_text: '振り分けルールと実体の一覧が混ざると、どの台に飛んでいるか追いにくい。',
    q2_intro: 'LBの設定にIPを直書きし、増減のたびに設定を触っていた。',
    q2_table: {
      col_before: '直書きの振り分け先', col_after: 'ターゲットグループ',
      rows: [
        ['管理', '個別', 'グループとして扱う'],
        ['増減', '設定を直接変更', 'グループのメンバーを増減'],
        ['ヘルス', 'バラバラ', 'グループ単位で監視'],
        ['再利用', 'しにくい', 'ルールから参照できる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-server', cap: '振り分け先をひとまとまりで管理できる' },
      { icon: 'ic-check', cap: 'ヘルスチェックとセットで運用できる' },
      { icon: 'ic-gear', cap: 'LBのルールから参照しやすい' },
    ],
    memo: 'AWS ALB用語としてよく出てくる。\n「どこに飛ばすか」の集合。',
    sidebar_groups: related([
      { name: 'ALB', desc: 'ターゲットグループを使うLB。' },
      { name: 'ヘルスチェック', desc: 'グループ内の生死確認。' },
      { name: 'Load Balancer', desc: '上位の総称。' },
    ]),
  }),
  // Ch23
  entry({
    id: 'sql-injection', page: 902, term: 'SQL Injection', reading: 'エスキューエルインジェクション',
    category: 'セキュリティ', icon: 'ic-database', ch: 23,
    oneline: '入力欄にSQL文を紛れ込ませ、データベースを不正に操作する攻撃。',
    q1_text: 'ユーザ入力を文字列連結でSQLにすると、入力が「データ」ではなく「命令」になる。',
    q2_intro: '入力チェックを目視や部分的なエスケープに頼り、抜け道が残っていた。',
    q2_table: {
      col_before: '文字列連結SQL', col_after: '対策後',
      rows: [
        ['入力の扱い', '命令になりうる', 'パラメータとして分離'],
        ['防御', '場当たり', 'プレースホルダが基本'],
        ['被害', 'データ漏洩・破壊', '実行を防げる'],
        ['検知', '遅い', 'WAF等が補助になる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-database', cap: '攻撃手法として名前を知れる' },
      { icon: 'ic-check', cap: 'プレースホルダ等の防御が分かる' },
      { icon: 'ic-gear', cap: 'WAFなど多層防御の対象になる' },
    ],
    memo: '略してSQLi。ORMを使っていても、生SQLを書く場所は要注意。',
    sidebar_groups: related([
      { name: 'WAF', desc: '攻撃通信を検知・遮断する層。' },
      { name: 'SQL', desc: '注入の対象になる言語。' },
      { name: 'XSS', desc: '別系統の代表的なWeb攻撃。' },
    ]),
  }),
  entry({
    id: 'xss', page: 903, term: 'XSS', reading: 'クロスサイトスクリプティング',
    category: 'セキュリティ', icon: 'ic-code', ch: 23,
    oneline: 'サイトに悪意のあるスクリプトを埋め込み、他人のブラウザ上で実行させる攻撃。',
    q1_text: 'ユーザが投稿した内容を、そのままHTMLとして出すと、脚本まで実行されうる。',
    q2_intro: '表示時のエスケープを忘れ、入力チェックだけで安心していた。',
    q2_table: {
      col_before: '生HTML出力', col_after: 'XSS対策',
      rows: [
        ['出力', 'そのまま', 'エスケープ／サニタイズ'],
        ['被害', 'セッション奪取など', '実行を防げる'],
        ['種類', '——', '格納型・反射型など'],
        ['補助', '——', 'CSPやWAF'],
      ],
    },
    q3_cells: [
      { icon: 'ic-code', cap: '代表的なWeb攻撃として把握できる' },
      { icon: 'ic-check', cap: '出力エスケープの重要性が分かる' },
      { icon: 'ic-gear', cap: 'CSPやWAFの話につながる' },
    ],
    memo: 'Cross-Site Scripting。CSSと略すと別物なのでXSS。',
    sidebar_groups: related([
      { name: 'WAF', desc: 'XSS攻撃の検知・遮断を助ける。' },
      { name: 'SQL Injection', desc: '並んで語られる代表攻撃。' },
      { name: 'Cookie', desc: 'XSSの被害対象になりやすい。' },
    ]),
  }),
  entry({
    id: 'firewall', page: 904, term: 'ファイアウォール', reading: 'ファイアウォール',
    category: 'セキュリティ', icon: 'ic-server', ch: 23,
    oneline: 'IPやポートなどの条件で、通信を許可・遮断する防御の仕組み。',
    q1_text: '全部の通信を通すと、不要な入口まで世界に開いてしまう。',
    q2_intro: 'サーバーに直接露出させ、アプリケーション側の努力だけに頼っていた。',
    q2_table: {
      col_before: '全部開ける', col_after: 'ファイアウォール',
      rows: [
        ['入口', '無制限', '必要な通信だけ許可'],
        ['層', 'アプリ頼り', 'ネットワーク層でも防御'],
        ['運用', '場当たり', 'ルールとして管理'],
        ['WAFとの差', '混同', 'L7を見るのがWAF寄り'],
      ],
    },
    q3_cells: [
      { icon: 'ic-server', cap: '不要な通信を遮断できる' },
      { icon: 'ic-check', cap: '許可リストで入口を最小化できる' },
      { icon: 'ic-network', cap: 'WAFなど上位防御と役割分担できる' },
    ],
    memo: '防火壁。古典的なネットワーク防御。\nWAFはWebアプリ向けの、より上位の防火壁イメージ。',
    sidebar_groups: related([
      { name: 'WAF', desc: 'Web向けの応用防火壁。' },
      { name: 'Port', desc: '許可・遮断の単位になりやすい。' },
      { name: 'VPN', desc: '閉じた通信路を作る別手段。' },
    ]),
  }),
];

function findChapter(number) {
  return content.chapters.find(ch => ch.number === number);
}

function ensureChapter(number, title) {
  let ch = findChapter(number);
  if (!ch) {
    ch = { number, title, entries: [] };
    content.chapters.push(ch);
  }
  return ch;
}

function addEntries(chNumber, chTitle, entries) {
  const ch = ensureChapter(chNumber, chTitle);
  const existingIds = new Set(ch.entries.map(e => e.id));
  for (const e of entries) {
    if (existingIds.has(e.id)) {
      console.warn('skip existing id', e.id);
      continue;
    }
    delete e.ch;
    ch.entries.push(e);
  }
}

function resolveName(name, all) {
  return all.find(e => e.term === name)
    || all.find(e => e.term.toLowerCase() === name.toLowerCase())
    || all.find(e => e.reading === name)
    || null;
}

function linkSidebars() {
  const all = [];
  for (const ch of content.chapters) for (const e of ch.entries) if (!e.skip) all.push(e);

  // rename CI -> CI/CD in sidebars
  for (const e of all) {
    for (const g of e.sidebar_groups || []) {
      for (const item of g.items || []) {
        if (item.name === 'CI') item.name = 'CI/CD';
        if (item.name === 'grep系') item.name = 'grep';
      }
    }
  }

  let filled = 0;
  for (const e of all) {
    for (const g of e.sidebar_groups || []) {
      for (const item of g.items || []) {
        const hit = resolveName(item.name, all);
        if (hit) {
          item.page = hit.page;
          filled++;
        }
      }
      // new entries' sidebars also need pages
    }
  }
  // second pass for newly added entries' sidebars
  for (const e of all) {
    for (const g of e.sidebar_groups || []) {
      for (const item of g.items || []) {
        const hit = resolveName(item.name, all);
        if (hit) item.page = hit.page;
      }
    }
  }
  return filled;
}

shiftAllExisting();
addEntries(1, 'Git・GitHub', ch1Extras);
addEntries(10, 'テスト', otherExtras.filter(e => e.ch === 10));
addEntries(12, 'Linux・ターミナル', otherExtras.filter(e => e.ch === 12));
addEntries(14, 'DevOps', otherExtras.filter(e => e.ch === 14));
// CI/CD is more naturally under deploy chapter title
{
  const ch14 = findChapter(14);
  if (ch14) ch14.title = 'デプロイ・CI/CD';
}
addEntries(18, 'AWS', otherExtras.filter(e => e.ch === 18));
addEntries(23, 'セキュリティ', otherExtras.filter(e => e.ch === 23));

const filled = linkSidebars();

fs.writeFileSync(path.join(ROOT, 'content.js'), 'module.exports = ' + JSON.stringify(content, null, 2) + ';\n');

const total = content.chapters.reduce((n, ch) => n + ch.entries.filter(e => !e.skip).length, 0);
console.log('shift: pages', SHIFT_FROM, '-', SHIFT_TO, '+=', SHIFT_BY);
console.log('added Ch1:', ch1Extras.length, '/ others:', otherExtras.length);
console.log('sidebar pages filled (approx):', filled);
console.log('total entries:', total);
