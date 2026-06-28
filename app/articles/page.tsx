import { FC } from "react"
import { articles } from "lib/articles"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "翻訳語の歴史と成り立ちを読む",
  description:
    "翻訳語の歴史や成り立ちについての読み物。明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで。",
  keywords: ["翻訳語", "訳語", "和製漢語", "語源", "日本語の歴史", "明治", "翻訳の歴史", "読み物", "コラム"],
  alternates: { canonical: "https://shaqai.reload.co.jp/articles/" },
  openGraph: {
    title: "翻訳語の歴史と成り立ちを読む — 翻訳語辞典 Shaqai",
    description:
      "翻訳語の歴史や成り立ちについての読み物。明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで。",
    url: "https://shaqai.reload.co.jp/articles/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "翻訳語の歴史と成り立ちを読む",
    description:
      "翻訳語の歴史や成り立ちについての読み物。明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで。",
    images: ["/opengraph-image"],
  },
}

const Page: FC = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "翻訳語の歴史と成り立ちを読む",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://shaqai.reload.co.jp/articles/${article.id}/`,
      name: article.title,
    })),
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "読み物", url: "/articles/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: ".75rem", color: "#c8a96e" }}>読み物</p>
        <h1
          style={{
            fontSize: "1.25rem",
            color: "#e2dcd0",
            margin: ".5rem 0",
          }}
        >
          翻訳語の歴史と成り立ちを読む
        </h1>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>
          明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {articles.map((article) => (
          <a
            key={article.id}
            href={`/articles/${article.id}/`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid #2a2518",
                borderRadius: "4px",
                padding: "1.25rem 1.5rem",
                background: "#1a1610",
                transition: "border-color .2s",
              }}
            >
              <h3
                style={{
                  fontSize: "1.0625rem",
                  color: "#c8a96e",
                  marginBottom: ".625rem",
                  lineHeight: 1.5,
                  letterSpacing: ".02em",
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#807870",
                  lineHeight: 1.8,
                }}
              >
                {article.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </>
  )
}

export default Page
