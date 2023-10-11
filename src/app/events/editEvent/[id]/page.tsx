import React from "react";
import UpdateEvent from "./UpdateEvent";
import { EventTypeModel } from "@/utils/typescriptModel";
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { fetchSingleEvent } from "@/Api/GetSingleEvents";
type MyParams = {
  id: string;
};

const page = async ({ params }: { params: MyParams }) => {
  // const {message} : {message: EventTypeModel} = await getSingleEvent(params.id)
  const { message }: { message: EventTypeModel } = await fetchSingleEvent(
    params.id
  );
  //
  const session: any = await getServerSession(handler);

  if (!session) {
    // return <div className='text-center text-4xl'>Please login</div>
    redirect("/login?callbackURL=/protected/server");
  }

  return (
    <div>
      <UpdateEvent EventData={message} params={params.id} />
    </div>
  );
};

export default page;
