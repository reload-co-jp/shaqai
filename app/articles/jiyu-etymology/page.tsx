import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "jiyu-etymology",
  title: "「自由」の語源——わがままから権利へ",
  description:
    "「自由」はもとは仏教語で、「自らの思いのまま」というやや否定的な含意を持っていた。それが liberty・freedom の訳語として政治的権利の言葉に生まれ変わるまでの経緯をたどる。",
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
          「自由」は今や日本語のなかで最も普遍的な価値語の一つだ。
          憲法に刻まれ、運動の旗印となり、詩や歌の題材になってきた。
          しかしこの語は、近代以前の日本語においてそれほど崇高な意味を持っていたわけではない。
          むしろ「わがまま」「勝手気まま」に近い、どちらかといえば否定的なニュアンスを帯びた言葉だった。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          仏教語としての「自由」
        </h2>

        <p>
          「自由」の漢語としての起源は仏教にある。「自らに由る」——すなわち外部の規範や他者の意志によらず、
          自分の内側から発することを意味した。
          仏教の文脈では、修行によって煩悩の縛りから解き放たれた境地を指す場合もあったが、
          日常語としては「自分勝手に振る舞うこと」という含意で使われることが多かった。
        </p>

        <p>
          江戸時代の用例を見ると、「自由にする」は「好き勝手にする」に近く、
          どちらかといえば秩序や礼節への配慮を欠いた行いとして否定的に用いられることもあった。
          この語が「人間の本源的な権利」を意味するようになるのは、
          明治の翻訳家たちが liberty・freedom という西洋語と出会ってからのことである。
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
            「自由」の原義
          </p>
          <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
            自（みずから）＋由（よる・由来する）
            <br />
            「自らに由る」——自分の内から発すること。
            仏教語では解脱・自在の境地を指すこともあったが、
            日常語では「勝手気まま」に近いニュアンスも持った。
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
          liberty と freedom——二つの原語
        </h2>

        <p>
          「自由」が訳語として充てられた西洋語は主に二つある。
          英語の <em>freedom</em> とラテン語・フランス語系の <em>liberty</em>（仏: <em>liberté</em>）だ。
          両者は近い意味を持つが、ニュアンスに差がある。
        </p>

        <p>
          <em>Freedom</em> は古英語 <em>frēodōm</em> に由来し、
          束縛・強制・隷属からの解放という状態を広く指す。
          <em>Liberty</em> はラテン語 <em>libertas</em> から来ており、
          特に市民的・政治的な自由——専制支配に対する抵抗、法のもとでの権利——という含意が強い。
          フランス革命の標語「自由・平等・博愛（Liberté, Égalité, Fraternité）」が
          <em>liberté</em> を使っていることからも、その政治的な重みが伝わるだろう。
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
            競合した訳語候補
          </p>
          <ul
            style={{
              fontSize: ".875rem",
              color: "#908a7a",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>自由——最終的に定着。仏教語を転用</li>
            <li>自恣——思いのまま。否定的含意が強く定着せず</li>
            <li>放縦——束縛なく振る舞うこと。規律のなさを含意</li>
            <li>自在——自由自在の略。やや抽象的</li>
            <li>自主——自らを主とすること。独立の意に近い</li>
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
          福沢諭吉と「自由」の導入
        </h2>

        <p>
          「自由」を liberty・freedom の訳語として積極的に使い始めた一人が福沢諭吉だ。
          1866年の『西洋事情』では西洋の政治・社会制度を紹介するなかで「自由」を用い、
          1872年以降の『学問のすゝめ』ではさらに広く普及させた。
          福沢は「一身の独立」「一国の独立」という概念と自由を結びつけ、
          個人が自律的に判断・行動できることを近代社会の根幹に置いた。
        </p>

        <p>
          ただし福沢は「自由」という語に慎重でもあった。
          「自由」が「わがまま」と混同されることを恐れ、
          節度ある自由——他者の自由を侵さない範囲での自律——という文脈を丁寧に添えた。
          この姿勢は、語が持つ旧来の否定的ニュアンスを意識したものだったといえる。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          中江兆民と『民約訳解』
        </h2>

        <p>
          「自由」の政治的意味を決定的に定着させたのは中江兆民だ。
          「東洋のルソー」と称された兆民は、1882年にルソーの『社会契約論』を漢文体で翻訳した
          『民約訳解』を刊行した。原題の <em>Du Contrat Social</em> に含まれる
          <em>liberté</em>（自由）をめぐる思想を日本語に移すにあたり、
          兆民は「自由」という語を中心に据えた。
        </p>

        <p>
          兆民の訳文は単純な字義の移し替えではなかった。
          儒学的な語法と西洋近代の概念を接合させ、
          「自由とは恣意的な行動ではなく、社会契約に基づいて保障される権利である」という
          ルソーの思想を日本語の文脈に根付かせようとした。
          この翻訳が自由民権運動の思想的基盤となり、「自由」は政治運動の核心語として広まっていく。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          自由民権運動と語の定着
        </h2>

        <p>
          1870〜80年代の自由民権運動は、「自由」という語を政治の前面に押し出した。
          板垣退助らが結成した自由党（1881年）はその名に「自由」を冠し、
          国会開設・憲法制定・地租軽減を求める運動の旗印とした。
          語が運動の名前になることで、「自由」は抽象的な哲学概念から
          人々が要求し、場合によっては命を懸ける具体的な政治目標へと変わった。
        </p>

        <p>
          政府側はこの語の影響力を警戒した。1875年の讒謗律・新聞紙条例、
          1887年の保安条例など、言論・集会を制限する法律が相次いで制定されたのは、
          「自由」という語をめぐる思想の拡散を封じ込めようとした側面もある。
          語が弾圧される対象になったこと自体が、その語の力を証明している。
        </p>

        <h2
          style={{
            fontSize: "1.125rem",
            color: "#e2dcd0",
            marginTop: ".5rem",
            letterSpacing: ".02em",
          }}
        >
          「わがまま」から「権利」へ——意味の転換
        </h2>

        <p>
          「自由」が歩んだ意味変容の軌跡は、翻訳語の力を象徴的に示している。
          江戸時代まで「勝手気まま」に近かった語が、
          明治の翻訳家・思想家たちの手によって「人間の本源的な権利」を意味する語に生まれ変わった。
          この転換は単なる翻訳技術の問題ではなく、
          「人は生まれながらに自由である」というルソーやロックの思想が
          日本語の語彙体系に流入した痕跡である。
        </p>

        <p>
          「自由」という二文字は今、憲法第十九条（思想・良心の自由）から第二十一条（表現の自由）まで、
          日本の基本法に繰り返し登場する。
          仏教語として生まれ、わがままと呼ばれ、翻訳語として鍛え直され、
          運動の言葉として血を吸い、やがて憲法の条文に収まった——この語の歩みは、
          明治日本が西洋近代をどのように咀嚼したかの縮図でもある。
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
            <li>中江兆民『民約訳解』（1882年）国立国会図書館デジタルコレクション</li>
            <li>柳父章『翻訳語成立事情』岩波新書</li>
            <li>松本三之介『明治思想における伝統と近代』東京大学出版会</li>
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
