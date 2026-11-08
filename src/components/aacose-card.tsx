import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { aacoseRegistrationUrl } from "@/lib/site"
import Reveal from "./ui/reveal"

export default function AacoseCard({
  variant = "default",
}: {
  variant?: "default" | "hero"
}) {
  const isHero = variant === "hero"
  const padding = isHero ? "p-6 sm:p-8" : "p-7 sm:p-10"

  return (
    <Reveal>
      <a
        href={aacoseRegistrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`card-interactive grid overflow-hidden rounded-2xl text-left text-white hover:no-underline md:grid-cols-[0.85fr_1.15fr] ${isHero ? "border border-white/20 bg-primary/80 shadow-xl backdrop-blur-sm" : "bg-primary shadow-sm"}`}
      >
        <div
          className={`flex items-center justify-center border-b border-white/15 md:border-r md:border-b-0 ${padding}`}
        >
          <h2 className="mb-0 w-full max-w-xs">
            <Image
              src="/aacose.png"
              alt="AACOSE 9 — Annual Africa Conference on Social Entrepreneurship"
              width={899}
              height={306}
              sizes="(min-width: 768px) 320px, (min-width: 640px) 384px, 100vw"
              className="h-auto w-full"
            />
          </h2>
        </div>
        <div className={padding}>
          <p className="mb-4 text-xl leading-relaxed font-semibold text-white">
            Africa’s social enterprise community. Together in Addis Ababa.
          </p>
          <p className="text-white/85">
            Join social entrepreneurs, policymakers, investors, and educators to
            explore digital innovation and opportunities for youth employment.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            <span>17–18 March 2027</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <span
            className={`btn-light mt-7 ${isHero ? "w-full bg-accent-light px-6 py-3.5 text-base hover:bg-white sm:w-auto" : ""}`}
          >
            Register for AACOSE 9
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </a>
    </Reveal>
  )
}
