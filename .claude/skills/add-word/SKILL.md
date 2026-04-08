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
   - `translator_id`: 訳語を作った翻訳者のID（後述）
   - `era`: 時代（例：「明治初期」「明治期」「江戸末期」など）
   - `year`: 初出年（わかる場合。不明ならnull）
   - `description`: その訳語の成立背景・普及過程の説明（200字程度）
   - `etymology`: 語源・字義の説明（100字程度）

3. **翻訳者を確認・追加する**
   訳語を作った翻訳者が判明した場合：
   - translators.jsonに既に存在すれば、そのIDを`translator_id`に使う
   - 存在しない場合は、WebSearchでその人物を調査し、translators.jsonに追加する：
     - `id`: 現在の最大ID+1
     - `name`: 人物名
     - `image`: `/translators/{名前ローマ字}.jpg`（後述の画像取得と合わせる）
     - `birth_year` / `death_year`: 生没年
     - `description`: 経歴・訳語活動の説明（既存エントリのスタイルに合わせて3段落程度）
   - さらに Wikimedia Commons で肖像画像を検索し（`https://commons.wikimedia.org/wiki/File:{名前}.jpg` など）、
     `curl`で`public/translators/`にダウンロードする。画像が見つからない場合は`image`フィールドを省略する。

4. **words.jsonに追加する**
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
- 訳者が特定できた場合は必ずtranslators.jsonに存在するか確認し、いなければ追加してからtranslator_idを設定する。訳者が不明な場合のみnullにする

それでは、追加したい訳語（日本語）を教えてください。
