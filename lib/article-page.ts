import type { Metadata } from "next"
import { articles } from "lib/articles"

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

  return {
    title,
    description,
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
