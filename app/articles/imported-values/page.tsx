import { FC } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "明治時代に輸入される新しい価値観たち",
  description:
    "「自由」「権利」「社会」——これらの言葉が生まれる前、日本にその概念は存在しなかった。翻訳語は単なる言葉ではなく、思想の移植だった。",
  alternates: {
    canonical: "https://shaqai.reload.co.jp/articles/imported-values/",
  },
  openGraph: {
    type: "article",
    title: "明治時代に輸入される新しい価値観たち — 翻訳語辞典 Shaqai",
    description:
      "「自由」「権利」「社会」——これらの言葉が生まれる前、日本にその概念は存在しなかった。翻訳語は単なる言葉ではなく、思想の移植だった。",
    url: "https://shaqai.reload.co.jp/articles/imported-values/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const Page: FC = () => {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "読み物", url: "/articles/" },
          {
            name: "明治時代に輸入される新しい価値観たち",
            url: "/articles/imported-values/page.tsx",
          },
        ]}
      />
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #2a2518",
          }}
        >
          <p
            style={{
              fontSize: ".75rem",
              color: "#5e5848",
              marginBottom: ".75rem",
              letterSpacing: ".05em",
            }}
          >
            読み物
          </p>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#e2dcd0",
              lineHeight: 1.4,
              marginBottom: "1rem",
              letterSpacing: ".02em",
            }}
          >
            明治時代に輸入される新しい価値観たち
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#908a7a",
              lineHeight: 1.8,
              borderLeft: "3px solid #c8a96e",
              paddingLeft: "1rem",
            }}
          >
            「自由」「権利」「社会」——これらの言葉が生まれる前、日本にその概念は存在しなかった。
            翻訳語は単なる言葉ではなく、思想の移植だった。
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            fontSize: ".9375rem",
            color: "#bfb9ac",
            lineHeight: "1.9",
          }}
        >
          <p>
            言葉は概念の容器だ。ある言葉が存在しない言語では、
            その言葉が指し示す概念もまた、十全には存在しえない。
            「社会」という語が生まれる前の江戸時代、
            日本語には「個人が集まって形成する共同体」という概念を
            直截に表す語がなかった。明治の翻訳語は、
            単に外国語を日本語に置き換えたのではなく、
            新しい概念そのものを日本語の世界に創り出したのだ。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            「自由」の誕生——伝統語の転用
          </h2>

          <p>
            「自由」という語は、明治以前にも存在していた。しかしその意味は
            「わがまま」「思うがまま」という、どちらかといえばネガティブな意味合いを持つ語だった。
            仏教語としての「自由」は「自らの思いのまま」を指し、
            必ずしも肯定的なニュアンスではなかった。
          </p>

          <p>
            これを「freedom / liberty」の訳語に充てたのは大胆な転用だった。
            西洋近代思想における自由とは、個人の権利として保障された積極的価値であり、
            旧来の「わがまま」とは似て非なるものだ。
            丸山真男が指摘するように、この語義の転換こそが、
            近代的な自由の概念を日本人が内面化するための知的インフラとなった。
          </p>

          <div
            style={{
              background: "#1a1610",
              border: "1px solid #2a2518",
              borderRadius: "4px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <p
              style={{
                fontSize: ".875rem",
                color: "#c8a96e",
                marginBottom: ".5rem",
                fontWeight: "bold",
              }}
            >
              中江兆民と「自由」
            </p>
            <p
              style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}
            >
              フランスの啓蒙思想家ルソーの『社会契約論』を翻訳した中江兆民は、
              liberté を「自由」と訳した。その著訳書『民約訳解』（1882年）は
              自由民権運動の理論的支柱となり、「自由」という語の近代的意味を
              広く普及させる契機となった。
            </p>
            <p
              style={{
                fontSize: ".75rem",
                color: "#5e5848",
                marginTop: ".75rem",
              }}
            >
              参考：丸山真男・加藤周一『翻訳と日本の近代』
            </p>
          </div>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            「社会」——個人の発見
          </h2>

          <p>
            「society」の訳語として「社会」が定着するまでには、いくつかの候補が競合した。
            「交際」「仲間」「会社」なども候補として挙がったが、
            最終的に「社会」が普及したのは、
            個人（individual）という概念と対をなす社会（society）の意味を
            より適切に表現できると判断されたからだと考えられる。
          </p>

          <p>
            「社会」という訳語の定着は、個人という概念の輸入とも連動していた。
            江戸期の日本語に「個人」という語はなく、
            人は常に家族・藩・身分という集団の中でしか定義されなかった。
            「個人」という語が作られ、「社会」という語がそれと対置されることで、
            「個人と社会の関係」という近代的な問い自体が日本語の中に生まれた。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            「権利」——義務論から権利論へ
          </h2>

          <p>
            江戸時代の日本の思想体系は、儒教的な義務・責任を基盤としていた。
            「権利（right）」という概念——個人が当然持つ正当な主張——は、
            この思想体系には存在しなかった。
          </p>

          <p>
            「権利」という訳語は、もともと「権」（権力・重み）と「利」（利益）から成る語で、
            「正当に主張できる利益」という意味を漢字二文字に込めようとした造語だ。
            この語の普及は、権利という概念そのものを日本社会に導入するプロセスでもあり、
            自由民権運動の思想的根拠を提供することになった。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            言葉が思想を作る
          </h2>

          <p>
            丸山真男と加藤周一は『翻訳と日本の近代』の中で、
            翻訳語が単なる語彙の増加ではなく、
            日本人の思考の枠組みそのものを変えたと論じている。
            新しい語彙を得ることは、新しい思考のカテゴリーを得ることだ。
          </p>

          <p>
            明治の翻訳語たちは、今も私たちの日常語として生き続けている。
            「社会」「文化」「哲学」「経済」「科学」「芸術」——
            これらの語なしに現代の日常会話は成立しない。
            翻訳家たちが苦労して作り出した言葉は、
            150年の時を経て、私たちの思考の一部となっているのだ。
          </p>

          <div
            style={{
              marginTop: "1rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #2a2518",
              fontSize: ".8125rem",
              color: "#5e5848",
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: ".5rem", color: "#807870" }}>参考文献</p>
            <ul
              style={{
                paddingLeft: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: ".25rem",
              }}
            >
              <li>丸山真男・加藤周一『翻訳と日本の近代』岩波新書</li>
              <li>柳父章『翻訳語成立事情』岩波新書</li>
              <li>
                福田眞人「明治翻訳語のおもしろさ」（名古屋大学言語文化研究会）
              </li>
            </ul>
          </div>

          <div style={{ paddingTop: ".5rem" }}>
            <a
              href="/articles/"
              style={{
                fontSize: ".875rem",
                color: "#c8a96e",
                textDecoration: "none",
              }}
            >
              ← 読み物一覧へ
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
