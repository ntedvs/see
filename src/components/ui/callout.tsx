import { type ReactNode } from "react"
import Reveal from "./reveal"

export default function Callout({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <Reveal>
      <section className="rounded-2xl bg-primary p-8 sm:p-10">
        <h2 className="mb-3 text-2xl text-white sm:text-3xl">{title}</h2>
        <p className="mb-0 max-w-3xl text-white/80">{description}</p>
        <div className="mt-7 flex flex-wrap gap-3">{children}</div>
      </section>
    </Reveal>
  )
}
