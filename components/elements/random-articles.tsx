"use client"

import { useState, useEffect } from "react"
import type { Article } from "lib/articles"

export const RandomArticles = ({
  articles,
  count = 3,
}: {
  articles: Article[]
  count?: number
}) => {
  const [picked, setPicked] = useState<Article[]>([])

  useEffect(() => {
    setPicked([...articles].sort(() => Math.random() - 0.5).slice(0, count))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (picked.length === 0) return null

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
      {picked.map((article) => (
        <a
          key={article.id}
          href={`/articles/${article.id}/`}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              border: "1px solid #2a2518",
              borderRadius: "4px",
              padding: "1rem 1.25rem",
              background: "#1a1610",
            }}
          >
            <p
              style={{
                fontSize: ".9375rem",
                color: "#c8a96e",
                marginBottom: ".375rem",
                lineHeight: 1.5,
                letterSpacing: ".02em",
              }}
            >
              {article.title}
            </p>
            <p
              style={{
                fontSize: ".8125rem",
                color: "#807870",
                lineHeight: 1.7,
              }}
            >
              {article.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
