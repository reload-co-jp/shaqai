import { FC } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  translators,
  fields,
  getTranslator,
  getWordsByTranslator,
  getField,
} from "lib/db"
import { WordCard } from "components/elements/word-card"
import { backLinkStyle, cardStyle, wordGridStyle } from "lib/styles"
import type { Metadata } from "next"

export const generateStaticParams = () =>
  translators.map((t) => ({ id: String(t.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params
  const translator = getTranslator(Number(id))
  if (!translator) return {}
  const title = `${translator.name} | 翻訳者`
  const firstPara = translator.description.split("\n\n")[0]
  const description =
    firstPara.length > 120 ? firstPara.slice(0, 120) + "…" : firstPara
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://shaqai.reload.co.jp/translators/${id}/`,
      images: [{ url: `https://shaqai.reload.co.jp/translators/${id}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://shaqai.reload.co.jp/translators/${id}/opengraph-image`],
    },
    alternates: { canonical: `https://shaqai.reload.co.jp/translators/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const translator = getTranslator(Number(id))
  if (!translator) return notFound()

  const translatorWords = getWordsByTranslator(translator.id)

  // 統計データを計算
  const languages = [...new Set(translatorWords.map((w) => w.language))].filter(
    Boolean
  )
  const years = translatorWords.map((w) => w.year).filter(Boolean)
  const yearMin = years.length ? Math.min(...years) : null
  const yearMax = years.length ? Math.max(...years) : null

  // 分野別集計
  const fieldCounts = fields
    .map((f) => ({
      field: f,
      count: translatorWords.filter((w) => w.field_id === f.id).length,
    }))
    .filter((fc) => fc.count > 0)
    .sort((a, b) => b.count - a.count)

  const statStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".25rem",
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: translator.name,
    description: translator.description.split("\n\n")[0],
    url: `https://shaqai.reload.co.jp/translators/${id}/`,
    birthDate: String(translator.birth_year),
    deathDate: String(translator.death_year),
    ...(translator.image && {
      image: `https://shaqai.reload.co.jp${translator.image}`,
    }),
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "翻訳者一覧", url: "/translators/" },
          { name: translator.name, url: `/translators/${id}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Link href="/translators/" style={backLinkStyle}>
            ← 翻訳者一覧
          </Link>
        </div>

        <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "1rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            {translator.image && (
              <img
                src={translator.image}
                alt={translator.name}
                style={{
                  width: "110px",
                  height: "140px",
                  objectFit: "cover",
                  objectPosition: "top",
                  flexShrink: 0,
                  borderRadius: "2px",
                  border: "1px solid #302b1e",
                  filter: "grayscale(20%) sepia(20%)",
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "1rem" }}>
                <h1
                  style={{
                    fontSize: "2rem",
                    color: "#c8a96e",
                    marginBottom: ".25rem",
                  }}
                >
                  {translator.name}
                </h1>
                <p style={{ fontSize: ".875rem", color: "#807870" }}>
                  {translator.birth_year}–{translator.death_year}（
                  {translator.death_year - translator.birth_year}歳）
                </p>
              </div>
              <div>
                {translator.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: ".9rem",
                      color: "#bfb9ac",
                      lineHeight: "1.8",
                      marginBottom: ".75rem",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 統計バー */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid #302b1e",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div style={statStyle}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#c8a96e",
                }}
              >
                {translatorWords.length}
              </span>
              <span style={{ fontSize: ".75rem", color: "#807870" }}>
                訳語数
              </span>
            </div>
            {languages.length > 0 && (
              <div style={statStyle}>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#e2dcd0",
                  }}
                >
                  {[
                    ...new Set(languages.map((l) => l.split("・")).flat()),
                  ].join(" / ")}
                </span>
                <span style={{ fontSize: ".75rem", color: "#807870" }}>
                  翻訳元言語
                </span>
              </div>
            )}
            {yearMin && (
              <div style={statStyle}>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#e2dcd0",
                  }}
                >
                  {yearMin === yearMax
                    ? `${yearMin}年頃`
                    : `${yearMin}–${yearMax}年頃`}
                </span>
                <span style={{ fontSize: ".75rem", color: "#807870" }}>
                  訳語年代
                </span>
              </div>
            )}
          </div>
        </div>

        {fieldCounts.length > 0 && (
          <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontSize: ".75rem",
                color: "#807870",
                marginBottom: ".75rem",
                textTransform: "uppercase",
                letterSpacing: ".05em",
              }}
            >
              分野別訳語数
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              {fieldCounts.map(({ field, count }) => {
                const pct = Math.round((count / translatorWords.length) * 100)
                return (
                  <div key={field.id}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: ".2rem",
                      }}
                    >
                      <Link
                        href={`/fields/${field.id}/`}
                        style={{
                          fontSize: ".85rem",
                          color: "#7a9e82",
                          textDecoration: "none",
                        }}
                      >
                        {field.name}
                      </Link>
                      <span style={{ fontSize: ".8rem", color: "#807870" }}>
                        {count}語
                      </span>
                    </div>
                    <div
                      style={{
                        height: "4px",
                        background: "#302b1e",
                        borderRadius: "2px",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: "#c8a96e",
                          borderRadius: "1px",
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1rem", color: "#e2dcd0" }}>
            訳語一覧
            <span
              style={{
                fontSize: ".8rem",
                color: "#807870",
                marginLeft: ".5rem",
              }}
            >
              {translatorWords.length}語
            </span>
          </h3>
        </div>

        <div style={wordGridStyle}>
          {translatorWords.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              field={getField(word.field_id)}
              translator={translator}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
