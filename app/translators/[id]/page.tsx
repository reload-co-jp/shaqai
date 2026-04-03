import { FC } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { translators, getTranslator, getWordsByTranslator, getField } from "lib/db"
import { WordCard } from "components/elements/word-card"
import type { Metadata } from "next"

export const generateStaticParams = () =>
  translators.map((t) => ({ id: String(t.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const translator = getTranslator(Number(id))
  if (!translator) return {}
  const title = translator.name
  const description = translator.description.length > 120 ? translator.description.slice(0, 120) + "…" : translator.description
  return {
    title,
    description,
    openGraph: { title, description, url: `https://shaqai.reload.co.jp/translators/${id}/` },
    twitter: { title, description },
    alternates: { canonical: `https://shaqai.reload.co.jp/translators/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const translator = getTranslator(Number(id))
  if (!translator) return notFound()

  const translatorWords = getWordsByTranslator(translator.id)

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/translators/" style={{ fontSize: ".8rem", color: "#888", textDecoration: "none" }}>
          ← 翻訳者一覧
        </Link>
      </div>

      <div
        style={{
          background: "#2a2a2a",
          border: "1px solid #3a3a3a",
          borderRadius: "8px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "1.75rem", color: "#c8a96e", marginBottom: ".25rem" }}>
          {translator.name}
        </h2>
        <p style={{ fontSize: ".875rem", color: "#888", marginBottom: "1rem" }}>
          {translator.birth_year}–{translator.death_year}
        </p>
        <p style={{ fontSize: ".9rem", color: "#ccc", lineHeight: "1.7" }}>
          {translator.description}
        </p>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "1rem", color: "#e0e0e0" }}>
          訳語一覧
          <span style={{ fontSize: ".8rem", color: "#888", marginLeft: ".5rem" }}>
            {translatorWords.length}語
          </span>
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
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
  )
}

export default Page
