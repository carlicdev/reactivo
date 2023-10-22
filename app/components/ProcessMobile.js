"use client"

import { useState } from 'react'
import processDetails from '../assets/process';

import { LiaShippingFastSolid, LiaUsersSolid } from 'react-icons/lia'
import { MdOutlineDesignServices } from 'react-icons/md'
import { HiMiniCodeBracket } from 'react-icons/hi2'
import { BsCalendar2Check, BsCalendarWeek } from 'react-icons/bs'
import { AiOutlineExperiment, AiOutlineCaretDown } from 'react-icons/ai'

const ProcessCard = ({ id, title, icon, iconColor, subtitle, handleAccordeon, index}) => {
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
        <div className='w-full cursor-pointer' key={id} onClick={() => handleAccordeon(id)}>
            <div className={`bg-slate-800 p-2 rounded mb-1  transition-all duration-300 h-full`}>
                <div className='flex gap-3 items-center'>
                    <span className={`${iconColor} text-4xl`}>{iconMappings[icon]()}</span>
                    <h2 className='text-gray-200 text-xl '>{title}</h2>
                    <span className={`${iconColor} ${index === id ? '-rotate-180' : ''} text-2xl mr-0 ml-auto transition-all duration-1000`}><AiOutlineCaretDown/></span>
                </div>
                <div className={`${index === id ? 'max-h-[200px]' : 'max-h-0'} overflow-hidden transition-all duration-1000 bg-slate-900`}>
                    <div className='p-5'>
                        <p className='text-gray-400 text-md lg:text-lg'>{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
      );
}

const ProcessMobile = () => {
    const [index, setIndex] = useState(null);

    const handleAccordeon = (id) => {
        if (index === id) {
            setIndex(0)
        } else {
            setIndex(id)
        }
    }

    return (
    <div className='max-w-7xl mx-auto w-full bg-slate-950 p-2'>
        <h2 className='text-gray-50 lg:text-center font-black text-4xl md:text-6xl  my-5'>Una experiencia de desarrollo diferente.</h2>
        <div className='flex flex-col'>
            {
                processDetails.map((item) => (
                    <ProcessCard 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    icon={item.icon}
                    iconColor={item.iconColor}
                    subtitle={item.subtitle}
                    handleAccordeon={handleAccordeon}
                    index={index}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ProcessMobile