
import SubHeading from "./SubHeading"

const AboutHero = () => {
  return (
    <div className='w-full bg-gray-100'>
        <div className='max-w-7xl w-full mx-auto py-5'>
            <div className='flex flex-wrap items-center'>
                <div className='w-full lg:w-1/2 px-5 lg:px-0'>
                    <h2 className='text-gray-900 font-black text-4xl md:text-6xl lg:text-7xl my-5'>Transformamos tus ideas en software.</h2>
                    <SubHeading text=" " />
                </div>
                <div className='w-full lg:w-1/2 p-5 flex justify-center'>
                    <div className='flex gap-1 items-end'>
                        <div className='px-5 py-1 rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 text-white -rotate-6'>
                            <h2 className='text-7xl font-bold'>r</h2>
                        </div>
                        <h2 className='logo text-7xl font-bold  tracking-tighter'>reactivo </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero