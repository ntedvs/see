import "@/styles/base.css"
import { Metadata } from "next"
import { Raleway } from "next/font/google"
import { ReactNode } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
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
        <header>
          <Navbar />
        </header>

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
