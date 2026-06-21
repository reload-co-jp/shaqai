import { FC } from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { katakanaWords, getKatakanaWord } from "lib/db"
import { SourceList } from "components/elements/source-list"
import { DetailPageLayout } from "components/elements/detail-page-layout"
import { cardStyle, rowStyle, labelStyle, valueStyle, sectionHeadingStyle, colors } from "lib/styles"

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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
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
    url: `https://shaqai.reload.co.jp/katakana/${id}/`,
    termCode: word.original_word,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "翻訳語辞典 Shaqai カタカナ語",
      url: "https://shaqai.reload.co.jp/katakana/",
    },
  }

  return (
    <DetailPageLayout
      backHref="/katakana/"
      backLabel="カタカナ語一覧に戻る"
      title={word.katakana_word}
      subtitle={word.original_word}
      breadcrumbItems={[
        { name: "ホーム", url: "/" },
        { name: "カタカナ語", url: "/katakana/" },
        { name: word.katakana_word, url: `/katakana/${id}/` },
      ]}
      jsonLd={jsonLd}
    >
        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
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

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>意味のずれ</h2>
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

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>説明</h2>
          <p style={{ color: colors.text, fontSize: ".95rem", lineHeight: 1.7 }}>
            {word.description}
          </p>
        </div>

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>用例</h2>
          {word.examples.map((example, index) => (
            <div
              key={index}
              style={{
                borderBottom: index < word.examples.length - 1 ? `1px solid ${colors.borderDark}` : "none",
                paddingBottom: index < word.examples.length - 1 ? "1rem" : 0,
                marginBottom: index < word.examples.length - 1 ? "1rem" : 0,
              }}
            >
              <p style={{ color: colors.text, fontSize: ".95rem", lineHeight: 1.7 }}>
                {example.ja}
              </p>
              {example.en && (
                <p style={{ color: colors.muted, fontSize: ".85rem", lineHeight: 1.7, fontStyle: "italic" }}>
                  {example.en}
                </p>
              )}
            </div>
          ))}
        </div>

        <div style={cardStyle}>
          <h2 style={sectionHeadingStyle}>出典</h2>
          <SourceList sources={word.sources ?? []} />
        </div>
    </DetailPageLayout>
  )
}

export default Page
