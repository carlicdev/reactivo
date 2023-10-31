import {  BsTools } from 'react-icons/bs'
import { MdBrowserUpdated } from 'react-icons/md'
import Heading from './Heading'

const OtherServicesSection = ({ handleModal }) => {
  return (
    <div className='max-w-7xl mx-auto w-full bg-white shadow-xl rounded-3xl my-[50px] p-2 lg:p-10'>
      <Heading text='Tus aplicaciones en su mejor forma.' />
      <div className='flex flex-wrap justify-around'>
        <div className='w-full md:w-1/2 p-5'>
          <div className='p-5 w-full rounded-xl shadow-xl bg-white border' >
            <div className='flex items-center justify-center mt-5'>
                <span className={`bg-yellow-400 text-yellow-100 flex items-center justify-center h-[70px] w-[70px] rounded-full text-4xl`}>
                    <BsTools/>
                </span>
            </div>
            <div className='flex flex-col p-4'>
                <h2 className='font-black text-gray-800 text-xl mb-5 text-center'>Mantenimiento</h2>
                <p className='text-gray-600 lg:text-lg text-justify mb-3'>
                Comprendemos la importancia de mantener tus aplicaciones y sitios web en su mejor forma. 
                </p>
                <p className='text-gray-600 lg:text-lg text-justify'>
                Realizamos <strong>auditorías y mantenimiento regulares</strong> para garantizar que tus sistemas funcionen sin problemas, permanezcan <strong>seguros</strong> y estén al día con las últimas actualizaciones.
                </p>
            </div>
            <div className='mt-5 flex justify-center'>
                <button 
                  onClick={handleModal}
                  className='bg-red-400 hover:scale-105 transition-all duration-300 font-medium text-2xl px-7 py-4 rounded-lg text-white shadow-lg'>
                    Solicitar Mantenimiento
                </button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-5'>
          <div className='p-5 w-full rounded-xl shadow-xl bg-white border'>
            <div className='flex items-center justify-center mt-5'>
                <span className={`bg-orange-400 text-orange-100 flex items-center justify-center h-[70px] w-[70px] rounded-full text-5xl`}>
                    <MdBrowserUpdated/>
                </span>
            </div>
            <div className='flex flex-col p-4'>
                <h2 className='font-black text-gray-800 text-xl mb-5 text-center'>Actualización</h2>
                <p className='text-gray-600 lg:text-lg text-justify mb-3'>
                Ofrecemos servicios de actualización para que tus aplicaciones y sitios web estén <strong>siempre a la vanguardia.</strong> 
                </p>
                <p className='text-gray-600 lg:text-lg text-justify'>
                Mantenemos tus sistemas actualizados con las <strong>últimas características</strong> y parches de <strong>seguridad</strong> para proteger tus datos y mantener la experiencia del usuario en su punto máximo.
                </p>
            </div>
            <div className='mt-5 flex justify-center'>
                <button 
                  onClick={handleModal}
                  className='bg-red-400 hover:scale-105 transition-all duration-300 font-medium text-2xl px-7 py-4 rounded-lg text-white shadow-lg'>
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