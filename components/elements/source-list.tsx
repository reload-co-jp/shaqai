import { FC } from "react"
import type { Source } from "lib/db"

type Props = {
  sources: Source[]
}

export const SourceList: FC<Props> = ({ sources }) => {
  if (!sources.length) {
    return (
      <p style={{ color: "#807870", fontSize: ".9rem", lineHeight: 1.7 }}>
        出典情報はまだ登録されていません。
      </p>
    )
  }
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".65rem",
        paddingLeft: "1.25rem",
        color: "#e2dcd0",
        fontSize: ".9rem",
        lineHeight: 1.7,
      }}
    >
      {sources.map((source) => (
        <li key={`${source.title}-${source.url ?? ""}`}>
          {source.author && <span>{source.author} </span>}
          {source.url ? (
            <a href={source.url} style={{ color: "#7a9e82", textDecoration: "none" }}>
              『{source.title}』
            </a>
          ) : (
            <span>『{source.title}』</span>
          )}
          {source.note && (
            <span style={{ color: "#807870", fontSize: ".82rem", marginLeft: ".5rem" }}>
              {source.note}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
