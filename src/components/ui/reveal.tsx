"use client"

import { useEffect, useRef, type ReactNode } from "react"

// Content is visible by default, including before hydration and without JavaScript.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (
      !element ||
      preference.matches ||
      !("IntersectionObserver" in window) ||
      !element.animate
    )
      return
    let animation: Animation | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (preference.matches) return
        animation = element.animate(
          [
            { opacity: 0, transform: "translateY(14px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 520,
            delay: Math.min(Math.max(delay, 0), 180),
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          },
        )
      },
      { threshold: 0, rootMargin: "0px 0px -32px 0px" },
    )
    const stopMotion = () => {
      if (preference.matches) animation?.cancel()
    }
    preference.addEventListener("change", stopMotion)
    observer.observe(element)
    return () => {
      observer.disconnect()
      animation?.cancel()
      preference.removeEventListener("change", stopMotion)
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
