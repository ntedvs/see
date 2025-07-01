import CountUp from "@/components/count-up"
import Marquee from "@/components/marquee"
import WhatWeDoTabs from "@/components/what-we-do-tabs"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Social Enterprise Ethiopia Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Social Enterprise Ethiopia
          </h1>
          <p className="mb-8 max-w-3xl text-xl text-white md:text-2xl">
            Social Enterprise Ethiopia is the sole membership association for
            Ethiopia's social enterprise sector, serving a diverse community of
            social entrepreneurs and ecosystem supporters.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/join"
              className="flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Join Us
            </a>
            <a
              href="/about"
              className="flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/table.jpg"
                alt="Social Enterprise Ethiopia Team"
                width={600}
                height={400}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Who We Are
              </h2>

              <p className="mb-6 text-lg text-foreground/80">
                Social Enterprise Ethiopia (SEE), founded in 2018, is Ethiopia's
                national social enterprise body with 250+ members. This
                not-for-profit membership organization builds an inclusive
                ecosystem through critical thinking and thought leadership. SEE
                supports innovative solutions addressing societal,
                environmental, and economic challenges, collectively impacting
                15.8 million Ethiopians.
              </p>

              <p className="text-lg text-foreground/80">
                We provide experience-sharing, awareness-raising, and
                capacity-building platforms for members and the public,
                supporting both existing and emerging social enterprises that
                deliver social value while growing profitably. Our motto: "We
                Impact We Profit!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy Section */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Our Strategy
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-foreground/80">
              We focus on three key pillars to strengthen Ethiopia's social
              enterprise ecosystem and create sustainable impact across
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Policy Development Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Policy Development
              </h3>
              <p className="text-foreground/80">
                We work with government agencies and stakeholders to develop
                policies that support social enterprise growth and create an
                enabling regulatory environment for sustainable impact.
              </p>
            </div>

            {/* Impact Measurement Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Impact Measurement
              </h3>
              <p className="text-foreground/80">
                We establish standardized frameworks and tools to measure and
                report social impact, helping enterprises demonstrate their
                value and attract investment for scaling their solutions.
              </p>
            </div>

            {/* Financial Sustainability Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Financial Sustainability
              </h3>
              <p className="text-foreground/80">
                We connect social enterprises with funding opportunities,
                provide financial literacy training, and support the development
                of sustainable business models that balance profit with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              What We Do
            </h2>
          </div>

          <WhatWeDoTabs />
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Our Mission */}
            <div className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="leading-relaxed text-foreground/80">
                To strengthen Ethiopia's social enterprise ecosystem by
                providing advocacy, capacity building, networking, and knowledge
                sharing opportunities that enable social enterprises to create
                sustainable impact in their communities.
              </p>
            </div>

            {/* Our Vision */}
            <div className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="leading-relaxed text-foreground/80">
                A thriving social enterprise ecosystem in Ethiopia where
                innovative solutions address societal challenges while
                generating sustainable economic value and creating lasting
                positive impact for all communities.
              </p>
            </div>

            {/* Our Values */}
            <div className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Our Values
              </h3>
              <p className="leading-relaxed text-foreground/80">
                Innovation, collaboration, integrity, and impact drive our work.
                We believe in the power of social enterprises to create
                meaningful change while maintaining financial sustainability and
                ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="relative overflow-hidden bg-primary px-4 py-16 text-white">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="lg:py-8">
              <h2 className="mb-6 text-3xl font-bold text-white/90 lg:text-4xl">
                Membership Benefits
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/90">
                Advocate for new "social enterprise" registration with tax
                incentives and bid preferences. Represent members to
                policymakers, funders, and private sector partners.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white/90">
                Connect members to a supportive network of social enterprises,
                advocates, and aligned organizations. Provide two hours of free
                consultancy covering advice, information, and strategic support.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white/90">
                Member-only training events and significantly reduced fees for
                business capacity building programs. Bursaries and complimentary
                event tickets available.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                Free promotion through Social Enterprise of the Week feature and
                business directory listing. Certification letters and support
                for donor opportunities aligned with the social enterprise
                model.
              </p>
            </div>

            {/* Right Image with Overlay */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="relative aspect-[3/4] h-full w-full">
                <Image
                  src="/benefits.jpg"
                  alt="Social Enterprise Ethiopia Members"
                  fill
                  className="rounded-lg object-cover"
                />

                {/* Member Count Overlay Card */}
                <div className="absolute bottom-4 left-4 rounded-lg bg-white p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary lg:text-3xl">
                      <CountUp target={380} suffix="+" />
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

      {/* Development Partners Section */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Development Partners
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-foreground/80">
              We collaborate with leading organizations, government agencies,
              and development partners to strengthen Ethiopia's social
              enterprise ecosystem and create lasting impact.
            </p>
          </div>
        </div>

        {/* Partner Logos Marquee */}
        <Marquee className="py-8" />
      </section>
    </>
  )
}
