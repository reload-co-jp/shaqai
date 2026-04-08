import rawWords from "data/words.json"
import rawFields from "data/fields.json"
import rawTranslators from "data/translators.json"

export type Field = {
  id: number
  name: string
}

export type Translator = {
  id: number
  name: string
  image?: string
  birth_year: number
  death_year: number
  description: string
}

export type Word = {
  id: number
  japanese_word: string
  original_word: string
  language: string
  field_id: number
  translator_id: number | null
  era: string
  year: number
  description: string
  etymology: string
}

export const fields: Field[] = rawFields
export const translators: Translator[] = rawTranslators
export const words: Word[] = rawWords as Word[]

export const getWord = (id: number) => words.find((w) => w.id === id)
export const getField = (id: number) => fields.find((f) => f.id === id)
export const getTranslator = (id: number) => translators.find((t) => t.id === id)

export const getWordsByField = (fieldId: number) =>
  words.filter((w) => w.field_id === fieldId)

export const getWordsByTranslator = (translatorId: number) =>
  words.filter((w) => w.translator_id === translatorId)

export const searchWords = (query: string) => {
  const q = query.toLowerCase()
  return words.filter(
    (w) =>
      w.japanese_word.includes(q) ||
      w.original_word.toLowerCase().includes(q) ||
      w.description.includes(q) ||
      w.etymology.includes(q)
  )
}
