import Heading from "./Heading"
import { FiMoreHorizontal } from "react-icons/fi"

const Contrataciones = () => {
  return (
    <div id={'contrataciones'} className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-10 lg:px-0'>
        <Heading text='Ven a trabajar con nosotros.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Estamos contratando programadores y diseñadores.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
    </div>
  )
}

export default Contrataciones