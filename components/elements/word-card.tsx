import { FC } from "react"
import Link from "next/link"
import { Word, Field, Translator } from "lib/db"

type Props = {
  word: Word
  field?: Field
  translator?: Translator
}

export const WordCard: FC<Props> = ({ word, field, translator }) => (
  <Link
    href={`/words/${word.id}/`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <article
      style={{
        background: "#2a2a2a",
        border: "1px solid #3a3a3a",
        borderRadius: "8px",
        padding: "1rem 1.25rem",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".5rem" }}>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c8a96e" }}>
          {word.japanese_word}
        </span>
        {field && (
          <span
            style={{
              fontSize: ".7rem",
              background: "#3a3a3a",
              color: "#aaa",
              borderRadius: "4px",
              padding: ".2rem .5rem",
            }}
          >
            {field.name}
          </span>
        )}
      </div>
      <div style={{ fontSize: ".9rem", color: "#7eb8c9", marginBottom: ".4rem" }}>
        {word.original_word}
        <span style={{ color: "#666", marginLeft: ".5rem", fontSize: ".8rem" }}>
          {word.language}
        </span>
      </div>
      <div style={{ fontSize: ".75rem", color: "#888" }}>
        {word.era}
        {translator && (
          <span style={{ marginLeft: ".75rem" }}>{translator.name}</span>
        )}
      </div>
    </article>
  </Link>
)
