import { FC } from "react"
import { Word, Field, Translator } from "lib/db"
import { colors } from "lib/styles"
import { CardLink } from "./card-link"

type Props = {
  word: Word
  field?: Field
  translator?: Translator
}

export const WordCard: FC<Props> = ({ word, field, translator }) => (
  <CardLink href={`/words/${word.id}/`}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: ".5rem",
      }}
    >
      <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: colors.accent }}>
        {word.japanese_word}
      </span>
      {field && (
        <span
          style={{
            fontSize: ".7rem",
            background: colors.border,
            color: colors.tagText,
            borderRadius: "2px",
            padding: ".2rem .5rem",
          }}
        >
          {field.name}
        </span>
      )}
    </div>
    <div style={{ fontSize: ".9rem", color: colors.green, marginBottom: ".4rem" }}>
      {word.original_word}
    </div>
    <div
      style={{
        display: "flex",
        fontSize: ".75rem",
        gap: ".5rem",
        color: colors.muted,
        marginBottom: word.etymology ? ".5rem" : 0,
      }}
    >
      <span>{word.language}</span>
      <span>{word.era}</span>
      {translator && <span>{translator.name}</span>}
    </div>
    {word.etymology && (
      <div
        style={{
          fontSize: ".75rem",
          color: colors.mutedDark,
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
  </CardLink>
)
