"use client";
import React from "react";
import { ImgComp } from "./ImageComp";
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
    <div className="h-[70vh] bg-blue-500">
      <div className="bg-blue-500 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between sm:px-6 px-2">
          <div className="md:w-1/2 md:text-left px-4 ">
            <h1 className=" text-xl sm:text-4xl md:text-5xl font-bold lg:pr-8">
              Welcome toEvent Manager - Where Every Moment is a Celebration!
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Whatever you are looking to do this year
            </p>
            <div className="mt-8 space-x-4 space-y-4 mx-auto">
              <button
                onClick={CreateEvent}
                className="bg-purple-600 hover:bg-purple-400 text-white py-2 px-4 rounded-full text-xl"
              >
                Create an event
              </button>

              <Link href={"/events"}>
                <button className="bg-yellow-500 hover:bg-grey-400 text-white py-2 px-4 rounded-full text-xl">
                  Find an event
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            {/* <img
              src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
              alt="Hero Image"
              className="mx-auto w-full md:w-auto max-h-[65vh] rounded-lg"
            /> */}
            <ImgComp
              src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="event"
              className="mx-audto w-full md:w-dauto max-hd-[65vh] rounded-lg"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
