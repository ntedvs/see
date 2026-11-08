export const membershipApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfoLRcoa6JJs2vJDrY8-CjsRnvMbaMq-TwJm-oGJD68vIv4rQ/viewform"

export const contactEmail = "info@socialenterpriseethiopia.org"
export const contactUrl = `mailto:${contactEmail}`
export const aacoseUrl = "https://aacose.org/"
export const aacoseRegistrationUrl = `${aacoseUrl}#tickets`

export const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/members", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/donate", label: "Support Us" },
  { href: "/join", label: "Join Us" },
]

export function supportUrl(subject: string) {
  return `${contactUrl}?subject=${encodeURIComponent(subject)}`
}
