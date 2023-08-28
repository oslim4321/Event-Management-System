// import Event from "@/model/Event";
// import User from "@/model/User";
// import connect from "@/utils/db"
// import { NextResponse } from "next/server";



// export const GET = async (request: Request, { params }: any) => {
//     const { eventId } = params;
//     try {
//         connect()
//         const singleEvent = await Event.findById(eventId)
//         const comment = await Comment.find({ event: eventCommnt })

//         // get the prganizer details
//         const organizer = await User.findById(singleEvent.organizer).select('firstName lastName _id');
//         if (!organizer) {
//             return NextResponse.json({ message: 'user not found' }, { status: 400 })
//         }
//         const user = {
//             userID: organizer._id,
//             firstName: organizer.firstName,
//             lastName: organizer.lastName,
//         };

//         // const result = singleEvent.concat(organizer)
//         const results = { ...singleEvent.toObject(), ...user }
//         // if (!singleEvent) {
//         //     console.log('singleEvent nothing')
//         //     return NextResponse.json({ message: 'No Event found' }, { status: 404 })
//         // }
//         return NextResponse.json({ message: results })
//     } catch (error) {
//         return NextResponse.json({ error }, { status: 500 })

//     }

// }

import Event from "@/model/Event";
import User from "@/model/User";
import Comment from "@/model/Comment"; // Import the Comment model
import connect from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
    const { eventId } = params;
    try {
        connect()

        const [singleEvent, comment] = await Promise.all([
            Event.findById(eventId),
            Comment.find({ event: eventId }), // Use eventId here instead of eventCommnt
        ]);

        const organizer = await User.findById(singleEvent.organizer).select('firstName lastName _id');
        if (!organizer) {
            return NextResponse.json({ message: 'user not found' }, { status: 400 })
        }

        const user = {
            userID: organizer._id,
            firstName: organizer.firstName,
            lastName: organizer.lastName,
        };

        const results = { ...singleEvent.toObject(), ...user }

        return NextResponse.json({ message: results, comment })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
