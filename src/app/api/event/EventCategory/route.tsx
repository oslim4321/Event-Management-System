import Event from "@/model/Event";
import { NextResponse } from "next/server";

export const POST = async (request: Request, { params }: any) => {
  // const { eventId } = params;

  const { category } = await request.json();
  try {
    const results = await Event.find({ eventType: category });

    return NextResponse.json({ results });
    // const res = axios
  } catch (error) {
    return NextResponse.json(error);
  }
};
