import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "bunka-etymology",
  title: "「文化」の語源——畑を耕すことから魂を耕すことへ",
  description:
    "「文化」はラテン語 cultura（耕作）を起源とし、キケロが「魂の耕作」と呼んだことで精神的な意味を得た。同名の漢語が古典中国にすでに存在していたことが、明治の翻訳を大いに助けた経緯をたどる。",
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
          「文化の違い」「文化的な生活」「文化祭」——現代日本語で「文化」は多義的に使われる語だ。
          ある社会が共有する慣習・芸術・価値観の総体を指すこともあれば、
          精神的な豊かさや知的な洗練を意味することもある。
          この語はもとをたどれば、農地を耕す身体的な労働を指すラテン語に行き着く。
          そして日本への移植には、漢字文化圏にすでに存在した古典語が橋渡し役を果たした。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          cultura——土を耕すことから始まった語
        </h2>

        <p>
          culture の語源はラテン語 <em>cultura</em>（耕作・農業・栽培）だ。
          動詞 <em>colere</em>（耕す・育てる・世話をする）から派生し、
          もともとは文字どおり農地を耕し植物を育てる行為を指していた。
          英語の agriculture（農業）の <em>agri-</em>（畑）＋ <em>cultura</em> もこの系譜にある。
        </p>

        <p>
          この語が農業の比喩から人間の精神領域へと踏み込んだのは、
          ローマの哲学者・弁論家キケロ（紀元前106–43年）の一文による。
          キケロは著作『トゥスクルム荘対談集』（Tusculanae Disputationes, 紀元前45年頃）の中で、
          <em>cultura animi philosophia est</em>——「哲学は魂の耕作である」と述べた。
          農地を耕して豊かな実りをもたらすように、哲学によって人間の精神を耕し育てる、という比喩だ。
          この一文が、cultura に「精神的な陶冶・知的な洗練」という意味を与えた起点とされる。
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
            cultura の語源
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            ラテン語 colere（耕す・世話をする）→ cultura（耕作・農業）
            <br />
            キケロ「cultura animi」（魂の耕作）→ 精神的陶冶の意味を獲得
            <br />
            フランス語 culture → 英語 culture → 明治期の訳語「文化」
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
          近代 culture の成立——啓蒙思想と人類学
        </h2>

        <p>
          近代的な意味での culture が成立するのは17〜18世紀のヨーロッパだ。
          啓蒙思想の時代に、人間社会の発展段階を「野蛮」から「文明・文化」へと向かう過程として捉える思想が生まれ、
          culture は「人間が自然から区別された精神的・知的な営みの総体」を指すようになった。
        </p>

        <p>
          19世紀になると人類学の誕生とともに culture の意味はさらに広がる。
          エドワード・タイラーは1871年の著作『原始文化』（Primitive Culture）の冒頭で、
          culture を「知識・信仰・芸術・法・道徳・慣習、その他社会の成員として人間が獲得した能力と習慣の複合的総体」と定義した。
          この定義は現代の社会科学に引き継がれており、
          culture が「ある社会集団に共有された生活様式の総体」を指す今日的用法の出発点となった。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          漢語「文化」——古典中国にすでにあった語
        </h2>

        <p>
          明治の翻訳者たちが culture の訳語を探したとき、
          一つの大きな幸運があった。「文化」という語が、古典漢語にすでに存在していたのだ。
        </p>

        <p>
          古典中国語の「文化」は「文によって化（か）する」、
          すなわち「文徳・礼楽・教養によって人を感化・教化すること」を意味した。
          「武力によって従わせる（武化）」と対置される概念として、
          詩書礼楽を通じた徳による統治・感化という儒学的な政治理念を表す語だった。
          前漢の劉向の著『説苑』（紀元前1世紀頃）に
          「聖人之治化也、必刑政相参焉。太上以徳教、其次以礼、其次以文化」と見え、
          「文による感化」を武力や刑罰より上位の統治手段として位置づけている。
        </p>

        <p>
          この古典的な「文化」は日本にも伝わり、江戸時代まで「文徳による感化」という意味で使われていた。
          ただし日常的に広く使われる語ではなく、主に儒学的な政治・教育論の文脈に限られていた。
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
            古典漢語「文化」の字義
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            文（文徳・礼楽・教養・文字・芸術）＋化（感化・教化・変化・変容）
            <br />
            「武力でなく文徳によって人を変化させること」
            <br />
            儒学的な徳治・礼楽による感化の概念。culture の近代的意味と方向が重なった。
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
          明治の翻訳——古典語の意味転換
        </h2>

        <p>
          明治期に culture の訳語として「文化」が選ばれたとき、
          この語は古典的な意味を保ちながら、同時に近代的な culture の含意を受け取った。
          「文徳による感化・変容」という古典語の核心は、
          「精神的・知的・芸術的な人間の営みの総体」という近代的 culture の定義と
          十分に重なり合うものだった。
        </p>

        <p>
          明六社の知識人——西周・森有礼らが1874〜75年の『明六雑誌』で「文化」を近代的な意味で使い始め、
          1875年の福沢諭吉『文明論之概略』もこの語の普及に貢献した。
          ただし福沢はむしろ「文明」を中心概念として使い、
          civilization（文明）と culture（文化）の区別を意識しながら論じていた。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          文化と文明——二語の境界線
        </h2>

        <p>
          「文化」と「文明」は隣接する概念だが、明治以来、日本語はこの二語を使い分けてきた。
          「文明」（civilization の訳語）は社会・制度・技術の発展という物質的・外形的な側面に重心を置き、
          「文化」は精神・芸術・価値観・生活様式という内面的・精神的な側面に重心を置く傾向がある。
        </p>

        <p>
          この区別はドイツ語圏の思想とも共鳴している。
          19世紀ドイツでは <em>Zivilisation</em>（文明・外面的な洗練）と
          <em>Kultur</em>（文化・内面的・精神的な価値）を対比的に論じる伝統があり、
          その影響が明治以降の日本の思想界にも流入した。
          「文明開化」が物質的・制度的な近代化を指すのに対し、
          「文化」が精神的な豊かさや固有の慣習・芸術を指す用法はこの系譜にある。
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
            文化と文明の対比
          </p>
          <ul
            style={{
              fontSize: ".875rem",
              color: "#908a7a",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>文化（culture / Kultur）—— 精神・芸術・価値観・生活様式の総体</li>
            <li>文明（civilization / Zivilisation）—— 社会・制度・技術の発展段階</li>
            <li>「文明開化」は外形的近代化、「文化的生活」は精神的豊かさを指す用法に対応</li>
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
          語源が照らすもの
        </h2>

        <p>
          「文化」という語の来歴をたどると、二本の糸が一点で交わる構造が見える。
          一方はローマの農業語から哲学的比喩として育った西洋語 culture、
          もう一方は文徳による感化という儒学的政治理念を担った漢語「文化」だ。
          この二つが明治という交点で出会い、現代日本語の「文化」が生まれた。
        </p>

        <p>
          キケロが「魂の耕作」と呼んだものと、
          儒学が「文による感化」と呼んだものは、方法も文脈も異なるが、
          どちらも「人間が外的な力ではなく内面的な営みによって変容する」という方向を向いていた。
          その方向の一致が、まったく異なる文化的文脈から来た二語を一つの訳語に収束させた。
        </p>

        <p>
          今日、「文化」は中国語（文化 <em>wénhuà</em>）・朝鮮語（문화 <em>munhwa</em>）でも広く使われ、
          東アジア全域の知的語彙に定着している。
          農地の耕作から始まった語が魂の耕作へ転じ、
          さらに東アジアの文徳の概念と結びついて普遍的な語になるまでの旅程は、
          言葉がいかに文化圏を越えて変容しながら生き続けるかを示している。
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
            <li>キケロ『トゥスクルム荘対談集』（紀元前45年頃）</li>
            <li>エドワード・タイラー『原始文化』（1871年）</li>
            <li>福沢諭吉『文明論之概略』（1875年）国立国会図書館デジタルコレクション</li>
            <li>明六雑誌（1874–75年）国立国会図書館デジタルコレクション</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>劉向『説苑』（前漢）</li>
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
