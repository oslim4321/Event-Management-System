import Event from "@/model/Event";
import RegisteredEvents from "@/model/RegisteredEvent";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../../auth/[...nextauth]/route";
import User from "@/model/User";

export const POST = async (request: Request) => {
  const { userId, eventId } = await request.json();
  //
  try {
    await connect();
    // get the user details from server
    const session: any = await getServerSession<any>(handler);
    // if not session that means it unAuthorize ->  loggin
    if (!session) {
      return NextResponse.json({ message: "Unauthorized", status: 404 });
    }
    // const event.find()
    // find the event the user is registering

    const [checkEvent, userData] = await Promise.all([
      Event.findById(eventId),
      User.findById(userId),
    ]);

    // if event is not found, it should throw error
    if (!checkEvent) {
      return NextResponse.json({ message: "Event not found", status: 404 });
    }
    if (!userData) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }
    const currentDate = new Date();

    const res = await RegisteredEvents.create({
      user: userData._id,
      event: eventId,
      eventName: checkEvent.eventName,
      img: checkEvent.image,
      amountPaid: 0,
      registrationDate: currentDate,
    });

    return NextResponse.json({ message: res });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
