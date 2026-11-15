"use client"

import { Video, youtubeUrl } from "@/lib/media"
import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Shows the YouTube thumbnail and only loads the player once someone presses play.
export default function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="group flex h-full flex-col">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-primary shadow-sm">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
          >
            <span className="sr-only">Play video: {video.title}</span>
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span
              className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent"
              aria-hidden="true"
            />
            <span
              className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-1/2 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <Play size={22} className="ml-0.5 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-snug font-semibold text-primary">
        {video.title}
      </figcaption>
      {video.amharicId && (
        <a
          href={youtubeUrl(video.amharicId)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-sm"
        >
          Watch in Amharic
          <span className="sr-only"> (opens YouTube in a new tab)</span>
        </a>
      )}
    </figure>
  )
}
