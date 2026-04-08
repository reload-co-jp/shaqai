import { FC } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { words, getWord, getField, getTranslator } from "lib/db"
import type { Metadata } from "next"

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
    },
    twitter: { title, description },
    alternates: { canonical: `https://shaqai.reload.co.jp/words/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const word = getWord(Number(id))
  if (!word) return notFound()

  const field = getField(word.field_id)
  const translator = word.translator_id ? getTranslator(word.translator_id) : null

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
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href="/" style={{ fontSize: ".8rem", color: "#807870", textDecoration: "none" }}>
          ← 一覧に戻る
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
              <Link
                href={`/fields/${field.id}/`}
                style={{ color: "#7a9e82", textDecoration: "none" }}
              >
                {field.name}
              </Link>
            ) : "—"}
          </span>
        </div>
        <div style={{ ...rowStyle, borderBottom: "none" }}>
          <span style={labelStyle}>翻訳者</span>
          <span style={valueStyle}>
            {translator ? (
              <Link
                href={`/translators/${translator.id}/`}
                style={{ color: "#7a9e82", textDecoration: "none" }}
              >
                {translator.name}
              </Link>
            ) : "—"}
          </span>
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
          由来・語源
        </h2>
        <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: "1.7" }}>
          {word.etymology}
        </p>
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
          説明
        </h2>
        <p style={{ color: "#e2dcd0", fontSize: ".95rem", lineHeight: "1.7" }}>
          {word.description}
        </p>
      </div>
    </div>
  )
}

export default Page
