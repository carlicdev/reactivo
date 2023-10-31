

const CotizacionButton = ({ handleModal }) => {
  return (
        <button 
          onClick={handleModal}
          className='bg-red-400 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-lg text-white font-medium text-2xl shadow-lg'
          >
            Solicitar Cotización
        </button>
  )
}

export default CotizacionButton