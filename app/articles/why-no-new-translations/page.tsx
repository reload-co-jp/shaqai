import { FC } from "react"

export const metadata = {
  title: "なぜ現代には翻訳語が生まれにくいか",
  description:
    "明治には数千もの翻訳語が生まれたのに、現代にはほとんど生まれない。この違いはどこから来るのか。",
  alternates: {
    canonical: "https://shaqai.reload.co.jp/articles/why-no-new-translations/",
  },
  openGraph: {
    type: "article",
    title: "なぜ現代には翻訳語が生まれにくいか — 翻訳語辞典 Shaqai",
    description:
      "明治には数千もの翻訳語が生まれたのに、現代にはほとんど生まれない。この違いはどこから来るのか。",
    url: "https://shaqai.reload.co.jp/articles/why-no-new-translations/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const Page: FC = () => {
  return (
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
          なぜ現代には翻訳語が生まれにくいか
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
          明治には数千もの翻訳語が生まれたのに、現代にはほとんど生まれない。
          この違いはどこから来るのか。
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
          スマートフォンを「賢電話」とは呼ばない。
          ソーシャルメディアを「社交媒体」とも呼ばない。
          クラウドコンピューティングを「雲上演算」とも呼ばない。
          現代に新しい技術や概念が生まれるたび、
          私たちはそれをカタカナで受け入れる。
          意訳しようとする動きは、ほとんど見られない。
        </p>

        <p>
          一方、明治時代には「電話」「写真」「汽車」「文明」「進化」——
          次々と新しい翻訳語が生まれた。 この違いはなぜ生じたのか。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          国家的翻訳事業の終焉
        </h2>

        <p>
          明治初期、翻訳は国策だった。富国強兵・文明開化を推進するために、
          政府は西洋の知識を大規模かつ組織的に取り込もうとした。
          学制（1872年）の布告に伴う教科書翻訳、
          各省庁による法律・行政文書の翻訳、
          そして東京大学をはじめとする高等教育機関での学術翻訳——
          これらはすべて、国家が主導するプロジェクトだった。
        </p>

        <p>
          この集中的な翻訳事業が、多くの訳語が短期間に生産・普及した背景にある。
          現代においてはこのような国家的翻訳の仕組みは存在せず、
          訳語の創出は個々の翻訳者や研究者の裁量に委ねられているが、
          その試みが広く普及するための制度的な後押しもない。
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
            翻訳の速度と規模
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            山岡洋一によれば、明治初期の15年間に出版された翻訳書は数千点に上る。
            これは一日に複数冊の翻訳書が出版されていた計算になる。
            このペースと規模は、現代の商業翻訳と比べても圧倒的だった。
          </p>
          <p
            style={{
              fontSize: ".75rem",
              color: "#5e5848",
              marginTop: ".75rem",
            }}
          >
            参考：山岡洋一「15年に数千点 — 明治初期の大翻訳時代」翻訳通信
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
          英語教育の普及という皮肉
        </h2>

        <p>
          現代において翻訳語が生まれにくい大きな理由の一つは、
          英語教育の普及だ。多くの日本人がある程度英語を理解できるため、
          英語をそのままカタカナ表記するだけで概念が伝わるようになった。
        </p>

        <p>
          「マーケティング」を「市場開拓術」と訳しても、
          読者の多くはすでに「marketing」の意味を知っている。
          わざわざ訳語を作る動機が薄れているのだ。
          英語能力の向上が、逆説的に日本語の語彙拡張を抑制している。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          情報の速度と語の定着
        </h2>

        <p>
          新しい概念が世界中に伝播する速度は、現代では明治とは比較にならないほど速い。
          SNSやウェブメディアを通じて、新しい技術・概念の英語名称は
          日本に届くと同時にカタカナとして広まる。
        </p>

        <p>
          訳語を考案し、それを普及させるには時間がかかる。
          しかし情報の拡散速度が上がった現代では、
          訳語が広まる前に原語のカタカナ表記がすでに定着してしまう。
          翻訳語を作るための「時間的余裕」が失われているのだ。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          失われるものと残るもの
        </h2>

        <p>
          翻訳語が生まれにくい現代の傾向は、必ずしも悪いことではない。
          音訳語は国際的な理解を容易にし、原語との対応が明確だ。
          しかし一方で、概念を日本語として消化し、
          思考の道具として内面化する機会が減っているという側面もある。
        </p>

        <p>
          「アルゴリズム」「プラットフォーム」「アジェンダ」——
          これらの語を使う人の多くは、その概念の本質を
          どこまで自分のものとして理解しているだろうか。
          意訳語を作る行為は、外来概念を自分たちの言語と文化の文脈に引き寄せ、
          深く理解しようとする試みだった。 その営みが失われることの意味は、
          今一度考えてみる価値があるかもしれない。
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
            <li>
              山岡洋一「15年に数千点 —
              明治初期の大翻訳時代」翻訳通信（2004年3月）
            </li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>吉沢典男・石綿敏雄『外来語の語源』角川書店</li>
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
  )
}

export default Page
