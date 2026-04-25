import Card from './Card'

export default function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 sm:w-48 z-10"
        style={{ background: 'linear-gradient(to right, #0f0c1e, transparent)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 sm:w-48 z-10"
        style={{ background: 'linear-gradient(to left, #0e1628, transparent)' }}
      />
      <div
        className={`flex py-4 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}
        style={{ width: 'max-content' }}
      >
        {items.map((t, i) => (
          <Card key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}
