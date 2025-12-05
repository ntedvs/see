import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/members", label: "Members" },
  { href: "/programs", label: "Programs" },
  { href: "/resources", label: "Resources" },
  { href: "/donate", label: "Donate" },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfoLRcoa6JJs2vJDrY8-CjsRnvMbaMq-TwJm-oGJD68vIv4rQ/viewform",
    label: "Join",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* Left Column - Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.webp"
                alt="Social Enterprise Ethiopia"
                width={50}
                height={50}
              />
              <span className="text-xl font-semibold">
                Social Enterprise Ethiopia
              </span>
            </div>

            <p className="leading-relaxed text-gray-300">
              Ethiopia&apos;s national membership organization dedicated to
              supporting and advancing the social enterprise sector across the
              country.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/SocEntEth"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com/SocEntETH"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/social_enterprise_ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-fit text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300">+251 90 079 9877</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <Link
                  href="mailto:info@socialenterpriseethiopia.org"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  info@socialenterpriseethiopia.org
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Social Enterprise Ethiopia. All rights reserved.
            </p>
            <p className="mb-0 text-sm text-gray-400">
              Made by{" "}
              <Link
                href="https://briggsdavis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Briggs Davis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
