"use client";
import Link from "next/link";
import React from "react";

const NavList = () => {
  function handleClick() {
    alert("hello");
  }
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <ul className="flex flex-col md:flex-row items-center w-1/2 justify-around space-y-2 md:space-y-0 md:space-x-4">
        <li onClick={handleClick}>
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
    </div>
  );
};

export default NavList;
