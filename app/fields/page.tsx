import { FC } from "react"
import Link from "next/link"
import { fields, getWordsByField } from "lib/db"

export const metadata = {
  title: "分野一覧",
  description: "翻訳語が属する学問・思想の分野の一覧",
  alternates: { canonical: "https://shaqai.reload.co.jp/fields/" },
  openGraph: {
    title: "分野一覧 — 翻訳語辞典 Shaqai",
    description: "翻訳語が属する学問・思想の分野の一覧",
    url: "https://shaqai.reload.co.jp/fields/",
  },
}

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", color: "#e0e0e0", marginBottom: ".5rem" }}>
          分野一覧
        </h2>
        <p style={{ fontSize: ".875rem", color: "#888" }}>
          翻訳語が属する学問・思想の分野
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
        {fields.map((field) => {
          const fieldWords = getWordsByField(field.id)
          return (
            <Link
              key={field.id}
              href={`/fields/${field.id}/`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "#2a2a2a",
                  border: "1px solid #3a3a3a",
                  borderRadius: "8px",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "1.1rem", color: "#e0e0e0" }}>{field.name}</span>
                <span style={{ fontSize: ".875rem", color: "#888" }}>
                  {fieldWords.length}語
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
