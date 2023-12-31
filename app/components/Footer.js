"use client"

import { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineTrademark } from 'react-icons/ai'
import Modal from './Modal'
import Privacy from './Privacy'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className='w-full footer border-t'>
      <Modal isOpen={isOpen} handleModal={handleModal} content={<Privacy />} />
      <div className='max-w-7xl w-full mx-auto'>
        <div className='flex flex-wrap py-10'>
          <div className='w-full md:w-1/2 lg:w-1/4 p-2  flex justify-center lg:justify-start mb-5 lg:mb-0'>
            <div className='flex flex-col items-center'>
              <Link href={'/'}>
                <Logo />
              </Link>
              <div className='flex flex-row gap-3 items-start mt-5'>
                <button aria-label='facebook' className='text-6xl ease-in-out duration-300 text-red-400 hover:scale-110'>
                  <AiFillFacebook />
                </button>
                <button aria-label='instagram' className='text-6xl ease-in-out duration-300 text-red-400 hover:scale-110'>
                  <AiFillInstagram />
                </button>
                <button aria-label='twitter' className='text-6xl ease-in-out duration-300 text-red-400 hover:scale-110'>
                  <AiFillTwitterSquare />
                </button>
                <button aria-label='linkedin' className='text-6xl ease-in-out duration-300 text-red-400 hover:scale-110'>
                  <AiFillLinkedin />
                </button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-2  flex pl-24 lg:pl-2 lg:justify-center mb-5 lg:mb-0'>
            <div className='flex flex-col '>
              <h2 className='text-slate-900 font-bold text-lg mb-2'>Servicios</h2>
              <Link href={'/desarrollo-web'}>
                <p className='text-gray-600 font-medium font-medium mb-1'>Desarrollo Web</p>
              </Link>
              <Link href={'/desarrollo-de-software'}>
                <p className='text-gray-600 font-medium mb-1'>Desarrollo de Software</p>
              </Link>
              <Link href={'/mantenimiento-y-actualizacion'}>
                <p className='text-gray-600 font-medium mb-1'>Mantenimiento y Actualización</p>
              </Link>
              <Link href={'/consultorias'}>
                <p className='text-gray-600 font-medium mb-1'>Consultorías</p>
              </Link>
              <Link href={'/hosting'}>
                <p className='text-gray-600 font-medium mb-1'>Hosting</p>
              </Link>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-2 flex pl-24 lg:pl-2 lg:justify-center mb-5 lg:mb-0'>
          <div className='flex flex-col '>
              <h2 className='text-slate-900 font-bold text-lg mb-2'>Nosotros</h2>
              <Link href={'/about'}>
                <p className='text-gray-600 font-medium mb-1'>Quienes Somos</p>
              </Link>
              <Link href={'/about/#portfolio'}>
                <p className='text-gray-600 font-medium mb-1'>Portafolio</p>
              </Link>
              {/* <Link href={'/blog'}>
                <p className='text-gray-600 font-medium mb-1'>Blog</p>
              </Link> */}
              {/* <Link href={'/about/#contrataciones'}>
                <p className='text-gray-600 font-medium mb-1'>Contrataciones</p>
              </Link> */}
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-2 flex pl-24 lg:pl-2 lg:justify-center mb-5 lg:mb-0'>
            <div className='flex flex-col '>
              <h2 className='text-slate-900 font-bold text-lg mb-2'>Soporte</h2>
              <Link href={'/#faqs'}>
                <p className='text-gray-600 font-medium mb-1'>Preguntas Frecuentes</p>
              </Link>
              <Link href={'/soporte'}>
                <p className='text-gray-600 font-medium mb-1'>Soporte 24/7</p>
              </Link>
              <Link href={'/#contact'}>
                <p className='text-gray-600 font-medium mb-1'>Contacto</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl w-full mx-auto border-t'>
        <div className='flex pt-2 px-1 lg:px-0'>
          <div className='ml-0 mr-auto flex text-gray-600 items-center'>
            <span><AiOutlineTrademark/></span>
            <p className='text-gray-600'>reactivo</p>
            <p className='ml-1 text-sm'>2023</p>
          </div>
          <div className='mr-0 ml-auto flex gap-4'>
            <p className='hidden lg:block text-gray-600'>Términos y condiciones</p>
            <p className='hidden lg:block text-gray-600 cursor-pointer' onClick={handleModal}>Aviso de privacidad</p>
            <p className='lg:hidden text-gray-600'>Condiciones</p>
            <p className='lg:hidden text-gray-600 cursor-pointer' onClick={handleModal}>Privacidad</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer