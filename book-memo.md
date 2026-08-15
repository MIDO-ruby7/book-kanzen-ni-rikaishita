# 差分でわかる エンジニアのゆるい辞典 — 企画メモ

## コンセプト

- **テーマ**: 未経験からエンジニアに転職し、3年間で出会った言葉を全部まとめた個人辞典
- **形式**: 同人誌。棚卸しとして、出会った言葉を網羅することを優先
- **レイアウト**: 1語1ページ（一部1ページ2語も検討）
- **ページ数**: 約360語 → 360ページ超。2冊分割も視野に
  - 分割案：Ch 1〜13（開発寄り）/ Ch 14〜26（インフラ・設計・AI寄り）
- **各ページ構成**:
  1. なぜ生まれた？
  2. それまでどうしていた？（比較表）
  3. ○○で何ができる？（アイコン3点）
  4. ひとことメモ
  5. サイドバー：関連キーワード（ページ参照）

---

## 目次（全31章 ＋ Appendix）

### Ch 1　Git・GitHub
Repository / Clone / Fork / Branch / Commit / Push / Pull / Merge / Rebase /
Cherry-pick / Conflict / Revert / Reset / Tag / OSS / コントリビュート

### Ch 2　Webのしくみ
Client / Server / Request / Response / HTTP / HTTPS / DNS / Domain /
IP Address / Port / Cookie / Session / JWT / Header

### Ch 3　データフォーマット
JSON / YAML / TOML / XML / CSV / スキーマ

### Ch 4　API
API / Endpoint / REST / GraphQL / OpenAPI / Status Code

### Ch 5　通信プロトコル
gRPC / WebSocket / Webhook / Pub/Sub

### Ch 6　データベース
Database / RDB / RDBMS / NoSQL / Table / Record / Primary Key / Foreign Key /
Index / SQL / ORM / Migration / Seeder / Transaction / Lock / 行ロック /
テーブルロック / デッドロック / N+1 / Cache / 正規化 / ER図

— RDBMS — MySQL / PostgreSQL / SQLite
— NoSQL — Redis / MongoDB

### Ch 7　フロントエンド
HTML / CSS / JavaScript / TypeScript / バニラ / ES Modules / DOM / Event /
Component / State / Props / CSR / SSR / SSG / ISR / Hydration / Virtual DOM /
非同期 / Promise / async・await / CSSフレームワーク / UIコンポーネントライブラリ

— ランタイム — Node.js / Bun / Deno
— パッケージ管理 — npm / yarn / pnpm
— フレームワーク — React / Vue / Next.js / Nuxt.js
— ツール — Vite / ESLint / Biome / OXC / Tailwind CSS / MUI / shadcn/ui / Electron

### Ch 8　バックエンド言語・フレームワーク
— 言語 — Ruby / Python / Go / PHP / Java / Kotlin / Rust / Swift
— フレームワーク — Rails / Express / Hono / Django / FastAPI / Flask / Gin / Laravel / Spring Boot

### Ch 9　モバイル
iOS / Android / ネイティブアプリ / ハイブリッドアプリ
— クロスプラットフォーム — React Native / Flutter / Dart
— ネイティブ言語 — Swift / Kotlin

### Ch 10　テスト
Unit Test / Integration Test / E2E Test / Mock / Stub / Fixture / TDD / BDD /
カバレッジ / デバッグ / スナップショットテスト / 回帰テスト / スモークテスト /
境界値分析 / 同値分割 / ホワイトボックステスト / ブラックボックステスト / テスト設計

— ツール — Jest / Vitest / Playwright / Puppeteer

### Ch 11　パッケージ管理・バージョン管理
パッケージ / 依存関係 / セマンティックバージョニング / ロックファイル

— 言語別 — npm / yarn / pnpm / pip / gem / cargo / go mod
— OS — Homebrew / apt
— バージョン管理 — mise / nvm / rbenv / pyenv

### Ch 12　Linux・ターミナル
Terminal / Shell / Bash / Zsh / PATH / SSH / Environment Variable /
Process / Thread / Cron / Daemon / 正規表現 / パーミッション /
ping / curl

— ツール — Vim / Markdown / Ghostty

### Ch 13　Docker
Docker / Image / Container / Volume / Network / Docker Compose

### Ch 14　デプロイ・CI/CD
**DevOps** / ローカル / ステージング / 本番 / Build / Bundle / Artifact / Release /
Rollback / CI / CD / Pipeline / Canary Release / Blue/Green Deployment

— ツール — GitHub Actions / CircleCI / Vercel / Netlify

### Ch 15　開発プロセス
— ウォーターフォール系 — PMBOK / ウォーターフォール / WBS / ガントチャート / マイルストーン / ステークホルダー / スコープ
— アジャイル系 — アジャイル / スクラム / スプリント / レトロスペクティブ / ベロシティ
— 共通 — コードレビュー / ペアプロ / イシュー

### Ch 16　クラウド・インフラ（概念）
Cloud / オンプレミス / IaaS / PaaS / SaaS / VM / VPC / Load Balancer /
CDN / Object Storage / Serverless / Reverse Proxy / Kubernetes / Nginx /
トポロジー / リージョン / AZ（アベイラビリティゾーン）

### Ch 17　IaC（Infrastructure as Code）
IaC / 宣言的構成 / 冪等性
— ツール — Terraform / Ansible / Helm / Pulumi

### Ch 18　AWS
EC2 / ECS / ECR / Fargate / Lambda / S3 / RDS / DynamoDB /
CloudFront / Route 53 / IAM / ALB / API Gateway / SQS / CloudWatch / X-Ray

### Ch 19　GCP
Cloud Run / GKE / Cloud Storage / Cloud SQL / Cloud Functions /
Cloud CDN / Artifact Registry

### Ch 20　Azure
VM / Container Apps / Functions / Blob Storage / SQL Database /
AKS / Front Door / Entra ID

### Ch 21　Firebase・Supabase
— Firebase — Firestore / Auth / Storage / Hosting / Functions
— Supabase — Database / Auth / Storage / Edge Functions / Realtime

### Ch 22　Cloudflare
CDN / Workers / Pages / R2 / D1 / KV / Zero Trust / Hono

### Ch 23　セキュリティ
Authentication / Authorization / OAuth / OpenID Connect / Secret /
Encryption / Hash / Salt / CSRF / XSS / SQL Injection / CORS

### Ch 24　AI・LLM
LLM / Token / Context Window / Prompt / Embedding / RAG / Vector Database /
MCP / Tool Calling / Agent / Workflow / Memory / Reasoning / Hallucination

— 企業・API — OpenAI / Anthropic / Google（Gemini）/ Alibaba（Qwen）
— モデル — GPT / Claude / Gemini / Llama
— ローカル実行 — Ollama / vLLM
— ツール — Qdrant / Pinecone / Mastra / AI SDK / Herdr / NotebookLM

### Ch 25　設計原則
SOLID / DRY / YAGNI / KISS / 関心の分離 / 結合度 / 凝集度 / 循環依存 /
ビジネスロジック / OOP / 継承 / カプセル化 / クリーンアーキテクチャ /
レイヤードアーキテクチャ / デザインパターン / リファクタリング / Monolith / Microservice

— 図解ツール — UML / Mermaid / PlantUML

### Ch 26　オブザーバビリティ
Logging / Metrics / Tracing / Monitoring / Alerting / OpenTelemetry
4 Golden Signals（Latency / Traffic / Errors / Saturation）

— ツール — Datadog / Sentry / Grafana / Prometheus

### Ch 27　コンピュータサイエンス基礎
CPU / GPU（NVIDIA） / メモリ / ストレージ / I/O / 文字コード（Unicode / UTF-8 / ASCII）/
アトミック / バイナリ / ビット・バイト / カーネル / コンパイル / インタープリタ / 型

### Ch 28　エンジニアの語彙
現場で飛び交うのに辞書に載っていない言葉たち。英語表現・文化的差分付き。

| 日本語 | 使い方の例 | 英語 | 備考 |
|---|---|---|---|
| 叩く | APIを叩く | call / hit / invoke | |
| 投げる | 例外を投げる | throw | 英語も同じ比喩 |
| 死ぬ | サーバーが死ぬ | die / crash / go down | 英語も同じ比喩 |
| 殺す | プロセスを殺す | kill | `kill`コマンドそのまま |
| 吐く | ログを吐く | emit / output | 日本語の方が生々しい |
| 立てる | サーバーを立てる | spin up / boot | 英語は「回す」比喩 |
| 渡す | 引数を渡す | pass | ほぼ直訳 |
| 握りつぶす | エラーを握りつぶす | swallow / suppress | swallowは英語でも使う |
| 張り付く | CPUが100%に張り付く | pegged / pinned / maxed out | 技術用語はSaturation |
| 生やす | 機能を生やす | add | 植物的ニュアンスは消える |
| 刺さる | 知見が刺さる | resonate / hit home | 物理的な感覚は消える |
| 溶ける | 時間が溶ける | go down a rabbit hole / time sink | 液体の比喩は英語にない |
| 技術的には可能です | — | Gijutsuteki niwa kanō desu | 日本固有。英語に存在しない |

**コラム候補**: 「英訳するとニュアンスが消える系」（生やす・刺さる・溶ける）

---

### Appendix　よく聞くけど説明しづらい言葉
CLI / GUI / SDK / RFC / IDE / VSCode / Linter / Formatter / Boilerplate / Technical Debt

---

## 技術的な決定事項

### ページ番号の体系
- チャプター番号 × 50 を起点にした連番
- 例：Ch 7 Docker → 301, 305, 309, 313, 321…
- 例：Ch 9 クラウド/インフラ → 401（VM）, 441（Kubernetes）…

### レイアウト上の知見（Vivliostyle）
- ページBoxの高さは250mm上限（B5の実効組版領域）
- サイドバーはposition: absoluteで固定（CSS Gridだとページ跨ぎで飛ぶ）
- アイコンはicons.svg の `<symbol>` + `<use href="icons.svg#id">` で差し替え
- configビルドではtheme: './style.css' が必須（HTMLのlinkだけでは効かない）

### Q2「それまでどうしていた？」の表について
- 左列 = それまでの方法（旧来）
- 右列 = このページの技術（新しい方、ハイライト色）
- VM・Imageは元の表が同時代比較だったため、左列を「物理サーバー」「手動構築」に組み換え済み

### VMの分類
- Ch 7 DockerではなくCh 9 クラウド・インフラへ
- 理由：DockerよりVMの方が20年先行する技術。現場の「VM」はEC2やCompute Engineを指すことが多い
- ContainerページのQ2「それまでどうしていた？」でVM比較を自然に説明できる

### Chapter 3「API」の命名経緯
- 「Web API」では gRPC・Webhook が厳密に外れる
- gRPC・WebSocket・WebhookはCh 5「通信プロトコル」として分離
- Ch 3「API」はHTTPリクエスト・レスポンス型の設計に絞った

### エンジニアの語彙章（Ch 28）の方針
- 1語1ページ
- 英語表現・文化的ニュアンスの差分を記載
- 3分類で整理：①英語も同じ比喩 ②近い表現はあるが別の比喩 ③日本語にしか存在しない
- 「技術的には可能です」はローマ字表記でお笑い扱い（英語に翻訳不能なため）
- 「張り付く」にはSaturation（4 Golden Signals）へのリンクを張る

---

## 総語数・規模感

- 総語数：約360語
- 総章数：28章 ＋ Appendix
- 想定ページ数：360ページ超（1語1ページの場合）
- 2冊分割案：Ch 1〜14（開発寄り）/ Ch 15〜28（インフラ・設計・AI・語彙）

---

## 追加語（後日確定分）

### Ch 6 データベース追加
ダンプ（dump）

### Ch 16 クラウド・インフラ（概念）追加
可用性 / SLA / SLO / SLI

### Ch 23 セキュリティ追加
OWASP / ZAP

### Ch 24 AI・LLM ツール欄追加
Dify / n8n / v0 / LangChain / OpenHands（旧OpenDevin）
G検定（国内AIリテラシー資格。コラムor Appendix）

### Ch 26 オブザーバビリティ追加
パフォーマンスチューニング（パフォチュー）

### Ch 28 エンジニアの語彙 追加
| パフォチュー | perf tuning | 略語。知らないと何の話か分からない |

### Ch 28 エンジニアの語彙 追加（ミーム・文化系）
| 完全に理解した | Mount Stupid / "I totally get it" | ダニング=クルーガー効果の頂点。分かった気になっている＝一番危険な状態。本の最後のページ候補 |

---

## 追加語・章（第3次確定分）

### Ch 2 Webのしくみ 追加
TCP / UDP / TLS / SSL証明書 / Let's Encrypt / VPN / NAT / サブネット / Proxy（forward）

### Ch 6 データベース 追加
View / Stored Procedure / ACID / Sharding / レプリケーション / コネクションプール

### Ch 7 フロントエンド 追加
PWA / WebAssembly / a11y（アクセシビリティ）/ i18n / Core Web Vitals
Redux / Zustand / Pinia（状態管理ライブラリ）

### Ch 12 Linux・ターミナル 追加
.env（Environment Variable の隣。ツールではなく設定ファイルの慣習）

### Ch 23 セキュリティ 追加
2FA / MFA / ペネトレーションテスト / CSP / OWASP Top 10

### 新章：プログラミング基礎（CS基礎の手前）
CRUD / MVC / null・undefined・nil / 型（静的型付け・動的型付け）/
例外処理 / スコープ / クロージャ / 再帰 / 計算量・Big O

### 新章：SRE・信頼性（オブザーバビリティの隣）
SRE / エラーバジェット / インシデント / ポストモーテム /
オンコール / ランブック / MTTR / MTBF

### 新章：チームとロール（開発プロセスの隣）
テックリード / SRE / DevOpsエンジニア / データエンジニア / MLエンジニア / PM

### メモ
- .env は「開発ツール」ではなく Ch 12 Linux・ターミナルへ（Environment Variableの隣）
- 現時点で 31章、総語数 430語前後
- サイドバーのページ番号は目次確定後に一括スクリプトで付与する方針

### 追加語（第4次）
- Ch 2 Webのしくみ：イントラネット（インターネットとの対比）
- Ch 18 AWS：ダイレクトコネクト / トランジットゲートウェイ（コネクト）
- Ch 23 セキュリティ：FDE（Full Disk Encryption）
- SSH は Ch 12 に既出。派生（SSH鍵・SSHトンネル）は要確認

### 新章：IT業界のしくみ（開発プロセスの隣）
受託開発 / 自社開発 / SES / ラボ型 / 一括請負 / 準委任契約 / 請負契約 /
常駐 / 下請け・孫請け / 人月計算 / 工数 / 見積もり / デスマーチ

※「受託開発 vs 自社開発」は差分テーマが最も活きるページ候補

### IT業界のしくみ章 追加（SaaS・ビジネス指標）
アップセル / チャーン / MRR / ARR / LTV / DAU / MAU / コンバージョン率 / PMF

※章を2節構成にする案：
  - 契約・商習慣：受託開発 / 自社開発 / SES / ラボ型 / 人月計算 / デスマーチ…
  - プロダクト・ビジネス指標：アップセル / チャーン / MRR / LTV / DAU / PMF…

### Ch 4 API 追加
slug（URLフレンドリーな文字列。Endpointの隣）

### Ch 6 データベース 追加
非正規化（正規化の隣。差分ペアとして並べる）

### Ch 6 データベース 追加
UUID（Primary Keyの隣。auto incrementとの差分ページ）

### Ch 25 設計原則 追加
具体と抽象（抽象化の隣。設計思想の根本。細谷功『具体と抽象』も参照）

---

## 追加語（第5次）

### Ch 14 デプロイ・CI/CD 追加
DevOps（CI/CD・IaC の傘となる文化・概念。Ch 14 冒頭に配置。ページ 701）

---

## 整理・重複解消メモ（確定済み）

### 重複語の統一先

| 語 | 重複箇所 | 統一先 |
|---|---|---|
| npm / yarn / pnpm | Ch 7 フロントエンド と Ch 11 パッケージ管理 | **Ch 11** のみ（Ch 7 から削除） |
| Swift / Kotlin | Ch 8 バックエンド言語 と Ch 9 モバイル | **Ch 9** のみ（Ch 8 から削除） |
| 型 | プログラミング基礎 と Ch 27 CS基礎 | **プログラミング基礎** のみ |
| Gemini | モデル欄 と 企業・API欄「Google（Gemini）」 | モデル欄のみ。企業欄は「Google」に統一 |
| OWASP と OWASP Top 10 | 追加語が別々に記載 | 1ページにまとめる |
| SRE（概念） vs SRE（役職） | SRE・信頼性章 と チームとロール章 | 概念→SRE・信頼性章、役職→チームとロール章（意味が異なるため両方に残す） |

### 1ページ2語の候補（差分が明確 / 単独では薄い）

| ペア | 理由 |
|---|---|
| TCP / UDP | 「確認する/しない」の1点差 |
| 正規化 / 非正規化 | 完全な対比 |
| 受託開発 / 自社開発 | 転職の分岐点として対比 |
| 認証（Authentication）/ 認可（Authorization）| 常にセット |
| 行ロック / テーブルロック | Lock のサブタイプ |
| MTTR / MTBF | 対になる信頼性指標 |
| 2FA / MFA | 2FA は MFA の一形態 |
| MRR / ARR | 月次・年次の違いのみ |
| DAU / MAU | 日次・月次の違いのみ |
| CI / CD | 常にセット（DevOps の実践手段として） |
| 具体 / 抽象 | もともとペアの概念 |
| IaaS / PaaS / SaaS | 3in1 で段階図を1枚 |
| SLA / SLO / SLI | 3in1 で関係図を1枚 |
| null / undefined / nil | 言語による「何もない」の差分 |
| Canary Release / Blue/Green Deployment | どちらもデプロイ戦略 |

※ 1ページ2語にすると約15ページ節約できる見込み
