import { FC } from "react"
import { ArticlePage } from "components/elements/article-page"
import { createArticleMetadata } from "lib/article-page"

const article = {
  id: "seinen-etymology",
  title: "「青年」の語源——若者から近代の担い手へ",
  description:
    "「青年」は古くからあった自然な日本語ではなく、明治期に Young Men の訳語として広まった近代語だった。「青」が持つ若さと志の感覚、YMCA、学生文化、雑誌メディアを通じて、若者が社会の主体として名づけられる過程をたどる。",
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
          「青年期」「青年団」「青年の主張」——現代日本語の「青年」は、
          子どもではないが、まだ完全な大人でもない若い世代を指す語として定着している。
          しかしこの語は、古くから自然に使われてきた日常語ではない。
          明治期、西洋由来の youth / young men を訳す中で、
          若者を近代社会の主体として名づける言葉になった。
        </p>

        <h2 style={h2Style}>「青年」以前の若者</h2>

        <p>
          近世以前の日本にも、若い人を指す語は多くあった。
          「若者」「若衆」「若い衆」「若輩」などである。
          ただしそれらは、年齢そのものより、家・村・職能・身分の中での位置を示すことが多かった。
          若者は、家を継ぐ前の者、奉公中の者、村の年齢集団に属する者として理解された。
        </p>

        <p>
          そこには、現代的な意味での「青年期」——
          学び、悩み、理想を抱き、社会参加へ向かう人生段階——という発想はまだ薄かった。
          明治になると、学校制度、兵役、キリスト教運動、雑誌文化が広がり、
          若い世代をひとつの社会的カテゴリーとして語る必要が生まれる。
          その時代に登場したのが「青年」だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「青年」以前の語</p>
          <ul
            style={{
              ...noteTextStyle,
              paddingLeft: "1.25rem",
            }}
          >
            <li>若者 —— 若い人。村や家の中での年齢集団</li>
            <li>若衆 —— 元服前後の若い男性。近世的な身分・風俗語</li>
            <li>若輩 —— 経験や地位が浅い者</li>
            <li>青年 —— 近代社会を担う若い世代</li>
          </ul>
        </div>

        <h2 style={h2Style}>Young Men の訳語</h2>

        <p>
          「青年」という語が広まる大きな契機は、1880年（明治13年）の東京キリスト教青年会、
          すなわち東京YMCAの創設だった。
          YMCA は <em>Young Men&apos;s Christian Association</em> の略で、
          日本では「基督教青年会」と訳された。
          牧師の小崎弘道が、この Young Men に「青年」を当てたとされる。
        </p>

        <p>
          ここで訳された Young Men は、単なる「若い男たち」ではない。
          信仰、学習、奉仕、人格形成を通じて社会をよくする若い世代を指していた。
          だから「若者」では足りなかった。
          新しい社会の担い手としての若者を表す、少し高い響きのある語が必要だった。
          「青年」は、その要求に応える訳語だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「青年」の成立</p>
          <p style={noteTextStyle}>
            Young Men&apos;s Christian Association
            <br />
            → 基督教青年会
            <br />
            Young Men → 青年
            <br />
            若い男性を、人格形成と社会参加の主体として名づけた。
          </p>
        </div>

        <h2 style={h2Style}>「青」という字</h2>

        <p>
          「青年」は、「青」と「年」から成る。
          「年」は年齢・年頃を表す。
          「青」は、若さ、新しさ、未成熟、春を象徴する字だ。
          陰陽五行では青は春に結びつき、人生の早い季節を連想させる。
          「青春」という語も、春の青さから若い時期を表す。
        </p>

        <p>
          また「青雲の志」という表現がある。
          青雲は高い空や高位を意味し、立身出世への大きな志を表す。
          「青年」は単に若いだけでなく、志を持ち、未来へ向かう存在として響く。
          「青」の字は、未熟さと可能性を同時に抱えた文字だった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>「青年」の字義</p>
          <p style={noteTextStyle}>
            青（若さ・春・新しさ・志）＋ 年（年頃・年齢）
            <br />
            「若い年頃の人」
            <br />
            ただの年齢ではなく、将来へ向かう可能性を含む語。
          </p>
        </div>

        <h2 style={h2Style}>「若者」と「青年」の違い</h2>

        <p>
          「若者」と「青年」は似ているが、語感は違う。
          「若者」は日常語で、年齢の若さをそのまま言う。
          「青年」は、近代的な理想や社会的役割を帯びた語だ。
          青年は学び、悩み、読書し、議論し、社会へ出ていく存在として語られた。
        </p>

        <p>
          明治・大正期には、雑誌や文学の中で「青年」が頻繁に現れる。
          「煩悶青年」「新青年」「模範青年」のように、
          青年は近代社会の期待と不安を背負う存在だった。
          国家を支える若い力でもあり、古い道徳に揺さぶりをかける危うい存在でもあった。
        </p>

        <div style={noteStyle}>
          <p style={noteTitleStyle}>語感の違い</p>
          <p style={noteTextStyle}>
            若者：年齢が若い人。日常語。
            <br />
            青年：理想・教育・社会参加を帯びた若い世代。近代語。
            <br />
            「青年」は、若さを社会的な役割として名づけた。
          </p>
        </div>

        <h2 style={h2Style}>青年期という発明</h2>

        <p>
          「青年」の普及は、人生の区切り方そのものを変えた。
          近代以前、人は家や職業の中で早くから大人として扱われた。
          しかし学校制度が整い、進学・就職・兵役・恋愛・思想形成が人生の独立した段階として意識されると、
          子どもと大人のあいだに「青年期」という時間が立ち上がった。
        </p>

        <p>
          これは単なる年齢名ではない。
          青年期は、自己を探し、将来を選び、社会との関係を作る時期として語られた。
          近代文学で青年がしばしば悩むのは、弱いからではない。
          個人、自由、恋愛、職業、国家、信仰といった近代の問題が、
          若い世代の内面に集中したからだ。
        </p>

        <h2 style={h2Style}>青年会から青年団へ</h2>

        <p>
          「青年」はキリスト教青年会だけでなく、地域の青年会、青年団、教育運動にも広がった。
          明治後期から大正期にかけて、青年は国家と地域を支える人材として期待される。
          読書会、講演会、体育、奉仕、農村改良など、
          青年を育て、組織する活動が各地で展開された。
        </p>

        <p>
          その一方で、青年は管理される対象にもなった。
          若い力は未来への希望であると同時に、社会秩序を揺らす可能性でもある。
          「青年」という語は、自由で理想に燃える若者像と、
          国家や地域が育成すべき若者像のあいだで揺れ続けた。
        </p>

        <h2 style={h2Style}>語源が照らすもの</h2>

        <p>
          「青年」は、若さを単に年齢として呼ぶ語ではなかった。
          Young Men の訳語として、若い世代を教育・信仰・社会参加の主体として名づけた語だった。
          「青」は未熟さを示すと同時に、春の生命力と高い志を示す。
          そこに「年」が重なり、人生の一時期が社会的な意味を持つようになった。
        </p>

        <p>
          語源をたどると、「青年」は近代が若者に向けた期待の名前だったとわかる。
          ただ若い人ではなく、これからの社会を作る人。
          まだ完成していないが、だからこそ変わる力を持つ人。
          「青年」という二文字には、明治の日本が若い世代に託した未来像が刻まれている。
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
            <li>東京YMCA「沿革」</li>
            <li>小崎弘道「基督教青年会」関連資料</li>
            <li>日本YMCA史関連資料</li>
            <li>東京大学生涯学習基盤経営研究「青年」語史関連論考</li>
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
