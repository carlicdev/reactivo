import Link from "next/link"
import CotizacionButton from "./CotizacionButton"
import Heading from "./Heading"
import { BsArrowRight } from 'react-icons/bs'

const Hero = ({handleModal}) => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl w-full mx-auto py-16'>
        <div className='flex flex-col px-2 md:px-0'>
          <Heading text='Transformamos tus ideas en software. A la medida.' />
          <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Sin templetes. Cada aplicación que desarrollamos es completamente única.</p>
          <div className="text-center my-5">
            <CotizacionButton handleModal={handleModal}/>
          </div>
          {/* <div className='flex flex-wrap justify-center mt-5'>
            <div className="w-full lg:w-1/3 p-2">
              <div className="border rounded-3xl p-5 px-10 shadow">
                <h2 className="text-center text-gray-900 text-2xl font-bold mb-4">Desarrollo Web</h2>
                <p className="text-lg text-gray-600 text-justify ">Diseñamos y desarrollamos sitios web atractivos y funcionales para destacar tu presencia en línea.</p>
                <div className="mt-2">
                  <Link href={'/desarrollo-web'}>
                    <button className="text-blue-700 font-medium text-lg flex gap-1 items-center group">
                        Quiero una Aplicación Web
                        <span className="text-xl group-hover:ml-1 transition-all duration-200">
                          <BsArrowRight />
                        </span>
                      </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-2">
              <div className="border rounded-3xl py-5 px-10 shadow">
                <h2 className="text-center text-gray-900 text-2xl font-bold mb-4">Desarrollo de Software</h2>
                <p className="text-lg text-gray-600 text-justify ">Creamos soluciones a la medida que automatizan procesos y mejoran la eficiencia de tu negocio.</p>
                <div className="mt-2">
                  <Link href={'/desarrollo-de-software'}>
                  <button className="text-blue-700 font-medium text-lg flex gap-1 items-center group">
                      Quiero Software Personalizado
                      <span className="text-xl group-hover:ml-1 transition-all duration-200">
                        <BsArrowRight />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Hero