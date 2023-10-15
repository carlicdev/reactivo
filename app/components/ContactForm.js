"use client"

import { useRef, useState } from 'react'
import { VscSend} from 'react-icons/vsc'
import { AiOutlineReload } from 'react-icons/ai'
import Logo from './Logo'

const ContactForm = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [serverError, setServerError] = useState(null)
  const [serverMsg, setServerMsg] = useState(null)
  const [form, setForm] = useState({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      message: ''
  });

  const handleChange = (e) => {
    setServerError(null)    
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      setSending(true)

      try {
          const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                name: form.name,
                lastname: form.lastname,
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

  const buttonText = sending ?  <span className='flex items-center gap-2'><AiOutlineReload className='animate-spin'/>Enviando</span> : <span className='flex items-center gap-2'><VscSend/>Enviar</span>

  if (serverMsg) {
    return (
        <div className='bg-slate-100 rounded-lg px-5 py-10'>
            <h2 className='text-gray-900 text-xl mb-5'>Mensaje Recibido</h2>
            <p className='text-gray-600 text-lg mb-5 text-justify'>Nuestros expertos responderán a tu mensaje lo más pronto posible.</p>
            <p className='text-gray-600 text-lg mb-5'>Por favor, revisa tu bandeja de entrada.</p>
            <div className='mb-5'>
              <Logo />
            </div>
            <div className='flex flex-wrap gap-5 justify-center mt-10'>
                <button
                    onClick={() => setServerMsg(null)}
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
    >
      <div className='flex flex-wrap'>
        <label className='w-full lg:w-1/2 px-1 mb-2'>
          <span className='text-lg text-gray-300 '>Nombre</span>
          <input 
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='w-full px-1 py-2 mt-1 border rounded-lg outline-none focus:outline-blue-700' 
          />
        </label>
        <label className='w-full lg:w-1/2 px-1 mb-2'>
          <span className='text-lg text-gray-300 '>Apellido</span>
          <input 
            type='text'
            name='lastname'
            value={form.lastname}
            onChange={handleChange}          
            className='w-full px-1 py-2 mt-1 border rounded-lg outline-none focus:outline-blue-700' 
          />
        </label>
        <label className='w-full lg:w-1/2 px-1 mb-2'>
          <span className='text-lg text-gray-300 '>Email</span>
          <input 
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='w-full px-1 py-2 mt-1 border rounded-lg outline-none focus:outline-blue-700' 
          />
        </label>
        <label className='w-full lg:w-1/2 px-1 mb-2'>
          <span className='text-lg text-gray-300 '>Teléfono</span>
          <input 
            type='text'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            className='w-full px-1 py-2 mt-1 border rounded-lg outline-none focus:outline-blue-700' 
          />
        </label>
        <label className='w-full'>
          <span className='text-lg text-gray-300 '>Mensaje</span>
          <textarea 
            name='message'
            value={form.message}
            onChange={handleChange}          
            rows={3} 
            className='w-full px-2 py-2 mt-1 border rounded-lg outline-none focus:outline-blue-700' 
          />
        </label>
      </div>
      <div className='flex items-center mt-5 gap-5'>
        <button className='flex gap-2 items-center hover:scale-105 trasition-all duration-300 bg-blue-700 px-6 py-3 text-lg font-bold rounded text-slate-50 shadow-lg'>
          {buttonText}
        </button>
        <p className='text-red-400'>{serverError}</p>
      </div>
    </form>
  )
}

export default ContactForm