"use client";
import { ImgComp } from "@/components/ImageComp";
import { EventTypeModel } from "@/utils/typescriptModel";
import React from "react";
import { format } from "date-fns";
import ProfileAvatar from "@/components/ProfileAvatar";
import RelatedEvents from "./RelatedEvents";
import Comment from "./Comment";
import ReadComments from "./ReadComments";

const FullEvent = ({
  data,
  comment,
}: {
  data: EventTypeModel;
  comment: Comment;
}) => {
  const currentDate = new Date();
  const eventDa = new Date(data?.eventDate);

  return (
    <div>
      <div className="mt-6 bg-gray-50">
        <div className=" px-10 py-6 mx-auto">
          {/* <!--author--> */}
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <div className="flex justify-between">
              <p className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
                {data.eventName}
              </p>
              <p className="md:text-1xl lg:text-3xl xl:text-3xl font-bold text-blue-300">
                {data.guestCount} attendee{data.guestCount !== 1 ? "s" : ""}
              </p>
            </div>

            <a
              href="#_"
              className="block transition duration-200 ease-out transform hovder:scale-110"
            >
              {/* <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" /> */}
              <ImgComp
                src={data.image}
                alt={data.eventName}
                className="object-cover w-full h-[600px] shadow-sm"
              />
            </a>

            {/* <!--post categories--> */}
            <div className="flex items-center justify-start flex-wrap mt-4 mb-4">
              {/* <a href="#" className="px-2 py-1 font-bold bg-blue-400 text-white rounded-lg hover:bg-gray-500 mr-4">{format(new Date(data?.eventDate), 'MMMM d, yyyy HH:mm a')}</a> */}
              <a
                href="#"
                className="px-2 py-1 font-bold bg-blue-400 text-white rounded-lg hover:bg-gray-500 mr-4"
              >
                {format(new Date(data?.eventDate), "MMMM d")}
              </a>
              <a
                href="#"
                className="px-2 py-1 font-bold bg-blue-400 text-white rounded-lg hover:bg-gray-500 mr-4"
              >
                {data.eventLocation}
              </a>
              {/* <a href="#" className="px-2 py-1 font-bold bg-blue-400 text-white rounded-lg hover:bg-gray-500">web development</a> */}
            </div>
            <div className="mt-2">
              {/* <!--post heading--> */}

              {/* <!--post views--> */}
              <div className="flex justify-start items-center mt-2">
                <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                  3000
                </p>
                <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                {currentDate > eventDa ? (
                  <p className="text-sm text-red-400 font-bold ml-5">
                    Sorry, this event has already taken place.
                  </p>
                ) : (
                  <button className="text-sm text-gray-400 font-bold ml-5 border buttonx-2 py-1 ">
                    Register
                  </button>
                )}
              </div>

              {/* <!--author avator--> */}
              <div className="font-light text-gray-600">
                <div className="flex items-center mt-6 mb-6">
                  <ProfileAvatar classStyle={"w-10 h-10"} />
                  <h1 className="font-bold text-gray-700 hover:underline">
                    Posted By {data.lastName} {data.firstName}
                  </h1>
                </div>
              </div>
            </div>

            {/* <!--end post header--> */}
            {/* <!--post content--> */}
            <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
              {/* <!--content body--> */}
              <div>
                <p className="mt-2 p-8">{data?.eventDesc}</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl px-10 mx-auto text-gray-700 mt-4 rounded bg-gray-100">
            <div className="mt-2 p-8">
              <p>Event Location: {data.eventLocation}</p>
              <p>Attire: {data.attire}</p>
              <p>Guest Count: {data.guestCount}</p>
              <p>Special Instructions: {data.specialInstructions}</p>
              {data.eventType === "Birthday" && <p>Age: {data.age}</p>}
              {/* {data.eventType === 'Musical' && ( */}
              <div>
                <p>Musician Names: {data.musicianNames}</p>
                <p>Music Genre: {data.musicGenre}</p>
                <p>Performer Names: {data.performerNames.join(", ")}</p>
                <p>Time: {format(new Date(data.eventDate), "HH:mm a")}</p>
                <p>Event Year: {format(new Date(data.eventDate), "yyyy")}</p>
              </div>
              {/* )} */}
            </div>
          </div>

          {/* <!--related posts--> */}
          <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">
            Related Posts
          </h2>

          <RelatedEvents category={data?.eventType} />

          {/* <!--form form comments--> */}

          <Comment event={data._id} />

          {/* <!--comments--> */}
          {/*  @ts-ignore */}
          {comment ? <ReadComments comment={comment} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default FullEvent;
