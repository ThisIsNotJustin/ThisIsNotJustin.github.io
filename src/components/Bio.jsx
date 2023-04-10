import React from 'react';
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

function Intro() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-5xl md:text-7xl mb-3 md:mb-3 font-bold text-teal-400">
            Justin Coleman
        </h1>
        <p className="text-base md:text-xl lg:text-2xl mb-2 font-bold">
            Software Engineer & Web Developer
        </p>
        <p className="text-sm md:text-md lg:text-lg max-w-xl mb-4 font-medium">
            Computer Science student attending Austin Peay State University
        </p>
        <div className="text-2xl md:text-3xl lg:text-4xl flex justify-center space-x-10 md:mb-12 text-indigo-900 pt-2">
            <a href="https://www.linkedin.com/in/justin-coleman-5726bb271/" target="_blank">
                <AiFillLinkedin />
            </a>
                <HiOutlineMail onClick={handleScroll} style={{ cursor: "pointer" }} />
            <a href="https://github.com/ThisIsNotJustin" target="_blank">
                <AiFillGithub />
            </a>
        </div>
        {scroll && handleScroll()}
    </div>
  );
}

export default Intro;
