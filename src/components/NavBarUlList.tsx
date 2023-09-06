import React, { useState } from 'react'
import Link from "next/link";

const NavBarUlList = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-white font-semibold text-xl mb-2 md:mb-0 md:mr-4">
              EventManager
            </span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-1/2 justify-around space-y-2 md:space-y-0 md:space-x-4`}
        >
          <li>
            <Link href="/">
              <span className="text-white hover:text-blue-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <span className="text-white hover:text-blue-300">Events</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:text-blue-300">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-blue-300">Contact</span>
            </Link>
          </li>
         
        </ul>
      </div>  )
}

export default NavBarUlList