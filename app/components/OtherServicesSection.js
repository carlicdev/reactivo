import React from 'react'

const OtherServicesSection = ({ handleModal }) => {
  return (
    <div className='max-w-7xl w-full mx-auto my-[50px]'>
      <div className='flex flex-wrap justify-around'>
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <div className='p-5'>
            <h2 className='text-gray-900 lg:text-lg mb-1'>Mantenimiento.</h2>
            <p className='text-gray-600 lg:text-lg text-justify'>
            Comprendemos la importancia de mantener tus aplicaciones y sitios web en su mejor forma. Realizamos auditorías y mantenimiento regulares para garantizar que tus sistemas funcionen sin problemas, permanezcan seguros y estén al día con las últimas actualizaciones.
            </p>
            <div className='mt-5'>
                <button 
                  onClick={handleModal}
                  className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'>
                    Solicitar Mantenimiento
                </button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <div className='p-5'>
            <h2 className='text-gray-900 lg:text-lg mb-1'>Actualización.</h2>
            <p className='text-gray-600 lg:text-lg text-justify'>
            Ofrecemos servicios de actualización para que tus aplicaciones y sitios web estén siempre a la vanguardia. Mantenemos tus sistemas actualizados con las últimas características y parches de seguridad para proteger tus datos y mantener la experiencia del usuario en su punto máximo.
            </p>
            <div className='mt-5'>
                <button 
                  onClick={handleModal}
                  className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'>
                    Solicitar Actualización
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherServicesSection