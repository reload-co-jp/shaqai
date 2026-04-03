import { FC } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { fields, getField, getWordsByField, getTranslator } from "lib/db"
import { WordCard } from "components/elements/word-card"
import type { Metadata } from "next"

export const generateStaticParams = () =>
  fields.map((f) => ({ id: String(f.id) }))

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const field = getField(Number(id))
  if (!field) return {}
  const title = field.name
  const description = `${field.name}に関する翻訳語・訳語の一覧`
  return {
    title,
    description,
    openGraph: { title, description, url: `https://shaqai.reload.co.jp/fields/${id}/` },
    twitter: { title, description },
    alternates: { canonical: `https://shaqai.reload.co.jp/fields/${id}/` },
  }
}

const Page: FC<Props> = async ({ params }) => {
  const { id } = await params
  const field = getField(Number(id))
  if (!field) return notFound()

  const fieldWords = getWordsByField(field.id)

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/fields/" style={{ fontSize: ".8rem", color: "#888", textDecoration: "none" }}>
          ← 分野一覧
        </Link>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#c8a96e", marginBottom: ".5rem" }}>
          {field.name}
        </h2>
        <p style={{ fontSize: ".875rem", color: "#888" }}>{fieldWords.length}語</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
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
  )
}

export default Page
