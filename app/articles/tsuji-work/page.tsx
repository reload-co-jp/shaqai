import { FC } from "react"
import { BreadcrumbJsonLd } from "components/elements/breadcrumb"

export const metadata = {
  title: "通詞のしごと",
  description:
    "出島で働いた通詞は、ただ外国語を訳す人ではなかった。交渉、検査、風説書、蘭学の橋渡しまで担った、その多面的なしごとをたどる。",
  alternates: {
    canonical: "https://shaqai.reload.co.jp/articles/tsuji-work/",
  },
  openGraph: {
    type: "article",
    title: "通詞のしごと — 翻訳語辞典 Shaqai",
    description:
      "出島で働いた通詞は、ただ外国語を訳す人ではなかった。交渉、検査、風説書、蘭学の橋渡しまで担った、その多面的なしごとをたどる。",
    url: "https://shaqai.reload.co.jp/articles/tsuji-work/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const Page: FC = () => {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "通詞のしごと",
    description:
      "出島で働いた通詞は、ただ外国語を訳す人ではなかった。交渉、検査、風説書、蘭学の橋渡しまで担った、その多面的なしごとをたどる。",
    publisher: {
      "@type": "Organization",
      name: "翻訳語辞典 Shaqai",
      logo: {
        "@type": "ImageObject",
        url: "https://shaqai.reload.co.jp/icon.svg",
      },
    },
    url: "https://shaqai.reload.co.jp/articles/tsuji-work/",
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "/" },
          { name: "読み物", url: "/articles/" },
          {
            name: "通詞のしごと",
            url: "/articles/tsuji-work/",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #2a2518",
          }}
        >
          <p
            style={{
              fontSize: ".75rem",
              color: "#5e5848",
              marginBottom: ".75rem",
              letterSpacing: ".05em",
            }}
          >
            読み物
          </p>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#e2dcd0",
              lineHeight: 1.4,
              marginBottom: "1rem",
              letterSpacing: ".02em",
            }}
          >
            通詞のしごと
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#908a7a",
              lineHeight: 1.8,
              borderLeft: "3px solid #c8a96e",
              paddingLeft: "1rem",
            }}
          >
            出島で働いた通詞は、ただ外国語を訳す人ではなかった。交渉、検査、風説書、
            蘭学の橋渡しまで担った、その多面的なしごとをたどる。
          </p>
        </div>

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
            「通詞」と聞くと、まず思い浮かぶのは通訳者の姿だろう。だが、江戸時代の長崎で
            働いた通詞は、現代の意味での通訳よりずっと広い役割を担っていた。彼らは外国人との
            会話を取り次ぐだけでなく、貿易実務を処理し、外交の現場に立ち会い、海外情報を
            文書化し、ときには西洋の学問を日本語に移し替えるところまで引き受けていた。
          </p>

          <p>
            翻訳語の歴史を考えるとき、通詞はとても重要な存在である。明治の翻訳家たちが
            本格的に新語を生み出す以前に、外国語と日本語のあいだを日常的につないでいた
            実務者がいたからだ。通詞たちの仕事は、翻訳語が生まれるための土台を整える
            前史でもあった。
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
              通詞とは何か
            </p>
            <p style={{ fontSize: ".875rem", color: "#908a7a", lineHeight: 1.8 }}>
              通詞は、長崎奉行の配下でオランダ人や中国人との貿易・渉外事務を担当した
              通訳官兼商務官である。阿蘭陀通詞と唐通事に分かれ、幕末には大通詞・小通詞・
              稽古通詞など複数の階級が整えられていた。
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
            ただ訳すだけではない
          </h2>

          <p>
            通詞の第一の仕事が、ことばの仲介だったのは間違いない。商館長との面談、
            奉行所でのやりとり、来航した船の乗組員との応対など、日本人と外国人が向き合う場面では
            必ず通詞が必要だった。しかも相手は、日常会話だけでなく商取引、外交、医療、
            天文といった専門的な話題を持ち込んでくる。通詞には、高度な語学力と場面判断が求められた。
          </p>

          <p>
            しかし、彼らの役割は通訳だけで終わらない。オランダ船が長崎に入港すると、
            通詞は船内の臨検に立ち会い、乗船人員や積荷を確認し、禁制品や不審物がないかを
            確かめる実務にも関わった。つまり通詞は、言語の専門家であると同時に、
            貿易管理の現場を支える役人でもあったのである。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            情報を聞き取り、書き留める
          </h2>

          <p>
            通詞の仕事でもっともおもしろいものの一つが、風説書の作成だ。来航した
            オランダ船の商館長や船長から、海外で起きている出来事を聞き取り、日本語の文書として
            まとめる。鎖国下の日本にとって、これは世界情勢を知る数少ない窓口だった。
          </p>

          <p>
            ここでは単なる逐語訳では足りない。相手の話を理解し、日本側の行政文書として通る形に
            整え、必要な情報を選び、すばやく報告書に仕立てなければならない。通詞は、
            口頭のことばをその場で日本語へ渡すだけでなく、情報を編集し、文書に変換する
            ライター兼翻訳者でもあった。
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
              風説書で扱われた情報
            </p>
            <ul
              style={{
                fontSize: ".875rem",
                color: "#908a7a",
                lineHeight: 2,
                paddingLeft: "1.25rem",
              }}
            >
              <li>ヨーロッパ諸国の戦争や政変</li>
              <li>アジア各地の貿易事情</li>
              <li>航路や港の安全情報</li>
              <li>海外で流行した技術や知識の断片</li>
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
            学問の入口にいた人たち
          </h2>

          <p>
            通詞の蓄積した語学知識は、そのまま蘭学の基盤にもなった。はじめの通詞たちは
            必ずしも十分なオランダ語力を備えていたわけではなく、近世初期にはポルトガル語が
            仲介言語として使われることも多かったという。けれども、長い年月のなかで語学力は
            磨かれ、通詞の家々からは辞書編纂や翻訳に関わる人材が現れるようになる。
          </p>

          <p>
            吉雄耕牛、本木昌栄、志筑忠雄、馬場佐十郎といった名前がよく知られている。
            彼らは単に会話を取り次ぐだけでなく、医学書や天文学書に向き合い、
            新しい知識を理解できる日本語へと移し替えていった。通詞は、異国の情報を運ぶ
            「耳」と「口」であると同時に、それを日本語の知として定着させる「手」でもあった。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            幕末に広がった仕事
          </h2>

          <p>
            幕末になると、通詞の仕事はさらに複雑になる。対応すべき相手はオランダ人だけではなくなり、
            英語やフランス語、ロシア語など新しい言語への対応が急速に必要になった。外交交渉の規模も
            大きくなり、長崎の通詞たちは江戸や各地へ派遣され、開港場や軍事・外交の現場でも
            活躍するようになる。
          </p>

          <p>
            ここで通詞の仕事は、江戸時代の貿易実務から、近代国家の対外コミュニケーションへと
            接続していく。維新後、翻訳や通訳の制度は新しい形へ移っていくが、その基礎技術は
            長崎の通詞たちが長年の実務で鍛え上げたものだった。
          </p>

          <h2
            style={{
              fontSize: "1.125rem",
              color: "#e2dcd0",
              marginTop: ".5rem",
              letterSpacing: ".02em",
            }}
          >
            翻訳語の前にある仕事
          </h2>

          <p>
            翻訳語は、机上で漢字を組み合わせれば突然生まれるわけではない。まず外国語に触れ、
            何が重要な概念なのかを見極め、その内容を日本語でどう説明できるかを考える人が必要だった。
            通詞はまさに、その最前線にいた。聞き取り、言い換え、記録し、必要なら別の語で説明する。
            そうした日々の積み重ねが、のちの本格的な翻訳や造語を可能にしたのである。
          </p>

          <p>
            だから通詞のしごとは、単なる「昔の通訳」の話ではない。翻訳語辞典の視点から見れば、
            それは日本語が外の世界と接続される現場そのものだった。通詞たちは、ことばを移すだけでなく、
            異文化を日本語のなかに住めるものへ整えていく、最初の編集者でもあった。
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
              <li>コトバンク「通詞」</li>
              <li>コトバンク「オランダ通詞」</li>
              <li>長崎市「阿蘭陀通詞中山家墓地」</li>
              <li>長崎市「阿蘭陀通詞加福家墓地」</li>
              <li>ナガジン！「長崎が舞台の小説を読んでみた」第3回</li>
              <li>片桐一男『阿蘭陀通詞』講談社学術文庫</li>
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
      </div>
    </>
  )
}

export default Page
