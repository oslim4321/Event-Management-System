import { getSession } from "next-auth/react"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const data = await getSession()
    return NextResponse.json({ message: data })

}