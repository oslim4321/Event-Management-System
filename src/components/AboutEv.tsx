import React from "react";
import { ImgComp } from "./ImageComp";

const AboutEv = () => {
  return (
    <div className="w-full md:h-[70vh] h-[100vh] bg-light flex justify-center items-center">
    <div className="container flex flex-col md:flex-row">
      <div className="w-full md:w-1/2  inline-flex justify-center items-center">
        <ImgComp src="/image53.jpg" alt="event" ></ImgComp>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 space-y-8">
  <h1 className="text-left text-3xl font-canv">ABOUT EVENTHORIZON</h1>
  <p className="text-left text-lg font-canv">At EventHorizon, we believe that every event has the potential to be extraordinary. Founded with a passion for creativity and an unwavering commitment to excellence, we have dedicated ourselves to the art of event management.</p>
</div>

    </div>
  </div>
  
  
  
  );
};

export default AboutEv;
