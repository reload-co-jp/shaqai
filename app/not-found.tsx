import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 — ページが見つかりません",
  robots: { index: false, follow: false },
}

const NotFound = () => {
  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "4rem auto",
        padding: "0 1rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
          color: "#3d3828",
          letterSpacing: ".1em",
          marginBottom: "1.5rem",
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "1.25rem",
          color: "#e2dcd0",
          marginBottom: "1rem",
        }}
      >
        ページが見つかりません
      </h1>
      <p
        style={{
          fontSize: ".875rem",
          color: "#807870",
          marginBottom: "2.5rem",
          lineHeight: 1.8,
        }}
      >
        お探しのページは移動または削除された可能性があります。
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          fontSize: ".875rem",
          color: "#c8a96e",
          border: "1px solid #c8a96e44",
          borderRadius: "2px",
          padding: ".5rem 1.5rem",
          textDecoration: "none",
          letterSpacing: ".03em",
        }}
      >
        トップへ戻る →
      </Link>
    </div>
  )
}

export default NotFound
