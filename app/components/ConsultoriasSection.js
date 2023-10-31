import Heading from "./Heading"

const ConsultoriasSection = ({ handleModal }) => {
  return (
    <div className='max-w-7xl w-full mx-auto my-[50px] p-5 lg:p-0 bg-white rounded-3xl shadow-xl p-2 lg:p-10'>
      <div className='w-full'>
      <Heading text='¿En qué consiste nuestro servicio de Consultorías?' />
        <div className="max-w-5xl w-full mx-auto mt-10 ">
          <p className='mb-5 text-justify text-gray-600 text-lg md:text-2xl'>
            Nuestros servicios de consultoría están diseñados para ayudarte a tomar <strong>decisiones informadas y estratégicas</strong> sobre tecnología y desarrollo. Trabajamos en estrecha colaboración contigo para entender tus objetivos comerciales y proporcionarte <strong>recomendaciones sólidas.</strong>
          </p>
          <p className='text-justify  text-gray-600 text-lg md:text-2xl'>
            Nuestros expertos están <strong>comprometidos</strong> en brindarte soluciones que se alineen con tus necesidades y presupuesto. Desde la <strong>planificación y diseño</strong> de proyectos tecnológicos hasta la <strong>implementación y soporte</strong> continuo. Estamos preparados para guiarte en cada paso del camino.
          </p>
        </div>
        <div className='mt-5 text-center'>
                <button 
                  onClick={handleModal}
                  className='bg-red-400 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-lg text-white font-medium text-2xl shadow-lg'>
                    Solicitar Consultoría
                </button>
            </div>
      </div>
    </div>
  )
}

export default ConsultoriasSection