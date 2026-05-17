import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "tetsugaku-etymology",
  title: "「哲学」の語源——知を愛することから明智の学へ",
  description:
    "「哲学」はギリシャ語 philosophia（知を愛すること）の訳語として、西周が1874年に創出した。「希哲学」「愛智学」との競合を経て定着するまでの経緯と、「哲」という字の選択に込められた意味をたどる。",
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
          「哲学的な問い」「人生の哲学」「哲学書を読む」——現代日本語で「哲学」は、
          存在・知識・倫理をめぐる根本的な問いを追究する学問として広く定着している。
          しかしこの語は、幕末から明治にかけて西周（にし・あまね）が新たに生み出した造語であり、
          その誕生には「知を愛する」というギリシャ語の語源と、漢字文化圏の知的伝統との間の緊張が刻まれている。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          philosophia——知を愛することの学
        </h2>

        <p>
          「哲学」の訳元である philosophy は、ギリシャ語 <em>philosophia</em>（φιλοσοφία）に由来する。
          <em>philos</em>（愛する・友とする）と <em>sophia</em>（知恵・叡智）の合成語で、
          字義どおりに訳せば「知恵を愛すること」となる。
        </p>

        <p>
          この語がギリシャで広まったのは紀元前5世紀ごろのことだ。
          ピタゴラスが「自分は知者（sophos）ではなく、知を愛する者（philosophos）にすぎない」と述べたという伝承があり、
          知の完全な所有を神に帰し、人間は知への愛と探究によってのみ近づけるとする姿勢が語に込められていた。
          プラトンやアリストテレスの著作によって philosophia は「存在・知・善をめぐる合理的な探究」の総称となり、
          ラテン語 philosophia を経て西欧全域に広まった。
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
            philosophy の語源
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            ギリシャ語 philosophia（φιλοσοφία）
            <br />
            philos（愛する）＋ sophia（知恵）→「知恵を愛すること」
            <br />
            ラテン語 philosophia → 英語 philosophy。語そのものが「知への謙虚な姿勢」を体現している。
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
          幕末の窮理学——哲学以前の訳語
        </h2>

        <p>
          江戸後期から幕末にかけて、蘭学者たちはオランダ語 <em>wijsbegeerte</em>（知恵への愛）や
          <em>philosophie</em> を通じて西洋哲学に接した。
          この時期に使われた訳語は主に「窮理学」や「究理学」だった。
          「理をきわめる学問」という意味で、朱子学の「格物致知」——物事の道理を徹底的に追究することで知に達する——という概念と響き合う訳語だった。
        </p>

        <p>
          ただし「窮理学」は自然哲学（natural philosophy）、すなわち今日の自然科学に近い領域を指すことが多く、
          形而上学・倫理学・認識論といった哲学の主要部門を包含する訳語としては必ずしも適切ではなかった。
          philosophy の幅広い意味圏を一語で表す訳語は、明治に入るまで確立されていなかった。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          西周の造語——「哲学」の誕生
        </h2>

        <p>
          「哲学」を生み出したのは西周（1829–1897）だ。津和野藩出身の西は、幕府の命でオランダに留学し（1862–65年）、
          ライデン大学でコント実証主義やミル功利主義などの西洋哲学を学んだ。帰国後、
          彼は日本人向けに西洋の学問体系を説く試みを続け、その集大成として1874年（明治7年）に
          『百一新論』を刊行した。この書に、「哲学」の初出が確認される。
        </p>

        <p>
          西が「哲学」を選んだ背景には、単純な意訳以上の苦心があった。
          philosophy の字義「知恵を愛すること」を漢字に直訳するなら、
          「愛智学」または「希哲学」（「哲＝知恵」を希求する学）のような語になる。
          実際、西は初期の構想段階で「希哲学」という語も試みていたと言われる。
          しかし最終的に「哲学」という簡潔な二文字を選んだ。
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
            philosophy の訳語候補
          </p>
          <ul
            style={{
              fontSize: ".875rem",
              color: "#908a7a",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>窮理学・究理学 —— 幕末からの訳語。自然哲学寄りで意味が狭い</li>
            <li>希哲学 —— 「哲（知恵）を希求する学」。西周の初期案とされる</li>
            <li>愛智学 —— 「知を愛する」の直訳。字義は正確だが長い</li>
            <li>哲学 —— 西周が『百一新論』（1874年）で採用。最終的に定着</li>
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
          「哲」という字の選択
        </h2>

        <p>
          「哲」は古典漢語で「かしこい・物事の道理に通じた・明智な」を意味し、
          「聖哲」「先哲」「哲人」など、深い知恵を体現する人格を指す語に用いられてきた。
          「哲学」は「明智な者の学問」あるいは「明智に至るための学問」という含意を持ち、
          単なる知識の習得ではなく、人格的・思想的な深みを志向する営みとして哲学を位置づけている。
        </p>

        <p>
          この字の選択は、philosophy の語源が持つ「知への謙虚な愛」というニュアンスを、
          漢字文化圏の「哲人」概念——徳と知を兼ね備えた者——に接続する試みだったとも読める。
          「知を愛する」（philos + sophia）を「明智の学」（哲 + 学）に変換することで、
          西は西洋哲学の精神を東アジアの知的文脈に着地させようとした。
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
            「哲学」の字義
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            哲（かしこい・道理に通じた・明智な）＋学（学問・まなぶ）
            <br />
            「明智に至るための学問」「賢者の学」という含意。
            <br />
            sophia（知恵）→ 哲、philos（愛する）→ 哲学という営みへの方向性、と対応させた造語。
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
          定着の経緯——東京大学と明六社
        </h2>

        <p>
          「哲学」が学術語として広まったのは、1870年代後半から1880年代にかけてのことだ。
          1877年（明治10年）に開設された東京大学が「哲学」を学科名として採用したことは、
          語の普及に大きく寄与した。西洋式の大学制度が哲学という語を公式に用いることで、
          知識人層にこの訳語が浸透していった。
        </p>

        <p>
          また西周が参加した明六社（1873年設立）の活動も重要だ。
          明六社は雑誌『明六雑誌』を通じて啓蒙思想を広める場であり、
          西はそこで philosophy の訳語として「哲学」を積極的に使い続けた。
          福沢諭吉・森有礼ら同時代の知識人との議論を経て、
          「哲学」は学術コミュニティの共通語として定まっていった。
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
          「哲学」という語を通じて、二つの知的伝統の出会いが見える。
          ギリシャ語 philosophia が「知を完全には所有できない存在としての人間が、知恵に向かって歩む姿勢」を語源に持つように、
          「哲学」もまた「哲（明智）」という到達すべき理想を掲げつつも、
          それが「学（学問・探究）」という継続的な営みであることを示している。
        </p>

        <p>
          西周が「哲学」を造語してから150年。今日、この語は日本語だけでなく、
          中国語（哲学 <em>zhéxué</em>）・朝鮮語（철학 <em>cheolhak</em>）でも広く使われており、
          東アジア全域の学術語として定着した。一人の幕末の留学生が漢字二文字に込めた翻訳の選択が、
          地域の知的語彙を形作った好例といえる。
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
            <li>西周『百一新論』（1874年）国立国会図書館デジタルコレクション</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>大久保利謙編『西周全集』宗高書房</li>
            <li>山本正身「西周の哲学概念の形成」哲学年報</li>
            <li>丸山真男・加藤周一『翻訳と日本の近代』岩波新書</li>
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
