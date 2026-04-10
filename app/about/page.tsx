import { FC } from "react"

export const metadata = {
  title: "このサイトについて",
  description: "翻訳語辞典 Shaqai の目的と背景について。明治期の訳語の営みに光を当て、現代においても意味の通った翻訳語を生み出すための辞典です。",
  alternates: { canonical: "https://shaqai.reload.co.jp/about/" },
  openGraph: {
    title: "このサイトについて — 翻訳語辞典 Shaqai",
    description: "翻訳語辞典 Shaqai の目的と背景について。明治期の訳語の営みに光を当て、現代においても意味の通った翻訳語を生み出すための辞典です。",
    url: "https://shaqai.reload.co.jp/about/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const Page: FC = () => {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.25rem", color: "#e2dcd0", marginBottom: ".5rem" }}>
          このサイトについて
        </h1>
        <p style={{ fontSize: ".875rem", color: "#807870" }}>About</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: ".9375rem", color: "#bfb9ac", lineHeight: "1.9" }}>
        <p>
          昨今、日本語に取り入れられる外来語の多くはカタカナ語としてそのまま使用される傾向にあります。しかしそれらは本来の意味が十分に共有されないまま、限定的・曖昧なニュアンスで使われることも多く、結果として本来の外国語での用法との間に誤解を生む場面も少なくありません。
        </p>
        <p>
          一方で、明治期の人々は西洋の新しい概念を受け入れるにあたり、単なる音の借用ではなく、意味を深く理解し、漢字によって丁寧に翻訳する努力を重ねました。その結果として生まれた「社会」「経済」「哲学」といった言葉は、現在に至るまで日本語の基盤として機能しています。
        </p>
        <p>
          本アプリケーションは、そうした翻訳の営みに改めて光を当て、言葉の背景にある思想や意図を再発見することを目的としています。そして、現代においても誤解の少ない、意味の通った翻訳語を生み出していくための一助となることを目指しています。
        </p>
        <p style={{ borderLeft: "3px solid #c8a96e", paddingLeft: "1rem", color: "#b8b2a6" }}>
          言葉をただ受け入れるのではなく、理解し、翻訳し、共有する。その積み重ねが、より豊かな言語環境と健全なコミュニケーションを支えると私たちは考えています。
        </p>
      </div>
    </div>
  )
}

export default Page
