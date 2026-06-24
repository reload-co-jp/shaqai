export const dynamic = "force-static"
import type { MetadataRoute } from "next"
import { statSync } from "fs"
import { join } from "path"
import { words, fields, translators, katakanaWords } from "lib/db"
import { articles } from "lib/articles"

const BASE_URL = "https://shaqai.reload.co.jp"

const mtime = (file: string) =>
  statSync(join(process.cwd(), "data", file)).mtime

const wordsLastModified = mtime("words.json")
const fieldsLastModified = mtime("fields.json")
const translatorsLastModified = mtime("translators.json")
const katakanaLastModified = mtime("katakana.json")

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
      url: BASE_URL + "/words/",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: wordsLastModified,
    },
    {
      url: BASE_URL + "/translators/",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: translatorsLastModified,
    },
    {
      url: BASE_URL + "/katakana/",
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: katakanaLastModified,
    },
    {
      url: BASE_URL + "/about/",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/whats/",
      priority: 0.7,
      changeFrequency: "yearly",
    },
    {
      url: BASE_URL + "/articles/",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: BASE_URL + "/llms.txt",
      priority: 0.4,
      changeFrequency: "weekly",
      lastModified: wordsLastModified,
    },
    {
      url: BASE_URL + "/llms-full.txt",
      priority: 0.4,
      changeFrequency: "weekly",
      lastModified: wordsLastModified,
    },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/articles/${a.id}/`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
    lastModified: new Date(a.publishedAt),
  }))

  const wordRoutes: MetadataRoute.Sitemap = words.map((w) => ({
    url: `${BASE_URL}/words/${w.id}/`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
    lastModified: wordsLastModified,
  }))

  const katakanaRoutes: MetadataRoute.Sitemap = katakanaWords.map((w) => ({
    url: `${BASE_URL}/katakana/${w.id}/`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
    lastModified: katakanaLastModified,
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

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...wordRoutes,
    ...katakanaRoutes,
    ...fieldRoutes,
    ...translatorRoutes,
  ]
}
