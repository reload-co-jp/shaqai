import { FC } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "DXを翻訳語にすると何になるか",
  description:
    "「デジタルトランスフォーメーション」——この言葉を明治の翻訳家が訳したなら、どんな語を生み出しただろうか。翻訳語の視点からDXを解剖する試み。",
  alternates: {
    canonical: "https://shaqai.reload.co.jp/articles/dx-translation/",
  },
  openGraph: {
    type: "article",
    title: "DXを翻訳語にすると何になるか — 翻訳語辞典 Shaqai",
    description:
      "「デジタルトランスフォーメーション」——この言葉を明治の翻訳家が訳したなら、どんな語を生み出しただろうか。翻訳語の視点からDXを解剖する試み。",
    url: "https://shaqai.reload.co.jp/articles/dx-translation/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const Page: FC = () => {
  return (
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "読み物", url: "/articles/" },
          { name: "DXを翻訳語にすると何になるか", url: "/articles/dx-translation/page.tsx" }
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
          DXを翻訳語にすると何になるか
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
          「デジタルトランスフォーメーション」——この言葉を明治の翻訳家が訳したなら、
          どんな語を生み出しただろうか。翻訳語の視点からDXを解剖する試み。
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
          DX——Digital Transformation（デジタルトランスフォーメーション）。
          この略語は近年、ビジネスや行政の場で頻繁に使われるようになった。
          しかし「DXって何？」と問われたとき、
          すらすらと答えられる人はどれほどいるだろうか。
        </p>

        <p>
          明治の翻訳家ならこの語をどう訳しただろうか。
          「電算変革」「数位革新」「情報転換」—— 候補はいくつか思い浮かぶ。
          実際に翻訳語を考えてみることは、
          DXという概念そのものを深く理解する契機にもなる。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          まず概念を解剖する
        </h2>

        <p>
          翻訳語を作るには、まず原語の意味を正確に理解することが先決だ。
          西周が「哲学」を作る前にphilosophyの語源まで遡ったように、
          DXを訳す前にその定義を整理しなければならない。
        </p>

        <p>
          DXの概念を提唱したのはスウェーデンの研究者エリック・ストルターマンで、
          2004年の論文でこう定義した——
          「ICTの浸透が人々の生活をあらゆる面でより良い方向に変化させること」。
          のちに経営文脈では「デジタル技術を活用してビジネスモデルや組織を根本から変革すること」
          という意味合いが強まり、日本では行政・企業のデジタル化推進という文脈で
          さらに広く使われるようになった。
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
            DXの構成要素
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".625rem" }}
          >
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                Digital（デジタル）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                情報をデジタル信号（0と1）で扱う技術・手法の総称。
                コンピュータ・ソフトウェア・ネットワーク・AIなどを含む広義の概念。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                Transformation（トランスフォーメーション）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                単なる改善（improvement）ではなく、形・性質が根本的に変わること。
                ラテン語のtransformare（形を超えて変える）に由来する。
              </p>
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          「Digital」をどう訳すか
        </h2>

        <p>
          「デジタル（digital）」はラテン語のdigitus（指）に由来する。
          指で数えることから「数値」の意味に転じ、
          現代では情報を離散的な数値（0と1）で表現する技術を指す。
        </p>

        <p>明治期の訳語の作り方に倣うなら、いくつかの候補が考えられる。</p>

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
              marginBottom: ".75rem",
              fontWeight: "bold",
            }}
          >
            「Digital」の訳語候補
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}
          >
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                数位（すうい）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                「数（number）」と「位（桁・単位）」を組み合わせた語。
                デジタル信号の本質（数値の桁による表現）を捉えている。
                中国語では「数位」または「数字」がデジタルを指す語として実際に使われている。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                電算（でんさん）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                「電子計算」の略で、電子技術による計算・情報処理を指す。
                かつてコンピュータを「電子計算機」と呼んでいた流れを汲む。
                ただし「デジタル」の本質である数値表現よりも機器・技術の側面が強い。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                情報（じょうほう）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                広義では「情報技術を用いた」という意味でdigitalを表せる。
                「情報化」という語がすでに広まっているため馴染みやすい反面、
                digitalの精確な意味からは離れる。
              </p>
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          「Transformation」をどう訳すか
        </h2>

        <p>
          Transformationの訳語としては「変革」「転換」「変容」「革新」などが候補になる。
          それぞれニュアンスが異なり、何を選ぶかがDXのイメージを大きく左右する。
        </p>

        <p>
          「変革」は既存の体制を意識的に変えていく能動的な意味合いが強い。
          「転換」は方向性の切り替えを示し、「革新」は従来のものを刷新するニュアンスを持つ。
          「変容」は形そのものが変わるという語義で、
          transformationのtrans-（超えて）＋forma（形）という語源に最も忠実かもしれない。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          翻訳語の候補を組み合わせる
        </h2>

        <p>以上を踏まえて、DXの翻訳語候補を組み合わせてみよう。</p>

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
              marginBottom: ".75rem",
              fontWeight: "bold",
            }}
          >
            DXの翻訳語候補
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}
          >
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                数位変革（すういへんかく）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                語源に忠実で意味が透明。「数位」がデジタルの技術的本質を、
                「変革」が能動的な組織・社会の変化を表す。
                学術的・行政的文脈に向いた語。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                情報変容（じょうほうへんよう）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                「情報化による根本的な変容」というニュアンス。
                「情報化社会」「情報革命」という既存の語との連続性がある。
                ビジネス・社会論的な議論に向いた語。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".2rem",
                }}
              >
                電算革新（でんさんかくしん）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                電子技術による刷新という意味で、企業のシステム更新や
                業務効率化という文脈に合いやすい。
                ただしDXの「根本的変容」よりも表層的な改善のイメージが強い。
              </p>
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          翻訳してみて見えてくること
        </h2>

        <p>
          こうして翻訳語を考えてみると、「DX」という語が
          いかに多義的で曖昧かが浮かび上がってくる。
          どの訳語を採用するかによって、DXが「技術的な変革」なのか
          「社会・組織の変容」なのか「情報システムの刷新」なのかが
          微妙に変わってくる。
        </p>

        <p>
          柳父章が指摘した「カセット効果」——訳語の意味的な不透明さが
          多様な意味の投影を可能にするという現象——は、
          カタカナ語のDXにも当てはまる。
          「DX」という記号の不透明さが、各人が自分の文脈で解釈する余地を生み、
          結果として語が広く使われる反面、概念の共有が曖昧になる。
        </p>

        <p>
          もし「DX」の代わりに「数位変革」が普及していたなら、
          「デジタル技術を使って組織の根本を変える」という意味は
          語を見ただけで伝わっただろう。一方で、「とりあえずIT化すればDX」
          という誤解は起きにくかったかもしれない。
        </p>

        <p>
          翻訳語を考えることは、概念を理解することだ。
          DXでも、AIでも、サステナビリティでも——
          カタカナ語を日本語に訳してみようと試みるだけで、
          その概念の輪郭が急に鮮明になることがある。
          それが、翻訳語という知的実践の今日的な意義かもしれない。
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
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>
              Erik Stolterman & Anna Croon Fors, &quot;Information Technology
              and the Good Life&quot; (2004)
            </li>
            <li>経済産業省「DX推進ガイドライン」(2018)</li>
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
