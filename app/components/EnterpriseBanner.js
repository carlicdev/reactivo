
import Image from "next/image"
import { BsFillCheckCircleFill } from "react-icons/bs"

const EnterpriseBanner = ({ handleModal }) => {
  return (
    <div id={'enterprise-banner'} className='w-full h-auto my-[150px]' style={{ backgroundImage: 'url(./bg2.jpg)'}}>
    <div className='bg-black bg-opacity-50 h-full py-20'>
        <div className='max-w-7xl w-full mx-auto relative bg-slate-950 rounded-3xl p-5 lg:p-20'>
            <div className='tag-right absolute top-7 right-0 lg:right-[-10px]  bg-gradient-to-bl from-red-400 to-red-500 p-2 shadow'>
                <h2 className='text-gray-50 text-lg'>Desde $94,999</h2>
            </div>
            <div className='flex flex-wrap items-center'>
                <div className="w-full lg:w-1/2">
                    <div className='relative flex  mb-5 mt-24 lg:mt-0'>
                        <div className='rounded-lg shadow z-10'>
                            <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={'/enterprise1.jpg'} alt='img' width={600} height={400}/>
                                </div>
                            </div>
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:pl-10'>
                    <h2 className="text-gray-50 font-bold text-3xl md:text-5xl mb-2">Paquete</h2>
                    <h2 className="text-gray-100  font-black text-4xl md:text-6xl lg:text-7xl mb-5">Enterprise</h2>
                    <p className='text-2xl text-justify text-gray-300'>Una plataforma que te permite automatizar tareas, aumentar la ventas y mejorar la productividad de tu empresa.</p>
                    <div className='flex flex-wrap mt-10'>
                        <div className='w-full lg:w-1/2 flex flex-col gap-5 '>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>Sin límite específico de páginas</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>Integración de sistemas empresariales</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>Aplicaciones personalizadas</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>Análisis de datos</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col gap-5 mt-5 lg:mt-0'>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>Seguridad avanzada</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>Soporte Técnico continuo</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <span className='text-blue-700 text-2xl'><BsFillCheckCircleFill /></span>
                                <p className='text-gray-300 text-lg'>1 año de Mantenimiento y Actualización</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <button 
                            onClick={handleModal}
                            className='bg-red-400 hover:scale-105 transition-all duration-300 font-medium text-2xl px-7 py-4 rounded-lg text-white shadow-lg'
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

export default EnterpriseBanner