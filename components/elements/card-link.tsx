import { FC, ReactNode } from "react"
import Link from "next/link"
import { colors } from "lib/styles"

type Props = {
  href: string
  children: ReactNode
}

export const CardLink: FC<Props> = ({ href, children }) => (
  <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
    <article
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: "3px",
        padding: "1rem 1.25rem",
        cursor: "pointer",
        transition: "border-color 0.2s",
        height: "100%",
      }}
    >
      {children}
    </article>
  </Link>
)
