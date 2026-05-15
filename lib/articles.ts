export type Article = {
  id: string
  title: string
  description: string
  publishedAt: string
  relatedWordIds: number[]
}

export const articles: Article[] = [
  {
    id: "shakai-etymology",
    title: "「社会」の語源——神社の集まりから人間の共同体へ",
    description:
      "「社会」はもともと「神社の集まり」を意味する漢語だった。society の訳語として選ばれ、福沢諭吉の「人間交際」との競合を経て定着するまでの経緯をたどる。",
    publishedAt: "2026-05-15",
    relatedWordIds: [3, 2, 6, 10, 11, 16, 231],
  },
  {
    id: "jiyu-etymology",
    title: "「自由」の語源——わがままから権利へ",
    description:
      "「自由」はもとは仏教語で、「自らの思いのまま」というやや否定的な含意を持っていた。それが liberty・freedom の訳語として政治的権利の言葉に生まれ変わるまでの経緯をたどる。",
    publishedAt: "2026-05-15",
    relatedWordIds: [6, 7, 8, 3, 52, 59],
  },
  {
    id: "keizai-etymology",
    title: "「経済」の語源——経世済民から economy へ",
    description:
      "日常語として定着した「経済」は、もとは「世を治め民を救う」という政治道徳の言葉だった。economy の訳語として選ばれた経緯と、意味が縮小していった過程をたどる。",
    publishedAt: "2026-05-15",
    relatedWordIds: [2, 3, 51, 598, 11],
  },
  {
    id: "tsuji-work",
    title: "通詞のしごと",
    description:
      "出島で働いた通詞は、ただ外国語を訳す人ではなかった。交渉、検査、風説書、蘭学の橋渡しまで担った、その多面的なしごとをたどる。",
    publishedAt: "2026-04-20",
    relatedWordIds: [],
  },
  {
    id: "meiji-translation",
    title: "明治期の翻訳方法の模索と挑戦",
    description:
      "西洋の学問や思想が怒涛のように押し寄せた明治初期。翻訳家たちはどのような方法で、未知の概念を日本語に変換しようとしたのか。",
    publishedAt: "2026-04-09",
    relatedWordIds: [3, 4, 15, 22, 138, 46],
  },
  {
    id: "sound-vs-meaning",
    title: "音としての外来語と意味を含めた訳語",
    description:
      "「アイデンティティ」と「自我同一性」——同じ概念を指す二つの言葉はなぜ存在するのか。音訳と意訳、その本質的な違いを考える。",
    publishedAt: "2026-04-09",
    relatedWordIds: [6, 7, 8, 4, 2, 3],
  },
  {
    id: "imported-values",
    title: "明治時代に輸入される新しい価値観たち",
    description:
      "「自由」「権利」「社会」——これらの言葉が生まれる前、日本にその概念は存在しなかった。翻訳語は単なる言葉ではなく、思想の移植だった。",
    publishedAt: "2026-04-09",
    relatedWordIds: [6, 7, 3, 16, 5, 10],
  },
  {
    id: "creating-new-words",
    title: "未知の概念を言葉として創るということ",
    description:
      "対応する概念のない言語に、まったく新しい言葉を生み出すとはどういうことか。翻訳家たちが直面した、言語創造の根本的な問い。",
    publishedAt: "2026-04-09",
    relatedWordIds: [4, 22, 18, 19, 46, 420],
  },
  {
    id: "why-no-new-translations",
    title: "なぜ現代には翻訳語が生まれにくいか",
    description:
      "明治には数千もの翻訳語が生まれたのに、現代にはほとんど生まれない。この違いはどこから来るのか。",
    publishedAt: "2026-04-09",
    relatedWordIds: [103, 104, 105, 106, 11],
  },
  {
    id: "how-to-translate",
    title: "翻訳語のつくりかた、考え方",
    description:
      "翻訳語はどのような原則で作られてきたのか。漢字の組み合わせ方、既存語の転用、造語の工夫——先人たちの知恵を読み解く。",
    publishedAt: "2026-04-09",
    relatedWordIds: [4, 103, 104, 106],
  },
  {
    id: "dx-translation",
    title: "DXを翻訳語にすると何になるか",
    description:
      "「デジタルトランスフォーメーション」——この言葉を明治の翻訳家が訳したなら、どんな語を生み出しただろうか。翻訳語の視点からDXを解剖する試み。",
    publishedAt: "2026-04-09",
    relatedWordIds: [4, 397, 27, 98],
  },
  {
    id: "katakana-gap",
    title: "原語と意味がずれるカタカナ語たち",
    description:
      "「マンション」は豪邸ではなく、「スマート」は賢くない。日本語に定着したカタカナ語が、なぜ原語の意味と乖離していくのか。その仕組みと事例を読み解く。",
    publishedAt: "2026-04-10",
    relatedWordIds: [3, 7, 4],
  },
  {
    id: "genbun-itchi",
    title: "言文一致運動と近代日本語",
    description:
      "話しことばと書きことばと近づけようとした言文一致運動は、なぜ必要だったのか。小説・翻訳・教育を横断しながら、近代日本語のかたちができる過程をたどる。",
    publishedAt: "2026-04-29",
    relatedWordIds: [3, 2, 7, 4],
  },
]

export const getArticlesForWord = (wordId: number): Article[] =>
  articles.filter((a) => a.relatedWordIds.includes(wordId))
