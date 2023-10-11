import Heading from './Heading'
import {FiMoreHorizontal} from 'react-icons/fi'
import { FaCircleChevronDown } from 'react-icons/fa6'
import faqs from '../assets/faqs'

const FAQs = () => {
  return (
    <div id={'faqs'} className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-10 lg:px-0 my-[100px]'>
        <Heading text='Las preguntas más frecuentes.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Estas son las preguntas que más nos hacen nuestros clientes.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className='max-w-5xl mx-auto w-full flex flex-col gap-2'>
            {
                faqs.map((item, index) => (
                    <div key={index} className='relative w-full border rounded-lg bg-white' >
                        <input id={index} type='checkbox' className='peer absolute top-0 insetx-0 w-full h-full opacity-0 z-10 cursor-pointer'/>
                        <div className='px-5 py-2 flex gap-5 items-center group'>
                            <p className='text-gray-600 md:text-lg text-justify'>{item.question}</p>
                            <div className=' mr-0 ml-auto text-3xl text-blue-700 rotate-0 duration-500 group-clicked:rotate-180'>
                                <FaCircleChevronDown />
                            </div>
                        </div>
                        <div className='max-h-0 overflow-hidden peer-checked:max-h-[200px] transition-all duration-1000'>
                            <div className='px-5 py-2 bg-gray-100'>
                                <p className='text-gray-600 lg:text-lg text-justify'>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQs