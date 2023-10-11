import React from 'react'
import SubHeading from './SubHeading'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const PersonalBanner = ({handleModal}) => {
  return (
    <div id={'personal-banner'} className='max-w-7xl w-full mx-auto bg-gray-200 relative rounded-3xl p-20 my-[50px]'>
        <div className='tag-left absolute top-7 left-0 lg:left-[-10px]  bg-gradient-to-bl from-blue-700 to-blue-800 p-2 shadow'>
            <h2 className='text-gray-50 text-lg'>Desde $14,999</h2>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-0 '>
            <div className='order-2 lg:order-1 w-full lg:w-1/2 lg:pr-10'>
                <SubHeading text='Paquete'/>
                <h2 className="text-gray-900 font-black text-4xl md:text-6xl lg:text-7xl mt-2 mb-5">Personal</h2>
                <p className='text-2xl text-justify text-gray-600'>Ideal para influencers, autores y creativos. Tu plataforma personal te ayudará a aumentar el numero de seguidores, mostrar tu trabajo y mucho más.</p>
                        <div className='flex flex-wrap mt-10'>
                            <div className='w-full lg:w-1/2 flex flex-col gap-5 '>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-600 text-lg'>5 Páginas</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-600 text-lg'>Integración con redes sociales</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-600 text-lg'>Formulario de contacto</p>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col gap-5 mt-5 lg:mt-0'>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-600 text-lg'>3 Meses de Soporte Técnico</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-600 text-lg'>1 Mes de Mantenimiento y Actualización</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-600 text-lg'>1 año de Hosting</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button 
                                onClick={handleModal}
                                className='bg-blue-700 hover:scale-105 transition-all duration-300font-medium text-2xl px-7 py-4 rounded-lg text-white shadow-lg '
                            >
                                Solicitar Cotización
                            </button>
                        </div>
            </div>
            <div className='order-1 lg:order-2 relative flex w-full lg:w-1/2 mb-5 lg:mb-0'>
                <div className='rounded-lg  z-10'>
                    <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                        <div className='rounded-md overflow-hidden'>
                            <img src={'./influencer1.jpg'} alt='img' className='w-full h-[400px] z-20' />
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
            </div>
        </div>
    </div>
  )
}

export default PersonalBanner