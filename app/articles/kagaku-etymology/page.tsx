import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "kagaku-etymology",
  title: "「科学」の語源——知ることから分けて知ることへ",
  description:
    "「科学」はラテン語 scientia（知識）を起源とし、「学問を分科する」という訳語の発想で生まれた。窮理学・格物学との競合を経て定着するまでと、「科」という字が近代科学の本質を射抜いていた経緯をたどる。",
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
          「科学的な思考」「科学技術」「科学の発展」——現代日本語で「科学」は、
          実験・観察・論理によって自然界の法則を明らかにする知の営みを指す語として定着している。
          しかしこの語が誕生したのは明治初年のことであり、
          それ以前の日本には science に相当する訳語がなかった。
          「科学」という二文字の選択には、近代科学の本質を看破した翻訳者の洞察が刻まれている。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          scientia——「知ること」そのもの
        </h2>

        <p>
          science の語源はラテン語 <em>scientia</em>（知識・知ること）だ。
          動詞 <em>scire</em>（知る）から派生し、
          字義どおりには「知ること」あるいは「知識の状態」を意味する。
          古典ラテン語では哲学・神学・法学・自然学を問わず、
          体系的な知識の総称として使われた広い語だった。
        </p>

        <p>
          中世ヨーロッパでは <em>scientia</em> は「学問一般」を指し、
          とりわけスコラ哲学の文脈では「証明可能な確実な知識」を意味した。
          英語 science もかつては「知識・学問」全般を指す語であり、
          「自然科学」に意味が絞られたのは19世紀以降のことだ。
          1833年にウィリアム・ヒューウェルが scientist（科学者）という語を造語し、
          以後 science は natural science の略称として定着していった。
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
            science の語源
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            ラテン語 scire（知る）→ scientia（知識・学問）
            <br />
            中世：学問全般を指す広義の語
            <br />
            19世紀：natural science の略称として自然科学に特化
            <br />
            1833年：ヒューウェルが scientist を造語し、意味の境界が確定
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
          「科学」以前——窮理学と格物学の時代
        </h2>

        <p>
          江戸後期から幕末にかけて、蘭学者たちは西洋の自然研究をオランダ語経由で学んだ。
          当時の訳語の主役は「窮理学」と「格物学」だった。
        </p>

        <p>
          「窮理学」は「理をきわめる学問」——朱子学の「格物致知」（物事の理を究めることで知に達する）という
          知的姿勢を自然研究に重ねた語で、natural philosophy や physics に対応していた。
          「格物学」も同じく「格物致知」を由来とし、自然物の理を探る学問を指した。
          どちらも儒学・朱子学の文脈から来た語であり、「真理を追究する姿勢」を強調していたが、
          近代科学の特徴である「分野の体系的な分類」という発想は含まれていなかった。
        </p>

        <p>
          また「究理」は物事の道理を徹底的に追究することを指す語で、
          蘭学者や洋学者の間で広く使われた。
          福沢諭吉は1868年の『訓蒙窮理図解』で「窮理」を書名に用いており、
          明治初年の時点でもこの系統の語が science の有力な訳語として存在していた。
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
            science の訳語候補
          </p>
          <ul
            style={{
              fontSize: ".875rem",
              color: "#908a7a",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>窮理学 —— 理をきわめる学。朱子学的・蘭学的な知の姿勢。natural philosophy 寄り</li>
            <li>格物学 —— 格物致知に由来。江戸後期〜明治初期に使用</li>
            <li>究理 —— 道理を徹底的に追究すること。学問全般に使われた広い語</li>
            <li>科学 —— 学問を分科する。明治初年に登場し最終的に定着</li>
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
          「科」という字の発明
        </h2>

        <p>
          「科学」の初出は1869年（明治2年）の「公議所日誌」に確認され、
          その後1875年の『文部省雑誌』などで使用例が増えていく。
          誰が最初に使ったかは明確でないが、明治初年の官僚・学者層の間で生まれた語とされる。
        </p>

        <p>
          この語の核心は「科」という字にある。
          「科」はもとは「穀物を升（ます）で量って分ける」という字形を持ち、
          「区分・分類・種別」を意味する。「科目」「学科」「百科」などに見られるとおり、
          全体を種類に分けて整理するという概念を担う字だ。
        </p>

        <p>
          「科学」は「科（分類・分科）ごとの学問」、すなわち「分野に分かれた体系的な学問」を意味する。
          この発想は近代科学の本質的な特徴を射抜いていた。
          近代科学は単なる「理の探究」ではなく、物理学・化学・生物学・天文学といった
          専門分野に分かれた体系的な知の構造を持つ。
          「窮理」や「究理」が「理を追う姿勢」を表すのに対し、
          「科学」は「分野として組織化された知識体系」という近代科学の構造的な特徴を表現した。
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
            「科学」の字義
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            科（区分・分類・種別・分科）＋学（学問）
            <br />
            「分野に分かれた体系的な学問」
            <br />
            「理を追う姿勢」（窮理）ではなく「組織化された知識構造」（science）を表現した。
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
          学制による普及
        </h2>

        <p>
          「科学」が決定的に広まったのは、1872年（明治5年）の学制公布によってだ。
          明治政府が近代的な学校教育制度を整備する過程で、
          西洋の学問体系をそのまま輸入した教育課程が設計された。
          物理・化学・生物・地学といった個別分野が「科学」という上位概念の下に位置づけられ、
          教育行政の語彙として「科学」は急速に定着していった。
        </p>

        <p>
          同時期に「理学」という競合語もあった。
          東京大学は1877年の開設時に「理学部」を設け、今日まで「理学」を使い続けている。
          「理学」は「理の学」として自然科学を指す語だが、
          日常語・一般語の座は「科学」が占め、「理学」は大学の学部名などに限定されていった。
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
          ラテン語 <em>scientia</em> が「知ること」という広い意味から出発して
          「自然科学」に絞られていったように、
          「科学」もまた学問一般を指す可能性のある語でありながら、
          自然科学の意味に収束した。
          日本語では「科学的」が「自然科学的・実証的」を意味するのに対し、
          人文学・社会科学には「科学」の語を使いながら「自然科学ではない」という留保が常につく。
          この緊張は、scientia の広さと natural science の狭さの間の距離が
          「科学」という訳語の中に今も生きているからかもしれない。
        </p>

        <p>
          「科学」という語は今日、中国語（科学 <em>kēxué</em>）・朝鮮語（과학 <em>gwahak</em>）でも
          自然科学を指す標準語として定着している。
          「窮理」でも「格物」でもなく「分科」を選んだ明治の翻訳者は、
          近代科学が「真理を追う姿勢」ではなく「分野に分かれた体系」であることを
          直感的に見抜いていたと言えるだろう。
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
            <li>公議所日誌（1869年）国立国会図書館デジタルコレクション</li>
            <li>文部省雑誌（1875年）国立国会図書館デジタルコレクション</li>
            <li>福沢諭吉『訓蒙窮理図解』（1868年）国立国会図書館デジタルコレクション</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>山田俊弘「science の訳語の変遷」科学史研究</li>
            <li>William Whewell, <em>On the Language of Science</em> (1833)</li>
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
