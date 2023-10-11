import Image from "next/image"

const ProjectDetails = ({project}) => {
  return (
    <div className='max-w-7xl w-full mx-center'>
        <div className='grid grid-cols-4'>
            <div className='col-span-4 lg:col-span-1 flex flex-col justify-center items-center'>
                <h2 className='text-gray-900 mb-2'>{project.title}</h2>
                <p className='text-gray-600 mb-5'>{project.type}</p>
                {
                  project.site && (
                    <a href={project.site}>
                      <button 
                          
                          className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50 '
                      >
                          Visitar Sitio
                      </button>
                    </a>
                  )
                }
            </div>
            <div className='col-span-4 lg:col-span-3 p-4 flex flex-col max-h-[600px] overflow-auto'>
                <Image src={project.image} alt='projectImage' width={700} height={500} />
                <p className='text-gray-600 text-lg mt-2 text-justify'>{project.subtext}</p>
                <div className='my-5'>
                  {
                    project.content.map((item, index) => (
                      <div className='flex flex-col lg:flex-row my-5 items-center' key={index}>
                        <Image src={item.contentImg} alt='contentImg' width={350} height={220}/>
                        <div className='p-4'>
                          <h2 className='text-gray-900 mb-2'>{item.subtitle}</h2>
                          <p className='text-gray-600 text-justify'>{item.text}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails