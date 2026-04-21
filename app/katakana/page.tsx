import { FC } from "react"
import { katakanaWords } from "lib/db"
import { KatakanaCard } from "components/elements/katakana-card"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "カタカナ語一覧",
  description:
    "原語の音を借りて日本語に定着したカタカナ語と、原語からずれた意味を整理するデータベース。",
  alternates: { canonical: "https://shaqai.reload.co.jp/katakana/" },
  openGraph: {
    title: "カタカナ語一覧 — 翻訳語辞典 Shaqai",
    description:
      "原語の音を借りて日本語に定着したカタカナ語と、原語からずれた意味を整理するデータベース。",
    url: "https://shaqai.reload.co.jp/katakana/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "カタカナ語一覧",
    description:
      "原語の音を借りて日本語に定着したカタカナ語と、原語からずれた意味を整理するデータベース。",
    images: ["/opengraph-image"],
  },
}

const Page: FC = () => {
  const categories = [...new Set(katakanaWords.map((word) => word.category))]
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "カタカナ語一覧",
    description:
      "原語の音を借りて日本語に定着したカタカナ語と、原語からずれた意味を整理する一覧。",
    numberOfItems: katakanaWords.length,
    itemListElement: katakanaWords.map((word, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://shaqai.reload.co.jp/katakana/${word.id}/`,
      name: word.katakana_word,
    })),
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "カタカナ語一覧", url: "/katakana/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: ".75rem", color: "#c8a96e" }}>カタカナ語</p>
        <h1
          style={{
            fontSize: "1.5rem",
            color: "#e2dcd0",
            margin: ".5rem 0",
          }}
        >
          カタカナ語一覧
        </h1>
        <p style={{ fontSize: ".875rem", color: "#807870", lineHeight: 1.8 }}>
          翻訳語のように意味を漢字で訳した語ではなく、原語の音を借りて日本語に定着した語。
          ここでは、原語の意味と日本語での意味がどのようにずれたかを整理します。
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
        {categories.map((category) => (
          <span
            key={category}
            style={{
              fontSize: ".8rem",
              background: "#1e1a12",
              border: "1px solid #302b1e",
              borderRadius: "4px",
              color: "#9e9888",
              padding: ".3rem .8rem",
            }}
          >
            {category}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {katakanaWords.map((word) => (
          <KatakanaCard key={word.id} word={word} />
        ))}
      </div>
      </div>
    </>
  )
}

export default Page
