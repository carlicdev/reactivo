import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({isOpen, handleModal, content}) => {

    if (!isOpen) {
        return null;
    }

        return (
          <div className='fixed inset-0 flex justify-center items-center z-20'>
            <div className='bg-white rounded-3xl shadow-lg'>
                <div className='flex w-full  p-5'>
                    <div className='mr-auto ml-0 px-3.5 py-1 rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 text-white -rotate-6'>
                        <h2 className='text-4xl font-bold'>r</h2>
                    </div>
                    <button 
                    onClick={handleModal}
                    className='text-red-400 hover:text-red-500 text-5xl mr-0 ml-auto '>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className='max-w-5xl w-full mx-auto flex p-5'>
                    {content}
                </div>
            </div>
          </div>
        )
}

export default Modal