import { FC } from "react"
import type { KatakanaWord } from "lib/db"
import { colors } from "lib/styles"
import { CardLink } from "./card-link"

type Props = {
  word: KatakanaWord
}

export const KatakanaCard: FC<Props> = ({ word }) => (
  <CardLink href={`/katakana/${word.id}/`}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: ".75rem",
        marginBottom: ".5rem",
      }}
    >
      <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: colors.accent }}>
        {word.katakana_word}
      </span>
      <span
        style={{
          fontSize: ".7rem",
          background: colors.border,
          color: colors.tagText,
          borderRadius: "2px",
          padding: ".2rem .5rem",
          whiteSpace: "nowrap",
        }}
      >
        {word.category}
      </span>
    </div>
    <div style={{ fontSize: ".9rem", color: colors.green, marginBottom: ".4rem" }}>
      {word.original_word}
    </div>
    <p style={{ color: colors.muted, fontSize: ".82rem", lineHeight: 1.7 }}>
      {word.japanese_meaning}
    </p>
  </CardLink>
)
