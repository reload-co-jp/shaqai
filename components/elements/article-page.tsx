import { ReactNode } from "react"
import Link from "next/link"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { articles } from "lib/articles"
import { words, getField } from "lib/db"

type ArticlePageProps = {
  id: string
  title: string
  description: string
  children: ReactNode
}

export const ArticlePage = ({
  id,
  title,
  description,
  children,
}: ArticlePageProps) => {
  const url = `https://shaqai.reload.co.jp/articles/${id}/`
  const article = articles.find((a) => a.id === id)
  const publishedAt = article?.publishedAt
  const relatedWords = (article?.relatedWordIds ?? [])
    .map((wid) => words.find((w) => w.id === wid))
    .filter(Boolean) as (typeof words)[number][]
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    ...(publishedAt && { datePublished: publishedAt }),
    image: {
      "@type": "ImageObject",
      url: "https://shaqai.reload.co.jp/opengraph-image",
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "Reload, Inc.",
      url: "https://reload.co.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "翻訳語辞典 Shaqai",
      url: "https://shaqai.reload.co.jp",
      logo: {
        "@type": "ImageObject",
        url: "https://shaqai.reload.co.jp/icon.svg",
      },
    },
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "読み物", url: "/articles/" },
          { name: title, url: `/articles/${id}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #2a2518",
          }}
        >
          <p
            style={{
              fontSize: ".75rem",
              color: "#5e5848",
              marginBottom: ".75rem",
              letterSpacing: ".05em",
            }}
          >
            読み物
          </p>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#e2dcd0",
              lineHeight: 1.4,
              marginBottom: "1rem",
              letterSpacing: ".02em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#908a7a",
              lineHeight: 1.8,
              borderLeft: "3px solid #c8a96e",
              paddingLeft: "1rem",
            }}
          >
            {description}
          </p>
        </div>

        {children}

        {relatedWords.length > 0 && (
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #2a2518",
            }}
          >
            <h2
              style={{
                fontSize: ".875rem",
                color: "#807870",
                marginBottom: "1rem",
                letterSpacing: ".05em",
                textTransform: "uppercase",
              }}
            >
              関連する翻訳語
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: ".75rem",
              }}
            >
              {relatedWords.map((word) => {
                const field = getField(word.field_id)
                return (
                  <Link
                    key={word.id}
                    href={`/words/${word.id}/`}
                    style={{
                      background: "#18140e",
                      border: "1px solid #28241a",
                      borderRadius: "3px",
                      padding: ".85rem 1rem",
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.1rem",
                        color: "#c8a96e",
                        fontWeight: "bold",
                        marginBottom: ".25rem",
                      }}
                    >
                      {word.japanese_word}
                    </div>
                    <div
                      style={{
                        fontSize: ".8rem",
                        color: "#7a9e82",
                        marginBottom: ".3rem",
                      }}
                    >
                      {word.original_word}
                    </div>
                    {field && (
                      <div style={{ fontSize: ".75rem", color: "#807870" }}>
                        {field.name}
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
