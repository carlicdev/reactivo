

const PostCard = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className='rounded-lg w-full bg-white shadow'>
            <img src={'./appsEscalables.jpg'} alt='PostImg' className='w-full h-[300px] rounded-t-lg' />
            <div className='flex flex-col p-5'>
                <h2>Nombre del Posto</h2>
                <p>Una corta descripción del Posto en la que cuento algunas cosas</p>
            </div>
        </div>     
    </div>
  )
}

export default PostCard