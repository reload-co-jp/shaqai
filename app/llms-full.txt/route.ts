import { createLlmsFullTxt } from "lib/llms"

export const dynamic = "force-static"

export const GET = () =>
  new Response(createLlmsFullTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  })
