'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import MissionValues from '@/components/about/MissionValues'
import TeamShowcase from '@/components/about/TeamShowcase'
import CraftsmanshipProcess from '@/components/about/CraftsmanshipProcess'
import CompanyTimeline from '@/components/about/CompanyTimeline'
import SustainabilityInnovation from '@/components/about/SustainabilityInnovation'

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <AboutHero />
      <MissionValues />
      <CraftsmanshipProcess />
      <TeamShowcase />
      <CompanyTimeline />
      <SustainabilityInnovation />
      
      <Footer />
    </div>
  )
}

export default About