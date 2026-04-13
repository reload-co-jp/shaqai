import { FC } from "react"

type BreadcrumbItem = {
  name: string
  url: string
}

type Props = {
  items: BreadcrumbItem[]
}

export const BreadcrumbJsonLd: FC<Props> = ({ items }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://shaqai.reload.co.jp${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
