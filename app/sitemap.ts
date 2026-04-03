import type { MetadataRoute } from "next"
import { words, fields, translators } from "lib/db"

const BASE_URL = "https://shaqai.reload.co.jp"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL + "/", priority: 1.0, changeFrequency: "weekly" },
    { url: BASE_URL + "/fields/", priority: 0.8, changeFrequency: "monthly" },
    { url: BASE_URL + "/translators/", priority: 0.8, changeFrequency: "monthly" },
    { url: BASE_URL + "/about/", priority: 0.5, changeFrequency: "yearly" },
  ]

  const wordRoutes: MetadataRoute.Sitemap = words.map((w) => ({
    url: `${BASE_URL}/words/${w.id}/`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }))

  const fieldRoutes: MetadataRoute.Sitemap = fields.map((f) => ({
    url: `${BASE_URL}/fields/${f.id}/`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }))

  const translatorRoutes: MetadataRoute.Sitemap = translators.map((t) => ({
    url: `${BASE_URL}/translators/${t.id}/`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }))

  return [...staticRoutes, ...wordRoutes, ...fieldRoutes, ...translatorRoutes]
}
