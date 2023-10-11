"use client"

import { useState } from 'react'
import Modal from './Modal'
import ProjectDetails from './ProjectDetails'

const ProjectCard = ({project}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <Modal isOpen={isOpen} handleModal={handleModal} content={<ProjectDetails project={project}/>}/>
        <div 
          onClick={handleModal}
          className='rounded-lg w-full bg-white shadow cursor-pointer'
        >
            <img src={project.image} alt='projectImg' className='w-full h-[270px] rounded-t-lg' />
            <div className='flex flex-col p-5'>
                <h2 className='text-lg text-gray-900'>{project.title}</h2>
                <p className='text-gray-600 font-medium'>{project.type}</p>
            </div>
        </div>     
    </div>
  )
}

export default ProjectCard