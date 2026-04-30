import { useState } from 'react'
import { TEAM } from '../../data/teamData'

function Avatar({ member }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: 0 }}
      />
    )
  }
  return (
    <div
      className="absolute inset-0 flex items-center justify-center font-black text-white select-none"
      style={{ background: member.color, fontSize: '2.8rem', letterSpacing: '0.02em' }}
    >
      {member.initials}
    </div>
  )
}

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function TeamSection() {
  const [flippedId, setFlippedId] = useState(null)

  return (
    <section id="about" className="py-20 lg:py-28 font-sans" style={{ background: '#ffffff' }}>
      <div className="max-w-330 mx-auto px-5 sm:px-6 xl:px-12">

        {/* Header */}
        <div className="mb-10 lg:mb-14 max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">
            Authorized Partners for Monday.com
          </p>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            The people behind your monday.com success
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            Unlock the full potential of monday.com with our trusted automation partners. Whether you're just getting started with monday.com workflows or looking to streamline your project management setup, our integrations with Zapier and Make (Integromat) offer powerful solutions to automate tasks, sync data, and enhance your CRM.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM.map(m => (
            <div
              key={m.id}
              style={{ height: 360, perspective: '1000px' }}
              onMouseEnter={() => setFlippedId(m.id)}
              onMouseLeave={() => setFlippedId(null)}
            >
              {/* Flip inner */}
              <div
                className="relative w-full h-full rounded-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(0.4,0.2,0.2,1)',
                  transform: flippedId === m.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* ── Front face ── */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Avatar member={m} />
                  {/* Name label at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(10,8,28,0.75) 0%, rgba(10,8,28,0.1) 45%, transparent 100%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                    {m.name && (
                      <p className="text-white font-extrabold text-[16px] leading-tight">{m.name}</p>
                    )}
                    <p className="text-[12px] mt-0.5" style={{ color: m.colorLight }}>{m.shortRole}</p>
                  </div>
                </div>

                {/* ── Back face ── */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9cc 100%)',
                  }}
                >
                  <div className="flex-1 overflow-hidden flex flex-col justify-center gap-3">
                    {m.name && (
                      <p className="text-white font-extrabold text-[18px] leading-tight">{m.name}</p>
                    )}
                    <p className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>{m.role}</p>
                    <div className="w-10 h-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }} />
                    <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)', display: '-webkit-box', WebkitLineClamp: 7, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {m.bio}
                    </p>
                  </div>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] font-semibold text-white mt-4"
                      style={{ width: 'fit-content' }}
                    >
                      <LinkedInIcon /> Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
