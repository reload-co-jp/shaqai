"use client"

import { Suspense, FC } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  getField,
  getTranslator,
  searchWords,
  searchKatakanaWords,
} from "lib/db"
import { WordCard } from "components/elements/word-card"
import { KatakanaCard } from "components/elements/katakana-card"
import { wordGridStyle } from "lib/styles"

const SearchResults: FC = () => {
  const params = useSearchParams()
  const q = params.get("q") || ""

  const results = q ? searchWords(q) : []
  const katakanaResults = q ? searchKatakanaWords(q) : []

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.25rem", color: "#e2dcd0", marginBottom: ".5rem" }}>
          {q ? `「${q}」の検索結果` : "検索"}
        </h1>
        {q && (
          <p style={{ fontSize: ".875rem", color: "#807870" }}>
            {results.length}件
            {katakanaResults.length > 0 && ` / カタカナ語 ${katakanaResults.length}件`}
          </p>
        )}
      </div>

      <form action="/search/" method="get" style={{ marginBottom: "1.5rem", display: "flex", gap: ".5rem" }}>
        <input
          name="q"
          type="search"
          defaultValue={q}
          placeholder="日本語・原語・説明で検索..."
          style={{
            background: "#1e1a12",
            border: "1px solid #444",
            borderRadius: "2px",
            color: "#e2dcd0",
            fontSize: ".9rem",
            padding: ".6rem 1rem",
            flex: 1,
            maxWidth: "480px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#3d3828",
            border: "none",
            borderRadius: "2px",
            color: "#bfb9ac",
            cursor: "pointer",
            fontSize: ".875rem",
            padding: ".6rem 1rem",
          }}
        >
          検索
        </button>
      </form>

      {q && results.length === 0 && katakanaResults.length === 0 && (
        <div style={{ color: "#807870", fontSize: ".9rem" }}>
          「{q}」に一致する単語が見つかりませんでした。
        </div>
      )}

      {results.length > 0 && (
        <>
          <h2 style={{ fontSize: "1rem", color: "#e2dcd0", marginBottom: ".75rem" }}>
            翻訳語
          </h2>
          <div style={{ ...wordGridStyle, marginBottom: "1.5rem" }}>
            {results.map((word) => (
              <WordCard
                key={word.id}
                word={word}
                field={getField(word.field_id)}
                translator={word.translator_id ? getTranslator(word.translator_id) : undefined}
              />
            ))}
          </div>
        </>
      )}

      {katakanaResults.length > 0 && (
        <>
          <h2 style={{ fontSize: "1rem", color: "#e2dcd0", marginBottom: ".75rem" }}>
            カタカナ語
          </h2>
          <div style={wordGridStyle}>
            {katakanaResults.map((word) => (
              <KatakanaCard key={word.id} word={word} />
            ))}
          </div>
        </>
      )}

      {!q && (
        <div style={{ color: "#807870", fontSize: ".9rem" }}>
          キーワードを入力して検索してください。
          <div style={{ marginTop: "1rem" }}>
            <Link href="/" style={{ color: "#7a9e82", textDecoration: "none" }}>
              → 単語一覧を見る
            </Link>
            <br />
            <Link href="/katakana/" style={{ color: "#7a9e82", textDecoration: "none" }}>
              → カタカナ語一覧を見る
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <Suspense fallback={<div style={{ color: "#807870" }}>読み込み中...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}

export default Page
