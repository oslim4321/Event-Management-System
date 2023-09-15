"use client";
import { useTypedSelector } from "@/GlobalRedux/store";
import Link from "next/link";
import React from "react";

type RegisteredEvent = {
  amountPaid: number;
  createdAt: string;
  event: string;
  registrationDate: string;
  status: string;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
};
const RegisterEventList = () => {
  const RegisterEvent = useTypedSelector(
    (state) => state.RegisterEventData.data
  );
  console.log(RegisterEvent, "oeoeo");

  return (
    <>
      <h1 className="text-center text-5xl mt-10">Event You Register For</h1>
      <div className=" flex flex-wrap justify-center items-center gap-10 mt-20">
        {RegisterEvent.length > 0 ? (
          RegisterEvent.map((elem: RegisteredEvent) => (
            <div
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              key={elem._id}
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="/docs/images/blog/image-4.jpg"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link href={`/events/${elem.event}`}>
                  <button className="text-white px-5 py-3">View Event</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>YOu have no Upcoming event Registered</p>
        )}
      </div>
    </>
  );
};

export default RegisterEventList;
