"use client"

import { useState } from 'react'
import SectionHero from '../components/SectionHero'
import ConsultoriasSection from '../components/ConsultoriasSection'
import Modal from '../components/Modal'
import QuoteForm from '../components/QuoteForm'
import ContactSection from '../components/ContactSection'

const ConsultoriasPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm handleModal={handleModal}/>} />
      <SectionHero title='Consultorías.' subtitle={'Decisiones informadas y estratégicas.'} image={'./consultoria1.png'} imgSize={'auto'}/>
      <ConsultoriasSection handleModal={handleModal} />
      <ContactSection />
    </div>
  )
}

export default ConsultoriasPage