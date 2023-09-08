"use client";
import { format } from "date-fns";
import { ImgComp } from "@/components/ImageComp";
import { EventTypeModel } from "@/utils/typescriptModel";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RegisterEventClick from "./RegisterEventClick";
import { useDispatch } from "react-redux";
import { getAllEvent } from "@/GlobalRedux/Features/AllEvent/SaveAllEvent";
import RegisterEventModal from "./RegisterEventModal";
import { saveSingleEvent } from "@/GlobalRedux/Features/SingleEvent/singleEvent";

const EventList = ({ eventData }: { eventData: EventTypeModel }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvent(eventData));
  }, []);

  const currentDate = new Date();
  // const eventDa = new Date(data?.eventDate)
  // const dd = format(new Date("Wed Aug 23 2023 16:49:49 GMT+0100 (West Africa Standard Time) 'selectedDateTime"), 'MMMM d, yyyy HH:mm a')
  // console.log(dd, 'dd')
  const [eventRegiId, seteventRegiId] = useState("");
  const registerEventClick = async (id: string) => {
    seteventRegiId(id);

    eventData?.map((elem: any) => {
      if (elem._id === id) {
        dispatch(saveSingleEvent(elem));
      }
    });
  };
  return (
    <div>
      {eventRegiId ? (
        <RegisterEventModal seteventRegiId={seteventRegiId} />
      ) : (
        ""
      )}
      <div className="focus:outline-none">
        {/* <!-- Remove py-8 --> */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-center gap-4 justify-center">
            {/* <!-- Card 1 --> */}
            {/* @ts-ignore */}
            {eventData?.map((elem): any => (
              <div
                key={elem._id}
                className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 border relative"
              >
                <div>
                  {/* <img alt="person capturing an image" src="https://cdn.tuk.dev/assets/templates/classNameified/Bitmap (1).png" className="focus:outline-none w-full h-44" /> */}

                  <ImgComp
                    src={elem.image}
                    alt={elem?.eventName}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="focus:outline-none"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <button
                        onClick={() => registerEventClick(elem._id)}
                        className="text-xm"
                      >
                        Register
                      </button>
                      {/* <p className="focus:outline-none text-xs text-yellow-700"></p> */}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="focus:outline-none text-lg font-semibold">
                        {elem?.eventName}
                      </h2>
                      <p className="focus:outline-none text-xs text-gray-600 pl-5">
                        {format(new Date(elem?.eventDate), "MMMM d")}
                      </p>
                    </div>
                    <p className="focus:outline-none text-xs text-gray-600 mt-2">
                      {elem?.eventDesc}
                    </p>
                    <div className="flex mt-4">
                      <div>
                        <p className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          {elem?.eventType}
                        </p>
                      </div>
                      <div className="pl-2 flex justify-between">
                        {elem?.performerNames.length > 0 && (
                          <p className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1 w-full">
                            <span>{elem?.performerNames[0]}...</span>
                          </p>
                        )}
                        <div className="absolute right-5">
                          {currentDate > new Date(elem.eventDate) ? (
                            <p className="text-red-400">OFF</p>
                          ) : (
                            <p>ON</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="focus:outline-none text-indigo-700 text-xs font-semibold">
                        {elem?.eventLocation}
                      </h2>
                      {/* <h3 className="focus:outline-none text-indigo-700 text-xl font-semibold">View Event</h3> */}
                      <Link href={"/events/" + elem._id}>
                        <button className="border p-2">view</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <!-- Card 1 Ends --> */}

            {/* <!-- Card 4 Ends --> */}
          </div>
        </div>
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
      </div>
      {/* <script src="chrome-extension://kgejglhpjiefppelpmljglcjbhoiplfn/shadydom.js"></script>
            <script>
                if (!window.ShadyDOM) window.ShadyDOM = {force: true, noPatch: true };
            </script> */}
    </div>
  );
};

export default EventList;
