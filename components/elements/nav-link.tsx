import { FC, ReactNode } from "react"
import Link from "next/link"
import { colors } from "lib/styles"

type Props = {
  href: string
  active?: boolean
  children: ReactNode
}

export const NavLink: FC<Props> = ({ href, active, children }) => (
  <Link
    href={href}
    style={{
      display: "inline-block",
      fontSize: ".875rem",
      color: active ? colors.accent : colors.tagText,
      border: `1px solid ${active ? `${colors.accent}44` : colors.borderLight}`,
      borderRadius: "2px",
      padding: ".5rem 1.25rem",
      textDecoration: "none",
      letterSpacing: ".03em",
    }}
  >
    {children}
  </Link>
)

export const FooterLinks: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: ".75rem",
      flexWrap: "wrap",
      marginTop: "2rem",
      paddingTop: "1.5rem",
      borderTop: `1px solid ${colors.borderDark}`,
    }}
  >
    {children}
  </div>
)
