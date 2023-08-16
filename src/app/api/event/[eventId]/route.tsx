import Event from "@/model/Event";
import connect from "@/utils/db"
import { NextResponse } from "next/server";



export const GET = async (request: Request, { params }: any) => {
    const { eventId } = params;
    try {
        connect()
        const singleEvent = await Event.findById(eventId)

        // if (!singleEvent) {
        //     console.log('singleEvent nothing')
        //     return NextResponse.json({ message: 'No Event found' }, { status: 404 })
        // }
        return NextResponse.json({ message: singleEvent })
    } catch (error) {
        return NextResponse.json({ error }, { status: 404 })

    }

}

