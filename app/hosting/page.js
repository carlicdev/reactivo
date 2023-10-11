"use client"

import { useState } from 'react'
import SectionHero from '../components/SectionHero'
import HostingSection from '../components/HostingSection'
import Modal from '../components/Modal'
import QuoteForm from '../components/QuoteForm'
import ContactSection from '../components/ContactSection'

const HostingPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm handleModal={handleModal}/>} />
      <SectionHero title='Hosting.' subtitle={'Alojamiento para tus aplicaciones.'} image={'./hosting2.svg'}/>
      <HostingSection handleModal={handleModal} />
      <ContactSection />
    </div>
  )
}

export default HostingPage