import Image from "next/image"
import { FiMoreHorizontal } from "react-icons/fi"

const Testimonial = () => {
  return (
    <div className='max-w-7xl w-full mx-auto bg-slate-950  lg:rounded-3xl lg:p-10 p-2 my-[100px]'>
    <h2 className='text-gray-50 lg:text-center font-black text-4xl md:text-6xl  my-5 px-2 lg:px-0'>Construimos relaciones duraderas.</h2>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className='flex flex-wrap justify-center items-start mt-5 '>
            <div className="w-full lg:w-1/3 p-2 flex flex-col justify-center mb-5 ">
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20"/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>María López de Nava</h2>
                        <p>Emprendedora</p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Manejar mi negocio de Dropshipping de Amazon ha sido mucho más sencillo desde que empecé a usar el software que los amigos de Reactivo desarrollaron para mi.</p>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl'>Seguimos trabajando codo a codo para agregar caracteristicas al software. Los expertos de Reactivo se han convertido en parte de mi equipo.</p>
                  </div>
              </div>
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20" />
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Luis Orta</h2>
                        <p>Emprendedor</p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                  </div>
              </div>
            </div>

            <div className="flex w-full lg:w-1/3 p-2  flex-col justify-center mb-5">
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20"/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Luca Sal</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl'>Desarrollar mi plataforma personal con Reactivo es una de las mejores decisiones que he tomado en mi carrera de escritor.</p>
                  </div>
              </div>

              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20"/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Luca Sal</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl'>Desarrollar mi plataforma personal con Reactivo es una de las mejores decisiones que he tomado en mi carrera de escritor.</p>
                  </div>
              </div>

            </div>

            <div className="hidden lg:flex w-full lg:w-1/3 p-2  flex-col justify-center mb-5">
                <div className='max-w-sm bg-slate-800 rounded-lg shadow mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20"/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Javier Rivera</h2>
                        <p>CEO en </p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Le pedimos a los expertos de Reactivo que rediseñaran algunas secciones de nuestra página web. El producto que nos entregaron supero las expectativas.</p>
                  </div>
              </div>

              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20"/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Zue Riquelme</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Le pedimos a los expertos de Reactivo que rediseñaran algunas secciones de nuestra página web.</p>
                  </div>
              </div>

              
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300} className="w-20 h-20"/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Juan Salinas</h2>
                        <p>Director</p>
                      </div>
                  </div>
                  <div className='px-5 pb-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                  </div>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Testimonial