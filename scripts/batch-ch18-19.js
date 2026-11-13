#!/usr/bin/env node
/**
 * Ch18 AWS 残り語 + Ch19 GCP を content.js に追加する。
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const content = require('../content.js');

function entry(p) {
  return { icon: p.icon || 'ic-server', compact: true, ...p };
}
function related(items) {
  return [{ label: '関連キーワード', items }];
}

const ch18 = [
  entry({
    id: 'ec2', page: 805, term: 'EC2', reading: 'イーシーツー',
    category: 'AWS', icon: 'ic-server',
    oneline: 'AWS上で仮想サーバー（インスタンス）を借りて動かすサービス。',
    q1_text: '自分で物理サーバーを買うと、調達も故障対応も重い。必要なときだけサーバーが欲しい。',
    q2_intro: 'オンプレのラックやレンタルサーバーを、何ヶ月も前から確保していた。',
    q2_table: {
      col_before: '自前サーバー', col_after: 'EC2',
      rows: [
        ['調達', '購入・設置に時間がかかる', '分単位で起動できる'],
        ['増減', '硬件の限界', 'インスタンスを増やす'],
        ['故障', '自分で交換', '別インスタンスへ移しやすい'],
        ['支払い', '固定費寄り', '使った分に近づけられる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-server', cap: 'クラウド上に仮想サーバーを立てられる' },
      { icon: 'ic-rocket', cap: 'スペックや台数を後から変えやすい' },
      { icon: 'ic-gear', cap: '他のAWSサービスとつなぎやすい' },
    ],
    memo: 'Elastic Compute Cloud の略。\n「サーバー＝EC2」と覚えがちだが、今はコンテナやサーバレスも選択肢。',
    sidebar_groups: related([
      { name: 'IAM', desc: '誰がEC2を操作できるかの権限。' },
      { name: 'ALB', desc: '複数EC2への振り分け。' },
      { name: 'CloudWatch', desc: 'CPUなどメトリクスの監視。' },
    ]),
  }),
  entry({
    id: 'ecs', page: 806, term: 'ECS', reading: 'イーシーエス',
    category: 'AWS', icon: 'ic-package',
    oneline: 'Dockerコンテナを、AWS上で動かし続けるためのオーケストレーションサービス。',
    q1_text: 'コンテナは作れた。でも本番で何台も張り、落ちたら立て直す運用がつらい。',
    q2_intro: 'EC2にSSHして docker run し、プロセス監視も自前でやっていた。',
    q2_table: {
      col_before: 'EC2上の手運用', col_after: 'ECS',
      rows: [
        ['配置', '手動', 'タスク定義で宣言'],
        ['再起動', '自分で対応', 'サービスが立て直しを助ける'],
        ['スケール', '台数を手で増減', 'サービス単位で増やしやすい'],
        ['連携', '自作', 'ALBやIAMとつなぎやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: 'コンテナを本番運用の単位にできる' },
      { icon: 'ic-rocket', cap: '定義どおりに起動・更新しやすい' },
      { icon: 'ic-network', cap: 'ロードバランサーと組み合わせやすい' },
    ],
    memo: 'Elastic Container Service。\nFargateと組むと「サーバーレス寄りコンテナ」、EC2起動タイプだと下地の管理が残る。',
    sidebar_groups: related([
      { name: 'ECR', desc: 'コンテナイメージの置き場。' },
      { name: 'Fargate', desc: 'サーバー管理を薄くする実行形態。' },
      { name: 'Kubernetes', desc: '別系統のコンテナ運用。' },
    ]),
  }),
  entry({
    id: 'ecr', page: 807, term: 'ECR', reading: 'イーシーアール',
    category: 'AWS', icon: 'ic-package',
    oneline: 'Dockerイメージを置いておく、AWSのコンテナレジストリ。',
    q1_text: 'ビルドしたイメージを、デプロイ先から安全に取り出せる置き場が必要になる。',
    q2_intro: 'Docker Hubや自前レジストリに上げ、認証や権限を場当たりで管理していた。',
    q2_table: {
      col_before: '外部／自前レジストリ', col_after: 'ECR',
      rows: [
        ['置き場', 'バラバラ', 'AWS内にまとめられる'],
        ['権限', '別管理', 'IAMで揃えやすい'],
        ['連携', '手作業', 'ECS等から引きやすい'],
        ['スキャン', '別途', '脆弱性スキャン機能もある'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: 'イメージをAWS上に保管できる' },
      { icon: 'ic-check', cap: 'デプロイの取得元を固定できる' },
      { icon: 'ic-gear', cap: 'IAMで誰がpush/pullできるか決められる' },
    ],
    memo: 'Elastic Container Registry。\n「イメージのGitHub Packages的な置き場」と捉えると近い。',
    sidebar_groups: related([
      { name: 'ECS', desc: 'ECRのイメージを動かする先。' },
      { name: 'Docker', desc: 'イメージを作る側の道具。' },
      { name: 'IAM', desc: 'レジストリ操作の権限。' },
    ]),
  }),
  entry({
    id: 'fargate', page: 808, term: 'Fargate', reading: 'ファーゲート',
    category: 'AWS', icon: 'ic-rocket',
    oneline: 'コンテナは動かすが、下のEC2サーバーを自分で管理しなくてよい実行方式。',
    q1_text: 'コンテナ運用したいのに、OSのパッチやキャパシティまで見ると負担が大きい。',
    q2_intro: 'ECSの下にEC2クラスタを張り、空きリソースとAMI更新に追われていた。',
    q2_table: {
      col_before: 'EC2起動タイプ', col_after: 'Fargate',
      rows: [
        ['サーバー管理', '自分', 'AWS側に寄せられる'],
        ['キャパシティ', 'クラスタ設計', 'タスク単位で考えやすい'],
        ['運用負荷', '高い', 'アプリ寄りに集中できる'],
        ['制約', '自由が多い', '細かいホスト制御は減る'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: 'コンテナ実行のインフラ負担を減らせる' },
      { icon: 'ic-check', cap: 'タスク定義中心でデプロイできる' },
      { icon: 'ic-gear', cap: 'ECSと組み合わせて使いやすい' },
    ],
    memo: '「サーバーレスなコンテナ実行」と言われることが多い。\n完全無料ではなく、動かした分の課金。',
    sidebar_groups: related([
      { name: 'ECS', desc: 'Fargateを使う土台のサービス。' },
      { name: 'Lambda', desc: 'もっと短い処理向けのサーバレス。' },
      { name: 'ECR', desc: '動かすイメージの置き場。' },
    ]),
  }),
  entry({
    id: 'lambda', page: 809, term: 'Lambda', reading: 'ラムダ',
    category: 'AWS', icon: 'ic-bolt',
    oneline: 'サーバーを常時立てず、イベントに応じて関数を実行するサーバレス計算サービス。',
    q1_text: 'たまにしか動かない処理のために、常時サーバーを張りたくない。',
    q2_intro: '小さなバッチやWebhook受けも、EC2や常駐プロセスで受けていた。',
    q2_table: {
      col_before: '常駐サーバー', col_after: 'Lambda',
      rows: [
        ['起動', '常時ON', '呼ばれたときだけ動く'],
        ['スケール', '台数設計', '同時実行で伸びやすい'],
        ['運用', 'OSまで見る', '関数と権限が中心'],
        ['向き不向き', '何でも載せがち', '短時間・イベント向き'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: 'イベント駆動で処理を実行できる' },
      { icon: 'ic-check', cap: '常時サーバー代を抑えやすい' },
      { icon: 'ic-gear', cap: 'S3やAPI Gatewayとつなぎやすい' },
    ],
    memo: 'コールドスタートや実行時間制限がある。\n「全部Lambda」は設計を見誤るとつらい。',
    sidebar_groups: related([
      { name: 'API Gateway', desc: 'HTTPの入口としてよく組む。' },
      { name: 'S3', desc: 'アップロードイベントの定番トリガー。' },
      { name: 'CloudWatch', desc: 'ログやメトリクスの受け皿。' },
    ]),
  }),
  entry({
    id: 's3', page: 810, term: 'S3', reading: 'エススリー',
    category: 'AWS', icon: 'ic-package',
    oneline: 'ファイルやオブジェクトを、ほぼ無限に置けるAWSのオブジェクトストレージ。',
    q1_text: '画像やバックアップをサーバーのディスクに置くと、容量も冗長化もすぐ詰まる。',
    q2_intro: 'アプリサーバーのローカルディスクや、NASにファイルを置いていた。',
    q2_table: {
      col_before: 'サーバー内ディスク', col_after: 'S3',
      rows: [
        ['容量', 'ディスク上限', '実質かなり大きく伸ばせる'],
        ['配信', 'アプリ経由', '直接配信やCloudFrontと組める'],
        ['耐久性', '一台依存', '複数拠点に分散される設計'],
        ['用途', 'ログ・画像・バックアップ', '静的サイト置き場にも'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: '大容量ファイルを預けられる' },
      { icon: 'ic-network', cap: 'URL経由で取得・配信しやすい' },
      { icon: 'ic-gear', cap: '他サービスへのイベント元になる' },
    ],
    memo: 'Simple Storage Service。バケットにオブジェクトを入れる。\n「フォルダ」に見えても、本質はキーとオブジェクト。',
    sidebar_groups: related([
      { name: 'CloudFront', desc: 'S3の前段CDN。' },
      { name: 'IAM', desc: 'バケット操作の権限。' },
      { name: 'Lambda', desc: 'オブジェクト作成をトリガーにできる。' },
    ]),
  }),
  entry({
    id: 'rds', page: 811, term: 'RDS', reading: 'アールディーエス',
    category: 'AWS', icon: 'ic-database',
    oneline: 'MySQLやPostgreSQLなどを、マネージドで借りられるリレーショナルDBサービス。',
    q1_text: 'DBサーバーのOS更新、バックアップ、フェイルオーバーまで自前だと重い。',
    q2_intro: 'EC2にDBを自分で入れ、バックアップもcronで取っていた。',
    q2_table: {
      col_before: '自前DBサーバー', col_after: 'RDS',
      rows: [
        ['運用', 'OSから自分', 'バックアップ等がマネージド'],
        ['可用性', '自作構成', 'Multi-AZなど選択肢がある'],
        ['スケール', '手作業', 'インスタンス変更がしやすい'],
        ['自由度', '高い', 'ホストOSには入れない'],
      ],
    },
    q3_cells: [
      { icon: 'ic-database', cap: '定番RDBをマネージドで使える' },
      { icon: 'ic-check', cap: 'バックアップやパッチの負担を減らせる' },
      { icon: 'ic-gear', cap: 'アプリは接続先を変える感覚で使える' },
    ],
    memo: 'Relational Database Service。\n「RDBをAWSに預ける」入口。Auroraは系統の上位オプション。',
    sidebar_groups: related([
      { name: 'PostgreSQL', desc: 'RDSで選べるエンジンの一例。' },
      { name: 'MySQL', desc: '同様に選べるエンジン。' },
      { name: 'DynamoDB', desc: 'マネージドNoSQL側の代表。' },
    ]),
  }),
  entry({
    id: 'dynamodb', page: 812, term: 'DynamoDB', reading: 'ダイナモディービー',
    category: 'AWS', icon: 'ic-database',
    oneline: 'キーバリュー／ドキュメント寄りで、スケールしやすいAWSのマネージドNoSQL。',
    q1_text: 'アクセスが急増するデータに、RDBのスケール設計が追いつかないことがある。',
    q2_intro: '全部RDBに載せ、キャッシュや分割でしのいでいた。',
    q2_table: {
      col_before: 'RDB一本', col_after: 'DynamoDB',
      rows: [
        ['スケール', '縦・手分割', '高いスループット向けに伸びやすい'],
        ['スキーマ', '固定寄り', '柔軟な項目'],
        ['運用', 'サーバー管理', 'フルマネージド'],
        ['クエリ', 'SQLが強い', 'アクセスパターン設計が重要'],
      ],
    },
    q3_cells: [
      { icon: 'ic-database', cap: '高負荷向けのNoSQLを使える' },
      { icon: 'ic-rocket', cap: 'キャパシティを伸ばしやすい' },
      { icon: 'ic-gear', cap: 'サーバレスアプリと相性が良い' },
    ],
    memo: '「なんでもDynamo」は危険。結合や複雑検索はRDBの方が楽なことが多い。',
    sidebar_groups: related([
      { name: 'RDS', desc: 'マネージドRDBとの対比。' },
      { name: 'NoSQL', desc: '上位の考え方。' },
      { name: 'Lambda', desc: 'よく一緒に組む計算側。' },
    ]),
  }),
  entry({
    id: 'cloudfront', page: 813, term: 'CloudFront', reading: 'クラウドフロント',
    category: 'AWS', icon: 'ic-network',
    oneline: '世界のエッジからコンテンツを配る、AWSのCDNサービス。',
    q1_text: 'オリジン（本丸）に毎回取りに行くと、遠いユーザーほど遅くなる。',
    q2_intro: 'アプリサーバーやS3から直接配信し、遅延と負荷をそのまま受けていた。',
    q2_table: {
      col_before: 'オリジン直配信', col_after: 'CloudFront',
      rows: [
        ['距離', '遠いと遅い', '近いエッジから返す'],
        ['負荷', 'オリジン集中', 'キャッシュで緩和'],
        ['HTTPS', '自分で終端', '証明書とセットで扱いやすい'],
        ['用途', '静的も動的も', '静的配信が特に定番'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: 'コンテンツを高速に届けられる' },
      { icon: 'ic-rocket', cap: 'オリジンの負荷を減らせる' },
      { icon: 'ic-check', cap: 'S3静的配信と組み合わせやすい' },
    ],
    memo: 'CDNのAWS版。キャッシュ消しも運用の一部。',
    sidebar_groups: related([
      { name: 'S3', desc: 'オリジンの定番。' },
      { name: 'Route 53', desc: 'ドメイン側の名前解決。' },
      { name: 'ALB', desc: '動的オリジンになりうる。' },
    ]),
  }),
  entry({
    id: 'route53', page: 814, term: 'Route 53', reading: 'ルートフィフティスリー',
    category: 'AWS', icon: 'ic-network',
    oneline: 'ドメイン名をIPやAWSリソースへつなぐ、AWSのDNSサービス。',
    q1_text: 'サービスが増えると、「どの名前がどこを向いているか」の管理が必要になる。',
    q2_intro: 'ドメイン業者のDNS画面や、サーバのhosts感覚でレコードを管理していた。',
    q2_table: {
      col_before: '外部DNS手管理', col_after: 'Route 53',
      rows: [
        ['連携', '手動更新', 'ALBやCloudFrontとつなぎやすい'],
        ['ヘルス', '別監視', 'フェイルオーバー設定も可能'],
        ['権限', '業者画面', 'IAMで管理できる'],
        ['自動化', 'しにくい', 'IaCしやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: '名前解決をAWS内で管理できる' },
      { icon: 'ic-check', cap: '障害時の向き先切り替えに使える' },
      { icon: 'ic-gear', cap: '他リソースとDNSを一体運用できる' },
    ],
    memo: '名前はDNSのUDP 53番ポート由来。\n「ドメイン＝Route 53」ではない（登録とDNSは別も可）。',
    sidebar_groups: related([
      { name: 'DNS', desc: '上位のしくみ。' },
      { name: 'CloudFront', desc: 'よく向ける先。' },
      { name: 'ALB', desc: 'アプリ入口の向き先。' },
    ]),
  }),
  entry({
    id: 'iam', page: 815, term: 'IAM', reading: 'アイエーエム',
    category: 'AWS', icon: 'ic-users',
    oneline: '誰が・何を・どこまでやってよいかを決める、AWSの権限管理の仕組み。',
    q1_text: 'ルートアカウントや共有鍵だと、事故ったときに止められない。',
    q2_intro: '共用ユーザーや、アプリに強い権限キーを直書きしていた。',
    q2_table: {
      col_before: '共有アカウント', col_after: 'IAM',
      rows: [
        ['権限', '全部できる', '最小権限に分けられる'],
        ['人', '区別しにくい', 'ユーザー／ロールで分ける'],
        ['アプリ', '鍵の使い回し', 'ロールで一時権限'],
        ['監査', '弱い', '誰が何をしたか追いやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-users', cap: '人やサービスごとに権限を分けられる' },
      { icon: 'ic-check', cap: 'やりすぎ権限を減らせる' },
      { icon: 'ic-gear', cap: '他サービスの操作入口になる' },
    ],
    memo: 'Identity and Access Management。\n「IAMを通す」はAWSの基本動作。',
    sidebar_groups: related([
      { name: 'EC2', desc: 'インスタンスにロールを付ける。' },
      { name: 'S3', desc: 'バケットポリシーと合わせて使う。' },
      { name: 'Lambda', desc: '実行ロールが必須級。' },
    ]),
  }),
  entry({
    id: 'api-gateway', page: 816, term: 'API Gateway', reading: 'エーピーアイゲートウェイ',
    category: 'AWS', icon: 'ic-network',
    oneline: 'HTTP APIの入口を作り、認証やルーティングを前段で引き受けるサービス。',
    q1_text: 'Lambdaや微服务に、そのままインターネットを晒すのは怖いし面倒。',
    q2_intro: 'アプリサーバーに直接APIを生やし、認証もCORSも全部アプリでやっていた。',
    q2_table: {
      col_before: 'アプリ直公開', col_after: 'API Gateway',
      rows: [
        ['入口', '各サービスごと', 'ゲートウェイに集約'],
        ['認証', '自前実装', '仕組みを載せやすい'],
        ['スロットル', 'アプリ任せ', '前段で制限できる'],
        ['接続先', '固定サーバー', 'Lambda等へつなげる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: 'APIの正面玄関を作れる' },
      { icon: 'ic-check', cap: '認証や制限を前段に寄せられる' },
      { icon: 'ic-rocket', cap: 'サーバレス構成の入口になる' },
    ],
    memo: 'REST API / HTTP API など種類がある。\n「API」そのものではなく、入口の装置。',
    sidebar_groups: related([
      { name: 'Lambda', desc: '裏側の処理の定番。' },
      { name: 'API', desc: '届ける対象の概念。' },
      { name: 'IAM', desc: '呼び出し権限の管理。' },
    ]),
  }),
  entry({
    id: 'sqs', page: 817, term: 'SQS', reading: 'エスキューエス',
    category: 'AWS', icon: 'ic-layers',
    oneline: 'メッセージをキューに溜めて、後続処理へ非同期で渡すマネージドキュー。',
    q1_text: '重い処理をリクエストのその場でやると、タイムアウトや再実行がつらい。',
    q2_intro: '同期APIの中で全部やり切るか、自前のジョブテーブルで再実行していた。',
    q2_table: {
      col_before: '同期で全部処理', col_after: 'SQS',
      rows: [
        ['受け渡し', 'その場で実行', 'キューに入れて後で処理'],
        ['ピーク', 'サーバーが落ちる', '溜めてならせる'],
        ['再試行', '自前', '可視性タイムアウト等で再配信'],
        ['結合', '強い', '生産者と消費者を分けられる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-layers', cap: '処理を非同期に切り離せる' },
      { icon: 'ic-rocket', cap: 'ピークを緩衝できる' },
      { icon: 'ic-check', cap: '失敗時の再処理設計がしやすい' },
    ],
    memo: 'Simple Queue Service。\nPub/SubのSNSと組み合わせることも多い。',
    sidebar_groups: related([
      { name: 'Lambda', desc: 'キューをトリガーに実行できる。' },
      { name: 'Pub/Sub', desc: '近い非同期の考え方。' },
      { name: 'Webhook', desc: '受けた通知をキューへ逃がすこともある。' },
    ]),
  }),
  entry({
    id: 'cloudwatch', page: 818, term: 'CloudWatch', reading: 'クラウドウォッチ',
    category: 'AWS', icon: 'ic-monitor',
    oneline: 'ログ・メトリクス・アラームなど、AWSリソースの様子を見守る監視サービス。',
    q1_text: '動いているかはユーザー報告待ち、では障害対応が後手になる。',
    q2_intro: 'サーバーにSSHしてログを眺め、CPUもtopでその場確認していた。',
    q2_table: {
      col_before: '手探り監視', col_after: 'CloudWatch',
      rows: [
        ['ログ', 'ファイル散在', '集約して検索・保管'],
        ['数値', 'その場確認', 'メトリクスとして連続記録'],
        ['通知', '人の気づき', 'アラームで飛ばせる'],
        ['対象', '自前装置', 'AWSサービスと最初からつながる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-monitor', cap: 'ログと数値をまとめて見られる' },
      { icon: 'ic-clock', cap: 'しきい値超えをアラームにできる' },
      { icon: 'ic-check', cap: '障害の初動が早くなる' },
    ],
    memo: '「見てるよ」のCloud Watch。\nログ（Logs）とメトリクス／アラームはセットで覚えると迷子になりにくい。',
    sidebar_groups: related([
      { name: 'X-Ray', desc: 'リクエストの追跡（トレーシング）。' },
      { name: 'ログ', desc: '一般概念としての記録。' },
      { name: 'Lambda', desc: 'ログがCloudWatchに流れやすい。' },
    ]),
  }),
  entry({
    id: 'x-ray', page: 819, term: 'X-Ray', reading: 'エックスレイ',
    category: 'AWS', icon: 'ic-network',
    oneline: 'リクエストがどのサービスをどう通ったかを追跡し、遅延や失敗箇所を可視化する仕組み。',
    q1_text: 'マイクロサービスやLambda連携だと、「どこで遅いか」がログだけでは追いにくい。',
    q2_intro: '各サービスのログ時刻を目視で突き合わせ、勘でボトルネックを当てていた。',
    q2_table: {
      col_before: 'ログ突合', col_after: 'X-Ray',
      rows: [
        ['経路', '想像', 'トレースで見える'],
        ['遅延', '感覚', 'セグメントごとに測れる'],
        ['障害箇所', '探し回る', 'エラー箇所が浮かびやすい'],
        ['対象', '自前計装', 'AWSサービスと連携しやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: '分散した処理の経路を追える' },
      { icon: 'ic-clock', cap: 'どこが遅いかを切り分けやすい' },
      { icon: 'ic-check', cap: 'CloudWatchと併用しやすい' },
    ],
    memo: '分散トレーシングのAWSサービス。\nOpenTelemetryなど汎用の話ともつながる。',
    sidebar_groups: related([
      { name: 'CloudWatch', desc: '監視の兄弟分。' },
      { name: 'API Gateway', desc: 'トレースの入口になりやすい。' },
      { name: 'Lambda', desc: '計装対象の定番。' },
    ]),
  }),
  entry({
    id: 'direct-connect', page: 820, term: 'ダイレクトコネクト', reading: 'ダイレクトコネクト',
    category: 'AWS', icon: 'ic-network',
    oneline: 'インターネットを経由せず、専用線でオンプレとAWSをつなぐ接続サービス。',
    q1_text: 'インターネットVPNだと、帯域や安定性が業務要件に足りないことがある。',
    q2_intro: '拠点とクラウドをVPNでつなぎ、混雑や揺らぎを飲み込んでいた。',
    q2_table: {
      col_before: 'インターネットVPN', col_after: 'ダイレクトコネクト',
      rows: [
        ['経路', '公衆網経由', '専用寄りの接続'],
        ['安定性', '揺れやすい', '要件に合わせやすい'],
        ['帯域', '上限が見えにくい', '契約で設計しやすい'],
        ['導入', '速い', '回線手配など時間がかかる'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: '拠点とAWSを安定してつなげる' },
      { icon: 'ic-check', cap: '大容量通信の土台になる' },
      { icon: 'ic-server', cap: 'ハイブリッド構成の定番手段になる' },
    ],
    memo: 'AWS Direct Connect。\n「直結」。個人開発より、企業ネットワーク案件でよく出る。',
    sidebar_groups: related([
      { name: 'VPN', desc: 'もっと手軽な接続手段。' },
      { name: 'トランジットゲートウェイ', desc: '多数VPC接続のハブ。' },
      { name: 'VM', desc: 'つなぐ先の計算資源の一例。' },
    ]),
  }),
  entry({
    id: 'transit-gateway', page: 821, term: 'トランジットゲートウェイ', reading: 'トランジットゲートウェイ',
    category: 'AWS', icon: 'ic-network',
    oneline: '複数のVPCやオンプレ接続を、ハブ経由でまとめてつなぐネットワークの中継点。',
    q1_text: 'VPC同士をフルメッシュでつなぐと、接続数が爆発して管理不能になる。',
    q2_intro: 'VPCピアリングを組み合わせ、図が蜘蛛の巣になっていた。',
    q2_table: {
      col_before: 'ピアリング乱立', col_after: 'トランジットゲートウェイ',
      rows: [
        ['接続数', '組み合わせ爆発', 'ハブに集約'],
        ['変更', '影響が大きい', 'アタッチの増減で済む'],
        ['オンプレ', '個別設計', '同じハブに寄せやすい'],
        ['見通し', '悪い', '中心が見える'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: '多数ネットワークをハブで結べる' },
      { icon: 'ic-check', cap: '接続管理を単純化できる' },
      { icon: 'ic-gear', cap: '大規模AWS構成の骨格になる' },
    ],
    memo: 'Transit Gateway。\n「乗り継ぎ空港」イメージで、各VPCがスポーク。',
    sidebar_groups: related([
      { name: 'ダイレクトコネクト', desc: 'オンプレ側からハブへ入る道。' },
      { name: 'VPN', desc: 'もう一つの入り口。' },
      { name: 'ALB', desc: 'アプリ入口とは別レイヤの話。' },
    ]),
  }),
];

const ch19 = [
  entry({
    id: 'cloud-run', page: 850, term: 'Cloud Run', reading: 'クラウドラン',
    category: 'GCP', icon: 'ic-rocket',
    oneline: 'コンテナを、リクエストに応じてスケールさせて動かすGCPのサービス。',
    q1_text: 'コンテナでアプリはできた。サーバー常時張りは無駄で、Kubernetesまでは重い。',
    q2_intro: 'GCE（仮想マシン）に常時デプロイするか、GKEの学習コストを払っていた。',
    q2_table: {
      col_before: '常時VM / 重いK8s', col_after: 'Cloud Run',
      rows: [
        ['単位', 'サーバー', 'コンテナサービス'],
        ['スケール', '手管理', 'リクエストに応じて伸び縮み'],
        ['運用', 'OSまで', 'コンテナと設定が中心'],
        ['ゼロスケール', 'しにくい', '閑散時は縮めやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: 'コンテナを手軽に本番公開できる' },
      { icon: 'ic-check', cap: '負荷に合わせて自動で伸び縮みしやすい' },
      { icon: 'ic-gear', cap: 'K8sより入口が低い' },
    ],
    memo: 'AWSでいうとFargate＋ALB寄りの体験に近い、と言われることも。\nHTTP向き。',
    sidebar_groups: related([
      { name: 'GKE', desc: 'もっと制御したいときのK8s。' },
      { name: 'Cloud Functions', desc: 'もっと小さい関数単位。' },
      { name: 'Artifact Registry', desc: 'イメージの置き場。' },
    ]),
  }),
  entry({
    id: 'gke', page: 851, term: 'GKE', reading: 'ジーケーイー',
    category: 'GCP', icon: 'ic-package',
    oneline: 'Googleが運用を助ける、Kubernetesのマネージドサービス。',
    q1_text: 'Kubernetesは強力だが、コントロールプレーン運用がつらい。',
    q2_intro: '自前でk8sクラスタを組み、アップグレードと障害対応に追われていた。',
    q2_table: {
      col_before: '自前Kubernetes', col_after: 'GKE',
      rows: [
        ['制御面', '自分で守る', 'マネージドに寄せられる'],
        ['アップグレード', '怖い行事', '支援機能がある'],
        ['統合', '自作', 'GCPの権限・監視とつなぎやすい'],
        ['学習', '全部自分', 'アプリ寄りのK8sに集中しやすい'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: 'K8sをマネージドで使える' },
      { icon: 'ic-rocket', cap: '大規模コンテナ運用の土台になる' },
      { icon: 'ic-check', cap: 'Cloud Runより細かく制御できる' },
    ],
    memo: 'Google Kubernetes Engine。\n「まずCloud Run、足りなければGKE」もよくある進め方。',
    sidebar_groups: related([
      { name: 'Kubernetes', desc: 'GKEが預かる仕組み本体。' },
      { name: 'Cloud Run', desc: 'より簡易なコンテナ実行。' },
      { name: 'Artifact Registry', desc: 'イメージ供給元。' },
    ]),
  }),
  entry({
    id: 'cloud-storage', page: 852, term: 'Cloud Storage', reading: 'クラウドストレージ',
    category: 'GCP', icon: 'ic-package',
    oneline: 'オブジェクト（ファイル）を置く、GCPのマネージドストレージ。',
    q1_text: '画像やバックアップをインスタンスのディスクに置くと、すぐ限界が来る。',
    q2_intro: 'サーバローカルや共有ディスクにファイルを置いていた。',
    q2_table: {
      col_before: 'ローカルディスク', col_after: 'Cloud Storage',
      rows: [
        ['容量', 'ディスク依存', 'オブジェクトとして大きく預けられる'],
        ['共有', 'コピー', '権限付きで共有しやすい'],
        ['耐久', '一台リスク', '冗長化された置き場'],
        ['対比', '——', 'AWS S3に相当'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: 'ファイルをクラウドに預けられる' },
      { icon: 'ic-network', cap: '配信やバックアップの土台になる' },
      { icon: 'ic-check', cap: '他GCPサービスと連携しやすい' },
    ],
    memo: 'バケットにオブジェクト。S3と同系統の概念。',
    sidebar_groups: related([
      { name: 'S3', desc: 'AWS側の対応サービス。' },
      { name: 'Cloud CDN', desc: '配信を速くする前段。' },
      { name: 'Cloud Functions', desc: 'オブジェクトイベントで起動することも。' },
    ]),
  }),
  entry({
    id: 'cloud-sql', page: 853, term: 'Cloud SQL', reading: 'クラウドエスキューエル',
    category: 'GCP', icon: 'ic-database',
    oneline: 'MySQL / PostgreSQL などをマネージドで使える、GCPのリレーショナルDB。',
    q1_text: 'DBのバックアップやパッチを、アプリ開発の横でやり続けるのはきつい。',
    q2_intro: 'Compute Engine上にDBを自前構築していた。',
    q2_table: {
      col_before: '自前DB VM', col_after: 'Cloud SQL',
      rows: [
        ['運用', 'OSから自分', 'マネージドに寄せられる'],
        ['バックアップ', '自作', '機能として用意される'],
        ['接続', 'IP直', 'IAMやコネクタ等の選択肢'],
        ['対比', '——', 'AWS RDSに相当'],
      ],
    },
    q3_cells: [
      { icon: 'ic-database', cap: '定番RDBをGCP上で借りられる' },
      { icon: 'ic-check', cap: '運用雑務を減らせる' },
      { icon: 'ic-gear', cap: 'アプリは接続先変更で移行しやすい' },
    ],
    memo: 'Cloud SQL。SpannerやFirestoreとは役割が違う。',
    sidebar_groups: related([
      { name: 'RDS', desc: 'AWS側の対応。' },
      { name: 'PostgreSQL', desc: '選べるエンジンの一例。' },
      { name: 'Cloud Run', desc: 'アプリ側の実行環境例。' },
    ]),
  }),
  entry({
    id: 'cloud-functions', page: 854, term: 'Cloud Functions', reading: 'クラウドファンクションズ',
    category: 'GCP', icon: 'ic-rocket',
    oneline: 'イベントやHTTPに応じて、関数単位で動かすGCPのサーバレス実行環境。',
    q1_text: '小さな処理のために、常時インスタンスを張りたくない。',
    q2_intro: '小さなWebhookもVMや常駐プロセスで受けていた。',
    q2_table: {
      col_before: '常駐プロセス', col_after: 'Cloud Functions',
      rows: [
        ['単位', 'サーバー／コンテナ', '関数'],
        ['起動', '常時', 'イベントで起動'],
        ['運用', '広い', 'コードとトリガーが中心'],
        ['対比', '——', 'AWS Lambdaに相当'],
      ],
    },
    q3_cells: [
      { icon: 'ic-rocket', cap: '小さい処理をサーバレスで置ける' },
      { icon: 'ic-check', cap: 'ストレージやPub/Subとつなぎやすい' },
      { icon: 'ic-gear', cap: '試しの自動化に向く' },
    ],
    memo: '第1世代／第2世代で体験が違う。長い処理はCloud Run側、もあり。',
    sidebar_groups: related([
      { name: 'Lambda', desc: 'AWS側の対応。' },
      { name: 'Cloud Run', desc: 'コンテナ単位の近い選択肢。' },
      { name: 'Cloud Storage', desc: 'トリガー元の一例。' },
    ]),
  }),
  entry({
    id: 'cloud-cdn', page: 855, term: 'Cloud CDN', reading: 'クラウドシーディーエヌ',
    category: 'GCP', icon: 'ic-network',
    oneline: 'コンテンツをエッジから配り、オリジンの負荷と遅延を減らすGCPのCDN。',
    q1_text: '遠いユーザーへの配信や、オリジンへの集中アクセスがボトルネックになる。',
    q2_intro: 'オリジンから直接配り、遅延と負荷をそのまま受けていた。',
    q2_table: {
      col_before: 'オリジン直', col_after: 'Cloud CDN',
      rows: [
        ['遅延', '距離依存', '近いキャッシュから'],
        ['負荷', 'オリジン集中', 'キャッシュで緩和'],
        ['設定', '自前CDN', 'GCPのLB等と統合'],
        ['対比', '——', 'CloudFrontに相当'],
      ],
    },
    q3_cells: [
      { icon: 'ic-network', cap: '配信を速くできる' },
      { icon: 'ic-rocket', cap: 'オリジン負荷を減らせる' },
      { icon: 'ic-check', cap: '静的・動的の前段に置ける' },
    ],
    memo: 'Google Cloud CDN。負荷分散とセットで語られることが多い。',
    sidebar_groups: related([
      { name: 'CloudFront', desc: 'AWS側の対応。' },
      { name: 'Cloud Storage', desc: '静的オリジンの一例。' },
      { name: 'Cloud Run', desc: '動的オリジンの一例。' },
    ]),
  }),
  entry({
    id: 'artifact-registry', page: 856, term: 'Artifact Registry', reading: 'アーティファクトレジストリ',
    category: 'GCP', icon: 'ic-package',
    oneline: 'コンテナ画像や言語パッケージなどを置く、GCPの成果物レジストリ。',
    q1_text: 'ビルド成果物の置き場がサービスごとに散らかると、権限も経路も増える。',
    q2_intro: 'Container Registryや、言語ごとの別リポジトリを併用していた。',
    q2_table: {
      col_before: '置き場が分散', col_after: 'Artifact Registry',
      rows: [
        ['種類', '別サービス', 'まとめて管理しやすい'],
        ['権限', 'バラバラ', 'IAMで揃えやすい'],
        ['CI', '個別設定', 'デプロイ経路を一本化しやすい'],
        ['対比', '——', 'ECR＋αに相当するイメージ'],
      ],
    },
    q3_cells: [
      { icon: 'ic-package', cap: 'ビルド成果物をGCP上に保管できる' },
      { icon: 'ic-check', cap: 'Cloud RunやGKEへの供給元になる' },
      { icon: 'ic-gear', cap: '権限管理をまとめやすい' },
    ],
    memo: '旧Container Registryからの移行先、という文脈でもよく出る。',
    sidebar_groups: related([
      { name: 'ECR', desc: 'AWS側のコンテナレジストリ。' },
      { name: 'Cloud Run', desc: 'イメージの実行先。' },
      { name: 'GKE', desc: 'イメージの実行先。' },
    ]),
  }),
];

function ensureChapter(number, title) {
  let ch = content.chapters.find(c => c.number === number);
  if (!ch) {
    ch = { number, title, entries: [] };
    content.chapters.push(ch);
    content.chapters.sort((a, b) => a.number - b.number);
  } else {
    ch.title = title;
  }
  return ch;
}

function addAll(ch, entries) {
  const ids = new Set(ch.entries.map(e => e.id));
  let added = 0;
  for (const e of entries) {
    if (ids.has(e.id)) {
      console.warn('skip', e.id);
      continue;
    }
    ch.entries.push(e);
    added++;
  }
  return added;
}

function linkPages() {
  const all = [];
  for (const ch of content.chapters) for (const e of ch.entries) if (!e.skip) all.push(e);
  const byTerm = new Map(all.map(e => [e.term, e]));
  const byReading = new Map(all.filter(e => e.reading).map(e => [e.reading, e]));
  for (const e of all) {
    for (const g of e.sidebar_groups || []) {
      for (const item of g.items || []) {
        const hit = byTerm.get(item.name) || byReading.get(item.name)
          || all.find(x => x.term.toLowerCase() === String(item.name).toLowerCase());
        if (hit) item.page = hit.page;
      }
    }
  }
}

// ic-bolt may not exist — fall back handled in generate if missing; check icons
const iconsSvg = fs.readFileSync(path.join(ROOT, 'icons.svg'), 'utf8');
if (!iconsSvg.includes('id="ic-bolt"')) {
  const lambda = ch18.find(e => e.id === 'lambda');
  if (lambda) lambda.icon = 'ic-rocket';
}

const a18 = ensureChapter(18, 'AWS');
const a19 = ensureChapter(19, 'GCP');
console.log('added Ch18', addAll(a18, ch18));
console.log('added Ch19', addAll(a19, ch19));
linkPages();

fs.writeFileSync(path.join(ROOT, 'content.js'), 'module.exports = ' + JSON.stringify(content, null, 2) + ';\n');

// verify
const pages = new Map();
let dups = [];
for (const ch of content.chapters) {
  for (const e of ch.entries) {
    if (e.skip) continue;
    if (pages.has(e.page)) dups.push([e.page, pages.get(e.page), e.term]);
    else pages.set(e.page, e.term);
  }
}
console.log('dups', dups);
console.log('Ch18', a18.entries.map(e => e.page + ':' + e.term).join(', '));
console.log('Ch19', a19.entries.map(e => e.page + ':' + e.term).join(', '));
