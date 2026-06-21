import { FC, ReactNode } from "react"
import Link from "next/link"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { backLinkStyle, colors } from "lib/styles"

type Props = {
  backHref: string
  backLabel: string
  title: string
  subtitle: string
  breadcrumbItems: { name: string; url: string }[]
  jsonLd: object
  children: ReactNode
}

export const DetailPageLayout: FC<Props> = ({
  backHref,
  backLabel,
  title,
  subtitle,
  breadcrumbItems,
  jsonLd,
  children,
}) => (
  <>
    <BreadcrumbJsonLd items={breadcrumbItems} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href={backHref} style={backLinkStyle}>
          ← {backLabel}
        </Link>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", color: colors.accent, marginBottom: ".5rem" }}>
          {title}
        </h1>
        <div style={{ fontSize: "1.1rem", color: colors.green }}>{subtitle}</div>
      </div>

      {children}
    </div>
  </>
)
