import { FC } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { words, getWord, getField, getTranslator } from "lib/db"
import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { SourceList } from "components/elements/source-list"
import { getFirstAttestation, getWordSources } from "lib/word-details"
import {
  cardStyle,
  rowStyle,
  labelStyle,
  valueStyle,
  sectionHeadingStyle,
  backLinkStyle,
} from "lib/styles"

export const generateStaticParams = () =>
  words.map((w) => ({ id: String(w.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const word = getWord(Number(id))
  if (!word) return {}
  const title = `${word.japanese_word}（${word.original_word}）`
  const description = word.description.length > 120 ? word.description.slice(0, 120) + "…" : word.description
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://shaqai.reload.co.jp/words/${id}/`,
      type: "article",
      images: [{ url: `https://shaqai.reload.co.jp/words/${id}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://shaqai.reload.co.jp/words/${id}/opengraph-image`],
    },
    alternates: { canonical: `https://shaqai.reload.co.jp/words/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const word = getWord(Number(id))
  if (!word) return notFound()

  const field = getField(word.field_id)
  const translator = word.translator_id ? getTranslator(word.translator_id) : null
  const firstAttestation = getFirstAttestation(word)
  const sources = getWordSources(word)
  const relatedWords = words
    .filter((candidate) => {
      if (candidate.id === word.id) return false
      if (word.field_id && candidate.field_id === word.field_id) return true
      if (word.translator_id && candidate.translator_id === word.translator_id) return true
      return false
    })
    .sort((a, b) => {
      const score = (candidate: (typeof words)[number]) => {
        let total = 0
        if (word.field_id && candidate.field_id === word.field_id) total += 3
        if (word.translator_id && candidate.translator_id === word.translator_id) total += 2
        if (candidate.era === word.era) total += 1
        return total
      }
      return score(b) - score(a) || a.id - b.id
    })
    .slice(0, 4)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: word.japanese_word,
    alternateName: word.original_word,
    description: word.description,
    url: `https://shaqai.reload.co.jp/words/${id}/`,
    termCode: word.original_word,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "翻訳語辞典 Shaqai",
      url: "https://shaqai.reload.co.jp/words/",
    },
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "翻訳語一覧", url: "/words/" },
          { name: word.japanese_word, url: `/words/${id}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <Link href="/words/" style={backLinkStyle}>
            ← 翻訳語一覧に戻る
          </Link>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "3rem", color: "#c8a96e", marginBottom: ".5rem" }}>
            {word.japanese_word}
          </h1>
          <div style={{ fontSize: "1.1rem", color: "#7a9e82" }}>
            {word.original_word}
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <div style={rowStyle}>
            <span style={labelStyle}>言語</span>
            <span style={valueStyle}>{word.language}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>翻訳時期</span>
            <span style={valueStyle}>
              {word.era}
              {word.year && (
                <span style={{ color: "#5e5848", marginLeft: ".5rem", fontSize: ".8rem" }}>
                  ({word.year}年頃)
                </span>
              )}
            </span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>分野</span>
            <span style={valueStyle}>
              {field ? (
                <Link href={`/fields/${field.id}/`} style={{ color: "#7a9e82", textDecoration: "none" }}>
                  {field.name}
                </Link>
              ) : "—"}
            </span>
          </div>
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <span style={labelStyle}>翻訳者</span>
            <span style={valueStyle}>
              {translator ? (
                <Link href={`/translators/${translator.id}/`} style={{ color: "#7a9e82", textDecoration: "none" }}>
                  {translator.name}
                </Link>
              ) : "—"}
            </span>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>意味</h2>
          {word.meanings.map((meaning, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < word.meanings.length - 1 ? "1px solid #28241a" : "none",
                paddingBottom: i < word.meanings.length - 1 ? "1rem" : 0,
                marginBottom: i < word.meanings.length - 1 ? "1rem" : 0,
              }}
            >
              {word.meanings.length > 1 && (
                <span style={{ color: "#5e5848", fontSize: ".75rem", marginBottom: ".25rem", display: "block" }}>
                  {i + 1}.
                </span>
              )}
              <p style={{ color: "#807870", fontSize: ".9rem", lineHeight: "1.7", marginBottom: ".25rem", fontStyle: "italic" }}>
                {meaning.en}
              </p>
              <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: "1.7", marginBottom: meaning.example_en ? ".75rem" : 0 }}>
                {meaning.ja}
              </p>
              {meaning.example_en && (
                <div style={{ borderLeft: "2px solid #302b1e", paddingLeft: ".75rem", marginTop: ".5rem" }}>
                  <p style={{ color: "#5e7a62", fontSize: ".85rem", lineHeight: "1.6", fontStyle: "italic", marginBottom: ".2rem" }}>
                    {meaning.example_en}
                  </p>
                  {meaning.example_ja && (
                    <p style={{ color: "#807870", fontSize: ".85rem", lineHeight: "1.6" }}>
                      {meaning.example_ja}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>由来・語源</h2>
          <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: "1.7" }}>
            {word.etymology}
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionHeadingStyle}>説明</h2>
          <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: "1.7" }}>
            {word.description}
          </p>
        </div>

        <div style={{ ...cardStyle, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>初出情報</h2>
          <div style={rowStyle}>
            <span style={labelStyle}>時期</span>
            <span style={valueStyle}>
              {firstAttestation.year ? `${firstAttestation.year}年頃` : word.era}
            </span>
          </div>
          {firstAttestation.source && (
            <div style={rowStyle}>
              <span style={labelStyle}>初出資料</span>
              <span style={valueStyle}>{firstAttestation.source}</span>
            </div>
          )}
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <span style={labelStyle}>補足</span>
            <span style={valueStyle}>{firstAttestation.note}</span>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionHeadingStyle}>出典</h2>
          <SourceList sources={sources} />
        </div>

        {relatedWords.length > 0 && (
          <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
            <h2 style={{ ...sectionHeadingStyle, marginBottom: ".9rem" }}>
              類似の単語
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: ".75rem",
              }}
            >
              {relatedWords.map((relatedWord) => {
                const relatedField = getField(relatedWord.field_id)
                return (
                  <Link
                    key={relatedWord.id}
                    href={`/words/${relatedWord.id}/`}
                    style={{
                      background: "#18140e",
                      border: "1px solid #28241a",
                      borderRadius: "3px",
                      padding: ".85rem 1rem",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div style={{ fontSize: "1rem", color: "#c8a96e", fontWeight: "bold", marginBottom: ".25rem" }}>
                      {relatedWord.japanese_word}
                    </div>
                    <div style={{ fontSize: ".82rem", color: "#7a9e82", marginBottom: ".35rem" }}>
                      {relatedWord.original_word}
                    </div>
                    <div style={{ fontSize: ".75rem", color: "#807870" }}>
                      {relatedField?.name ?? relatedWord.era}
                    </div>
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

export default Page
