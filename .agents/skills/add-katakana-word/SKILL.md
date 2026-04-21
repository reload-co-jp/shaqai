---
name: add-katakana-word
description: 翻訳語辞典 Shaqai のカタカナ語データに、原語から意味がずれたカタカナ語を調査して追加する
---

あなたは「翻訳語辞典 Shaqai」のカタカナ語データに新しいカタカナ語エントリを追加するタスクを担っています。

## 対象

このスキルは、`data/katakana.json` にカタカナ語を追加するときに使う。対象は、翻訳語（意味を漢字で訳した語）ではなく、外国語の音を借りて日本語化した語、とくに原語と日本語で意味・用法がずれている語である。

例：マンション、コンセント、クレーム、テンション、ナイーブ。

## 手順

1. **現在のデータを確認する**
   - `/Users/kixixixixi/Documents/Develop/Reload/shaqai/data/katakana.json` を読み、最大の `id` を確認する
   - 追加候補が既に存在しないか、`katakana_word` と `original_word` の両方で検索する
   - 既存エントリの文体・粒度・カテゴリ名を確認する

2. **語を調査する**
   WebSearchを使って以下を確認する：
   - `katakana_word`: 日本語のカタカナ語
   - `original_word`: 元になった外国語
   - `language`: 元の言語（例：「英語」「フランス語」「英語・フランス語」など）
   - `category`: 既存カテゴリに寄せる。該当がなければ短い日本語カテゴリを作る
   - `original_meaning`: 原語での中心的な意味
   - `japanese_meaning`: 日本語で定着した意味
   - `meaning_shift`: 原語から日本語への意味変化・ズレ方（1文）
   - `description`: 成立背景・日本語での定着・原語との差を200字程度で説明
   - `examples`: 日本語例文と、自然な英訳または説明的英訳
   - `sources`: 辞書・語源辞典・信頼できる解説ページなど

3. **信頼性を判断する**
   - 原語の意味は英和辞典・仏和辞典・公式辞書・主要辞書サイトで確認する
   - 日本語の意味は国語辞典・外来語辞典・コトバンク等で確認する
   - 語源や成立時期が不確かな場合は断定しない。`description` では「〜とされる」「〜として広まった」のように書く
   - source URL がある場合は `url` に入れる。辞書名だけの確認なら `title` と `note` のみでもよい

4. **katakana.jsonに追加する**
   - 末尾に新しいオブジェクトを追加する
   - `id` は現在の最大ID+1
   - JSON整形は既存ファイルに合わせる
   - 追加後、`jq empty data/katakana.json` で構文確認する
   - 可能なら `pnpm eslint lib/db.ts components/elements/katakana-card.tsx app/katakana/page.tsx 'app/katakana/[id]/page.tsx'` を実行する

## データスキーマ

```json
{
  "id": 数値,
  "katakana_word": "日本語のカタカナ語",
  "original_word": "元になった外国語",
  "language": "言語名",
  "category": "短い分類名",
  "original_meaning": "原語での中心的意味",
  "japanese_meaning": "日本語での意味",
  "meaning_shift": "意味のずれ方を1文で説明",
  "description": "成立背景・定着・原語との差の説明",
  "examples": [
    {
      "ja": "日本語の用例。",
      "en": "自然な英訳または説明的英訳。"
    }
  ],
  "sources": [
    {
      "title": "出典名",
      "author": "著者名（任意）",
      "url": "URL（任意）",
      "note": "何を確認したか"
    }
  ]
}
```

## 注意事項

- 翻訳語データ `data/words.json` には追加しない
- 原語と日本語の意味がほぼ同じ語は、カタカナ語データに入れる優先度を下げる
- ただの英単語学習ではなく、「日本語化による意味変化」を主題にする
- `description` は既存エントリと同じく日本語で、簡潔に書く
- 追加後、追加したエントリを表形式で提示する

それでは、追加したいカタカナ語を教えてください。
