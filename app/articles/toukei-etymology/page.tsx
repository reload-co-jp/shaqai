import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "toukei-etymology",
  title: "「統計」の語源——国家を数える技術からデータの科学へ",
  description:
    "「統計」は statistics の訳語として明治期に定着した。語源をたどると statistics は「国家の状態」を知る学であり、日本でも「政表」「表記」「形勢」などの訳語候補を経て、「多くをまとめて計る」統計へ落ち着いた。",
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
          「人口統計」「経済統計」「統計学」「統計的に有意」——現代日本語で「統計」は、
          数量データを集め、整理し、分析することを表す基本語になっている。
          しかしその語源は、現代のデータサイエンスよりもずっと政治的だった。
          statistics はもともと、国家の状態を知るための学だったのである。
        </p>

        <h2 style={h2Style}>statistics は「国家」の語だった</h2>

        <p>
          英語 <em>statistics</em> は、ドイツ語 <em>Statistik</em> を経て広まった語だ。
          18世紀のドイツで、ゴットフリート・アッヘンヴァルが国家の制度・人口・産業・財政を記述する学として
          <em>Statistik</em> を用いた。
          さらにさかのぼると、近代ラテン語 <em>statisticum collegium</em>、
          イタリア語 <em>statista</em>、ラテン語 <em>status</em> に連なる。
        </p>

        <p>
          <em>status</em> は、立っている状態、身分、ありさまを意味する。
          そこから state、すなわち国家や国の状態を表す語が生まれた。
          statistics は、最初から「数の学」だったというより、
          国家の状態を把握し、統治に役立てる知識だった。
          人口、土地、兵力、財政、貿易を数えることは、近代国家の目になることだった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>statistics の語源</p>
          <p style={noteTextStyle}>
            ラテン語 status（状態・身分・ありさま）
            <br />
            近代ラテン語 statisticum collegium（国家事項を扱う講義）
            <br />
            ドイツ語 Statistik → 英語 statistics
            <br />
            原義は「国家の状態を記述する学」に近い。
          </p>
        </div>

        <h2 style={h2Style}>最初の訳語は「政表」だった</h2>

        <p>
          日本で statistics を受け止めるとき、最初から「統計」が定着したわけではない。
          幕末には「政表」という訳語が使われた。
          1860年の『萬國政表』は、各国の人口・財政・産業などを表にまとめて示す書物で、
          statistics に「政表」を当てた早い例として知られる。
        </p>

        <p>
          「政表」は、語源としてはかなり正確だった。
          「政」は政治・国家統治、「表」は表にして示すこと。
          つまり「国家の状態を表で示す」という意味で、
          statistics の初期の性格をよく捉えていた。
          ただし、語としては政治色が強く、学問や方法としての広がりを持たせにくかった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>訳語候補</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>政表 —— 国家の状態を表で示す</li>
            <li>表記・表紀 —— 表に記す、表としてまとめる</li>
            <li>形勢 —— 国や社会のありさま</li>
            <li>統計 —— 多数をまとめて計る</li>
          </ul>
        </div>

        <h2 style={h2Style}>「統計」の登場</h2>

        <p>
          「統計」という訳語は、明治年間を通じてしだいに定着した。
          統計局の資料によれば、開成所教授の柳河春三が早い時期に
          「統計入門」または「統計便覧」と題した小冊子でこの語を用いたと伝えられる。
          1873年（明治6年）の『附音挿図英和字彙』にも、
          statistics の訳語として「統計」が見える。
        </p>

        <p>
          明治政府は、戸籍、人口、物産、財政、教育、衛生などを数値で把握しようとした。
          1881年には統計院が設けられ、「統計」は官庁語としても力を持つようになる。
          「政表」が国家の表を示す語だったのに対し、
          「統計」は、国家だけでなく社会全体を数量としてまとめる方法を表せた。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「統計」の字義</p>
          <p style={noteTextStyle}>
            統（まとめる・すべる）＋ 計（数える・はかる）
            <br />
            「多くの数量をまとめて計ること」
            <br />
            政治の表から、数量を扱う一般的な方法へ意味を広げた。
          </p>
        </div>

        <h2 style={h2Style}>国家を見えるようにする技術</h2>

        <p>
          統計は、近代国家にとって不可欠な技術だった。
          人口がどれだけいるのか、米がどれだけ取れるのか、税収はいくらか、
          学校に通う子どもは何人か、病気はどこで流行しているのか。
          こうした事実を数値にしなければ、政策も制度設計もできない。
        </p>

        <p>
          統計は、見えない社会を見えるようにする。
          一人ひとりの生活はばらばらでも、数を集めれば傾向が現れる。
          それは統治の道具であり、同時に社会を理解する道具でもあった。
          「統計」という語には、近代国家が国民と社会を数字として把握し始めた歴史が刻まれている。
        </p>

        <h2 style={h2Style}>統計学と統計データ</h2>

        <p>
          現代の「統計」は、二つの意味を持つ。
          一つは、人口統計や貿易統計のような数値資料。
          もう一つは、データを集め、分析し、不確実性の中で判断する統計学である。
          英語 statistics も、この二つの意味を併せ持っている。
        </p>

        <p>
          19世紀以降、確率論と結びついた統計学は、
          国家の記述を超えて、医学、農学、心理学、工学、経済学へ広がった。
          統計は、単に数を並べるだけではなく、
          偶然とばらつきの中から意味のある差を見つける方法になった。
          「統計的」という言い方は、直感ではなくデータに基づく判断を求める近代の態度を表している。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>意味の変化</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>18世紀ヨーロッパ —— 国家の状態を記述する学</li>
            <li>幕末日本 —— 政表、国家事情を表にする知</li>
            <li>明治日本 —— 統計、社会を数量で把握する官庁技術</li>
            <li>現代 —— データ分析と不確実性判断の科学</li>
          </ul>
        </div>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          「統計」は、数そのものではなく、数をまとめて世界を読もうとする言葉だ。
          「統」はばらばらの事実を束ねる。
          「計」はそれを数え、測り、比べる。
          だから統計は、単なる数字の山ではない。
          社会の姿を見える形に変換する技術である。
        </p>

        <p>
          statistics の語源が state に連なることを知ると、
          統計がなぜ公的な重みを持つのかも見えてくる。
          統計は国家が社会を知るために生まれた。
          しかし現代では、市民も企業も研究者も、統計を使って世界を読み解く。
          「統計」という二文字は、国家を数える技術が、データの時代の共通語へ広がった痕跡なのである。
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
            <li>統計局「『統計』という言葉の起源」</li>
            <li>統計150年特設サイト「万國政表」「辛未政表」</li>
            <li>Online Etymology Dictionary, “statistics”</li>
            <li>Oxford Academic, “Microscopium Statisticum and the Etymology of Statistics”</li>
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
