"use client"

import { Photo } from "@/lib/media"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import Image from "next/image"
import M from "react-fast-marquee"

// A gently scrolling strip of event photos; a plain scrollable row for reduced motion.
export default function PhotoMarquee({ photos }: { photos: Photo[] }) {
  const reducedMotion = useReducedMotion()
  const items = photos.map((photo) => (
    <div
      key={photo.src}
      className="relative mx-2 h-44 w-64 shrink-0 overflow-hidden rounded-xl sm:h-52 sm:w-80"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="320px"
        className="object-cover"
      />
    </div>
  ))

  return reducedMotion ? (
    <div
      className="flex overflow-x-auto"
      role="region"
      aria-label="Event photos"
      tabIndex={0}
    >
      {items}
    </div>
  ) : (
    <M speed={28} pauseOnHover>
      {items}
    </M>
  )
}
