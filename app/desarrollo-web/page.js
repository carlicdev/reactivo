"use client"

import { useState } from "react";
import BusinessBanner from "../components/BusinessBanner";
import CTA from "../components/CTA";
import DesarrolloWebSection from "../components/DesarrolloWebSection";
import EnterpriseBanner from "../components/EnterpriseBanner";
import Modal from "../components/Modal";
import PersonalBanner from "../components/PersonalBanner";
import SectionHeader from "../components/SectionHeader";
import SectionHero from "../components/SectionHero";
import StartupBanner from "../components/StartupBanner";
import QuoteForm from "../components/QuoteForm";

const DesarrolloWeb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <main>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm handleModal={handleModal}/>}/>
      <SectionHero title='Desarrollo Web.' subtitle={'Destaca tu presencia en línea.'} image='./webdev1.svg' imgSize={'[150px]'}/>
      <DesarrolloWebSection />
      <SectionHeader title='Una amplia baraja de opciones de Desarrollo Web.' subtitle='Contar con una presencia en línea sólida es esencial para el éxito de cualquier negocio o proyecto.'/>
      <PersonalBanner handleModal={handleModal} />
      <StartupBanner handleModal={handleModal} />
      <BusinessBanner handleModal={handleModal} />
      <EnterpriseBanner handleModal={handleModal} />
      <CTA handleModal={handleModal} text='Impulsa tu proyecto con la tecnología adecuada. ¡Solicita una cotización y comienza a construir hoy mismo!'/>

    </main>
  )
}

export default DesarrolloWeb