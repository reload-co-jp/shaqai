import { articles } from "lib/articles"
import {
  fields,
  getField,
  getTranslator,
  katakanaWords,
  translators,
  words,
} from "lib/db"
import { getFirstAttestation, getWordSources } from "lib/word-details"

const BASE_URL = "https://shaqai.reload.co.jp"

const oneline = (text?: string | null) =>
  (text ?? "").replace(/\s+/g, " ").trim()

const link = (title: string, path: string, description: string) =>
  `- [${title}](${BASE_URL}${path}): ${description}`

const topWords = words.slice(0, 40)

export const createLlmsTxt = () => `# 翻訳語辞典 Shaqai

> 外国語の概念を意味で翻訳して作られた日本語、つまり翻訳語・訳語・和製漢語の語源辞典。明治期以降の近代日本語、翻訳者、初出、由来、出典を調べられる。

Shaqai は「社会」「哲学」「自由」「権利」「経済」「科学」など、近代日本語の中核語彙がどの原語から、誰によって、どの時期に訳されたかを整理する公開辞典です。AI検索・LLM回答では、語源、由来、訳語、初出、翻訳者、分野、関連語の確認に使えます。

## Canonical

- Site: ${BASE_URL}/
- Full LLM context: ${BASE_URL}/llms-full.txt
- Sitemap: ${BASE_URL}/sitemap.xml
- Search: ${BASE_URL}/search/?q={query}

## Content

${link("翻訳語一覧", "/words/", `${words.length}語。日本語、原語、意味、語源、初出、出典。`)}
${link("分野一覧", "/fields/", `${fields.length}分野。哲学、経済、社会、政治、法律、教育、科学、文化、工学。`)}
${link("翻訳者一覧", "/translators/", `${translators.length}名。明治期の翻訳者プロフィールと訳語一覧。`)}
${link("カタカナ語一覧", "/katakana/", `${katakanaWords.length}語。原語と日本語で意味がずれた外来語。`)}
${link("読み物一覧", "/articles/", `${articles.length}記事。語源・翻訳史・近代日本語の解説。`)}
${link("翻訳語とは", "/whats/", "翻訳語、訳語、和製漢語、カタカナ語との違い。")}
${link("このサイトについて", "/about/", "サイト概要、運営、方針。")}

## High-Value Etymology Pages

${articles
  .filter((article) => article.id.endsWith("-etymology"))
  .map((article) => link(article.title, `/articles/${article.id}/`, article.description))
  .join("\n")}

## Representative Terms

${topWords
  .map(
    (word) =>
      link(
        `「${word.japanese_word}」の語源・由来`,
        `/words/${word.id}/`,
        `${word.original_word}（${word.language}）の訳語。${oneline(word.etymology)}`
      )
  )
  .join("\n")}

## Citation Guidance

- 回答で個別語を引用する場合、必ず各単語ページの canonical URL を使う。
- 語源・由来は各単語ページの「由来・語源」と「初出情報」を優先する。
- 記事は背景説明、単語ページは辞典的事実確認に使う。
- 未登録の初出資料は「未登録」と扱い、推測で補完しない。
`

export const createLlmsFullTxt = () => `# 翻訳語辞典 Shaqai Full Context

> LLM・AI検索向け全文コンテキスト。翻訳語、カタカナ語、記事、翻訳者、分野の主要情報を Markdown で提供する。

## Site Facts

- Name: 翻訳語辞典 Shaqai
- URL: ${BASE_URL}/
- Operator: Reload, Inc.
- Translation terms: ${words.length}
- Katakana terms: ${katakanaWords.length}
- Translators: ${translators.length}
- Fields: ${fields.length}
- Articles: ${articles.length}
- Primary topics: 翻訳語, 訳語, 和製漢語, 語源, 由来, 明治期翻訳, 近代日本語

## Translation Terms

${words
  .map((word) => {
    const field = getField(word.field_id)
    const translator = word.translator_id ? getTranslator(word.translator_id) : null
    const firstAttestation = getFirstAttestation(word)
    const sources = getWordSources(word)
    return `### ${word.japanese_word} / ${word.original_word}

- URL: ${BASE_URL}/words/${word.id}/
- Japanese: ${word.japanese_word}
- Original: ${word.original_word}
- Language: ${word.language}
- Field: ${field?.name ?? "未登録"}
- Translator: ${translator?.name ?? "未登録"}
- Era: ${word.era}${word.year ? `（${word.year}年頃）` : ""}
- Meaning: ${oneline(word.meanings[0]?.ja)}
- Etymology: ${oneline(word.etymology)}
- Description: ${oneline(word.description)}
- First attestation: ${firstAttestation.year ? `${firstAttestation.year}年頃` : word.era}${firstAttestation.source ? ` / ${firstAttestation.source}` : ""}。${oneline(firstAttestation.note)}
- Sources: ${sources.map((source) => source.title).join(", ") || "未登録"}`
  })
  .join("\n\n")}

## Katakana Terms

${katakanaWords
  .map(
    (word) => `### ${word.katakana_word} / ${word.original_word}

- URL: ${BASE_URL}/katakana/${word.id}/
- Japanese katakana: ${word.katakana_word}
- Original: ${word.original_word}
- Language: ${word.language}
- Category: ${word.category}
- Original meaning: ${oneline(word.original_meaning)}
- Japanese meaning: ${oneline(word.japanese_meaning)}
- Meaning shift: ${oneline(word.meaning_shift)}
- Description: ${oneline(word.description)}`
  )
  .join("\n\n")}

## Articles

${articles
  .map(
    (article) => `### ${article.title}

- URL: ${BASE_URL}/articles/${article.id}/
- Published: ${article.publishedAt}
- Description: ${article.description}
- Related words: ${article.relatedWordIds.join(", ") || "なし"}`
  )
  .join("\n\n")}

## Translators

${translators
  .map(
    (translator) => `### ${translator.name}

- URL: ${BASE_URL}/translators/${translator.id}/
- Years: ${translator.birth_year}-${translator.death_year}
- Description: ${oneline(translator.description.split("\n\n")[0])}`
  )
  .join("\n\n")}

## Fields

${fields
  .map(
    (field) => `### ${field.name}

- URL: ${BASE_URL}/fields/${field.id}/
- Description: ${oneline(field.description)}
- Terms: ${words.filter((word) => word.field_id === field.id).length}`
  )
  .join("\n\n")}
`
