import Image from "next/image"
import Heading from "./Heading"
import { FiMoreHorizontal } from "react-icons/fi"

const Testimonial = () => {
  return (
    <div className='max-w-7xl mx-auto w-full pt-10 md:pt-24 px-10 lg:px-0'>
        <Heading text='Los más grandes en sus ramas confían en nosotros.' />
        <p className='text-justify lg:text-center text-gray-600 text-lg md:text-2xl'>Construimos relaciones duraderas, acompañando a nuestros clientes en su camino hacia el éxito.</p>
        <div className='flex justify-center gap-4'>
            <span className='my-5 tmx-auto text-5xl text-blue-700'><FiMoreHorizontal/></span>
        </div>
        <div className='flex flex-wrap justify-center items-start mt-5 '>
            <div className="w-full lg:w-1/3 p-2 flex flex-col justify-center mb-5 ">
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>María López de Nava</h2>
                        <p>Emprendedora</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Manejar mi negocio de Dropshipping de Amazon ha sido mucho más sencillo desde que empecé a usar el software que los amigos de Reactivo desarrollaron para mi.</p>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl'>Seguimos trabajando codo a codo para agregar caracteristicas al software. Los expertos de Reactivo se han convertido en parte de mi equipo.</p>
                  </div>
              </div>
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Luca Sal</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                  </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-2 flex flex-col justify-center mb-5">
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Luca Sal</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl'>Desarrollar mi plataforma personal con Reactivo es una de las mejores decisiones que he tomado en mi carrera de escritor.</p>
                  </div>
              </div>

              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>Luca Sal</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl'>Desarrollar mi plataforma personal con Reactivo es una de las mejores decisiones que he tomado en mi carrera de escritor.</p>
                  </div>
              </div>

            </div>

            <div className="w-full lg:w-1/3 p-2 flex flex-col justify-center mb-5">
                <div className='max-w-sm bg-slate-800 rounded-lg shadow mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>David Fleitman</h2>
                        <p>CEO en BusBus</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Le pedimos a los expertos de Reactivo que rediseñaran algunas secciones de nuestra página web. El producto que nos entregaron supero las expectativas.</p>
                  </div>
              </div>

              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>David Fleitman</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Le pedimos a los expertos de Reactivo que rediseñaran algunas secciones de nuestra página web.</p>
                  </div>
              </div>

              
              <div className='max-w-sm bg-slate-800 rounded-lg shadow mt-5 mx-auto'>
                    <div className='flex text-white gap-2 p-5 items-center rounded-b-3xl'>
                      <div className="rounded-full h-20 w-20 ml-0 mr-2 overflow-hidden">
                        <Image src={'/influencer1.jpg'} alt='logo' width={300} height={300}/>
                      </div>
                      <div className="ml-2 mr-auto">
                        <h2 className='font-semibold text-xl'>David Fleitman</h2>
                        <p>Escritor</p>
                      </div>
                  </div>
                  <div className='p-5'>
                    <p className='my-5 text-justify  text-gray-300 text-lg md:text-xl mb-2'>Desde que publiqué mi página web mi número de lectores se ha incrementado exponencialmente.</p>
                  </div>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Testimonial