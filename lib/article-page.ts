import type { Metadata } from "next"
import { articles } from "lib/articles"
import { words } from "lib/db"

const extractKeywords = (title: string, description: string, relatedWordIds: number[]): string[] => {
  const kw: string[] = ["翻訳語", "訳語", "語源", "明治", "日本語の歴史"]
  const relatedWords = relatedWordIds
    .map((id) => words.find((w) => w.id === id))
    .filter(Boolean)
  relatedWords.forEach((w) => {
    if (w) {
      kw.push(w.japanese_word)
      kw.push(`${w.japanese_word} 語源`)
    }
  })
  const matches = [...title.matchAll(/「([^」]+)」/g)]
  matches.forEach((m) => {
    kw.push(m[1])
    kw.push(`${m[1]} 語源`)
    kw.push(`${m[1]} 由来`)
  })
  return [...new Set(kw)]
}

export const createArticleMetadata = ({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}): Metadata => {
  const url = `https://shaqai.reload.co.jp/articles/${id}/`
  const article = articles.find((a) => a.id === id)
  const fullTitle = `${title} — 翻訳語辞典 Shaqai`
  const keywords = extractKeywords(title, description, article?.relatedWordIds ?? [])

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: fullTitle,
      description,
      url,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      ...(article?.publishedAt && { publishedTime: article.publishedAt }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  }
}
