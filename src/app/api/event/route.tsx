import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";
import RegisteredEvents from "@/model/RegisteredEvents";
import Event from "@/model/Event";

export const GET = async (request: Request) => {
  try {
    await connect();
    const session: any = await getServerSession<any>(handler);
    console.log(session, "user");

    // const events = await Event.find()
    const [events, registerEvent] = await Promise.all([
      Event.find(),
      RegisteredEvents.find(),
    ]);

    return NextResponse.json({ data: events });
  } catch (error) {
    return NextResponse.json(error);
  }
};
