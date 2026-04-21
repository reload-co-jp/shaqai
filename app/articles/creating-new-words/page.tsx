import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "creating-new-words",
  title: "未知の概念を言葉として創るということ",
  description:
    "対応する概念のない言語に、まったく新しい言葉を生み出すとはどういうことか。翻訳家たちが直面した、言語創造の根本的な問い。",
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
            翻訳の最も困難な仕事は、対応語のない概念を訳すことだ。
            既存の語彙で近似できる概念なら辞書を引けばよい。
            しかし、相手の言語に存在しない概念——
            それを訳すことは、言語そのものを拡張する行為に他ならない。
          </p>

          <p>
            明治の翻訳家たちはこの課題に正面から向き合った。
            彼らが作り出した造語の多くは、当時の日本語話者にとって
            まったく聞き慣れない異物だった。にもかかわらず、それらの語は
            次第に市民権を得て、今では誰もが当たり前のように使っている。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            西周の造語術
          </h2>

          <p>
            幕末の蘭学者から明治の思想家となった西周（にし・あまね）は、
            近代日本語に最も多くの哲学・学術用語を導入した人物の一人だ。
            「哲学」「概念」「命題」「主観」「客観」「帰納」「演繹」——
            これらはすべて西周の造語、あるいは彼が導入した語だとされる。
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
              「哲学」の造語プロセス
            </p>
            <p
              style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}
            >
              philosophyを訳するにあたって、西周はまずその語源に立ち返った。
              ギリシャ語のphilosophia（知恵への愛）という意味を踏まえ、
              「明哲（賢明さ）」から「哲」、「学問」から「学」を取って「哲学」とした。
              この造語は原語の精神を的確に捉えており、
              後の明治政府も公式に採用することになる。
            </p>
            <p
              style={{
                fontSize: ".75rem",
                color: "#5e5848",
                marginTop: ".75rem",
              }}
            >
              参考：福田眞人「明治翻訳語のおもしろさ」
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
            漢字という造語のリソース
          </h2>

          <p>
            明治の翻訳家たちにとって幸運だったのは、
            漢字という豊富な意味素材が手元にあったことだ。
            漢字はそれ自体が意味を持つ表意文字であるため、
            組み合わせによって無数の新語を作り出せる。
          </p>

          <p>
            たとえば「科学（science）」という語は、
            「科（種別・分類）」と「学（学問）」を組み合わせることで、
            「分類された体系的な学問」という意味を作り出している。
            「経済（economy）」は「経世済民」（世を治め民を救う）という
            古典的な政治理念を短縮した語が転用されたものだ。
          </p>

          <p>
            こうした漢字の組み合わせ原理は、翻訳語の大量生産を可能にした。
            英語など表音文字を使う言語では、新概念に対して音訳するか
            完全な新造語を作るかしかないが、漢字文化圏では
            既存の意味ある部品を組み合わせて半ば透明な新語を作れる。
            これは翻訳語作成における漢字文化圏の大きなアドバンテージだった。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            失敗した訳語たち
          </h2>

          <p>
            すべての造語が成功したわけではない。
            歴史の中で消えていった訳語候補も多数ある。
            たとえば「freedom」の訳として「自恣」「放縦」なども提案されたが、
            それらのネガティブなニュアンスが災いして定着しなかった。
          </p>

          <p>
            興味深いのは、どの訳語が生き残るかを事前に予測するのが
            難しいという点だ。語の正確さや論理的な妥当性よりも、
            使いやすさ・語感・広まり方・権威ある人物による採用といった
            偶然の要因が勝敗を分けることも少なくなかった。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            言葉を作ることは思想を作ること
          </h2>

          <p>
            翻訳家が新しい語を作るとき、彼らは単に言語的な作業をしているのではない。
            どのような漢字を組み合わせ、どのような側面を概念の本質として切り取るか——
            その選択は、その概念がどのように理解されるかを大きく左右する。
          </p>

          <p>
            「競争（competition）」という訳語を作った翻訳家は、
            この概念を「争い」として捉えた。もし「競合」「競遂」などが定着していたら、
            日本語話者が「競争」概念を受け取る仕方は少し変わっていたかもしれない。
            言語は思考の容器であると同時に、思考を方向づける枠組みでもある。
          </p>

          <p>
            未知の概念を言葉として創るという行為は、
            思想を一つの言語体系から別の言語体系へと移植する
            文化的・知的な営みだ。明治の翻訳家たちはその意味で、
            単なる翻訳者ではなく、思想の媒介者であり創造者だった。
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
              <li>
                福田眞人「明治翻訳語のおもしろさ」（名古屋大学言語文化研究会）
              </li>
              <li>柳父章『翻訳語成立事情』岩波新書</li>
              <li>吉沢典男・石綿敏雄『外来語の語源』角川書店</li>
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
