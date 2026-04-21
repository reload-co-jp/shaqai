import { FC } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { katakanaWords, getKatakanaWord } from "lib/db"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const generateStaticParams = () =>
  katakanaWords.map((word) => ({ id: String(word.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const word = getKatakanaWord(Number(id))
  if (!word) return {}

  const title = `${word.katakana_word}（${word.original_word}）`
  const description =
    word.description.length > 120
      ? `${word.description.slice(0, 120)}…`
      : word.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://shaqai.reload.co.jp/katakana/${id}/`,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://shaqai.reload.co.jp/katakana/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const word = getKatakanaWord(Number(id))
  if (!word) return notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: word.katakana_word,
    alternateName: word.original_word,
    description: word.description,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "翻訳語辞典 Shaqai カタカナ語DB",
      url: "https://shaqai.reload.co.jp/katakana/",
    },
  }

  const rowStyle: React.CSSProperties = {
    display: "flex",
    borderBottom: "1px solid #28241a",
    padding: ".75rem 0",
  }
  const labelStyle: React.CSSProperties = {
    color: "#807870",
    fontSize: ".8rem",
    minWidth: "120px",
    paddingTop: ".1rem",
  }
  const valueStyle: React.CSSProperties = {
    color: "#e2dcd0",
    fontSize: ".9rem",
    flex: 1,
    lineHeight: 1.7,
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "カタカナ語", url: "/katakana/" },
          { name: word.katakana_word, url: `/katakana/${id}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <Link href="/katakana/" style={{ fontSize: ".8rem", color: "#807870", textDecoration: "none" }}>
            ← カタカナ語一覧に戻る
          </Link>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "3rem", color: "#c8a96e", marginBottom: ".5rem" }}>
            {word.katakana_word}
          </h1>
          <div style={{ fontSize: "1.1rem", color: "#7a9e82" }}>
            {word.original_word}
          </div>
        </div>

        <div
          style={{
            background: "#1e1a12",
            border: "1px solid #302b1e",
            borderRadius: "3px",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={rowStyle}>
            <span style={labelStyle}>原語</span>
            <span style={valueStyle}>{word.original_word}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>言語</span>
            <span style={valueStyle}>{word.language}</span>
          </div>
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <span style={labelStyle}>分類</span>
            <span style={valueStyle}>{word.category}</span>
          </div>
        </div>

        <div
          style={{
            background: "#1e1a12",
            border: "1px solid #302b1e",
            borderRadius: "3px",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: ".8rem", color: "#807870", marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>
            意味のずれ
          </h2>
          <div style={rowStyle}>
            <span style={labelStyle}>原語の意味</span>
            <span style={valueStyle}>{word.original_meaning}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>日本語の意味</span>
            <span style={valueStyle}>{word.japanese_meaning}</span>
          </div>
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <span style={labelStyle}>ずれ方</span>
            <span style={valueStyle}>{word.meaning_shift}</span>
          </div>
        </div>

        <div
          style={{
            background: "#1e1a12",
            border: "1px solid #302b1e",
            borderRadius: "3px",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: ".8rem", color: "#807870", marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>
            説明
          </h2>
          <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: 1.7 }}>
            {word.description}
          </p>
        </div>

        <div
          style={{
            background: "#1e1a12",
            border: "1px solid #302b1e",
            borderRadius: "3px",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: ".8rem", color: "#807870", marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>
            用例
          </h2>
          {word.examples.map((example, index) => (
            <div
              key={index}
              style={{
                borderBottom: index < word.examples.length - 1 ? "1px solid #28241a" : "none",
                paddingBottom: index < word.examples.length - 1 ? "1rem" : 0,
                marginBottom: index < word.examples.length - 1 ? "1rem" : 0,
              }}
            >
              <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: 1.7 }}>
                {example.ja}
              </p>
              {example.en && (
                <p style={{ color: "#807870", fontSize: ".85rem", lineHeight: 1.7, fontStyle: "italic" }}>
                  {example.en}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#1e1a12",
            border: "1px solid #302b1e",
            borderRadius: "3px",
            padding: "1rem 1.5rem",
          }}
        >
          <h2 style={{ fontSize: ".8rem", color: "#807870", marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>
            出典
          </h2>
          {word.sources?.length ? (
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".65rem",
                paddingLeft: "1.25rem",
                color: "#e2dcd0",
                fontSize: ".9rem",
                lineHeight: 1.7,
              }}
            >
              {word.sources.map((source) => (
                <li key={`${source.title}-${source.url ?? ""}`}>
                  {source.author && <span>{source.author} </span>}
                  {source.url ? (
                    <a href={source.url} style={{ color: "#7a9e82", textDecoration: "none" }}>
                      『{source.title}』
                    </a>
                  ) : (
                    <span>『{source.title}』</span>
                  )}
                  {source.note && (
                    <span style={{ color: "#807870", fontSize: ".82rem", marginLeft: ".5rem" }}>
                      {source.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: "#807870", fontSize: ".9rem", lineHeight: 1.7 }}>
              出典情報はまだ登録されていません。
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Page
