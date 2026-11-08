"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"
import Image from "next/image"
import M from "react-fast-marquee"

const partnerLogos = [
  "adore.webp",
  "amharic.webp",
  "australia.webp",
  "british.webp",
  "cipe.webp",
  "consult.webp",
  "creative.webp",
  "development.webp",
  "ecsoc.webp",
  "eu.webp",
  "forumciv.webp",
  "gain.webp",
  "initiative.webp",
  "nase.webp",
  "nether.webp",
  "reach.webp",
  "swiss.webp",
  "temsalet.webp",
  "trade.webp",
  "urban.webp",
  "us.webp",
  "xhub.webp",
  "yunus.webp",
  "zealand.webp",
]

export default function Marquee() {
  const reducedMotion = useReducedMotion()
  const logos = partnerLogos.map((logo) => (
    <Image
      src={`/partners/${logo}`}
      alt={`Partner ${logo.replace(".webp", "")}`}
      width={150}
      height={150}
      className="mx-5 h-24 w-28 shrink-0 object-contain"
      key={logo}
    />
  ))

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
