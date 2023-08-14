import Event from "@/model/Event";
import connect from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
    const { eventId } = params;
    try {
        connect()
        const userEvent = await Event.findOne({ organizer: eventId })
        console.log(userEvent)

        return NextResponse.json(userEvent)

    } catch (error) {
        return NextResponse.json(error)
    }
}
