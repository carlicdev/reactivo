"use client"

import processDetails from '../assets/process'
import { LiaShippingFastSolid, LiaUsersSolid } from 'react-icons/lia'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FcProcess } from 'react-icons/fc'
import { HiMiniCodeBracket } from 'react-icons/hi2'
import { BsCalendar2Check, BsCalendarWeek } from 'react-icons/bs'
import { AiOutlineExperiment } from 'react-icons/ai'

const ProcessCard = ({ id, title, icon, iconColor, subtitle }) => {
    const iconMappings = {
        planning: BsCalendarWeek,
        joining: LiaUsersSolid,
        design: MdOutlineDesignServices,
        developing: HiMiniCodeBracket,
        aproved: BsCalendar2Check,
        testing: AiOutlineExperiment,
        shiping: LiaShippingFastSolid
      };

      return (
        <div className='w-full md:w-1/2 lg:w-1/3 p-2 ' key={id}>
          <div className={`bg-slate-800 p-10 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300 h-full`}>
            <span className={`${iconColor} text-5xl`}>{iconMappings[icon]()}</span>
            <h2 className='text-gray-200 text-xl my-3'>{title}</h2>
            <p className='text-gray-400 text-md lg:text-lg'>{subtitle}</p>
          </div>
        </div>
      );
}

const Process = () => {

  return (
    <div className='w-full h-auto'>
        <div className='max-w-7xl w-full mx-auto bg-slate-950  rounded-3xl p-20'>
            <h2 className='text-gray-50 lg:text-center font-black text-4xl md:text-6xl  my-5'>Una experiencia de desarrollo diferente.</h2>
            <div className='flex justify-center'>
                <span className='my-1 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
            </div>
            <div className='flex flex-wrap mt-10'>
                <div className='w-full md:w-1/2 lg:w-2/3 p-2 ' >
                    <div className={`bg-slate-800 p-10 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300 h-full`}>
                        <span className={` text-5xl`}><FcProcess/></span>
                        <h2 className='text-gray-200 text-xl my-3'>Proceso Iterativo</h2>
                        <p className='text-gray-400 text-md lg:text-lg text-justify'>El proceso de desarrollo es iterativo y colaborativo, donde la comunicación constante entre el cliente y el desarrollador es esencial para asegurar que el producto final cumpla con sus expectativas y necesidades.</p>
                    </div>
                </div>
                {
                    processDetails.map((item) => (
                        <ProcessCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        icon={item.icon}
                        iconColor={item.iconColor}
                        subtitle={item.subtitle}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Process