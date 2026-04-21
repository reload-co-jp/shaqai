import type { Metadata } from "next"

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

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: `${title} — 翻訳語辞典 Shaqai`,
      description,
      url,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  }
}
