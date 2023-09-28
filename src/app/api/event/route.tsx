import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";
import RegisteredEvents from "@/model/RegisteredEvent";
import Event from "@/model/Event";
import User from "@/model/User";

export const POST = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const search = searchParams.get("search");

  let limit = 3;
  const skip = (Number(page) - 1) * limit;
  try {
    await connect();
    const searchFilter = {
      $text: {
        $search: search || "",
        $caseSensitive: false, // Case-insensitive search
        $diacriticSensitive: false, // Accent-insensitive search
      },
    }; // Empty filter if search is not provided
    const { email } = await request.json();

    let user;
    if (email) {
      user = await User.findOne({ email });
    }
    const [events, registerEvent] = await Promise.all([
      Event.find(search ? searchFilter : {})
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: 1 }),
      RegisteredEvents.find({ user: user?._id }).select("event"),
    ]);

    return NextResponse.json({ data: { events, registerEvent } });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
};
