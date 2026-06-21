import type { CSSProperties } from "react"

export const colors = {
  bg: "#1a1610",
  cardBg: "#1e1a12",
  relatedCardBg: "#18140e",
  border: "#302b1e",
  borderDark: "#28241a",
  borderLight: "#3d3828",
  accent: "#c8a96e",
  text: "#e2dcd0",
  muted: "#807870",
  mutedDark: "#5e5848",
  tagText: "#9e9888",
  green: "#7a9e82",
  sectionBorder: "#2a2518",
  subtleText: "#908a7a",
} as const

export const cardStyle: CSSProperties = {
  background: colors.cardBg,
  border: `1px solid ${colors.border}`,
  borderRadius: "3px",
  padding: "1rem 1.5rem",
}

export const rowStyle: CSSProperties = {
  display: "flex",
  borderBottom: `1px solid ${colors.borderDark}`,
  padding: ".75rem 0",
}

export const labelStyle: CSSProperties = {
  color: colors.muted,
  fontSize: ".8rem",
  minWidth: "120px",
  paddingTop: ".1rem",
}

export const valueStyle: CSSProperties = {
  color: colors.text,
  fontSize: ".9rem",
  flex: 1,
  lineHeight: 1.7,
}

export const sectionHeadingStyle: CSSProperties = {
  fontSize: ".8rem",
  color: colors.muted,
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
  color: colors.muted,
  textDecoration: "none",
}
