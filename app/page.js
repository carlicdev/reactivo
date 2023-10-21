"use client"
import { useState } from "react";
import CTA from "./components/CTA";
import ContactSection from "./components/ContactSection";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Process from "./components/Process";
import ServicesOverview from "./components/ServicesOverview";
import Testimonial from "./components/Testimonial";
import QuoteForm from "./components/QuoteForm";
import BlogSection from "./components/BlogSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSections from "./components/ProjectsSections";
import ProcessMobile from "./components/ProcessMobile";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <main>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<QuoteForm  handleModal={handleModal}/>} />
      <Hero handleModal={handleModal}/>
      <ServicesSection />
      <div className="hidden lg:block">
        <Process />
      </div>
      <div className="lg:hidden">
        <ProcessMobile />
      </div>
      <ServicesOverview />
      <CTA handleModal={handleModal} text='Transformemos tu visión en realidad! Obtén una cotización personalizada hoy mismo.'/>
      <Testimonial />
      <ProjectsSections/>
      {/* <PortfolioSection /> */}
      {/* <BlogSection /> */}
      <FAQs />
      <ContactSection />
    </main>
  )
}
