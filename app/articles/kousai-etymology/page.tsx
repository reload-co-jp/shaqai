import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "kousai-etymology",
  title: "「交際」の語源——人と人がまじわる場所から社会へ",
  description:
    "「交際」は平安期からある漢語だが、明治期に福沢諭吉が「人間交際」として society の訳語に用いたことで、近代的な人間関係語へ広がった。人と人が交わる字義から、社会・社交・外交、そして恋愛の付き合いへ意味が移る過程をたどる。",
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
          「交際が広い」「交際費」「交際相手」——現代日本語で「交際」は、
          人付き合いから恋愛関係までを表す語として使われる。
          しかしこの語は、単なる日常の付き合いを表すだけではなかった。
          明治期には「人間交際」として society の訳語にもなり、
          近代社会そのものを説明する言葉として使われた。
        </p>

        <h2 style={h2Style}>交わり、きわに接する</h2>

        <p>
          「交際」は古い漢語で、日本では平安期の用例が確認される。
          「交」は、まじわること、互いに行き来することを表す。
          「際」は、きわ・境目・接するところを表す。
          つまり「交際」は、もともと人と人が互いに接し、行き来し、関係を取り結ぶことを意味した。
        </p>

        <p>
          字義を見ると、この語の中心には「関係の接点」がある。
          一人で完結する行為ではなく、相手がいて、距離が縮まり、言葉や礼儀や利益が行き交う。
          「交」は動きであり、「際」は接触の場である。
          交際とは、人と人のあいだに生まれる関係の働きだった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「交際」の字義</p>
          <p style={noteTextStyle}>
            交（まじわる・行き来する）＋ 際（きわ・接するところ）
            <br />
            「互いに接し、関係を結ぶこと」
            <br />
            人間関係を、接触と往来の動きとして捉えた語。
          </p>
        </div>

        <h2 style={h2Style}>古い交際、新しい交際</h2>

        <p>
          古い「交際」は、主に人と人の付き合い、交わりを表した。
          友人・知人との関係、世間との付き合い、礼儀を伴う往来などである。
          そこでは、個人同士がどのように関係を保つかが問題だった。
          現代の「交際が広い」という言い方は、この古い意味をよく残している。
        </p>

        <p>
          ただし明治になると、この語はより大きな概念を担うようになる。
          西洋の society や social intercourse を訳す必要が生じたからだ。
          家や村や身分の中で自然に与えられた関係ではなく、
          個人が互いに結びつき、議論し、取引し、公共を作る関係をどう呼ぶか。
          その答えの一つが「交際」だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>意味の層</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>古典語 —— 人と人の付き合い、交わり</li>
            <li>明治語 —— society / social intercourse の訳語候補</li>
            <li>近代語 —— 社交・外交・市民的ネットワーク</li>
            <li>現代語 —— 人付き合い、恋愛関係</li>
          </ul>
        </div>

        <h2 style={h2Style}>福沢諭吉の「人間交際」</h2>

        <p>
          「交際」を近代語として大きく押し広げたのが福沢諭吉だった。
          福沢は『西洋事情』外編や『文明論之概略』で、
          society や social intercourse に近い概念を「人間交際」と表した。
          ここでの「人間」は、個々の人間というより、人の世、人と人のあいだを意味する。
          「人間交際」は、人々が互いに関わり、社会を形づくる関係の総体だった。
        </p>

        <p>
          この訳語は、意味としてはかなり正確だった。
          society を「固定した集団」ではなく、「人々の交わり」として捉えているからだ。
          社会は建物のようにそこにあるものではなく、人が関わり合うことで成り立つ。
          福沢の「人間交際」は、近代社会を動的な関係として説明する強い言葉だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「人間交際」</p>
          <p style={noteTextStyle}>
            人間（人の世・人と人のあいだ）＋ 交際（関係を結ぶこと）
            <br />
            society を「人々の交わり」として訳した語。
            <br />
            集団そのものより、関係の働きを強調する。
          </p>
        </div>

        <h2 style={h2Style}>society との競合</h2>

        <p>
          しかし最終的に、society の標準訳は「社会」になった。
          「社会」はもともと神社の集まりを指す古い漢語だったが、
          明治の知識人たちによって西洋的な社会概念の訳語として再定義された。
          「人間交際」は意味をよく説明するが、四文字で長く、概念名としては少し説明的だった。
        </p>

        <p>
          一方の「社会」は二文字で短く、制度・集団・構造を表しやすかった。
          そのため、社会学、社会問題、社会制度、社会主義のような複合語を作りやすい。
          「交際」は society の訳語の中心からは退いたが、
          人間関係の動きや付き合いの側面を表す語として残った。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>訳語の違い</p>
          <p style={noteTextStyle}>
            人間交際：人と人の関係・交流を強調
            <br />
            社会：集団・制度・構造を強調
            <br />
            society の二つの面が、別々の日本語に分かれた。
          </p>
        </div>

        <h2 style={h2Style}>社交・外交・交際</h2>

        <p>
          近代に入ると、「交際」はさまざまな領域へ広がった。
          個人同士の礼儀ある付き合いは「社交」と呼ばれ、
          国家間の関係と交渉は「外交」と呼ばれた。
          どちらにも「交」の字があり、人と人、国と国が接触し、関係を調整するという発想がある。
        </p>

        <p>
          近代社会では、見知らぬ他者と関係を作る技術が重要になった。
          学校、会社、新聞、演説会、結社、政党、商取引。
          そこでは血縁や地縁だけでなく、目的や利害や思想によって人が結びつく。
          「交際」は、そうした新しい関係の作法を支える語でもあった。
        </p>

        <h2 style={h2Style}>恋愛語への縮小</h2>

        <p>
          現代では「交際」と言うと、男女の付き合い、恋愛関係を指すことも多い。
          「交際している」「交際相手」「交際期間」のような用法である。
          これは、広い人間関係語が、特定の親密な関係を表す方向へ狭まった例だ。
        </p>

        <p>
          ただし、この恋愛用法にも古い字義は残っている。
          交際とは、互いに近づき、関係を持続させることだからだ。
          単なる好意ではなく、時間をかけて付き合い、社会的にも関係として認められる。
          「交際」は、恋愛を一時の感情ではなく、継続する関係として名づける語になった。
        </p>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          「交際」は、人と人がまじわるという素朴な字義から出発した。
          しかし明治期には、society を説明する語として、人間が社会を作る仕組みそのものを担った。
          その後、「社会」が制度や構造の名になり、
          「交際」は関係の実践、人付き合い、恋愛関係の語として残った。
        </p>

        <p>
          語源をたどると、交際は単なる「付き合い」ではない。
          人が一人では社会になれないこと、
          接触し、行き来し、距離を調整しながら公共を作ることを表す語である。
          「交際」という二文字には、社会を制度ではなく関係の網として見る感覚が、今も生きている。
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
            <li>コトバンク「交際」</li>
            <li>福沢諭吉『西洋事情』外編</li>
            <li>福沢諭吉『文明論之概略』</li>
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
