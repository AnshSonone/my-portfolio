

interface properties {
  element: string | any
}

function Certificate({ element }: properties) {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] text-white py-4 px-4 bg rounded-md cursor-pointer'>
      <div className='flex flex-col items-center justify-center'>
        <img className='w-[20rem] rounded-md' src={element.certificate} />
      </div>

      <div className='space-y-2 mt-3'>
        <h2 className=''>{element.certifcateName}</h2>
        <p className='w-full sm:w-[20rem] md:w-full'>{element.description}</p>
      </div>
    </div>
  )
}

export default Certificate
