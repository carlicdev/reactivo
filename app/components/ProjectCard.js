"use client"

import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'
import ProjectDetails from './ProjectDetails'

const ProjectCard = ({project}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:p-4 ">
      <Modal isOpen={isOpen} handleModal={handleModal} content={<ProjectDetails project={project}/>}/>
        <div 
          onClick={handleModal}
          className='rounded-lg w-full bg-white shadow-xl cursor-pointer'
        >
          <div className='w-full h-[300px] rounded-t-lg'>
            <Image src={project.image} alt='projectImg' height={300} width={600} className='h-[300px] w-full rounded-t-lg'/>
          </div>
          <div className='flex flex-col p-5'>
              <h2 className='text-lg md:text-2xl font-black text-gray-900'>{project.title}</h2>
              <p className='text-gray-600 md:text-lg font-medium'>{project.type}</p>
          </div>
        </div>     
    </div>
  )
}

export default ProjectCard