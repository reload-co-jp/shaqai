import Link from "next/link"
import "./reset.css"

export const metadata = {
  title: "Shaqai - 翻訳語辞典",
  description:
    "外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <header
          style={{
            backgroundColor: "#2d2d2d",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
            padding: ".75rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "1rem", fontWeight: "bold", color: "#c8a96e", whiteSpace: "nowrap" }}>
              翻訳語辞典
            </span>
            <span style={{ fontSize: ".75rem", color: "#888", marginLeft: ".5rem" }}>Shaqai</span>
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <Link href="/" style={{ fontSize: ".875rem", color: "#ccc", textDecoration: "none" }}>単語</Link>
            <Link href="/fields/" style={{ fontSize: ".875rem", color: "#ccc", textDecoration: "none" }}>分野</Link>
            <Link href="/translators/" style={{ fontSize: ".875rem", color: "#ccc", textDecoration: "none" }}>翻訳者</Link>
          </nav>
          <form action="/search/" method="get" style={{ display: "flex", gap: ".5rem" }}>
            <input
              name="q"
              type="search"
              placeholder="検索..."
              style={{
                background: "#1a1a1a",
                border: "1px solid #444",
                borderRadius: "6px",
                color: "#e0e0e0",
                fontSize: ".875rem",
                padding: ".4rem .75rem",
                width: "180px",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#444",
                border: "none",
                borderRadius: "6px",
                color: "#ccc",
                cursor: "pointer",
                fontSize: ".875rem",
                padding: ".4rem .75rem",
              }}
            >
              検索
            </button>
          </form>
        </header>
        <main
          style={{
            background: "#1a1a1a",
            minHeight: "calc(100dvh - 6rem)",
            padding: "1.5rem",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            backgroundColor: "#2d2d2d",
            boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.4)",
            fontSize: ".75rem",
            color: "#666",
            padding: "1rem 1.5rem",
          }}
        >
          <p>翻訳語辞典 Shaqai — 外国語から翻訳されて作られた日本語の辞典</p>
        </footer>
      </body>
    </html>
  )
}
export default RootLayout
