# 未実装ワード一覧（章別）

`book-memo.md`（全31章＋Appendix＋新章の企画メモ）と `content.js`（実装済みデータ）を突き合わせた差分。
実装済み: 159語（Ch1〜8, Ch13, Ch14, Ch16の一部）
未実装: 約349語

## 章別リスト

| 章 | 未実装語数 | 内容 |
|---|---|---|
| Ch2 Webのしくみ | 1 | イントラネット |
| Ch6 データベース | 1 | ダンプ |
| Ch9 モバイル | 9 | iOS / Android / ネイティブアプリ / ハイブリッドアプリ / React Native / Flutter / Dart / Swift / Kotlin |
| Ch10 テスト | 22 | Unit Test / Integration Test / E2E Test / Mock / Stub / Fixture / TDD / BDD / カバレッジ / デバッグ / スナップショットテスト / 回帰テスト / スモークテスト / 境界値分析 / 同値分割 / ホワイトボックステスト / ブラックボックステスト / テスト設計 / Jest / Vitest / Playwright / Puppeteer |
| Ch11 パッケージ管理・バージョン管理 | 17 | パッケージ / 依存関係 / セマンティックバージョニング / ロックファイル / npm / yarn / pnpm / pip / gem / cargo / go mod / Homebrew / apt / mise / nvm / rbenv / pyenv |
| Ch12 Linux・ターミナル | 19 | Terminal / Shell / Bash / Zsh / PATH / SSH / Environment Variable / Process / Thread / Cron / Daemon / 正規表現 / パーミッション / ping / curl / Vim / Markdown / Ghostty / .env |
| Ch13 Docker | 1 | Network（既存5語に追加） |
| Ch14 デプロイ・CI/CD | 17 | ローカル / ステージング / 本番 / Build / Bundle / Artifact / Release / Rollback / CI / CD / Pipeline / Canary Release / Blue/Green Deployment / GitHub Actions / CircleCI / Vercel / Netlify（DevOpsのみ実装済） |
| Ch15 開発プロセス | 15 | PMBOK / ウォーターフォール / WBS / ガントチャート / マイルストーン / ステークホルダー / スコープ / アジャイル / スクラム / スプリント / レトロスペクティブ / ベロシティ / コードレビュー / ペアプロ / イシュー |
| Ch16 クラウド・インフラ | 19 | Cloud / オンプレミス / IaaS / PaaS / SaaS / VPC / Load Balancer / CDN / Object Storage / Serverless / Reverse Proxy / Nginx / トポロジー / リージョン / AZ / 可用性 / SLA / SLO / SLI（VM/K8sのみ実装済） |
| Ch17 IaC | 7 | IaC / 宣言的構成 / 冪等性 / Terraform / Ansible / Helm / Pulumi |
| Ch18 AWS | 18 | EC2 / ECS / ECR / Fargate / Lambda / S3 / RDS / DynamoDB / CloudFront / Route 53 / IAM / ALB / API Gateway / SQS / CloudWatch / X-Ray / ダイレクトコネクト / トランジットゲートウェイ |
| Ch19 GCP | 7 | Cloud Run / GKE / Cloud Storage / Cloud SQL / Cloud Functions / Cloud CDN / Artifact Registry |
| Ch20 Azure | 8 | VM / Container Apps / Functions / Blob Storage / SQL Database / AKS / Front Door / Entra ID |
| Ch21 Firebase・Supabase | 10 | Firestore / Auth / Storage / Hosting / Functions（Firebase） / Database / Auth / Storage / Edge Functions / Realtime（Supabase） |
| Ch22 Cloudflare | 8 | CDN / Workers / Pages / R2 / D1 / KV / Zero Trust / Hono |
| Ch23 セキュリティ | 19 | Authentication / Authorization / OAuth / OpenID Connect / Secret / Encryption / Hash / Salt / CSRF / XSS / SQL Injection / CORS / OWASP（+OWASP Top 10） / ZAP / 2FA / MFA / ペネトレーションテスト / CSP / FDE |
| Ch24 AI・LLM | 36 | LLM / Token / Context Window / Prompt / Embedding / RAG / Vector Database / MCP / Tool Calling / Agent / Workflow / Memory / Reasoning / Hallucination / OpenAI / Anthropic / Google / Alibaba / GPT / Claude / Gemini / Llama / Ollama / vLLM / Qdrant / Pinecone / Mastra / AI SDK / Herdr / NotebookLM / Dify / n8n / v0 / LangChain / OpenHands / G検定 |
| Ch25 設計原則 | 22 | SOLID / DRY / YAGNI / KISS / 関心の分離 / 結合度 / 凝集度 / 循環依存 / ビジネスロジック / OOP / 継承 / カプセル化 / クリーンアーキテクチャ / レイヤードアーキテクチャ / デザインパターン / リファクタリング / Monolith / Microservice / UML / Mermaid / PlantUML / 具体と抽象 |
| Ch26 オブザーバビリティ | 12 | Logging / Metrics / Tracing / Monitoring / Alerting / OpenTelemetry / 4 Golden Signals / Datadog / Sentry / Grafana / Prometheus / パフォーマンスチューニング |
| Ch27 コンピュータサイエンス基礎 | 11 | CPU / GPU / メモリ / ストレージ / I/O / 文字コード（Unicode/UTF-8/ASCII） / アトミック / バイナリ / ビット・バイト / カーネル / コンパイル / インタープリタ |
| Ch28 エンジニアの語彙 | 15 | 叩く / 投げる / 死ぬ / 殺す / 吐く / 立てる / 渡す / 握りつぶす / 張り付く / 生やす / 刺さる / 溶ける / 技術的には可能です / パフォチュー / 完全に理解した |
| Appendix | 10 | CLI / GUI / SDK / RFC / IDE / VSCode / Linter / Formatter / Boilerplate / Technical Debt |
| 新章 プログラミング基礎 | 9 | CRUD / MVC / null・undefined・nil / 型 / 例外処理 / スコープ / クロージャ / 再帰 / 計算量・Big O |
| 新章 SRE・信頼性 | 8 | SRE / エラーバジェット / インシデント / ポストモーテム / オンコール / ランブック / MTTR / MTBF |
| 新章 チームとロール | 6 | テックリード / SRE（役職） / DevOpsエンジニア / データエンジニア / MLエンジニア / PM |
| 新章 IT業界のしくみ | 22 | 受託開発 / 自社開発 / SES / ラボ型 / 一括請負 / 準委任契約 / 請負契約 / 常駐 / 下請け・孫請け / 人月計算 / 工数 / 見積もり / デスマーチ / アップセル / チャーン / MRR / ARR / LTV / DAU / MAU / コンバージョン率 / PMF |

## 要判断（重複の可能性）

- **Ch20 Azure「VM」**: Ch16の一般概念VMと重複の可能性。別ページか統合か要確認。
- **Ch22 Cloudflare「CDN」「Hono」**: Ch16の一般CDN、Ch8のHonoフレームワークと重複の可能性。別ページか統合か要確認。

## 進め方メモ

- 章単位でバッチ実装する想定（例: Ch9〜12 → Ch13〜16 …）
- ページ番号はチャプター×50の体系（`book-memo.md` 参照）
- サイドバーの相互参照は同一バッチ内で解決
