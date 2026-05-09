import { FC } from "react"
import { words, fields, katakanaWords, getField, getTranslator } from "lib/db"
import { articles } from "lib/articles"
import { WordCard } from "components/elements/word-card"
import { RandomArticles } from "components/elements/random-articles"
import { KatakanaCard } from "components/elements/katakana-card"
import { FieldTags } from "components/elements/field-tags"
import { wordGridStyle } from "lib/styles"

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
      urlTemplate: "https://shaqai.reload.co.jp/search/?q={search_term_string}",
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
      {/* Hero */}
      <div
        style={{
          marginBottom: "3rem",
          marginTop: "-1rem",
          marginLeft: "-1rem",
          marginRight: "-1rem",
          padding: "3rem 1.5rem 2.5rem",
          borderBottom: "1px solid #1e1a12",
          backgroundImage: `url("/images/bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
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

          <p
            style={{
              fontSize: ".8125rem",
              color: "#6f695b",
              letterSpacing: ".03em",
              marginBottom: "1.25rem",
            }}
          >
            掲載語数
            <span style={{ color: "#c8a96e", marginLeft: ".5rem" }}>
              翻訳語 {words.length}語
            </span>
            <span style={{ color: "#7a9e82", marginLeft: ".75rem" }}>
              カタカナ語 {katakanaWords.length}語
            </span>
          </p>

          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            <a
              href="/whats/"
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
              翻訳語とは →
            </a>
            <a
              href="/about/"
              style={{
                display: "inline-block",
                fontSize: ".875rem",
                color: "#9e9888",
                border: "1px solid #3d3828",
                borderRadius: "2px",
                padding: ".5rem 1.25rem",
                textDecoration: "none",
                letterSpacing: ".03em",
              }}
            >
              このサイトについて →
            </a>
            <a
              href="/katakana/"
              style={{
                display: "inline-block",
                fontSize: ".875rem",
                color: "#9e9888",
                border: "1px solid #3d3828",
                borderRadius: "2px",
                padding: ".5rem 1.25rem",
                textDecoration: "none",
                letterSpacing: ".03em",
              }}
            >
              カタカナ語 →
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.25rem",
                  color: "#e2dcd0",
                  marginBottom: ".25rem",
                }}
              >
                読み物
              </h2>
              <p style={{ fontSize: ".875rem", color: "#807870" }}>
                翻訳語の歴史と成り立ちを読む
              </p>
            </div>
            <a
              href="/articles/"
              style={{
                fontSize: ".8125rem",
                color: "#c8a96e",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              すべて見る →
            </a>
          </div>
          <RandomArticles articles={articles} count={3} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                color: "#e2dcd0",
                marginBottom: ".5rem",
              }}
            >
              翻訳語
            </h2>
            <p style={{ fontSize: ".875rem", color: "#807870" }}>
              {words.length}語収録 — 外国語を意味翻訳して作られた日本語
            </p>
          </div>
          <a
            href="/words/"
            style={{
              fontSize: ".8125rem",
              color: "#c8a96e",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            すべて見る →
          </a>
        </div>

        <FieldTags fields={fields} />

        <div style={wordGridStyle}>
          {words.slice(0, 30).map((word) => (
            <WordCard
              key={word.id}
              word={word}
              field={getField(word.field_id)}
              translator={
                word.translator_id
                  ? getTranslator(word.translator_id)
                  : undefined
              }
            />
          ))}
        </div>

        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.25rem",
                  color: "#e2dcd0",
                  marginBottom: ".25rem",
                }}
              >
                カタカナ語
              </h2>
              <p style={{ fontSize: ".875rem", color: "#807870" }}>
                原語の音を借り、日本語の中で意味がずれた語
              </p>
            </div>
            <a
              href="/katakana/"
              style={{
                fontSize: ".8125rem",
                color: "#c8a96e",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              すべて見る →
            </a>
          </div>
          <div style={wordGridStyle}>
            {katakanaWords.slice(0, 3).map((word) => (
              <KatakanaCard key={word.id} word={word} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
