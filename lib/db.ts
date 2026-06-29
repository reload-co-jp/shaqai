import rawWords from "data/words.json"
import rawFields from "data/fields.json"
import rawTranslators from "data/translators.json"
import rawKatakanaWords from "data/katakana.json"

export type Field = {
  id: number
  name: string
  description?: string
}

export type Translator = {
  id: number
  name: string
  image?: string
  birth_year: number
  death_year: number
  description: string
}

export type Meaning = {
  en: string
  ja: string
  example_en?: string
  example_ja?: string
}

export type Source = {
  title: string
  author?: string
  url?: string
  note?: string
}

export type Word = {
  id: number
  japanese_word: string
  original_word: string
  original_katakana?: string
  language: string
  field_id: number | null
  translator_id: number | null
  era: string
  year: number | null
  meanings: Meaning[]
  description: string
  etymology: string
  first_attestation?: {
    year?: number | null
    source?: string | null
    note: string
  }
  sources?: Source[]
}

export type KatakanaExample = {
  ja: string
  en?: string
}

export type KatakanaWord = {
  id: number
  katakana_word: string
  original_word: string
  language: string
  category: string
  original_meaning: string
  japanese_meaning: string
  meaning_shift: string
  description: string
  examples: KatakanaExample[]
  sources?: Source[]
}

export const fields: Field[] = rawFields
export const translators: Translator[] = rawTranslators
export const words: Word[] = rawWords as Word[]
export const katakanaWords: KatakanaWord[] = rawKatakanaWords as KatakanaWord[]

export const getWord = (id: number) => words.find((w) => w.id === id)
export const getKatakanaWord = (id: number) =>
  katakanaWords.find((w) => w.id === id)
export const getField = (id: number | null) => fields.find((f) => f.id === id)
export const getTranslator = (id: number) => translators.find((t) => t.id === id)

export const getWordsByField = (fieldId: number) =>
  words.filter((w) => w.field_id === fieldId)

export const getWordsByTranslator = (translatorId: number) =>
  words.filter((w) => w.translator_id === translatorId)

const createSearcher = <T>(items: T[], getFields: (item: T) => (string | undefined)[]) =>
  (query: string) => {
    const q = query.toLowerCase()
    return items.filter((item) =>
      getFields(item).some((field) => field?.toLowerCase().includes(q))
    )
  }

export const searchWords = createSearcher(words, (w) => [
  w.japanese_word,
  w.original_word,
  w.description,
  w.etymology,
])

export const searchKatakanaWords = createSearcher(katakanaWords, (w) => [
  w.katakana_word,
  w.original_word,
  w.japanese_meaning,
  w.original_meaning,
  w.description,
])
