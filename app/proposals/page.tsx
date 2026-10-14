import { FC } from "react"
import { proposals, getKatakanaWord } from "lib/db"
import { CardLink } from "components/elements/card-link"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"
import { colors } from "lib/styles"

const description =
  "原語と意味がずれたカタカナ語の誤解をなくすため、日本語での意味を漢字で表す新しい翻訳語を提案するプロジェクト。"

export const metadata = {
  title: "新訳語プロジェクト",
  description,
  keywords: ["新訳語", "カタカナ語", "言い換え", "造語", "翻訳語", "外来語", "意味のずれ"],
  alternates: { canonical: "https://shaqai.reload.co.jp/proposals/" },
  openGraph: {
    title: "新訳語プロジェクト — 翻訳語辞典 Shaqai",
    description,
    url: "https://shaqai.reload.co.jp/proposals/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "新訳語プロジェクト",
    description,
    images: ["/opengraph-image"],
  },
}

const Page: FC = () => (
  <>
    <BreadcrumbJsonLd
      items={[
        { name: "ホーム", url: "/" },
        { name: "新訳語プロジェクト", url: "/proposals/" },
      ]}
    />
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: ".75rem", color: colors.accent }}>新訳語</p>
        <h1 style={{ fontSize: "1.5rem", color: colors.text, margin: ".5rem 0" }}>
          新訳語プロジェクト
        </h1>
        <p style={{ fontSize: ".875rem", color: colors.muted, lineHeight: 1.8 }}>
          明治の翻訳者たちは、未知の概念に漢字で新しい名前を与えた。
          いまカタカナのまま使われている語の多くは、原語と日本語で意味がずれ、誤解を生んでいる。
          このプロジェクトでは、カタカナ語が日本語で実際に指している意味を字義から読み取れる訳語を考え、提案する。
          ここに載る語はすべて定着した語ではなく、Shaqai による提案である。
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {proposals.map((proposal) => {
          const katakana = getKatakanaWord(proposal.katakana_id)
          return (
            <CardLink key={proposal.id} href={`/katakana/${proposal.katakana_id}/#proposals`}>
              <div style={{ display: "flex", alignItems: "baseline", gap: ".5rem", marginBottom: ".4rem" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: colors.accent }}>
                  {proposal.word}
                </span>
                <span style={{ fontSize: ".8rem", color: colors.muted }}>{proposal.reading}</span>
              </div>
              <div style={{ fontSize: ".9rem", color: colors.green, marginBottom: ".4rem" }}>
                {katakana?.katakana_word} / {katakana?.original_word}
              </div>
              <p style={{ color: colors.muted, fontSize: ".82rem", lineHeight: 1.7 }}>
                {proposal.formation}
              </p>
            </CardLink>
          )
        })}
      </div>
    </div>
  </>
)

export default Page
