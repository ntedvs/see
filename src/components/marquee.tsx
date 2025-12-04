"use client"

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
  return (
    <M speed={50}>
      {partnerLogos.map((logo) => (
        <Image
          src={`/partners/${logo}`}
          alt={`Partner ${logo}`}
          width={150}
          height={150}
          className="mx-6 w-30"
          key={logo}
        />
      ))}
    </M>
  )
}
