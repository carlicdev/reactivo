import Link from 'next/link'

const CotizacionButton = ({ handleModal }) => {
  return (
        <button 
          onClick={handleModal}
          className='bg-blue-700 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-lg text-white font-medium text-2xl'
          >
            Solicitar Cotización
        </button>
  )
}

export default CotizacionButton