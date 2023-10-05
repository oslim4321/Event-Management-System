import React from "react";
import axios from "axios";
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";
import ListMyEvent from "./ListMyEvent";
import ProfileAvatar from "@/components/ProfileAvatar";
import RegisterEventList from "./RegisterEventList";
import { notFound } from "next/navigation";
import EventPosterDashboard from "./EventPosterDashboard";
// import ListMyEvent from './ListMyEvent'

const getData = async () => {
  try {
    const session: any = await getServerSession(handler);
    if (!session) {
      notFound();
    }
    const email: string = session?.user?.email;
    const data: any = await axios.post(
      process.env.BASE_URL + "/api/auth/getUser",
      { data: { email } }
    );
    // console.log(data.message, 'mee')
    return data?.data?.message;
  } catch (error) {
    console.log(error);
    console.log(error);

    throw Error("failed fetch data on");
  }
};
export const metadata = {
  title: "Dashboard page",
  description: "this is oslim Event manager Dashboard page",
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      {data._id && (
        <div className="max-w-[80%] mx-auto">
          <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
            <div className="md:col-span-1 h-48 shadow-xl ">
              <div className="flex w-full h-full relative">
                {/* <img src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png" loading='lazy' className="w-44 h-44 m-auto" alt="" /> */}
                <ProfileAvatar />
              </div>
            </div>
            <div className="relative md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
              <div className="absolute right-10">
                <LogoutButton />
              </div>
              <div className="flex ">
                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                  Name:
                </span>
                <input
                  className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                  value={data?.firstName + " " + data?.lastName}
                  readOnly
                />
              </div>
              <div className="flex ">
                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                  Email:
                </span>
                <input
                  className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                  value={data?.email}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <EventPosterDashboard />

      {/* <ListMyEvent />
      <RegisterEventList /> */}
    </div>
  );
};

export default page;
