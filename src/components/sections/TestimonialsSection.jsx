import { TESTIMONIALS } from '../../data/testimonialsData'
import MarqueeRow from '../testimonials/MarqueeRow'

const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS]
const ROW2 = [...[...TESTIMONIALS].reverse(), ...[...TESTIMONIALS].reverse()]

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="font-sans py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c1e 0%, #131130 40%, #0e1628 100%)' }}
    >
      {/* Header */}
      <div className="text-center mb-14 lg:mb-16 px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-400 mb-4">
          Testimonials
        </p>
        <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
          What Our{' '}
          <span style={{
            background: 'linear-gradient(125deg, #a78bfa 0%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Customers Say
          </span>
        </h2>
      </div>

      {/* Two marquee rows */}
      <div className="flex flex-col gap-6">
        <MarqueeRow items={ROW1} reverse={false} />
        <MarqueeRow items={ROW2} reverse={true} />
      </div>

    </section>
  )
}
