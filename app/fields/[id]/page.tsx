import { FC } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { notFound } from "next/navigation"
import Link from "next/link"
import { fields, getField, getWordsByField, getTranslator } from "lib/db"
import { WordCard } from "components/elements/word-card"
import { backLinkStyle, wordGridStyle } from "lib/styles"
import type { Metadata } from "next"

export const generateStaticParams = () =>
  fields.map((f) => ({ id: String(f.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const field = getField(Number(id))
  if (!field) return {}
  const title = field.name
  const description = field.description ?? `${field.name}に関する翻訳語・訳語の一覧`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://shaqai.reload.co.jp/fields/${id}/`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://shaqai.reload.co.jp/fields/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const field = getField(Number(id))
  if (!field) return notFound()

  const fieldWords = getWordsByField(field.id)

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: field.name,
    description: field.description ?? `${field.name}に関する翻訳語・訳語の一覧`,
    url: `https://shaqai.reload.co.jp/fields/${id}/`,
    numberOfItems: fieldWords.length,
    isPartOf: {
      "@type": "WebSite",
      name: "翻訳語辞典 Shaqai",
      url: "https://shaqai.reload.co.jp",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "分野一覧", url: "/fields/" },
          { name: field.name, url: `/fields/${id}/` },
        ]}
      />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Link href="/fields/" style={backLinkStyle}>
            ← 分野一覧
          </Link>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "1.5rem", color: "#c8a96e", marginBottom: ".5rem" }}>
            {field.name}
          </h1>
          {field.description && (
            <p style={{ fontSize: ".95rem", lineHeight: 1.8, color: "#b7aea2", marginBottom: ".5rem" }}>
              {field.description}
            </p>
          )}
          <p style={{ fontSize: ".875rem", color: "#807870" }}>{fieldWords.length}語</p>
        </div>

        <div style={wordGridStyle}>
          {fieldWords.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              field={field}
              translator={word.translator_id ? getTranslator(word.translator_id) : undefined}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
