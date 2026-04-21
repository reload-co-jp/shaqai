/* global URL, console */
import fs from "node:fs"

const wordsPath = new URL("../data/words.json", import.meta.url)
const words = JSON.parse(fs.readFileSync(wordsPath, "utf8"))

const sourceCatalog = {
  "英和対訳袖珍辞典": {
    title: "英和対訳袖珍辞典",
    url: "https://dl.ndl.go.jp/pid/870782",
    note: "初期英和辞典。語釈・初出確認の参照資料",
  },
  "附音挿図英和字彙": {
    title: "附音挿図英和字彙",
    author: "柴田昌吉・子安峻",
    url: "https://ndlsearch.ndl.go.jp/books/R100000039-I2938261",
    note: "NDLサーチで1873年刊行を確認",
  },
  "哲学字彙": {
    title: "哲学字彙",
    author: "井上哲次郎ほか",
    url: "https://dl.ndl.go.jp/pid/863637",
    note: "哲学・心理学系訳語の定着確認資料",
  },
  "改定増補哲学字彙": {
    title: "改定増補哲学字彙",
    author: "井上哲次郎ほか",
    url: "https://dl.ndl.go.jp/pid/863638",
    note: "哲学・宗教語彙の参照資料",
  },
  "百一新論": {
    title: "百一新論",
    author: "西周",
    url: "https://ndlsearch.ndl.go.jp/books/R100000039-I753010",
    note: "NDLサーチで1874年刊行を確認",
  },
  "百学連環": {
    title: "百学連環",
    author: "西周",
    note: "西周の学術語彙を確認する参照資料",
  },
  "学問のすゝめ": {
    title: "学問のすゝめ",
    author: "福沢諭吉",
    url: "https://ndlsearch.ndl.go.jp/books/R100000002-I000001107016",
    note: "福沢諭吉の用例確認資料",
  },
  "文明論之概略": {
    title: "文明論之概略",
    author: "福沢諭吉",
    url: "https://dl.ndl.go.jp/pid/761288",
    note: "文明・野蛮などの用例確認資料",
  },
  "西洋事情": {
    title: "西洋事情",
    author: "福沢諭吉",
    url: "https://dl.ndl.go.jp/pid/761282",
    note: "福沢諭吉による西洋制度紹介の参照資料",
  },
  "西洋旅案内": {
    title: "西洋旅案内",
    author: "福沢諭吉",
    url: "https://dl.ndl.go.jp/pid/761283",
    note: "保険制度紹介の参照資料",
  },
  "明六雑誌": {
    title: "明六雑誌",
    url: "https://dl.ndl.go.jp/pid/991325",
    note: "明治初期啓蒙思想語彙の参照資料",
  },
  "民約訳解": {
    title: "民約訳解",
    author: "中江兆民",
    url: "https://dl.ndl.go.jp/pid/783485",
    note: "ルソー翻訳語の参照資料",
  },
  "西国立志編": {
    title: "西国立志編",
    author: "中村正直",
    url: "https://ndlsearch.ndl.go.jp/books/R100000001-I38111100467075",
    note: "スマイルズ Self-Help の翻訳書",
  },
  "Self-Help": {
    title: "Self-Help",
    author: "Samuel Smiles",
    note: "『西国立志編』の原書",
  },
  "修身論": {
    title: "修身論",
    author: "阿部泰蔵",
    note: "Wayland の倫理学書翻訳として参照",
  },
  "Elements of Moral Science": {
    title: "Elements of Moral Science",
    author: "Francis Wayland",
    note: "『修身論』の原書",
  },
  "仏和辞林": {
    title: "仏和辞林",
    note: "フランス語訳語確認の参照資料",
  },
  "仏和法律字彙": {
    title: "仏和法律字彙",
    note: "法律・社会思想語彙の参照資料",
  },
  "万国公法": {
    title: "万国公法",
    author: "丁韙良 訳",
    url: "https://dl.ndl.go.jp/pid/787063",
    note: "国際法語彙の参照資料",
  },
  "物理啓蒙": {
    title: "物理啓蒙",
    url: "https://dl.ndl.go.jp/pid/830095",
    note: "明治初期物理学教科書",
  },
  "文部省雑誌": {
    title: "文部省雑誌",
    note: "明治初期教育・科学語彙の参照資料",
  },
  "舎密開宗": {
    title: "舎密開宗",
    author: "宇田川榕菴",
    url: "https://dl.ndl.go.jp/pid/2555846",
    note: "江戸後期化学訳語の参照資料",
  },
  "植学啓原": {
    title: "植学啓原",
    author: "宇田川榕菴",
    url: "https://ndlsearch.ndl.go.jp/books/R100000039-I2555812",
    note: "NDLサーチで原本デジタル公開を確認",
  },
  "遠西医方名物考": {
    title: "遠西医方名物考",
    author: "宇田川榛斎 訳述、宇田川榕菴 校補",
    url: "https://ndlsearch.ndl.go.jp/books/R100000100-Ikoishof_e_17_1",
    note: "NDLサーチで1822年序を確認",
  },
  "遠西医方名物考補遺": {
    title: "遠西医方名物考補遺",
    author: "宇田川榕菴",
    note: "白金などの化学語彙の参照資料",
  },
  "扶氏経験遺訓": {
    title: "扶氏経験遺訓",
    author: "緒方洪庵",
    note: "医学訳語の参照資料",
  },
  "動物進化論": {
    title: "動物進化論",
    author: "石川千代松",
    note: "進化論受容・訳語普及の参照資料",
  },
  "種の起源": {
    title: "種の起源",
    author: "Charles Darwin",
    note: "進化論の原典",
  },
  "第一高等学校野球部史": {
    title: "第一高等学校野球部史",
    note: "野球の訳語初出確認資料",
  },
  "野球": {
    title: "野球",
    author: "中馬庚",
    note: "野球専門書としての普及確認資料",
  },
  "坤輿図識": {
    title: "坤輿図識",
    author: "箕作省吾",
    url: "https://ndlsearch.ndl.go.jp/books/R100000094-I75833",
    note: "NDLサーチで弘化期刊行資料を確認",
  },
  "ドゥーフ・ハルマ": {
    title: "ドゥーフ・ハルマ",
    author: "Hendrik Doeff 監修",
    note: "蘭和辞典。江戸期訳語の参照資料",
  },
  "仏国歩兵陣中要務実地演習軌典": {
    title: "仏国歩兵陣中要務実地演習軌典",
    author: "酒井忠恕 訳",
    note: "軍事訳語の参照資料",
  },
  "戦争論": {
    title: "戦争論",
    author: "Carl von Clausewitz",
    note: "軍事思想語彙の参照資料",
  },
  "維氏美学": {
    title: "維氏美学",
    author: "中江兆民",
    note: "美学・象徴語彙の参照資料",
  },
  "美妙学説": {
    title: "美妙学説",
    author: "西周",
    note: "美術・美学語彙の参照資料",
  },
  "生性発蘊": {
    title: "生性発蘊",
    author: "西周",
    note: "哲学・心理学語彙の参照資料",
  },
  "利学": {
    title: "利学",
    author: "西周",
    note: "西周による哲学語彙の参照資料",
  },
  "浮雲": {
    title: "浮雲",
    author: "二葉亭四迷",
    note: "近代文学での用例確認資料",
  },
  "三太郎の日記": {
    title: "三太郎の日記",
    author: "阿部次郎",
    note: "大正期思想語彙の参照資料",
  },
  "日本人": {
    title: "日本人",
    note: "明治期国民主義・民族語彙の参照資料",
  },
  "共産党宣言": {
    title: "共産党宣言",
    author: "Karl Marx / Friedrich Engels",
    note: "社会主義・共産主義語彙の参照資料",
  },
  "翻訳語成立事情": {
    title: "翻訳語成立事情",
    author: "柳父章",
    note: "翻訳語史の研究文献",
  },
  "国家の品格": {
    title: "国家の品格",
    author: "藤原正彦",
    note: "近現代での用例・普及確認資料",
  },
  "存在と時間": {
    title: "存在と時間",
    author: "Martin Heidegger",
    note: "哲学語彙の用例参照資料",
  },
  "管子": {
    title: "管子",
    note: "古典漢語の出典参照",
  },
  "中庸": {
    title: "中庸",
    note: "古典漢語の出典参照",
  },
  "社会契約論": {
    title: "社会契約論",
    author: "Jean-Jacques Rousseau",
    note: "政治思想語彙の原典",
  },
  "Philosophiæ Naturalis Principia Mathematica": {
    title: "Philosophiæ Naturalis Principia Mathematica",
    author: "Isaac Newton",
    note: "自然哲学・物理学語彙の原典",
  },
  "プリンキピア": {
    title: "プリンキピア",
    author: "Isaac Newton",
    note: "自然哲学・物理学語彙の原典",
  },
  "Kritik der Urteilskraft": {
    title: "Kritik der Urteilskraft",
    author: "Immanuel Kant",
    note: "判断・美学語彙の原典",
  },
}

const titlePattern = /『([^』]+)』/g

const normalizeSource = (title) =>
  sourceCatalog[title] ?? {
    title,
    note: "本文中で言及されている文献・資料",
  }

let updated = 0

const enrichedWords = words.map((word) => {
  if (word.sources?.length) return word

  const text = `${word.description ?? ""}\n${word.etymology ?? ""}`
  const titles = [...text.matchAll(titlePattern)]
    .map((match) => match[1])
    .filter((title, index, all) => all.indexOf(title) === index)

  if (!titles.length) return word

  updated += 1
  return {
    ...word,
    sources: titles.map(normalizeSource),
  }
})

fs.writeFileSync(wordsPath, `${JSON.stringify(enrichedWords, null, 2)}\n`)
console.log(`updated ${updated} words`)
