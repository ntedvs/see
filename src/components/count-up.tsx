"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"

interface CountUpProps {
  target: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CountUp({
  target,
  duration = 1200,
  suffix = "",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !ref.current || !("IntersectionObserver" in window))
      return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / Math.max(duration, 1), 1)
          setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)
      },
      { threshold: 0.25 },
    )
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration, reducedMotion])

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">
        {target}
        {suffix}
      </span>
      <span aria-hidden="true">
        {reducedMotion ? target : count}
        {suffix}
      </span>
    </span>
  )
}
