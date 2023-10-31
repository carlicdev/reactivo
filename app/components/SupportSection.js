"use client"

import { useState } from 'react'
import Modal from './Modal'
import TicketForm from './TicketForm'

const SupportSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [service, setService] = useState('Soporte Técnico')

    const handleClick = (arg) => {
        setService(arg);
        setIsOpen(!isOpen);
    }

  return (
    <div className='max-w-7xl mx-auto w-full my-[50px]]'>
        <Modal 
            isOpen={isOpen} 
            handleModal={() => setIsOpen(!isOpen)} 
            content={<TicketForm handleModal={() => setIsOpen(!isOpen)} service={service} />} 
        />
        <div className='w-full flex flex-wrap my-[50px]'>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='p-5'>
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Soporte Técnico.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                        Te ayudamos a solucionar problemas técnicos relacionados con tus aplicaciones o sitios web.
                    </p>
                    <div className='mt-5'>
                        <button 
                            onClick={() => handleClick('Soporte Técnico')}
                            className='shadow-lg bg-red-400 hover:scale-105 transition-all duration-300 font-medium text-2xl px-7 py-4 rounded-lg text-white '
                        >
                            Generar Ticket de Soporte
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='p-5'>
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Soporte Post-Lanzamiento.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                    Brindamos asistencia continua después del lanzamiento de una aplicación o sitio web para resolver problemas emergentes y realizar ajustes según sea necesario.
                    </p>
                    <div className='mt-5'>
                        <button 
                            onClick={() => handleClick('Soporte Post-Lanzamiento')}
                            className='shadow-lg bg-red-400 hover:scale-105 transition-all duration-300 font-medium text-2xl px-7 py-4 rounded-lg text-white '
                        >
                            Generar Ticket de Soporte
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='p-5'>
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Quejas y Sugerencias.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                    Tu opinión es muy importante para nosotros. Con tus comentarios nos ayudas a seguir mejorando.
                    </p>
                    <div className='mt-5'>
                        <button 
                            onClick={() => handleClick('Queja/Sugerencia')}
                            className='shadow-lg bg-red-400 hover:scale-105 transition-all duration-300 font-medium text-2xl px-7 py-4 rounded-lg text-white '
                        >
                            Generar Ticket de Soporte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SupportSection