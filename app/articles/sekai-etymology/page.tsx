import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "sekai-etymology",
  title: "「世界」の語源——時間と空間から地球全体へ",
  description:
    "「世界」は仏教語として、すべての時間を表す「世」と、すべての空間を表す「界」から成った。近世の世界地図と近代地理学を経て、world の訳語として地球・万国・人類社会を指す語へ広がる過程をたどる。",
}

export const metadata = createArticleMetadata(article)

const noteStyle = {
  background: "#1a1610",
  border: "1px solid #2a2518",
  borderRadius: "4px",
  padding: "1.25rem 1.5rem",
}

const noteTitleStyle = {
  fontSize: ".875rem",
  color: "#c8a96e",
  marginBottom: ".5rem",
  fontWeight: "bold",
}

const noteTextStyle = {
  fontSize: ".875rem",
  color: "#908a7a",
  lineHeight: 1.8,
}

const h2Style = {
  fontSize: "1.125rem",
  color: "#e2dcd0",
  marginTop: ".5rem",
  letterSpacing: ".02em",
}

const Page: FC = () => {
  return (
    <ArticlePage {...article}>
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
          「世界地図」「世界史」「世界市場」「自分の世界」——現代日本語の「世界」は、
          地球全体から人間社会、専門分野、個人の内面までを一語で包み込む。
          しかしこの語の出発点は、地球儀でも国際社会でもなく、仏教の宇宙観だった。
          「世界」は、時間と空間を合わせた壮大な語として日本語に入り、
          近世・近代を通じて world の訳語へ変わっていった。
        </p>

        <h2 style={h2Style}>仏教語としての「世界」</h2>

        <p>
          「世界」は、サンスクリット語 <em>lokadhātu</em> などの漢訳として広まった仏教語だ。
          「世」は過去・現在・未来の三世、すなわち時間の広がりを表す。
          「界」は東西南北上下、すなわち空間の境域を表す。
          したがって「世界」は、字義どおりには「時間と空間の全体」を指す語だった。
        </p>

        <p>
          仏教の世界は、単なる物理的な地球ではない。
          須弥山を中心とする宇宙構造、衆生が生きる場所、仏の国土、浄土といった
          宗教的・宇宙論的な広がりを持っていた。
          「三千大千世界」という表現に見られるように、
          世界は一つの地表面ではなく、無数に重なり広がる存在領域として考えられていた。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「世界」の字義</p>
          <p style={noteTextStyle}>
            世（過去・現在・未来の三世）＋ 界（東西南北上下の境域）
            <br />
            仏教語では「時間と空間を含む全体」を表す。
            <br />
            地球上の諸国という近代的な意味より、はるかに宇宙論的な語だった。
          </p>
        </div>

        <h2 style={h2Style}>「世の中」への縮小</h2>

        <p>
          仏教語として入った「世界」は、やがて日常語・文学語として使われるようになる。
          『竹取物語』には、世間の人々やあたり一帯を指す用例が見える。
          中国の唐詩や日本の古典文学では、「世界」は宇宙全体というより、
          人間が生きている場、世の中、世間という意味へ近づいていった。
        </p>

        <p>
          この変化は自然だった。
          仏教の宇宙論はあまりに大きいが、人間が実際に語る「世界」は、
          たいてい自分の生きる範囲を指す。
          「住む世界が違う」「芸能の世界」「子どもの世界」のような用法は、
          この「ある範囲の内側」という意味を受け継いでいる。
          「界」という字が持つ境域・領域の感覚が、専門分野や共同体の意味を支えている。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>意味の広がり</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>仏教語 —— 時間と空間を含む宇宙論的全体</li>
            <li>古典文学 —— 世の中、人間社会、あたり一帯</li>
            <li>近世 —— 地球・万国・海外を含む地理的空間</li>
            <li>近代 —— world の訳語として国際社会・人類全体へ拡張</li>
          </ul>
        </div>

        <h2 style={h2Style}>世界地図が変えた「世界」</h2>

        <p>
          「世界」が地球上の諸地域を指す語として強まった大きな契機は、近世の世界地図だった。
          17世紀初め、マテオ・リッチの『坤輿万国全図』が東アジアに伝わり、
          日本でもそれをもとにした世界図屏風が作られた。
          ここで「世界」は、仏教的な宇宙ではなく、
          海でつながる諸大陸・諸国家の配置を示す語へ傾いていく。
        </p>

        <p>
          江戸後期には蘭学を通じて、地理・天文・航海の知識が流入した。
          朽木昌綱『泰西輿地図説』、山村才助『訂正増訳采覧異言』、
          箕作省吾『坤輿図識』などは、海外の地理知識を日本語で説明した。
          この時代の「世界」は、仏典の語でありながら、
          しだいに「地球上の万国」を考えるための語彙になっていった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>近世の転換</p>
          <p style={noteTextStyle}>
            仏教的世界像 → 世界地図 → 万国・地球の空間
            <br />
            「世界」は、見えない宇宙論から、地図で見える地球空間へ重心を移した。
          </p>
        </div>

        <h2 style={h2Style}>world——「人の時代」という英語</h2>

        <p>
          一方、訳元となった英語 <em>world</em> の語源も興味深い。
          <em>world</em> は古英語 <em>weorold</em> にさかのぼり、
          ゲルマン祖語の <em>wer</em>（人・男）と <em>ald</em>（年齢・時代）から成るとされる。
          字義は「人の時代」あるいは「人間の生きる時代」だ。
        </p>

        <p>
          つまり <em>world</em> も、もともとは地球という惑星そのものではなく、
          人間が生きる現世、人間社会、この世の営みを指していた。
          のちに「知られている世界」「物理的世界」「宇宙」へ意味が広がり、
          近代地理学では「地球上の諸地域」を表す語として使われるようになった。
          「世界」と <em>world</em> は別々の語源を持ちながら、
          どちらも「人間が生きる場」から「地球全体」へ意味を広げた点で響き合っている。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>world の語源</p>
          <p style={noteTextStyle}>
            古英語 weorold / worold
            <br />
            wer（人・男）＋ ald（年齢・時代）→「人の時代」
            <br />
            「この世の人間的生」から、地理的な世界・地球全体へ意味が拡張した。
          </p>
        </div>

        <h2 style={h2Style}>近代語としての「世界」</h2>

        <p>
          明治期になると、「世界」は world の訳語として安定する。
          学校教育、地理学、国際関係、歴史叙述のなかで、
          「世界史」「世界地理」「世界各国」「世界市場」のような複合語が増えていった。
          国家の外側に広がる空間を考えるには、「天下」や「四海」では足りなかった。
          「世界」は、地球規模の比較と接続を可能にする近代語になった。
        </p>

        <p>
          同時に、哲学では <em>world</em> やドイツ語 <em>Welt</em> の訳語として、
          「世界」が存在全体・経験全体を表す語にもなった。
          「世界観」「生活世界」「客観的世界」のような表現では、
          地図上の地球ではなく、認識され、生きられ、意味づけられた全体が問題になる。
          仏教語の「時間と空間の全体」という古い含みは、
          近代哲学の語彙の中で別の形でよみがえったとも言える。
        </p>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          「世界」は、仏教の宇宙論から生まれ、古典文学で世間になり、
          世界地図によって地球になり、近代翻訳によって world になった。
          その過程で意味は狭まりも広がりもした。
          宇宙全体を指した語が、人間社会を指し、
          さらに国境を越えた地球全体を指すようになったからだ。
        </p>

        <p>
          語源を見ると、「世界」は最初から単なる場所ではなかった。
          「世」は時間、「界」は空間。
          そこに <em>world</em> の「人間が生きる時代」という感覚が重なる。
          私たちが「世界」と言うとき、そこには地図上の広がりだけでなく、
          人間が時間の中で生き、境界の内側に意味を作るという感覚が残っている。
          「世界」は、場所の名前であると同時に、人間の生の広がりを表す言葉なのだ。
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
            <li>コトバンク「世界」</li>
            <li>語源由来辞典「世界／せかい」</li>
            <li>Online Etymology Dictionary, “world”</li>
            <li>Dictionary.com, “world”</li>
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
    </ArticlePage>
  )
}

export default Page
