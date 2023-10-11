"use client"

import React, { useState } from 'react'
import SectionHero from '../components/SectionHero'
import SupportSection from '../components/SupportSection'
import IdeaCard from '../components/IdeaCard'
import Modal from '../components/Modal'
import TicketForm from '../components/TicketForm'
import TicketStatus from '../components/TicketStatus'

const SupportPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<TicketForm  handleModal={handleModal}/>} />
      <SectionHero title='Soporte.' subtitle='Estamos para servirte.' image={'./callCenter1.svg'} imgSize={'[350px]'}/>
      <div className='max-w-7xl mx-auto w-full mb-10'>
        <div className='w-full lg:w-1/3 px-5'>
          <h2 className='text-gray-900 lg:text-lg mb-1'>Atención a Clientes</h2>
          <p className='text-gray-600 lg:text-lg text-justify'>Bienvenido a nuestra página de soporte. En reactivo utilizamos un sistema de tickets que nos permite brindarte un mejor servicio.</p>
        </div>
      </div>
      <TicketStatus />
      <SupportSection handleModal={handleModal} />
    </div>
  )
}

export default SupportPage