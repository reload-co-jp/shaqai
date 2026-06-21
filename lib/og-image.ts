import { ImageResponse } from "next/og"
import type { ReactElement } from "react"

export const ogImageSize = { width: 1200, height: 630 }

export const loadOgFont = async (weights = "400;700"): Promise<ArrayBuffer | null> => {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@${weights}`,
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

export const renderOgImage = (node: ReactElement, fontData: ArrayBuffer | null) =>
  new ImageResponse(node, {
    ...ogImageSize,
    ...(fontData
      ? {
          fonts: [
            {
              name: "Noto Serif JP",
              data: fontData,
              weight: 700 as const,
              style: "normal" as const,
            },
          ],
        }
      : {}),
  })
