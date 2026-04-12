import { FC } from "react"
import Link from "next/link"

export const metadata = {
  title: "翻訳語とは",
  description: "翻訳語（訳語・和製漢語）とは何か。カタカナ語との違い、明治期の翻訳の営みと歴史的背景を解説します。",
  alternates: { canonical: "https://shaqai.reload.co.jp/whats/" },
  openGraph: {
    title: "翻訳語とは — 翻訳語辞典 Shaqai",
    description: "翻訳語（訳語・和製漢語）とは何か。カタカナ語との違い、明治期の翻訳の営みと歴史的背景を解説します。",
    url: "https://shaqai.reload.co.jp/whats/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const Section: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section
    style={{
      background: "#1e1a12",
      border: "1px solid #302b1e",
      borderRadius: "3px",
      padding: "1.25rem 1.5rem",
      marginBottom: "1.5rem",
    }}
  >
    <h2
      style={{
        fontSize: ".8rem",
        color: "#807870",
        marginBottom: "1rem",
        textTransform: "uppercase",
        letterSpacing: ".05em",
      }}
    >
      {title}
    </h2>
    {children}
  </section>
)

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.25rem", color: "#e2dcd0", marginBottom: ".5rem" }}>
          翻訳語とは
        </h1>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>What is a Translation Word?</p>
      </div>

      <div
        style={{
          fontSize: ".9375rem",
          color: "#bfb9ac",
          lineHeight: "1.9",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        <Section title="定義">
          <p style={{ marginBottom: "1rem" }}>
            <strong style={{ color: "#e2dcd0" }}>翻訳語</strong>（ほんやくご）とは、外国語の概念や語を音ではなく<em style={{ color: "#c8a96e", fontStyle: "normal" }}>意味</em>によって翻訳し、既存の漢字・漢語を組み合わせて作られた日本語の語のことです。「訳語」「和製漢語」とも呼ばれます。
          </p>
          <p>
            例えば "society" を「ソサエティ」と音で借りるのではなく、「社会」という漢字語に意味を込めて翻訳したものが翻訳語です。
          </p>
        </Section>

        <Section title="カタカナ語との違い">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                background: "#130f09",
                border: "1px solid #28241a",
                borderRadius: "2px",
                padding: "1rem",
              }}
            >
              <div style={{ fontSize: ".75rem", color: "#807870", marginBottom: ".5rem", letterSpacing: ".05em" }}>
                翻訳語（訳語）
              </div>
              <div style={{ fontSize: "1.5rem", color: "#c8a96e", marginBottom: ".25rem" }}>社会</div>
              <div style={{ fontSize: ".85rem", color: "#7a9e82" }}>← society</div>
              <div style={{ fontSize: ".8rem", color: "#5e5848", marginTop: ".5rem", lineHeight: "1.6" }}>
                意味を理解したうえで漢字に翻訳。概念が言語に溶け込む。
              </div>
            </div>
            <div
              style={{
                background: "#130f09",
                border: "1px solid #28241a",
                borderRadius: "2px",
                padding: "1rem",
              }}
            >
              <div style={{ fontSize: ".75rem", color: "#807870", marginBottom: ".5rem", letterSpacing: ".05em" }}>
                カタカナ語（音借用）
              </div>
              <div style={{ fontSize: "1.5rem", color: "#9e9888", marginBottom: ".25rem" }}>ソサエティ</div>
              <div style={{ fontSize: ".85rem", color: "#7a9e82" }}>← society</div>
              <div style={{ fontSize: ".8rem", color: "#5e5848", marginTop: ".5rem", lineHeight: "1.6" }}>
                音をそのまま借用。意味は元の言語を知らなければ伝わりにくい。
              </div>
            </div>
          </div>
          <p>
            カタカナ語は音を借りているため、日本語として定着しても本来の意味が共有されにくいことがあります。一方、翻訳語は漢字が意味の手がかりを与えるため、語の内側に概念が宿ります。
          </p>
        </Section>

        <Section title="代表的な例">
          <p style={{ marginBottom: "1rem" }}>
            明治期に生まれた翻訳語の多くは、今日の日本語の基盤となっています。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            {[
              { ja: "哲学", en: "philosophy", note: "西周による訳語。「希哲学」を略したもの。" },
              { ja: "自由", en: "freedom / liberty", note: "福沢諭吉らが定着させた。もともとは仏教語。" },
              { ja: "権利", en: "right", note: "法的・政治的な権利の概念を漢語で表現した。" },
              { ja: "文化", en: "culture", note: "ラテン語 cultura の翻訳として定着。" },
              { ja: "科学", en: "science", note: "「科目ごとの学問」という意味から転用。" },
            ].map(({ ja, en, note }) => (
              <div
                key={ja}
                style={{
                  display: "flex",
                  gap: "1rem",
                  borderBottom: "1px solid #28241a",
                  padding: ".6rem 0",
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "#c8a96e", fontSize: "1.1rem", minWidth: "60px" }}>{ja}</span>
                <span style={{ color: "#7a9e82", fontSize: ".85rem", minWidth: "120px" }}>{en}</span>
                <span style={{ color: "#5e5848", fontSize: ".8rem", lineHeight: "1.6" }}>{note}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="歴史的背景">
          <p style={{ marginBottom: "1rem" }}>
            明治維新（1868年）以降、日本は西洋の思想・制度・科学技術を急速に取り入れる必要に迫られました。西周・福沢諭吉・中江兆民らをはじめとする翻訳者たちは、単に音を借りるのではなく、概念の本質を理解し、漢字によって意味を表現しようとしました。
          </p>
          <p style={{ marginBottom: "1rem" }}>
            その成果として、哲学・社会・経済・文化・科学・権利・義務・自由……といった語が生まれ、それらは中国・韓国・台湾にも輸出されて東アジアの近代語彙の共通基盤となりました。
          </p>
          <blockquote
            style={{
              borderLeft: "3px solid #c8a96e",
              paddingLeft: "1rem",
              color: "#b8b2a6",
              margin: "1rem 0 0",
            }}
          >
            翻訳語の誕生は、言語の受動的な借用ではなく、概念そのものを文化に根付かせようとする能動的な知的営みでした。
          </blockquote>
        </Section>

        <Section title="現代における翻訳語">
          <p style={{ marginBottom: "1rem" }}>
            今日では新しい外来概念の多くがカタカナ語として取り込まれています。「デジタル」「アルゴリズム」「クラウド」——これらは音の借用であり、意味が共有されないまま使われることも少なくありません。
          </p>
          <p>
            翻訳語辞典 Shaqai は、明治の翻訳の営みを記録・参照できる場として、現代においても意味の通った翻訳語を生み出すための議論に貢献することを目指しています。
          </p>
        </Section>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              fontSize: ".875rem",
              color: "#c8a96e",
              border: "1px solid #c8a96e44",
              borderRadius: "2px",
              padding: ".5rem 1.25rem",
              textDecoration: "none",
              letterSpacing: ".03em",
            }}
          >
            単語一覧を見る →
          </Link>
          <Link
            href="/about/"
            style={{
              fontSize: ".875rem",
              color: "#9e9888",
              border: "1px solid #3d3828",
              borderRadius: "2px",
              padding: ".5rem 1.25rem",
              textDecoration: "none",
              letterSpacing: ".03em",
            }}
          >
            このサイトについて →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
