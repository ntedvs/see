import { NextConfig } from "next"

const config: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./content_update.md"],
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
}

export default config
