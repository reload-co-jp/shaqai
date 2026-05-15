import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "keizai-etymology",
  title: "「経済」の語源——経世済民から economy へ",
  description:
    "日常語として定着した「経済」は、もとは「世を治め民を救う」という政治道徳の言葉だった。economy の訳語として選ばれた経緯と、意味が縮小していった過程をたどる。",
}

export const metadata = createArticleMetadata(article)

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
          「経済成長」「経済政策」「家庭の経済」——現代日本語で「経済」は財やサービスの流通・生産にかかわる言葉として広く使われている。
          しかしこの語の出発点は、市場でも財政でもなく、「世を治め民を救う」という儒学的な統治理念だった。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          経世済民——語の本来の意味
        </h2>

        <p>
          「経済」は「経世済民」の略である。経世済民とは「世（社会・国家）を経（おさ）め、民を済（すく）う」という意味で、
          中国古典に由来する政治哲学の概念だ。4世紀の道家文献『抱朴子』などにその用例が見られ、
          後に儒学の政治思想の中心概念として東アジア全体に広まった。
        </p>

        <p>
          日本でもこの語は江戸時代から使われており、主に政道・治国の文脈で用いられた。
          「経済」といえば財政だけでなく、政治・行政・民衆の生活全般を包含する広大な概念だったのである。
          荻生徂徠の『政談』（1727年頃）にも経世済民の思想が色濃く反映されており、
          当時の知識人にとって「経済」とは統治の学そのものを指していた。
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
            経世済民の原義
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            経（おさめる）＋世（世の中・国家）＋済（すくう）＋民（人民）
            <br />
            「世を治め民を救う」——政治・行政・民生を一括する統治理念。
            現代語の「経済」が指す市場経済・金融の概念とは大きく異なる。
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
          economy との出会い
        </h2>

        <p>
          西洋語 economy の起源はギリシャ語 <em>oikonomia</em>（家政・家の管理）にある。
          oikos（家）＋ nomos（法・管理）の合成語で、もともとは家計の管理を指していた。
          これが転じて国家規模の資源管理・財政を意味するようになり、
          さらに近代経済学の成立とともに生産・流通・消費の体系を指す語へと発展した。
        </p>

        <p>
          開国後の日本において、この economy を日本語に移す必要が生じた。
          1862年（文久2年）に刊行された『英和対訳袖珍辞典』には、すでに economy の訳語として「経済」が記載されている。
          これが現在確認できる最初期の用例の一つだ。
          「世を治める」という広い含意を持つ語が、「財・資源の管理」という economy の意味と
          重なり合うと判断されたのだろう。
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
            economy の語源
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            ギリシャ語 oikonomia（家政）→ ラテン語 oeconomia → 英語 economy
            <br />
            oikos（家）＋ nomos（管理・法）。「家計の管理」が語源。
            国家規模に拡張されて「経済体制」の意味になった。
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
          競合した訳語——理財学と経済
        </h2>

        <p>
          明治初期、「経済」が唯一の訳語だったわけではない。
          特に注目すべきは福沢諭吉の立場だ。福沢は「経済」という語を避け、
          <strong style={{ color: "#e2dcd0" }}>「理財学」</strong>という訳語を好んで用いた。
          「理財」とは「財を理（ことわり）にかなうよう扱う」という意味で、
          economy の「資源・財の管理」という側面をより直截に表現した言葉だった。
        </p>

        <p>
          福沢が「経済」を避けた理由は、この語が持つ政治的・道徳的な含意にあったとされる。
          「経世済民」には統治者の徳や使命感が色濃く含まれており、
          近代的な市場のしくみを客観的・分析的に記述する用語としては適切でないと感じたのかもしれない。
          一方、西周らは「経済」を積極的に使い、明六社の議論を通じて普及を後押しした。
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
            economy の訳語候補
          </p>
          <ul
            style={{
              fontSize: ".875rem",
              color: "#908a7a",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>経済（経世済民の略）—— 最終的に定着</li>
            <li>理財学（福沢諭吉が好用）—— 資源・財の管理を強調</li>
            <li>経済学・制産学・政事学 —— 学問名としての訳語</li>
          </ul>
        </div>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          意味の縮小——広い統治から狭い市場へ
        </h2>

        <p>
          最終的に「経済」が定着した背景には、語の馴染みやすさと音の良さがあったと考えられる。
          しかし定着の過程で、語の意味は大きく変容した。
          江戸時代の「経済」が持っていた「政治・行政・民生すべてを含む統治」という広い含意は失われ、
          economy の近代的な意味——生産・分配・消費の体系——に収束していったのである。
        </p>

        <p>
          この意味の縮小は、翻訳語が定着するときに起きやすい現象の一つだ。
          もとの語（経世済民）が持つ重層的な含意のうち、翻訳先の概念（economy）と重なる部分だけが残り、
          残りは切り捨てられる。その結果、現代の「経済」は「世を救う」という道徳的な次元を失い、
          市場・財政・生産の話としてのみ理解されるようになった。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          語源が照らすもの
        </h2>

        <p>
          経済の語源を知ると、現代の言葉遣いに奇妙な逆転が見えてくる。
          「経済政策」は本来、「経世済民のための政策」——すなわち民を救うための統治——という意味になるはずだが、
          現代では純粋に数値や成長率の話として扱われることが多い。
          語源の道徳的次元が消えたのか、あるいは当然の前提として暗黙に残っているのか。
        </p>

        <p>
          「経済」という漢字二文字は、明治の翻訳家たちが economy と経世済民の間に見出した接点の痕跡だ。
          その選択には、西洋の近代経済学を受け入れながらも、
          統治と民生を結びつける東アジアの政治哲学を手放さなかった知識人たちの葛藤が映っている。
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
            <li>英和対訳袖珍辞典（1862年）国立国会図書館デジタルコレクション</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>丸山真男・加藤周一『翻訳と日本の近代』岩波新書</li>
            <li>福田眞人「明治翻訳語のおもしろさ」名古屋大学言語文化研究会</li>
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
