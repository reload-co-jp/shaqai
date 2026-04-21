/* global URL, console */
import fs from "node:fs"

const wordsPath = new URL("../data/words.json", import.meta.url)
const words = JSON.parse(fs.readFileSync(wordsPath, "utf8"))

const firstAttestationPattern =
  /初出|初めて|初め|初期|初掲載|既に記載|記載|掲載|収録|刊行|使用例|用例|登場|現れ|見え|用い|採用|制定|公布|命名|創出|造語|考案|案出|訳出|訳語として/

const yearPattern = /(?:\d{4}年|明治\d+年|慶応元年|安政4年|弘化[元\d]+年|天保\d+年)/

const splitSentences = (text) =>
  text
    .split("。")
    .map((sentence) => sentence.trim())
    .filter(Boolean)

const pickEvidenceSentence = (word) => {
  const sentences = splitSentences(word.description ?? "")
  return (
    sentences.find((sentence) => firstAttestationPattern.test(sentence) && yearPattern.test(sentence)) ??
    sentences.find((sentence) => firstAttestationPattern.test(sentence)) ??
    sentences.find((sentence) => yearPattern.test(sentence)) ??
    sentences[0] ??
    null
  )
}

const pickSourceTitle = (word) => {
  const evidence = pickEvidenceSentence(word)
  const evidenceTitle = evidence?.match(/『([^』]+)』/)?.[1]
  if (evidenceTitle) return evidenceTitle

  return word.sources?.[0]?.title ?? null
}

const buildNote = (word) => {
  const evidence = pickEvidenceSentence(word)
  if (evidence) return `${evidence}。`

  return `${word.era}${word.year ? `（${word.year}年頃）` : ""}に用いられたとされる。`
}

let updated = 0

const enrichedWords = words.map((word) => {
  if (word.first_attestation) return word

  updated += 1
  return {
    ...word,
    first_attestation: {
      year: word.year ?? null,
      source: pickSourceTitle(word),
      note: buildNote(word),
    },
  }
})

fs.writeFileSync(wordsPath, `${JSON.stringify(enrichedWords, null, 2)}\n`)
console.log(`updated ${updated} words`)
