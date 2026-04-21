import { FC } from "react"
import { words, fields, getField, getTranslator } from "lib/db"
import { WordCard } from "components/elements/word-card"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "翻訳語一覧",
  description:
    "外国語を意味翻訳して作られた日本語、和製漢語・訳語の一覧。",
  alternates: { canonical: "https://shaqai.reload.co.jp/words/" },
  openGraph: {
    title: "翻訳語一覧 — 翻訳語辞典 Shaqai",
    description:
      "外国語を意味翻訳して作られた日本語、和製漢語・訳語の一覧。",
    url: "https://shaqai.reload.co.jp/words/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "翻訳語一覧",
    description:
      "外国語を意味翻訳して作られた日本語、和製漢語・訳語の一覧。",
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

      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          gap: ".5rem",
          flexWrap: "wrap",
        }}
      >
        {fields.map((field) => (
          <a
            key={field.id}
            href={`/fields/${field.id}/`}
            style={{
              fontSize: ".8rem",
              background: "#1e1a12",
              border: "1px solid #302b1e",
              borderRadius: "4px",
              color: "#9e9888",
              padding: ".3rem .8rem",
              textDecoration: "none",
            }}
          >
            {field.name}
          </a>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
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
