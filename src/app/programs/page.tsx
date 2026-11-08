import { Metadata } from "next"
import ContentPage from "@/components/content-page"
import { getContentPage } from "@/lib/content"

const content = getContentPage("Our Programs")

export const metadata: Metadata = {
  title: "Our Programs",
  description: content.blocks.find((block) => block.type === "paragraph")
    ?.items[0],
}

export default function Page() {
  return <ContentPage content={content} cta="programs" grid />
}
