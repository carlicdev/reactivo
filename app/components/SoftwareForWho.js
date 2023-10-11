import React from 'react'
import SectionHeader from './SectionHeader'
import SubHeading from './SubHeading'

const SoftwareForWho = () => {
  return (
    <div className='max-w-7xl w-full mx-auto my-[50px]'>
        <SectionHeader 
          title='¿Quienes pueden beneficiarse del Software Personalizado?' 
          subtitle={'En un mundo cada vez más digitalizado, el software se ha convertido en el núcleo de operaciones para empresas y organizaciones de todos los tamaños.'} 
        />
        <div className='mb-[100px] mt-[50px]'>
            <div className='flex flex-wrap items-center pt-20 px-6 mb-[100px]'>
                <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Ideal para Empresas en Crecimiento.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Destinado a empresas que buscan soluciones de software personalizadas para impulsar su crecimiento y eficiencia.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./empresa1.jpg'} alt='img' className='w-full z-20' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Soluciones a la Medida para Emprendedores.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Diseñado para emprendedores y startups que necesitan adaptar su software a sus necesidades específicas.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./emprendedores.jpg'} alt='img' className='w-full z-20' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Optimizado para Pequeñas Empresas.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Ofrecemos soluciones de software personalizadas que se adaptan a las necesidades únicas de las pequeñas empresas.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./pyme.jpg'} alt='img' className='w-full z-20' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Para Grandes Empresas y Corporaciones.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Nuestros servicios personalizados son ideales para grandes empresas que requieren sistemas robustos y escalables.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./corporacion2.jpg'} alt='img' className='w-full z-20 h-[350px]' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className=' w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Industrias Específicas.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Desarrollamos software a medida para una variedad de industrias, desde salud hasta educación.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./salud2.jpg'} alt='img' className='w-full z-20' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
                
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Impulsamos la Transformación Digital.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Apoyamos la transformación digital de empresas de cualquier tamaño.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={'./transformacionDigital.png'} alt='img' className='w-full z-20' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SoftwareForWho