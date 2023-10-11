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
    //
    return data?.data?.message;
  } catch (error) {
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
      {data._id && <EventPosterDashboard data={data} />}

      {/* <ListMyEvent />
      <RegisterEventList /> */}
    </div>
  );
};

export default page;
