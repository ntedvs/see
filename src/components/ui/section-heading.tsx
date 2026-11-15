export default function SectionHeading({
  title,
  description,
  centered = false,
}: {
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl leading-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg text-foreground/75 ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
