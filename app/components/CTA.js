import React from 'react'
import Logo from './Logo'

const CTA = ({text, handleModal}) => {
  return (
    <div className='w-full h-auto bg-cover bg-center overflow-hidden' style={{ backgroundImage: 'url(./bg2.jpg)'}}>
        <div className='bg-black bg-opacity-80 h-full'>
            <div className='max-w-6xl w-full mx-auto py-20 px-10 lg:px-0'>
                <div className='flex justify-center scale-150 mt-10 mb-20'>
                    <Logo />
                </div>
                <h2 className='text-justify lg:text-center text-3xl lg:text-5xl text-slate-50'>{text}</h2>
                <div className='text-center mb-10 mt-20'>
                    <button 
                        onClick={handleModal}
                        className='bg-blue-700 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-lg text-white font-medium text-2xl'>
                        Solicitar Cotización
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA