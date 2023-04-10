import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Intro({ onComplete }) {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (text1 && text2) {
      const typed1 = new Typed(text1, {
        strings: ['Hello World!'],
        typeSpeed: 100,
        showCursor: false,
        onComplete: (self) => {
          const typed2 = new Typed(text2, {
            strings: ['<span class = "block">I\'m Justin Coleman,</span><span>and this is my portfolio!</span>'],
            startDelay: 500,
            showCursor: false,
            typeSpeed: 100,
            onComplete: (self) => {
              setTimeout(() => {
                onComplete();
              }, 2000);
            },
          });
        },
      });
    } else {
      console.log('One or more elements not found.');
    }
  }, []);

  return (
    <div className = "flex flex-col justify-center items-center h-screen">
      <h1>
        <span ref = {text1Ref} className="text1 text-5xl md:text-7xl lg:text-9xl font-bold"></span>
      </h1>
      <hr className = "m-4 mx-auto w-1/2 border-none" />
      <h2 className = "text-center">
        <span ref = {text2Ref} className="text2 text-xl md:text-5xl lg:text-6xl font-medium"></span>
      </h2>
    </div>
  );
}

export default Intro;
