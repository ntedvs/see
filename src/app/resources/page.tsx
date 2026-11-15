import { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, PlayCircle } from "lucide-react"
import { ContentBlocks } from "@/components/content-page"
import PhotoMarquee from "@/components/photo-marquee"
import VideoCard from "@/components/video-card"
import Callout from "@/components/ui/callout"
import PageHeading from "@/components/ui/page-heading"
import Reveal from "@/components/ui/reveal"
import { getContentPage, sectionId } from "@/lib/content"
import {
  eventPhotos,
  sectionPhotos,
  sectionVideos,
  youtubeChannelUrl,
} from "@/lib/media"
import { contactUrl } from "@/lib/site"

const content = getContentPage("Resources")

export const metadata: Metadata = {
  title: "Resources",
  description: content.blocks.find((block) => block.type === "paragraph")
    ?.items[0],
}

function YouTubeLink({ className }: { className: string }) {
  return (
    <a
      href={youtubeChannelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <PlayCircle size={18} aria-hidden="true" />
      Watch on our YouTube channel
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default function Page() {
  return (
    <>
      <PageHeading title={content.title} image={eventPhotos}>
        <div className="[&>p:first-child]:text-lg [&>p:first-child]:leading-8">
          <ContentBlocks blocks={content.blocks} />
        </div>
        <YouTubeLink className="btn-primary mt-4" />
      </PageHeading>
      <div className="site-container py-12 sm:py-16">
        <nav aria-label="On this page" className="section-nav">
          {content.sections.map((section) => (
            <a key={section.title} href={`#${sectionId(section.title)}`}>
              {section.title}
            </a>
          ))}
        </nav>
        <div className="space-y-16 sm:space-y-24">
          {content.sections.map((section, index) => {
            const videos = sectionVideos[section.title]
            const photo = sectionPhotos[section.title]
            const isMediaLibrary = section.title === "Media Library"
            return (
              <Reveal key={section.title}>
                <section id={sectionId(section.title)} className="scroll-mt-4">
                  {videos ? (
                    <>
                      <div className="max-w-3xl">
                        <h2 className="text-3xl text-primary">
                          {section.title}
                        </h2>
                        <ContentBlocks blocks={section.blocks} />
                      </div>
                      {isMediaLibrary && (
                        <div className="-mx-5 my-8 sm:mx-0">
                          <PhotoMarquee photos={eventPhotos} />
                        </div>
                      )}
                      <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        {videos.map((video) => (
                          <VideoCard key={video.id} video={video} />
                        ))}
                        {isMediaLibrary && (
                          <a
                            href={youtubeChannelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primary/25 bg-surface p-6 text-center font-semibold transition-colors hover:border-primary hover:bg-white hover:no-underline"
                          >
                            <PlayCircle size={32} aria-hidden="true" />
                            See all videos on YouTube
                            <span className="sr-only">
                              {" "}
                              (opens in a new tab)
                            </span>
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                      <div className={index % 2 ? "lg:order-2" : ""}>
                        <h2 className="text-3xl text-primary">
                          {section.title}
                        </h2>
                        <ContentBlocks blocks={section.blocks} />
                      </div>
                      {photo && (
                        <div className="group relative aspect-3/2 overflow-hidden rounded-2xl border border-line bg-muted shadow-sm">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(min-width: 1024px) 560px, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </section>
              </Reveal>
            )
          })}
        </div>
        <div className="mt-16">
          <Callout
            title="Looking for a specific resource?"
            description="Contact our team for publications, downloads, and the latest opportunities, or catch up on our events and toolkit guides on YouTube."
          >
            <a href={contactUrl} className="btn-light">
              Contact Us
            </a>
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Visit our YouTube channel
              <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Callout>
        </div>
      </div>
    </>
  )
}
