export const youtubeChannelUrl =
  "https://www.youtube.com/@socialenterpriseeth9044"

export type Video = {
  id: string
  title: string
  // Same video in Amharic, shown as a secondary link.
  amharicId?: string
}

export type Photo = { src: string; alt: string }

export const eventPhotos: Photo[] = [
  {
    src: "/speaker.webp",
    alt: "A speaker addresses the audience at a SEE event",
  },
  {
    src: "/tabs/promote.webp",
    alt: "Participants at a SEE MeetUp in Addis Ababa",
  },
  {
    src: "/tabs/empower.webp",
    alt: "Entrepreneurs attending a SEE panel discussion",
  },
  {
    src: "/tabs/connect.webp",
    alt: "A SEE community session held outdoors",
  },
  {
    src: "/hero-old.webp",
    alt: "SEE leaders and partners at an evening reception",
  },
]

// Videos from SEE's YouTube channel, grouped by the Resources section they support.
export const sectionVideos: Record<string, Video[]> = {
  Toolkits: [
    {
      id: "sfyn1brH2qQ",
      title: "How to use the Gender Equality in Decent Work Toolkit",
      amharicId: "ZtfFF5Z1c7Y",
    },
    {
      id: "kCNET3cXaeo",
      title: "How to use the Human Rights in Decent Work Toolkit",
      amharicId: "HSCQd82WsN0",
    },
    {
      id: "Gu0t1IoWKa4",
      title: "How to use the Climate Change in Decent Work Toolkit",
      amharicId: "pUMVZm1okEQ",
    },
  ],
  "Research and Insights": [
    {
      id: "g7_tvROCJFk",
      title: "Validation Conference on Decent Work Toolkits for CSOs (Part 1)",
    },
    {
      id: "9O6fAT29kmk",
      title: "Validation Conference on Decent Work Toolkits for CSOs (Part 2)",
    },
  ],
  "Success Stories": [
    {
      id: "TxoGy0A0X8w",
      title:
        "Yoseph Ayele: an entrepreneur on a mission to create a borderless world",
    },
    {
      id: "Qky_uHiRI44",
      title: "Ahadu Woubshet, Co-founder & Managing Director of Moyee Coffee",
    },
  ],
  "Media Library": [
    { id: "mbZCwdOz7IE", title: "Social Enterprise Ethiopia" },
    { id: "WCRfVoXkfnU", title: "SocEnt MeetUp Addis" },
    {
      id: "EuUW5zcDUh0",
      title: "MeetUp Addis, hosted by the Embassy of Switzerland in Ethiopia",
    },
    { id: "OsKg8S19nUI", title: "MeetUp Addis, hosted by the British Council" },
    { id: "IbjOqst5Ck8", title: "Financial modeling and seeking help" },
  ],
}

// Photos shown beside the Resources sections that have no videos.
export const sectionPhotos: Record<string, Photo> = {
  Publications: eventPhotos[2],
  "News and Opportunities": eventPhotos[3],
  "Policy and Legal Resources": eventPhotos[4],
  "Resource Downloads": eventPhotos[1],
}

export const youtubeUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`
