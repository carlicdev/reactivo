import Heading from "./Heading"
import { FiMoreHorizontal } from "react-icons/fi"
import ProjectCard from "./ProjectCard"
import projectsDetails from "../assets/projects"

const PortfolioSection = () => {
  return (
    <div id={'portfolio'} className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-10 lg:px-0 mb-[50px]'>
        <Heading text='Algunos de nuestros proyectos.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Tu aportas las ideas. Nosotros, las hacemos realidad con código.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className="w-full flex flex-wrap justify-center">
            {
              projectsDetails.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            }
        </div>
    </div>
  )
}

export default PortfolioSection