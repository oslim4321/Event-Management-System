"use client";
import React from "react";
import { ImgComp } from "./ImageComp";
import { useInView } from "react-intersection-observer";
import styles from "./Styles.module.css"; // Import your CSS file

const AboutEv = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
  });

  return (
    <div
      className={`w-full md:h-[70vh] h-[100vh] bg-light flex justify-center items-center overflow-hidden`}
      ref={ref}
    >
      <div className="container flex flex-col md:flex-row">
        <div
          className={`w-full md:w-1/2 inline-flex  justify-center items-center md:p-0 p-5 ${
            inView ? styles["image-animation"] : ""
          }`}
        >
          <ImgComp src="/image53.jpg" alt="event" />
        </div>
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center items-center p-5 space-y-8 ${
            inView ? styles["text-animation"] : ""
          }`}
        >
          <h1 className="text-left text-3xl font-canv">ABOUT EVENTHORIZON</h1>
          <p className="text-left text-lg font-canv">
            At EventHorizon, we believe that every event has the potential to be
            extraordinary. Founded with a passion for creativity and an
            unwavering commitment to excellence, we have dedicated ourselves to
            the art of event management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEv;
