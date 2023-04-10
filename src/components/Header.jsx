import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';
import { theme, toggleTheme } from '../App';

export const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <p><BiSun /></p>
  </svg>
);

export const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <p><BsFillMoonStarsFill /></p>
  </svg>
);

function Header({ theme, toggleTheme }) {
  return (
    <div className="py-10 px-10">
      <nav>
        <ul className="flex items-center">
          <li className="cursor-pointer text-xl" onClick = {toggleTheme}>
            {theme === 'dark' ? <BiSun /> : <BsFillMoonStarsFill />}
          </li>
          <li className="ml-auto">
            <a className="text-md md:text-lg font-medium bg-teal-700 text-white px-4 py-2 rounded-md" href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;


