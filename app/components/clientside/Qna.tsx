'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
interface QnaProps {
  question: string;
  answer: string;
}

const Qna: React.FC<QnaProps> = ({ question, answer }) =>{
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={contentRef}>
      <div className={`flex h-auto min-h-10 py-2 px-9 text-base justify-between items-center ${isOpen ? "rounded-t-lg bg-white text-custom-magenta" : "rounded-lg bg-custom-magenta text-white"}`} onClick={toggleContent}>
        {question} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div className={`${isOpen ? 'opacity-100 max-h-[1000px] py-4 px-9 duration-500' : 'opacity-0 max-h-0 overflow-hidden'} transition-opacity transition-max-h bg-slate-200 rounded-b-lg text-black `}>
        {answer}
      </div>
    </div>
  );
}

export default Qna;
