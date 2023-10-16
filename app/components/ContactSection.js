
import { AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <div id={'contact'} className='w-full h-auto' style={{ backgroundImage: 'url(./bg2.jpg)'}}>
        <div className='bg-black bg-opacity-50 h-full py-24'>
            <div className='max-w-7xl mx-auto w-full bg-slate-950 rounded-3xl p-2 lg:p-10'>
                        <h2 className='text-gray-50 lg:text-center font-black text-4xl md:text-6xl  my-5 px-5'>¿Tienes alguna pregunta sobre nuestros servicios?</h2>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2  flex justify-center'>
                        <div className='flex flex-col justify-around items-center '>
                            <h2 className='text-gray-200 lg:text-center font-black text-3xl md:text-4xl  my-5'>Ponte en <span className='text-blue-700'>contacto</span> con<br/> nosotros.</h2>
                            <div className='flex flex-col gap-4 px-20 lg:px-32'>

                                <div className='flex gap-2 items-center justify-center border border-blue-700 p-2 rounded-lg'>
                                    <span className='text-2xl text-blue-500'><AiOutlineMail /></span>
                                    <p className='text-xl text-blue-500'>soporte@reactivo.mx</p>
                                </div>

                                <div className='flex gap-2 items-center justify-center border border-blue-700 p-2 rounded-lg'>
                                    <span className='text-2xl text-blue-500'><BsWhatsapp /></span>
                                    <p className='text-xl text-blue-500'>{`(52) 713-159-5384`}</p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-3 items-start mt-5'>
                              <button aria-label='facebook' className='text-6xl ease-in-out duration-300 text-blue-700 hover:scale-110'>
                                <AiFillFacebook />
                              </button>
                              <button aria-label='instagram' className='text-6xl ease-in-out duration-300 text-blue-700 hover:scale-110'>
                                <AiFillInstagram />
                              </button>
                              <button aria-label='twitter' className='text-6xl ease-in-out duration-300 text-blue-700 hover:scale-110'>
                                <AiFillTwitterSquare />
                              </button>
                              <button aria-label='linkedin' className='text-6xl ease-in-out duration-300 text-blue-700 hover:scale-110'>
                                <AiFillLinkedin />
                              </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 py-5 lg:pr-5'>
                        <div className='rounded-xl bg-slate-800 p-5'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection