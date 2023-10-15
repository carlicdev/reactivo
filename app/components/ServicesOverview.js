import Image from 'next/image'
import Heading from './Heading'
import { FiMoreHorizontal } from 'react-icons/fi'
import SubHeading from './SubHeading'

const ServicesOverview = () => {
  return (
    <div className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-10 lg:px-0'>
        <Heading text='No hay límites para lo que podemos construir juntos.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Tu aportas las ideas. Nosotros, las hacemos realidad con código.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className='mb-[100px] mt-[50px]'>
            <div className='flex flex-wrap items-center pt-20 px-6 mb-[100px]'>
                <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Componentes personalizables.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Diseñamos cada componente desde cero, adaptándolo a tus necesidades específicas. Olvídate de las soluciones genéricas.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <div className='w-full z-20'>
                                  <Image src={'/componentesPers.jpg'} alt='img' width={600} height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Aplicaciones escalables.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Creamos aplicaciones que pueden crecer contigo. A medida que tu negocio se expande, nuestro software lo hace sin problemas.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <div className='w-full z-20'>
                                    <Image src={'/appsEscalables.jpg'} alt='Image' width={600} height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Una experiencia de usuario muy superior.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Nos enfocamos en la usabilidad y la experiencia del usuario. Cada detalle se ajusta para garantizar una interacción fluida.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/userExperience1.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Integración fluida y sin dificultades.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Nuestras aplicaciones se integran sin problemas con tus sistemas actuales, optimizando la eficiencia y la productividad.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/integracion.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className=' w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='La seguridad es primero.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>La seguridad es nuestra prioridad. Implementamos las últimas medidas de seguridad para proteger tus datos y usuarios.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/security1.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
                
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Rendimiento optimizado.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'> Aseguramos que tu software funcione de manera óptima, manteniendo tiempos de carga rápidos y alta eficiencia.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/reactivoMetrics.png'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Mantenimiento Proactivo.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Con nuestros servicios de mantenimiento tu software siempre se encuentra actualizado y funcionando sin problemas.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/mantenimiento1.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Soporte Continuo.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Estamos aquí para ayudarte incluso después del lanzamiento. Brindamos soporte técnico continuo y resolvemos cualquier problema de manera rápida.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/support2.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='w-full lg:w-1/2 lg:pr-24 pb-8 '>
                    <SubHeading text='Proceso de Desarrollo Transparente.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'>Mantenemos la transparencia durante todo el proceso de desarrollo, para que estés informado en cada etapa del proyecto.</p>
                </div>
                <div className='relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/desarrolloTransparente.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform rotate-3 origin-bottom-right'></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center pt-20 px-6 my-[100px]'>
                <div className='lg:order-2 w-full lg:w-1/2 lg:pl-24 pb-8 '>
                    <SubHeading text='Comprometidos con la Excelencia.' />
                    <p className='my-5 text-justify  text-gray-600 text-lg md:text-xl'> Nuestro compromiso con la excelencia se refleja en cada línea de código que escribimos. Tu éxito es nuestra prioridad.</p>
                </div>
                <div className='lg:order-1 relative flex w-full lg:w-1/2'>
                    <div className='rounded-lg shadow z-10'>
                        <div className='bg-white rounded-lg p-3 md:p-6 shadow-lg'>
                            <div className='rounded-md overflow-hidden'>
                                <Image src={'/excelencia.jpg'} alt='Image' width={600} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-bl from-blue-700 to-blue-800 rounded-lg transform -rotate-3 origin-bottom-left'></div>                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ServicesOverview