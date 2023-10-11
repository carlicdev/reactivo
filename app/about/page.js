"use client"

import { useState } from 'react'
import AboutHero from '../components/AboutHero'
import Mission from '../components/Mission'
import Values from '../components/Values'
import ContactSection from '../components/ContactSection'
import PortfolioSection from '../components/PortfolioSection'
import CTA from '../components/CTA'
import Modal from '../components/Modal'
import QuoteForm from '../components/QuoteForm'


const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm />} />
      <AboutHero />
      <Mission />
      <Values />
      <CTA text='Empieza a desarrollar tu nuevo software hoy mismo.' handleModal={handleModal} />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}

export default AboutPage