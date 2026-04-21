import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "翻訳語辞典 Shaqai",
    short_name: "Shaqai",
    description:
      "外国語から翻訳されて作られた日本語と、意味がずれたカタカナ語を収集・閲覧できる辞典。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#130f09",
    theme_color: "#1c1810",
    lang: "ja",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
  }
}
