"use client"

import valuesDetails from '../assets/values'
import { LiaHandshakeSolid } from 'react-icons/lia'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsAward, BsLightbulb } from 'react-icons/bs'
import { LuUserCheck } from 'react-icons/lu'

const ValueCard = ({ id, title, icon, iconColor, subtitle }) => {
    const iconMappings = {
        integrity: LuUserCheck,
        quality: BsAward,
        innovation: BsLightbulb,
        commitment: LiaHandshakeSolid,
      };

      return (
        <div className='w-full md:w-1/2 p-2 ' key={id}>
          <div className={`bg-slate-800 p-10 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300 h-full`}>
            <span className={`${iconColor} text-5xl`}>{iconMappings[icon]()}</span>
            <h2 className='text-gray-200 text-xl my-3'>{title}</h2>
            <p className='text-gray-400 text-md lg:text-lg'>{subtitle}</p>
          </div>
        </div>
      );
}

const Values = () => {

  return (
    <div className='w-full h-auto mb-[100px]'>
        <div className='max-w-7xl w-full mx-auto bg-slate-950  rounded-3xl p-20'>
            <h2 className='text-gray-50 lg:text-center font-black text-4xl md:text-6xl  my-5'>Nuestros Valores.</h2>
            <div className='flex justify-center'>
                <span className='my-1 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
            </div>
            <div className='flex flex-wrap mt-10'>
                {
                    valuesDetails.map((item) => (
                        <ValueCard
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

export default Values