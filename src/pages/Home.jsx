import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/team/TeamSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import IntegrationsSection from '../components/sections/IntegrationsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import PartnersSection from '../components/sections/PartnersSection'
import ContactSection from '../components/sections/ContactSection'
import WizCloneSection from '../components/sections/WizCloneSection'

const Home = () => {
  const { state } = useLocation()

  useEffect(() => {
    if (!state?.scrollTo) return
    const el = document.getElementById(state.scrollTo)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [state])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <TeamSection />
      <CertificationsSection />
      <WhyChooseSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PortfolioSection />
      <WizCloneSection />
      <ContactSection />
    </>
  )
}

export default Home
