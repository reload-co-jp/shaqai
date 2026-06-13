import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "byodo-etymology",
  title: "「平等」の語源——仏のまなざしから法の下の同等へ",
  description:
    "「平等」は仏教語として、差別なくすべてを等しく見る思想を表した。明治期には equality の訳語として、自由・権利・民主と結びつき、法の下の平等や機会の平等を示す近代政治語へ変わった。その意味の転換をたどる。",
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
          「法の下の平等」「男女平等」「機会の平等」——現代日本語で「平等」は、
          地位・権利・待遇に差がないことを表す基本語である。
          しかしこの語は、もともと近代政治のために作られた語ではない。
          出発点は仏教語であり、すべてのものを差別なく見るまなざしを表していた。
        </p>

        <h2 style={h2Style}>平らで等しい</h2>

        <p>
          「平等」は、「平」と「等」から成る。
          「平」はたいらで偏りがないこと、差がないことを表す。
          「等」はひとしいこと、同じ段階や程度であることを表す。
          二字を合わせると、上下や高低の差がなく、同じように扱われる状態になる。
        </p>

        <p>
          字義だけを見れば、平等はきわめて分かりやすい。
          しかし歴史的には、この語は単なる数量的な同一性ではなく、
          宗教的・道徳的な意味を強く持っていた。
          仏教において「平等」は、迷いと悟り、貴賤や身分の差を超えて、
          すべての衆生を等しく見る視線を意味した。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「平等」の字義</p>
          <p style={noteTextStyle}>
            平（たいら・偏りがない）＋ 等（ひとしい・同じ程度）
            <br />
            「差がなく、同じように扱われること」
            <br />
            仏教語では、すべてを差別なく見るあり方を表した。
          </p>
        </div>

        <h2 style={h2Style}>仏教語としての平等</h2>

        <p>
          仏教では、すべての衆生が仏になる可能性を持つという考えが重視された。
          「一切衆生悉有仏性」という言い方に見られるように、
          身分・性別・能力・生まれの違いを超えて、根本には等しい価値があると考えられた。
          この文脈で「平等」は、現実社会の制度というより、仏のまなざしのあり方だった。
        </p>

        <p>
          ただし、仏教語の平等は、すべてを同じ姿にそろえることではない。
          違いを消すのではなく、違いの奥にある根本的な同等性を見る。
          そこには、貴いものと卑しいもの、清いものと汚れたものを分ける人間の判断を超える発想がある。
          近代の equality とは違うが、人間の価値を考える土台として響き合う部分があった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>仏教語の平等</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>すべての衆生を差別なく見る</li>
            <li>仏性や救済可能性の同等性を示す</li>
            <li>制度上の権利より、宗教的なまなざしを表す</li>
          </ul>
        </div>

        <h2 style={h2Style}>equality——同じ高さにあること</h2>

        <p>
          英語 <em>equality</em> は、古フランス語 <em>equalité</em> を経て、
          ラテン語 <em>aequalitas</em> にさかのぼる。
          そのもとにある <em>aequus</em> は、平らな、水平な、公正な、等しいという意味を持つ。
          ここにも「平らさ」と「公正さ」が重なっている。
        </p>

        <p>
          西洋政治思想では、equality は人々が法的地位・政治的資格・権利において等しいことを表す語になった。
          フランス革命の標語「自由・平等・博愛」に見られるように、
          equality は身分制や特権に対抗する言葉だった。
          何者かが生まれによって上に立ち、他者が下に置かれる社会を否定する語である。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>equality の語源</p>
          <p style={noteTextStyle}>
            ラテン語 aequus（平らな・等しい・公正な）
            <br />
            aequalitas（等しさ・均等）
            <br />
            古フランス語 equalité → 英語 equality
            <br />
            「同じ高さにあること」が、法的・政治的な同等性へ広がった。
          </p>
        </div>

        <h2 style={h2Style}>明治の「自由平等」</h2>

        <p>
          「平等」が equality の訳語として力を持ったのは、明治期の自由民権運動と深く関わる。
          中江兆民はルソー『社会契約論』を漢文調で訳述した『民約訳解』（1882年）で、
          「自由平等」の語を用いた。
          自由と平等は、個人が近代社会でどう扱われるべきかを示す対の言葉として広まっていく。
        </p>

        <p>
          この時期の平等は、仏教的な救済の平等ではない。
          法律の前で同じ扱いを受けること、身分によって政治参加や権利が制限されないこと、
          人が生まれながらに一定の尊厳を持つことを意味した。
          「平等」は、宗教語から政治語へと大きく転用された。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>近代語としての平等</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>法の下の平等</li>
            <li>身分や特権の否定</li>
            <li>権利・政治参加の同等性</li>
            <li>機会の平等</li>
          </ul>
        </div>

        <h2 style={h2Style}>福沢諭吉と「天は人の上に人を造らず」</h2>

        <p>
          平等思想を日本社会に広く印象づけた言葉として、
          福沢諭吉『学問のすゝめ』冒頭の「天は人の上に人を造らず人の下に人を造らず」がある。
          これはアメリカ独立宣言の「すべての人は平等に造られている」という思想を、
          日本語読者に届く形で言い換えたものとされる。
        </p>

        <p>
          ここで重要なのは、福沢が「神」ではなく「天」を用いたことだ。
          キリスト教的な創造主ではなく、儒学的・東アジア的になじみのある「天」を通じて、
          自然権思想を受け止めた。
          平等は、輸入された政治思想でありながら、日本語の既存の倫理語彙を借りて定着していった。
        </p>

        <h2 style={h2Style}>平等と同一ではない</h2>

        <p>
          「平等」はしばしば「みんな同じにすること」と誤解される。
          しかし近代政治語としての平等は、必ずしも同一化ではない。
          人の能力・事情・背景は違う。
          問題は、その違いを理由に、法的地位や機会や尊厳を不当に低く扱わないことにある。
        </p>

        <p>
          だから「平等」は「公平」とも近いが、完全には同じではない。
          平等は同じ地位・同じ権利を強調し、公平は状況に応じた公正な扱いを強調する。
          「機会の平等」「結果の平等」「法の下の平等」のように、
          何を同じにするのかによって意味の焦点が変わる。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>平等の焦点</p>
          <p style={noteTextStyle}>
            同じ人間としての尊厳
            <br />
            同じ法的地位
            <br />
            同じ政治的資格
            <br />
            同じ機会
            <br />
            どの「同じ」を問題にするかで、平等の意味は変わる。
          </p>
        </div>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          「平等」は、仏教語としては差別を超えるまなざしを表し、
          近代語としては特権や身分差を否定する政治原理を表した。
          どちらにも共通するのは、人を上下に分ける見方への抵抗である。
          仏の前での平等と、法の下の平等は同じではないが、
          人の価値を一方的に高低へ並べない点で響き合っている。
        </p>

        <p>
          equality の語源にある <em>aequus</em> も、「平ら」と「公正」を同時に含んでいた。
          日本語の「平等」もまた、「平ら」と「等しい」を重ねる。
          語源をたどると、この言葉は単なる同一化ではなく、
          人を不当に上下へ分ける線をならし、同じ地平に置き直すための言葉だと見えてくる。
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
            <li>中江兆民『民約訳解』（1882年）</li>
            <li>福沢諭吉『学問のすゝめ』（1872年）</li>
            <li>Online Etymology Dictionary, “equal” / “equality”</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
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
