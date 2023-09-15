import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";
import RegisteredEvents from "@/model/RegisteredEvent";
import Event from "@/model/Event";
import User from "@/model/User";

export const POST = async (request: Request) => {
  try {
    await connect();

    const { email } = await request.json();

    let user;
    if (email) {
      user = await User.findOne({ email });
    }
    const [events, registerEvent] = await Promise.all([
      Event.find(),
      RegisteredEvents.find({ user: user?._id }).select("event"),
    ]);

    return NextResponse.json({ data: { events, registerEvent } });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
};
