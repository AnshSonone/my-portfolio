import * as motion from 'motion/react-client';

interface properties{
  element: string | any
}

function Certificate({element}: properties) {
  return (
    <motion.div whileHover={{ scale: 1.1  }}
    whileTap={{ scale: 1.1 }} className='flex flex-col justify-center items-center w-[100%] p-5 bg-linear-to-bl from-teal-950 to-zinc-950 text-white py-4  rounded-md cursor-pointer'>
      <div className='flex flex-col items-center justify-center'>
      <img className='w-[18rem] rounded-md' src={element.certificate} />
      </div>

      <div className='space-y-2 mt-3'>
        <h2 className='bg-zinc-950 rounded-md'>{element.certifcateName}</h2>
        <p className='bg-zinc-950 my-2 p-2 rounded-md w-full sm:w-[20rem] md:w-full'>{element.description}</p>
      </div>
    </motion.div>
  )
}

export default Certificate
