"use client"

import webServices from "../assets/web-services"
import Heading from "./Heading"
import PackageCard from "./PackageCard"

const DesarrolloWebSection = () => {

  return (
    <div className='max-w-7xl mx-auto w-full bg-white shadow-xl rounded-3xl my-[50px] p-10'>
        <Heading text={'Un paquete para cada necesidad.'} />
        <div className='flex flex-wrap mt-10'>
            {
                webServices.map((item) => (
                    <PackageCard devPackage={item} key={item.id} />
                ))
            }
        </div>
    </div>
  )
}

export default DesarrolloWebSection