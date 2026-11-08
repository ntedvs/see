import "@/styles/base.css"
import { Metadata } from "next"
import { Raleway } from "next/font/google"
import { ReactNode } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  description:
    "Social Enterprise Ethiopia strengthens the social enterprise ecosystem through entrepreneurship development, capacity building, policy advocacy, research, partnerships, and inclusive innovation.",
  title: {
    default: "Social Enterprise Ethiopia",
    template: "%s - Social Enterprise Ethiopia",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-background text-foreground ${raleway.className}`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-40">
          <Navbar />
        </header>

        <main id="main-content" className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
