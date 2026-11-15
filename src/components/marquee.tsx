"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"
import Image from "next/image"
import M from "react-fast-marquee"

// Logo files are cropped to their edges; sizes are their pixel dimensions.
const partnerLogos = [
  { file: "acp.webp", width: 175, height: 127 },
  { file: "adore.webp", width: 216, height: 278 },
  { file: "africa.webp", width: 164, height: 110 },
  { file: "amharic.webp", width: 480, height: 581 },
  { file: "australia.webp", width: 710, height: 572 },
  { file: "british.webp", width: 180, height: 53 },
  { file: "cipe.webp", width: 304, height: 139 },
  { file: "consult.webp", width: 1034, height: 225 },
  { file: "creative.webp", width: 2000, height: 671 },
  { file: "development.webp", width: 284, height: 244 },
  { file: "ecsoc.webp", width: 969, height: 994 },
  { file: "eu.webp", width: 600, height: 353 },
  { file: "forumciv.webp", width: 711, height: 101 },
  { file: "gain.webp", width: 890, height: 322 },
  { file: "german.webp", width: 212, height: 119 },
  { file: "initiative.webp", width: 183, height: 190 },
  { file: "nase.webp", width: 571, height: 326 },
  { file: "nether.webp", width: 1690, height: 714 },
  { file: "reach.webp", width: 600, height: 240 },
  { file: "rohobot.webp", width: 117, height: 119 },
  { file: "schwab.webp", width: 171, height: 111 },
  { file: "swiss.webp", width: 651, height: 159 },
  { file: "temsalet.webp", width: 422, height: 423 },
  { file: "trade.webp", width: 601, height: 248 },
  { file: "urban.webp", width: 136, height: 137 },
  { file: "us.webp", width: 379, height: 378 },
  { file: "whiz.webp", width: 159, height: 198 },
  { file: "xhub.webp", width: 200, height: 57 },
  { file: "yunus.webp", width: 1839, height: 551 },
  { file: "zealand.webp", width: 216, height: 234 },
]

// Give every logo roughly the same visual area, so wide wordmarks get a wide
// slot instead of shrinking to fit a square one.
const logoArea = 12000
const maxHeight = 88
const maxWidth = 240
const slotHeight = maxHeight + 24

function logoSize(width: number, height: number) {
  const ratio = width / height
  let h = Math.min(Math.sqrt(logoArea / ratio), maxHeight)
  if (h * ratio > maxWidth) h = maxWidth / ratio
  return { width: Math.round(h * ratio), height: Math.round(h) }
}

export default function Marquee() {
  const reducedMotion = useReducedMotion()
  const logos = partnerLogos.map((logo) => {
    const size = logoSize(logo.width, logo.height)
    return (
      // Slot height is in px (not rem) so it always fits the px-sized logo;
      // the marquee clips anything taller than the slot.
      <div
        key={logo.file}
        className="mx-7 flex shrink-0 items-center justify-center"
        style={{ height: slotHeight }}
      >
        <Image
          src={`/partners/${logo.file}`}
          alt={`Partner ${logo.file.replace(".webp", "")}`}
          width={size.width}
          height={size.height}
          style={{ width: size.width, height: size.height }}
          className="object-contain"
        />
      </div>
    )
  })

  return reducedMotion ? (
    <div
      className="flex items-center overflow-x-auto"
      role="region"
      aria-label="Development partners"
      tabIndex={0}
    >
      {logos}
    </div>
  ) : (
    <M
      speed={30}
      pauseOnHover
      pauseOnClick
      gradient
      gradientColor="white"
      gradientWidth={48}
    >
      {logos}
    </M>
  )
}
