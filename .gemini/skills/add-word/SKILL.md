---
name: add-word
description: 翻訳語辞典 Shaqai に新しい訳語を調査して追加する
---

翻訳語辞典 Shaqai に新しい訳語（和製漢語）を調査し、データファイル（words.json, translators.json）に追加します。

## 手順

1. **現況確認**
   - `data/words.json` を読み込み、最大の `id` を確認する。
   - `data/fields.json` を読み込み、利用可能な分野（`field_id`）を確認する。
   - `data/translators.json` を読み込み、登録済みの翻訳者を確認する。

2. **情報の調査**
   `google_web_search` を使用して以下の項目を調査する：
   - `original_word`: 原語（外国語）
   - `language`: 原語の言語（例：「英語」「ドイツ語」）
   - `field_id`: `fields.json` に基づく適切な分野ID
   - `translator_id`: 訳語の考案者（判明した場合。既存または新規追加）
   - `era`: 時代（例：「明治初期」）
   - `year`: 成立・初出年（不明な場合は `null`）
   - `description`: 成立背景や普及過程（日本語で200字程度）
   - `etymology`: 語源や字義の解説（日本語で100字程度）
   - `meaning_en`: 現代英語での意味
   - `meaning_ja`: 現代日本語での意味

3. **翻訳者の追加（必要に応じて）**
   訳者が特定され、かつ `translators.json` に未登録の場合：
   - その人物の生没年や経歴を調査する。
   - `translators.json` に新規エントリを追加する（`id` は最大値+1）。
   - Wikimedia Commons 等で肖像画像を検索し、`curl` を用いて `public/translators/` に保存する。ファイル名は `{名前のローマ字}.jpg` とする。画像がない場合は `image` フィールドを省略する。

4. **データの保存**
   - `data/words.json` の末尾に調査したエントリを追加する（`id` は最大値+1）。
   - 追加後、登録内容をマークダウンの表形式で提示する。

## 注意事項

- 不確かな情報は `null` または「不明」とする。
- 既存の `fields.json` にない分野は設定せず `null` にする。
- スタイリングやフォーマットは既存のエントリに合わせる。
- `public/translators/` への画像保存時は、適切な拡張子（主に `.jpg` または `.png`）を確認する。
