import { getServerSession } from "next-auth/next"
import { handler } from "../../auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/model/User";
import Event from "@/model/Event";

type SessionUser = {
    name: string | undefined;
    email: string;
    image: string | undefined;
};

type SessionType = {
    user: SessionUser;
    // Other session properties if needed
};


export const POST = async (request: Request) => {
    const session: any = await getServerSession<any>(handler);
    try {
        await connect()
        // console.log(session)
        // if (!session) {
        //     return NextResponse.json({
        //         error: "You must be signed in to view the protected content on this page.",
        //     })

        // }
        // // find the organize in user DB

        // const organizer = await User.findOne({ email: session['user'].email });
        // // throw error if not found
        // if (!organizer) {
        //     return NextResponse.json({ error: 'user mot found' })
        // }
        const eventProps = await request.json()

        // create user Event Immediately
        const event = await Event.create(eventProps)

        return NextResponse.json({
            message:
                event,
        })
    } catch (error) {
        return NextResponse.json({
            error: "error occur" + error
        })

    }


}