"use client";

import { IoArrowUp } from "react-icons/io5";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-secondary-400 pt-24 px-10 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16 mb-8">
          {/* Menu Section */}
          <div className="mb-6 md:mb-0">
            <span className="font-bold text-works-title-large text-white">Menu</span>
            <hr className="border-t border-secondary-700 my-1" />
            <ul className="mt-4 space-y-2 text-works-title">
              <li>
                <a href="#home" className="duration-300 transition-all hover:text-secondary-600">Home</a>
              </li>
              <li>
                <a href="#about" className="duration-300 transition-all hover:text-secondary-600">About</a>
              </li>
              <li>
                <a href="#projects" className="duration-300 transition-all hover:text-secondary-600">Projects</a>
              </li>
              <li>
                <a href="#contact" className="duration-300 transition-all hover:text-secondary-600">Contact</a>
              </li>
            </ul>
            <div className="flex flex-col pt-12 text-left">
              <span className="text-secondary-500 font-extrabold text-special block mb-1">
                &copy;{new Date().getFullYear()} Justin Coleman
              </span>
              <span className="text-secondary-500 font-extrabold text-works-title block mb-1">
                All rights reserved.
              </span>
            </div>
          </div>

          {/* Socials Section */}
          <div className="mb-6 md:mb-0">
            <span className="font-bold text-works-title-large text-white">Socials</span>
            <hr className="border-t border-secondary-700 my-1" />
            <ul className="mt-4 space-y-2 text-works-title">
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="duration-300 transition-all hover:text-secondary-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="duration-300 transition-all hover:text-secondary-600">
                  GitHub
                </a>
              </li>
            </ul>
            <div className="flex flex-col pt-12 text-left">
              <span className="text-secondary-500 opacity-0 font-extrabold text-special block mb-1">
                &copy;{new Date().getFullYear()} Justin Coleman
              </span>
              {/* Scroll to Top Button */}
              <div className="flex justify-end">
                <button
                  onClick={scrollUp}
                  className="flex items-center transition justify-center text-heading-3 p-5 overflow-hidden w-[60px] h-[60px] bg-secondary-600 hover:bg-secondary-700 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full group hover:duration-300 duration-300"
                >
                  <IoArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};