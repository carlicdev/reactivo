
import { BsArrowRight, BsPersonBoundingBox, BsRocketTakeoff, BsBuildings, BsBuilding} from 'react-icons/bs'

const PackageCard = ({devPackage}) => {

    const iconMapping = {
        personal: BsPersonBoundingBox,
        startup: BsRocketTakeoff,
        business: BsBuilding,
        enterprise: BsBuildings
    }

    const scrollToElement = (el) => {
        const elementoDestino = document.getElementById(el);
    
        if (elementoDestino) {
          elementoDestino.scrollIntoView({
            behavior: "smooth", 
            block: "nearest",     
          });
        }
      };

  return (
    <div className='w-full md:w-1/2 lg:w-1/4 px-4 my-5 lg:my-0'>
        <div className='w-full rounded-xl shadow-xl bg-white border'>
            <div className='flex items-center justify-center mt-5'>
                <span className={`${devPackage.class} flex items-center justify-center h-[70px] w-[70px] rounded-full text-4xl`}>
                    {iconMapping[devPackage.icon]()}
                </span>
            </div>
            <div className='flex flex-col p-4'>
                <h2 className='font-bold text-gray-800 text-xl mb-5 text-center'>{devPackage.title}</h2>
                <p className='text-gray-600 text-justify mb-5'>{devPackage.text}</p>
            </div>
            <div className='flex w-full items-end justify-end'>
                <button 
                className={`${devPackage.class} px-5 py-2 rounded-tl-lg rounded-br-lg`}
                onClick={() => scrollToElement(devPackage.link)}
                >
                    <BsArrowRight className='text-3xl hover:scale-110 transition-all duration-300'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default PackageCard