import Event from "@/model/Event";
import axios from "axios"
import { NextResponse } from "next/server";


export const POST = async (request: Request, { params }: any) => {
    // const { eventId } = params;
    console.log('req came in-')
    const { category } = await request.json()
    try {
        const results = await Event.find({ eventType: category })
        console.log(results, 'results')
        return NextResponse.json({ results })
        // const res = axios
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}