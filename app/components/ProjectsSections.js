import Heading from "./Heading"
import projectsDetails from "../assets/projects"
import ProjectCard from "./ProjectCard"

const ProjectsSections = () => {
  return (
    <div className='max-w-7xl mx-auto w-full bg-white rounded-3xl my-[50px] py-10 px-2 md:px-10'>
        <Heading text='Algunos de nuestros proyectos.' />
        <div className='flex flex-wrap w-full mt-10'>
            {
                projectsDetails.map((item) => (
                    <ProjectCard project={item} key={item.id} />
                ))
            }
        </div>
    </div>
  )
}

export default ProjectsSections