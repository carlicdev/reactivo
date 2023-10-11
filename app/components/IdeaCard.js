
const IdeaCard = ({text}) => {
  return (
    <div className='max-w-3xl w-full max-auto border rounded-lg shadow p-5 flex my-[50px]'>
        <div className='flex gap-5 items-center'>
  
                <div className='px-3.5 py-1 rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 text-white -rotate-6'>
                    <h2 className='text-4xl font-bold'>r</h2>
                </div>
          
            <p className='text gray-600  text-lg text-justify '>{text}</p>
        </div>
    </div>
  )
}

export default IdeaCard