import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "shinka-etymology",
  title: "「進化」の語源——巻物をひらくことから生命の変化へ",
  description:
    "「進化」は evolution の訳語として、明治期の進化論受容の中で広まった。ラテン語 evolvere（巻物をひらく）に由来する語が、なぜ日本語では「進む変化」と訳されたのか。ダーウィン、モース、石川千代松を通じてたどる。",
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
          「生物の進化」「技術の進化」「サービスの進化」——現代日本語で「進化」は、
          生物学の専門語であると同時に、あらゆる改善や変化を語る日常語でもある。
          しかし evolution の語源をたどると、そこに「進む」という意味はもともと強くない。
          原義はむしろ、巻かれたものをほどき、内にあるものを展開することだった。
        </p>

        <h2 style={h2Style}>evolution——巻物をひらくこと</h2>

        <p>
          英語 <em>evolution</em> はラテン語 <em>evolutio</em> に由来する。
          そのもとにある動詞 <em>evolvere</em> は、
          <em>e-</em>（外へ）と <em>volvere</em>（転がす・巻く）から成る語で、
          「巻物をひらく」「巻かれたものをほどく」を意味した。
        </p>

        <p>
          つまり evolution の原義は、前へ進むことではなく、内に巻き込まれていたものが外へ現れることだ。
          17世紀以降、この語は数学・軍事・発生学などで「展開」「発展」「隊形変化」を表す語として使われた。
          生物が世代を超えて変わるという意味は、そこからさらに後に発達した用法である。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>evolution の語源</p>
          <p style={noteTextStyle}>
            ラテン語 evolvere（巻物をひらく・展開する）
            <br />
            e-（外へ）＋ volvere（巻く・転がす）
            <br />
            evolutio（展開・ほどくこと）→ 英語 evolution
          </p>
        </div>

        <h2 style={h2Style}>ダーウィンは最初から「進化」と言ったわけではない</h2>

        <p>
          1859年、ダーウィンは『種の起源』を刊行した。
          ただし初版の本文で中心語になっているのは evolution ではなく、
          descent with modification、すなわち「変化を伴う由来」だった。
          ダーウィンが強調したのは、生物が一直線に高等化することではなく、
          共通祖先から分岐し、環境の中で変化を蓄積することだった。
        </p>

        <p>
          evolution という語には、19世紀当時すでに「進歩」や「予定された展開」の響きがあった。
          そのため、ダーウィンの自然選択説とは少しずれる危うさもあった。
          進化は必ずしも「良くなる」ことではない。
          生物学的には、環境との関係の中で集団の性質が世代を超えて変わることを指す。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>ダーウィン理論の中心</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>共通祖先からの分岐</li>
            <li>世代を超えた変異の蓄積</li>
            <li>自然選択による適応</li>
            <li>目的へ向かう進歩ではなく、環境との関係による変化</li>
          </ul>
        </div>

        <h2 style={h2Style}>日本語の「進化」</h2>

        <p>
          日本で進化論が本格的に知られる契機の一つは、
          アメリカ人動物学者E・S・モースの東京大学での講義だった。
          モースは1877年（明治10年）に来日し、ダーウィンの考えを紹介した。
          その講義内容を石川千代松が整理し、1883年（明治16年）に『動物進化論』として刊行した。
          この本は、進化論を日本語で体系的に紹介した初期の重要著作として知られる。
        </p>

        <p>
          「進化」は「進」と「化」から成る。
          「進」は前へ進むこと、進歩・発達の方向を表す。
          「化」は形や性質が変わること、別の状態になることを表す。
          つまり「進化」は、字義として「進みながら変わる」「変化して発達する」という意味を持つ。
          evolution の「展開」に、明治の進歩思想が重なった訳語だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「進化」の字義</p>
          <p style={noteTextStyle}>
            進（前へ進む・発達する）＋ 化（変わる・別の状態になる）
            <br />
            「進みながら変わること」「発達を伴う変化」
            <br />
            evolution の展開性に、近代の進歩感覚をのせた語。
          </p>
        </div>

        <h2 style={h2Style}>「進む」という字の力</h2>

        <p>
          「進化」という訳語は強い。
          その理由は、「進」が変化に方向を与えるからだ。
          evolution の語源には「巻物をひらく」という展開の感覚があるが、
          「進化」はそれを「前へ進む変化」として受け止める。
          明治の日本にとって、西洋科学は文明開化・富国強兵・社会発展と結びついていた。
          生物の変化も、時代の進歩を語る言葉の中に置かれやすかった。
        </p>

        <p>
          ここに誤解の種もある。
          現代でも「進化」は「よくなる」「高級になる」という意味で使われやすい。
          しかし生物学の進化は、必ずしも改善ではない。
          環境が変われば、有利な性質も不利になる。
          進化は一直線の階段ではなく、枝分かれしながら続く変化の網である。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>訳語のずれ</p>
          <p style={noteTextStyle}>
            evolution：展開・ほどけること・世代的変化
            <br />
            進化：進む変化・発達する変化
            <br />
            「進」の字が、目的論的・進歩主義的な読みを生みやすくした。
          </p>
        </div>

        <h2 style={h2Style}>社会進化論との接続</h2>

        <p>
          明治期の「進化」は、生物学だけにとどまらなかった。
          ハーバート・スペンサーの社会進化論も日本に入り、
          社会・国家・文明が低い段階から高い段階へ発展するという考え方が広まった。
          「進化」は、生命の歴史を説明する語であると同時に、
          文明や社会の変化を語るキーワードにもなった。
        </p>

        <p>
          この広がりは、訳語としての成功でもあり、危うさでもあった。
          「進化」は近代化の希望を語るには便利だったが、
          強いものが勝つ、遅れたものは劣る、という乱暴な社会観にもつながりやすかった。
          生物学の evolution と、社会の「進歩」を同じ線の上に置くことは、
          いつも慎重でなければならない。
        </p>

        <h2 style={h2Style}>東アジアへ広がる訳語</h2>

        <p>
          「進化」は日本だけで終わらなかった。
          近代日本で作られ、整えられた科学語彙は、中国語・朝鮮語にも大きな影響を与えた。
          「進化」もその一つで、中国語では進化、朝鮮語では 진화 として定着している。
          明治の訳語は、日本語の内部だけでなく、東アジアの近代科学語彙を形づくった。
        </p>

        <p>
          二字漢語の強みは、短く、意味を圧縮でき、他の漢字語と結びつきやすいところにある。
          「進化論」「進化学」「進化心理学」「分子進化」のように、
          「進化」は新しい学問領域を作る核になった。
          evolution の複雑な歴史は、東アジアでは「進化」という二文字に凝縮された。
        </p>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          evolution の原義は、巻物をひらくことだった。
          そこには、内に含まれていたものが外へ現れ、形を見せていく感覚がある。
          一方、「進化」は、前へ進みながら変わるという力強い語感を持つ。
          この訳語は、明治の科学受容と進歩への期待をよく映している。
        </p>

        <p>
          ただし、語源を知ると「進化」を少し慎重に使える。
          進化は、いつも良くなることではない。
          予定された完成へ向かうことでもない。
          生命が環境と関わりながら、枝分かれし、失敗し、偶然を含んで変わり続けることだ。
          「進化」という二文字の中には、科学の翻訳と近代の夢、そしてその誤解まで刻まれている。
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
            <li>Charles Darwin, <em>On the Origin of Species</em> (1859)</li>
            <li>石川千代松『動物進化論』（1883年）</li>
            <li>Online Etymology Dictionary, “evolution” / “evolve”</li>
            <li>日本科学史学会「進化論誤用・悪用・濫用」関連論考</li>
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
