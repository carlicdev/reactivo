import Heading from "./Heading"
import { FiMoreHorizontal } from "react-icons/fi"

const ConsultoriasSection = ({ handleModal }) => {
  return (
    <div className='max-w-7xl w-full mx-auto my-[50px] p-5 lg:p-0'>
      <div className='w-full'>
      <Heading text='¿En qué consiste nuestro servicio de Consultorías?' />
        <div className="max-w-5xl w-full mx-auto ">
          <p className='mb-5 text-justify text-gray-600 text-lg md:text-2xl'>
            {`Nuestros servicios de consultoría están diseñados para ayudarte a tomar decisiones informadas y estratégicas sobre tecnología y desarrollo. Trabajamos en estrecha colaboración contigo para entender tus objetivos comerciales y proporcionarte recomendaciones sólidas.`}
          </p>
          <p className='text-justify  text-gray-600 text-lg md:text-2xl'>
            {`Nuestros expertos están comprometidos en brindarte soluciones que se alineen con tus necesidades y presupuesto. Desde la planificación y diseño de proyectos tecnológicos hasta la implementación y el soporte continuo. Estamos preparados para guiarte en cada paso del camino.`}
          </p>
        </div>
        <div className='mt-5 text-center'>
                <button 
                  onClick={handleModal}
                  className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'>
                    Solicitar Consultoría
                </button>
            </div>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
      </div>
    </div>
  )
}

export default ConsultoriasSection