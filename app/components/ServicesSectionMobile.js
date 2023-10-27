import Link from 'next/link'
import mobileServices from '../assets/mobileServices'
import { BsTools, BsLaptop, BsCodeSquare, BsPeople, BsCloud} from 'react-icons/bs'
import { MdBrowserUpdated } from 'react-icons/md'

const ServicesSectionMobile = () => {

    const iconMapping = {
        web: BsLaptop,
        software: BsCodeSquare,
        mantenimiento: BsTools,
        actualizacion: MdBrowserUpdated,
        consultoria: BsPeople,
        hosting: BsCloud
    }

  return (
    <div className='w-full bg-white shadow-lg py-5'>
        <div className='flex flex-wrap'>
            {
                mobileServices.map((item, index) => (
                    <div className='w-1/3 p-3 flex flex-col gap-2 items-center justify-center' key={index}>
                        <Link href={item.link} >
                            <div className={`${item.class} rounded-lg shadow-lg p-4 flex items-center justify-center text-4xl hover:scale-105`}>
                                <span>
                                    {iconMapping[item.icon]()}
                                </span>
                            </div>
                        </Link>
                        <p className='text-xs font-bold'>{item.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServicesSectionMobile