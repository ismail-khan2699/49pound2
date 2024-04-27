'use client'
import React, { useEffect } from "react";
import './animation.css'

const TypingTextEffect: React.FC = () => {
  useEffect(() => {
    const dynamicText = document.querySelector("#dText");
    const words = ['Affordable', 'Creative', 'Reliable'];
    
    // Variables to track the position and deletion status of the word
    let wordIndex = 0;
    let charIndex = 1;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout | null = null; 

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      if (dynamicText) {
        dynamicText.textContent = currentChar;
        dynamicText.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentWord.length) {
          // If condition is true, type the next character
          charIndex++;
          timeoutId = setTimeout(typeEffect, 50); // Assign timeout ID
        } else if (isDeleting && charIndex > 0) {
          // If condition is true, remove the previous character
          charIndex--;
          timeoutId = setTimeout(typeEffect, 50); // Assign timeout ID
        } else {
          // If word is deleted then switch to the next word
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          timeoutId = setTimeout(typeEffect, 1500); // Assign timeout ID
        }
      }
    };

    typeEffect();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

const Home: React.FC = () => {
  return (
    <div className=" mx-3 mt-1">
      <h1>
      <span id="dText" className="texts stop-blinking text-custom-yello text-2xl lg:text-3xl font-bold">
        <TypingTextEffect />
        </span>
      </h1>
    </div>
  );
};

export default Home;
