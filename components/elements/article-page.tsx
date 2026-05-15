import { ReactNode } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { articles } from "lib/articles"

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
  const publishedAt = articles.find((a) => a.id === id)?.publishedAt
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
      </div>
    </>
  )
}
