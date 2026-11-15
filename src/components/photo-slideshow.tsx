"use client"

import { Photo } from "@/lib/media"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { Pause, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Cross-fades through photos. Stays on the first photo when reduced motion is preferred.
export default function PhotoSlideshow({
  photos,
  sizes,
  interval = 4500,
}: {
  photos: Photo[]
  sizes: string
  interval?: number
}) {
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const animate = !reducedMotion && !paused && photos.length > 1

  useEffect(() => {
    if (!animate) return
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % photos.length),
      interval,
    )
    return () => clearInterval(timer)
  }, [animate, interval, photos.length])

  return (
    <>
      {photos.map((photo, photoIndex) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          aria-hidden={photoIndex !== index}
          fill
          sizes={sizes}
          priority={photoIndex === 0}
          style={{ transition: "opacity 1.2s ease-out, transform 6s ease-out" }}
          className={`object-cover ${
            photoIndex === index
              ? "scale-105 opacity-100"
              : "scale-100 opacity-0"
          }`}
        />
      ))}
      {!reducedMotion && photos.length > 1 && (
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition-colors hover:bg-white"
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        >
          {paused ? (
            <Play size={16} aria-hidden="true" />
          ) : (
            <Pause size={16} aria-hidden="true" />
          )}
        </button>
      )}
    </>
  )
}
