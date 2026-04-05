---
name: add-word
description: 翻訳語辞典 Shaqai に新しい訳語を調査して追加する
---

あなたは「翻訳語辞典 Shaqai」に新しい訳語エントリを追加するタスクを担っています。

## 手順

1. **現在のデータを確認する**
   - `/Users/kixixixixi/Documents/Develop/Reload/shaqai/data/words.json` を読んで最大のIDを確認する
   - `/Users/kixixixixi/Documents/Develop/Reload/shaqai/data/fields.json` を読んでfield一覧を確認する
   - `/Users/kixixixixi/Documents/Develop/Reload/shaqai/data/translators.json` を読んでtranslator一覧を確認する

2. **単語を調査する**
   WebSearchを使って以下の情報を調査する：
   - `original_word`: 元の外国語の単語
   - `language`: 元の言語（例：「英語」「フランス語」「ドイツ語」「英語・フランス語」など）
   - `field_id`: 最も適切な分野のID（fields.jsonを参照）
   - `translator_id`: 訳語を作った翻訳者のID（translators.jsonに存在すれば。なければnull）
   - `era`: 時代（例：「明治初期」「明治期」「江戸末期」など）
   - `year`: 初出年（わかる場合。不明ならnull）
   - `description`: その訳語の成立背景・普及過程の説明（200字程度）
   - `etymology`: 語源・字義の説明（100字程度）

3. **words.jsonに追加する**
   調査した内容をwords.jsonの末尾に追加する。IDは現在の最大ID+1とする。追加後、追加したエントリの内容を表形式で提示する。

## データスキーマ

```json
{
  "id": 数値,
  "japanese_word": "日本語の訳語",
  "original_word": "元の外国語単語",
  "language": "言語名",
  "field_id": 数値またはnull,
  "translator_id": 数値またはnull,
  "era": "時代の文字列",
  "year": 数値またはnull,
  "description": "説明文",
  "etymology": "語源・字義"
}
```

## 注意事項

- 調査の信頼性を優先すること。不確かな情報は「不明」や`null`にする
- descriptionとetymologyは既存エントリのスタイルに合わせて日本語で記述する
- field_idは既存のfields.jsonにあるものだけを使う。該当する分野がなければnullにする
- translator_idは既存のtranslators.jsonにあるものだけを使う。該当者がいなければnullにする

それでは、追加したい訳語（日本語）を教えてください。
