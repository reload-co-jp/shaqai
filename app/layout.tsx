import Link from "next/link"
import { BIZ_UDPMincho } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./reset.css"

const bizUDPMincho = BIZ_UDPMincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mincho",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://shaqai.reload.co.jp"),
  title: {
    default: "翻訳語辞典 Shaqai",
    template: "%s — 翻訳語辞典 Shaqai",
  },
  description:
    "外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション",
  keywords: [
    "翻訳語",
    "訳語",
    "和製漢語",
    "日本語",
    "辞典",
    "辞書",
    "翻訳",
    "語源",
    "Shaqai",
  ],
  openGraph: {
    siteName: "翻訳語辞典 Shaqai",
    locale: "ja_JP",
    type: "website",
    url: "https://shaqai.reload.co.jp",
    title: "翻訳語辞典 Shaqai",
    description:
      "外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション",
  },
  twitter: {
    card: "summary",
    title: "翻訳語辞典 Shaqai",
    description:
      "外国語から翻訳されて作られた日本語（和製漢語・訳語）を収集・検索・閲覧できるWebアプリケーション",
  },
  alternates: {
    canonical: "https://shaqai.reload.co.jp",
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={bizUDPMincho.variable}>
      <body>
        <header
          style={{
            backgroundColor: "#1c1810",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
            padding: ".75rem 1.5rem",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#c8a96e",
                whiteSpace: "nowrap",
              }}
            >
              翻訳語辞典
            </span>
            <span
              style={{
                fontSize: ".75rem",
                color: "#807870",
                marginLeft: ".5rem",
              }}
            >
              Shaqai
            </span>
          </Link>
          <nav
            style={{
              display: "flex",
              alignItems: "left",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <Link
              href="/fields/"
              style={{
                fontSize: ".875rem",
                color: "#bfb9ac",
                textDecoration: "none",
              }}
            >
              分野
            </Link>
            <Link
              href="/translators/"
              style={{
                fontSize: ".875rem",
                color: "#bfb9ac",
                textDecoration: "none",
              }}
            >
              翻訳者
            </Link>
            <Link
              href="/articles/"
              style={{
                fontSize: ".875rem",
                color: "#bfb9ac",
                textDecoration: "none",
              }}
            >
              読み物
            </Link>
            <Link
              href="/about/"
              style={{
                fontSize: ".875rem",
                color: "#bfb9ac",
                textDecoration: "none",
              }}
            >
              このサイトについて
            </Link>
          </nav>
          <form
            action="/search/"
            method="get"
            style={{ display: "flex", gap: ".5rem" }}
          >
            <input
              name="q"
              type="search"
              placeholder="検索..."
              style={{
                background: "#130f09",
                border: "1px solid #3d3828",
                borderRadius: "2px",
                color: "#e2dcd0",
                fontSize: ".875rem",
                padding: ".4rem .75rem",
                width: "180px",
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
                padding: ".4rem .75rem",
              }}
            >
              検索
            </button>
          </form>
        </header>
        <main
          style={{
            background: "#130f09",
            minHeight: "calc(100dvh - 6rem)",
            padding: "1rem",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            backgroundColor: "#1c1810",
            boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.4)",
            fontSize: ".75rem",
            color: "#5e5848",
            padding: "1rem 1.5rem",
          }}
        >
          <p>翻訳語辞典 Shaqai — 外国語から翻訳されて作られた日本語の辞典</p>
          <p>
            <a href="//reload.co.jp" style={{ color: "#666" }}>
              Reload, Inc.
            </a>
          </p>
        </footer>
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-603EH0NXTT" />
        )}
      </body>
    </html>
  )
}
export default RootLayout
