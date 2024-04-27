import React from 'react'
import NumberCounter from './clientside/changingNum'

function Statpage() {
  return (
    <div className=' w-full bg-custom-magenta h-auto py-32 flex flex-col pointer-events-none justify-center items-center gap-3'>
        <h1 className=' text-white mx-2 font-bold text-3xl md:text-6xl hover:underline '>How Does It Work?</h1>
        <h2 className='text-white font-semibold text-2xl '>Dive In Today—It's A Piece Of Cake.</h2>
        <div className='flex flex-col lg:flex-row gap-5 justify-between max-lg:items-center w-full px-28'>
            <div className=' w-full lg:w-1/3 flex flex-col items-center gap-3'>
                <div className=' text-7xl text-custom-yello h-26 font-bold'><NumberCounter count={1}/></div>
                <div className='text-white font-bold text-2xl  '>CHOOSE YOUR DESIRED PLAN</div>
                <div className='text-white text-base  '>Pick the package that suits you best. Add any extras you fancy.</div>
            </div>
            <div className=' w-full lg:w-1/3 flex flex-col items-center gap-3'>
                <div className=' text-7xl text-custom-yello h-26 font-bold'><NumberCounter count={2}/></div>
                <div className='text-white font-bold text-2xl  '>COMPLETE INTAKE FORM</div>
                <div className='text-white text-base  '>Fill out the questionnaire about your brand and target audience.</div>
            </div>
            <div className=' w-full lg:w-1/3 flex flex-col items-center gap-3'>
                <div className=' text-7xl text-custom-yello h-26 font-bold'><NumberCounter count={3}/></div>
                <div className='text-white font-bold text-2xl  '>GET ON-BRAND CONTENT</div>
                <div className='text-white text-base  '>Get top-notch posts within 7 working days.</div>
            </div>
        </div>
    </div>
  )
}

export default Statpage