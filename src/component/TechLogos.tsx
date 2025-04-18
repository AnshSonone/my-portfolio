import React from 'react'

function TechLogos({element}: any) {
  return (
        <div className='py-4'>
            <img key={element} className='bg-transparent' src={element} width={'100vw'} height= {'100vh'}/>
        </div>
  )
}

export default TechLogos