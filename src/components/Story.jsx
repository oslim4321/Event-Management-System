'use client'
import React from 'react';
import { ImgComp } from "./ImageComp";
import styles from "./Styles.module.css";
import { useInView } from "react-intersection-observer";
const Story = () => {
    const [ref, inView] = useInView({
        threshold: 0.5, // Adjust this threshold as needed
    });

  return (
  
    
    <div className="w-full md:h-[70vh] h-[150vh] bg-blue-800 flex justify-center items-center" ref={ref} >
      <div className="container flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <div className={` bg-white w-full h-[100%] md:max-w-md p-8 rounded-lg shadow-lg space-y-5 ${inView ? styles["image-animation"] : ""}`}>
            <ImgComp src="/story.jpg" alt="event" width="100px" height='100px' className='mx-auto rounded'></ImgComp>
            <h2 className="text-3xl font-semibold mb-4 font-canv text-center">
              OUR STORY
            </h2>
            <p className="font-canv">
              Our journey began with a simple yet profound idea: to transform
              ordinary gatherings into unforgettable moments. With years of
              experience in the event industry, we've honed our skills, perfected
              our craft, and built a team of talented professionals who share our
              vision. This is the content of Card 1. You can customize it as needed.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <div  className={` bg-white w-full h-[100%] md:max-w-md p-8 rounded-lg shadow-lg space-y-5 ${inView ? styles["text-animation"] : ""}`}>
            <ImgComp src="/mission.jpg" alt="event"  width="100px" height='100px' className='mx-auto rounded'></ImgComp>
            <h2 className="text-3xl font-semibold mb-4 font-canv text-center">
              OUR MISSION
            </h2>
            <p className="font-canv">
              Our mission is clear: to craft experiences that leave a lasting
              impression. Whether it's a wedding, corporate gala, milestone
              celebration, or a grand product launch, we approach every event as
              an opportunity to create something magical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
