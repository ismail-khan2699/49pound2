import React from 'react'
import Image from 'next/image';
import Qna from './clientside/Qna';
import { qnaData } from './data';

function FAQ() {
  return (
    <div className=' w-full h-auto py-7  bg-custom-yello flex flex-col md:flex-row justify-center items-center'>
        <div className=' md:w-1/2 flex justify-center items-center'>
            <Image height={300} width={300} src='/assets/faq.png' alt=''/>
        </div>
        <div className='w-full md:w-1/2 px-8 mt-1 grid col-span-1 gap-y-3'>
        {qnaData.map((qna, index) => (
        <Qna key={index} question={qna.question} answer={qna.answer} />
      ))}
        </div>
    </div>
  )
}

export default FAQ