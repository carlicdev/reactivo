import Link from "next/link"
import CotizacionButton from "./CotizacionButton"
import Heading from "./Heading"

const Hero = ({handleModal}) => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl w-full mx-auto py-5 md:py-20'>
        <div className='flex flex-col px-2 md:px-0'>
          <Heading text='Transformamos tus ideas en software. A la medida.' />
          <p className='hidden md:block text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Sin plantillas. Cada aplicación que desarrollamos es completamente única.</p>
          <div className="text-center mt-2 md:mt-10">
            <CotizacionButton handleModal={handleModal}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero