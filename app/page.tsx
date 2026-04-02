import { FC } from "react"
import { words, fields, getField, getTranslator } from "lib/db"
import { WordCard } from "components/elements/word-card"

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            color: "#e0e0e0",
            marginBottom: ".5rem",
          }}
        >
          単語一覧
        </h2>
        <p style={{ fontSize: ".875rem", color: "#888" }}>
          {words.length}語収録 — 外国語を意味翻訳して作られた日本語
        </p>
      </div>

      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          gap: ".5rem",
          flexWrap: "wrap",
        }}
      >
        {fields.map((field) => (
          <a
            key={field.id}
            href={`/fields/${field.id}/`}
            style={{
              fontSize: ".8rem",
              background: "#2a2a2a",
              border: "1px solid #3a3a3a",
              borderRadius: "20px",
              color: "#aaa",
              padding: ".3rem .8rem",
              textDecoration: "none",
            }}
          >
            {field.name}
          </a>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {words.map((word) => (
          <WordCard
            key={word.id}
            word={word}
            field={getField(word.field_id)}
            translator={
              word.translator_id ? getTranslator(word.translator_id) : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Page
