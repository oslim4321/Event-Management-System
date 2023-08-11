import User from "@/model/User"
import { NextResponse } from "next/server"


export const POST = async (request: Request) => {

    try {
        const { data } = await request.json()

        if (!data.email) {
            return NextResponse.json({ message: 'user not found' }, { status: 404 })

        }
        const user = await User.findOne({ email: data.email })
        return NextResponse.json({ message: user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })

    }
}