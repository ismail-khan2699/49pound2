import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { animationData, reviews } from './data';
import ScrollAnimation from './clientside/scrollanimation';

function Reviews() {
  return (
    <div className="flex flex-col justify-center md:flex-row w-full bg-custom-magenta overflow-hidden py-12 px-3">
      <div className='w-full md:w-2/6'>
        <ScrollAnimation animationData={animationData[1]}>
        <div className=' inline-flex text-custom-yello text-2xl'>What Some Of Our Clients Say.......</div>
        <div className=' text-white text-3xl md:text-7xl font-bold py-5 md:w-3/4'>Don’t Just Take Our Word For It</div>
        </ScrollAnimation>
      </div>
      <div className='w-full  md:w-4/6 grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
      {reviews.map((review, index) => (
          <div key={index} className=' flex flex-col max-md:px-24 items-center justify-items-center text-center py-4'>
            <ScrollAnimation animationData={animationData[1]}>
            <div className='flex text-custom-yello w-full items-center justify-center mb-2'>
              {[...Array(review.stars)].map((_, i) => (
                <FaStar className=' mr-2' key={i} />
              ))}
            </div>
            <p className=' mb-4 text-gray-300 h-auto lg:h-36 flex justify-center '>{review.content}</p>
            <h1 className=' text-2xl font-bold text-custom-yello'>{review.name}</h1>
            <h3 className=' text-custom-yello'>{review.role}</h3>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
