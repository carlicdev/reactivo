"use client"

import { useRef, useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import Logo from './Logo'

const QuoteForm = ({handleModal}) => {
    const formRef = useRef()
    const [isValid, setIsValid] = useState(true)
    const [sending, setSending] = useState(false)
    const [serverError, setServerError] = useState(null)
    const [serverMsg, setServerMsg] = useState(null)
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        service: 'Desarrollo Web',
        email: '',
        phone: '',
        message: ''
    });

    
    // Función para verificar el formato del correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleChange = (e) => {
        setServerError(null)
        const { name, value } = e.target;
        setForm({...form, [name]: value})
        if (name === 'email') {
            setIsValid(isValidEmail(value))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true)
        setServerError(null)
        try {
            const response = await fetch('/api/quote', {
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
            
            if (data) setSending(false)
            if (data.status === 400) setServerError(data.message)
            if (data.status === 200) setServerMsg(data.message)
        } catch (err) {
            setSending(false)
            setServerError(err.message)
        }
        
    }

    const buttonText = sending ?  <span className='flex items-center gap-2'><AiOutlineReload className='animate-spin'/>Enviando</span> : <span>Solicitar Cotización</span>

    //mensaje de error si el correo no es válido
    const errorMessage = !isValid ? (
      <p className="mb-1 text-center text-xs text-red-500">*Ingresa un correo electrónico válido.</p>
    ) : null;

    if (serverMsg) {
        return (
            <div className='bg-slate-100 rounded-lg p-5'>
                <h2 className='text-gray-900 text-xl mb-5'>Solicitud Recibida</h2>
                <p className='text-gray-600 text-lg mb-5'>Gracias por elegir Reactivo. Estamos ilusionados de empezar a trabajar en tu proyecto.</p>
                <p className='text-gray-600 text-lg mb-5 text-justify'>Nuestros expertos están atendiendo tu solicitud. Nos pondremos en contacto contigo lo más pronto posible.</p>
                <div className='text-center'>
                    <Logo />
                </div>
                <div className='flex flex-wrap gap-5 justify-center mt-10'>
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
            <h2 className='text-3xl text-gray-900 mb-5 font-bold'>Solicitud de Cotización</h2>
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
        <label className='w-full lg:w-1/2 flex flex-col lg:pl-2 mb-2'>
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
            <p className='text-gray-600 text-lg font-medium'>Tipo de Servicio</p>
            <select 
                name='service'
                value={form.service}
                onChange={handleChange}
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border cursor-pointer'
            >
                <option value={'Desarrollo Web'}>Desarrollo Web</option>
                <option value={'Desarrollo de Software'}>Desarrollo de Software</option>
                <option value={'Mantenimiento'}>Mantenimiento</option>
                <option value={'Actualización'}>Actualización</option>
                <option value={'Consultoría'}>Consultoría</option>
                <option value={'Hosting'}>Hosting</option>
            </select>
        </label>
        <label className='w-full lg:w-1/3 flex flex-col lg:pr-2 mb-2'>
            <div className='flex gap-2 items-end justify-start'>
                <p className='text-gray-600 text-lg font-medium'>Email</p>
                <span>{errorMessage}</span>
            </div>
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
                rows={5} 
                placeholder='Cuentanos sobre las caracteristicas que te gustaría que incluyera tu proyecto'
                className='w-full px-1 py-2 rounded-lg outline-none focus:outline-blue-700 border'
            />
        </label>
        <div className='mt-5 flex items-center gap-5'>
            <button 
                disabled={!isValid}
                type='submit'
                className='border border-blue-700 text-blue-700 font-bold px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-gray-50'
            >
                {buttonText}
            </button>
            <p className='text-red-500'>{serverError}</p>
        </div>
    </form>
  )
}

export default QuoteForm