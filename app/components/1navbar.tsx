import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Dropdown from './clientside/dropdown';

function Navbar() {
  
  return (
    <div>
        <div className='bg-custom-magenta h-fit'>
    <header className="">
    <Dropdown/>
    </header>

    <section className="py-10 sm:py-6 lg:py-1 easy">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid  grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl py-4 font-bold text-white sm:text-6xl lg:text-7xl">
                    Affordable Social Media
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-7xl">Management.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-xl text-custom-yello font-bold sm:text-3xl">From Only £49 Per Month.</p>

                    <div className="mt-10 flex sm:items-center space-x-8">
                    <Link href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base rounded-xl text-custom-magenta transition-all duration-200 bg-custom-yello hover:bg-white hover:text-custom-yello focus:bg-yellow-600 font-bold hover:scale-95" role="button"> BOOK A CALL </Link>
                    <Link href="#" title="" className="inline-flex items-center justify-center  px-10 py-4 text-base rounded-xl text-custom-magenta transition-all duration-200 bg-white hover:bg-white hover:text-custom-yello font-bold hover:scale-95" role="button"> GET STARTED </Link>
                    </div>
                </div>
                <div>
                    <Image height={200} width={450} className="" src="/assets/svb1.jpg" alt="posts" />
                </div>
            </div>
        </div>
    </section>
</div>

    </div>
  )
}

export default Navbar