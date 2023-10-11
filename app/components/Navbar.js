"use client"

import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from './Modal'
import QuoteForm from './QuoteForm'



const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(prev => !prev)
  }
  
  return (
    <div className='w-full'>
      <Modal isOpen={modalOpen} handleModal={handleModal} content={<QuoteForm handleModal={handleModal}/>}/>
      <div className='max-w-7xl w-full mx-auto'>
        <div className='flex py-4 items-center px-2 lg:px-0'>
          <Link href={'/'} className='ml-0 mr-auto'>
            <Logo />
          </Link>

          <div className='hidden lg:flex mx-auto gap-4 mt-3'>
            <div className='relative cursor-pointer'>
              <p 
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className={`${pathname === '/servicios' ? 'border-b-2 border-blue-800' : ''} nav-link text-lg text-gray-600`}
              >
                Servicios
              </p>
                <div className={`animated-box ${submenuOpen ? 'submenu-open' : 'closed'} absolute top-[40px] footer rounded  w-[320px] flex flex-col justify-around shadow-lg`}>                      <div 
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className='p-5 capitalize'>
                      <Link href='/desarrollo-web'>
                          <p className='mb-2 hover:text-gray-400 text-gray-600 text-xl'>desarrollo web</p>
                      </Link>
                      <Link href='/desarrollo-de-software'>
                          <p className='mb-2 hover:text-gray-400 text-gray-600 text-xl'>desarrollo de software</p>
                      </Link>
                      <Link href='/mantenimiento-y-actualizacion'>
                          <p className='mb-2 hover:text-gray-400 text-gray-600 text-xl'>Mantenimiento y Actualización</p>
                      </Link>
                      <Link href='/consultorias'>
                          <p className='mb-2 hover:text-gray-400 text-gray-600 text-xl'>consultorías</p>
                      </Link>
                      <Link href='/hosting'>
                          <p className='mb-2 hover:text-gray-400 text-gray-600 text-xl'>hosting</p>
                      </Link>
                  </div>
                </div>
            </div>
            <Link href={'/about'}>
            <p className={`${pathname === '/about' ? 'border-b-2 border-blue-800' : ''} nav-link text-lg text-gray-600`}>About</p>
            </Link>
            <Link href={'/soporte'}>
            <p className={`${pathname === '/soporte' ? 'border-b-2 border-blue-800' : ''} nav-link text-lg text-gray-600`}>Soporte</p>
            </Link>
            {/* <Link href={'/blog'}>
            <p className={`${pathname === '/blog' ? 'border-b-2 border-blue-800' : ''} nav-link text-lg text-gray-600`}>Blog</p>
            </Link> */}
            <Link href={'/#contact'}>
            <p className={`${pathname === '/contacto' ? 'border-b-2 border-blue-800' : ''} nav-link text-lg text-gray-600`}>Contacto</p>
            </Link>
          </div>

          <div className='mr-0 ml-auto'>
            <button 
              onClick={handleModal}
              className='hidden lg:block bg-blue-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg text-white font-medium text-xl shadow-lg'
            >
              Solicitar Cotización
            </button>

            <div 
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden lg:block text-blue-700 hover:scale-110 transition-all duration-300 text-3xl cursor-pointer '>
              {
                !isOpen ? 
                <FiMenu /> : null
              }
            </div>
          </div>

        </div>
      </div>

      {/* Mobile */}

      <div className={`animated-box ${isOpen ? 'open' : 'closed'} lg:hidden bg-slate-100 bg-opacity-90 absolute top-0 w-full z-20`}>
                    <div className='relative w-full'>
                        <button 
                            className='absolute top-4 right-4 text-blue-700 text-4xl'
                            onClick={() => setIsOpen(!isOpen)}    
                        >
                        <AiOutlineCloseCircle />
                        </button>
                    </div>
                    <div className='flex flex-col h-full justify-center content-center '>
                        <div className='container max-w-xs justify-text mx-auto'>
                        <h2 className='font-bold  text-slate-900 text-4xl mt-10 mb-5 mx-auto'>Servicios</h2>
                            <Link href='/desarrollo-web' onClick={() => setIsOpen(!isOpen)} >
                                <p className='font-semibold hover:text-slate-500 text-slate-600 text-2xl mb-5 mx-auto'>Desarrollo Web</p>
                            </Link>
                            <Link href='/desarrollo-de-software' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-semibold hover:text-slate-500 text-slate-600 text-2xl mb-5 mx-auto'>Desarrollo de Software</p>
                            </Link>
                            <Link href='/mantenimiento-y-actualizacion' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-semibold hover:text-slate-500 text-slate-600 text-2xl mb-5 mx-auto'>Mantenimiento y Actualización</p>
                            </Link>
                            <Link href='/consultorias' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-semibold hover:text-slate-500 text-slate-600 text-2xl mb-5 mx-auto'>Consultorías</p>
                            </Link>
                            <Link href='/hosting' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-semibold hover:text-slate-500 text-slate-600 text-2xl mb-5 mx-auto'>Hosting</p>
                            </Link>
                        <h2 className='font-bold text-slate-900  text-4xl mt-10 mb-5 mx-auto'>Soporte</h2>
                        <Link href='/soporte' onClick={() => setIsOpen(!isOpen)}>
                          <p className='font-semibold text-slate-600 hover:text-slate-500 text-2xl mb-5 mx-auto'>Soporte 24/7</p>
                        </Link>
                        <Link href='/#faqs' onClick={() => setIsOpen(!isOpen)}>
                          <p className='font-semibold text-slate-600 hover:text-slate-500 text-2xl mb-5 mx-auto'>FAQs</p>
                        </Link>
                        <Link href='/#contact' onClick={() => setIsOpen(!isOpen)}>
                          <p className='font-semibold text-slate-600 hover:text-slate-500 text-2xl mb-5 mx-auto'>Contacto</p>
                        </Link>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Navbar