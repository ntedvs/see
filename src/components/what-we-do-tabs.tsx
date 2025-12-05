"use client"

import Image from "next/image"
import { useState } from "react"

export default function WhatWeDoTabs() {
  const [activeTab, setActiveTab] = useState("Connect")

  const tabs = [
    {
      name: "Connect",
      image: "/tabs/connect.webp",
      content: {
        title: "Connect",
        points: [
          "Build networks between social enterprises and stakeholders",
          "Facilitate partnerships and collaborations",
          "Create platforms for knowledge sharing and learning",
          "Connect members with funding opportunities and investors",
        ],
      },
    },
    {
      name: "Promote",
      image: "/tabs/promote.webp",
      content: {
        title: "Promote",
        points: [
          "Raise awareness about social enterprise impact",
          "Showcase success stories and best practices",
          "Advocate for recognition of social enterprises",
          "Promote sustainable business models",
        ],
      },
    },
    {
      name: "Empower",
      image: "/tabs/empower.webp",
      content: {
        title: "Empower",
        points: [
          "Provide capacity building and training programs",
          "Offer mentorship and coaching services",
          "Support skill development and leadership training",
          "Empower communities through social enterprise initiatives",
        ],
      },
    },
    {
      name: "Advocate",
      image: "/tabs/advocate.webp",
      content: {
        title: "Advocate",
        points: [
          "Advocate for policy reforms supporting social enterprises",
          "Represent member interests with government bodies",
          "Promote enabling regulatory frameworks",
          "Champion social enterprise rights and recognition",
        ],
      },
    },
  ]

  return (
    <>
      {/* Tab Navigation */}
      <div className="mb-8 grid grid-cols-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`border-b-2 px-6 py-4 font-semibold transition-colors ${
              activeTab === tab.name
                ? "border-primary bg-primary/5 text-primary"
                : "border-gray-200 text-foreground/70 hover:border-gray-300 hover:text-foreground"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tabs.map(
        (tab) =>
          activeTab === tab.name && (
            <div
              key={tab.name}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              {/* Image */}
              <div className="relative aspect-video w-full">
                <Image
                  src={tab.image}
                  alt={`${tab.name} - Social Enterprise Ethiopia`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Content Card */}
              <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  {tab.content.title}
                </h3>
                <ul className="space-y-4">
                  {tab.content.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mt-2 mr-3 block h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ),
      )}
    </>
  )
}
