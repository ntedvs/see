"use client"

import Image from "next/image"
import M from "react-fast-marquee"

const partnerLogos = [
  "adore.jpg",
  "amharic.png",
  "australia.jpg",
  "british.png",
  "cipe.png",
  "consult.jpg",
  "creative.png",
  "development.png",
  "ecsoc.jpg",
  "eu.jpg",
  "forumciv.png",
  "gain.webp",
  "initiative.png",
  "nase.jpeg",
  "nether.png",
  "reach.png",
  "swiss.png",
  "temsalet.png",
  "trade.png",
  "urban.jpg",
  "us.jpg",
  "xhub.jpg",
  "yunus.png",
  "zealand.png",
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
