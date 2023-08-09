import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    try {

        return NextResponse.json({ message: 'good' })

    } catch (error) {
        return NextResponse.json(error)
    }
}
