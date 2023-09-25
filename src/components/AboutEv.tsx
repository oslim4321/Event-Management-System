 'use client'
import React, { useRef, useEffect, useState } from "react";
import { ImgComp } from "./ImageComp";
import styles from "./Styles.module.css"; // Import your CSS file

const AboutEv = () => {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsIntersecting(true); // Set to true when the section is in the viewport
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-full md:h-[70vh] h-[100vh] bg-light flex justify-center items-center"
      ref={sectionRef}
    >
      <div className="container flex flex-col md:flex-row">
        <div className={`w-full md:w-1/2 inline-flex justify-center items-center md:p-0 p-5 ${isIntersecting ? styles["image-animation"] : ""}`}>
          <ImgComp src="/image53.jpg" alt="event" />
        </div>
        <div className={`w-full md:w-1/2 flex flex-col justify-center items-center p-5 space-y-8 ${isIntersecting ? styles["text-animation"] : ""}`}>
          <h1 className="text-left text-3xl font-canv">ABOUT EVENTHORIZON</h1>
          <p className="text-left text-lg font-canv">
            At EventHorizon, we believe that every event has the potential to
            be extraordinary. Founded with a passion for creativity and an
            unwavering commitment to excellence, we have dedicated ourselves to
            the art of event management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEv;
