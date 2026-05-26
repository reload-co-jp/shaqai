export const dynamic = "force-static"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/search/",
        "/opengraph-image*",
        "/words/*/opengraph-image*",
        "/fields/*/opengraph-image*",
        "/translators/*/opengraph-image*",
      ],
    },
    sitemap: "https://shaqai.reload.co.jp/sitemap.xml",
  }
}
