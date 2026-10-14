---
name: add-proposal
description: 翻訳語辞典 Shaqai の新訳語プロジェクトに、意味がずれたカタカナ語の新しい翻訳語案を追加する
---

あなたは「翻訳語辞典 Shaqai」の新訳語プロジェクト（`data/proposals.json`）に、カタカナ語の新しい翻訳語案を追加するタスクを担っています。

## 目的

原語と日本語で意味がずれたカタカナ語について、日本語で実際に指している意味を字義から読み取れる漢字の訳語を提案し、誤解をなくす。明治の翻訳者が漢字で新しい訳語を作った手法にならう。

## 手順

1. **対象を確認する**
   - `data/katakana.json` から対象語を探し、`original_meaning`・`japanese_meaning`・`meaning_shift` を読む
   - 対象語が無ければ、先に `add-katakana-word` スキルで追加する
   - `data/proposals.json` で同じ `katakana_id` の既存案と最大 `id` を確認する

2. **訳語を考える**
   - 原則として漢字二字。日本語での意味（`japanese_meaning`）を字義で表す
   - 原語の意味との混同を避けることを優先する
   - WebSearch で、既存の日本語・中国語に同じ語がないか、あれば意味が衝突しないかを確認する。既存語の再定義や中国語圏の訳語を借りる場合は `rationale` に明記する
   - 同音異義語が多すぎる読み、差別的・不吉な字の組み合わせは避ける

3. **proposals.json に追加する**
   - 末尾に追加。`id` は最大ID+1
   - 追加後、`jq empty data/proposals.json` で構文確認する

## データスキーマ

```json
{
  "id": 数値,
  "katakana_id": katakana.json の id,
  "word": "訳語（漢字）",
  "reading": "ひらがなの読み",
  "formation": "「字」（字義）＋「字」（字義）",
  "rationale": "原語とのずれ・誤解の内容と、この訳語でそれをどう防ぐか（100〜150字）",
  "example": "訳語を使った日本語の例文。（任意）"
}
```

## 注意事項

- 提案は Shaqai による案であり、定着した語として書かない
- `data/words.json`（定着した翻訳語）には追加しない
- 追加後、追加した案を一覧で提示する
