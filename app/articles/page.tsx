import { FC } from "react"

export const metadata = {
  title: "翻訳語の歴史と成り立ちを読む",
  description:
    "翻訳語の歴史や成り立ちについての読み物。明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで。",
  alternates: { canonical: "https://shaqai.reload.co.jp/articles/" },
  openGraph: {
    title: "翻訳語の歴史と成り立ちを読む — 翻訳語辞典 Shaqai",
    description:
      "翻訳語の歴史や成り立ちについての読み物。明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで。",
    url: "https://shaqai.reload.co.jp/articles/",
  },
}

const ARTICLES = [
  {
    id: "meiji-translation",
    title: "明治期の翻訳方法の模索と挑戦",
    description:
      "西洋の学問や思想が怒涛のように押し寄せた明治初期。翻訳家たちはどのような方法で、未知の概念を日本語に変換しようとしたのか。",
  },
  {
    id: "sound-vs-meaning",
    title: "音としての外来語と意味を含めた訳語",
    description:
      "「アイデンティティ」と「自我同一性」——同じ概念を指す二つの言葉はなぜ存在するのか。音訳と意訳、その本質的な違いを考える。",
  },
  {
    id: "imported-values",
    title: "明治時代に輸入される新しい価値観たち",
    description:
      "「自由」「権利」「社会」——これらの言葉が生まれる前、日本にその概念は存在しなかった。翻訳語は単なる言葉ではなく、思想の移植だった。",
  },
  {
    id: "creating-new-words",
    title: "未知の概念を言葉として創るということ",
    description:
      "対応する概念のない言語に、まったく新しい言葉を生み出すとはどういうことか。翻訳家たちが直面した、言語創造の根本的な問い。",
  },
  {
    id: "why-no-new-translations",
    title: "なぜ現代には翻訳語が生まれにくいか",
    description:
      "明治には数千もの翻訳語が生まれたのに、現代にはほとんど生まれない。この違いはどこから来るのか。",
  },
  {
    id: "how-to-translate",
    title: "翻訳語のつくりかた、考え方",
    description:
      "翻訳語はどのような原則で作られてきたのか。漢字の組み合わせ方、既存語の転用、造語の工夫——先人たちの知恵を読み解く。",
  },
  {
    id: "dx-translation",
    title: "DXを翻訳語にすると何になるか",
    description:
      "「デジタルトランスフォーメーション」——この言葉を明治の翻訳家が訳したなら、どんな語を生み出しただろうか。翻訳語の視点からDXを解剖する試み。",
  },
]

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: ".75rem", color: "#c8a96e" }}>読み物</p>
        <h2
          style={{
            fontSize: "1.25rem",
            color: "#e2dcd0",
            margin: ".5rem 0",
          }}
        >
          翻訳語の歴史と成り立ちを読む
        </h2>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>
          明治期の翻訳家たちの挑戦から、現代の翻訳語事情まで
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {ARTICLES.map((article) => (
          <a
            key={article.id}
            href={`/articles/${article.id}/`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid #2a2518",
                borderRadius: "4px",
                padding: "1.25rem 1.5rem",
                background: "#1a1610",
                transition: "border-color .2s",
              }}
            >
              <h3
                style={{
                  fontSize: "1.0625rem",
                  color: "#c8a96e",
                  marginBottom: ".625rem",
                  lineHeight: 1.5,
                  letterSpacing: ".02em",
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#807870",
                  lineHeight: 1.8,
                }}
              >
                {article.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Page
