export const dynamic = "force-static"
import type { MetadataRoute } from "next"
import { statSync } from "fs"
import { join } from "path"
import { words, fields, translators } from "lib/db"

const BASE_URL = "https://shaqai.reload.co.jp"

const mtime = (file: string) =>
  statSync(join(process.cwd(), "data", file)).mtime

const wordsLastModified = mtime("words.json")
const fieldsLastModified = mtime("fields.json")
const translatorsLastModified = mtime("translators.json")

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL + "/",
      priority: 1.0,
      changeFrequency: "weekly",
      lastModified: wordsLastModified,
    },
    {
      url: BASE_URL + "/fields/",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: fieldsLastModified,
    },
    {
      url: BASE_URL + "/translators/",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: translatorsLastModified,
    },
    {
      url: BASE_URL + "/about/",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: BASE_URL + "/articles/meiji-translation/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/sound-vs-meaning/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/imported-values/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/creating-new-words/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/why-no-new-translations/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/how-to-translate/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/dx-translation/",
      priority: 0.6,
      changeFrequency: "yearly",
    },
  ]

  const wordRoutes: MetadataRoute.Sitemap = words.map((w) => ({
    url: `${BASE_URL}/words/${w.id}/`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
    lastModified: wordsLastModified,
  }))

  const fieldRoutes: MetadataRoute.Sitemap = fields.map((f) => ({
    url: `${BASE_URL}/fields/${f.id}/`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
    lastModified: fieldsLastModified,
  }))

  const translatorRoutes: MetadataRoute.Sitemap = translators.map((t) => ({
    url: `${BASE_URL}/translators/${t.id}/`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
    lastModified: translatorsLastModified,
  }))

  return [...staticRoutes, ...wordRoutes, ...fieldRoutes, ...translatorRoutes]
}
