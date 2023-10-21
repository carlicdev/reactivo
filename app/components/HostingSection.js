import Heading from "./Heading"

const HostingSection = ({ handleModal }) => {
  return (
    <>
    <div className='max-w-7xl w-full mx-auto my-[50px] p-5 lg:p-0 bg-white rounded-3xl shadow-xl p-2 lg:p-10'>
        <Heading text='¿Por qué usar nuestro servicio de Hosting?' />
        <div className="max-w-5xl w-full mx-auto mt-10">
          <p className='mb-5 text-justify text-gray-600 text-lg md:text-2xl'>
            Cuando adquirimos un nuevo sitio o aplicación web, uno de los aspectos más intimidantes es elegir el <strong>servicio de hosting adecuado.</strong> La oferta de servicios de hosting
            es muy amplia y los planes disponibles son tantos que se vuelve muy dificil tomar una decisión. 
          </p>
          <p className='text-justify  text-gray-600 text-lg md:text-2xl'>
            Lo que hacemos en Reactivo es elegir la opción que más le conviene a tu página o aplicación y <strong>manejar los aspectos técnicos por ti.</strong> De esta manera tu puedes enfoncarte en
            manejar tu negocio mientras nosotros nos aseguramos de mantener tu aplicación andando de manera <strong>optimizada y segura.</strong>
          </p>
        </div>
        <div className='mt-5 text-center mt-10'>
                <button 
                  onClick={handleModal}
                  className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'>
                    Solicitar Cotización de Hosting
                </button>
        </div>
        </div>
        <div className='max-w-7xl w-full mx-auto my-[50px] p-5 lg:p-0 bg-white rounded-3xl shadow-xl p-2 lg:p-10'>
        <Heading text='¿Cuánto cuesta el servicio de Hosting?' />
        <div className="max-w-5xl w-full mx-auto mt-10">
          <p className='mb-5 text-justify text-gray-600 text-lg md:text-2xl'>
            Nuestro servicio de Hosting es <strong>completamente personalizado</strong> y el costo depende de las características y necesidades de tu página o aplicación. 
          </p>
          <p className='text-justify  text-gray-600 text-lg md:text-2xl'>
            Haz click en el siguiente botón para solicitar una cotización de nuestro servicio. Recuerda que la mayoría de nuestros planes de desarrollo incluyen un determinado periodo de hosting.
          </p>
        </div>
        <div className='mt-5 text-center mt-10'>
                <button 
                  onClick={handleModal}
                  className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'>
                    Solicitar Cotización de Hosting
                </button>
            </div>
      </div>
    </>
  )
}

export default HostingSection