import { FC } from "react"
import { words, fields, getField, getTranslator } from "lib/db"
import { WordCard } from "components/elements/word-card"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { FieldTags } from "components/elements/field-tags"
import { wordGridStyle } from "lib/styles"

export const metadata = {
  title: "翻訳語一覧",
  description:
    "外国語を意味翻訳して作られた日本語（和製漢語・訳語）の一覧。語源・由来・訳語の歴史を収録。",
  keywords: ["翻訳語", "訳語", "和製漢語", "語源", "由来", "日本語の歴史", "明治期", "翻訳の歴史"],
  alternates: { canonical: "https://shaqai.reload.co.jp/words/" },
  openGraph: {
    title: "翻訳語一覧 — 翻訳語辞典 Shaqai",
    description:
      "外国語を意味翻訳して作られた日本語（和製漢語・訳語）の一覧。語源・由来・訳語の歴史を収録。",
    url: "https://shaqai.reload.co.jp/words/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "翻訳語一覧",
    description:
      "外国語を意味翻訳して作られた日本語（和製漢語・訳語）の一覧。語源・由来・訳語の歴史を収録。",
    images: ["/opengraph-image"],
  },
}

const Page: FC = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "翻訳語一覧",
    description:
      "外国語を意味翻訳して作られた日本語、和製漢語・訳語の一覧。",
    numberOfItems: words.length,
    itemListElement: words.map((word, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://shaqai.reload.co.jp/words/${word.id}/`,
      name: word.japanese_word,
      ...(word.etymology && { description: word.etymology }),
    })),
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "翻訳語一覧", url: "/words/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: ".75rem", color: "#c8a96e" }}>翻訳語</p>
          <h1
            style={{
              fontSize: "1.5rem",
              color: "#e2dcd0",
              margin: ".5rem 0",
            }}
          >
            翻訳語一覧
          </h1>
          <p style={{ fontSize: ".875rem", color: "#807870", lineHeight: 1.8 }}>
            {words.length}語収録 — 外国語を意味翻訳して作られた日本語
          </p>
        </div>

      <FieldTags fields={fields} />

      <div style={wordGridStyle}>
        {words.map((word) => (
          <WordCard
            key={word.id}
            word={word}
            field={getField(word.field_id)}
            translator={
              word.translator_id ? getTranslator(word.translator_id) : undefined
            }
          />
        ))}
      </div>
      </div>
    </>
  )
}

export default Page
