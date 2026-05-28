import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "kenri-etymology",
  title: "「権利」の語源——正しさから主張できる力へ",
  description:
    "「権利」は right の訳語として明治初期に定着した。right の語源が「まっすぐ・正しい」にある一方、「権利」は権力と利益を結びつけた語だった。この二文字が、近代日本に個人の正当な主張という新しい思想を移植した過程をたどる。",
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
          「人権」「財産権」「権利を主張する」——現代日本語で「権利」は、
          個人や団体が正当に要求し、行使できる資格を表す基本語になっている。
          しかしこの語は、古くから日本社会に根づいていた概念ではない。
          明治初期、西洋法学の <em>right</em> を訳すために、
          「正しいこと」を「主張できる力」として日本語に移した言葉だった。
        </p>

        <h2 style={h2Style}>right——まっすぐで正しいこと</h2>

        <p>
          英語 <em>right</em> は、古英語 <em>riht</em> にさかのぼる。
          もともとは「まっすぐな」「曲がっていない」「正しい」「公正な」を意味した。
          同じ系統の語はドイツ語 <em>Recht</em>、ラテン語 <em>rectus</em> などにもつながり、
          身体的な「まっすぐさ」から、道徳的な正しさ、法の正しさへ意味が広がった。
        </p>

        <p>
          そこから <em>right</em> は、「正しいこと」「法」「当然受けるべきもの」
          「法的・道徳的に主張できる資格」を表す語になった。
          つまり西洋語の <em>right</em> には、権限や利益だけでなく、
          「正しさ」「正当性」「法にかなうこと」が深く含まれている。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>right の語源</p>
          <p style={noteTextStyle}>
            古英語 riht（まっすぐな・正しい・公正な）
            <br />
            → 正しいこと、法、当然の請求、法的資格
            <br />
            「曲がっていない」から「正当な主張」へ意味が広がった。
          </p>
        </div>

        <h2 style={h2Style}>「権」と「利」</h2>

        <p>
          日本語の「権利」は、「権」と「利」から成る。
          「権」は、もとは重さをはかる分銅を表し、そこからはかること、判断する力、
          権限、権力を意味するようになった。
          「利」は、利益、利得、役に立つことを表す。
          したがって「権利」は、字義としては「力をもって守られる利益」
          「主張できる利益」に近い。
        </p>

        <p>
          この訳語は鋭いが、少し危うい。
          <em>right</em> が持つ「正しさ」や「道義にかなうこと」は、
          「権利」の字面からは見えにくい。
          代わりに「権力」と「利益」が前に出る。
          そのため明治の知識人たちは、「権利」が利己的な語に聞こえることをしばしば問題にした。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「権利」の字義</p>
          <p style={noteTextStyle}>
            権（はかる力・権限・権力）＋ 利（利益・利得）
            <br />
            「法的に認められた利益」「正当に主張できる力」
            <br />
            right の「正しさ」は、字面ではやや後ろに下がる。
          </p>
        </div>

        <h2 style={h2Style}>津田真道と『泰西国法論』</h2>

        <p>
          「権利」が明治初期に広まるうえで重要なのが、津田真道の『泰西国法論』だ。
          津田は幕末にオランダへ留学し、ライデン大学でフィセリングの公法学講義を受けた。
          帰国後、その講義内容を訳した『泰西国法論』を1868年（明治元年）に刊行し、
          その中で <em>right</em> に対応する語として「権利」を用いた。
        </p>

        <p>
          この本が扱ったのは、西洋諸国の国内法、政治体制、国民の権利、政府の責務などだった。
          江戸時代の身分秩序では、人が生まれながらに正当な請求を持つという考えは一般的ではなかった。
          「権利」は、近代法の入口で、人と国家の関係を組み替える語として登場した。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>初期の文脈</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>1868年：津田真道『泰西国法論』</li>
            <li>right の訳語として「権利」が使われる</li>
            <li>西洋法学・公法学の受容と結びつく</li>
            <li>国家に対する国民の正当な資格を表す語になる</li>
          </ul>
        </div>

        <h2 style={h2Style}>「権理」「通義」「正権」</h2>

        <p>
          right の訳語は、最初から「権利」一本だったわけではない。
          「権理」「通義」「正権」「民権」など、複数の訳語が試みられた。
          それぞれ、right のどの面を重く見るかが違っていた。
          「権理」は権利の背後にある理を、「通義」は広く通じる道義を、
          「正権」は正しさと権限を強調する。
        </p>

        <p>
          これらの候補があったことは、right が単純な語ではなかったことを示している。
          right は、利益でもあり、力でもあり、正しさでもあり、法でもある。
          「権利」は、そのうち「主張できる力」と「保護される利益」を強く押し出した訳語だった。
          最終的に法律語としては「権利」が定着し、他の語は周辺へ退いていった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>right の訳語候補</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>権利 —— 主張できる力と利益</li>
            <li>権理 —— 権利の根拠となる理</li>
            <li>通義 —— 普遍的な道義・正義</li>
            <li>正権 —— 正当な権限</li>
          </ul>
        </div>

        <h2 style={h2Style}>自由民権と「権利」</h2>

        <p>
          「権利」という語が社会的な熱を帯びたのは、自由民権運動の時代だった。
          憲法制定、国会開設、言論・集会の自由、参政権を求める運動の中で、
          人々は自分たちが国家に対して何を要求できるのかを語り始めた。
          「権利」は、単なる法律翻訳語ではなく、政治的な主張の語になった。
        </p>

        <p>
          「民権」という語も、この時代を象徴している。
          民が持つ権利、人民が政治に参与する資格。
          それは、上から与えられる恩恵ではなく、人が当然持つものとして語られた。
          「権利」は、国家の中で黙って従う臣民から、主張する国民へ向かう言葉だった。
        </p>

        <h2 style={h2Style}>権利と義務</h2>

        <p>
          近代法の語彙では、「権利」は「義務」と対になる。
          ある人に権利があるとき、別の人や国家にはそれを侵害しない義務、
          またはそれを実現する義務が生じる。
          この関係が、近代的な法秩序を支えている。
        </p>

        <p>
          だから権利は、ただ「自分の利益を押し通すこと」ではない。
          法や制度の中で、誰が何を要求でき、誰が何を負うのかを整理する仕組みである。
          「権利」が利己的に見える危うさを持ちながら、それでも定着したのは、
          個人の正当な領域を守るために、この語が必要だったからだ。
        </p>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          <em>right</em> の語源は「まっすぐで正しいこと」だった。
          「権利」はそれを、「権」と「利」という漢字で受け止めた。
          そこには、正しさを利益として保護し、力として行使できるものに変える翻訳の飛躍がある。
          この飛躍がなければ、近代法の個人は日本語で十分に語れなかった。
        </p>

        <p>
          しかし同時に、「権利」はいつも問いを残す。
          それはただの利益なのか、それとも正義に根ざした請求なのか。
          自分だけの力なのか、他者の義務と結びついた関係なのか。
          語源をたどると、「権利」という二文字の中で、
          西洋の right が持つ正しさと、日本語の権力・利益の感覚が今もせめぎ合っていることが見えてくる。
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
            <li>津田真道訳『泰西国法論』（1868年）国立国会図書館デジタルコレクション</li>
            <li>国立公文書館「泰西国法論」解説</li>
            <li>Online Etymology Dictionary, “right”</li>
            <li>前田正治「『権理』と『権利』覚え書」</li>
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
