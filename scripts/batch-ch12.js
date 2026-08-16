#!/usr/bin/env node
/** Ch12 Linux・ターミナル (600-) */
function entry(partial) {
  return partial;
}

const ch12 = {
  number: 12,
  title: 'Linux・ターミナル',
  entries: [
    entry({
      id: 'terminal',
      page: 600,
      term: 'Terminal',
      subtitle: '文字でコンピュータと話す窓口',
      category: 'ターミナル基礎',
      icon: 'ic-monitor',
      oneline: 'キーボード入力と文字出力でOSやプログラムとやり取りするための端末（エミュレータ含む）のこと。',
      q1_text: 'GUIだけでは自動化やリモート作業、細かい制御がしづらい。\n文字の入出力で機械を直接操る窓口が必要だった。',
      q2_intro: '全部をマウスとウィンドウで操作し、繰り返し作業も手でやっていた。',
      q2_table: {
        col_before: 'GUIだけの操作',
        col_after: 'Terminal',
        rows: [
          ['自動化', 'マクロや手作業', 'コマンドとスクリプトで再現'],
          ['リモート', '画面転送が重いことも', 'SSHで文字だけ届く'],
          ['記録', '操作履歴が残らない', '履歴やログに残しやすい'],
          ['学習曲線', '低い入口', '最初は記号の海'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '文字コマンドでOSを操作できる' },
        { icon: 'ic-rocket', cap: '同じ操作をスクリプトにできる' },
        { icon: 'ic-network', cap: 'リモートサーバー作業の入口になる' },
      ],
      memo: '「ターミナル」は窓、「シェル」はその中で動く通訳、と分けると迷子になりにくい。\n黒い画面そのものが怖い対象ではない。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Shell', desc: 'コマンドを解釈して実行するプログラム。', icon: 'ic-file', page: 601 },
            { name: 'Bash', desc: '定番のシェル。', icon: 'ic-file', page: 602 },
            { name: 'Ghostty', desc: '端末エミュレータの一例。', icon: 'ic-monitor', page: 617 },
          ],
        },
      ],
    }),
    entry({
      id: 'shell',
      page: 601,
      term: 'Shell',
      subtitle: 'コマンドを受け取り、OSに橋渡しする殻',
      category: 'ターミナル基礎',
      icon: 'ic-file',
      oneline: 'ユーザーが打ったコマンド行を解釈し、プログラム起動やパイプなどの制御を行うインターフェースプログラム。',
      q1_text: 'カーネルに直接話すのはつらい。人間向けの対話層として、コマンドを受け付ける殻が必要だった。',
      q2_intro: '決まったメニュー操作か、個別アプリのGUIだけが入口だった。',
      q2_table: {
        col_before: 'メニュー操作中心',
        col_after: 'Shell',
        rows: [
          ['表現力', '用意された操作', 'コマンドの組み合わせが自由'],
          ['パイプ', 'アプリ間が閉じる', '標準入出力でつなげる'],
          ['環境', '見えにくい', '変数やPATHで制御'],
          ['種類', '——', 'Bash / Zsh など選択できる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: 'コマンド行を解釈して実行できる' },
        { icon: 'ic-layers', cap: 'パイプやリダイレクトで処理を組める' },
        { icon: 'ic-package', cap: 'シェルスクリプトで手順をファイル化できる' },
      ],
      memo: '貝殻（shell）の中に核（kernel）がある、という比喩が名前の由来寄り。\n「シェルを変える」と「ターミナルを変える」は別の話。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Bash', desc: '広く使われるシェル。', icon: 'ic-file', page: 602 },
            { name: 'Zsh', desc: 'macOSデフォルトになったシェル。', icon: 'ic-file', page: 603 },
            { name: 'PATH', desc: 'コマンド検索パス。', icon: 'ic-network', page: 604 },
          ],
        },
      ],
    }),
    entry({
      id: 'bash',
      page: 602,
      term: 'Bash',
      subtitle: 'Linuxサーバーでいちばん遭遇する方言',
      category: 'シェル',
      icon: 'ic-file',
      oneline: 'Bourne Again SHell。Linuxやスクリプト文化で標準に近い位置にいるシェル。',
      q1_text: '古いBourne shellの互換を保ちつつ、実用的な機能を足した対話・スクリプト用シェルが必要だった。',
      q2_intro: 'shの最小主義か、ベンダーごとの独自シェルに分かれていた。',
      q2_table: {
        col_before: '素のsh／独自シェル',
        col_after: 'Bash',
        rows: [
          ['普及', '環境差が大きい', 'Linuxで事実上の共通語'],
          ['スクリプト', '機能が限られることも', '配列や関数などが実用的'],
          ['学習資源', '分散', '事例と記事が圧倒的'],
          ['対話', '素朴', '補完や履歴も実用レベル'],
        ],
      },
      q3_cells: [
        { icon: 'ic-server', cap: 'サーバー上の作業・スクリプトの共通土台になる' },
        { icon: 'ic-file', cap: 'シェルスクリプトを書きやすい' },
        { icon: 'ic-package', cap: 'CIやコンテナの入口コマンドになりやすい' },
      ],
      memo: 'スクリプト先頭の #!/bin/bash は「このファイルはBashで読んで」の宣言。\n#!/bin/sh との違いで刺さるバグは、あるあるの関門。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Zsh', desc: '対話体験で選ばれやすい兄弟。', icon: 'ic-file', page: 603 },
            { name: 'Shell', desc: '上位概念。', icon: 'ic-file', page: 601 },
            { name: 'Cron', desc: 'Bashスクリプトの実行タイミング役。', icon: 'ic-clock', page: 609 },
          ],
        },
      ],
    }),
    entry({
      id: 'zsh',
      page: 603,
      term: 'Zsh',
      subtitle: '補完が賢く、見た目も整えやすいシェル',
      category: 'シェル',
      icon: 'ic-file',
      oneline: '高機能なUNIXシェル。強力な補完やテーマ文化で、対話利用のデファクト寄りになった。',
      q1_text: '毎日打つシェルなら、補完・履歴・見た目の快適さが生産性に直結する。\nBashより対話体験を盛った選択肢が求められた。',
      q2_intro: 'サーバーではBash、手元もBashのまま、補完の弱さを我慢していた。',
      q2_table: {
        col_before: 'Bash中心の対話',
        col_after: 'Zsh',
        rows: [
          ['補完', '十分だが素朴', '強力で拡張しやすい'],
          ['カスタム', '可能', 'フレームワーク文化が厚い'],
          ['macOS', 'かつてはBash', '近年はZshがデフォルト'],
          ['スクリプト移植', '——', 'Bashとの差分に注意'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '日々のコマンド入力を快適にできる' },
        { icon: 'ic-layers', cap: 'プラグインで体験を拡張できる' },
        { icon: 'ic-file', cap: 'プロンプトやテーマを整えられる' },
      ],
      memo: 'Oh My Zsh は入門の加速装置であり、同時に起動の重さの原因にもなりうる。\nスクリプトの共有はBash寄りに書く、は無難な分割。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Bash', desc: 'スクリプト共通語。', icon: 'ic-file', page: 602 },
            { name: 'Terminal', desc: 'Zshを表示する窓。', icon: 'ic-monitor', page: 600 },
            { name: 'PATH', desc: '設定をいじりがちな場所。', icon: 'ic-network', page: 604 },
          ],
        },
      ],
    }),
    entry({
      id: 'path',
      page: 604,
      term: 'PATH',
      subtitle: '「どの部屋からコマンドを探す？」の名簿',
      category: '環境',
      icon: 'ic-network',
      oneline: 'シェルがコマンド名だけで実行ファイルを探すとき、順番に見て回るディレクトリのリスト（環境変数）。',
      q1_text: '毎回フルパスを打つのはつらい。一方で同名コマンドが複数あると、どれが起動するかも制御したい。',
      q2_intro: '実行ファイルの場所を全部覚えて、絶対パスで起動していた（あるいは起動できずにいた）。',
      q2_table: {
        col_before: 'フルパス必須',
        col_after: 'PATH',
        rows: [
          ['起動', '場所を指定', '名前だけで探せる'],
          ['優先順位', '——', '左（先）に書いた方が勝つ'],
          ['トラブル', '見つからない', 'PATH漏れが原因の常連'],
          ['版管理', '——', 'shimの仕組みと組み合わさる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-network', cap: 'コマンド名だけで起動できる' },
        { icon: 'ic-layers', cap: 'どの実行ファイルが選ばれるかを制御できる' },
        { icon: 'ic-pen', cap: '「command not found」を診断できる' },
      ],
      memo: 'which や type で「実際にどれが呼ばれるか」を確認するのが基本技。\nPATHを通す＝名簿に部屋を追加する、イメージ。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Environment Variable', desc: 'PATHもその一種。', icon: 'ic-file', page: 606 },
            { name: 'Shell', desc: 'PATHを見てコマンドを探す主体。', icon: 'ic-file', page: 601 },
            { name: 'mise', desc: 'shim経由でPATH体験に介入（Ch11）。', icon: 'ic-layers', page: 563 },
          ],
        },
      ],
    }),
    entry({
      id: 'ssh',
      page: 605,
      term: 'SSH',
      subtitle: '遠くのサーバーに、暗号化してログインする',
      category: 'リモートアクセス',
      icon: 'ic-network',
      oneline: 'Secure Shell。ネットワーク経由で遠隔マシンに安全にログインしたり、コマンドを実行したりするプロトコル／道具。',
      q1_text: '遠隔管理でtelnetのような平文通信は盗聴に弱い。\n暗号化されたリモートシェルが必要だった。',
      q2_intro: '同じ部屋のコンソールか、平文の遠隔ログイン、あるいはVPN＋別手段に頼っていた。',
      q2_table: {
        col_before: '平文リモート／現地作業',
        col_after: 'SSH',
        rows: [
          ['通信', '覗かれやすい', '暗号化される'],
          ['認証', 'パスワードのみが多い', '鍵認証が定石'],
          ['用途', 'ログイン中心', 'ポート転送やファイル転送も'],
          ['自動化', '難しい', 'CIやデプロイの土台になる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-network', cap: '遠隔サーバーに安全に入れる' },
        { icon: 'ic-scale', cap: '鍵認証でパスワード配布を減らせる' },
        { icon: 'ic-package', cap: 'scp/sftpやトンネルにも使える' },
      ],
      memo: '「SSHする」は動詞化している。\n鍵の権限（chmod 600）を忘れると、突然入れなくなる儀式がある。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Terminal', desc: 'SSHセッションを映す窓。', icon: 'ic-monitor', page: 600 },
            { name: 'VPN', desc: '網全体をトンネルする別手段（Ch2）。', icon: 'ic-network', page: 40 },
            { name: 'Daemon', desc: 'sshd として常駐する側。', icon: 'ic-server', page: 610 },
          ],
        },
      ],
    }),
    entry({
      id: 'environment-variable',
      page: 606,
      term: 'Environment Variable',
      subtitle: 'プロセスに渡す「設定の名札」',
      category: '環境',
      icon: 'ic-file',
      oneline: 'OSやシェルがプロセスに渡す、名前＝値の設定情報。コードを変えずに振る舞いを切り替えるのに使う。',
      q1_text: '環境ごとに接続先や秘密情報を切り替えたいが、コードに直書きすると危険で配布できない。\n外側から注入する箱が必要だった。',
      q2_intro: '設定をソースコード定数や、マシンごとの手作り設定ファイルに埋め込んでいた。',
      q2_table: {
        col_before: 'コードに直書き',
        col_after: '環境変数',
        rows: [
          ['環境差', 'ビルドや分岐が増える', '値だけ差し替え'],
          ['秘密情報', 'リポジトリに混入しやすい', '環境側に置ける'],
          ['継承', '——', '子プロセスへ渡せる'],
          ['可視性', 'コードを読めば見える', '実行環境を見ないと分からない'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: '設定をコードから外に出せる' },
        { icon: 'ic-layers', cap: '開発／本番で値を切り替えられる' },
        { icon: 'ic-scale', cap: '秘密情報の取り回し口にできる' },
      ],
      memo: 'export した瞬間から子プロセスの世界が変わる。\n「コードにある真実」と「環境にある真実」の二重管理には注意。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '.env', desc: '環境変数をファイルで扱う慣習。', icon: 'ic-file', page: 618 },
            { name: 'PATH', desc: '代表的な環境変数。', icon: 'ic-network', page: 604 },
            { name: 'Process', desc: '変数を受け取る実行主体。', icon: 'ic-cube', page: 607 },
          ],
        },
      ],
    }),
    entry({
      id: 'process',
      page: 607,
      term: 'Process',
      subtitle: 'いま動いているプログラムの「個体」',
      category: 'OSの実行単位',
      icon: 'ic-cube',
      oneline: '実行中のプログラムのインスタンス。メモリ空間やPIDなどの資源を持ち、OSに管理される。',
      q1_text: '同じプログラムでも、同時に複数動かしたり、個別に止めたりしたい。\n「実行中の個体」という単位が必要だった。',
      q2_intro: 'コンピュータは一度に一つの作業、あるいはアプリ単位の粗い管理しか意識しなかった。',
      q2_table: {
        col_before: 'アプリ＝動いているもの',
        col_after: 'Process',
        rows: [
          ['識別', 'ウィンドウの見た目', 'PIDなどで一意に管理'],
          ['隔離', '弱い理解', 'メモリ空間が分かれる'],
          ['終了', '閉じる', 'シグナルで制御できる'],
          ['親子', '見えにくい', '起動関係を追える'],
        ],
      },
      q3_cells: [
        { icon: 'ic-cube', cap: '動いているプログラムを個体として扱える' },
        { icon: 'ic-pen', cap: '問題のプロセスだけを調査・終了できる' },
        { icon: 'ic-server', cap: 'サーバー上の多重実行を理解できる' },
      ],
      memo: '「プロセスが死ぬ／殺す」は語彙章への伏線。\nps / top / kill はこの概念の実地訓練。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Thread', desc: 'プロセスの中の実行の流れ。', icon: 'ic-layers', page: 608 },
            { name: 'Daemon', desc: '常駐するプロセスの形態。', icon: 'ic-server', page: 610 },
            { name: 'SSH', desc: '遠隔でプロセスを扱う入口。', icon: 'ic-network', page: 605 },
          ],
        },
      ],
    }),
    entry({
      id: 'thread',
      page: 608,
      term: 'Thread',
      subtitle: '一つのプロセスの中の、並行する手',
      category: 'OSの実行単位',
      icon: 'ic-layers',
      oneline: 'プロセス内で並行に走れる実行の流れ。メモリ空間を共有しつつ、スタックなどを別々に持つ。',
      q1_text: '待ち時間のあいだも他の作業を進めたいが、プロセスを増やすと重くて共有も面倒。\nもっと軽い並行単位が必要だった。',
      q2_intro: '重い処理はプロセスを増やすか、順番待ちするか、のどちらかになりがちだった。',
      q2_table: {
        col_before: 'プロセス増殖／逐次',
        col_after: 'Thread',
        rows: [
          ['生成コスト', '高い', '相対的に軽い'],
          ['メモリ', '基本分離', '共有が前提'],
          ['同期', 'IPCが必要', 'ロックなど社内同期が必要'],
          ['失敗の影響', 'プロセス単位', '共有破壊が響きやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: '待ちを隠して並行処理できる' },
        { icon: 'ic-rocket', cap: 'マルチコアを活かしやすい' },
        { icon: 'ic-scale', cap: '共有データの競合に向き合える' },
      ],
      memo: '「スレッドセーフ」は、共有するならルールが要るという警告灯。\n言語によっては緑スレッドやasyncが別解になる。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Process', desc: 'スレッドの入れ物。', icon: 'ic-cube', page: 607 },
            { name: 'Lock', desc: '共有資源の交通整理（Ch6）。', icon: 'ic-scale', page: 95 },
            { name: '非同期', desc: '並行の別モデル（Ch7）。', icon: 'ic-clock', page: 138 },
          ],
        },
      ],
    }),
    entry({
      id: 'cron',
      page: 609,
      term: 'Cron',
      subtitle: '「毎朝3時にやって」をOSに頼む',
      category: 'ジョブスケジューラ',
      icon: 'ic-clock',
      oneline: '指定した時刻・周期でコマンドやスクリプトを自動実行する、UNIX系の定番ジョブスケジューラ。',
      q1_text: 'バックアップや集計を人の手と目覚ましに頼ると忘れる。\n時計駆動で機械にやらせたかった。',
      q2_intro: '担当者が出勤してから手でスクリプトを回すか、常駐プログラムを自作していた。',
      q2_table: {
        col_before: '人手／自作常駐',
        col_after: 'Cron',
        rows: [
          ['起動タイミング', '人が覚える', 'crontabで宣言'],
          ['記述', '口頭・メモ', '分時日月曜のフィールド'],
          ['失敗通知', '気づきにくい', 'メールやログ設計が必要'],
          ['分散', '1台前提になりやすい', 'どのマシンのcronかを意識'],
        ],
      },
      q3_cells: [
        { icon: 'ic-clock', cap: '定期バッチを自動実行できる' },
        { icon: 'ic-file', cap: '運用タスクを宣言的に残せる' },
        { icon: 'ic-server', cap: 'サーバーメンテの定番手段になる' },
      ],
      memo: 'タイムゾーンと夏時間で一度は泣く。\nクラウドでは「マネージドな定期実行」に置き換わることも多いが、概念は同じ。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Daemon', desc: 'cron自体も常駐サービス。', icon: 'ic-server', page: 610 },
            { name: 'Bash', desc: 'よく実行されるスクリプトの中身。', icon: 'ic-file', page: 602 },
            { name: 'Process', desc: '起動される実行主体。', icon: 'ic-cube', page: 607 },
          ],
        },
      ],
    }),
    entry({
      id: 'daemon',
      page: 610,
      term: 'Daemon',
      subtitle: '裏方として常駐し続けるプロセス',
      category: 'OSの実行形態',
      icon: 'ic-server',
      oneline: 'ユーザー操作に紐づかず、バックグラウンドで待ち受け・定期作業などを行う常駐プロセス。',
      q1_text: 'WebサーバーやSSHのように、「誰かがログインしている間だけ」では足りないサービスがある。\n常に待機する裏方が必要だった。',
      q2_intro: '必要なときだけプログラムを起動し、終わったら終了——が基本モデルだった。',
      q2_table: {
        col_before: '都度起動のプログラム',
        col_after: 'Daemon',
        rows: [
          ['寿命', '作業と一緒に終わる', '長く常駐する'],
          ['対話', 'ユーザーと向き合う', '裏で待ち受ける'],
          ['管理', '手元で起動', 'サービスマネージャで管理'],
          ['例', 'CLIツール', 'sshd / cron / nginx など'],
        ],
      },
      q3_cells: [
        { icon: 'ic-server', cap: 'サービスを常時待ち受けさせられる' },
        { icon: 'ic-clock', cap: '定期・イベント駆動の裏方を置ける' },
        { icon: 'ic-layers', cap: 'systemdなどで起動管理できる' },
      ],
      memo: '名前はギリシャ神話のダイモーン（守護霊）由来とされる。\nWindowsでいうサービスに近い感覚。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Process', desc: 'デーモンもプロセスの一種。', icon: 'ic-cube', page: 607 },
            { name: 'SSH', desc: 'sshd が代表例。', icon: 'ic-network', page: 605 },
            { name: 'Cron', desc: '定期実行のデーモン利用。', icon: 'ic-clock', page: 609 },
          ],
        },
      ],
    }),
    entry({
      id: 'regex',
      page: 611,
      term: '正規表現',
      subtitle: '文字列の模様を、記号で狩る',
      category: 'テキスト処理',
      icon: 'ic-pen',
      oneline: '文字列のパターンを簡潔に記述し、検索・置換・抽出に使う表記法（と、それを解釈するエンジン）。',
      q1_text: 'ログやテキストから「メールっぽいもの」「数字3桁」を人手で拾うのは限界。\n模様でマッチする言語が必要だった。',
      q2_intro: '完全一致検索か、プログラミングのループで一文字ずつ判定していた。',
      q2_table: {
        col_before: '完全一致／手書き判定',
        col_after: '正規表現',
        rows: [
          ['柔軟性', '低い', 'パターンで幅を持たせられる'],
          ['記述量', 'コードが長くなりがち', '短い式で表現できることも'],
          ['可読性', '——', '書きすぎると暗号になる'],
          ['用途', '単純検索', 'grep / バリデーション / 置換'],
        ],
      },
      q3_cells: [
        { icon: 'ic-pen', cap: '複雑な文字列条件を短く書ける' },
        { icon: 'ic-file', cap: 'ログ抽出や一括置換ができる' },
        { icon: 'ic-scale', cap: '入力バリデーションの道具になる' },
      ],
      memo: '「正規表現でパース」はHTML相手だと有名な罠。\nまずは ^ $ . * + ? [] () の最小セットから。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'grep系', desc: '正規表現検索の代表コマンド（近い言葉）。', icon: 'ic-file' },
            { name: 'Vim', desc: '正規表現置換が強い編集器。', icon: 'ic-pen', page: 615 },
            { name: 'Shell', desc: 'パイプと組み合わせて使う舞台。', icon: 'ic-file', page: 601 },
          ],
        },
      ],
    }),
    entry({
      id: 'permission',
      page: 612,
      term: 'パーミッション',
      subtitle: '誰が、読む・書く・実行できるかの鍵',
      category: '権限',
      icon: 'ic-scale',
      oneline: 'ファイルやディレクトリに対し、ユーザ／グループ／その他が読み書き実行できるかを表す権限設定。',
      q1_text: '多人で使うUNIXでは、他人の秘密ファイルを読めたり、システムファイルを消せてしまっては困る。\nアクセス制御の基本単位が必要だった。',
      q2_intro: '単一ユーザー前提か、物理的に触れる人だけが操作できる、という世界だった。',
      q2_table: {
        col_before: '権限の概念が薄い',
        col_after: 'パーミッション',
        rows: [
          ['制御', 'ほぼ全部可能', 'rwxを主体に制限'],
          ['表記', '——', '記号（rwx）や8進数（755）'],
          ['所有', '曖昧', 'user/groupが紐づく'],
          ['事故', '消し放題', '権限不足／過剰の両方に注意'],
        ],
      },
      q3_cells: [
        { icon: 'ic-scale', cap: 'ファイルアクセスを主体ごとに制限できる' },
        { icon: 'ic-file', cap: 'chmod/chownで制御できる' },
        { icon: 'ic-server', cap: 'サーバー公開時の最小権限を設計できる' },
      ],
      memo: 'chmod 777 は「とりあえず動いた」の代名詞であり、本番では警鐘。\nディレクトリの実行ビットは「中に入れるか」の意味になる点が初見殺し。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'SSH', desc: '秘密鍵ファイルの権限が厳しい。', icon: 'ic-network', page: 605 },
            { name: '.env', desc: '中身を守る権限設計が重要。', icon: 'ic-file', page: 618 },
            { name: 'Process', desc: 'どのユーザー権限で走るかが効く。', icon: 'ic-cube', page: 607 },
          ],
        },
      ],
    }),
    entry({
      id: 'ping',
      page: 613,
      term: 'ping',
      subtitle: '向こうは生きてる？ の最小確認',
      category: 'ネットワーク診断',
      icon: 'ic-network',
      oneline: 'ICMPなどで相手ホストに応答を求め、到達性と往復時間を見る基本的なネットワーク診断コマンド。',
      q1_text: '「繋がらない」の原因が相手ダウンなのか、自分側なのか、経路なのか切り分けたい。\n最短の生存確認が必要だった。',
      q2_intro: 'アプリを開いて失敗するか、人に「今どう？」と聞くか、しかなかった。',
      q2_table: {
        col_before: 'アプリ失敗だけ見る',
        col_after: 'ping',
        rows: [
          ['確認粒度', 'アプリ全体', 'ホスト到達の最小単位'],
          ['遅延', '体感', 'RTTが数値で見える'],
          ['切り分け', '曖昧', 'ネットワーク層の第一手'],
          ['限界', '——', 'ICMPが塞がれると無力'],
        ],
      },
      q3_cells: [
        { icon: 'ic-network', cap: '相手ホストの生存を素早く確認できる' },
        { icon: 'ic-clock', cap: '遅延の目安を測れる' },
        { icon: 'ic-pen', cap: '障害切り分けの第一手にできる' },
      ],
      memo: 'pingが通らなくても、HTTPは通ることがある（ICMPブロック）。\n万能ではないが、それでも最初の一打になりやすい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'curl', desc: 'アプリ層の到達確認。', icon: 'ic-network', page: 614 },
            { name: 'IP Address', desc: 'pingの宛先（Ch2）。', icon: 'ic-network', page: 29 },
            { name: 'DNS', desc: '名前解決の次に疑うポイント（Ch2）。', icon: 'ic-network', page: 27 },
          ],
        },
      ],
    }),
    entry({
      id: 'curl',
      page: 614,
      term: 'curl',
      subtitle: 'URLを、コマンド一行で持ってくる',
      category: 'ネットワーク診断',
      icon: 'ic-network',
      oneline: 'HTTPなど様々なプロトコルでデータを送受信できるコマンドラインツール。API確認の定番。',
      q1_text: 'ブラウザなしで、HTTPのリクエスト／レスポンスを再現・確認したかった。\nスクリプトからも同じ手段が欲しかった。',
      q2_intro: 'ブラウザの開発者ツールか、専用GUIクライアントに頼っていた。',
      q2_table: {
        col_before: 'ブラウザ／GUIクライアント',
        col_after: 'curl',
        rows: [
          ['再現', '手順が重い', '一行で同じリクエスト'],
          ['自動化', 'しづらい', 'シェルからすぐ呼べる'],
          ['ヘッダ', 'GUIで設定', '-H などで明示'],
          ['学習', '画面操作', 'HTTPの生に近い感触'],
        ],
      },
      q3_cells: [
        { icon: 'ic-network', cap: 'APIをターミナルから叩ける' },
        { icon: 'ic-file', cap: 'ヘッダや本文を細かく制御できる' },
        { icon: 'ic-rocket', cap: 'スクリプトやCIに組み込める' },
      ],
      memo: 'コピーしたcurl例の -H Authorization をそのままチャットに貼る事故に注意。\n「叩く」という語彙の実演会場でもある。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'HTTP', desc: 'curlが最もよく話す相手（Ch2）。', icon: 'ic-network', page: 25 },
            { name: 'ping', desc: 'もっと下の層の生存確認。', icon: 'ic-network', page: 613 },
            { name: 'API', desc: 'curlで試す対象（Ch4）。', icon: 'ic-cloud', page: 61 },
          ],
        },
      ],
    }),
    entry({
      id: 'vim',
      page: 615,
      term: 'Vim',
      subtitle: 'モードがある、指先のテキスト格闘技',
      category: '開発ツール',
      icon: 'ic-pen',
      oneline: 'モード型の高機能テキストエディタ。サーバー上での編集や、キー操作での高速編集文化の象徴。',
      q1_text: '遠いサーバーにはGUIエディタが無いことが多い。\n端末の中で十分に戦える編集器が必要だった。',
      q2_intro: 'nanoのような簡易編集か、ファイルを手元に持ち帰って編集して戻していた。',
      q2_table: {
        col_before: '簡易編集／往復転送',
        col_after: 'Vim',
        rows: [
          ['操作', 'メニューや矢印', 'モード＋キーバインド'],
          ['学習', '低い', '初期コストが高い'],
          ['速度', '普通', '慣れると手が速い'],
          ['存在感', '——', 'サーバーにほぼ必ずある文化'],
        ],
      },
      q3_cells: [
        { icon: 'ic-pen', cap: 'SSH先でも本格的にファイルを編集できる' },
        { icon: 'ic-rocket', cap: 'キー操作で編集を高速化できる' },
        { icon: 'ic-file', cap: '設定やマクロで自分用に育てられる' },
      ],
      memo: '終了方法（:q）がミームになるほど、入口の儀式が有名。\nVSCodeのVimキーバインドで徐々に慣れるルートもある。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Terminal', desc: 'Vimが動く場所。', icon: 'ic-monitor', page: 600 },
            { name: 'SSH', desc: 'Vimが真価を発揮する遠隔作業。', icon: 'ic-network', page: 605 },
            { name: '正規表現', desc: '置換でよく使う道具。', icon: 'ic-pen', page: 611 },
          ],
        },
      ],
    }),
    entry({
      id: 'markdown',
      page: 616,
      term: 'Markdown',
      subtitle: 'プレーンテキストのまま、見出しを付ける',
      category: '開発ツール',
      icon: 'ic-file',
      oneline: 'シンプルな記号で見出しやリストを表し、HTMLなどへ変換できる軽量マークアップ。',
      q1_text: '文書をリッチにしたいが、Wordや生HTMLは重すぎる／うるさすぎる。\n読み書きしやすい中間が欲しかった。',
      q2_intro: 'プレーンテキストの無機質さか、WYSIWYGの重いファイルかの二択になりがちだった。',
      q2_table: {
        col_before: 'プレーン／Word／HTML',
        col_after: 'Markdown',
        rows: [
          ['読みやすさ', '記号が多いか・バイナリ', 'テキストのまま構造が見える'],
          ['差分', 'つらいことも', 'Gitと相性が良い'],
          ['変換', '——', 'HTMLやPDFへ落とせる'],
          ['方言', '——', 'Flavor差には注意'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: 'READMEや仕様を軽く構造化できる' },
        { icon: 'ic-layers', cap: 'Git上でレビューしやすい文書にできる' },
        { icon: 'ic-cloud', cap: 'ドキュメントサイトの入力形式になる' },
      ],
      memo: 'GitHub Flavored Markdown（GFM）を基準に覚えると実務に近い。\n表やタスクリストは方言側の機能。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'HTML', desc: 'よく変換される先（Ch7）。', icon: 'ic-file', page: 121 },
            { name: 'Vim', desc: 'Markdownを編集する道具の一例。', icon: 'ic-pen', page: 615 },
            { name: 'Repository', desc: 'README.mdの置き場（Ch1）。', icon: 'ic-server', page: 1 },
          ],
        },
      ],
    }),
    entry({
      id: 'ghostty',
      page: 617,
      term: 'Ghostty',
      subtitle: '速さ志向の、新しい端末エミュレータ',
      category: '開発ツール',
      icon: 'ic-monitor',
      oneline: 'GPUなどを活用して滑らかさと速さを狙った、比較的新しいクロスプラットフォームな端末エミュレータ。',
      q1_text: 'ターミナルは毎日開く仕事道具なのに、描画の遅れや設定の古臭さがストレスになる。\n現代的で速い端末が求められた。',
      q2_intro: 'OS標準端末や、長年使われてきた定番エミュレータで十分、と我慢する選択が多かった。',
      q2_table: {
        col_before: '標準／旧来の端末',
        col_after: 'Ghostty',
        rows: [
          ['描画', '十分だが遅延を感じることも', '速さ・滑らかさを売りにする'],
          ['設定', '環境ごとに流儀', '現代的な設定体験を狙う'],
          ['互換', '——', '既存のシェルやTUIとそのまま共存'],
          ['位置づけ', '付属品', '選ぶ趣味道具'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '日常のターミナル体験を快適にできる' },
        { icon: 'ic-rocket', cap: '描画や応答の体感を改善できる' },
        { icon: 'ic-layers', cap: '既存のシェル文化のまま乗り換えられる' },
      ],
      memo: '端末はシェルではない。Ghosttyを変えても中のBash/Zshは別問題。\n好みの世界なので、チームの標準にする必要は薄い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Terminal', desc: 'Ghosttyが実装する役割。', icon: 'ic-monitor', page: 600 },
            { name: 'Shell', desc: '中で動く通訳。', icon: 'ic-file', page: 601 },
            { name: 'Zsh', desc: 'きれいなプロンプトと相性良し。', icon: 'ic-file', page: 603 },
          ],
        },
      ],
    }),
    entry({
      id: 'dotenv',
      page: 618,
      term: '.env',
      subtitle: '秘密と設定を、ファイルに置いて読み込む慣習',
      category: '環境',
      icon: 'ic-file',
      oneline: '環境変数を KEY=VALUE 形式で並べた設定ファイル。アプリ起動時に読み込んで使う慣習的な仕組み。',
      q1_text: '環境変数を毎回手でexportするのはつらいし、チームで共有したい「例」も必要。\nファイルとして扱う慣習が広まった。',
      q2_intro: 'シェルのプロファイルに直書きするか、デプロイ先の管理画面にだけ値を置いていた。',
      q2_table: {
        col_before: '手export／画面だけの設定',
        col_after: '.env',
        rows: [
          ['ローカル開発', '手順が属人的', 'ファイルを置けば揃いやすい'],
          ['共有', 'しづらい', '.env.example でキーだけ共有'],
          ['危険', '——', '本物の.envをGitに上げる事故'],
          ['本番', 'ファイル置きがち', 'シークレットマネージャへ寄せるのが本式'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: '環境変数をファイルで扱える' },
        { icon: 'ic-layers', cap: '開発環境の立ち上げを揃えやすい' },
        { icon: 'ic-scale', cap: 'キー一覧をexampleで共有できる' },
      ],
      memo: '.env は便利だが、コミットしない／権限を絞る／本番は別管理、が三点セット。\n「Environment Variableの隣」に置かれるのはこのため。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Environment Variable', desc: '.envが注入する先。', icon: 'ic-file', page: 606 },
            { name: 'パーミッション', desc: 'ファイルを守る権限。', icon: 'ic-scale', page: 612 },
            { name: 'Secret', desc: '本番での本式管理（セキュリティ章）。', icon: 'ic-scale' },
          ],
        },
      ],
    }),
  ],
};

module.exports = { ch12 };
