import { ImageResponse } from "next/og"
import { words, getField } from "lib/db"

export const dynamic = "force-static"
export const alt = "翻訳語辞典 Shaqai"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export const generateStaticParams = () =>
  words.map((w) => ({ id: String(w.id) }))

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
  const word = words.find((w) => w.id === Number(id))
  const field = word ? getField(word.field_id) : null
  const fontData = await loadFont()

  const japaneseWord = word?.japanese_word ?? ""
  const originalWord = word?.original_word ?? ""
  const description = word?.description.slice(0, 60) ?? ""

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
          position: "relative",
        }}
      >
        {/* ブランドライン（左上） */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
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
            翻訳語辞典 Shaqai
          </span>
        </div>

        {/* メインワード */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: japaneseWord.length > 4 ? "100px" : "120px",
              fontWeight: 700,
              color: "#c8a96e",
              letterSpacing: "0.06em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            {japaneseWord}
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#7a9e82",
              letterSpacing: "0.04em",
              display: "flex",
            }}
          >
            {originalWord}
          </div>
          {description && (
            <div
              style={{
                fontSize: "22px",
                color: "#807870",
                lineHeight: 1.6,
                maxWidth: "880px",
                display: "flex",
              }}
            >
              {description}
              {(word?.description.length ?? 0) > 60 ? "…" : ""}
            </div>
          )}
        </div>

        {/* フッター */}
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
          {field && (
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
                style={{
                  fontSize: "18px",
                  color: "#9e9888",
                  display: "flex",
                }}
              >
                {field.name}
              </span>
            </div>
          )}
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
