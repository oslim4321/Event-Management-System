import axios from "axios";
import React from "react";
import FullEvent from "./FullEvent";
import { fetchSingleEvent } from "@/Api/GetSingleEvents";
interface MyObjectType {
  id: string;
}
let getComment = true;

export async function getSingleEvent(id: string) {
  const data: any = await fetchSingleEvent(id, getComment);
  return data;
  // try {
  //     const event: any = await axios.get(process.env.BASE_URL + '/api/event/' + id)
  //     if (!event?.ok) {
  //
  //     }
  //     return event.data

  // } catch (error) {
  //     throw Error("failed to fetch data");

  //     // return error
  //     // throw Error('failed fetch data on')
  // }
}

export async function generateMetadata({ params }: { params: MyObjectType }) {
  const data = await getSingleEvent(params.id);

  return {
    title: data.message?.eventName || "Event Manager",
    description: data.message?.eventDesc,
  };
}

const page = async ({ params }: { params: MyObjectType }) => {
  const { message: data, comment } = await getSingleEvent(params.id);
  return (
    <div>
      {data._id ? <FullEvent data={data} comment={comment} /> : "Error"}
    </div>
  );
};

export default page;
