import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/team/TeamSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import IntegrationsSection from '../components/sections/IntegrationsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import PortfolioSection from '../components/sections/PortfolioSection'

const Home = () => {
   return (
      <>
         <HeroSection />
         <ServicesSection />
         <TeamSection />
         <CertificationsSection />
         <WhyChooseSection />
         <IntegrationsSection />
         <TestimonialsSection />
         <PortfolioSection />
      </>
   )
}

export default Home