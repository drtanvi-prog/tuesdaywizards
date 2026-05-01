import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function ThankYou() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col items-center justify-center px-5 sm:px-8 text-center">

      {/* Check icon */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6"
        style={{
          background: '#11ab4a',
          boxShadow: '0 0 40px rgba(34,197,94,0.2)',
        }}
      >
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Label */}
      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-purple-500 mb-3">
        Booking Confirmed
      </p>

      {/* Heading */}
      <h1 className="text-[24px] sm:text-[34px] lg:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
        Thank You for{' '}
        <span style={{
          background: 'linear-gradient(125deg, #16a34a 0%, #22c55e 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Booking!
        </span>
      </h1>

      {/* Divider */}
      <div className="w-10 sm:w-12 h-0.5 rounded-full bg-purple-200 mb-5" />

      {/* Subtext */}
      <p className="text-[13px] sm:text-[15px] text-gray-500 leading-relaxed max-w-xs sm:max-w-md mb-2">
        We've received your request and will be in touch shortly.
      </p>
      <p className="text-[13px] sm:text-[15px] text-gray-500 leading-relaxed max-w-xs sm:max-w-md mb-8 sm:mb-10">
        We look forward to speaking with you and helping you unlock the full power of{' '}
        <span className="font-semibold text-gray-700">monday.com</span>.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
        <Button variant="primary" onClick={() => navigate('/')} className="w-full sm:w-auto px-8 justify-center">
          Back to Home
        </Button>
        <Button
          as="a"
          href="https://calendly.com/tuesdaywizard/30minutestrategy"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          className="w-full sm:w-auto px-8 justify-center"
        >
          Book Another Call
        </Button>
      </div>

    </div>
  )
}
