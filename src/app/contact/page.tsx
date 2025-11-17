'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import CustomerSupport from '@/components/contact/CustomerSupport'
import BusinessPartnerships from '@/components/contact/BusinessPartnerships'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <CustomerSupport />
      <BusinessPartnerships />
      
      <Footer />
    </div>
  )
}

export default Contact