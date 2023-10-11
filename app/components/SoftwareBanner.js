import { BsFillCheckCircleFill } from "react-icons/bs"

const SoftwareBanner = ({ handleModal }) => {
  return (
    <div id={'software-banner'} className='w-full h-auto my-[50px]' >
        <div className=' h-full py-20'>
            <div className='max-w-7xl w-full mx-auto bg-slate-950  rounded-3xl p-20'>
                <div className='flex flex-wrap'>
                    <div className='relative flex w-full lg:w-1/2 mb-5 lg:mb-0'>
                        <div className='rounded-lg shadow z-10'>
                            <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                                <div className='rounded-md overflow-hidden'>
                                    <img src={'./softwarePers2.jpg'} alt='img' className='w-full h-[400px] z-20' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                    </div>
                    <div className='w-full lg:w-1/2 lg:pl-10'>
                        <h2 className="text-gray-50 font-bold text-3xl md:text-5xl mb-2">Software</h2>
                        <h2 className="text-gray-100  font-black text-4xl md:text-6xl lg:text-7xl mb-5">Personalizado</h2>
                        <p className='text-2xl text-justify text-gray-300'>Soluciones personalizadas que automatizan procesos, aumentan la eficiencia e impulsan el crecimiento.</p>
                        <div className='flex flex-wrap mt-10'>
                            <div className='w-full lg:w-1/2 flex flex-col gap-5 '>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-300 text-lg'>Diseño de la arquitectura del software</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-300 text-lg'>{`Plan detallado de desarrollo (cronograma y recursos)`}</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-300 text-lg'>Pruebas unitarias y control de calidad</p>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col gap-5 mt-5 lg:mt-0'>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-300 text-lg'>Soporte para la implementación inicial</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-300 text-lg'>3 Meses de Soporte Post-Lanzamiento</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                    <p className='text-gray-300 text-lg'>Documentación técnica</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button 
                                onClick={handleModal}
                                className='bg-blue-700 font-medium text-2xl px-7 py-4 rounded-lg text-white '
                            >
                                Solicitar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SoftwareBanner