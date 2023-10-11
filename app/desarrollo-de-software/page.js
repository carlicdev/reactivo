"use client"

import {useState} from 'react'
import SectionHero from '../components/SectionHero'
import SoftwareBanner from '../components/SoftwareBanner'
import Modal from '../components/Modal'
import QuoteForm from '../components/QuoteForm'
import SoftwareForWho from '../components/SoftwareForWho'
import CTA from '../components/CTA'

const SoftwarePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm handleModal={handleModal} />}/>
      <SectionHero title='Desarrollo de Software.' subtitle={'A la medida. Escalable. Fácil de usar.'} image={'/software2.png'}/>
      <SoftwareBanner  handleModal={handleModal}/>
      <SoftwareForWho />
      <CTA handleModal={handleModal} text='¿Quieres automatizar los procesos de tu empresa y aumentar su productividad? Cotiza tu Software Personalizado.' /> 
    </div>
  )
}

export default SoftwarePage