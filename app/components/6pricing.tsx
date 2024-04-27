import Link from 'next/link'
import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import ScrollAnimation from './clientside/scrollanimation';
import { animationData } from './data';

function Pricing() {
  return (
    <div>
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Social Media Management Plans.</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Explore our budget-friendly social media management bundles</p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 overflow-x-hidden mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            <ScrollAnimation animationData={animationData[3]}>

            <div className="overflow-hidden bg-white border-2  border-custom-magenta rounded-xl">
                <div className="p-8 xl:px-12">
                    <h3 className="text-5xl font-semibold text-custom-magenta">Affordable</h3>
                    <p className="text-3xl font-bold  text-custom-magenta mt-7">£49/month</p>
                    <p className="mt-3 text-sm text-gray-600">For startups on a tight budget.</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> High-Quality Visuals </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> 2 Posts Per Week </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Captions & Hashtags </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Scheduling & Posting </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Facebook </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Instagram </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Twitter </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <RxCrossCircled />
                            <span className="text-base font-medium text-gray-900"> LinkedIn </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <RxCrossCircled />
                            <span className="text-base font-medium text-gray-900"> Tik Tok </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> UK-Based Content Creator </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Add-On Services Available </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Monthly Rolling Plan </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Email Support </span>
                        </li>

                       
                    </ul>

                    <Link href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base rounded-lg  transition-all duration-500 hover:scale-90  bg-custom-yello font-bold text-custom-magenta" role="button"> Get full access </Link>
                    
                </div>
            </div>
            </ScrollAnimation>

            <div className="overflow-hidden bg-custom-yello border-2  border-custom-yello rounded-xl">
                <div className="p-8 xl:px-12">
                    <h3 className="text-5xl font-semibold text-custom-magenta">Value</h3>
                    <p className="text-3xl font-bold  text-custom-magenta mt-7">£99/month</p>
                    <p className="mt-3 text-sm text-gray-600">Great for small businesses.</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> High-Quality Visuals </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> 5 Posts Per Week </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Captions & Hashtags </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Scheduling & Posting </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Facebook </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Instagram </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Twitter </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <RxCrossCircled />
                            <span className="text-base font-medium text-gray-900"> LinkedIn </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <RxCrossCircled />
                            <span className="text-base font-medium text-gray-900"> Tik Tok </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> UK-Based Content Creator </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Add-On Services Available </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Monthly Rolling Plan </span>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium text-gray-900"> Email Support </span>
                        </li>

                       
                    </ul>

                    <Link href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base rounded-lg  transition-all duration-500 hover:scale-90  bg-custom-magenta font-bold text-white" role="button"> Get full access </Link>
                    
                </div>
            </div>
            <ScrollAnimation animationData={animationData[4]}>

            <div className="overflow-hidden  bg-custom-magenta border-2  border-custom-magenta rounded-xl">
                <div className="p-8 xl:px-12">
                    <h3 className="text-5xl font-semibold text-white">Ultimate</h3>
                    <p className="text-3xl font-bold  text-white mt-7">£149/month</p>
                    <p className="mt-3 text-sm text-gray-200">More graphics and content.</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> High-Quality Visuals </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> 7 Posts Per Week </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Captions & Hashtags </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Scheduling & Posting </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Facebook </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Instagram </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Twitter </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                        <TiTickOutline />
                            <span className="text-base font-medium "> LinkedIn </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                        <TiTickOutline />
                            <span className="text-base font-medium "> Tik Tok </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> UK-Based Content Creator </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Add-On Services Available </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Monthly Rolling Plan </span>
                        </li>
                        <li className="inline-flex items-center text-white space-x-2">
                            <TiTickOutline />
                            <span className="text-base font-medium "> Whatsapp Support </span>
                        </li>

                       
                    </ul>

                    <Link href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base rounded-lg  transition-all duration-500 hover:scale-90  bg-white font-bold text-custom-yello" role="button"> Get full access </Link>
                    
                </div>
            </div>
            </ScrollAnimation>
           
        </div>
    </div>
</section>
</div>
  )
}

export default Pricing