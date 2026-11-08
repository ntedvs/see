import { values, objectives } from "@/lib/about"
import PageHeading from "@/components/ui/page-heading"
import SectionHeading from "@/components/ui/section-heading"
import InfoCard from "@/components/ui/info-card"
import Reveal from "@/components/ui/reveal"
import { Metadata } from "next"
import Image from "next/image"
import AacoseCard from "@/components/aacose-card"
import Marquee from "@/components/marquee"
import { getContentPage, sectionId } from "@/lib/content"
import { contactUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Social Enterprise Ethiopia, our mission, vision, values, history, strategic objectives, governance, and partners.",
}

const topics = getContentPage("About Us")
  .blocks.flatMap((block) => block.items)
  .filter((item) => !item.startsWith("<http"))

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About Us">
        <p className="max-w-3xl text-lg leading-8 text-foreground/80">
          Building an inclusive ecosystem for social enterprises to grow,
          collaborate, and create lasting impact across Ethiopia.
        </p>
      </PageHeading>
      <div className="site-container py-12 sm:py-16">
        <nav aria-label="On this page" className="section-nav">
          {topics.map((topic) => (
            <a key={topic} href={`#${sectionId(topic)}`}>
              {topic}
            </a>
          ))}
        </nav>
        <section
          id="who-we-are"
          className="mb-16 grid scroll-mt-4 items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <SectionHeading title="Who We Are" />
            <p className="text-lg text-foreground/80">
              Social Enterprise Ethiopia (SEE), founded in 2018, is
              Ethiopia&apos;s national social enterprise body. This
              not-for-profit membership organization builds an inclusive
              ecosystem through critical thinking and thought leadership. SEE
              supports innovative solutions addressing societal, environmental,
              and economic challenges, collectively impacting 15.8 million
              Ethiopians.
            </p>
            <p className="text-foreground/80">
              We provide experience-sharing, awareness-raising, and
              capacity-building platforms for members and the public, supporting
              both existing and emerging social enterprises that deliver social
              value while growing profitably.
            </p>
          </div>
          <Image
            src="/table.webp"
            alt="Members of the Social Enterprise Ethiopia community gathered around a table"
            width={600}
            height={400}
            className="h-auto w-full rounded-2xl border border-line shadow-sm"
          />
        </section>
        <section id="vision-mission-values" className="mb-16 scroll-mt-4">
          <SectionHeading title="Vision, Mission & Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <InfoCard {...value} />
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="our-history"
          className="mb-16 scroll-mt-4 rounded-2xl bg-primary p-8 sm:p-10"
        >
          <h2 className="text-white">Our history</h2>
          <p className="mb-0 max-w-3xl text-lg text-white/85">
            Founded in 2018, SEE brings together social enterprises and
            ecosystem supporters across Ethiopia. Through networking, capacity
            building, and policy advocacy, we support enterprises that combine
            social value with sustainable business models.
          </p>
        </section>
        <section id="strategic-objectives" className="mb-16 scroll-mt-4">
          <SectionHeading title="Strategic Objectives" />
          <div className="grid gap-6 md:grid-cols-3">
            {objectives.map((objective, index) => (
              <Reveal key={objective.title} delay={index * 60}>
                <InfoCard {...objective} />
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="governance-board-secretariat"
          className="card mb-16 scroll-mt-4"
        >
          <h2 className="text-primary">Governance (Board &amp; Secretariat)</h2>
          <p className="text-foreground/80">
            For information about SEE&apos;s Board and Secretariat, please
            contact our team.
          </p>
          <a href={contactUrl} className="btn-secondary inline-flex">
            Contact Us
          </a>
        </section>
        <section id="partners-supporters" className="mb-12 scroll-mt-4">
          <SectionHeading title="Partners & Supporters" />
          <p className="max-w-3xl text-foreground/80">
            We collaborate with government agencies, development partners,
            academic institutions, the private sector, and civil society to
            strengthen Ethiopia&apos;s social enterprise ecosystem.
          </p>
          <div className="my-10 overflow-hidden">
            <Marquee />
          </div>
          <AacoseCard />
        </section>
      </div>
    </>
  )
}
