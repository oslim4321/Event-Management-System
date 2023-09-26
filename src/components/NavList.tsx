"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavList = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  function closeNavOnLargeScreen() {
    if (window.innerWidth >= 668) {
      setIsNavOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", closeNavOnLargeScreen);
    return () => {
      window.removeEventListener("resize", closeNavOnLargeScreen);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="md:hidden">
        <button
          onClick={toggleNav}
          className="text-whitde hover:text-blue-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isNavOpen
            ? "md:flex absolute top-12 left-0 justify-center items-center  bg-blue-500 h-[300px] w-full"
            : "hidden"
        } flex md:flex justify-center flex-col md:flex-row md:items-center md:w-1/2 md:justify-around space-y-2 md:space-y-0 md:space-x-4 z-10 `}
      >
        <li>
          <Link href="/">
            <span className="hover:text-blue-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <span className="hover:text-blue-300">Events</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:text-blue-300">About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-blue-300">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
