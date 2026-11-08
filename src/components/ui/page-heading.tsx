import Image from "next/image"
import Link from "next/link"
import { type ReactNode } from "react"
import Reveal from "./reveal"

export default function PageHeading({
  title,
  image,
  children,
}: {
  title: string
  image?: { src: string; alt: string }
  children: ReactNode
}) {
  return (
    <section className="page-heading border-b border-line bg-surface py-12 sm:py-16">
      <div className="site-container">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex items-center gap-2 text-sm text-foreground/60"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <div
          className={`grid items-center gap-12 ${image ? "lg:grid-cols-[minmax(0,1fr)_17rem]" : ""}`}
        >
          <Reveal>
            <h1 className="max-w-4xl text-4xl leading-[1.12] tracking-tight text-primary sm:text-5xl">
              {title}
            </h1>
            <div className="max-w-3xl">{children}</div>
          </Reveal>
          {image && (
            <Reveal delay={100} className="relative hidden lg:block">
              <div
                className="absolute -right-3 -bottom-3 h-3/4 w-3/4 rounded-2xl border border-accent/35"
                aria-hidden="true"
              />
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="272px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
