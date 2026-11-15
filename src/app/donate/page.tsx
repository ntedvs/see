import { Metadata } from "next"
import ContentPage from "@/components/content-page"
import { getContentPage } from "@/lib/content"

const content = getContentPage("Support Our Mission")

export const metadata: Metadata = {
  title: "Support Our Mission",
  description: content.blocks.find((block) => block.type === "paragraph")
    ?.items[0],
}

export default function Page() {
  return <ContentPage content={content} cta="support" />
}
