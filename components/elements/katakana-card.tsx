import { FC } from "react"
import Link from "next/link"
import type { KatakanaWord } from "lib/db"

type Props = {
  word: KatakanaWord
}

export const KatakanaCard: FC<Props> = ({ word }) => (
  <Link
    href={`/katakana/${word.id}/`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <article
      style={{
        background: "#1e1a12",
        border: "1px solid #302b1e",
        borderRadius: "3px",
        padding: "1rem 1.25rem",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: ".75rem",
          marginBottom: ".5rem",
        }}
      >
        <span
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c8a96e" }}
        >
          {word.katakana_word}
        </span>
        <span
          style={{
            fontSize: ".7rem",
            background: "#302b1e",
            color: "#9e9888",
            borderRadius: "2px",
            padding: ".2rem .5rem",
            whiteSpace: "nowrap",
          }}
        >
          {word.category}
        </span>
      </div>
      <div
        style={{ fontSize: ".9rem", color: "#7a9e82", marginBottom: ".4rem" }}
      >
        {word.original_word}
      </div>
      <p style={{ color: "#807870", fontSize: ".82rem", lineHeight: 1.7 }}>
        {word.japanese_meaning}
      </p>
    </article>
  </Link>
)
