import Heading from "./Heading"
import { FiMoreHorizontal } from "react-icons/fi"
import ProyectCard from "./ProjectCard"
import PostCard from "./PostCard"

const BlogSection = () => {
  return (
    <div className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-10 lg:px-0 mb-[50px]'>
        <Heading text='Noticias y artículos de interes.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Encuentra en nuestro blog las últimas noticias del mundo de la tecnología y el desarrollo de software.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className="w-full flex flex-wrap justify-center">
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    </div>
  )
}

export default BlogSection