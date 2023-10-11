"use client"

import { useState } from 'react'
import SectionHero from '../components/SectionHero'
import OtherServicesSection from '../components/OtherServicesSection'
import Modal from '../components/Modal'
import QuoteForm from '../components/QuoteForm'

const OtherServicesPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm handleModal={handleModal}/>}/>
        <SectionHero title='Mantenimiento y Actualización.' subtitle='Siempre a la vanguardia.' image={'/mantenimiento1.svg'}/>
      <OtherServicesSection handleModal={handleModal} />
    </div>
  )
}

export default OtherServicesPage