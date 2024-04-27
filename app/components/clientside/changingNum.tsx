'use client'
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface NumberCounterProps {
  count: number;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ count }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [inViewRef, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (currentNumber < count) {
          setCurrentNumber((prevNumber) => prevNumber + 1);
        } else {
          clearInterval(interval);
        }
      }, 500); // Adjust delay as needed

      return () => clearInterval(interval);
    }
  }, [count, currentNumber, inView]);

  return (
    <div ref={inViewRef}>
      {inView && <div>{currentNumber}</div>}
    </div>
  );
};

export default NumberCounter;
