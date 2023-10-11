

const SupportSection = ({ handleModal }) => {
  return (
    <div className='max-w-7xl mx-auto w-full my-[50px]]'>
        
        <div className='w-full flex flex-wrap my-[50px]'>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='p-5'>
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Soporte Técnico.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                        Te ayudamos a solucionar problemas técnicos relacionados con tus aplicaciones o sitios web.
                    </p>
                    <div className='mt-5'>
                        <button 
                            onClick={handleModal}
                            className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50 '
                        >
                            Generar Ticket de Soporte
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='p-5'>
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Soporte Post-Lanzamiento.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                    Brindamos asistencia continua después del lanzamiento de una aplicación o sitio web para resolver problemas emergentes y realizar ajustes según sea necesario.
                    </p>
                    <div className='mt-5'>
                        <button 
                            onClick={handleModal}
                            className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'
                        >
                            Generar Ticket de Soporte
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='p-5'>
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Quejas y Sugerencias.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                    Tu opinión es muy importante para nosotros. Con tus comentarios nos ayudas a seguir mejorando.
                    </p>
                    <div className='mt-5'>
                        <button 
                            onClick={handleModal}
                            className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'
                        >
                            Generar Ticket de Soporte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SupportSection