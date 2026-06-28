import { FC } from "react"
import Link from "next/link"
import { fields, getWordsByField } from "lib/db"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "分野一覧",
  description:
    "哲学・政治・経済・科学など、翻訳語が属する学問・思想の分野を一覧。各分野の翻訳語・訳語・和製漢語を検索・閲覧できる。",
  keywords: ["翻訳語", "訳語", "和製漢語", "分野", "哲学", "政治", "経済", "科学", "語源", "日本語"],
  alternates: { canonical: "https://shaqai.reload.co.jp/fields/" },
  openGraph: {
    title: "分野一覧 — 翻訳語辞典 Shaqai",
    description:
      "哲学・政治・経済・科学など、翻訳語が属する学問・思想の分野を一覧。各分野の翻訳語・訳語・和製漢語を検索・閲覧できる。",
    url: "https://shaqai.reload.co.jp/fields/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "分野一覧 — 翻訳語辞典 Shaqai",
    description:
      "哲学・政治・経済・科学など、翻訳語が属する学問・思想の分野を一覧。",
    images: ["/opengraph-image"],
  },
}

const Page: FC = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "分野一覧",
    description: "翻訳語が属する学問・思想の分野の一覧",
    numberOfItems: fields.length,
    itemListElement: fields.map((field, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://shaqai.reload.co.jp/fields/${field.id}/`,
      name: field.name,
      ...(field.description && { description: field.description }),
    })),
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "分野一覧", url: "/fields/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.25rem", color: "#e2dcd0", marginBottom: ".5rem" }}>
          分野一覧
        </h1>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>
          翻訳語が属する学問・思想の分野
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
        {fields.map((field) => {
          const fieldWords = getWordsByField(field.id)
          return (
            <Link
              key={field.id}
              href={`/fields/${field.id}/`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "#1e1a12",
                  border: "1px solid #302b1e",
                  borderRadius: "3px",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "1.1rem", color: "#e2dcd0" }}>{field.name}</span>
                <span style={{ fontSize: ".875rem", color: "#807870" }}>
                  {fieldWords.length}語
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Page
