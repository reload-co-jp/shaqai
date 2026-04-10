import { FC } from "react"

export const metadata = {
  title: "翻訳語のつくりかた、考え方",
  description:
    "翻訳語はどのような原則で作られてきたのか。漢字の組み合わせ方、既存語の転用、造語の工夫——先人たちの知恵を読み解く。",
  alternates: {
    canonical: "https://shaqai.reload.co.jp/articles/how-to-translate/",
  },
  openGraph: {
    type: "article",
    title: "翻訳語のつくりかた、考え方 — 翻訳語辞典 Shaqai",
    description:
      "翻訳語はどのような原則で作られてきたのか。漢字の組み合わせ方、既存語の転用、造語の工夫——先人たちの知恵を読み解く。",
    url: "https://shaqai.reload.co.jp/articles/how-to-translate/",
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
          翻訳語のつくりかた、考え方
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
          翻訳語はどのような原則で作られてきたのか。
          漢字の組み合わせ方、既存語の転用、造語の工夫——先人たちの知恵を読み解く。
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
          良い翻訳語とはどのようなものか。それは覚えやすく、
          意味が推測しやすく、なおかつ原語の概念を正確に捉えた語だ。
          明治の翻訳家たちは試行錯誤の末に、いくつかの暗黙の造語原則を生み出した。
          それらを振り返ることは、翻訳語を作ることの本質を理解する手がかりになる。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          方法1：語源に忠実な意訳
        </h2>

        <p>
          最も正統的な方法は、原語の語源や本来の意味を漢字で表現することだ。
          「哲学」（philosophy ＝ 知恵への愛）、「民主主義」（democracy ＝
          民衆による支配）、 「進化」（evolution ＝
          展開・発展）——これらはいずれも原語の意味的核心を
          漢字に凝縮した訳語だ。
        </p>

        <p>
          この方法の長所は、語を見ただけで概念の輪郭が見えることだ。
          「演繹（deduction）」という語は「引き延ばして導く」というイメージを持ち、
          一般的な前提から個別の結論を導く論理過程を示している。
          「帰納（induction）」は「集めて収める」というイメージで、
          個別の事実から一般法則を導く過程を表す。
          語の構造が概念の構造と対応しているのだ。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          方法2：既存の漢語の転用
        </h2>

        <p>
          日本語には中国から伝来した豊富な漢語の蓄積があった。
          それらを新しい概念の訳語として転用する方法も広く採られた。
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
              marginBottom: ".75rem",
              fontWeight: "bold",
            }}
          >
            転用された漢語の例
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}
          >
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".25rem",
                }}
              >
                経済（economy）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                もとは「経世済民」（世を治め民を救う）という政治的理念を指す語。
                近代的な経済学の概念を表す語として転用され、意味が大きく変化した。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".25rem",
                }}
              >
                自由（freedom/liberty）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                仏教語・漢語として「思いのまま」という意味で使われていたが、
                近代的な権利としての自由という意味へと語義が拡張された。
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "#e2dcd0",
                  marginBottom: ".25rem",
                }}
              >
                文化（culture）
              </p>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "#908a7a",
                  lineHeight: 1.7,
                }}
              >
                「文（文明・文章）」と「化（変化・感化）」を組み合わせた既存の表現が、
                cultureの訳語として定着した。
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: ".75rem",
              color: "#5e5848",
              marginTop: ".75rem",
            }}
          >
            参考：柳父章『翻訳語成立事情』
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
          方法3：漢字の新結合
        </h2>

        <p>
          既存の語では対応できない場合、全く新しい漢字の組み合わせを作ることもあった。
          「電話」は「電（電気）」と「話（話すこと）」を組み合わせた造語だ。
          「写真」は「写す」と「真実」を組み合わせ、「実像を写し取ったもの」を意味する。
        </p>

        <p>
          この方法で重要なのは、組み合わせる漢字の選択だ。
          意味の透明性——語を見ただけで意味が推測できること——は、
          普及のしやすさに直結した。難解な漢字を組み合わせた学術的な訳語より、
          直感的に理解できる語の方が広く定着した。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          良い翻訳語の条件
        </h2>

        <p>歴史を振り返ると、定着した翻訳語にはいくつかの共通点がある。</p>

        <p>
          第一に<strong style={{ color: "#e2dcd0" }}>簡潔さ</strong>。
          二字か四字の語が圧倒的に定着しやすかった。
          長い語は日常会話での使用に向かず、短縮されるか忘れられた。
        </p>

        <p>
          第二に<strong style={{ color: "#e2dcd0" }}>意味の透明性</strong>。
          語を構成する漢字から意味が推測できる語は、
          学ぶ側の記憶の負担が少なく広まりやすかった。
        </p>

        <p>
          第三に<strong style={{ color: "#e2dcd0" }}>概念の適切な捉え方</strong>
          。 原語の核心的な意味を捉え、かつ誤解を招くニュアンスを含まない語が
          長期的に生き残った。
        </p>

        <p>
          これらは現代においても、新しい概念の訳語を考える際の有効な基準となりうる。
          私たちはカタカナ語に囲まれた現代にいるが、
          より深く考えるための道具として意訳語を試みることは、
          今でも意義のある実践だといえるだろう。
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
              福田眞人「明治翻訳語のおもしろさ」（名古屋大学言語文化研究会）
            </li>
            <li>吉沢典男・石綿敏雄『外来語の語源』角川書店</li>
            <li>丸山真男・加藤周一『翻訳と日本の近代』岩波新書</li>
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
