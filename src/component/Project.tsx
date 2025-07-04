import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";

interface properties {
  element: string | any
}

function Project({ element }: properties) {

  return (
    <div className='w-[80vw] h-fit md:w-[35rem]  lg:w-[25vw] text-white rounded-md cursor-pointer my-6 md:my-4'>
      <div className='flex flex-col items-center justify-center'>
        <img className=' rounded-t-md' src={element.project} />
      </div>

      <div className='space-y-4 bg-zinc-950 py-4 px-8 rounded-b-md w-full'>
        <div className='flex items-center justify-between'>
          <h2 className='text-start text-xl lg:text-xl'>{element.projectName}</h2>
          <Link to={element.link} target='_blank'><h2 className='flex items-center cursor-pointer text-start text-2xl lg:text-lg text-blue-800  underline'>Visit <FiExternalLink size={24} className='hover:rotate-45 mx-2' /></h2></Link>
        </div>
        <p className='my-2 w-full md:w-full text-start text-xl lg:text-lg'>{element.description}</p>
      </div>
    </div>
  )
}

export default Project
