import React from 'react'
import privacy from '../assets/privacy'

const Privacy = () => {
  return (
    <div className='p-2'>
        <h2 className='font-black text-3xl mb-5'>Aviso de Privacidad</h2>
        {privacy.map((item, index) => (
            <p className='text-justify mb-3 text-gray-600' key={index}>{item}</p>
        ))}
    </div>
  )
}

export default Privacy