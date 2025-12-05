"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  target: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CountUp({
  target,
  duration = 2000,
  suffix = "",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [hasAnimated])

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      const startTime = performance.now()
      const startValue = 0

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(
          startValue + (target - startValue) * easeOutQuart,
        )

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, hasAnimated, target, duration])

  return (
    <span ref={elementRef} className={className}>
      {count}
      {suffix}
    </span>
  )
}
