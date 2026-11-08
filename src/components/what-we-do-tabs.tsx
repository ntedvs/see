"use client"

import Image from "next/image"
import { useState, type KeyboardEvent } from "react"

const tabs = [
  {
    name: "Connect",
    image: "/tabs/connect.webp",
    points: [
      "Build networks between social enterprises and stakeholders",
      "Facilitate partnerships and collaborations",
      "Create platforms for knowledge sharing and learning",
      "Connect members with funding opportunities and investors",
    ],
  },
  {
    name: "Promote",
    image: "/tabs/promote.webp",
    points: [
      "Raise awareness about social enterprise impact",
      "Showcase success stories and best practices",
      "Advocate for recognition of social enterprises",
      "Promote sustainable business models",
    ],
  },
  {
    name: "Empower",
    image: "/tabs/empower.webp",
    points: [
      "Provide capacity building and training programs",
      "Offer mentorship and coaching services",
      "Support skill development and leadership training",
      "Empower communities through social enterprise initiatives",
    ],
  },
  {
    name: "Advocate",
    image: "/tabs/advocate.webp",
    points: [
      "Advocate for policy reforms supporting social enterprises",
      "Represent member interests with government bodies",
      "Promote enabling regulatory frameworks",
      "Champion social enterprise rights and recognition",
    ],
  },
]

export default function WhatWeDoTabs() {
  const [activeTab, setActiveTab] = useState("Connect")

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length
    else if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (event.key === "Home") nextIndex = 0
    else if (event.key === "End") nextIndex = tabs.length - 1
    else return
    event.preventDefault()
    setActiveTab(tabs[nextIndex].name)
    document
      .getElementById(`tab-${tabs[nextIndex].name.toLowerCase()}`)
      ?.focus()
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="What we do"
        className="mb-8 grid grid-cols-4 gap-1 rounded-xl border border-line bg-surface p-1.5"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            type="button"
            role="tab"
            id={`tab-${tab.name.toLowerCase()}`}
            aria-selected={activeTab === tab.name}
            aria-controls={`panel-${tab.name.toLowerCase()}`}
            tabIndex={activeTab === tab.name ? 0 : -1}
            onClick={() => setActiveTab(tab.name)}
            onKeyDown={(event) => navigateTabs(event, index)}
            className={`flex items-center justify-center rounded-lg px-2 py-3 text-xs font-semibold transition-colors sm:py-4 sm:text-sm ${activeTab === tab.name ? "bg-white text-primary shadow-sm" : "text-foreground/60 hover:bg-white/60 hover:text-primary"}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.name}
          role="tabpanel"
          id={`panel-${tab.name.toLowerCase()}`}
          aria-labelledby={`tab-${tab.name.toLowerCase()}`}
          tabIndex={0}
          hidden={activeTab !== tab.name}
          className={
            activeTab === tab.name
              ? "page-transition grid items-stretch gap-6 lg:grid-cols-2"
              : "hidden"
          }
        >
          <div className="relative min-h-72 overflow-hidden rounded-2xl bg-muted sm:min-h-80">
            <Image
              src={tab.image}
              alt={`${tab.name} - Social Enterprise Ethiopia`}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="card flex flex-col justify-center">
            <h3 className="text-2xl text-primary">{tab.name}</h3>
            <ul className="list-disc space-y-4 pl-5 marker:text-primary/60">
              {tab.points.map((point) => (
                <li key={point} className="pl-1 text-foreground/80">
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}
