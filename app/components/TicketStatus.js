"use client"

import { useRef, useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'

const TicketStatus = () => {
    const formRef = useRef();
    const [verifying, setVerifying] = useState(false)
    const [supportTicket, setSupportTicket] = useState(null)
    const [serverMsg, setServerMsg] = useState(null)
    const [ticketStatus, setTicketStatus] = useState(null);
    const [form, setForm] = useState({
        ticket: ''
    });

    const statusMapping = {
        open: 'abierto',
        assigned: 'trabajando',
        inRevision: 'en revisión',
        closed: 'cerrado'
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setVerifying(true)
        setServerMsg(null)
        setSupportTicket(null)
        setTicketStatus(null)

        try {
            const response = await fetch(`/api/support/${form.ticket}`)

            const data = await response.json();
            
            if (data.status === 200) {
                setVerifying(false)
                setSupportTicket(data.ticketId)
                setTicketStatus(data.ticketStatus)
            } else {
                setVerifying(false)
                setServerMsg('El ticket que proporcionaste no existe. Por favor, verifica el id de tu ticket de soporte.')
            }
        } catch (err) {
            setVerifying(false)
            setServerMsg('Se produjo un error en el servidor. Por favor, intenta de nuevo.')
        }
    }

    const buttonText = verifying ?  <span className='flex items-center gap-2'><AiOutlineReload className='animate-spin'/>Buscando Ticket</span> : <span>Verificar Ticket</span>

  return (
    <div className='max-w-7xl w-full mx-auto'>
        <div className='flex flex-wrap w-full'>
            <div className='w-full lg:w-1/2 px-5 mb-5'>
                <h2 className='text-gray-900 lg:text-lg mb-2'>Verifica el Estatus de tu Ticket de Soporte</h2>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <label className='flex '>
                        <button
                            type='submit'
                            className='peer-focus:border-2 border border-red-400 text-white font-bold px-5 py-3 rounded-l-lg bg-red-400 w-[220px]'
                        >
                            {buttonText}
                        </button>
                        <input 
                            type='text'
                            name='ticket'
                            value={form.ticket}
                            onChange={handleChange}
                            className='peer rounded-r-lg w-3/4 border outline-none px-1'
                            placeholder='Ticket Id'
                        />
                    </label>
                </form>
            </div>
            {
                supportTicket && (
                    <div className='w-full lg:w-1/2 px-5'>
                        <h2 className='text-gray-900 text-lg font-bold mb-2'>Ticket con Id: 
                            <span className='font-light text-gray-600'>
                                {supportTicket}
                            </span>
                        </h2>
                        <p className='text-gray-600 mb-2'>Status del Ticket: <span className='font-bold'>{statusMapping[ticketStatus]}</span></p>
                        {
                            ticketStatus === 'open' && (
                                <p  className='text-gray-600 mb-2'>Tu ticket aun no ha sido asignado a ninguno de nuestros expertos.</p>
                            )
                        }
                        {
                            ticketStatus === 'assigned' && (
                                <p  className='text-gray-600 mb-2'>Nuestros expertos ya estan trabajando en tu solicitud.</p>
                            )
                        }
                        {
                            ticketStatus === 'inRevision' && (
                                <p  className='text-gray-600 mb-2'>Hemos terminado de trabajar en tu solicitud. Estamos esperando tu aprobación para poder cerrar el ticket.</p>
                            )
                        }
                                                {
                            ticketStatus === 'closed' && (
                                <p  className='text-gray-600 mb-2'>Hemos terminado nuestro trabajo. Gracias por elegir a reactivo.</p>
                            )
                        }
                    </div>
                )
            }
            {
                serverMsg && (
                    <div className='w-full lg:w-1/2 px-5'>
                        <h2 className='text-gray-900 text-lg font-bold mb-2'>
                                El ticket no fue encontrado
                        </h2>
                        <p className='text-gray-600 mb-2'>{serverMsg}</p>
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default TicketStatus