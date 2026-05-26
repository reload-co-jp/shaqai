import { ImageResponse } from "next/og"
import { translators, getTranslator, getWordsByTranslator } from "lib/db"

export const dynamic = "force-static"
export const alt = "翻訳語辞典 Shaqai"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export const generateStaticParams = () =>
  translators.map((t) => ({ id: String(t.id) }))

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      }
    ).then((r) => r.text())
    const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1]
    if (!url) return null
    return fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

type Props = { params: Promise<{ id: string }> }

export default async function Image({ params }: Props) {
  const { id } = await params
  const translator = getTranslator(Number(id))
  const wordCount = translator ? getWordsByTranslator(translator.id).length : 0
  const fontData = await loadFont()

  const years =
    translator
      ? `${translator.birth_year}–${translator.death_year}`
      : ""
  const firstPara = translator?.description.split("\n\n")[0] ?? ""
  const snippet =
    firstPara.length > 80 ? firstPara.slice(0, 80) + "…" : firstPara

  return new ImageResponse(
    (
      <div
        style={{
          background: "#130f09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: fontData ? "Noto Serif JP" : "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "3px",
              height: "28px",
              background: "#c8a96e",
              borderRadius: "2px",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              color: "#807870",
              letterSpacing: "0.08em",
              display: "flex",
            }}
          >
            翻訳語辞典 Shaqai — 翻訳者
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: translator && translator.name.length > 5 ? "80px" : "100px",
              fontWeight: 700,
              color: "#c8a96e",
              letterSpacing: "0.06em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            {translator?.name ?? ""}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#7a9e82",
              letterSpacing: "0.04em",
              display: "flex",
            }}
          >
            {years}
          </div>
          {snippet && (
            <div
              style={{
                fontSize: "22px",
                color: "#807870",
                lineHeight: 1.6,
                maxWidth: "880px",
                display: "flex",
              }}
            >
              {snippet}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#5e5848",
              letterSpacing: "0.05em",
              display: "flex",
            }}
          >
            shaqai.reload.co.jp
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1e1a12",
              border: "1px solid #302b1e",
              borderRadius: "4px",
              padding: "8px 20px",
            }}
          >
            <span
              style={{ fontSize: "18px", color: "#9e9888", display: "flex" }}
            >
              訳語 {wordCount}語
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Noto Serif JP",
                data: fontData,
                weight: 700,
                style: "normal",
              },
            ],
          }
        : {}),
    }
  )
}
