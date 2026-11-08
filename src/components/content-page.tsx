import { ExternalLink } from "lucide-react"
import Link from "next/link"
import {
  ContentBlock,
  ContentPage as PageContent,
  ContentSection,
  sectionId,
} from "@/lib/content"
import { contactUrl, membershipApplicationUrl, supportUrl } from "@/lib/site"
import Callout from "./ui/callout"
import PageHeading from "./ui/page-heading"
import Reveal from "./ui/reveal"

const actions: Record<string, string> = {
  "Join Us": "/join",
  "Donate Now": supportUrl("One-time donation to SEE"),
  "Become a Partner": supportUrl("Partnership with SEE"),
  "Sponsor a Program": supportUrl("Sponsor a SEE program"),
  "Contact Us": contactUrl,
}

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return blocks.map((block, index) => {
    if (block.type === "list" || block.type === "ordered") {
      if (block.items.every((item) => actions[item])) {
        return (
          <div key={index} className="my-6 flex flex-wrap gap-3">
            {block.items.map((item) => (
              <a key={item} href={actions[item]} className="btn-secondary">
                {item}
              </a>
            ))}
          </div>
        )
      }
      if (block.type === "ordered") {
        return (
          <ol
            key={index}
            className="mb-5 list-decimal space-y-3 pl-5 text-foreground/80 marker:font-semibold"
          >
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        )
      }
      return (
        <ul
          key={index}
          className="mb-5 list-disc space-y-3.5 pl-5 text-foreground/80 marker:text-primary/60"
        >
          {block.items.map((item) => (
            <li key={item} className="pl-1 leading-relaxed">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
    const text = block.items[0]
    if (block.type === "quote")
      return (
        <blockquote
          key={index}
          className="my-6 rounded-r-xl border-l-2 border-accent bg-surface p-6 text-lg leading-relaxed text-primary italic"
        >
          {text}
        </blockquote>
      )
    if (block.type === "emphasis") {
      if (actions[text])
        return (
          <Link key={index} href={actions[text]} className="btn-primary my-3">
            {text}
          </Link>
        )
      return (
        <p key={index} className="font-semibold text-primary">
          {text}
        </p>
      )
    }
    return (
      <p key={index} className="leading-7 text-foreground/80">
        {text}
      </p>
    )
  })
}

function SectionCard({
  section,
  index,
}: {
  section: ContentSection
  index: number
}) {
  return (
    <Reveal delay={(index % 2) * 65} className="h-full">
      <section
        id={sectionId(section.title)}
        className="card h-full scroll-mt-4"
      >
        <h2 className="text-2xl text-primary">{section.title}</h2>
        <ContentBlocks blocks={section.blocks} />
        {section.subsections.length > 0 && (
          <div
            className={`mt-6 grid gap-5 ${section.subsections.length > 1 ? "lg:grid-cols-2" : ""}`}
          >
            {section.subsections.map((subsection) => (
              <div
                key={subsection.title}
                id={sectionId(subsection.title)}
                className="scroll-mt-4 rounded-xl border border-line bg-surface p-6"
              >
                <h3 className="text-xl text-primary">{subsection.title}</h3>
                <ContentBlocks blocks={subsection.blocks} />
                {section.title === "Ways to Support" && (
                  <a
                    href={supportUrl(subsection.title)}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Contact us about this option
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </Reveal>
  )
}

const heroImages = {
  join: {
    src: "/benefits.webp",
    alt: "The Social Enterprise Ethiopia community",
  },
  support: {
    src: "/tabs/connect.webp",
    alt: "Community members connecting through SEE",
  },
  resources: {
    src: "/table.webp",
    alt: "SEE community members sharing knowledge",
  },
  programs: {
    src: "/tabs/empower.webp",
    alt: "Empowering social entrepreneurs through SEE programs",
  },
}

export default function ContentPage({
  content,
  cta,
  grid = false,
}: {
  content: PageContent
  cta?: "join" | "support" | "resources" | "programs"
  grid?: boolean
}) {
  return (
    <>
      <PageHeading
        title={content.title}
        image={cta ? heroImages[cta] : undefined}
      >
        <div className="[&>p:first-child]:text-lg [&>p:first-child]:leading-8">
          <ContentBlocks blocks={content.blocks} />
        </div>
        {cta === "join" && (
          <a
            href={membershipApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Apply for Membership
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        {cta === "support" && (
          <a href="#ways-to-support" className="btn-primary mt-4">
            Explore Ways to Support
          </a>
        )}
      </PageHeading>
      <div className="site-container py-12 sm:py-16">
        <nav aria-label="On this page" className="section-nav">
          {content.sections.map((section) => (
            <a key={section.title} href={`#${sectionId(section.title)}`}>
              {section.title}
            </a>
          ))}
        </nav>
        <div className={`grid gap-6 ${grid ? "lg:grid-cols-2" : ""}`}>
          {content.sections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index} />
          ))}
        </div>
        <div className="mt-12">
          <Callout
            title={
              cta === "resources"
                ? "Looking for a specific resource?"
                : cta === "support"
                  ? "Together, we can create lasting impact."
                  : "Be part of the SEE community."
            }
            description={
              cta === "resources"
                ? "Contact our team for publications, downloads, and the latest opportunities."
                : "Connect with our team to learn more about membership, our programs, and opportunities to work together."
            }
          >
            <a href={contactUrl} className="btn-light">
              Contact Us
            </a>
            {cta === "join" && (
              <a
                href={membershipApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                Complete the Membership Application
                <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </Callout>
        </div>
      </div>
    </>
  )
}
