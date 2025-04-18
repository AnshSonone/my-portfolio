import React, { useEffect } from 'react';
import Introduction from '../component/Introduction';
import Project from '../component/Project';
import wide from '../assets/wide.png'
import wordle from '../assets/wordle.png'
import balanceGame from '../assets/balance_game.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'

const projects = [
  {"projectName": "Wide", "project": wide}, 
  {"projectName": "Wordle", "project": wordle}, 
  {"projectName": "Balance Game", "project": balanceGame}, 
  {"projectName": "Facebook Clone", "project": facebook}, 
  {"projectName": "Linkedin Clone", "project": linkedin}
]

function Home() {

  useEffect(() => {
    document.title = 'Ansh sonone | Home'
  }, [])

  return (
    <div className='animate-fade-down animate-once'>
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
        <h3 className='text-xl flex-nowrap'>completed B.com with ( Computer Application ) in year ( 2024 )</h3>
        <h3 className='text-xl'>completed Class 12th in year (2020)</h3>
        <h3 className='text-xl'>completed Class 10th in year (2018)</h3>
      </div>
      </div>
      <div className='my-10'>
        <div className='text-white'>
        <h2 className='font-bold text-4xl'><span className='text-blue-300 font-bold text-4xl'>My</span> Projects</h2>
        </div>
    </div>
      <div className='md:grid md:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {
          projects.map(element => (
            <Project key={element} element={element} />
          ))
        }
      </div>
    </div>
  )
}

export default Home