import { ogImageSize, loadOgFont, renderOgImage } from "lib/og-image"

export const dynamic = "force-static"
export const alt = "翻訳語辞典 Shaqai"
export const size = ogImageSize
export const contentType = "image/png"

export default async function Image() {
  const fontData = await loadOgFont("700")

  return renderOgImage(
    (
      <div
        style={{
          background: "#130f09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: fontData ? "Noto Serif JP" : "serif",
          position: "relative",
        }}
      >
        {/* 背景装飾 */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "60px",
            bottom: "0",
            display: "flex",
            alignItems: "center",
            opacity: 0.04,
          }}
        >
          <div
            style={{
              fontSize: "360px",
              color: "#c8a96e",
              fontWeight: 700,
              lineHeight: 1,
              display: "flex",
            }}
          >
            訳
          </div>
        </div>

        {/* メインコンテンツ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "40px",
                background: "#c8a96e",
                borderRadius: "2px",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "22px",
                color: "#807870",
                letterSpacing: "0.08em",
                display: "flex",
              }}
            >
              翻訳語辞典
            </span>
          </div>

          <div
            style={{
              fontSize: "80px",
              fontWeight: 700,
              color: "#c8a96e",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Shaqai
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "#e2dcd0",
              lineHeight: 1.6,
              maxWidth: "680px",
              letterSpacing: "0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>外国語から翻訳されて作られた</span>
            <span style={{ display: "flex" }}>日本語（和製漢語・訳語）の辞典</span>
          </div>
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
              fontSize: "20px",
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
              gap: "24px",
              fontSize: "18px",
              color: "#5e5848",
            }}
          >
            <span style={{ display: "flex" }}>訳語</span>
            <span style={{ display: "flex" }}>語源</span>
            <span style={{ display: "flex" }}>翻訳者</span>
          </div>
        </div>
      </div>
    ),
    fontData
  )
}
