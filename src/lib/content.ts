import { readFileSync } from "node:fs"
import { join } from "node:path"

export type ContentBlock = {
  type: "paragraph" | "emphasis" | "quote" | "list" | "ordered"
  items: string[]
}

export type ContentSection = {
  title: string
  blocks: ContentBlock[]
  subsections: ContentSection[]
}

export type ContentPage = {
  title: string
  blocks: ContentBlock[]
  sections: ContentSection[]
}

export function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

// The supplied Markdown remains the source of truth for all updated page copy.
function readContent(): ContentPage[] {
  const markdown = readFileSync(
    join(process.cwd(), "content_update.md"),
    "utf8",
  )
  const pages: ContentPage[] = []
  let page: ContentPage | undefined
  let section: ContentSection | undefined
  let subsection: ContentSection | undefined

  for (const chunk of markdown.trim().split(/\r?\n\s*\r?\n/)) {
    const text = chunk.trim()
    if (text.startsWith("# ")) {
      page = { title: text.slice(2), blocks: [], sections: [] }
      pages.push(page)
      section = undefined
      subsection = undefined
      continue
    }
    if (!page) continue
    if (text.startsWith("## ")) {
      section = { title: text.slice(3), blocks: [], subsections: [] }
      page.sections.push(section)
      subsection = undefined
      continue
    }
    if (text.startsWith("### ")) {
      if (!section) throw new Error(`Missing parent section: ${text}`)
      subsection = { title: text.slice(4), blocks: [], subsections: [] }
      section.subsections.push(subsection)
      continue
    }
    const blocks = (subsection ?? section ?? page).blocks
    if (text.startsWith("- ")) {
      blocks.push({
        type: "list",
        items: text.split(/\r?\n/).map((line) => line.slice(2)),
      })
    } else if (/^\d+\. /.test(text)) {
      blocks.push({
        type: "ordered",
        items: text.split(/\r?\n/).map((line) => line.replace(/^\d+\. /, "")),
      })
    } else if (text.startsWith("> ")) {
      blocks.push({ type: "quote", items: [text.slice(2)] })
    } else if (text.startsWith("**") && text.endsWith("**")) {
      blocks.push({ type: "emphasis", items: [text.slice(2, -2)] })
    } else {
      blocks.push({ type: "paragraph", items: [text] })
    }
  }
  return pages
}

const pages = readContent()

export function getContentPage(title: string) {
  const page = pages.find((entry) => entry.title === title)
  if (!page) throw new Error(`Content page not found: ${title}`)
  return page
}
