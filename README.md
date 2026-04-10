# Shaqai

翻訳語辞典 Webアプリ

## 概要

外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション。明治期の翻訳家たちが西洋の概念を意味翻訳した言葉の成り立ちを探ることができる。

**URL**: https://shaqai.reload.co.jp

### 用語定義

| 用語     | 意味                           |
| -------- | ------------------------------ |
| 翻訳語   | 外国語を意味翻訳して作られた語 |
| 和製漢語 | 日本で作られた漢字語           |
| 原語     | 元になった外国語               |
| 翻訳者   | 訳語を作った人物               |
| 分野     | 哲学、経済、法律など           |

---

## 主な機能

- 単語一覧（106語収録）
- 単語詳細
- 検索
- 分野別フィルタ（哲学・経済・社会・政治・法律・教育・科学・文化・工学）
- 翻訳者一覧・詳細
- 読み物（コラム記事）

---

## データモデル

### words

- id
- japanese_word
- original_word
- language
- field_id
- translator_id（nullable）
- era
- year
- description
- etymology

### translators

- id
- name
- image
- birth_year
- death_year
- description

### fields

- id
- name

データは `data/` ディレクトリのJSONファイルで管理。

---

## ページ構成

| パス                    | 内容                     |
| ----------------------- | ------------------------ |
| `/`                     | トップ（単語一覧・記事） |
| `/words/[id]`           | 単語詳細                 |
| `/search`               | 検索                     |
| `/fields`               | 分野一覧                 |
| `/fields/[id]`          | 分野別単語一覧           |
| `/translators`          | 翻訳者一覧               |
| `/translators/[id]`     | 翻訳者詳細               |
| `/articles`             | 読み物一覧               |
| `/articles/[slug]`      | 読み物記事               |
| `/about`                | このサイトについて       |

---

## 技術構成

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Runtime**: React 19
- **Data**: JSONファイル（`data/` ディレクトリ）
- **Package manager**: pnpm

---

## 開発

```bash
pnpm dev      # 開発サーバー起動
pnpm build    # ビルド
pnpm lint     # ESLint
pnpm format   # Prettier
pnpm typecheck # 型チェック
```

---

## Author

@kixixixixi / [Reload, Inc.](https://reload.co.jp)
