"use client"

const DesarrolloWebSection = () => {

    const scrollToElement = (el) => {
        const elementoDestino = document.getElementById(el);
    
        if (elementoDestino) {
          elementoDestino.scrollIntoView({
            behavior: "smooth", 
            block: "nearest",     
          });
        }
      };

  return (
    <div className='max-w-7xl w-full mx-auto my-[50px]'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div 
                    onClick={() => scrollToElement('personal-banner')}
                    className='border rounded-3xl p-5 cursor-pointer hover:scale-105 transition-all duration-200 shadow'
                >
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Personal.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                    Plataforma personal para influencers, autores y creativos. Ideal para aumentar tu numero de seguidores.
                    </p>
                </div>
            </div> 
            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div 
                    onClick={() => scrollToElement('startup-banner')}
                    className='border rounded-3xl p-5 bg-slate-800 cursor-pointer hover:scale-105 transition-all duration-200 shadow'
                >
                    <h2 className='text-gray-100 lg:text-lg mb-1'>StartUp.</h2>
                    <p className='text-gray-300 lg:text-lg text-justify'>
                    Para comenzar con el pie derecho. Si estas por iniciar un emprendimiento, este paquete es para ti.
                    </p>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div 
                    onClick={() => scrollToElement('business-banner')}
                    className='border rounded-3xl p-5 cursor-pointer hover:scale-105 transition-all duration-200 shadow'
                >
                    <h2 className='text-gray-900 lg:text-lg mb-1'>Business.</h2>
                    <p className='text-gray-600 lg:text-lg text-justify'>
                    Aumenta las ventas de tu negocio y mejora la interacción con tus clientes con una página web profesional.
                    </p>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div 
                    onClick={() => scrollToElement('enterprise-banner')}
                    className='border rounded-3xl p-5 bg-slate-800 cursor-pointer hover:scale-105 transition-all duration-200 shadow'
                >
                    <h2 className='text-gray-100 lg:text-lg mb-1'>Enterprise.</h2>
                    <p className='text-gray-300 lg:text-lg text-justify'>
                    Una plataforma que te permite automatizar tareas, aumentar la ventas y mejorar la productividad de tu empresa.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesarrolloWebSection