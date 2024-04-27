'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineMenuFold } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { WedData } from '../data'
import Image from 'next/image';

function Dropdown() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
      };
  return (
    <div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <Link href="#" title="" className="flex">
                        <Image height={100} width={300} className="w-auto h-12" src="/assets/page.jpg" alt="logo" />
                    </Link>
                </div>

    <div className="md:hidden">
      
      <button className=" h-auto w-auto" onClick={toggleMenu}>
      {isMenuOpen ? <ImCross className=" text-white h-6 w-auto hover:scale-95" />: <AiOutlineMenuFold className=" text-white h-8 w-auto hover:scale-95" />}
      </button>
    </div>
      
        <div className="hidden ml-auto md:flex md:items-center md:justify-center md:space-x-3 lg:space-x-10">
                    <Link href="#" title="" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Our Story </Link>

                    <div className="group relative">
                <Link
                  href="#"
                  title=""
                  className="text-base font-semibold text-white transition-all duration-200 flex gap-1 text-center hover:text-opacity-80"
                >
                  What We Do
                  <IoIosArrowDown className="mt-1" />
                </Link>
                <div className="absolute z-10 hidden w-56 bg-white border border-gray-200 shadow-lg rounded-lg group-hover:block">
                  <ul className=" rounded-lg overflow-hidden">
                   {WedData.map(item=>(
                    <li key={item.id}>
                      <Link href={item.link} className="block text-sm px-4 py-2 text-gray-800 hover:bg-orange-300 transition-all duration-400 ">
                        {item.data}
                      </Link>
                    </li>
                   ))}
                   
                  </ul>
                </div>
              </div>
                    <Link href="#" title="" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Samples </Link>

                    <Link href="#" title="" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Contact </Link>
                    <div className="w-px h-5 bg-black/20"></div>
<div className=' flex gap-x-1'>
  
        <Link href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold  text-gray-300 border-2 border-transparent hover:border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Log In </Link>
                    <Link href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold  text-gray-300 border-2 border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Sign in </Link>
</div>

                </div>
            
            
            </div>
        </div>
        <div className={`${isMenuOpen ? 'z-50 transform origin-top transition-all duration-300 translate-y-0' : ' -translate-y-12 opacity-0 transition-all duration-300 pointer-events-none'} w-full absolute md:hidden mt-2 px-4 py-2 bg-white border border-gray-200 shadow-lg rounded-lg`}>
        <div className=" block ml-auto ">
                   <Link href="#" title="" className="text-xl text-custom-magenta transition-all duration-200 hover:text-opacity-80"> Our Story </Link><br /><br />

                   <div className="group relative w-fit">
               <Link
                 href="#"
                 title=""
                 className="text-xl  text-custom-magenta transition-all duration-200 flex gap-1 text-center hover:text-opacity-80"
               >
                 What We Do
                 <IoIosArrowDown className="mt-1 text-custom-magenta" />
               </Link>
               <div className="absolute z-10 hidden w-56 bg-white border border-gray-200 shadow-lg rounded-lg group-hover:block">
                 <ul className=" rounded-lg overflow-hidden">
                  {WedData.map(item=>(
                   <li key={item.id}>
                     <Link href={item.link} className="block text-sm px-4 py-2 text-gray-800 hover:text-white hover:bg-cyan-800 transition-all duration-400 ">
                       {item.data}
                     </Link>
                   </li>
                  ))}
                  
                 </ul>
               </div>
             </div><br />
                   <Link href="#" title="" className="text-xl text-custom-magenta transition-all duration-200 hover:text-opacity-80"> Samples </Link><br /><br />

                   <Link href="#" title="" className="text-xl text-custom-magenta transition-all duration-200 hover:text-opacity-80"> Contact </Link><br /><br />

                  <div className=' flex gap-x-2'>
                  <Link href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-xl  bg-slate-100 text-custom-magenta border-2 border-transparent hover:border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Log in </Link>
                  <Link href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-xl  bg-slate-100 text-custom-magenta border-2 border-transparent hover:border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Sign in </Link>
                  </div>

               </div>
     </div> 
    </div>
  )
}

export default Dropdown