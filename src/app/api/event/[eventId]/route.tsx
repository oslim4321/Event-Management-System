import Event from "@/model/Event";
import connect from "@/utils/db"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
    const { eventId } = params;
    try {
        connect()
        console.log(eventId)
        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return NextResponse.json({ message: 'Invalid eventId' }, { status: 400 });
        }
        const userEvent = await Event.find({ organizer: eventId })
        if (!userEvent) {
            return NextResponse.json({ message: 'No Event' }, { status: 404 })
        }
        return NextResponse.json(userEvent)

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
