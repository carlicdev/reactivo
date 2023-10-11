import React from 'react'
import SubHeading from './SubHeading'

const SectionHero = ({title, subtitle, image, imgSize}) => {
  return (
    <div className='w-full bg-gray-100'>
        <div className='max-w-7xl w-full mx-auto py-5'>
            <div className='flex flex-wrap items-center'>
                <div className='w-full lg:w-1/2 px-5 lg:px-0'>
                    <h2 className='text-gray-900 font-black text-4xl md:text-6xl lg:text-7xl my-5'>{title}</h2>
                    <SubHeading text={subtitle} />
                </div>
                <div className='w-full lg:w-1/2 p-5 flex justify-center'>
                  <img src={image} alt='heroImg' className={`w-${imgSize}`} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionHero