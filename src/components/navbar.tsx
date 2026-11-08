"use client"

import { navLinks } from "@/lib/site"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setIsMobileMenuOpen(false)
      document.getElementById("navigation-toggle")?.focus()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isMobileMenuOpen])

  return (
    <nav
      aria-label="Main navigation"
      className="border-b border-line bg-white/95 backdrop-blur-md"
    >
      <div className="site-container">
        <div className="flex items-center justify-between gap-4 py-3.5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 hover:no-underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.webp"
              alt="Social Enterprise Ethiopia"
              width={44}
              height={44}
              className="shrink-0"
            />
            <span className="max-w-40 text-sm leading-snug font-semibold text-primary sm:max-w-52 sm:text-base">
              Social Enterprise Ethiopia
            </span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={
                  link.href === "/join" ? "btn-primary ml-3 py-2.5" : "nav-link"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            id="navigation-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border border-line p-2.5 text-primary transition-colors hover:bg-muted lg:hidden"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mobile-menu-enter border-t border-line py-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={
                    link.href === "/join"
                      ? "btn-primary mt-3 self-start"
                      : "nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
