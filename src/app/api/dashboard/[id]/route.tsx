import Event from "@/model/Event";
import connect from "@/utils/db"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
    const { id } = params;
    console.log('req came in')
    try {
        await connect()
        console.log(id, 'event id')
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: 'Invalid id' }, { status: 400 });
        }
        const userEvent = await Event.find({ organizer: id })
        if (!userEvent) {
            console.log('not found')
            return NextResponse.json({ message: 'No Event' }, { status: 404 })
        }
        return NextResponse.json({ message: userEvent })

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
