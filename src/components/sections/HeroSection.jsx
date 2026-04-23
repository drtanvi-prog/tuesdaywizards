import { useState } from 'react'
import HeroTextContent from '../hero/HeroTextContent'
import HeroOrbital from '../hero/HeroOrbital'
import VideoModal from '../custom/VideoModal'

const VIDEO_ID = 'XwCT4BCp_fw'

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section
        className="relative overflow-hidden font-sans min-h-[88vh] pb-16"
        style={{
          background: 'radial-gradient(ellipse at 15% 60%, #dbeafe 0%, #ede9fe 35%, #f5f3ff 60%, #fafbff 85%, #ffffff 100%)',
        }}
      >
        {/* Top-right accent */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[55%] h-full opacity-60"
          style={{ background: 'radial-gradient(ellipse at 85% 25%, rgba(224,231,255,0.7) 0%, transparent 55%)' }}
        />

        <div className="relative max-w-330 mx-auto px-5 sm:px-6 xl:px-12 py-10 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            <HeroTextContent onWatchPromo={() => setVideoOpen(true)} />
            <HeroOrbital />
          </div>
        </div>

        {/* Wave divider → dark services section */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-12 sm:h-16 lg:h-20 block">
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#0f0c1e" />
          </svg>
        </div>
      </section>

      {videoOpen && (
        <VideoModal videoId={VIDEO_ID} onClose={() => setVideoOpen(false)} />
      )}
    </>
  )
}
