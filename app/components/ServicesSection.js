import React from 'react'
import Heading from './Heading'
import ServiceCard from './ServiceCard'
import services from '../assets/services'

const ServicesSection = () => {
  return (
    <div className='max-w-7xl mx-auto w-full bg-white rounded-3xl my-[50px] p-10'>
        <Heading text='¿Cómo podemos ayudarte?' />
        <div className='flex flex-wrap w-full mt-10'>
            {
                services.map((item) => <ServiceCard service={item} key={item.id} />)
            }
        </div>
    </div>
  )
}

export default ServicesSection