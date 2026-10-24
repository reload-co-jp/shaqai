"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export const DisplayAd = () => {
  const pathname = usePathname()

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [pathname])

  return (
    <div style={{ padding: "1rem" }}>
      {/* 共通ディスプレイ */}
      <ins
        key={pathname}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6542845006087970"
        data-ad-slot="4829146611"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
