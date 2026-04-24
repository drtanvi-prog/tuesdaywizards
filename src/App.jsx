import React from 'react'
import Header from './components/common/Header'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import WhyChooseSection from './components/sections/WhyChooseSection'
import TeamSection from './components/team/TeamSection'
import CertificationsSection from './components/sections/CertificationsSection'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <CertificationsSection />
      <WhyChooseSection />
    </div>
  )
}

export default App
