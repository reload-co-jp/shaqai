import { FC } from "react"
import { words, fields, getField, getTranslator } from "lib/db"
import { WordCard } from "components/elements/word-card"

const HERO_WORDS = ["社会", "経済", "哲学", "自由", "権利", "文化", "科学"]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "翻訳語辞典 Shaqai",
  url: "https://shaqai.reload.co.jp",
  description:
    "外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション",
  publisher: {
    "@type": "Organization",
    name: "Reload, Inc.",
    url: "https://reload.co.jp",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://shaqai.reload.co.jp/search/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const Page: FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      {/* Hero */}
      <div
        style={{
          marginBottom: "3rem",
          padding: "3rem 0 2.5rem",
          borderBottom: "1px solid #1e1a12",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {HERO_WORDS.map((w) => (
            <span
              key={w}
              style={{
                fontSize: "1.1rem",
                color: "#c8a96e",
                opacity: 0.45,
                fontWeight: "bold",
                letterSpacing: ".05em",
              }}
            >
              {w}
            </span>
          ))}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <div style={{ marginBottom: ".5rem" }}>
            <span
              style={{
                fontSize: "clamp(2rem, 6vw, 3.25rem)",
                fontWeight: "bold",
                color: "#c8a96e",
                letterSpacing: ".05em",
              }}
            >
              Sha
            </span>
            <span
              style={{
                fontSize: "clamp(2rem, 6vw, 3.25rem)",
                fontWeight: "bold",
                color: "#7a9e82",
                letterSpacing: ".05em",
              }}
            >
              Q
            </span>
            <span
              style={{
                fontSize: "clamp(2rem, 6vw, 3.25rem)",
                fontWeight: "bold",
                color: "#c8a96e",
                letterSpacing: ".05em",
              }}
            >
              ai
            </span>
            <span
              style={{
                fontSize: ".875rem",
                color: "#5e5848",
                marginLeft: ".75rem",
                letterSpacing: ".05em",
              }}
            >
              翻訳語辞典
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
            fontWeight: "bold",
            color: "#e6e0d4",
            lineHeight: 1.4,
            marginBottom: "1rem",
            letterSpacing: ".02em",
          }}
        >
          言葉を翻訳した人々の、
          <br />
          痕跡を辿る。
        </h1>

        <p
          style={{
            fontSize: "clamp(.875rem, 2vw, 1rem)",
            color: "#908a7a",
            lineHeight: 1.9,
            maxWidth: "560px",
            marginBottom: "1.75rem",
          }}
        >
          明治の翻訳家たちは西洋の概念を音で借りるのではなく、意味を理解して漢字に翻訳した。
          「社会」「経済」「哲学」——それらの言葉が生まれた背景を、ここで探ることができます。
        </p>

        <a
          href="/about/"
          style={{
            display: "inline-block",
            fontSize: ".875rem",
            color: "#c8a96e",
            border: "1px solid #c8a96e44",
            borderRadius: "2px",
            padding: ".5rem 1.25rem",
            textDecoration: "none",
            letterSpacing: ".03em",
          }}
        >
          このサイトについて →
        </a>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            color: "#e2dcd0",
            marginBottom: ".5rem",
          }}
        >
          単語一覧
        </h2>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>
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
              background: "#1e1a12",
              border: "1px solid #302b1e",
              borderRadius: "4px",
              color: "#9e9888",
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
    </>
  )
}

export default Page
