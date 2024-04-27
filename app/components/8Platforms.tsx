import React from 'react'
import Image from 'next/image';
import { slideShow } from './data';

function Platforms() {
  return (
    <div className=' h-56 w-full flex flex-col items-center justify-center'>
        <p className=' text-black text-4xl font-bold text-center'>Platforms We Use To Drive Client Success.</p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {slideShow.map((data, index) => (
        <li key={index}>
          <Image height={50} width={150} src={data.src} alt={data.alt} />
        </li>
      ))}
    </ul>       
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
    {slideShow.map((data, index) => (
        <li key={index}>
          <Image height={50} width={150} src={data.src} alt={data.alt} />
        </li>
      ))}
    </ul>         
</div>
</div>
  )
}

export default Platforms