"use client"

import { useState } from 'react'
import Heading from './Heading'
import {FiMoreHorizontal} from 'react-icons/fi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import faqs from '../assets/faqs'

const FAQs = () => {
    const [index, setIndex] = useState(0)

    const handleIndex = (id) => {
        if (index === id) {
            setIndex(0)
        } else {
            setIndex(id)
        }
    }

  return (
    <div id={'faqs'} className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-2 lg:px-10 lg:px-0 my-[100px]'>
        <Heading text='Las preguntas más frecuentes.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Estas son las preguntas que más nos hacen nuestros clientes.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className='max-w-5xl mx-auto w-full flex flex-col gap-2'>
            {
                faqs.map((item) => (
                    <div 
                        key={item.id} 
                        className='relative w-full border rounded-lg bg-white cursor-pointer' 
                        onClick={() => handleIndex(item.id)}    
                    >
                        <div className='px-5 py-2 flex gap-5 items-center'>
                            <p className='text-gray-600 md:text-lg text-justify'>{item.question}</p>
                            <span className={`${index === item.id ? '-rotate-180' : ''} transition-all duration-1000 mr-0 ml-auto text-3xl text-blue-700`}>
                                <AiOutlineCaretDown />
                            </span>
                        </div>
                        <div className={`${index === item.id ? 'max-h-[400px]' : 'max-h-0'} overflow-hidden transition-all duration-1000`}>
                            <div className='px-5 py-2 bg-gray-50'>
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