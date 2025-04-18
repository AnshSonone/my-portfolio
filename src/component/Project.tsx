import React from 'react';

interface properties{
  key:string
  element: string
}

function Project({key, element}: properties) {
  return (
    <div key={key} className='w-[25wmax] text-white border-[1px] py-2 border-white rounded-md my-4 cursor-pointer'>
        <h2 className='pb-2 text-xl'>{element.projectName}</h2>
      <div className='sm:w-[25rem]'>
        <img className='' src={element.project} />
        <div className='p-2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed quod vero ducimus laborum rerum.</p>
        </div>
      </div>
    </div>
  )
}

export default Project