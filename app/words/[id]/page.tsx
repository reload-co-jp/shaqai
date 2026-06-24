import { FC } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { words, getWord, getField, getTranslator } from "lib/db"
import type { Metadata } from "next"
import { SourceList } from "components/elements/source-list"
import { RelatedCard } from "components/elements/related-card"
import { NavLink, FooterLinks } from "components/elements/nav-link"
import { DetailPageLayout } from "components/elements/detail-page-layout"
import { getFirstAttestation, getWordSeo, getWordSources } from "lib/word-details"
import { getArticlesForWord } from "lib/articles"
import { cardStyle, rowStyle, labelStyle, valueStyle, sectionHeadingStyle, colors } from "lib/styles"

export const generateStaticParams = () =>
  words.map((w) => ({ id: String(w.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const word = getWord(Number(id))
  if (!word) return {}
  const shortTitle = `${word.japanese_word}（${word.original_word}）`
  const seo = getWordSeo(word)
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://shaqai.reload.co.jp/words/${id}/`,
      type: "article",
      images: [{ url: `https://shaqai.reload.co.jp/words/${id}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: shortTitle,
      description: seo.description,
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
  const seo = getWordSeo(word)
  const keyFacts = [
    `「${word.japanese_word}」は${word.original_word}（${word.language}）の訳語。`,
    `語源・由来: ${word.etymology}`,
    `翻訳時期: ${word.era}${word.year ? `（${word.year}年頃）` : ""}。`,
    translator ? `翻訳者: ${translator.name}。` : "翻訳者: 未登録。",
    field ? `分野: ${field.name}。` : "分野: 未登録。",
  ]
  const relatedArticles = getArticlesForWord(word.id)
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
    "@graph": [
      {
        "@type": "DefinedTerm",
        name: word.japanese_word,
        alternateName: word.original_word,
        description: seo.description,
        url: `https://shaqai.reload.co.jp/words/${id}/`,
        termCode: word.original_word,
        inLanguage: "ja",
        isPartOf: {
          "@type": "DefinedTermSet",
          name: "翻訳語辞典 Shaqai",
          url: "https://shaqai.reload.co.jp/words/",
        },
        subjectOf: {
          "@type": "WebPage",
          name: seo.title,
          url: `https://shaqai.reload.co.jp/words/${id}/`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <DetailPageLayout
      backHref="/words/"
      backLabel="翻訳語一覧に戻る"
      title={word.japanese_word}
      subtitle={word.original_word}
      breadcrumbItems={[
        { name: "ホーム", url: "/" },
        { name: "翻訳語一覧", url: "/words/" },
        { name: word.japanese_word, url: `/words/${id}/` },
      ]}
      jsonLd={jsonLd}
    >

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
                <span style={{ color: colors.mutedDark, marginLeft: ".5rem", fontSize: ".8rem" }}>
                  ({word.year}年頃)
                </span>
              )}
            </span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>分野</span>
            <span style={valueStyle}>
              {field ? (
                <>
                  <Link href={`/fields/${field.id}/`} style={{ color: colors.green, textDecoration: "none" }}>
                    {field.name}
                  </Link>
                  <Link
                    href={`/fields/${field.id}/`}
                    style={{ color: colors.mutedDark, fontSize: ".75rem", marginLeft: ".6rem", textDecoration: "none" }}
                  >
                    他の訳語を見る →
                  </Link>
                </>
              ) : "—"}
            </span>
          </div>
          <div style={{ ...rowStyle, borderBottom: "none" }}>
            <span style={labelStyle}>翻訳者</span>
            <span style={valueStyle}>
              {translator ? (
                <>
                  <Link href={`/translators/${translator.id}/`} style={{ color: colors.green, textDecoration: "none" }}>
                    {translator.name}
                  </Link>
                  <Link
                    href={`/translators/${translator.id}/`}
                    style={{ color: colors.mutedDark, fontSize: ".75rem", marginLeft: ".6rem", textDecoration: "none" }}
                  >
                    他の訳語を見る →
                  </Link>
                </>
              ) : "—"}
            </span>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>要点</h2>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: colors.text, fontSize: ".95rem", lineHeight: "1.8" }}>
            {keyFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>意味</h2>
          {word.meanings.map((meaning, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < word.meanings.length - 1 ? `1px solid ${colors.borderDark}` : "none",
                paddingBottom: i < word.meanings.length - 1 ? "1rem" : 0,
                marginBottom: i < word.meanings.length - 1 ? "1rem" : 0,
              }}
            >
              {word.meanings.length > 1 && (
                <span style={{ color: colors.mutedDark, fontSize: ".75rem", marginBottom: ".25rem", display: "block" }}>
                  {i + 1}.
                </span>
              )}
              <p style={{ color: colors.muted, fontSize: ".9rem", lineHeight: "1.7", marginBottom: ".25rem", fontStyle: "italic" }}>
                {meaning.en}
              </p>
              <p style={{ color: colors.text, fontSize: ".95rem", lineHeight: "1.7", marginBottom: meaning.example_en ? ".75rem" : 0 }}>
                {meaning.ja}
              </p>
              {meaning.example_en && (
                <div style={{ borderLeft: `2px solid ${colors.border}`, paddingLeft: ".75rem", marginTop: ".5rem" }}>
                  <p style={{ color: "#5e7a62", fontSize: ".85rem", lineHeight: "1.6", fontStyle: "italic", marginBottom: ".2rem" }}>
                    {meaning.example_en}
                  </p>
                  {meaning.example_ja && (
                    <p style={{ color: colors.muted, fontSize: ".85rem", lineHeight: "1.6" }}>
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
          <p style={{ color: colors.muted, fontSize: ".85rem", lineHeight: "1.7", marginBottom: ".75rem" }}>
            「{word.japanese_word}」の語源・由来
          </p>
          <p style={{ color: colors.text, fontSize: ".95rem", lineHeight: "1.7" }}>
            {word.etymology}
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionHeadingStyle}>説明</h2>
          <p style={{ color: colors.text, fontSize: ".95rem", lineHeight: "1.7" }}>
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

        <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
          <h2 style={sectionHeadingStyle}>よくある質問</h2>
          {seo.faqs.map((faq, index) => (
            <div
              key={faq.question}
              style={{
                borderBottom: index < seo.faqs.length - 1 ? `1px solid ${colors.borderDark}` : "none",
                paddingBottom: index < seo.faqs.length - 1 ? "1rem" : 0,
                marginBottom: index < seo.faqs.length - 1 ? "1rem" : 0,
              }}
            >
              <h3 style={{ color: colors.green, fontSize: ".95rem", marginBottom: ".4rem" }}>
                {faq.question}
              </h3>
              <p style={{ color: colors.text, fontSize: ".9rem", lineHeight: "1.7" }}>
                {faq.answer}
              </p>
            </div>
          ))}
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
                  <RelatedCard
                    key={relatedWord.id}
                    href={`/words/${relatedWord.id}/`}
                    title={relatedWord.japanese_word}
                    subtitle={relatedWord.original_word}
                    meta={relatedField?.name ?? relatedWord.era}
                  />
                )
              })}
            </div>
          </div>
        )}

        {relatedArticles.length > 0 && (
          <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
            <h2 style={{ ...sectionHeadingStyle, marginBottom: ".9rem" }}>
              関連する読み物
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}/`}
                  style={{
                    background: colors.relatedCardBg,
                    border: `1px solid ${colors.borderDark}`,
                    borderRadius: "3px",
                    padding: ".85rem 1rem",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  <div style={{ fontSize: ".95rem", color: colors.text, marginBottom: ".35rem" }}>
                    {article.title}
                  </div>
                  <div style={{ fontSize: ".8rem", color: colors.muted, lineHeight: 1.6 }}>
                    {article.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <FooterLinks>
          <NavLink href="/words/" active>
            翻訳語一覧へ →
          </NavLink>
          <NavLink href="/search/">訳語を検索する →</NavLink>
          <NavLink href="/katakana/">カタカナ語を見る →</NavLink>
        </FooterLinks>
    </DetailPageLayout>
  )
}

export default Page
