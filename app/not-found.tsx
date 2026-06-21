import { Metadata } from "next"
import { NavLink } from "components/elements/nav-link"

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
      <NavLink href="/" active>
        トップへ戻る →
      </NavLink>
    </div>
  )
}

export default NotFound
