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
        background: "#1e1a12",
        border: "1px solid #302b1e",
        borderRadius: "3px",
        padding: "1rem 1.25rem",
        cursor: "pointer",
        transition: "border-color 0.2s",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: ".5rem",
        }}
      >
        <span
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#c8a96e" }}
        >
          {word.japanese_word}
        </span>
        {field && (
          <span
            style={{
              fontSize: ".7rem",
              background: "#302b1e",
              color: "#9e9888",
              borderRadius: "2px",
              padding: ".2rem .5rem",
            }}
          >
            {field.name}
          </span>
        )}
      </div>
      <div
        style={{ fontSize: ".9rem", color: "#7a9e82", marginBottom: ".4rem" }}
      >
        {word.original_word}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: ".75rem",
          gap: ".5rem",
          color: "#807870",
          marginBottom: word.etymology ? ".5rem" : 0,
        }}
      >
        <span style={{}}>{word.language}</span>
        <span>{word.era}</span>
        {translator && <span>{translator.name}</span>}
      </div>
      {word.etymology && (
        <div
          style={{
            fontSize: ".75rem",
            color: "#5e5848",
            lineHeight: 1.6,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {word.etymology}
        </div>
      )}
    </article>
  </Link>
)
