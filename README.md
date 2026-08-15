# Vivliostyle レイアウトテンプレート

「差分でわかる エンジニアのゆるい辞典」風の **雑誌型・1ページ1項目** レイアウトを
Vivliostyle（CSS組版）で組むためのテンプレート。
図・文字・表・サイドバーを差し替えるだけで、同じレイアウトの別ページが作れる。

## ファイル構成

| ファイル | 役割 |
|---|---|
| `style.css` | 共通レイアウト（全ページで共有） |
| `icons.svg` | 共通アイコン定義（`<symbol>`）。ページからは `<use href="icons.svg#ID">` で参照 |
| `template.html` | 1ページ分の雛形（`{{...}}` を書き換えて使う） |
| `index.html` | 記入例（062 Docker） |
| `015-vm.html` 〜 `089-kubernetes.html` | 関連キーワードの各ページ（VM / Image / Container / Compose / Kubernetes） |
| `vivliostyle.config.js` | 複数ページを1冊にまとめる設定 |

現在 `book.pdf` は 6 ページ（015 VM → 019 Image → 021 Container → 042 Compose → 062 Docker → 089 Kubernetes）。
各ページのサイドバーは互いにページ参照でリンクしている。

## ビルド方法

Node 18+ が必須（グローバルの Node 16 では CLI が動かない）。
CLI は隣の `runtechbook` のものを借用している。エイリアスを作っておくと楽:

```bash
alias vs='mise exec node@22.14.0 -- node ../runtechbook/node_modules/@vivliostyle/cli/dist/cli.js'
```

- **1ページだけ確認**: `vs build index.html -s B5 -o docker.pdf`
- **本まるごと**（config を読む）: `vs build` → `book.pdf`
- **プレビュー**（ホットリロード）: `vs preview index.html`

## 新しいページの作り方

```bash
cp template.html 063-kubernetes.html   # 1. 雛形をコピー
# 2. 063-kubernetes.html の {{...}} を書き換える
#    図は <use href="icons.svg#ID"> の ID を変えるだけ
# 3. vivliostyle.config.js の entry に '063-kubernetes.html' を追加
vs build                                # 4. 本を再ビルド
```

### 差し替えポイント
- **文字**: `{{TERM}}` `{{SUBTITLE}}` `{{A1}}` など雛形内のプレースホルダ
- **図**: `<use href="icons.svg#ic-cube">` の ID。使えるIDは `icons.svg` 参照。
  新しい図が要るときは `icons.svg` に `<symbol id="ic-xxx" viewBox="...">` を追加
- **表・アイコン3連・サイドバーのグループ**: 不要なら該当ブロックごと削除、
  行やカードは自由に増減できる

## 設計上のポイント（重要な知見）

1. **Node 16 では動かない** — CLI v9 が使う Vite と非互換。`mise exec node@22` 経由で実行。
2. **サイドバーは絶対配置**でページ枠に貼り付け、本文フローと切り離している。
   CSS Grid で2カラムにするとページ跨ぎでサイドバーが飛ぶため。
3. **ページboxの高さは 250mm**（B5 は 257mm だが実効組版領域は約251mm）。
   これを超えると空白の次ページが出る。
4. **本文カラム幅を確保する**（サイドバーを広げすぎない）。
   狭いと表セルやサブタイトルが折り返して1ページに収まらなくなる。
5. **config ビルドでは CSS を `theme` で指定する** — HTML内の `<link rel=stylesheet>`
   だけでは webpub パイプラインに拾われない。`author: ''`（空文字）は
   バリデーションエラーになるのでキーごと省く。
6. **アイコンは外部SVGの `<use href="icons.svg#id">` で参照可能**
   （単体ビルド・config ビルドの両方で解決される）。

## 総評

この密度の雑誌型レイアウトは Vivliostyle で十分に組める。
「固定ページbox＋絶対配置サイドバー＋インラインSVGスプライト」を基本形にすれば、
ページごとに図版がまったく違っても、テンプレートの穴埋めだけで
本全体を1つの HTML/CSS 群からビルドできる。
