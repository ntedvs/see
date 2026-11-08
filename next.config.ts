import { NextConfig } from "next"

const config: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./content_update.md"],
  },
}

export default config
