import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Typescript from '../assets/typescript.png'


import Flutter from '../assets/flutter.png'
import Kotlin from '../assets/kotlin.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='py-6'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Technologies I've worked with</p>
            {/* <p className='py-4'>These are the technologies I've worked with</p> */}
          </div>

          <div>
            
            <p className='font-bold'>Web Development</p> 
            
            </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='pt-4 w-20 mx-auto' src={HTML} alt="" />
              <p className='my-4'>HTML5</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='pt-4 w-20 mx-auto' src={CSS} alt="" />
              <p className='my-4'>CSS3</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='pt-4 w-20 mx-auto' src={Javascript} alt="" />
              <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='pt-4 w-20 mx-auto' src={Typescript} alt="" />
              <p className='my-4'>Typescript</p>
            </div>
          </div>

          <div>

          <div>
            <p className='font-bold'>Mobile App Development</p> 
            </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6'>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='pt-4 w-20 mx-auto' src={Flutter} alt="" />
              <p className='my-4'>Flutter</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='pt-4 w-20 mx-auto' src={Kotlin} alt="" />
              <p className='my-4'>Kotlin</p>
            </div>  
          </div>

          </div>

          {/* ========================= */}
          <div>

            <div>
              <p className='font-bold'>Mobile App Development</p> 
              </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6'>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='pt-4 w-20 mx-auto' src={Flutter} alt="" />
                <p className='my-4'>Flutter</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='pt-4 w-20 mx-auto' src={Kotlin} alt="" />
                <p className='my-4'>Kotlin</p>
              </div>  
            </div>

            </div>
            
          {/* ========================= */}

          <div>

            <div>
              <p className='font-bold'>Mobile App Development</p> 
              </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6'>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='pt-4 w-20 mx-auto' src={Flutter} alt="" />
                <p className='my-4'>Flutter</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='pt-4 w-20 mx-auto' src={Kotlin} alt="" />
                <p className='my-4'>Kotlin</p>
              </div>  
            </div>

            </div>

          {/* ========================= */}

          


            
        </div>
       
    </div>
  )
}

export default Skills