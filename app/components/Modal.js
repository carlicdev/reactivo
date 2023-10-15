import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({isOpen, handleModal, content}) => {

    if (!isOpen) {
        return null;
    }

        return (
          <div className='fixed inset-0 flex justify-center items-center z-20 bg-black bg-opacity-50 lg:bg-opacity-0'>
            <div className='bg-white rounded-3xl shadow-lg'>
                <div className='hidden lg:flex w-full  p-5'>
                    <div className='mr-auto ml-0 px-3.5 py-1 rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 text-white -rotate-6'>
                        <h2 className='text-4xl font-bold'>r</h2>
                    </div>
                    <button 
                    onClick={handleModal}
                    className='text-red-400 hover:text-red-500 text-5xl mr-0 ml-auto '>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className='relative max-w-5xl w-full mx-auto flex lg:p-5 '>
                    <div 
                    onClick={handleModal}
                    className='absolute top-[-5px]  right-0 lg:hidden text-red-400 hover:text-red-500 text-5xl '>
                        <AiOutlineCloseCircle />
                    </div>
                    {content}
                </div>
            </div>
          </div>
        )
}

export default Modal