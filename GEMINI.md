# Shaqai (翻訳語辞典)

明治期の翻訳語（和製漢語）を収集・検索・閲覧できるWebアプリケーション。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **ライブラリ**: React 19, TypeScript
- **データ管理**: JSONファイル (`data/` ディレクトリ)
- **パッケージマネージャ**: pnpm
- **フォント**: BIZ UDPMincho (Next.js Font)

## プロジェクト構造

- `app/`: Next.js App Router ページコンポーネント
- `components/`: UIコンポーネント（主に `elements/` に配置）
- `data/`: JSON形式のマスターデータ
- `lib/`: データアクセス用ユーティリティ (`db.ts`)、共通ロジック
- `public/`: 画像などの静的アセット

## データモデル

### Word (`data/words.json`)
- `id`: number
- `japanese_word`: string (翻訳語)
- `original_word`: string (原語)
- `language`: string (言語、例: "英語")
- `field_id`: number (分野ID)
- `translator_id`: number | null (翻訳者ID)
- `era`: string (時代、例: "明治初期")
- `year`: number (年)
- `meanings`: array (意味の一覧)
  - `en`: string (英語での意味)
  - `ja`: string (日本語での意味)
  - `example_en`: string (英語用例、任意)
  - `example_ja`: string (日本語用例、任意)
- `description`: string (解説)
- `etymology`: string (語源)

### Translator (`data/translators.json`)
- `id`: number
- `name`: string
- `image`: string (パス、例: "/translators/fukuzawa.jpg")
- `birth_year`: number
- `death_year`: number
- `description`: string

### Field (`data/fields.json`)
- `id`: number
- `name`: string

## 開発ガイドライン

### スタイリング
- インラインスタイル（`style` プロパティ）を主に使用しています。
- 配色方針:
    - 背景色: `#130f09` (メイン背景), `#1c1810` (ヘッダー/フッター)
    - テキスト色: `#bfb9ac` (通常), `#c8a96e` (アクセント/見出し)
    - 境界線: `#3d3828`, `#302b1e`
- フォント: `--font-mincho` (BIZ UDPMincho) を基本としています。

### データ更新
- 単語や翻訳者の追加・修正は `data/` 以下のJSONファイルを直接編集します。
- IDの整合性を保つように注意してください。
- 翻訳者の画像を追加する場合は `public/translators/` に配置し、パスを `data/translators.json` に記述します。

### 記事（読み物）の追加
- `app/articles/` 以下の既存記事を参考にして、新しいディレクトリと `page.tsx` を作成します。
- `lib/articles.ts` の `articles` 配列に新しい記事のメタデータ（`id`, `title`, `description`）を追加します。
- `id` は `app/articles/[id]` のディレクトリ名と一致させる必要があります。
- 追加した記事は、自動的に `app/articles/page.tsx` の一覧や `components/elements/random-articles.tsx` で参照されます。

## 主要コマンド

```bash
pnpm dev       # 開発サーバー
pnpm build     # ビルド
pnpm lint      # ESLint
pnpm format    # Prettier (推奨)
pnpm typecheck # 型チェック
```

## AI Assistant Guidelines

- **指定範囲のみ修正**: 指示された箇所以外のコードは変更しないでください。
- **不要な変更禁止**: リファクタリングやスタイルの微調整など、依頼されていない変更は行わないでください。
- **出力は最小限**: 冗長な説明を避け、簡潔に応答してください。
