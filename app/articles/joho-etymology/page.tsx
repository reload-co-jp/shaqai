import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "joho-etymology",
  title: "「情報」の語源——敵情の報知からデータの時代へ",
  description:
    "「情報」は英語 information の直訳ではなく、明治初期にフランス語 renseignement の軍事訳語として生まれた。「情を報ずる」という敵情把握の語が、戦後の情報科学とコンピュータを経て、現代社会の中心語になるまでをたどる。",
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
          「情報社会」「情報技術」「個人情報」「情報収集」——現代日本語で「情報」は、
          知識・知らせ・データをまとめて扱う基本語になっている。
          しかしこの語は、もともとコンピュータの語でも、新聞報道の語でもなかった。
          出発点は明治初期の軍事翻訳であり、敵の状態を知り、味方へ知らせるための語だった。
        </p>

        <h2 style={h2Style}>「情報」は information の直訳ではない</h2>

        <p>
          「情報」の初期用例として重要なのは、1876年（明治9年）に酒井忠恕が訳した
          『仏国歩兵陣中要務実地演習軌典』だ。
          これはフランス軍の歩兵実地演習書を日本語に移したもので、
          そこでフランス語 <em>renseignement</em> の訳語として「情報」が用いられた。
        </p>

        <p>
          <em>renseignement</em> は、知らせ・説明・情報を意味する語だが、
          軍事文脈では敵情・諜報・偵察によって得た知識を指す。
          酒井が作った「情報」は、単なる知識一般ではなく、
          「敵の情状を報知する」という実務的な意味を背負っていた。
          今日の information の広い意味から見ると意外だが、
          「情報」はまず「軍事インテリジェンス」の語として生まれた。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「情報」の初期設定</p>
          <p style={noteTextStyle}>
            1876年：酒井忠恕『仏国歩兵陣中要務実地演習軌典』
            <br />
            原語：フランス語 renseignement
            <br />
            意味：敵情・偵察報告・作戦判断のための知らせ
          </p>
        </div>

        <h2 style={h2Style}>情を報ずる</h2>

        <p>
          「情報」は、字を見ればかなり透明な語だ。
          「情」はありさま・実情・内情を表す。
          「報」は知らせる・告げる・報告することを表す。
          つまり「情報」とは、まず「情を報ずること」、
          すなわち状況をつかみ、それを伝える行為だった。
        </p>

        <p>
          ここで重要なのは、「情」が感情ではなく「状況」に近い意味で使われている点だ。
          「敵情」「内情」「実情」の「情」であり、
          目に見えにくい場の状態、相手の動き、背後にある事情を指す。
          「報」はそれを組織的に知らせる。
          したがって「情報」は、最初から「判断のために加工された知らせ」という性格を持っていた。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「情報」の字義</p>
          <p style={noteTextStyle}>
            情（ありさま・実情・敵情）＋ 報（知らせる・報告）
            <br />
            「状況を知らせること」「判断に必要な事情の報告」
            <br />
            知識そのものより、状況把握と伝達の働きが中心だった。
          </p>
        </div>

        <h2 style={h2Style}>鴎外と「戦争論」</h2>

        <p>
          「情報」はその後、軍事思想の翻訳でも使われる。
          明治後期、森鴎外がクラウゼヴィッツ『戦争論』を訳す際、
          ドイツ語 <em>Nachricht</em> などに「情報」を当てたことが知られている。
          <em>Nachricht</em> は知らせ・消息・報告を意味し、
          軍事では作戦判断の材料となる報告を指す。
        </p>

        <p>
          この時期の「情報」は、まだ日常語ではない。
          軍隊・作戦・参謀・偵察と結びついた専門語だった。
          しかし近代国家にとって、見えない状況を集め、整理し、判断へつなげることは
          軍事だけでなく外交・警察・行政・報道にも必要だった。
          「情報」は、国家が世界を把握するための語として、少しずつ射程を広げていく。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>軍事語としての「情報」</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>偵察で得た敵の状態</li>
            <li>作戦判断のための報告</li>
            <li>参謀が整理する知識</li>
            <li>公開されない消息・諜報</li>
          </ul>
        </div>

        <h2 style={h2Style}>information——形を与えること</h2>

        <p>
          現代の「情報」が主に対応する英語は <em>information</em> だ。
          この語は古フランス語 <em>informacion</em> などを経て、
          ラテン語 <em>informatio</em> にさかのぼる。
          さらに動詞 <em>informare</em> は「形を与える」「教える」「訓練する」を意味した。
        </p>

        <p>
          ここには、日本語の「情報」と違う発想がある。
          information は、ただ知らせを運ぶだけでなく、
          受け手の頭の中に形を作る、心や理解に輪郭を与えるという語感を持っていた。
          ラテン語の <em>forma</em> は形を表す。
          information は、知識が人の認識を形づくるという方向から発達した語だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>information の語源</p>
          <p style={noteTextStyle}>
            ラテン語 informare（形を与える・教える）
            <br />
            informatio（概念・教示・形成）
            <br />
            古フランス語 informacion → 英語 information
          </p>
        </div>

        <h2 style={h2Style}>軍事語から一般語へ</h2>

        <p>
          1905年（明治38年）ごろ、「情報」は一般辞書にも現れる。
          日露戦争の時代に、軍事・外交・新聞報道の語彙が社会に広く流れ込んだことは大きい。
          戦争は、兵力だけでなく、敵情・地形・補給・通信・新聞報道の勝負でもあった。
          「情報」は、軍隊の専門語から、近代社会が出来事を把握するための語へ移っていく。
        </p>

        <p>
          とはいえ、戦前の「情報」はまだどこか硬い語だった。
          「報知」「消息」「知識」「資料」「通報」などの語が用途ごとに使われ、
          「情報」がすべてを包む語になるのは戦後を待つ。
          転機になったのは、通信工学、情報理論、電子計算機、そして情報科学の登場だった。
        </p>

        <h2 style={h2Style}>情報科学が意味を変えた</h2>

        <p>
          第二次世界大戦後、英語 <em>information</em> の訳語として「情報」が急速に広がる。
          通信では信号に載る内容、情報理論では不確実性を減らす量、
          コンピュータでは処理・記録・伝送されるデータを指す語になった。
          「情報処理」「情報科学」「情報工学」「情報技術」という複合語が増え、
          「情報」は軍事語から、科学技術と社会の中心語へ移動した。
        </p>

        <p>
          この変化によって、「情報」は「知らせ」より広い語になった。
          人が読む文章だけでなく、機械が扱う符号、電気信号、データベース、
          画像、音声、センサー値まで含むようになった。
          「情を報ずる」という人間同士の伝達から、
          「差異を符号化し、処理し、再利用するもの」へ意味が拡張したのである。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>意味の変化</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>明治初期 —— 敵情・軍事報告</li>
            <li>明治後期 —— 軍事・外交・報道の知らせ</li>
            <li>戦後 —— information の訳語</li>
            <li>現代 —— データ・知識・通信内容・判断材料の総称</li>
          </ul>
        </div>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          「情報」という語の面白さは、現代的に見えて、出自がかなり泥臭いところにある。
          それは机上の知識ではなく、敵がどこにいるか、何をしようとしているかを知るための語だった。
          情報は最初から、行動と結びついていた。
          知るだけでなく、知らせ、判断し、動くためのものだった。
        </p>

        <p>
          一方、information の語源には「形を与える」という発想がある。
          日本語の「情報」は「状況を報告する」語として生まれ、
          英語の information は「認識に形を与える」語として育った。
          現代の「情報」は、その二つを同時に抱えている。
          それは世界の状態を伝えるものでもあり、私たちの見方そのものを形づくるものでもある。
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
            <li>酒井忠恕訳『仏国歩兵陣中要務実地演習軌典』（1876年）国立国会図書館</li>
            <li>情報処理学会「情報という言葉を尋ねて」</li>
            <li>森鴎外訳『戦争論』</li>
            <li>Online Etymology Dictionary, “information”</li>
            <li>Online Etymology Dictionary, “intelligence”</li>
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
