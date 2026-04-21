import type { Word } from "lib/db"

export type WordSource = {
  title: string
  author?: string
  url?: string
  note?: string
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

export const getWordSources = (word: Word): WordSource[] => {
  if (word.sources?.length) return word.sources

  const text = `${word.description}\n${word.etymology}`
  const titles = [...text.matchAll(/『([^』]+)』/g)]
    .map((match) => match[1])
    .filter((title, index, all) => all.indexOf(title) === index)

  return titles.map((title) => ({ title, note: "本文中で言及されている文献・資料" }))
}
