#!/usr/bin/env node
/** Ch11 パッケージ管理・バージョン管理 (550-) */
function entry(partial) {
  return partial;
}

const ch11 = {
  number: 11,
  title: 'パッケージ管理・バージョン管理',
  entries: [
    entry({
      id: 'package',
      page: 550,
      term: 'パッケージ',
      subtitle: '「便利な部品」を配るための梱包単位',
      category: 'パッケージ管理',
      icon: 'ic-package',
      oneline: 'ライブラリやツールを、名前・バージョン・依存関係つきで配布・インストールできる単位にまとめたもの。',
      q1_text: '便利なコードをコピー＆ペーストで持ち回ると、更新もライセンスも追跡できない。\n再利用可能な単位として配る仕組みが必要だった。',
      q2_intro: '他プロジェクトのファイルを丸コピーするか、自前で再実装するのが普通だった。',
      q2_table: {
        col_before: 'コピペ／自前実装',
        col_after: 'パッケージ',
        rows: [
          ['入手', '探す・コピーする', 'レジストリからインストール'],
          ['更新', '手で差し替え', 'バージョン指定で上げられる'],
          ['依存', '見えにくい', '依存関係として明示される'],
          ['共有', '属人的', 'チームで同じ名前を指せる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: '再利用可能な部品を名前で扱える' },
        { icon: 'ic-cloud', cap: '公開レジストリ経由で配布できる' },
        { icon: 'ic-layers', cap: '依存関係を明示して管理できる' },
      ],
      memo: '「パッケージ」はnpmの包、OSのdeb、言語のcrateなど層が違う。\n会話では「どの世界のパッケージか」を先に確認すると事故が減る。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '依存関係', desc: 'パッケージが必要とする他パッケージ。', icon: 'ic-network', page: 551 },
            { name: 'セマンティックバージョニング', desc: 'バージョン番号の約束事。', icon: 'ic-scale', page: 552 },
            { name: 'npm', desc: 'JSの代表的なパッケージマネージャ。', icon: 'ic-package', page: 554 },
          ],
        },
      ],
    }),
    entry({
      id: 'dependency',
      page: 551,
      term: '依存関係',
      subtitle: '「これ動かすには、あれもいる」の一覧',
      category: 'パッケージ管理',
      icon: 'ic-network',
      oneline: 'あるパッケージやプロジェクトが動作するために必要とする、他のパッケージとの関係。',
      q1_text: 'ライブラリは単独では完結せず、さらに別のライブラリを必要とすることが多い。\n何をどの版で使うかを明示しないと、環境ごとに動かなくなった。',
      q2_intro: '「自分のマシンでは動く」が、入れたものが記録されず再現できなかった。',
      q2_table: {
        col_before: '依存が暗黙',
        col_after: '依存関係を宣言',
        rows: [
          ['再現性', '低い', '同じ一覧から再現しやすい'],
          ['更新影響', '見えない', 'ツリーで影響範囲を追える'],
          ['衝突', '実行時に発覚', '解決方針をツールが示す'],
          ['本番', '手作業で揃えがち', 'ロックファイルで固定できる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-network', cap: '必要な部品を明示できる' },
        { icon: 'ic-layers', cap: '間接依存まで追跡できる' },
        { icon: 'ic-scale', cap: 'バージョン衝突に向き合える' },
      ],
      memo: '直接依存より間接依存（transitive）の方が多いのが普通。\nセキュリティアラートの多くは、自分が直接知らない依存から来る。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'パッケージ', desc: '依存の単位。', icon: 'ic-package', page: 550 },
            { name: 'ロックファイル', desc: '解決結果を固定するファイル。', icon: 'ic-file', page: 553 },
            { name: 'セマンティックバージョニング', desc: '互換の期待値を番号で表す。', icon: 'ic-scale', page: 552 },
          ],
        },
      ],
    }),
    entry({
      id: 'semver',
      page: 552,
      term: 'セマンティックバージョニング',
      subtitle: 'MAJOR.MINOR.PATCH に意味を込める',
      category: 'バージョン管理',
      icon: 'ic-scale',
      oneline: 'バージョン番号を major.minor.patch の形で付け、互換性の破り方にルールを持たせる約束（SemVer）。',
      q1_text: '「1.2」と「1.10」のどちらが新しいか、更新して安全かも番号からは読み取れなかった。\n互換の意思表示が番号に必要だった。',
      q2_intro: '日付や気分でバージョンを上げ、利用者はリリースノートを精読するしかなかった。',
      q2_table: {
        col_before: '気分バージョン',
        col_after: 'SemVer',
        rows: [
          ['破壊的変更', '番号から不明', 'MAJORを上げる'],
          ['後方互換の機能追加', '不明', 'MINORを上げる'],
          ['バグ修正', '不明', 'PATCHを上げる'],
          ['依存の指定', '難しい', '^や〜で意図を書ける'],
        ],
      },
      q3_cells: [
        { icon: 'ic-scale', cap: '更新の危険度を番号から推測できる' },
        { icon: 'ic-file', cap: '依存指定にルールを持たせられる' },
        { icon: 'ic-network', cap: 'ライブラリ作者と利用者の契約になる' },
      ],
      memo: '0.x は「まだ壊してもよい」期間、という文化もある。\n逆に major を上げない破壊変更は、信頼を削るショートカット。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'ロックファイル', desc: 'SemVer範囲の解決結果を固定。', icon: 'ic-file', page: 553 },
            { name: '依存関係', desc: 'バージョン範囲が効く場所。', icon: 'ic-network', page: 551 },
            { name: 'npm', desc: 'SemVerが日常になる世界。', icon: 'ic-package', page: 554 },
          ],
        },
      ],
    }),
    entry({
      id: 'lockfile',
      page: 553,
      term: 'ロックファイル',
      subtitle: '「昨日と同じ入り方」を封印するファイル',
      category: 'パッケージ管理',
      icon: 'ic-file',
      oneline: '依存解決の結果（実際に入ったパッケージと版）を記録し、インストールを再現可能にするファイル。',
      q1_text: 'package.json などの範囲指定だけだと、日が変わると別バージョンが入ることがある。\nチームとCIで完全に同じ木が欲しかった。',
      q2_intro: '「だいたい同じ依存」で開発し、本番だけ微妙に違うバージョンで落ちる事故が起きていた。',
      q2_table: {
        col_before: '範囲指定だけ',
        col_after: 'ロックファイルあり',
        rows: [
          ['再現性', 'インストール時点に依存', '同じ結果を再現しやすい'],
          ['CI', '揺れる', '固定できる'],
          ['レビュー', '何が入るか見えにくい', '差分で更新内容が見える'],
          ['コミット', 'し忘れることも', 'リポジトリに含めるのが基本'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: '依存ツリーを固定できる' },
        { icon: 'ic-scale', cap: '環境差による「自分だけ動く」を減らせる' },
        { icon: 'ic-clock', cap: '更新内容を差分としてレビューできる' },
      ],
      memo: 'package-lock.json / yarn.lock / pnpm-lock.yaml / Gemfile.lock / Cargo.lock など仲間が多い。\n消して再生成は最終手段——まず差分を読もう。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '依存関係', desc: 'ロックされる対象。', icon: 'ic-network', page: 551 },
            { name: 'npm', desc: 'package-lock.json の世界。', icon: 'ic-package', page: 554 },
            { name: 'pnpm', desc: 'pnpm-lock.yaml の世界。', icon: 'ic-package', page: 556 },
          ],
        },
      ],
    }),
    entry({
      id: 'npm',
      page: 554,
      term: 'npm',
      subtitle: 'Nodeの荷物を運ぶ、公式の配達便',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'Node.js付属のパッケージマネージャ。npmレジストリからパッケージを入れ、scriptsも実行する。',
      q1_text: 'JSの再利用部品が増えるにつれ、ダウンロード・依存解決・公開を標準化する道具が必要になった。',
      q2_intro: 'スクリプトをファイルで共有するか、Gitリポジトリを직접参照する運用が多かった。',
      q2_table: {
        col_before: '手動入手',
        col_after: 'npm',
        rows: [
          ['インストール', 'ダウンロードして配置', 'npm install で解決'],
          ['メタデータ', 'README頼み', 'package.json に集約'],
          ['実行', 'パスを覚える', 'npm scripts で統一'],
          ['公開', '個別配布', 'レジストリに publish'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'JSパッケージを標準手順で入れられる' },
        { icon: 'ic-file', cap: 'scriptsで開発コマンドを共有できる' },
        { icon: 'ic-cloud', cap: '自作パッケージを公開できる' },
      ],
      memo: 'npmはツール名でありレジストリ名でもある。\nyarn/pnpmに乗り換えても、レジストリはnpmのまま、がよくある構図。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'yarn', desc: '代替クライアントの代表格。', icon: 'ic-package', page: 555 },
            { name: 'pnpm', desc: 'ディスク効率に振る代替。', icon: 'ic-package', page: 556 },
            { name: 'ロックファイル', desc: 'package-lock.json。', icon: 'ic-file', page: 553 },
          ],
        },
      ],
    }),
    entry({
      id: 'yarn',
      page: 555,
      term: 'yarn',
      subtitle: 'npmに対抗して生まれた、もう一つのクライアント',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'Facebook発のJavaScriptパッケージマネージャ。高速化やロックファイル体験を武器に普及した。',
      q1_text: 'npmの当時の速さ・決定性・DXに不満があり、代替クライアントが求められた。',
      q2_intro: 'npm install の遅さと、環境差によるずれが日常だった（当時）。',
      q2_table: {
        col_before: '当時のnpm体験',
        col_after: 'yarn',
        rows: [
          ['ロック', '弱かった時期がある', 'yarn.lock で強く固定'],
          ['速さ', '遅く感じることが', 'キャッシュや並列で改善を狙う'],
          ['UI', '素朴', '進捗やワークスペース体験を強化'],
          ['互換', '——', 'npmレジストリを利用可能'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'JS依存を代替クライアントで管理できる' },
        { icon: 'ic-layers', cap: 'モノレポ（workspaces）運用に乗りやすい' },
        { icon: 'ic-file', cap: 'ロックファイルで再現性を担保できる' },
      ],
      memo: 'Classic と Berry（yarn 2+）で別物感がある。\nチームのREADMEに「どのYarnか」が書いてあると救われる。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'npm', desc: '比較対象でありエコシステムの中心。', icon: 'ic-package', page: 554 },
            { name: 'pnpm', desc: 'もう一つの有力代替。', icon: 'ic-package', page: 556 },
            { name: 'ロックファイル', desc: 'yarn.lock。', icon: 'ic-file', page: 553 },
          ],
        },
      ],
    }),
    entry({
      id: 'pnpm',
      page: 556,
      term: 'pnpm',
      subtitle: '同じパッケージを、ディスク上で賢く共有',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'コンテンツアドレス可能なストアとシンボリックリンクで、依存を効率的に入れるJavaScriptパッケージマネージャ。',
      q1_text: 'プロジェクトごとに node_modules が肥大化し、同じ版の複製がディスクを圧迫した。\n厳密さと節約を両立したかった。',
      q2_intro: 'npm/yarn の flat な node_modules は便利だが、幽霊依存（書いてもないのにrequireできる）も生んだ。',
      q2_table: {
        col_before: '従来の node_modules',
        col_after: 'pnpm',
        rows: [
          ['ディスク', '複製が多い', 'ストア共有で節約'],
          ['幽霊依存', '起きやすい', '厳格で気づきやすい'],
          ['ロック', '各ツール流儀', 'pnpm-lock.yaml'],
          ['モノレポ', '可能', 'workspace が強い'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: '依存インストールのディスク消費を抑えられる' },
        { icon: 'ic-scale', cap: '宣言していない依存に気づきやすい' },
        { icon: 'ic-layers', cap: 'モノレポ運用と相性が良い' },
      ],
      memo: '「pnpmを入れると急にrequireが落ちる」は、幽霊依存を指摘されているサイン。\n直すとプロジェクトは一段きちんとする。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'npm', desc: 'エコシステムの基準点。', icon: 'ic-package', page: 554 },
            { name: '依存関係', desc: '厳格さの対象。', icon: 'ic-network', page: 551 },
            { name: 'ロックファイル', desc: 'pnpm-lock.yaml。', icon: 'ic-file', page: 553 },
          ],
        },
      ],
    }),
    entry({
      id: 'pip',
      page: 557,
      term: 'pip',
      subtitle: 'Pythonの「とりあえず入れる」定番コマンド',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'Pythonの標準的なパッケージインストーラ。PyPIからパッケージを取得して環境に入れる。',
      q1_text: 'Pythonの第三者ライブラリを、手作業でパスに置く運用は限界だった。\n標準の入れ方が必要になった。',
      q2_intro: 'ソースをダウンロードして setup.py を叩くか、OSのパッケージに頼っていた。',
      q2_table: {
        col_before: '手動配置',
        col_after: 'pip',
        rows: [
          ['入手', '探して展開', 'pip install で取得'],
          ['版管理', '曖昧', 'requirements やロックで固定'],
          ['環境', 'システム全体を汚しがち', 'venvと組み合わせるのが定石'],
          ['公開', '個別', 'PyPIへアップロードする流れ'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'PyPIのパッケージを簡単に入れられる' },
        { icon: 'ic-file', cap: 'requirements.txt で一覧共有できる' },
        { icon: 'ic-layers', cap: '仮想環境と組み合わせて隔離できる' },
      ],
      memo: 'pipだけだと「環境の分離」はしてくれない。\nvenv / pyenv / poetry / uv などとセットで語られることが多い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'pyenv', desc: 'Python本体のバージョン管理。', icon: 'ic-layers', page: 566 },
            { name: 'パッケージ', desc: 'pipが扱う単位。', icon: 'ic-package', page: 550 },
            { name: 'ロックファイル', desc: '詩やuvなど上位ツール側で強化されがち。', icon: 'ic-file', page: 553 },
          ],
        },
      ],
    }),
    entry({
      id: 'gem',
      page: 558,
      term: 'gem',
      subtitle: 'Rubyの宝石箱から部品を取り出す',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'Rubyのパッケージ（gem）を管理する仕組み。RubyGemsと、Bundlerによるアプリ単位の固定がセットで語られる。',
      q1_text: 'Rubyのライブラリ流通が増え、インストールとバージョン衝突を標準化したかった。',
      q2_intro: 'ライブラリを手で配置し、requireパスと格闘していた。',
      q2_table: {
        col_before: '手動ライブラリ管理',
        col_after: 'gem / Bundler',
        rows: [
          ['インストール', '配置とパス設定', 'gem install / bundle install'],
          ['アプリの固定', '難しい', 'Gemfile.lock で再現'],
          ['公開', '個別配布', 'RubyGems.org へ'],
          ['衝突', '実行時に発覚', '解決をツールが支援'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'Rubyライブラリを標準手順で入れられる' },
        { icon: 'ic-file', cap: 'Gemfileでアプリの依存を宣言できる' },
        { icon: 'ic-layers', cap: 'Railsなど生態系の前提になる' },
      ],
      memo: '日常会話の「gem」はパッケージ自体、「gemコマンド」は操作ツール。\nアプリ開発では Bundler 前提で考えると現場に近い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'rbenv', desc: 'Ruby本体のバージョン管理。', icon: 'ic-layers', page: 565 },
            { name: 'ロックファイル', desc: 'Gemfile.lock。', icon: 'ic-file', page: 553 },
            { name: 'Rails', desc: 'gem生態系の巨大ユーザー。', icon: 'ic-cube', page: 177 },
          ],
        },
      ],
    }),
    entry({
      id: 'cargo',
      page: 559,
      term: 'cargo',
      subtitle: 'Rustの公式・ビルドもテストも届ける万能箱',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'Rustの公式パッケージマネージャ兼ビルドツール。crates.ioからの依存取得とビルドを一体で担う。',
      q1_text: '言語が新しくても、依存取得・ビルド・テストがバラバラだと学習コストが跳ねる。\n最初から一体のツールチェーンが望まれた。',
      q2_intro: '他言語のように、ビルドシステムとパッケージマネージャを別々に学ぶ必要があった。',
      q2_table: {
        col_before: 'ツール分裂モデル',
        col_after: 'cargo',
        rows: [
          ['依存', '別ツール', 'Cargo.toml で宣言'],
          ['ビルド', '別システム', 'cargo build'],
          ['テスト', '別ランナーが多い', 'cargo test が標準'],
          ['公開', '手順が多様', 'cargo publish へ一本化'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'crate依存を公式手順で管理できる' },
        { icon: 'ic-rocket', cap: 'ビルドとテストを同じCLIで回せる' },
        { icon: 'ic-file', cap: 'Cargo.lockで再現ビルドしやすい' },
      ],
      memo: 'Rustを入れるとだいたいcargoも一緒に来る。\n「言語＋cargo」がセットの学習単位、と覚えると早い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'パッケージ', desc: 'crateと呼ばれる単位。', icon: 'ic-package', page: 550 },
            { name: 'ロックファイル', desc: 'Cargo.lock。', icon: 'ic-file', page: 553 },
            { name: 'Rust', desc: 'cargoの宿主言語。', icon: 'ic-file', page: 176 },
          ],
        },
      ],
    }),
    entry({
      id: 'go-mod',
      page: 560,
      term: 'go mod',
      subtitle: 'Goモジュールで依存をプロジェクトに根付かせる',
      category: '言語別パッケージマネージャ',
      icon: 'ic-package',
      oneline: 'Goのモジュールモードで依存を管理する仕組み。go.mod / go.sum が中心になる。',
      q1_text: 'GOPATH時代は配置場所とバージョン管理が独特で、再現や複数版共存がつらかった。\nモジュール単位の依存管理が必要になった。',
      q2_intro: 'すべてのGoコードをGOPATH配下に置き、版は「今取れた最新」に近い感覚になりがちだった。',
      q2_table: {
        col_before: 'GOPATH時代',
        col_after: 'go mod',
        rows: [
          ['配置', 'GOPATH必須感', 'どこでもモジュールにできる'],
          ['版', '曖昧になりやすい', 'go.modで明示'],
          ['改ざん検知', '弱い', 'go.sumで検証'],
          ['再現', '環境依存', 'モジュール単位で揃えやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'モジュールとして依存を宣言できる' },
        { icon: 'ic-file', cap: 'go.sumで取得内容を検証できる' },
        { icon: 'ic-layers', cap: 'GOPATHから解放された開発ができる' },
      ],
      memo: 'コマンドとしては go get / go mod tidy などが日常。\n「go modules」全体を指して「go mod」と言うことも多い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '依存関係', desc: 'go.modに書く対象。', icon: 'ic-network', page: 551 },
            { name: 'セマンティックバージョニング', desc: 'モジュール版の基本感覚。', icon: 'ic-scale', page: 552 },
            { name: 'Go', desc: '宿主言語。', icon: 'ic-file', page: 173 },
          ],
        },
      ],
    }),
    entry({
      id: 'homebrew',
      page: 561,
      term: 'Homebrew',
      subtitle: 'macOSに、足りないコマンドを淹れる',
      category: 'OSパッケージマネージャ',
      icon: 'ic-package',
      oneline: 'macOS（とLinux）で人気のパッケージマネージャ。brew install で開発ツールを入れられる。',
      q1_text: 'MacでUNIX系ツールを入れようとすると、公式以外の手段がばらばらだった。\nコミュニティ主導の統一的な入れ方が欲しかった。',
      q2_intro: 'ソースビルドや、サイトごとのインストーラを集めるのが日常だった。',
      q2_table: {
        col_before: '個別インストーラ',
        col_after: 'Homebrew',
        rows: [
          ['入れ方', 'サイトごとに違う', 'brew install で統一'],
          ['更新', '個別', 'brew upgrade でまとめて'],
          ['アンインストール', '残骸が残りやすい', '手順が比較的明確'],
          ['開発体験', '環境構築が長い', 'オンボーディングが短い'],
        ],
      },
      q3_cells: [
        { icon: 'ic-laptop', cap: '開発ツールをコマンド一発で入れられる' },
        { icon: 'ic-package', cap: 'GUIアプリ（Cask）も扱える' },
        { icon: 'ic-clock', cap: 'チームのMac環境構築を揃えやすい' },
      ],
      memo: '「まずbrew入れて」はMac開発者の儀式。\n権限とパス（Apple Siliconの /opt/homebrew）は初見殺しポイント。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'apt', desc: 'Debian/Ubuntu側の定番。', icon: 'ic-package', page: 562 },
            { name: 'mise', desc: '言語ランタイム版管理の上位互換寄り。', icon: 'ic-layers', page: 563 },
            { name: 'パッケージ', desc: 'brewが配る単位。', icon: 'ic-package', page: 550 },
          ],
        },
      ],
    }),
    entry({
      id: 'apt',
      page: 562,
      term: 'apt',
      subtitle: 'Debian系Linuxの公式なお買い物カゴ',
      category: 'OSパッケージマネージャ',
      icon: 'ic-server',
      oneline: 'Debian/Ubuntuなどで使うパッケージ管理コマンド。OSのソフトウェアを安全に入れたり更新したりする。',
      q1_text: 'Linuxにソフトを入れる方法がソースビルド中心だと、依存地獄と更新追従がつらい。\nディストリ公式の解決が必要だった。',
      q2_intro: 'tarballを展開して ./configure && make が通過儀礼だった。',
      q2_table: {
        col_before: 'ソースからの導入',
        col_after: 'apt',
        rows: [
          ['依存解決', '自分で集める', 'パッケージマネージャが解決'],
          ['更新', '手作業', 'apt upgrade で追従'],
          ['削除', '残骸管理が難しい', 'アンインストール手順がある'],
          ['信頼', 'ダウンロード元まちまち', 'ディストリのリポジトリ'],
        ],
      },
      q3_cells: [
        { icon: 'ic-server', cap: 'OSのソフトウェアを標準手順で管理できる' },
        { icon: 'ic-scale', cap: 'セキュリティ更新を追従しやすい' },
        { icon: 'ic-package', cap: 'サーバー構築を自動化しやすい' },
      ],
      memo: 'apt はフロントエンド、実体には dpkg などが控える。\nコンテナのDockerfileでも最もよく見るコマンドの一つ。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Homebrew', desc: 'Mac側の類似体験。', icon: 'ic-package', page: 561 },
            { name: 'パッケージ', desc: 'debなどの単位。', icon: 'ic-package', page: 550 },
            { name: 'Shell', desc: 'aptを叩く場所（Ch12）。', icon: 'ic-monitor', page: 601 },
          ],
        },
      ],
    }),
    entry({
      id: 'mise',
      page: 563,
      term: 'mise',
      subtitle: '言語の版管理を、一つの道具にまとめる',
      category: 'ランタイムバージョン管理',
      icon: 'ic-layers',
      oneline: 'asdf互換の開発環境マネージャ。NodeやPythonなど複数言語のバージョンをまとめて切り替える。',
      q1_text: 'nvm、rbenv、pyenv…とツールが増え、シェル設定がパンパンになった。\n一つの仕組みでランタイムを揃えたかった。',
      q2_intro: '言語ごとに別のバージョンマネージャを入れ、それぞれの初期化スクリプトを.zshrcに並べていた。',
      q2_table: {
        col_before: '言語別ツール乱立',
        col_after: 'mise',
        rows: [
          ['設定', 'ツールごとに初期化', 'まとめて管理しやすい'],
          ['プロジェクト', '各ツールの記法', '.tool-versions 等で共有'],
          ['速さ', '起動が重くなりがち', '体感の軽さを売りにする実装'],
          ['範囲', '言語ごと', '複数ランタイム＋タスクも'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: '複数言語の版を一箇所で切り替えられる' },
        { icon: 'ic-file', cap: 'プロジェクトの必要版をファイルで共有できる' },
        { icon: 'ic-rocket', cap: 'シェル起動を軽く保ちやすい' },
      ],
      memo: '旧名は rtx。asdf プラグイン生態系を活かせるのが強い。\n「新しいnvm」ではなく「版管理の統合層」と捉えるとよい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'nvm', desc: 'Node特化の先輩。', icon: 'ic-layers', page: 564 },
            { name: 'rbenv', desc: 'Ruby特化。', icon: 'ic-layers', page: 565 },
            { name: 'pyenv', desc: 'Python特化。', icon: 'ic-layers', page: 566 },
          ],
        },
      ],
    }),
    entry({
      id: 'nvm',
      page: 564,
      term: 'nvm',
      subtitle: 'Nodeの版を、ディレクトリ気分で着替る',
      category: 'ランタイムバージョン管理',
      icon: 'ic-layers',
      oneline: 'Node Version Manager。シェル上で複数のNode.jsバージョンをインストールし、切り替えて使う。',
      q1_text: 'プロジェクトごとに要求するNodeの版が違い、システムの単一Nodeでは足りなくなった。',
      q2_intro: '公式インストーラやOSパッケージで入れたNodeを、全プロジェクトで共有していた。',
      q2_table: {
        col_before: 'システムに一つのNode',
        col_after: 'nvm',
        rows: [
          ['複数版', '難しい', '并存して切り替え'],
          ['プロジェクト', '手動で合わせる', '.nvmrc で自動寄りに'],
          ['入れ直し', '大ごと', '版単位で追加・削除'],
          ['影響範囲', 'OS全体', 'ユーザー環境に閉じやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: 'プロジェクトごとにNode版を合わせられる' },
        { icon: 'ic-package', cap: '新しいLTSを試しやすい' },
        { icon: 'ic-file', cap: '.nvmrcで版を共有できる' },
      ],
      memo: 'fnm / volta / mise など後継・代替も多い。\n概念学習の入口としてnvmはまだ強い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'mise', desc: '多言語をまとめる上位互換寄り。', icon: 'ic-layers', page: 563 },
            { name: 'npm', desc: '切り替えたNodeに付いてくるマネージャ。', icon: 'ic-package', page: 554 },
            { name: 'Node.js', desc: '対象ランタイム。', icon: 'ic-server', page: 143 },
          ],
        },
      ],
    }),
    entry({
      id: 'rbenv',
      page: 565,
      term: 'rbenv',
      subtitle: 'Rubyの版を、プロジェクトの床に置く',
      category: 'ランタイムバージョン管理',
      icon: 'ic-layers',
      oneline: '複数のRubyバージョンをユーザー環境に入れ、ディレクトリごとに切り替えるツール。',
      q1_text: 'Railsアプリごとに必要なRubyが違い、システムRubyを上げ下げすると他が壊れた。',
      q2_intro: 'OSのRubyや、RVMの重い魔法に頼るか、コンテナで逃げるかが選択肢だった。',
      q2_table: {
        col_before: 'システムRuby一本',
        col_after: 'rbenv',
        rows: [
          ['複数版', '衝突しやすい', 'shimで切り替え'],
          ['プロジェクト', '手動', '.ruby-version で指定'],
          ['思想', '——', '薄いラッパを好む'],
          ['gem', '混ざりやすい', '版ごとに分離しやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: 'アプリごとにRuby版を固定できる' },
        { icon: 'ic-file', cap: '.ruby-versionでチーム共有できる' },
        { icon: 'ic-package', cap: 'gem環境の汚染を抑えやすい' },
      ],
      memo: 'ruby-build とセットで入れるのが定番。\n「薄い」が売りなので、足りない機能はプラグインやmise側に寄る。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'gem', desc: 'Rubyパッケージ側。', icon: 'ic-package', page: 558 },
            { name: 'mise', desc: 'rbenv代替になりうる統合ツール。', icon: 'ic-layers', page: 563 },
            { name: 'Rails', desc: '版固定が重要な代表アプリ。', icon: 'ic-cube', page: 177 },
          ],
        },
      ],
    }),
    entry({
      id: 'pyenv',
      page: 566,
      term: 'pyenv',
      subtitle: 'Pythonの版を、要求どおりに切り出す',
      category: 'ランタイムバージョン管理',
      icon: 'ic-layers',
      oneline: '複数のPythonバージョンをインストールし、グローバルやプロジェクト単位で切り替えるツール。',
      q1_text: 'システムPythonはOSが使うため、プロジェクト都合で上げ下げしづらい。\nユーザー空間に別版を持ちたかった。',
      q2_intro: 'aptのpython3や公式インストーラ一本でまかない、venvだけでもがいていた。',
      q2_table: {
        col_before: 'システムPython頼み',
        col_after: 'pyenv',
        rows: [
          ['複数版', 'つらい', '并存して切り替え'],
          ['OSへの影響', '怖い', 'ユーザー環境に分離'],
          ['指定', '手動', '.python-version など'],
          ['venvとの関係', '——', '本体版＋venvの二段が定石'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: 'プロジェクト要求のPython版を入れられる' },
        { icon: 'ic-scale', cap: 'OSのPythonを汚さずに済む' },
        { icon: 'ic-file', cap: '版ファイルでチームの前提を共有できる' },
      ],
      memo: 'pipの話と混同しやすいが、pyenvは「Python本体の版」、pipは「部品」。\nmiseに寄せる流れもあるが、概念は同じ。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'pip', desc: '入れたPythonの上で動くインストーラ。', icon: 'ic-package', page: 557 },
            { name: 'mise', desc: '統合版管理。', icon: 'ic-layers', page: 563 },
            { name: 'Python', desc: '対象言語。', icon: 'ic-file', page: 172 },
          ],
        },
      ],
    }),
  ],
};

module.exports = { ch11 };
