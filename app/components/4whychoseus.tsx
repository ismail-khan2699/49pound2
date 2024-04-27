import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from './clientside/scrollanimation';
import { animationData } from './data';

function Choseus() {
  return (
  <div className=" mt-14">
    <ScrollAnimation animationData={animationData[1]} delay={10}>

    <div className=" w-full mx-0 flex pt-14 md:pb-14 max-md:bg-custom-magenta max-md:flex-col-reverse flex-wrap">
      <Image height={1000} width={500} alt="ecommerce" className="md:w-1/2 w-full object-cover object-center h-96 md:rounded-r-md rounded-none" src="/assets/smileyface.jpg"/>
      <div className="md:w-1/2 w-full flex flex-col   px-4 md:py-6 mt-6 md:mt-0">
        <h2 className="text-sm title-font text-gray-300 md:text-gray-500 font-semibold tracking-widest py-2">Why Choose Us</h2>
        <div className='flex my-2'>
        <div className='max-md:hidden h-auto w-0 border-l-2 mr-2  border-custom-yello'></div>
        <h1 className="text-white md:text-gray-900 text-4xl font-bold mb-1 py-2">We Take Social Media Off Your 'To-Do' List!</h1>
        </div>
        <p className="leading-relaxed text-lg pb-3 max-md:text-gray-100 md:line-clamp-5">
        Tired of juggling social media? Let us take that off your plate! Our team’s got your back – from witty posts to timely updates, we’ll handle it all while you focus on bossing your business. Say goodbye to social media stress and hello to more time for what matters!

          </p>
      </div>
    </div>
    </ScrollAnimation>

    <ScrollAnimation animationData={animationData[1]} delay={10}>
    <div className=" w-full mx-0 flex pt-14 md:pb-14 bg-white max-md:flex-col-reverse md:flex-row-reverse md:bg-custom-magenta flex-wrap">
      <Image height={1000} width={500} alt="ecommerce" className="md:w-1/2 w-full object-cover object-center h-96 md:rounded-l-md rounded-none" src="/assets/socialcollage.jpg"/>
      <div className="md:w-1/2 w-full flex flex-col   px-4 md:py-6 mt-6 md:mt-0">
        <h2 className="text-sm title-font text-gray-500 md:text-gray-400 font-semibold tracking-widest py-2">Why Choose Us</h2>
        <div className='flex my-2'>
        <div className='max-md:hidden h-auto w-0 border-l-2 mr-2  border-custom-yello'></div>
        <h1 className="text-gray-900 md:text-white text-4xl font-bold mb-1 py-2">Eye-Catching Visuals That Grab Attention!</h1>
        </div>
        <p className="leading-relaxed text-lg pb-3 text-white max-md:text-gray-700 md:line-clamp-5">
        Unlike other agencies that might slap on extra fees for branded or designed posts, we’ve got you covered! We include those eye-catching visuals as part of the deal. So, no need to stress about extra costs – just sit back and let your content shine while we handle the creative side of things!
          </p>
      </div>
    </div>  </ScrollAnimation>
    <ScrollAnimation animationData={animationData[1]} delay={10}>
  <div className=" w-full mx-0 flex pt-14 md:pb-14 max-md:flex-col-reverse max-md:bg-custom-magenta flex-wrap">
      <Image height={1000} width={500} alt="ecommerce" className="md:w-1/2 w-full object-cover object-center h-96 md:rounded-r-md rounded-none" src="/assets/boost-graph.jpg"/>
      <div className="md:w-1/2 w-full flex flex-col   px-4 md:py-6 mt-6 md:mt-0">
        <h2 className="text-sm title-font text-gray-300 md:text-gray-500 font-semibold tracking-widest py-2">Why Choose Us</h2>
        <div className='flex my-2'>
        <div className='max-md:hidden h-auto w-0 border-l-2 mr-2  border-custom-yello'></div>
        <h1 className="text-white md:text-gray-900 text-4xl font-bold mb-1 py-2">We've Got It All! SEO Blogs, Social Media Marketing.</h1>
        </div>
        <p className="leading-relaxed text-lg pb-3 max-md:text-gray-100 md:line-clamp-5">
        We provide a comprehensive range of services to enhance your online presence. From SEO-optimised blogs that drive traffic to your website,, and targeted social media ads that engage your audience – we’ve got you covered. Our goal is to help you succeed in the digital world by offering solutions that meet your specific needs and goals.
          </p>
      </div>
    </div>  </ScrollAnimation>
  


      
    </div>
  )
}

export default Choseus