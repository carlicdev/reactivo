import React from 'react'
import SubHeading from './SubHeading'

const Mission = () => {
  return (
    <div className='max-w-7xl mx-auto w-full mb-[100px] mt-[50px]'>
        <div className='flex flex-wrap items-center pt-20 px-6 mb-[100px]'>
            <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                <SubHeading text='Nuestra Misión.' />
                <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Nuestra misión es impulsar la transformación digital y la innovación tecnológica para empresas y organizaciones de todos los tamaños.</p>
            </div>
            <div className='relative flex w-full lg:w-1/2'>
                <div className='rounded-lg shadow z-10'>
                    <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                        <div className='rounded-md overflow-hidden'>
                            <img src={'./appsEscalables.jpg'} alt='img' className='w-full z-20' />
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
            </div>
        </div>
        <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Nuestro Compromiso.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Nuestro equipo de expertos está dedicado a crear soluciones personalizadas que se ajusten a tus objetivos y necesidades específicas.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./teamwork.jpg'} alt='img' className='w-full z-20' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
    </div>
  )
}

export default Mission