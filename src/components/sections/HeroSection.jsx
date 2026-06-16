import { useState } from 'react'
import HeroTextContent from '../hero/HeroTextContent'
import HeroMondayAgent from '../hero/HeroMondayAgent'
import VideoModal from '../custom/VideoModal'

const VIDEO_ID = 'XwCT4BCp_fw'

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden font-sans min-h-[92vh] flex flex-col bg-[#F4ECF9]">

        {/* ── Main content ── */}
        <div className="relative flex-1 max-w-330 mx-auto w-full px-5 sm:px-6 xl:px-12 py-12 sm:py-16 lg:py-20 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">
            <HeroTextContent onWatchPromo={() => setVideoOpen(true)} />
            <HeroMondayAgent />
          </div>
        </div>

        {/* ── Wave divider into dark services section ── */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-12 sm:h-16 lg:h-20 block">
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#0f0c1e" />
          </svg>
        </div>

      </section>

      {videoOpen && <VideoModal videoId={VIDEO_ID} onClose={() => setVideoOpen(false)} />}
    </>
  )
}
