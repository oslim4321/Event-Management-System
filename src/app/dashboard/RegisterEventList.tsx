"use client";
import { useTypedSelector } from "@/GlobalRedux/store";
import { ImgComp } from "@/components/ImageComp";
import Link from "next/link";
import React from "react";

type RegisteredEvent = {
  amountPaid: number;
  createdAt: string;
  event: string;
  registrationDate: string;
  status: string;
  updatedAt: string;
  img: string;
  eventName: string;
  user: string;
  __v: number;
  _id: string;
};
const RegisterEventList = () => {
  const RegisterEvent = useTypedSelector(
    (state) => state.RegisterEventData.data
  );
  console.log(RegisterEvent, "oeoeo");

  if (RegisterEvent.length < 1) return null;
  return (
    <>
      <h2>All Upcoming Event You Register For</h2>
      <div className=" flex flex-wrap items-center gap-10 mt-20">
        {RegisterEvent.length > 0 ? (
          RegisterEvent.map((elem: RegisteredEvent) => (
            <div
              className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
              key={elem._id}
            >
              <div className="p-1 bg-blue-600 bg-opacity-75 rounded-full">
                <ImgComp
                  src={elem?.img}
                  alt={elem?.eventName}
                  className="w-[80px] h-[80px] rounded-full"
                  width={200}
                />
              </div>

              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">
                  {elem.eventName}
                </h4>
                <div className="text-gray-500">
                  You Paid : ${elem.amountPaid}
                </div>
                <Link href={`/events/${elem.event}`}>
                  <button className=" px-5 py-3 border">View Event</button>
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
