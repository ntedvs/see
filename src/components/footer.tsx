import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width={size}
          height={size}
          aria-hidden="true"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
  )
}

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
                <Link
                    href="https://www.linkedin.com/in/social-enterprise-ethiopia-association-530675226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                    href="https://t.me/seethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
                >
                  <TelegramIcon />
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
                <div className="flex items-center space-x-3">
                <span className="shrink-0 text-gray-400">
                  <TelegramIcon size={18} />
                </span>
                  <Link
                      href="https://t.me/seethiopia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 transition-colors hover:text-white"
                  >
                    @seethiopia
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={18} className="text-gray-400" />
                  <Link
                      href="https://www.linkedin.com/in/social-enterprise-ethiopia-association-530675226"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 transition-colors hover:text-white"
                  >
                    Social Enterprise Ethiopia Association
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
