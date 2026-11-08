export default function InfoCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="card h-full">
      <h3 className="text-xl text-primary">{title}</h3>
      <p className="mb-0 leading-7 text-foreground/80">{text}</p>
    </div>
  )
}
