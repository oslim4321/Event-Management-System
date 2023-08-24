import Comment from "@/model/Comment"
import connect from "@/utils/db"
import { NextResponse } from "next/server"



export const GET = async (request: Request, { params }: any) => {
    const { eventCommnt } = params
    try {
        await connect()
        const comment = await Comment.find({ event: eventCommnt })
        console.log(comment)
        if (!(comment?.length < 1)) {
            return NextResponse.json({ message: 'No comment' })
        }
        return NextResponse.json({ message: comment })

    } catch (error) {
        return NextResponse.json({ message: error })

    }
}