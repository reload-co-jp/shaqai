import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "kojin-etymology",
  title: "「個人」の語源——分けられない一人から社会の単位へ",
  description:
    "「個人」は individual の訳語として明治期に定着した。ラテン語由来の individual は「分割できないもの」を原義とし、日本語の「個人」は集団から区別される一人の人間を表した。西周の訳語づくりから、社会・自由・権利と対になる近代語としての成立をたどる。",
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
          「個人の自由」「個人情報」「個人と社会」——現代日本語で「個人」は、
          集団から区別される一人の人間を表す基本語である。
          しかしこの語は、古くから日本語に自然にあった言葉ではない。
          明治期、西洋哲学・法学・社会思想の individual を訳す中で、
          人を「集団の成員」ではなく「それ自体で数えられる一人」として捉える語が必要になった。
        </p>

        <h2 style={h2Style}>individual——分けられないもの</h2>

        <p>
          英語 <em>individual</em> は、ラテン語 <em>individuus</em> に由来する。
          <em>in-</em> は否定、<em>dividuus</em> は分けられるものを意味する。
          したがって原義は「分割できないもの」「これ以上分けられない単位」だ。
          哲学では、普遍的な種類や集団に対して、具体的に一つとして存在するものを指した。
        </p>

        <p>
          この語は、最初から人間だけを意味したわけではない。
          一つの物、一つの生物、一つの事例も individual でありうる。
          しかし近代社会思想では、個々の人間が権利・義務・自由を持つ主体として捉えられ、
          individual は「社会を構成する一人の人間」という重い意味を帯びていった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>individual の語源</p>
          <p style={noteTextStyle}>
            ラテン語 individuus（分割できない）
            <br />
            in-（否定）＋ dividuus（分けられる）
            <br />
            「これ以上分けられない一単位」から、社会の中の一人の人間へ。
          </p>
        </div>

        <h2 style={h2Style}>「個」と「人」</h2>

        <p>
          日本語の「個人」は、「個」と「人」から成る。
          「個」は、ひとつ、ひとり、個別の単位を表す字だ。
          「人」はもちろん人間を表す。
          つまり「個人」は、字義としては「一つの単位としての人」「個別の人間」である。
        </p>

        <p>
          この訳語の強さは、人をまず数えられる単位として見るところにある。
          家の一員、藩の臣、村の者、身分の一部ではなく、
          それ自体として区別できる一人。
          「個人」という語は、人間を社会や共同体から切り離すのではなく、
          社会を考える最小単位として一人ひとりを立ち上げた。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「個人」の字義</p>
          <p style={noteTextStyle}>
            個（ひとつ・個別の単位）＋ 人（人間）
            <br />
            「集団から区別される一人の人間」
            <br />
            individual の「分割できない単位」を、漢字二字で受け止めた語。
          </p>
        </div>

        <h2 style={h2Style}>西周と「個人」</h2>

        <p>
          「個人」は、明治初期の哲学者・西周の訳語づくりと深く関わる。
          西は『百一新論』（1874年）などで、西洋哲学・論理学・社会思想の概念を
          日本語へ移す試みを進めた。
          individual に対応する語として「個人」が用いられ、
          1881年の『哲学字彙』などを通じて定着していく。
        </p>

        <p>
          西の仕事は、単なる単語の翻訳ではなかった。
          「哲学」「主観」「客観」「概念」などと同じく、
          近代の思考を日本語で扱えるようにするための土台づくりだった。
          「個人」もその一つであり、社会・国家・権利・義務を考えるための前提になる語だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>成立の流れ</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>1874年：西周『百一新論』で individual の訳語として用いられる</li>
            <li>1881年：『哲学字彙』で哲学語として整理される</li>
            <li>明治後期：社会・法律・教育・文学の語彙へ広がる</li>
          </ul>
        </div>

        <h2 style={h2Style}>「一人」と「個人」の違い</h2>

        <p>
          日本語には昔から「一人」という語があった。
          しかし「一人」と「個人」は同じではない。
          「一人」は人数を数える語であり、孤独や単独行動も表す。
          「個人」は、社会や集団に対して、それ自体の権利・意思・責任を持つ主体を表す。
        </p>

        <p>
          たとえば「一人の村人」と言えば、村の中の一名を数えている。
          しかし「個人の自由」と言うとき、そこには国家や社会が侵してはならない領域がある。
          「個人」は、ただ数として一人であるだけでなく、
          自分の判断を持ち、権利を持ち、責任を負う存在としての一人を意味した。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>語感の違い</p>
          <p style={noteTextStyle}>
            一人：人数・単独性を表す。
            <br />
            個人：集団や社会から区別される主体を表す。
            <br />
            「個人」は近代的な権利・自由・責任の語彙と結びつく。
          </p>
        </div>

        <h2 style={h2Style}>社会と同時に生まれた語</h2>

        <p>
          「個人」は、「社会」と対になる語として力を持った。
          society の訳語として「社会」が定着するとき、
          その社会を構成する単位として individual、すなわち「個人」も必要になった。
          近代の問いは、個人と社会の関係として立てられる。
          個人は社会の中でどう自由を持つのか。
          社会は個人にどこまで介入できるのか。
        </p>

        <p>
          江戸期の身分秩序では、人は家・村・藩・身分の中に位置づけられた。
          明治以後の国家と社会は、人を戸籍・教育・徴兵・納税・権利義務の単位として数え直す。
          「個人」は、近代国家が人を管理する単位でもあり、
          同時に人が国家や社会に対して自分を主張する単位でもあった。
        </p>

        <h2 style={h2Style}>自由・権利・人格</h2>

        <p>
          「個人」は、それだけで完結する語ではない。
          「自由」「権利」「人格」「独立」と結びついて初めて、近代語としての輪郭を得る。
          個人がいるから自由が問題になり、権利が問題になり、人格の尊重が問題になる。
          逆に、自由や権利の概念が入ってきたことで、「個人」は単なる一人ではなくなった。
        </p>

        <p>
          福沢諭吉が説いた「一身独立して一国独立す」も、この文脈にある。
          国家の独立は、ただ政府が強いことではなく、一人ひとりが自立することに支えられる。
          「個人」は、国家や社会の下に埋もれる存在ではなく、
          近代化の基礎になる主体として語られるようになった。
        </p>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          individual の原義は「分割できないもの」だった。
          「個人」はそれを、「一つの単位としての人」として受け止めた。
          この訳語によって、日本語は人間を家や身分や共同体の部分としてだけでなく、
          それ自体で数えられ、尊重され、責任を負う存在として語れるようになった。
        </p>

        <p>
          ただし「個人」は、孤立した人間を意味するだけではない。
          個人は社会から切り離されて存在するのではなく、社会との関係の中で自由や権利を持つ。
          語源をたどると、「個人」とは社会に対抗する小さな点ではなく、
          社会を作り、社会から守られ、社会に責任を持つ「分けられない一人」なのだと見えてくる。
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
            <li>西周『百一新論』（1874年）</li>
            <li>井上哲次郎ほか『哲学字彙』（1881年）</li>
            <li>Online Etymology Dictionary, “individual”</li>
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
