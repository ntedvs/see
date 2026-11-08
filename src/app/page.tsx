import { objectives, values } from "@/lib/about"
import SectionHeading from "@/components/ui/section-heading"
import InfoCard from "@/components/ui/info-card"
import Callout from "@/components/ui/callout"
import Reveal from "@/components/ui/reveal"
import AacoseCard from "@/components/aacose-card"
import { getContentPage, sectionId } from "@/lib/content"
import { contactUrl, membershipApplicationUrl } from "@/lib/site"
import CountUp from "@/components/count-up"
import Marquee from "@/components/marquee"
import WhatWeDoTabs from "@/components/what-we-do-tabs"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const members = 700
  const programs = getContentPage("Our Programs").sections.slice(0, 3)
  const membership = getContentPage("Membership")
  const membershipTypes = membership.sections.find(
    (section) => section.title === "Membership Types",
  )!.subsections

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center py-14">
        <Image
          src="/hero.webp"
          alt="Social Enterprise Ethiopia Hero"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-primary/45" aria-hidden="true" />
        <div className="site-container relative z-10 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Social Enterprise Ethiopia
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 font-medium text-white sm:text-xl sm:leading-8">
            Social Enterprise Ethiopia is the sole membership association for
            Ethiopia&apos;s social enterprise sector, serving a diverse
            community of social entrepreneurs and ecosystem supporters.
          </p>
          <div className="mx-auto max-w-5xl">
            <AacoseCard variant="hero" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={membershipApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light px-6 py-2.5"
            >
              Join Us
            </Link>
            <Link
              href="#who-we-are"
              className="flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-label="Our impact"
        className="border-b border-line bg-surface py-8 sm:py-10"
      >
        <div className="site-container grid gap-7 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
          {[
            { value: "2018", label: "Year founded" },
            { value: `${members}+`, label: "Members" },
            { value: "15.8 million", label: "Ethiopians impacted" },
          ].map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 60}
              className="flex items-center justify-center gap-4 sm:px-4"
            >
              <div>
                <p className="mb-1 text-3xl font-bold tracking-tight text-primary">
                  {stat.value}
                </p>
                <p className="mb-0 text-sm text-foreground/65">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="scroll-mt-4 py-16 sm:py-20">
        <div className="site-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/table.webp"
                alt="Social Enterprise Ethiopia Team"
                width={600}
                height={400}
                className="h-auto w-full rounded-2xl border border-line object-cover shadow-sm"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <SectionHeading title="Who We Are" />

              <p className="mb-6 text-lg text-foreground/80">
                Social Enterprise Ethiopia (SEE), founded in 2018, is
                Ethiopia&apos;s national social enterprise body with {members}+
                members. This not-for-profit membership organization builds an
                inclusive ecosystem through critical thinking and thought
                leadership. SEE supports innovative solutions addressing
                societal, environmental, and economic challenges, collectively
                impacting 15.8 million Ethiopians.
              </p>

              <p className="text-lg text-foreground/80">
                We provide experience-sharing, awareness-raising, and
                capacity-building platforms for members and the public,
                supporting both existing and emerging social enterprises that
                deliver social value while growing profitably. Our motto:
                &quot;We Impact We Profit!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="site-container">
          <SectionHeading
            title="Our Strategy"
            centered
            description="We focus on three key pillars to strengthen Ethiopia's social enterprise ecosystem and create sustainable impact across communities."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {objectives.map((objective, index) => (
              <Reveal key={objective.title} delay={index * 60}>
                <InfoCard {...objective} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-4 py-16">
        <div className="site-container">
          <SectionHeading title="What We Do" centered />

          <WhatWeDoTabs />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="site-container">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mb-0 text-primary">Featured Programs</h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-semibold"
            >
              Explore All Programs
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal key={program.title} delay={index * 60}>
                <article
                  key={program.title}
                  className="card card-interactive flex h-full flex-col"
                >
                  <h3 className="text-xl text-primary">{program.title}</h3>
                  <p className="grow text-foreground/80">
                    {program.blocks[0].items[0]}
                  </p>
                  <Link
                    href={`/programs#${sectionId(program.title)}`}
                    className="inline-flex items-center gap-2 font-semibold"
                  >
                    Learn More
                    <span className="sr-only"> about {program.title}</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <SectionHeading title="Purpose at the heart of enterprise" centered />
          <div className="grid gap-6 md:grid-cols-3">
            {[values[1], values[0], values[2]].map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <InfoCard {...value} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
        <div className="site-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="lg:py-8">
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                Membership Benefits
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/90">
                {membership.blocks[0].items[0]}
              </p>
              <div className="space-y-6">
                {membershipTypes.map((type) => (
                  <div key={type.title}>
                    <h3 className="text-xl text-white">{type.title}</h3>
                    <p className="text-white/85">{type.blocks[0].items[0]}</p>
                  </div>
                ))}
              </div>
              <Link href="/members" className="btn-light mt-3">
                Explore Membership Benefits
              </Link>
            </div>

            {/* Right Image with Overlay */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="relative aspect-3/4 h-full w-full">
                <Image
                  src="/benefits.webp"
                  alt="Social Enterprise Ethiopia Members"
                  fill
                  className="rounded-2xl object-cover"
                />

                {/* Member Count Overlay Card */}
                <div className="absolute bottom-5 left-5 rounded-xl border border-line bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary lg:text-3xl">
                      <CountUp target={members} suffix="+" />
                    </div>
                    <div className="text-sm font-medium text-foreground/70">
                      Members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="site-container">
          <div className="mb-8">
            <h2 className="text-primary">Latest News &amp; Opportunities</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card card-interactive">
              <h3 className="text-2xl text-primary">
                AACOSE 9 comes to Addis Ababa
              </h3>
              <p className="text-foreground/80">
                Explore the next AACOSE gathering, hosted by Social Enterprise
                Ethiopia, on 17–18 March 2027.
              </p>
              <a
                href="https://aacose.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold"
              >
                Explore AACOSE
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
            <article className="card card-interactive">
              <h3 className="text-2xl text-primary">
                Knowledge, tools, and new possibilities
              </h3>
              <p className="text-foreground/80">
                Explore publications, practical toolkits, research, grants,
                calls for proposals, training, events, and partnership
                opportunities.
              </p>
              <Link
                href="/resources#news-and-opportunities"
                className="inline-flex items-center gap-2 font-semibold"
              >
                Explore Resources &amp; Opportunities
              </Link>
            </article>
          </div>
        </div>
      </section>

      <div className="site-container pb-16">
        <Callout
          title="Support Our Mission"
          description="Your support helps build a stronger, more inclusive social enterprise ecosystem in Ethiopia."
        >
          <Link href="/donate" className="btn-light">
            Ways to Support
          </Link>
          <Link href="/join" className="btn-outline-light">
            Join Us
          </Link>
          <a href={contactUrl} className="btn-outline-light">
            Partner With Us
          </a>
        </Callout>
      </div>

      {/* Development Partners Section */}
      <section className="px-4 py-16">
        <div className="site-container">
          <SectionHeading
            title="Development Partners"
            centered
            description="We collaborate with leading organizations, government agencies, and development partners to strengthen Ethiopia's social enterprise ecosystem and create lasting impact."
          />
        </div>

        {/* Partner Logos Marquee */}
        <Marquee />
      </section>
    </>
  )
}
