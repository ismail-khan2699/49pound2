import React from 'react'
import WordSwapper from './clientside/wordswap'

function Company() {
  return (
    <div className=' bg-custom-magenta w-full h-32 lg:h-40 my-3 justify-center items-center text-center flex'>
        <div className='lg:flex'>
        <p className=' text-white font-bold text-2xl lg:text-4xl'>A Social Media Company That's</p>
        <WordSwapper/>
        </div>
    </div>
  )
}

export default Company