import Heading from "./Heading"
import { FiMoreHorizontal } from "react-icons/fi"

const SectionHeader = ({title, subtitle}) => {
  return (
    <div className='max-w-7xl w-full mx-auto mt-20 px-5 lg:px-0'>
        <Heading text={title} />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>{subtitle}</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
    </div>
  )
}

export default SectionHeader