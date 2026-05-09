import type { CSSProperties } from "react"

export const cardStyle: CSSProperties = {
  background: "#1e1a12",
  border: "1px solid #302b1e",
  borderRadius: "3px",
  padding: "1rem 1.5rem",
}

export const rowStyle: CSSProperties = {
  display: "flex",
  borderBottom: "1px solid #28241a",
  padding: ".75rem 0",
}

export const labelStyle: CSSProperties = {
  color: "#807870",
  fontSize: ".8rem",
  minWidth: "120px",
  paddingTop: ".1rem",
}

export const valueStyle: CSSProperties = {
  color: "#e2dcd0",
  fontSize: ".9rem",
  flex: 1,
  lineHeight: 1.7,
}

export const sectionHeadingStyle: CSSProperties = {
  fontSize: ".8rem",
  color: "#807870",
  marginBottom: ".75rem",
  textTransform: "uppercase",
  letterSpacing: ".05em",
}

export const wordGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1rem",
}

export const backLinkStyle: CSSProperties = {
  fontSize: ".8rem",
  color: "#807870",
  textDecoration: "none",
}
