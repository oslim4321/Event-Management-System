import { fetchSingleEvent } from "@/Api/GetSingleEvents";
import { getSingleEvent } from "@/app/events/[id]/page";
import { ImgComp } from "@/components/ImageComp";
import React from "react";
interface MyObjectType {
  id: string;
}
let getComment = false;
export async function generateMetadata({ params }: { params: MyObjectType }) {
  const data = await fetchSingleEvent(params.id, getComment);
  return {
    title: data.message?.eventName || "Event Manager",
    description: data.message?.eventDesc,
  };
}
const page = async ({ params }: { params: MyObjectType }) => {
  const { message } = await fetchSingleEvent(params.id, getComment);

  return (
    <div>
      {" "}
      {message && (
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="mb-8">
              {/* <img
              src="https://via.placeholder.com/800x400"
              alt="Event Image"
              className="w-full h-64 object-cover rounded-lg"
            /> */}
              <ImgComp
                src={message.image}
                alt={message.eventName}
                className="w-full h-64 object-cover rounded-lg"
                width={500}
                height={500}
              />
            </div>
            <h1 className="text-3xl font-semibold mb-4">{message.eventName}</h1>
            <p className="text-gray-600 mb-4">
              Event Description goes here. This is a placeholder text.
            </p>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <p className="text-gray-600">Location</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <p className="text-gray-600">Date & Time</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                Registered Attendees
              </h2>
              <p className="text-gray-600">50 attendees</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Attendees</h2>
              <ul className="text-gray-600">
                <li>John Doe</li>
                <li>Jane Smith</li>
                <li>Alice Johnson</li>
                <li>Bob Brown</li>
                <li>Emily Davis</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
