export type Article = {
  id: string
  title: string
  description: string
  publishedAt: string
  relatedWordIds: number[]
}

export const articles: Article[] = [
  {
    id: "toukei-etymology",
    title: "「統計」の語源——国家を数える技術からデータの科学へ",
    description:
      "「統計」は statistics の訳語として明治期に定着した。語源をたどると statistics は「国家の状態」を知る学であり、日本でも「政表」「表記」「形勢」などの訳語候補を経て、「多くをまとめて計る」統計へ落ち着いた。",
    publishedAt: "2026-05-21",
    relatedWordIds: [222, 422, 43, 223, 15],
  },
  {
    id: "seinen-etymology",
    title: "「青年」の語源——若者から近代の担い手へ",
    description:
      "「青年」は古くからあった自然な日本語ではなく、明治期に Young Men の訳語として広まった近代語だった。「青」が持つ若さと志の感覚、YMCA、学生文化、雑誌メディアを通じて、若者が社会の主体として名づけられる過程をたどる。",
    publishedAt: "2026-05-21",
    relatedWordIds: [101, 1, 3, 16, 97],
  },
  {
    id: "shinka-etymology",
    title: "「進化」の語源——巻物をひらくことから生命の変化へ",
    description:
      "「進化」は evolution の訳語として、明治期の進化論受容の中で広まった。ラテン語 evolvere（巻物をひらく）に由来する語が、なぜ日本語では「進む変化」と訳されたのか。ダーウィン、モース、石川千代松を通じてたどる。",
    publishedAt: "2026-05-21",
    relatedWordIds: [106, 77, 195, 204, 468],
  },
  {
    id: "joho-etymology",
    title: "「情報」の語源——敵情の報知からデータの時代へ",
    description:
      "「情報」は英語 information の直訳ではなく、明治初期にフランス語 renseignement の軍事訳語として生まれた。「情を報ずる」という敵情把握の語が、戦後の情報科学とコンピュータを経て、現代社会の中心語になるまでをたどる。",
    publishedAt: "2026-05-21",
    relatedWordIds: [98, 200, 378, 387, 43],
  },
  {
    id: "sekai-etymology",
    title: "「世界」の語源——時間と空間から地球全体へ",
    description:
      "「世界」は仏教語として、すべての時間を表す「世」と、すべての空間を表す「界」から成った。近世の世界地図と近代地理学を経て、world の訳語として地球・万国・人類社会を指す語へ広がる過程をたどる。",
    publishedAt: "2026-05-19",
    relatedWordIds: [192, 543, 530, 487, 3],
  },
  {
    id: "kagaku-etymology",
    title: "「科学」の語源——知ることから分けて知ることへ",
    description:
      "「科学」はラテン語 scientia（知識）を起源とし、「学問を分科する」という訳語の発想で生まれた。窮理学・格物学との競合を経て定着するまでと、「科」という字が近代科学の本質を射抜いていた経緯をたどる。",
    publishedAt: "2026-05-17",
    relatedWordIds: [5, 317, 502, 503, 4],
  },
  {
    id: "bunka-etymology",
    title: "「文化」の語源——畑を耕すことから魂を耕すことへ",
    description:
      "「文化」はラテン語 cultura（耕作）を起源とし、キケロが「魂の耕作」と呼んだことで精神的な意味を得た。同名の漢語が古典中国にすでに存在していたことが、明治の翻訳を大いに助けた経緯をたどる。",
    publishedAt: "2026-05-17",
    relatedWordIds: [10, 11, 3, 2],
  },
  {
    id: "tetsugaku-etymology",
    title: "「哲学」の語源——知を愛することから明智の学へ",
    description:
      "「哲学」はギリシャ語 philosophia（知を愛すること）の訳語として、西周が1874年に創出した。「希哲学」「愛智学」との競合を経て定着するまでの経緯と、「哲」という字の選択に込められた意味をたどる。",
    publishedAt: "2026-05-17",
    relatedWordIds: [4, 87, 317, 2, 3],
  },
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
