import Comment from "@/model/Comment"
import User from "@/model/User"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"



export const POST = async (request: Request) => {
    try {
        const user = await getServerSession()

        if (!user) {
            return NextResponse.json({ error: 'pls login', status: 404 })
        } else {

            const comment = await request.json()
            const data = await Comment.create(comment)
            return NextResponse.json({ message: data, status: true })
        }


    } catch (error) {
        return NextResponse.json({ error, status: 500 })

    }
}