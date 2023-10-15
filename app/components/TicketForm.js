"use client"

import { useRef, useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'

const TicketForm = ({ handleModal }) => {
    const formRef = useRef()
    const [ticket, setTicket] = useState(null)
    const [sending, setSending] = useState(false)
    const [serverError, setServerError] = useState(null)
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        service: 'Soporte Técnico',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setServerError(null)
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true)
        setTicket(null);
        try {
            const response = await fetch('/api/support', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  name: form.name,
                  lastname: form.lastname,
                  service: form.service,
                  email: form.email,
                  phone: form.phone,
                  message: form.message
                }) 
            })
    
            const data = await response.json();
            if (data.status === 200) {
                setSending(false)
                setTicket(data.ticketId)
            }

            if (data.status === 400) {
                setSending(false)
                setServerError(data.message)
            }
        } catch (err) {
            setSending(false)
            setServerError(err.message)
        }
        
    }
    
    const buttonText = sending ?  <span className='flex items-center gap-2'><AiOutlineReload className='animate-spin'/>Enviando</span> : <span>Generar Ticket de Soporte</span>

  
    if (ticket) {
        return (
            <div className='bg-slate-100 rounded-lg p-5'>
                <h2 className='text-gray-900 text-xl mb-5'>Tu ticket de soporte ha sido creado.</h2>
                <p className='text-gray-600 text-lg mb-5'>El id de tu ticket es: <span className='font-bold text-gray-900'>{ticket}</span></p>
                <p className='text-gray-600 text-lg mb-5 text-justify'>Nuestro equipo de soporte revisará tu solicitud. Te mantendremos informado de estatus de tu ticket vía correo electrónico.</p>
                <p className='text-gray-600 text-lg mb-5 text-justify'>Puedes verificar el estatus de tu solicitud en cualquier momento usando el id.</p>
                <div className='flex flex-wrap gap-5 justify-center mt-10'>
                    <button 
                        
                        className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'
                    >
                        Estatus de Mi Ticket de Soporte
                    </button>
                    <button
                        onClick={handleModal}
                        className='border bg-red-500 text-gray-50 font-bold px-7 py-3 rounded-lg hover:bg-red-700 '
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        )
    }

  return (
    <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-wrap px-5  py-7 bg-slate-100 rounded-lg'
    >
        <div className='w-full flex justify-center'>
            <h2 className='text-3xl text-gray-900 mb-5 font-bold'>Ticket de Soporte</h2>
        </div>
        <label className='w-full lg:w-1/2 flex flex-col lg:pr-2 mb-2'>
            <p className='text-gray-600 text-lg font-medium'>Nombre</p>
            <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            />
        </label>
        <label className='w-full lg:w-1/2 flex flex-col lg:pr-l mb-2'>
            <p className='text-gray-600 text-lg font-medium'>Apellido</p>
            <input 
                type='text'
                name='lastname'
                value={form.lastname}
                onChange={handleChange}
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            />
        </label>
        <label className='w-full lg:w-1/3 flex flex-col lg:pr-2 mb-2'>
            <p className='text-gray-600 text-lg font-medium'>Tipo de Soporte</p>
            <select 
                name='service'
                value={form.service}
                onChange={handleChange}
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            >
                <option value={'Soporte Técnico'}>Soporte Técnico</option>
                <option value={'Soporte Post-Lanzamiento'}>Soporte Post-Lanzamiento</option>
                <option value={'Queja/Sugerencia'}>Quejas o Sugerencias</option>
            </select>
        </label>
        <label className='w-full lg:w-1/3 flex flex-col lg:pr-2 mb-2'>
            <p className='text-gray-600 text-lg font-medium'>Email</p>
            <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            />
        </label>
        <label className='w-full lg:w-1/3 flex flex-col lg:pl-2 mb-2'>
            <p className='text-gray-600 text-lg font-medium'>Teléfono</p>
            <input
                type='text'
                name='phone'
                value={form.phone}
                onChange={handleChange} 
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            />
        </label>
        <label className='flex flex-col w-full'>
            <p className='text-gray-600 text-lg font-medium'>Mensaje</p>
            <textarea
                name='message'
                value={form.message}
                onChange={handleChange} 
                rows={3} 
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            />
        </label>
        <div className='mt-5 flex items-center gap-5'>
            <button 
                type='submit'
                className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'
            >
                {buttonText}
            </button>
            {
                serverError && (
                    <div>
                        <p className='text-red-500'>{serverError}</p>
                    </div>
                )
            }
        </div>
    </form>
  )
}

export default TicketForm