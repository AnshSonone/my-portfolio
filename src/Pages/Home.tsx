import React, { useEffect } from 'react';
import Introduction from '../component/Introduction';
import Project from '../component/Project';
import { useScroll, motion } from 'motion/react';

function Home() {

  useEffect(() => {
    document.title = 'Ansh sonone | Home'
  }, [])

  

  return (
    <div>
        <Introduction />
      <div className='my-18'>
      <div className='text-white'>
        <h2 className='font-bold text-4xl'><span className='text-blue-300 font-bold text-4xl'>My</span> Journey so far</h2>
        <p className='text-2xl my-4'>Climbing the ladders of my life till i reach the top</p>
      </div>
      <div>
        add boucing ball animation
      </div>
      <div className='text-white justify-center  space-y-2'>
        <h3 className='text-xl'>completed B.com with ( Computer Application ) in year ( 2024 )</h3>
        <h3 className='text-xl'>completed Class 12th in year (2020)</h3>
        <h3 className='text-xl'>completed Class 10th in year (2018)</h3>
      </div>
      </div>
      <Project />
    </div>
  )
}

export default Home