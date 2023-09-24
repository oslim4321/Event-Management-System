"use client";
import React from "react";
// import { ImgComp } from "./ImageComp";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Herosection = () => {
  const session = useSession();
  const router = useRouter();
  function CreateEvent() {
    if (!session) {
      alert("login to create an events");
    } else {
      router.push("/events/uploadEvent");
    }
  }
  return (
    <div className="h-[100vh] bg-[url('/image.png')] bg-blue-500 flex flex-col justify-center items-center text-white">
    <div className="py-16">
      <div className="container mx-auto sm:px-6 px-2">
        <div className="md:w-full md:text-center px-4 flex flex-col justify-center items-center space-y-8">
          <p className="text-lg sm:text-lg md:text-2xl  font-canv uppercase">
            Your Journey Begins here
          </p>
          <h1 className=" text-3xl md:text-5xl text-center font-bold font-canv">
            CRAFTING UNFORGETTABLE MOMENTS
            </h1>
            <p className="text-lg sm:text-lg md:text-2xl font-canv">
            EVERY DETAIL MATTERS. EVERY MOMENT COUNTS
          </p>
            
          <div className=" space-x-4 space-y-4 mx-auto">
            <button
              onClick={CreateEvent}
              className="border text-white hover:bg-blue-500  p-3 rounded-full text-xl"
            >
              Create an event
            </button>
  
            <Link href={"/events"}>
              <button className="bg-blue-700 hover:bg-blue-500 text-white rounded p-3  text-xl">
                Find an event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Herosection;
