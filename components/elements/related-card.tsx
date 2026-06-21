import { FC, ReactNode } from "react"
import Link from "next/link"
import { colors } from "lib/styles"

type Props = {
  href: string
  title: string
  subtitle?: string
  meta?: ReactNode
}

export const RelatedCard: FC<Props> = ({ href, title, subtitle, meta }) => (
  <Link
    href={href}
    style={{
      background: colors.relatedCardBg,
      border: `1px solid ${colors.borderDark}`,
      borderRadius: "3px",
      padding: ".85rem 1rem",
      textDecoration: "none",
      color: "inherit",
      display: "block",
    }}
  >
    <div style={{ fontSize: "1rem", color: colors.accent, fontWeight: "bold", marginBottom: ".25rem" }}>
      {title}
    </div>
    {subtitle && (
      <div style={{ fontSize: ".82rem", color: colors.green, marginBottom: ".35rem" }}>
        {subtitle}
      </div>
    )}
    {meta && <div style={{ fontSize: ".75rem", color: colors.muted }}>{meta}</div>}
  </Link>
)
