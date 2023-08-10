import Event from "@/model/Event"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    try {
        await connect()
        const events = await Event.find()

        return NextResponse.json({ data: events })

    } catch (error) {
        return NextResponse.json(error)
    }
}
