import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsLaptop, BsCodeSquare, BsPeople, BsGear} from 'react-icons/bs'

const ServiceCard = ({service}) => {

    const iconMapping = {
        web: BsLaptop,
        software: BsCodeSquare,
        mantenimiento: BsGear,
        consultoria: BsPeople
    }

  return (
    <div className='w-full md:w-1/2 lg:w-1/4 px-4 my-5 lg:my-0'>
        <div className='w-full rounded-xl shadow-xl bg-white border'>
            <div className='flex items-center justify-center mt-5'>
                <span className={`${service.class} flex items-center justify-center h-[70px] w-[70px] rounded-full text-4xl`}>
                    {iconMapping[service.icon]()}
                </span>
            </div>
            <div className='flex flex-col p-4'>
                <h2 className='font-bold text-gray-800 text-xl mb-5 text-center'>{service.title}</h2>
                <p className='text-gray-600 text-justify mb-5'>{service.text}</p>
            </div>
            <div className='flex w-full items-end justify-end'>
                <Link href={service.link}>
                    <button className={`${service.class} px-5 py-2 rounded-tl-lg rounded-br-lg`}>
                        <BsArrowRight className='text-3xl hover:scale-110 transition-all duration-300'/>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard