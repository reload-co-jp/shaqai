import { FC } from "react"
import Link from "next/link"
import { translators, getWordsByTranslator } from "lib/db"

export const metadata = {
  title: "翻訳者一覧",
  description: "明治期に訳語を作った人物たちの一覧",
  alternates: { canonical: "https://shaqai.reload.co.jp/translators/" },
  openGraph: {
    title: "翻訳者一覧 — 翻訳語辞典 Shaqai",
    description: "明治期に訳語を作った人物たちの一覧",
    url: "https://shaqai.reload.co.jp/translators/",
  },
}

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", color: "#e2dcd0", marginBottom: ".5rem" }}>
          翻訳者一覧
        </h2>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>
          明治期に訳語を作った人物たち
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
        {translators.map((translator) => {
          const translatorWords = getWordsByTranslator(translator.id)
          return (
            <Link
              key={translator.id}
              href={`/translators/${translator.id}/`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "#1e1a12",
                  border: "1px solid #302b1e",
                  borderRadius: "3px",
                  padding: "1rem 1.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".5rem" }}>
                  <span style={{ fontSize: "1.1rem", color: "#e2dcd0" }}>
                    {translator.name}
                  </span>
                  <span style={{ fontSize: ".8rem", color: "#807870" }}>
                    {translator.birth_year}–{translator.death_year}
                  </span>
                </div>
                <p style={{ fontSize: ".8rem", color: "#908a7a", lineHeight: "1.6", marginBottom: ".5rem" }}>
                  {translator.description.split("\n\n")[0]}
                </p>
                <span style={{ fontSize: ".75rem", color: "#7a9e82" }}>
                  {translatorWords.length}語の訳語
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Page
