import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "shakai-etymology",
  title: "「社会」の語源——神社の集まりから人間の共同体へ",
  description:
    "「社会」はもともと「神社の集まり」を意味する漢語だった。society の訳語として選ばれ、福沢諭吉の「人間交際」との競合を経て定着するまでの経緯をたどる。",
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
          「現代社会」「社会問題」「社会人」——「社会」は現代日本語で最もよく使われる語の一つだ。
          人間の集まりが作り出す構造的な共同体、その全体を指す語として定着して久しい。
          しかしこの語の出発点は、人間の共同体とは少し異なる場所にある。
          「社」とは神社のことであり、「会」とは集まりのことだ。
          「社会」はもともと、神を祀る祭りの場に人が集う光景を指していた。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          「社会」の原義——神社の集まり
        </h2>

        <p>
          「社」は古代中国において土地の神（社神）を祀る場を指した。
          村や地域の共同体は社を中心に結びついており、
          年に数回行われる社の祭礼には周辺の人々が集まった。
          この集まりを「社会」と呼んだのである。
        </p>

        <p>
          日本にも「社」の概念は伝わり、神社を中心とした地域の祭祀共同体という意味で使われた。
          「社会」という熟語自体は江戸時代にも存在していたが、
          現代語のように「人間の共同体一般」を指す語ではなく、
          あくまで「神社の集まり・祭りの場」という具体的な文脈で使われる語だった。
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
            「社会」の原義
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            社（やしろ・土地神の祭祀場）＋会（あつまり）
            <br />
            「神社を中心とした祭りの集まり」——特定の地域共同体の祭祀的な集会を指した。
            人間の共同体全般を抽象的に指す語ではなかった。
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
          society の語源
        </h2>

        <p>
          英語 society の起源はラテン語 <em>societas</em>（仲間・組合・同盟）にある。
          <em>socius</em>（仲間・同伴者）が語根で、「共に歩む者たち」という原義を持つ。
          ローマ法では商業的なパートナーシップ（組合）を指す用語でもあり、
          これが転じて「共同体・結社・社会」という広い意味を帯びるようになった。
        </p>

        <p>
          近代ヨーロッパにおいて society は、個人が集まって形成する人間の共同体、
          特に共通の法・習慣・文化を持つ集団という概念として確立した。
          自然状態から社会契約によって成立するもの——ロックやルソーが論じた
          「市民社会（civil society）」の概念がその典型だ。
          この抽象的な「人間の共同体」という概念を日本語に移す必要が生じたのが、明治初期だった。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          競合した訳語——「人間交際」と「社会」
        </h2>

        <p>
          society の訳語をめぐって、明治の知識人の間では複数の候補が競合した。
          なかでも注目すべきは福沢諭吉が用いた
          <strong style={{ color: "#e2dcd0" }}>「人間交際」</strong>という訳語だ。
          1875年の『文明論之概略』で福沢はこの語を使い、
          society を「人と人が交わり関わり合う場」として捉えた。
        </p>

        <p>
          「人間交際」は society の意味をかなり正確に表現している。
          「人間」は人の世・人の間を生きることを指し、「交際」は人々の交わりを指す。
          個人と個人の関係性の網の目として社会を捉えるならば、
          「人間交際」は的確な訳語だったかもしれない。
          しかし最終的にこの語は定着しなかった。
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
            society の訳語候補
          </p>
          <ul
            style={{
              fontSize: ".875rem",
              color: "#908a7a",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>社会——最終的に定着。西周ら明六社が普及</li>
            <li>人間交際——福沢諭吉が使用。個人間の関係性を強調</li>
            <li>仲間——共同体の構成員関係を強調</li>
            <li>交際——社交・人間関係の側面を強調</li>
            <li>会社——組合・結社の意。後に企業の意に特化</li>
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
          西周と明六社——「社会」の定着
        </h2>

        <p>
          「社会」を society の訳語として定着させたのは、西周をはじめとする明六社の知識人たちだ。
          1873年に森有礼が設立した明六社は、福沢諭吉・西周・加藤弘之・中村正直らを中心に、
          翌1874年から啓蒙誌『明六雑誌』を刊行した。
          この雑誌で「社会」が society の訳語として繰り返し使われたことが、普及の決定的な契機となった。
        </p>

        <p>
          なぜ「社会」が選ばれたのか。
          「社（祭祀の集まり）」という語には、人々が共通の目的のもとに集まるという含意があり、
          これが society の「共通の法・習慣のもとに成立する共同体」という意味と
          重なると判断されたのだろう。
          また漢字二文字の簡潔さ、そして「社」が持つ共同性のニュアンスが
          「人間交際」という四文字より扱いやすかったという実用的な理由もあったかもしれない。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          「会社」との分岐
        </h2>

        <p>
          興味深いのは、同じ「社」と「会」を逆順に並べた「会社」という語との関係だ。
          「会社」も明治期に company・corporation の訳語として定着した語で、
          当初は「人々が資本を出し合って作る結社・組合」という意味合いが強かった。
          「社会」と「会社」は、ほぼ同じ漢字を使いながら、
          片や人間の共同体全般を、片や営利的な法人組織を指す語として分岐していった。
        </p>

        <p>
          この分岐は偶然ではない。「社」には「祭祀の場・共同体」という含意があり、
          「会」には「集まり・集合」という含意がある。
          「社会」は「社（共同体）の会（まとまり）」として人間集団の総体を指し、
          「会社」は「会（集まり）の社（場・組織）」として集合的な事業体を指した。
          同じ字の順番が変わるだけで、指し示す世界がまるで変わる——
          これは漢字語の造語法が持つ柔軟性の一例でもある。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          神社から共同体へ——意味の抽象化
        </h2>

        <p>
          「社会」が歩んだ変容は、意味の「抽象化」と呼べるものだ。
          具体的な場（神社の集まり）を指していた語が、
          抽象的な概念（人間の共同体全般）を指す語へと拡張された。
          この抽象化は、翻訳という行為が語に施す操作の典型的なパターンの一つである。
        </p>

        <p>
          「社会」という語は今、学術論文から小学校の授業まで、
          日本語のあらゆる場面で使われる基礎語彙として定着している。
          その起源が神社の祭りにあることを知る人は少ない。
          明治の知識人たちが「神社の集まり」という古い語に
          西洋近代の「共同体」概念を吹き込んだことで、
          この語は新しい時代の器として生まれ変わった。
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
            <li>明六雑誌（1874-75年）国立国会図書館デジタルコレクション</li>
            <li>福沢諭吉『文明論之概略』（1875年）国立国会図書館デジタルコレクション</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
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
