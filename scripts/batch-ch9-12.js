#!/usr/bin/env node
/**
 * Ch2/Ch6/Ch13 の欠落語 + Ch9〜12 を content.js にマージする。
 * 実行: node scripts/batch-ch9-12.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const content = require(path.join(ROOT, 'content.js'));

function entry(partial) {
  return partial;
}

const intranet = entry({
  id: 'intranet',
  page: 44,
  term: 'イントラネット',
  subtitle: 'インターネットの「社内版」閉じた世界',
  category: 'ネットワーク構成',
  icon: 'ic-network',
  oneline: 'インターネットと同じ技術を使いながら、社内など限られた範囲だけで閉じたネットワークのこと。',
  q1_text: '社内の文書やシステムを、部外者に見せずに社員同士で共有したかった。\nインターネットにそのまま置くのは危険で、専用の閉じた網が必要だった。',
  q2_intro: '紙や社内サーバの共有フォルダだけで情報を回しており、Webの便利さは社外のサイトだけのものだった。',
  q2_table: {
    col_before: '閉じた共有だけだった頃',
    col_after: 'イントラネットがある世界',
    rows: [
      ['情報の置き場', '紙・共有フォルダ・口頭', '社内Web・ポータルで参照'],
      ['アクセス範囲', '物理的に社内にいる人だけ', '認証付きで社内網から閲覧'],
      ['更新のしやすさ', '配布や貼り替えが必要', 'ページを直せばすぐ反映'],
      ['外との関係', '社外ネットとは別物', '同じWeb技術で内側だけ閉じる'],
    ],
  },
  q3_cells: [
    { icon: 'ic-monitor', cap: '社内向けのWebサービスを置ける' },
    { icon: 'ic-scale', cap: '部外者に見せずに情報共有できる' },
    { icon: 'ic-network', cap: 'インターネットと同じ技術で学べる' },
  ],
  memo: '「インタネット」と聞こえても、多くの場合は「イントラネット」の話。\n社内Wikiや勤怠システムはだいたいこの世界の住人。',
  sidebar_groups: [
    {
      label: '関連キーワード',
      items: [
        { name: 'VPN', desc: '外からイントラネットへ安全に入るトンネル。', icon: 'ic-network', page: 40 },
        { name: 'Proxy', desc: '社内から外へ出るときの中継役。', icon: 'ic-monitor', page: 43 },
      ],
    },
  ],
});

const dump = entry({
  id: 'dump',
  page: 116,
  term: 'ダンプ（Dump）',
  subtitle: 'データベースの「中身ごと書き出し」',
  category: 'データベース・運用',
  icon: 'ic-file',
  oneline: 'テーブルの定義やデータの中身を、ファイルとして丸ごと書き出すこと（またはそのファイル）。',
  q1_text: '本番のデータを別環境に移したり、障害時に戻したりするには、DBの中身をファイルとして持ち出せる必要があった。',
  q2_intro: 'ダンプという発想の前は、必要な行を手でSELECTしてCSVにしたり、サーバごとコピーしたりしていた。',
  q2_table: {
    col_before: '手作業での持ち出し',
    col_after: 'ダンプで一括書き出し',
    rows: [
      ['取得単位', '必要な表を個別に抽出', 'スキーマごと・DBごと書き出せる'],
      ['再現性', '手順が人依存になりやすい', '同じコマンドで何度でも取れる'],
      ['復元', 'INSERTを手で組み立てる', 'ダンプファイルを流し込めば復元'],
      ['用途', 'ちょっとした確認向き', 'バックアップ・移行・検証データに'],
    ],
  },
  q3_cells: [
    { icon: 'ic-package', cap: 'DBのスナップショットをファイルにできる' },
    { icon: 'ic-clock', cap: '障害時にバックアップから戻せる' },
    { icon: 'ic-laptop', cap: '本番相当のデータを開発環境に持ち込める' },
  ],
  memo: 'mysqldump や pg_dump の「dump」は、まさにこのダンプ。\n個人情報入りのダンプをそのままチャットに貼るのは事故の定番ルート。',
  sidebar_groups: [
    {
      label: '関連キーワード',
      items: [
        { name: 'Migration', desc: 'スキーマ変更をコードとして管理する仕組み。', icon: 'ic-file', page: 92 },
        { name: 'Seeder', desc: '初期データやテスト用データを流し込む仕組み。', icon: 'ic-package', page: 93 },
      ],
    },
  ],
});

const network = entry({
  id: 'network',
  page: 317,
  term: 'Network',
  subtitle: 'コンテナ同士が「同じ部屋」で話せる仕組み',
  category: 'コンテナ・ネットワーク',
  icon: 'ic-network',
  oneline: 'Docker上でコンテナ同士や外の世界をつなぐ、仮想的なネットワークの単位。',
  q1_text: 'コンテナを起動しても、名前解決や通信経路がバラバラだとアプリ同士がつながらない。\n「どのコンテナが同じ網にいるか」を明示する仕組みが必要だった。',
  q2_intro: 'ネットワークを意識する前は、ホストのIPやポート番号を直書きしてコンテナ間をつないでいた。',
  q2_table: {
    col_before: 'ホスト依存のつなぎ方',
    col_after: 'Docker Network',
    rows: [
      ['名前解決', 'IPやポートを覚える', 'コンテナ名で呼び合える'],
      ['分離', '全部が同じ平面に見えがち', '網ごとに通信範囲を分けられる'],
      ['Composeとの相性', '手動で橋渡し', 'networks: で宣言すればつながる'],
      ['外への公開', '全部ホスト経由になりやすい', '必要なポートだけ公開できる'],
    ],
  },
  q3_cells: [
    { icon: 'ic-network', cap: 'コンテナ同士を名前でつなげる' },
    { icon: 'ic-layers', cap: '環境ごとに通信範囲を分離できる' },
    { icon: 'ic-cube', cap: 'Composeと組み合わせて構成を宣言できる' },
  ],
  memo: 'bridge / host / none などドライバの種類がある。\nまずは「同じ network に乗せる＝会話できる部屋に入れる」と覚えると楽。',
  sidebar_groups: [
    {
      label: '関連キーワード',
      items: [
        { name: 'Container', desc: '実際に動いているプロセスの箱。', icon: 'ic-cube', page: 309 },
        { name: 'Docker Compose', desc: '複数コンテナとネットワークをまとめて定義。', icon: 'ic-layers', page: 321 },
        { name: 'Volume', desc: 'データをコンテナの外に残す仕組み。', icon: 'ic-package', page: 313 },
      ],
    },
  ],
});

// ---- Ch9 モバイル (450-) ----
const ch9 = {
  number: 9,
  title: 'モバイル',
  entries: [
    entry({
      id: 'ios',
      page: 450,
      term: 'iOS',
      subtitle: 'Appleのスマホ・タブレット専用OS',
      category: 'モバイル・プラットフォーム',
      icon: 'ic-laptop',
      oneline: 'iPhoneやiPad向けのオペレーティングシステム。App Store経由での配布が基本。',
      q1_text: '携帯電話が「電話＋α」から本格的なコンピュータになるにつれ、\nタッチ操作に最適化された専用OSと、アプリの配布基盤が必要になった。',
      q2_intro: 'フィーチャーフォン時代はメーカー独自の環境や、限られたJavaアプリで動いていた。',
      q2_table: {
        col_before: 'ガラケー／独自環境',
        col_after: 'iOS',
        rows: [
          ['UIの前提', '物理キー中心', 'マルチタッチ前提'],
          ['アプリ配布', 'メーカーやキャリア経由が多い', 'App Storeが中心'],
          ['開発言語', '機種・メーカー依存', 'Swift / Objective-C が主'],
          ['ハードウェア', '機種差が大きい', 'Apple製デバイスに閉じる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-laptop', cap: 'iPhone向けアプリを配布できる' },
        { icon: 'ic-package', cap: '審査付きストアで品質の下限を揃えやすい' },
        { icon: 'ic-scale', cap: 'OSバージョンと端末の組み合わせが比較的把握しやすい' },
      ],
      memo: '「iOSアプリ」と言うとき、実際は iPadOS もセットで意識することが多い。\nシミュレータと実機、そして審査——この三点セットが最初の壁。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Swift', desc: 'iOSアプリ開発の第一言語。', icon: 'ic-file', page: 457 },
            { name: 'ネイティブアプリ', desc: 'OSの正式APIで作るアプリ。', icon: 'ic-cube', page: 452 },
            { name: 'Android', desc: '対になるもう一方の巨大プラットフォーム。', icon: 'ic-monitor', page: 451 },
          ],
        },
      ],
    }),
    entry({
      id: 'android',
      page: 451,
      term: 'Android',
      subtitle: '世界シェア最大のスマホOS',
      category: 'モバイル・プラットフォーム',
      icon: 'ic-monitor',
      oneline: 'Googleが中心となって育てる、オープン寄りのスマートフォン向けOS。多様なメーカーの端末で動く。',
      q1_text: 'スマホ市場が広がる中、特定メーカーに閉じないオープンなプラットフォームと、\n豊富な端末ラインナップが求められた。',
      q2_intro: 'メーカーごとの独自OSや、PC向けソフトの縮小版で「なんとなく動く携帯」を作っていた。',
      q2_table: {
        col_before: 'メーカー独自OS時代',
        col_after: 'Android',
        rows: [
          ['端末の多様性', 'メーカーごとに世界が違う', '多くのメーカーが同じOSを採用'],
          ['アプリストア', 'ばらばら', 'Google Playが中心（ほかも可）'],
          ['カスタマイズ', 'ユーザーには届きにくい', 'メーカーやユーザーが手を入れやすい'],
          ['開発言語', '機種依存', 'Kotlin / Java が主'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '幅広い端末向けにアプリを届けられる' },
        { icon: 'ic-layers', cap: '端末・OSバージョンの差を意識した設計ができる' },
        { icon: 'ic-package', cap: 'Playストア経由で配布・更新できる' },
      ],
      memo: '「Androidで動く」は広い。メーカーUIやOSバージョン差が、テストの山を作る。\n実機の断片化は、Androidエンジニアあるあるの第一歩。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Kotlin', desc: 'Android公式が推す第一言語。', icon: 'ic-file', page: 458 },
            { name: 'iOS', desc: 'もう一方の巨大プラットフォーム。', icon: 'ic-laptop', page: 450 },
            { name: 'Flutter', desc: 'Android/iOSをまとめて書く選択肢。', icon: 'ic-layers', page: 455 },
          ],
        },
      ],
    }),
    entry({
      id: 'native-app',
      page: 452,
      term: 'ネイティブアプリ',
      subtitle: 'そのOS専用の「本番装備」で作るアプリ',
      category: 'モバイル・アプリ形態',
      icon: 'ic-cube',
      oneline: 'iOSやAndroidが用意した公式の言語・API・UI部品で作る、プラットフォーム直結のアプリ。',
      q1_text: 'スマホのカメラや通知、ジェスチャを最大限使いたかったが、\nWebページだけでは端末の能力を引き出しきれなかった。',
      q2_intro: 'スマホ向けも、まずはブラウザで動くWebサイトや、簡易ランタイム上のアプリで賄おうとしていた。',
      q2_table: {
        col_before: 'Webや簡易ランタイム',
        col_after: 'ネイティブアプリ',
        rows: [
          ['性能', 'ブラウザ経由で一段遠い', 'OSに近く高速に動かしやすい'],
          ['端末機能', '制限されがち', '公式APIで深く触れる'],
          ['UIの馴染め', 'Webっぽさが残ることも', 'OS標準の見た目・操作感'],
          ['配布', 'URLを開いてもらう', 'ストア経由が基本'],
        ],
      },
      q3_cells: [
        { icon: 'ic-rocket', cap: '端末の性能を引き出しやすい' },
        { icon: 'ic-monitor', cap: 'OS標準のUI/UXに寄せられる' },
        { icon: 'ic-package', cap: 'ストア配布・更新の流れに乗る' },
      ],
      memo: '「ネイティブ＝正義」ではない。開発コストと二刀流（iOS/Android）が重い。\nだからこそ後からハイブリッドやクロスプラットフォームが流行る。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'ハイブリッドアプリ', desc: 'Web技術を包んでアプリにする方式。', icon: 'ic-layers', page: 453 },
            { name: 'React Native', desc: 'JSでネイティブUIを描く枠組み。', icon: 'ic-cube', page: 454 },
            { name: 'Swift', desc: 'iOSネイティブの主力言語。', icon: 'ic-file', page: 457 },
          ],
        },
      ],
    }),
    entry({
      id: 'hybrid-app',
      page: 453,
      term: 'ハイブリッドアプリ',
      subtitle: 'Webの中身を、アプリの皮で包む',
      category: 'モバイル・アプリ形態',
      icon: 'ic-layers',
      oneline: 'HTML/CSS/JSなどのWeb技術で画面を作り、ネイティブの殻（WebViewなど）で包んでストア配布するアプリ。',
      q1_text: 'iOSとAndroidで二重開発は痛い。一方でストア掲載やプッシュ通知など、\n「アプリであること」のメリットは捨てたくなかった。',
      q2_intro: '完全ネイティブで二台分作るか、モバイルWebだけで我慢するかの二択になりがちだった。',
      q2_table: {
        col_before: 'ネイティブ二刀流 or モバイルWeb',
        col_after: 'ハイブリッドアプリ',
        rows: [
          ['コード共有', 'プラットフォームごと', 'Web部分を大きく共有できる'],
          ['ストア配布', 'ネイティブなら可／Webは不可', 'アプリとして配布できる'],
          ['性能・一体感', 'ネイティブが有利', 'WebView次第で差が出る'],
          ['更新', 'ストア審査が基本', '中身のWebはサーバー更新しやすいことも'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: 'Webスキルでアプリの体裁を取れる' },
        { icon: 'ic-package', cap: '一つのコードベースで両OSに寄せやすい' },
        { icon: 'ic-cloud', cap: 'コンテンツ更新をサーバー側に寄せられる' },
      ],
      memo: 'Cordova / Capacitor 系が代表格。\n「アプリに見えるWeb」なので、体感の滑らかさでネイティブやRN/Flutterに負ける場面もある。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'ネイティブアプリ', desc: 'OS公式APIで作る本流。', icon: 'ic-cube', page: 452 },
            { name: 'React Native', desc: 'WebViewではなくネイティブ部品を使う道。', icon: 'ic-cube', page: 454 },
            { name: 'PWA', desc: 'インストール感をWebのまま近づける別路線。', icon: 'ic-monitor', page: 158 },
          ],
        },
      ],
    }),
    entry({
      id: 'react-native',
      page: 454,
      term: 'React Native',
      subtitle: 'Reactの書き方で、ネイティブUIを駆動する',
      category: 'クロスプラットフォーム',
      icon: 'ic-cube',
      oneline: 'Reactのコンポーネント発想で画面を書き、実際の描画はiOS/Androidのネイティブ部品に任せるフレームワーク。',
      q1_text: 'WebのReactに慣れたチームが、モバイルでも同じ思考でアプリを作りたかった。\nしかも WebView ラップではなく、ちゃんとしたネイティブUIが欲しかった。',
      q2_intro: '選択肢は「SwiftとKotlinで二重開発」か「ハイブリッド（WebView）」に偏りがちだった。',
      q2_table: {
        col_before: '二重ネイティブ / WebViewハイブリッド',
        col_after: 'React Native',
        rows: [
          ['言語・発想', 'SwiftとKotlinで別々', 'JS/TS＋Reactで共通化'],
          ['UIの実体', 'WebView or 完全別実装', 'ネイティブコンポーネント'],
          ['ホットリロード', '環境次第', '開発中の再読み込みが速い'],
          ['エコシステム', '各OSの流儀', 'npmとReactの資産を活かせる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-cube', cap: 'React経験をモバイルに横展開できる' },
        { icon: 'ic-layers', cap: '一本のJS/TSから両OS向けに寄せられる' },
        { icon: 'ic-rocket', cap: 'ネイティブモジュールで足りない部分を足せる' },
      ],
      memo: '「Write once, run anywhere」より「Learn once, write anywhere」と言われることが多い。\n橋渡し（ブリッジ）や新規アーキテクチャの話は、深入りすると別辞典が必要。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Flutter', desc: 'Dartで自前描画するライバル枠。', icon: 'ic-layers', page: 455 },
            { name: 'React', desc: '発想の原点であるWebのUIライブラリ。', icon: 'ic-cube', page: 146 },
            { name: 'ネイティブアプリ', desc: '最終的に触っている先の世界。', icon: 'ic-cube', page: 452 },
          ],
        },
      ],
    }),
    entry({
      id: 'flutter',
      page: 455,
      term: 'Flutter',
      subtitle: 'UIも描画も、自分たちのエンジンで描く',
      category: 'クロスプラットフォーム',
      icon: 'ic-layers',
      oneline: 'Dart言語と独自の描画エンジンで、iOS/Android（ほか）に同じ見た目のUIを描くUIキット。',
      q1_text: 'プラットフォームごとのUI部品差を吸収しつつ、\nデザインどおりのピクセルを両OSで再現したかった。',
      q2_intro: 'ネイティブ二刀流か、React NativeのようにOSの部品に橋を架ける方式が主流だった。',
      q2_table: {
        col_before: 'OS部品に頼る開発',
        col_after: 'Flutter',
        rows: [
          ['描画', '各OSのUI部品', '自前エンジンでキャンバスに描く'],
          ['見た目の一致', 'OS差が出やすい', '指定どおりに揃えやすい'],
          ['言語', 'Swift / Kotlin / JS など', 'Dart が中心'],
          ['ホットリロード', 'ツール次第', 'ステートを保ったまま高速に反映'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: 'デザインの再現性を両OSで高められる' },
        { icon: 'ic-rocket', cap: '滑らかなアニメーションを出しやすい' },
        { icon: 'ic-package', cap: '一つのコードベースでマルチ向けに展開しやすい' },
      ],
      memo: 'Widget の入れ子が世界のすべて。\n「Flutterは重い」は昔の印象も混ざるので、測ってから語るのが紳士。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Dart', desc: 'Flutter公式の言語。', icon: 'ic-file', page: 456 },
            { name: 'React Native', desc: 'JSでネイティブUIを駆動する別路線。', icon: 'ic-cube', page: 454 },
            { name: 'Android', desc: '配布先の一大プラットフォーム。', icon: 'ic-monitor', page: 451 },
          ],
        },
      ],
    }),
    entry({
      id: 'dart',
      page: 456,
      term: 'Dart',
      subtitle: 'Flutterと一緒に覚える言語',
      category: 'モバイル・言語',
      icon: 'ic-file',
      oneline: 'Googleが開発したプログラミング言語。いまはFlutterアプリを書くための主役として知られる。',
      q1_text: '大規模なクライアントアプリ向けに、習得しやすく、ツールチェーンも一体で使える言語が欲しかった。\nFlutterの採用とともに存在感が一気に上がった。',
      q2_intro: 'モバイルでは Swift / Kotlin、クロスでは JavaScript が候補の中心で、Dartは「知る人ぞ知る」側だった。',
      q2_table: {
        col_before: 'Flutter以前の印象',
        col_after: 'Flutterと組んだDart',
        rows: [
          ['主な用途', '一部のWeb・実験的用途', 'Flutterアプリ開発が主流'],
          ['型', 'オプション寄りに見えがち', '健全な型づけで大規模向き'],
          ['非同期', 'Future など独自の流儀', 'async/await で読みやすい'],
          ['学習動機', '弱い', 'Flutterをやるなら必須級'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: 'FlutterのUIを型付きで書ける' },
        { icon: 'ic-rocket', cap: 'AOT/JITを使い分けて開発と本番を両立' },
        { icon: 'ic-package', cap: 'pub.dev のパッケージ生態系を使える' },
      ],
      memo: '「Dart単体で就職」より「Flutter屋さんの母語」と捉えると距離感が合う。\nnull safety 導入後は、現代的な型の感触にかなり近づいた。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Flutter', desc: 'Dartの最大の活躍の場。', icon: 'ic-layers', page: 455 },
            { name: 'Swift', desc: 'iOSネイティブ側の言語。', icon: 'ic-file', page: 457 },
            { name: 'Kotlin', desc: 'Androidネイティブ側の言語。', icon: 'ic-file', page: 458 },
          ],
        },
      ],
    }),
    entry({
      id: 'swift',
      page: 457,
      term: 'Swift',
      subtitle: 'Apple純正、モダン寄りの主力言語',
      category: 'モバイル・言語',
      icon: 'ic-file',
      oneline: 'Appleが開発したプログラミング言語。iOS/macOSなどのアプリ開発でObjective-Cに代わって第一言語になった。',
      q1_text: 'Objective-Cは実績十分だが、文法が古く見え、安全さも現代基準では物足りない場面があった。\nもっと読みやすく安全な言語が求められた。',
      q2_intro: '長らく Objective-C が Apple プラットフォームの標準で、C言語由来の独特な書き方が前提だった。',
      q2_table: {
        col_before: 'Objective-C',
        col_after: 'Swift',
        rows: [
          ['読みやすさ', '独特で学習コスト高', 'モダンで読みやすい'],
          ['安全性', 'ポインタやnilに注意が必要', 'オプショナルなどで事故を減らせる'],
          ['相互運用', '——', '既存のObjective-C資産とも共存可'],
          ['進化', '相対的に緩やか', '言語もツールも活発に更新'],
        ],
      },
      q3_cells: [
        { icon: 'ic-laptop', cap: 'iOSネイティブアプリを現代的に書ける' },
        { icon: 'ic-scale', cap: '型とオプショナルで実行時事故を減らせる' },
        { icon: 'ic-package', cap: 'SwiftUIなど新しいUI枠組みに乗れる' },
      ],
      memo: 'サーバーサイドSwiftもあるが、現場で「Swift」と言えばだいたいApple製クライアント。\nCh8から外し、モバイル章に置いているのはそのため。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'iOS', desc: 'Swiftが最も活躍するOS。', icon: 'ic-laptop', page: 450 },
            { name: 'Kotlin', desc: 'Android側の対になる言語。', icon: 'ic-file', page: 458 },
            { name: 'ネイティブアプリ', desc: 'Swiftで作る典型的な成果物。', icon: 'ic-cube', page: 452 },
          ],
        },
      ],
    }),
    entry({
      id: 'kotlin',
      page: 458,
      term: 'Kotlin',
      subtitle: 'Android公式が「こっち推すね」と言った言語',
      category: 'モバイル・言語',
      icon: 'ic-file',
      oneline: 'JetBrainsが作った言語で、Androidアプリ開発の第一言語としてGoogleも推奨。Javaと仲が良い。',
      q1_text: 'Javaは安定しているが冗長で、null事故も起きやすかった。\nJVM資産は活かしつつ、もっと短く安全に書きたいニーズが強まった。',
      q2_intro: 'Androidは長らくJavaが標準。ボイラープレートと null に泣きながら書いていた。',
      q2_table: {
        col_before: 'Java中心のAndroid',
        col_after: 'Kotlin',
        rows: [
          ['記述量', '冗長になりやすい', '簡潔に書ける'],
          ['null安全', '実行時に気づきがち', '型でかなり防げる'],
          ['Javaとの関係', '——', '相互運用が得意'],
          ['公式の立場', '伝統的標準', 'Androidの推奨言語'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: 'Androidアプリを短く安全に書ける' },
        { icon: 'ic-layers', cap: '既存Javaコードと混在できる' },
        { icon: 'ic-rocket', cap: 'コルーチンで非同期を扱いやすい' },
      ],
      memo: 'サーバーサイドやマルチプラットフォーム（KMP）にも広がっている。\nとはいえこの辞典では、まずは「Androidの母語」として覚えておけば十分。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Android', desc: 'Kotlinが本領を発揮するOS。', icon: 'ic-monitor', page: 451 },
            { name: 'Swift', desc: 'iOS側の対になる言語。', icon: 'ic-file', page: 457 },
            { name: 'Java', desc: '互換と歴史のパートナー。', icon: 'ic-file', page: 175 },
          ],
        },
      ],
    }),
  ],
};

// ---- Ch10 テスト (500-) ----
const ch10 = {
  number: 10,
  title: 'テスト',
  entries: [
    entry({
      id: 'unit-test',
      page: 500,
      term: 'Unit Test',
      subtitle: 'いちばん小さい単位を、単体で殴る',
      category: 'テストの種類',
      icon: 'ic-cube',
      oneline: '関数やクラスなど、プログラムの最小単位が期待どおり動くかを検証するテスト。',
      q1_text: '画面を手で操作して確認するだけでは、変更のたびに同じ確認を繰り返せない。\n小さい部品のうちに壊れていないか自動で見たい。',
      q2_intro: '動作確認は、アプリを起動して人の手と目で見るのが基本だった。',
      q2_table: {
        col_before: '手動の動作確認',
        col_after: 'Unit Test',
        rows: [
          ['対象', '画面や一連の操作', '関数・クラスなど小さい単位'],
          ['速さ', '遅い', '秒単位で大量に回せる'],
          ['原因の切り分け', 'どこで壊れたか追いにくい', '失敗した単位がすぐ分かる'],
          ['外部依存', '本物のDBやAPIに寄りがち', 'モックして切り離しやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-rocket', cap: '小さな変更をすぐ検証できる' },
        { icon: 'ic-scale', cap: '壊れた場所をピンポイントで見つけられる' },
        { icon: 'ic-clock', cap: 'リグレッションを自動で防ぎやすくなる' },
      ],
      memo: '「ユニットの境界」はチームごとにブレる。\nまずは「外部I/Oを叩かない速さ」を目安にすると迷子になりにくい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Integration Test', desc: '部品をつないだ状態で確かめる。', icon: 'ic-layers', page: 501 },
            { name: 'Mock', desc: '依存を偽物に差し替える道具。', icon: 'ic-cube', page: 503 },
            { name: 'Jest', desc: 'JS界隈でよく使うテストランナー。', icon: 'ic-package', page: 518 },
          ],
        },
      ],
    }),
    entry({
      id: 'integration-test',
      page: 501,
      term: 'Integration Test',
      subtitle: 'つなぎ目で、初めて起きる事故を拾う',
      category: 'テストの種類',
      icon: 'ic-layers',
      oneline: '複数のモジュールや、DB・APIなどの外部をつないだ状態で、連携が正しいかを確かめるテスト。',
      q1_text: '単体では正しくても、つなぐと型やトランザクション、設定の食い違いで落ちることがある。\n「結合した姿」を見るテストが必要になった。',
      q2_intro: 'ユニットテストは通るのに、実際にDBを繋ぐと落ちる——を本番近くで初めて知る、がよくあった。',
      q2_table: {
        col_before: '単体だけ／手動結合',
        col_after: 'Integration Test',
        rows: [
          ['見る範囲', '部品の内側', '部品の境界と相互作用'],
          ['依存', 'モックで消しがち', '本物かそれに近いものを使う'],
          ['速さ', '非常に速い', 'ユニットより遅い'],
          ['見つかるバグ', 'ロジック誤り', '配線・設定・契約のずれ'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: 'モジュール間の契約ずれを早期に見つけられる' },
        { icon: 'ic-server', cap: 'DBやAPIとの実連携を検証できる' },
        { icon: 'ic-scale', cap: 'E2Eより狭く、原因を追いやすい' },
      ],
      memo: '「どこからが結合か」は宗教戦争になりやすい。\nチームで境界を一文で定義しておくだけで、テストの粒度が安定する。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Unit Test', desc: 'もっと小さい単位のテスト。', icon: 'ic-cube', page: 500 },
            { name: 'E2E Test', desc: 'ユーザー操作に近い端到端のテスト。', icon: 'ic-monitor', page: 502 },
            { name: 'Fixture', desc: '結合時に使う固定の試験データ。', icon: 'ic-file', page: 505 },
          ],
        },
      ],
    }),
    entry({
      id: 'e2e-test',
      page: 502,
      term: 'E2E Test',
      subtitle: 'ユーザーの操作を、ロボットが最後までやる',
      category: 'テストの種類',
      icon: 'ic-monitor',
      oneline: '画面操作やAPI呼び出しなど、システムを端から端まで通して、利用シナリオが成立するかを確かめるテスト。',
      q1_text: '部品も結合も正しくても、「会員登録してログインして購入する」が通るかは別問題。\nユーザー視点の一本道を自動で歩きたかった。',
      q2_intro: 'リリース前に人がブラウザを手で操作し、チェックリストを消化するのが普通だった。',
      q2_table: {
        col_before: '人手のシナリオ確認',
        col_after: 'E2E Test',
        rows: [
          ['再現性', '担当者の手癖に依存', '同じ手順を何度でも実行'],
          ['コスト', '人時がかかる', '初期構築は重いが繰り返しは安い'],
          ['速さ', '遅い', '自動化しても結合より重い'],
          ['壊れやすさ', '——', 'UI変更でテストも折れやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '重要シナリオの退行を自動検知できる' },
        { icon: 'ic-clock', cap: '夜中のCIでも同じ確認を回せる' },
        { icon: 'ic-rocket', cap: 'リリース判断の材料を機械的に増やせる' },
      ],
      memo: '全部をE2Eにすると遅くて脆い。\nピラミッドの頂点——数は少なく、商売に効く道だけ、が定石。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Playwright', desc: 'モダンなE2E自動化ツール。', icon: 'ic-package', page: 520 },
            { name: 'Puppeteer', desc: 'Chromeを操作する自動化ライブラリ。', icon: 'ic-package', page: 521 },
            { name: 'スモークテスト', desc: '「とりあえず起動するか」の薄い確認。', icon: 'ic-rocket', page: 512 },
          ],
        },
      ],
    }),
    entry({
      id: 'mock',
      page: 503,
      term: 'Mock',
      subtitle: '本物のふりをして、呼び出しを監視する代役',
      category: 'テストダブル',
      icon: 'ic-cube',
      oneline: 'テスト中に本物の依存（APIやDBなど）の代わりに置き、戻り値や「呼ばれたか」を制御・検証する偽物。',
      q1_text: '外部サービスが落ちていたり、課金APIを本当に叩いたりすると、テストが不安定で高くつく。\n依存を切り離しつつ、相互作用は確認したかった。',
      q2_intro: 'テストでも本番と同じDBや外部APIに繋ぎ、環境ごとしんどい思いをしていた。',
      q2_table: {
        col_before: '本物依存のままテスト',
        col_after: 'Mockを使う',
        rows: [
          ['安定性', 'ネットや相手次第', 'ローカルで決定的に動かせる'],
          ['検証できること', '結果中心', '「どう呼ばれたか」も見られる'],
          ['速さ', 'I/O待ちが発生', 'メモリ上で一瞬'],
          ['危険', '課金やメール誤送信', '副作用を止められる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-cube', cap: '外部依存を止めて単体テストできる' },
        { icon: 'ic-scale', cap: '呼び出し回数や引数を検証できる' },
        { icon: 'ic-clock', cap: 'テストを速く安定させられる' },
      ],
      memo: 'Mock / Stub / Fake / Spy は用語が混線しやすい。\nざっくり「振る舞いを検証したいならMock寄り」と覚える入口でよい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Stub', desc: '決まった値を返すことに寄せた代役。', icon: 'ic-file', page: 504 },
            { name: 'Unit Test', desc: 'Mockの出番が多い土俵。', icon: 'ic-cube', page: 500 },
            { name: 'Fixture', desc: '入力データ側の固定化。', icon: 'ic-file', page: 505 },
          ],
        },
      ],
    }),
    entry({
      id: 'stub',
      page: 504,
      term: 'Stub',
      subtitle: '「この値を返すよ」だけ用意した薄い代役',
      category: 'テストダブル',
      icon: 'ic-file',
      oneline: 'テストのために、依存先の代わりとして決め打ちの戻り値や状態だけを返す簡易実装。',
      q1_text: 'ロジックのテストに必要なのは「今は成功扱いのユーザーが返る」など結果だけで、\n本物の複雑さや呼び出し検証までは不要なことが多かった。',
      q2_intro: '毎回フルのモックフレームワークで厳格に振る舞いまで検証するか、本物に繋ぐか、になりがちだった。',
      q2_table: {
        col_before: '本物 or 厳格Mock',
        col_after: 'Stub',
        rows: [
          ['目的', '結合や相互作用の検証', '決め打ちの入力・応答を渡す'],
          ['複雑さ', '高くなりやすい', '薄く保てる'],
          ['検証', '呼ばれ方まで見ることが多い', '戻り値の用意が主'],
          ['読みやすさ', 'セットアップが長い', '意図が短く書ける'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: 'テストに必要な応答だけを用意できる' },
        { icon: 'ic-cube', cap: '本番実装の重さをテストから外せる' },
        { icon: 'ic-clock', cap: 'セットアップを短くできる' },
      ],
      memo: 'Stubは「答えてくれる看板」、Mockは「行動をチェックする監視カメラ」イメージ。\n現場では両方とも「モック」と呼ぶことも多いので、会話の文脈確認を。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Mock', desc: '呼び出しまで検証する寄り。', icon: 'ic-cube', page: 503 },
            { name: 'Fixture', desc: 'データ側の固定セット。', icon: 'ic-file', page: 505 },
            { name: 'Unit Test', desc: 'Stubがよく出る場所。', icon: 'ic-cube', page: 500 },
          ],
        },
      ],
    }),
    entry({
      id: 'fixture',
      page: 505,
      term: 'Fixture',
      subtitle: 'テストの舞台装置と小道具一式',
      category: 'テストの基盤',
      icon: 'ic-package',
      oneline: 'テストを走らせるためにあらかじめ用意する、固定のデータや状態・環境のこと。',
      q1_text: '毎回手でユーザーを作ったりDBを初期化したりしていると、テストの本題より準備が長くなる。\n同じ前提を再利用したかった。',
      q2_intro: 'テスト関数の中に、データのINSERTやファイル配置をベタ書きしていた。',
      q2_table: {
        col_before: 'テスト内に準備を直書き',
        col_after: 'Fixture',
        rows: [
          ['再利用', 'コピペが増える', '共通の前提を使い回せる'],
          ['読みやすさ', '本題が埋もれる', '「何を試すか」が前面に出る'],
          ['一貫性', 'テストごとに微妙に違う', '同じ初期状態から始められる'],
          ['メンテ', '変更が散らばる', '一箇所に寄せやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: '試験データをまとめて管理できる' },
        { icon: 'ic-clock', cap: 'テストの準備コードを短くできる' },
        { icon: 'ic-scale', cap: '前提条件のばらつきを減らせる' },
      ],
      memo: 'フレームワークによって「fixture」の指すものが少し違う（pytest、Rails、Jest…）。\n共通して言えるのは「テストの前提を外出しする」という発想。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Seeder', desc: 'アプリ側の初期データ投入に近い概念。', icon: 'ic-package', page: 93 },
            { name: 'Integration Test', desc: 'Fixtureの出番が多い層。', icon: 'ic-layers', page: 501 },
            { name: 'Factory', desc: '動的にテストデータを作る派（一緒に覚えたい）。', icon: 'ic-wheel' },
          ],
        },
      ],
    }),
    entry({
      id: 'tdd',
      page: 506,
      term: 'TDD',
      subtitle: 'テストを先に書いて、実装を後から引っ張る',
      category: 'テストの進め方',
      icon: 'ic-rocket',
      oneline: 'Test-Driven Development。失敗するテストを先に書き、通る最小実装→リファクタ、を回す開発手法。',
      q1_text: '作り終わってからテストを足すと、「今の実装に合わせたテスト」になりやすい。\n先に期待を固定して、設計を引き出したかった。',
      q2_intro: '実装→手動確認→余裕があればテスト、の順番がデフォルトだった。',
      q2_table: {
        col_before: '実装ファースト',
        col_after: 'TDD',
        rows: [
          ['順番', 'コード→テスト', 'テスト→コード→リファクタ'],
          ['設計への影響', '後付けになりがち', '使いやすさが先に決まる'],
          ['フィードバック', '動かし始めてから', '数分単位の短いループ'],
          ['過剰実装', 'つい作り込みがち', '赤→緑の範囲に収まりやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-rocket', cap: '小さなフィードバックループで進める' },
        { icon: 'ic-scale', cap: '過剰な設計を抑えやすい' },
        { icon: 'ic-file', cap: '仕様の意図がテストとして残る' },
      ],
      memo: '宗教ではなくツール。向く領域（純粋ロジック）と向かない領域（探索的UI）がある。\n「赤・緑・リファクタ」を一度体験すると、用語の感触が掴める。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'BDD', desc: '振る舞い・事例の言葉で仕様を書く寄り。', icon: 'ic-file', page: 507 },
            { name: 'Unit Test', desc: 'TDDで最もよく回す粒度。', icon: 'ic-cube', page: 500 },
            { name: 'リファクタリング', desc: '緑のあとに必ず来る工程（設計章）。', icon: 'ic-wheel' },
          ],
        },
      ],
    }),
    entry({
      id: 'bdd',
      page: 507,
      term: 'BDD',
      subtitle: '「Given / When / Then」で仕様を会話する',
      category: 'テストの進め方',
      icon: 'ic-file',
      oneline: 'Behavior-Driven Development。振る舞いを自然言語に近い形で書き、開発・QA・企画の認識を揃えるアプローチ。',
      q1_text: 'テストはエンジニアの内側で閉じてしまい、ビジネス側の「そう動いてほしい」とずれやすかった。\n共通の言葉で振る舞いを書きたかった。',
      q2_intro: '仕様書は別文書、テストはコード、口頭の認識合わせは会議、と情報が分裂していた。',
      q2_table: {
        col_before: '仕様とテストが別物',
        col_after: 'BDD',
        rows: [
          ['書き方', '実装寄りのassert', 'Given/When/Thenなど振る舞い'],
          ['読み手', 'エンジニア中心', '非エンジニアも参加しやすい'],
          ['目的', '正しさの検証', '認識合わせ＋検証'],
          ['成果物', 'テストコード', '実行可能な仕様に近づく'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: '仕様をテスト可能な文章に落とせる' },
        { icon: 'ic-network', cap: '職種をまたいで認識を揃えやすい' },
        { icon: 'ic-scale', cap: '受け入れ条件を自動化しやすくなる' },
      ],
      memo: 'Cucumber や Jest の describe/it の書き方にもBDDの香りがある。\n形式に固執せず、「振る舞いの言葉で書けているか」が本質。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'TDD', desc: 'テスト先行のサイクル。BDDと併記されやすい。', icon: 'ic-rocket', page: 506 },
            { name: 'E2E Test', desc: '振る舞いシナリオの実行場所になりやすい。', icon: 'ic-monitor', page: 502 },
            { name: 'テスト設計', desc: '何を書くかを決める上流。', icon: 'ic-file', page: 517 },
          ],
        },
      ],
    }),
    entry({
      id: 'coverage',
      page: 508,
      term: 'カバレッジ',
      subtitle: 'テストがコードの何割を撫でたか',
      category: 'テストの指標',
      icon: 'ic-scale',
      oneline: 'テスト実行によって実行されたコードの割合。行・分岐などの単位で測ることが多い。',
      q1_text: '「テスト書いた」と言っても、通っていない分岐だらけかもしれない。\nどこが未検証か、可視化する指標が必要だった。',
      q2_intro: 'テストの十分さは、感覚とコードレビューのコメント頼みだった。',
      q2_table: {
        col_before: '感覚での十分さ',
        col_after: 'カバレッジ',
        rows: [
          ['見え方', '書いた気になる', '通った行・分岐が見える'],
          ['目標管理', '曖昧', '数値目標を置ける（功罪あり）'],
          ['弱点発見', '属人的', '未カバー箇所が地図になる'],
          ['誤解', '——', '100%＝バグゼロではない'],
        ],
      },
      q3_cells: [
        { icon: 'ic-scale', cap: '未テスト箇所を可視化できる' },
        { icon: 'ic-monitor', cap: 'PRでカバー率の変化を追える' },
        { icon: 'ic-file', cap: '重要な経路の穴を見つけやすくなる' },
      ],
      memo: 'カバレッジは「下限の健康診断」であって「満点の賞状」ではない。\n意味のないテストで数値だけ盛る行為は、現場の名物悪習。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Unit Test', desc: 'カバレッジ計測の主戦場。', icon: 'ic-cube', page: 500 },
            { name: 'ホワイトボックステスト', desc: '内部構造を見て網羅を考える。', icon: 'ic-layers', page: 515 },
            { name: 'Jest', desc: 'カバレッジ計測がしやすいランナー例。', icon: 'ic-package', page: 518 },
          ],
        },
      ],
    }),
    entry({
      id: 'debug',
      page: 509,
      term: 'デバッグ',
      subtitle: 'バグを「見つける・理解する・潰す」作業全体',
      category: '不具合対応',
      icon: 'ic-pen',
      oneline: 'プログラムの不具合原因を特定し、修正して確認するまでの一連の活動。',
      q1_text: '動くはずのプログラムが期待どおり動かないとき、勘で直すと別の場所が壊れる。\n再現→仮説→検証の手順が必要になった。',
      q2_intro: 'printデバッグと気合、そして「一度消して書き直す」が頼りだった。',
      q2_table: {
        col_before: '勘と再実装',
        col_after: '意図的なデバッグ',
        rows: [
          ['再現', '運任せ', '手順を固定して何度も見る'],
          ['観測', 'ログを散らかす', 'ブレークポイントや段階的検証'],
          ['仮説', '思いつき修正', '仮説を立ててから変える'],
          ['回帰防止', 'その場しのぎ', 'テストに残せる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-pen', cap: '原因を切り分けて確実に潰せる' },
        { icon: 'ic-monitor', cap: 'デバッガで実行時の状態を覗ける' },
        { icon: 'ic-file', cap: '再発防止のテストやログ改善につなげられる' },
      ],
      memo: 'デバッグの半分は「再現手順を短くする」こと。\n再現できないバグは、まだバグではなく都市伝説。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'ログ', desc: '本番でデバッグするときの手がかり（観測章へ）。', icon: 'ic-file' },
            { name: '回帰テスト', desc: '直した穴が再び開かないか確認。', icon: 'ic-clock', page: 511 },
            { name: 'Unit Test', desc: '仮説検証を高速にする道具。', icon: 'ic-cube', page: 500 },
          ],
        },
      ],
    }),
    entry({
      id: 'snapshot-test',
      page: 510,
      term: 'スナップショットテスト',
      subtitle: '「前と同じ見た目／出力か」を写真で比べる',
      category: 'テストの種類',
      icon: 'ic-image',
      oneline: 'コンポーネントの出力やUIの結果を保存し、次回以降の実行結果と差分比較するテスト手法。',
      q1_text: 'UIの細かい文言やクラス名の変化を、全部手でassertするのは現実的でない。\n「前回からの変化」自体を検知したかった。',
      q2_intro: '見た目の確認は目視、または重要な要素だけを個別assertしていた。',
      q2_table: {
        col_before: '目視／個別assert',
        col_after: 'スナップショット',
        rows: [
          ['記述量', '多い／抜けやすい', '一発で出力全体を固定'],
          ['変更検知', '見落としがある', '差分として必ず出る'],
          ['意図', '何を守るか明示しやすい', '更新時にレビューが必要'],
          ['脆さ', '——', 'リファクタでも折れやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-image', cap: 'UIの意図しない変化を検知できる' },
        { icon: 'ic-clock', cap: '細かいassertを書く時間を節約できる' },
        { icon: 'ic-file', cap: '差分レビューで変更意図を確認できる' },
      ],
      memo: 'スナップショットを「とりあえず更新」するのはテスト自殺。\n差分を読んでからapproveする習慣が本体。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Jest', desc: 'toMatchSnapshot が有名。', icon: 'ic-package', page: 518 },
            { name: 'Vitest', desc: '同様の機能を持つ高速ランナー。', icon: 'ic-package', page: 519 },
            { name: '回帰テスト', desc: '変化検知という目的が近い。', icon: 'ic-clock', page: 511 },
          ],
        },
      ],
    }),
    entry({
      id: 'regression-test',
      page: 511,
      term: '回帰テスト',
      subtitle: '直したつもりが、昔のバグを呼び戻していないか',
      category: 'テストの種類',
      icon: 'ic-clock',
      oneline: '変更後に、以前できていたことが壊れていないかを確認するテスト（またはその活動）。',
      q1_text: '機能追加のたびに、関係ない画面が壊れることがあった。\n「昔は動いていたこと」を継続的に守りたかった。',
      q2_intro: 'リリース前に、思い出した範囲を人手でざっと触る——が回帰確認の実体だった。',
      q2_table: {
        col_before: '思い出し手動確認',
        col_after: '回帰テスト',
        rows: [
          ['範囲', '担当者の記憶頼み', '守るシナリオを資産化'],
          ['タイミング', 'リリース直前に集中', '変更のたびに自動で実行可'],
          ['抜け', '起きやすい', '完全ではないが再現性がある'],
          ['コスト', '人の時間が毎回必要', '初期投資＋実行コスト'],
        ],
      },
      q3_cells: [
        { icon: 'ic-clock', cap: '過去の不具合の再発を防ぎやすい' },
        { icon: 'ic-rocket', cap: '変更のたびに安全網をかけられる' },
        { icon: 'ic-scale', cap: 'リファクタの勇気を増やせる' },
      ],
      memo: '回帰テストは特定のフレームワーク名ではない。\nユニットでもE2Eでも、「昔の正しさを守る」目的なら回帰。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'スモークテスト', desc: 'もっと薄い「死んでないか」確認。', icon: 'ic-rocket', page: 512 },
            { name: 'E2E Test', desc: '回帰の実行形態のひとつ。', icon: 'ic-monitor', page: 502 },
            { name: 'デバッグ', desc: '回帰で落ちたあと必ず来る工程。', icon: 'ic-pen', page: 509 },
          ],
        },
      ],
    }),
    entry({
      id: 'smoke-test',
      page: 512,
      term: 'スモークテスト',
      subtitle: '電源入れて、煙が出ないかだけ見る',
      category: 'テストの種類',
      icon: 'ic-rocket',
      oneline: 'ビルドやデプロイ直後に、起動・主要導線など最小限が動くかを短時間で確認するテスト。',
      q1_text: '重いフルテストを回す前に、そもそも起動しない・ログインできない、を早く知りたかった。\n薄い安全確認が必要だった。',
      q2_intro: 'デプロイしたら、とりあえずトップページをブラウザで開いてみる——が儀式だった。',
      q2_table: {
        col_before: '人手の「開けてみた」',
        col_after: 'スモークテスト',
        rows: [
          ['深さ', 'その場の気分', '事前に決めた最小セット'],
          ['速さ', '人待ち', '短時間で機械実行'],
          ['目的', '雰囲気確認', '致命傷の早期発見'],
          ['位置づけ', '非公式', 'パイプラインの門番にできる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-rocket', cap: '壊れたデプロイをすぐ止められる' },
        { icon: 'ic-clock', cap: '重いテストの前に足切りできる' },
        { icon: 'ic-monitor', cap: '主要導線の生存を確認できる' },
      ],
      memo: '名前は電子工作の「煙が出たら失敗」由来とも言われる。\n深い保証は別テストに任せ、門番に徹するのが上品。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'E2E Test', desc: 'もっと厚いシナリオ確認。', icon: 'ic-monitor', page: 502 },
            { name: '回帰テスト', desc: '広さ・深さのある再確認。', icon: 'ic-clock', page: 511 },
            { name: 'CI', desc: 'スモークを自動で回す場所（Ch14）。', icon: 'ic-wheel' },
          ],
        },
      ],
    }),
    entry({
      id: 'boundary-value',
      page: 513,
      term: '境界値分析',
      subtitle: 'バグは端っこに宿る、という経験則',
      category: 'テスト設計技法',
      icon: 'ic-scale',
      oneline: '仕様の境界（0と1、最大値の前後など）を重点的に試すテスト設計の技法。',
      q1_text: '条件分岐のバグは、真ん中の普通の値より、境界の前後で顕在化しやすい。\n限られた手数でそこを突きたかった。',
      q2_intro: '適当な代表値をいくつか入れて「動いた」ことにしていた。',
      q2_table: {
        col_before: '適当な代表値',
        col_after: '境界値分析',
        rows: [
          ['選ぶ値', '感覚', '境界とその前後を意図的に'],
          ['バグ検出', '運が絡む', '典型的なオフバイワンを狙い撃ち'],
          ['ケース数', 'ばらつく', '必要最小に近づけやすい'],
          ['根拠', '説明しにくい', '設計として説明できる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-scale', cap: 'オフバイワン系の欠陥を狙いやすい' },
        { icon: 'ic-file', cap: 'テストケースに設計根拠を持たせられる' },
        { icon: 'ic-cube', cap: '少ないケースで危険地帯をカバーできる' },
      ],
      memo: '「1〜100」なら 0,1,100,101 が定番セット。\n同値分割とセットで覚えるとテスト設計が急に大人になる。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '同値分割', desc: '同じ扱いのグループから代表を取る技法。', icon: 'ic-layers', page: 514 },
            { name: 'ブラックボックステスト', desc: '仕様ベースで境界を見る立場。', icon: 'ic-monitor', page: 516 },
            { name: 'テスト設計', desc: '技法を組み合わせる上流工程。', icon: 'ic-file', page: 517 },
          ],
        },
      ],
    }),
    entry({
      id: 'equivalence-partitioning',
      page: 514,
      term: '同値分割',
      subtitle: '同じ扱いの値は、代表一人で十分',
      category: 'テスト設計技法',
      icon: 'ic-layers',
      oneline: '入力を「同じ結果になるグループ」に分け、各グループから代表値だけを試すテスト設計技法。',
      q1_text: '取りうる入力を全部試すのは不可能。\nでもランダムだと抜けが怖い。グループ化して効率化したかった。',
      q2_intro: '思いつく値を並べるか、全数に近い組み合わせを試みて疲弊していた。',
      q2_table: {
        col_before: '思いつき／全数寄り',
        col_after: '同値分割',
        rows: [
          ['ケース選定', '場当たり', 'パーティションから代表を選ぶ'],
          ['抜けの議論', 'しにくい', '「どの区画を見たか」で話せる'],
          ['量', '爆発しがち', '区画数に抑えられる'],
          ['境界', '別途意識が必要', '境界値分析と併用が定石'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: '入力空間を整理してテストできる' },
        { icon: 'ic-clock', cap: '無駄な重複ケースを減らせる' },
        { icon: 'ic-file', cap: 'カバレッジの議論を仕様ベースにできる' },
      ],
      memo: '「有効同値」と「無効同値」を分けるのがコツ。\nエラー系を忘れると、ハッピーパスだけのテストになる。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '境界値分析', desc: '区画の端を突く姉妹技法。', icon: 'ic-scale', page: 513 },
            { name: 'テスト設計', desc: 'これらの技法を使う工程。', icon: 'ic-file', page: 517 },
            { name: 'ブラックボックステスト', desc: '内部を見ずに仕様から区画する。', icon: 'ic-monitor', page: 516 },
          ],
        },
      ],
    }),
    entry({
      id: 'white-box-test',
      page: 515,
      term: 'ホワイトボックステスト',
      subtitle: '中身の配線を見てから試す',
      category: 'テストの立場',
      icon: 'ic-layers',
      oneline: 'プログラムの内部構造（分岐や経路）を理解したうえで、その経路を通すように設計するテスト。',
      q1_text: '仕様どおりの入出力だけでは、通っていない分岐やエラーハンドリングが残る。\nコードを見て網羅したかった。',
      q2_intro: '仕様書の項目を外側から叩くだけで、実装の裏道は見ないことが多かった。',
      q2_table: {
        col_before: '外側からの確認だけ',
        col_after: 'ホワイトボックス',
        rows: [
          ['視点', '仕様・画面', '分岐・経路・内部状態'],
          ['設計者', '誰でも可能なことも', 'コードが読める人向き'],
          ['強み', '——', '死にコードや抜け経路を見つけやすい'],
          ['弱み', '——', '実装に引きずられ仕様漏れに気づきにくい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-layers', cap: '分岐網羅など構造ベースの確認ができる' },
        { icon: 'ic-scale', cap: 'カバレッジと相性が良い' },
        { icon: 'ic-file', cap: 'リファクタ前後の経路維持を支えられる' },
      ],
      memo: '「白箱」＝中が見える、の意味。\nユニットテストの多くはホワイトボックス寄り、と捉えると整理しやすい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'ブラックボックステスト', desc: '中を見ない対の立場。', icon: 'ic-monitor', page: 516 },
            { name: 'カバレッジ', desc: '構造網羅の指標。', icon: 'ic-scale', page: 508 },
            { name: 'Unit Test', desc: '白箱になりやすい粒度。', icon: 'ic-cube', page: 500 },
          ],
        },
      ],
    }),
    entry({
      id: 'black-box-test',
      page: 516,
      term: 'ブラックボックステスト',
      subtitle: '中身は知らぬ、入出力だけ見る',
      category: 'テストの立場',
      icon: 'ic-monitor',
      oneline: '内部実装を知らなくても（見なくても）、仕様上の入力に対する出力や振る舞いを確認するテスト。',
      q1_text: '実装者以外も品質を確認したかったし、実装に引っ張られたテストでは仕様漏れに気づけない。\n外側からの検証が必要だった。',
      q2_intro: 'テストも開発者の頭の中の実装イメージに合わせて書かれ、仕様書とのズレが見逃されがちだった。',
      q2_table: {
        col_before: '実装に寄り添う確認',
        col_after: 'ブラックボックス',
        rows: [
          ['必要な知識', 'コード構造', '仕様・要求'],
          ['見つかりやすいもの', '実装バグ', '仕様不一致・抜け'],
          ['技法', '経路網羅など', '同値分割・境界値など'],
          ['実行者', '開発者中心', 'QAや利用者視点も取りやすい'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '仕様どおりかを外側から検証できる' },
        { icon: 'ic-file', cap: '実装変更に強いテストにしやすい' },
        { icon: 'ic-network', cap: '開発以外の視点を取り込みやすい' },
      ],
      memo: 'E2Eや受け入れテストはブラックボックス寄りが多い。\n白も黒も、片方だけだと盲点ができる。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'ホワイトボックステスト', desc: '中身を見る対の立場。', icon: 'ic-layers', page: 515 },
            { name: '同値分割', desc: '黒箱で使う代表技法。', icon: 'ic-layers', page: 514 },
            { name: 'E2E Test', desc: '黒箱で回すことが多い層。', icon: 'ic-monitor', page: 502 },
          ],
        },
      ],
    }),
    entry({
      id: 'test-design',
      page: 517,
      term: 'テスト設計',
      subtitle: '何を試すかを、書く前に決める',
      category: 'テストの進め方',
      icon: 'ic-file',
      oneline: '観点・条件・期待結果を整理し、どのテストケースをどの粒度で持つかを決める活動。',
      q1_text: 'やみくもにテストコードを増やすと、薄いケースだらけで本番の事故は防げない。\n先に「何を保証するか」を設計したかった。',
      q2_intro: '思いついた操作をそのままテストにし、観点の抜けや重複に後から気づいていた。',
      q2_table: {
        col_before: '思いつきテスト追加',
        col_after: 'テスト設計',
        rows: [
          ['起点', '実装や気分', 'リスク・仕様・技法'],
          ['抜け', '見つかりにくい', '観点表で可視化しやすい'],
          ['重複', '増えやすい', '同値などで整理できる'],
          ['説明', '「なんとなく」', 'レビュー可能な成果物になる'],
        ],
      },
      q3_cells: [
        { icon: 'ic-file', cap: 'テスト観点をチームで共有できる' },
        { icon: 'ic-scale', cap: '限られた手数でリスクの高い所を狙える' },
        { icon: 'ic-layers', cap: '技法（境界・同値など）を意図的に使える' },
      ],
      memo: 'テストコードを書くのは実装、テスト設計はその前工程。\n「ケース一覧がない自動テスト」は、設計が頭の中にしかない状態。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: '境界値分析', desc: '設計で使う代表技法。', icon: 'ic-scale', page: 513 },
            { name: '同値分割', desc: '同じく代表技法。', icon: 'ic-layers', page: 514 },
            { name: 'BDD', desc: '振る舞いの言葉で設計する流派。', icon: 'ic-file', page: 507 },
          ],
        },
      ],
    }),
    entry({
      id: 'jest',
      page: 518,
      term: 'Jest',
      subtitle: 'JavaScriptテストの「とりあえずこれ」だった王者',
      category: 'テストツール',
      icon: 'ic-package',
      oneline: 'Meta（旧Facebook）発のJavaScriptテストフレームワーク。ランナー・アサーション・モックが一式そろっている。',
      q1_text: 'JSのテストはランナーと断言ライブラリとモックがバラバラで、組み合わせが面倒だった。\nゼロコンフィグ寄りの一体型が求められた。',
      q2_intro: 'Mocha + Chai + Sinon などを自分で繋いで、設定ファイルと戦っていた。',
      q2_table: {
        col_before: '寄せ集め構成',
        col_after: 'Jest',
        rows: [
          ['セットアップ', '複数ライブラリの配線', '一式が最初から入っている'],
          ['スナップショット', '別途用意', '標準機能'],
          ['モック', 'ライブラリ依存', 'jest.fn などが標準'],
          ['エコシステム', '選択が多い', 'React界隈で特に普及'],
        ],
      },
      q3_cells: [
        { icon: 'ic-package', cap: 'JS/TSのユニットテストをすぐ始められる' },
        { icon: 'ic-image', cap: 'スナップショットテストがしやすい' },
        { icon: 'ic-cube', cap: 'モジュールモックが標準で使える' },
      ],
      memo: '近年は Vitest に流れる案件も多いが、資産と記事量ではまだ巨艦。\n「Jestの書き方」は他ランナーでも通じる共通語彙になりやすい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Vitest', desc: 'Vite親和の高速オルタナティブ。', icon: 'ic-package', page: 519 },
            { name: 'Unit Test', desc: 'Jestの主戦場。', icon: 'ic-cube', page: 500 },
            { name: 'スナップショットテスト', desc: 'Jestが広めた手法の一つ。', icon: 'ic-image', page: 510 },
          ],
        },
      ],
    }),
    entry({
      id: 'vitest',
      page: 519,
      term: 'Vitest',
      subtitle: 'Viteと同じ土俵で、テストも速く',
      category: 'テストツール',
      icon: 'ic-package',
      oneline: 'Viteと同じパイプラインを使う、Jest互換寄りの高速テストランナー。',
      q1_text: 'Jestは強力だが、現代のViteプロジェクトでは設定の二重管理や起動の重さが気になった。\n開発サーバと同じ変換でテストしたかった。',
      q2_intro: 'フロントの開発はViteなのに、テストだけJest＋別変換、というねじれが起きがちだった。',
      q2_table: {
        col_before: 'Jest中心の構成',
        col_after: 'Vitest',
        rows: [
          ['設定', 'Jest用に別途', 'vite.config と共有しやすい'],
          ['速度', 'プロジェクト次第で重い', 'ESM前提で軽快なことが多い'],
          ['API', 'デファクトの書き方', 'Jest互換を意識したAPI'],
          ['ウォッチ', '強い', 'HMR感に近い体験を狙う'],
        ],
      },
      q3_cells: [
        { icon: 'ic-rocket', cap: 'Viteプロジェクトでテストを速く回せる' },
        { icon: 'ic-layers', cap: '開発とテストの設定を寄せられる' },
        { icon: 'ic-package', cap: 'Jest資産からの移行が比較的しやすい' },
      ],
      memo: '「Jestの置き換え」として語られがちだが、エコシステムの細部は違う。\n新規Vite案件の初期選択としては、かなり勝ちやすい。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Jest', desc: '比較対象であり互換の参照点。', icon: 'ic-package', page: 518 },
            { name: 'Vite', desc: '同じ思想圏のバンドラ／devサーバ。', icon: 'ic-rocket', page: 150 },
            { name: 'Unit Test', desc: '主に回すテストの種類。', icon: 'ic-cube', page: 500 },
          ],
        },
      ],
    }),
    entry({
      id: 'playwright',
      page: 520,
      term: 'Playwright',
      subtitle: '複数ブラウザを、一つのAPIで操るE2E',
      category: 'テストツール',
      icon: 'ic-monitor',
      oneline: 'Microsoft製のブラウザ自動操作ライブラリ。Chromium / Firefox / WebKit を統一APIで扱える。',
      q1_text: 'E2Eはブラウザ差とフレーク（ちらつき失敗）がつきもの。\n安定して複数ブラウザを同じ脚本で回したかった。',
      q2_intro: 'SeleniumやPuppeteerで単一ブラウザを叩き、待機やセレクタに苦労していた。',
      q2_table: {
        col_before: '従来のブラウザ自動化',
        col_after: 'Playwright',
        rows: [
          ['ブラウザ', 'ドライバ管理が面倒', '主要ブラウザを統一的に'],
          ['待機', 'sleepに頼りがち', '自動待機が強力'],
          ['トレース', '自前で工夫', 'トレース・動画などが充実'],
          ['言語', 'さまざま', 'JS/TSほか複数言語公式'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: '実ユーザーに近いE2Eを安定して書ける' },
        { icon: 'ic-layers', cap: '複数ブラウザでの差分を拾える' },
        { icon: 'ic-file', cap: '失敗時のトレースでデバッグしやすい' },
      ],
      memo: '「Puppeteerの進化形」として語られることもあるが、出自も思想も別物。\nフレークとの戦いはツールが強くなってもゼロにはならない。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'E2E Test', desc: 'Playwrightの主用途。', icon: 'ic-monitor', page: 502 },
            { name: 'Puppeteer', desc: 'Chrome操作の先輩格。', icon: 'ic-package', page: 521 },
            { name: 'スモークテスト', desc: '薄いE2Eとして回すことも。', icon: 'ic-rocket', page: 512 },
          ],
        },
      ],
    }),
    entry({
      id: 'puppeteer',
      page: 521,
      term: 'Puppeteer',
      subtitle: 'Headless Chromeを、脚本で動かす',
      category: 'テストツール',
      icon: 'ic-package',
      oneline: 'Google製のライブラリで、DevToolsプロトコル経由にChrome/Chromiumを自動操作する。',
      q1_text: 'スクショ取得、PDF化、クローリング、E2Eなど、ブラウザを人手なしで動かしたい需要が増えた。\nChromeに強い公式寄りのAPIが求められた。',
      q2_intro: 'ブラウザ操作はSeleniumが巨艦で、設定やドライバのバージョン地獄がつきものだった。',
      q2_table: {
        col_before: 'Selenium中心',
        col_after: 'Puppeteer',
        rows: [
          ['対象', '多ブラウザ・多言語', 'Chrome/Chromiumに特化'],
          ['セットアップ', 'ドライバ管理が必要', 'ブラウザ同梱で始めやすい'],
          ['API', 'WebDriver抽象', 'DevToolsに近い操作感'],
          ['得意', '広域な互換', 'Chrome前提の自動化・計測'],
        ],
      },
      q3_cells: [
        { icon: 'ic-monitor', cap: 'Chromeをスクリプトで操作できる' },
        { icon: 'ic-image', cap: 'スクリーンショットやPDF生成がしやすい' },
        { icon: 'ic-rocket', cap: 'クローラや煙テストの土台にできる' },
      ],
      memo: 'E2Eの本命がPlaywright側に寄ったあとも、スクレイピングや生成用途では健在。\n「ブラウザをコードから触る」の入口教材としても強い。',
      sidebar_groups: [
        {
          label: '関連キーワード',
          items: [
            { name: 'Playwright', desc: '多ブラウザE2Eの有力株。', icon: 'ic-monitor', page: 520 },
            { name: 'E2E Test', desc: '用途のひとつ。', icon: 'ic-monitor', page: 502 },
            { name: 'ヘッドレス', desc: '画面なしでブラウザを走らせるモード。', icon: 'ic-monitor' },
          ],
        },
      ],
    }),
  ],
};

module.exports = { intranet, dump, network, ch9, ch10 };
