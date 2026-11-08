import { Metadata } from "next"
import ContentPage from "@/components/content-page"
import { getContentPage } from "@/lib/content"

const content = getContentPage("Join us")

export const metadata: Metadata = {
  title: "Join us",
  description: content.blocks.find((block) => block.type === "paragraph")
    ?.items[0],
}

export default function Page() {
  return <ContentPage content={content} cta="join" />
}
