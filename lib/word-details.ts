import type { Source, Word } from "lib/db"

const truncate = (text: string, maxLength: number) => {
  if (maxLength <= 0) return ""
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text
}

export const getFirstAttestation = (word: Word) => {
  if (word.first_attestation) return word.first_attestation

  const sentences = word.description
    .split("。")
    .map((sentence) => sentence.trim())
    .filter(Boolean)
  const firstAttestationSentence = sentences.find((sentence) =>
    /初出|初めて|初めに|初め|記載|収録|刊行|使用例|用例|登場|現れ|見え|用い/.test(sentence)
  )

  return {
    year: word.year ?? null,
    source: null,
    note: firstAttestationSentence
      ? `${firstAttestationSentence}。`
      : `${word.era}${word.year ? `（${word.year}年頃）` : ""}に用いられたとされる。詳しい初出資料は未登録。`,
  }
}

export const getWordSources = (word: Word): Source[] => {
  if (word.sources?.length) return word.sources

  const text = `${word.description}\n${word.etymology}`
  const titles = [...text.matchAll(/『([^』]+)』/g)]
    .map((match) => match[1])
    .filter((title, index, all) => all.indexOf(title) === index)

  return titles.map((title) => ({ title, note: "本文中で言及されている文献・資料" }))
}

export const getWordSeo = (word: Word) => {
  const firstMeaning = word.meanings[0]?.ja ?? word.description
  const translatedFrom = `${word.original_word}（${word.language}）`
  const originSummary = truncate(word.etymology, 90)
  const title = `「${word.japanese_word}」の語源・由来｜${word.original_word}の訳語`
  const description = truncate(
    `「${word.japanese_word}」は${translatedFrom}の訳語。語源・由来は「${originSummary}」。意味、初出、翻訳時期、出典を解説。`,
    155
  )
  const keywords = [
    word.japanese_word,
    word.original_word,
    `${word.japanese_word} 語源`,
    `${word.japanese_word} 由来`,
    `${word.japanese_word} 意味`,
    `${word.japanese_word} とは`,
    `${word.japanese_word} 訳語`,
    `${word.original_word} 訳語`,
    `${word.original_word} 日本語`,
    word.language,
  ]

  const faqs = [
    {
      question: `「${word.japanese_word}」の語源・由来は？`,
      answer: word.etymology,
    },
    {
      question: `「${word.japanese_word}」とは？`,
      answer: firstMeaning,
    },
    {
      question: `「${word.japanese_word}」は何の訳語？`,
      answer: `「${word.japanese_word}」は${translatedFrom}の訳語として、${word.era}${word.year ? `（${word.year}年頃）` : ""}に用いられた。`,
    },
  ]

  return { title, description, keywords, faqs }
}
