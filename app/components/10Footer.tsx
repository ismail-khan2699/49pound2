import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaTiktok, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div>
      <footer className=" bg-custom-magenta body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className=" w-full md:w-1/2 flex flex-col flex-shrink-0 md:mx-0 mx-auto text-center max-md:justify-center max-md:items-center md:text-left">
      <p className=' text-5xl font-semibold text-white'><span className=' text-custom-yello'>Get More, Pay Less </span> It's All In Our Jam-Packed Plans!</p>
      <Link href="#" className="my-6 h-14 flex justify-center items-center px-3 text-white hover:scale-90 transition-all duration-300 font-bold text-xl bg-custom-yello w-fit rounded-lg " > From £49/month</Link>
      <p className="mt-2 text-sm text-gray-200">Affordable social media management, dynamic blog content, and strategic social media marketing solutions. Small price, big impact!</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">
      <div className="lg:w-2/5 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-custom-yello tracking-widest text-lg font-semibold mb-3">Useful Links</h2>
        <nav className="list-none mb-10 grid col-span-1 gap-y-4">
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 hover:text-custom-yello">Blog</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 hover:text-custom-yello">Privacy and Policy</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 hover:text-custom-yello">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 hover:text-custom-yello">Contact Us</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-2/5 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-custom-yello tracking-widest text-lg font-semibold mb-3">Connect With Us</h2>
        <nav className="list-none mb-10 grid col-span-1 gap-y-4">
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 hover:text-custom-yello">
              <Image height={75} width={150} src="/assets/page.jpg" alt='' />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 hover:text-custom-yello flex gap-x-2 items-center"><IoIosMail className=' h-5 w-5'/>  hello@49poundsocial.co.uk</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-50 transition-all duration-200 text-sm hover:text-custom-yello flex gap-x-2 items-center"><FaLocationDot className=' h-5 w-5'/>   5 Brayford Square, LONDON E1 0SG</Link>
          </li>
          <li>
          <span className="inline-flex  mt-5 ">
        <Link href="#" className=" text-custom-yello pr-4 hover:scale-90 transition-all duration-300">
          <FaFacebookSquare className=' h-6 w-6'/>
        </Link>
        <Link href="#" className=" text-custom-yello pr-4 hover:scale-90 transition-all duration-300">
          <FaInstagram className=' h-6 w-6'/>
        </Link> 
        <Link href="#" className=" text-custom-yello pr-4 hover:scale-90 transition-all duration-300">
          <FaSquareXTwitter className=' h-6 w-6'/>
        </Link> 
        <Link href="#" className=" text-custom-yello pr-4 hover:scale-90 transition-all duration-300">
          <FaTiktok className='h-6 w-6'/>
        </Link> 
        <Link href="#" className=" text-custom-yello pr-4 hover:scale-90 transition-all duration-300">
          <FaLinkedin className='h-6 w-6'/>
        </Link>
      </span>
      </li>
        </nav>
      </div>
    
    </div>
  </div>
  <div className=" bg-custom-magenta">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-custom-yello text-sm text-center sm:text-left">Copyright 49 Pound Social – part of Aethon group Ltd Company number 15520393
      </p>
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer