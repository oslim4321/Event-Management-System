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
    <div className="h-[100vh] bg-[url('/image.png')] ">
      <div className="bg-blue-500 bg-opacity-25 w-full h-full flex flex-col justify-center items-center text-white">
        <div className="py-16  ">
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
                {/* <button
                  onClick={CreateEvent}
                  className="border text-white hover:bg-blue-500  p-3 rounded-full text-xl"
                >
                  Create an event
                </button> */}
                <button
                  onClick={CreateEvent}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create an event
                  </span>
                </button>

                <Link href={"/events"}>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    {" "}
                    Find an event
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
