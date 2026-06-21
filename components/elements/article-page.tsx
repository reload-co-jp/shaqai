import { ReactNode } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { RelatedCard } from "components/elements/related-card"
import { NavLink, FooterLinks } from "components/elements/nav-link"
import { articles } from "lib/articles"
import { words, getField } from "lib/db"
import { colors } from "lib/styles"

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
            borderBottom: `1px solid ${colors.sectionBorder}`,
          }}
        >
          <p
            style={{
              fontSize: ".75rem",
              color: colors.mutedDark,
              marginBottom: ".75rem",
              letterSpacing: ".05em",
            }}
          >
            読み物
          </p>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: colors.text,
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
              color: colors.subtleText,
              lineHeight: 1.8,
              borderLeft: `3px solid ${colors.accent}`,
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
              borderTop: `1px solid ${colors.sectionBorder}`,
            }}
          >
            <h2
              style={{
                fontSize: ".875rem",
                color: colors.muted,
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
                  <RelatedCard
                    key={word.id}
                    href={`/words/${word.id}/`}
                    title={word.japanese_word}
                    subtitle={word.original_word}
                    meta={field?.name}
                  />
                )
              })}
            </div>
          </div>
        )}

        <FooterLinks>
          <NavLink href="/articles/" active>
            読み物一覧へ →
          </NavLink>
          <NavLink href="/words/">翻訳語一覧へ →</NavLink>
          <NavLink href="/search/">訳語を検索する →</NavLink>
        </FooterLinks>
      </div>
    </>
  )
}
