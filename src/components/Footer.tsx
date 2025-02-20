"use client";

import { IoArrowUp } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-secondary-400 lg:px-10 pl-8 pb-0 pt-16 lg:pt-56">
      <div className="container mx-auto">
        <div className="flex flex-row items-start gap-16 mb-0">
          {/* Menu Section */}
          <div className="w-full lg:w-full sm:w-full mb-6 md:mb-0 ">
            <span className="font-bold text-works-title-large text-white">Menu</span>
            <hr className="border-t border-secondary-700 my-1" />
            <ul className="mt-4 space-y-2 text-works-title">
              <li>
                <Link href="/#intro" className="duration-300 transition-all hover:text-secondary-600">Home</Link>
              </li>
              <li>
                <Link href="/#about" className="duration-300 transition-all hover:text-secondary-600">About</Link>
              </li>
              <li>
                <Link href="/#projects" className="duration-300 transition-all hover:text-secondary-600">Projects</Link>
              </li>
              <li>
                <Link href="/#contact" className="duration-300 transition-all hover:text-secondary-600">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Socials Section */}
          <div className="w-full lg:w-full sm:w-full mb-6 md:mb-0">
            <span className="font-bold text-works-title-large text-white">Socials</span>
            <hr className="border-t border-secondary-700 my-1 mr-8 lg:mr-0" />
            <ul className="mt-4 space-y-2 text-works-title">
              <li>
                <a href="https://www.linkedin.com/in/justinccoleman" target="_blank" rel="noopener noreferrer" className="duration-300 transition-all hover:text-secondary-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ThisIsNotJustin" target="_blank" rel="noopener noreferrer" className="duration-300 transition-all hover:text-secondary-600">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row pt-12">
          <div className="flex flex-col text-left">
            <span className="text-secondary-500 font-extrabold text-special block mb-1">
              &copy;{new Date().getFullYear()} Justin Coleman
            </span>
            <span className="text-secondary-500 font-extrabold text-works-title block mb-1">
              All rights reserved.
            </span>
          </div>
          <div className="absolute right-10 pb-4 md:mt-0">
            <button
              onClick={scrollUp}
              className="flex items-center transition justify-center text-heading-3 p-5 overflow-hidden w-[80px] h-[80px] bg-secondary-600 hover:bg-secondary-700 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full group opacity-70 lg:opacity-100 hover:duration-300 duration-300"
            >
              <IoArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );

};